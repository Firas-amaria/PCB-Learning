(() => {
  "use strict";
  const lessons = window.HUB_LESSONS;
  const projects = window.HUB_PROJECTS;
  const $ = (id) => document.getElementById(id);
  const escape = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  let memory = {},
    storageOK = true,
    timer = null,
    wsState = "CLOSED",
    wsBusy = false;
  try {
    memory = JSON.parse(localStorage.getItem("embedded-hub-v1") || "{}") || {};
    if (typeof memory !== "object" || Array.isArray(memory)) memory = {};
    localStorage.setItem("embedded-hub-probe", "1");
    localStorage.removeItem("embedded-hub-probe");
  } catch (_) {
    storageOK = false;
  }
  let lang = memory.lang === "en" ? "en" : "ar";
  if (
    !memory.checks ||
    typeof memory.checks !== "object" ||
    Array.isArray(memory.checks)
  )
    memory.checks = {};
  if (
    !memory.projectChecks ||
    typeof memory.projectChecks !== "object" ||
    Array.isArray(memory.projectChecks)
  )
    memory.projectChecks = {};
  const t = (pair) => pair[lang === "en" ? 0 : 1];
  const text = (en, ar) => t([en, ar]);
  function notice(message) {
    $("notice").textContent = message;
  }
  function save() {
    memory.lang = lang;
    try {
      if (!storageOK) throw Error();
      localStorage.setItem("embedded-hub-v1", JSON.stringify(memory));
    } catch (_) {
      storageOK = false;
      notice(
        text(
          "Progress cannot be saved here. You can keep learning in this session.",
          "لا يمكن حفظ التقدم هنا. يمكنك متابعة التعلم في هذه الجلسة.",
        ),
      );
    }
  }
  const prose = (s) =>
    escape(s).replace(
      /\b(?:[A-Za-z_][A-Za-z0-9_]*(?:[.:/()=-][A-Za-z0-9_./():=-]*)*|\d+(?:\.\d+){3})\b/g,
      (token) => `<bdi dir="ltr">${token}</bdi>`,
    );
  const title = (id) => t(lessons.find((l) => l.id === id).title);
  const link = (id, label) =>
    `<a href="#${id}">${escape(label || title(id))}</a>`;
  function flow(active = "") {
    return `<div class="flow" aria-label="${text("Shared project data flow", "تدفق بيانات المشروع المشترك")}">${[
      ["sensor", "Light sensor", "حساس الضوء", "Input", "مدخل"],
      ["device", "ESP32", "ESP32", "Read + decide", "قراءة وقرار"],
      ["server", "Server", "الخادم", "Validate + store", "تحقق وتخزين"],
      ["browser", "Webpage", "صفحة الويب", "Display", "عرض"],
    ]
      .map(
        (x, i) =>
          `${i ? '<b aria-hidden="true">' + (lang === "ar" ? "←" : "→") + "</b>" : ""}<span class="${active === x[0] ? "stage" : ""}" data-stage="${x[0]}">${text(x[1], x[2])}<small>${text(x[3], x[4])}</small></span>`,
      )
      .join("")}</div>`;
  }
  function updateProgress() {
    const total = lessons.reduce((n, l) => n + l.checks.length, 0);
    const done = lessons.reduce(
      (n, l) =>
        n +
        l.checks.filter((_, i) => memory.checks[l.id + "-" + i] === true)
          .length,
      0,
    );
    $("progress").value = Math.round((done / total) * 100);
    $("progress").setAttribute(
      "aria-label",
      text("Learning progress", "تقدم التعلم"),
    );
    $("progress-label").textContent = text(
      `Your progress · ${done}/${total}`,
      `تقدمك · ${done}/${total}`,
    );
  }
  function shell(id) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $("language").textContent = lang === "ar" ? "English" : "العربية";
    $("language").lang = lang === "ar" ? "en" : "ar";
    $("menu").setAttribute(
      "aria-label",
      text("Toggle subject menu", "فتح قائمة المواضيع وإغلاقها"),
    );
    $("search-label").textContent = text("Find a concept", "ابحث عن مفهوم");
    $("search").placeholder = text(
      "Search in Arabic or English…",
      "ابحث بالعربية أو الإنجليزية…",
    );
    $("nav").innerHTML =
      `<a href="#home" ${id === "home" ? 'class="active" aria-current="page"' : ""}>⌂ ${text("Learning home", "الرئيسية")}</a>` +
      lessons
        .map(
          (l) =>
            `<a href="#${l.id}" ${id === l.id ? 'class="active" aria-current="page"' : ""}><span>${l.icon}</span>${escape(t(l.title))}</a>`,
        )
        .join("");
    $("privacy").textContent = text(
      "Saved only in this browser/profile. Moving this folder, switching browsers, or clearing data may affect progress.",
      "محفوظ في هذا المتصفح وملفه الشخصي فقط. قد يؤثر نقل المجلد أو تبديل المتصفح أو مسح بياناته على تقدمك.",
    );
    $("reset").textContent = text("Reset progress", "إعادة ضبط التقدم");
    $("footer").textContent = text(
      "Embedded Learning Hub · Learn locally. Build with understanding. · External reading requires internet.",
      "دليل الأنظمة المدمجة · تعلّم محليًا وابنِ بفهم · تتطلب المراجع الخارجية الإنترنت.",
    );
    updateProgress();
    search();
  }
  function home() {
    const last = lessons.find((l) => l.id === memory.last);
    return `<section class="hero"><span class="eyebrow">${text("YOUR EMBEDDED SYSTEMS FIELD GUIDE", "دليلك العملي للأنظمة المدمجة")}</span><h1>${text("Small concepts.<br>Real things you can build.", "مفاهيم بسيطة.<br>مشاريع تستطيع بناءها.")}</h1><p class="lead">${text("Revisit a lesson, connect the dots, and take your next step with ESP32. Eight chapters: seven practical subjects and three project ideas, at your own pace.", "راجع درسًا، واربط الأفكار، وخذ خطوتك التالية مع ESP32. ثمانية فصول: سبعة مواضيع عملية وثلاث أفكار مشاريع، بالسرعة التي تناسبك.")}</p><div class="actions"><a class="button primary" href="#git">${text("Start with Git", "ابدأ مع Git")} ${lang === "ar" ? "←" : "→"}</a><a class="button" href="#home/subjects">${text("Find a subject", "اختر موضوعًا")}</a>${last ? `<a class="button" href="#${last.id}">${text("Continue: ", "تابع: ")}${escape(t(last.title))}</a>` : ""}</div><p class="tag">${text("Fully offline lessons & simulations · No accounts · No setup", "دروس ومحاكاة دون إنترنت · دون حسابات · دون إعداد")}</p></section><h2>${text("One project connects it all", "مشروع واحد يجمع الأفكار")}</h2><p>${text("Light sensor → ESP32 → server → webpage. The device controls an LED using a light threshold; the webpage shows its reading and state.", "حساس الضوء ← ESP32 ← الخادم ← صفحة الويب. يتحكم الجهاز في LED باستخدام عتبة ضوء، وتعرض الصفحة القراءة والحالة.")}</p>${flow()}<h2 id="subjects">${text("Your learning path", "مسارك للتعلم")}</h2><p>${text("Follow the order below, or jump straight to the subject you need. Nothing is locked.", "اتبع الترتيب أدناه، أو انتقل مباشرة إلى الموضوع الذي تحتاجه. جميع الأقسام متاحة دائمًا.")}</p><div class="cards">${lessons.map((l) => `<a class="card" href="#${l.id}"><span class="number">${l.icon} / 08 · ${l.time} ${text("MIN", "دقيقة")}</span><h3>${escape(t(l.title))} ${lang === "ar" ? "←" : "→"}</h3><p>${prose(t(l.intro))}</p></a>`).join("")}</div>`;
  }
  function codeBlock(code, label) {
    return `<div class="code-wrap"><div class="code-head"><span>${escape(label)}</span><button class="copy">${text("Copy", "نسخ")}</button></div><pre tabindex="0"><code>${escape(code)}</code></pre></div>`;
  }
  function lesson(l) {
    const n = lessons.indexOf(l);
    return `<article class="lesson"><span class="eyebrow">${text("SUBJECT", "الموضوع")} ${l.icon} / 08 · ${l.time} ${text("MIN READ + PRACTICE", "دقيقة للقراءة والتجربة")}</span><h1>${escape(t(l.title))}</h1><p class="lead">${prose(t(l.intro))}</p><div class="anchor-links"><a href="#${l.id}/concepts">${text("Essentials", "الأساسيات")}</a><a href="#${l.id}/practice">${text("Try it", "جرّب بنفسك")}</a><a href="#${l.id}/troubleshoot">${text("Troubleshoot", "حل المشكلات")}</a><a href="#${l.id}/checklist">${text("Checklist", "قائمة التحقق")}</a></div><div class="intro"><h3>${text("Why this matters", "لماذا يهمك هذا؟")}</h3><p>${prose(t(l.why))}</p><strong>${text("Before you begin: ", "قبل أن تبدأ: ")}</strong>${l.prereq.length ? l.prereq.map((id) => link(id)).join(" · ") : text("No previous lesson needed.", "لا تحتاج إلى درس سابق.")}</div><h2 id="concepts">${text("The essentials", "المفاهيم الأساسية")}</h2>${l.concepts.map((c) => `<section class="concept"><h3>${escape(t(c[0]))}</h3><p>${prose(t(c[1]))}</p></section>`).join("")}<h2>${text("A small example", "مثال صغير")}</h2>${codeBlock(l.code, t(l.codeLabel))}<p>${prose(t(l.explain))}</p>${l.id === "gpio" ? sensor() : l.id === "websockets" ? socketDemo() : ""}<section class="exercise" id="practice"><span class="eyebrow">${text("LEARN BY DOING", "تعلّم بالتجربة")}</span><h3>${text("Try it yourself", "جرّب بنفسك")}</h3><p>${prose(t(l.exercise))}</p></section><h2 id="troubleshoot">${text("When things go wrong", "عندما لا تسير الأمور كما توقعت")}</h2>${l.trouble.map((c) => `<details><summary>${escape(t(c[0]))}</summary><p>${prose(t(c[1]))}</p></details>`).join("")}<h2>${text("A little deeper", "خطوة أعمق")}</h2><p>${prose(t(l.extra))}</p>${l.extraCode ? codeBlock(l.extraCode, text("JavaScript · browser helper · backend and caller required", "JavaScript · مساعد للمتصفح · يلزم خادم وشيفرة تستدعيه")) : ""}<h2 id="checklist">${text("Can you do this?", "هل تستطيع فعل هذا؟")}</h2>${l.checks.map((c, i) => `<label class="check"><input type="checkbox" data-check="${l.id}-${i}" ${memory.checks[l.id + "-" + i] === true ? "checked" : ""}><span>${escape(t(c))}</span></label>`).join("")}<h2>${text("Keep exploring", "للمزيد من التعلم")}</h2><p class="tag">${text("Optional reading · Your language first · Internet required · Links researched October 12, 2026", "قراءة اختيارية · المراجع العربية أولًا · تتطلب الإنترنت · بُحثت الروابط في 12 أكتوبر 2026")}</p><ul class="resources">${[
      ...l.resources,
    ]
      .sort(
        (a, b) => (b[1] === lang.toUpperCase()) - (a[1] === lang.toUpperCase()),
      )
      .map(
        (r) =>
          `<li><a href="${r[0]}" target="_blank" rel="noopener noreferrer">${escape(r[lang === "en" ? 3 : 4])} ↗</a><small>${r[1] === "EN" ? text("English", "الإنجليزية") : text("Arabic", "العربية")} · ${r[2] === "video" ? text("Video", "فيديو") : r[2] === "course" ? text("Course", "دورة") : r[2] === "docs" ? text("Documentation", "توثيق") : r[2] === "book" ? text("Book", "كتاب") : text("Tutorial", "درس")} — ${escape(r[lang === "en" ? 5 : 6])}</small></li>`,
      )
      .join(
        "",
      )}</ul>${!l.resources.some((r) => r[1] === "AR") ? `<p class="tag">${text("No suitable Arabic external resource was verified for this section. The full lesson above is available in Arabic.", "لم نتحقق من مرجع عربي خارجي مناسب لهذا القسم. الدرس أعلاه متاح كاملًا بالعربية.")}</p>` : ""}<div class="pager"><a href="#${n ? lessons[n - 1].id : "home"}">${text("Previous: ", "السابق: ")}${n ? escape(t(lessons[n - 1].title)) : text("Home", "الرئيسية")}</a>${n < lessons.length - 1 ? `<a href="#${lessons[n + 1].id}">${text("Next: ", "التالي: ")}${escape(t(lessons[n + 1].title))}</a>` : `<a href="#home">${text("Back to learning home", "العودة للرئيسية")}</a>`}</div></article>`;
  }
  function sensor() {
    return `<section class="demo"><span class="eyebrow">${text("OFFLINE SIMULATION · NO HARDWARE", "محاكاة محلية · دون عتاد")}</span><h2>${text("Find the light threshold", "اكتشف عتبة الضوء")}</h2><p>${text("This simulated 12-bit reading assumes lower means darker. Reversing the physical voltage divider reverses that relationship. These are raw values, not lux.", "تفترض هذه القراءة المحاكية ذات 12 بت أن الأقل يعني ظلامًا أكثر. عكس مقسّم الجهد الفعلي يعكس العلاقة. هذه قيم خام وليست لوكس.")}</p><label for="raw">${text("Simulated raw reading", "القراءة الخام المحاكية")}: <output id="raw-value">1250</output></label><input id="raw" type="range" min="0" max="4095" value="1250"><label for="threshold">${text("Threshold", "العتبة")}: <output id="threshold-value">1800</output></label><input id="threshold" type="range" min="0" max="4095" value="1800"><p id="decision" aria-live="polite"></p><pre id="sensor-json"></pre></section>`;
  }
  function updateSensor() {
    if (!$("raw")) return;
    const raw = Number($("raw").value),
      threshold = Number($("threshold").value),
      on = raw < threshold;
    $("raw-value").value = raw;
    $("threshold-value").value = threshold;
    $("decision").innerHTML =
      `<span class="led ${on ? "on" : ""}"></span><bdi>${raw} &lt; ${threshold} = ${on}</bdi> · ${on ? text("LED on", "LED مضاء") : text("LED off", "LED مطفأ")}`;
    $("sensor-json").textContent = JSON.stringify(
      { deviceId: "esp32-01", lightRaw: raw, ledOn: on },
      null,
      2,
    );
  }
  function socketDemo() {
    return `<section class="demo"><span class="eyebrow">${text("OFFLINE SIMULATION · NOT A REAL CONNECTION", "محاكاة محلية · ليست اتصالًا حقيقيًا")}</span><h2>${text("Follow a live message", "تتبّع رسالة مباشرة")}</h2><p>${text("A simulated device sends a reading; the server validates and relays it to the browser. Connect and send to step through the journey.", "يرسل جهاز محاكًى قراءة، فيتحقق الخادم منها ويمررها إلى المتصفح. صل المحاكاة وأرسل لتتابع الرحلة.")}</p>${flow()}<p id="ws-status" aria-live="polite"></p><div class="actions"><button id="connect">${text("Connect simulation", "وصل المحاكاة")}</button><button id="send" disabled>${text("Send reading", "أرسل قراءة")}</button><button id="disconnect" disabled>${text("Disconnect", "افصل الاتصال")}</button></div><div id="ws-log" class="log" role="status">${text("No messages yet. Connect to begin.", "لا توجد رسائل بعد. صل المحاكاة للبدء.")}</div><pre id="ws-json">${escape(JSON.stringify({ deviceId: "esp32-01", lightRaw: 1250, ledOn: true }, null, 2))}</pre></section>`;
  }
  function wsUI() {
    if (!$("ws-status")) return;
    const labels = {
      CLOSED: ["Disconnected", "غير متصل"],
      CONNECTING: ["Connecting…", "جارٍ الاتصال…"],
      OPEN: ["Connected", "متصل"],
      CLOSING: ["Disconnecting…", "جارٍ الفصل…"],
    };
    $("ws-status").textContent = t(labels[wsState]);
    $("connect").disabled = wsState !== "CLOSED";
    $("send").disabled = wsState !== "OPEN" || wsBusy;
    $("disconnect").disabled = wsState !== "OPEN";
  }
  function route(focus = false) {
    clearTimeout(timer);
    wsState = "CLOSED";
    wsBusy = false;
    const bits = location.hash.slice(1).split("/"),
      id = bits[0] || "home",
      l = lessons.find((x) => x.id === id);
    shell(id);
    $("main").innerHTML =
      id === "home"
        ? home()
        : l
          ? id === "projects"
            ? window.renderProjects(
                { t, text, escape, prose, link, codeBlock, memory },
                bits[1],
              )
            : lesson(l)
          : `<h1>${text("This subject was not found", "لم نعثر على هذا الموضوع")}</h1><p>${text("Choose a subject from the menu or return home.", "اختر موضوعًا من القائمة أو عد إلى الرئيسية.")}</p>${link("home", text("Learning home", "الرئيسية"))}`;
    document.title =
      (l ? t(l.title) : text("Learning home", "الرئيسية")) +
      " | Embedded Learning Hub";
    if (l) {
      memory.last = id;
      save();
    }
    updateSensor();
    wsUI();
    $("sidebar").classList.remove("open");
    $("menu").setAttribute("aria-expanded", "false");
    if (focus) $("main").focus({ preventScroll: true });
    if (bits[1] && $(bits[1]) && $("main").contains($(bits[1])))
      $(bits[1]).scrollIntoView();
    else window.scrollTo(0, 0);
    if (!storageOK) save();
  }
  function normalize(s) {
    return s
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
      .replace(/[أإآ]/g, "ا");
  }
  function search() {
    const query = normalize($("search").value.trim());
    if (!query) {
      $("results").innerHTML = "";
      return;
    }
    const words = query.split(/\s+/);
    const hits = [
      ...lessons,
      ...projects.map((p) => ({ ...p, id: "projects/" + p.id })),
    ].filter((l) => {
      const hay = normalize(JSON.stringify(l));
      return words.every((w) => hay.includes(w));
    });
    $("results").innerHTML = hits.length
      ? `<p>${text("Matching subjects", "مواضيع مطابقة")}: ${hits.length}</p>` +
        hits
          .map(
            (l) =>
              `<a href="#${l.id}">${escape(t(l.title))}<small> — ${escape(t(l.intro).slice(0, 100))}…</small></a>`,
          )
          .join("")
      : `<p>${text("No results. Try GPIO, JSON, server, or a shorter keyword in either language.", "لا توجد نتائج. جرّب GPIO أو JSON أو خادم، أو كلمة أقصر بأي من اللغتين.")}</p>`;
  }
  $("language").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    save();
    route();
  });
  $("menu").addEventListener("click", () => {
    const open = $("sidebar").classList.toggle("open");
    $("menu").setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      $("sidebar").classList.remove("open");
      $("menu").setAttribute("aria-expanded", "false");
    }
  });
  $("search").addEventListener("input", search);
  $("reset").addEventListener("click", () => {
    if (
      confirm(
        text(
          "Reset all learning checklists in this browser?",
          "هل تريد مسح كل قوائم التقدم في هذا المتصفح؟",
        ),
      )
    ) {
      memory.checks = {};
      delete memory.last;
      save();
      route();
      notice(text("Progress reset.", "تمت إعادة ضبط التقدم."));
    }
  });
  $("main").addEventListener("change", (e) => {
    if (e.target.dataset.projectCheck) {
      memory.projectChecks[e.target.dataset.projectCheck] = e.target.checked;
      save();
    }
    if (e.target.dataset.check) {
      memory.checks[e.target.dataset.check] = e.target.checked;
      save();
      updateProgress();
    }
  });
  $("main").addEventListener("input", (e) => {
    if (e.target.id === "raw" || e.target.id === "threshold") updateSensor();
  });
  $("main").addEventListener("click", async (e) => {
    const button = e.target.closest("button");
    if (!button) return;
    if (button.id === "reset-projects") {
      if (
        confirm(
          text(
            "Reset optional project checklists only?",
            "هل تريد مسح قوائم المشاريع الاختيارية فقط؟",
          ),
        )
      ) {
        memory.projectChecks = {};
        save();
        route();
      }
      return;
    }
    if (button.classList.contains("copy")) {
      const code = button.closest(".code-wrap").querySelector("code");
      try {
        if (!navigator.clipboard) throw Error();
        await navigator.clipboard.writeText(code.textContent);
        notice(text("Code copied.", "تم نسخ الشيفرة."));
      } catch (_) {
        const selection = window.getSelection(),
          range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        notice(
          text(
            "Code selected. Press Ctrl+C (or Command+C), or use your browser’s Copy command.",
            "تم تحديد الشيفرة. اضغط Ctrl+C (أو Command+C)، أو استخدم أمر النسخ في المتصفح.",
          ),
        );
      }
      return;
    }
    if (button.id === "connect") {
      wsState = "CONNECTING";
      wsUI();
      timer = setTimeout(() => {
        wsState = "OPEN";
        $("ws-log").textContent = text(
          "Simulation connected. Ready to send.",
          "تم وصل المحاكاة. جاهز للإرسال.",
        );
        wsUI();
      }, 500);
    }
    if (button.id === "disconnect") {
      clearTimeout(timer);
      wsState = "CLOSING";
      wsBusy = false;
      wsUI();
      timer = setTimeout(() => {
        wsState = "CLOSED";
        $("ws-log").textContent = text(
          "Disconnected intentionally. Reconnect manually; a real unexpected failure should use delayed retries. Any last reading is stale.",
          "فُصل الاتصال عمدًا. أعد الاتصال يدويًا؛ أما الفشل غير المتوقع فيستخدم محاولات متباعدة. أي قراءة سابقة قديمة.",
        );
        document
          .querySelectorAll("[data-stage]")
          .forEach((x) => x.classList.remove("stage"));
        wsUI();
      }, 300);
    }
    if (button.id === "send" && wsState === "OPEN") {
      wsBusy = true;
      wsUI();
      let step = 0;
      const stages = ["device", "server", "browser"];
      const messages = [
        [
          "Device sends lightRaw = 1250, ledOn = true.",
          "يرسل الجهاز lightRaw = 1250 وledOn = true.",
        ],
        [
          "Server validates the types and forwards the reading.",
          "يتحقق الخادم من أنواع الحقول ويمرر القراءة.",
        ],
        [
          "Browser receives JSON and displays 1250 · LED on.",
          "يستقبل المتصفح JSON ويعرض 1250 · LED مضاء.",
        ],
      ];
      function advance() {
        document
          .querySelectorAll("[data-stage]")
          .forEach((x) =>
            x.classList.toggle("stage", x.dataset.stage === stages[step]),
          );
        $("ws-log").textContent = t(messages[step]);
        step++;
        if (step < 3) timer = setTimeout(advance, 850);
        else {
          wsBusy = false;
          wsUI();
        }
      }
      advance();
    }
  });
  window.addEventListener("hashchange", () => route(true));
  route();
})();

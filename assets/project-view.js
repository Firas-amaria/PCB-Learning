/* Uses the same rendering helpers as lessons without coupling content to the UI. */
window.renderProjects = function (context, projectId) {
  const { t, text, escape, prose, link, codeBlock, memory } = context;
  const projects = window.HUB_PROJECTS;
  const para = (pair) => `<p>${prose(t(pair))}</p>`;
  const list = (items) =>
    `<ul>${items.map((p) => `<li>${prose(t(p))}</li>`).join("")}</ul>`;
  const section = (en, ar, body) =>
    `<section><h2>${text(en, ar)}</h2>${body}</section>`;
  const common = `<div class="intro"><h3>${text("Offline briefs, real projects", "إرشادات محلية ومشاريع فعلية")}</h3><p>${text("These briefs and diagrams work offline. Running a project needs your ESP32, a separately running project server on the laptop, and an appropriate network connection. Opening this learning website does not create that server.", "تعمل هذه الإرشادات والرسومات دون إنترنت. يحتاج تشغيل المشروع إلى ESP32 وخادم مشروع منفصل يعمل على الحاسوب واتصال شبكة مناسب. فتح موقع التعلم لا ينشئ ذلك الخادم.")}</p></div>`;
  const teamwork = section(
    "Alone or together",
    "بمفردك أو ضمن فريق",
    `<p>${text("Split work flexibly into device code, server and communication, and website and testing. Solo students can handle these responsibilities in sequence. Groups should agree on message names, fields, types, errors, and ownership of state before building separate parts. Use small Git commits to record milestones.", "وزّع العمل بمرونة إلى شيفرة الجهاز، والخادم والاتصال، والموقع والاختبار. يستطيع الطالب المنفرد إنجاز هذه المسؤوليات بالتتابع. اتفقوا في الفريق على أسماء الرسائل وحقولها وأنواعها وأخطائها والجهة المسؤولة عن الحالة قبل بناء الأجزاء منفصلة. استخدموا التزامات Git صغيرة لتوثيق المراحل.")}</p>`,
  );
  const lightweight = section(
    "Keep the ESP32 project lightweight",
    "أبقِ مشروع ESP32 خفيفًا",
    list([
      [
        "Reuse the instructor’s verified JC3248W535EN board and touchscreen starter. Use its verified framework and touchscreen configuration; do not paste Arduino code unchanged into ESP-IDF.",
        "أعد استخدام مشروع المدرّس الموثق للوحة JC3248W535EN وشاشة اللمس. استخدم إطار عمله وإعداد الشاشة الموثقين؛ ولا تلصق شيفرة Arduino دون تعديل في ESP-IDF.",
      ],
      [
        "Use simple text, touch buttons, and basic shapes. Avoid unnecessary images, animations, and libraries.",
        "استخدم نصوصًا وأزرار لمس وأشكالًا بسيطة. تجنب الصور والحركات والمكتبات غير الضرورية.",
      ],
      [
        "Build early and inspect firmware size in actual build output. Too-large firmware/flash usage differs from runtime RAM exhaustion. The number of source files alone does not diagnose either problem.",
        "ابنِ مبكرًا وافحص حجم البرنامج الثابت في خرج البناء الفعلي. تجاوز حجم البرنامج أو ذاكرة Flash يختلف عن نفاد RAM أثناء التشغيل. عدد ملفات المصدر وحده لا يشخّص أيًا منهما.",
      ],
      [
        "Read the actual size or allocation error before changing anything. Do not change partitions or hardware settings blindly.",
        "اقرأ خطأ الحجم أو تخصيص الذاكرة الفعلي قبل التعديل. لا تغيّر أقسام الذاكرة أو إعدادات العتاد عشوائيًا.",
      ],
      [
        "All three projects use the existing touchscreen, computer, and Wi-Fi only. No sensors, external buttons, LEDs, breadboards, or wiring extensions are needed.",
        "تستخدم المشاريع الثلاثة شاشة اللمس الموجودة والحاسوب وWi-Fi فقط. لا تحتاج حساسات أو أزرارًا خارجية أو LED أو لوحات تجارب أو توصيلات إضافية.",
      ],
    ]),
  );
  const optional = `<p class="tag">${text("Project checklists are optional and saved separately. They do not change the seven lesson chapters’ learning progress. Choose one project; you do not need to complete all three.", "قوائم المشاريع اختيارية ومحفوظة منفصلة. لا تغيّر تقدم التعلم في الفصول التعليمية السبعة. اختر مشروعًا واحدًا؛ لا يلزم إكمال المشاريع الثلاثة.")}</p>`;
  const completed = projects.filter((p) =>
    p.checks.every((_, i) => memory.projectChecks[p.id + "-" + i] === true),
  ).length;
  const reset = `<button id="reset-projects" class="quiet">${text("Reset project checklists", "إعادة ضبط قوائم المشاريع")}</button>`;
  if (!projectId)
    return `<article class="lesson"><span class="eyebrow">${text("CHAPTER", "الفصل")} 08 / 08</span><h1>${text("Project Ideas", "أفكار مشاريع")}</h1><p class="lead">${text("Apply chapters 1–6 to a small touchscreen project. Chapter 7 on electronics and sensors is not a prerequisite. Start small, then choose software-only extensions.", "طبّق الفصول 1–6 في مشروع لمس صغير. الفصل السابع عن الإلكترونيات والحساسات ليس متطلبًا سابقًا. ابدأ صغيرًا ثم اختر إضافات برمجية فقط.")}</p><p>${text("Difficulty depends on the features you choose. Each project needs only one existing JC3248W535EN touchscreen, one computer, and Wi-Fi. Work alone or in a group; extra devices are optional.", "تعتمد الصعوبة على الميزات التي تختارها. يحتاج كل مشروع شاشة JC3248W535EN موجودة واحدة وحاسوبًا واحدًا وWi-Fi فقط. اعمل بمفردك أو ضمن فريق؛ والأجهزة الإضافية اختيارية.")}</p>${common}<div class="cards">${projects.map((p) => `<a class="card" href="#projects/${p.id}"><span class="tag">${escape(t(p.difficulty))}</span><h3>${escape(t(p.title))}</h3>${para(p.intro)}<strong>${text("Hardware", "العتاد")}</strong>${para(p.hardware)}<strong>${text("Practice", "المهارات")}</strong><p>${p.subjects.map((id) => escape(t(window.HUB_LESSONS.find((l) => l.id === id).title))).join(" · ")}</p><span>${text("Read project brief →", "اقرأ تفاصيل المشروع ←")}</span></a>`).join("")}</div>${teamwork}${lightweight}<h2>${text("Optional project completion", "إنجاز المشاريع الاختياري")}</h2>${optional}<p id="project-completion">${text(`Completed project checklists: ${completed}/3`, `قوائم المشاريع المكتملة: ${completed}/3`)}</p>${reset}<div class="pager">${link("gpio", text("Previous: GPIO & Sensors", "السابق: GPIO والحساسات"))}${link("home", text("Learning home", "الرئيسية"))}</div></article>`;
  const p = projects.find((p) => p.id === projectId);
  if (!p)
    return `<h1>${text("Project not found", "لم نعثر على المشروع")}</h1>${link("projects", text("Browse project ideas", "تصفح أفكار المشاريع"))}`;
  const n = projects.indexOf(p);
  const diagram = `<div class="flow" role="img" aria-label="${escape(t(p.diagram[0]) + " ↔ " + t(p.diagram[2]) + " ↔ " + t(p.diagram[4]))}"><span>${escape(t(p.diagram[0]))}</span><small>↔<br>${escape(t(p.diagram[1]))}</small><span>${escape(t(p.diagram[2]))}</span><small>↔<br>${escape(t(p.diagram[3]))}</small><span>${escape(t(p.diagram[4]))}</span></div>`;
  return `<article class="lesson"><span class="eyebrow">08 / 08 · ${text("PROJECT BRIEF", "تفاصيل المشروع")}</span><p>${link("projects", text("All project ideas", "كل أفكار المشاريع"))}</p><h1>${escape(t(p.title))}</h1><span class="tag">${text("Suggested difficulty: ", "الصعوبة المقترحة: ")}${escape(t(p.difficulty))}</span>${section("What you will build", "ما الذي ستبنيه؟", para(p.intro))}${section("What you will practice", "ما الذي ستتدرب عليه؟", `<p>${p.subjects.map((id) => link(id)).join(" · ")}</p>`)}${section("Hardware and software", "العتاد والبرمجيات", para(p.hardware) + `<p>${text("Use the verified course starter and existing development tools, a browser, and a project backend you implement with your instructor’s chosen server language and libraries. The laptop can host both the server and browser. No finished project backend is included here.", "استخدم مشروع المقرر الموثق وأدوات التطوير الموجودة ومتصفحًا وخادم مشروع تنفذه بلغة الخادم ومكتباته التي يختارها المدرّس. يمكن للحاسوب تشغيل الخادم والمتصفح معًا. لا يتضمن هذا الدليل خادم مشروع جاهزًا.")}</p>`)}${common}${section("Minimum working version", "النسخة الدنيا العاملة", list(p.minimum))}${diagram}${section("Who does what?", "من يفعل ماذا؟", list(p.roles))}${section("Communication approach", "طريقة الاتصال", para(p.communication))}${section("Build in milestones", "ابنِ على مراحل", `<ol>${p.milestones.map((s) => `<li>${prose(t(s))}</li>`).join("")}</ol>`)}${section("Example message contract", "مثال عقد الرسائل", codeBlock(p.contract, text("Illustrative contract · implement it in your own project", "عقد توضيحي · طبّقه في مشروعك")) + para(p.contractNote))}${section("Manual testing checklist", "قائمة الاختبار اليدوي", optional + p.checks.map((c, i) => `<label class="check"><input type="checkbox" data-project-check="${p.id}-${i}" ${memory.projectChecks[p.id + "-" + i] === true ? "checked" : ""}><span>${escape(t(c))}</span></label>`).join("") + reset)}${section("Common problems", "مشكلات شائعة", p.problems.map((c) => `<details><summary>${escape(t(c[0]))}</summary>${para(c[1])}</details>`).join(""))}${section("Optional software-only extensions", "إضافات برمجية اختيارية", `<p>${text("Choose extensions only after the minimum version works. None is required.", "اختر الإضافات بعد عمل النسخة الدنيا فقط. لا توجد إضافة إلزامية.")}</p>` + list(p.extensions))}${teamwork}${lightweight}<div class="pager">${link(n ? "projects/" + projects[n - 1].id : "projects", text("← Previous brief / overview", "التفاصيل السابقة / النظرة العامة →"))}${link(n < 2 ? "projects/" + projects[n + 1].id : "projects", text("Next brief / overview →", "التفاصيل التالية / النظرة العامة ←"))}</div></article>`;
};

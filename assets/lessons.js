/* Teacher-editable content. Pairs are [English, Arabic]. No network loading. */
window.HUB_LESSONS = [
  {
    id: "git",
    title: ["Git & GitHub", "Git وGitHub"],
    icon: "01",
    time: 20,
    prereq: [],
    intro: [
      "Version control records meaningful snapshots of a project. You can compare changes, recover an earlier idea, and explain what changed.",
      "إدارة الإصدارات (Version control) تحفظ لقطات مفهومة من المشروع. تساعدك على مقارنة التغييرات والرجوع إلى فكرة سابقة ومعرفة ما تغيّر.",
    ],
    why: [
      "Before changing the light-threshold logic, save a working version. If the new behavior fails, the history helps you locate the cause.",
      "احفظ نسخة تعمل قبل تعديل منطق عتبة الضوء. إذا ظهرت مشكلة، يساعدك سجل التغييرات على تحديد سببها.",
    ],
    concepts: [
      [
        [
          "Git is local; GitHub hosts collaboration",
          "Git محلي وGitHub للتعاون",
        ],
        [
          "Git tracks files and history on your computer. GitHub hosts remote repositories and collaboration tools. A repository is a project plus its history; your local copy and the remote copy can differ until you synchronize them.",
          "يتابع Git الملفات وتاريخها على حاسوبك. يستضيف GitHub المستودعات البعيدة وأدوات التعاون. المستودع (Repository) هو مشروع مع سجله؛ وقد تختلف النسخة المحلية (Local) عن البعيدة (Remote) حتى تزامنهما.",
        ],
      ],
      [
        ["Clone or ZIP?", "استنساخ أم ZIP؟"],
        [
          "Cloning downloads a Git repository with history and a remote connection. A ZIP contains a snapshot of files, without the Git history or remote setup. Use ZIP to read this hub; clone when you want to contribute and track changes.",
          "الاستنساخ (Clone) ينزّل المستودع مع تاريخه وربطه بالنسخة البعيدة. ملف ZIP يحتوي لقطة من الملفات دون سجل Git أو إعداد المستودع البعيد. يكفي ZIP لقراءة هذا الدليل؛ استخدم الاستنساخ للمساهمة وتتبع تعديلاتك.",
        ],
      ],
      [
        ["Edit → stage → commit → synchronize", "عدّل ← جهّز ← احفظ ← زامن"],
        [
          "Editing changes your working files. Staging selects changes for the next commit. A commit records those selected changes locally. Pull brings remote changes into your branch; push sends your local commits to the remote. Review status and diff before committing. A diff line starting with minus was removed; plus was added.",
          "التعديل يغيّر ملفات العمل. التجهيز (Stage) يختار التغييرات للحفظ التالي. الالتزام (Commit) يحفظها محليًا. السحب (Pull) يدمج تغييرات المستودع البعيد في فرعك، والدفع (Push) يرسل التزاماتك إليه. راجع الحالة (Status) والفروق (Diff) قبل الحفظ: السالب سطر محذوف والموجب سطر مضاف.",
        ],
      ],
      [
        ["Branches, access, and secrets", "الفروع والصلاحيات والأسرار"],
        [
          "A branch is a separate line of work, useful for experimenting without changing the main branch. Owning a clone does not grant write access to the original repository. Use a repository you own or have permission to write to. Ignore generated .pio/ files and secrets such as Wi-Fi passwords. .gitignore only prevents untracked matching files from being added; it does not erase a committed secret. Revoke or rotate a real exposed secret immediately, then coordinate history cleanup.",
          "الفرع (Branch) مسار عمل منفصل للتجربة دون تعديل الفرع الرئيسي. امتلاك نسخة مستنسخة لا يمنحك صلاحية الدفع إلى الأصل. استخدم مستودعك أو مستودعًا لديك إذن بالكتابة فيه. تجاهل الملفات المولّدة مثل .pio/ والأسرار مثل كلمات مرور Wi-Fi. يمنع .gitignore إضافة الملفات المطابقة غير المتتبعة، لكنه لا يمحو سرًا سبق حفظه. ألغِ السر المكشوف أو بدّله فورًا، ثم نسّق تنظيف السجل.",
        ],
      ],
    ],
    codeLabel: [
      "Terminal · guided workflow · Git installed, writable repository required",
      "الطرفية · خطوات موجهة · يلزم Git ومستودع قابل للكتابة",
    ],
    code: 'git clone YOUR_WRITABLE_REPOSITORY_URL\ncd YOUR_REPOSITORY_FOLDER\ngit status\ngit pull --ff-only\n# Edit README.md in your editor\ngit diff\ngit add README.md\ngit diff --staged\ngit commit -m "Explain light threshold behavior"\ngit push',
    explain: [
      "Replace the two uppercase placeholders with your own repository URL and folder. Edit README.md before staging it. Stage a named file rather than everything. The commit message describes the result. If pull refuses because histories diverged, stop and ask your instructor before rewriting history.",
      "استبدل القيمتين المكتوبتين بأحرف كبيرة برابط مستودعك ومجلده. عدّل README.md قبل تجهيزه. جهّز ملفًا محددًا بدل كل الملفات. تصف رسالة الالتزام النتيجة. إذا رفض السحب بسبب تفرع السجل، اطلب مساعدة المدرّس قبل إعادة كتابة التاريخ.",
    ],
    exercise: [
      "In your own repository, add a sentence describing when the LED turns on. Inspect the diff, commit it, and find the commit on GitHub after pushing. Add .pio/ and secrets.h to .gitignore before creating those files.",
      "أضف في مستودعك جملة تصف متى يضيء LED. راجع الفرق، واحفظ التزامًا، ثم ابحث عنه في GitHub بعد الدفع. أضف .pio/ وsecrets.h إلى .gitignore قبل إنشاء هذه الملفات.",
    ],
    trouble: [
      [
        ["Push rejected", "رُفض الدفع"],
        [
          "Check the remote URL and your write permission. If someone pushed first, pull and resolve conflicts with help. Do not force-push to bypass the problem.",
          "تحقق من رابط المستودع وصلاحية الكتابة. إذا دفع شخص آخر قبلك، اسحب التغييرات وعالج التعارض بمساعدة. لا تستخدم الدفع القسري لتجاوز المشكلة.",
        ],
      ],
      [
        ["My file is missing from the commit", "ملفي غير موجود في الالتزام"],
        [
          "Run git status and git diff --staged. An edited file must be staged before committing; ignored files may not appear as untracked.",
          "نفّذ git status وgit diff --staged. يجب تجهيز الملف المعدّل قبل الالتزام؛ وقد لا تظهر الملفات المتجاهَلة كملفات غير متتبعة.",
        ],
      ],
    ],
    extra: [
      "Use git switch -c threshold-experiment to create an experimental branch. Keep commits small enough that one message explains each change.",
      "أنشئ فرعًا للتجربة باستخدام git switch -c threshold-experiment. اجعل كل التزام صغيرًا بحيث تكفي رسالة واحدة لشرح تغييره.",
    ],
    checks: [
      ["Explain Git versus GitHub", "أشرح الفرق بين Git وGitHub"],
      [
        "Review and commit one intentional change",
        "أراجع تغييرًا مقصودًا وأحفظه",
      ],
      [
        "Explain why ignoring a leaked secret is insufficient",
        "أشرح لماذا لا يكفي تجاهل سر مكشوف",
      ],
    ],
    resources: [
      [
        "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",
        "EN",
        "book",
        "Pro Git: recording changes",
        "Pro Git: تسجيل التغييرات",
        "Understand status, staging, and commits.",
        "فهم الحالة والتجهيز والالتزامات.",
      ],
    ],
  },
  {
    id: "basics",
    title: ["Programming & Client/Server", "البرمجة والعميل والخادم"],
    icon: "02",
    time: 25,
    prereq: ["git"],
    intro: [
      "A program transforms inputs into decisions and actions. A client asks for a service; a server receives requests and returns results.",
      "يحوّل البرنامج المدخلات إلى قرارات وأفعال. العميل (Client) يطلب خدمة، والخادم (Server) يستقبل الطلبات ويعيد نتائجها.",
    ],
    why: [
      "Our shared project reads light, decides whether to turn on an LED, sends a reading to a server, and displays it on a webpage.",
      "يقرأ مشروعنا المشترك الضوء، ويقرر تشغيل LED، ويرسل القراءة إلى خادم، ثم يعرضها في صفحة ويب.",
    ],
    concepts: [
      [
        ["Values, types, and comparisons", "القيم والأنواع والمقارنات"],
        [
          "A variable names a stored value. int holds whole numbers such as a raw sensor reading; float holds fractional values; bool holds true or false. In C++, == compares values while = assigns one. < and >= compare magnitude; && means both conditions must be true, and || means at least one.",
          "المتغيّر (Variable) اسم لقيمة مخزنة. يخزّن int أعدادًا صحيحة مثل القراءة الخام، وfloat قيمًا كسرية، وbool إحدى القيمتين true وfalse. في C++ تقارن == بين قيمتين بينما تسند = قيمة. تقارن < و>= المقدار؛ وتعني && تحقق الشرطين، بينما تكفي مع || صحة أحدهما.",
        ],
      ],
      [
        ["Decisions and repetition", "القرار والتكرار"],
        [
          "if/else chooses a path. A for loop is useful for a known number of repetitions. A while loop repeats while its condition remains true: its body must eventually change that condition or intentionally yield control. An endless busy loop can prevent other work.",
          "تختار if/else مسارًا للتنفيذ. تناسب حلقة for عددًا معلومًا من التكرارات. تكرر while العمل ما دام شرطها صحيحًا: يجب أن يتغير الشرط لاحقًا أو أن تتيح الحلقة تنفيذ مهام أخرى عمدًا. الحلقة المشغولة بلا نهاية قد تمنع بقية العمل.",
        ],
      ],
      [
        [
          "Functions make a decision reusable",
          "الدوال تجعل القرار قابلًا لإعادة الاستخدام",
        ],
        [
          "A function packages a task. Parameters are its inputs; a return value is its output. shouldLight(1250, 1800) returns true because 1250 is below 1800. Keeping the decision separate from reading the sensor makes it easier to reason about.",
          "تجمع الدالة (Function) مهمة محددة. المعاملات (Parameters) مدخلاتها والقيمة المعادة (Return value) ناتجها. تعيد shouldLight(1250, 1800) القيمة true لأن 1250 أقل من 1800. فصل القرار عن قراءة الحساس يجعل فهمه أسهل.",
        ],
      ],
      [
        ["Three places where code runs", "ثلاثة أماكن لتنفيذ الشيفرة"],
        [
          "C/C++ firmware on the ESP32 reads hardware and controls the LED. Server code validates and stores readings. JavaScript in the browser requests data and updates the page. Both the ESP32 and the browser can be clients of the same server. The browser does not execute the ESP32 firmware.",
          "يقرأ البرنامج الثابت (Firmware) بلغة C/C++ على ESP32 العتاد ويتحكم في LED. تتحقق شيفرة الخادم من القراءات وتخزنها. تطلب JavaScript في المتصفح البيانات وتحدّث الصفحة. يمكن أن يكون ESP32 والمتصفح عميلين للخادم نفسه. لا ينفّذ المتصفح برنامج ESP32.",
        ],
      ],
    ],
    codeLabel: [
      "C++ · illustrative device logic · no hardware calls",
      "C++ · منطق توضيحي للجهاز · دون استدعاءات عتاد",
    ],
    code: "bool shouldLight(int raw, int threshold) {\n  return raw < threshold;\n}\n\nint samples[] = {1250, 2100, 1700};\nint darkCount = 0;\nfor (int i = 0; i < 3; i++) {\n  if (shouldLight(samples[i], 1800)) {\n    darkCount++;\n  } else {\n    // This sample is not below the threshold.\n  }\n}\nint remaining = 3;\nwhile (remaining > 0) {\n  remaining--;\n}",
    explain: [
      "The for loop checks three readings; darkCount ends at 2. The while loop ends because remaining decreases. This snippet shows logic, not a complete Arduino sketch. It assumes lower readings mean darker surroundings.",
      "تفحص for ثلاث قراءات؛ وتنتهي darkCount عند 2. تنتهي while لأن remaining تنقص. يوضح المقطع المنطق ولا يمثل برنامج Arduino كاملًا. يفترض أن القراءة الأقل تعني ظلامًا أكثر.",
    ],
    exercise: [
      "Predict the result when raw equals threshold, then try it in the sensor simulation in section 7. Change < to <= on paper: which case changes?",
      "توقع النتيجة عندما تساوي القراءة العتبة، ثم جرّبها في محاكاة الحساس بالقسم 7. استبدل < بـ <= على الورق: أي حالة تتغير؟",
    ],
    trouble: [
      [
        [
          "The condition always behaves strangely",
          "الشرط يتصرف بصورة غير متوقعة",
        ],
        [
          "Check for = instead of ==, and print both compared values. A numeric string in JSON is not the same type as a number.",
          "تحقق من استخدام = بدل ==، واطبع القيمتين المقارَنتين. النص الرقمي في JSON ليس من نوع العدد نفسه.",
        ],
      ],
      [
        ["The program stops responding", "البرنامج لا يستجيب"],
        [
          "Check whether a while condition ever becomes false. Keep hardware loops responsive and avoid long blocking work.",
          "تحقق مما إذا كان شرط while يصبح خاطئًا يومًا ما. اجعل حلقات العتاد سريعة الاستجابة وتجنب العمل الطويل الذي يحجز التنفيذ.",
        ],
      ],
    ],
    extra: [
      "The server can use a different language from the device. They agree on a data contract, not on sharing the same source code.",
      "يمكن أن يستخدم الخادم لغة مختلفة عن الجهاز. يتفق الطرفان على عقد للبيانات، وليس على شيفرة مصدر واحدة.",
    ],
    checks: [
      [
        "Trace a comparison, loop, and function call",
        "أتتبع مقارنة وحلقة واستدعاء دالة",
      ],
      [
        "Locate device, server, and browser responsibilities",
        "أحدد مسؤوليات الجهاز والخادم والمتصفح",
      ],
      [
        "Explain why both device and browser are clients",
        "أشرح لماذا الجهاز والمتصفح عميلان",
      ],
    ],
    resources: [
      [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
        "EN",
        "tutorial",
        "How the web works",
        "كيف تعمل الويب",
        "Connect browser requests to server responses.",
        "ربط طلبات المتصفح باستجابات الخادم.",
      ],
    ],
  },
  {
    id: "esp32",
    title: ["ESP32 & PlatformIO", "ESP32 وPlatformIO"],
    icon: "03",
    time: 20,
    prereq: ["basics"],
    intro: [
      "The ESP32 is a microcontroller: it runs firmware, reads inputs, and controls outputs. PlatformIO organizes the project and its build tools.",
      "ESP32 متحكّم دقيق (Microcontroller) يشغّل برنامجًا ثابتًا ويقرأ المدخلات ويتحكم بالمخرجات. ينظّم PlatformIO المشروع وأدوات بنائه.",
    ],
    why: [
      "A repeatable build and readable serial messages let you separate code problems from connection and wiring problems.",
      "يساعدك البناء القابل للتكرار والخرج التسلسلي الواضح على فصل مشكلات الشيفرة عن مشكلات الاتصال والتوصيل.",
    ],
    concepts: [
      [
        ["Start from the course project", "ابدأ بمشروع المقرر"],
        [
          "The course board is JC3248W535EN, an ESP32-S3 touchscreen board. Use the instructor’s tested starter project for its board definition, flash/PSRAM, display, libraries, and available pins. A generic ESP32-S3 configuration is not proof of compatibility. Do not choose free GPIOs from a generic pinout.",
          "لوحة المقرر هي JC3248W535EN ذات شاشة لمس ومتحكّم ESP32-S3. استخدم مشروع المدرّس المجرّب لتعريف اللوحة والذاكرة وPSRAM والشاشة والمكتبات والأطراف المتاحة. إعداد ESP32-S3 عام لا يثبت التوافق. لا تختَر أطراف GPIO حرة من مخطط عام.",
        ],
      ],
      [
        ["Know the files", "اعرف الملفات"],
        [
          "platformio.ini selects environments, platform, board, framework, monitor speed, and lib_deps dependencies. src/ holds source files such as main.cpp; include/ holds project headers; lib/ holds private libraries. .pio/ is generated build output. Keep the tested dependency versions from the starter.",
          "يحدد platformio.ini بيئات البناء والمنصة واللوحة وإطار العمل وسرعة المراقبة وتبعيات lib_deps. يحتوي src/ ملفات المصدر مثل main.cpp، وinclude/ ترويسات المشروع، وlib/ المكتبات الخاصة. أما .pio/ فناتج بناء مولّد. احتفظ بإصدارات التبعيات المجرّبة في المشروع الأولي.",
        ],
      ],
      [
        ["Build, upload, observe", "ابنِ وارفع وراقب"],
        [
          "Build compiles and links the program without sending it to the board. Upload transfers the firmware over the selected connection. Serial Monitor displays messages from the running device; its baud rate must match Serial.begin. Select the starter’s environment and the correct device port.",
          "البناء (Build) يترجم البرنامج ويربطه دون إرساله إلى اللوحة. الرفع (Upload) ينقل البرنامج الثابت عبر الاتصال المحدد. تعرض المراقبة التسلسلية (Serial Monitor) رسائل الجهاز أثناء التشغيل؛ ويجب أن تطابق سرعتها Serial.begin. اختر بيئة المشروع الأولي ومنفذ الجهاز الصحيح.",
        ],
      ],
      [
        ["Framework and timing matter", "إطار العمل والتوقيت مهمان"],
        [
          "Arduino calls setup() once and loop() repeatedly. Native ESP-IDF enters app_main() and commonly uses FreeRTOS tasks. These frameworks are not interchangeable by pasting code unchanged. In Arduino, configure verified pins with descriptive constants and pinMode in setup. A long delay blocks that task from checking inputs or processing application messages promptly.",
          "يستدعي Arduino الدالة setup() مرة واحدة وloop() مرارًا. يبدأ ESP-IDF الأصلي من app_main() ويستخدم عادة مهام FreeRTOS. لا تنتقل الشيفرة بين الإطارين بمجرد لصقها دون تعديل. في Arduino اضبط الأطراف الموثقة بثوابت واضحة وpinMode داخل setup. يؤخر delay الطويل فحص المدخلات ومعالجة رسائل التطبيق في المهمة نفسها.",
        ],
      ],
    ],
    codeLabel: [
      "C++ · complete Arduino source · tested course Arduino environment required",
      "C++ · مصدر Arduino كامل · يلزم إعداد Arduino المجرّب للمقرر",
    ],
    code: '#include <Arduino.h>\nconst unsigned long REPORT_MS = 1000;\nunsigned long lastReport = 0;\n\nvoid setup() {\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  unsigned long now = millis();\n  if (now - lastReport >= REPORT_MS) {\n    lastReport = now;\n    Serial.println("Device is running");\n  }\n  delay(1);\n}',
    explain: [
      "In a copy of the instructor’s Arduino starter, this can serve as src/main.cpp for a serial-only exercise; it does not initialize the screen. If the starter uses ESP-IDF, ask for the matching exercise instead. Unsigned subtraction measures elapsed time, including normal millis() rollover. The short yield avoids a tight busy loop.",
      "في نسخة من مشروع المدرّس المبني على Arduino، يصلح هذا الملف بوصفه src/main.cpp لتجربة تسلسلية فقط؛ ولا يهيئ الشاشة. إذا كان المشروع يستخدم ESP-IDF فاطلب التجربة المطابقة له. يقيس طرح العددين غير الموقّعين الزمن المنقضي حتى عند التفاف millis() المعتاد. تمنع الوقفة القصيرة حلقة مشغولة بلا توقف.",
    ],
    exercise: [
      "Build the serial-only exercise in a separate copy of the starter. Upload it and open Serial Monitor at 115200. Change the reporting interval to 500 ms and predict the output frequency.",
      "ابنِ التجربة التسلسلية في نسخة منفصلة من المشروع الأولي. ارفعها وافتح المراقبة التسلسلية بسرعة 115200. غيّر الفاصل إلى 500 ملّي ثانية وتوقع تردد الرسائل.",
    ],
    trouble: [
      [
        ["Build error", "خطأ بناء"],
        [
          "Read the first meaningful compiler error: check spelling, missing headers, dependencies, and framework. A USB cable cannot fix a compile error.",
          "اقرأ أول خطأ ترجمة مفيد: تحقق من الأسماء والترويسات والتبعيات وإطار العمل. كابل USB لا يصلح خطأ ترجمة.",
        ],
      ],
      [
        ["Upload error", "خطأ رفع"],
        [
          "Check a data-capable USB cable, selected port, port ownership, and the instructor’s boot procedure. Close other monitors holding the port.",
          "تحقق من كابل USB يدعم البيانات والمنفذ المختار والبرامج التي تستخدمه وإجراء الإقلاع لدى المدرّس. أغلق برامج المراقبة الأخرى التي تحجز المنفذ.",
        ],
      ],
      [
        ["Uploaded but wrong behavior", "تم الرفع لكن السلوك خاطئ"],
        [
          "Check runtime serial output, baud rate, power, and the selected environment. Successful upload does not prove wiring or logic is correct.",
          "راجع رسائل التشغيل وسرعة الاتصال والتغذية والبيئة المختارة. نجاح الرفع لا يثبت صحة التوصيل أو المنطق.",
        ],
      ],
    ],
    extra: [
      "Keep repeated work short. Later you can schedule sensor sampling and network retries with separate elapsed-time checks instead of one long delay.",
      "اجعل العمل المتكرر قصيرًا. يمكنك لاحقًا جدولة قراءة الحساس وإعادة محاولة الشبكة بمؤقتات منفصلة بدل تأخير طويل واحد.",
    ],
    checks: [
      [
        "Identify configuration, source, and generated files",
        "أحدد ملفات الإعداد والمصدر والملفات المولّدة",
      ],
      [
        "Distinguish build, upload, and runtime failures",
        "أميز أعطال البناء والرفع والتشغيل",
      ],
      [
        "Identify the framework before using an example",
        "أحدد إطار العمل قبل استخدام مثال",
      ],
    ],
    resources: [
      [
        "https://docs.platformio.org/en/latest/projectconf.html",
        "EN",
        "docs",
        "platformio.ini reference",
        "مرجع platformio.ini",
        "Look up project configuration fields.",
        "فهم حقول إعداد المشروع.",
      ],
    ],
  },
  {
    id: "network",
    title: ["Networking Basics", "أساسيات الشبكات"],
    icon: "04",
    time: 15,
    prereq: ["basics"],
    intro: [
      "A network lets devices exchange data. Wi-Fi connects a device to a local network; it does not guarantee access to every device or to the internet.",
      "تتيح الشبكة للأجهزة تبادل البيانات. تصل Wi-Fi الجهاز بالشبكة المحلية؛ لكنها لا تضمن الوصول إلى كل جهاز أو إلى الإنترنت.",
    ],
    why: [
      "The ESP32 needs the laptop server’s reachable address, not an address that only works inside the laptop.",
      "يحتاج ESP32 إلى عنوان يمكن الوصول عبره إلى خادم الحاسوب، وليس عنوانًا يعمل داخل الحاسوب وحده.",
    ],
    concepts: [
      [
        ["Router, IP, and port", "الموجّه والعنوان والمنفذ"],
        [
          "A router links networks; a home router often also provides Wi-Fi and assigns local addresses. An IP identifies a network interface. A port identifies a service on that host. Our example laptop is 192.168.1.20 with a server on port 3000; example ESP32 is 192.168.1.42. These are examples, not your actual addresses.",
          "يربط الموجّه (Router) الشبكات؛ وغالبًا يوفر الموجّه المنزلي Wi-Fi ويوزّع العناوين المحلية. يحدد عنوان IP واجهة شبكة، ويحدد المنفذ (Port) خدمة على ذلك المضيف. حاسوب المثال هو 192.168.1.20 وخادمه على المنفذ 3000؛ وESP32 في المثال هو 192.168.1.42. هذه أمثلة وليست عناوين أجهزتك الفعلية.",
        ],
      ],
      [
        ["Read a URL", "اقرأ عنوان URL"],
        [
          "In http://192.168.1.20:3000/api/readings/latest, http is the scheme, 192.168.1.20 the host, 3000 the port, and /api/readings/latest the path. DNS translates names such as example.com into network addresses. A local IP usually cannot be reached directly from the public internet.",
          "في http://192.168.1.20:3000/api/readings/latest يمثل http البروتوكول، و192.168.1.20 المضيف، و3000 المنفذ، و/api/readings/latest المسار. يحوّل DNS أسماء مثل example.com إلى عناوين شبكية. لا يمكن عادة الوصول المباشر إلى عنوان محلي من الإنترنت العام.",
        ],
      ],
      [
        [
          "localhost belongs to the caller",
          "localhost يخص الجهاز الذي يستعمله",
        ],
        [
          "localhost means the device running the code. In browser code on the laptop it means the laptop; in ESP32 code it means the ESP32 itself. A server listening on 127.0.0.1 only accepts local connections. The instructor may configure a LAN interface or 0.0.0.0 (all IPv4 interfaces); clients still use the real laptop IP, never 0.0.0.0 as the destination.",
          "يشير localhost إلى الجهاز الذي ينفّذ الشيفرة. في متصفح الحاسوب يعني الحاسوب؛ وفي شيفرة ESP32 يعني ESP32 نفسه. الخادم الذي يستمع على 127.0.0.1 يقبل اتصالات محلية فقط. قد يضبط المدرّس واجهة الشبكة المحلية أو 0.0.0.0 للاستماع على جميع واجهات IPv4؛ ويستخدم العملاء عنوان الحاسوب الفعلي لا 0.0.0.0 كوجهة.",
        ],
      ],
      [
        ["Check reachability in layers", "افحص الوصول خطوة بخطوة"],
        [
          "Connect both devices to the intended network, check Wi-Fi status and their assigned IPs, then confirm the server is running. Open its endpoint on the laptop and then from another permitted device. A successful ping only checks some network reachability, not whether the API is running; some networks block ping. Recheck the IP after reconnecting.",
          "صل الجهازين بالشبكة المطلوبة وافحص حالة Wi-Fi وعناوينهما، ثم تأكد من تشغيل الخادم. افتح نقطة النهاية على الحاسوب ثم من جهاز آخر مسموح. نجاح ping لا يثبت تشغيل API؛ كما أن بعض الشبكات تمنعه. أعد فحص العنوان بعد إعادة الاتصال.",
        ],
      ],
    ],
    codeLabel: [
      "Practical walkthrough · instructor’s running API server required",
      "خطوات عملية · يلزم خادم API يشغّله المدرّس",
    ],
    code: "Laptop: 192.168.1.20 (example)\nESP32:  192.168.1.42 (example)\nServer: port 3000\n\nhttp://192.168.1.20:3000/api/readings/latest",
    explain: [
      "Replace the example laptop IP with its actual local address. Use the same host and port in the ESP32 configuration. Opening this hub does not start that server.",
      "استبدل عنوان الحاسوب في المثال بعنوانه المحلي الفعلي. استخدم المضيف والمنفذ نفسيهما في إعداد ESP32. فتح هذا الدليل لا يشغّل ذلك الخادم.",
    ],
    exercise: [
      "Draw the laptop, router, and ESP32. Label each address and the server port. Explain what localhost means on each device.",
      "ارسم الحاسوب والموجّه وESP32. اكتب العناوين ومنفذ الخادم. اشرح معنى localhost على كل جهاز.",
    ],
    trouble: [
      [
        ["Connection refused or timeout", "رفض اتصال أو انتهاء مهلة"],
        [
          "Check the actual IP and port, whether the server is running, and whether it listens beyond loopback. A wrong port may reach a different service.",
          "تحقق من IP والمنفذ الفعليين وتشغيل الخادم واستماعه خارج عنوان الاسترجاع المحلي. قد يصلك المنفذ الخاطئ بخدمة أخرى.",
        ],
      ],
      [
        ["Works on laptop only", "يعمل على الحاسوب فقط"],
        [
          "Guest Wi-Fi can isolate clients. Use the instructor-approved network and a narrowly scoped firewall rule for the server port on the trusted private network. Do not disable the firewall as a general fix.",
          "قد تعزل شبكة الضيوف الأجهزة عن بعضها. استخدم شبكة المقرر المسموحة وقاعدة جدار ناري محددة لمنفذ الخادم على الشبكة الخاصة الموثوقة. لا تعطّل الجدار الناري كحل عام.",
        ],
      ],
      [
        ["Stops after a while", "يتوقف بعد مدة"],
        [
          "Check Wi-Fi connection status before sending. Retry after a delay, increase the delay after repeated failures, and show a disconnected state instead of freezing forever.",
          "افحص اتصال Wi-Fi قبل الإرسال. أعد المحاولة بعد مهلة، وزدها مع تكرر الفشل، واعرض حالة انقطاع بدل تجميد البرنامج إلى الأبد.",
        ],
      ],
    ],
    extra: [
      "DHCP addresses can change. For classroom work, ask the instructor about a reserved address or update the client configuration when the laptop IP changes.",
      "قد تتغير العناوين التي يوزعها DHCP. اسأل المدرّس عن حجز عنوان أو حدّث إعداد العميل عندما يتغير عنوان الحاسوب.",
    ],
    checks: [
      ["Explain host, port, and path", "أشرح المضيف والمنفذ والمسار"],
      [
        "Use the laptop IP from another device",
        "أستخدم عنوان الحاسوب من جهاز آخر",
      ],
      [
        "Troubleshoot without disabling the firewall",
        "أشخّص المشكلة دون تعطيل الجدار الناري",
      ],
    ],
    resources: [
      [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
        "EN",
        "tutorial",
        "Networks behind a webpage",
        "الشبكات وراء صفحة الويب",
        "Review DNS and client/server communication.",
        "مراجعة DNS واتصال العميل والخادم.",
      ],
    ],
  },
  {
    id: "http",
    title: ["HTTP APIs", "واجهات HTTP API"],
    icon: "05",
    time: 25,
    prereq: ["network", "basics"],
    intro: [
      "HTTP is a request/response protocol. An API gives programs agreed routes and data formats for exchanging information.",
      "HTTP بروتوكول طلب (Request) واستجابة (Response). توفر واجهة API مسارات وصيغ بيانات متفقًا عليها لتبادل المعلومات بين البرامج.",
    ],
    why: [
      "The ESP32 can submit light readings while a browser retrieves the latest reading from the same server.",
      "يمكن لـ ESP32 إرسال قراءات الضوء بينما يطلب المتصفح أحدث قراءة من الخادم نفسه.",
    ],
    concepts: [
      [
        ["One project, one contract", "مشروع واحد وعقد بيانات واحد"],
        [
          "POST /api/readings submits a reading. GET /api/readings/latest retrieves the latest accepted reading without changing it. An endpoint combines a method and route. Our JSON object has deviceId (string), lightRaw (integer 0–4095 in this 12-bit simulation), and ledOn (Boolean). Numbers and true/false are not quoted strings.",
          "يرسل POST /api/readings قراءة. ويجلب GET /api/readings/latest أحدث قراءة مقبولة دون تغييرها. تجمع نقطة النهاية (Endpoint) طريقة الطلب ومساره (Route). يحتوي كائن JSON على deviceId كنص، وlightRaw كعدد صحيح من 0 إلى 4095 في محاكاتنا ذات 12 بت، وledOn كقيمة منطقية. الأعداد وtrue/false ليست نصوصًا بين علامتي اقتباس.",
        ],
      ],
      [
        ["Headers and validation", "الترويسات والتحقق"],
        [
          "Content-Type: application/json describes the body format. The server parses JSON, checks required keys and types, rejects invalid data, and only then stores the latest reading. Our example returns 200 and the accepted object for a valid POST; GET returns 200 and that object, or 404 if no reading exists yet. Storage can be in memory and disappear on restart.",
          "تصف Content-Type: application/json صيغة جسم الرسالة. يحلل الخادم JSON ويتحقق من المفاتيح المطلوبة وأنواعها ويرفض البيانات غير الصالحة، ثم يخزن أحدث قراءة. يعيد عقدنا 200 والكائن المقبول عند POST صالح؛ ويعيد GET الكائن مع 200 أو 404 إذا لم توجد قراءة بعد. قد يكون التخزين في الذاكرة ويزول بإعادة التشغيل.",
        ],
      ],
      [
        [
          "Status and failure are part of the interface",
          "الحالة والفشل جزء من الواجهة",
        ],
        [
          "200 means success; 400 means a bad request; 404 means a missing route or resource; 500 means a server-side failure. A network timeout has no HTTP response. Check status before parsing; even a 200 response may contain unexpected data. Keep the previous valid reading visibly marked as stale when updates fail.",
          "تعني 200 النجاح، و400 طلبًا غير صالح، و404 مسارًا أو موردًا مفقودًا، و500 عطلًا في الخادم. انتهاء مهلة الشبكة لا يحمل استجابة HTTP. افحص الحالة قبل تحليل البيانات؛ فحتى استجابة 200 قد تحتوي بيانات غير متوقعة. عند الفشل احتفظ بآخر قراءة صالحة مع توضيح أنها قديمة.",
        ],
      ],
      [
        ["Browser CORS", "قيود CORS في المتصفح"],
        [
          "Browsers restrict cross-origin response access. An origin includes scheme, host, and port. A backend must explicitly allow the intended browser origin when needed; file pages can have a null origin. Do not disable browser security or use no-cors to read JSON. Serve a real project UI from the backend or configure a specific development origin. ESP32 HTTP clients are not subject to browser CORS.",
          "تقيّد المتصفحات قراءة الاستجابات بين الأصول المختلفة عبر CORS. يشمل الأصل البروتوكول والمضيف والمنفذ. يجب أن يسمح الخادم بأصل المتصفح المقصود عند الحاجة؛ وقد يكون أصل صفحات الملفات null. لا تعطّل حماية المتصفح ولا تستخدم no-cors لقراءة JSON. قدّم واجهة المشروع الحقيقي من الخادم أو اضبط أصل تطوير محددًا. عميل HTTP على ESP32 لا يخضع لقيود CORS الخاصة بالمتصفح.",
        ],
      ],
    ],
    codeLabel: [
      "HTTP · illustrative wire exchange · backend required",
      "HTTP · تبادل توضيحي على الشبكة · يلزم خادم",
    ],
    code: 'POST /api/readings HTTP/1.1\nHost: 192.168.1.20:3000\nContent-Type: application/json\n\n{"deviceId":"esp32-01","lightRaw":1250,"ledOn":true}\n\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{"deviceId":"esp32-01","lightRaw":1250,"ledOn":true}\n\nGET /api/readings/latest HTTP/1.1\nHost: 192.168.1.20:3000',
    explain: [
      "This abbreviated exchange omits transport details such as body length. GET returns the same stored object. The learning website contains no API backend; the real project needs a separately running server implementing this contract.",
      "يحذف التبادل المختصر تفاصيل نقل مثل طول الجسم. يعيد GET الكائن المخزن نفسه. لا يحتوي موقع التعلم على خادم API؛ يحتاج المشروع الحقيقي إلى خادم منفصل يعمل ويطبق هذا العقد.",
    ],
    extraCode:
      '// Browser JavaScript; serve alongside the real backend.\nasync function latest() {\n  const controller = new AbortController();\n  const timer = setTimeout(() => controller.abort(), 5000);\n  try {\n    const response = await fetch("/api/readings/latest", {\n      signal: controller.signal\n    });\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    const data = await response.json();\n    if (typeof data.deviceId !== "string" || !data.deviceId ||\n        !Number.isInteger(data.lightRaw) || data.lightRaw < 0 ||\n        data.lightRaw > 4095 || typeof data.ledOn !== "boolean") {\n      throw new Error("Invalid reading / قراءة غير صالحة");\n    }\n    return data;\n  } finally {\n    clearTimeout(timer);\n  }\n}\n// Caller must catch errors and display a translated error state.',
    exercise: [
      'Write one valid JSON reading and two invalid ones: a missing lightRaw and a quoted "true". Explain why the server should reject the latter two with 400. Predict GET before any POST.',
      'اكتب قراءة JSON صالحة واثنتين غير صالحتين: واحدة دون lightRaw وأخرى تستخدم "true" كنص. اشرح لماذا يرفضهما الخادم بالحالة 400. توقع نتيجة GET قبل أي POST.',
    ],
    trouble: [
      [
        ["JSON parsing failed", "فشل تحليل JSON"],
        [
          "Inspect the response content type and status. You may have received an HTML error page. Use double quotes for JSON keys and strings, and no trailing commas.",
          "افحص نوع محتوى الاستجابة وحالتها؛ ربما وصلتك صفحة خطأ HTML. استخدم علامتي اقتباس مزدوجتين للمفاتيح والنصوص في JSON، ودون فاصلة زائدة في النهاية.",
        ],
      ],
      [
        ["fetch failed", "فشل fetch"],
        [
          "Separate a network timeout from HTTP errors and CORS. Check the browser console, server availability, route, and allowed origin. fetch does not reject automatically for 404 or 500.",
          "ميّز انتهاء مهلة الشبكة عن أخطاء HTTP وCORS. راجع وحدة تحكم المتصفح وتوفر الخادم والمسار والأصل المسموح. لا ترفض fetch تلقائيًا عند 404 أو 500.",
        ],
      ],
    ],
    extra: [
      "The extra JavaScript function below is an illustrative browser helper, not a standalone page. Its caller must await latest(), display the result, and catch errors. The timeout is always cleared, even when parsing fails.",
      "دالة JavaScript الإضافية أدناه مساعد توضيحي للمتصفح وليست صفحة مستقلة. يجب على المستدعي انتظار latest() وعرض النتيجة والتقاط الأخطاء. يُلغى المؤقت دائمًا حتى عند فشل التحليل.",
    ],
    checks: [
      ["Create a correctly typed JSON object", "أنشئ كائن JSON بأنواع صحيحة"],
      ["Explain GET, POST, and status codes", "أشرح GET وPOST ورموز الحالة"],
      [
        "Distinguish backend requirements from the offline hub",
        "أميز متطلبات الخادم عن دليل التعلم المحلي",
      ],
    ],
    resources: [
      [
        "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
        "EN",
        "docs",
        "HTTP overview",
        "نظرة عامة على HTTP",
        "Understand requests, responses, and headers.",
        "فهم الطلبات والاستجابات والترويسات.",
      ],
      [
        "https://academy.hsoub.com/programming/general/%D9%85%D8%AF%D8%AE%D9%84-%D8%A5%D9%84%D9%89-http-r73/",
        "AR",
        "tutorial",
        "An introduction to HTTP (Hsoub)",
        "مدخل إلى HTTP — أكاديمية حسوب",
        "An Arabic introduction to the protocol.",
        "مدخل عربي إلى البروتوكول.",
      ],
    ],
  },
  {
    id: "websockets",
    title: ["WebSockets", "اتصالات WebSocket"],
    icon: "06",
    time: 20,
    prereq: ["http"],
    intro: [
      "A WebSocket keeps a connection open so either side can send a message. It is useful when the browser should receive new readings as they arrive.",
      "يبقي WebSocket الاتصال مفتوحًا ليتمكن أي طرف من إرسال رسالة. يفيد عندما نريد وصول القراءات الجديدة إلى المتصفح فور توفرها.",
    ],
    why: [
      "The server can broadcast the ESP32’s latest reading to connected browsers without waiting for another browser request.",
      "يمكن للخادم إرسال أحدث قراءة من ESP32 إلى المتصفحات المتصلة دون انتظار طلب جديد منها.",
    ],
    concepts: [
      [
        ["Persistent versus repeated requests", "اتصال مستمر أم طلبات متكررة"],
        [
          "HTTP request/response completes an exchange for each request. Polling repeats GET periodically, even when nothing changed. WebSockets provide persistent two-way messaging after a handshake. A simple project may use HTTP alone; it does not always need both protocols.",
          "تنجز HTTP تبادلًا لكل طلب. يكرر الاستطلاع (Polling) طلب GET دوريًا حتى دون تغيّر البيانات. يتيح WebSocket رسائل ثنائية الاتجاه عبر اتصال مستمر بعد المصافحة (Handshake). قد يكفي HTTP وحده لمشروع بسيط؛ لا نحتاج دائمًا إلى البروتوكولين.",
        ],
      ],
      [
        ["Connection states and JSON", "حالات الاتصال وJSON"],
        [
          "A browser socket moves through CONNECTING, OPEN, CLOSING, and CLOSED. Send only while OPEN. JSON.stringify converts an object to text; JSON.parse reads the received text back into data. Validate parsed fields before updating the UI. A socket message is not automatically a trusted reading.",
          "يمر اتصال المتصفح بحالات CONNECTING ثم OPEN ثم CLOSING وCLOSED. أرسل فقط عند OPEN. تحوّل JSON.stringify الكائن إلى نص، وتعيد JSON.parse النص المستلم إلى بيانات. تحقق من الحقول قبل تحديث الواجهة. رسالة الاتصال ليست تلقائيًا قراءة موثوقة.",
        ],
      ],
      [
        ["Disconnects and transport security", "الانقطاع وأمان النقل"],
        [
          "Show a disconnected state and retain the last reading as stale. Reconnect with delays such as 1, 2, 4, 8 seconds, capped at 30 seconds, with a little randomness. Cancel retries on intentional close. ws:// is unencrypted; wss:// uses TLS. An HTTPS page normally needs wss://.",
          "اعرض حالة الانقطاع واحتفظ بآخر قراءة بوصفها قديمة. أعد الاتصال بعد فواصل مثل 1 و2 و4 و8 ثوانٍ وصولًا إلى سقف 30 ثانية مع عشوائية بسيطة. ألغِ المحاولات عند الإغلاق المقصود. ws:// غير مشفر، وwss:// يستخدم TLS. تحتاج صفحة HTTPS عادة إلى wss://.",
        ],
      ],
    ],
    codeLabel: [
      "JavaScript · browser snippet · real WebSocket backend required",
      "JavaScript · مقطع للمتصفح · يلزم خادم WebSocket حقيقي",
    ],
    code: 'const socket = new WebSocket("ws://192.168.1.20:3000/ws");\nsocket.addEventListener("open", () => {\n  socket.send(JSON.stringify({type: "subscribe", deviceId: "esp32-01"}));\n});\nsocket.addEventListener("message", event => {\n  try {\n    const reading = JSON.parse(event.data);\n    if (reading.deviceId !== "esp32-01" ||\n        !Number.isInteger(reading.lightRaw) ||\n        reading.lightRaw < 0 || reading.lightRaw > 4095 ||\n        typeof reading.ledOn !== "boolean") return;\n    document.querySelector("#light-value").textContent = reading.lightRaw;\n  } catch (error) {\n    console.warn("Invalid message / رسالة غير صالحة", error);\n  }\n});',
    explain: [
      "The example IP must be replaced. The server must implement /ws, understand the subscribe message, and send the same reading object used by HTTP. A real page must provide #light-value and close/error indicators plus reconnect logic; this short snippet focuses on sending and receiving. The simulation below uses no network or hardware.",
      "يجب استبدال عنوان IP التوضيحي. يجب أن يطبق الخادم /ws ويفهم رسالة subscribe ويرسل كائن القراءة نفسه المستخدم مع HTTP. تحتاج الصفحة الفعلية عنصر #light-value ومؤشرات للإغلاق والخطأ ومنطق إعادة الاتصال؛ يركز هذا المقطع القصير على الإرسال والاستقبال. لا تستخدم المحاكاة أدناه شبكة أو عتادًا.",
    ],
    exercise: [
      "Connect the simulation and send a reading. Watch device → server → browser. Disconnect and observe why sending is unavailable, then reconnect manually.",
      "صل المحاكاة وأرسل قراءة. راقب انتقالها من الجهاز إلى الخادم فالمتصفح. افصل الاتصال ولاحظ لماذا لا يتاح الإرسال، ثم أعد الاتصال يدويًا.",
    ],
    trouble: [
      [
        ["Sending before open", "الإرسال قبل فتح الاتصال"],
        [
          "Wait for the open event or check readyState. Constructing a WebSocket does not mean the connection is already open.",
          "انتظر حدث open أو افحص readyState. إنشاء WebSocket لا يعني أن الاتصال أصبح مفتوحًا.",
        ],
      ],
      [
        ["Messages stop arriving", "توقفت الرسائل"],
        [
          "Check close/error events and the server. Avoid immediate retry loops; they can overload the server. Restore subscriptions after reconnecting.",
          "افحص أحداث close/error والخادم. تجنب حلقات المحاولة الفورية التي ترهق الخادم. أعد الاشتراكات بعد استعادة الاتصال.",
        ],
      ],
    ],
    extra: [
      "WebSocket transport preserves message order on a connection, but a reconnect does not recover messages missed while offline. Ask the server for its latest state after reconnecting.",
      "يحافظ نقل WebSocket على ترتيب الرسائل داخل الاتصال، لكن إعادة الاتصال لا تسترجع ما فات أثناء الانقطاع. اطلب أحدث حالة من الخادم بعد العودة.",
    ],
    checks: [
      [
        "Compare polling with a persistent connection",
        "أقارن الاستطلاع بالاتصال المستمر",
      ],
      [
        "Send only when the connection is open",
        "أرسل فقط عندما يكون الاتصال مفتوحًا",
      ],
      [
        "Explain reconnect delay and stale data",
        "أشرح مهلة إعادة الاتصال والبيانات القديمة",
      ],
    ],
    resources: [
      [
        "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications",
        "EN",
        "tutorial",
        "Write a WebSocket client",
        "كتابة عميل WebSocket",
        "Review browser connection and message events.",
        "مراجعة أحداث الاتصال والرسائل في المتصفح.",
      ],
    ],
  },
  {
    id: "gpio",
    title: ["GPIO, Electronics & Sensors", "GPIO والإلكترونيات والحساسات"],
    icon: "07",
    time: 25,
    prereq: ["basics", "esp32"],
    intro: [
      "GPIO means general-purpose input/output. A pin can read or drive a digital signal; suitable ADC pins can measure an analog voltage.",
      "GPIO اختصار للإدخال والإخراج العام. يمكن للطرف قراءة إشارة رقمية أو إخراجها؛ وتستطيع الأطراف المناسبة لمحوّل ADC قياس جهد تماثلي.",
    ],
    why: [
      "A sensor turns a physical condition into an electrical signal. Your program interprets it and decides what the LED should do.",
      "يحوّل الحساس حالة فيزيائية إلى إشارة كهربائية. يفسرها برنامجك ويقرر ما يفعله LED.",
    ],
    concepts: [
      [
        ["Wire safely and verify the board", "وصّل بأمان وتحقق من اللوحة"],
        [
          "Disconnect power before changing wiring. Never connect 5V signals directly to ESP32 GPIO. Use the appropriate 3.3V supply and a shared ground so connected circuits have the same voltage reference. GPIO numbers are not header positions. For JC3248W535EN, use only instructor-verified free pins and the tested board wiring; screen and other onboard functions may already occupy pins.",
          "افصل التغذية قبل تعديل التوصيلات. لا تصل إشارة 5V مباشرة إلى GPIO في ESP32. استخدم تغذية 3.3V المناسبة وأرضيًا مشتركًا (GND) ليكون للدوائر مرجع جهد واحد. أرقام GPIO ليست مواقع الأطراف على الموصل. في JC3248W535EN استخدم فقط الأطراف الحرة التي وثّقها المدرّس وتوصيلاته المجرّبة؛ فقد تشغل الشاشة أو وظائف اللوحة أطرافًا بالفعل.",
        ],
      ],
      [
        ["Digital input and output", "الإدخال والإخراج الرقمي"],
        [
          "Digital input reads HIGH or LOW. Digital output drives a logic level. A button with INPUT_PULLUP and a switch to GND reads HIGH when released and LOW when pressed. An unconnected input can float and change unpredictably. An LED needs correct polarity and a series current-limiting resistor; never connect it directly across a GPIO and ground without one.",
          "يقرأ الإدخال الرقمي HIGH أو LOW، ويقود الإخراج الرقمي مستوى منطقيًا. الزر مع INPUT_PULLUP ومفتاح نحو GND يُقرأ HIGH عند تركه وLOW عند ضغطه. قد يطفو المدخل غير الموصول ويتغير عشوائيًا. يحتاج LED إلى قطبية صحيحة ومقاومة تسلسلية لتحديد التيار؛ لا توصله مباشرة بين GPIO والأرضي دون مقاومة.",
        ],
      ],
      [
        [
          "Analog signals and a photoresistor",
          "الإشارات التماثلية والمقاومة الضوئية",
        ],
        [
          "An ADC converts voltage into a raw number, not lux. A photoresistor changes resistance with light and needs a voltage divider. With a photoresistor toward 3.3V and a fixed resistor toward GND, darkness increases the photoresistor resistance and lowers the midpoint voltage. Reversing the divider reverses the reading direction. Use an instructor-approved divider and ADC configuration; full-scale range and useful accuracy depend on the chip and attenuation.",
          "يحوّل ADC الجهد إلى عدد خام وليس إلى لوكس. تتغير مقاومة المقاومة الضوئية (Photoresistor) مع الضوء وتحتاج إلى مقسّم جهد (Voltage divider). عندما تتصل المقاومة الضوئية نحو 3.3V والمقاومة الثابتة نحو GND، تزيد مقاومتها في الظلام وينخفض جهد النقطة الوسطى. عكس ترتيب المقسّم يعكس اتجاه القراءة. استخدم مقسّمًا وإعداد ADC معتمدين من المدرّس؛ فالمدى والدقة يعتمدان على الشريحة والتوهين.",
        ],
      ],
      [
        [
          "Configure → Read → Interpret → Decide → Act",
          "اضبط ← اقرأ ← فسّر ← قرّر ← نفّذ",
        ],
        [
          "Configure verified pins first, read the ADC, interpret direction, compare with a threshold, then drive the LED. Print raw readings over Serial while changing the light to choose a useful threshold. A temperature sensor is different: a digital sensor returns protocol data; an analog sensor outputs a sensor-specific voltage. Do not reuse the photoresistor threshold or call a raw ADC value degrees. This lesson makes no generic analog temperature conversion.",
          "اضبط الأطراف الموثقة أولًا، ثم اقرأ ADC، وفسّر الاتجاه، وقارن بالعتبة، ثم تحكم في LED. اطبع القراءات الخام عبر Serial أثناء تغيير الضوء لاختيار عتبة مفيدة. حساس الحرارة مختلف: الرقمي يعيد بيانات ببروتوكول، والتماثلي يخرج جهدًا يعتمد على نوع الحساس. لا تعِد استخدام عتبة المقاومة الضوئية ولا تسمّ قراءة ADC درجات حرارة. لا يقدم هذا الدرس تحويلًا عامًا للحرارة التماثلية.",
        ],
      ],
    ],
    codeLabel: [
      "C++ · Arduino fragment · verified pin constants and wiring required",
      "C++ · مقطع Arduino · يلزم تعريف أطراف موثقة وتوصيل صحيح",
    ],
    code: "// Define LIGHT_ADC_PIN and LED_PIN in the tested starter.\nconst int DARK_THRESHOLD = 1800;\n\n// In setup():\npinMode(LED_PIN, OUTPUT);\n\n// In loop(), at your chosen sampling interval:\nint lightRaw = analogRead(LIGHT_ADC_PIN);\nbool ledOn = lightRaw < DARK_THRESHOLD;\ndigitalWrite(LED_PIN, ledOn ? HIGH : LOW);\nSerial.println(lightRaw);",
    explain: [
      "This is not a complete sketch. It assumes an active-high external LED circuit and lower readings in darkness. Use the approved resistor, ADC setup, pin definitions, and Serial initialization from the course starter. 1800 is an example threshold, not a calibration.",
      "هذا ليس برنامجًا كاملًا. يفترض دائرة LED خارجية تعمل عند HIGH وأن القراءة الأقل تعني الظلام. استخدم المقاومة وإعداد ADC وتعريفات الأطراف وتهيئة Serial المعتمدة في المشروع الأولي. القيمة 1800 عتبة مثال وليست معايرة.",
    ],
    exercise: [
      "In the simulation set raw to 1250 and threshold to 1800. Raise raw until the LED turns off. Then make raw equal the threshold. Explain each JSON field.",
      "اضبط القراءة الخام في المحاكاة على 1250 والعتبة على 1800. ارفع القراءة حتى ينطفئ LED، ثم اجعلها مساوية للعتبة. اشرح كل حقل في JSON.",
    ],
    trouble: [
      [
        ["Random or stuck readings", "قراءات عشوائية أو ثابتة"],
        [
          "Disconnect power, then check shared ground, divider midpoint, correct ADC-capable pin, and loose wires. Never solve a stuck reading by applying 5V.",
          "افصل التغذية ثم افحص الأرضي المشترك والنقطة الوسطى للمقسّم وطرف ADC الصحيح والأسلاك المرتخية. لا تعالج قراءة ثابتة بتطبيق 5V.",
        ],
      ],
      [
        ["LED behaves backwards or flickers", "LED يعمل بالعكس أو يومض"],
        [
          "Check polarity, active-low versus active-high wiring, divider direction, and readings near the threshold. A button may also bounce; handle debounce in a real input application.",
          "افحص القطبية والتشغيل عند LOW أو HIGH واتجاه المقسّم والقراءات القريبة من العتبة. قد يهتز تلامس الزر أيضًا؛ عالج ارتداد التلامس في التطبيق الفعلي.",
        ],
      ],
    ],
    extra: [
      "To reduce threshold flicker, use hysteresis: turn on below 1700, turn off above 1900, and keep the previous state between those values. These are example raw thresholds, not lux measurements.",
      "لتقليل الوميض قرب العتبة، استخدم التخلفية (Hysteresis): شغّل تحت 1700 وأطفئ فوق 1900 واحتفظ بالحالة السابقة بينهما. هذه عتبات خام توضيحية وليست قياسات لوكس.",
    ],
    checks: [
      [
        "Explain shared ground and the 3.3V signal limit",
        "أشرح الأرضي المشترك وحد إشارة 3.3V",
      ],
      [
        "Distinguish digital, analog, and calibrated values",
        "أميز القيم الرقمية والتماثلية والمعايرة",
      ],
      [
        "Predict the threshold decision and divider direction",
        "أتوقع قرار العتبة واتجاه مقسّم الجهد",
      ],
    ],
    resources: [
      [
        "https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html",
        "EN",
        "docs",
        "Arduino-ESP32 GPIO",
        "GPIO في Arduino-ESP32",
        "Look up digital input/output functions; not a course-board pin map.",
        "مرجع دوال الإدخال والإخراج؛ وليس مخطط أطراف لوحة المقرر.",
      ],
      [
        "https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html",
        "EN",
        "docs",
        "Arduino-ESP32 ADC",
        "ADC في Arduino-ESP32",
        "Understand raw readings and ADC configuration.",
        "فهم القراءات الخام وإعداد ADC.",
      ],
    ],
  },
];

// Additional complementary reading; the UI puts the selected language first.
const additionalResources = {
  git: [
    [
      "https://satr.tuwaiq.edu.sa/course/ZlKLfufzmW/view",
      "AR",
      "course",
      "Git basics — Satr",
      "أساسيات Git — سطر",
      "Arabic lessons on version control and individual Git workflows; the platform may require sign-in.",
      "دروس عربية عن إدارة الإصدارات والعمل الفردي مع Git؛ قد تتطلب المنصة تسجيل الدخول.",
    ],
    [
      "https://git-scm.com/docs/git-commit",
      "EN",
      "docs",
      "git commit reference",
      "مرجع git commit",
      "Look up staging and commit options after practicing the workflow.",
      "مرجع خيارات الالتزام بعد تجربة خطوات العمل.",
    ],
  ],
  basics: [
    [
      "https://harmash.com/tutorials/cplusplus/conditions",
      "AR",
      "tutorial",
      "C++ conditions — Harmash",
      "الشروط في C++ — هرمش",
      "Practice comparisons and if/else decisions.",
      "تدرّب على المقارنات والقرارات باستخدام if/else.",
    ],
    [
      "https://harmash.com/tutorials/cplusplus/loops",
      "AR",
      "tutorial",
      "C++ loops — Harmash",
      "الحلقات في C++ — هرمش",
      "Explore repetition with for and while.",
      "تعرّف إلى التكرار باستخدام for وwhile.",
    ],
    [
      "https://harmash.com/tutorials/cplusplus/functions",
      "AR",
      "tutorial",
      "C++ functions — Harmash",
      "الدوال في C++ — هرمش",
      "Understand function inputs, calls, and returned values.",
      "افهم مدخلات الدوال واستدعاءها وقيمها المعادة.",
    ],
  ],
  esp32: [
    [
      "https://robojax.com/tutorial_view.php?courseID=3&id=739&lang=ar",
      "AR",
      "tutorial",
      "ESP32 variables and Serial — Robojax",
      "متغيرات ESP32 والمراقبة التسلسلية — Robojax",
      "Arabic written explanation of types and Serial output. Uses a different kit; keep the course board configuration. Embedded video language may differ.",
      "شرح مكتوب بالعربية للأنواع والخرج التسلسلي. يستخدم عدة مختلفة؛ احتفظ بإعداد لوحة المقرر. قد تختلف لغة الفيديو المضمّن.",
    ],
    [
      "https://docs.platformio.org/en/latest/core/quickstart.html",
      "EN",
      "docs",
      "PlatformIO build and upload workflow",
      "خطوات البناء والرفع في PlatformIO",
      "Optional command reference for build, upload, and monitoring; use the tested starter instead of the example board.",
      "مرجع أوامر اختياري للبناء والرفع والمراقبة؛ استخدم المشروع المجرّب بدل لوحة المثال.",
    ],
  ],
  network: [
    [
      "https://harmash.com/posts/networking-basics/?handler=Search",
      "AR",
      "tutorial",
      "Networking basics — Harmash",
      "بعض أساسيات الشبكات — هرمش",
      "An Arabic introduction to networks, IP addresses, and protocols.",
      "مدخل عربي إلى الشبكات وعناوين IP والبروتوكولات.",
    ],
    [
      "https://developer.mozilla.org/en-US/docs/Glossary/DNS",
      "EN",
      "docs",
      "DNS explained — MDN",
      "شرح DNS — MDN",
      "Understand how names relate to IP addresses.",
      "افهم العلاقة بين أسماء النطاقات وعناوين IP.",
    ],
  ],
  http: [
    [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
      "EN",
      "docs",
      "JSON.parse reference — MDN",
      "مرجع JSON.parse — MDN",
      "Practice parsing JSON and recognize invalid JSON syntax.",
      "تدرّب على تحليل JSON وتعرّف إلى أخطاء صيغته.",
    ],
  ],
  websockets: [
    [
      "https://academy.hsoub.com/devops/servers/%D9%85%D8%A7-%D9%87%D9%8A-%D8%AA%D9%82%D9%86%D9%8A%D8%A9-websocket-r660/",
      "AR",
      "video",
      "What is WebSocket? — Hsoub",
      "ما هي تقنية WebSocket — أكاديمية حسوب",
      "An Arabic introduction with JavaScript and Node.js examples; real examples need a server.",
      "مقدمة عربية بأمثلة JavaScript وNode.js؛ تتطلب الأمثلة الفعلية خادمًا.",
    ],
    [
      "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState",
      "EN",
      "docs",
      "WebSocket connection states — MDN",
      "حالات اتصال WebSocket — MDN",
      "Review CONNECTING, OPEN, CLOSING, and CLOSED before sending.",
      "راجع حالات الاتصال قبل إرسال الرسائل.",
    ],
  ],
  gpio: [
    [
      "https://robojax.com/tutorial_view.php?courseID=3&id=705&lang=ar",
      "AR",
      "tutorial",
      "ESP32 light sensor — Robojax",
      "حساس الضوء مع ESP32 — Robojax",
      "Arabic written explanation of a light sensor and LED. Different board: do not copy its pin assignments; use instructor-approved wiring. Embedded video language may differ.",
      "شرح مكتوب بالعربية لحساس الضوء وLED. اللوحة مختلفة: لا تنسخ أرقام أطرافها؛ استخدم توصيلات المدرّس المعتمدة. قد تختلف لغة الفيديو المضمّن.",
    ],
    [
      "https://robojax.com/tutorial_view.php?id=711&lang=ar",
      "AR",
      "tutorial",
      "DHT11 temperature readings — Robojax",
      "قراءات الحرارة بحساس DHT11 — Robojax",
      "Arabic written example of digital temperature readings. Focus on sensor concepts; its LCD, wiring, and pins are not the course board setup.",
      "مثال مكتوب بالعربية لقراءة الحرارة الرقمية. ركّز على مفهوم الحساس؛ فالشاشة والتوصيلات والأطراف ليست إعداد لوحة المقرر.",
    ],
  ],
};
window.HUB_LESSONS.forEach((lesson) =>
  lesson.resources.push(...(additionalResources[lesson.id] || [])),
);

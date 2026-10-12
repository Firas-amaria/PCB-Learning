/* Bilingual project guidance. No additional hardware or finished project solutions. */
const equipment = [
  "Existing JC3248W535EN ESP32-S3 touchscreen, a computer running the server and website, and Wi-Fi. No additional hardware.",
  "شاشة JC3248W535EN بمتحكّم ESP32-S3 الموجودة، وحاسوب يشغّل الخادم والموقع، وشبكة Wi-Fi. دون عتاد إضافي.",
];
const milestones = [
  [
    "Agree on identifiers, message fields, types, responses, and error rules before splitting the work.",
    "اتفق على المعرّفات وحقول الرسائل وأنواعها والردود وقواعد الأخطاء قبل توزيع العمل.",
  ],
  [
    "Build simple text and touchscreen buttons using the instructor’s verified starter.",
    "ابنِ نصوصًا وأزرار لمس بسيطة باستخدام مشروع المدرّس الموثق.",
  ],
  [
    "Run the project server on the computer and test one valid request and its response.",
    "شغّل خادم المشروع على الحاسوب واختبر طلبًا صالحًا واحدًا واستجابته.",
  ],
  [
    "Connect the ESP32 over Wi-Fi using the computer’s reachable address; show connection status.",
    "صل ESP32 عبر Wi-Fi باستخدام عنوان الحاسوب القابل للوصول؛ واعرض حالة الاتصال.",
  ],
  [
    "Build the website controls and display the state returned by the server.",
    "ابنِ عناصر تحكم الموقع واعرض الحالة التي يعيدها الخادم.",
  ],
  [
    "Complete the main interaction on both interfaces using the same authoritative server state.",
    "أكمل التفاعل الرئيسي في الواجهتين باستخدام حالة الخادم المعتمدة نفسها.",
  ],
  [
    "Handle disconnections, duplicate actions, and invalid input with clear messages and delayed retries.",
    "عالج الانقطاع والإجراءات المكررة والمدخلات غير الصالحة برسائل واضحة ومحاولات متباعدة.",
  ],
  [
    "Run the manual checklist and document the contract, configuration, and observed result in Git.",
    "نفّذ قائمة الاختبار اليدوي ووثّق العقد والإعداد والنتيجة المرصودة في Git.",
  ],
];
window.HUB_PROJECTS = [
  {
    id: "hotel",
    title: ["Hotel Room Service & Status System", "نظام خدمات الغرف وحالتها"],
    difficulty: ["Beginner–intermediate", "مبتدئ إلى متوسط"],
    hardware: equipment,
    subjects: ["git", "basics", "esp32", "network", "http"],
    milestones,
    intro: [
      "Use the touchscreen as a hotel room panel. A receptionist manages cleaning and assistance requests on a website. Keep this a classroom prototype, not a booking or payment system.",
      "استخدم شاشة اللمس كلوحة غرفة فندقية. يدير موظف الاستقبال طلبات التنظيف والمساعدة عبر موقع. أبقِه نموذجًا صفيًا لا نظام حجوزات أو مدفوعات.",
    ],
    minimum: [
      [
        "One room with a fixed identifier, such as room-101.",
        "غرفة واحدة بمعرّف ثابت مثل room-101.",
      ],
      [
        "Touchscreen buttons for Request cleaning and Request assistance send the selected request to the server.",
        "يرسل زرا لمس «طلب تنظيف» و«طلب مساعدة» الطلب المختار إلى الخادم.",
      ],
      [
        "The website displays the room number, request type, and current status.",
        "يعرض الموقع رقم الغرفة ونوع الطلب وحالته الحالية.",
      ],
      [
        "The receptionist completes the request; the correct room panel displays the updated status.",
        "يكمل موظف الاستقبال الطلب؛ وتعرض لوحة الغرفة الصحيحة الحالة المحدثة.",
      ],
    ],
    roles: [
      [
        "ESP32: display request buttons, connection status, and request status.",
        "ESP32: عرض أزرار الطلب وحالة الاتصال وحالة الطلب.",
      ],
      [
        "Server: validate requests, assign request IDs, and maintain current state.",
        "الخادم: التحقق من الطلبات وتعيين معرّفاتها وحفظ حالتها الحالية.",
      ],
      [
        "Website: list requests and allow the receptionist to mark them completed.",
        "الموقع: عرض الطلبات وإتاحة تحديدها كمكتملة لموظف الاستقبال.",
      ],
    ],
    diagram: [
      ["Room panel", "لوحة الغرفة"],
      ["Request / status", "طلب / حالة"],
      ["Request store", "مخزن الطلبات"],
      ["List / complete", "عرض / إكمال"],
      ["Reception website", "موقع الاستقبال"],
    ],
    communication: [
      "Begin with HTTP. POST creates a request; the panel checks its status with GET, for example every 3 seconds. The website refreshes the list and submits completion updates. Add WebSocket notifications only as an optional software improvement.",
      "ابدأ بـ HTTP. ينشئ POST طلبًا وتفحص اللوحة حالته عبر GET، مثلًا كل 3 ثوانٍ. يحدّث الموقع القائمة ويرسل تحديثات الإكمال. أضف إشعارات WebSocket فقط كتحسين برمجي اختياري.",
    ],
    contract:
      'POST /api/requests\n{"roomId":"room-101","type":"cleaning"}\n\n201 Created\n{"requestId":"req-1","roomId":"room-101","type":"cleaning","status":"pending"}\n\nGET /api/requests\nGET /api/requests/req-1\n\nPOST /api/requests/req-1/complete\n{}\n\n200 OK\n{"requestId":"req-1","roomId":"room-101","type":"cleaning","status":"completed"}',
    contractNote: [
      "Illustrative contract: type is cleaning or assistance; status is pending or completed. GET list returns an array; GET by ID returns one object. Use Content-Type: application/json for JSON bodies. Reject invalid fields with 400 and unknown request IDs with 404. The panel stores requestId and verifies roomId. Decide and document whether server restart clears state.",
      "عقد توضيحي: النوع cleaning أو assistance والحالة pending أو completed. يعيد GET القائمة كمصفوفة، وGET المعرّف كائنًا واحدًا. استخدم Content-Type: application/json لأجسام JSON. ارفض الحقول غير الصالحة بالحالة 400 والمعرّفات المجهولة بالحالة 404. تحفظ اللوحة requestId وتتحقق من roomId. حدد ووثّق ما إذا كانت إعادة تشغيل الخادم تمسح الحالة.",
    ],
    checks: [
      [
        "Both touch buttons produce the correct request type and room number on the website.",
        "ينتج زرا اللمس نوع الطلب ورقم الغرفة الصحيحين في الموقع.",
      ],
      [
        "Completing a request on the website updates the matching request on the correct panel.",
        "يحدّث إكمال الطلب في الموقع الطلب المطابق على اللوحة الصحيحة.",
      ],
      [
        "Invalid types and unknown IDs return clear errors.",
        "تعيد الأنواع غير الصالحة والمعرّفات المجهولة أخطاء واضحة.",
      ],
      [
        "Server loss shows a connection problem; reconnecting retrieves the current request state.",
        "يظهر فقد الخادم مشكلة اتصال؛ وتسترجع العودة حالة الطلب الحالية.",
      ],
      [
        "Rapid taps and uncertain timeouts are handled without falsely reporting success.",
        "تُعالج النقرات السريعة وانتهاء المهلة غير المؤكد دون ادعاء نجاح وهمي.",
      ],
    ],
    problems: [
      [
        ["Wrong room receives completion", "تصل حالة الإكمال إلى غرفة خاطئة"],
        [
          "Match both roomId and requestId; never display the first request in a global list as the current room’s request.",
          "طابق roomId وrequestId معًا؛ ولا تعتبر أول طلب في القائمة العامة طلب الغرفة الحالية.",
        ],
      ],
      [
        [
          "Duplicate requests after repeated taps",
          "طلبات مكررة بعد نقرات متتالية",
        ],
        [
          "Disable the button while waiting for a response. After an uncertain timeout, refresh state before blindly resending. As an extension, let the server reject duplicate pending requests for the same room and type.",
          "عطّل الزر أثناء انتظار الرد. بعد مهلة غير مؤكدة حدّث الحالة قبل إعادة الإرسال دون تحقق. كإضافة، اجعل الخادم يرفض الطلب المعلّق المكرر للغرفة والنوع نفسيهما.",
        ],
      ],
    ],
    extensions: [
      [
        "Multiple room identifiers on the same prototype.",
        "معرّفات غرف متعددة في النموذج نفسه.",
      ],
      ["Do not disturb status.", "حالة عدم الإزعاج."],
      ["Request history.", "سجل الطلبات."],
      [
        "Prevent duplicate pending requests on the server.",
        "منع الطلبات المعلّقة المكررة في الخادم.",
      ],
    ],
  },
  {
    id: "queue",
    title: ["Queue & Turn Display", "نظام الأدوار والانتظار"],
    difficulty: ["Beginner", "مبتدئ"],
    hardware: equipment,
    subjects: ["git", "basics", "esp32", "network", "http", "websockets"],
    milestones,
    intro: [
      "A website operator advances a service queue while the ESP32 touchscreen shows the current turn. Both interfaces display the server’s number, not separate local counters.",
      "يقدّم مشغّل الموقع دور الانتظار بينما تعرض شاشة ESP32 الدور الحالي. تعرض الواجهتان رقم الخادم لا عدادين محليين منفصلين.",
    ],
    minimum: [
      [
        "A website Next button advances the current turn by one.",
        "يزيد زر «التالي» في الموقع الدور الحالي بمقدار واحد.",
      ],
      [
        "The server stores the authoritative current turn, starting at 0 to mean no turn called yet.",
        "يحفظ الخادم الدور الحالي المعتمد، بدءًا من 0 بمعنى أنه لم يُستدعَ دور بعد.",
      ],
      [
        "The device and website display the same current number and connection status.",
        "يعرض الجهاز والموقع الرقم الحالي نفسه وحالة الاتصال.",
      ],
      [
        "Reset returns the number to 0 only after the operator confirms the action.",
        "تعيد إعادة الضبط الرقم إلى 0 بعد تأكيد المشغّل فقط.",
      ],
    ],
    roles: [
      [
        "ESP32: display the current number and connection status; fetch the latest state on reconnect.",
        "ESP32: عرض الرقم الحالي وحالة الاتصال وجلب أحدث حالة عند العودة.",
      ],
      [
        "Server: own the queue state, validate actions, and apply each accepted action once.",
        "الخادم: إدارة حالة الدور والتحقق من الإجراءات وتطبيق كل إجراء مقبول مرة واحدة.",
      ],
      [
        "Website: provide Next and confirmed Reset controls and show returned state.",
        "الموقع: توفير زري التالي وإعادة الضبط المؤكدة وعرض الحالة المعادة.",
      ],
    ],
    diagram: [
      ["Turn display", "شاشة الدور"],
      ["Fetch / state", "جلب / حالة"],
      ["Queue authority", "مرجع الأدوار"],
      ["Next / reset", "التالي / إعادة ضبط"],
      ["Operator website", "موقع المشغّل"],
    ],
    communication: [
      "Use HTTP polling every 2 seconds for the first version. The operator sends POST actions and both displays render GET state. Reconnection must fetch current state before showing a connected indicator. WebSockets can replace polling for live updates.",
      "استخدم فحص HTTP كل ثانيتين في النسخة الأولى. يرسل المشغّل إجراءات POST وتعرض الواجهتان حالة GET. يجب جلب الحالة الحالية عند العودة قبل عرض مؤشر الاتصال. يمكن استبدال الفحص بـ WebSocket للتحديث المباشر.",
    ],
    contract:
      'GET /api/queue\n200 OK\n{"currentTurn":7}\n\nPOST /api/queue/next\n{"actionId":"operator-1-008"}\n200 OK\n{"currentTurn":8}\n\nPOST /api/queue/reset\n{"actionId":"operator-1-009","confirmed":true}\n200 OK\n{"currentTurn":0}',
    contractNote: [
      "Illustrative HTTP JSON contract. Show a confirmation dialog before reset; cancel sends no request. Require confirmed:true on reset, but remember this flag is not authentication. Generate a fresh actionId for each intended action and reuse it only when retrying that action. The server stores processed IDs and does not increment twice for a retry; return current state. Apply increments atomically. Reject malformed actions with 400. State persistence across server restarts is a separate design choice; reconnecting a device must never reset the queue.",
      "عقد HTTP وJSON توضيحي. اعرض مربع تأكيد قبل إعادة الضبط؛ والإلغاء لا يرسل طلبًا. اشترط confirmed:true لإعادة الضبط لكن هذا الحقل ليس مصادقة. ولّد actionId جديدًا لكل إجراء مقصود وأعد استخدامه فقط عند إعادة محاولة الإجراء نفسه. يحفظ الخادم المعرّفات المعالجة فلا يزيد الرقم مرتين بسبب المحاولة؛ ويعيد الحالة الحالية. طبّق الزيادة كعملية ذرية. ارفض الإجراءات المشوهة بالحالة 400. الاحتفاظ بالحالة بعد إعادة تشغيل الخادم خيار مستقل؛ ويجب ألا تعيد عودة الجهاز ضبط الدور.",
    ],
    checks: [
      [
        "Next advances once and both displays reach the same number.",
        "يزيد التالي الرقم مرة واحدة وتصل الواجهتان إلى الرقم نفسه.",
      ],
      [
        "Cancel reset leaves the state unchanged; confirming resets both displays to 0.",
        "يبقي إلغاء إعادة الضبط الحالة دون تغيير؛ ويعيد التأكيد الواجهتين إلى 0.",
      ],
      [
        "Retrying the same actionId does not advance twice; a new actionId advances again.",
        "لا تزيد إعادة actionId نفسه الرقم مرتين؛ ويزيده معرّف إجراء جديد.",
      ],
      [
        "Disconnect the ESP32, advance from the website, and reconnect: the screen retrieves the current turn.",
        "افصل ESP32 وقدّم الدور من الموقع ثم أعد الاتصال: تسترجع الشاشة الدور الحالي.",
      ],
      [
        "Invalid actions are rejected, and server loss is visible rather than showing old state as live.",
        "تُرفض الإجراءات غير الصالحة ويظهر فقد الخادم بدل وصف الحالة القديمة بأنها مباشرة.",
      ],
    ],
    problems: [
      [
        ["Numbers disagree", "اختلاف الأرقام"],
        [
          "Do not increment a device-local counter. Render server state and fetch it again after reconnection.",
          "لا تزِد عدادًا محليًا على الجهاز. اعرض حالة الخادم واجلبها مجددًا بعد العودة.",
        ],
      ],
      [
        ["One click advances twice", "نقرة واحدة تزيد مرتين"],
        [
          "Disable Next while pending, reuse the actionId for retries, and deduplicate on the server before changing state.",
          "عطّل التالي أثناء الانتظار وأعد استخدام actionId للمحاولة وامنع التكرار في الخادم قبل تغيير الحالة.",
        ],
      ],
    ],
    extensions: [
      ["Track the number of waiting tickets.", "تتبّع عدد تذاكر الانتظار."],
      [
        "Support several service counters with distinct identifiers.",
        "دعم عدة شبابيك خدمة بمعرّفات مختلفة.",
      ],
      [
        "Add a touchscreen action to request a ticket.",
        "إضافة إجراء لمس لطلب تذكرة.",
      ],
      [
        "Improve reconnect recovery with versioned state and live WebSocket updates.",
        "تحسين استعادة الحالة عند العودة بإصدارات للحالة وتحديثات WebSocket مباشرة.",
      ],
    ],
  },
  {
    id: "poll",
    title: [
      "Classroom Poll & Voting System",
      "نظام التصويت والاستطلاعات الصفية",
    ],
    difficulty: ["Beginner–intermediate", "مبتدئ إلى متوسط"],
    hardware: equipment,
    subjects: ["git", "basics", "esp32", "network", "http", "websockets"],
    milestones,
    intro: [
      "A teacher publishes a question on the website and a student answers on the touchscreen. One device is enough to demonstrate the workflow; multiple devices are optional. A classroom device identifier is not secure proof of a person’s identity.",
      "ينشر المدرّس سؤالًا في الموقع ويجيب الطالب عبر شاشة اللمس. يكفي جهاز واحد لعرض دورة العمل؛ وتعدد الأجهزة اختياري. معرّف الجهاز الصفي ليس دليلًا آمنًا على هوية شخص.",
    ],
    minimum: [
      [
        "One active question with two to four choices; the teacher opens and closes voting on the website.",
        "سؤال نشط واحد بخيارين إلى أربعة؛ يفتح المدرّس التصويت ويغلقه من الموقع.",
      ],
      [
        "The screen displays the question and touch answer buttons.",
        "تعرض الشاشة السؤال وأزرار الإجابة باللمس.",
      ],
      [
        "A touch submits a choice; the server validates it and records at most one vote per device for that poll.",
        "ترسل اللمسة اختيارًا؛ ويتحقق الخادم منه ويسجل صوتًا واحدًا كحد أقصى لكل جهاز في الاستطلاع.",
      ],
      [
        "The website displays totals; the device confirms acceptance only after a successful server response.",
        "يعرض الموقع الإجماليات؛ ويؤكد الجهاز قبول الصوت بعد رد نجاح من الخادم فقط.",
      ],
    ],
    roles: [
      [
        "ESP32: show the active poll, submit the selected choice, and display acceptance or an error.",
        "ESP32: عرض الاستطلاع النشط وإرسال الخيار المحدد وإظهار القبول أو الخطأ.",
      ],
      [
        "Server: manage the poll and its open/closed state, validate votes, enforce uniqueness, and calculate totals.",
        "الخادم: إدارة الاستطلاع وحالته المفتوحة أو المغلقة والتحقق من الأصوات وفرض عدم تكرارها وحساب الإجماليات.",
      ],
      [
        "Website: provide teacher question and open/close controls and display results.",
        "الموقع: توفير عناصر السؤال والفتح والإغلاق للمدرّس وعرض النتائج.",
      ],
    ],
    diagram: [
      ["Voting touchscreen", "شاشة التصويت"],
      ["Question / vote", "سؤال / صوت"],
      ["Poll + votes", "استطلاع + أصوات"],
      ["Publish / totals", "نشر / إجماليات"],
      ["Teacher website", "موقع المدرّس"],
    ],
    communication: [
      "Use HTTP POST for votes. Poll GET /api/polls/current for question and open/closed status and GET results for totals, for example every 2 seconds. WebSockets may deliver updates later; they do not replace server vote validation.",
      "استخدم HTTP POST للأصوات. افحص GET /api/polls/current للسؤال وحالة الفتح والإغلاق وGET النتائج للإجماليات، مثلًا كل ثانيتين. يمكن لاحقًا إرسال التحديثات عبر WebSocket؛ لكنه لا يستبدل تحقق الخادم من الأصوات.",
    ],
    contract:
      'POST /api/polls\n{"question":"HTTP or WebSocket? / HTTP أم WebSocket؟","choices":[{"id":"a","text":"HTTP"},{"id":"b","text":"WebSocket"}]}\n201 Created\n{"pollId":"poll-1","open":false}\n\nPOST /api/polls/poll-1/open\n{}\n\nGET /api/polls/current\n200 OK\n{"pollId":"poll-1","question":"HTTP or WebSocket? / HTTP أم WebSocket؟","choices":[{"id":"a","text":"HTTP"},{"id":"b","text":"WebSocket"}],"open":true}\n\nPOST /api/polls/poll-1/votes\n{"deviceId":"esp32-01","choiceId":"a"}\n200 OK\n{"accepted":true,"pollId":"poll-1","choiceId":"a"}\n\nGET /api/polls/poll-1/results\n200 OK\n{"pollId":"poll-1","totals":{"a":1,"b":0}}\n\nPOST /api/polls/poll-1/close\n{}',
    contractNote: [
      "Illustrative JSON contract. Create with 2–4 uniquely identified choices and nonempty bounded text; allow only one active poll. Open/close return 200 with pollId and open. Use 404 for missing polls (including no current poll), 400 for invalid choices or malformed data, and 409 with code POLL_CLOSED for votes after closure. While open, a repeated identical vote returns accepted:true without incrementing; a different choice from the same device returns 409 with ALREADY_VOTED. Enforce uniqueness on (pollId, deviceId) atomically. Keep the basic version’s vote fixed; changing votes is an extension. This trusted classroom prototype does not provide secure voter identity.",
      "عقد JSON توضيحي. أنشئ خيارين إلى أربعة بمعرّفات فريدة ونص غير فارغ ومحدود الطول؛ واسمح باستطلاع نشط واحد فقط. يعيد الفتح والإغلاق 200 مع pollId وopen. استخدم 404 للاستطلاع المفقود بما فيه عدم وجود استطلاع حالي، و400 للاختيار أو البيانات غير الصالحة، و409 مع الرمز POLL_CLOSED للتصويت بعد الإغلاق. أثناء الفتح تعيد إعادة الصوت المطابق accepted:true دون زيادة؛ ويعيد خيار مختلف من الجهاز نفسه 409 مع ALREADY_VOTED. افرض تفرد الزوج (pollId, deviceId) بعملية ذرية. ثبّت الصوت في النسخة الأساسية؛ وتغييره إضافة اختيارية. لا يوفر النموذج الصفي الموثوق هوية ناخب آمنة.",
    ],
    checks: [
      [
        "The published question and all 2–4 choices match on the screen and website.",
        "يتطابق السؤال المنشور وخياراته من 2 إلى 4 في الشاشة والموقع.",
      ],
      [
        "A valid vote increments only its chosen total and confirms acceptance on the device.",
        "يزيد الصوت الصالح إجمالي خياره فقط ويؤكد الجهاز قبوله.",
      ],
      [
        "Duplicate submissions from one device do not inflate totals, including after a timeout and retry.",
        "لا تزيد الإرسالات المكررة من الجهاز نفسه الإجماليات حتى بعد انتهاء مهلة وإعادة المحاولة.",
      ],
      [
        "Closed polls reject new votes; invalid choice IDs and missing polls return clear errors.",
        "ترفض الاستطلاعات المغلقة الأصوات الجديدة؛ وتعيد الخيارات غير الصالحة والاستطلاعات المفقودة أخطاء واضحة.",
      ],
      [
        "Disconnect and reconnect: the device refreshes the active question and voting status before accepting input.",
        "افصل الاتصال وأعده: يحدّث الجهاز السؤال النشط وحالة التصويت قبل قبول الإدخال.",
      ],
    ],
    problems: [
      [
        ["Totals increase on retries", "تزيد الإجماليات مع إعادة المحاولة"],
        [
          "Enforce one stored vote for each pollId/deviceId pair in the server, not just by disabling a touch button.",
          "افرض تخزين صوت واحد لكل زوج pollId/deviceId في الخادم بدل الاكتفاء بتعطيل زر اللمس.",
        ],
      ],
      [
        [
          "A vote uses an old question or arrives after close",
          "صوت لسؤال قديم أو يصل بعد الإغلاق",
        ],
        [
          "Include pollId in the route and check the current server state before accepting. Refresh the screen after POLL_CLOSED or an unknown poll.",
          "ضمّن pollId في المسار وافحص حالة الخادم الحالية قبل القبول. حدّث الشاشة بعد POLL_CLOSED أو استطلاع مجهول.",
        ],
      ],
    ],
    extensions: [
      [
        "Multiple questions with separate poll IDs.",
        "أسئلة متعددة بمعرّفات استطلاع منفصلة.",
      ],
      [
        "Allow changing a vote before close: replace the stored choice and recalculate totals without adding a second vote.",
        "السماح بتغيير الصوت قبل الإغلاق: استبدل الخيار المخزن وأعد حساب الإجماليات دون إضافة صوت ثانٍ.",
      ],
      [
        "Display percentages and handle zero votes without division by zero.",
        "عرض النسب المئوية ومعالجة عدم وجود أصوات دون قسمة على صفر.",
      ],
      [
        "Reveal results only after voting closes, enforcing that rule on the server too.",
        "كشف النتائج بعد إغلاق التصويت فقط مع فرض القاعدة في الخادم أيضًا.",
      ],
    ],
  },
];
window.HUB_LESSONS.push({
  id: "projects",
  icon: "08",
  title: ["Project Ideas", "أفكار مشاريع"],
  time: 20,
  intro: [
    "Three touchscreen projects using only your existing board, computer, and Wi-Fi: room service, queue display, and classroom voting.",
    "ثلاثة مشاريع لمس باستخدام اللوحة الموجودة والحاسوب وWi-Fi فقط: خدمات الغرف وعرض الأدوار والتصويت الصفي.",
  ],
  checks: [],
});

# Embedded Learning Hub | دليل الأنظمة المدمجة

An offline, bilingual reference for beginner ESP32 students. Eight chapters: seven subjects and three project briefs, English/Arabic search, separate optional project checklists, and two interactive simulations. No student installation, account, server, or package manager is needed.

مرجع عربي وإنجليزي يعمل دون إنترنت لطلاب ESP32 المبتدئين. ثمانية فصول: سبعة مواضيع وثلاث أفكار مشاريع، وبحث باللغتين، وقوائم مشاريع اختيارية منفصلة، ومحاكاتان تفاعليتان. لا يحتاج الطالب إلى تثبيت أدوات أو حساب أو خادم.

## Open / افتح

1. Clone or copy the repository folder; keep all website files together.
2. On Windows, double-click **Open Learning Hub.exe**. It opens the default browser and exits.
3. On any desktop platform, double-click **index.html** as the direct fallback.
4. Arabic is the initial language; use **English** in the header to switch without leaving the subject.

5. استنسخ مجلد المستودع أو انسخه، واحتفظ بجميع ملفات الموقع معًا.
6. في Windows انقر مرتين على **Open Learning Hub.exe**. يفتح المتصفح الافتراضي ثم ينتهي.
7. يمكنك أيضًا النقر مرتين على **index.html** مباشرة.
8. العربية هي اللغة الأولى؛ اضغط **English** للتبديل مع البقاء في الموضوع نفسه.

The lessons, styles, code examples, search, and simulations are local. Only optional external reading needs internet. The learning website has no backend. Real HTTP/WebSocket examples require a separate instructor-provided server; simulations do not connect to hardware.

الدروس والتنسيق والأمثلة والبحث والمحاكاة محلية. تحتاج المراجع الخارجية الاختيارية فقط إلى الإنترنت. لا يضم موقع التعلم خادمًا خلفيًا. تحتاج أمثلة HTTP وWebSocket الفعلية خادمًا منفصلًا يوفره المدرّس؛ ولا تتصل المحاكاة بالعتاد.

Progress is private to the current browser/profile. File URL storage behavior varies by browser; moving the folder, changing browsers, or clearing data may affect it. Storage failure shows a notice and keeps the current session usable.

التقدم خاص بالمتصفح وملفه الشخصي. تختلف معالجة تخزين صفحات الملفات بين المتصفحات؛ وقد يؤثر نقل المجلد أو تغيير المتصفح أو مسح البيانات عليه. يظهر تنبيه عند فشل التخزين وتظل الجلسة قابلة للاستخدام.

## Teacher editing / تعديل المحتوى

- `assets/lessons.js`: all seven lessons. Text pairs are `[English, Arabic]`; preserve IDs to retain hashes and checklist keys. Each lesson defines concepts, example, exercise, troubleshooting, extra detail, checks, and resources.
- `assets/app.js`: UI translations, rendering, search, storage, simulations. Use classic scripts, not imports or fetch, to preserve `file://` support.
- `assets/style.css`: responsive layout and RTL/LTR styling with logical properties.
- `index.html`: entry point; no build step.

- يحتوي `assets/lessons.js` الدروس؛ النصوص مرتبة `[الإنجليزية، العربية]`. حافظ على المعرّفات لتبقى الروابط والتقدم متوافقة.
- يحتوي `assets/app.js` الواجهة وترجماتها والبحث والتخزين والمحاكاة. حافظ على السكربتات التقليدية دون استيراد وحدات أو جلب ملفات محلية.
- يحتوي `assets/style.css` التنسيق المتجاوب والاتجاهين، و`index.html` نقطة الدخول دون بناء.

Course board: **JC3248W535EN ESP32-S3**. This site deliberately supplies no guessed board configuration, display settings, or pin assignments. Use the instructor’s tested starter and wiring. Arduino snippets are not drop-in ESP-IDF programs.

لوحة المقرر **JC3248W535EN ESP32-S3**. لا يوفر الموقع إعدادات تخمينية للوحة أو الشاشة أو الأطراف. استخدم مشروع المدرّس وتوصيلاته المجرّبة. أمثلة Arduino ليست برامج ESP-IDF جاهزة للصق.

## Launcher build / بناء المشغّل

Readable source: `launcher/Launcher.cs`. Rebuild on Windows with the .NET Framework 4 C# compiler (development only):

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\launcher\build.ps1
```

This compiles a small Windows GUI executable, with no installer or service. It checks all required website files, opens an absolute file URI through the default browser, and exits. Unicode paths and spaces are handled by .NET path/URI APIs. .NET Framework 4.x is required for this launcher; `index.html` does not require it. The binary is unsigned.

يبني الأمر مشغّل Windows صغيرًا بلا مُثبّت أو خدمة. يفحص ملفات الموقع المطلوبة ويفتح عنوان الملف المطلق في المتصفح الافتراضي ثم ينتهي. تدعم واجهات المسارات العربية والمسافات. يحتاج المشغّل إلى .NET Framework 4.x، أما `index.html` فلا يحتاجه. الملف التنفيذي غير موقّع رقميًا.

## Verification / التحقق

At the user's request, application testing has been deferred. Launcher compilation is not proof of runtime correctness. External resource URLs were researched on October 12, 2026. See `MANUAL-TESTS.md` for the later test pass. No deployment or remote repository was created.

بناءً على طلب المستخدم، أُجّل اختبار التطبيق. ترجمة المشغّل ليست إثباتًا لصحة التشغيل. بُحثت روابط المراجع في 12 أكتوبر 2026. راجع `MANUAL-TESTS.md` للاختبار لاحقًا. لم يُنشر الموقع ولم يُنشأ مستودع بعيد.

## Project ideas / أفكار مشاريع

Chapter 8 has three bilingual briefs: hotel room service, queue and turn display, and classroom voting. Open `#projects`, `#projects/hotel`, `#projects/queue`, or `#projects/poll`. All diagrams are local. These are guidance and illustrative contracts, not finished student solutions or running backends.

يحتوي الفصل الثامن إرشادات لثلاثة مشاريع: خدمات الغرف، ونظام الأدوار والانتظار، والتصويت الصفي. الرسومات محلية، والعقود توضيحية، وليست حلولًا جاهزة أو خوادم تعمل بالفعل.

Edit `assets/projects.js` for translated brief content and `assets/project-view.js` for project rendering. Optional project checklists use separate storage keys and their own reset action; they do not affect the seven chapters’ 21 learning checks. The lesson reset does not clear project checklists.

عدّل `assets/projects.js` لمحتوى المشاريع المترجم و`assets/project-view.js` لعرضها. تستخدم قوائم المشاريع الاختيارية مفاتيح تخزين منفصلة وإجراء مسح خاصًا، ولا تؤثر في نقاط التعلم الـ21 للفصول السبعة. مسح تقدم الدروس لا يمسح قوائم المشاريع.
All three project briefs use only the existing JC3248W535EN touchscreen, a computer, and Wi-Fi. Chapter 7 is not a prerequisite. All extensions are software-only.

تستخدم المشاريع الثلاثة شاشة JC3248W535EN الموجودة وحاسوبًا وWi-Fi فقط. الفصل السابع ليس متطلبًا سابقًا. جميع الإضافات برمجية فقط.

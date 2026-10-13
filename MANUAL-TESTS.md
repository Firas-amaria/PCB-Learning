# Deferred manual checks / فحوص يدوية مؤجلة

Localization checks completed: 441 translated source strings, placeholder checks, and headless browser checks across 36 language/page combinations, including a narrow viewport, Hebrew search, language persistence, project checklist preservation, and both simulations. Launcher execution and the broader manual checks below remain untested.

- Copy the website folder to a path with spaces and Arabic characters. Open the EXE; confirm the browser opens and the launcher exits. Repeat with index.html directly.
- Temporarily rename a required asset in a copy; check the launcher's missing-file message, then restore it.
- Disconnect the internet. Visit home and all eight chapters; confirm all local assets, lessons, and demos work.
- Switch Arabic/English/Hebrew within each section; verify preserved subject, RTL/LTR, code direction, labels, and mobile navigation.
- Search both languages (e.g. خادم, threshold, GPIO); try no results; follow results.
- Try #http/checklist, #home/subjects, previous/next, browser back/forward, and an unknown hash.
- Tick checklists, reload, change language, reset with cancel and then confirmation.
- Block browser storage and reload; confirm a translated notice and usable in-session checklists.
- Copy code; if clipboard is blocked, confirm selection and manual copying.
- In the sensor demo, try raw < threshold, raw = threshold, and raw > threshold; check JSON and LED.
- Connect the WebSocket simulation, send, disconnect mid-message, reconnect, switch route during animation, and switch language.
- Check 320px mobile layout, keyboard-only controls, visible focus, screen-reader labels, reduced motion, code scrolling, and browser console errors.

افحص فتح الموقع من مسار عربي مع مسافات؛ ثم الدروس دون إنترنت، واللغتين والاتجاهين، والبحث والتنقل والروابط المباشرة، وحفظ التقدم وإعادة ضبطه وفشل التخزين، ونسخ الشيفرة، والمحاكاتين، والشاشات الضيقة ولوحة المفاتيح وقارئ الشاشة ووحدة تحكم المتصفح. اختبر رسالة الملف المفقود على نسخة منفصلة ثم أعد الملف.

- Open chapter 8 and each of its three brief links in both languages; switch language while inside a brief and confirm the same project remains open.
- Search for hotel, queue, voting, غرف, الأدوار, and التصويت; follow results directly into briefs.
- Check the eighth home card, sidebar highlight, GPIO → Project Ideas navigation, and brief previous/next links.
- Tick project checks, reload, and confirm lesson progress is unchanged. Reset project checks and confirm lesson checks remain; reset lesson checks and confirm project checks remain.
- Test an unknown project URL such as #projects/missing and verify the return link.
- افحص روابط المشاريع واللغتين والبحث والتنقل، واستقلال تقدم المشاريع ومسحه عن تقدم الدروس، والتعامل مع رابط مشروع غير موجود.

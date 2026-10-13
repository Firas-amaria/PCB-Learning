using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

internal static class Launcher
{
    [STAThread]
    private static void Main()
    {
        string root = AppDomain.CurrentDomain.BaseDirectory;
        string[] required = { "index.html", "assets/style.css", "assets/lessons.js", "assets/app.js", "assets/projects.js", "assets/project-view.js", "assets/hebrew.js" };
        foreach (string relative in required)
        {
            if (!File.Exists(Path.Combine(root, relative)))
            {
                MessageBox.Show("Missing website file: " + relative + "\nKeep the complete website folder together, then open the launcher again.\n\nملف الموقع مفقود. احتفظ بجميع ملفات الموقع في المجلد ثم افتح المشغّل مجددًا.", "Embedded Learning Hub", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }
        }
        try
        {
            ProcessStartInfo start = new ProcessStartInfo(new Uri(Path.Combine(root, "index.html")).AbsoluteUri);
            start.UseShellExecute = true;
            Process.Start(start);
        }
        catch (Exception)
        {
            MessageBox.Show("Could not open the default browser. Double-click index.html in this folder.\n\nتعذّر فتح المتصفح الافتراضي. انقر مرتين على index.html في هذا المجلد.", "Embedded Learning Hub", MessageBoxButtons.OK, MessageBoxIcon.Warning);
        }
    }
}

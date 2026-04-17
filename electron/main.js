const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700
  });

  let filePath;

  if (app.isPackaged) {
    // build sonrası doğru yol
    filePath = path.join(process.resourcesPath, "renderer", "index.html");
  } else {
    // geliştirme (local)
    filePath = path.join(__dirname, "..", "renderer", "index.html");
  }

  win.loadFile(filePath);
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800
  });

  win.loadFile('renderer/index.html');
}

app.whenReady().then(createWindow);
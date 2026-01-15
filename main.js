const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 460,
    height: 560,
    resizable: false,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
});

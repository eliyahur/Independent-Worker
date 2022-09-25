const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 550,
      height: 600,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
        }
    });
    win.setMenuBarVisibility(false);
    win.loadFile('index.html');
    ipcMain.on('minimize', (e)=>{
        win.minimize();
      });
      ipcMain.on('close', () => {
        app.quit();
      });
    
  }


  app.whenReady().then(() => {
    createWindow();
  });


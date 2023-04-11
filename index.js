const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Polinomial Calculations',
        width: isDev ? 1000 : 500,
        height: 700
    });

    // Open devtools
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

   mainWindow.loadFile(path.join(__dirname, './components/hypothesisCheck.html')); 
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
});
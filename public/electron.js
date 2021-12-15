const electron = require('electron');
const app = electron.app;

const { BrowserWindow } = electron;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
let testWindow;

/**
 * Responsible for Loading up 2 Windows :
 * mainWindow
 * testWindow
 */
function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  testWindow = new BrowserWindow({ width: 500, height: 500 });
  testWindow.loadURL(isDev ? 'http://localhost:3000/test' : `file://${path.join(__dirname, '../build/index.html#test')}`);

  /**
   * mainWindow on Close, Quit the app, Set mainWindow and testWindow to null
   */
  mainWindow.on('close', () => {
    app.quit()
    mainWindow = null
    testWindow = null
  });
}

/**
 * Create window on app Ready
 */
app.on('ready', createWindow);

/**
 * On Closing All Windows
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
const { app, BrowserWindow, shell } = require('electron')
const path = require('node:path')

if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient('mikkagames', process.execPath, [path.resolve(process.argv[1])])
    }
  } else {
    app.setAsDefaultProtocolClient('mikkagames')
  }

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be',
        height: 3
    },
    roundedCorners: true,
    //fullscreen: true
  })

  win.loadURL("https://gamehub.crystalite.repl.co/")
}

app.whenReady().then(() => {
  createWindow()
})
const { app, BrowserWindow } = require('electron')

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        fullscreen: true,
        frame: false,
        alwaysOnTop: true
    })

    win.loadFile('index.html')
    win.setMenu(null)
}   
const ipc = require('electron').ipcRenderer;

// close app
function closeApp() {
  ipc.send('close');
}

function minimizeApp() {
    ipc.send('minimize');
}

document.getElementById("close").addEventListener("click", closeApp);
document.getElementById("minimize").addEventListener("click", minimizeApp);
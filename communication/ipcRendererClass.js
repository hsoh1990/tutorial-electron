const {ipcRenderer} = require('electron');

function ping(){
  ipcRenderer.send('asynchronous-message', 'ping')
}

function pong() {
  ipcRenderer.on('asynchronous-reply', (arg) => {
    console.log(arg) // "pong" 출력
  })
}


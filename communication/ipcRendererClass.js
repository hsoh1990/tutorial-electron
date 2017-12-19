const {ipcRenderer} = require('electron');

function ping() {
	ipcRenderer.send('asynchronous-message', 'ping')
}

ipcRenderer.on('asynchronous-reply', (event, arg) => {
	console.log(arg) // "pong" 출력
})



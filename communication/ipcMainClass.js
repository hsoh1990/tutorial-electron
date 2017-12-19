const {ipcMain} = require('electron');
const SerialPort = require('serialport');


class ipcMainClass {

	constructor() {
	}

	setIpc() {
		let thisClass = new ipcMainClass()
		ipcMain.on('asynchronous-message', (event, arg) => {
			console.log(arg);  // arg 내용이 출력된다.
			event.sender.send('asynchronous-reply', 'pong')
		});

		ipcMain.on('synchronous-message', (event, arg) => {
			console.log(arg);  // arg 내용이 출력된다.
			event.returnValue = 'pong'
		})
		ipcMain.on('reqDevice', (event, arg) => {
			console.log(arg);
			let deviceList = thisClass.getDeviceList()
			console.log(deviceList);
			event.sender.send('respDevice', deviceList)
		})

	}


	getDeviceList() {
		SerialPort.list(function (err, ports) {
			return Promise.resolve(ports)
		});
	}

}

module.exports = ipcMainClass;
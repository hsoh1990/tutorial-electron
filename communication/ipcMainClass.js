const {ipcMain} = require('electron');

class ipcMainClass {

  constructor() {
  }

  setIpc() {
    ipcMain.on('asynchronous-message', (event, arg) => {
      console.log(arg);  // arg 내용이 출력된다.
      event.sender.send('asynchronous-reply', 'pong')
    });

    ipcMain.on('synchronous-message', (event, arg) => {
      console.log(arg);  // arg 내용이 출력된다.
      event.returnValue = 'pong'
    })
  }

}

module.exports = ipcMainClass;
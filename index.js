const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

electron.crashReporter.start({
  productName: 'YourName',
  companyName: 'YourCompany',
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: true
});

var mainWindow = null;

app.on('window-all-closed', ()=>{

	if (process.platform != 'darwin') {
		app.quit();
	}
})


app.on('ready', ()=>{
	mainWindow = new BrowserWindow({width:800, height: 600});

	mainWindow.loadURL(
		url.format({
			pathname: path.join(__dirname, '/view/index.html'),
			protocol: "file:",
			slashes: true
		})
	);
	// mainWindow.loadURL('file://'+__dirname+'/view/index.html');

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', ()=>{
		mainWindow = null;
	});
});

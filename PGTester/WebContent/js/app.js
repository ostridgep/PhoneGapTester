document.addEventListener("deviceready", init, false);

//The directory to store data
var store;

//Used for status updates
var $status;

//URL of our asset
var assetURLtxt = "https://raw.githubusercontent.com/cfjedimaster/Cordova-Examples/master/readme.md";
var assetURLxls = "coral.ie.lehigh.edu/~ted/files/eng5/misc/sample.xls"
var assetURLdoc = "https://www.swiftview.com/tech/letterlegal5.doc"
//File name of our important data file we didn't ship with the app
var fileNametxt = "Docs/file.txt";
var fileNamexls = "Docs/file.xls";
var fileNamedoc = "Docs/file.doc";
function init() {
	
	$status = document.querySelector("#status");

	$status.innerHTML = "Checking for data file.";

	store = cordova.file.dataDirectory;

	//Check for the file. 
	window.resolveLocalFileSystemURL(store + fileNametxt, appStart, downloadAsset(assetURLtxt,store + fileNametxt));
	window.resolveLocalFileSystemURL(store + fileNamexls, appStart, downloadAsset(assetURLxls,store + fileNamexls));
	window.resolveLocalFileSystemURL(store + fileNamedoc, appStart, downloadAsset(assetURLdoc,store + fileNamedoc));
	 appStart()
}

function downloadAsset(url,filename) {
	var fileTransfer = new FileTransfer();
	alert("About to start transfer"+url+" into "+filename);
	fileTransfer.download(url, filename, 
		function(entry) {
			alert("Success!"+filename);
		}, 
		function(err) {
			alert("Error"+filename+err);
		
		});
}

//I'm only called when the file exists or has been downloaded.
function appStart() {
	$status.innerHTML = "App ready!<BR><a href='Docs/file.txt'>Text File</a><BR><BR><a href='"+store+"/Docs/file.xls'>XLS File</a><BR><BR><a href='"+store+"/Docs/file.doc'>Doc File</a>";
}
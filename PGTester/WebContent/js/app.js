document.addEventListener("deviceready", init, false);

//The directory to store data
var store;

//Used for status updates
var $status;

//URL of our asset
var assetURLtxt = "https://raw.githubusercontent.com/cfjedimaster/Cordova-Examples/master/readme.md";
var assetURLxls = "http://www.akronlibrary.org/training/pdf/SampleCustomerReports.xls"
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
function openFile1(){
	alert("open"+store+"/Docs/file.txt")
	window.plugins.fileOpener.open(store+"/Docs/file.txt");
}
function openFile2(){
	alert("open"+store+"/Docs/file.xls")
	window.plugins.fileOpener.open(store+"/Docs/file.xls");
}
function openFile3(){
	alert("open"+store+"/Docs/file.doc")
	window.plugins.fileOpener.open(store+"/Docs/file.doc");
}
//I'm only called when the file exists or has been downloaded.
function appStart() {
	$status.innerHTML = "App ready!<BR><a href='#' onclick='openFile1()'>Text File</a><BR><BR><a href='#' onclick='openFile2()'>XLS File</a><BR><BR><a href='#' onclick='openFile3()'>Doc File</a>";
}
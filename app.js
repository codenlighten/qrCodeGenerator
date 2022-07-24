const getQrc = () => {
	let qrInfo = document.getElementById("qrInfo").value;
	if (!qrInfo) {
		alert("please add info first");
		return;
	}
	new QRCode(document.getElementById("qrcode"), `${qrInfo}`);
	document.getElementById("qrcode").style.display = "";
	document.getElementById("download").style.display = "";
	document.getElementById("submit").style.display = "none";
	document.getElementById("retry").style.display = "";
	document.getElementById("qrInfo").innerHTML = "";
};

let can = document.getElementById("qrcode");

console.log(can);

document.getElementById("download").addEventListener("click", function (e) {
	let canvas = can.childNodes[0];
	// let ctx = canvas.getContext("2d");
	console.log(canvas);

	// Convert our canvas to a data URL
	let canvasUrl = canvas.toDataURL();
	// Create an anchor, and set the href value to our data URL
	const createEl = document.createElement("a");
	createEl.href = canvasUrl;

	// This is the name of our downloaded file
	createEl.download = "download-this-canvas";

	// Click the download button, causing a download, and then remove it
	createEl.click();
	createEl.remove();
});

const retry = () => {
	location.reload();
};

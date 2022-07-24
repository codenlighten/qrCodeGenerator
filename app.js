const getQrc = () => {
	let qrInfo = document.getElementById("qrInfo").value;
	if (!qrInfo) {
		alert("please add info first");
		return;
	}
	new QRCode(document.getElementById("qrcode"), `${qrInfo}`);
};

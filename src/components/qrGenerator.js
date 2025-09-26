function generateQRCode(link) {
    const qrCodeContainer = document.createElement('div');
    const qrCode = new QRCode(qrCodeContainer, {
        text: link,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });

    return qrCodeContainer;
}

export default generateQRCode;
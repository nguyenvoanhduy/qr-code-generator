// QR Generator Component

export function generateQRCode(text, elementId) {
    const qrContainer = document.getElementById(elementId);
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
import { generateQRCode } from '../components/qrGenerator.js';

const qrForm = document.getElementById('qrForm');
const linkInput = document.getElementById('linkInput');
const qrCodeContainer = document.getElementById('qrCodeContainer');
const qrCodeDiv = document.getElementById('qrCode');
const downloadBtn = document.getElementById('downloadBtn');

qrForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const link = linkInput.value.trim();
    if (!link) {
        alert('Vui lòng nhập đường link!');
        return;
    }
    qrCodeContainer.style.display = 'block';
    qrCodeDiv.innerHTML = '';
    generateQRCode(link, 'qrCode');

    // Hiển thị nút tải về sau khi tạo QR
    setTimeout(() => {
        const qrImg = qrCodeDiv.querySelector('img');
        if (qrImg) {
            downloadBtn.href = qrImg.src;
            downloadBtn.style.display = 'inline-block';
        } else {
            downloadBtn.style.display = 'none';
        }
    }, 300);
});

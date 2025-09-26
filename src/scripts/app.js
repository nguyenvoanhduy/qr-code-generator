document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('qrForm');
    const input = document.getElementById('linkInput');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrCodeDiv = document.getElementById('qrCode');
    const downloadBtn = document.getElementById('downloadBtn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = input.value.trim();

        qrCodeDiv.innerHTML = '';
        downloadBtn.style.display = 'none';

        if (!url) {
            qrCodeContainer.style.display = 'none';
            return;
        }

        const response = await fetch('http://127.0.0.1:5000/api/qrcode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        if (response.ok) {
            const blob = await response.blob();
            const imgUrl = URL.createObjectURL(blob);
            qrCodeDiv.innerHTML = `<img src="${imgUrl}" alt="QR Code" class="img-fluid" style="max-width:256px;">`;
            downloadBtn.href = imgUrl;
            downloadBtn.style.display = 'inline-block';
            qrCodeContainer.style.display = 'block';
        } else {
            qrCodeDiv.innerHTML = '<div class="alert alert-danger">Không tạo được mã QR!</div>';
            qrCodeContainer.style.display = 'block';
        }
    });
});

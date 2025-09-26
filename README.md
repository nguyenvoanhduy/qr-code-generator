# QR Code Generator

Website tạo mã QR từ đường link.

## Hướng dẫn cài đặt

### 1. Clone repo

```sh
git clone https://github.com/nguyenvoanhduy/qr-code-generator.git
cd qr-code-generator
```

### 2. Cài đặt Python và các thư viện

```sh
pip install flask flask-cors qrcode[pil] pillow
```

### 3. Chạy server backend

```sh
python server.py
```

### 4. Chạy website frontend

Mở file `src/index.html` bằng Live Server (VS Code) hoặc trình duyệt.

> **Lưu ý:**  
> Nếu frontend và backend chạy khác port, hãy đảm bảo file `app.js` fetch tới đúng địa chỉ backend (mặc định là `http://127.0.0.1:5000/api/qrcode`).

## Tác giả

[Nguyen Vo Anh Duy](https://github.com/nguyenvoanhduy)

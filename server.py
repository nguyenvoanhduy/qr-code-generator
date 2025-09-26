from flask import Flask, request, send_file
from flask_cors import CORS
import qrcode
import io

app = Flask(__name__)
CORS(app)

@app.route('/api/qrcode', methods=['POST'])
def generate_qr():
    data = request.json.get('url')
    if not data:
        return {"error": "Thiếu url"}, 400
    img = qrcode.make(data)
    buf = io.BytesIO()
    img.save(buf, format='PNG')
    buf.seek(0)
    return send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
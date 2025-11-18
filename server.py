from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import logging
import os

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

logging.basicConfig(filename='contacts.log', level=logging.INFO, format='%(asctime)s %(message)s')


@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json() or request.form
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    if not name or not email or not message:
        return jsonify({'error': 'Missing fields', 'message': 'Please provide name, email, and message.'}), 400
    # Log submission (for demo). In production, forward to email service or DB.
    safe_message = message.replace('\n', ' ').strip()
    logging.info('Contact from %s <%s>: %s', name, email, safe_message)
    return jsonify({'status': 'ok', 'message': 'Received — we will be in touch.'}), 200


# Serve static files (index.html, CSS, JS)
@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def static_proxy(path):
    if os.path.exists(path):
        return send_from_directory('.', path)
    return send_from_directory('.', 'index.html')


if __name__ == '__main__':
    # Default dev port. Run with: python3 server.py
    app.run(host='0.0.0.0', port=5000, debug=True)

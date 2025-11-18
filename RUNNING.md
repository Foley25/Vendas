# Run the site locally

This file explains how to run the site locally using the bundled Flask backend.

1. (Optional) Create and activate a Python virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Start the development server:

```bash
python3 server.py
```

4. Open `http://localhost:5000` in your browser.

Form submissions POST to `/api/contact` and are appended to `contacts.log` in the repository root.

If you previously started `python3 -m http.server 8000`, stop that process before running `server.py`.

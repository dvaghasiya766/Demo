from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import subprocess

app = Flask(__name__, static_folder='../frontend')
CORS(app)

@app.route('/run', methods=['POST'])
def run_code():
    data = request.json
    code = data.get('code')

    try:
        # Debug: Log the code to be executed
        print('Executing Code:', code)

        result = subprocess.run(
            ['python', '-c', code], 
            capture_output=True, 
            text=True, 
            check=True
        )

        # Debug: Log the result
        print('Output:', result.stdout)
        print('Error:', result.stderr)

        return jsonify({'output': result.stdout + '\n' + (result.stderr if result.stderr else '')})
    except subprocess.CalledProcessError as e:
        print('Execution Error:', e.stderr)
        return jsonify({'output': e.stderr})

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)
w
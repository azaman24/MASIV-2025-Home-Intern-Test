from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# Simple test route
@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({"message": "Hello from Flash backend!"})

# Example database connection
def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

if __name__ == '__main__':
    app.run(debug=True, port=5000)

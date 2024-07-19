"""
from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# サンプルデータ生成関数
def generate_data():
    return {
        "temperature": [random.uniform(20, 30) for _ in range(7)],
        "humidity": [random.uniform(40, 60) for _ in range(7)],
        "co2": random.randint(400, 2000),
        "crowdedness": random.choice(["空いている", "普通", "混雑"]),
        "discomfortIndex": random.randint(60, 80),
        "pm1": random.randint(0, 100),
        "pm2": random.randint(0, 100),
        "pm4": random.randint(0, 100),
        "pm10": random.randint(0, 100)
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    data = generate_data()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
"""
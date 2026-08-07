from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    text = request.json.get("review")
    sentiment = TextBlob(text).sentiment.polarity
    if sentiment > 0:
        result = "positive"
    elif sentiment < 0:
        result = "negative"
    else:
        result = "neutral"
    return jsonify({"sentiment": result})

if __name__ == "__main__":
    app.run(port=5001)

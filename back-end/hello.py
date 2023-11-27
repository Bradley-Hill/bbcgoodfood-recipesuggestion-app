from flask import Flask

app = Flask(__name__)


@app.route("/hello")
def hello_world():
    """Return simple greeting."""
    return "<p>Hello, World!</p>"

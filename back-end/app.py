from flask import Flask

app = Flask(__name__)


@app.route("/")
def entry_page():
    """entry point for the app"""
    return "<h1>This is the first page of my Recipe Suggester App</h1>"

from flask import Flask
import requests
from recipe_scrapers import scrape_me
from recipe_scrapers import scrape_html

app = Flask(__name__)

scraper = scrape_me(
    "https://www.bbcgoodfood.com/recipes/best-ever-chocolate-brownies-recipe"
)


@app.route("/")
def hello_world():
    return """
                <p>Hello, world!</p>
                <h1>THIS IS A TITLE</h1>
                <p>This is lorem ipsum sic non interit</p>
            """


@app.route("/greeting")
def greeting():
    return """
            <h2>I'm practicing with Flask and creating some different routes</h2>
            <p>Blah blah blah blah Blah blah blah blah Blah blah blah blah 
            Blah blah blah blah Blah blah blah blah Blah blah blah blah 
            Blah blah blah blah Blah blah blah blah Blah blah blah blah </p>
"""


@app.route("/recipe")
def recipe_scrape():
    return "<br>".join(scraper.ingredients())

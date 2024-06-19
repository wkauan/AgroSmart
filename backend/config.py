from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///agrosmart.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

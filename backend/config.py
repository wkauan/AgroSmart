from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
cors = CORS(app, origins="*")

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.condig["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

from flask import request, jsonify
import hashlib
from config import app, db
from models import User, Contact

@app.route("/contacts", methods=["GET"])
def get_contacts():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    return jsonify({
        "users": json_users
    })

@app.route("/cadastro", methods=["POST"])
def cadastro():
    name = request.json.get("Name")
    telefone = request.json.get("Telefone")
    email = request.json.get("Email")
    password = request.json.get("Password")

    if not name or not telefone or not email or not password:
        return (
            jsonify({
                "message": "Você precisa informar um nome, telefone, email e senha"
                }), 400,
        )

    h = hashlib.new("SHA256")
    h.update(password.encode())
    hashed_password = h.hexdigest()

    new_user = User(name=name, telefone=telefone, email=email, password=hashed_password)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({
            "message": str(e)
        }), 400

    return jsonify({
        "message": "Usuário cadastrato"
    }), 201

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("Email")
    password = request.json.get("Password")

    if not email or not password:
        return jsonify({
            "message": "Você precisa informar um email e senha"
        }), 400

    user = User.query.filter.by(email=email).first()

    h = hashlib.new("SHA256")
    h.update(password.encode())

    if user:
        hash_password = h.hexdigest()

        if hash_password == user.password:
            return jsonify({"message": "Login bem-sucedido"}), 200
        else:
            return jsonify({"message": "Email ou senha incorretos"}), 401

@app.route("/cadastro_contato", methods=["POST"])
def cadastro_Contato():
    name = request.json.get("NameContato")
    telefone = request.json.get("TelefoneContato")
    email = request.json.get("EmailContato")

    if not name or not telefone or not email:
        return (
            jsonify({
                "message": "Você precisa informar um nome, telefone e email"
                }), 400,
        )

    new_contact = User(name=name, telefone=telefone, email=email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({
            "message": str(e)
        }), 400

    return jsonify({
        "message": "Contato cadastrato"
    }), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True, port=8000)

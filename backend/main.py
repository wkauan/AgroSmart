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


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True, port=8000)

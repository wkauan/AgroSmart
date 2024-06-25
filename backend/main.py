from flask import request, jsonify
import hashlib
from config import app, db
from models import User, Contact, Sensor
import requests

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
        return jsonify({
            "message": "Você precisa informar um nome, telefone, email e senha"
            }), 400
    elif '@' not in email:
        return jsonify({
            "message": "O email informado não é válido"
        }), 400
    elif len(telefone) != 11:
        return jsonify({
            "message": "O telefone informado não é válido. O telefone deve conter exatamente 11 caracteres."
        }), 400

    h = hashlib.new("SHA256")
    h.update(password.encode())
    hashed_password = h.hexdigest()

    verifySignUp = User.query.filter_by(email=email).first()

    if verifySignUp:
        return jsonify({
            "message": "Usuário já cadastrado"
        }), 409

    new_user = User(name=name, telefone=telefone, email=email, password=hashed_password)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({
            "message": str(e)
        }), 400

    return jsonify({
        "message": "Usuário cadastrato com sucesso"
    }), 201

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("Email")
    password = request.json.get("Password")

    if not email or not password:
        return jsonify({
            "message": "Você precisa informar um email e senha"
        }), 400
    elif '@' not in email:
        return jsonify({
            "message": "O email informado não é válido"
        }), 400

    user = User.query.filter_by(email=email).first()

    h = hashlib.new("SHA256")
    h.update(password.encode())

    if user:
        hash_password = h.hexdigest()

        if hash_password == user.password:
            return jsonify({"message": "Login bem-sucedido"}), 200
        else:
            return jsonify({"message": "Email ou senha incorretos"}), 401
    else:
        return jsonify({"message": "Usuário não cadastrado"}), 401

@app.route("/sensor_upload", methods=["POST"])
def sensorUpload():
    temperatura = request.json.get("Temperatura")
    umidade = request.json.get("Umidade")
    image = request.json.get("Image")

    if not temperatura or not umidade or not image:
        return jsonify({"message": "Temperatura e/ou umidade e/ou imagem não fornecidas corretamente"}), 400

    new_data(temperatura=temperatura, umidade=umidade, image=image)

    try:
        db.session.add(new_data)
        db.session.commit()
    except Exception as e:
        return jsonify({
            "message": str(e)
        }), 400

    return jsonify({
        "message": "Dados dos sensores cadastrados com sucesso"
    }), 201

@app.route("/sensores", methods=['POST'])
def add_sensor_data():
    try:
        data = request.get_json()

        temperatura = data.get('temperatura')
        umidade = data.get('umidade')
        image_base64 = data.get('image', None)

        new_sensor = Sensor(temperatura=temperatura, umidade=umidade, image_base64=image_base64)
        db.session.add(new_sensor)
        db.session.commit()

        return jsonify(new_sensor.to_json()), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/sensor_history', methods=['GET'])
def sensor_history():
    try:
        sensors = Sensor.query.all()
        sensor_data = [sensor.to_json() for sensor in sensors]
        return jsonify(sensor_data), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@app.route("/cadastro_contato", methods=["POST"])
def cadastro_Contato():
    name = request.json.get("Name")
    telefone = request.json.get("Telefone")
    email = request.json.get("Email")

    if not name or not telefone or not email:
        return jsonify({
            "message": "Você precisa informar um nome, telefone e email"
            }), 400,
    elif '@' not in email:
        return jsonify({
            "message": "O email informado não é válido"
        }), 400
    elif len(telefone) != 11:
        return jsonify({
            "message": "O telefone informado não é válido. O telefone deve conter exatamente 11 caracteres."
        }), 400

    contact = Contact.query.filter_by(email=email).first()

    if contact:
        return jsonify({
            "message": "Contato já cadastrado"
        }), 409


    new_contact = Contact(name=name, telefone=telefone, email=email)
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

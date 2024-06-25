from config import db
import base64

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    telefone = db.Column(db.String(11), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "Name": self.name,
            "Telefone": self.telefone,
            "Email": self.email,
            "Password": self.password,
        }

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    telefone = db.Column(db.String(11), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def to_json(self):
        return {
            "idContato": self.idContato,
            "NameContato": self.nameContato,
            "TelefoneContato": self.telefoneContato,
            "EmailContato": self.emailContato,
        }

class Sensor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    temperatura = db.Column(db.String(80), nullable=False)
    umidade = db.Column(db.String(80), nullable=False)
    image = db.Column(db.LargeBinary, nullable=True)

    def __init__(self, temperatura, umidade, image_base64):
        self.temperatura = temperatura
        self.umidade = umidade
        self.image = self._decode_image(image_base64)

    def _decode_image(self, image_base64):
        try:
            if image_base64:
                return base64.b64decode(image_base64)
            return None
        except Exception as e:
            raise ValueError(f"Erro ao decodificar imagem base64: {str(e)}")

    def to_json(self):
        return {
            "id": self.id,
            "temperatura": self.temperatura,
            "umidade": self.umidade,
            "image": base64.b64encode(self.image).decode('utf-8') if self.image else None,
        }
        
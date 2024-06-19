from config import db

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
    idContato = db.Column(db.Integer, primary_key=True)
    nameContato = db.Column(db.String(80), unique=False, nullable=False)
    telefoneContato = db.Column(db.String(11), unique=True, nullable=False)
    emailContato = db.Column(db.String(120), unique=True, nullable=False)

    def to_json(self):
        return {
            "idContato": self.idContato,
            "NameContato": self.nameContato,
            "TelefoneContato": self.telefoneContato,
            "EmailContato": self.emailContato,
        }

from flask import Flask, request
from flask_restx import Api
import os
#from flask_cors import CORS

rest_api = Api(version="1.0", title="Users API")
app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')

#CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

# first API route
@app.route("/login", methods=['POST'])
def getServerResponse():
    request_data = request.get_json()
    name = request_data.get("username")
    print(name)
    if name == 'Ethan':
        return {
            "success": True,
            "name": name,
            "msg": "Pham"
        }, 200
    else:
        return {
            "success": True,
            "name": name,
            "msg": "User not found"
        }, 200
 
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host = '0.0.0.0')
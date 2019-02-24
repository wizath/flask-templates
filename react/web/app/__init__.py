import os

from flask import Flask
from flask_cors import CORS
from config import config

cors = CORS()


def create_app(config_name=None):
    if config_name is None:
        config_name = os.environ.get('FLASK_ENV', 'development')

    app = Flask(__name__)
    app.config.from_object(config[config_name])

    cors.init_app(app)

    from app.views import views_blueprint
    app.register_blueprint(views_blueprint)

    return app

from flask import Blueprint, jsonify
import time

views_blueprint = Blueprint('api', __name__)


@views_blueprint.route('/')
def home():
    return jsonify({
        'timestamp': time.time()
    })


from unittest import TestCase

from app import create_app, db


class TestWrapper(TestCase):

    def setUp(self):
        self.app = create_app('testing').test_client()
        self.db = db
        self.db.create_all()

    def tearDown(self):
        self.db.session.remove()
        self.db.drop_all()

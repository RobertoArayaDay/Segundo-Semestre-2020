import mysql.connector


class HackBoxDatabase:

    def __init__(self, user, password):
        self.db = mysql.connector.connect(
            host="localhost",
            user=user,
            password=password,
            database="hackbox"
        )
        self.cursor = self.db.cursor()

    def save_data(self, data):
        sql ='''
            INSERT INTO usuario (nombre, edad, comentario) 
            VALUES (%s, %s, %s)
            '''
        self.cursor.execute(sql, data) # ejecuto la consulta
        self.db.commit() # modifico la base de datos

    def get_all(self, tablename):
        self.cursor.execute(f'SELECT * FROM {tablename}')
        return self.cursor.fetchall()
        
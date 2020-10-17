import mysql.connector

db = mysql.connector.connect(
  host="localhost", # 127.0.0.1
  user="root",
  password="",
  database="datos"
)

cursor = db.cursor()

cursor.execute('''
        CREATE TABLE pizzeria (
            id int(10) unsigned NOT NULL AUTO_INCREMENT,
            nombre VARCHAR(255), 
            telefono INT(11),
            direccion VARCHAR(200),
            comuna 
            comununa 
            edad INT(10),
            comentario TEXT(1000),
            PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;    
    '''
)
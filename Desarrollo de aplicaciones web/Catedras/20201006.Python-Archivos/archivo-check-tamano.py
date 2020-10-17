#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi, os
import cgitb; cgitb.enable()
import time
from stat import * # ST_SIZE etc

print("Content-type: text/html; charset=UTF-8")
print("")

MAX_FILE_SIZE = 100000 # 100 KB
form = cgi.FieldStorage()
mensaje = ""
size = 0
tipo = ""
if len(form) > 0:
    # obtener archivo
    fileitem = form['filename']
    # Revisar si corresponde a un archivo
    if fileitem.filename:
        try:
            # obtener tamaño en bytes
            size = os.fstat(fileitem.file.fileno()).st_size
            # averiguar tipo
            tipo = fileitem.type 
            if size <= MAX_FILE_SIZE:
                # obtenemos el nombre base del archivo sin considerar la ruta completa 
                # en el computador del cliente
                fn = os.path.basename(fileitem.filename)
                open('/tmp/' + fn, 'wb').write(fileitem.file.read())
                mensaje = "El archivo {0} fue recibido exitosamente, tamaño {1} tipo {2}".format(fn, size, tipo)
            else:
                mensaje = "Tamaño de archivo [{0}] excede el máximo [{1}]".format(size, MAX_FILE_SIZE)
        except IOError:
            mensaje = "error al obtener informacion de archivo"
    else:
        mensaje = "No se recibió el archivo"

print("""
<!DOCTYPE html>
<html>
<body>
   <h1>Ejemplo de upload de archivo</h1>
""")

if mensaje != "":
    print("<p>" + mensaje + "</p>")

print("""
   <form enctype = "multipart/form-data" action = "archivo-check-tamano.py" method = "post">
       <p>Archivo: <input type = "file" name = "filename" /></p>
       <p><input type = "submit" value = "Enviar archivo" /></p>
   </form>
</body>
</html>
""")


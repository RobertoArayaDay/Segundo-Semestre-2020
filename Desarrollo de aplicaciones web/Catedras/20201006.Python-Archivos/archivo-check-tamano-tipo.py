#!/usr/bin/python3
# -*- coding: utf-8 -*-

print("Content-type: text/html; charset=UTF-8")
print("")

import cgi, os
import cgitb; cgitb.enable()
import filetype

MAX_FILE_SIZE = 100000 # 100 KB
form = cgi.FieldStorage()
mensaje = ""
size = 0
tipo_real = ""
if len(form) > 0:
    # obtener archivo
    fileitem = form['filename']
    # Revisar si corresponde a un archivo
    if fileitem.filename:
        try:
            # obtener tamaño en bytes
            size = os.fstat(fileitem.file.fileno()).st_size
            # averiguar tipo real
            tipo_real = filetype.guess(fileitem.file)
            if size <= MAX_FILE_SIZE:
                # obtenemos el nombre base del archivo sin considerar la 
                # ruta completa en el computador del cliente
                fn = os.path.basename(fileitem.filename)
                open('/tmp/' + fn, 'wb').write(fileitem.file.read())
                mensaje = "El archivo {0} fue recibido exitosamente, tamaño {1} tipo {2}"\
                          .format(fn, size, tipo_real.mime)
            else:
                mensaje = "Tamaño de archivo [{0}] excede el máximo [{1}]"\
                          .format(size, MAX_FILE_SIZE)
        except IOError as e:
            mensaje = "error al obtener informacion de archivo {0}: {1}"\
                      .format(e.args[0], e.args[1])
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
   <form enctype = "multipart/form-data" action = "archivo-check-tamano-tipo.py" method = "post">
       <p>Archivo: <input type = "file" name = "filename" /></p>
       <p><input type = "submit" value = "Enviar archivo" /></p>
   </form>
</body>
</html>
""")


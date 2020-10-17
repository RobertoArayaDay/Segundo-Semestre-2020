#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi, os
import cgitb; cgitb.enable()

print("Content-type: text/html; charset=UTF-8")
print("")

form = cgi.FieldStorage()
mensaje = ""
if len(form) > 0:
    # obtener archivo
    fileitem = form['filename']
    # Revisar si corresponde a un archivo
    if fileitem.filename:
        # obtenemos el nombre base del archivo sin considerar la ruta completa 
        # en el computador del cliente
        fn = os.path.basename(fileitem.filename)
        open('/tmp/' + fn, 'wb').write(fileitem.file.read())
        mensaje = "El archivo " + fn + " fue recibido exitosamente"
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
   <form enctype = "multipart/form-data" action = "archivo.py" method = "post">
       <p>Saludo: <input type = "text" name = "saludo" /></p>
       <p>Archivo: <input type = "file" name = "filename" /></p>
       <p><input type = "submit" value = "Enviar archivo" /></p>
   </form>
</body>
</html>
""")


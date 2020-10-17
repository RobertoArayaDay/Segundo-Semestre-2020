#!C:\Users\gabri\AppData\Local\Programs\Python\Python39\python.exe


import cgi
from save_data import HackBoxDatabase

print("Content-type: text/html\r\n\r\n")

form = cgi.FieldStorage()
hbdb = HackBoxDatabase("root", "")


html = f'''
    <!DOCTYPE html>
<!--suppress ALL -->
<head>
    <meta charset="UTF-8">
    <title>Hackbox</title>
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <script src="validador.js"></script>
</head>


<body>

<div class="menu entrada">

    <div class="entrada">
        <a href="https://google.cl">Home</a>
    </div>

    <div class="entrada">
        <a href="https://hackbox.html">Favoritos</a>
    </div>

    <div class="entrada" style="border-right: 0">
        <a href="ljfklsd">Configuraciones</a>
    </div>

</div>

<div class="titulo negrita">Hackbox</div>
<div class="main">

    

        Su mensaje informacion se guardo con exito!!!

    

</div>



</body>


</html>
'''
print(html)
data = (
    form['nombre'].value, form['edad'].value, form['comentario'].value
)
#print(data)
hbdb.save_data(data) 

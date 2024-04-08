<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!--bootstrap 5 css-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
  <div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="./">faturacion</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </nav>
    <div>
    <h2>Formulario Cliente</h2>
    <form action="#" method="post">
        <label for="fecha">Fecha:</label><br>
        <input type="date" class="form-control" id="fecha" name="fecha"><br><br>
        
        <label for="codigo">Código de Cliente:</label><br>
        <input type="text" class="form-control" id="codigo" name="codigo"><br><br>
        
        <label for="nombre">Nombre del Cliente:</label><br>
        <input type="text" class="form-control" id="nombre" name="nombre"><br><br>
        
        <input type="submit" value="Enviar">
 
    </div>
    <div>  <table class ="table table-border">

  <tr>
    <th>nombre</th>
    <th>cantida</th>
    <th>precio</th>
    <th>toral</th>
    <td>
        <button type="button" class="btn btn-success" onclick="agregarFila()">
 <i class="fas fa-plus"></i>
        </button>
    </td>
    <tbody id="tbDetalle">

    </tbody>
  </td>
  </table>
  <div class="mb-3">
  <label for="nombre">total a pagar:</label><br>
        <input type="text" class="form-control" id="total a pagar" name="total"><br><br>
  </div>
  <div class="mb-3">
  <label for="nombre">comentario:</label><br>
        <input type="text" class="form-control" id="comentario" name="comentario">
  </div>
  <div class = "text-center">
    <button type="submit" class="btn btn-primary">Factura</button>


  </div>
    </div>
  </div>
  </div>
  </form>
</body>

<script>
    function agregarFila(){
        let tbody = document.getElementById("tbDetalle");
        let tr = document.createElement('tr');
        tr.innerHTML =
        
        <td>
        <input type="text" class ="form-control" name="nombre[]">  
        </td>
        <input type="text" class ="form-control" name="cantida[]">  
        <td>
        <input type="text" class ="form-control" name="precio[]">
        </td>
        <td>
        <input type="text" redonly class ="form-control" name="total[]">  
        </td>
    ;
    tbody.appendchild(tr);
    
    }
</script>

</html>
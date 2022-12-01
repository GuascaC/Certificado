<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../syles/styles.css">
  <title>index</title>
  <link rel="icon" href="https://www.uniempresarial.edu.co/wp-content/uploads/2022/11/cropped-favicon-1-192x192.png" sizes="192x192" />
</head>

<body>
 <header>
        <div class="header1">
            <div class="divHeader">
                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
            </div>
                <a class="mail" href=""><i class="fa-solid fa-envelope"></i>  Mail corporativo</a>   
        </div>
        <div class="header2">
            <div>
            <img src="../img/ue.JPG" alt="Logo Uniempresarial">
            <img src="../img/comercio.JPG" alt="Logo cámara de comercio">
            </div>
            <a href=""><i class="fa-solid fa-pen-to-square"></i> Cambiar Contraseña</a>
            <a href=""><i onmouseover="this.fa-solid" class="fa-solid fa-user"></i> Cerrar Sesión</a>
        </div>
    </header>
  <h2>Genera tu certificado</h2>
  <p>El certificado contendrá su nombre y documento de identidad. En caso de requerir algún dato adicional, seleccione a
    Continuación.</p>
  <form>
    <input class="form-check-input" type="checkbox" id="">
    <label>Salario</label><br>
    <input class="form-check-input" type="checkbox" id="">
    <label>Tipo de Contrato</label><br>
    <input class="form-check-input" type="checkbox" id="">
    <label>Fecha de Ingreso</label><br>
    <button id="btn-abrir-modal">Generar</button>
    <dialog id="modal">
      <h2>Para continuar, valida la fecha de Expedición de tu Documento</h2>
      <form method="post" action="generate.php">
        <input type="date">
        <button type="submit" method="post">Continuar</button>
      </form>
      <button id="btn-cerrar-modal">Cerrar</button>
    </dialog>
  </form>
  <footer>
        <div class="footer1">
            <img src="../img/footer.JPG" alt="Logo uniempresarial y cámara de comercio">
            <p>Institución de educación superior sujeta a la inspección y vigilancia del Ministerio de Educación / SNIES 2738</p>
        </div>
        <div class="footer2">
            <p>Todos los derechos reservados © 2020 -2022 Fundación Universitaria de la Cámara de Comercio de Bogotá Uniempresarial | Términos, politicas y Condiciones de Servicio Resolución 598 del Ministerio de Educación. Registro Icfes 2738.</p>
        </div>
    </footer>
  <script src="https://kit.fontawesome.com/0bf8ac12b9.js" crossorigin="anonymous"></script>
  <script src="../Scripts/Redirigir.js"></script>
  <script src="../../Scripts/Modal.js"></script>
</body>
</html>
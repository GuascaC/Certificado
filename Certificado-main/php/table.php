<?php

    include 'conexion.php';

?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../syles/styles.css">
  <title>Usuarios registrados</title>
  <link rel="icon" href="../../img/logoicono.png">
</head>

<body>
  <div class="header1">
    <div class="divHeader">
      <a onclick="redirigir01()"><i class="fa-brands fa-whatsapp"></i></a>
      <a onclick="redirigir02()"><i class="fa-brands fa-instagram"></i></a>
      <a onclick="redirigir03()"><i class="fa-brands fa-facebook-f"></i></a>
      <a onclick="redirigir04()"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <a class="mail" onclick="redirigir05()"><i class="fa-solid fa-envelope"></i> Mail corporativo</a>
  </div>
  <div class="header2">
            <div>
            <img src="../../img/LogoUECCB.png" alt="Logo Uniempresarial y logo Cámara de comercio">
            </div>
            <a href="../CContrasenaAd.html"><i class="fa-solid fa-pen-to-square"></i> Cambiar Contraseña</a>
            <a href="../../index.html" ><i class="fa-solid fa-user" ></i> Cerrar Sesión</a>
  </div>
  <section class="sectionTitulo">
    <div class="divTitulo">
      Usuarios registrados
    </div>
  </section>
  <section class="sectionBotones">
    <select class=filtroUsuario id="filtro">
      <option selected value="0">Filtros</option>
      <option value="">Docentes cátedra</option>
      <option value="">Docentes cátedra</option>
      <option value="">Docentes planta</option>
      <option value="">Talleristas bienestar</option>
      <option value="">Aprendices</option>
      <option value="">Retirados</option>

    </select>
    <a href="../perfiladministrador.html"><button id="back"><i class="fa-solid fa-arrow-left"></i></button></a>
  </section>

  <table class="tableHistorial" >
    <thead>
    <tr>
      <th class="tdNombre">Nombre Completo</th>
      <th class="tdRol">Rol</th>
      <th class="tdEstado">Estado</th>
      <th class="tdFecha2">Fecha de Registro</th>
    </tr>
    </thead>
    <tbody>
        <?php

            $sql = "SELECT * FROM usuarios";
            $consulta = mysqli_query($con ,$sql );

            if (mysqli_num_rows ($consulta) > 0)  {
            while ($resultado = mysqli_fetch_assoc($consulta)){

        ?>
    <tr>
      <td class="tdNombre"><?php echo $resultado["nom"] ?></td>
      <td class="tdRol"><?php echo $resultado["rol"] ?></td>
      <td class="tdEstado">Activo</td>
      <td class="tdFecha2"><?php echo $resultado["date"] ?></td>
      <td class="tdIconos"><a href="../EditarU.html"><i id="editarUsuario" class="fa-solid fa-user-pen"></i></a><i
          onclick="window.desactivar.showModal();" class="fa-solid fa-user-slash"></i></td>
    </tr>
    </tbody>
        <?php

            }}else{
                echo "Error, No resultados";
            }

        ?>
  </table>
  <dialog id="desactivar" class="desactivar">
    <h2>¿Está seguro de que quiere desactivar este usuario?</h2>
    <br>
    <button onclick="window.desactivar.close();" class="continue3">Desactivar</button>
    <button onclick="window.desactivar.close();" class="cancel3">Cancelar</button>
  </dialog>
  <a href="../agregarUsuario.html"><button class="botonAñadir">Agregar</button></a>
  <footer>
    <div class="footer1">
      <img src="../../img/LogoFooter.png" alt="Logo uniempresarial y cámara de comercio">
      <p>Institución de educación superior sujeta a la inspección y vigilancia del Ministerio de Educación / SNIES 2738
      </p>
    </div>
    <div class="footer2">
      <p>Todos los derechos reservados © 2020 -2022 Fundación Universitaria de la Cámara de Comercio de Bogotá
        Uniempresarial | Términos, politicas y Condiciones de Servicio Resolución 598 del Ministerio de Educación.
        Registro Icfes 2738.</p>
    </div>
  </footer>
  <script src="https://kit.fontawesome.com/0bf8ac12b9.js" crossorigin="anonymous"></script>
  <script src="../../Scripts/Redirigir.js"></script>
</body>

</html>
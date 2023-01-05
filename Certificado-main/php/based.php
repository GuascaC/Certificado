<?php
    date_default_timezone_set("America/Bogota");
    include 'conexion.php';
    $nombre = $_POST['nombre'];
    $apel = $_POST['apel'];
    $mail = $_POST['mail'];
    $t_doc = $_POST['t_doc'];
    $doc = $_POST['doc'];
    $rol = $_POST['rol'];
    $t_contrato = $_POST['t_contrato'];
    $t_pago = $_POST['t_pago'];
    $salario = $_POST['salario'];
    $date = date("d-m-Y H:i:s");

    $nom = $nombre . $apel;

    $sql = "INSERT INTO usuarios(nom, email, t_doc, doc, rol, t_contrato, t_pago, salario, date) VALUES ('$nom','$mail','$t_doc','$doc','$rol','$t_contrato','$t_pago','$salario','$date')";

    echo $sql;

    $consulta = mysqli_query($con,$sql) ;

    if ($consulta > 0) {
        header json_encode("php/table.php");
    }

?>
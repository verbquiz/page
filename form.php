<?php	
	$conexion=new mysqli('localhost','root','','verbos');

	$nombre=$_POST['nombre'];
	$usuario=$_POST['usuario'];
	$correo=$_POST['correo'];
	$telefono=$_POST['telefono'];
	$password=$_POST['password'];

	if (isset($_POST['insertar'])) {
		$insertar="INSERT INTO USUARIOS (nombre,usuario,correo,telefono,password) VALUES ('$nombre','$usuario','$correo','$telefono',$password)";

		$sql=mysqli_query($conexion,$insertar);

		header('location: index.html');
	}
?>
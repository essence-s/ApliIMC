<?php

include 'clase.php';

$hola=new Individuo();


echo $hola->setEdad($_POST['peso']);
echo $hola->setPeso($_POST['peso']);
echo $hola->setAltura($_POST['altura']);
// echo $hola->getEdad();
// echo $hola->calculo();
// echo "<br> <br>";
// echo $hola->estado();
// echo "seeeeees";

$datos = array(
	'calculo' => $hola->calculo() , 
	'estado' => $hola->estado()
);

echo json_encode($datos);



?>
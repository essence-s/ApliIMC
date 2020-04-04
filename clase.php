<?php

class Individuo{

	public $peso=0;
	public $altura=0;
	public $edad=0;

	function getPeso(){
		return $this->peso;
	}
	function getAltura(){
		return $this->altura;
	}
	function getEdad(){
		return $this->edad;
	}


	//
	function setPeso($valor){
		$this->peso=$valor;
	}
	function setAltura($valor){
		$this->altura=$valor;
	}
	function setEdad($valor){
		$this->edad=$valor;
	}


	function calculo(){
		return  $this->getPeso()/($this->getAltura()*$this->getAltura());
	}

	function estado(){
		if ($this->calculo()< 18.5) {
			return 0;
		}elseif ($this->calculo()>=18.5 and $this->calculo()<=24.9) {
			return 1;
		}elseif ($this->calculo()>=25.0 and $this->calculo()<=29.9) {
			return 2;
		}elseif ($this->calculo()>30) {
			return 3;
		}
	}

}


?>
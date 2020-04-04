
let posicionCuadro=document.querySelectorAll('.cuadro');

let textIMC=document.querySelectorAll('.imcRe');

posicionCuadro.forEach(pCua=>{
	pCua.style.display='none';					
});

btnCAl.addEventListener('click',function(){
	// const envi ={
	// 	peso:peso.value,
	// 	altura:altura.value
	// }
	if (!(peso.value=='' && altura.value=='')) {
				

		secfir.style.display='none';
		secResult.style.display='block';
		const envi =new FormData();

		envi.append('peso',peso.value);
		envi.append('altura',altura.value);
		// console.log(post);

		fetch('obte.php',{
			method:'POST',
			body:envi
		})
		.then(data=>data.text())
		.then(data=>{
	      		// console.log(Number.parseFloat(data).toFixed(2));
	      		console.log(data);
	      		let datosA=JSON.parse(data);
	      		console.log(datosA.calculo);

	      		textIMC.forEach(re=>{
	      			re.innerHTML=Number.parseFloat(datosA.calculo).toFixed(2);
	      		});
	      		
					posicionCuadro.forEach(pCua=>{
						pCua.style.display='none';					
	      			});

	      		if (datosA.estado==0) {
	      			
	      			posicionCuadro[0].style.display='block';
	      			
	      		}
	      		else if(datosA.estado==1){
	      			
	      			posicionCuadro[1].style.display='block';
	      		}
	      		else if(datosA.estado==2){
	      			
	      			posicionCuadro[2].style.display='block';
	      		}
	      		else if(datosA.estado==3){
	      			
	      			posicionCuadro[3].style.display='block';
	      		}
		});

	}
})



regresobtn.addEventListener('click',function(){
	secfir.style.display='block';
	secResult.style.display='none';
});
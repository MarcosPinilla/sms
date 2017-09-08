$(document).ready(function() {
	var m;
	var mayus = false;
	var tiempo;
	var msj = "";
	
	/*
	//ESTRUCTURA BASICA:

	//al hacer click:
	$("#btn2").click(function() {
		//reset al tiempo
		clearTimeout(tiempo);
		//creo la variable letra para almacenar la letra presionada en el boton
		var letra = $("#btn2").val();
		
		//compruebo si la tecla mayuscula está activada
		if (mayus) {
			letra = letra.toUpperCase();
		}
		
		//comparo la letra y la agrego a la pantalla (tolowercase para no repetir proceso con mayusculas, fuerzo a que la comparacionse haga en minusculas)
		if (letra.toLowerCase() == 'a') {
			if (msj != "") {
				// utilizo slice para moverme en la pantalla y poner la letra correcta
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn2").val('b');
		} else if (letra.toLowerCase() == 'b') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn2").val('c');
		} else if (letra.toLowerCase() == 'c') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn2").val('a');
		}
		
		//asigno un tiempo de espera para proxima letra.
		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn2").val('a');
		}, 800);
	});
	*/


	$("#btn2").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn2").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'a') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn2").val('b');
		} else if (letra.toLowerCase() == 'b') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn2").val('c');
		} else if (letra.toLowerCase() == 'c') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn2").val('a');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn2").val('a');
		}, 800);
	});

	$("#btn3").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn3").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'd') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn3").val('e');
		} else if (letra.toLowerCase() == 'e') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn3").val('f');
		} else if (letra.toLowerCase() == 'f') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn3").val('d');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn3").val('d');
		}, 800);
	});

	$("#btn4").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn4").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'g') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn4").val('h');
		} else if (letra.toLowerCase() == 'h') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn4").val('i');
		} else if (letra.toLowerCase() == 'i') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn4").val('g');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn4").val('g');
		}, 800);
	});

	$("#btn5").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn5").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'j') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn5").val('k');
		} else if (letra.toLowerCase() == 'k') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn5").val('l');
		} else if (letra.toLowerCase() == 'l') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn5").val('j');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn5").val('j');
		}, 800);
	});

	$("#btn6").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn6").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'm') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn6").val('n');
		} else if (letra.toLowerCase() == 'n') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn6").val('o');
		} else if (letra.toLowerCase() == 'o') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn6").val('m');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn6").val('m');
		}, 800);
	});

	$("#btn7").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn7").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'p') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn7").val('q');
		} else if (letra.toLowerCase() == 'q') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn7").val('r');
		} else if (letra.toLowerCase() == 'r') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn7").val('s');
		} else if (letra.toLowerCase() == 's') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn7").val('p');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn7").val('p');
		}, 800);
	});

	$("#btn8").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn8").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 't') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn8").val('u');
		} else if (letra.toLowerCase() == 'u') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn8").val('v');
		} else if (letra.toLowerCase() == 'v') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn8").val('t');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn8").val('t');
		}, 800);
	});

	$("#btn9").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn9").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'w') {
			if (msj != "") {
				m = msj.slice(0, -1);
				msj = m;
			}
			msj += letra;
			$("#texto").val(msj);
			$("#btn9").val('x');
		} else if (letra.toLowerCase() == 'x') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn9").val('y');
		} else if (letra.toLowerCase() == 'y') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn9").val('z');
		} else if (letra.toLowerCase() == 'z') {
			m = msj.slice(0, -1);
			msj = m;
			msj += letra;
			$("#texto").val(msj);
			$("#btn9").val('w');
		}

		tiempo = setTimeout(function() {
			msj = msj + " ";
			$("#texto").val(msj);
			$("#btn9").val('w');
		}, 800);
	});


	$("#btnaste").click(function() {
		borrarLetra();
	});
	$("#btncero").click(function() {
		msj += " ";
		$("#texto").val(msj);
	});
	$("#btngato").click(function() {
		if (mayus) {
			mayus = false;
		} else {
			mayus = true;
		}
	});

	function borrarLetra() {
		var m = msj.slice(0, -2);
		msj = m;
		$("#texto").val(msj);
	}
});
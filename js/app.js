let firstName = 'Javi';
let lastName = 'Herrera';

console.log('Hola mi nombre es ' + firstName + ' y estoy aprendiendo mucho JS');

console.log(`Hola mi nombre es ${firstName} y estoy aprendiendo mucho JS`);

// Declaración de la función
function saludar (nombre) {
	if (nombre === undefined) {
		return 'Hola visitante';
	}
	return 'Hola ' + nombre;
}

// Invocación de la función
let elSaludo = saludar('Pedro');
console.log(elSaludo);

console.log( saludar() );

function sumar (n1, n2) {
	if (n1 === undefined && n2 === undefined) {
		return 0
	} else if (n1 >= 0 && n2 === undefined) {
		return n1;
	} else if (n2 >= 0 && n1 === undefined) {
		return n2;
	}

	return n1 + n2;
}

console.log( sumar(123, 45) );
console.log( sumar() );
console.log( sumar(45) );
console.log( sumar(0,45) );

function multiplicar(n1, n2) {
	if (n1 === undefined || n2 === undefined) {
		return 0
	} 

	return n1 * n2;
}

console.group('Función Multiplicar')
console.log( multiplicar(23, 45) );
console.log( multiplicar(23) );
console.groupEnd();

function multiplicarV2(n1, n2) {
	return (n1 === undefined || n2 === undefined) ? 0 : n1 * n2;
}

console.group('IF TERNARIO');
console.log( multiplicarV2(23, 45) );
console.log( multiplicarV2() );
console.log( multiplicarV2(0) );
console.groupEnd();
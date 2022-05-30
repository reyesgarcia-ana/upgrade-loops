//window.alert("Comprobando js");

// Iteration#1 - Usa includes
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la 
//palabra "Camiseta". Usa la función .includes de javascript.


const products = [
    'Camiseta de pokemon', 
    'Pantalón coquinero', 
    'Gorra de gansta', 
    'Camiseta de Basket', 
    'Cinturón de Orión', 
    'AC/DC Camiseta'
];



function checkCamiseta (array) {

    array.forEach(element => {
        
        if (element.includes('Camiseta')) {console.log(element);}
    });

};

checkCamiseta(products);





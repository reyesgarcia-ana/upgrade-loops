//window.alert("Comprobando js");

// Iteration#1 - Usa includes --------------------------------------------------------
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

// checkCamiseta(products);

// Iteración #2: Condicionales avanzados---------------------------------------------
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y 
//añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas 
//compruébalo con un console.log.

const alumns = [

    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

function alumnsPassed (array) {

    array.forEach(element => {
            
        if (element.T1 === true) {
    
            if (element.T2 === true || element.T3 === true) {
                
                console.log(`${element.name} ha aprobado`);
                element.isApproved = true;
            };
        
        } else if (element.T1 === false) {
    
            if (element.T2 === true && element.T3 === true) {
    
                console.log(`${element.name} ha aprobado`);
                element.isApproved = true; 
            } else {console.log (`${element.name} no ha aprobado`)};
    
        };
      
    });

};

// alumnsPassed (alumns);




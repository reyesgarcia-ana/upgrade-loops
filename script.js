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

// Iteration#3 ---------------------------------------------------
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un 
// console.log sus valores.

const placesToTravel = [
'Japon', 
'Venecia', 
'Murcia', 
'Santander', 
'Filipinas', 
'Madagascar'
];


// for (var city of placesToTravel) {
//   console.log(city);
// };

// Iteration#4 ---------------------------------------------------
// Usa un for...in para imprimir por consola los datos del alienígena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};


for (property in alien) {
  console.log(`${property}: ${alien[property]}`);
};

// Iteration#5 ---------------------------------------------------
// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos 
//que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel2 = [

    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'},
];


for (let index = 0; index < placesToTravel2.length; index++) {
    
    if (placesToTravel2[index].id === 11 || placesToTravel2[index].id === 40) {

        placesToTravel2.splice(index,1);
    }  
};

console.log(placesToTravel2);

// Iteration#6 ---------------------------------------------------
// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan 
// la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.

const toys = [

    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'},
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
];


    
for (let i = 0; i < toys.length; i++) {
        
    const element = toys[i];
    if (element.name.includes("gato")) {
            
        toys.splice(toys.indexOf(element),1);
        i--;
    };
}

console.log(toys);

    






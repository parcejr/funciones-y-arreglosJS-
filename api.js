function myfuncion(){
    //Mostrar y Ocultar contenido.
    let x = document.getElementById('p');
    x.style.display = (x.style.display == 'grid') ? 'none' : 'grid';
}
    
var sumar = document.getElementById('sumar');
//Funciones de Arreglo
var suma = (num1,num2) =>  " " + (parseInt(num1) + parseInt(num2));
sumar.innerHTML += suma(20,2);


//arreglo
var arreglo = ['HTML', 'JS','CSS'];
console.log(arreglo[0]);

//OBJETOS
var objeto = {
    nombre: 'jorge',
    apellido: 'tinoco',
    curso: 'JS',
    estado: true
}
 console.log(objeto.apellido);

 //Arreglo de Objetos
var a = [{
    curso: 'HTML',
    estado: true,
    nacionalidad: 'colombiana',
    ficha: 2 },{
    curso: 'JS',
    estado: true,
    nacionalidad: 'colombiana',
    ficha: 4 },{
    curso: 'css',
    estado: true,
    nacionalidad: 'colombiana',
    ficha: 3 },
]

console.log(a[1].curso);

//Recorrer un Objeto
for(let x of a){
    console.log(x);
}

//FECTH JS
var contenido = document.querySelector('#contenido');
var ram = document.getElementById('random');
var img = document.getElementById('imagen');
function traer(){
    //contenido.innerHTML = 'asdasgsdfhsdfhs';
    // fetch('archivo.txt')
    // .then(data => data.text())
    // .then(data => {
    //     contenido.innerHTML = `${data}`;
    // })
    const url = "https://randomuser.me/api/";
    fetch(url).then(res => res.json()).then(data => {
        //console.log(data.results);
        ram.innerHTML = `${(data.results['0'].email)}`;
        img.src = `${(data.results['0'].picture.large)}`;
    })    
}


const estudiantes = [
    {id:1, nombre:'Ana',edad:20},
    {id:2, nombre:'Juan',edad:22},
    {id:3, nombre:'Maria',edad:21},
];

const promesa = new Promise((resolve,reject) => {
    if (estudiantes.id === 1) (
        console,log("nombre: " + estudiantes,nombre)
    ) else if(estudiantes.id === 2)(
        
    )
});


promesa.then((res) => console.log("nombre: " + estudiantes.nombre))
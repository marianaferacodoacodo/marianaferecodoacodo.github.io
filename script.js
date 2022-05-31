const name = document.getElementById('nombre')
const form = document.getElementById('formulario')

form.addEventListener('submit', e=>{
    e.preventDefault()
    if(name.value.length < 0){
        alert("Ingrese nombre")
    }
})


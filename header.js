 
  

    let marco = document.getElementById('btn-activar')
      marco.addEventListener('click', () => {
        
         var activar = document.getElementById('mostrarMensaje')
         activar.classList.remove('marco-not')
         activar.classList.add('marco')

      })
    
   let ocultar = document.getElementById('ocultar') 
      ocultar.addEventListener('click', () => {

        var ocultar = document.getElementById('mostrarMensaje') 
         ocultar.classList.remove('marco')
         ocultar.classList.add('marco-not')
      })
   
   
  function limpiar(){
   infoMensaje.reset();
   console.log("hola");
  }

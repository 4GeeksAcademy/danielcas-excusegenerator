import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
      // Componentes de las excusas
      
      console.log("Hello Rigo from the console!");
      let sujetos = ["Mi perro","El Wi-Fi","Mi teclado","Un apagón","El Uber","Mi alarma"];
      let verbos = ["se cayó","falló","se apagó","se rompió","dejó de funcionar","se quedó sin batería","se retrasó","me dejó tirado"];
      let conectores = ["justo cuando","precisamente mientras","en el momento en que","apenas","antes de que"];
      let acciones = ["iba a entregarte el trabajo","estaba subiendo el archivo","arranqué la reunión","salía de casa","hice clic en 'Enviar'"];
      let extras = ["y no tuve forma de recuperarlo","y me quedé sin tiempo","y se perdió todo","y el internet murió","y no arrancó más","y la PC se reinició","y me dejó incomunicado",];
      let tiempos = ["hoy","esta mañana","hace un rato","anoche","hace 10 minutos","a última hora","justo ahora"];
      let cierres = ["prometo enviarlo apenas se estabilice todo","¿Podemos reprogramar para más tarde?","ya estoy arreglándolo.","te paso avances en 30 min.","estoy subiendo un fix."];
      
      //function
      
      function generarExcusa() {
            let miSujetos  = sujetos[Math.floor(Math.random()    * sujetos.length)];
            let miVerbos = verbos[Math.floor(Math.random() * verbos.length)];
            let miConectores    = conectores[Math.floor(Math.random()   * conectores.length)];
            let miAcciones = acciones[Math.floor(Math.random()   * acciones.length)];
            let miExtras = extras[Math.floor(Math.random()   * extras.length)];
            let miTiempos = tiempos[Math.floor(Math.random()   * tiempos.length)];
            let miCierres = cierres[Math.floor(Math.random()   * cierres.length)];
            return `${miSujetos}  ${miVerbos}  ${miConectores} ${miAcciones} ${miExtras} ${miTiempos} ${miCierres}`; 
      }
      let excuseElement = document.querySelector('#excuse');
      excuseElement.innerHTML = generarExcusa();
};
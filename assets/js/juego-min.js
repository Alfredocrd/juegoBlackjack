const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],n=["A","J","Q","K"];let o=[];const s=document.querySelector("#btnPedir"),r=document.querySelector("#btnDetener"),a=(document.querySelector("#btnNuevo"),document.querySelectorAll(".divCartas")),l=document.querySelectorAll("small"),c=()=>{e=[];for(let n=2;n<=10;n++)for(const o of t)e.push(n+o);for(const o of t)for(const t of n)e.push(t+o);return _.shuffle(e)},d=()=>{if(0===e.length)throw"Error no hay mas cartas en el deck";return e.pop()},i=(e,t)=>(o[t]=o[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),l[t].innerText=o[t],o[t]),u=(e,t)=>{const n=document.createElement("img");n.src=`./assets/cartas/${e}.png`,n.classList.add("carta"),a[t].append(n)},f=e=>{let t=0;do{const e=d();t=i(e,o.length-1),u(e,o.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=o;setTimeout(()=>{t===e?alert("Ninguno de los 2 Gana :S "):e>21?alert(" Gana el CPU :( "):t>21?alert(" Ganasteeee!!!! :D  "):alert(" Gana el CPU :( ")},100)})()};return s.addEventListener("click",()=>{const e=d(),t=i(e,0);u(e,0),t>21?(console.warn(" Los Siento Has Perdido, Te Pasaste De 21 Puntos!!! "),s.disabled=!0,r.disabled=!0,f(t)):21===t&&(console.warn("21, Genial!!!"),s.disabled=!0,r.disabled=!0,f(t))}),r.addEventListener("click",()=>{s.disabled=!0,r.disabled=!0,f(o[0])}),{nuevoJuego:(t=2)=>{e=c(),o=[];for(let e=0;e<t;e++)o.push(0);l.forEach(e=>e.innerText=0),a.forEach(e=>e.innerText=""),s.disabled=!1,r.disabled=!1}}})();
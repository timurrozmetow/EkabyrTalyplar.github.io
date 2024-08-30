let login = prompt("Adynyz:", "");
let pass = prompt("Kodynyz:", "");

let Ady = 'Amangul12';
let kod = '865832616';
if (pass == null || login == null) window.location="kod.html";
else if (pass === kod && login === Ady)
    window.location="main.html";
else window.location="kod.html";


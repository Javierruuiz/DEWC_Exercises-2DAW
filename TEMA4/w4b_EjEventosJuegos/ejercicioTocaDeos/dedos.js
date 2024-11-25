var registrarEventos = false;
var cachePuntosTactiles = new Array();

function habilitarRegistro(ev) {
  registrarEventos = !registrarEventos;
}

function registrar(nombre, ev, imprimirIdsObjetivo) {
  var salida = document.getElementsByTagName("output")[0];
  var s = nombre + ": toques = " + ev.touches.length +
          " ; toquesObjetivo = " + ev.targetTouches.length +
          " ; toquesCambiados = " + ev.changedTouches.length;
  salida.innerHTML += s + " <br>";

  if (imprimirIdsObjetivo) {
    s = "";
    for (var i = 0; i < ev.targetTouches.length; i++) {
      s += "... id = " + ev.targetTouches[i].identifier + " <br>";
    }
    salida.innerHTML += s;
  }
}

function limpiarRegistro(evento) {
  var salida = document.getElementsByTagName("output")[0];
  salida.innerHTML = "";
}

function actualizarFondo(ev) {
  switch (ev.targetTouches.length) {
    case 1:
      ev.target.style.background = "amarillo";
      document.getElementsById("div").innerText = "haspulsado "+ ev.changedTouches;
      break;
    case 2:
      ev.target.style.background = "rosa";
      document.getElementsById("div").innerText = "has por 2 vecespulsado "+ ev.changedTouches;

      break;
    default:
      ev.target.style.background = "celeste";
  }
}

function manejarPellizcoZoom(ev) {
  if (ev.targetTouches.length == 2 && ev.changedTouches.length == 2) {
    var punto1 = -1, punto2 = -1;
    for (var i = 0; i < cachePuntosTactiles.length; i++) {
      if (cachePuntosTactiles[i].identifier == ev.targetTouches[0].identifier) punto1 = i;
      if (cachePuntosTactiles[i].identifier == ev.targetTouches[1].identifier) punto2 = i;
    }
    if (punto1 >= 0 && punto2 >= 0) {
      var diff1 = Math.abs(cachePuntosTactiles[punto1].clientX - ev.targetTouches[0].clientX);
      var diff2 = Math.abs(cachePuntosTactiles[punto2].clientX - ev.targetTouches[1].clientX);

      var UMBRAL_PELLIZCO = ev.target.clientWidth / 10;
      if (diff1 >= UMBRAL_PELLIZCO && diff2 >= UMBRAL_PELLIZCO)
        ev.target.style.background = "verde";
    } else {
      cachePuntosTactiles = new Array();
    }
  }
}

function manejador_inicio(ev) {
  ev.preventDefault();
  if (ev.targetTouches.length == 2) {
    for (var i = 0; i < ev.targetTouches.length; i++) {
      cachePuntosTactiles.push(ev.targetTouches[i]);
    }
  }
  if (registrarEventos) registrar("inicioToque", ev, true);
  actualizarFondo(ev);
}

function manejador_movimiento(ev) {
  ev.preventDefault();
  if (registrarEventos) registrar("movimientoToque", ev, false);
  
  if (!(ev.touches.length == 2 && ev.targetTouches.length == 2))
    actualizarFondo(ev);

  ev.target.style.outline = "punteado";

  manejarPellizcoZoom(ev);
}

function manejador_fin(ev) {
  ev.preventDefault();
  if (registrarEventos) registrar(ev.type, ev, false);
  if (ev.targetTouches.length == 0) {
    ev.target.style.background = "blanco";
    ev.target.style.outline = "1px solid black";
  }
}

function configurar_manejadores(nombre) {
  var el = document.getElementById(nombre);
  el.ontouchstart = manejador_inicio;
  el.ontouchmove = manejador_movimiento;
  el.ontouchcancel = manejador_fin;
  el.ontouchend = manejador_fin;
}

function inicializar() {
  configurar_manejadores("objetivo1");
  configurar_manejadores("objetivo2");
  configurar_manejadores("objetivo3");
  configurar_manejadores("objetivo4");
}
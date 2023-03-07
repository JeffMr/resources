/* Coleta a mensagem através de "msgBlog" e envia para "notificacoes-barra" */
var notificacoesBarra = document.getElementById("notificacoes-barra");
var texto = document.getElementById("msgBlog").innerHTML;

setInterval(function () {
  texto = texto.substring(1) + texto.substring(0, 1);
  notificacoesBarra.innerHTML = texto;
}, 200);
$(document).ready(function() {
});

// Conexión por webSocket y suscripción a "chat/sendMessage". Cada vez que alguien mande un mensaje a esa dirección se ejecuta la función pedirNumero().
function conectar() {
    var socket = new SockJS('/chat-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/chat/sendMessage', function (valorFinal) {
            pedirNumero();
        });
    });
}

// Pedido restful por rest del número actual (estado de los recursos de la base, en el juego). Actualización de la pantalla con los datos actualizados del servidor (o base)
async function pedirNumero(){

    const request = await fetch('pedirNumero', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
    const numeroPedido = await request.json();

    document.getElementById("numero").innerHTML = JSON.stringify(numeroPedido.valor);
}

// Función con dos métodos. 1) Fetch asincrónico restful para que el servidor ejecute la lógica pedida. 2) Ejecución de dispararWS()
async function sumarUno() {
    const request = await fetch('sumarUno', {
       method: 'GET',
       headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       },
    });
    dispararWS();
}

// Envío de mensaje por webSocket a la dirección "chat/sendMessage". Ejecuta pedirNumero() por estar suscripto automáticamente.
function dispararWS(){
    stompClient.send('/chat/sendMessage', {}, JSON.stringify({'mensaje': "mensaje"}));
}

function desconectar() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
}


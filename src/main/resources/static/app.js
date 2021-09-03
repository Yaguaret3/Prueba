$(document).ready(function() {
});

function conectar() {
    var socket = new SockJS('/chat-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/chat/sendMessage', function (valorFinal) {
            pedirNumero();
        });
    });
}

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

function dispararWS(){
    stompClient.send('/chat/sendMessage', {}, JSON.stringify({'mensaje': "mensaje"}));
}

function desconectar() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
}


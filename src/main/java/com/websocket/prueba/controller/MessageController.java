/*package com.websocket.prueba.controller;

import com.websocket.prueba.model.MessageModel;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    MessageModel mensajeADevolver = new MessageModel();

    @MessageMapping("/sumar")
    @SendTo("/chat/sendMessage")
    public MessageModel sendMessage() {

        mensajeADevolver.setMensaje("Vacío");

        return mensajeADevolver;
    }

}
*/
package com.websocket.prueba.controller;

import com.websocket.prueba.Valor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@org.springframework.web.bind.annotation.RestController
public class RestController {


    Valor valor = new Valor();

    @RequestMapping(value = "/pedirNumero", method = RequestMethod.GET)
    public Valor numeroPedido(){
        return valor;
    }

    @RequestMapping(value = "/sumarUno", method = RequestMethod.GET)
    public void sumarUno(){
        valor.setValor(valor.getValor()+1);
    }
}

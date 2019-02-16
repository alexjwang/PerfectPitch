package com.duckhacks.collaborate.api.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ErrController implements ErrorController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ErrController.class);

    @RequestMapping("/error")
    @ResponseBody
    public String handleError(HttpServletRequest request){
        LOGGER.error("Error request uri caused by " + request.getRemoteAddr() + " " + request.getAttribute("javax.servlet.forward.request_uri"));
        LOGGER.error("Error error uri caused by " + request.getRemoteAddr() + " " + request.getAttribute("javax.servlet.error.request_uri"));
        LOGGER.error("Error message " + request.getRemoteAddr() + " " + request.getAttribute("javax.servlet.error.message"));


        /*
        Enumeration e = request.getAttributeNames();
        while (e.hasMoreElements()){
            String s = (String) e.nextElement();
            LOGGER.debug(s + " " + request.getAttribute(s));
        }
        */


        Exception exception = (Exception) request.getAttribute("javax.servlet.error.exception");
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");

        LOGGER.error("handleError " + statusCode, exception);
        return "<html><body>Sorry, an error has occurred</body></html>";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }

}

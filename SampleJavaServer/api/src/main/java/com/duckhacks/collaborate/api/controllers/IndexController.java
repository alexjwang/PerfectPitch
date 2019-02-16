package com.duckhacks.collaborate.api.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
public class IndexController {


    @GetMapping("/")
    @ResponseBody
    public String getIndex(HttpServletRequest request) {
        return "<html><body>Collaborate API Server</body></html>";
    }
}

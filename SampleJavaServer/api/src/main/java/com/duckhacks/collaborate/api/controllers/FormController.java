package com.duckhacks.collaborate.api.controllers;

import com.duckhacks.collaborate.api.model.Form;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FormController {


    @GetMapping(path = "/forms/getTop10", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public List<Form> getTop10() {
        List<Form> forms = new ArrayList<>();

        //Read from DB HERE
        Form form = new Form();
        form.setSubmitterEmail("donald@whitehouse");
        form.setSummary("I'd like a wall");

        forms.add(form);
        return forms;
    }

    @PostMapping(path = "/forms/save", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String saveForm(ServletRequest request) {

        //write to DB here

        return "<html><body>Thanks " + request.getParameter("email") + "</body></html>";

    }

}

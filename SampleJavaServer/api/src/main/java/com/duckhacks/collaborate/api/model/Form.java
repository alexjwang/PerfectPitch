package com.duckhacks.collaborate.api.model;

public class Form {

    private String submitterEmail;
    private String summary;

    public Form() {
    }

    public String getSubmitterEmail() {
        return submitterEmail;
    }

    public void setSubmitterEmail(String submitterEmail) {
        this.submitterEmail = submitterEmail;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    @Override
    public String toString() {
        return "Form{" +
                "submitterEmail='" + submitterEmail + '\'' +
                ", summary='" + summary + '\'' +
                '}';
    }
}

package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String arg0)  {
        new LoginPage().enterEmailId("PariPatel@gmail.com");
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String arg0) {
        new LoginPage().enterPassword("123456");
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        new LoginPage().getErrorMessage();
    }
}

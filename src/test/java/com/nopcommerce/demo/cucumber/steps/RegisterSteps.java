package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterSteps {
    @When("^User click on register link$")
    public void userClickOnRegisterLink() {

    }

    @Given("^User is on register page$")
    public void userIsOnRegisterPage() {
    }

    @Then("^I should navigate to Register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
    }

    @And("^User click on register button$")
    public void userClickOnRegisterButton() {
    }

    @Then("^User should get the error message$")
    public void userShouldGetTheErrorMessage() {
    }

    @And("^User select gender \"([^\"]*)\"$")
    public void userSelectGender(String arg0)  {
        new RegisterPage().selectGender("Female");
    }

    @And("^User enter first name \"([^\"]*)\"$")
    public void userEnterFirstName(String arg0) {
        new RegisterPage().enterFirstName("Pari");
    }

    @And("^User enter last name \"([^\"]*)\"$")
    public void userEnterLastName(String arg0) {
        new RegisterPage().enterLastName("Patel");
    }

    @And("^User select date of birth \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void userSelectDateOfBirth(String arg0, String arg1, String arg2)  {
        new RegisterPage().selectDateOfBirth("14","May","1996");
    }

    @And("^User enter email \"([^\"]*)\"$")
    public void userEnterEmail(String arg0) {
        new RegisterPage().enterEmail("PariPatel1234@gmail.com");
    }

    @And("^User enter password \"([^\"]*)\"$")
    public void userEnterPassword(String arg0) {
        new RegisterPage().enterPassword("123456");
    }

    @And("^User enter confirm password \"([^\"]*)\"$")
    public void userEnterConfirmPassword(String arg0) {
        new RegisterPage().enterConfirmPassword("123456");
    }

    @Then("^User click on continue button$")
    public void userClickOnContinueButton() {
    }
}

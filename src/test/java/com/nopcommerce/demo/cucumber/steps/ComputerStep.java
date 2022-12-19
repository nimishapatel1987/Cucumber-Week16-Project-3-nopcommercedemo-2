package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.ComputerPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class ComputerStep {
    @And("^I click on Menu Tab \"([^\"]*)\"$")
    public void iClickOnMenuTab(String arg0) {
    }

    @Then("^User should navigate on Computer page successfully$")
    public void userShouldNavigateOnComputerPageSuccessfully() {
    }

    @And("^I click on submenu \"([^\"]*)\"$")
    public void iClickOnSubmenu(String arg0){
    }

    @Then("^User should navigate to Desktop page Successfully$")
    public void userShouldNavigateToDesktopPageSuccessfully() {
    }

    @And("^User select product \"([^\"]*)\"$")
    public void userSelectProduct(String arg0) {
    }

    @And("^User click on select Processor \"([^\"]*)\"$")
    public void userClickOnSelectProcessor(String arg0) {
    }

    @And("^User click on select RAM \"([^\"]*)\"$")
    public void userClickOnSelectRAM(String arg0) {
    }

    @And("^User click on select HDD \"([^\"]*)\"$")
    public void userClickOnSelectHDD(String arg0) {
    }

    @And("^User click on select OS \"([^\"]*)\"$")
    public void userClickOnSelectOS(String arg0) {
    }

    @And("^User click on select Software \"([^\"]*)\"$")
    public void userClickOnSelectSoftware(String arg0) {
    }

    @And("^User click on addtocart button$")
    public void userClickOnAddtocartButton() {
    }

    @Then("^User should see the product successfully added to the cart$")
    public void userShouldSeeTheProductSuccessfullyAddedToTheCart() {
    }
}

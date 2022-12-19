Feature: RegisterPageTest

  Scenario: User should navigate to register page successfully
    Given User is on register page
    When User click on register link
    Then I should navigate to Register page successfully

  Scenario: Verify the Firstname, Lastname, Email, Password and Confirm password fields
    Given User is on register page
    When User click on register link
    And User click on register button
    Then User should get the error message

  Scenario: User Should create account successfully
    Given User is on register page
    When User click on register link
    And User select gender "Female"
    And User enter first name "Pari"
    And User enter last name "Patel"
    And User select date of birth "14","May","1996"
    And User enter email "PariPatel1234@gmail.com"
    And User enter password "123456"
    And User enter confirm password "123456"
    And User click on register button
    And User should get the error message
    Then User click on continue button


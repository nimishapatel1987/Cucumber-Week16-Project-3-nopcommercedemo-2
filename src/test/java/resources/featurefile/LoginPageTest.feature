Feature: Login Test
  As user I want to login into nop commerce website

  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I enter email "primeeight@gmail.com"
    And I enter password "abc123"
    And I click on login button
    Then I should login successfully

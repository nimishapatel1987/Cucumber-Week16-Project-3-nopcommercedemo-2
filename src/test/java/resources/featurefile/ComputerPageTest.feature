Feature: Computer Test

  @smoke
  @regression
  Scenario: User should navigate to computer successfully
    When I am on homepage
    And I click on Menu Tab "Computers"
    Then User should navigate on Computer page successfully

  @sanity
  @regression
  Scenario: User should navigate to desktops page successfully
    When I am on homepage
    And I click on Menu Tab "Computers"
    And I click on submenu "Desktops"
    Then User should navigate to Desktop page Successfully

  @regression
  Scenario: User should buid your own computer and add to cart successfully
    When I am on homepage
    And I click on Menu Tab "Computer"
    And I click on submenu "Desktops"
    And User select product "Build your own computer"
    And User click on select Processor "<processor>"
    And User click on select RAM "<ram>"
    And User click on select HDD "<hdd>"
    And User click on select OS "<os>"
    And User click on select Software "<software>"
    And User click on addtocart button
    Then User should see the product successfully added to the cart

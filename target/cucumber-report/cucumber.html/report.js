$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8667244600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to computer successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-to-computer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should navigate on Computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 528160599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerStep.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 4900299,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.userShouldNavigateOnComputerPageSuccessfully()"
});
formatter.result({
  "duration": 23200,
  "status": "passed"
});
formatter.after({
  "duration": 1095827501,
  "status": "passed"
});
formatter.before({
  "duration": 4255942200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to desktops page successfully",
  "description": "",
  "id": "computer-test;user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on submenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should navigate to Desktop page Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 129100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerStep.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerStep.iClickOnSubmenu(String)"
});
formatter.result({
  "duration": 108799,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.userShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 59199,
  "status": "passed"
});
formatter.after({
  "duration": 1213203901,
  "status": "passed"
});
formatter.before({
  "duration": 4211749799,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should buid your own computer and add to cart successfully",
  "description": "",
  "id": "computer-test;user-should-buid-your-own-computer-and-add-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Menu Tab \"Computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on submenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on select Processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on addtocart button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should see the product successfully added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 40199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 21
    }
  ],
  "location": "ComputerStep.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 96901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerStep.iClickOnSubmenu(String)"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 21
    }
  ],
  "location": "ComputerStep.userSelectProduct(String)"
});
formatter.result({
  "duration": 85999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cprocessor\u003e",
      "offset": 32
    }
  ],
  "location": "ComputerStep.userClickOnSelectProcessor(String)"
});
formatter.result({
  "duration": 90500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cram\u003e",
      "offset": 26
    }
  ],
  "location": "ComputerStep.userClickOnSelectRAM(String)"
});
formatter.result({
  "duration": 137500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chdd\u003e",
      "offset": 26
    }
  ],
  "location": "ComputerStep.userClickOnSelectHDD(String)"
});
formatter.result({
  "duration": 121100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cos\u003e",
      "offset": 25
    }
  ],
  "location": "ComputerStep.userClickOnSelectOS(String)"
});
formatter.result({
  "duration": 80200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csoftware\u003e",
      "offset": 31
    }
  ],
  "location": "ComputerStep.userClickOnSelectSoftware(String)"
});
formatter.result({
  "duration": 91400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.userClickOnAddtocartButton()"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.userShouldSeeTheProductSuccessfullyAddedToTheCart()"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.after({
  "duration": 1216618400,
  "status": "passed"
});
formatter.uri("LoginPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4050685399,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter email \"primeeight@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primeeight@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 20269433000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Email\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [91e77a8662d699a8c885cce25ff85de0, findElement {using\u003did, value\u003dEmail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Nimisha\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:2435}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:2435/devtool..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 91e77a8662d699a8c885cce25ff85de0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy26.sendKeys(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.sendTextToElement(Utility.java:75)\r\n\tat com.nopcommerce.demo.pages.LoginPage.enterEmailId(LoginPage.java:51)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginStep.iEnterEmail(LoginStep.java:17)\r\n\tat ✽.When I enter email \"primeeight@gmail.com\"(LoginPageTest.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iShouldLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2625988401,
  "status": "passed"
});
formatter.uri("RegisterPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterPageTest",
  "description": "",
  "id": "registerpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4522495000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "registerpagetest;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to Register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userIsOnRegisterPage()"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 43601,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.after({
  "duration": 1152808901,
  "status": "passed"
});
formatter.before({
  "duration": 4001859000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify the Firstname, Lastname, Email, Password and Confirm password fields",
  "description": "",
  "id": "registerpagetest;verify-the-firstname,-lastname,-email,-password-and-confirm-password-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should get the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userIsOnRegisterPage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 21801,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userShouldGetTheErrorMessage()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.after({
  "duration": 1233115399,
  "status": "passed"
});
formatter.before({
  "duration": 3926520199,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Should create account successfully",
  "description": "",
  "id": "registerpagetest;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User select gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter first name \"Pari\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select date of birth \"14\",\"May\",\"1996\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter email \"PariPatel1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enter confirm password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should get the error message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userIsOnRegisterPage()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 23999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.userSelectGender(String)"
});
formatter.result({
  "duration": 20168050301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pari",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 20071216900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#FirstName\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [61ac7cafe6b7801b647808d4011b1d53, findElement {using\u003did, value\u003dFirstName}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Nimisha\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:2487}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:2487/devtool..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 61ac7cafe6b7801b647808d4011b1d53\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy26.sendKeys(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.sendTextToElement(Utility.java:75)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.enterFirstName(RegisterPage.java:100)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.userEnterFirstName(RegisterSteps.java:39)\r\n\tat ✽.And User enter first name \"Pari\"(RegisterPageTest.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 27
    },
    {
      "val": "May",
      "offset": 32
    },
    {
      "val": "1996",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.userSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PariPatel1234@gmail.com",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.userEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "RegisterSteps.userEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.userClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.userShouldGetTheErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.userClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1402704600,
  "status": "passed"
});
});
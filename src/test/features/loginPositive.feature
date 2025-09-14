Feature: User Authentication Tests

    Background:
        Given User navigates to the application
        And User click on the login link
    
    Scenario: Login should be success
        When User enter the username as "joysaha"
        And User enter the password as "Pass@123"
        When User click on the login button
        Then Login should be success
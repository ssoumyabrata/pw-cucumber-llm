Feature: User Authentication Tests

    Background:
        Given User navigates to the application
        And User click on the login link

    Scenario: Login should not be success
        When User enter the username as "joysaha"
        And User enter the password as "PassKoushik"
        When User click on the login button
        But Login should fail
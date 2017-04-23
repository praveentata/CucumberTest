Feature: Test facebook login
	Scenario Outline: Test login with valid credentials
	Given Open chrome and start application
	When I enter valid "<username>" and valid "<password>"
	Then user should be able to login successfully
	Then application should close
	
	Examples:
	
	| username | password |
	| testing123@test.com | pass1234 |
	| testing456@test.com | pass2345 |
	| testing789@test.com | pass3456 |
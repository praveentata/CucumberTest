$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test facebook login",
  "description": "",
  "id": "test-facebook-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should close",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-facebook-login;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "testing123@test.com",
        "pass1234"
      ],
      "line": 11,
      "id": "test-facebook-login;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "testing456@test.com",
        "pass2345"
      ],
      "line": 12,
      "id": "test-facebook-login;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "testing789@test.com",
        "pass3456"
      ],
      "line": 13,
      "id": "test-facebook-login;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"testing123@test.com\" and valid \"pass1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should close",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 36515379887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123@test.com",
      "offset": 15
    },
    {
      "val": "pass1234",
      "offset": 47
    }
  ],
  "location": "SmokeTest.i_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 1563911662,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 4158258447,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_close()"
});
formatter.result({
  "duration": 4239387978,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"testing456@test.com\" and valid \"pass2345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should close",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 24854190379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing456@test.com",
      "offset": 15
    },
    {
      "val": "pass2345",
      "offset": 47
    }
  ],
  "location": "SmokeTest.i_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 622095727,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 930322671,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_close()"
});
formatter.result({
  "duration": 947020199,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"testing789@test.com\" and valid \"pass3456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should close",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 29692036541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing789@test.com",
      "offset": 15
    },
    {
      "val": "pass3456",
      "offset": 47
    }
  ],
  "location": "SmokeTest.i_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 478121949,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1185842283,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_close()"
});
formatter.result({
  "duration": 1314751628,
  "status": "passed"
});
});
package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {

	WebDriver driver;
	@Given("^Open chrome and start application$")
	public void open_chrome_and_start_application() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Desktop\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com");
		
	    
	}

	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void i_enter_valid_username_and_valid_password(String user_name, String password) throws Throwable {

		driver.findElement(By.id("email")).sendKeys(user_name);
		driver.findElement(By.id("pass")).sendKeys(password);
		
	    
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    
		driver.findElement(By.xpath("//input[starts-with(@value, 'Log')]")).click();
		
	}
	
	@Then("^application should close$") 
	public void application_should_close() throws Throwable	{
		
		driver.quit();
	}
	
}

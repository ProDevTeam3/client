import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from tests.test_variables import email, pswd


class TestLogin(unittest.TestCase):

    def test_login_click_ok(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("http://localhost/")
        driver.find_element_by_css_selector("div div button.chakra-button.btn.btn-primary.btn-block")\
            .click()
        driver.implicitly_wait(10)
        loginText = driver.find_element_by_css_selector("header > div > p").text
        self.assertEqual(loginText, "Log in to prodevteam to continue to Spis powszechny.")
        driver.implicitly_wait(10)
        driver.quit()

    def test_login_wrong_username(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("http://localhost/")
        driver.find_element_by_css_selector("div div button.chakra-button.btn.btn-primary.btn-block").click()
        driver.implicitly_wait(10)
        wrongUsername = "aaa@example.com"
        wrongPswd = "aaa"
        driver.find_element_by_id("username").send_keys(wrongUsername)
        driver.find_element_by_id("password").send_keys(wrongPswd)
        driver.find_element_by_css_selector("div > form > div > button").click()

        wrongUsernameText = driver.find_element_by_id("error-element-password").text
        self.assertEqual(wrongUsernameText, "Wrong username or password")

        driver.implicitly_wait(10)
        driver.quit()

    def test_login_ok(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("http://localhost/")
        driver.find_element_by_css_selector("div div button.chakra-button.btn.btn-primary.btn-block").click()
        driver.implicitly_wait(10)
        correctUsername = email
        correctPswd = pswd
        driver.find_element_by_id("username").send_keys(correctUsername)
        driver.find_element_by_id("password").send_keys(correctPswd)
        driver.find_element_by_css_selector("div > form > div > button").click()
        driver.implicitly_wait(10)
        formTitle = driver.find_element_by_css_selector("div.App > div div button.chakra-button + div ").text
        self.assertEqual(formTitle, "DANE OSOBOWE")

        driver.implicitly_wait(10)
        driver.quit()

    def test_redirects_to_form_after_login(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("http://localhost/")
        driver.find_element_by_css_selector("div div button.chakra-button.btn.btn-primary.btn-block").click()
        driver.implicitly_wait(10)
        correctUsername = email
        correctPswd = pswd
        driver.find_element_by_id("username").send_keys(correctUsername)
        driver.find_element_by_id("password").send_keys(correctPswd)
        driver.find_element_by_css_selector("div > form > div > button").click()
        driver.implicitly_wait(10)

        loaded = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "div#root > div.App > div img.chakra-image"))
        )
        form_url = driver.current_url
        self.assertEqual(form_url, "http://localhost/form")

        driver.implicitly_wait(10)
        driver.quit()

    def test_unable_to_see_form_before_login(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("http://localhost/form")
        driver.implicitly_wait(10)
        loaded = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR,
                "div div button.chakra-button.btn.btn-primary.btn-block"))
        )
        current_url = driver.current_url
        self.assertEqual(current_url, "http://localhost/login")

        driver.implicitly_wait(10)
        driver.quit()

    def test_logout(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("http://localhost/")
        driver.find_element_by_css_selector("div div button.chakra-button.btn.btn-primary.btn-block").click()
        driver.implicitly_wait(10)
        correctUsername = email
        correctPswd = pswd
        driver.find_element_by_id("username").send_keys(correctUsername)
        driver.find_element_by_id("password").send_keys(correctPswd)
        driver.find_element_by_css_selector("div > form > div > button").click()
        driver.implicitly_wait(10)

        loaded = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "div#root > div.App > div img.chakra-image"))
        )
        driver.find_element_by_css_selector("div.App > div button.chakra-button").click()

        loaded_login_page = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR,
                "div div button.chakra-button.btn.btn-primary.btn-block"))
        )
        current_url = driver.current_url
        self.assertEqual(current_url, "http://localhost/login")

        driver.quit()

    def test_dont_show_login_page_when_logged_in(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("http://localhost/")
        driver.find_element_by_css_selector("div div button.chakra-button.btn.btn-primary.btn-block").click()
        driver.implicitly_wait(10)
        correctUsername = email
        correctPswd = pswd
        driver.find_element_by_id("username").send_keys(correctUsername)
        driver.find_element_by_id("password").send_keys(correctPswd)
        driver.find_element_by_css_selector("div > form > div > button").click()
        driver.implicitly_wait(10)
        loaded = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "div#root > div.App > div img.chakra-image"))
        )

        driver.get("http://localhost/")
        loaded_again = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "div#root > div.App > div img.chakra-image"))
        )
        current_url = driver.current_url
        self.assertEqual(current_url, "http://localhost/form")

        driver.implicitly_wait(10)
        driver.quit()

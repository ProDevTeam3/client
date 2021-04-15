import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from tests.test_variables import email, pswd


class TestLogin(unittest.TestCase):

    def test_login_click_ok(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        #WebDriverWait(driver, timeout=20)
        driver.get("https://www.prodevteam3.ml/")
        driver.find_element_by_css_selector("div.LogIn_card__1rxj2 div button").click()
        driver.implicitly_wait(10)
        loginText = driver.find_element_by_css_selector("p.cf65953dc.c1728f1a3").text
        self.assertEqual(loginText, "Log in to prodevteam to continue to Spis powszechny.")
        driver.implicitly_wait(10)
        driver.quit()

    def test_login_wrong_username(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("https://www.prodevteam3.ml/")
        driver.find_element_by_css_selector("div.LogIn_card__1rxj2 div button").click()
        driver.implicitly_wait(10)
        wrongUsername = "aaa@example.com"
        wrongPswd = "aaa"
        driver.find_element_by_id("username").send_keys(wrongUsername)
        driver.find_element_by_id("password").send_keys(wrongPswd)
        driver.find_element_by_css_selector("div.c27fbdf34 button").click()

        wrongUsernameText = driver.find_element_by_id("error-element-password").text
        self.assertEqual(wrongUsernameText, "Wrong username or password")

        driver.implicitly_wait(10)
        driver.quit()

    def test_login_ok(self):
        driver = webdriver.Chrome(executable_path='../chromedriver/chromedriver.exe')
        driver.implicitly_wait(10)
        driver.get("https://www.prodevteam3.ml/")
        driver.find_element_by_css_selector("div.LogIn_card__1rxj2 div button").click()
        driver.implicitly_wait(10)
        correctUsername = email
        correctPswd = pswd
        driver.find_element_by_id("username").send_keys(correctUsername)
        driver.find_element_by_id("password").send_keys(correctPswd)
        driver.find_element_by_css_selector("div.c27fbdf34 button").click()
        driver.implicitly_wait(10)
        formTitle = driver.find_element_by_css_selector(".css-1plzx9x").text
        self.assertEqual(formTitle, "DANE OSOBOWE")

        driver.implicitly_wait(10)
        driver.quit()

import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


# zaloguj sie do aplikacji
def find_main_button1():
    PATH = "C:\Program Files (x86)\chromedriver.exe"
    driver = webdriver.Chrome(PATH)
    driver.get("http://localhost:3000/login")
    search = driver.find_element_by_xpath(
        '//div[@class="chakra-stack css-zsoya5"]/button[@class="chakra-button btn btn-primary btn-block css-1rihqac"]')
    search = str(search)
    print(search)
    driver.quit()
    return search


# masz problem z aplikacja
def find_main_button2():
    PATH = "C:\Program Files (x86)\chromedriver.exe"
    driver = webdriver.Chrome(PATH)
    driver.get("http://localhost:3000/login")
    search = driver.find_element_by_xpath(
        '//div[@class="chakra-stack css-zsoya5"]/button[@class="chakra-button css-16ak6a4"]')
    search = str(search)
    print(search)
    driver.quit()
    return search


# zalogowanie i przejscie do 1 strony
def zalogowanie():
    PATH = "C:\Program Files (x86)\chromedriver.exe"
    driver = webdriver.Chrome(PATH)
    driver.get("http://localhost:3000/login")
    search = driver.find_element_by_xpath(
        '//div[@class="chakra-stack css-zsoya5"]/button[@class="chakra-button btn btn-primary btn-block css-1rihqac"]')
    search.send_keys(Keys.RETURN)
    # time.sleep(3)
    login = driver.find_element_by_id('username')
    login.send_keys('test@example.com')
    password = driver.find_element_by_id('password')
    password.send_keys('1234')
    zaloguj = driver.find_element_by_xpath(
        '//div[@class="c27fbdf34"]/button[@class="cdc162597 c9ade4631 c013e8be5 c1460af88 cf69aa3a7"]')
    zaloguj.send_keys(Keys.RETURN)
    time.sleep(0.5)
    dane = driver.find_element_by_xpath('//div[@class="css-1plzx9x"]').text
    driver.quit()
    return dane


def wstawienie_danych_str1():
    # 1 strona
    PATH = "C:\Program Files (x86)\chromedriver.exe"
    driver = webdriver.Chrome(PATH)
    driver.get("http://localhost:3000/login")
    search = driver.find_element_by_xpath(
        '//div[@class="chakra-stack css-zsoya5"]/button[@class="chakra-button btn btn-primary btn-block css-1rihqac"]')
    search.send_keys(Keys.RETURN)
    # time.sleep(3)
    login = driver.find_element_by_id('username')
    login.send_keys('test@example.com')
    password = driver.find_element_by_id('password')
    password.send_keys('1234')
    zaloguj = driver.find_element_by_xpath(
        '//div[@class="c27fbdf34"]/button[@class="cdc162597 c9ade4631 c013e8be5 c1460af88 cf69aa3a7"]')
    zaloguj.send_keys(Keys.RETURN)
    time.sleep(0.5)
    imie = driver.find_element_by_xpath('//input[@id="first_name"]')
    imie.send_keys("Jakub")
    drugie_imie = driver.find_element_by_xpath('//input[@id="middle_name"]')
    drugie_imie.send_keys("Michał")
    drugie_nazwisko = driver.find_element_by_xpath('//input[@id="surname"]')
    drugie_nazwisko.send_keys("Szczepański")
    pesel = driver.find_element_by_xpath('//input[@id="PESEL"]')
    pesel.send_keys("00000000000")
    dalej = driver.find_element_by_xpath('//button[@class="chakra-button css-n82uru"]')
    dalej.send_keys(Keys.RETURN)
    driver.quit()
    return dalej


class BrowserTest(unittest.TestCase):
    def test_find_main_button1(self):
        self.assertTrue(find_main_button1())

    def test_find_main_button2(self):
        self.assertTrue(find_main_button2())

    def test_zalogowanie(self):
        self.assertEqual("DANE OSOBOWE", zalogowanie())

    def test_wstawienie_danych_str1(self):
        self.assertTrue(wstawienie_danych_str1)


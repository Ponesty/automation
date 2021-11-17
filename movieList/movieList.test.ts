import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://localhost:5500/movieList/index.html')
})
afterAll(async () => {
    await (await driver).quit()
})

test('search box should allow input and click button', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Enders Game')

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(2000)


})

test('Crossing off movie', async () =>{
    await driver.findElement(By.xpath('//span')).click()

    await driver.findElement(By.xpath('//button[@id="EndersGame"]')).click()

    await driver.sleep(2000)

})
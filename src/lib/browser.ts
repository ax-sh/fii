import puppeteer from 'puppeteer-extra'
//@ts-expect-error todo fix this weird import error
import * as StealthPlugin from 'puppeteer-extra-plugin-stealth'

export async function getStealthBrowser() {
  puppeteer.use(StealthPlugin())
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()
  return { browser, page }
}

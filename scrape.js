import puppeteer from "puppeteer";

const scrape = async (champion) => {


    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://leagueoflegends.fandom.com/wiki/Zed/LoL/Patch_history')

    const text = await page.$$eval("li>ul", els => els.map(e => e.textContent))
    console.log(text)

    
   
}

scrape()
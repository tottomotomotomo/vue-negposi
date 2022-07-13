//　Features I wanted to add

function scraping() {
  const puppeteer = require("puppeteer");
  const path = require("path");
  const fs = require("fs"); // save to text file

  (async () => {
    const browser = await puppeteer.launch();
    // Pageクラスのインスタンスを取得
    const page = await browser.newPage();
    await page.goto(`https://note.jp/n/n06a2f28bee55`);
    const xpath =
      '//*[@id="__layout"]/div/div[1]/div[2]/main/div[1]/article/div[1]/div/div/div[3]';
    const elems = await page.$x(xpath);
    const jsHandle = await elems[0].getProperty("textContent");
    const text = await jsHandle.jsonValue();
    console.log(text.length);
    console.log(text);
    // await text(page)
    await browser.close();
  })();
}

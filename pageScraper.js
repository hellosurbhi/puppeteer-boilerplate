const scraperObject = {
  //Change url to link you're scraping from
  url: 'https://surbhi.dev',
  async scraper(browser){
      let page = await browser.newPage();
      console.log(`Navigating to ${this.url}...`);
      await page.goto(this.url);

      //Enter following code here

  }
}

module.exports = scraperObject;

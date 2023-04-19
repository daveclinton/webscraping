const puppeteer = require("puppeteer");

// start puppeterr
puppeteer
  // open a new web page
  .launch()

  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("https://www.reddit.com/r/scraping/");
    await page.waitForSelector("body");

    // manipulate a page
    let grabPosts = await page.evaluate(() => {
      let allPosts = document.body.querySelectorAll(".Post");

      scrapeItems = [];
      allPosts.forEach((item) => {
        let postTitle = item.querySelector("h3");
        let postDescription = item.querySelector("p");
        scrapeItems.push({
          postTitle: postTitle ? postTitle.innerText : null,
          postDescription: postDescription ? postDescription.innerText : null,
        });
      });
      let items = {
        redditPosts: scrapeItems,
      };
      return items;
    });
    console.log(grabPosts);
  });

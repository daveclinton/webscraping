const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get("https://prudent.netlify.app/#")
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const scrapedata = $(".header__text").text();
    console.log(scrapedata);
  })
  .catch((error) => {
    console.log(error);
  });

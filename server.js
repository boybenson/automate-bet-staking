import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

const startBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto("https://www.betway.com.gh/", {
    waitUntil: "load",
    timeout: 0,
  });

  await page.type("#MobileNumber", process.env.MobileNumber);
  await page.type("#Password", process.env.Password);

  const LoginBtn = await page.waitForSelector("#Login");
  LoginBtn.click();
};

// startBrowser();

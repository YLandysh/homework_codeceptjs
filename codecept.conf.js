const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://herbiesheadshop.com',
      show: true,
      browser: 'chromium',
      video: true
    },
    REST: {},
    JSONResponse: {},
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    currentPage: './pages/current.js',
    beginnersPage: './pages/beginners.js',
    wishlistPage: './pages/wishlist.js',
    comparePage: './pages/compare.js',
    catalogPage: './pages/catalog.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'homeworkCodecept',
  "plugins": {
    "allure": {}
  },
}
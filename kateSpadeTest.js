var home = {}
var kateSpadeAssets = require('../pageAssets/kateSpadeAssets')

module.exports = {
    beforeEach: browser => {
        home = browser.page.kateSpadeObjects()
        home
        .navigate()

    },
after: browser => {
    home
    .end()
},

'all the tests': browser => {
    home.kateSpadeTests(kateSpadeAssets)
}
}
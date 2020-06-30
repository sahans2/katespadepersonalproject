const { verify } = require("crypto")

var kateSpadeCommands = {
    kateSpadeTests: function (kateSpadeAssets) {
        this
        .api.resizeWindow(1920, 1080)
    this
    .pause(2000)
    .click('@popupX')
    .click('@new')
    .verify.containsText('@verifyNew', "new")
    .click('@handbags')
    .verify.containsText('@verifyHandbags', "handbags")
    .click('@wallets')
    .verify.containsText('@verifyWallets', "wallets")
    .click('@clothing')
    .verify.containsText('@verifyClothing', "clothing")
    .click('@shoes')
    .expect.element('@verifyShoes').text.to.equal('shoes')
    this
    .click('@jewelry')
    .expect.element('@verifyJewelry').text.to.equal('jewelry')
    this
    .click('@accessories')
    .expect.element('@verifyAccessories').text.to.equal('accessories')
    this
    .click('@personalization')
    .expect.element('@verifyPersonalization').text.to.equal('personalization')
    this
    .click('@homeItems')
    .expect.element('@verifyHomeItems').text.to.equal('home')
    this
    .click('@gifts')
    .expect.element('@verifyGifts').text.to.equal('gifts')
    this
    .click('@sale')
    .verify.containsText('@verifySale', "sale")
    .click('@homeLogo')

    
    this
    .click('a[href="https://www.katespade.com/handbags/?cm_sp=junehomepage-_-spot2-cat1-handbags"]')
    .verify.containsText('@verifyHandbags2', "handbags")
    .click('@homeLogo')
    .click('a[href="https://www.katespade.com/clothing/?cm_sp=junehomepage-_-spot2-cat2-clothing"]')
    .verify.containsText('@verifyClothing2', "clothing")
    .click('@homeLogo')
    .click('a[href="https://www.katespade.com/shoes/?cm_sp=junehomepage-_-spot2-cat3-shoes"]')
    .verify.containsText('@verifyShoes2', "shoes")
    .click('@homeLogo')
    .click('a[href="https://www.katespade.com/jewelry/view-all/?cm_sp=junehomepage-_-spot2-cat4-jewelry"]')
    .verify.containsText('@verifyJewelry2', "jewelry")
    .click('@homeLogo')
    .click('a[href="https://www.katespade.com/wallets/?cm_sp=junehomepage-_-spot2-cat5-wallets"]')
    .verify.containsText('@verifyWallets2', "wallets")

    this
    .click('@search2')
    .pause(1000)
    .setValue('@searchBar',kateSpadeAssets[3])
    .click('@searchButton2')
    .verify.containsText('@verifyNecklace', kateSpadeAssets[3])
    .click('@search2')
    .pause(1000)
    .setValue('@searchBar',kateSpadeAssets[4])
    .click('@searchButton2')
    .verify.containsText('@verifyMinnie', kateSpadeAssets[4])
    .click('@search2')
    .pause(1000)
    .setValue('@searchBar',kateSpadeAssets[5])
    .click('@searchButton2')
    .verify.containsText('@verifyEarrings', kateSpadeAssets[5])
    

    this
    .click('a[class="stores-links"]')
    .pause(500)
    .click('g[class="bx-close-xstroke bx-close-x-adaptive"]')
    .setValue('@search',kateSpadeAssets[0])
    .pause(1000)
    .click('@searchButton')
    .verify.valueContains('@search', kateSpadeAssets[0])
    .pause(2000)
    .clearValue('@search')
    .pause(2000)
    .setValue('@search',kateSpadeAssets[1])
    .click('@searchButton')
    .pause(2000)
    .verify.containsText('@location', kateSpadeAssets[1])
    .pause(2000)
    .clearValue('@search')
    .setValue('@search',kateSpadeAssets[2])
    .pause(500)
    .click('@searchButton')
    .pause(500)
    .verify.containsText('@location', kateSpadeAssets[2])
 

    this
    .click('@handbags')
    .click('a[title="tiny elephant crossbody"]')
    .click('button[id="add-to-cart"]')
    .click('div[class="mini-cart-icon"]')
    .verify.containsText('@verifyElephant', "tiny elephant")  


    this
    .click('div[class="mini-cart-icon"]')
    .click('button[value="Remove"]')
    .waitForElementPresent('body')
    .verify.containsText('body', '0')
    

    
    }

}
module.exports = {
    url: 'https://www.katespade.com/',
    commands: [kateSpadeCommands],
    elements: {
        search: 'input[class="bw__SearchBarFlagship__input bw__Input sc-VigVT kvKZZG bw__Input__component"]',
        searchButton: 'span[class="bw__Icon__component bw__Icon__magnify bw__Icon sc-bwzfXH bukJnu"]',
        location: 'div[class="bw__StoreLocation__cityState"]',
        searchButton2: 'input[class="fa fa-search"]',
        homeLogo: 'h1[class="primary-logo"]',
        
        
        search2: {
            selector: '//a[contains(text(), "Search")]',
            locateStrategy: 'xpath'
        },

        searchBar: {
            selector: ('(//input[@name="q"])[2]'),
            locateStrategy: 'xpath'
},
        

        popupX: {
            selector: '//*[contains(text(), "No thanks, I")]',
            locateStrategy: 'xpath'
        },
        

        new: {
            selector:  '//a[contains(text(),"new")]',
            locateStrategy: 'xpath'
        },

        handbags: {
            selector:  '(//a[contains(text(),"handbags")])[2]',
            locateStrategy: 'xpath'
        },
   

        wallets: {
            selector: '(//a[contains(text(),"wallets")])[2]',
            locateStrategy: 'xpath'
        },

        clothing: {
            selector:  '(//a[contains(text(),"clothing")])[2]',
            locateStrategy: 'xpath'
        },

        shoes: {
            selector:  '(//a[contains(text(),"shoes")])[2]',
            locateStrategy: 'xpath'
        },

        jewelry: {
            selector:  '(//a[contains(text(),"jewelry")])[2]',
            locateStrategy: 'xpath'
        },

        accessories: {
            selector:  '(//a[contains(text(),"accessories")])[2]',
            locateStrategy: 'xpath'
        },

        personalization: {
            selector:  '//a[contains(text(),"personalization")]',
            locateStrategy: 'xpath'
        },

        homeItems: {
            selector:  '(//a[contains(text(),"home")])[3]',
            locateStrategy: 'xpath'
        },

        gifts: {
            selector:  '//a[contains(text(),"gifts")]',
            locateStrategy: 'xpath'
        },

        sale: {
            selector:  '//a[contains(text(),"sale")]',
            locateStrategy: 'xpath'
        },

        verifyNew: {
            selector: '//h1[contains(text(),"new")]',
            locateStrategy: 'xpath'
        },
        
        verifyHandbags: {
            selector: '//h1[contains(text(),"handbags")]',
            locateStrategy: 'xpath'
        },

        verifyWallets: {
            selector: '//h1[contains(text(),"wallets")]',
            locateStrategy: 'xpath'
        },

        verifyClothing: {
            selector:'(//span[contains(text(),"clothing")])[4]',
            locateStrategy: 'xpath'
        },

        verifyShoes: {
            selector: '//h1[contains(text(),"shoes")]',
            locateStrategy: 'xpath'
        },

        verifyJewelry: {
            selector: '(//span[contains(text(),"jewelry")])[6]',
            locateStrategy: 'xpath'
        },

        verifyAccessories: {
            selector: '(//span[contains(text(),"accessories")])[8]',
            locateStrategy: 'xpath'
        },

        verifyPersonalization: {
            selector: '(//span[contains(text(),"personalization")])[4]',
            locateStrategy: 'xpath'
        },

        verifyHomeItems: {
            selector: '(//span[contains(text(),"home")])[5]',
            locateStrategy: 'xpath'
        },

        verifyGifts: {
            selector: '(//span[contains(text(),"gifts")])[8]',
            locateStrategy: 'xpath'
        },

        verifySale: {
            selector: '(//span[contains(text(),"sale")])[4]',
            locateStrategy: 'xpath'
        },

        verifyHandbags2: {
            selector: '(//span[contains(text(),"handbags")])[5]',
            locateStrategy: 'xpath'
        },

        verifyClothing2: {
            selector: '(//span[contains(text(),"clothing")])[4]',
            locateStrategy: 'xpath'
        },

        verifyShoes2: {
            selector: '(//span[contains(text(),"shoes")])[4]',
            locateStrategy: 'xpath'
        },

        verifyJewelry2: {
            selector: '(//span[contains(text(),"jewelry")])[6]',
            locateStrategy: 'xpath'
        },

        verifyWallets2: {
            selector: '(//span[contains(text(),"wallets")])[11]',
            locateStrategy: 'xpath'
        },

        verifyElephant: {
            selector: '(//a[contains(text(),"tiny elephant")])[3]',
            locateStrategy: 'xpath'
        },

        verifyEmpty: {
            selector: '//div[contains(text(),"Empty")]',
            locateStrategy: 'xpath'
        },

        verifyNecklace: {
            selector: '(//a[contains(text(),"necklace")])[2]',
            locateStrategy: 'xpath'
        },

        verifyMinnie: {
        selector: '(//a[contains(text(),"minnie")])[5]',
        locateStrategy: 'xpath'

        },

        verifyEarrings: {
            selector: '(//a[contains(text(),"earrings")])[3]',
            locateStrategy: 'xpath'
    
            }


 
        
    }
}
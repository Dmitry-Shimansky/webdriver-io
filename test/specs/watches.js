import {expect as chaiExpect} from "chai";
import WatchesPage from "../pageobjects/newpage/watches.page";

describe('Watches Page', () => {


    it('should show the banner container', function () {

        WatchesPage.open();
        WatchesPage.checkLangOnPage;
        WatchesPage.bannerContainer
            .forEach((item) => {
                expect(item).toBeDisplayed();
            });
    });

    it('should show the Category title', function () {

        expect(WatchesPage.categoryTitle).toHaveTextContaining('Category');
    });

    it('should contain link and name on buttons and verify its clickable', function () {

        const watchBrands = ["Seiko", "Rolex", "Unbranded", "Omega", "Casio", "Citizen", "Bulova", "Hamilton", "Timex", "TAG Heuer", "Breitling"];

        const receivedWatchesBrands = WatchesPage.brands;

        for (let i = 0; i < watchBrands.length; i++) {
            let elem = receivedWatchesBrands.$$('li')[i].$('p').getText();
            let link = receivedWatchesBrands.$$('li')[i].$('a');
            if (elem !== '') {
                // console.log("Item for check: ", elem);
                // console.log("Looking for item in the watchBrands: ", watchBrands.find(item => item === elem));
                expect(elem).toContain(watchBrands.find(item => item === elem));
                expect(link).toHaveLinkContaining('/260324/');
                expect(link).toBeClickable();
            }
        }
    });

    it('should click on the brand button and verify the new url', function () {

        WatchesPage.brandButton.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/260325/');

        expect(browser).toHaveUrl('https://www.ebay.com/b/Watches/260325/bn_7117208191');
    });
})

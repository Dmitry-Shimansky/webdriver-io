import {expect as chaiExpect} from "chai";
import WatchesPage from "../pageobjects/newpage/watches.page";
import {waitAndClick} from "../utilities/helper";
import resources from "../resources";

describe('Watches Page', () => {

    before(() => {
        WatchesPage.open();
        WatchesPage.checkLangOnPage;
        WatchesPage.fashionLink.moveTo();
        waitAndClick(WatchesPage.watchesLink,5000);
        WatchesPage.watchPartsAccessoriesCategory.click();
    });

    after(() => {
        browser.url('https://webdriver.io/docs/pageobjects/');
        browser.pause(1000);
    });

    afterEach(() => {

    });

    it('should verify the watches category list', function () {

        WatchesPage.checkLangOnPage;
        chaiExpect(WatchesPage.getWatchesCategoryListText()).to.deep.equal(resources.watchesCategoryList);
    });

    it('should show the banner container', function () {

        WatchesPage.bannerContainer
            .forEach((item) => {
                expect(item).toBeDisplayed();
            });
    });

    it('should show the Category title', function () {

        expect(WatchesPage.categoryTitle).toHaveTextContaining('Category');
    });

    it('should contain link and name on buttons and verify its clickable', function () {
        const receivedWatchesBrands = WatchesPage.brands;

        for (let i = 0; i < resources.watchBrands.length; i++) {
            let elem = receivedWatchesBrands.$$('li')[i].$('p').getText();
            let link = receivedWatchesBrands.$$('li')[i].$('a');
            if (elem !== '') {
                // console.log("Item for check: ", elem);
                // console.log("Looking for item in the watchBrands: ", resources.watchBrands.find(item => item === elem));
                expect(elem).toContain(resources.watchBrands.find(item => item.toLowerCase() === elem.toLowerCase()));
                expect(link).toHaveLinkContaining('/260324/');
                expect(link).toBeClickable();
            }
        }
    });

    it('should click on the brand button and verify the new url', function () {

        WatchesPage.brandButton.click();
        chaiExpect(browser.getUrl()).to.include('/260325/');
    });
})

import SearchPage from '../pageobjects/newpage/search.page';
import {waitForTextCahnge} from "../utilities/helper";
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter';

describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', () => {
        SearchPage.open();
        SearchPage.checkLangOnPage;

        expect(browser).toHaveTitle(resources.homeTitle);
    });

    it('should search for a product and verify text value', () => {
        allureReporter.addSeverity('Critical');
        SearchPage.searchInput.addValue('Laptop');
        SearchPage.searchBtn.click();

        expect(SearchPage.searchInput).toHaveValue('Laptop');
    });

    it('should redirect to a new page and verify the title', function () {
        expect(browser).toHaveTitle(resources.laptopTitle);
    });

    it('should update the search category', function () {
        allureReporter.addFeature('search category');
        waitForTextCahnge(SearchPage.category, 'PC Laptops & Netbooks', 3000);
        expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
    });
});

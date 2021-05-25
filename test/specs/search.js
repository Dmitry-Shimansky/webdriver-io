describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', () => {
        browser.url('https://www.ebay.com/');

        const lang = $('html[lang]').getAttribute('lang');

        if (lang !== 'en') {
            $('#gh-eb-Geo-a-default').click();
            browser.waitUntil(() => $('#gh-eb-Geo-a-en span:nth-child(2)').isDisplayed(),
                {
                    timeout: 5000,
                    timeoutMsg: 'Element didn\'t appear'
                });
            $('#gh-eb-Geo-a-en span:nth-child(2)').click();
        }

        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });

    it('should search for a product and verify text value', () => {

        const searchInput = $('#gh-ac');
        const searchBtn = $('#gh-btn');

        searchInput.addValue('Laptop');
        searchBtn.click();

        expect(searchInput).toHaveValue('Laptop');
    });

    it('should redirect to a new page and verify the title', function () {
        expect(browser).toHaveTitle('Laptop | eBay');
    });

    it('should update the search category', function () {
        const category = $('#gh-cat-box option:nth-child(1)');
        browser.waitUntil(
            () => category.isExisting(),
            {
                timeout: 5000,
                timeoutMsg: 'Element did\'t appear'
            });
        // browser.debug();
        expect(category).toHaveText('PC Laptops & Netbooks');
    });
});

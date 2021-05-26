import Page from "./page";

class SearchPage extends Page {

    get searchInput() {
        return $('#gh-ac');
    }

    get searchBtn() {
        return $('#gh-btn');
    }

    get category() {
        const category = $('#gh-cat-box option:nth-child(1)');
        browser.waitUntil(
            () => category.isExisting(),
            {
                timeout: 5000,
                timeoutMsg: 'Element did\'t appear'
            });
        return category;
    }

    get checkLangOnPage() {
        const lang = $('html[lang]').getAttribute('lang');
        const button = $('#gh-eb-Geo-a-en span:nth-child(2)');

        if (lang !== 'en') {
            $('#gh-eb-Geo-a-default').click();
            browser.waitUntil(() => button.isDisplayed(),
                {
                    timeout: 5000,
                    timeoutMsg: 'Element didn\'t appear'
                });
            button.click();
        }
    }

    open() {
        super.open('https://www.ebay.com/')
    }
}

export default new SearchPage();

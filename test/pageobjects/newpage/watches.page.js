import Page from './page';

class WatchesPage extends Page {

    get checkLangOnPage() {
        const langOnPage = $('html[lang]').getAttribute('lang');
        const buttonEng = $('#gh-eb-Geo-a-en span:nth-child(2)');

        if (langOnPage !== 'en') {
            $('#gh-eb-Geo-a-default').click();
            browser.waitUntil(() => buttonEng.isDisplayed(),
                {
                    timeout: 5000,
                    timeoutMsg: 'Element didn\'t appear'
                });
            buttonEng.click();
        }
    }

    get bannerContainer() {
        return [
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(1)'),
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(2)'),
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(3)'),
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(4)')
        ];
    }

    get categoryTitle() {
        return $('div.pagecontainer__center.PR_right_wrap section:nth-child(1) h2');
    }

    get brands() {
        // const brands = $('div[id="s0-27-9-0-1[0]-0-1[1]-0-xCarousel"] ul');
        // console.log("brands: ", brands.$$('li')[4].$('p').getText());

        const elembrands = $$(function () {
            return this.document.querySelectorAll('div[id="s0-27-9-0-1[0]-0-1[1]-0-xCarousel"] ul')
        })[0];
        // console.log("elembrands: ", elembrands.$$('li')[2].$('p').getText());

        return elembrands;
    }

    get brandButton() {
        return $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul').$$('li')[0];
    }

    open() {
        super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535')
    }
}

export default new WatchesPage();

import {expect as chaiExpect, assert} from "chai";
import 'chai/register-should';

describe('Watches Page', () => {
    it('should show the banner container', function () {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');

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

        const watches = [
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(1)'),
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(2)'),
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(3)'),
            $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul li:nth-child(4)')
        ];

        watches.forEach((item) => {
            expect(item).toBeDisplayed();
        });
    });

    it('should show the Category title', function () {
        const category = $('div.pagecontainer__center.PR_right_wrap section:nth-child(1) h2');
        const categoryText = category.getText();
        //WebDriverIO
        expect(category).toHaveTextContaining('Category');
        //Chai expect
        chaiExpect(categoryText).to.not.be.empty;
        //Chai should
        category.should.not.be.empty;
        //Chai assert
        assert.isNotEmpty(categoryText);
    });

    it('should contain link and name on buttons and verify its clickable', function () {
        const watchBrands = ["Seiko", "Rolex", "Unbranded", "Omega", "Casio", "Citizen", "Bulova", "Hamilton", "Timex", "TAG Heuer", "Breitling"];

        const brandsTag = $('div[id="s0-27-9-0-1[0]-0-1[1]-0-xCarousel"]').getTagName();
        // console.log("brands: ", brands.$$('li')[4].$('p').getText());

        const elembrands = $$(function () {
            return this.document.querySelectorAll('div[id="s0-27-9-0-1[0]-0-1[1]-0-xCarousel"] ul')
        })[0];
        // console.log("elembrands: ", elembrands.$$('li')[2].$('p').getText());

        for (let i = 0; i < watchBrands.length; i++) {
            let elem = elembrands.$$('li')[i].$('p').getText();
            let link = elembrands.$$('li')[i].$('a');
            if (elem !== '') {
                // console.log("Item for check: ", elem);
                // console.log("Looking for item in the watchBrands: ", watchBrands.find(item => item === elem));
                expect(elem).toContain(watchBrands.find(item => item === elem));
                expect(link).toHaveLinkContaining('/260324/');
                expect(link).toBeClickable();
            }
        }
        const tag = elembrands.getTagName();
        chaiExpect(tag).to.equal('ul');
        brandsTag.should.be.equal('div');
    });

    it('should click on the brand button and verify the new url', function () {
        const button = $('div[id="s0-27-9-0-1[0]-0-1[0]-0-xCarousel-x-carousel-items"] ul').$$('li')[0];
        button.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/260325/');
    });
})

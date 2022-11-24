import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Amazon extends BasePage {
    searchBar: By = By.xpath('//input[@id= "twotabsearchtextbox"]')
    flowerLego: By = By.xpath('(//a[@class = "a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"])[3]')
    addToCart: By = By.css('#add-to-cart-button')
    cartResults: By = By.xpath('//span[@class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]')

    constructor(){
        super({url:"https://www.amazon.com/"})
    }

    async doSearch(searchTerm: string) {
        return await this.setInput(this.searchBar, `${searchTerm}\n`)
    }

    async getResults() {
        return await this.getText(this.cartResults)
    }

}
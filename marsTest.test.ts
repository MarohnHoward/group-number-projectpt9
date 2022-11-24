import {Amazon} from './marsPageObject'
const amazon = new Amazon()

describe("Quick Amazon Test", () => {
    test("Can add legos to cart", async () => {
        await amazon.navigate()
        await amazon.doSearch("Legos")
        await amazon.click(amazon.flowerLego)
        await amazon.click(amazon.addToCart)
        let results = await amazon.getResults()
        expect(results).toContain("Added to Cart")
        await amazon.driver.quit()
    })
})
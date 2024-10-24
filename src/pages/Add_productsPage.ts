import { Page, expect } from '@playwright/test';
import { product } from '../models/products';
import { Add_productsUserInterface } from '../resources/Add_productsUserInterface';

export class Add_productsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async add_product(product: product) {

        for(let i = 0; i < product.products.length; i++){

            const prod = product.products[i];
            await this.page.locator(Add_productsUserInterface.input_search).fill(prod);
            await this.page.locator(Add_productsUserInterface.button_search).click();
            await this.page.locator(Add_productsUserInterface.button_product).click();
            await this.page.locator(Add_productsUserInterface.input_quantity).fill(product.quantity);
            await this.page.locator(Add_productsUserInterface.button_add).click();
            await this.page.waitForTimeout(1000);

        }

            await this.page.locator(Add_productsUserInterface.button_shoppingcart).click();
            await this.page.locator(Add_productsUserInterface.button_checkout).click();
            await this.page.locator(Add_productsUserInterface.button_billingdetails).click();
            await this.page.locator(Add_productsUserInterface.button_deliverydetails).click();
            await this.page.locator(Add_productsUserInterface.button_deliverymethod).click();
            await this.page.check(Add_productsUserInterface.check_terms_conditions);
            await this.page.locator(Add_productsUserInterface.button_paymentmethod).click();
            await this.page.locator(Add_productsUserInterface.button_confirm_order).click();
            await expect(this.page.getByText('Your order has been placed!')).toBeVisible();
            await this.page.waitForTimeout(3000);
            await this.page.locator(Add_productsUserInterface.continue_home).click();

    }

}

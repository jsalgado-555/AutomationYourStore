import {expect, Page} from "@playwright/test";
import { add_adress } from "../models/add_adress";
import { Add_adressUserInterface } from "../resources/Add_adressUserInterface";

export class Add_adressPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async add_adress(add_adress: add_adress) {

        await this.page.locator(Add_adressUserInterface.buttom_account).click();
        await this.page.locator(Add_adressUserInterface.buttom_my_account).click();
        await this.page.locator(Add_adressUserInterface.buttom_add_adress).click();
        await this.page.locator(Add_adressUserInterface.buttom_new_adress).click();
        await this.page.locator(Add_adressUserInterface.first_name).fill(add_adress.first_name);
        await this.page.locator(Add_adressUserInterface.last_name).fill(add_adress.last_name);
        await this.page.locator(Add_adressUserInterface.company).fill(add_adress.company);
        await this.page.locator(Add_adressUserInterface.address1).fill(add_adress.address1);
        await this.page.locator(Add_adressUserInterface.address2).fill(add_adress.address2);
        await this.page.locator(Add_adressUserInterface.city).fill(add_adress.city);
        await this.page.locator(Add_adressUserInterface.post_code).fill(add_adress.post_code);
        await this.page.waitForSelector(Add_adressUserInterface.country);
        await this.page.selectOption(Add_adressUserInterface.country, '223')
        await this.page.waitForSelector(Add_adressUserInterface.region_State)
        await this.page.selectOption(Add_adressUserInterface.region_State, '3624');
        await this.page.locator(Add_adressUserInterface.buttom_continue).click();
        await expect(this.page.getByText('Your address has been successfully added')).toBeVisible();

    }

}
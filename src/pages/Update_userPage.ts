import { Page, expect } from '@playwright/test';
import { update_user } from '../models/update_user';
import { Update_userUserInterface } from '../resources/Update_userUserInterface';

export class Update_userPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async update_user(update_user: update_user) {

        await this.page.locator(Update_userUserInterface.buttom_account).click();
        await this.page.locator(Update_userUserInterface.buttom_my_account).click();
        await this.page.locator(Update_userUserInterface.buttom_edit_account).click();
        await this.page.locator(Update_userUserInterface.input_first_name).fill(update_user.first_name);
        await this.page.locator(Update_userUserInterface.input_last_name).fill(update_user.last_name);
        await this.page.locator(Update_userUserInterface.input_e_mail).fill(update_user.e_mail);
        await this.page.locator(Update_userUserInterface.input_telephone).fill(update_user.telephone);
        await this.page.locator(Update_userUserInterface.buttom_continue).click();
        await expect(this.page.getByText('Success: Your account has been successfully updated.')).toBeVisible();
   
    }   

}

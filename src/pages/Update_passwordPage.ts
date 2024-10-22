import { Page, expect } from '@playwright/test';
import { update_password } from '../models/Update_password';
import { Update_passwordUserInterface } from '../resources/Update_passwordUserInterface';

export class Update_passwordPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    
    }

    async update_password(update_password: update_password) {

        await this.page.locator(Update_passwordUserInterface.buttom_account).click();
        await this.page.locator(Update_passwordUserInterface.buttom_my_account).click();
        await this.page.locator(Update_passwordUserInterface.buttom_edit_password).click();
        await this.page.locator(Update_passwordUserInterface.password).fill(update_password.password);
        await this.page.locator(Update_passwordUserInterface.confirm_password).fill(update_password.confirm_password);
        await this.page.locator(Update_passwordUserInterface.buttom_continue).click();
        await expect(this.page.getByText(' Success: Your password has been successfully updated.')).toBeVisible();

    }
    
}
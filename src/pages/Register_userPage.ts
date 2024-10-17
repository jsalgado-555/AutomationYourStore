import { Page, expect } from '@playwright/test';
import { register_user } from '../models/register_user';
import { Register_userUserInterface } from '../resources/Register_userUserInterface';

export class register_userPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async register_user(register_user: register_user) {

        await this.page.locator(Register_userUserInterface.buttom_account).click();
        await this.page.locator(Register_userUserInterface.buttom_register).click();
        await this.page.locator(Register_userUserInterface.input_first_name).fill(register_user.first_name);
        await this.page.locator(Register_userUserInterface.input_last_name).fill(register_user.last_name);
        await this.page.locator(Register_userUserInterface.input_e_mail).fill(register_user.e_mail);
        await this.page.locator(Register_userUserInterface.input_telephone).fill(register_user.telephone);
        await this.page.locator(Register_userUserInterface.input_password).fill(register_user.password);
        await this.page.locator(Register_userUserInterface.input_password_confirm).fill(register_user.password_confirm);
        await this.page.check(Register_userUserInterface.check_policy);
        await this.page.locator(Register_userUserInterface.buttom_continue).click();
        await expect(this.page.getByText('Congratulations! Your new account has been successfully created!')).toBeVisible();
    }   

}


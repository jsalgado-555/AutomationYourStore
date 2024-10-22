import { Page, expect } from '@playwright/test';
import { login_user } from '../models/login_user';
import { Login_userUserInterface } from '../resources/Login_userUserInterface';

export class Login_userPage {
readonly page: Page;

constructor(page: Page) {
    this.page = page;

    }

    async login_user(login_user: login_user) {
        await this.page.locator(Login_userUserInterface.buttom_account).click();
        await this.page.locator(Login_userUserInterface.buttom_login).click();
        await this.page.locator(Login_userUserInterface.input_e_mail).fill(login_user.e_mail);
        await this.page.locator(Login_userUserInterface.input_password).fill(login_user.password);
        await this.page.locator(Login_userUserInterface.buttom_log).click();
    }

}
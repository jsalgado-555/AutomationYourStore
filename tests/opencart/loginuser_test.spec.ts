import { test, expect } from '@playwright/test';
import { login_user } from '../../src/models/login_user';
import { Login_userPage } from '../../src/pages/Login_userPages';

test('Given: Se accede a opencart, When: se dirige al area de login, Then: se inicia la sesion del usuario', 
    async({page}) => {
      
      await page.goto('https://opencart.abstracta.us/index.php?route=common/home') 

      const login_user: login_user = {

        e_mail: "nombre9@email.com",
        password: "1234" 

      } 

      const login = new Login_userPage(page)

        await login.login_user(login_user)

});
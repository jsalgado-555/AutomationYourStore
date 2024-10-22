import { test, expect } from '@playwright/test';
import { update_password } from '../../src/models/Update_password';
import { Update_passwordPage } from '../../src/pages/Update_passwordPage';
import { login_user } from '../../src/models/login_user';
import { Login_userPage } from '../../src/pages/Login_userPages';

test.beforeEach('Se inicia sesion', async({page}) => {
    
  await page.goto('https://opencart.abstracta.us/index.php?route=common/home') 

  const login_user: login_user = {

    e_mail: "nombre9@email.com",
    password: "1234" 

  } 

  const login = new Login_userPage(page)

    await login.login_user(login_user)

});

test('Given: Se accede a opencart, And: inicia sesion el usuario, When: se accede a su perfil, Then: se actualiza la contraseña', 
    async({page}) => {
      
      await page.goto('https://opencart.abstracta.us/index.php?route=common/home') 

      const update_pass: update_password ={

        password: "1234",
        confirm_password: "1234"

      }

      const update_password = new Update_passwordPage(page)

        await update_password.update_password(update_pass)

        await page.waitForTimeout(5000)

});
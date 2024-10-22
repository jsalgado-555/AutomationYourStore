import { test, expect } from '@playwright/test';
import { update_user } from '../../src/models/update_user';
import { Update_userPage } from '../../src/pages/Update_userPage';
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

test('Given: Se ha registrado un nuevo usuario, When: se accede a sus datos personales, Then: se actualiza su informacion', 
    async({page}) => {
  
      await page.goto('https://opencart.abstracta.us/index.php?route=common/home');
  
      const update_user: update_user = {
    
        first_name: "nombre1 nombre2",
        last_name: "apellido1 apellido2",
        e_mail: "nombre9@email.com",
        telephone: "1234556712"
 
        }
      
      const update = new Update_userPage(page)
  
      await update.update_user(update_user)
      
      await page.waitForTimeout(5000)
  
    })
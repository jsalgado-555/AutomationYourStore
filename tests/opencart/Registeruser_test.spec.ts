import { test, expect } from '@playwright/test';
import { register_user } from '../../src/models/register_user';
import { Register_userPage } from '../../src/pages/Register_userPage';

test('Given: Se accede a opencart, When: se dirige al area donde se registran los usuarios, Then: se registra un nuevo usuario', 
  async ({page}) => {

    await page.goto('https://opencart.abstracta.us')

    const register_user: register_user = {
  
    first_name: "nombre",
    last_name: "apellido",
    e_mail: "nombre9@email.com",
    telephone: "1234556712",
    password: "1234",
    password_confirm : "1234"
  
    }
  
    const register = new Register_userPage(page)
  
    await register.register_user(register_user)
  
    await page.waitForTimeout(5000)

});


import { test, expect } from '@playwright/test';
import { product } from '../../src/models/products';
import { Add_productsPage } from '../../src/pages/Add_productsPage';
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

test('Give , When: , Then: ', async ({page}) => {

    await page.goto('https://opencart.abstracta.us/index.php?route=common/home') 
    
    const product: product = {

        products: ["MacBook Air", "iPhone", "Samsung SyncMaster 941BW", "Palm Treo Pro", "Nikon D300", "HTC Touch HD"],
        quantity: "2"

    }

    const add_prod = new Add_productsPage(page)

    await add_prod.add_product(product)

});


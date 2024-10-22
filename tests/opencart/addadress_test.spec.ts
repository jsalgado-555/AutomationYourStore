import {test} from "@playwright/test";
import { add_adress } from "../../src/models/add_adress";
import { Add_adressPage } from "../../src/pages/Add_adressPage";
import { login_user } from "../../src/models/login_user";
import { Login_userPage } from "../../src/pages/Login_userPages";

test.beforeEach('Se inicia sesion', async({page}) => {
    
    await page.goto('https://opencart.abstracta.us/index.php?route=common/home') 
  
    const login_user: login_user = {
  
      e_mail: "nombre9@email.com",
      password: "1234" 
  
    } 
  
    const login = new Login_userPage(page)
  
      await login.login_user(login_user)
  
  });

test('Given: Se accede a opencart, And: inicia sesion el usuario, When: se accede a su perfil, Then: se añade una direccion',
    async({page}) => {

      await page.goto('https://opencart.abstracta.us/index.php?route=common/home') 

      const add_adress: add_adress = {

        first_name: "nombre",
        last_name: "apellido",
        company: "empresa",
        address1: "direccion 1",
        address2: "direccion 2",
        city: "ciudad",
        post_code: "123456"

      }

      const adress = new Add_adressPage(page)

      await adress.add_adress(add_adress)

      await page.waitForTimeout(5000)


})
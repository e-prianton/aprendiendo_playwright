import {test, expect} from '@playwright/test';

/*
toHaveTitle es una assertión (no un locator) que verifica 
que el <title> de la página coincida con el valor esperado. 
Es la que aparece en el test de ejemplo que genera 
npm init playwright@latest:
 */

/*test('has title', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
     // Espera a que el <title> contenga "TodoMVC". 
     // Recordemos que <title> es el título de la página que aparece 
     // en la pestaña del navegador.   
    await expect(page).toHaveTitle('TodoMVC');
    //Al no coincidir fallará el test 
    // y se mostrará un mensaje de error en la consola.  
});
*/
//Solo puede haber un has title por archivo de test, 
// por eso se comenta el anterior y se deja este que sí coincide 
// con el título de la página.
//Lo correcto sería crear un archivo de test por cada assertión,
// pero para este ejemplo al ser de aprendizaje
// se deja así para no crear muchos archivos.    
test('has title', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
     // Espera a que el <title> contenga "React • TodoMVC". 
     // Recordemos que <title> es el título de la página que aparece 
     // en la pestaña del navegador.   
    await expect(page).toHaveTitle('React • TodoMVC');
    //Al coincidir no fallará el test 
    // y se mostrará un mensaje de passed en la consola.  
});


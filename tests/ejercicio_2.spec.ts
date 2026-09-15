import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';

/*Añadir un todo	fill en el input + press('Enter')	toHaveText, toHaveCount
Marcar como completado	check() en el checkbox	toHaveClass(/completed/)
Editar un todo	dblclick en el texto, fill, press('Enter')	toHaveText con el nuevo valor
Eliminar un todo	hover en el item + click en el botón delete	toHaveCount(0)
Filtrar (All / Active / Completed)	click en el enlace del filtro	toHaveCount(n) en los visibles
Marcar todos como completados	check() en "Mark all as complete"	toHaveCount(0) en "items left"
Limpiar completados	click en "Clear completed"	toHaveCount(n)
Contador de items	—	toContainText('3 items left')
Persistencia (localStorage)	Añadir → page.reload()	toHaveText igual que antes
Navegación por teclado	press('Tab'), press('Space')	toBeChecked() */

test.describe('Ejercicio 2', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc');
    });
    
    test('Agregar un todo', async ({ page }) => {
        const todoInput = page.locator('.new-todo');
        await todoInput.fill('Aprender Playwright');
        await todoInput.press('Enter');

    });

    test('Marcar como completado', async ({ page }) => {
        const todoInput = page.locator('.new-todo');
        await todoInput.fill('Aprender Playwright');
        await todoInput.press('Enter');

        const todoCheckbox = page.locator('.todo-list li .toggle');
        await todoCheckbox.check();

    });

    test('Editar un todo', async ({ page }) => {
        const todoInput = page.locator('.new-todo');
        await todoInput.fill('Aprender Playwright');
        await todoInput.press('Enter');

        const todoLabel = page.locator('.todo-list li label');
        await todoLabel.dblclick();
        const editInput = page.locator('.todo-list li .edit');
        await editInput.fill('Aprender Playwright y TypeScript');
        await editInput.press('Enter');

    });

    test('Eliminar un todo', async ({ page }) => {
        const todoInput = page.locator('.new-todo');
        await todoInput.fill('Aprender Playwright');
        await todoInput.press('Enter');

        const deleteButton = page.locator('.todo-list li .destroy');
        await deleteButton.hover();
        await deleteButton.click();

    });

    test('Filtrar todos', async ({ page }) => {
        const todoInput = page.locator('.new-todo');
        await todoInput.fill('Aprender Playwright');
        await todoInput.press('Enter');
        await todoInput.fill('Aprender TypeScript');
        await todoInput.press('Enter');

        const activeFilter = page.locator('.filters li a').nth(1);
        await activeFilter.click();

    });
});


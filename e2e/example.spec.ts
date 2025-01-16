import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";


test('has title', async ({ page }) => {
  await allure.tags("Web interface", "Authentication");
  await allure.severity("critical");
  await page.goto('https://www.mihastrehovec.si/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Miha Jan Strehovec/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.mihastrehovec.si/');

  // Click the get started link.
  await page.getByRole('link', { name: 'EDUCATION' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


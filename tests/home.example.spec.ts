import { test, expect } from "@playwright/test";

test("Deberia renderizar la pagina de home y no mostrar datos cuando se busca un elemento que no existe", async ({ page }) => {
  await page.goto("http://localhost:5174/");

  await expect(page.locator("#root")).toContainText("Datos");
  await expect(page.locator("#root")).toContainText("Requerimientos");
  await expect(page.locator("#root")).toContainText("Ajustes");
  await expect(page.getByLabel("breadcrumb").locator("span")).toContainText(
    "Obtención de datos"
  );
  await expect(page.getByLabel("breadcrumb").locator("a")).toContainText(
    "Prueba técnica"
  );
  await expect(page.locator("#root")).toContainText("Diego Dávila");
  await expect(page.locator("#root")).toContainText("davila9923@gmail.com");
  await expect(page.getByText("Todos")).toBeVisible();
  await page.getByPlaceholder("Buscar...").click();
  await page.getByPlaceholder("Buscar...").fill("hola");
  await page.getByPlaceholder("Buscar...").press("CapsLock");
  await expect(page.locator("td")).toContainText("Sin resultados.");
});

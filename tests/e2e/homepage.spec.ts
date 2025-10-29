/**
 * Playwright E2E: homepage loads and shows main sections
 */
import { test, expect } from "@playwright/test"

test("homepage renders hero, skills, contact", async ({ page }) => {
  await page.goto("http://localhost:5173/")
  await expect(page.locator("text=Giới thiệu")).toBeVisible()
  await expect(page.locator("text=Kỹ năng")).toBeVisible()
  await expect(page.locator("text=Liên hệ")).toBeVisible()
})

/**
 * Playwright E2E: click mailto triggers alert (we can verify by intercepting)
 */
import { test, expect } from "@playwright/test"

test("click email shows alert", async ({ page }) => {
  await page.goto("http://localhost:5173/")
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert")
    expect(dialog.message()).toContain("Cảm ơn bạn")
    await dialog.dismiss()
  })
  await page.click('a[href^="mailto:"]')
})

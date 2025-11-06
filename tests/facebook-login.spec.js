// @ts-check
import { test, expect } from '@playwright/test';

// Test: tenter une connexion invalide sur facebook.com et vérifier qu'on n'a pas accès
// Remarques:
// - Ce test utilise des identifiants factices. NE PAS utiliser de vraies identifiants.
// - Facebook peut détecter l'automatisation; ce test peut nécessiter des ajustements
//   (timeouts, gestion des cookies, sélecteurs) selon la page cible et la région.

test('facebook - invalid login denies access (fr-fr)', async ({ page }) => {
  await page.goto('https://fr-fr.facebook.com/');

  // Close cookie banner if present (try common labels)
  const cookieButtons = [
    'button:has-text("Autoriser tout")',
    'button:has-text("Accepter tout")',
    'button:has-text("OK")',
    'button:has-text("Accept All")',
  ];
  for (const s of cookieButtons) {
    const b = page.locator(s);
    if (await b.count() > 0) { await b.first().click().catch(() => {}); break; }
  }

  // Use the precise selectors from the provided HTML (data-testid and ids)
  const email = page.locator('[data-testid="royal-email"], #email');
  await expect(email).toBeVisible({ timeout: 5000 });
  await email.fill('fake_user_for_test@example.test');

  const pass = page.locator('[data-testid="royal-pass"], #pass');
  await expect(pass).toBeVisible({ timeout: 2000 });
  await pass.fill('invalid_password_123');

  // Precise login button selector per source
  const loginBtn = page.locator('[data-testid="royal-login-button"], button[name="login"], input[name="login"]');
  await expect(loginBtn.first()).toBeVisible({ timeout: 2000 });
  await loginBtn.first().click();

  // Wait for network activity to settle
  await page.waitForLoadState('networkidle');

  // Look for French error messages commonly used by Facebook or ensure login form remains
  const frenchError = page.locator('text=/mot de passe|mot de passe que vous avez saisi|adresse e-mail|numéro de téléphone|incorrect/i');
  const englishError = page.locator('text=/incorrect password|The email or mobile number|The password you entered is incorrect|Invalid credentials/i');

  if (await frenchError.count() > 0) {
    await expect(frenchError.first()).toBeVisible();
  } else if (await englishError.count() > 0) {
    await expect(englishError.first()).toBeVisible();
  } else {
    // Fallback: if still on the login page, the email input should still be visible (no access granted)
    await expect(page.locator('[data-testid="royal-email"], #email')).toBeVisible();
  }
});

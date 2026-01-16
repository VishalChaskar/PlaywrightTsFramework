import { test, expect, request } from '@playwright/test';
import { APiUtils } from './utils/APiUtils'; // Adjust the path based on where APiUtils is located

interface LoginPayload {
  userEmail: string;
  userPassword: string;
}

interface OrderPayload {
  orders: Array<{ country: string; productOrderedId: string }>;
}

interface OrderResponse {
  token: string;
  orderId: string[];
}

const loginPayLoad: LoginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad: OrderPayload = { orders: [{ country: "Cuba", productOrderedId: "67a8dde5c0d3e6622a297cc8" }] };

let response: OrderResponse;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APiUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);
});

// create order is success
test('@API Place the order', async ({ page }) => {
  await page.addInitScript((value: string) => {
    window.localStorage.setItem('token', value);
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < await rows.count(); ++i) {

    const rowOrderId : string | null = await rows.nth(i).locator("th").textContent();
    if (rowOrderId && response.orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  // await page.pause();
  expect(orderIdDetails && response.orderId.includes(orderIdDetails)).toBeTruthy();
});

// Verify if order created is showing in history page
// Precondition - create order -
import { Role, Selector } from "testcafe";

const URL = "http://localhost:8080";

const adminUser = Role(`${URL}/login`, async (t) => {
  await t.click("button");
});

fixture`Sample tests`.page`${URL}/some-route`.beforeEach(async (t) => {
  await t.useRole(adminUser);
});

test("this test will fail because it's not executed on the correct page", async (t) => {
  await t.expect(Selector("div").withText("This is some route").exists).ok();
});

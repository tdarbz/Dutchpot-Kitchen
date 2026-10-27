import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { hoursForDay, hoursForToday, site } from "./site";

describe("owner-supplied business details", () => {
  test("uses the confirmed phone number and dial link", () => {
    assert.equal(site.phone, "678-233-3003");
    assert.equal(site.phoneHref, "tel:+16782333003");
  });
  test("shows the Riverdale, GA address with the confirmed ZIP", () => {
    assert.equal(site.fullAddress, "678 HWY 138, Unit 124, Riverdale, GA 30274");
    assert.equal(site.address.zip, "30274");
    assert.equal(site.address.state, "GA");
  });
  test("is open 11-8 Mon through Thu and 11-5 Fri", () => {
    for (const day of ["Monday", "Tuesday", "Wednesday", "Thursday"]) {
      assert.equal(hoursForDay(day), "11:00 AM — 8:00 PM", day);
    }
    assert.equal(hoursForDay("Friday"), "11:00 AM — 5:00 PM");
  });
  test("is closed both weekend days", () => {
    assert.equal(hoursForDay("Saturday"), "Closed");
    assert.equal(hoursForDay("Sunday"), "Closed");
  });
  test("reports the hours of the actual weekday, not one fixed row", () => {
    assert.equal(hoursForToday(new Date(2026, 9, 27)), "11:00 AM — 8:00 PM"); // Tuesday
    assert.equal(hoursForToday(new Date(2026, 9, 30)), "11:00 AM — 5:00 PM"); // Friday
    assert.equal(hoursForToday(new Date(2026, 9, 31)), "Closed"); // Saturday
  });
});

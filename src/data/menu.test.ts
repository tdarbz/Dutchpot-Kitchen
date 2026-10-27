import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { formatMenuPrice, menuSections, signatureDishes } from "./menu";

describe("master menu import", () => {
  const findPrice = (category: string, name: string, size: string) =>
    menuSections.find((section) => section.title === category)?.items
      .find((item) => item.name === name)?.sizes.find((variant) => variant.size === size)?.price;

  test("includes all 57 size options across eight categories", () => {
    assert.equal(menuSections.length, 8);
    assert.equal(menuSections.flatMap((section) => section.items.flatMap((item) => item.sizes)).length, 57);
  });
  test("keeps large and medium oxtail prices distinct from the side", () => {
    assert.equal(findPrice("Meat Entrées", "Oxtail", "Large"), 27);
    assert.equal(findPrice("Meat Entrées", "Oxtail", "Medium"), 24);
    assert.equal(findPrice("Sides", "Oxtail", "Side"), 14);
  });
  test("preserves decimal prices", () => {
    assert.equal(findPrice("Home Style Chicken", "Curry Chicken", "Large"), 12.5);
    assert.equal(findPrice("Sides", "Rice & Peas", "Side"), 4.5);
    assert.equal(formatMenuPrice(4.5), "$4.50");
  });
  test("does not invent the two missing prices", () => {
    assert.equal(findPrice("Home Style Chicken", "Fried Chicken", "Not specified"), null);
    assert.equal(findPrice("Vegetarian", "Curry Chickpeas", "Medium"), null);
    assert.equal(formatMenuPrice(null), "Call for price");
  });
  test("home favorites reference the same menu objects", () => {
    assert.equal(signatureDishes.length, 4);
    for (const dish of signatureDishes) {
      assert.equal(menuSections.some((section) => section.items.includes(dish)), true);
    }
  });
});
export interface MenuSize {
  size: string;
  price: number | null;
}

export interface MenuItem {
  name: string;
  sizes: MenuSize[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Source: Restaurant_Master_Menu_Only.xlsx, MENU MASTER, rows 6–62 (USD).
export const menuSections: MenuSection[] = [
  {
    "title": "Home Style Chicken",
    "items": [
      {
        "name": "Brown Stew Chicken",
        "sizes": [
          {
            "size": "Large",
            "price": 12
          },
          {
            "size": "Medium",
            "price": 10
          }
        ]
      },
      {
        "name": "Curry Chicken",
        "sizes": [
          {
            "size": "Large",
            "price": 12.5
          },
          {
            "size": "Medium",
            "price": 10.5
          }
        ]
      },
      {
        "name": "Jerk Chicken (Dark)",
        "sizes": [
          {
            "size": "Large",
            "price": 15
          },
          {
            "size": "Medium",
            "price": 11
          }
        ]
      },
      {
        "name": "Jerk Chicken (White)",
        "sizes": [
          {
            "size": "Large",
            "price": 17
          },
          {
            "size": "Medium",
            "price": 13
          }
        ]
      },
      {
        "name": "Sweet & Sour Chicken",
        "sizes": [
          {
            "size": "Large",
            "price": 13
          },
          {
            "size": "Medium",
            "price": 11
          }
        ]
      },
      {
        "name": "Fried Chicken",
        "sizes": [
          {
            "size": "Not specified",
            "price": null
          }
        ]
      }
    ]
  },
  {
    "title": "Meat Entrées",
    "items": [
      {
        "name": "Oxtail",
        "sizes": [
          {
            "size": "Large",
            "price": 27
          },
          {
            "size": "Medium",
            "price": 24
          }
        ]
      },
      {
        "name": "Curry Goat",
        "sizes": [
          {
            "size": "Large",
            "price": 19
          },
          {
            "size": "Medium",
            "price": 15
          }
        ]
      },
      {
        "name": "Brown Stew Mutton",
        "sizes": [
          {
            "size": "Large",
            "price": 18
          },
          {
            "size": "Medium",
            "price": 14
          }
        ]
      },
      {
        "name": "Ackee & Saltfish",
        "sizes": [
          {
            "size": "Regular",
            "price": 20
          }
        ]
      }
    ]
  },
  {
    "title": "Seafood",
    "items": [
      {
        "name": "Salmon Brown Stew",
        "sizes": [
          {
            "size": "Regular",
            "price": 19
          }
        ]
      },
      {
        "name": "Salmon Jerk",
        "sizes": [
          {
            "size": "Regular",
            "price": 19
          }
        ]
      },
      {
        "name": "Escovitch Snapper with Rice",
        "sizes": [
          {
            "size": "Regular",
            "price": 27
          }
        ]
      },
      {
        "name": "Steamed Snapper with Rice",
        "sizes": [
          {
            "size": "Regular",
            "price": 27
          }
        ]
      },
      {
        "name": "Brown Stew Snapper with Rice",
        "sizes": [
          {
            "size": "Regular",
            "price": 27
          }
        ]
      }
    ]
  },
  {
    "title": "Roti",
    "items": [
      {
        "name": "Curry Goat Roti",
        "sizes": [
          {
            "size": "Regular",
            "price": 18
          }
        ]
      },
      {
        "name": "Curry Chicken Roti",
        "sizes": [
          {
            "size": "Regular",
            "price": 16
          }
        ]
      },
      {
        "name": "Curry Chickpeas Roti",
        "sizes": [
          {
            "size": "Regular",
            "price": 16
          }
        ]
      },
      {
        "name": "Roti Only",
        "sizes": [
          {
            "size": "Regular",
            "price": 5
          }
        ]
      }
    ]
  },
  {
    "title": "Soups",
    "items": [
      {
        "name": "Chicken Soup",
        "sizes": [
          {
            "size": "Small",
            "price": 4
          },
          {
            "size": "Medium",
            "price": 6
          },
          {
            "size": "Large",
            "price": 11
          }
        ]
      },
      {
        "name": "Red Peas Soup",
        "sizes": [
          {
            "size": "Small",
            "price": 5
          },
          {
            "size": "Medium",
            "price": 9
          },
          {
            "size": "Large",
            "price": 13
          }
        ]
      },
      {
        "name": "Goat Soup",
        "sizes": [
          {
            "size": "Small",
            "price": 7
          },
          {
            "size": "Medium",
            "price": 13
          },
          {
            "size": "Large",
            "price": 15
          }
        ]
      }
    ]
  },
  {
    "title": "Pasta",
    "items": [
      {
        "name": "Oxtail Pasta",
        "sizes": [
          {
            "size": "Regular",
            "price": 33
          }
        ]
      },
      {
        "name": "Salmon Pasta",
        "sizes": [
          {
            "size": "Regular",
            "price": 30
          }
        ]
      },
      {
        "name": "Jerk Chicken Pasta",
        "sizes": [
          {
            "size": "Regular",
            "price": 24
          }
        ]
      }
    ]
  },
  {
    "title": "Sides",
    "items": [
      {
        "name": "Oxtail",
        "sizes": [
          {
            "size": "Side",
            "price": 14
          }
        ]
      },
      {
        "name": "Curry Goat",
        "sizes": [
          {
            "size": "Side",
            "price": 11
          }
        ]
      },
      {
        "name": "Stew Mutton",
        "sizes": [
          {
            "size": "Side",
            "price": 10
          }
        ]
      },
      {
        "name": "Cabbage",
        "sizes": [
          {
            "size": "Side",
            "price": 4
          }
        ]
      },
      {
        "name": "Plantain",
        "sizes": [
          {
            "size": "Side",
            "price": 4
          }
        ]
      },
      {
        "name": "Rice & Peas",
        "sizes": [
          {
            "size": "Side",
            "price": 4.5
          }
        ]
      },
      {
        "name": "White Rice",
        "sizes": [
          {
            "size": "Side",
            "price": 4
          }
        ]
      },
      {
        "name": "Coleslaw",
        "sizes": [
          {
            "size": "Side",
            "price": 4
          }
        ]
      },
      {
        "name": "Festival",
        "sizes": [
          {
            "size": "Side",
            "price": 3.5
          }
        ]
      },
      {
        "name": "Bammy",
        "sizes": [
          {
            "size": "Side",
            "price": 5.5
          }
        ]
      },
      {
        "name": "Pasta Salad",
        "sizes": [
          {
            "size": "Side",
            "price": 5.5
          }
        ]
      },
      {
        "name": "Potato Salad",
        "sizes": [
          {
            "size": "Side",
            "price": 5
          }
        ]
      }
    ]
  },
  {
    "title": "Vegetarian",
    "items": [
      {
        "name": "Sweet & Sour Tofu",
        "sizes": [
          {
            "size": "Large",
            "price": 22
          },
          {
            "size": "Medium",
            "price": 19
          }
        ]
      },
      {
        "name": "Curry Chickpeas",
        "sizes": [
          {
            "size": "Large",
            "price": 14
          },
          {
            "size": "Medium",
            "price": null
          }
        ]
      },
      {
        "name": "Lentil Stew",
        "sizes": [
          {
            "size": "Large",
            "price": 12
          },
          {
            "size": "Medium",
            "price": 10
          }
        ]
      }
    ]
  }
];

export const formatMenuPrice = (price: number | null): string =>
  price === null ? "Call for price" : `$${price.toFixed(2)}`;

export const signatureDishes = [
  { category: "Meat Entrées", name: "Oxtail" },
  { category: "Home Style Chicken", name: "Jerk Chicken (Dark)" },
  { category: "Meat Entrées", name: "Curry Goat" },
  { category: "Home Style Chicken", name: "Brown Stew Chicken" },
].flatMap(({ category, name }) => {
  const item = menuSections.find((section) => section.title === category)?.items.find((dish) => dish.name === name);
  return item ? [item] : [];
});

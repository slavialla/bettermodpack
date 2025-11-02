ServerEvents.recipes((event) => {
  // Remove all existing Cooking Pot recipes
  event.remove({ type: "farm_and_charm:pot_cooking" });

  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "farm_and_charm:barley"
      },
      {
        "tag": "farm_and_charm:barley"
      },
      {
        "tag": "farm_and_charm:water_bottles"
      },
      {
        "item": "minecraft:egg"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "item": "farm_and_charm:barley_soup",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "farm_and_charm:corn"
      },
      {
        "tag": "farm_and_charm:corn"
      },
      {
        "tag": "farm_and_charm:flour"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "item": "farm_and_charm:corn_grits",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
       "item": "farmersdelight:onion"

      },
      {
        "tag": "farm_and_charm:cooked_beef"
      },
      {
        "item": "farm_and_charm:simple_tomato_soup"
      },
      {
        "item": "minecraft:carrot"
      },
      {
        "item": "minecraft:potato"
      }
    ],
    "container": {
      "required": false,
      "item": {
        "item": "minecraft:bowl"
      }
    },
    "result": {
      "item": "farm_and_charm:goulash",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "farm_and_charm:water_bottles"
      },
      {
        "item": "farm_and_charm:wild_nettle"
      },
      {
        "item": "farm_and_charm:wild_nettle"
      }
    ],
    "container": {
      "required": true,
      "item": {
        "item": "minecraft:glass_bottle"
      }
    },
    "result": {
      "item": "farm_and_charm:nettle_tea",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "farm_and_charm:bread"
      },
      {
            "item": "farmersdelight:onion"

      },
      {
            "item": "farmersdelight:onion"

      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "item": "farm_and_charm:onion_soup",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "item": "minecraft:potato"
      },
      {
        "item": "farmersdelight:onion"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "item": "farm_and_charm:potato_soup",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "farm_and_charm:water_bottles"
      },
      {
        "item": "farm_and_charm:wild_ribwort"
      },
      {
        "item": "farm_and_charm:wild_ribwort"
      }
    ],
    "container": {
      "required": true,
      "item": {
        "item": "minecraft:glass_bottle"
      }
    },
    "result": {
      "item": "farm_and_charm:ribwort_tea",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "item": "farmersdelight:tomato"
      },
      {
        "item": "farmersdelight:tomato"
      },
      {
        "item": "minecraft:sugar"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "item": "farm_and_charm:simple_tomato_soup",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "tag": "farm_and_charm:water_bottles"
      },
      {
        "item": "farm_and_charm:strawberry"
      },
      {
        "item": "farm_and_charm:strawberry"
      }
    ],
    "container": {
      "required": true,
      "item": {
        "item": "minecraft:glass_bottle"
      }
    },
    "result": {
      "item": "farm_and_charm:strawberry_tea",
      "count": 1
    },
    "requiresLearning": false
  });
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 150,
    "experience": 1.0,
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "farm_and_charm:water_bottles"
      },
      {
        "tag": "farm_and_charm:wheat"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "item": "farm_and_charm:yeast",
      "count": 12
    },
    "requiresLearning": false
  });

});

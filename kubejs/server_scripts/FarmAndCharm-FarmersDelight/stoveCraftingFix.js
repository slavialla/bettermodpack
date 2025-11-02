ServerEvents.recipes(event => {
    // Remove all existing Cooking Pot recipes
    event.remove({ type: 'farm_and_charm:stove' }); 

    // Example: Custom Cooking Pot Recipe
    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "item": "farmersdelight:cabbage"
          },
          {
            "item": "farm_and_charm:lamb_ham"
          }
        ],
        "result": {
          "item": "farm_and_charm:baked_lamb_ham",
          "count": 1
        },
        "experience": 0.5,
        "requiresLearning": false
    });

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "tag": "farm_and_charm:dough"
          },
          {
            "tag": "farm_and_charm:water_bottles"
          }
        ],
        "result": {
          "item": "farm_and_charm:farmers_bread",
          "count": 3
        },
        "experience": 0.3,
        "requiresLearning": false
    })

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "tag": "farm_and_charm:dough"
          },
          {
            "tag": "farm_and_charm:strawberries"
          },
          {
            "item": "minecraft:sugar"
          }
        ],
        "result": {
          "item": "farm_and_charm:grandmothers_strawberry_cake",
          "count": 2
        },
        "experience": 0.35,
        "requiresLearning": false
    })

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "item": "farmersdelight:onion"
          },
          {
            "item": "farmersdelight:onion"
          },
          {
            "tag": "farm_and_charm:pasta"
          }
        ],
        "result": {
          "item": "farm_and_charm:pasta_with_onion_sauce",
          "count": 4
        },
        "experience": 0.4,
        "requiresLearning": false
    })

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "item": "minecraft:potato"
          },
          {
            "item": "minecraft:beef"
          },
          {
            "item": "minecraft:honey_bottle"
          }
        ],
        "result": {
          "item": "farm_and_charm:potato_with_roast_meat",
          "count": 2
        },
        "experience": 0.5,
        "requiresLearning": false
    })

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "tag": "farm_and_charm:pasta"
          },
          {
            "item": "farm_and_charm:chicken_parts"
          },
          {
            "item": "minecraft:carrot"
          }
        ],
        "result": {
          "item": "farm_and_charm:roasted_chicken",
          "count": 3
        },
        "experience": 0.3,
        "requiresLearning": false
    })

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "tag": "farm_and_charm:corn"
          },
          {
            "tag": "farm_and_charm:corn"
          },
          {
            "tag": "farm_and_charm:butter"
          }
        ],
        "result": {
          "item": "farm_and_charm:roasted_corn",
          "count": 1
        },
        "experience": 0.2,
        "requiresLearning": false
    })

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "item": "farmersdelight:onion"
          },
          {
            "item": "minecraft:chicken"
          },
          {
            "item": "minecraft:carrot"
          }
        ],
        "result": {
          "item": "farm_and_charm:stuffed_chicken",
          "count": 1
        },
        "experience": 0.6,
        "requiresLearning": false
    })

    event.custom({
        "type": "farm_and_charm:stove",
        "ingredients": [
          {
            "item": "farmersdelight:onion"
          },
          {
            "item": "minecraft:rabbit"
          },
          {
            "item": "minecraft:carrot"
          }
        ],
        "result": {
          "item": "farm_and_charm:stuffed_rabbit",
          "count": 1
        },
        "experience": 0.6,
        "requiresLearning": false
    })
    // Add more recipes as needed...
});
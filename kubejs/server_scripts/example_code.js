// priority: 0

// Visit the wiki for more info - https://kubejs.com/

/*
ServerEvents.recipes(event => {
    // Remove all existing Cooking Pot recipes
    event.remove({ type: 'farm_and_charm:pot_cooking' }); 

    // Example: Custom Cooking Pot Recipe
    event.custom({
        "type": "farm_and_charm:pot_cooking",
        "ingredients": [
          {
            "tag": "farm_and_charm:tomato"
          },
          {
            "tag": "farm_and_charm:tomato"
          },
          {
            "item": "minecraft:sugar"
          }
        ],
        "container": {
          "required": true,
          "item": {
            "item": "minecraft:bowl"
          }
        },
        "result": {
          "item": "farm_and_charm:simple_tomato_soup",
          "count": 1
        },
        "requiresLearning": false
    });

    // Add more recipes as needed...
});
*/

/*
// Remove All recepies except given in keepReceipes array
ServerEvents.recipes(event => {
    let modid = "farm_and_charm"; // Change this to your mod ID
    let keepRecipes = [
        "farm_and_charm:water_sprinkler",
        "farm_and_charm:plow",
        "farm_and_charm:pitchfork",
        "farm_and_charm:silo_wood",
        "farm_and_charm:stove",
        "farm_and_charm:cooking_pot",
        "farm_and_charm:feeding_trough",
        "farm_and_charm:window_sill",
        "farm_and_charm:tool_rack",
        "farm_and_charm:crafting_bowl",
        "farm_and_charm:mincer",
        "farm_and_charm:roaster",
        "farm_and_charm:beetroot_bag"
    ];

    event.forEachRecipe({ mod: modid }, recipe => {
        if (!keepRecipes.includes(recipe.getId())) {
            event.remove({ id: recipe.getId() });
        }
    });

})
*/

/*
LootJS.modifiers((event) => {
    event.addBlockLootModifier("farm_and_charm:wild_beetroots")
    .removeLoot(Ingredient.all)
    .addWeightedLoot(5, [
        Item.of("minecraft:gunpowder").withChance(50),
    ]);
});
*/

ServerEvents.recipes(event => {
    let modid = "farm_and_charm"; // Change this to your mod ID
    let removeRecipes = [
        "farm_and_charm:tomato_seeds"
    ];

    removeRecipes.forEach(recipe => {
        event.remove({ output: recipe})
    });

})

ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'farm_and_charm:onion' }, // Arg 1: the filter
        'farm_and_charm:onion',            // Arg 2: the item to replace
        'farmersdelight:onion'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    event.replaceOutput(
        { output: 'farm_and_charm:onion' }, // Arg 1: the filter
        'farm_and_charm:onion',            // Arg 2: the item to replace
        'farmersdelight:onion'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    event.replaceInput(
        { input: 'farm_and_charm:tomato' }, // Arg 1: the filter
        'farm_and_charm:tomato',            // Arg 2: the item to replace
        'farmersdelight:tomato'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    event.replaceOutput(
        { output: 'farm_and_charm:tomato' }, // Arg 1: the filter
        'farm_and_charm:tomato',            // Arg 2: the item to replace
        'farmersdelight:tomato'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    event.replaceInput(
        { input: 'farm_and_charm:lettuce' }, // Arg 1: the filter
        'farm_and_charm:lettuce',            // Arg 2: the item to replace
        'farmersdelight:cabbage'          // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    event.replaceOutput(
        { output: 'farm_and_charm:lettuce' }, // Arg 1: the filter
        'farm_and_charm:lettuce',            // Arg 2: the item to replace
        'farmersdelight:cabbage'          // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    event.replaceInput(
        { input: 'farm_and_charm:cabbage' }, // Arg 1: the filter
        'farm_and_charm:cabbage',            // Arg 2: the item to replace
        'farmersdelight:cabbage'          // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    event.replaceOutput(
        { output: 'farm_and_charm:cabbage' }, // Arg 1: the filter
        'farm_and_charm:cabbage',            // Arg 2: the item to replace
        'farmersdelight:cabbage'          // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )
})

LootJS.modifiers((event) => {
    event.addBlockLootModifier("farm_and_charm:wild_onions")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([3,5], [
        Item.of("farmersdelight:onion").withChance(50),
    ]);

    event.addBlockLootModifier("farm_and_charm:wild_tomatoes")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([3,5], [
        Item.of("farmersdelight:tomato").withChance(50),
    ]);

    event.addBlockLootModifier("farm_and_charm:wild_lettuce")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([3,5], [
        Item.of("farmersdelight:cabbage").withChance(10),
        Item.of("farmersdelight:cabbage_seeds").withChance(50)
        
    ]);
});
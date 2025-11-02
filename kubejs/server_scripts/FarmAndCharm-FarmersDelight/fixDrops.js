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
});

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('farm_and_charm:cabbage', 'farmersdelight:cabbage')
    event.add('farm_and_charm:cabbage', 'farmersdelight:cabbage_leaf')
    event.remove('farm_and_charm:cabbage', 'farm_and_charm:lettuce')
  })
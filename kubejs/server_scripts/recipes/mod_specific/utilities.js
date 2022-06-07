onEvent('recipes', e => {
    // This file contains a recipe changes for small mods.

    // (1) Luggage

    e.remove({id: 'luggage:luggage'})

    e.shaped('luggage:luggage', ['SDS', 'SBS', 'SSS'],
    {S: 'minecraft:stick', D: 'minecraft:diamond', B: 'bagofholding:iron_bag_of_holding'})

    // (2) Angel Ring

    e.remove({id: 'angelring:itemdiamondring'})
    e.remove({id: 'angelring:itemring'})

    e.shaped('angelring:itemdiamondring', ['CBC', 'BTB', 'CEC'], 
        {C: 'tconstruct:cobalt_ingot', B: 'minecraft:diamond_block', T: 'botania:flight_tiara', E: 'minecraft:elytra'})
    e.shaped('angelring:itemring', ['WEW', 'QRQ', 'LML'],
    {W: 'biomemakeover:dragonfly_wings', E: 'cyclic:charm_stone', Q: 'tconstruct:queens_slime_ingot', R: 'angelring:itemdiamondring', L: 'thermal:lumium_block', M: 'ftbic:mechanical_elytra'})

    // (3) Enchanting Infuser
    
    e.remove({id: 'enchantinginfuser:enchanting_infuser'})
    e.remove({id: 'enchantinginfuser:advanced_enchanting_infuser'})

    e.shaped('enchantinginfuser:enchanting_infuser', [' A ', 'ICI', 'CEC'],
    {A: 'minecraft:amethyst_shard', I: 'biomemakeover:illunite_shard', C: 'minecraft:crying_obsidian', E: 'minecraft:enchanting_table'})
    e.shaped('enchantinginfuser:advanced_enchanting_infuser', ['CHC', 'EME', 'NIN'],
    {C: 'stalwart_dungeons:chorundum', H: 'malum:hallowed_spirit_resonator', E: 'biomemakeover:ectoplasm', M: '#forge:enchantments/enchantermobbooks', N: 'minecraft:netherite_ingot', I: 'enchantinginfuser:enchanting_infuser'})

    // (4) Soul Shards

    e.remove({id: 'soulshards:corrupted_ingot'})

    e.shaped('soulshards:corrupted_ingot', ['CVC', 'VSV', 'CVC'], 
    {C: 'soulshards:corrupted_essence', V: 'soulshards:vile_dust', S: 'malum:soul_stained_steel_ingot'})

    // (5) Travel Anchors

    e.remove({id: 'travel_anchors:travel_anchor'})
    e.remove({id: 'travel_anchors:travel_staff'})

    e.shaped('travel_anchors:travel_anchor', ['SES', 'EIE', 'SES'], 
    {S: 'immersiveengineering:storage_steel', E: 'minecraft:ender_pearl', I: 'thermal:enderium_ingot'})
    e.shaped('travel_anchors:travel_staff', ['  I', ' R ', 'R  '], 
    {I: 'thermal:enderium_ingot', R: 'ftbic:iron_rod'})

})
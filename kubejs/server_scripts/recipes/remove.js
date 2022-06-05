onEvent('recipes', e => {
    var idRemove = [

        // This are destoried and duplicated recipes.
        // All the replaced recipes are in mod_specific folder.

        'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
        'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
        'immersiveengineering:crafting/ingot_aluminum_to_nugget_aluminum',
        'immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/ingot_lead_to_nugget_lead',
        'immersiveengineering:crafting/ingot_lead_to_storage_lead',
        'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
        'immersiveengineering:crafting/ingot_silver_to_nugget_silver',
        'immersiveengineering:crafting/ingot_silver_to_storage_silver',
        'immersiveengineering:crafting/ingot_nickel_to_nugget_nickel',
        'immersiveengineering:crafting/ingot_nickel_to_storage_nickel',
        'immersiveengineering:crafting/ingot_electrum_to_nugget_electrum',
        'immersiveengineering:crafting/ingot_electrum_to_storage_electrum',
        'immersiveengineering:crafting/ingot_constantan_to_nugget_constantan',
        'immersiveengineering:crafting/ingot_constantan_to_storage_constantan',
        'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
        'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
        'immersiveengineering:crafting/electrum_mix',
        'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
        'immersiveengineering:crafting/plate_copper_hammering',
        'immersiveengineering:smelting/iron_ingot_from_dust',
        'immersiveengineering:smelting/iron_ingot_from_dust_from_blasting',
        'immersiveengineering:crafting/coal_coke_to_coke',
        'immersiveengineering:crafting/coke_to_coal_coke',

        'immersiveengineering:crusher/ingot_gold',
        'immersiveengineering:crusher/ore_quartz',

        'ftbic:shapeless/tin_ingot_to_tin_nugget',
        'ftbic:shaped/tin_ingot_to_tin_block',
        'ftbic:shaped/ingots/tin_to_tin_gear',
        'ftbic:shapeless/lead_ingot_to_lead_nugget',
        'ftbic:shaped/lead_ingot_to_lead_block',
        'ftbic:shaped/ingots/lead_to_lead_gear',
        'ftbic:shapeless/bronze_ingot_to_bronze_nugget',
        'ftbic:shaped/bronze_ingot_to_bronze_block',
        'ftbic:shaped/ingots/bronze_to_bronze_gear',
        'ftbic:shapeless/enderium_block_to_enderium_ingot',
        'ftbic:shaped/nuggets/enderium_to_enderium_ingot',
        'ftbic:shapeless/enderium_ingot_to_enderium_nugget',
        'ftbic:shaped/enderium_dust',
        'ftbic:smelting/dusts/enderium_to_ingot',
        'ftbic:blasting/dusts/enderium_to_ingot',
        'ftbic:shaped/enderium_ingot_to_enderium_block',
        'ftbic:shaped/ingots/enderium_to_enderium_gear',
        'ftbic:shapeless/copper_ingot_to_copper_nugget',
        'ftbic:shaped/ingots/copper_to_copper_gear',
        'ftbic:shaped/ingots/gold_to_gold_gear',
        'ftbic:shaped/bronze_ingot',
        'ftbic:shaped/nuggets/lead_to_lead_ingot',
        'ftbic:shaped/enderium_ingot',
        'ftbic:shaped/enderium_dust_2',
        'ftbic:smelting/dusts/lead_to_ingot',
        'ftbic:blasting/dusts/lead_to_ingot',
        'ftbic:shaped/nuggets/tin_to_tin_ingot',
        'ftbic:shaped/bronze_dust',
        'ftbic:smelting/dusts/tin_to_ingot',
        'ftbic:blasting/dusts/tin_to_ingot',
        'ftbic:shaped/nuggets/copper_to_copper_ingot',
        'ftbic:smelting/dusts/iron_to_iron_ingot',
        'ftbic:blasting/dusts/iron_to_iron_ingot',
        'ftbic:shaped/ingots/iron_to_iron_gear',
        'ftbic:smelting/dusts/gold_to_gold_ingot',
        'ftbic:blasting/dusts/gold_to_gold_ingot',

        'biggerreactors:uranium_ore',
        'biggerreactors:uranium_ingot',
        'biggerreactors:uranium_block',
        'biggerreactors:uranium_dust',

        'tconstruct:common/materials/copper_ingot_from_nuggets',
        'tconstruct:common/materials/copper_nugget_from_ingot',

        'cyclic:copper_nugget',
        'cyclic:gold_bars',
        'cyclic:copper_ingot',

        'malum:copper_nugget_from_ingot',
        'malum:copper_ingot_from_nugget',

        'quark:building/crafting/gold_bars',
        'oreberriesreplanted:copper_ingot',

        'thermal:furnace_672699050',
        'thermal:furnace_1031900217',
        'thermal:furnace_2032125272',
        'thermal:furnace_1287062485',
        'thermal:furnace_1208776991',
        'thermal:furnace_1287062485',
        'thermal:furnace_466503859',
        'moreminecarts:chunk_loader',
        'twilightforest:uncrafting_table',
        'cyclic:uncrafter'
    ]

idRemove.forEach(function (remove) {
    e.remove({id: remove})
  })
})
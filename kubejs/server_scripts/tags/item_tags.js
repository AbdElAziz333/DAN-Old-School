onEvent('tags.items', e => {

    var deepslateUranium = [
        'ftbic:deepslate_uranium_ore',
        'immersiveengineering:deepslate_ore_uranium'
    ]
    
    var deepslateLead = [
        'ftbic:deepslate_lead_ore',
        'immersiveengineering:deepslate_ore_lead',
        'thermal:deepslate_lead_ore'
    ]

    var deepslateAluminum = [
        'ftbic:deepslate_aluminum_ore',
        'immersiveengineering:deepslate_ore_aluminum'
    ]

    var deepslateSilver = [
        'immersiveengineering:deepslate_ore_silver',
        'thermal:deepslate_silver_ore'
    ]

    var deepslateNickel = [
        'immersiveengineering:deepslate_ore_nickel',
        'thermal:deepslate_nickel_ore'
    ]

    var enchanterMobBooks = [
        'enchantwithmob:mob_unenchant_book',
        'enchantwithmob:mob_enchant_book',
        'enchantwithmob:enchanters_book'
    ]

    e.add('#forge:ores/deepslate_lead', deepslateLead)
    e.add('#forge:ores/deepslate_uranium', deepslateUranium)
    e.add('#forge:ores/deepslate_aluminum', deepslateAluminum)
    e.add('#forge:ores/deepslate_silver', deepslateSilver)
    e.add('#forge:ores/deepslate_nickel', deepslateNickel)
    e.add('#forge:enchantments/enchantermobbooks', enchanterMobBooks)
})
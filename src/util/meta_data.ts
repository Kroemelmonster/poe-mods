import { MetaDataMap } from './MetaData';

export default {
  AbstractAmulet: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
      tag: ['amulet'],
    },
    Mods: {
      inventory_type: ['Amulet'],
    },
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractAmulet'],
    tags: ['default', 'amulet'],
  },
  AbstractSocketableAmulet: {
    AttributeRequirements: {
      strength_requirement: ['0'],
      dexterity_requirement: ['0'],
      intelligence_requirement: ['0'],
    },
    Sockets: {
      socket_info: [
        '0:1:1 1:9999:100 2:9999:90 3:9999:80 4:9999:30 5:9999:20 6:9999:5',
      ],
    },
    extends: 'AbstractAmulet',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractAmulet',
      'AbstractSocketableAmulet',
    ],
    tags: ['default', 'amulet'],
  },
  Talisman1_1: {
    extends: 'AbstractSocketableAmulet',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractAmulet',
      'AbstractSocketableAmulet',
      'Talisman1_1',
    ],
    tags: ['default', 'amulet'],
  },
  Talisman4: {
    extends: 'AbstractSocketableAmulet',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractAmulet',
      'AbstractSocketableAmulet',
      'Talisman4',
    ],
    tags: ['default', 'amulet'],
  },
  AbstractArmour: {
    Base: {
      tag: ['armour'],
    },
    AttributeRequirements: {},
    Quality: {
      max_quality: ['20'],
    },
    Armour: {},
    Sockets: {
      socket_info: ['1:1:100 2:1:90 3:2:80 4:25:30 5:9999:20 6:9999:5'],
    },
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractArmour'],
    tags: ['default', 'armour'],
  },
  AbstractBodyArmour: {
    Base: {
      tag: ['body_armour'],
    },
    Mods: {
      inventory_type: ['BodyArmour'],
    },
    Sockets: {
      socket_info: ['1:1:50 2:1:120 3:2:100 4:25:30 5:35:5 6:50:1'],
    },
    extends: 'AbstractArmour',
    inheritance: ['Item', 'Equipment', 'AbstractArmour', 'AbstractBodyArmour'],
    tags: ['default', 'armour', 'body_armour'],
  },
  AbstractBoots: {
    Base: {
      x_size: ['2'],
      y_size: ['2'],
      tag: ['boots'],
    },
    Mods: {
      inventory_type: ['Boots'],
    },
    extends: 'AbstractArmour',
    inheritance: ['Item', 'Equipment', 'AbstractArmour', 'AbstractBoots'],
    tags: ['default', 'armour', 'boots'],
  },
  AbstractGloves: {
    Base: {
      x_size: ['2'],
      y_size: ['2'],
      tag: ['gloves'],
    },
    Mods: {
      inventory_type: ['Gloves'],
    },
    extends: 'AbstractArmour',
    inheritance: ['Item', 'Equipment', 'AbstractArmour', 'AbstractGloves'],
    tags: ['default', 'armour', 'gloves'],
  },
  AbstractHelmet: {
    Base: {
      x_size: ['2'],
      y_size: ['2'],
      tag: ['helmet'],
    },
    Mods: {
      inventory_type: ['Helm'],
    },
    extends: 'AbstractArmour',
    inheritance: ['Item', 'Equipment', 'AbstractArmour', 'AbstractHelmet'],
    tags: ['default', 'armour', 'helmet'],
  },
  AbstractShield: {
    Base: {
      x_size: ['2'],
      y_size: ['2'],
      tag: ['shield'],
    },
    Shield: {
      block_percentage: ['0'],
    },
    Mods: {
      inventory_type: ['Offhand'],
    },
    Sockets: {
      socket_info: ['1:1:50 2:1:120 3:2:100 4:9999:30 5:9999:20 6:9999:5'],
    },
    extends: 'AbstractArmour',
    inheritance: ['Item', 'Equipment', 'AbstractArmour', 'AbstractShield'],
    tags: ['default', 'armour', 'shield'],
  },
  AbstractBelt: {
    Base: {
      x_size: ['2'],
      y_size: ['1'],
      tag: ['belt'],
    },
    Mods: {
      inventory_type: ['Belt'],
    },
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractBelt'],
    tags: ['default', 'belt'],
  },
  AbstractSocketableBelt: {
    AttributeRequirements: {
      strength_requirement: ['0'],
      dexterity_requirement: ['0'],
      intelligence_requirement: ['0'],
    },
    Sockets: {
      socket_info: [
        '0:1:1 1:9999:100 2:9999:90 3:9999:80 4:9999:30 5:9999:20 6:9999:5',
      ],
    },
    extends: 'AbstractBelt',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractBelt',
      'AbstractSocketableBelt',
    ],
    tags: ['default', 'belt'],
  },
  BeltAbyss: {
    extends: 'AbstractSocketableBelt',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractBelt',
      'AbstractSocketableBelt',
      'BeltAbyss',
    ],
    tags: ['default', 'belt'],
  },
  Leaguestone: {
    Base: {
      description_text: ['LeagueStonePopupHelperText'],
    },
    LocalStats: {},
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/leaguestone_stat_descriptions.txt',
      ],
      inventory_type: ['Leaguestone'],
      enable_rarity: ['normal', 'magic', 'unique'],
      disable_rarity: ['rare'],
    },
    Charges: {
      max_charges: ['5'],
      charges_per_use: ['1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Leaguestone'],
    tags: ['default'],
  },
  MysteryLeaguestone: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryLeaguestone',
    ],
    tags: ['default', 'currency'],
  },
  AbstractCurrency: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
    },
    Usable: {},
    extends: 'Item',
    inheritance: ['Item', 'AbstractCurrency'],
    tags: ['default'],
  },
  AbstractMicrotransaction: {
    Stack: {},
    extends: 'AbstractCurrency',
    inheritance: ['Item', 'AbstractCurrency', 'AbstractMicrotransaction'],
    tags: ['default'],
  },
  CurrencyImprint: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'CurrencyImprint',
    ],
    tags: ['default', 'currency'],
  },
  CurrencyItemisedProphecy: {
    Base: {
      description_text: ['ItemDescriptionItemisedProphecy'],
    },
    Prophecy: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'CurrencyItemisedProphecy',
    ],
    tags: ['default', 'currency'],
  },
  StackableCurrency: {
    Base: {
      tag: ['currency'],
    },
    Stack: {},
    extends: 'AbstractCurrency',
    inheritance: ['Item', 'AbstractCurrency', 'StackableCurrency'],
    tags: ['default', 'currency'],
  },
  AbstractDivinationCard: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
      tag: ['divination_card'],
    },
    Stack: {},
    extends: 'Item',
    inheritance: ['Item', 'AbstractDivinationCard'],
    tags: ['default', 'divination_card'],
  },
  Equipment: {
    LocalStats: {},
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/stat_descriptions.txt',
      ],
      enable_rarity: ['normal', 'magic', 'rare', 'unique'],
    },
    Base: {},
    extends: 'Item',
    inheritance: ['Item', 'Equipment'],
    tags: ['default'],
  },
  AbstractFlask: {
    Base: {
      tag: ['flask'],
      x_size: ['1'],
      y_size: ['2'],
      description_text: ['ItemDescriptionFlask'],
    },
    Quality: {
      max_quality: ['20'],
    },
    LocalStats: {},
    Charges: {
      max_charges: ['2\t'],
    },
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/stat_descriptions.txt',
      ],
      enable_rarity: ['normal', 'magic', 'unique'],
      disable_rarity: ['rare'],
      inventory_type: ['Flask'],
    },
    Usable: {
      use_type: ['Usable'],
      action: ['flask'],
    },
    Flask: {},
    extends: 'Item',
    inheritance: ['Item', 'AbstractFlask'],
    tags: ['default', 'flask'],
  },
  AbstractHybridFlask: {
    Base: {
      tag: ['hybrid_flask'],
    },
    extends: 'AbstractFlask',
    inheritance: ['Item', 'AbstractFlask', 'AbstractHybridFlask'],
    tags: ['default', 'flask', 'hybrid_flask'],
  },
  AbstractLifeFlask: {
    Base: {
      tag: ['life_flask'],
    },
    extends: 'AbstractFlask',
    inheritance: ['Item', 'AbstractFlask', 'AbstractLifeFlask'],
    tags: ['default', 'flask', 'life_flask'],
  },
  AbstractManaFlask: {
    Base: {
      tag: ['mana_flask'],
    },
    extends: 'AbstractFlask',
    inheritance: ['Item', 'AbstractFlask', 'AbstractManaFlask'],
    tags: ['default', 'flask', 'mana_flask'],
  },
  AbstractUtilityFlask: {
    Base: {
      tag: ['utility_flask'],
    },
    extends: 'AbstractFlask',
    inheritance: ['Item', 'AbstractFlask', 'AbstractUtilityFlask'],
    tags: ['default', 'flask', 'utility_flask'],
  },
  CriticalUtilityFlask: {
    Base: {
      tag: ['critical_utility_flask'],
    },
    extends: 'AbstractUtilityFlask',
    inheritance: [
      'Item',
      'AbstractFlask',
      'AbstractUtilityFlask',
      'CriticalUtilityFlask',
    ],
    tags: ['default', 'flask', 'utility_flask', 'critical_utility_flask'],
  },
  FlaskUtility1: {
    Base: {
      description_text: ['ItemDescriptionFlaskUtility1'],
    },
    extends: 'AbstractUtilityFlask',
    inheritance: [
      'Item',
      'AbstractFlask',
      'AbstractUtilityFlask',
      'FlaskUtility1',
    ],
    tags: ['default', 'flask', 'utility_flask'],
  },
  AbstractSkillGem: {
    Base: {
      tag: ['gem'],
      x_size: ['1'],
      y_size: ['1'],
      description_text: ['ItemDescriptionSkillGem'],
    },
    SkillGem: {},
    Quality: {
      max_quality: ['20'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AbstractSkillGem'],
    tags: ['default', 'gem'],
  },
  ActiveSkillGem: {
    Base: {
      description_text: ['ItemDescriptionActiveSkillGem'],
    },
    SkillGem: {},
    extends: 'AbstractSkillGem',
    inheritance: ['Item', 'AbstractSkillGem', 'ActiveSkillGem'],
    tags: ['default', 'gem'],
  },
  SupportSkillGem: {
    Base: {
      description_text: ['ItemDescriptionSupportSkillGem'],
      tag: ['support_gem'],
    },
    SkillGem: {},
    extends: 'AbstractSkillGem',
    inheritance: ['Item', 'AbstractSkillGem', 'SupportSkillGem'],
    tags: ['default', 'gem', 'support_gem'],
  },
  AbstractHideoutDoodad: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
    },
    Usable: {},
    Stack: {},
    extends: 'Item',
    inheritance: ['Item', 'AbstractHideoutDoodad'],
    tags: ['default'],
  },
  Item: {
    Base: {
      base_level: ['1'],
      tag: ['default'],
    },
    extends: 'nothing',
    inheritance: ['Item'],
    tags: ['default'],
  },
  AbstractAbyssJewel: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
      description_text: ['ItemDescriptionAbyssJewel'],
    },
    LocalStats: {},
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/stat_descriptions.txt',
      ],
      enable_rarity: ['magic', 'rare', 'unique'],
      inventory_type: ['passivejewels'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AbstractAbyssJewel'],
    tags: ['default'],
  },
  AbstractJewel: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
      description_text: ['ItemDescriptionPassiveJewel'],
    },
    LocalStats: {},
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/stat_descriptions.txt',
      ],
      enable_rarity: ['magic', 'rare', 'unique'],
      inventory_type: ['passivejewels'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AbstractJewel'],
    tags: ['default'],
  },
  AbstractLabyrinthItem: {
    Stack: {
      max_stack_size: ['1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AbstractLabyrinthItem'],
    tags: ['default'],
  },
  BronzeKey: {
    Base: {
      description_text: ['TreasureKeyDescription'],
    },
    extends: 'AbstractLabyrinthItem',
    inheritance: ['Item', 'AbstractLabyrinthItem', 'BronzeKey'],
    tags: ['default'],
  },
  GoldenKey: {
    Base: {
      description_text: ['GoldenKeyDescription'],
    },
    extends: 'AbstractLabyrinthItem',
    inheritance: ['Item', 'AbstractLabyrinthItem', 'GoldenKey'],
    tags: ['default'],
  },
  LabyrinthTrinket: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
    },
    extends: 'AbstractLabyrinthItem',
    inheritance: ['Item', 'AbstractLabyrinthItem', 'LabyrinthTrinket'],
    tags: ['default'],
  },
  OfferingToTheGoddess: {
    Base: {
      description_text: ['ItemDescriptionLabyrinthMapItem'],
    },
    LocalStats: {},
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/stat_descriptions.txt',
      ],
      inventory_type: ['Map'],
    },
    extends: 'Item',
    inheritance: ['Item', 'OfferingToTheGoddess'],
    tags: ['default'],
  },
  SilverKey: {
    Base: {
      description_text: ['SilverKeyDescription'],
    },
    extends: 'AbstractLabyrinthItem',
    inheritance: ['Item', 'AbstractLabyrinthItem', 'SilverKey'],
    tags: ['default'],
  },
  AbstractMapFragment: {
    Base: {
      description_text: ['ItemDescriptionMapFragment'],
    },
    Stack: {},
    Usable: {},
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'AbstractMapFragment'],
    tags: ['default'],
  },
  AbstractMiscMapItem: {
    extends: 'Item',
    inheritance: ['Item', 'AbstractMiscMapItem'],
    tags: ['default'],
  },
  BreachFragmentChaos: {
    Base: {
      description_text: ['ItemDescriptionBreachMapItemChaos'],
    },
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'BreachFragmentChaos'],
    tags: ['default'],
  },
  BreachFragmentCold: {
    Base: {
      description_text: ['ItemDescriptionBreachMapItemCold'],
    },
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'BreachFragmentCold'],
    tags: ['default'],
  },
  BreachFragmentFire: {
    Base: {
      description_text: ['ItemDescriptionBreachMapItemFire'],
    },
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'BreachFragmentFire'],
    tags: ['default'],
  },
  BreachFragmentLightning: {
    Base: {
      description_text: ['ItemDescriptionBreachMapItemLightning'],
    },
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'BreachFragmentLightning'],
    tags: ['default'],
  },
  BreachFragmentPhysical: {
    Base: {
      description_text: ['ItemDescriptionBreachMapItemPhysical'],
    },
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'BreachFragmentPhysical'],
    tags: ['default'],
  },
  ClassicVaultKey: {
    Base: {
      description_text: ['ItemDescriptionClassicVaultKey'],
    },
    LocalStats: {},
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/stat_descriptions.txt',
      ],
      inventory_type: ['Map'],
      enable_rarity: ['normal'],
    },
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'ClassicVaultKey'],
    tags: ['default'],
  },
  FragmentPantheonFlask: {
    Base: {
      description_text: ['ItemDescriptionPantheonVessel'],
    },
    extends: 'AbstractMiscMapItem',
    inheritance: ['Item', 'AbstractMiscMapItem', 'FragmentPantheonFlask'],
    tags: ['default'],
  },
  AbstractMap: {
    Base: {
      tag: ['map'],
      description_text: ['ItemDescriptionMap'],
    },
    LocalStats: {},
    Mods: {},
    Quality: {
      max_quality: ['20'],
    },
    Map: {},
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractMap'],
    tags: ['default', 'map'],
  },
  MysteryBox1x1: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox1x1',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox1x2: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox1x2',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox1x3: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox1x3',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox1x4: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox1x4',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox2x1: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox2x1',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox2x2: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox2x2',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox2x3: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox2x3',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox2x4: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox2x4',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox3x2: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox3x2',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBox3x3: {
    Imprint: {},
    extends: 'StackableCurrency',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'StackableCurrency',
      'MysteryBox3x3',
    ],
    tags: ['default', 'currency'],
  },
  MysteryBoxCarnage: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxCarnage',
    ],
    tags: ['default'],
  },
  MysteryBoxChaosVsOrder: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxChaosVsOrder',
    ],
    tags: ['default'],
  },
  MysteryBoxClassic: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxClassic',
    ],
    tags: ['default'],
  },
  MysteryBoxDarkness: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxDarkness',
    ],
    tags: ['default'],
  },
  MysteryBoxEmber: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxEmber',
    ],
    tags: ['default'],
  },
  MysteryBoxLightChaos: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxLightChaos',
    ],
    tags: ['default'],
  },
  MysteryBoxRadiant: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxRadiant',
    ],
    tags: ['default'],
  },
  MysteryBoxSolaris: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxSolaris',
    ],
    tags: ['default'],
  },
  MysteryBoxStormcaller: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxStormcaller',
    ],
    tags: ['default'],
  },
  MysteryBoxStPatty: {
    Imprint: {},
    extends: 'AbstractMicrotransaction',
    inheritance: [
      'Item',
      'AbstractCurrency',
      'AbstractMicrotransaction',
      'MysteryBoxStPatty',
    ],
    tags: ['default'],
  },
  AbstactPantheonSoul: {
    Base: {
      description_text: ['ItemDescriptionPantheonSoul'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AbstactPantheonSoul'],
    tags: ['default'],
  },
  AbstractQuestItem: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
    },
    Quest: {},
    extends: 'Item',
    inheritance: ['Item', 'AbstractQuestItem'],
    tags: ['default'],
  },
  AvariusStaff: {
    Quest: {
      grant_flag: ['a10q2minusHaveItem'],
      remove_flag: ['a10q2minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AvariusStaff'],
    tags: ['default'],
  },
  'Book-a10q3': {
    Base: {
      description_text: ['ItemDescriptionBook2RespecPoints'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunction2PassivePoints'],
    },
    Quest: {
      use_flag: ['a10q3minusUsedRewardBook'],
      grant_flag: ['a10q3minusHaveRewardBook'],
      remove_flag: ['a10q3minusUsedRewardBook'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'Book-a10q3'],
    tags: ['default'],
  },
  'Book-a10q4': {
    Quest: {
      use_flag: ['a10q4minusUsedRewardBook'],
      grant_flag: ['a10q4minusHaveRewardBook'],
      remove_flag: ['a10q4minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveRespecBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveRespecBook',
      'Book-a10q4',
    ],
    tags: ['default'],
  },
  'Book-a10q6': {
    Quest: {
      use_flag: ['a10q6minusUsedRewardBook'],
      grant_flag: ['a10q6minusHaveRewardBook'],
      remove_flag: ['a10q6minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a10q6',
    ],
    tags: ['default'],
  },
  Potion: {
    Quest: {
      grant_flag: ['a10q4minusHaveItem'],
      remove_flag: ['a10q4minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Potion'],
    tags: ['default'],
  },
  Teardrop: {
    Quest: {
      grant_flag: ['a10q5minusHaveItem'],
      remove_flag: ['a10q5minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Teardrop'],
    tags: ['default'],
  },
  'Book-a4q6': {
    Quest: {
      use_flag: ['a4q6minusUsedRewardBook'],
      grant_flag: ['a4q6minusHaveRewardBook'],
      remove_flag: ['a4q6minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillAnd2RespecsBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillAnd2RespecsBook',
      'Book-a4q6',
    ],
    tags: ['default'],
  },
  DaressoGem: {
    Quest: {
      grant_flag: ['a4q4minusHaveGem'],
      remove_flag: ['a4q4minusDeliveredGem'],
      extra_flag: ['a4q1minusGemQuestsReceived'],
    },
    extends: 'Item',
    inheritance: ['Item', 'DaressoGem'],
    tags: ['default'],
  },
  KaomGem: {
    Quest: {
      grant_flag: ['a4q3minusHaveGem'],
      remove_flag: ['a4q3minusDeliveredGem'],
      extra_flag: ['a4q1minusGemQuestsReceived'],
    },
    extends: 'Item',
    inheritance: ['Item', 'KaomGem'],
    tags: ['default'],
  },
  Organ1: {
    Quest: {
      grant_flag: ['a4q5minusHaveOrgan1'],
      remove_flag: ['a4q5minusDeliveredOrgan1'],
      extra_flag: ['a4q5minusSeenOrgan'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Organ1'],
    tags: ['default'],
  },
  Organ2: {
    Quest: {
      grant_flag: ['a4q5minusHaveOrgan2'],
      remove_flag: ['a4q5minusDeliveredOrgan2'],
      extra_flag: ['a4q5minusSeenOrgan'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Organ2'],
    tags: ['default'],
  },
  Organ3: {
    Quest: {
      grant_flag: ['a4q5minusHaveOrgan3'],
      remove_flag: ['a4q5minusDeliveredOrgan3'],
      extra_flag: ['a4q5minusSeenOrgan'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Organ3'],
    tags: ['default'],
  },
  RedBanner: {
    Quest: {
      grant_flag: ['a4q2minusHaveBanner'],
      remove_flag: ['a4q2minusUsedBanner'],
      extra_flag: ['a4q2minusQuestReceived'],
    },
    extends: 'Item',
    inheritance: ['Item', 'RedBanner'],
    tags: ['default'],
  },
  'Book-a5q3': {
    Quest: {
      use_flag: ['a5q3minusUsedRewardBook'],
      grant_flag: ['a5q3minusHaveRewardBook'],
      remove_flag: ['a5q3minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a5q3',
    ],
    tags: ['default'],
  },
  'Book-a5q7': {
    Quest: {
      use_flag: ['a5q7minusUsedRewardBook'],
      grant_flag: ['a5q7minusHaveRewardBook'],
      remove_flag: ['a5q7minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillAnd2RespecsBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillAnd2RespecsBook',
      'Book-a5q7',
    ],
    tags: ['default'],
  },
  KitavaKey: {
    Quest: {
      grant_flag: ['a5q6minusHaveItem'],
      extra_flag: ['a5q6minusSeenItem'],
      remove_flag: ['a5q6minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'KitavaKey'],
    tags: ['default'],
  },
  Miasmeter: {
    Quest: {
      grant_flag: ['a5q3minusHaveItem'],
      remove_flag: ['a5q3minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Miasmeter'],
    tags: ['default'],
  },
  TemplarCourtKey: {
    Quest: {
      grant_flag: ['a5q2minusHaveKey'],
      remove_flag: ['a5q2minusUsedKey'],
    },
    extends: 'Item',
    inheritance: ['Item', 'TemplarCourtKey'],
    tags: ['default'],
  },
  Torment1: {
    Quest: {
      grant_flag: ['a5q7minusHaveItem1'],
      remove_flag: ['a5q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Torment1'],
    tags: ['default'],
  },
  Torment2: {
    Quest: {
      grant_flag: ['a5q7minusHaveItem2'],
      remove_flag: ['a5q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Torment2'],
    tags: ['default'],
  },
  Torment3: {
    Quest: {
      grant_flag: ['a5q7minusHaveItem3'],
      remove_flag: ['a5q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Torment3'],
    tags: ['default'],
  },
  BestelsManuscript: {
    Quest: {
      grant_flag: ['a6q5minusHaveItem'],
      remove_flag: ['a6q5minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'BestelsManuscript'],
    tags: ['default'],
  },
  BlackFlag: {
    Quest: {
      grant_flag: ['a6q1minusHaveFlag'],
      remove_flag: ['a6q1minusDeliveredFlag'],
    },
    extends: 'Item',
    inheritance: ['Item', 'BlackFlag'],
    tags: ['default'],
  },
  'Book-a6q3': {
    Quest: {
      use_flag: ['a6q3minusUsedRewardBook'],
      grant_flag: ['a6q3minusHaveRewardBook'],
      remove_flag: ['a6q3minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a6q3',
    ],
    tags: ['default'],
  },
  'Book-a6q4': {
    Quest: {
      use_flag: ['a6q4minusUsedRewardBook'],
      grant_flag: ['a6q4minusHaveRewardBook'],
      remove_flag: ['a6q4minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveRespecBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveRespecBook',
      'Book-a6q4',
    ],
    tags: ['default'],
  },
  'Book-a6q6': {
    Quest: {
      use_flag: ['a6q6minusUsedRewardBook'],
      grant_flag: ['a6q6minusHaveRewardBook'],
      remove_flag: ['a6q6minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a6q6',
    ],
    tags: ['default'],
  },
  'Book-a6q7': {
    Quest: {
      use_flag: ['a6q7minusUsedRewardBook'],
      grant_flag: ['a6q7minusHaveRewardBook'],
      remove_flag: ['a6q7minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a6q7',
    ],
    tags: ['default'],
  },
  KaruiEye: {
    Quest: {
      grant_flag: ['a6q3minusHaveItem'],
      remove_flag: ['a6q3minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'KaruiEye'],
    tags: ['default'],
  },
  BlackVenom: {
    Quest: {
      grant_flag: ['a7q3minusHaveItem'],
      remove_flag: ['a7q3minusDeliveredItem'],
      extra_flag: ['a7q3minusSpawnSilk'],
    },
    extends: 'Item',
    inheritance: ['Item', 'BlackVenom'],
    tags: ['default'],
  },
  'Book-a7q1': {
    Quest: {
      use_flag: ['a7q1minusUsedRewardBook'],
      grant_flag: ['a7q1minusHaveRewardBook'],
      remove_flag: ['a7q1minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a7q1',
    ],
    tags: ['default'],
  },
  'Book-a7q6': {
    Quest: {
      use_flag: ['a7q6minusUsedRewardBook'],
      grant_flag: ['a7q6minusHaveRewardBook'],
      remove_flag: ['a7q6minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillAnd2RespecsBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillAnd2RespecsBook',
      'Book-a7q6',
    ],
    tags: ['default'],
  },
  'Book-a7q9': {
    Quest: {
      use_flag: ['a7q9minusUsedRewardBook'],
      grant_flag: ['a7q9minusHaveRewardBook'],
      remove_flag: ['a7q9minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a7q9',
    ],
    tags: ['default'],
  },
  Firefly1: {
    Quest: {
      grant_flag: ['a7q7minusHaveItem1'],
      remove_flag: ['a7q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Firefly1'],
    tags: ['default'],
  },
  Firefly2: {
    Quest: {
      grant_flag: ['a7q7minusHaveItem2'],
      remove_flag: ['a7q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Firefly2'],
    tags: ['default'],
  },
  Firefly3: {
    Quest: {
      grant_flag: ['a7q7minusHaveItem3'],
      remove_flag: ['a7q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Firefly3'],
    tags: ['default'],
  },
  Firefly4: {
    Quest: {
      grant_flag: ['a7q7minusHaveItem4'],
      remove_flag: ['a7q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Firefly4'],
    tags: ['default'],
  },
  Firefly5: {
    Quest: {
      grant_flag: ['a7q7minusHaveItem5'],
      remove_flag: ['a7q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Firefly5'],
    tags: ['default'],
  },
  Firefly6: {
    Quest: {
      grant_flag: ['a7q7minusHaveItem6'],
      remove_flag: ['a7q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Firefly6'],
    tags: ['default'],
  },
  Firefly7: {
    Quest: {
      grant_flag: ['a7q7minusHaveItem7'],
      remove_flag: ['a7q7minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Firefly7'],
    tags: ['default'],
  },
  GreustNecklace: {
    Quest: {
      grant_flag: ['a7q8minusHaveItem'],
      remove_flag: ['a7q8minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'GreustNecklace'],
    tags: ['default'],
  },
  KisharaStar: {
    Quest: {
      grant_flag: ['a7q6minusHaveItem'],
      remove_flag: ['a7q6minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'KisharaStar'],
    tags: ['default'],
  },
  MaligaroMap: {
    Quest: {
      grant_flag: ['a7q2minusHaveItem'],
      extra_flag: ['a7q3minusSpawnSilk'],
      remove_flag: ['a7q3minusDeliveredItem'],
      is_map: ['true'],
    },
    extends: 'Item',
    inheritance: ['Item', 'MaligaroMap'],
    tags: ['default'],
  },
  ObsidianKey: {
    Quest: {
      grant_flag: ['a7q1minusHaveKey'],
      remove_flag: ['a7q1minusUsedKey'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ObsidianKey'],
    tags: ['default'],
  },
  SilverLocket: {
    Quest: {
      grant_flag: ['a7q5minusHaveItem'],
      remove_flag: ['a7q5minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'SilverLocket'],
    tags: ['default'],
  },
  AnkhOfEternity: {
    Quest: {
      grant_flag: ['a8q6minusHaveItem'],
      remove_flag: ['a8q6minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AnkhOfEternity'],
    tags: ['default'],
  },
  'Book-a8q4': {
    Quest: {
      use_flag: ['a8q4minusUsedRewardBook'],
      grant_flag: ['a8q4minusHaveRewardBook'],
      remove_flag: ['a8q4minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a8q4',
    ],
    tags: ['default'],
  },
  'Book-a8q6': {
    Quest: {
      use_flag: ['a8q6minusUsedRewardBook'],
      grant_flag: ['a8q6minusHaveRewardBook'],
      remove_flag: ['a8q6minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillAnd2RespecsBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillAnd2RespecsBook',
      'Book-a8q6',
    ],
    tags: ['default'],
  },
  'Book-a8q7': {
    Quest: {
      use_flag: ['a8q7minusUsedRewardBook'],
      grant_flag: ['a8q7minusHaveRewardBook'],
      remove_flag: ['a8q7minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a8q7',
    ],
    tags: ['default'],
  },
  LunarisOrb: {
    Quest: {
      grant_flag: ['a8q2minusHaveItem'],
      remove_flag: ['a8q23minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'LunarisOrb'],
    tags: ['default'],
  },
  SolarisOrb: {
    Quest: {
      grant_flag: ['a8q3minusHaveItem'],
      remove_flag: ['a8q23minusDeliveredItems'],
    },
    extends: 'Item',
    inheritance: ['Item', 'SolarisOrb'],
    tags: ['default'],
  },
  WingsOfVastiri: {
    Quest: {
      grant_flag: ['a8q5minusHaveItem'],
      remove_flag: ['a8q5minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'WingsOfVastiri'],
    tags: ['default'],
  },
  'Book-a9q2': {
    Quest: {
      use_flag: ['a9q2minusUsedRewardBook'],
      grant_flag: ['a9q2minusHaveRewardBook'],
      remove_flag: ['a9q2minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a9q2',
    ],
    tags: ['default'],
  },
  'Book-a9q4': {
    Quest: {
      use_flag: ['a9q4minusUsedRewardBook'],
      grant_flag: ['a9q4minusHaveRewardBook'],
      remove_flag: ['a9q4minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveRespecBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveRespecBook',
      'Book-a9q4',
    ],
    tags: ['default'],
  },
  'Book-a9q5': {
    Quest: {
      use_flag: ['a9q5minusUsedRewardBook'],
      grant_flag: ['a9q5minusHaveRewardBook'],
      remove_flag: ['a9q5minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a9q5',
    ],
    tags: ['default'],
  },
  BottledStorm: {
    Quest: {
      grant_flag: ['a9q5minusHaveItem'],
      remove_flag: ['a9q5minusUsedItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'BottledStorm'],
    tags: ['default'],
  },
  Calendar: {
    Quest: {
      grant_flag: ['a9q4minusHaveItem'],
      remove_flag: ['a9q4minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Calendar'],
    tags: ['default'],
  },
  Ingredient1: {
    Quest: {
      grant_flag: ['a9q1minusHaveItem1'],
      remove_flag: ['a9q1minusDeliveredItem1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Ingredient1'],
    tags: ['default'],
  },
  Ingredient2: {
    Quest: {
      grant_flag: ['a9q1minusHaveItem2'],
      remove_flag: ['a9q1minusDeliveredItem2'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Ingredient2'],
    tags: ['default'],
  },
  SekhemaFeather: {
    Quest: {
      grant_flag: ['a9q2minusHaveItem'],
      remove_flag: ['a9q2minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'SekhemaFeather'],
    tags: ['default'],
  },
  StormSword: {
    Quest: {
      grant_flag: ['a9q3minusHaveItem'],
      remove_flag: ['a9q3minusDeliveredItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'StormSword'],
    tags: ['default'],
  },
  AllFlameLantern1: {
    Quest: {
      grant_flag: ['a1q6minusHaveAllFlame'],
      remove_flag: ['a1q6minusDeliveredAllFlame'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AllFlameLantern1'],
    tags: ['default'],
  },
  CombinedAmulet: {
    Quest: {
      remove_flag: ['a2q8minusPlacedApex'],
      grant_flag: ['a2q8minusHaveApex'],
    },
    extends: 'Item',
    inheritance: ['Item', 'CombinedAmulet'],
    tags: ['default'],
  },
  DexAmulet: {
    Quest: {
      remove_flag: ['a2bminusDeliveredAmulets'],
      grant_flag: ['a2bminusHaveDexAmulet'],
      extra_flag: ['a2bminusKilledDexBandit'],
    },
    extends: 'Item',
    inheritance: ['Item', 'DexAmulet'],
    tags: ['default'],
  },
  IntAmulet: {
    Quest: {
      remove_flag: ['a2bminusDeliveredAmulets'],
      grant_flag: ['a2bminusHaveIntAmulet'],
      extra_flag: ['a2bminusKilledIntBandit'],
    },
    extends: 'Item',
    inheritance: ['Item', 'IntAmulet'],
    tags: ['default'],
  },
  StrAmulet: {
    Quest: {
      remove_flag: ['a2bminusDeliveredAmulets'],
      grant_flag: ['a2bminusHaveStrAmulet'],
      extra_flag: ['a2bminusKilledStrBandit'],
    },
    extends: 'Item',
    inheritance: ['Item', 'StrAmulet'],
    tags: ['default'],
  },
  Bust1: {
    Quest: {
      grant_flag: ['a3q11minusHaveBust1'],
      remove_flag: ['a3q11minusDeliveredBust1'],
      extra_flag: ['SeenBust1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Bust1'],
    tags: ['default'],
  },
  Bust2: {
    Quest: {
      grant_flag: ['a3q11minusHaveBust2'],
      remove_flag: ['a3q11minusDeliveredBust2'],
      extra_flag: ['SeenBust2'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Bust2'],
    tags: ['default'],
  },
  Bust3: {
    Quest: {
      grant_flag: ['a3q11minusHaveBust3'],
      remove_flag: ['a3q11minusDeliveredBust3'],
      extra_flag: ['SeenBust3'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Bust3'],
    tags: ['default'],
  },
  Decanter: {
    Quest: {
      grant_flag: ['a3q13minusHaveDecanter'],
      remove_flag: ['a3q13minusDecanterDelivered'],
      extra_flag: ['SeenDecanter'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Decanter'],
    tags: ['default'],
  },
  Fruit: {
    Quest: {
      grant_flag: ['a3q13minusHavePlum'],
      remove_flag: ['a3q13minusPlumDelivered'],
      extra_flag: ['SeenPlum'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Fruit'],
    tags: ['default'],
  },
  Glyph1: {
    Quest: {
      remove_flag: ['a1q4minusPlacedGlyphs'],
      grant_flag: ['a1q4minusHaveGlyph1'],
      extra_flag: ['a1q4minusKnowsAboutGlyphs'],
      extra_flag2: ['SeenShell1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Glyph1'],
    tags: ['default'],
  },
  Glyph2: {
    Quest: {
      remove_flag: ['a1q4minusPlacedGlyphs'],
      grant_flag: ['a1q4minusHaveGlyph2'],
      extra_flag: ['a1q4minusKnowsAboutGlyphs'],
      extra_flag2: ['SeenShell2'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Glyph2'],
    tags: ['default'],
  },
  Glyph3: {
    Quest: {
      remove_flag: ['a1q4minusPlacedGlyphs'],
      grant_flag: ['a1q4minusHaveGlyph3'],
      extra_flag: ['a1q4minusKnowsAboutGlyphs'],
      extra_flag2: ['SeenShell3'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Glyph3'],
    tags: ['default'],
  },
  GoldenHand: {
    Quest: {
      grant_flag: ['a2q5minusHaveGoldenHand'],
      remove_flag: ['a2q5minusDeliveredGoldenHand'],
      extra_flag: ['a2q5minusReceivedQuest'],
    },
    extends: 'Item',
    inheritance: ['Item', 'GoldenHand'],
    tags: ['default'],
  },
  Page1: {
    Quest: {
      grant_flag: ['a3q12minusHavePage1'],
      extra_flag: ['a3q12minusSeenPages'],
      remove_flag: ['a3q12minusDeliveredPages'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Page1'],
    tags: ['default'],
  },
  Page2: {
    Quest: {
      grant_flag: ['a3q12minusHavePage2'],
      extra_flag: ['a3q12minusSeenPages'],
      remove_flag: ['a3q12minusDeliveredPages'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Page2'],
    tags: ['default'],
  },
  Page3: {
    Quest: {
      grant_flag: ['a3q12minusHavePage3'],
      extra_flag: ['a3q12minusSeenPages'],
      remove_flag: ['a3q12minusDeliveredPages'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Page3'],
    tags: ['default'],
  },
  Page4: {
    Quest: {
      grant_flag: ['a3q12minusHavePage4'],
      extra_flag: ['a3q12minusSeenPages'],
      remove_flag: ['a3q12minusDeliveredPages'],
    },
    extends: 'Item',
    inheritance: ['Item', 'Page4'],
    tags: ['default'],
  },
  InfernalTalc: {
    Quest: {
      grant_flag: ['a3q5minusHaveTalc'],
      remove_flag: ['a3q5minusUsedTalc'],
    },
    extends: 'Item',
    inheritance: ['Item', 'InfernalTalc'],
    tags: ['default'],
  },
  MapUpgradeTier1_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier1_1'],
      league_remove_flag: ['UsedMapUpgradeTier1_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier1'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier1_1'],
    tags: ['default'],
  },
  MapUpgradeTier10_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier10_1'],
      league_remove_flag: ['UsedMapUpgradeTier10_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier10'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier10_1'],
    tags: ['default'],
  },
  MapUpgradeTier10_2: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier10_2'],
      league_remove_flag: ['UsedMapUpgradeTier10_2'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier10'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier10_2'],
    tags: ['default'],
  },
  MapUpgradeTier10_3: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier10_3'],
      league_remove_flag: ['UsedMapUpgradeTier10_3'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier10'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier10_3'],
    tags: ['default'],
  },
  MapUpgradeTier2_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier2_1'],
      league_remove_flag: ['UsedMapUpgradeTier2_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier2'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier2_1'],
    tags: ['default'],
  },
  MapUpgradeTier3_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier3_1'],
      league_remove_flag: ['UsedMapUpgradeTier3_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier3'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier3_1'],
    tags: ['default'],
  },
  MapUpgradeTier4_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier4_1'],
      league_remove_flag: ['UsedMapUpgradeTier4_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier4'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier4_1'],
    tags: ['default'],
  },
  MapUpgradeTier5_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier5_1'],
      league_remove_flag: ['UsedMapUpgradeTier5_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier5'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier5_1'],
    tags: ['default'],
  },
  MapUpgradeTier6_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier6_1'],
      league_remove_flag: ['UsedMapUpgradeTier6_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier6'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier6_1'],
    tags: ['default'],
  },
  MapUpgradeTier7_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier7_1'],
      league_remove_flag: ['UsedMapUpgradeTier7_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier7'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier7_1'],
    tags: ['default'],
  },
  MapUpgradeTier8_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier8_1'],
      league_remove_flag: ['UsedMapUpgradeTier8_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier8'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier8_1'],
    tags: ['default'],
  },
  MapUpgradeTier8_2: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier8_2'],
      league_remove_flag: ['UsedMapUpgradeTier8_2'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier8'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier8_2'],
    tags: ['default'],
  },
  MapUpgradeTier9_1: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier9_1'],
      league_remove_flag: ['UsedMapUpgradeTier9_1'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier9'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier9_1'],
    tags: ['default'],
  },
  MapUpgradeTier9_2: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier9_2'],
      league_remove_flag: ['UsedMapUpgradeTier9_2'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier9'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier9_2'],
    tags: ['default'],
  },
  MapUpgradeTier9_3: {
    Base: {
      description_text: ['MapUpgradeDescriptionText'],
    },
    Quest: {
      grant_flag: ['GrantMapUpgradeTier9_3'],
      league_remove_flag: ['UsedMapUpgradeTier9_3'],
    },
    Usable: {
      action: ['upgrade_atlas_map'],
      use_type: ['ApplyToAtlas'],
    },
    Stack: {
      function_text: ['MapUpgradeFunctionTier9'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'MapUpgradeTier9_3'],
    tags: ['default'],
  },
  MedicineSet1: {
    Quest: {
      grant_flag: ['a1q5minusHaveMedicineChest'],
      remove_flag: ['a1q5minusNessaCongratulated'],
      extra_flag: ['SeenMedicineChest'],
    },
    extends: 'Item',
    inheritance: ['Item', 'MedicineSet1'],
    tags: ['default'],
  },
  PoisonSkillGem: {
    Quest: {
      grant_flag: ['a2q6minusHaveSkillGem'],
      remove_flag: ['a2q9minusPoisonedTree'],
      extra_flag: ['a2q6minusHelenaInTown'],
      extra_flag2: ['SeenBalefulGem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'PoisonSkillGem'],
    tags: ['default'],
  },
  PoisonSpear: {
    Quest: {
      grant_flag: ['a2q4minusHavePoisonSpear'],
      remove_flag: ['a2q9minusPoisonedTree'],
      extra_flag: ['a2q4minusReceivedQuest'],
      extra_flag2: ['a2bminusStartNewQuests'],
    },
    extends: 'Item',
    inheritance: ['Item', 'PoisonSpear'],
    tags: ['default'],
  },
  RibbonSpool: {
    Quest: {
      grant_flag: ['a3q4minusHaveRibbonSpool'],
      remove_flag: ['a3q4minusDeliveredSpool'],
      extra_flag: ['SeenRibbonSpool'],
    },
    extends: 'Item',
    inheritance: ['Item', 'RibbonSpool'],
    tags: ['default'],
  },
  SewerKeys: {
    Quest: {
      grant_flag: ['a3q11minusHaveSewerKeys'],
      remove_flag: ['a3q11minusUsedSewerKeys'],
    },
    extends: 'Item',
    inheritance: ['Item', 'SewerKeys'],
    tags: ['default'],
  },
  ShaperMemoryFragment1_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment1_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment1_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment1_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment10_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment10_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment10_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment10_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment10_2: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment10_2'],
      league_remove_flag: ['DeliveredShaperMemoryFragment10_2'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment10_2'],
    tags: ['default'],
  },
  ShaperMemoryFragment10_3: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment10_3'],
      league_remove_flag: ['DeliveredShaperMemoryFragment10_3'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment10_3'],
    tags: ['default'],
  },
  ShaperMemoryFragment2_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment2_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment2_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment2_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment3_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment3_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment3_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment3_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment4_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment4_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment4_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment4_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment5_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment5_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment5_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment5_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment6_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment6_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment6_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment6_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment7_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment7_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment7_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment7_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment8_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment8_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment8_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment8_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment8_2: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment8_2'],
      league_remove_flag: ['DeliveredShaperMemoryFragment8_2'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment8_2'],
    tags: ['default'],
  },
  ShaperMemoryFragment9_1: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment9_1'],
      league_remove_flag: ['DeliveredShaperMemoryFragment9_1'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment9_1'],
    tags: ['default'],
  },
  ShaperMemoryFragment9_2: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment9_2'],
      league_remove_flag: ['DeliveredShaperMemoryFragment9_2'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment9_2'],
    tags: ['default'],
  },
  ShaperMemoryFragment9_3: {
    Quest: {
      grant_flag: ['HaveShaperMemoryFragment9_3'],
      league_remove_flag: ['DeliveredShaperMemoryFragment9_3'],
    },
    extends: 'Item',
    inheritance: ['Item', 'ShaperMemoryFragment9_3'],
    tags: ['default'],
  },
  AbstractPassiveRespecBook: {
    Base: {
      description_text: ['ItemDescriptionBook2RespecPoints'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunction2RespecPoints'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'AbstractPassiveRespecBook'],
    tags: ['default'],
  },
  AbstractPassiveSkillAnd2RespecsBook: {
    Base: {
      description_text: ['ItemDescriptionBookPassivePointAnd2RespecPoints'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunctionPassivePointAnd2RespecPoints'],
    },
    extends: 'AbstractQuestItem',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillAnd2RespecsBook',
    ],
    tags: ['default'],
  },
  AbstractPassiveSkillBook: {
    Base: {
      description_text: ['ItemDescriptionBookPassivePoint'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunctionPassivePoint'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'AbstractPassiveSkillBook'],
    tags: ['default'],
  },
  BanditRespecAlira: {
    Base: {
      description_text: ['ItemDescriptionBanditRespecAlira'],
    },
    Quest: {
      can_sell: ['true'],
    },
    Usable: {
      action: ['respec_alira'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunctionBanditRespecAlira'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'BanditRespecAlira'],
    tags: ['default'],
  },
  BanditRespecEramir: {
    Base: {
      description_text: ['ItemDescriptionBanditRespecEramir'],
    },
    Quest: {
      can_sell: ['true'],
    },
    Usable: {
      action: ['respec_eramir'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunctionBanditRespecEramir'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'BanditRespecEramir'],
    tags: ['default'],
  },
  BanditRespecKraityn: {
    Base: {
      description_text: ['ItemDescriptionBanditRespecKraityn'],
    },
    Quest: {
      can_sell: ['true'],
    },
    Usable: {
      action: ['respec_kraityn'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunctionBanditRespecKraityn'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'BanditRespecKraityn'],
    tags: ['default'],
  },
  BanditRespecOak: {
    Base: {
      description_text: ['ItemDescriptionBanditRespecOak'],
    },
    Quest: {
      can_sell: ['true'],
    },
    Usable: {
      action: ['respec_oak'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunctionBanditRespecOak'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'BanditRespecOak'],
    tags: ['default'],
  },
  'Book-a1q6': {
    Quest: {
      use_flag: ['a1q6minusUsedRewardBook'],
      grant_flag: ['a1q6minusHaveRewardBook'],
      remove_flag: ['a1q6minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a1q6',
    ],
    tags: ['default'],
  },
  'Book-a1q7': {
    Quest: {
      use_flag: ['a1q7minusUsedRewardBook'],
      grant_flag: ['a1q7minusHaveRewardBook'],
      remove_flag: ['a1q7minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a1q7',
    ],
    tags: ['default'],
  },
  'Book-a1q8': {
    Quest: {
      use_flag: ['a1q8minusUsedRewardBook'],
      grant_flag: ['a1q8minusHaveRewardBook'],
      remove_flag: ['a1q8minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveRespecBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveRespecBook',
      'Book-a1q8',
    ],
    tags: ['default'],
  },
  'Book-a1q9': {
    Quest: {
      use_flag: ['a1q9minusUsedRewardBook'],
      grant_flag: ['a1q9minusHaveRewardBook'],
      remove_flag: ['a1q9minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a1q9',
    ],
    tags: ['default'],
  },
  'Book-a2q5': {
    Quest: {
      use_flag: ['a2q5minusUsedRewardBook'],
      grant_flag: ['a2q5minusHaveRewardBook'],
      remove_flag: ['a2q5minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveRespecBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveRespecBook',
      'Book-a2q5',
    ],
    tags: ['default'],
  },
  'Book-a3q11v0': {
    Quest: {
      use_flag: ['a3q11minusUsedRewardBook'],
      grant_flag: ['a3q11minusHaveRewardBook'],
      remove_flag: ['a3q11minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a3q11v0',
    ],
    tags: ['default'],
  },
  'Book-a3q11v1': {
    Quest: {
      use_flag: ['a3q11minusUsedRewardBook'],
      grant_flag: ['a3q11minusHaveRewardBook'],
      remove_flag: ['a3q11minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillAnd2RespecsBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillAnd2RespecsBook',
      'Book-a3q11v1',
    ],
    tags: ['default'],
  },
  'Book-a3q11v2': {
    Quest: {
      use_flag: ['a3q11minusUsedRewardBook'],
      grant_flag: ['a3q11minusHaveRewardBook'],
      remove_flag: ['a3q11minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillAnd2RespecsBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillAnd2RespecsBook',
      'Book-a3q11v2',
    ],
    tags: ['default'],
  },
  'Book-a3q9': {
    Quest: {
      use_flag: ['a3q9minusUsedRewardBook'],
      grant_flag: ['a3q9minusHaveRewardBook'],
      remove_flag: ['a3q9minusUsedRewardBook'],
    },
    extends: 'AbstractPassiveSkillBook',
    inheritance: [
      'Item',
      'AbstractQuestItem',
      'AbstractPassiveSkillBook',
      'Book-a3q9',
    ],
    tags: ['default'],
  },
  DelevelBook: {
    Base: {
      description_text: ['ItemDescriptionBookDelevel'],
    },
    Quest: {
      can_sell: ['true'],
    },
    Usable: {
      action: ['delevel_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunctionDelevel'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'DelevelBook'],
    tags: ['default'],
  },
  Descent2_1: {
    Base: {
      description_text: ['ItemDescriptionBook2PassivePoints'],
    },
    Quest: {
      use_flag: ['Descent2Reward1'],
      remove_flag: ['Descent2Reward1'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunction2PassivePoints'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'Descent2_1'],
    tags: ['default'],
  },
  Descent2_2: {
    Base: {
      description_text: ['ItemDescriptionBook2PassivePoints'],
    },
    Quest: {
      use_flag: ['Descent2Reward2'],
      remove_flag: ['Descent2Reward2'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunction2PassivePoints'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'Descent2_2'],
    tags: ['default'],
  },
  Descent2_3: {
    Base: {
      description_text: ['ItemDescriptionBook2PassivePoints'],
    },
    Quest: {
      use_flag: ['Descent2Reward3'],
      remove_flag: ['Descent2Reward3'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunction2PassivePoints'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'Descent2_3'],
    tags: ['default'],
  },
  Descent2_4: {
    Base: {
      description_text: ['ItemDescriptionBook2PassivePoints'],
    },
    Quest: {
      use_flag: ['Descent2Reward4'],
      remove_flag: ['Descent2Reward4'],
    },
    Usable: {
      action: ['skill_book'],
      use_type: ['Usable'],
    },
    Stack: {
      function_text: ['ItemFunction2PassivePoints'],
    },
    extends: 'AbstractQuestItem',
    inheritance: ['Item', 'AbstractQuestItem', 'Descent2_4'],
    tags: ['default'],
  },
  SpikeSealKey: {
    Quest: {
      grant_flag: ['a2q11minusHaveKey'],
      remove_flag: ['a1q9minusRoadOpened'],
      extra_flag: ['a2q11minusSeenKey'],
      extra_flag2: ['a1q9minusRoadBlocked'],
    },
    extends: 'Item',
    inheritance: ['Item', 'SpikeSealKey'],
    tags: ['default'],
  },
  SulphiteFlask: {
    Quest: {
      grant_flag: ['a3q5minusHaveSulphite'],
      remove_flag: ['a3q5minusDeliveredSulphite'],
      extra_flag: ['SeenSulphite'],
    },
    extends: 'Item',
    inheritance: ['Item', 'SulphiteFlask'],
    tags: ['default'],
  },
  TolmanBracelet: {
    Quest: {
      grant_flag: ['a3q2minusHaveTolmanItem'],
      remove_flag: ['a3q2minusDeliveredItem'],
      extra_flag: ['a3q2minusSeenTolmanItem'],
    },
    extends: 'Item',
    inheritance: ['Item', 'TolmanBracelet'],
    tags: ['default'],
  },
  TowerKey: {
    Quest: {
      grant_flag: ['a3q9minusHaveTowerKey'],
      remove_flag: ['a3q9minusUsedTowerKey'],
      extra_flag: ['SeenTowerKey'],
    },
    extends: 'Item',
    inheritance: ['Item', 'TowerKey'],
    tags: ['default'],
  },
  AbstractQuiver: {
    Base: {
      tag: ['quiver'],
      x_size: ['2'],
      y_size: ['3'],
    },
    LocalStats: {},
    Mods: {
      inventory_type: ['Offhand'],
    },
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractQuiver'],
    tags: ['default', 'quiver'],
  },
  AbstractRelic: {
    Base: {
      tag: ['relic'],
    },
    LocalStats: {},
    Mods: {},
    Usable: {},
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractRelic'],
    tags: ['default', 'relic'],
  },
  AbstractLargeRelic: {
    Base: {
      x_size: ['2'],
      y_size: ['2'],
    },
    LocalStats: {},
    Mods: {
      inventory_type: ['altar_large'],
    },
    Usable: {},
    extends: 'AbstractRelic',
    inheritance: ['Item', 'Equipment', 'AbstractRelic', 'AbstractLargeRelic'],
    tags: ['default', 'relic'],
  },
  AbstractMediumRelic: {
    Base: {
      x_size: ['1'],
      y_size: ['2'],
    },
    LocalStats: {},
    Mods: {
      inventory_type: ['altar_medium'],
    },
    Usable: {},
    extends: 'AbstractRelic',
    inheritance: ['Item', 'Equipment', 'AbstractRelic', 'AbstractMediumRelic'],
    tags: ['default', 'relic'],
  },
  AbstractSmallRelic: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
    },
    LocalStats: {},
    Mods: {
      inventory_type: ['altar_small'],
    },
    Usable: {},
    extends: 'AbstractRelic',
    inheritance: ['Item', 'Equipment', 'AbstractRelic', 'AbstractSmallRelic'],
    tags: ['default', 'relic'],
  },
  AbstractRing: {
    Base: {
      x_size: ['1'],
      y_size: ['1'],
      tag: ['ring'],
    },
    Mods: {
      inventory_type: ['Ring'],
    },
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractRing'],
    tags: ['default', 'ring'],
  },
  AbstractSocketableRing: {
    AttributeRequirements: {
      strength_requirement: ['0'],
      dexterity_requirement: ['0'],
      intelligence_requirement: ['0'],
    },
    Sockets: {
      socket_info: [
        '0:1:1 1:9999:100 2:9999:90 3:9999:80 4:9999:30 5:9999:20 6:9999:5',
      ],
    },
    extends: 'AbstractRing',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractRing',
      'AbstractSocketableRing',
    ],
    tags: ['default', 'ring'],
  },
  Ring15: {
    extends: 'AbstractSocketableRing',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractRing',
      'AbstractSocketableRing',
      'Ring15',
    ],
    tags: ['default', 'ring'],
  },
  AbstractUniqueFragment: {
    Base: {
      description_text: ['ItemDescriptionUniqueFragment'],
    },
    LocalStats: {},
    Mods: {
      stat_description_list: [
        'Metadata/StatDescriptions/stat_descriptions.txt',
      ],
      enable_rarity: ['"unique"\t'],
      inventory_type: ['maininventory'],
    },
    extends: 'Item',
    inheritance: ['Item', 'AbstractUniqueFragment'],
    tags: ['default'],
  },
  AbstractWeapon: {
    AttributeRequirements: {
      strength_requirement: ['100'],
      dexterity_requirement: ['0'],
      intelligence_requirement: ['0'],
    },
    Mods: {
      inventory_type: ['"Weapon"\t'],
    },
    Weapon: {
      minimum_attack_distance: ['0'],
      maximum_attack_distance: ['3'],
      minimum_damage: ['5'],
      maximum_damage: ['10'],
      weapon_speed: ['833'],
      critical_chance: ['500'],
      accuracy_rating: ['20'],
    },
    Quality: {
      max_quality: ['20'],
    },
    Base: {
      tag: ['weapon'],
    },
    Sockets: {
      socket_info: ['1:1:50 2:1:120 3:2:100 4:9999:30 5:9999:20 6:9999:5'],
    },
    extends: 'Equipment',
    inheritance: ['Item', 'Equipment', 'AbstractWeapon'],
    tags: ['default', 'weapon'],
  },
  AbstractOneHandWeapon: {
    Base: {
      tag: ['onehand'],
    },
    extends: 'AbstractWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
    ],
    tags: ['default', 'weapon', 'onehand'],
  },
  AbstractClaw: {
    Base: {
      tag: ['claw', 'one_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['Claw'],
    },
    extends: 'AbstractOneHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractClaw',
    ],
    tags: ['default', 'weapon', 'onehand', 'claw', 'one_hand_weapon'],
  },
  AbstractDagger: {
    Base: {
      tag: ['dagger', 'one_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['Dagger'],
    },
    extends: 'AbstractOneHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractDagger',
    ],
    tags: ['default', 'weapon', 'onehand', 'dagger', 'one_hand_weapon'],
  },
  AbstractOneHandAxe: {
    Base: {
      tag: ['axe', 'one_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['OneHandAxe'],
    },
    extends: 'AbstractOneHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractOneHandAxe',
    ],
    tags: ['default', 'weapon', 'onehand', 'axe', 'one_hand_weapon'],
  },
  AbstractOneHandMace: {
    Base: {
      tag: ['mace', 'one_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['OneHandMace'],
    },
    extends: 'AbstractOneHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractOneHandMace',
    ],
    tags: ['default', 'weapon', 'onehand', 'mace', 'one_hand_weapon'],
  },
  AbstractSceptre: {
    Base: {
      tag: ['sceptre', 'one_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['Sceptre'],
    },
    extends: 'AbstractOneHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractSceptre',
    ],
    tags: ['default', 'weapon', 'onehand', 'sceptre', 'one_hand_weapon'],
  },
  AbstractOneHandSword: {
    Base: {
      tag: ['sword', 'one_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['OneHandSword'],
    },
    extends: 'AbstractOneHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractOneHandSword',
    ],
    tags: ['default', 'weapon', 'onehand', 'sword', 'one_hand_weapon'],
  },
  AbstractOneHandSwordThrusting: {
    Base: {},
    Weapon: {
      weapon_class: ['OneHandSwordThrusting'],
    },
    extends: 'AbstractOneHandSword',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractOneHandSword',
      'AbstractOneHandSwordThrusting',
    ],
    tags: ['default', 'weapon', 'onehand', 'sword', 'one_hand_weapon'],
  },
  AbstractWand: {
    Base: {
      tag: ['wand', 'ranged', 'one_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['Wand'],
    },
    extends: 'AbstractOneHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractOneHandWeapon',
      'AbstractWand',
    ],
    tags: ['default', 'weapon', 'onehand', 'wand', 'ranged', 'one_hand_weapon'],
  },
  AbstractTwoHandWeapon: {
    Base: {
      tag: ['twohand'],
    },
    Sockets: {
      socket_info: ['1:1:50 2:1:120 3:2:100 4:25:30 5:35:5 6:50:1'],
    },
    extends: 'AbstractWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
    ],
    tags: ['default', 'weapon', 'twohand'],
  },
  AbstractBow: {
    Base: {
      tag: ['bow', 'ranged', 'two_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['Bow'],
    },
    extends: 'AbstractTwoHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractBow',
    ],
    tags: ['default', 'weapon', 'twohand', 'bow', 'ranged', 'two_hand_weapon'],
  },
  AbstractFishingRod: {
    Base: {
      remove_tag: ['weapon'],
      tag: ['fishing_rod'],
    },
    Weapon: {
      weapon_class: ['FishingRod'],
    },
    Sockets: {
      socket_info: ['1:1:50 2:1:120 3:2:100 4:25:30 5:9999:20 6:9999:5'],
    },
    extends: 'AbstractTwoHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractFishingRod',
    ],
    tags: ['default', 'twohand', 'fishing_rod'],
  },
  AbstractStaff: {
    Base: {
      tag: ['staff', 'two_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['Staff'],
    },
    extends: 'AbstractTwoHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractStaff',
    ],
    tags: ['default', 'weapon', 'twohand', 'staff', 'two_hand_weapon'],
  },
  Staff1: {
    Sockets: {
      socket_info: ['1:1:50 2:1:120 3:2:100 4:9999:30 5:9999:20 6:9999:5'],
    },
    extends: 'AbstractStaff',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractStaff',
      'Staff1',
    ],
    tags: ['default', 'weapon', 'twohand', 'staff', 'two_hand_weapon'],
  },
  AbstractTwoHandAxe: {
    Base: {
      tag: ['axe', 'two_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['TwoHandAxe'],
    },
    extends: 'AbstractTwoHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractTwoHandAxe',
    ],
    tags: ['default', 'weapon', 'twohand', 'axe', 'two_hand_weapon'],
  },
  AbstractTwoHandMace: {
    Base: {
      tag: ['mace', 'two_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['TwoHandMace'],
    },
    extends: 'AbstractTwoHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractTwoHandMace',
    ],
    tags: ['default', 'weapon', 'twohand', 'mace', 'two_hand_weapon'],
  },
  AbstractTwoHandSword: {
    Base: {
      tag: ['sword', 'two_hand_weapon'],
    },
    Weapon: {
      weapon_class: ['TwoHandSword'],
    },
    extends: 'AbstractTwoHandWeapon',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractTwoHandSword',
    ],
    tags: ['default', 'weapon', 'twohand', 'sword', 'two_hand_weapon'],
  },
  TwoHandSword1: {
    Sockets: {
      socket_info: ['1:1:50 2:1:120 3:2:100 4:9999:30 5:9999:20 6:9999:5'],
    },
    extends: 'AbstractTwoHandSword',
    inheritance: [
      'Item',
      'Equipment',
      'AbstractWeapon',
      'AbstractTwoHandWeapon',
      'AbstractTwoHandSword',
      'TwoHandSword1',
    ],
    tags: ['default', 'weapon', 'twohand', 'sword', 'two_hand_weapon'],
  },
} as MetaDataMap;

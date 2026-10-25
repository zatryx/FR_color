class Color{
    constructor(index, name){
        this.index = index
        this.name = name
        //this.id = id
    }
}

class Dragon{
    constructor(color1, color2, color3){
        this.color1 = color1
        this.color2 = color2
        this.color3 = color3 
    }
}

export class ColorManager{  

    static color_list = [
        new Color(1, 'maize'),
        new Color(2, 'cream'),
        new Color(3, 'antique'),
        new Color(4, 'white'),
        new Color(5, 'moon'),
        new Color(6, 'ice'),
        new Color(7, 'orca'),
        new Color(8, 'platinum'),
        new Color(9, 'silver'),
        new Color(10, 'dust'),
        new Color(11, 'grey'),
        new Color(12, 'smoke'),
        new Color(13, 'gloom'),
        new Color(14, 'lead'),
        new Color(15, 'shale'),
        new Color(16, 'flint'),
        new Color(17, 'charcoal'),
        new Color(18, 'coal'),
        new Color(19, 'oilslick'),
        new Color(20, 'black'),
        new Color(21, 'obsidian'),
        new Color(22, 'eldritch'),
        new Color(23, 'midnight'),
        new Color(24, 'shadow'),
        new Color(25, 'blackberry'),
        new Color(26, 'mulberry'),
        new Color(27, 'plum'),
        new Color(28, 'wisteria'),
        new Color(29, 'thistle'),
        new Color(30, 'fog'),
        new Color(31, 'mist'),
        new Color(32, 'lavender'),
        new Color(33, 'heather'),
        new Color(34, 'purple'),
        new Color(35, 'orchid'),
        new Color(36, 'amethyst'),
        new Color(37, 'nightshade'),
        new Color(38, 'violet'),
        new Color(39, 'grape'),
        new Color(40, 'royal'),
        new Color(41, 'eggplant'),
        new Color(42, 'iris'),
        new Color(43, 'storm'),
        new Color(44, 'twilight'),
        new Color(45, 'indigo'),
        new Color(46, 'sapphire'),
        new Color(47, 'navy'),
        new Color(48, 'cobalt'),
        new Color(49, 'ultramarine'),
        new Color(50, 'blue'),
        new Color(51, 'periwinkle'),
        new Color(52, 'lapis'),
        new Color(53, 'splash'),
        new Color(54, 'cornflower'),
        new Color(55, 'sky'),
        new Color(56, 'stonewash'),
        new Color(57, 'overcast'),
        new Color(58, 'steel'),
        new Color(59, 'denim'),
        new Color(60, 'abyss'),
        new Color(61, 'phthalo'),
        new Color(62, 'azure'),
        new Color(63, 'caribbean'),
        new Color(64, 'teal'),
        new Color(65, 'cerulean'),
        new Color(66, 'cyan'),
        new Color(67, 'robin'),
        new Color(68, 'aqua'),
        new Color(69, 'turquoise'),
        new Color(70, 'spruce'),
        new Color(71, 'pistachio'),
        new Color(72, 'seafoam'),
        new Color(73, 'mint'),
        new Color(74, 'jade'),
        new Color(75, 'spearmint'),
        new Color(76, 'thicket'),
        new Color(77, 'peacock'),
        new Color(78, 'emerald'),
        new Color(79, 'shamrock'),
        new Color(80, 'jungle'),
        new Color(81, 'hunter'),
        new Color(82, 'forest'),
        new Color(83, 'camo'),
        new Color(84, 'algae'),
        new Color(85, 'swamp'),
        new Color(86, 'avocado'),
        new Color(87, 'green'),
        new Color(88, 'fern'),
        new Color(89, 'mantis'),
        new Color(90, 'pear'),
        new Color(91, 'leaf'),
        new Color(92, 'radioactive'),
        new Color(93, 'honeydew'),
        new Color(94, 'peridot'),
        new Color(95, 'chartreuse'),
        new Color(96, 'spring'),
        new Color(97, 'crocodile'),
        new Color(98, 'olive'),
        new Color(99, 'murk'),
        new Color(100, 'moss'),
        new Color(101, 'goldenrod'),
        new Color(102, 'amber'),
        new Color(103, 'honey'),
        new Color(104, 'lemon'),
        new Color(105, 'yellow'),
        new Color(106, 'grapefruit'),
        new Color(107, 'banana'),
        new Color(108, 'sanddollar'),
        new Color(109, 'flaxen'),
        new Color(110, 'ivory'),
        new Color(111, 'buttercup'),
        new Color(112, 'gold'),
        new Color(113, 'metals'),
        new Color(114, 'marigold'),
        new Color(115, 'sunshine'),
        new Color(116, 'saffron'),
        new Color(117, 'sunset'),
        new Color(118, 'peach'),
        new Color(119, 'cantaloupe'),
        new Color(120, 'orange'),
        new Color(121, 'bronze'),
        new Color(122, 'terracotta'),
        new Color(123, 'carrot'),
        new Color(124, 'fire'),
        new Color(125, 'pumpkin'),
        new Color(126, 'tangerine'),
        new Color(127, 'cinnamon'),
        new Color(128, 'caramel'),
        new Color(129, 'sand'),
        new Color(130, 'tan'),
        new Color(131, 'beige'),
        new Color(132, 'stone'),
        new Color(133, 'taupe'),
        new Color(134, 'slate'),
        new Color(135, 'driftwood'),
        new Color(136, 'latte'),
        new Color(137, 'dirt'),
        new Color(138, 'clay'),
        new Color(139, 'sable'),
        new Color(140, 'umber'),
        new Color(141, 'soil'),
        new Color(142, 'hickory'),
        new Color(143, 'tarnish'),
        new Color(144, 'ginger'),
        new Color(145, 'brown'),
        new Color(146, 'chocolate'),
        new Color(147, 'auburn'),
        new Color(148, 'copper'),
        new Color(149, 'rust'),
        new Color(150, 'tomato'),
        new Color(151, 'vermilion'),
        new Color(152, 'ruby'),
        new Color(153, 'cherry'),
        new Color(154, 'crimson'),
        new Color(155, 'garnet'),
        new Color(156, 'sanguine'),
        new Color(157, 'blood'),
        new Color(158, 'maroon'),
        new Color(159, 'berry'),
        new Color(160, 'red'),
        new Color(161, 'strawberry'),
        new Color(162, 'cerise'),
        new Color(163, 'carmine'),
        new Color(164, 'brick'),
        new Color(165, 'coral'),
        new Color(166, 'blush'),
        new Color(167, 'cottoncandy'),
        new Color(168, 'watermelon'),
        new Color(169, 'magenta'),
        new Color(170, 'fuchsia'),
        new Color(171, 'raspberry'),
        new Color(172, 'wine'),
        new Color(173, 'mauve'),
        new Color(174, 'pink'),
        new Color(175, 'bubblegum'),
        new Color(176, 'rose'),
        new Color(177, 'pearl')
    ];
    static final_index = this.color_list.length + 1; 

    static get_color_name(index){
        for (const color of this.color_list)
        {
            if (index == color.index) { return color.name }
        }
    }

    static get_color_index(name){
        for (const color of this.color_list)
        {
            if (name.toLowerCase() == color.name) { return color.index }
        }
    }

    get_inrange_colors(color1_index, color2_index){
        color_range = []

    }

    static calculate_offspring_colors(parent1, parent2){
        range1 = parent1
    }
        
}


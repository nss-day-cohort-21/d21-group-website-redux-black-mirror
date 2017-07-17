const pajamas = [
    {
        model: "DTZ27310SA",
        description: "This fun two-piece women's knit pajama set from Secret Treasures is perfect for lounging around the house on lazy Sundays or relaxing on the sofa for movie nights. Made of a soft cotton blend, this sleepwear set has stylish details and a relaxed fit to make it trendy, durable and functional. The casual top has colorful contrast stitching and short sleeves with a tag-free inner for added comfort. The pants are capri length with a covered elastic waistband. This PJ set is available in assorted colors, designs and plus sizes to fit the style and comfort of every woman.",
        img_ulr: "../images/w-adult-pikachu.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "a",
        gender: "w"
    },
    {
        name: "DTZ97410FA",
        description: "Enjoy a comfortable night's sleep with this women's two-piece sleepwear set from Secret Treasures. Both a tank and a pair of capris are included in the set, and both are made of soft and stretchy fabric that's cool to the touch to help you stay breezy on hot summer nights. The tank has a set of double spaghetti straps and a racerback with a keyhole for added breathability, while the capris have a hassle-free covered elastic waistband for a customized fit. This sleepwear set is available in both regular and plus sizes.",
        img_ulr: "../images/w-adult-racoon.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "a",
        gender: "w"
    },
    {
        name: "DTZ72311FT",
        description: "You'll have sweet dreams when you hit the hay in this Sun, Moon & Stars Women's Rayon Short-Sleeve Sleep Top and Short 2-Piece Sleepwear Set. Made of a super-soft rayon blend, the top of this pajama set has short sleeves and a sexy V-neckline with delicate lace trim and a satin bow attached in the middle. The easy pull-on shorts have a relaxed fit and covered elastic waistband for added comfort. The waist features embroidered trim for a feminine touch that complements the lace trim on the side slits. This soft and comfy sleep gown is available in assorted printed patterns.",
        img_ulr: "../images/w-adult-tie-dye.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "a",
        gender: "w"
    },
    {
        name: "FZ486GLLWM",
        description: "Like a snowflake, I'm one of a kind. Your little one will love this Frozen pajama set. The long sleeve tee, made of 100% polyester, has a large screen print graphic of Elsa with different size and color snowflakes. The fleece pants included in the set are constructed with a soft 100% micro fleece fabric that is sure to keep her warm and cozy as she prepares for bed, also with small graphics of purple and blue snowflakes. Available in sizes 6/6X - 10/12.",
        img_ulr: "../images/w-children-astro.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "ch",
        gender: "w"
    },
    {
        name: "MB008GBSWM",
        description: "Fall and winter are the perfect seasons to bundle up in this type of full-body sleeper. The soft, micro fleece construction is not only flame resistant, but also great for sleeping and lounging. Featuring her favorite characters from Monster High, this soft micro fleece sleeper will ensure she stays warm and comfy, while she shows off the bright colors and fun prints. Pair with a tank top or tee underneath for additional warmth. Available in assorted colors for more fun looks.",
        img_ulr: "../images/w-children-astro.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "ch",
        gender: "w"
    },
    {
        name: "HK223GBSWM",
        description: "Make bedtime more fun with this versatile Girls' Blanket Sleeper. These pajamas feature soft polyester fabric, offer stress-free care and are available in an assortment of colorful charming prints. The full front zipper includes a large easy-to-use pull, which allows your little one to dress herself. This character hooded sleeper includes long sleeves and long pants with banded cuffs that help them stay comfortably in place.",
        img_ulr: "../images/w-children-astro.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "ch",
        gender: "w"
    },
    {
        name: "YP563GBSGS",
        description: "These Hanes Big Men's 2 Pack Knit Shorts deliver comfortable all-day wear with a contrast color styling option. Each pair is created using soft knit cotton and enhanced with a Comfort Flex waistband that provides a flexible fit. These Hanes knit shorts also include two deep pockets for securely storing your phone, wallet and other accessories.",
        img_ulr: "../images/m-adult-chewbacca.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "a",
        gender: "m"
    },
    {
        name: "5032426FL",
        description: "Men's fancy cotton/polyester short sleeve short leg woven poplin pajama sets. Your are sure to sleep well in these comfortable fancy cotton/polyester woven poplin pajama sets. Cool short sleeve full button front shirt with piping trim. Elastic waist short with button front closure. Functional button fly.",
        img_ulr: "../images/m-adult-clover.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "a",
        gender: "m"
    },
    {
        name: "FG38426FL",
        description: "Hanes Men's Short Sleeve Short Leg Pajama Set. This classic short sleeve short leg pajama set from Hanes is great all year round. The cotton polyester blend is easy to care for. Machine wash in cold with like colors and tumble dry. This set has a fuller cut for easy movement. Available in Blue.",
        img_ulr: "../images/m-adult-redbag.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "a",
        gender: "m"
    },
    {
        name: "WN298BBSWM",
        description: "Your little one will love the colorful graphics and cozy comfort of this boys' blanket sleeper based on the children's animated television series Paw Patrol. This pajama suit is lined with pillowy-soft micro fleece to keep him comfortable all night long and features a large graphic on the front with several canine characters from Paw Patrol. The zip front closure makes it easy to hop in and out of the suit, while the cuffs and scoop neckline and ribbed for a proper fit. These officially licensed Paw Patrol pajamas are great for sleeping and lounging around the house.",
        img_ulr: "../images/m-children-camo.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "ch",
        gender: "m"
    },
    {
        name: "KSGO5A",
        description: "Your little one will absolutely love zipping into this girls' one-piece pajama suit from Gyrl Co. Made of soft and durable polyester with pillowy plush fabric both inside and out, this union suit will keep her cozy all night long. The zip front closure makes it easy to hop in and out of the suit, while there's a super-cute and colorful pattern printed all over. The sleeve and leg cuffs have elastic to stay in place and retain heat. These hooded pajamas are available in assorted styles and are great for sleepovers, slumber parties and lounging around the house.",
        img_ulr: "../images/m-children-monkeys.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "ch",
        gender: "m"
    },
    {
        name: "HK288GBSWM",
        description: "Your little one will adore the colorful details and cozy comfort of this girls' hooded sleeper based on the iconic cat Hello Kitty. Made of pillowy-soft micro fleece, this union suit has a Hello Kitty pattern printed all over, as well as a hood with a set of 3D fabric ears and a bow for maximum cuteness. The zip front closure makes it easy to hop in and out of the suit, while the sleeve and leg cuffs are ribbed to stay in place and retain heat. This officially licensed Hello Kitty sleeper is great for catching some Z's and lounging around the house.",
        img_ulr: "../images/m-children-ninjaturtle.jpg",
        colors: ["blue", "yellow", "brown"],
        category: "ch",
        gender: "m"
    }
]

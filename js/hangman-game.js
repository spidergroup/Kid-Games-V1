// hangman-game.js - Word list and categories for the Hangman game

const hangmanData = {      wordList: [
        // Common Objects
        "BOOK", "BALL", "CAKE", "DOOR", "DESK", "LAMP", "BIKE", "GAME",
        // Nature
        "TREE", "LEAF", "STAR", "MOON", "RAIN", "WIND", "SNOW", "SAND", "ROCK", "BIRD",
        // Colors
        "RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "PURPLE", "BLACK", "WHITE", 
        "GRAY", "BROWN", "PINK", "GOLD", "SILVER", "CYAN", "INDIGO", "VIOLET", 
        "MAROON", "TEAL", "AQUA", "NAVY", "OLIVE", "CORAL", "PEACH", "LAVENDER", 
        "TURQUOISE", "MAGENTA", "MINT", "LIME", "PLUM", "CRIMSON",
        // Time
        "TIME", "HOUR", "WEEK", "YEAR", "DAY",
        // Food & Drinks
        "FOOD", "MILK", "MEAT", "BREAD", "SOUP", "FISH", "RICE", "EGG", "CAKE", "PIE",
        "PIZZA", "CHOCOLATE", "DONUT", "SANDWICH", "SPAGHETTI", "TACO", 
        "POPCORN", "CUPCAKE", "SMOOTHIE",
        // Body parts
        "HEAD", "HAND", "FOOT", "FACE", "NOSE", "EAR", "HAIR", "EYE", "ARM", "LEG",
        // Feelings
        "HAPPY", "LOVE",
        // Family & People
        "MOM", "DAD", "AUNT", "KID", "BABY",
        // Places
        "HOME", "PARK", "SHOP", "ROOM", "YARD", "SYDNEY", "LONDON", "VENICE", "PARIS", 
        "TOKYO", "ROME", "BERLIN", "MADRID", "ATHENS", "CAIRO", "DUBAI", "SEOUL", 
        "MUMBAI", "MOSCOW", "PRAGUE", "VIENNA", "BANGKOK", "MIAMI", "BOSTON", "HAWAII", 
        "LISBON", "MONACO", "SINGAPORE", "DELHI", "SHANGHAI", "CHICAGO", "TORONTO", 
        "VEGAS", "DUBLIN", "MILAN", "ANGKOR",
        // Animals
        "ELEPHANT", "KANGAROO", "GIRAFFE", "PENGUIN", "DOLPHIN", "TIGER", "ZEBRA", 
        "OCTOPUS", "CHAMELEON", "ALLIGATOR", "DOG", "CAT", "HORSE", "LION", "HUMAN", 
        "MONKEY", "WHALE", "BAT", "BEAR", "DEER", "RABBIT", "CATTLE", "SHEEP", "GOAT", 
        "PIG", "KOALA", "RHINOCEROS", "HIPPOPOTAMUS", "CAMEL", "SLOTH", "OTTER", 
        "MEERKAT", "HAMSTER", "MOUSE", "RAT", "FOX", "WOLF", "DUCK", "SWAN", "CROW", 
        "HAWK", "OWL", "FROG", "TOAD", "SEAL", "PANDA", "LLAMA", "SNAKE", "EAGLE", 
        "SHARK", "TROUT", "CRAB", "SNAIL", "MOOSE", "BISON", "SKUNK", "MOLE", "TURTLE", 
        "PARROT", "IGUANA", "GORILLA", "JAGUAR", "LEOPARD", "GAZELLE", "OSTRICH", 
        "PEACOCK", "FLAMINGO",
        // Fruits
        "DATE", "KIWI", "LIME", "PLUM", "YUZU", "FIG", "GRAPE", "MANGO", "PEACH",
        "GUAVA", "OLIVE", "ORANGE", "BANANA", "LYCHEE", "PAPAYA", "LONGAN", "LOQUAT", 
        "SAPOTE", "DURIAN", "POMELO", "LEMON", "PINEAPPLE", "WATERMELON", "STRAWBERRY", 
        "BLUEBERRY", "GRAPEFRUIT", "TANGERINE", "CLEMENTINE", "MANDARINE", "RASPBERRY", 
        "BLACKBERRY", "CRANBERRY", "GOOSEBERRY", "BOYSENBERRY", "MULBERRY", "ELDERBERRY",
        "HUCKLEBERRY", "APRICOT", "NECTARINE", "AVOCADO", "CANTALOUPE", "HONEYDEW", 
        "GALIA", "STARFRUIT", "RAMBUTAN", "JACKFRUIT", "PERSIMMON", "POMEGRANATE", 
        "TAMARIND", "SOURSOP", "MANGOSTEEN", "CANARY MELON", "WINTER MELON",
        // Countries
        "CANADA", "MEXICO", "CUBA", "HAITI", "JAMAICA", "PANAMA", "HONDURAS", "NICARAGUA",
        "GUATEMALA", "BELIZE", "BAHAMAS", "BRAZIL", "ARGENTINA", "CHILE", "PERU", 
        "COLOMBIA", "VENEZUELA", "ECUADOR", "BOLIVIA", "PARAGUAY", "URUGUAY", "GUYANA", 
        "SURINAME", "FRANCE", "SPAIN", "ITALY", "GERMANY", "BRITAIN", "PORTUGAL", 
        "IRELAND", "AUSTRIA", "BELGIUM", "DENMARK", "FINLAND", "GREECE", "HUNGARY", 
        "ICELAND", "NORWAY", "POLAND", "ROMANIA", "RUSSIA", "SWEDEN", "SWITZERLAND", 
        "UKRAINE", "CROATIA", "SERBIA", "SLOVAKIA", "SLOVENIA", "ALBANIA", "BULGARIA", 
        "ESTONIA", "LATVIA", "LITHUANIA", "MOLDOVA", "MONACO", "MALTA", "LUXEMBOURG", 
        "NETHERLANDS", "CHINA", "JAPAN", "INDIA", "KOREA", "VIETNAM", "THAILAND", 
        "MALAYSIA", "INDONESIA", "SINGAPORE", "PAKISTAN", "NEPAL", "MYANMAR", "CAMBODIA", 
        "MONGOLIA", "TAIWAN", "LAOS", "CYPRUS", "TURKEY", "ISRAEL", "JORDAN", "LEBANON", 
        "SYRIA", "IRAQ", "IRAN", "QATAR", "KUWAIT", "YEMEN", "OMAN", "BAHRAIN", "EGYPT", 
        "MOROCCO", "ALGERIA", "TUNISIA", "LIBYA", "SUDAN", "ETHIOPIA", "KENYA", "UGANDA", 
        "TANZANIA", "ANGOLA", "NIGERIA", "GHANA", "MALI", "SENEGAL", "SOMALIA", "RWANDA", 
        "CHAD", "NIGER", "NAMIBIA", "ZAMBIA", "ZIMBABWE", "BOTSWANA", "MOZAMBIQUE", 
        "MADAGASCAR", "MALAWI", "CONGO", "AUSTRALIA", "FIJI", "SAMOA", "TONGA", 
        "VANUATU", "PALAU",
        // Movies
        "TITANIC", "AVATAR", "BATMAN", "INCEPTION", "MATRIX", "JOKER", "FROZEN", 
        "MINIONS", "SHREK", "GLADIATOR", "AVENGERS", "BARBIE", "AQUAMAN", 
        "TRANSFORMERS", "SKYFALL", "ALADDIN",
        // Fantasy
        "DRAGON", "UNICORN", "WIZARD", "GOBLIN", "MERMAID", "PHOENIX", "ELF", 
        "VAMPIRE", "OGRE", "WITCH",
        // Nature
        "RAINBOW", "THUNDER", "LIGHTNING", "HURRICANE", "BLIZZARD", "SUNSET", 
        "FOREST", "MOUNTAIN", "OCEAN", "BREEZE",
        // Common Professions and Objects
        "DOCTOR", "TEACHER", "ENGINEER", "PILOT", "CHEF", "ARTIST", "PLUMBER",
        "ARCHITECT", "FARMER", "NURSE", "APPLE", "HOUSE", "CHAIR", "TRAIN",
        "TABLE", "WATER", "MUSIC", "HAPPY", "DANCE", "SMILE",
        // Everyday Medium Words
        "DOCTOR", "ARTIST", "FARMER", "PILOT", "MUSIC", "ACTION", "BATTLE", "CAMERA", 
        "DINNER", "ESCAPE", "FAMILY", "GARDEN", "HEALTH", "ISLAND", "JACKET", "LEADER", 
        "MARKET", "NATURE", "OFFICE", "PEOPLE", "REASON", "SCHOOL", "SUMMER", "TRAVEL", 
        "WINDOW",
        // Everyday Hard Words
        "EDUCATION", "ENGINEER", "BUSINESS", "COMPUTER", "HOSPITAL", "MOUNTAIN", 
        "PAINTING", "QUESTION", "SECURITY", "STANDARD", "SWIMMING", "TRAINING", 
        "VEGETABLE"
    ],      categories: {
        everyday: [
            // Easy (3-5 letters)
            // Common objects
            "BOOK", "BALL", "CAKE", "DOOR", "DESK", "LAMP", "BIKE", "GAME",
            // Nature
            "TREE", "LEAF", "STAR", "MOON", "RAIN", "WIND", "SNOW", "SAND", "ROCK", "BIRD",
            // Colors
            "BLUE", "RED", "PINK", "GOLD", "GRAY",
            // Time
            "TIME", "HOUR", "WEEK", "YEAR", "DAY",
            // Food & Drinks
            "FOOD", "MILK", "MEAT", "BREAD", "SOUP", "FISH", "RICE", "EGG", "CAKE", "PIE",
            // Body parts
            "HEAD", "HAND", "FOOT", "FACE", "NOSE", "EAR", "HAIR", "EYE", "ARM", "LEG",
            // Feelings
             "HAPPY", "LOVE",
            // Family & People
            "MOM", "DAD", "AUNT", "KID", "BABY",
            // Places
            "HOME", "PARK", "SHOP", "ROOM", "YARD",

            // Medium (6-7 letters)
            "DOCTOR", "ARTIST", "FARMER", "PILOT", "MUSIC", "ACTION", "BATTLE", "CAMERA", "DINNER", "ESCAPE",
            "FAMILY", "GARDEN", "HEALTH", "ISLAND", "JACKET", "LEADER", "MARKET", "NATURE", "OFFICE", "PEOPLE",
            "REASON", "SCHOOL", "SUMMER", "TRAVEL", "WINDOW",

            // Hard (8+ letters)
            "EDUCATION", "ENGINEER", "BUSINESS", "COMPUTER", "HOSPITAL", "MOUNTAIN", "PAINTING", "QUESTION", 
            "SECURITY", "STANDARD", "SWIMMING", "TRAINING", "VEGETABLE"
        ],
        animals: [
                 // Original animals
                 "ELEPHANT", "KANGAROO", "GIRAFFE", "PENGUIN", "DOLPHIN", "TIGER", "ZEBRA", 
                 "OCTOPUS", "CHAMELEON", "ALLIGATOR",
                 // Previously added animals
                 "DOG", "CAT", "HORSE", "LION", "HUMAN", "MONKEY", "WHALE", "BAT", "BEAR",
                 "DEER", "RABBIT", "CATTLE", "SHEEP", "GOAT", "PIG", "KOALA", "RHINOCEROS",
                 "HIPPOPOTAMUS", "CAMEL", "SLOTH", "OTTER", "MEERKAT", "HAMSTER", "MOUSE",
                 "RAT",
                 // New animals
                 "FOX", "WOLF", "DUCK", "SWAN", "CROW", "HAWK", "OWL", "FROG", "TOAD", 
                 "SEAL", "PANDA", "LLAMA", "SNAKE", "EAGLE", "SHARK", "TROUT", "CRAB",
                 "SNAIL", "MOOSE", "BISON", "SKUNK", "MOLE", "TURTLE", "PARROT", "IGUANA",
                 "GORILLA", "JAGUAR", "LEOPARD", "GAZELLE", "OSTRICH", "PEACOCK", "FLAMINGO"],
        food: ["PIZZA", "CHOCOLATE", "DONUT", "SANDWICH", "SPAGHETTI", "TACO", 
               "POPCORN", "CUPCAKE", "SMOOTHIE"],
        fruits: [
            // Easy fruits (3-5 letters)
            "DATE", "KIWI", "LIME", "PLUM", "YUZU", "FIG", "GRAPE", "MANGO", "PEACH",
            "GUAVA", "OLIVE",
            // Medium fruits (6-7 letters)
            "ORANGE", "BANANA", "LYCHEE", "PAPAYA", "LONGAN", "LOQUAT", "SAPOTE", "DURIAN",
            "POMELO", "LEMON",
            // Hard fruits (8+ letters)
            "PINEAPPLE", "WATERMELON", "STRAWBERRY", "BLUEBERRY", "GRAPEFRUIT",
            "TANGERINE", "CLEMENTINE", "MANDARINE", "RASPBERRY", "BLACKBERRY",
            "CRANBERRY", "GOOSEBERRY", "BOYSENBERRY", "MULBERRY", "ELDERBERRY",
            "HUCKLEBERRY", "APRICOT", "NECTARINE", "AVOCADO", "CANTALOUPE",
            "HONEYDEW", "GALIA", "STARFRUIT", "RAMBUTAN", "JACKFRUIT", "PERSIMMON",
            "POMEGRANATE", "TAMARIND", "SOURSOP", "MANGOSTEEN", "CANARY MELON",
            "WINTER MELON"
        ],
        countries: [
                   // North and Central America
                   "CANADA", "MEXICO", "CUBA", "HAITI", "JAMAICA", "PANAMA", "HONDURAS", "NICARAGUA", 
                   "GUATEMALA", "BELIZE", "BAHAMAS",
                   // South America
                   "BRAZIL", "ARGENTINA", "CHILE", "PERU", "COLOMBIA", "VENEZUELA", "ECUADOR", 
                   "BOLIVIA", "PARAGUAY", "URUGUAY", "GUYANA", "SURINAME",
                   // Europe
                   "FRANCE", "SPAIN", "ITALY", "GERMANY", "BRITAIN", "PORTUGAL", "IRELAND",
                   "AUSTRIA", "BELGIUM", "DENMARK", "FINLAND", "GREECE", "HUNGARY", "ICELAND",
                   "NORWAY", "POLAND", "ROMANIA", "RUSSIA", "SWEDEN", "SWITZERLAND", "UKRAINE",
                   "CROATIA", "SERBIA", "SLOVAKIA", "SLOVENIA", "ALBANIA", "BULGARIA", "ESTONIA",
                   "LATVIA", "LITHUANIA", "MOLDOVA", "MONACO", "MALTA", "LUXEMBOURG", "NETHERLANDS",
                   // Asia
                   "CHINA", "JAPAN", "INDIA", "KOREA", "VIETNAM", "THAILAND", "MALAYSIA", 
                   "INDONESIA", "SINGAPORE", "PAKISTAN", "NEPAL", "MYANMAR", "CAMBODIA", "MONGOLIA",
                   "TAIWAN", "LAOS", "CYPRUS", "TURKEY", "ISRAEL", "JORDAN", "LEBANON", "SYRIA",
                   "IRAQ", "IRAN", "QATAR", "KUWAIT", "YEMEN", "OMAN", "BAHRAIN",
                   // Africa
                   "EGYPT", "MOROCCO", "ALGERIA", "TUNISIA", "LIBYA", "SUDAN", "ETHIOPIA",
                   "KENYA", "UGANDA", "TANZANIA", "ANGOLA", "NIGERIA", "GHANA", "MALI",
                   "SENEGAL", "SOMALIA", "RWANDA", "CHAD", "NIGER", "NAMIBIA", "ZAMBIA",
                   "ZIMBABWE", "BOTSWANA", "MOZAMBIQUE", "MADAGASCAR", "MALAWI", "CONGO",
                   // Oceania
                   "AUSTRALIA", "FIJI", "SAMOA", "TONGA", "VANUATU", "PALAU"],
        places: ["SYDNEY", "LONDON", "VENICE", "PARIS", "TOKYO", "ROME", "BERLIN", "MADRID",
                "ATHENS", "CAIRO", "DUBAI", "SEOUL", "MUMBAI", "MOSCOW", "PRAGUE", "VIENNA",
                "BANGKOK", "MIAMI", "BOSTON", "HAWAII", "LISBON", "MONACO", "SINGAPORE", "DELHI",
                "SHANGHAI", "CHICAGO", "TORONTO", "VEGAS", "DUBLIN", "MILAN", "ANGKOR"],
        movies: ["TITANIC", "AVATAR", "BATMAN", "INCEPTION", "MATRIX", "JOKER", "FROZEN", 
                "MINIONS", "SHREK", "GLADIATOR", "AVENGERS", "BARBIE", "AQUAMAN", 
                "TRANSFORMERS", "SKYFALL", "ALADDIN"],        fantasy: ["DRAGON", "UNICORN", "WIZARD", "GOBLIN", "MERMAID", "PHOENIX", "ELF", 
                 "VAMPIRE", "OGRE", "WITCH"],        
        colors: ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "PURPLE", "BLACK", "WHITE", 
                "GRAY", "BROWN", "PINK", "GOLD", "SILVER", "CYAN", "INDIGO", "VIOLET", 
                "MAROON", "TEAL", "AQUA", "NAVY", "OLIVE", "CORAL", "PEACH", "LAVENDER", 
                "TURQUOISE", "MAGENTA", "MINT", "LIME", "PLUM", "CRIMSON"],
        nature: ["RAINBOW", "THUNDER", "LIGHTNING", "HURRICANE", "BLIZZARD", "SUNSET", 
                "FOREST", "MOUNTAIN", "OCEAN", "BREEZE"],
        common: ["DOCTOR", "TEACHER", "ENGINEER", "PILOT", "CHEF", "ARTIST", "PLUMBER",
                "ARCHITECT", "FARMER", "NURSE", "APPLE", "HOUSE", "CHAIR", "TRAIN",
                "TABLE", "WATER", "MUSIC", "HAPPY", "DANCE", "SMILE"]
    },    
    difficulty: {
        easy: [
            // Short country names (3-5 letters)
            "FIJI", "MALI", "CUBA", "CHAD", "CHILE", "CHINA", "INDIA", "IRAN", "IRAQ", 
            "ITALY", "JAPAN", "KENYA", "KOREA", "LAOS", "MALTA", "NEPAL", "OMAN", "PALAU", 
            "PERU", "QATAR", "SAMOA", "SPAIN", "SYRIA", "TONGA", "YEMEN",
            // Simple colors (3-5 letters)
            "RED", "BLUE", "BLACK", "WHITE", "GRAY", "BROWN", "PINK", "GOLD", "CYAN", 
            "TEAL", "AQUA", "NAVY", "MINT", "LIME", "PLUM",
            // Easy animals (3-5 letters)
            "DOG", "CAT", "LION", "BEAR", "DEER", "GOAT", "PIG", "RAT", "BAT", "MOUSE",
            // New easy animals (3-5 letters)
            "FOX", "WOLF", "DUCK", "SWAN", "CROW", "HAWK", "OWL", "FROG", "TOAD", "CRAB",
            "MOLE", "SEAL", "SNAKE",
            // Plus other easy words
            "APPLE", "HOUSE", "CHAIR", "TRAIN", "TABLE", "WATER", "TIGER", "ZEBRA", 
            "PIZZA", "TACO", "DONUT", "NURSE", "CHEF", "WITCH", "ELF", 
            "PARIS", "ROME",
            // Easy movies (3-5 letters)
            "JOKER", "SHREK",
            // Easy fruits (3-5 letters)
            "DATE", "KIWI", "LIME", "PLUM", "YUZU", "FIG", "GRAPE", "MANGO", "PEACH",
            "GUAVA", "OLIVE",

            // Easy everyday words (3-5 letters)
            "ACT", "AGE", "AIR", "ARM", "ART", "BAG", "BAR", "BED", "BET", "BID", "BIT", "BOX", "BOY", "BUG", "BUS",
            "CAB", "CAP", "CAR", "CAT", "CAN", "CRY", "CUP", "CUT", "DAD", "DAY", "DIG", "DOG", "DOT", "EAR", "EGG",
            "EYE", "FAN", "FAT", "FEE", "FEW", "FIT", "FLY", "HAT", "LEG", "LIP", "MAP", "MOM", "NOW", "PAY", "PEN",
            "RED", "RUN", "SAD", "SEA", "SKY", "SON", "SUN", "TAX", "TEA", "TOP", "TOY", "USE", "WAR", "WAY", "WHO",
            "WIN", "YES"
        ],
        medium: [
            // Medium length countries (6-7 letters)
            "AUSTRIA", "BAHRAIN", "BELGIUM", "BRITAIN", "CANADA", "DENMARK", "ESTONIA", 
            "FINLAND", "FRANCE", "GERMANY", "GREECE", "GUYANA", "ICELAND", "IRELAND", 
            "JORDAN", "KUWAIT", "LATVIA", "LEBANON", "MEXICO", "MYANMAR", 
            "NORWAY", "PANAMA", "POLAND", "RUSSIA", "SERBIA", "SWEDEN", "TAIWAN", 
            "TURKEY", "UGANDA",
            // Medium animals (6-7 letters)
            "RABBIT", "MONKEY", "CATTLE", "HUMAN", "CAMEL", "WHALE", "SHEEP", "KOALA",
            "OTTER", "MEERKAT", "HAMSTER",
            // New medium animals (6-7 letters)
            "TURTLE", "PARROT", "JAGUAR", "IGUANA", "GAZELL", "OSTRICH", "PEACOCK", 
            "BISON", "PANDA", "LLAMA", "EAGLE", "SHARK", "TROUT", "SNAIL", "MOOSE", 
            "SKUNK",
            // Medium colors (6-7 letters)
            "YELLOW", "ORANGE", "PURPLE", "SILVER", "INDIGO", "VIOLET", "MAROON", 
            "OLIVE", "CORAL", "PEACH",
            // Plus other medium words
            "DRAGON", "UNICORN", "WIZARD", "DOCTOR", "TEACHER", "ARTIST",
            "SUNSET", "FOREST", "BREEZE", "OCEAN", "DOLPHIN", "PENGUIN",
            // Medium movies (6-7 letters)
            "FROZEN", "AVATAR", "BARBIE", "MATRIX", "SKYFALL",
            // Medium places (6-7 letters)
            "LONDON", "VENICE", "BERLIN", "ATHENS", "MOSCOW", "PRAGUE", "VIENNA", "MIAMI",
            "BOSTON", "HAWAII", "LISBON", "MONACO", "DUBLIN", "ANGKOR",
            // Medium fruits (6-7 letters)
            "ORANGE", "BANANA", "LYCHEE", "PAPAYA", "LONGAN", "LOQUAT", "SAPOTE", "DURIAN",
            "POMELO", "LEMON",

            // Medium everyday words (6-7 letters)
            "DOCTOR", "ARTIST", "FARMER", "PILOT", "MUSIC", "ACTION", "BATTLE", "CAMERA", "DINNER", "ESCAPE",
            "FAMILY", "GARDEN", "HEALTH", "ISLAND", "JACKET", "LEADER", "MARKET", "NATURE", "OFFICE", "PEOPLE",
            "REASON", "SCHOOL", "SUMMER", "TRAVEL", "WINDOW"
        ],
        hard: [
            // Longer countries (8+ letters)
            "ARGENTINA", "AUSTRALIA", "BOTSWANA", "BULGARIA", "CAMBODIA", "COLOMBIA", 
            "CROATIA", "ETHIOPIA", "GUATEMALA", "HONDURAS", "INDONESIA", "LITHUANIA", 
            "LUXEMBOURG", "MADAGASCAR", "MALAYSIA", "MONGOLIA", "MOZAMBIQUE", 
            "NETHERLANDS", "NICARAGUA", "PAKISTAN", "PARAGUAY", "PORTUGAL", "ROMANIA", 
            "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SOMALIA", "SURINAME", "SWITZERLAND", 
            "TANZANIA", "THAILAND", "UKRAINE", "URUGUAY", "VENEZUELA", "VIETNAM", 
            "ZIMBABWE",
            // Hard animals (8+ letters)
            "RHINOCEROS", "HIPPOPOTAMUS", "CHAMELEON", "ALLIGATOR",
            // New hard animals (8+ letters)
            "GORILLA", "LEOPARD", "FLAMINGO",
            // Complex colors (8+ letters)
            "LAVENDER", "TURQUOISE", "MAGENTA", "CRIMSON",
            // Plus other hard words
            "ARCHITECT", "ENGINEER", "INCEPTION", "LIGHTNING", "HURRICANE", 
            "BLIZZARD", "PHOENIX", "VAMPIRE",
            // Hard movies (8+ letters)
            "GLADIATOR", "INCEPTION", "AVENGERS", "AQUAMAN", "TRANSFORMERS",
            // Hard fruits (8+ letters)
            "PINEAPPLE", "WATERMELON", "STRAWBERRY", "BLUEBERRY", "GRAPEFRUIT",
            "TANGERINE", "CLEMENTINE", "MANDARINE", "RASPBERRY", "BLACKBERRY",
            "CRANBERRY", "GOOSEBERRY", "BOYSENBERRY", "MULBERRY", "ELDERBERRY",
            "HUCKLEBERRY", "APRICOT", "NECTARINE", "AVOCADO", "CANTALOUPE",
            "HONEYDEW", "GALIA", "STARFRUIT", "RAMBUTAN", "JACKFRUIT", "PERSIMMON",
            "POMEGRANATE", "TAMARIND", "SOURSOP", "MANGOSTEEN", "CANARY MELON",
            "WINTER MELON",

            // Hard everyday words (8+ letters)
            "EDUCATION", "ENGINEER", "BUSINESS", "COMPUTER", "HOSPITAL", "MOUNTAIN", "PAINTING", "QUESTION", 
            "SECURITY", "STANDARD", "SWIMMING", "TRAINING", "VEGETABLE"
        ]
    }
}

// Make hangmanData available globally
if (typeof window !== 'undefined') {
    window.hangmanData = hangmanData;
}

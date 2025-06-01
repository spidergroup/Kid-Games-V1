// hangman-game.js - Word list and categories for the Hangman game

const hangmanData = {    
    wordList: [        
        // Animals
        "ELEPHANT", "KANGAROO", "GIRAFFE", "PENGUIN", "DOLPHIN", "TIGER", "ZEBRA", "OCTOPUS", 
        "CHAMELEON", "ALLIGATOR", "DOG", "CAT", "HORSE", "LION", "HUMAN", "MONKEY", "WHALE",
        "BAT", "BEAR", "DEER", "RABBIT", "CATTLE", "SHEEP", "GOAT", "PIG", "KOALA",
        "RHINOCEROS", "HIPPOPOTAMUS", "CAMEL", "SLOTH", "OTTER", "MEERKAT", "HAMSTER",
        "MOUSE", "RAT", "FOX", "WOLF", "DUCK", "SWAN", "CROW", "HAWK", "OWL", "FROG",
        "TOAD", "SEAL", "PANDA", "LLAMA", "SNAKE", "EAGLE", "SHARK", "TROUT", "CRAB",
        "SNAIL", "MOOSE", "BISON", "SKUNK", "MOLE", "TURTLE", "PARROT", "IGUANA",
        "GORILLA", "JAGUAR", "LEOPARD", "GAZELLE", "OSTRICH", "PEACOCK", "FLAMINGO",
        // Food
        "PIZZA", "CHOCOLATE", "DONUT", "SANDWICH", "SPAGHETTI", "ICECREAM", "TACO", "POPCORN",
        "CUPCAKE", "SMOOTHIE",
        // Countries
        "CANADA", "BRAZIL", "EGYPT", "FRANCE", "JAPAN", "MEXICO", "SPAIN", "ITALY", 
        "CHINA", "INDIA", "RUSSIA", "GERMANY", "AUSTRIA", "GREECE", "TURKEY", 
        "SWEDEN", "NORWAY", "POLAND", "THAILAND", "VIETNAM", "KOREA", "CHILE", 
        "PERU", "KENYA", "MOROCCO",
        // Places
        "SYDNEY", "LONDON", "VENICE", "PARIS", "TOKYO", "ROME", "BERLIN", "MADRID",
        "ATHENS", "CAIRO", "DUBAI", "SEOUL", "MUMBAI", "MOSCOW", "PRAGUE", "VIENNA",
        "BANGKOK", "MIAMI", "BOSTON", "HAWAII", "LISBON", "MONACO", "SINGAPORE", "DELHI",
        "SHANGHAI", "CHICAGO", "TORONTO", "VEGAS", "DUBLIN", "MILAN", "ANGKOR",
        // Movies
        "TITANIC", "AVATAR", "BATMAN", "INCEPTION", "MATRIX", "JOKER", "FROZEN", "MINIONS",
        "SHREK", "GLADIATOR", "AVENGERS", "BARBIE", "AQUAMAN", "TRANSFORMERS", "SKYFALL", "ALADDIN",
        // Jobs
        "DOCTOR", "TEACHER", "ENGINEER", "PILOT", "CHEF", "ARTIST", "PLUMBER", "ARCHITECT",
        "FARMER", "NURSE",
        // Simple Words
        "APPLE", "HOUSE", "CHAIR", "TRAIN", "TABLE", "WATER", "MUSIC", "HAPPY", "DANCE",
        "SMILE",
        // Fantasy
        "DRAGON", "UNICORN", "WIZARD", "GOBLIN", "MERMAID", "PHOENIX", "ELF", "VAMPIRE",
        "OGRE", "WITCH",
        // Colors
        "PURPLE", "ORANGE", "YELLOW", "GREEN", "INDIGO", "CRIMSON", "PINK", "VIOLET",
        "CYAN", "BLUE",
        // Nature
        "RAINBOW", "THUNDER", "LIGHTNING", "HURRICANE", "BLIZZARD", "SUNSET", "FOREST",
        "MOUNTAIN", "OCEAN", "BREEZE"
    ],    
    categories: {        
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
        food: ["PIZZA", "CHOCOLATE", "DONUT", "SANDWICH", "SPAGHETTI", "ICECREAM", "TACO", 
               "POPCORN", "CUPCAKE", "SMOOTHIE"],        
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
                "TRANSFORMERS", "SKYFALL", "ALADDIN"],
        jobs: ["DOCTOR", "TEACHER", "ENGINEER", "PILOT", "CHEF", "ARTIST", "PLUMBER", 
               "ARCHITECT", "FARMER", "NURSE"],
        simple: ["APPLE", "HOUSE", "CHAIR", "TRAIN", "TABLE", "WATER", "MUSIC", "HAPPY", 
                "DANCE", "SMILE"],
        fantasy: ["DRAGON", "UNICORN", "WIZARD", "GOBLIN", "MERMAID", "PHOENIX", "ELF", 
                 "VAMPIRE", "OGRE", "WITCH"],        
        colors: ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "PURPLE", "BLACK", "WHITE", 
                "GRAY", "BROWN", "PINK", "GOLD", "SILVER", "CYAN", "INDIGO", "VIOLET", 
                "MAROON", "TEAL", "AQUA", "NAVY", "OLIVE", "CORAL", "PEACH", "LAVENDER", 
                "TURQUOISE", "MAGENTA", "MINT", "LIME", "PLUM", "CRIMSON"],
        nature: ["RAINBOW", "THUNDER", "LIGHTNING", "HURRICANE", "BLIZZARD", "SUNSET", 
                "FOREST", "MOUNTAIN", "OCEAN", "BREEZE"]
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
            "JOKER", "SHREK"
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
            "BOSTON", "HAWAII", "LISBON", "MONACO", "DUBLIN", "ANGKOR"
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
            "GLADIATOR", "INCEPTION", "AVENGERS", "AQUAMAN", "TRANSFORMERS"
        ]
    }
}

// Make hangmanData available globally
if (typeof window !== 'undefined') {
    window.hangmanData = hangmanData;
}

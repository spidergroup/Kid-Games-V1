// hangman-game.js - Word list and categories for the Hangman game

const hangmanData = {
    wordList: [
        "APPLE", "BANANA", "CHERRY", "ORANGE", "GRAPE", "MANGO", "STRAWBERRY", "BLUEBERRY", 
        "RASPBERRY", "LEMON", "LIME", "PEACH", "PLUM", "WATERMELON", "CANTALOUPE", "PINEAPPLE", 
        "KIWI", "FIG", "DATE", "COCONUT", "UNICORN", "DRAGON", "WIZARD", "CASTLE", "FOREST", 
        "PLANET", "GALAXY", "ROBOT", "MONSTER", "FLOWER", "SUNSHINE", "RAINBOW",
        "BUTTERFLY", "DOLPHIN", "ELEPHANT", "GIRAFFE", "PENGUIN", "TURTLE", "ZEBRA",
        "BALLOON", "CRAYON", "PUZZLE", "RAINBOW", "TREASURE", "ADVENTURE", "PLAYGROUND",
        "ISLAND", "MOUNTAIN", "OCEAN", "ROCKET", "STARSHIP", "VOLCANO", "GARDEN",
        "CHOCOLATE", "COOKIE", "CUPCAKE", "ICECREAM", "JELLYBEAN", "LOLLIPOP", "MARSHMALLOW"
    ],
    categories: {
        fruits: ["APPLE", "BANANA", "CHERRY", "ORANGE", "GRAPE", "MANGO", "STRAWBERRY", "BLUEBERRY", 
                "RASPBERRY", "LEMON", "LIME", "PEACH", "PLUM", "WATERMELON", "CANTALOUPE", "PINEAPPLE", 
                "KIWI", "FIG", "DATE", "COCONUT"],
        fantasy: ["UNICORN", "DRAGON", "WIZARD", "CASTLE", "FOREST", "PLANET", "GALAXY", "ROBOT", 
                 "MONSTER", "TREASURE", "ADVENTURE"],
        nature: ["FLOWER", "SUNSHINE", "RAINBOW", "BUTTERFLY", "MOUNTAIN", "OCEAN", "VOLCANO", "GARDEN"],
        animals: ["DOLPHIN", "ELEPHANT", "GIRAFFE", "PENGUIN", "TURTLE", "ZEBRA"],
        fun: ["BALLOON", "CRAYON", "PUZZLE", "PLAYGROUND"],
        space: ["PLANET", "GALAXY", "ROCKET", "STARSHIP"],
        sweets: ["CHOCOLATE", "COOKIE", "CUPCAKE", "ICECREAM", "JELLYBEAN", "LOLLIPOP", "MARSHMALLOW"]
    },
    difficulty: {
        easy: ["APPLE", "GRAPE", "LIME", "PEACH", "PLUM", "KIWI", "FIG", "DATE", "ROBOT"],
        medium: ["BANANA", "ORANGE", "DRAGON", "CASTLE", "FLOWER", "TURTLE", "CRAYON", "COOKIE"],
        hard: ["STRAWBERRY", "BLUEBERRY", "RASPBERRY", "WATERMELON", "CANTALOUPE", "PINEAPPLE", 
              "BUTTERFLY", "ADVENTURE", "CHOCOLATE", "MARSHMALLOW"]
    }
};

// --------------------
// WORD DATA
// --------------------
const wordSets = {
  controlled_or: [
    { word: "fort", parts: ["f", "or", "t"], image: "zimages/controlledr_or/fort" },
    { word: "porch", parts: ["p", "or", "ch"], image: "zimages/controlledr_or/porch" },
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/controlledr_or/short" },
    { word: "sport", parts: ["sp", "or", "t"], image: "zimages/controlledr_or/sport" },
    { word: "stork", parts: ["st", "or", "k"], image: "zimages/controlledr_or/stork" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/controlledr_or/storm" },
    { word: "sword", parts: ["s", "w", "or", "d"], image: "zimages/controlledr_or/sword" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/controlledr_or/thorn" },

    // -------------------------
    // ⭐ NEW WORDS — OR
    // -------------------------
    { word: "corn", parts: ["c", "or", "n"], image: "zimages/controlledr_or/corn" },              // new word
    { word: "fork", parts: ["f", "or", "k"], image: "zimages/controlledr_or/fork" },              // new word
    { word: "horn", parts: ["h", "or", "n"], image: "zimages/controlledr_or/horn" },              // new word
    { word: "north", parts: ["n", "or", "th"], image: "zimages/controlledr_or/north" },          // new word
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/controlledr_or/torch" },          // new word
    { word: "torn", parts: ["t", "or", "n"], image: "zimages/controlledr_or/torn" },              // new word
    { word: "worn", parts: ["w", "or", "n"], image: "zimages/controlledr_or/worn" },              // new word
    { word: "pork", parts: ["p", "or", "k"], image: "zimages/controlledr_or/pork" },              // new word
    { word: "cord", parts: ["c", "or", "d"], image: "zimages/controlledr_or/cord" },              // new word
    { word: "sort", parts: ["s", "or", "t"], image: "zimages/controlledr_or/sort" },              // new word
    { word: "snort", parts: ["sn", "or", "t"], image: "zimages/controlledr_or/snort" },          // new word
    { word: "stormy", parts: ["st", "or", "m", "y"], image: "zimages/controlledr_or/stormy" },   // new word

    // -------------------------
    // ⭐ EXTRA NEW WORDS — OR
    // -------------------------
    { word: "born", parts: ["b", "or", "n"], image: "zimages/controlledr_or/born" }, // new word
    { word: "form", parts: ["f", "or", "m"], image: "zimages/controlledr_or/form" }, // new word
    { word: "story", parts: ["st", "or", "y"], image: "zimages/controlledr_or/story" }, // new word
    { word: "store", parts: ["st", "or", "e"], image: "zimages/controlledr_or/store" }, // new word
    { word: "more", parts: ["m", "or", "e"], image: "zimages/controlledr_or/more" }, // new word
    { word: "ignore", parts: ["i", "g", "n", "or", "e"], image: "zimages/controlledr_or/ignore" }, // new word
    { word: "explore", parts: ["e", "x", "pl", "or", "e"], image: "zimages/controlledr_or/explore" }, // new word
    { word: "score", parts: ["sc", "or", "e"], image: "zimages/controlledr_or/score" }, // new word
    { word: "adore", parts: ["a", "d", "or", "e"], image: "zimages/controlledr_or/adore" } // new word
  ],

  controlled_ir: [
    { word: "dirt", parts: ["d", "ir", "t"], image: "zimages/controlledr_ir/dirt" },
    { word: "first", parts: ["f", "ir", "s", "t"], image: "zimages/controlledr_ir/first" },
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/controlledr_ir/shirt" },
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/controlledr_ir/skirt" },
    { word: "stir", parts: ["s", "t", "ir"], image: "zimages/controlledr_ir/stir" },
    { word: "third", parts: ["th", "ir", "d"], image: "zimages/controlledr_ir/third" },
    { word: "twirl", parts: ["tw", "ir", "l"], image: "zimages/controlledr_ir/twirl" },
    { word: "squirt", parts: ["squ", "ir", "t"], image: "zimages/controlledr_ir/squirt" },

    // -------------------------
    // ⭐ NEW WORDS — IR
    // -------------------------
    { word: "bird", parts: ["b", "ir", "d"], image: "zimages/controlledr_ir/bird" },              // new word
    { word: "girl", parts: ["g", "ir", "l"], image: "zimages/controlledr_ir/girl" },              // new word
    { word: "firm", parts: ["f", "ir", "m"], image: "zimages/controlledr_ir/firm" },              // new word
    { word: "chirp", parts: ["ch", "ir", "p"], image: "zimages/controlledr_ir/chirp" },          // new word
    { word: "birth", parts: ["b", "ir", "th"], image: "zimages/controlledr_ir/birth" },          // new word
    { word: "circle", parts: ["c", "ir", "c", "l", "e"], image: "zimages/controlledr_ir/circle" },   // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" },      // new word
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/controlledr_ir/thirst" },       // new word
    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/controlledr_ir/swirl" },          // new word
    { word: "thirty", parts: ["th", "ir", "t", "y"], image: "zimages/controlledr_ir/thirty" }, // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" } // new word
  ],


  // --------------------
  // CONTROLLED R — AR
  // --------------------
  controlled_ar: [
    { word: "car", parts: ["c", "ar"], image: "zimages/controlledr_ar/car" },
    { word: "jar", parts: ["j", "ar"], image: "zimages/controlledr_ar/jar" },
    { word: "star", parts: ["st", "ar"], image: "zimages/controlledr_ar/star" },
    { word: "bar", parts: ["b", "ar"], image: "zimages/controlledr_ar/bar" },
    { word: "far", parts: ["f", "ar"], image: "zimages/controlledr_ar/far" },
    { word: "arm", parts: ["ar", "m"], image: "zimages/controlledr_ar/arm" },
    { word: "art", parts: ["ar", "t"], image: "zimages/controlledr_ar/art" },
    { word: "cart", parts: ["c", "ar", "t"], image: "zimages/controlledr_ar/cart" },
    { word: "card", parts: ["c", "ar", "d"], image: "zimages/controlledr_ar/card" },
    { word: "yard", parts: ["y", "ar", "d"], image: "zimages/controlledr_ar/yard" },
    { word: "hard", parts: ["h", "ar", "d"], image: "zimages/controlledr_ar/hard" },
    { word: "park", parts: ["p", "ar", "k"], image: "zimages/controlledr_ar/park" },
    { word: "dark", parts: ["d", "ar", "k"], image: "zimages/controlledr_ar/dark" },
    { word: "bark", parts: ["b", "ar", "k"], image: "zimages/controlledr_ar/bark" },
    { word: "shark", parts: ["sh", "ar", "k"], image: "zimages/controlledr_ar/shark" },
    { word: "spark", parts: ["sp", "ar", "k"], image: "zimages/controlledr_ar/spark" },
    { word: "farm", parts: ["f", "ar", "m"], image: "zimages/controlledr_ar/farm" },
    { word: "harp", parts: ["h", "ar", "p"], image: "zimages/controlledr_ar/harp" },
    { word: "sharp", parts: ["sh", "ar", "p"], image: "zimages/controlledr_ar/sharp" },
    { word: "scarf", parts: ["sc", "ar", "f"], image: "zimages/controlledr_ar/scarf" },
    { word: "barn", parts: ["b", "ar", "n"], image: "zimages/controlledr_ar/barn" },
    { word: "yarn", parts: ["y", "ar", "n"], image: "zimages/controlledr_ar/yarn" },
    { word: "chart", parts: ["ch", "ar", "t"], image: "zimages/controlledr_ar/chart" },
    { word: "smart", parts: ["sm", "ar", "t"], image: "zimages/controlledr_ar/smart" },
    { word: "start", parts: ["st", "ar", "t"], image: "zimages/controlledr_ar/start" },
    { word: "march", parts: ["m", "ar", "ch"], image: "zimages/controlledr_ar/march" },
    { word: "arch", parts: ["ar", "ch"], image: "zimages/controlledr_ar/arch" },
    { word: "tart", parts: ["t", "ar", "t"], image: "zimages/controlledr_ar/tart" }
  ],

  // --------------------
  // CONTROLLED R — ER
  // --------------------
  controlled_er: [
    { word: "her", parts: ["h", "er"], image: "zimages/controlledr_er/her" },
    { word: "fern", parts: ["f", "er", "n"], image: "zimages/controlledr_er/fern" },
    { word: "herd", parts: ["h", "er", "d"], image: "zimages/controlledr_er/herd" },
    { word: "perch", parts: ["p", "er", "ch"], image: "zimages/controlledr_er/perch" },
    { word: "verb", parts: ["v", "er", "b"], image: "zimages/controlledr_er/verb" },
    { word: "stern", parts: ["st", "er", "n"], image: "zimages/controlledr_er/stern" },
    { word: "clerk", parts: ["cl", "er", "k"], image: "zimages/controlledr_er/clerk" },
    { word: "germ", parts: ["g", "er", "m"], image: "zimages/controlledr_er/germ" },
    { word: "term", parts: ["t", "er", "m"], image: "zimages/controlledr_er/term" },
    { word: "serve", parts: ["s", "er", "v", "e"], image: "zimages/controlledr_er/serve" },
    { word: "nerve", parts: ["n", "er", "v", "e"], image: "zimages/controlledr_er/nerve" },
    { word: "swerve", parts: ["sw", "er", "v", "e"], image: "zimages/controlledr_er/swerve" },
    { word: "tiger", parts: ["t", "i", "g", "er"], image: "zimages/controlledr_er/tiger" },
    { word: "letter", parts: ["l", "e", "tt", "er"], image: "zimages/controlledr_er/letter" },
    { word: "butter", parts: ["b", "u", "tt", "er"], image: "zimages/controlledr_er/butter" },
    { word: "ladder", parts: ["l", "a", "dd", "er"], image: "zimages/controlledr_er/ladder" },
    { word: "hammer", parts: ["h", "a", "mm", "er"], image: "zimages/controlledr_er/hammer" },
    { word: "river", parts: ["r", "i", "v", "er"], image: "zimages/controlledr_er/river" },
    { word: "sister", parts: ["s", "i", "s", "t", "er"], image: "zimages/controlledr_er/sister" },
    { word: "winter", parts: ["w", "i", "n", "t", "er"], image: "zimages/controlledr_er/winter" },
    { word: "spider", parts: ["sp", "i", "d", "er"], image: "zimages/controlledr_er/spider" },
    { word: "flower", parts: ["fl", "ow", "er"], image: "zimages/controlledr_er/flower" },
    { word: "dinner", parts: ["d", "i", "nn", "er"], image: "zimages/controlledr_er/dinner" },
    { word: "number", parts: ["n", "u", "m", "b", "er"], image: "zimages/controlledr_er/number" },
    { word: "silver", parts: ["s", "i", "l", "v", "er"], image: "zimages/controlledr_er/silver" },
    { word: "zipper", parts: ["z", "i", "pp", "er"], image: "zimages/controlledr_er/zipper" },
    { word: "monster", parts: ["m", "o", "n", "st", "er"], image: "zimages/controlledr_er/monster" },
    { word: "finger", parts: ["f", "i", "ng", "er"], image: "zimages/controlledr_er/finger" }
  ],

  // --------------------
  // CONTROLLED R — UR
  // --------------------
  controlled_ur: [
    { word: "fur", parts: ["f", "ur"], image: "zimages/controlledr_ur/fur" },
    { word: "burn", parts: ["b", "ur", "n"], image: "zimages/controlledr_ur/burn" },
    { word: "turn", parts: ["t", "ur", "n"], image: "zimages/controlledr_ur/turn" },
    { word: "hurt", parts: ["h", "ur", "t"], image: "zimages/controlledr_ur/hurt" },
    { word: "curl", parts: ["c", "ur", "l"], image: "zimages/controlledr_ur/curl" },
    { word: "surf", parts: ["s", "ur", "f"], image: "zimages/controlledr_ur/surf" },
    { word: "church", parts: ["ch", "ur", "ch"], image: "zimages/controlledr_ur/church" },
    { word: "churn", parts: ["ch", "ur", "n"], image: "zimages/controlledr_ur/churn" },
    { word: "burp", parts: ["b", "ur", "p"], image: "zimages/controlledr_ur/burp" },
    { word: "purr", parts: ["p", "ur", "r"], image: "zimages/controlledr_ur/purr" },
    { word: "purse", parts: ["p", "ur", "s", "e"], image: "zimages/controlledr_ur/purse" },
    { word: "nurse", parts: ["n", "ur", "s", "e"], image: "zimages/controlledr_ur/nurse" },
    { word: "curve", parts: ["c", "ur", "v", "e"], image: "zimages/controlledr_ur/curve" },
    { word: "blur", parts: ["bl", "ur"], image: "zimages/controlledr_ur/blur" },
    { word: "curb", parts: ["c", "ur", "b"], image: "zimages/controlledr_ur/curb" },
    { word: "turtle", parts: ["t", "ur", "t", "l", "e"], image: "zimages/controlledr_ur/turtle" },
    { word: "purple", parts: ["p", "ur", "p", "l", "e"], image: "zimages/controlledr_ur/purple" },
    { word: "burger", parts: ["b", "ur", "g", "er"], image: "zimages/controlledr_ur/burger" },
    { word: "turkey", parts: ["t", "ur", "k", "ey"], image: "zimages/controlledr_ur/turkey" },
    { word: "turf", parts: ["t", "ur", "f"], image: "zimages/controlledr_ur/turf" },
    { word: "burst", parts: ["b", "ur", "s", "t"], image: "zimages/controlledr_ur/burst" },
    { word: "slurp", parts: ["sl", "ur", "p"], image: "zimages/controlledr_ur/slurp" },
    { word: "hurdle", parts: ["h", "ur", "d", "l", "e"], image: "zimages/controlledr_ur/hurdle" },
    { word: "return", parts: ["r", "e", "t", "ur", "n"], image: "zimages/controlledr_ur/return" },
    { word: "curly", parts: ["c", "ur", "l", "y"], image: "zimages/controlledr_ur/curly" },
    { word: "turnip", parts: ["t", "ur", "n", "i", "p"], image: "zimages/controlledr_ur/turnip" }
  ],


  // --------------------
  // LONG VOWELS
  // --------------------
  longvowels_a: [
    { word: "brake", parts: ["br", "a", "k", "e"], image: "zimages/longvowels/a_brake" },
    { word: "cape", parts: ["c", "a", "p", "e"], image: "zimages/longvowels/a_cape" },
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/longvowels/a_chase" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/longvowels/a_crate" },
    { word: "grade", parts: ["gr", "a", "d", "e"], image: "zimages/longvowels/a_grade" },
    { word: "lame", parts: ["l", "a", "m", "e"], image: "zimages/longvowels/a_lame" },
    { word: "mane", parts: ["m", "a", "n", "e"], image: "zimages/longvowels/a_mane" },
    { word: "pane", parts: ["p", "a", "n", "e"], image: "zimages/longvowels/a_pane" },
    { word: "paste", parts: ["p", "a", "s", "t", "e"], image: "zimages/longvowels/a_paste" },
    { word: "save", parts: ["s", "a", "v", "e"], image: "zimages/longvowels/a_save" },
    { word: "tape", parts: ["t", "a", "p", "e"], image: "zimages/longvowels/a_tape" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — A
    // -------------------------
    { word: "grape", parts: ["gr", "a", "p", "e"], image: "zimages/longvowels/a_grape" }, // new word
    { word: "shape", parts: ["sh", "a", "p", "e"], image: "zimages/longvowels/a_shape" }, // new word
    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/longvowels/a_scale" }, // new word
    { word: "plane", parts: ["pl", "a", "n", "e"], image: "zimages/longvowels/a_plane" } // new word
  ],


  // --------------------
  // LONG VOWEL — E  (e_e, open e, ee, ea)  — max 5 sounds
  // --------------------
  longvowels_e: [
    { word: "these", parts: ["th", "e", "s", "e"], image: "zimages/longvowels/e_these" },
    { word: "theme", parts: ["th", "e", "m", "e"], image: "zimages/longvowels/e_theme" },
    { word: "scene", parts: ["sc", "e", "n", "e"], image: "zimages/longvowels/e_scene" },
    { word: "me", parts: ["m", "e"], image: "zimages/longvowels/e_me" },
    { word: "he", parts: ["h", "e"], image: "zimages/longvowels/e_he" },
    { word: "we", parts: ["w", "e"], image: "zimages/longvowels/e_we" },
    { word: "she", parts: ["sh", "e"], image: "zimages/longvowels/e_she" },
    { word: "bee", parts: ["b", "ee"], image: "zimages/longvowels/e_bee" },
    { word: "tree", parts: ["tr", "ee"], image: "zimages/longvowels/e_tree" },
    { word: "feet", parts: ["f", "ee", "t"], image: "zimages/longvowels/e_feet" },
    { word: "seed", parts: ["s", "ee", "d"], image: "zimages/longvowels/e_seed" },
    { word: "sheep", parts: ["sh", "ee", "p"], image: "zimages/longvowels/e_sheep" },
    { word: "green", parts: ["gr", "ee", "n"], image: "zimages/longvowels/e_green" },
    { word: "queen", parts: ["qu", "ee", "n"], image: "zimages/longvowels/e_queen" },
    { word: "wheel", parts: ["wh", "ee", "l"], image: "zimages/longvowels/e_wheel" },
    { word: "teeth", parts: ["t", "ee", "th"], image: "zimages/longvowels/e_teeth" },
    { word: "cheese", parts: ["ch", "ee", "s", "e"], image: "zimages/longvowels/e_cheese" },
    { word: "sleep", parts: ["sl", "ee", "p"], image: "zimages/longvowels/e_sleep" },
    { word: "leaf", parts: ["l", "ea", "f"], image: "zimages/longvowels/e_leaf" },
    { word: "seal", parts: ["s", "ea", "l"], image: "zimages/longvowels/e_seal" },
    { word: "beach", parts: ["b", "ea", "ch"], image: "zimages/longvowels/e_beach" },
    { word: "peach", parts: ["p", "ea", "ch"], image: "zimages/longvowels/e_peach" },
    { word: "eat", parts: ["ea", "t"], image: "zimages/longvowels/e_eat" },
    { word: "sweet", parts: ["sw", "ee", "t"], image: "zimages/longvowels/e_sweet" },
    { word: "meat", parts: ["m", "ea", "t"], image: "zimages/longvowels/e_meat" },
    { word: "sea", parts: ["s", "ea"], image: "zimages/longvowels/e_sea" },
    { word: "team", parts: ["t", "ea", "m"], image: "zimages/longvowels/e_team" },
    { word: "dream", parts: ["dr", "ea", "m"], image: "zimages/longvowels/e_dream" }
  ],

  longvowels_i: [
    { word: "bride", parts: ["br", "i", "d", "e"], image: "zimages/longvowels/i_bride" },
    { word: "pine", parts: ["p", "i", "n", "e"], image: "zimages/longvowels/i_pine" },
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/longvowels/i_shine" },
    { word: "spine", parts: ["sp", "i", "n", "e"], image: "zimages/longvowels/i_spine" },
    { word: "stripe", parts: ["str", "i", "p", "e"], image: "zimages/longvowels/i_stripe" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — I
    // -------------------------
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/longvowels/i_slide" }, // new word
    { word: "smile", parts: ["sm", "i", "l", "e"], image: "zimages/longvowels/i_smile" }, // new word
    { word: "while", parts: ["wh", "i", "l", "e"], image: "zimages/longvowels/i_while" }, // new word
    { word: "bribe", parts: ["br", "i", "b", "e"], image: "zimages/longvowels/i_bribe" } // new word
  ],


  longvowels_o: [
    { word: "choke", parts: ["ch", "o", "k", "e"], image: "zimages/longvowels/o_choke" },
    { word: "dome", parts: ["d", "o", "m", "e"], image: "zimages/longvowels/o_dome" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/longvowels/o_globe" },
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/longvowels/o_smoke" },
    { word: "stove", parts: ["st", "o", "v", "e"], image: "zimages/longvowels/o_stove" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — O
    // -------------------------
    { word: "rope", parts: ["r", "o", "p", "e"], image: "zimages/longvowels/o_rope" }, // new word
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/longvowels/o_stone" }, // new word
    { word: "phone", parts: ["ph", "o", "n", "e"], image: "zimages/longvowels/o_phone" }, // new word
    { word: "throne", parts: ["thr", "o", "n", "e"], image: "zimages/longvowels/o_throne" } // new word
  ],


  longvowels_u: [
    { word: "dune", parts: ["d", "u", "n", "e"], image: "zimages/longvowels/u_dune" },
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/longvowels/u_flute" },
    { word: "mule", parts: ["m", "u", "l", "e"], image: "zimages/longvowels/u_mule" },
    { word: "mute", parts: ["m", "u", "t", "e"], image: "zimages/longvowels/u_mute" },
    { word: "plume", parts: ["pl", "u", "m", "e"], image: "zimages/longvowels/u_plume" },
    { word: "prune", parts: ["pr", "u", "n", "e"], image: "zimages/longvowels/u_prune" },
    { word: "tune", parts: ["t", "u", "n", "e"], image: "zimages/longvowels/u_tune" },
    
    // -------------------------
    // ⭐ EXTRA NEW WORDS — U
    // -------------------------
    { word: "cube", parts: ["c", "u", "b", "e"], image: "zimages/longvowels/u_cube" }, // new word
    { word: "cute", parts: ["c", "u", "t", "e"], image: "zimages/longvowels/u_cute" }, // new word
    { word: "huge", parts: ["h", "u", "g", "e"], image: "zimages/longvowels/u_huge" }, // new word
    { word: "rude", parts: ["r", "u", "d", "e"], image: "zimages/longvowels/u_rude" } // new word
  ],



  // --------------------
  // CONSONANT BLEND L
  // --------------------
  consonantblend_l: [
    { word: "blimp", parts: ["bl", "i", "m", "p"], image: "zimages/consonantblend_l/blimp" },
    { word: "clam", parts: ["cl", "a", "m"], image: "zimages/consonantblend_l/clam" },
    { word: "clap", parts: ["cl", "a", "p"], image: "zimages/consonantblend_l/clap" },
    { word: "clock", parts: ["cl", "o", "ck"], image: "zimages/consonantblend_l/clock" },
    { word: "flag", parts: ["fl", "a", "g"], image: "zimages/consonantblend_l/flag" },
    { word: "flame", parts: ["fl", "a", "m", "e"], image: "zimages/consonantblend_l/flame" },
    { word: "flap", parts: ["fl", "a", "p"], image: "zimages/consonantblend_l/flap" },
    { word: "floss", parts: ["fl", "o", "ss"], image: "zimages/consonantblend_l/floss" },
    { word: "glad", parts: ["gl", "a", "d"], image: "zimages/consonantblend_l/glad" },
    { word: "glass", parts: ["gl", "a", "ss"], image: "zimages/consonantblend_l/glass" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/consonantblend_l/globe" },
    { word: "plug", parts: ["pl", "u", "g"], image: "zimages/consonantblend_l/plug" },
    { word: "sled", parts: ["sl", "e", "d"], image: "zimages/consonantblend_l/sled" },
    { word: "sleep", parts: ["sl", "ee", "p"], image: "zimages/consonantblend_l/sleep" },
    { word: "sleeve", parts: ["sl", "ee", "v", "e"], image: "zimages/consonantblend_l/sleeve" },
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/consonantblend_l/slide" },
    { word: "slime", parts: ["sl", "i", "m", "e"], image: "zimages/consonantblend_l/slime" },


    { word: "black", parts: ["bl", "a", "ck"], image: "zimages/consonantblend_l/black" }, // new
    { word: "blast", parts: ["bl", "a", "s", "t"], image: "zimages/consonantblend_l/blast" }, // new
    { word: "blend", parts: ["bl", "e", "n", "d"], image: "zimages/consonantblend_l/blend" }, // new
    { word: "blink", parts: ["bl", "i", "n", "k"], image: "zimages/consonantblend_l/blink" }, // new
    { word: "block", parts: ["bl", "o", "ck"], image: "zimages/consonantblend_l/block" }, // new
    { word: "blaze", parts: ["bl", "a", "z", "e"], image: "zimages/consonantblend_l/blaze" }, // new

    { word: "cliff", parts: ["cl", "i", "ff"], image: "zimages/consonantblend_l/cliff" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/consonantblend_l/cling" }, // new
    { word: "clip", parts: ["cl", "i", "p"], image: "zimages/consonantblend_l/clip" }, // new
    { word: "climb", parts: ["cl", "i", "m", "b"], image: "zimages/consonantblend_l/climb" }, // new
    { word: "clown", parts: ["cl", "ow", "n"], image: "zimages/consonantblend_l/clown" }, // new
    { word: "close", parts: ["cl", "o", "s", "e"], image: "zimages/consonantblend_l/close" }, // new

    { word: "flake", parts: ["fl", "a", "k", "e"], image: "zimages/consonantblend_l/flake" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/consonantblend_l/fling" }, // new
    { word: "float", parts: ["fl", "oa", "t"], image: "zimages/consonantblend_l/float" }, // new
    { word: "flock", parts: ["fl", "o", "ck"], image: "zimages/consonantblend_l/flock" }, // new
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/consonantblend_l/flute" }, // new
    { word: "flint", parts: ["fl", "i", "n", "t"], image: "zimages/consonantblend_l/flint" }, // new

    { word: "glove", parts: ["gl", "o", "v", "e"], image: "zimages/consonantblend_l/glove" }, // new
    { word: "glide", parts: ["gl", "i", "d", "e"], image: "zimages/consonantblend_l/glide" }, // new
    { word: "glow", parts: ["gl", "ow"], image: "zimages/consonantblend_l/glow" }, // new
    { word: "gleam", parts: ["gl", "ea", "m"], image: "zimages/consonantblend_l/gleam" }, // new
    { word: "glare", parts: ["gl", "a", "r", "e"], image: "zimages/consonantblend_l/glare" }, // new
    { word: "gloss", parts: ["gl", "o", "ss"], image: "zimages/consonantblend_l/gloss" }, // new

    { word: "place", parts: ["pl", "a", "c", "e"], image: "zimages/consonantblend_l/place" }, // new
    { word: "plant", parts: ["pl", "a", "n", "t"], image: "zimages/consonantblend_l/plant" }, // new
    { word: "plate", parts: ["pl", "a", "t", "e"], image: "zimages/consonantblend_l/plate" }, // new
    { word: "plank", parts: ["pl", "a", "n", "k"], image: "zimages/consonantblend_l/plank" }, // new
    { word: "pluck", parts: ["pl", "u", "ck"], image: "zimages/consonantblend_l/pluck" }, // new
    { word: "plain", parts: ["pl", "ai", "n"], image: "zimages/consonantblend_l/plain" }, // new

    { word: "slam", parts: ["sl", "a", "m"], image: "zimages/consonantblend_l/slam" }, // new
    { word: "slap", parts: ["sl", "a", "p"], image: "zimages/consonantblend_l/slap" }, // new
    { word: "slant", parts: ["sl", "a", "n", "t"], image: "zimages/consonantblend_l/slant" }, // new
    { word: "slick", parts: ["sl", "i", "ck"], image: "zimages/consonantblend_l/slick" }, // new
    { word: "slip", parts: ["sl", "i", "p"], image: "zimages/consonantblend_l/slip" }, // new
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/consonantblend_l/sloth" } // new
  ],

  // --------------------
  // CONSONANT BLEND R
  // --------------------
  consonantblend_r: [
    { word: "braid", parts: ["br", "ai", "d"], image: "zimages/consonantblend_r/braid" },
    { word: "brick", parts: ["br", "i", "ck"], image: "zimages/consonantblend_r/brick" },
    { word: "broom", parts: ["br", "oo", "m"], image: "zimages/consonantblend_r/broom" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/consonantblend_r/crate" },
    { word: "cross", parts: ["cr", "o", "ss"], image: "zimages/consonantblend_r/cross" },
    { word: "dress", parts: ["dr", "e", "ss"], image: "zimages/consonantblend_r/dress" },
    { word: "drill", parts: ["dr", "i", "ll"], image: "zimages/consonantblend_r/drill" },
    { word: "drink", parts: ["dr", "i", "n", "k"], image: "zimages/consonantblend_r/drink" },
    { word: "frame", parts: ["fr", "a", "m", "e"], image: "zimages/consonantblend_r/frame" },
    { word: "frost", parts: ["fr", "o", "s", "t"], image: "zimages/consonantblend_r/frost" },
    { word: "grill", parts: ["gr", "i", "ll"], image: "zimages/consonantblend_r/grill" },
    { word: "print", parts: ["pr", "i", "n", "t"], image: "zimages/consonantblend_r/print" },
    { word: "prize", parts: ["pr", "i", "z", "e"], image: "zimages/consonantblend_r/prize" },
    { word: "train", parts: ["tr", "ai", "n"], image: "zimages/consonantblend_r/train" },
    { word: "trash", parts: ["tr", "a", "sh"], image: "zimages/consonantblend_r/trash" },
    { word: "trunk", parts: ["tr", "u", "n", "k"], image: "zimages/consonantblend_r/trunk" },

    { word: "brag", parts: ["br", "a", "g"], image: "zimages/consonantblend_r/brag" }, // new
    { word: "brim", parts: ["br", "i", "m"], image: "zimages/consonantblend_r/brim" }, // new
    { word: "brush", parts: ["br", "u", "sh"], image: "zimages/consonantblend_r/brush" }, // new
    { word: "brass", parts: ["br", "a", "ss"], image: "zimages/consonantblend_r/brass" }, // new
    { word: "bread", parts: ["br", "ea", "d"], image: "zimages/consonantblend_r/bread" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "fry", parts: ["fr", "y"], image: "zimages/consonantblend_r/fry" }, // new
    { word: "fresh", parts: ["fr", "e", "sh"], image: "zimages/consonantblend_r/fresh" }, // new
    { word: "friend", parts: ["fr", "ie", "nd"], image: "zimages/consonantblend_r/friend" }, // new
    { word: "freight", parts: ["fr", "ei", "gh", "t"], image: "zimages/consonantblend_r/freight" }, // new
    { word: "fruit", parts: ["fr", "ui", "t"], image: "zimages/consonantblend_r/fruit" }, // new

    { word: "grab", parts: ["gr", "a", "b"], image: "zimages/consonantblend_r/grab" }, // new
    { word: "grain", parts: ["gr", "ai", "n"], image: "zimages/consonantblend_r/grain" }, // new
    { word: "grew", parts: ["gr", "ew"], image: "zimages/consonantblend_r/grew" }, // new
    { word: "grip", parts: ["gr", "i", "p"], image: "zimages/consonantblend_r/grip" }, // new
    { word: "groan", parts: ["gr", "oa", "n"], image: "zimages/consonantblend_r/groan" }, // new

    { word: "pram", parts: ["pr", "a", "m"], image: "zimages/consonantblend_r/pram" }, // new
    { word: "press", parts: ["pr", "e", "ss"], image: "zimages/consonantblend_r/press" }, // new
    { word: "pride", parts: ["pr", "i", "d", "e"], image: "zimages/consonantblend_r/pride" }, // new
    { word: "prank", parts: ["pr", "a", "n", "k"], image: "zimages/consonantblend_r/prank" }, // new
    { word: "prove", parts: ["pr", "o", "v", "e"], image: "zimages/consonantblend_r/prove" }, // new

    { word: "track", parts: ["tr", "a", "ck"], image: "zimages/consonantblend_r/track" }, // new
    { word: "trap", parts: ["tr", "a", "p"], image: "zimages/consonantblend_r/trap" }, // new
    { word: "tread", parts: ["tr", "ea", "d"], image: "zimages/consonantblend_r/tread" }, // new
    { word: "treat", parts: ["tr", "ea", "t"], image: "zimages/consonantblend_r/treat" }, // new
    { word: "trout", parts: ["tr", "ou", "t"], image: "zimages/consonantblend_r/trout" } // new
  ],

  // --------------------
  // CONSONANT BLEND S
  // --------------------
  consonantblend_s: [
    { word: "scab", parts: ["sc", "a", "b"], image: "zimages/consonantblend_s/scab" },
    { word: "scarf", parts: ["sc", "ar", "f"], image: "zimages/consonantblend_s/scarf" },
    { word: "scoop", parts: ["sc", "oo", "p"], image: "zimages/consonantblend_s/scoop" },
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" },
    { word: "skull", parts: ["sk", "u", "ll"], image: "zimages/consonantblend_s/skull" },
    { word: "skunk", parts: ["sk", "u", "n", "k"], image: "zimages/consonantblend_s/skunk" },
    { word: "smell", parts: ["sm", "e", "ll"], image: "zimages/consonantblend_s/smell" },
    { word: "smock", parts: ["sm", "o", "ck"], image: "zimages/consonantblend_s/smock" },
    { word: "sneeze", parts: ["sn", "ee", "z", "e"], image: "zimages/consonantblend_s/sneeze" },
    { word: "snip", parts: ["sn", "i", "p"], image: "zimages/consonantblend_s/snip" },
    { word: "snore", parts: ["sn", "or", "e"], image: "zimages/consonantblend_s/snore" },
    { word: "snout", parts: ["sn", "ou", "t"], image: "zimages/consonantblend_s/snout" },
    { word: "stack", parts: ["st", "a", "ck"], image: "zimages/consonantblend_s/stack" },
    { word: "stem", parts: ["st", "e", "m"], image: "zimages/consonantblend_s/stem" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/consonantblend_s/sting" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/consonantblend_s/storm" },
    { word: "sweet", parts: ["sw", "ee", "t"], image: "zimages/consonantblend_s/sweet" },
    { word: "swim", parts: ["sw", "i", "m"], image: "zimages/consonantblend_s/swim" },

    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/consonantblend_s/scale" }, // new
    { word: "scold", parts: ["sc", "o", "l", "d"], image: "zimages/consonantblend_s/scold" }, // new
    { word: "scout", parts: ["sc", "ou", "t"], image: "zimages/consonantblend_s/scout" }, // new
    { word: "screen", parts: ["scr", "ee", "n"], image: "zimages/consonantblend_s/screen" }, // new
    { word: "scrap", parts: ["scr", "a", "p"], image: "zimages/consonantblend_s/scrap" }, // new

    { word: "skid", parts: ["sk", "i", "d"], image: "zimages/consonantblend_s/skid" }, // new
    { word: "skill", parts: ["sk", "i", "ll"], image: "zimages/consonantblend_s/skill" }, // new
    { word: "skip", parts: ["sk", "i", "p"], image: "zimages/consonantblend_s/skip" }, // new
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/consonantblend_s/skirt" }, // new
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" }, // new

    { word: "smart", parts: ["sm", "ar", "t"], image: "zimages/consonantblend_s/smart" }, // new
    { word: "smash", parts: ["sm", "a", "sh"], image: "zimages/consonantblend_s/smash" }, // new
    { word: "smirk", parts: ["sm", "ir", "k"], image: "zimages/consonantblend_s/smirk" }, // new
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/consonantblend_s/smoke" }, // new

    { word: "snack", parts: ["sn", "a", "ck"], image: "zimages/consonantblend_s/snack" }, // new
    { word: "snap", parts: ["sn", "a", "p"], image: "zimages/consonantblend_s/snap" }, // new
    { word: "snake", parts: ["sn", "a", "k", "e"], image: "zimages/consonantblend_s/snake" }, // new
    { word: "snoop", parts: ["sn", "oo", "p"], image: "zimages/consonantblend_s/snoop" }, // new
    { word: "snow", parts: ["sn", "ow"], image: "zimages/consonantblend_s/snow" }, // new

    { word: "space", parts: ["sp", "a", "c", "e"], image: "zimages/consonantblend_s/space" }, // new
    { word: "spade", parts: ["sp", "a", "d", "e"], image: "zimages/consonantblend_s/spade" }, // new
    { word: "spend", parts: ["sp", "e", "n", "d"], image: "zimages/consonantblend_s/spend" }, // new
    { word: "spice", parts: ["sp", "i", "c", "e"], image: "zimages/consonantblend_s/spice" }, // new
    { word: "spoon", parts: ["sp", "oo", "n"], image: "zimages/consonantblend_s/spoon" }, // new

    { word: "stage", parts: ["st", "a", "g", "e"], image: "zimages/consonantblend_s/stage" }, // new
    { word: "stair", parts: ["st", "ai", "r"], image: "zimages/consonantblend_s/stair" }, // new
    { word: "straw", parts: ["st", "r", "aw"], image: "zimages/consonantblend_s/straw" }, // new
    { word: "string", parts: ["st", "r", "i", "ng"], image: "zimages/consonantblend_s/string" }, // new
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/consonantblend_s/stone" }, // new

    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/consonantblend_s/swirl" }, // new
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/consonantblend_s/swing" }, // new
    { word: "swarm", parts: ["sw", "ar", "m"], image: "zimages/consonantblend_s/swarm" }, // new
    { word: "swipe", parts: ["sw", "i", "p", "e"], image: "zimages/consonantblend_s/swipe" }, // new
    { word: "swoop", parts: ["sw", "oo", "p"], image: "zimages/consonantblend_s/swoop" } // new
  ],

  // --------------------
  // DIAGRAPHS
  // --------------------
  diagraphs_ch: [
    { word: "beach", parts: ["b", "ea", "ch"], image: "zimages/diagraphs/ch/beach" },
    { word: "bunch", parts: ["b", "u", "n", "ch"], image: "zimages/diagraphs/ch/bunch" },
    { word: "chat", parts: ["ch", "a", "t"], image: "zimages/diagraphs/ch/chat" },
    { word: "cheek", parts: ["ch", "ee", "k"], image: "zimages/diagraphs/ch/cheek" },
    { word: "cheese", parts: ["ch", "ee", "s", "e"], image: "zimages/diagraphs/ch/cheese" },
    { word: "chest", parts: ["ch", "e", "s", "t"], image: "zimages/diagraphs/ch/chest" },
    { word: "chimp", parts: ["ch", "i", "m", "p"], image: "zimages/diagraphs/ch/chimp" },
    { word: "chip", parts: ["ch", "i", "p"], image: "zimages/diagraphs/ch/chip" },
    { word: "chop", parts: ["ch", "o", "p"], image: "zimages/diagraphs/ch/chop" },
    { word: "church", parts: ["ch", "ur", "ch"], image: "zimages/diagraphs/ch/church" },
    { word: "couch", parts: ["c", "ou", "ch"], image: "zimages/diagraphs/ch/couch" },
    { word: "lunch", parts: ["l", "u", "n", "ch"], image: "zimages/diagraphs/ch/lunch" },
    { word: "march", parts: ["m", "ar", "ch"], image: "zimages/diagraphs/ch/march" },
    { word: "peach", parts: ["p", "ea", "ch"], image: "zimages/diagraphs/ch/peach" },
    { word: "pinch", parts: ["p", "i", "n", "ch"], image: "zimages/diagraphs/ch/pinch" },
    { word: "punch", parts: ["p", "u", "n", "ch"], image: "zimages/diagraphs/ch/punch" },
    { word: "search", parts: ["s", "ear", "ch"], image: "zimages/diagraphs/ch/search" },
    { word: "teach", parts: ["t", "ea", "ch"], image: "zimages/diagraphs/ch/teach" },
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/diagraphs/ch/torch" },

    { word: "chin", parts: ["ch", "i", "n"], image: "zimages/diagraphs/ch/chin" }, // new
    { word: "chef", parts: ["ch", "e", "f"], image: "zimages/diagraphs/ch/chef" }, // new
    { word: "chess", parts: ["ch", "e", "ss"], image: "zimages/diagraphs/ch/chess" }, // new
    { word: "check", parts: ["ch", "e", "ck"], image: "zimages/diagraphs/ch/check" }, // new
    { word: "chick", parts: ["ch", "i", "ck"], image: "zimages/diagraphs/ch/chick" }, // new
    { word: "champ", parts: ["ch", "a", "m", "p"], image: "zimages/diagraphs/ch/champ" }, // new
    { word: "chunk", parts: ["ch", "u", "n", "k"], image: "zimages/diagraphs/ch/chunk" }, // new
    
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/diagraphs/ch/chase" }, // new
    { word: "chore", parts: ["ch", "or", "e"], image: "zimages/diagraphs/ch/chore" }, // new
    { word: "chime", parts: ["ch", "i", "m", "e"], image: "zimages/diagraphs/ch/chime" }, // new

    { word: "chain", parts: ["ch", "ai", "n"], image: "zimages/diagraphs/ch/chain" }, // new
    { word: "chair", parts: ["ch", "air"], image: "zimages/diagraphs/ch/chair" }, // new
    { word: "chart", parts: ["ch", "ar", "t"], image: "zimages/diagraphs/ch/chart" }, // new
    { word: "cheap", parts: ["ch", "ea", "p"], image: "zimages/diagraphs/ch/cheap" }, // new
    { word: "cheat", parts: ["ch", "ea", "t"], image: "zimages/diagraphs/ch/cheat" }, // new

    { word: "chew", parts: ["ch", "ew"], image: "zimages/diagraphs/ch/chew" }, // new
    { word: "chili", parts: ["ch", "i", "l", "i"], image: "zimages/diagraphs/ch/chili" }, // new
    { word: "churn", parts: ["ch", "ur", "n"], image: "zimages/diagraphs/ch/churn" }, // new

    { word: "bench", parts: ["b", "e", "n", "ch"], image: "zimages/diagraphs/ch/bench" }, // new
    { word: "branch", parts: ["br", "a", "n", "ch"], image: "zimages/diagraphs/ch/branch" }, // new
    { word: "catch", parts: ["c", "a", "t", "ch"], image: "zimages/diagraphs/ch/catch" }, // new
    { word: "cinch", parts: ["c", "i", "n", "ch"], image: "zimages/diagraphs/ch/cinch" }, // new
    { word: "ditch", parts: ["d", "i", "t", "ch"], image: "zimages/diagraphs/ch/ditch" }, // new
    { word: "finch", parts: ["f", "i", "n", "ch"], image: "zimages/diagraphs/ch/finch" }, // new
    { word: "hatch", parts: ["h", "a", "t", "ch"], image: "zimages/diagraphs/ch/hatch" }, // new
    { word: "latch", parts: ["l", "a", "t", "ch"], image: "zimages/diagraphs/ch/latch" }, // new
    { word: "match", parts: ["m", "a", "t", "ch"], image: "zimages/diagraphs/ch/match" }, // new
    { word: "stretch", parts: ["str", "e", "t", "ch"], image: "zimages/diagraphs/ch/stretch" } // new
  ],

  diagraphs_ng: [
    { word: "bang", parts: ["b", "a", "ng"], image: "zimages/diagraphs/ng/bang" },
    { word: "fang", parts: ["f", "a", "ng"], image: "zimages/diagraphs/ng/fang" },
    { word: "gong", parts: ["g", "o", "ng"], image: "zimages/diagraphs/ng/gong" },
    { word: "king", parts: ["k", "i", "ng"], image: "zimages/diagraphs/ng/king" },
    { word: "long", parts: ["l", "o", "ng"], image: "zimages/diagraphs/ng/long" },
    { word: "lung", parts: ["l", "u", "ng"], image: "zimages/diagraphs/ng/lung" },
    { word: "pong", parts: ["p", "o", "ng"], image: "zimages/diagraphs/ng/pong" },
    { word: "ring", parts: ["r", "i", "ng"], image: "zimages/diagraphs/ng/ring" },
    { word: "rung", parts: ["r", "u", "ng"], image: "zimages/diagraphs/ng/rung" },
    { word: "sing", parts: ["s", "i", "ng"], image: "zimages/diagraphs/ng/sing" },
    { word: "song", parts: ["s", "o", "ng"], image: "zimages/diagraphs/ng/song" },
    { word: "spring", parts: ["sp", "r", "i", "ng"], image: "zimages/diagraphs/ng/spring" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/diagraphs/ng/sting" },
    { word: "string", parts: ["str", "i", "ng"], image: "zimages/diagraphs/ng/string" },
    { word: "strong", parts: ["str", "o", "ng"], image: "zimages/diagraphs/ng/strong" },
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/diagraphs/ng/swing" },
    { word: "tong", parts: ["t", "o", "ng"], image: "zimages/diagraphs/ng/tong" },
    { word: "wing", parts: ["w", "i", "ng"], image: "zimages/diagraphs/ng/wing" },

    { word: "hang", parts: ["h", "a", "ng"], image: "zimages/diagraphs/ng/hang" }, // new
    { word: "sang", parts: ["s", "a", "ng"], image: "zimages/diagraphs/ng/sang" }, // new
    { word: "sung", parts: ["s", "u", "ng"], image: "zimages/diagraphs/ng/sung" }, // new
    { word: "gang", parts: ["g", "a", "ng"], image: "zimages/diagraphs/ng/gang" }, // new

    { word: "clang", parts: ["cl", "a", "ng"], image: "zimages/diagraphs/ng/clang" }, // new
    { word: "slang", parts: ["sl", "a", "ng"], image: "zimages/diagraphs/ng/slang" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/diagraphs/ng/cling" }, // new
    { word: "sling", parts: ["sl", "i", "ng"], image: "zimages/diagraphs/ng/sling" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/diagraphs/ng/fling" }, // new
    { word: "flung", parts: ["fl", "u", "ng"], image: "zimages/diagraphs/ng/flung" }, // new

    { word: "bring", parts: ["br", "i", "ng"], image: "zimages/diagraphs/ng/bring" }, // new
    { word: "wring", parts: ["wr", "i", "ng"], image: "zimages/diagraphs/ng/wring" }, // new
    { word: "wrong", parts: ["wr", "o", "ng"], image: "zimages/diagraphs/ng/wrong" }, // new
    { word: "stung", parts: ["st", "u", "ng"], image: "zimages/diagraphs/ng/stung" }, // new
    { word: "sprung", parts: ["spr", "u", "ng"], image: "zimages/diagraphs/ng/sprung" }, // new

    { word: "thong", parts: ["th", "o", "ng"], image: "zimages/diagraphs/ng/thong" }, // new
    { word: "along", parts: ["a", "l", "o", "ng"], image: "zimages/diagraphs/ng/along" }, // new
    { word: "young", parts: ["y", "ou", "ng"], image: "zimages/diagraphs/ng/young" }, // new
    { word: "sitting", parts: ["s", "i", "tt", "i", "ng"], image: "zimages/diagraphs/ng/sitting" }, // new    
    { word: "ping", parts: ["p", "i", "ng"], image: "zimages/diagraphs/ng/ping" }, // new
    { word: "zing", parts: ["z", "i", "ng"], image: "zimages/diagraphs/ng/zing" } // new
  ],

  diagraphs_sh: [
    { word: "blush", parts: ["bl", "u", "sh"], image: "zimages/diagraphs/sh/blush" },
    { word: "cash", parts: ["c", "a", "sh"], image: "zimages/diagraphs/sh/cash" },
    { word: "ship", parts: ["sh", "i", "p"], image: "zimages/diagraphs/sh/ship" },
    { word: "shrimp", parts: ["sh", "r", "i", "m", "p"], image: "zimages/diagraphs/sh/shrimp" },
    { word: "shrug", parts: ["sh", "r", "u", "g"], image: "zimages/diagraphs/sh/shrug" },

    { word: "shock", parts: ["sh", "o", "ck"], image: "zimages/diagraphs/sh/shock" }, // new
    { word: "shook", parts: ["sh", "oo", "k"], image: "zimages/diagraphs/sh/shook" }, // new
    { word: "shoot", parts: ["sh", "oo", "t"], image: "zimages/diagraphs/sh/shoot" }, // new
    { word: "shack", parts: ["sh", "a", "ck"], image: "zimages/diagraphs/sh/shack" }, // new
    { word: "shell", parts: ["sh", "e", "ll"], image: "zimages/diagraphs/sh/shell" }, // new
    { word: "shelf", parts: ["sh", "e", "l", "f"], image: "zimages/diagraphs/sh/shelf" }, // new
    { word: "shrub", parts: ["sh", "r", "u", "b"], image: "zimages/diagraphs/sh/shrub" }, // new

    { word: "shade", parts: ["sh", "a", "d", "e"], image: "zimages/diagraphs/sh/shade" }, // new
    { word: "shake", parts: ["sh", "a", "k", "e"], image: "zimages/diagraphs/sh/shake" }, // new
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/diagraphs/sh/shine" }, // new
    { word: "shrine", parts: ["sh", "r", "i", "n", "e"], image: "zimages/diagraphs/sh/shrine" }, // new

    { word: "sharp", parts: ["sh", "ar", "p"], image: "zimages/diagraphs/sh/sharp" }, // new
    { word: "sheep", parts: ["sh", "ee", "p"], image: "zimages/diagraphs/sh/sheep" }, // new
    { word: "sheet", parts: ["sh", "ee", "t"], image: "zimages/diagraphs/sh/sheet" }, // new
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/diagraphs/sh/shirt" }, // new
    { word: "shore", parts: ["sh", "or", "e"], image: "zimages/diagraphs/sh/shore" }, // new
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/diagraphs/sh/short" }, // new
    { word: "shout", parts: ["sh", "ou", "t"], image: "zimages/diagraphs/sh/shout" }, // new

    { word: "shrink", parts: ["sh", "r", "i", "n", "k"], image: "zimages/diagraphs/sh/shrink" }, // new
    { word: "shrill", parts: ["sh", "r", "i", "ll"], image: "zimages/diagraphs/sh/shrill" }, // new
    { word: "shuffle", parts: ["sh", "u", "ff", "l", "e"], image: "zimages/diagraphs/sh/shuffle" }, // new

    { word: "shower", parts: ["sh", "ow", "er"], image: "zimages/diagraphs/sh/shower" }, // new
    { word: "shimmer", parts: ["sh", "i", "mm", "er"], image: "zimages/diagraphs/sh/shimmer" }, // new
    { word: "shiver", parts: ["sh", "i", "v", "er"], image: "zimages/diagraphs/sh/shiver" } // new
  ],

  diagraphs_th: [
    { word: "bath", parts: ["b", "a", "th"], image: "zimages/diagraphs/th/bath" },
    { word: "earth", parts: ["ear", "th"], image: "zimages/diagraphs/th/earth" },
    { word: "moth", parts: ["m", "o", "th"], image: "zimages/diagraphs/th/moth" },
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/diagraphs/th/sloth" },
    { word: "thick", parts: ["th", "i", "ck"], image: "zimages/diagraphs/th/thick" },
    { word: "thief", parts: ["th", "ie", "f"], image: "zimages/diagraphs/th/thief" },
    { word: "think", parts: ["th", "i", "n", "k"], image: "zimages/diagraphs/th/think" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/diagraphs/th/thorn" },
    { word: "three", parts: ["th", "r", "ee"], image: "zimages/diagraphs/th/three" },
    { word: "thumb", parts: ["th", "u", "m", "b"], image: "zimages/diagraphs/th/thumb" },
    { word: "tooth", parts: ["t", "oo", "th"], image: "zimages/diagraphs/th/tooth" },

    { word: "thank", parts: ["th", "a", "n", "k"], image: "zimages/diagraphs/th/thank" }, // new
    { word: "thin", parts: ["th", "i", "n"], image: "zimages/diagraphs/th/thin" }, // new
    { word: "thing", parts: ["th", "i", "ng"], image: "zimages/diagraphs/th/thing" }, // new
    { word: "then", parts: ["th", "e", "n"], image: "zimages/diagraphs/th/then" }, // new
    { word: "them", parts: ["th", "e", "m"], image: "zimages/diagraphs/th/them" }, // new
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/diagraphs/th/thirst" }, // new

    { word: "throb", parts: ["th", "r", "o", "b"], image: "zimages/diagraphs/th/throb" }, // new
    { word: "thud", parts: ["th", "u", "d"], image: "zimages/diagraphs/th/thud" }, // new
    { word: "thug", parts: ["th", "u", "g"], image: "zimages/diagraphs/th/thug" }, // new
    { word: "thumbs", parts: ["th", "u", "m", "b", "s"], image: "zimages/diagraphs/th/thumbs" }, // new
    { word: "thump", parts: ["th", "u", "m", "p"], image: "zimages/diagraphs/th/thump" }, // new
    { word: "thunder", parts: ["th", "u", "n", "d", "er"], image: "zimages/diagraphs/th/thunder" }, // new

    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thaw", parts: ["th", "aw"], image: "zimages/diagraphs/th/thaw" }, // new
    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new

    { word: "there", parts: ["th", "ere"], image: "zimages/diagraphs/th/there" }, // new
    { word: "these", parts: ["th", "e", "s", "e"], image: "zimages/diagraphs/th/these" }, // new
    { word: "they", parts: ["th", "ey"], image: "zimages/diagraphs/th/they" }, // new

    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new
    { word: "throw", parts: ["th", "r", "ow"], image: "zimages/diagraphs/th/throw" }, // new
    { word: "thinker", parts: ["th", "i", "n", "k", "er"], image: "zimages/diagraphs/th/thinker" }, // new

    { word: "throne", parts: ["th", "r", "o", "n", "e"], image: "zimages/diagraphs/th/throne" }, // new
    { word: "throat", parts: ["th", "r", "oa", "t"], image: "zimages/diagraphs/th/throat" }, // new
    { word: "thrive", parts: ["th", "r", "i", "v", "e"], image: "zimages/diagraphs/th/thrive" } // new
  ]
};







/* =========================================================================== */
/* ⭐⭐⭐⭐⭐ PHONICS ENGINE — SAME AS SEA BLAST ⭐⭐⭐⭐⭐ */
/* =========================================================================== */

/* one set ("?set=diagraphs_ch") or a mix ("?set=diagraphs_ch,longvowels_a") */
const urlParams = new URLSearchParams(window.location.search)
const selectedSets = (urlParams.get("set") || "controlled_or")
  .split(",")
  .map(s => s.trim())
  .filter(s => wordSets[s])

/* join the chosen sets, skipping repeated words */
let words = []
const seenWords = new Set()
selectedSets.forEach(setName=>{
  wordSets[setName].forEach(w=>{
    if(!seenWords.has(w.word)){
      seenWords.add(w.word)
      words.push(w)
    }
  })
})
if(words.length === 0) words = wordSets.controlled_or

let currentIndex = 0
let selectedLetters = []
let currentWord = null
let isBoardLocked = false

const imageEl   = document.getElementById("image")
const lettersEl = document.getElementById("letters")
const blendBtn  = document.getElementById("blendBtn")

function loadImage(basePath){

  const placeholder = "zimages/zplaceholder.png"
  imageEl.src = placeholder

  let loaded = false
  ;[".png",".jpg",".jpeg"].forEach(ext=>{
    const img = new Image()
    img.onload = ()=>{
      if(!loaded){
        loaded = true
        imageEl.src = basePath + ext
      }
    }
    img.src = basePath + ext
  })
}

function loadWord(wordObj){

  if(isBoardLocked) return

  currentWord = wordObj
  lettersEl.innerHTML = ""
  selectedLetters = []

  loadImage(wordObj.image)

  wordObj.parts.forEach((part,index)=>{
    const btn = document.createElement("button")
    btn.className = "letter-btn"
    btn.innerText = part
    btn.onclick = ()=>selectLetter(btn,index)
    lettersEl.appendChild(btn)
  })

  blendBtn.disabled = true
  blendBtn.classList.remove("ready")
}

function selectLetter(btn,index){

  if(isBoardLocked) return
  if(btn.classList.contains("selected")) return

  btn.classList.add("selected")
  selectedLetters.push(index)

  if(selectedLetters.length === currentWord.parts.length){
    blendBtn.disabled = false
    blendBtn.classList.add("ready")
  }
}

blendBtn.onclick = ()=>{

  if(isBoardLocked || !gameStarted || gameOver) return

  blendBtn.classList.remove("ready")
  blendBtn.disabled = true

  document.querySelectorAll(".letter-btn").forEach(btn=>{
    btn.classList.remove("selected")
    btn.classList.add("blended")
  })

  /* 🔒 lock the word, 🎲 wake up the dice */
  isBoardLocked = true
  setTimeout(activateDice, 800)
}

/* HEADER BUTTONS */

document.getElementById("shuffleBtn").onclick = ()=>{
  if(isBoardLocked) return
  currentIndex = Math.floor(Math.random()*words.length)
  loadWord(words[currentIndex])
}

document.getElementById("prevWordBtn").onclick = ()=>{
  if(isBoardLocked) return
  currentIndex--
  if(currentIndex < 0) currentIndex = words.length - 1
  loadWord(words[currentIndex])
}

document.getElementById("nextWordBtn").onclick = ()=>{
  if(isBoardLocked) return
  currentIndex++
  if(currentIndex >= words.length) currentIndex = 0
  loadWord(words[currentIndex])
}

document.getElementById("mainMenuBtn").onclick = ()=>{
  window.location.href = "main.html"
}

/* =========================================================================== */
/* ⭐ PHONICS ENGINE END */
/* =========================================================================== */


















/* =========================================================================== */
/* 🏙️ CITY TRACK ENGINE */
/* =========================================================================== */

/* ===================== */
/* 🎯 SETTINGS — tweak here */
/* ===================== */

const ROWS = 6
const COLS = 9

const BALLOON_RATE = 0.06   // 🎈 ~6% of road  (rarest) → float 1 tile forward
const ROCKET_RATE  = 0.10   // 🚀 ~10% of road → blast 3 tiles forward
const TORNADO_RATE = 0.10   // 🌪️ ~10% of road → carried 1, 2, 3 or 4 tiles (random)
const TRAFFIC_RATE = 0.14   // 🚦 ~14% of road → lights dance from −2 to +4, random stop
const TRAFFIC_OFFSETS = [-2, -1, 1, 2, 3, 4]
const BALLOON_JUMP = 1
const ROCKET_JUMP  = 3
const TORNADO_JUMPS = [1, 2, 3, 4]

/* 🛣️ side-road shortcuts: +5 loops across a U-bend, +3 and +2 cut corners */
const SHORTCUT_5_WANT = 1
const SHORTCUT_3_WANT = 1
const SHORTCUT_2_WANT = 1

/* 🎲 no rigging — but 5 and 6 come up half as often as 1–4 */
const ROLL_WEIGHTS = { 1:2, 2:2, 3:2, 4:2, 5:1, 6:1 }

const STEP_MS = 400         // time to zip one tile

const heroEmojis  = ["🦁","🐵","🐸","🐹","🐭","🐺","🐯","🐨","🐼","🦊"]   // front-facing faces
const plazaDeco   = ["🏢","🏬","🏪","🏫","🏥","🏦","🏨","🚏","🏪","🏢"]
const parkDeco    = ["🌳","🌲","⛲","🎡","🌷","🌻","🌳"]
/* 🛣️ highway palette: taxi yellow, cone orange, signal green, sky blue, stop red */
const neonColors  = ["#ffc312","#ff7f11","#2ecc71","#4fc3f7","#ff4757","#ffffff"]
const fireworkEmojis = ["🎆","🎇","✨","⭐"]

/* ===================== */
/* 🧠 STATE */
/* ===================== */

let players = []
let usedEmojis = new Set()
let trackPath = []        // [{r,c,key}]
let tileEls = []
let specialAt = {}        // path index → "balloon" | "rocket" | "tornado" | "traffic" | "short"
let shortcutAt = {}       // path index → { to, cells:[{r,c}] }
let carLayer = null
let currentPlayer = 0
let finishedPlayers = []
let diceState = "off"
let gameStarted = false
let gameOver = false
let shortTrack = false

/* ===================== */
/* 📦 DOM */
/* ===================== */

const racetrack = document.getElementById("racetrack")
const dice = document.getElementById("dice")
const diceStage = document.getElementById("diceStage")
const bigWrap = document.getElementById("bigWrap")
const bigDice = document.getElementById("bigDice")
const rollLabel = document.getElementById("rollLabel")
const diceSound = document.getElementById("diceSound")
const turnEmoji = document.getElementById("turnEmoji")
const turnText = document.getElementById("turnText")
const popup = document.getElementById("playerPopup")
const startRaceBtn = document.getElementById("startRaceBtn")
const animalChoicesDiv = document.getElementById("animalChoices")
const playerCountBtns = document.getElementById("playerCountBtns")

const wait = ms => new Promise(r => setTimeout(r, ms))
const pick = arr => arr[Math.floor(Math.random()*arr.length)]
const cellKey = (r,c) => r*COLS + c


/* ===================================================== */
/* 👥 PLAYER POPUP */
/* ===================================================== */

function initPlayerPopup(){
  popup.style.display = "flex"
  players = []
  usedEmojis.clear()
  playerCountBtns.innerHTML = ""
  animalChoicesDiv.innerHTML = ""
  startRaceBtn.disabled = true

  for(let i = 2; i <= 8; i++){
    const btn = document.createElement("button")
    btn.textContent = i
    btn.onclick = ()=>{
      playerCountBtns.querySelectorAll("button").forEach(b=>b.classList.remove("selected"))
      btn.classList.add("selected")
      renderHeroChoices(i)
    }
    playerCountBtns.appendChild(btn)
  }
}

function renderHeroChoices(count){
  animalChoicesDiv.innerHTML = ""
  players = new Array(count).fill(null)
  usedEmojis.clear()
  startRaceBtn.disabled = true

  for(let i = 0; i < count; i++){
    const row = document.createElement("div")
    row.className = "player-row"
    const label = document.createElement("span")
    label.textContent = `Player ${i + 1}: `
    row.appendChild(label)
    heroEmojis.forEach(emoji=>{
      const btn = document.createElement("button")
      btn.textContent = emoji
      btn.onclick = ()=>toggleEmojiSelection(i, btn, emoji)
      row.appendChild(btn)
    })
    animalChoicesDiv.appendChild(row)
  }
}

function toggleEmojiSelection(playerIndex, btn, emoji){
  if(players[playerIndex] && players[playerIndex].emoji === emoji){
    players[playerIndex] = null
    btn.classList.remove("selected")
    usedEmojis.delete(emoji)
    updateDisabledButtons()
    startRaceBtn.disabled = true
    return
  }
  if(players[playerIndex]) usedEmojis.delete(players[playerIndex].emoji)
  if(usedEmojis.has(emoji)) return
  players[playerIndex] = { emoji }
  btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("selected"))
  btn.classList.add("selected")
  usedEmojis.add(emoji)
  updateDisabledButtons()
  if(players.every(p => p && p.emoji)) startRaceBtn.disabled = false
}

function updateDisabledButtons(){
  document.querySelectorAll("#animalChoices button").forEach(btn=>{
    btn.disabled = usedEmojis.has(btn.textContent) && !btn.classList.contains("selected")
  })
}

startRaceBtn.onclick = ()=>{
  popup.style.display = "none"
  startGame()
}


/* ===================================================== */
/* 🛣️ TRACK GENERATION */
/* ===================================================== */

function generatePath(){

  const dirs = [{r:0,c:1},{r:1,c:0},{r:0,c:-1},{r:-1,c:0}]
  const inBounds = (r,c) => r >= 0 && r < ROWS && c >= 0 && c < COLS
  let best = null

  for(let attempt = 0; attempt < 300; attempt++){
    const grid = Array.from({length:ROWS}, ()=>Array(COLS).fill(0))
    const startR = Math.floor(Math.random()*(ROWS-2)) + 1
    const startC = Math.floor(Math.random()*(COLS-2)) + 1
    let dir = Math.floor(Math.random()*4)
    const path = [{r:startR, c:startC}]
    grid[startR][startC] = 1

    for(let i = 0; i < 200; i++){
      const last = path[path.length-1]
      const d = dirs[dir]
      const nr = last.r + d.r, nc = last.c + d.c
      if(!inBounds(nr,nc) || grid[nr][nc]){ dir = (dir + 1) % 4; continue }
      const touching = dirs.filter(x =>
        inBounds(nr+x.r, nc+x.c) && grid[nr+x.r][nc+x.c] &&
        !(nr+x.r === last.r && nc+x.c === last.c)
      )
      if(touching.length > 0){ dir = (dir + 1) % 4; if(i > 120) break; continue }
      grid[nr][nc] = 1
      path.push({r:nr, c:nc})
      if(Math.random() < 0.3) dir = (dir + (Math.random() < 0.5 ? 1 : 3)) % 4
    }
    if(!best || path.length > best.length) best = path
    if(path.length >= 24 && path.length <= 32) return path
  }
  return best
}

/* find a side road (through empty city blocks) from road tile a to road tile b */
function sideRoad(a, b, maxCells, road, reserved){
  const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
  const ok = (r,c) => r >= 0 && r < ROWS && c >= 0 && c < COLS &&
                      !road.has(cellKey(r,c)) && !reserved.has(cellKey(r,c))
  const touchesB = (r,c) => Math.abs(r - b.r) + Math.abs(c - b.c) === 1
  let queue = []
  dirs.forEach(([dr,dc])=>{ if(ok(a.r+dr, a.c+dc)) queue.push([{r:a.r+dr, c:a.c+dc}]) })
  while(queue.length){
    const next = []
    for(const cells of queue){
      const end = cells[cells.length-1]
      if(touchesB(end.r, end.c)) return cells
      if(cells.length >= maxCells) continue
      dirs.forEach(([dr,dc])=>{
        const r = end.r+dr, c = end.c+dc
        if(ok(r,c) && !cells.some(x => x.r === r && x.c === c)) next.push([...cells, {r,c}])
      })
    }
    queue = next
  }
  return null
}

function findShortcuts(path){
  const road = new Set(path.map(p => cellKey(p.r, p.c)))
  const reserved = new Set()
  const last = path.length - 1
  const found = {}
  const used = new Set()

  const tryGain = (gain, maxCells, want)=>{
    const starts = []
    for(let i = 2; i + gain <= last - 1; i++) starts.push(i)
    starts.sort(()=>Math.random() - 0.5)
    let got = 0
    for(const i of starts){
      if(got >= want) break
      const j = i + gain
      if([i-1,i,i+1,j].some(k => used.has(k))) continue
      const cells = sideRoad(path[i], path[j], maxCells, road, reserved)
      if(cells){
        found[i] = { to:j, gain, cells }
        cells.forEach(c => reserved.add(cellKey(c.r, c.c)))
        used.add(i); used.add(j)
        got++
      }
    }
  }
  tryGain(5, 3, SHORTCUT_5_WANT)       // loops across a U-bend
  tryGain(3, 2, SHORTCUT_3_WANT)       // short hop across a bend
  tryGain(2, 1, SHORTCUT_2_WANT)       // cut across a corner
  return found
}

/* which sides of a cell connect to its neighbours (for lane lines) */
function sidesBetween(here, prev, next){
  const sides = []
  ;[prev, next].forEach(n=>{
    if(!n) return
    if(n.c < here.c) sides.push("l")
    if(n.c > here.c) sides.push("r")
    if(n.r < here.r) sides.push("t")
    if(n.r > here.r) sides.push("b")
  })
  return sides
}

function addLanes(div, sides, cls){
  sides.forEach(side=>{
    const lane = document.createElement("span")
    lane.className = `lane lane-${side} ${cls}`
    div.appendChild(lane)
  })
}

function buildTrack(){

  racetrack.innerHTML = ""
  tileEls = []
  specialAt = {}
  shortcutAt = {}

  /* pick a road that has good shortcuts */
  let path = null, shortcuts = {}, bestScore = -1
  for(let t = 0; t < 60; t++){
    let p = generatePath()
    if(shortTrack) p = p.slice(0, 15 + Math.floor(Math.random()*4))
    const sc = findShortcuts(p)
    const gains = Object.values(sc).map(s => s.gain)
    const score = (gains.includes(5) ? 2 : 0) + (gains.includes(3) ? 1 : 0) + (gains.includes(2) ? 1 : 0)
    if(score > bestScore){ bestScore = score; path = p; shortcuts = sc }
    if(score >= 4) break
  }

  trackPath = path.map(p => ({...p, key: cellKey(p.r, p.c)}))
  shortcutAt = shortcuts
  const indexOfKey = {}
  trackPath.forEach((p,k) => indexOfKey[p.key] = k)
  const last = trackPath.length - 1
  const roadCount = last - 1

  /* side-road cells */
  const sideCells = {}
  Object.entries(shortcutAt).forEach(([i, s])=>{
    specialAt[i] = "short"
    const seq = [trackPath[i], ...s.cells, trackPath[s.to]]
    s.cells.forEach((c, m)=>{
      sideCells[cellKey(c.r, c.c)] = { sides: sidesBetween(c, seq[m], seq[m+2]), gain: s.gain }
    })
  })

  /* specials (never next to each other, rarest first) */
  const free = k => !specialAt[k] && !specialAt[k-1] && !specialAt[k+1]
  const shuffled = (from, to) => {
    const a = []
    for(let k = from; k <= to; k++) a.push(k)
    return a.sort(()=>Math.random() - 0.5)
  }
  const place = (type, from, to, want, needFree = true) => {
    let n = 0
    shuffled(from, to).forEach(k=>{
      if(n < want && (needFree ? free(k) : !specialAt[k])){ specialAt[k] = type; n++ }
    })
    /* still short (busy road)? relax the spacing rule to reach the target */
    shuffled(from, to).forEach(k=>{
      if(n < want && !specialAt[k]){ specialAt[k] = type; n++ }
    })
  }
  place("traffic", 3, last - 5, Math.max(1, Math.round(roadCount * TRAFFIC_RATE)))
  place("tornado", 3, last - 6, Math.max(1, Math.round(roadCount * TORNADO_RATE)))
  place("rocket",  3, last - 5, Math.max(1, Math.round(roadCount * ROCKET_RATE)))
  place("balloon", 2, last - 2, Math.round(roadCount * BALLOON_RATE), false)

  for(let r = 0; r < ROWS; r++){
    for(let c = 0; c < COLS; c++){

      const key = cellKey(r, c)
      const div = document.createElement("div")
      div.className = "tile"

      if(key in indexOfKey){

        const k = indexOfKey[key]
        div.classList.add("road")
        addLanes(div, sidesBetween(trackPath[k], trackPath[k-1], trackPath[k+1]), "main")

        if(k === 0){
          div.classList.add("start")
          div.innerHTML += `<span class="start-sign">🏁</span><span class="go-badge">GO!</span>`
        }else if(k === last){
          div.classList.add("end")
          div.innerHTML += `<span class="beam b1"></span><span class="beam b2"></span><span class="trophy">🏆</span>`
        }else if(specialAt[k]){
          div.classList.add("special", specialAt[k])
          const icon = document.createElement("span")
          icon.className = "special-icon"
          icon.textContent = { balloon:"🎈", rocket:"🚀", tornado:"🌪️", traffic:"🚦", short:"🛣️" }[specialAt[k]]
          icon.style.animationDelay = (-Math.random()*2) + "s"
          div.appendChild(icon)
          if(specialAt[k] === "short"){
            const badge = document.createElement("span")
            badge.className = "short-badge"
            badge.textContent = "+" + shortcutAt[k].gain
            div.appendChild(badge)
          }
        }

      }else if(sideCells[key]){

        /* 🛣️ glowing side road */
        div.classList.add("road", "side")
        addLanes(div, sideCells[key].sides, "neon")

      }else{

        /* 🏙️ city block — green park or sunny plaza */
        const park = true                     // 🌳 green park tiles only
        div.classList.add("block", "park")
        div.style.setProperty("--td", (-Math.random()*4) + "s")
        if(Math.random() < 0.36){
          const span = document.createElement("span")
          span.className = "deco"
          span.textContent = pick(Math.random() < 0.6 ? parkDeco : plazaDeco)
          span.style.animationDuration = (2 + Math.random()*2) + "s"
          span.style.animationDelay = (-Math.random()*3) + "s"
          div.appendChild(span)
        }
      }

      racetrack.appendChild(div)
      tileEls.push(div)
    }
  }

  carLayer = document.createElement("div")
  carLayer.id = "carLayer"
  racetrack.appendChild(carLayer)
}


/* ===================================================== */
/* 🦸 PLAYERS ON THE TRACK */
/* ===================================================== */

function cellCenter(r, c){
  const t = tileEls[cellKey(r, c)]
  return { x: t.offsetLeft + t.offsetWidth/2, y: t.offsetTop + t.offsetHeight/2 }
}

function tileCenter(k){
  return cellCenter(trackPath[k].r, trackPath[k].c)
}

function placeCars(){
  carLayer.innerHTML = ""
  players.forEach(p=>{
    p.position = 0
    p.finished = false
    p.rank = null
    p.rolls = 0
    p.moving = false

    const car = document.createElement("div"); car.className = "car"
    const fx  = document.createElement("div"); fx.className = "car-fx"
    const emo = document.createElement("span"); emo.className = "car-emoji"
    emo.textContent = p.emoji
    fx.appendChild(emo); car.appendChild(fx)
    carLayer.appendChild(car)
    p.el = car; p.fx = fx
  })
  layoutCars()
}

function layoutCars(){
  const groups = {}
  players.forEach(p=>{
    if(p.moving) return
    ;(groups[p.position] = groups[p.position] || []).push(p)
  })
  Object.entries(groups).forEach(([pos, list])=>{
    const c = tileCenter(+pos)
    const n = list.length
    list.forEach((p,i)=>{
      let ox = 0, oy = 0
      if(n > 1){
        const a = (i / n) * Math.PI * 2 - Math.PI/2
        ox = Math.cos(a) * 26
        oy = Math.sin(a) * 22
      }
      p.el.style.left = (c.x + ox) + "px"
      p.el.style.top  = (c.y + oy) + "px"
      p.el.style.setProperty("--s", n === 1 ? 1 : n === 2 ? 0.58 : 0.46)
    })
  })
}

window.addEventListener("resize", ()=>{ if(gameStarted) layoutCars() })

function updateTurnUI(){
  const p = players[currentPlayer]
  if(!p) return
  turnEmoji.textContent = p.emoji
  turnText.textContent = "'s turn"
  players.forEach((q,i)=> q.el.classList.toggle("my-turn", i === currentPlayer && !q.finished))
}


/* ===================================================== */
/* 🎲 ROAD-SIGN DICE */
/* ===================================================== */

const PIPS = { 1:[5], 2:[1,9], 3:[1,5,9], 4:[1,3,7,9], 5:[1,3,5,7,9], 6:[1,3,4,6,7,9] }
/* each number is a different road-sign colour */
const signFace = { 1:"#1e8f4e", 2:"#1565c0", 3:"#ff7f11", 4:"#e8232a", 5:"#8d5524", 6:"#00897b" }

function setFace(el, n){
  el.dataset.face = n
  el.style.setProperty("--sign", signFace[n])
  let html = ""
  for(let i = 1; i <= 9; i++) html += `<span class="pip${PIPS[n].includes(i) ? " on" : ""}"></span>`
  el.innerHTML = html
}

setFace(dice, 1)
setFace(bigDice, 1)

function activateDice(){
  if(gameOver) return
  diceState = "ready"
  dice.className = "dice active"
  turnText.textContent = " tap the dice!"
}

function disableDice(){
  diceState = "off"
  dice.className = "dice off"
}

dice.onclick = ()=>{
  if(diceState !== "ready") return
  diceState = "rolling"
  dice.className = "dice"
  turnText.textContent = "'s turn"
  rollDice()
}


/* ===================================================== */
/* 🎲 DICE RESULT */
/* ===================================================== */

function chooseRoll(p){
  const total = Object.values(ROLL_WEIGHTS).reduce((a, b) => a + b, 0)
  let r = Math.random() * total
  for(const face of [1,2,3,4,5,6]){
    r -= ROLL_WEIGHTS[face]
    if(r < 0) return face
  }
  return 1
}


/* ===================================================== */
/* 🎲 BIG DICE ROLL — 3D flips, then a neon-sign flicker */
/* ===================================================== */

function randomFaceNot(...not){
  let f
  do{ f = 1 + Math.floor(Math.random()*6) }while(not.includes(f))
  return f
}

/* one 3D flip; the face changes when the dice is edge-on */
async function flip(el, axis, ms, newFace){
  setTimeout(()=>setFace(el, newFace), ms/2)
  await el.animate([
    { transform:`rotate${axis}(0deg) scale(1)` },
    { transform:`rotate${axis}(90deg) scale(0.85)`, offset:0.5 },
    { transform:`rotate${axis}(180deg) scale(1)` }
  ], { duration:ms, easing:"ease-in-out" }).finished
}

/* neon sign flicker: dims, buzzes, then lights up with the new number */
async function flicker(el, newFace, ms){
  el.classList.add("flick")
  await el.animate([
    { opacity:1, filter:"brightness(1)" },
    { opacity:0.25, filter:"brightness(0.4)", offset:0.2 },
    { opacity:0.9, filter:"brightness(1.2)", offset:0.35 },
    { opacity:0.2, filter:"brightness(0.3)", offset:0.5 },
    { opacity:1, filter:"brightness(1.6)", offset:0.75 },
    { opacity:1, filter:"brightness(1)" }
  ], { duration:ms }).finished
  el.classList.remove("flick")
}

async function rollDice(){

  const p = players[currentPlayer]
  const result = chooseRoll(p)

  try{ diceSound.currentTime = 0; diceSound.play().catch(()=>{}) }catch(e){}

  rollLabel.textContent = ""
  rollLabel.classList.remove("show")
  coverField(diceStage)
  diceStage.classList.add("show")
  bigDice.className = "dice big rolling"
  setFace(bigDice, randomFaceNot())

  const from = dice.getBoundingClientRect()
  const to = bigDice.getBoundingClientRect()
  const dx = (from.left + from.width/2) - (to.left + to.width/2)
  const dy = (from.top + from.height/2) - (to.top + to.height/2)
  const s = from.width / to.width

  await bigWrap.animate([
    { transform:`translate(${dx}px, ${dy}px) scale(${s})`, opacity:0.4 },
    { transform:"translate(0,0) scale(1)", opacity:1 }
  ], { duration:450, easing:"cubic-bezier(.2,.9,.3,1.2)", fill:"forwards" }).finished

  /* 🔄 fast 3D flips */
  let face = +bigDice.dataset.face
  for(let i = 0; i < 8; i++){
    face = randomFaceNot(face)
    await flip(bigDice, i % 2 ? "Y" : "X", 230, face)
  }

  /* 💡 settles on a number... then the neon sign flickers 2–4 times to the real number */
  setFace(bigDice, face = randomFaceNot(result, face))
  await wait(500)
  const changes = 2 + Math.floor(Math.random()*3)
  for(let j = 1; j <= changes; j++){
    const isLast = j === changes
    const nf = isLast ? result : randomFaceNot(result, face)
    setTimeout(()=>setFace(bigDice, face = nf), 160 + j*30)
    await flicker(bigDice, nf, 520 + j*80)
    if(!isLast) await wait(260 + j*120)
  }

  /* 🎆 landed */
  bigDice.className = "dice big landed"
  rollLabel.innerHTML = `${p.emoji} rolled <b>${result}</b>!`
  rollLabel.classList.add("show")
  neonRings(bigDice, 3)
  burstEmoji(bigDice, fireworkEmojis, 22)
  burstDots(bigDice, 40)
  await wait(3100)

  await bigWrap.animate([
    { transform:"translate(0,0) scale(1)", opacity:1 },
    { transform:`translate(${dx}px, ${dy}px) scale(${s})`, opacity:0.4 }
  ], { duration:380, easing:"ease-in", fill:"forwards" }).finished

  diceStage.classList.remove("show")
  bigWrap.getAnimations().forEach(a=>a.cancel())
  setFace(dice, result)

  await moveTurn(p, result)
}


/* ===================================================== */
/* 🎊 EFFECT HELPERS */
/* ===================================================== */

function neonConfetti(ms, colors = neonColors){
  const loop = setInterval(()=>{
    for(let i = 0; i < 14; i++){
      const c = document.createElement("div")
      c.className = "confetti-piece"
      c.style.background = pick(colors)
      c.style.boxShadow = `0 0 6px ${c.style.background}`
      const w = 7 + Math.random()*9
      c.style.width = w + "px"
      c.style.height = w * (0.5 + Math.random()*1.2) + "px"
      c.style.left = Math.random()*100 + "vw"
      c.style.setProperty("--drift", (Math.random() - 0.5) * 220 + "px")
      c.style.setProperty("--spin", (Math.random()*900 + 360) * (Math.random() < 0.5 ? -1 : 1) + "deg")
      const dur = 1.8 + Math.random()*1.4
      c.style.animationDuration = dur + "s"
      document.body.appendChild(c)
      setTimeout(()=>c.remove(), dur*1000 + 50)
    }
  }, 100)
  setTimeout(()=>clearInterval(loop), ms)
}

/* 🎆 fireworks popping all over the screen */
function fireworksShow(ms){
  const loop = setInterval(()=>{
    const x = 10 + Math.random()*80, y = 10 + Math.random()*50
    const col = pick(neonColors)
    for(let i = 0; i < 26; i++){
      const d = document.createElement("div")
      d.className = "spark"
      d.style.left = x + "vw"
      d.style.top = y + "vh"
      d.style.background = col
      d.style.boxShadow = `0 0 8px ${col}, 0 0 16px ${col}`
      const a = (i / 26) * Math.PI * 2
      const dist = 80 + Math.random()*90
      d.style.setProperty("--x", Math.cos(a)*dist + "px")
      d.style.setProperty("--y", Math.sin(a)*dist + "px")
      document.body.appendChild(d)
      setTimeout(()=>d.remove(), 1300)
    }
  }, 380)
  setTimeout(()=>clearInterval(loop), ms)
}

function burstDots(el, count, colors = neonColors){
  const r = el.getBoundingClientRect()
  const cx = r.left + r.width/2, cy = r.top + r.height/2
  for(let i = 0; i < count; i++){
    const d = document.createElement("div")
    d.className = "burst-dot"
    const size = 8 + Math.random()*14
    d.style.width = size + "px"
    d.style.height = size + "px"
    const col = pick(colors)
    d.style.background = col
    d.style.boxShadow = `0 0 8px ${col}`
    d.style.left = cx + "px"
    d.style.top = cy + "px"
    const a = (i / count) * Math.PI * 2 + Math.random()*0.3
    const dist = 160 + Math.random()*200
    d.style.setProperty("--x", Math.cos(a)*dist + "px")
    d.style.setProperty("--y", Math.sin(a)*dist + "px")
    const dur = 0.8 + Math.random()*0.6
    d.style.animationDuration = dur + "s"
    document.body.appendChild(d)
    setTimeout(()=>d.remove(), dur*1000 + 50)
  }
}

function burstEmoji(el, list, count){
  const r = el.getBoundingClientRect()
  const cx = r.left + r.width/2, cy = r.top + r.height/2
  for(let i = 0; i < count; i++){
    const d = document.createElement("div")
    d.className = "burst-dot emoji"
    d.textContent = pick(list)
    d.style.fontSize = (40 + Math.random()*34) + "px"
    d.style.left = cx + "px"
    d.style.top = cy + "px"
    const a = (i / count) * Math.PI * 2 + Math.random()*0.4
    const dist = 150 + Math.random()*170
    d.style.setProperty("--x", Math.cos(a)*dist + "px")
    d.style.setProperty("--y", Math.sin(a)*dist + "px")
    const dur = 0.9 + Math.random()*0.6
    d.style.animationDuration = dur + "s"
    document.body.appendChild(d)
    setTimeout(()=>d.remove(), dur*1000 + 50)
  }
}

/* expanding neon rings around an element */
function neonRings(el, count){
  const r = el.getBoundingClientRect()
  for(let i = 0; i < count; i++){
    setTimeout(()=>{
      const ring = document.createElement("div")
      ring.className = "neon-ring"
      ring.style.left = (r.left + r.width/2) + "px"
      ring.style.top = (r.top + r.height/2) + "px"
      ring.style.borderColor = pick(neonColors)
      document.body.appendChild(ring)
      setTimeout(()=>ring.remove(), 900)
    }, i*180)
  }
}

function fxAt(x, y, className, ms, text){
  const e = document.createElement("div")
  e.className = className
  e.style.left = x + "px"
  e.style.top = y + "px"
  if(text) e.textContent = text
  carLayer.appendChild(e)
  setTimeout(()=>e.remove(), ms)
  return e
}

function addTileFx(k, className, ms){
  const c = tileCenter(k)
  return fxAt(c.x, c.y, className, ms)
}

/* neon speed streak between two points */
function speedStreak(a, b, color){
  const len = Math.hypot(b.x - a.x, b.y - a.y)
  const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI
  const s = fxAt(a.x, a.y, "speed-streak", 700)
  s.style.width = len + "px"
  s.style.transform = `rotate(${ang}deg)`
  if(color) s.style.setProperty("--c", color)
  return s
}

/* ⚡ zip to a point (used for road tiles and side-road cells) */
async function zipTo(p, pt, ms = STEP_MS, streak = true){
  const r = p.el.getBoundingClientRect(), L = carLayer.getBoundingClientRect()
  const from = { x: r.left + r.width/2 - L.left, y: r.top + r.height/2 - L.top }
  if(streak) speedStreak(from, pt)
  const dx = pt.x - from.x

  p.el.style.transitionDuration = ms + "ms"
  p.el.style.left = pt.x + "px"
  p.el.style.top = pt.y + "px"
  p.el.style.setProperty("--s", 1)

  p.fx.animate([
    { transform:"skewX(0deg) translateY(0)" },
    { transform:`skewX(${dx >= 0 ? -12 : 12}deg) translateY(-8px)`, offset:0.4 },
    { transform:"skewX(0deg) translateY(0)" }
  ], { duration:ms })
  await wait(ms + 30)
}

async function stepTo(p, k, ms = STEP_MS, streak = true){
  p.position = k
  await zipTo(p, tileCenter(k), ms, streak)
}


/* ===================================================== */
/* 🪧 SPECIAL POPUP — white box with neon border */
/* ===================================================== */

const fieldOverlay = document.createElement("div")
fieldOverlay.id = "fieldOverlay"
document.body.appendChild(fieldOverlay)

function coverField(el){
  const r = racetrack.getBoundingClientRect()
  el.style.left = r.left + "px"
  el.style.top = r.top + "px"
  el.style.width = r.width + "px"
  el.style.height = r.height + "px"
}

/* opts: { icon, title, num, fx, line, spinNums } */
async function specialPopup(opts){
  coverField(fieldOverlay)
  const numHTML = opts.num != null
    ? `<div class="sp-steps"><span class="sp-num">+${opts.num}</span> step${opts.num === 1 ? "" : "s"}</div>`
    : `<div class="sp-line">${opts.line || ""}</div>`
  fieldOverlay.innerHTML = `
    <div class="sp-rays ${opts.fx}"></div>
    <div class="sp-box sp-${opts.fx}">
      <div class="sp-icon">${opts.icon}</div>
      <div class="sp-title">${opts.title}</div>
      ${numHTML}
    </div>`
  fieldOverlay.classList.add("show")
  const box = fieldOverlay.querySelector(".sp-box")
  burstEmoji(box, opts.burst || ["✨","⭐"], 18)

  /* 🌪️ spinning number that stops on the real one */
  if(opts.spinNums){
    const numEl = fieldOverlay.querySelector(".sp-num")
    for(let i = 0; i < 10; i++){
      numEl.textContent = "+" + opts.spinNums[i % opts.spinNums.length]
      await wait(70 + i*16)
    }
    numEl.textContent = "+" + opts.num
    numEl.classList.add("reveal")
    burstDots(numEl, 30)
    await wait(1400)
  }else{
    await wait(2000)
  }

  fieldOverlay.classList.add("hide")
  await wait(300)
  fieldOverlay.className = ""
  fieldOverlay.innerHTML = ""
}

/* fly along an arc between two points */
function arcFly(p, from, to, peakLift, ms, spin){
  const peak = Math.max(Math.min(from.y, to.y) - peakLift, -60)
  if(spin) p.fx.animate(spin, { duration:ms, easing:"ease-in-out" })
  return p.el.animate([
    { left:from.x + "px", top:from.y + "px", easing:"cubic-bezier(.3,0,.6,1)" },
    { left:(from.x + to.x)/2 + "px", top:peak + "px", offset:0.5, easing:"cubic-bezier(.4,0,.7,1)" },
    { left:to.x + "px", top:to.y + "px" }
  ], { duration:ms }).finished
}

function jumpTo(p, target){
  p.position = target
  const to = tileCenter(target)
  p.el.style.transition = "none"
  p.el.style.left = to.x + "px"
  p.el.style.top = to.y + "px"
  return to
}


/* ===================================================== */
/* 🎈 +1 BALLOON FLOAT */
/* ===================================================== */

async function balloonBonus(p){
  const last = trackPath.length - 1
  await specialPopup({ icon:"🎈", title:"UP, UP & AWAY!", num:BALLOON_JUMP, fx:"balloon", burst:["🎈","✨","🎈"] })

  /* a balloon ties on and lifts the hero */
  const balloon = document.createElement("span")
  balloon.className = "tied-balloon"
  balloon.textContent = "🎈"
  p.el.appendChild(balloon)
  await p.fx.animate([
    { transform:"translateY(0)" }, { transform:"translateY(-40px) rotate(-6deg)" }
  ], { duration:700, easing:"ease-out", fill:"forwards" }).finished

  /* gently drift to the next tile */
  const from = tileCenter(p.position)
  const to = jumpTo(p, Math.min(p.position + BALLOON_JUMP, last))
  const sway = p.fx.animate([
    { transform:"translateY(-40px) rotate(-6deg)" },
    { transform:"translateY(-55px) rotate(6deg)" },
    { transform:"translateY(-40px) rotate(-6deg)" }
  ], { duration:800, iterations:2 })
  await p.el.animate([
    { left:from.x + "px", top:from.y + "px" },
    { left:to.x + "px", top:to.y + "px" }
  ], { duration:1600, easing:"ease-in-out" }).finished
  sway.cancel()

  /* 💥 POP! */
  const r = balloon.getBoundingClientRect(), L = carLayer.getBoundingClientRect()
  balloon.remove()
  fxAt(r.left + r.width/2 - L.left, r.top + r.height/2 - L.top, "pop-big", 600, "💥")
  burstDots(p.el, 26)
  await p.fx.animate([
    { transform:"translateY(-40px)" }, { transform:"translateY(0) scale(1.15,0.85)" }, { transform:"translateY(0) scale(1)" }
  ], { duration:450, easing:"ease-in", fill:"forwards" }).finished
  p.fx.getAnimations().forEach(a=>a.cancel())
  p.el.style.transition = ""
}


/* ===================================================== */
/* 🚀 +3 ROCKET BLAST */
/* ===================================================== */

async function rocketBonus(p){
  const last = trackPath.length - 1
  neonConfetti(2400)                         // +3 is a big one — celebrate!
  await specialPopup({ icon:"🚀", title:"BLAST OFF!", num:ROCKET_JUMP, fx:"rocket", burst:["🚀","🔥","⭐"] })

  /* 3… 2… 1… countdown with shaking + smoke */
  const c = tileCenter(p.position)
  for(const n of ["3","2","1"]){
    fxAt(c.x, c.y - 70, "countdown", 500, n)
    fxAt(c.x + (Math.random()*30 - 15), c.y + 34, "smoke-puff", 900)
    p.fx.animate([
      { transform:"translateX(0)" }, { transform:"translateX(-5px)" }, { transform:"translateX(5px)" }, { transform:"translateX(0)" }
    ], { duration:150, iterations:3 })
    await wait(450)
  }

  /* launch! */
  const rocket = document.createElement("span")
  rocket.className = "under-rocket"
  rocket.textContent = "🚀"
  p.el.appendChild(rocket)
  const from = tileCenter(p.position)
  const to = jumpTo(p, Math.min(p.position + ROCKET_JUMP, last))
  const trail = setInterval(()=>{
    const r = p.el.getBoundingClientRect(), L = carLayer.getBoundingClientRect()
    fxAt(r.left + r.width/2 - L.left, r.top + r.height - L.top, "trail-emoji", 700, pick(["🔥","✨","⭐"]))
  }, 60)
  await arcFly(p, from, to, 230, 1400, [
    { transform:"rotate(0deg) scale(1)" }, { transform:"rotate(-20deg) scale(1.4)", offset:0.4 },
    { transform:"rotate(15deg) scale(1.4)", offset:0.7 }, { transform:"rotate(0deg) scale(1)" }
  ])
  clearInterval(trail)
  rocket.remove()

  /* 💥 BOOM landing */
  p.el.style.transition = ""
  fxAt(to.x, to.y, "pop-big", 700, "💥")
  addTileFx(p.position, "shock-ring", 800)
  burstEmoji(p.el, ["⭐","✨","🎆"], 20)
  neonConfetti(1500)
}


/* ===================================================== */
/* 🌪️ +1 / +2 / +3 / +4 TORNADO */
/* ===================================================== */

async function tornadoBonus(p){
  const last = trackPath.length - 1
  const gain = pick(TORNADO_JUMPS)
  if(gain >= 3) neonConfetti(2400)
  await specialPopup({ icon:"🌪️", title:"TORNADO!", num:gain, fx:"tornado", burst:["🌪️","🍃","💨"], spinNums:TORNADO_JUMPS })

  /* the tornado arrives and lifts the hero */
  const c = tileCenter(p.position)
  const twister = fxAt(c.x, c.y, "twister", 99999, "🌪️")
  await wait(500)
  const spinUp = p.fx.animate([
    { transform:"translateY(0) rotate(0deg)" },
    { transform:"translateY(-60px) rotate(720deg) scale(0.9)" }
  ], { duration:700, easing:"ease-in", fill:"forwards" })
  await spinUp.finished
  const spinning = p.fx.animate([
    { transform:"translateY(-60px) rotate(0deg) scale(0.9)" },
    { transform:"translateY(-60px) rotate(360deg) scale(0.9)" }
  ], { duration:350, iterations:Infinity })

  /* 🌪️ the tornado grows 4x around the spinning hero */
  twister.classList.add("huge")
  await wait(450)

  /* carried along the road */
  const debris = setInterval(()=>{
    const r = p.el.getBoundingClientRect(), L = carLayer.getBoundingClientRect()
    const e = fxAt(r.left + r.width/2 - L.left, r.top + r.height/2 - L.top + 40, "debris", 900, pick(["🍃","💨","🍂","📰"]))
    e.style.setProperty("--x", (Math.random()*120 - 60) + "px")
    e.style.setProperty("--y", (Math.random()*-80 - 20) + "px")
  }, 90)
  for(let i = 0; i < gain && p.position < last; i++){
    p.position++
    const pt = tileCenter(p.position)
    twister.style.transition = "left 0.42s ease-in-out, top 0.42s ease-in-out"
    twister.style.left = pt.x + "px"
    twister.style.top = pt.y + "px"
    await zipTo(p, pt, 420, false)
  }
  clearInterval(debris)

  /* drop down */
  spinning.cancel(); spinUp.cancel()
  await p.fx.animate([
    { transform:"translateY(-60px) rotate(0deg)" },
    { transform:"translateY(0) rotate(0deg) scale(1.2,0.8)", offset:0.8 },
    { transform:"translateY(0) scale(1)" }
  ], { duration:500, easing:"ease-in" }).finished
  twister.classList.remove("huge")
  twister.classList.add("leave")
  setTimeout(()=>twister.remove(), 700)
  burstEmoji(p.el, ["💨","🍃","✨"], 14)
  if(gain >= 3) neonConfetti(1500)
}


/* ===================================================== */
/* 🛣️ SHORTCUT SIDE ROAD (+2 / +5) */
/* ===================================================== */

async function shortcutBonus(p){
  const sc = shortcutAt[p.position]
  if(sc.gain === 5) neonConfetti(2200)
  await specialPopup({ icon:"🛣️", title:"SHORTCUT!", num:sc.gain, fx:"short", burst:["🛣️","✨","🚦"] })

  /* light up the side road */
  sc.cells.forEach(c => tileEls[cellKey(c.r, c.c)].classList.add("lit"))
  p.el.classList.add("turbo")

  for(const c of sc.cells){
    await zipTo(p, cellCenter(c.r, c.c), 380)
  }
  await stepTo(p, sc.to, 380)

  p.el.classList.remove("turbo")
  setTimeout(()=>sc.cells.forEach(c => tileEls[cellKey(c.r, c.c)].classList.remove("lit")), 600)
  burstEmoji(p.el, ["✨","⭐"], 12)
}


/* ===================================================== */
/* 🚦 TRAFFIC LIGHT — lights play across the road like piano keys */
/* ===================================================== */

async function trafficBonus(p){
  const last = trackPath.length - 1
  const here = p.position

  /* which tiles can light up: −2 … +4 (inside the track) */
  const keys = []
  for(let o = -2; o <= 4; o++){
    const k = here + o
    if(k >= 0 && k <= last) keys.push(k)
  }
  const options = TRAFFIC_OFFSETS.map(o => here + o).filter(k => k >= 0 && k <= last)
  const target = pick(options)

  await specialPopup({ icon:"🚦", title:"TRAFFIC LIGHT!", fx:"traffic", line:"Where will you go?", burst:["🚦","🎵","✨"] })

  const colourOf = k => k < here ? "red" : k === here ? "amber" : "green"
  const light = async (k, ms, note = true) => {
    const t = tileEls[trackPath[k].key]
    t.classList.add("keylight", "kl-" + colourOf(k))
    if(note){
      const c = tileCenter(k)
      fxAt(c.x + (Math.random()*20 - 10), c.y - 30, "note-pop", 800, pick(["🎵","🎶","♪"]))
    }
    await wait(ms)
    t.classList.remove("keylight", "kl-red", "kl-amber", "kl-green")
  }

  /* 🎹 two piano runs: up the keys and back down */
  for(let run = 0; run < 2; run++){
    for(const k of keys) await light(k, 90)
    for(const k of [...keys].reverse()) await light(k, 90)
  }

  /* 🎲 random hops, slowing down, ending on the chosen tile */
  let prev = -1
  const hops = 7
  for(let i = 0; i < hops; i++){
    let k
    do{ k = pick(keys) }while(k === prev || k === target)
    prev = k
    await light(k, 160 + i*55)
  }

  /* 💡 the winner tile flashes */
  const tt = tileEls[trackPath[target].key]
  tt.classList.add("keylight", "kl-" + colourOf(target), "kl-final")
  const off = target - here
  const c = tileCenter(target)
  const tag = fxAt(c.x, c.y - 70, "move-tag " + (off < 0 ? "back" : "fwd"), 1800, (off > 0 ? "+" : "") + off)
  burstEmoji(tt, off > 0 ? ["🟢","✨","🎵"] : ["🔴","🎵"], 14)
  await wait(1300)

  /* drive there — forwards or backwards */
  const dir = off > 0 ? 1 : -1
  while(p.position !== target){
    await stepTo(p, p.position + dir, 320)
  }
  tt.classList.remove("keylight", "kl-red", "kl-amber", "kl-green", "kl-final")
  tag.remove()
  if(off >= 3) neonConfetti(1500)
}


/* ===================================================== */
/* 🎯 LANDING — spotlight + neon rings */
/* ===================================================== */

async function landHighlight(p){
  const tile = tileEls[trackPath[p.position].key]
  tile.classList.add("landed-glow")
  addTileFx(p.position, "spotlight", 1500)
  p.fx.animate([
    { transform:"scale(1) rotate(0)" },
    { transform:"scale(1.25) rotate(-10deg)" },
    { transform:"scale(1.25) rotate(10deg)" },
    { transform:"scale(1.1) rotate(-5deg)" },
    { transform:"scale(1) rotate(0)" }
  ], { duration:800, easing:"ease-in-out" })
  await wait(1400)
  tile.classList.remove("landed-glow")
}


/* ===================================================== */
/* 🦸 ONE TURN */
/* ===================================================== */

async function moveTurn(p, steps){
  const last = trackPath.length - 1
  p.moving = true
  layoutCars()

  for(let s = 0; s < steps && p.position < last; s++){
    await stepTo(p, p.position + 1)
  }

  const special = specialAt[p.position]
  if(special && p.position < last){
    await wait(250)
    if(special === "balloon") await balloonBonus(p)
    else if(special === "rocket") await rocketBonus(p)
    else if(special === "tornado") await tornadoBonus(p)
    else if(special === "short") await shortcutBonus(p)
    else if(special === "traffic") await trafficBonus(p)
  }

  p.moving = false
  layoutCars()
  await landHighlight(p)

  if(p.position >= last) await finishPlayer(p)
  endTurn()
}


/* ===================================================== */
/* 🏆 FINISH */
/* ===================================================== */

async function finishPlayer(p){
  p.finished = true
  finishedPlayers.push(p)
  p.rank = finishedPlayers.length
  p.el.classList.add("finished")
  p.el.classList.remove("my-turn")

  const medal = ["🥇","🥈","🥉"][p.rank - 1] || "🏅"
  const toast = document.createElement("div")
  toast.className = "popup finish-toast"
  toast.innerHTML = `<div class="popup-content toast-box">
      <div class="toast-car">${p.emoji}</div>
      <div class="toast-text">${medal} Finished #${p.rank}!</div>
    </div>`
  document.body.appendChild(toast)
  const box = toast.querySelector(".toast-box")
  burstEmoji(box, fireworkEmojis, 24)
  neonRings(box, 3)
  if(p.rank === 1){ fireworksShow(10000); neonConfetti(10000) }   // 🏆 10 seconds!
  await wait(2600)
  toast.remove()

  const racing = players.filter(q => !q.finished)
  if(racing.length <= 1){
    racing.forEach(q=>{
      q.finished = true
      finishedPlayers.push(q)
      q.rank = finishedPlayers.length
    })
    gameOver = true
    showRankingPopup()
  }
}

function showRankingPopup(){
  const pop = document.createElement("div")
  pop.className = "popup"
  pop.innerHTML = `
    <div class="popup-content results">
      <h2>🏙️ City Race Results</h2>
      ${finishedPlayers.map(p => `<p class="rank-row">${["🥇","🥈","🥉"][p.rank-1] || p.rank + "."} <span>${p.emoji}</span></p>`).join("")}
      <div class="results-btns">
        <button id="playAgainBtn">🔄 Play Again</button>
        <button onclick="window.location.href='main.html'">Back to Main Menu</button>
      </div>
    </div>`
  document.body.appendChild(pop)
  burstEmoji(pop.querySelector(".popup-content"), fireworkEmojis, 24)
  fireworksShow(10000)
  neonConfetti(10000)
  pop.querySelector("#playAgainBtn").onclick = ()=>{
    pop.remove()
    newRace()
  }
}


/* ===================================================== */
/* 🛑 END GAME — closest to the 🏆 wins */
/* ===================================================== */

document.getElementById("endGameBtn").onclick = ()=>{
  if(!gameStarted || gameOver) return
  if(diceState === "rolling") return
  if(!confirm("End the race now? The hero closest to the 🏆 wins!")) return
  gameOver = true
  disableDice()
  players
    .filter(q => !q.finished)
    .sort((a, b) => b.position - a.position)
    .forEach(q=>{
      q.finished = true
      finishedPlayers.push(q)
      q.rank = finishedPlayers.length
      q.el.classList.remove("my-turn")
    })
  showRankingPopup()
}


/* ===================================================== */
/* 🔁 TURNS */
/* ===================================================== */

function endTurn(){
  if(gameOver) return
  do{
    currentPlayer = (currentPlayer + 1) % players.length
  }while(players[currentPlayer].finished)
  disableDice()
  updateTurnUI()
  isBoardLocked = false
  currentIndex = (currentIndex + 1) % words.length
  loadWord(words[currentIndex])
}

function newRace(){
  gameOver = false
  finishedPlayers = []
  currentPlayer = 0
  buildTrack()
  placeCars()
  disableDice()
  setFace(dice, 1)
  updateTurnUI()
  isBoardLocked = false
  loadWord(words[currentIndex])
}

function startGame(){
  gameStarted = true
  newRace()
}

document.getElementById("shuffleTrackBtn").onclick = ()=>{
  if(!gameStarted || diceState === "rolling") return
  shortTrack = false
  newRace()
}

document.getElementById("shortTrackBtn").onclick = ()=>{
  if(!gameStarted || diceState === "rolling") return
  shortTrack = true
  newRace()
}


/* ===================================================== */
/* ✦ IDLE — neon sparks rise from the active hero */
/* ===================================================== */

setInterval(()=>{
  if(!gameStarted || gameOver || !carLayer) return
  const p = players[currentPlayer]
  if(!p || !p.el || p.moving || p.finished) return
  if(Math.random() < 0.6){
    const L = carLayer.getBoundingClientRect(), r = p.el.getBoundingClientRect()
    const e = fxAt(r.left + r.width/2 - L.left + (Math.random()*70 - 35), r.top + r.height*0.6 - L.top, "rise-spark", 1500)
    const col = pick(neonColors)
    e.style.background = col
    e.style.boxShadow = `0 0 8px ${col}, 0 0 14px ${col}`
    e.style.setProperty("--mx", (Math.random()*30 - 15) + "px")
  }
}, 220)


/* ===================================================== */
/* 🚀 INIT */
/* ===================================================== */

loadWord(words[currentIndex])
initPlayerPopup()

/* =========================================================================== */
/* 🏙️ CITY TRACK ENGINE END */
/* =========================================================================== */

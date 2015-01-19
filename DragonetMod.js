/*

 DRAGONET MODPE SCRIPT ADDON
 (Released under GNU LGPL v3 Licence. )
 
 @autor Creeperface01 
 @website http://dragonet.org/
 @github http://github.com/DragonetMC

*/


/*
MODPE API DOCUMENTATIONS

ModPE.setItem(000,"texture",0,"name"); 
Item.addShapedRecipe(4,1,0,["   ","   ","   "],[" ", ,0," ", ,0]);
ModPE.setFoodItem(ID,imageX,imageY,halfHeartsHealed,"name");
Player.addItemCreativeInv(407,1,0);
Item.addFurnaceRecipe(49,484,0);
Item.setItemCategory(itemid,itemcategory); ItemCategory.INTERNAL (int -1),ItemCategory.MATERIAL (int 1),ItemCategory.TOOL (int 2), ItemCategory.FOOD(int 4) or ItemCategory.DECORATION (int 8).
BLOCK

Block.defineBlock(130,"block.fastor.name.unbreakable.lighting",[["rail_detector",0]]);
Block.setDestroyTime(130,5);
Block.setShape(130, 0, 0, 0, 1, 0.5, 1);
Block.setExplosionResistance(130,1000);
Block.setLightLevel(id,level);
Block.setRenderLayer(id,renderLayer);
[["bottom texture",type],["top texture",type],["south texture",type],["north texture",type],["west texture",type],["east texture",type]]
*/

// items
ModPE.setItem(356,"repeater",0,"redstone repeater");
ModPE.setItem(346,"fishing_rod_uncast",0,"fishing rod");
ModPE.setItem(349,"fish_raw",0,"Raw Fish");
ModPE.setFoodItem(462,"record_stal",0,0,"raw salmon");
ModPE.setFoodItem(463,"record_strad",0,0,"clownfish");
ModPE.setFoodItem(464,"record_wait",0,0,"pufferfish");
ModPE.setItem(350,"fish_cooked",0,"Cooked Fish"); 
ModPE.setFoodItem(465,"record_ward",0,0,"cooked salmon");
ModPE.setItem(358,"map_filled",0,"map");
ModPE.setFoodItem(367,"rotten_flesh",0,0,"rotten flesh");
ModPE.setItem(368,"ender_pearl",0,"ender pearl"); 
ModPE.setItem(369,"blaze_rod",0,"blaze rod"); 
ModPE.setItem(370,"ghast_tear",0,"ghast tear"); 
ModPE.setItem(371,"gold_nugget",0,"gold nugget"); 
ModPE.setItem(372,"nether_wart",0,"nether wart seeds"); 
ModPE.setFoodItem(373,"potion_bottle_drinkable",0,0,"Water Bottle"); 
ModPE.setItem(374,"potion_bottle_empty",0,"Glass Bottle"); 
ModPE.setFoodItem(375,"spider_eye",0,0,"spider eye"); 
ModPE.setItem(376,"spider_eye_fermented",0,"fermented spider eye"); 
ModPE.setItem(377,"blaze_powder",0,"blaze powder"); 
ModPE.setItem(378,"magma_cream",0,"magma cream"); 
ModPE.setItem(379,"brewing_stand",0,"brewing stand"); 
ModPE.setItem(380,"cauldron",0,"cauldron"); 
ModPE.setItem(381,"ender_eye",0,"eye of ender"); 
ModPE.setItem(382,"melon_speckled",0,"glistering melon"); 
ModPE.setItem(485,"spawn_egg",0,"spawn egg ghast");
ModPE.setItem(486,"spawn_egg",0,"spawn egg cave spider");
ModPE.setItem(487,"spawn_egg",0,"spawn egg blaze");
ModPE.setItem(488,"spawn_egg",0,"spawn egg magma cube");
ModPE.setItem(489,"spawn_egg",0,"spawn egg bat");
ModPE.setItem(490,"spawn_egg",0,"spawn egg witch");
ModPE.setItem(491,"spawn_egg",0,"spawn egg endermite");
ModPE.setItem(492,"spawn_egg",0,"spawn egg guardian");
ModPE.setItem(493,"spawn_egg",0,"spawn egg squid");
ModPE.setItem(494,"spawn_egg",0,"spawn egg ocelot");
ModPE.setItem(495,"spawn_egg",0,"spawn egg horse");
ModPE.setItem(496,"spawn_egg",0,"spawn egg rabbit");
ModPE.setItem(384,"experience_bottle",0,"bottle of enchanting");
ModPE.setItem(385,"fireball",0,"fire charge");
ModPE.setItem(386,"book_writable",0,"book and quill");
ModPE.setItem(387,"book_written",0,"written book");
ModPE.setItem(389,"item_frame",0,"item frame");
ModPE.setItem(390,"flower_pot",0,"flower pot");
ModPE.setFoodItem(394,"potato_poisonous",0,0,"poisonous potato");
ModPE.setItem(395,"map_empty",0,"empty map");
ModPE.setFoodItem(396,"carrot_golden",0,0,"golden carrot");
ModPE.setItem(397,"skull_skeleton",0,"skeleton head");
ModPE.setItem(507,"skull_wither",0,"wither head");
ModPE.setItem(508,"skull_zombie",0,"zombie head");
ModPE.setItem(509,"skull_steve",0,"steve head");
ModPE.setItem(510,"skull_creeper",0,"creeper head");
ModPE.setItem(398,"carrot_on_a_stick",0,"carrot on a stick");
ModPE.setItem(399,"nether_star",0,"nether star");
ModPE.setItem(401,"fireworks",0,"firework rocket");
ModPE.setItem(402,"fireworks_charge",0,"firework star");
ModPE.setItem(403,"book_enchanted",0,"enchanted book");
ModPE.setItem(404,"comparator",0,"redstone comparator");
ModPE.setItem(407,"minecart_tnt",0,"TNT minecart");
ModPE.setItem(408,"minecart_hopper",0,"hopper minecart");
ModPE.setItem(343,"minecart_furnace",0,"Minecart with Chest");
ModPE.setItem(342,"minecart_chest",0,"Minecart with Chest");
ModPE.setItem(415,"record_mellohi",0,"command block minecart");
ModPE.setItem(409,"record_far",0,"prismarine shard");
ModPE.setItem(410,"record_mall",0,"prismarine crystals");
ModPE.setFoodItem(411,"item_frame",0,0,"raw rabbit");
ModPE.setFoodItem(412,"record_11",0,0,"cooked rabbit");
ModPE.setFoodItem(413,"record_blocks",0,0,"rabbit stew");
ModPE.setFoodItem(414,"record_cat",0,0,"rabbit's foot");
ModPE.setItem(415,"record_chirp",0,"rabbit hide");
ModPE.setItem(416,"empty_armor_slot_chestplate",0,"armor stand");
ModPE.setItem(417,"iron_horse_armor",0,"iron horse armor");
ModPE.setItem(418,"gold_horse_armor",0,"gold horse armor");
ModPE.setItem(419,"diamond_horse_armor",0,"diamond horse armor");
ModPE.setItem(420,"lead",0,"lead");
ModPE.setItem(421,"name_tag",0,"name tag");
ModPE.setFoodItem(423,"empty_armor_slot_helmet",0,0,"raw mutton");
ModPE.setFoodItem(424,"ruby",0,0,"cooked mutton");
ModPE.setItem(427,"door_wood",0,"Spruce Door");
ModPE.setItem(428,"door_wood",0,"Birch Door");
ModPE.setItem(429,"door_wood",0,"Jungle Door");
ModPE.setItem(430,"door_wood",0,"Acacia Door");
ModPE.setItem(431,"door_wood",0,"Dark Oak Door");
ModPE.setItem(436,"record_13",0,"music disk 13");
ModPE.setItem(437,"record_13",0,"music disk blocks");
ModPE.setItem(438,"record_13",0,"music disk cat");
ModPE.setItem(439,"record_13",0,"music disk chirp");
ModPE.setItem(440,"record_13",0,"music disk far");
ModPE.setItem(441,"record_13",0,"music disk mall");
ModPE.setItem(442,"record_13",0,"music disk mellohi");
ModPE.setItem(443,"record_13",0,"music disk stal");
ModPE.setItem(444,"record_13",0,"music disk strad");
ModPE.setItem(445,"record_13",0,"music disk ward");
ModPE.setItem(446,"record_13",0,"music disk 11");
ModPE.setItem(447,"record_13",0,"music disk wait");
ModPE.setFoodItem(322,"apple_golden",0,0,"Golden Apple");
ModPE.setFoodItem(451,"apple_golden",0,0,"Enchanted Golden Apple"); 



//item recipes
Item.addShapedRecipe(356,1,0,["   ","trt","sss"],["s",1,0,"t",1,0,"r",331,0,]); 
Item.addShapedRecipe(358,1,0,["  s"," sp","s p"],["s",280,0,"p",287,0,]); 
Item.addShapedRecipe(371,9,0,["   "," g ","   "],["g",266,0,]); 
Item.addShapedRecipe(374,3,0,["   ","s s"," s "],["s",20,0,]);
Item.addShapedRecipe(376,1,0,["e  ","hs ","   "],["h",42,0,"e",375,0,"s",353,0,]);
Item.addShapedRecipe(377,2,0,["   "," r ","   "],["r",369,0,]);
Item.addShapedRecipe(378,1,0,["   "," b "," s "],["b",377,0,"s",341,0,]);
Item.addShapedRecipe(379,1,0,["   "," b ","ccc"],["c",4,0,"b",369,0,]);
Item.addShapedRecipe(380,1,0,["i i","i i","iii"],["i",265,0,]);
Item.addShapedRecipe(381,1,0,["   "," e "," b "],["e",368,0,"b",377,0,]);
Item.addShapedRecipe(382,1,0,["ggg","gmg","ggg"],["g",371,0,"m",360,0,]);
Item.addShapedRecipe(385,3,0,[" b "," u "," p "],["b",377,0,"u",263,0,"p",289,0,]);
Item.addShapedRecipe(386,1,0,["   ","p  ","ik "],["p",288,0,"i",351,0,"k",340,0,]);
Item.addShapedRecipe(389,1,0,["sss","sks","sss"],["s",280,0,"k",334,0,]);
Item.addShapedRecipe(390,1,0,["   ","c c"," c "],["c",336,0,]);
Item.addShapedRecipe(395,1,0,["ppp","pkp","ppp"],["p",339,0,"k",345,0,]);
Item.addShapedRecipe(396,1,0,["ggg","gmg","ggg"],["g",371,0,"m",391,0,]);
Item.addShapedRecipe(398,1,0,["   ","p  "," m "],["p", 346,0,"m",391,0,]);
Item.addShapedRecipe(401,1,0,[" s "," p "," g "],["s",408,0,"p",339,0,"g",289,0,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,0,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,1,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,2,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,3,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,4,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,5,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,6,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0],["b",351,7,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,8,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,9,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,10,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,11,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,12,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,13,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,14,]);
Item.addShapedRecipe(402,1,0,["gd ","b  ","   "],["g",289,0,"d",264,0,"b",351,15,]);
Item.addShapedRecipe(404,1,0,[" r ","rqr","sss"],["r",1,0,"q",406,0,"s",1,0,]);
Item.addShapedRecipe(407,1,0,["   "," t "," m "],["m",328,0,"t",46,0,]);
Item.addShapedRecipe(408,1,0,["   "," h "," m "],["m",328,0,"h",1,0,]);
Item.addShapedRecipe(343,1,0,["   "," f "," m "],["m",328,0,"f",61,0,]);
Item.addShapedRecipe(342,1,0,["   "," c "," m "],["m",328,0,"c",54,0,]);
Item.addShapedRecipe(413,1,0,[" k ","mbh"," t "],["k",412,0,"m",391,0,"b",393,0,"h",40,0,"t",281,0,]);
Item.addShapedRecipe(416,1,0,["sss"," s ","sps"],["s",280,0,"p",44,0,]);
Item.addShapedRecipe(417,1,0,["  i","ivi","iii"],["i",265,0,"v",35,0,]);
Item.addShapedRecipe(418,1,0,["  i","ivi","iii"],["i",266,0,"v",35,0,]);
Item.addShapedRecipe(419,1,0,["  d","dvd","ddd"],["d",264,0,"v",35,0,]);
Item.addShapedRecipe(420,2,0,["pp ","ps ","  p"],["p",287,0,"s",341,0,]);
Item.addShapedRecipe(427,1,0,["dd ","dd ","dd "],["d",5,1,]);
Item.addShapedRecipe(428,1,0,["dd ","dd ","dd "],["d",5,2,]);
Item.addShapedRecipe(429,1,0,["dd ","dd ","dd "],["d",5,3,]);
Item.addShapedRecipe(430,1,0,["dd ","dd ","dd "],["d",5,4,]);
Item.addShapedRecipe(431,1,0,["dd ","dd ","dd "],["d",5,5,]);
Item.addShapedRecipe(322,1,0,["ggg","gjg","ggg"],["g",266,0,"j",260,0,]);
Item.addShapedRecipe(451,1,0,["ggg","gjg","ggg"],["g",41,0,"j",260,0,]);


//furnace recipes

Item.addFurnaceRecipe(349,350,0);
Item.addFurnaceRecipe(462,465,0);
Item.addFurnaceRecipe(411,412,0);
Item.addFurnaceRecipe(423,424,0);




//add to inventory
Player.addItemCreativeInv(356,1,0);
Player.addItemCreativeInv(346,1,0);
Player.addItemCreativeInv(349,1,0);
Player.addItemCreativeInv(462,1,0);
Player.addItemCreativeInv(463,1,0);
Player.addItemCreativeInv(464,1,0);
Player.addItemCreativeInv(350,1,0);
Player.addItemCreativeInv(465,1,0);
Player.addItemCreativeInv(358,1,0);
Player.addItemCreativeInv(367,1,0);
Player.addItemCreativeInv(368,1,0);
Player.addItemCreativeInv(369,1,0);
Player.addItemCreativeInv(370,1,0);
Player.addItemCreativeInv(371,1,0);
Player.addItemCreativeInv(372,1,0);
Player.addItemCreativeInv(373,1,0);
Player.addItemCreativeInv(374,1,0);
Player.addItemCreativeInv(375,1,0);
Player.addItemCreativeInv(376,1,0);
Player.addItemCreativeInv(377,1,0);
Player.addItemCreativeInv(378,1,0);
Player.addItemCreativeInv(379,1,0);
Player.addItemCreativeInv(380,1,0);
Player.addItemCreativeInv(381,1,0);
Player.addItemCreativeInv(382,1,0);
Player.addItemCreativeInv(485,1,0);
Player.addItemCreativeInv(486,1,0);
Player.addItemCreativeInv(487,1,0);
Player.addItemCreativeInv(488,1,0);
Player.addItemCreativeInv(489,1,0);
Player.addItemCreativeInv(490,1,0);
Player.addItemCreativeInv(491,1,0);
Player.addItemCreativeInv(492,1,0);
Player.addItemCreativeInv(493,1,0);
Player.addItemCreativeInv(494,1,0);
Player.addItemCreativeInv(495,1,0);
Player.addItemCreativeInv(496,1,0);
Player.addItemCreativeInv(384,1,0);
Player.addItemCreativeInv(385,1,0);
Player.addItemCreativeInv(386,1,0);
Player.addItemCreativeInv(387,1,0);
Player.addItemCreativeInv(389,1,0);
Player.addItemCreativeInv(390,1,0);
Player.addItemCreativeInv(394,1,0);
Player.addItemCreativeInv(395,1,0);
Player.addItemCreativeInv(396,1,0);
Player.addItemCreativeInv(397,1,0);
Player.addItemCreativeInv(507,1,0);
Player.addItemCreativeInv(508,1,0);
Player.addItemCreativeInv(509,1,0);
Player.addItemCreativeInv(510,1,0);
Player.addItemCreativeInv(398,1,0);
Player.addItemCreativeInv(399,1,0);
Player.addItemCreativeInv(401,1,0);
Player.addItemCreativeInv(402,1,0);
Player.addItemCreativeInv(403,1,0);
Player.addItemCreativeInv(404,1,0);
Player.addItemCreativeInv(407,1,0);
Player.addItemCreativeInv(408,1,0);
Player.addItemCreativeInv(343,1,0);
Player.addItemCreativeInv(342,1,0);
Player.addItemCreativeInv(415,1,0);
Player.addItemCreativeInv(409,1,0);
Player.addItemCreativeInv(410,1,0);
Player.addItemCreativeInv(411,1,0);
Player.addItemCreativeInv(412,1,0);
Player.addItemCreativeInv(413,1,0);
Player.addItemCreativeInv(414,1,0);
Player.addItemCreativeInv(415,1,0);
Player.addItemCreativeInv(416,1,0);
Player.addItemCreativeInv(417,1,0);
Player.addItemCreativeInv(418,1,0);
Player.addItemCreativeInv(419,1,0);
Player.addItemCreativeInv(420,1,0);
Player.addItemCreativeInv(421,1,0);
Player.addItemCreativeInv(423,1,0);
Player.addItemCreativeInv(424,1,0);
Player.addItemCreativeInv(427,1,0);
Player.addItemCreativeInv(428,1,0);
Player.addItemCreativeInv(429,1,0);
Player.addItemCreativeInv(430,1,0);
Player.addItemCreativeInv(431,1,0);
Player.addItemCreativeInv(436,1,0);
Player.addItemCreativeInv(437,1,0);
Player.addItemCreativeInv(438,1,0);
Player.addItemCreativeInv(439,1,0);
Player.addItemCreativeInv(440,1,0);
Player.addItemCreativeInv(441,1,0);
Player.addItemCreativeInv(442,1,0);
Player.addItemCreativeInv(443,1,0);
Player.addItemCreativeInv(444,1,0);
Player.addItemCreativeInv(445,1,0);
Player.addItemCreativeInv(446,1,0);
Player.addItemCreativeInv(447,1,0);
Player.addItemCreativeInv(322,1,0);
Player.addItemCreativeInv(451,1,0);

/* block
Block.defineBlock(130,"jmeno",[["texture",0]]);
Block.setDestroyTime(130,5);
Block.setShape(130, 0, 0, 0, 1, 0.5, 1);
Block.setExplosionResistance(130,1000);
Block.setLightLevel(id,level);
Block.setRenderLayer(id,renderLayer);
Block.defineBlock(130,"jmeno",[["bottom texture",type],["top texture",type],["south texture",type],["north texture",type],["west texture",type],["east texture",type]]
*/

Block.defineBlock(116,"enchanting table",[["enchanting_table_bottom",0],["enchanting_table_top",0],["enchanting_table_side",0],["enchanting_table_side",0],["enchanting_table_side",0],["enchanting_table_side",0]],1,!1,0);
Block.setShape(116, 0, 0, 0, 1, 0.75, 1);
Player.addItemCreativeInv(116,1,0);
Block.setDestroyTime(116,10);
Item.addShapedRecipe(116,1,0,[" k ","dod","ooo"],["d",264,0,"o",49,0,"k",340,0]);
Block.setRenderLayer(116,2);
Item.setCategory(116, 1);

Block.defineBlock(55,"redstone cross",[["redstone_dust_cross",0],["redstone_dust_cross",0],["redstone_dust_line",0],["redstone_dust_line",0],["redstone_dust_line",0],["redstone_dust_line",0]],50,!1,13);
Block.setShape(55,0,0,0,1,0.01,1);
Player.addItemCreativeInv(55,1,0);
Block.setRenderLayer(55,2);
Block.setDestroyTime(55,1);
Block.setColor(55,[16580608]);
Player.addItemCreativeInv(55,1,0);

Block.defineBlock(28,"wet sponge",[["stonecutter",1]]);
Block.setDestroyTime(28,1);
Player.addItemCreativeInv(28,1,0);

Block.defineBlock(28,"rail detector",[["rail_detector",0]],50,!1,13);
Block.setShape(28,0,0,0,1,0.01,1);
Block.setDestroyTime(28,0);
Player.addItemCreativeInv(28,1,0);
Block.setRenderLayer(28,2);
Item.addShapedRecipe(28,6,0,["i i","ipi","iri"],["i",265,0,"p",36,0,"r",331,0]);
Item.setCategory(28, 1);

Block.defineBlock(70,"stone pressure plate",[["stone",0]]);
Block.setShape(70, 0, 0, 0, 1, 0.1, 1);
Block.setDestroyTime(70,1.5);
Player.addItemCreativeInv(70,1,0);
Item.addShapedRecipe(70,1,0,["   ","   ","ss "],["s",1,0]);
Item.setCategory(70, 1);

Block.defineBlock(72,"wooden pressure plate",[["planks",0]]);
Block.setShape(72, 0, 0, 0, 1, 0.1, 1);
Block.setDestroyTime(72,1.5);
Player.addItemCreativeInv(72,1,0);
Item.addShapedRecipe(72,1,0,["   ","   ","dd "],["d",5,0]);
Item.setCategory(72, 1);

Block.defineBlock(76,"redstone torch",[["redstone_torch_on",0]],0,0,2);
Block.setShape(76, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(76,0);
Player.addItemCreativeInv(76,1,0);
Item.addShapedRecipe(76,1,0,["   "," r "," s "],["s",280,0,"r",331,0]);
Item.setCategory(76, 1);

Block.defineBlock(75,"redstone torch (off)",[["redstone_torch_off",0]],0,0,2);
Block.setShape(75, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(75,0);
Player.addItemCreativeInv(75,1,0);
Item.setCategory(75, 1);

Block.defineBlock(88,"soulsand",[["soul_sand",0]]);
Block.setDestroyTime(88,2);
Player.addItemCreativeInv(88,1,0);

Block.defineBlock(90,"portal",[["stonecutter",2]],0,30,18);
Block.setShape(90, 0, 0, 0, 1, 1, 1);
Player.addItemCreativeInv(90,1,0);
Block.setLightLevel(90,10)

Block.defineBlock(123,"redstone lamp",[["redstone_lamp_off",0]]);
Block.setDestroyTime(123,2);
Player.addItemCreativeInv(123,1,0);
Item.addShapedRecipe(123,1,0,[" r ","rgr"," r "],["r",331,0,"g",89,0]);
Item.setCategory(123, 1);

Block.defineBlock(124,"redstone lamp (On)",[["redstone_lamp_on",0]]);
Block.setDestroyTime(124,2);
Block.setLightLevel(124,15);
Player.addItemCreativeInv(124,1,0);

Block.defineBlock(137,"command block",[["command_block",0]]);
Block.setDestroyTime(137,2);
Player.addItemCreativeInv(137,1,0);

Block.defineBlock(143,"wooden button",[["planks",0]]);
Block.setShape(143, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(143,1);
Player.addItemCreativeInv(143,1,0);
Item.addShapedRecipe(143,1,0,["   "," d ","   "],["d",5,0]);
Item.setCategory(143, 1);

Block.defineBlock(77,"Stone Button",[["stone",0]]);
Block.setShape(77, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(77,1);
Player.addItemCreativeInv(77,1,0);
Item.addShapedRecipe(77,1,0,["   "," d ","   "],["d",5,0]);
Item.setCategory(77, 1);

Block.defineBlock(147,"weighted pressure plate light",[["gold_block",0]]);
Block.setShape(147, 0, 0, 0, 1, 0.1, 1);
Block.setDestroyTime(147,2);
Player.addItemCreativeInv(147,1,0);
Item.addShapedRecipe(147,1,0,["   ","gg ","   "],["g",266,0]);
Item.setCategory(147, 1);

Block.defineBlock(148,"weighted pressure plate heavy",[["iron_block",0]]);
Block.setShape(148, 0, 0, 0, 1, 0.1, 1);
Block.setDestroyTime(148,3);
Player.addItemCreativeInv(148,1,0);
Item.addShapedRecipe(148,1,0,["   ","ii ","   "],["i",265,0]);
Item.setCategory(148, 1);

Block.defineBlock(152,"block of redstone",[["redstone_block",0]]);
Block.setDestroyTime(152,2.5);
Player.addItemCreativeInv(152,1,0);
Item.addShapedRecipe(152,1,0,["rrr","rrr","rrr"],["r",331,0]);
Item.setCategory(152, 1);

Block.defineBlock(153,"Nether Quartz Ore",[["quartz_ore",0]]);
Block.setDestroyTime(153,3);
Player.addItemCreativeInv(153,1,0);

Block.defineBlock(157,"rail activator",[["rail_activator",0]],50,!1,13);
Block.setShape(157, 0, 0, 0, 1, 0.01, 1);
Block.setDestroyTime(157,1);
Player.addItemCreativeInv(157,1,0);
Item.addShapedRecipe(157,6,0,["isi","iti","isi"],["i",265,0,"s",280,0,"t",69,0]);
Item.setCategory(157, 1);

Block.defineBlock(165,"slime block",[["stonecutter",3]],0,20,0);
Block.setDestroyTime(165,2);
Player.addItemCreativeInv(165,1,0);
Item.addShapedRecipe(165,1,0,["sss","sss","sss"],["s",341,0]);
Item.setCategory(165, 1);

Block.defineBlock(198,"prismarine bricks",[["beetroot",0]]);
Block.setDestroyTime(198,2);
Player.addItemCreativeInv(198,1,0);
Item.setCategory(198, 1);

Block.defineBlock(199,"dark prismarine",[["beetroot",1]]);
Block.setDestroyTime(199,2.6);
Player.addItemCreativeInv(199,1,0);
Item.addShapedRecipe(199,1,0,["ppp","pip","ppp"],["p",409,0,"i",351,0]);
Item.setCategory(199, 1);

Block.defineBlock(169,"sea lantern",[["beetroot",2]]);
Block.setDestroyTime(169,1.5);
Block.setLightLevel(169,10);
Player.addItemCreativeInv(169,1,0);
Item.addShapedRecipe(169,1,0,["pnp","nnn","pnp"],["p",409,0,"n",410,0]);
Item.setCategory(169, 1);

Block.defineBlock(168,"prismarine",[["beetroot",3]]);
Block.setDestroyTime(168,2.1);
Player.addItemCreativeInv(168,1,0);
Item.addShapedRecipe(168,1,0,["   ","pp ","pp "],["p",409,0]);
Item.setCategory(168, 1);

//slozite textury

Block.defineBlock(130,"ender chest",[["anvil_top_damaged_x",1],["anvil_top_damaged_x",2],["reactor_core",1],["reactor_core",0],["reactor_core",0],["reactor_core",0]]);
Block.setShape(130, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(130,6);
Player.addItemCreativeInv(130,1,0);
Item.addShapedRecipe(130,1,0,["ooo","oeo","ooo"],["o",49,0,"e",381,0]);
Item.setCategory(130, 1);

Block.defineBlock(154,"hopper",[["missing_tile",0]]);
Block.setShape(154, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(154,3);
Player.addItemCreativeInv(154,1,0);

Block.defineBlock(84,"note block",[["jukebox_side",0]]);
Block.setDestroyTime(84,2);
Player.addItemCreativeInv(84,1,0);
Item.addShapedRecipe(84,1,0,["ddd","drd","ddd"],["d",5,0,"r",331,0]);
Item.setCategory(84, 1);

Block.defineBlock(29,"sticky piston",[["piston_side",0],["piston_side",0],["piston_top_sticky",0],["piston_side",0],["piston_side",0],["piston_bottom",0]]);
Block.setDestroyTime(29,2.5);
Player.addItemCreativeInv(29,1,0);
Item.addShapedRecipe(29,1,0,["   "," s "," p "],["p",94,0,"s",341,0]);
Item.setCategory(29, 1);

Block.defineBlock(33,"piston",[["piston_side",0],["piston_side",0],["piston_top_normal",0],["piston_side",0],["piston_side",0],["piston_bottom",0]]);
Block.setDestroyTime(33,2.5);
Player.addItemCreativeInv(165,1,0);
Item.addShapedRecipe(33,1,0,["ddd","cic","crc"],["d",5,0,"c",4,0,"i",265,0,"r",331,0]);
Item.setCategory(33, 1);

Block.defineBlock(166,"juke box",[["crafting_table",0],["jukebox_top",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0]]);
Block.setDestroyTime(166,2);
Player.addItemCreativeInv(166,1,0);
Item.addShapedRecipe(166,1,0,["ddd","dtd","ddd"],["d",5,0,"t",264,0]);
Item.setCategory(166, 1);

Block.defineBlock(95,"stained glass (white)",[["glass",0]],0,90,18);
Block.setDestroyTime(95,1);
Player.addItemCreativeInv(95,1,0);
Block.setColor(95,[0xFFFFFF]);
Item.setCategory(95, 1);
Item.addShapedRecipe(95,6,0,["sss","sbs","sss"],["s",20,0,"b",351,15]);
Item.setCategory(95, 1);

Block.defineBlock(113,"nether brick fence",[["nether_brick",0]],0,0,11);
Block.setShape(113, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(113,2.8);
Player.addItemCreativeInv(113,1,0);
Item.addShapedRecipe(113,6,0,["   ","nnn","nnn"],["n",112,0]);
Item.setCategory(113, 1);

Block.defineBlock(115,"nether wart stage I",[["nether_wart",0]],0,0,6);
Block.setDestroyTime(115,0);
Player.addItemCreativeInv(115,1,0);
Item.setCategory(115, 1);

/*
Block.defineBlock(176,"nether wart stage II",[["nether_wart",1]],0,0,6);
Block.setDestroyTime(176,0);
Player.addItemCreativeInv(176,1,0);

Block.defineBlock(115,"nether wart stage III",[["nether_wart",2]],0,0,6);
Block.setDestroyTime(115,0);
Player.addItemCreativeInv(115,1,0);
*/
Block.defineBlock(117,"brewing stand",[["brewing_stand_base",0],["brewing_stand_base",0],["brewing_stand",0],["brewing_stand",0],["brewing_stand",0],["brewing_stand",0]]);
Block.setDestroyTime(117,1);
Player.addItemCreativeInv(117,1,0);

Block.defineBlock(118,"cauldron",[["cauldron_bottom",0],["cauldron_top",0],["cauldron_side",0],["cauldron_side",0],["cauldron_side",0],["cauldron_side",0]]);
Block.setDestroyTime(118,3);
Player.addItemCreativeInv(118,1,0);

Block.defineBlock(131,"Tripwire Hook",[["trip_wire_source",0]],0,0,2);
Block.setShape(131, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(131,0.1);
Player.addItemCreativeInv(131,1,0);
Item.addShapedRecipe(131,2,0,[" i "," s "," d "],["i",265,0,"s",280,0,"d",5,0]);
Item.setCategory(131, 1);

Block.defineBlock(132,"trip wire",[["trip_wire",0]])
Block.setShape(132, 0, 0, 0, 1, 0.01, 1);
Block.setDestroyTime(132,0.1);
Player.addItemCreativeInv(132,1,0);

Block.defineBlock(138,"Beacon",[["missing_tile",0]]);
Block.setDestroyTime(138,4);
Player.addItemCreativeInv(138,1,0);
Item.addShapedRecipe(138,1,0,["sss","shs","ooo"],["s",20,0,"h",399,0,"o",49,0]);
Item.setCategory(49, 1);

Block.defineBlock(144,"head",[["missing_tile",0]]);
Block.setShape(144, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(144,2);
Player.addItemCreativeInv(144,1,0);

Block.defineBlock(145,"anvil",[["missing_tile",0]]);
Block.setShape(145, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(145,2.7);
Player.addItemCreativeInv(145,1,0);
Item.addShapedRecipe(145,1,0,["bbb"," i ","iii"],["b",42,0,"i",265,0]);
Item.setCategory(145, 1);

Block.defineBlock(132,"trapped chest",[["chest_inventory",0],["chest_inventory",0],["chest_inventory",2],["chest_inventory",1],["chest_inventory",1],["chest_inventory",1]]);
Block.setDestroyTime(132,2);
Player.addItemCreativeInv(132,1,0);

Block.defineBlock(151,"daylight sensor",[["missing_tile",0]]);
Block.setShape(151, 0, 0, 0, 1, 0.3, 1);
Block.setDestroyTime(151,1);
Player.addItemCreativeInv(151,1,0);
Item.addShapedRecipe(151,1,0,["sss","qqq","ddd"],["s",20,0,"q",406,0,"d",44,2]);
Item.setCategory(151, 1);

Block.defineBlock(158,"dropper",[["furnace",3],["furnace",3],["furnace",2],["furnace",2],["furnace",2],["furnace",2]]);
Block.setDestroyTime(158,2.3);
Player.addItemCreativeInv(158,1,0);
Item.addShapedRecipe(158,1,0,["ccc","c c","crc"],["c",4,0,"r",331,0]);
Item.setCategory(158, 1);

Block.defineBlock(160,"Stained Glass Pane (White)",[["glass_pane_top",0],["glass_pane_top",0],["glass",0],["glass",0],["glass",0],["glass",0]],0,90,18);
Block.setShape(160, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(160,1);
Player.addItemCreativeInv(160,1,0);
Block.setColor(160,[0xFFFFFF]);
Item.addShapedRecipe(160,16,0,["   ","sss","sss"],["s",95,0]);
Item.setCategory(160, 1);

Block.defineBlock(166,"barrier",[["missing_tile",0]]);
Player.addItemCreativeInv(166,1,0);

Block.defineBlock(167,"iron trap door",[["trapdoor",0]]);
Block.setShape(167, 0, 0, 0, 1, 0.2, 1);
Block.setDestroyTime(167,3);
Player.addItemCreativeInv(167,1,0);
Item.addShapedRecipe(167,1,0,["   ","ii ","ii "],["i",265,0]);
Item.setCategory(167, 1);

Block.defineBlock(179,"red sandstone",[["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4]]);
Block.setDestroyTime(179,2);
Player.addItemCreativeInv(179,1,0);
Block.setColor(179,[0xFF8000]);
Item.addShapedRecipe(179,1,0,["   ","pp ","pp "],["p",12,1]);
Item.setCategory(179, 1);

Block.defineBlock(180,"red sandstone stairs",[["sandstone",4],["sandstone",3],["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4]],0,0,10);
Block.setDestroyTime(180,2.4);
Player.addItemCreativeInv(180,1,0);
Block.setColor(180,[0xFF8000]);
Item.addShapedRecipe(180,4,0,["  s"," ss","sss"],["s",179,0]);
Item.setCategory(180, 1);

Block.defineBlock(182,"red sandstone slab",[["sandstone",3],["sandstone",3],["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4]]);
Block.setShape(182, 0, 0, 0, 1, 0.5, 1);
Block.setDestroyTime(182,2.7);
Player.addItemCreativeInv(182,1,0);
Block.setColor(182,[0xFF8000]);
Item.addShapedRecipe(182,6,0,["   ","   ","sss"],["s",179,1]);
Item.setCategory(182, 1);

Block.defineBlock(181,"red sandstone double",[["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4],["sandstone",4]]);
Block.setDestroyTime(181,2);
Player.addItemCreativeInv(181,1,0);
Block.setColor(181,[0xFF8000]);

Block.defineBlock(193,"Wooden door (spruce)",[["missing_tile",0]],0,0,7);
Block.setShape(193, 0, 0, 0, 1, 2, 1);
Block.setDestroyTime(193,2);
Player.addItemCreativeInv(193,1,0);
Item.addShapedRecipe(193,1,0,["dd ","dd ","dd "],["d",5,1]);
Item.setCategory(193, 1);

Block.defineBlock(194,"Wooden door (Birch)",[["missing_tile",0]],0,0,7);
Block.setShape(194, 0, 0, 0, 1, 2, 1);
Block.setDestroyTime(194,2);
Player.addItemCreativeInv(194,1,0);
Item.addShapedRecipe(194,1,0,["dd ","dd ","dd "],["d",5,2]);
Item.setCategory(194, 1);

Block.defineBlock(195,"Wooden door (Jungle)",[["missing_tile",0]],0,0,7);
Block.setShape(195, 0, 0, 0, 1, 2, 1);
Block.setDestroyTime(195,2);
Player.addItemCreativeInv(195,1,0);
Item.addShapedRecipe(195,1,0,["dd ","dd ","dd "],["d",5,3]);
Item.setCategory(195, 1);

Block.defineBlock(196,"Wooden door (Acacia)",[["missing_tile",0]],0,0,7);
Block.setShape(196, 0, 0, 0, 1, 2, 1);
Block.setDestroyTime(196,2);
Player.addItemCreativeInv(196,1,0);
Item.addShapedRecipe(196,1,0,["dd ","dd ","dd "],["d",5,4]);
Item.setCategory(196, 1);

Block.defineBlock(197,"Wooden door (Dark Oak)",[["missing_tile",0]],0,0,7);
Block.setShape(197, 0, 0, 0, 1, 2, 1);
Block.setDestroyTime(197,2);
Player.addItemCreativeInv(150,1,0);
Item.addShapedRecipe(197,1,0,["dd ","dd ","dd "],["d",5,5]);
Item.setCategory(197, 1);

Block.defineBlock(140,"flower pot",[["missing_tile",0]]);
Block.setShape(140, 0, 0, 0, 1, 1, 1);
Block.setDestroyTime(140,3);
Player.addItemCreativeInv(140,1,0);

Block.defineBlock(122,"dragon egg",[["dragon_egg",0]]);
Block.setShape(122, 0, 0, 0, 1, 0.7, 1);
Block.setDestroyTime(122,3);
Player.addItemCreativeInv(122,1,0);

Block.defineBlock(23,"dispenser",[["furnace",3],["furnace",3],["furnace",2],["furnace",2],["furnace",2],["furnace",2]]);
Block.setDestroyTime(23,2);
Player.addItemCreativeInv(23,1,0);
Item.addShapedRecipe(23,1,0,["ccc","clc","crc"],["c",4,0,"l",261,0,"r",331,0]);
Item.setCategory(23, 1);

Block.defineBlock(69,"Lever",[["lever",0],["lever",0],["lever",0],["lever",0],["lever",0],["lever",0]]);
Block.setDestroyTime(69,0);
Player.addItemCreativeInv(69,1,0);
Item.addShapedRecipe(69,1,0,["   "," s "," c "],["c",4,0,"s",280,0]);
Item.setCategory(69, 1);

Block.defineBlock(93,"Redstone Repeater (Block Off)",[["stone_slab",0],["repeater_off",0],["stone_slab",0],["stone_slab",0],["stone_slab",0],["stone_slab",0]]);
Block.setDestroyTime(93,0);
Block.setShape(93, 0, 0, 0, 1, 0.2, 1);
Player.addItemCreativeInv(93,1,0);

Block.defineBlock(94,"Redstone Repeater Block (On)",[["stone_slab",0],["repeater_on",0],["stone_slab",0],["stone_slab",0],["stone_slab",0],["stone_slab",0]]);
Block.setDestroyTime(94,0);
Block.setShape(94, 0, 0, 0, 1, 0.2, 1);
Player.addItemCreativeInv(94,1,0);

Block.defineBlock(97,"Monster Egg (Stone)",[["stone",0]]);
Block.setDestroyTime(97,2);
Player.addItemCreativeInv(97,1,0);

Block.defineBlock(149,"Redstone Comparator (Off)",[["stone_slab",0],["redstone_dust_cross_overlay",0],["stone_slab",0],["stone_slab",0],["stone_slab",0],["stone_slab",0]]);
Block.setDestroyTime(149,0);
Block.setShape(149, 0, 0, 0, 1, 0.2, 1);

Block.defineBlock(150,"Redstone Coparator (On)",[["stone_slab",0],["redstone_dust_line_overlay",0],["stone_slab",0],["stone_slab",0],["stone_slab",0],["stone_slab",0]]);
Block.setDestroyTime(150,0);
Block.setShape(150, 0, 0, 0, 1, 0.2, 1);

/* Networking */
//Contants
var ACTION_START_SERVICE = "dragonetpe.START_SERVICE";

var mainActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var context = mainActivity.getApplicationConext();

//Initialize DragonetPE Networking Service
var intentStartService = new android.content.Intent("");

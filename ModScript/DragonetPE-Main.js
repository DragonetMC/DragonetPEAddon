/*

 DRAGONET MODPE SCRIPT ADDON
 (Released under GNU LGPL v3 Licence. )
 
 @autor DefinitlyEvil 
 @website http://dragonet.org/
 @github http://github.com/DragonetMC

*/

var mainActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var context = mainActivity.getApplicationContext();
var ScriptManager = com.zhuoweizhang.mcpelauncher.ScriptManager;

new android.widget.Toast(context, "DragonetPE ModScript loaded! ", android.widget.Toast.LENGTH_SHORT).show();

//Load the blocks/items
ScriptManager.callScriptMethod("DragonetPE_Item_load");

//Start up the networking service
ScriptManager.callScriptMethod("DragonetPE_System_startService", context);

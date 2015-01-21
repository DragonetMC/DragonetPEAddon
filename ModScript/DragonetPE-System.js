/*

 DRAGONET MODPE SCRIPT ADDON
 (Released under GNU LGPL v3 Licence. )
 
 @autor DefinitlyEvil 
 @website http://dragonet.org/
 @github http://github.com/DragonetMC

*/

var BROADCAST_NAME = "dragonetpe.BROADCAST";
var ACTION_START_SERVICE = 1;
var ACTION_CONNECT_SERVER = 2;
var ACTION_DISCONNECT_SERVER = 3;

var ScriptManager = com.zhuoweizhang.mcpelauncher.ScriptManager;

function DragonetPE_System_startService(context){
    //Initialize DragonetPE Networking Service
    var intentStartService = new android.content.Intent(BROADCAST_NAME);
    intentStartService.getExtras().putInt("action", ACTION_START_SERVICE);
    context.sendBroadcast(intentStartService);
}

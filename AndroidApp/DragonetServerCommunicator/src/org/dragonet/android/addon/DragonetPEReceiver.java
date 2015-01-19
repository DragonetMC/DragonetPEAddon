package org.dragonet.android.addon;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class DragonetPEReceiver extends BroadcastReceiver{
	public final static String ACTION_NAME = "dragonetpe.BROADCAST";
	
	@Override
	public void onReceive(Context context, Intent intent) {
		if(!intent.getAction().equalsIgnoreCase(ACTION_NAME)) return;
		if(!intent.getExtras().containsKey("action")){
			return;
		}
		Intent intentService = new Intent();
		intentService.setClass(context, DragonetPEService.class);
		intentService.putExtras(intent);
		context.startService(intentService);
	}
}

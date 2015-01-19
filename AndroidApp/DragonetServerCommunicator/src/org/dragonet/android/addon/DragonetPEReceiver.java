package org.dragonet.android.addon;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class DragonetPEReceiver extends BroadcastReceiver{
	public final static String ACTION_NAME = "dragonetpe.CONNECT_SERVER";
	
	@Override
	public void onReceive(Context context, Intent intent) {
		if(!intent.getAction().equalsIgnoreCase(ACTION_NAME)) return;
		if(!intent.getExtras().containsKey("ip") || !intent.getExtras().containsKey("port")){
			return;
		}
		Intent intentService = new Intent();
		intentService.setClass(context, DragonetPEService.class);
		intentService.getExtras().putString("ip", intent.getExtras().getString("ip"));
		intentService.getExtras().putInt("port", intent.getExtras().getInt("port"));
		context.startService(intentService);
	}
}

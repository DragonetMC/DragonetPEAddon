package org.dragonet.android.addon;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.widget.Toast;

public class DragonetPEService extends Service {

	@Override
	public void onCreate() {
	}
	
	@Override
	public void onStart(Intent intent, int startId) {
		if(!intent.getExtras().containsKey("ip") || !intent.getExtras().containsKey("port")){
			return;
		}
		String ip = intent.getExtras().getString("ip");
		int port = intent.getExtras().getInt("port");
		Toast.makeText(this, "DragonetPEAddon: Connecting to " + ip + ":" + port + "... ", Toast.LENGTH_SHORT).show();
	}
	
	@Override
	public IBinder onBind(Intent arg0) {
		return null;
	}

}

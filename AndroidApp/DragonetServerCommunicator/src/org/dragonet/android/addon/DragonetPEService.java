package org.dragonet.android.addon;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.widget.Toast;

public class DragonetPEService extends Service {

	private DragonetPEThread thread;
	private boolean isRunnning;
	
	@Override
	public void onCreate() {
		this.createThread();
	}
	
	@Override
	public void onStart(Intent intent, int startId) {
		if(!intent.getExtras().containsKey("action")){
			return;
		}
		this.createThread();
		int action = intent.getExtras().getInt("action");
		switch(action){
		case DragonetPEActions.START_SERVICE:
			break;
		case DragonetPEActions.CONNECT_SERVER:
			String ip = intent.getExtras().getString("ip");
			int port = intent.getExtras().getInt("port");
			Toast.makeText(this, "DragonetPEAddon: Connecting to " + ip + ":" + port + "... ", Toast.LENGTH_SHORT).show();
			break;
		case DragonetPEActions.DISCONNECT_SERVER:
			
			break;
		}
	}
	
	private void createThread(){
		if(this.thread == null){
			this.isRunnning = true;
			this.thread = new DragonetPEThread(this);
		}
	}
	
	public boolean isRunning(){
		return this.isRunnning;
	}
	
	@Override
	public void onDestroy() {
		this.isRunnning = false;
	}
	
	@Override
	public IBinder onBind(Intent arg0) {
		return null;
	}

}

package org.dragonet.android.addon;

import java.net.InetSocketAddress;

import org.dragonet.android.addon.net.DragonetPESocket;

import android.widget.Toast;

public class DragonetPEThread extends Thread{

	private DragonetPEService service;
	private InetSocketAddress remoteAddress;
	private DragonetPESocket socket;
	
	public DragonetPEThread(DragonetPEService service) {
		this.service = service;
	}
	
	@Override
	public void run() {
		Toast.makeText(this.service, "DragonetPE Addon Started! ", Toast.LENGTH_SHORT).show();
		while(this.service.isRunning()){
			//TODO
		}
		Toast.makeText(this.service, "DragonetPE Addon Stopped! ", Toast.LENGTH_SHORT).show();
	}
	
	public void onJoinServer(String ip, int port){
		//TODO: Disconnect current and create a new socket
	}
	
	
	
	//Getters
	
	public DragonetPEService getService() {
		return service;
	}
	
	public InetSocketAddress getRemoteAddress() {
		return remoteAddress;
	}
}

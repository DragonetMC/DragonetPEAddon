package org.dragonet.android.addon;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.InetSocketAddress;
import java.net.Socket;

public class DragonetPEThread extends Thread{

	private InetSocketAddress remoteAddress;
	private Socket socket;
	
	private DataInputStream dis;
	private DataOutputStream dos;
	
	private boolean isRecevingHeader;
	private short packetLength;
	
	public DragonetPEThread(String ip, int port) {
		this.remoteAddress = new InetSocketAddress(ip, port);
		this.packetLength = -1;
	}
	
	@Override
	public void run() {
		//TODO
	}
	
	public InetSocketAddress getRemoteAddress() {
		return remoteAddress;
	}
}

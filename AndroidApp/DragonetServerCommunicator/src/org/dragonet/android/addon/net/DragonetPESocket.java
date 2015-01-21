package org.dragonet.android.addon.net;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;

public class DragonetPESocket {
	private Socket socket;
	
	private DataInputStream dis;
	private DataOutputStream dos;
	
	private boolean isRecevingHeader;
	private short packetLength;
}

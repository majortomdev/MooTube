package com.majortomdev.MooTube.models;

public class VStatus {

	public enum VState {
		READY, PROCESSING
	}

	private VState state;

	public VStatus(VState state) {
		super();
		this.state = state;
	}

	public VState getState() {
		return state;
	}

	public void setState(VState state) {
		this.state = state;
	}

}


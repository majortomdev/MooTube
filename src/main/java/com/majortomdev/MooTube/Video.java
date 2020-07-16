package com.majortomdev.MooTube;

import com.fasterxml.jackson.annotation.JsonIgnore;

/*by JoeK 15/07/20*/
public class Video {
	
	private String title;
	
	 
	private Long id;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}

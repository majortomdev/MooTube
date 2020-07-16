package com.majortomdev.MooTube;

/*by JoeK 15/07/20*/
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class VideoController {
	
	private List<Video> videos = new ArrayList<Video>();

	@PostMapping("/video")
	public @ResponseBody Video saveVideo(@RequestBody Video vid) {
		vid.setId(1l);
		videos.add(vid); 
		
		
		return vid;
	}
	
	

}

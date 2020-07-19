package com.majortomdev.MooTube;

/*by JoeK 15/07/20*/
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VideoController {
	
	private List<Video> videos = new ArrayList<Video>();
	
	@GetMapping("/video")
	public List<Video>  getVideoList() {
		

		
		return videos;
	}
	
	
	
	
	

	@PostMapping("/video")
	public Video saveVideo(@RequestBody Video vid) {
		if(videos.size()==0) {
			vid.setId(1l);
		}else {
			long l = videos.get(videos.size()-1).getId();
			vid.setId(l+1);
		}
		
		vid.setDataUrl("http://localhost:8081/video/"+vid.getId()+"/data");
		
		videos.add(vid); 
		return vid;
	}
	
	

}

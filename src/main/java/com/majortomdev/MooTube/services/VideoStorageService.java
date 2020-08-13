package com.majortomdev.MooTube.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.majortomdev.MooTube.models.Video;
import com.majortomdev.MooTube.repositories.VideoRepository;

@Service
public class VideoStorageService {
	
	@Autowired
	private VideoRepository videoRepo;
	
	@PostMapping("save")
	public Video saveVideo(
			@RequestParam("files") MultipartFile file) throws IOException {
		//String fileName00 = file.getOriginalFilename();
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		Video vid = new Video();
		return vid;
		
	}

}

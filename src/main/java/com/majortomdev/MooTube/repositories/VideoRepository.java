package com.majortomdev.MooTube.repositories;

 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.majortomdev.MooTube.models.Video;

@CrossOrigin
@Repository
public interface VideoRepository extends JpaRepository<Video, Long>{

}

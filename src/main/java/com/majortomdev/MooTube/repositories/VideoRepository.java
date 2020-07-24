package com.majortomdev.MooTube.repositories;

 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.majortomdev.MooTube.models.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long>{

}
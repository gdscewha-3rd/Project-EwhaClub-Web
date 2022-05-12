package com.gdscewha.ewhaclub.repository;

import com.gdscewha.ewhaclub.domain.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    List<Club> findByNameOrEngName(String korKey, String engKey);
    List<Club> findByEngNameIgnoreCaseContaining(String keyword);
}

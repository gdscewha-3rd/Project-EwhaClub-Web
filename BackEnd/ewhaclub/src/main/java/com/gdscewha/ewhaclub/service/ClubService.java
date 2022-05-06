package com.gdscewha.ewhaclub.service;

import com.gdscewha.ewhaclub.domain.Club;
import com.gdscewha.ewhaclub.repository.ClubRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ClubService {

    private final ClubRepository clubRepository;

    /**
     * 전체 동아리 조회
     */
    public List<Club> findClubs() {
        return clubRepository.findAll();
    }
}

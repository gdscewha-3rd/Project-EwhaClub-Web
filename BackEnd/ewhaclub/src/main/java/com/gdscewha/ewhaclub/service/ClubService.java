package com.gdscewha.ewhaclub.service;

import com.gdscewha.ewhaclub.domain.Club;
import com.gdscewha.ewhaclub.dto.DetailPageClubDto;
import com.gdscewha.ewhaclub.dto.MainPageClubDto;
import com.gdscewha.ewhaclub.repository.ClubRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class ClubService {

    private final ClubRepository clubRepository;
    private final ModelMapper modelMapper = new ModelMapper();

    public ClubService(ClubRepository clubRepository){
        this.clubRepository = clubRepository;
    }

    /**
     * 전체 동아리 조회
     */
    public List<Club> findClubs() {
        return clubRepository.findAll();
    }

    //특정 동아리 조회
    public DetailPageClubDto getDetailPage(Long clubId){
        Optional<Club> clubWrapper = clubRepository.findById(clubId);
        Club club = clubWrapper.get();
        DetailPageClubDto detailPageClubDto = modelMapper.map(club, DetailPageClubDto.class);

        //조회수 상승 방지용 주석처리
        //club.updateView();

        return detailPageClubDto;
    }

    //동아리 검색
    public List<MainPageClubDto> searchClubs(String keyword){
        /*List<MainPageClubDto> searchResults = new ArrayList<>();
        if(keyword.matches(".*[ㄱ-하-ㅣ가-힣]+.*")){
            searchResults.addAll(clubRepository.findByNameContaining(keyword).stream()
                    .map(c -> modelMapper.map(c, MainPageClubDto.class))
                    .collect(Collectors.toList()));
        }
        else{
            searchResults.addAll(clubRepository.findByEngNameIgnoreCaseContaining(keyword).stream()
                    .map(c -> modelMapper.map(c, MainPageClubDto.class))
                    .collect(Collectors.toList()));
        }
        return searchResults;*/

        return clubRepository.findByNameOrEngName(keyword, keyword).stream()
                .map(c -> modelMapper.map(c, MainPageClubDto.class))
                .collect(Collectors.toList());
    }
    
}

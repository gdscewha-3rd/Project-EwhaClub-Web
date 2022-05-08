package com.gdscewha.ewhaclub.controller;

import com.gdscewha.ewhaclub.domain.Club;
import com.gdscewha.ewhaclub.dto.DetailPageClubDto;
import com.gdscewha.ewhaclub.dto.MainPageClubDto;
import com.gdscewha.ewhaclub.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClubController {
    @Autowired
    private ClubService clubService;

    public ClubController(ClubService clubService){
        this.clubService = clubService;
    }

    @GetMapping("/clubs")
    public List<MainPageClubDto> getClubs() {
        List<Club> clubs = clubService.findClubs();
        List<MainPageClubDto> clubList = new ArrayList<>();
        for (Club club : clubs) {
            MainPageClubDto dto = MainPageClubDto.builder()
                    .id(club.getId())
                    .name(club.getName())
                    .category(club.getCategory())
                    .shortDescription(club.getShortDescription())
                    .isRecruiting(club.isRecruiting())
                    .mainImgUrl(club.getMainImgUrl())
                    .build();

            clubList.add(dto);
        }

        return clubList;
    }

    @GetMapping(value="/club/{clubId}")
    public DetailPageClubDto getDetailPage(@PathVariable("clubId") Long clubId){
        DetailPageClubDto detailPageClubDto = clubService.getDetailPage(clubId);
        return detailPageClubDto;
    }

    @GetMapping(value="/clubs/search")
    public List<MainPageClubDto> searchClubs(@RequestParam("name") String name){
        return clubService.searchClubs(name);
    }
}

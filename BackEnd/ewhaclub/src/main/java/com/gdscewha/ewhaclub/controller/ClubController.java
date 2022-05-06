package com.gdscewha.ewhaclub.controller;

import com.gdscewha.ewhaclub.domain.Club;
import com.gdscewha.ewhaclub.dto.MainPageClubDto;
import com.gdscewha.ewhaclub.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClubController {
    private final ClubService clubService;

    @GetMapping("/clubs")
    public List<MainPageClubDto> getClubs() {
        List<Club> clubs = clubService.findClubs();
        List<MainPageClubDto> clubList = new ArrayList<>();
        for(Club club: clubs) {
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
}

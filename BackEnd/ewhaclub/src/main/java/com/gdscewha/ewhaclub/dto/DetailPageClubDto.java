package com.gdscewha.ewhaclub.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DetailPageClubDto {

    @NotNull
    private Long id;
    private String main_img_url;
    private String name;
    private String eng_name;
    private Long category_id;
    private String short_description;
    private String detail_description;
    private String detail_activity;
    private Boolean is_recruiting;
    private LocalDateTime recruit_start;
    private LocalDateTime recruit_end;
    private String recruit_requirement;
    private String how_to_apply;
    private Long view_cnt;
    private String poster_img_url;
    private String insta_url;
    private String facebook_url;
    private String youtube_url;
}
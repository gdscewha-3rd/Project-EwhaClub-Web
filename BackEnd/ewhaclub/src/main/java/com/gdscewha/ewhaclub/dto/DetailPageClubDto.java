package com.gdscewha.ewhaclub.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
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
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class DetailPageClubDto {

    @NotNull
    private Long id;
    private String mainImgUrl;
    private String name;
    private String engName;
    private Long category;
    private String shortDescription;
    private String detailDescription;
    private String detailActivity;
    private Boolean isRecruiting;
    private LocalDateTime recruitStart;
    private LocalDateTime recruitEnd;
    private String recruitRequirement;
    private String howToApply;
    private Long viewCnt;
    private String posterImgUrl;
    private String instaUrl;
    private String facebookUrl;
    private String youtubeUrl;
}
package com.gdscewha.ewhaclub.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class MainPageClubDto {

    @NotNull
    private Long id;
    private String mainImgUrl;
    private String name;
    private int category;
    private String shortDescription;
    private boolean isRecruiting;

}

package com.gdscewha.ewhaclub.dto;

import com.gdscewha.ewhaclub.domain.Club;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MainPageClubDto {

    @NotNull
    private Long id;
    private String mainImgUrl;
    private String name;
    private int category;
    private String shortDescription;
    private boolean isRecruiting;

    public MainPageClubDto(@NotNull Long id, String mainImgUrl, String name,
                           int category, String shortDescription, boolean isRecruiting) {
        this.id = id;
        this.mainImgUrl = mainImgUrl;
        this.name = name;
        this.category = category;
        this.shortDescription = shortDescription;
        this.isRecruiting = isRecruiting;
    }
}

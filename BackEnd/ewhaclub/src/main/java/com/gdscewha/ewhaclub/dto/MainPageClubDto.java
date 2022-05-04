package com.gdscewha.ewhaclub.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class MainPageClubDto {

    @NotNull
    private Long id;
    private String main_img_url;
    private String name;
    private String category_name;
    private String short_description;
    private boolean is_recruiting;

}

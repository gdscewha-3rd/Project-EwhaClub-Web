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
    private String main_img_url;
    private String name;
    private String category_name;
    private String short_description;
    private boolean is_recruiting;


}

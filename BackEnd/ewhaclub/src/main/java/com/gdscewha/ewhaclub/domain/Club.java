package com.gdscewha.ewhaclub.domain;

import lombok.Getter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "club_id")
    private Long id;

    @Column(nullable = false)
    private int category;

    @Column(nullable = false, length = 45)
    private String name;

    @Column(nullable = false, length = 45)
    private String engName;

    @Column(nullable = false, length = 255)
    private String shortDescription;

    @Column(nullable = false, length = 255)
    private String detailDescription;

    @Column(nullable = false, length = 255)
    private String detailActivity;

    @Column(nullable = false)
    private LocalDateTime recruitStart;

    @Column(nullable = false)
    private LocalDateTime recruitEnd;

    @Column(nullable = false, columnDefinition = "TINYINT(1)")
    private boolean isRecruiting;

    @Column(nullable = false, length = 255)
    private String recruitRequirement;

    @Column(nullable = false, length = 255)
    private String howToApply;

    @Column(nullable = false)
    @ColumnDefault("0")
    private Long viewCnt;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String mainImgUrl;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String posterImgUrl;

    @Column(columnDefinition = "TEXT")
    private String instaUrl;

    @Column(columnDefinition = "TEXT")
    private String facebookUrl;

    @Column(columnDefinition = "TEXT")
    private String youtubeUrl;
}

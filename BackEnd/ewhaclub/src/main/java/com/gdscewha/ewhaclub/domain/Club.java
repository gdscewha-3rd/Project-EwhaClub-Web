package com.gdscewha.ewhaclub.domain;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private String youtube_url;

    public void updateView(){
        Long view = this.getView_cnt();
        view++;
        this.setView_cnt(view);
    }

    public Club(int category, String name, String engName,
                String shortDescription, String detailDescription, String detailActivity,
                LocalDateTime recruitStart, LocalDateTime recruitEnd, boolean isRecruiting,
                String recruitRequirement, String howToApply, Long viewCnt, String mainImgUrl,
                String posterImgUrl, String instaUrl, String facebookUrl, String youtubeUrl) {
        this.category = category;
        this.name = name;
        this.engName = engName;
        this.shortDescription = shortDescription;
        this.detailDescription = detailDescription;
        this.detailActivity = detailActivity;
        this.recruitStart = recruitStart;
        this.recruitEnd = recruitEnd;
        this.isRecruiting = isRecruiting;
        this.recruitRequirement = recruitRequirement;
        this.howToApply = howToApply;
        this.viewCnt = viewCnt;
        this.mainImgUrl = mainImgUrl;
        this.posterImgUrl = posterImgUrl;
        this.instaUrl = instaUrl;
        this.facebookUrl = facebookUrl;
        this.youtubeUrl = youtubeUrl;
    }

    public Club() {
    }
}

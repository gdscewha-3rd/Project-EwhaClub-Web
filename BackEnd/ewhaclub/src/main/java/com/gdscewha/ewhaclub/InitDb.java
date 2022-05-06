package com.gdscewha.ewhaclub;

import com.gdscewha.ewhaclub.domain.Club;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class InitDb {
    private final InitService initService;
    @PostConstruct
    public void init() {
        initService.dbInit();
    }
    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final EntityManager em;

        public void dbInit() {
            Club club1 = new Club(3, "동아리1", "Dongari1", "짧은소개", "긴소개", "자세한 활",
                    LocalDateTime.now(), LocalDateTime.now(), true,
            "recruitRequirement", "howToApply", 100L, "mainImgUrl",
                    "posterImgUrl", "instaUrl", "facebookUrl", "youtubeUrl");

            Club club2 = new Club(3, "동아리2", "Dongari2", "짧은소개", "긴소개", "자세한 활",
                    LocalDateTime.now(), LocalDateTime.now(), true,
                    "recruitRequirement", "howToApply", 100L, "mainImgUrl",
                    "posterImgUrl", "instaUrl", "facebookUrl", "youtubeUrl");

            em.persist(club1);
            em.persist(club2);
        }
    }
}

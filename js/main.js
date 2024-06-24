document.addEventListener("DOMContentLoaded",()=>{
    var swiper = new Swiper(".answerSwiper", {
        slidesPerView: 1,
        spaceBetween: 220,
        navigation: {
            nextEl: ".answerSwiper .swiper-button-next",
            prevEl: ".answerSwiper .swiper-button-prev",
        },
            breakpoints: {
                768 : {
                    slidesPerView:2,
                    spaceBetween: 20
                },
                992 : {
                    slidesPerView:3,
                    spaceBetween: 20
                },
                1200 : {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1680 : {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
        }
    });
    var clients = new Swiper(".clientsList", {
        slidesPerView: 1,
        spaceBetween: 220,
        navigation: {
            nextEl: ".clientsList .swiper-button-next",
            prevEl: ".clientsList .swiper-button-prev",
        },
            breakpoints: {
         
                992 : {
                    slidesPerView:2,
                    spaceBetween: 20,
                },
                1200 : {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1680 : {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
        }
    });

    let partnersON = document.querySelector(".partners__more.on");
    let partnersOFF = document.querySelector(".partners__more.off");
    let partnersList = document.querySelector(".partners__list");
    partnersON.addEventListener("click", ()=>{
        partnersList.classList.add("active");
        partnersOFF.classList.add("active");
        partnersON.classList.remove("active");
    })
    partnersOFF.addEventListener("click", ()=>{
        partnersList.classList.remove("active");
        partnersOFF.classList.remove("active");
        partnersON.classList.add("active");
    })
    if(window.innerWidth <= 768){
        var aboutSwiper = new Swiper(".aboutSwiper", {
            slidesPerView: 1,
            spaceBetween: 220,
            navigation: {
                nextEl: ".aboutSwiper .swiper-button-next",
                prevEl: ".aboutSwiper .swiper-button-prev",
            },
   
        });
    }
    window.addEventListener("resize", ()=>{
        if(window.innerWidth <= 768){
            let aboutSwiperDesctop = document.querySelector(".aboutSwiper");
            let about__card = aboutSwiperDesctop.querySelectorAll(".about__card");
            about__card.forEach((item)=>{
                item.classList.add("swiper-slide");
            })
            var aboutSwiper = new Swiper(".aboutSwiper", {
                slidesPerView: 1,
                spaceBetween: 220,
                navigation: {
                    nextEl: ".aboutSwiper .swiper-button-next",
                    prevEl: ".aboutSwiper .swiper-button-prev",
                },
       
            });
            
        }
        else {
            let aboutSwiperDesctop = document.querySelector(".aboutSwiper.swiper-initialized");
            aboutSwiperDesctop.classList.remove("swiper-container-initialized");
            let aboutSlides = aboutSwiperDesctop.querySelectorAll(".swiper-slide");
       

            aboutSlides.forEach((item)=>{
                item.classList.remove("swiper-slide")
                item.classList.remove("swiper-slide-active");
                item.classList.remove("swiper-slide-next");
                item.classList.remove("swiper-slide-prev");
                item.classList.remove("swiper-slide-visible");
                item.classList.remove("swiper-slide-duplicate");
                item.style = ''
            })
        }
    })
});
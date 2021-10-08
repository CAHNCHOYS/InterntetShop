<template>
  <section class="page__top-fullscreen fullscreen">
 
      <swiper v-bind="mainSlider" class="fullscreen__slider">
        <swiper-slide class="fullscreen__slide">
            <div class="container fullscreen__content">
              <div class="fullscreen__title">
                fashion is nothing 

              </div>
              <div class="fullscreen__subtitle">
                but  <span>mischief</span> 
              </div>
              <div class="fullscreen__btn">
                <router-link to="/" class="blue-btn">
                  Shop Now
                </router-link>
              </div>
            </div>


           <div class="fullscreen__bg">
              <img src="../images/Mainpage/bg1.jpg" alt="">
           </div>
           
        </swiper-slide>

        <swiper-slide class="fullscreen__slide">
            <div class="container fullscreen__content">
              <div class="fullscreen__title">
                Super action STAS 

              </div>
             
              <div class="fullscreen__btn">
                <router-link to="/" class="blue-btn">
                  Shop Now
                </router-link>
              </div>
            </div>


           <div class="fullscreen__bg">
              <img src="../images/Mainpage/bg2.jpg" alt="">
           </div>
        </swiper-slide>


          <swiper-slide class="fullscreen__slide">
            <div class="container fullscreen__content">
              <div class="fullscreen__subtitle">
                <span>  Super action STAS and Lorem ipsum dolor sit amet. </span>   
                

              </div>
             
              <div class="fullscreen__btn">
                <router-link to="/" class="blue-btn">
                  Shop Now
                </router-link>
              </div>
            </div>


           <div class="fullscreen__bg">
              <img src="../images/Mainpage/bg2.jpg" alt="">
           </div>
        </swiper-slide>
      
      </swiper>
  



  </section>
</template>

<script>

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Pagination, Navigation]);
// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";




export default {
  name: "MainPage",
  components: {
    Swiper,
    SwiperSlide,
  },


  data() {
    return {
      mainSlider: {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation:true,
        loop:true,
     //   autoHeight:true,
      },
    };
  },
};
</script>

<style lang="scss">
@import "../assets/adaptive-value.scss";


.fullscreen {


    min-height: 100vh;
    display: flex;


		// .fullscreen__slider
		&__slider 
    {
      
        flex: 1 1 auto;
        display: flex;
       
        flex-direction: column;
        .swiper-button-prev,.swiper-button-next{
            width: 40px !important;
          &::after{
            font-size: 36px;
          }
          @media(max-width: 1200px){
            width: 20px !important;
            &::after{
              font-size: 16px;
            }
          }
        }
        .swiper-button-prev{
          
           left: 5px !important
        }
         .swiper-button-next{
       
           right: 5px !important
        }
		}

		// .fullscreen__slide

		&__slide
     {
       position: relative;
       z-index: 3;
      display: flex;
      
      padding-top: 20px;
      padding-bottom: 20px;
      align-items: center;
    
       
		}


    &__content{
      position: relative;
      z-index: 4;
      flex: 1 1 auto;
      padding: 0px 30px 0px 30px;
    }
		// .fullscreen__title
		&__title
     {
    @include adaptive-value('font-size',50 ,28); 
line-height: 55 / 55 * 100%;
font-weight: 700;
text-transform: uppercase;
text-shadow: 0px 1px 1px rgba(0,0,0,0.34);
color: #15232d;
margin: 0px 0px 5px 0px;
		}

		// .fullscreen__subtitle

		&__subtitle 
    {
      
      @include adaptive-value('font-size',40 ,24); 
font-weight: 400;
text-transform: uppercase;
span{

font-weight: 400;
color: #48689a;
}
@include adaptive-value('margin-bottom',80 ,20); 

		}

		// .fullscreen__btn

		&__btn {
		}

		// .fullscreen__bg

		&__bg
     {
       position:absolute;
       z-index: 2;
       width:100%;
        height:100%;
        top:0;
       left:0;
       img{
         object-fit: cover;
         width: 100%;
         height: 100%;
       }
		}
}








</style>

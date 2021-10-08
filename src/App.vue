<template>
  <!-- Компонент  будет зависить от layout а -->
  <component :is="Layouts">
    <router-view></router-view>
  </component>
</template>

<script>
import MainLayout from "./Layouts/MainLayout.vue";
import LoginLayout from "./Layouts/LoginLayout.vue";

export default {
  name: "MainApp",
  components: {
    MainLayout,
    LoginLayout,
  },

  computed: {
    Layouts() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="scss">
//Общие стили и адаптивные
@import "./assets/style.scss";
@import "./assets/adaptive-value.scss";
//---------------------------------------------------------------------------------------------------------
//Подключение шрифтов

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap");
@import "./assets/fonts.scss"; // - Иконочный шрифт
//---------------------------------------------------------------------------------------------------------

#app {
  // font-family: 'Oswald', sans-serif;
  // font-family: 'Myriad'; - Доп шрифты
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Roboto Slab", serif;
  overflow: hidden;
}

// Класс page----------------------
.page {

		// .page__top-fullscreen

		&__top-fullscreen {
		}
}


//---------------------------------------------





//Общие стили (например кноки, ссылки)-----
.blue-btn
 {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   @include adaptive-value('padding-left',50 ,20); 
    @include adaptive-value('padding-right',50 ,20); 
   min-height: 50px;
background-color: #48689a;

font-size: 14px;

font-weight: 400;
text-transform: uppercase;
color: #eeeeee;

transition: 0.8s;
@media (any-hover:hover){
&:hover{
background-color: #1966e2;
}
}
}





//---------------------------------------------------------









</style>

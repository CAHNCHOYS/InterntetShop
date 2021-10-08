<template>
  <header class="header">
    <div class="container">
      <div class="header__top top-header">
        <ul class="top-header__media-menu">
          <li>
            <a href="tel:+(00)-123-456-789" class="top-header__link icon-phone"
              >(00)-123-456-789</a
            >
          </li>
          <li>
            <a href="" class="top-header__link icon-email">weshop@gmail.com</a>
          </li>
        </ul>

        <div class="top-header__search">
          <search-form :window-width="width"></search-form>
        </div>
        <!--Показываем меню только если ширина окна больше 767 елси нет по переносим его в бургер --->
        <ul class="top-header__settings-menu" v-if="width > 767">
          <li>
            <span
              class="top-header__link sub icon-arr-down"
              @click="toggleMoneyMenu"
              :class="{ active: activeMoneyMenu }"
              >{{ moneyMenu.currentMoney }}</span
            >
            <transition name="list">
              <ul
                class="top-header__sub-menu"
                v-if="!isMobile || activeMoneyMenu"
              >
                <li v-for="sublink in moneyMenu.subMenuMoney" :key="sublink">
                  <span class="top-header__sub-link">
                    {{ sublink }}
                  </span>
                </li>
              </ul>
            </transition>
          </li>
          <li>
            <router-link to="/login" class="top-header__link"
              >Login</router-link
            >
          </li>
        </ul>
      </div>

      <div class="header__bottom bottom-header">
        <router-link to="/" class="bottom-header__logo">WEBSHOP</router-link>

        <div
          class="bottom-header__burger"
          @click="activeBurgerMenu = !activeBurgerMenu"
          :class="{ active: activeBurgerMenu }"
        >
          <span> </span>
        </div>

        <!---- Это меню идет в бургер на разрешении меньше 767 пикселей--->
        <nav class="bottom-header__menu" :class="{ active: activeBurgerMenu }">
          <ul class="bottom-header__list">
            <li v-for="link in bottomHeaderMenu" :key="link">
              <router-link
                :to="link.to"
                v-if="!link.subLinks"
                class="bottom-header__link"
                >{{ link.linkText }}</router-link
              >
              <span
                class="bottom-header__link icon-arr-down"
                :class="{ active: link.activeSubMenu }"
                v-if="link.subLinks"
                @click="link.activeSubMenu = !link.activeSubMenu"
              >
                {{ link.linkText }}
              </span>
              <transition name="fade">
                <ul
                  class="bottom-header__sub-menu"
                  v-if="link.subLinks && (!isMobile || link.activeSubMenu)"
                >
                  <li v-for="subLink in link.subLinks" :key="subLink">
                    <router-link
                      class="bottom-header__sub-link"
                      :to="subLink.to"
                      >{{ subLink.linkText }}</router-link
                    >
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
          <ul class="top-header__settings-menu" v-if="width < 767">
            <li>
              <span
                class="top-header__link sub icon-arr-down"
                @click="toggleMoneyMenu"
                :class="{ active: activeMoneyMenu }"
                >{{ moneyMenu.currentMoney }}</span
              >
              <transition name="list">
                <ul
                  class="top-header__sub-menu"
                  v-if="!isMobile || activeMoneyMenu"
                >
                  <li v-for="sublink in moneyMenu.subMenuMoney" :key="sublink">
                    <span class="top-header__sub-link">
                      {{ sublink }}
                    </span>
                  </li>
                </ul>
              </transition>
            </li>
            <li>
              <router-link to="/login" class="top-header__link"
                >Login</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="bottom-header__cart">
          <Cart></Cart>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cart from "../components/headerCart.vue";
import { mapMutations } from "vuex";
export default {
  name: "Header",
  components: {
    Cart,
  },
  data() {
    return {
      //Текущий первод страницы(если что перевод странциы не организован, просто изменяется текст)
      //Текущая валюта на сайте, перевод валюты организован
      width: document.documentElement.clientWidth,

      isMobile: document.body.classList.contains("_mobile"),
      activeMoneyMenu: false,
      moneyMenu: {
        currentMoney: "USD",
        subMenuMoney: ["Euro", "Rub", "Ua"],
      },
      //Меню внизу шапки (основное)
      bottomHeaderMenu: [
        {
          linkText: "Home",
          //to - Куда ведет ссылка
          to: "/",
        },
        {
          linkText: "Shop",
          to: "/",
        },
        {
          linkText: "Man",
          activeSubMenu: false,
          //Если есть  подменю у ссылки
          subLinks: [
            {
              linkText: "Gachi фтьвв фы ",
              to: "/asdsad",
            },
            {
              linkText: "Gachi dasd",
              to: "/Ass",
            },
            {
              linkText: "Gachi dasd ads as",
              to: "/",
            },
            {
              linkText: "Gachi d",
              to: "/",
            },
          ],
        },
        {
          linkText: "Woman",
          activeSubMenu: false,
          //Если есть большой контент в саб меню ( много меню)
          subLinks: [
            {
              linkText: "Gachi",
              to: "/",
            },
            {
              linkText: "Gachi",
              to: "/",
            },
            {
              linkText: "Veru beautiful and nice shirts for woman",
              to: "/",
            },
          ],
        },
        {
          linkText: "Blog",
          to: "/Blog",
        },
        {
          linkText: "Contact Us",
          to: "/Contacts",
        },
      ],
      activeBurgerMenu: false,
    };
  },
  methods: {
    toggleMoneyMenu() {
      if (this.isMobile) {
        this.activeMoneyMenu = !this.activeMoneyMenu;
      }
    },
    updateWidth() {
      this.width = window.innerWidth;
      this.UPDATE_WINDOW_WIDTH(this.width);
    },
    ...mapMutations(["UPDATE_WINDOW_WIDTH"]),
  },
  computed: {},

  created() {
    //Следием  за ширииной экрана (для аадпитвноси) ()
    window.addEventListener("resize", this.updateWidth);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/adaptive-value.scss";

.header {
  position: relative;
  z-index: 15;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 15;
    background-color: #48689a;
  }

  // .header__top
  &__top {
    @include adaptive-value("margin-bottom", 30, 15);
    @media (max-width: 767px) {
      margin: 0px 0px 9px 0px;
    }
  }

  // .header__bottom

  &__bottom {
  }

  padding: 15px 0px;
  @media (max-width: 767px) {
    padding: 7px 0px;
  }
}

.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // .top-header__media-menu
  &__media-menu {
    position: relative;
    z-index: 17;
    display: flex;
    flex-wrap: wrap;
    > li:not(:last-child) {
      @include adaptive-value("margin-right", 28, 10);
    }
  }

  // .top-header__link

  &__link {
    transition: 0.8s;
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    line-height: 1;
    font-weight: 400;
    color: #eeeeee;
    font-weight: 300;
    @media (any-hover: hover) {
      &:hover {
        color: #c2bebe;
      }
    }
    &.sub {
      cursor: pointer;
      &::before {
        position: absolute;
        padding: 0px 0px 0px 0px;
        top: 0;
        right: 0;
      }
      position: relative;
      padding: 0px 20px 0px 0px;
    }
    &::before {
      padding: 0px 10px 0px 0px;
      display: inline-block;
      transform: translate(0, 2px);
      transition: 0.8s;
    }

    &.active {
      &::before {
        transform: rotate(180deg);
      }
    }
  }

  // .top-header__search
  &__search {
    position: relative;
    z-index: 17;
    flex: 0 1 300px;
    @media (max-width: 666px) {
      flex: 0 1 auto;
      margin: 0px 0px 0px 10px;
    }
  }

  // .top-header__settings-menu

  &__settings-menu {
    position: relative;
    z-index: 18;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    > li:not(:last-child) {
      @include adaptive-value("margin-right", 28, 10);
    }
    > li {
      position: relative;
      @media (any-hover: hover) {
        &:hover {
          .top-header__sub-menu {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
          }
          .top-header__link.sub::before {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  // .top-header__sub-menu

  &__sub-menu {
    background-color: white;
    padding: 10px 0px;
    position: absolute;
    top: 16px;
    right: 0;
    z-index: 17;
    > li:not(:last-child) {
      margin: 0px 0px 15px 0px;
    }
    transition: 0.8s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    @media (max-width: 767px) {
      position: static;
    }
  }

  // .top-header__sub-link

  &__sub-link {
    cursor: pointer;
    padding: 0px 30px 0px 30px;
    display: inline-flex;
    color: black;
    font-size: 16px;
    transition: 0.8s;
    @media (any-hover: hover) {
      &:hover {
        padding: 0px 30px 0px 35px;
      }
    }
  }
}

.bottom-header {
  display: flex;
  justify-content: space-between;

  align-items: center;
  // .bottom-header__logo
  &__logo {
    flex: 0 1 161px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    border: 2px solid #00cdc6;
    text-transform: uppercase;
    @include adaptive-value("font-size", 40, 25);
    color: #06c4c2;
    text-align: center;
    font-family: "Oswald", sans-serif;
    position: relative;
    z-index: 17;
    @media (max-width: 767px) {
      order: 2;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }

  // .bottom-header__burger

  &__burger {
    display: none;
    position: relative;
    z-index: 17;
    @media (max-width: 767px) {
      display: block;
      flex-basis: 30px;
      height: 20px;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 5px;
        background-color: white;
        transition: 0.7s;
        left: 0;
      }
      span {
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 5px;
        background-color: white;
        top: 46.5%;
        left: 0;
        transition: 0.7s;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
      order: 1;
      //При нажатии на бургер-меню
      &.active {
        &::before {
          transform: rotate(45deg);
          top: 6.7px;
        }
        span {
          opacity: 0;
        }
        &::after {
          transform: rotate(-45deg);
          bottom: 10px;
        }
      }
    }
  }

  // .bottom-header__menu

  &__menu {
    margin: 0px 10px 0px 10px;
    @media (max-width: 767px) {
      margin: 0px 0px 0px 0px;
      position: fixed;
      width: 320px;
      height: 100%;
      transition: 0.8s;
      top: 0;
      left: -100%;
      overflow: auto;
      padding: 100px 15px 20px 15px;
      z-index: 12;
      background-color: whitesmoke;
      &.active {
        left: 0;
      }

      .top-header__settings-menu {
        flex-direction: column;
        margin: 10px 0px 0px 0px;
        align-items: unset;
        > li:not(:last-child) {
          margin: 0px 0px 20px 0px;
        }
      }
      //Делаем ссылки в меню бургере блочнгыми
      .bottom-header__link {
        display: block;
        &::before {
          font-size: 18px !important;
        }
      }
      .top-header__link {
        color: black;
        font-weight: 500;
        display: block;
        font-size: 28px;
        padding: 0px 20px 0px 0px;
        &::before {
          font-size: 15px;
          top: 50%;
          display: inline-block;
          transform: translate(0, -50%);
          font-size: 18px;
        }
        &.active {
          &::before {
            transform: rotate(180deg) translate(0, 50%);
          }
        }
      }
      .top-header__sub-menu {
        background-color: transparent;
      }
    }
  }

  // .bottom-header__list

  &__list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 17;
    > li:not(:last-child) {
      @include adaptive-value("margin-right", 40, 20);
    }
    > li {
      position: relative;
      @media (any-hover: hover) {
        &:hover {
          .bottom-header__sub-menu {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
          }
          > .bottom-header__link::before {
            transform: translate(0, -50%) rotate(180deg);
          }
        }
      }
    }
    @media (max-width: 767px) {
      > li:not(:last-child) {
        margin: 0px 0px 20px 0px;
      }

      flex-direction: column;

      .bottom-header__link {
        font-size: 28px;
        color: black;
      }
    }
  }

  // .bottom-header__link

  &__link {
    font-size: 14px;
    padding: 0px 0px 7px 0px;
    font-weight: 400;
    color: #eeeeee;
    cursor: pointer;
    display: inline-flex;
    transition: 0.7s;
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
    //Если у ссылке есть под меню то добавляем стрелку вниз
    &.icon-arr-down {
      position: relative;
      padding: 0px 15px 0px 0px;
      &::before {
        transition: 0.9s;
        position: absolute;
        right: 0;
        top: 50%;
        display: inline-block;
        font-size: 13px;
        transform: translate(0, -50%);
      }
    }
    &.active {
      &::before {
        transform: translate(0, -50%) rotate(180deg);
      }
    }
  }

  // .bottom-header__cart
  &__cart {
    flex: 0 1 100px;
    position: relative;
    z-index: 17;
    @media (max-width: 767px) {
      order: 3;
    }
  }

  // .bottom-header__sub-menu

  &__sub-menu {
    padding: 10px 0px 10px 0px;
    position: absolute;
    right: 0;
    top: 23px;
    transition: 0.8s;
    min-width: 150px;
    background-color: whitesmoke;
    > li:not(:last-child) {
      margin: 0px 0px 10px 0px;
    }
    &::before {
      content: "";
      position: absolute;
      right: 15px;
      bottom: 100%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid whitesmoke;
    }
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    @media (max-width: 767px) {
      position: static;
    }
  }

  // .bottom-header__sub-link
  &__sub-link {
    // white-space: nowrap;
    display: inline-flex;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 700;
    text-transform: uppercase;
    color: #3c4852;
    padding: 0px 20px;
    transition: 0.8s;
    @media (any-hover: hover) {
      &:hover {
        color: #5682a7;
      }
    }
  }
}

// На телефонах делаем меню видимым(чтобы оно открывлось оп клику, а не по наведению)------------
body._mobile {
  .top-header__sub-menu {
    opacity: 1;
    visibility: visible;
    transition: 0s;
    pointer-events: all;
  }
  .bottom-header__sub-menu {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transition: 0s;
  }
}
//--------------------------------------------------------------------------

//---Анимация появления выпадающего меню
.list-enter-active,
.list-leave-active {
  transition: all 6s ease-out;
}

.list-enter-from {
  transform: translate(0, -100%);
}

.list-enter-to {
  transform: scale(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

//--------------------------------------------
</style>

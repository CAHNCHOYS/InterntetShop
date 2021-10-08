<template>
  <footer class="footer">
    <div class="footer__top top-footer">
      <div class="container">
        <div class="top-footer__menu">
          <div class="top-footer__col">
            <router-link to="/" class="top-footer__main-title"
              >weshop</router-link
            >
            <div class="top-footer__text">
              <p>USA most-loved online fashion store featuring new deals.</p>
              <p>
                When it comes to trend, we all love being in it — Seeping every
                bit of it in WESHOP.com
              </p>
            </div>
          </div>
          <div class="top-footer__col" v-for="col in menuCols" :key="col">
            <div
              class="top-footer__title"
              :class="{
                'icon-arr-down': GET_WINDOW_WIDTH < 500,
                active: col.activeSub,
              }"
              @click="col.activeSub = !col.activeSub"
            >
              {{ col.title }}
            </div>
            <transition name="list">
              <ul class="top-footer__list" v-if="!isMobile || col.activeSub">
                <li v-for="link in col.subLinks" :key="link">
                  <router-link class="top-footer__link" :to="`/${link}`">
                    {{ link }}
                  </router-link>
                </li>
              </ul>
            </transition>
          </div>
          <div class="top-footer__col">
            <div class="top-footer__title">Instagram feed</div>
            <div class="top-footer__insta-fotos">
              <a href="">
                <img src="../images/Footer/i1.png" alt="" />
              </a>
              <a href="">
                <img src="../images/Footer/i2.jpg" alt="" />
              </a>
              <a href="">
                <img src="../images/Footer/i3.png" alt="" />
              </a>
              <a href="">
                <img src="../images/Footer/i4.jpg" alt="" />
              </a>
            </div>
            <div class="top-footer__payments">
              <router-link to="/" class="top-footer__payment icon-master-card">
              </router-link>
              <router-link to="/" class="top-footer__payment icon-visa">
              </router-link>
              <router-link to="/" class="top-footer__payment icon-paypal">
              </router-link>
              <router-link to="/" class="top-footer__payment icon-card">
              </router-link>
            </div>
          </div>
        </div>
        <div class="top-footer__socials">
          <a href="" class="top-footer__social icon-google"> </a>
          <a href="" class="top-footer__social icon-twitter"> </a>
          <a href="" class="top-footer__social icon-facebook"> </a>
          <a href="" class="top-footer__social icon-tune"> </a>
          <a href="" class="top-footer__social icon-in"> </a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <a href="" class="footer__copyrights">
          OOO ZMHIX AIRLINES All rights researved 2016
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      isMobile: document.body.classList.contains("_mobile"),
      windowWidth: document.documentElement.clientWidth,

      menuCols: [
        {
          title: "Support",
          activeSub: false,
          subLinks: ["How to Order?", "Assistance", "Delivery", "style"],
        },
        {
          title: "Duties",
          activeSub: false,
          subLinks: ["Terms and Conditions", "Shop Policy", "Contact Us"],
        },
      ],
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["GET_WINDOW_WIDTH"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/adaptive-value.scss";

.footer {
  // .footer__top
  &__top {
    @include adaptive-value("padding-top", 100, 40);
    @include adaptive-value("padding-bottom", 50, 20);
  }

  // .footer__bottom

  &__bottom {
    background-color: #48689a;
    padding: 8px 0px;
    text-align: center;
  }

  // .footer__copyrights

  &__copyrights {
    transition: 0.8s;
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
    font-size: 12px;

    font-weight: 400;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
}
.top-footer {
  // .top-footer__menu

  &__menu {
    display: grid;
    grid-template-columns: 250px 150px 190px 280px;
    column-gap: 20px;
    row-gap: 20px;
    justify-content: space-between;
    @supports not (justify-content: space-between) {
      column-gap: 90px;
    }
    @include adaptive-value("margin-bottom", 60, 20);
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
    }
    @media (max-width: 500px) {
      display: block;
      > div:not(:last-child) {
        margin: 0px 0px 20px 0px;
      }
    }
  }

  // .top-footer__col

  &__col {
  }

  // .top-footer__main-title

  &__main-title {
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    display: inline-block;
    font-weight: 600;
    color: #48689a;
    margin: 0px 0px 20px 0px;
  }

  // .top-footer__text

  &__text {
    font-size: 12px;
    line-height: 1.1;
    font-weight: 300;
    color: #3c4852;
    > p:not(:last-child) {
      margin: 0px 0px 15px 0px;
    }
  }

  // .top-footer__link
  &__link {
    @extend .top-footer__text;
    transition: 0.8s;
    @media (any-hover: hover) {
      &:hover {
        color: #2172b4;
      }
    }
  }

  // .top-footer__title

  &__title {
    font-size: 16px;

    font-weight: 400;
    color: #15232d;
    @include adaptive-value("margin-bottom", 35, 20);
    &.icon-arr-down {
      display: inline-block;
      margin: 0px 0px 5px 0px;
      padding: 0px 20px 0px 0px;
      position: relative;
      &::before {
        position: absolute;
        right: 0;
        font-size: 15px;
        color: black;
        top: 50%;
        display: inline-block;
        transition: 0.8s;
        transform: translate(0, -50%);
      }
      &.active::before {
        transform: translate(0, -50%) rotate(180deg);
      }
    }
  }

  // .top-footer__list

  &__list {
    > li:not(:last-child) {
      margin: 0px 0px 5px 0px;
    }
  }

  // .top-footer__insta-fotos

  &__insta-fotos {
    margin: 0px 0px 20px 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > a {
      display: block;
      flex-basis: 23%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  // .top-footer__payments

  &__payments {
    border-top: 1px solid #eeeeee;
    padding: 20px 0px 20px 0px;
    display: flex;
    flex-wrap: wrap;
    > a:not(:last-child) {
      margin: 0px 10px 0px 0px;
    }
    border-bottom: 1px solid #eeeeee;
  }

  // .top-footer__payment

  &__payment {
    &::before {
      font-size: 16px;
      color: rgb(255, 166, 0);
    }
  }

  // .top-footer__socials

  &__socials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > a:not(:last-child) {
      margin: 0px 30px 0px 0px;
    }
  }

  // .top-footer__social

  &__social {
    transition: 0.8s;
    @media (any-hover: hover) {
      &:hover::before {
        color: #008cff;
      }
    }
    &::before {
      transition: 0.8s;
      color: #3c4852;
      font-size: 18px;
    }
  }
}

.icon-master-card {
}
.icon-visa {
}
.icon-paypal {
}
.icon-card {
}

//Появление меню на мобиле-----------
.list-enter-active,
.list-leave-active {
  transition: all 0.9s ease;
}

.list-enter-from {
  transform: translate(0, 100%);
  opacity: 0;
}

.list-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}

.list-leave-from {
  opacity: 1;
}

.list-leave-to {
  transform: scale(0);
}

//------------------------------------------
</style>

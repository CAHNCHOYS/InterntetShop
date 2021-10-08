<template>
  <div class="cart">
    <div class="cart__row">
      <div class="cart__products-col">
        <div
          class="cart__cart icon-cart2"
          @click="activeCartMenu = !activeCartMenu"
        >
          <div class="cart__count-products">
            {{ GET_CURRENT_CARTPRODUCTS_COUNT }}
          </div>
        </div>
        <transition name="sub">
          <div class="cart__submenu" v-if="!isMobile || activeCartMenu">
            <ul
              class="cart__all-products"
              v-if="GET_CURRENT_CARTPRODUCTS_COUNT > 0"
            ></ul>
            <div class="cart__error" v-else>No products in cart</div>
          </div>
        </transition>
      </div>

      <div class="cart__current-money">1400$</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      isMobile: document.body.classList.contains("_mobile"),
      //Включение меню по кнопку на телефоне
      activeCartMenu: false,
    };
  },
  computed: {
    ...mapGetters(["GET_CURRENT_CARTPRODUCTS_COUNT"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/adaptive-value.scss";

.cart {
  // .cart__row
  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      height: 20px;
      width: 150%;

      z-index: 15;
      right: 0;
    }

    @media (any-hover: hover) {
      &:hover {
        .cart__submenu {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
        }
      }
    }
  }

  // .cart__products-col

  &__products-col {
    flex: 0 0 70px;
    padding: 0px 0px 0px 0px;
  }

  // .cart__cart

  &__cart {
    display: flex;
    justify-content: center;
    width: 35px;
    align-items: center;
    height: 35px;
    background-color: #48689a;
    border: 1px solid #eeeeee;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    &::before {
      color: #eeeeee;
      font-size: 15px;
    }
  }

  // .cart__count-products

  &__count-products {
    min-width: 18px;
    min-height: 18px;
    background-color: #eeeeee;
    border-radius: 50%;
    right: -10px;
    top: -3px;
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    font-weight: 300;
    color: #48689a;
  }

  // .cart__submenu

  &__submenu {
    transition: 0.7s;
    position: absolute;
    z-index: 15;
    background-color: whitesmoke;
    min-width: 360px;
    height: 434px;
    background-color: #ffffff;
    top: 125%;
    right: 0;
    @include adaptive-value("padding", 40, 20);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    @media (max-width: 450px) {
      min-width: 280px;
    }
  }

  // .cart__all-products
  &__all-products {
  }

  // .cart__error

  &__error {
  }

  // .cart__current-money

  &__current-money {
  }
}

body._mobile {
  .cart__submenu {
    pointer-events: all;
    opacity: 1;
    visibility: visible;
    transition: 0s;
  }
}

.sub-enter-active,
.sub-leave-active {
  transition: all 0.8s ease;
}

.sub-enter-from,
.sub-leave-to {
  opacity: 0;
}
</style>

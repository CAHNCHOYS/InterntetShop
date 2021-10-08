<template>
  <form action="#" class="search-form" @submit.prevent="">
    <!--- На Пк показываем такую форму  --->
    <div
      class="search-form__row"
      :class="{ error: searchValue.length <= 1 && wasFocused }"
      v-if="windowWidth > 666"
    >
      <input
        type="text"
        class="search-form__input"
        @focus="wasFocused = true"
        v-model="searchValue"
      />
      <button class="search-form__submit icon-search"></button>
    </div>
    <!--- На телефонах показываем такую форму  --->
    <div class="search-form__mobile-form" v-else>
      <teleport to="body">
        <transition name="appear">
          <div class="search-form__mobile-row" v-if="activeInput">
            <input
              type="text"
              class="search-form__mobile-input"
              @focus="wasFocused = true"
              v-model="searchValue"
            />
            <button type="submit">Find</button>
          </div>
        </transition>
      </teleport>

      <button
        class="search-form__submit icon-search"
        @click="activeInput = !activeInput"
      ></button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearcForm",

  props: {
    windowWidth: Number,
  },

  data() {
    return {
      activeInput: false,
      searchValue: "",
      wasFocused: false,
    };
  },
  methods: {
    //Закрываем меню поиска по клику вне элемента
    clickOutside(e) {
      if (!e.target.classList.contains(`search-form__submit`)) {
        this.activeInput = false;
      }
    },
  },

  mounted() {
    //Слушаем клик по документу
    document.documentElement.addEventListener("click", this.clickOutside);
  },

  unmounted() {
    document.documentElement.removeEventListener("click", this.clickOutside);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/adaptive-value.scss";

.search-form {
  width: 100%;
  // .search-form__row
  &__row {
    padding: 0px 0px 3px 0px;
    display: flex;
    border-bottom: 1px solid white;
    &.error {
      border-bottom: 1px solid red;
    }
  }

  // .search-form__input

  &__input {
    background-color: transparent;
    flex: 1 1 auto;
    font-family: "Times New Roman";
    font-size: 12px;

    font-weight: 400;
    color: #eeeeee;
    padding: 0px 10px 0px 0px;
  }

  // .search-form__submit

  &__submit {
    background-color: transparent;
    flex: 0 1 auto;
    &::before {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;

      font-weight: 400;
      color: #9aa6b9;
    }
    @media (max-width: 666px) {
      &::before {
        color: white;
        font-size: 18px;
      }
    }
  }

  &__mobile-input {
  }

  &__mobile-row {
    display: flex;
    position: absolute;
    min-width: 280px;
    z-index: 19 !important;
    width: 90%;

    height: 40px;
    top: 25px;
    left: 50%;
    transform: translate(-50%, 0);

    > input {
      flex: 1 1 auto;
      height: 100%;
      padding: 0px 20px 0px 20px;
      font-size: 18px;
    }
    button {
      height: 100%;

      background-color: white;
      font-size: 24px;

      background-color: orange;
      color: white;
      padding: 0px 10px 0px 10px;
      &::before {
        font-size: 18px;
        color: white;
      }
    }
    @media (max-width: 380px) {
      left: 15px;
      width: 70%;
      transform: translate(0, 0);
    }
  }
}

//---------------Появление инпута
.appear-leave-active,
.appear-enter-active {
  transition: all 0.9s ease;
}

.appear-enter-from {
  opacity: 0;
  transform: translate(0, -100%);
}

.appear-enter-to {
  opacity: 1;
}

.appear-leave-from {
  opacity: 1;
}

.appear-leave-to {
  opacity: 0;
  transform: scale(0);
}

//-------------------------------------------------
</style>

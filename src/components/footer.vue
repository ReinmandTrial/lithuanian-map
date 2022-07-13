<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__main">
        <div class="footer__logo">
          <img src="@/assets/images/logo-2.svg" alt="Logo" />
        </div>
        <div class="footer__wrapper">
          <p class="footer__text">
            {{ footerData.text }}
          </p>
          <div class="footer__buttons">
            <button type="button" class="footer__btn footer__btn-white">
              {{ footerData.buttons.play }}
            </button>
            <button
              type="button"
              class="footer__btn footer__btn-red"
              @click="$emit('openContacts')"
            >
              {{ footerData.buttons.contacts }}
            </button>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__rights">
          {{ footerData.rights }}
          <a :href="'email:' + footerData.email" class="footer__link">
            {{ footerData.email }}
          </a>
        </p>
        <div class="footer__socials">
          <a
            target="_blank"
            :href="footerData.links.facebook"
            class="footer__socials-item"
          >
            <img src="@/assets/images/svg-icons/facebook.svg" alt="" />
          </a>
          <a
            target="_blank"
            :href="footerData.links.youtube"
            class="footer__socials-item"
          >
            <img src="@/assets/images/svg-icons/youtube.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'v-footer',

  data() {
    return {
      footerData: {
        text:
          'VĖTRUNGIŲ KELIAS, tai žaidimas – kelionė norintiems ne tik įdomiai praleisti laiką, bet ir pažinti Mažąją Lietuvą!',
        rights: 'Visos teisės priklauso © 2022 “Vėtrungių kelias”, ',
        email: 'info@vetrungiukelias.lt',
        links: {
          facebook: 'https://www.facebook.com/vetrungiukelias',
          youtube: 'https://youtu.be/Eij3CNpQxmQ',
        },
        buttons: {
          play: 'Žaisk Vėtrungių Kelią',
          contacts: 'Kontaktai',
        },
      },
    }
  },
}
</script>

<style lang="scss">
.footer {
  background: #f8f8f8;
  &__container {
    max-width: 1145px;
    margin: 0 auto;
    padding: 0 15px;
  }

  &__main {
    padding: 40px 0px 25px;
    display: flex;
    column-gap: 30px;
    @media (max-width: 991.98px) {
      justify-content: space-between;
      column-gap: 20px;
    }
    @media (max-width: 575.98px) {
      padding: 15px 0 30px 5px;
    }
  }

  &__logo {
    flex: none;
    @media (max-width: 767.98px) {
      width: 80px;
    }
  }

  &__wrapper {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 991.98px) {
      flex-direction: column;
      flex: unset;
      row-gap: 10px;
      align-items: stretch;
    }
  }

  &__text {
    line-height: 1.75;
    max-width: 335px;
    @media (max-width: 575.98px) {
      font-size: 14px;
      line-height: 143%;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    column-gap: 16px;
    @media (max-width: 575.98px) {
      column-gap: 6px;
    }
  }

  &__btn-red {
    padding: 10px 27px;
    text-align: center;
    border-radius: 40px;
    background: #db3831;
    color: #ffffff;
    @media (max-width: 575.98px) {
      font-size: 14px;
      padding: 8px 10px;
    }
  }

  &__btn-white {
    padding: 10px 27px;
    text-align: center;
    border-radius: 40px;
    color: #db3831;
    background: #ffffff;
    @media (max-width: 575.98px) {
      font-size: 14px;
      padding: 8px 10px;
    }
  }

  &__bottom {
    border-top: 1px solid #00404e;
    padding: 10px 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
  }

  &__rights {
    font-size: 15px;
    @media (max-width: 575.98px) {
      font-size: 13px;
      max-width: 252px;
    }
  }

  &__link {
    color: #00404e;
    text-decoration-line: underline;
    &:hover {
      text-decoration-line: none;
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    column-gap: 6px;
  }

  &__socials-item {
    width: 24px;
    height: 24px;
  }
}
</style>

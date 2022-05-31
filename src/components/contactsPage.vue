<template>
  <div class="contacts">
    <header class="contacts__header header">
      <div class="header__logo" @click="$emit('openHomeFromHeader')">
        <img src="@/assets/images/logo-2.svg" alt="Logo" />
      </div>

      <button
        type="button"
        class="header__burger burger-btn"
        @click="$emit('OpenBurgerFromHome')"
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="2.25" rx="1.125" fill="#00404E" />
          <rect y="7.5" width="24" height="2.25" rx="1.125" fill="#00404E" />
          <rect y="15" width="24" height="2.25" rx="1.125" fill="#00404E" />
        </svg>
      </button>
    </header>
    <title-line :title="contactsData.title" />
    <div class="container">
      <div class="contacts__content">
        <div class="contacts__info">
          <h3 class="contacts__subtitle">{{ contactsData.subtitle }}</h3>
          <p class="contacts__text" v-html="compText"></p>
          <a :href="contactsData.email" target="_blank" class="contacts__email">
            <span class="contacts__email-icon">
              <img src="@/assets/images/svg-icons/email.svg" alt="icon email" />
            </span>
            {{ contactsData.email }}
          </a>
        </div>
        <div class="contacts__form">
          <div class="contacts__inputs">
            <div class="contacts__inputs-row">
              <input
                required
                type="text"
                class="input"
                :placeholder="contactsFormData.name"
                v-model="submitData.name"
              />
              <input
                type="text"
                class="input"
                :placeholder="contactsFormData.surname"
                v-model="submitData.surname"
              />
            </div>
            <div class="contacts__inputs-row">
              <input
                required
                type="email"
                class="input"
                :placeholder="contactsFormData.email"
                v-model="submitData.email"
              />
              <input
                required
                type="number"
                class="input"
                :placeholder="contactsFormData.phoneNum"
                v-model="submitData.phoneNum"
              />
            </div>
            <textarea
              required
              class="input"
              :placeholder="contactsFormData.message"
              v-model="submitData.message"
            ></textarea>
            <div class="contacts__inputs-row">
              <label class="contacts__policy">
                <span class="contacts__policy-checkbox checkbox">
                  <input
                    id="policy"
                    type="checkbox"
                    class="checkbox__none"
                    required
                  />
                  <span class="checkbox__style"></span>
                </span>
                <span class="contacts__policy-text" v-html="policyLink"></span>
              </label>
              <button
                type="button"
                class="contacts__btn-send"
                @click="onSubmit()"
              >
                {{ contactsFormData.btnSend }}
              </button>
              <!-- <a :href="test">test</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import titleLine from './titleLine.vue'
export default {
  name: 'contactsPage',
  components: {
    titleLine,
  },
  data() {
    return {
      contactsData: {
        title: 'KONTAKTAI',
        subtitle: 'Susisiekite su mumis',
        facebookText: 'Facebook paskyroje',
        facebookLink: 'https://www.facebook.com/vetrungiukelias',
        text: `Į kilusius klausimus atsakysime Jums kuo galima greičiau. Daugiau informacijos apie naujienas rasite mūsų`,
        email: 'info@siluteinfo.lt',
      },
      contactsFormData: {
        name: 'Vardas',
        surname: 'Pavardė',
        email: 'El. paštas',
        phoneNum: 'Telefonas',
        message: 'Jūsų žinutė',
        policyText: 'Privatumo politika',
        policyLink: 'https://www.google.com/',
        checkboxText: `Sutinku su jūsų`,
        btnSend: 'Siųsti užklausą',
      },
      submitData: {
        name: '',
        surname: '',
        email: '',
        phoneNum: '',
        message: '',
      },
      sendSubmit: [],
    }
  },
  methods: {
    onSubmit() {
      console.log(this.submitData)
      // `https://vetrungiukelias.lt/api/wp-json/vk/v1/email?vardas=${this.submitData.name}&pavarde=${this.submitData.surname}&pastas=${this.submitData.email}&telefonas=${this.submitData.phoneNum}&zinute=${this.submitData.message}`,

      axios
        .get(
          `https://vetrungiukelias.lt/api/wp-json/vk/v1/email?vardas=${this.submitData.name}&pavarde=${this.submitData.surname}&pastas=${this.submitData.email}&telefonas=${this.submitData.phoneNum}&zinute=${this.submitData.message}`,
          {
            // vardas: this.submitData.name,
            // pavarde: this.submitData.surname,
            // pastas: this.submitData.email,s
            // telefonas: this.submitData.phoneNum,
            // zinute: this.submitData.message,
          },
        )
        .then((response) => {
          console.log(response)
          console.log(this.submitData)
          this.submitData.name = ''
          this.submitData.surname = ''
          this.submitData.email = ''
          this.submitData.phoneNum = ''
          this.submitData.message = ''
          document.getElementById('policy').checked = false
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
  computed: {
    test: function () {
      return `https://vetrungiukelias.lt/api/wp-json/vk/v1/email?vardas=${this.submitData.name}&pavarde=${this.submitData.surname}&pastas=${this.submitData.email}&telefonas=${this.submitData.phoneNum}&zinute=${this.submitData.message}`
    },
    policyLink: function () {
      return `${this.contactsFormData.checkboxText} <a traget="_blank" href="${this.contactsFormData.policyLink}">${this.contactsFormData.policyText}</a>`
    },
    compText: function () {
      return `${this.contactsData.text} <a traget="_blank" href="${this.contactsData.facebookLink}">${this.contactsData.facebookText}</a>.`
    },
    // linkToSend: function () {
    //   var name = this.submitData.name.replace(/ /g, '\u00A0')
    //   var surname = this.submitData.surname.replace(/ /g, '\u00A0')
    //   var email = this.submitData.email.replace(/ /g, '\u00A0')
    //   var phoneNum = this.submitData.phoneNum.replace(/ /g, '\u00A0')
    //   var message = this.submitData.message.replace(/ /g, '\u00A0')
    //   return `http://vk.interita.lt/wp-json/vk/v1/email?vardas=${name}&pavarde=${surname}&pastas=${email}&telefonas=${phoneNum}&zinute=${message}`
    // },
  },
}
</script>

<style lang="scss">
.contacts {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100vw;
  //   min-height: 100vh;
  background: #ffffff;
  //   overflow-y: auto;
  //   z-index: 105;
  &__header {
    position: static;
    transform: none;
    .header__logo {
      width: 62px;
      @media (max-width: 575.98px) {
        width: 54px;
      }
    }
  }

  &__content {
    padding: 50px 0 120px;
    display: flex;
    column-gap: 73px;
    @media (max-width: 991.98px) {
      flex-direction: column;
      row-gap: 25px;
    }
  }

  &__info {
    max-width: 360px;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 24px;
    letter-spacing: -1px;
    color: #383838;
    margin-bottom: 15px;
  }

  &__text {
    margin-bottom: 10px;
    a {
      color: #00404e;
      text-decoration-line: underline;
      &:hover {
        text-decoration-line: unset;
      }
    }
  }

  &__email {
    width: fit-content;
    display: flex;
    column-gap: 5px;
    align-items: center;
    color: #00404e;
    font-size: 15px;
    text-decoration-line: underline;
    &:hover {
      text-decoration-line: unset;
    }
  }

  &__email-icon {
  }

  &__form {
    flex: 1 1 auto;
  }

  &__inputs {
  }

  &__inputs-row {
    display: flex;
    column-gap: 95px;
    justify-content: space-between;
    @media (max-width: 575.98px) {
      flex-direction: column;
    }
  }

  &__policy {
    display: flex;
    align-items: center;
    column-gap: 10px;
    .checkbox__none {
      bottom: -2px;
      left: 8px;
    }
  }

  &__policy-checkbox {
  }

  &__policy-text {
    a {
      text-decoration-line: underline;
      &:hover {
        text-decoration-line: unset;
      }
    }
  }

  &__btn-send {
    color: #ffffff;
    padding: 10px 27px;
    border-radius: 30px;
    background: #db3831;
    @media (max-width: 575.98px) {
      margin: 0 auto;
      margin-top: 32px;
      width: fit-content;
    }
  }
}
.input {
  display: block;
  padding: 0 0 14px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 25px;
  width: 100%;
  //   max-width: 300px;
  color: #383838;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
}
textarea.input {
  max-width: unset;
  height: 85px;
}
</style>

<template>
        <div class="subscribe">
        <div class="subscribe__inner center">
          <div class="subscribe__left">
            <img
              class="subscribe__avatar"
              src="../../src/assets/imgs/subscribe/avatar.png"
              alt="#"
            />
            <div class="subscribe__content">
              <div class="subscribe__text">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum a. Aliquam condimentum mattis neque
                sed pretium”
              </div>
              <div class="subscribe__author">
                <span>Bin Burhan</span> <br />Dhaka, Bd
              </div>
            </div>
            <div class="subscribe__slider">
              <div class="subscribe__slider_element"></div>
              <div class="subscribe__slider_element active"></div>
              <div class="subscribe__slider_element"></div>
            </div>
          </div>
          <div class="subscribe__right">
            <div class="subscribe__title">Subscribe</div>
            <div class="subscribe__subtitle">
              FOR OUR NEWLETTER AND PROMOTION
            </div>
            <form action="post" class="subscribe__form">
              <input
                class="subscribe__input"
                type="email"
                name="subscribe"
                placeholder="Enter Your Email"
              />
              <button class="subscribe__btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div class="contact">
    <a class="contact__btn" target="_blank" href="https://github.com/YongzeYao">
      <i class="fab fa-github"></i>
    </a>
    <a
      class="contact__btn"
      target="_blank"
      href="https://www.linkedin.com/in/yongze-yao-95480b132/"
    >
      <i class="fab fa-linkedin"></i>
    </a>
    <a class="contact__btn" target="_blank" href="mailto:yongzeyao@gmail.com">
      <i class="fas fa-envelope"></i>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 10px 0;
  &__btn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 30px;
    border-radius: 15px;
    border: 1.5px solid white;
    padding: 8px;
    text-decoration: none;
    transition: all 0.2s linear;
    &:link,
    &:visited {
      color: white;
    }
    &:hover {
      color: #555555 !important;
      background: white;
    }
  }
}
</style>

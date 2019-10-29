<template>
  <div class="github">
    <a
      target="_blank"
      href="https://github.com/YongzeYao/XLogo"
      class="repo-link"
      ><i class="fab fa-github"></i
    ></a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.github {
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1000;
  color: white;
}

.repo-link {
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  &:link,
  &:visited {
    color: white;
  }
}
</style>

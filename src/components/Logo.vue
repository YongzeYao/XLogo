<template>
  <div class="logo-wrapper">
    <div class="logo">
      <span class="prefix">X</span><span class="postfix">LOGO</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  background: #7f00ff;
  background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
  background: linear-gradient(to right, #e100ff, #7f00ff);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.logo {
  display: inline-block;
  background: black;
  font-size: 50px;
  padding: 5px 15px;
  .prefix {
    color: red;
  }

  .postfix {
    color: white;
  }
}
</style>

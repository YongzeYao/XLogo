<template>
  <div id="app">
    <Github />
    <Logo />
    <Description />
    <XVideos />
    <Faq />
    <div class="footer">
      <Author />
      <Contact />
      <Copyright />
    </div>
  </div>
</template>

<script>
import Github from './components/Github';
import Logo from './components/Logo';
import Description from './components/Description';
import XVideos from './generator/XVideos';
import Faq from './components/Faq';
import Author from './components/Author';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

export default {
  components: {
    Github,
    Logo,
    Description,
    XVideos,
    Faq,
    Author,
    Contact,
    Copyright,
  },
};
</script>

<style>
@font-face {
  font-family: RobotoRegular;
  src: url(./assets/fonts/Roboto-Regular.ttf);
}

* {
  font-family: RobotoRegular, RobotoBlack, Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

html,
body,
#app {
  overscroll-behavior: none;
  background: #7f00ff;
  background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
  background: linear-gradient(to right, #e100ff, #7f00ff);
  min-height: 100vh;
  position: relative;
}

.footer {
  bottom: 0;
}

.tooltip-inner {
  background: #666;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}
</style>

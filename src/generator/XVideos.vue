<template>
  <div class="xvideos">
    <div
      class="box"
      v-tooltip="{ content: 'Edit the text below to create your own logo.' }"
    >
      <div :style="{ fontSize: fontSize + 'px' }" ref="logo" class="editarea">
        <span
          :style="{ color: prefixColor }"
          class="prefix"
          contenteditable
          spellcheck="false"
          >EDIT</span
        ><span
          :style="{ color: suffixColor }"
          class="postfix"
          contenteditable
          spellcheck="false"
          >ME</span
        >
      </div>
    </div>

    <div class="customize">
      <div>
        Prefix Text Color: &nbsp; <input type="color" v-model="prefixColor" />
      </div>
      <div>
        Suffix Text Color: &nbsp; <input type="color" v-model="suffixColor" />
      </div>
      <div>
        Font Size: &nbsp;
        <input type="range" min="30" max="200" v-model="fontSize" />
        {{ fontSize }}px
      </div>
    </div>

    <button @click="download" class="export-btn">Export</button>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image';

export default {
  data() {
    return {
      prefixColor: '#ff0000',
      suffixColor: '#ffffff',
      fontSize: 70,
    };
  },
  methods: {
    downloadImage(src, name) {
      const image = new Image();
      image.setAttribute('crossOrigin', 'anonymous');
      image.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, image.width, image.height);
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        const event = new MouseEvent('click');
        a.download = name || 'photo';
        a.href = url;
        a.dispatchEvent(event);
      };
      image.src = src;
    },
    download() {
      const vm = this;
      const node = vm.$refs.logo;
      domtoimage.toPng(node).then(res => {
        console.log(res);
        vm.downloadImage(res, 'logo');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.xvideos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.box {
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  background: black;
}

.editarea {
  padding: 10px;
  font-size: 70px;
  background: black;
}

.prefix {
  color: red;
}

.postfix {
  color: white;
}

.customize {
  color: white;
  margin-top: 30px;
  div {
    margin: 10px 0;
  }
}

.export-btn {
  margin-top: 40px;
  color: white;
  background: transparent;
  border-radius: 14px;
  border: 2px solid white;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s linear;
  &:hover {
    background: white;
    color: #555555;
  }
}
</style>

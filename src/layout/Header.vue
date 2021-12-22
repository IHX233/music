<template>
  <div :class="headClass">
    <div :class="program + 'header-title'">
      <div
        :class="program + 'header-title-left'"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="item" @click="handleHomeButton">
          <transition name="header-side">
            <i class="iconfont icon-home" v-show="isShow" />
          </transition>
        </div>
        <div class="item" @click="handleExistMaxScreen">
          <transition name="header-side">
            <i class="iconfont icon-zuixiaohua" v-show="isShow" />
          </transition>
        </div>
        <div class="item" @click="handleMaxScreen">
          <transition name="header-side">
            <i class="iconfont icon-zuidahua" v-show="isShow" />
          </transition>
        </div>
      </div>
      <div :class="program + 'header-title-right'">
        <div
          :class="[
            `item vbestui-iconfont icon-hou`,
            `${'header-' + theme + '-title-icon'}`,
          ]"
          @click="go(-1)"
        ></div>
        <div
          :class="[
            `item vbestui-iconfont icon-qian`,
            `${'header-' + theme + '-title-icon'}`,
          ]"
          @click="go(1)"
        ></div>
      </div>
    </div>
    <div :class="program + 'header-main'">
      <div class="left">
        <Search />
      </div>
      <div class="right">
        <b-avatar
          size="35px"
          class="avatar"
          :src="getAvatar"
          @click.native="handleAvatarClick"
        />
        <div class="item">
          <b-poptip
            max-length="180px"
            placement="bottom-start"
            :theme="getTheme"
          >
            <b-button
              :class="[
                `iconfont icon-icon-huanfu`,
                `${theme + '-huanfu-icon'}`,
              ]"
              width="60px"
              height="30px"
              type="text"
              transparent
            />
            <div slot="title" class="poptip-title">主题</div>
            <div class="huanfu" slot="content">
              <div class="theme-item" @click="handleThemeLight">优雅白</div>
              <div class="theme-item" @click="handleThemeDark">炫酷黑</div>
              <div class="theme-item" @click="handleThemeGreen">清新绿</div>
            </div>
          </b-poptip>
        </div>
        <a href="https://gitee.com/fudaosheng">
          <b-tooltip :theme="getTheme">
            <div :class="['item', `${theme + '-item'}`]">🛒</div>
            <div slot="content">market</div>
          </b-tooltip>
        </a>
        <a href="https://github.com/IHX233">
          <b-tooltip :theme="getTheme">
            <div
              :class="[`${theme + '-item'}`, 'item iconfont icon-github']"
            ></div>
            <div slot="content">Github</div>
          </b-tooltip>
        </a>
      </div>
    </div>
    <transition name="login"
      ><login v-show="isLogin" class="login"
    /></transition>
  </div>
</template>
<script>
import { theme } from "mixin/global/theme.js";
import { requestFullScreen, exitFullscreen } from "utils/window.js";
import Login from "content/user/Login";
import Search from "content/search";
export default {
  name: "LayoutHeader",
  mixins: [theme],
  components: { Login, Search },
  data() {
    return {
      isShow: false,
      isLogin: false,
    };
  },
  computed: {
    headClass() {
      return [`${this.program + this.theme + "-header"}`, "dance-music-header"];
    },
    getAvatar() {
      return this.$store.getters.getAvatar;
    },
  },
  methods: {
    handleMouseEnter() {
      this.isShow = true;
    },
    handleMouseLeave() {
      this.isShow = false;
    },
    /**主题 */
    handleThemeLight() {
      this.$store.commit("setTheme", "light");
    },
    handleThemeDark() {
      this.$store.commit("setTheme", "dark");
    },
    handleThemeGreen() {
      this.$store.commit("setTheme", "green");
    },
    handleAvatarClick() {
      this.isLogin = true;
    },
    hiddleLogin() {
      this.isLogin = false;
    },
    /**窗口 */
    handleMaxScreen() {
      requestFullScreen();
    },
    handleExistMaxScreen() {
      exitFullscreen();
      this.$Toast.info("您已退出全屏模式");
    },
    /**返回主页面 */
    handleHomeButton() {
      this.$router.push("/individuation");
    },
    /**路由 */
    go(index) {
      this.$router.go(index);
    },
  },
};
</script>
<style lang="less" scoped>
.dance-music-header {
  display: flex;
  align-items: center;
  height: 58px;
  width: 100%;
  &-title {
    width: 18%;
    height: 100%;
    text-align: center;
    display: flex;
    &-left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .item {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        line-height: 18px;
        overflow: hidden;
        cursor: pointer;
        i {
          display: inline-block;
        }
      }
      .item:nth-child(1) {
        background: #ed655a;
      }
      .item:nth-child(2) {
        background: #e0c04c;
      }
      .item:nth-child(3) {
        background: #72be47;
      }
    }
    &-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .item {
        flex: 1;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  &-main {
    width: 82%;
    height: 100%;
    display: flex;
    .left {
      flex: 2;
      text-align: center;
      line-height: 58px;
      ::v-deep .vbestui-bubble {
        padding: 0px;
      }
    }
    .right {
      flex: 7;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .avatar {
        margin-right: 60px;
        cursor: pointer;
      }
      a {
        text-decoration: none;
      }
      .item {
        width: 60px;
        text-align: center;
        font-size: 22px;
      }
      .iconfont {
        font-size: 24px;
      }
      .poptip-title {
        font-size: 16px;
        text-align: left;
      }
      .huanfu {
        display: flex;
        height: 60px;
        width: 100%;
        cursor: pointer;
        .theme-item {
          flex: 1px;
          line-height: 60px;
          text-align: center;
          font-size: 13px;
        }
        .theme-item:nth-child(1) {
          background: var(--light-bg-color);
          color: var(--dark-bg-color);
        }
        .theme-item:nth-child(2) {
          background: #292c32;
          color: #fff;
        }
        .theme-item:nth-child(3) {
          background: #449e60;
        }
      }
    }
  }
}
.iconfont {
  font-size: 12px;
}
.header-side-enter-active {
  animation: slideInDown 0.4s;
}
.header-side-leave-active {
  animation: slideInDown 0.4s reverse;
}
// light主题
.dance-music-light-header {
  background: var(--light-bg-color);
}
// dark主题
.dance-music-dark-header {
  background: var(--dark-header-bg-color);
}
//green主题
.dance-music-green-header {
  background: var(--green-bg-color);
}
// 换肤图标主题
.light-huanfu-icon {
  color: var(--dark-bg-color) !important;
}
.dark-huanfu-icon {
  color: #ccc !important;
}
// header 右边图标主题
.light-item {
  color: var(--light-text-color);
}
.dark-item {
  color: #ccc;
}
.green-item {
  color: #f6f6f6;
}
// header 左边图标主题
.header-dark-title-icon {
  color: #ccc;
}
.header-green-title-icon {
  color: #f6f6f6;
}
.login {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}
.login-enter-active {
  animation: fadeInDown var(--animation-base-time);
}
.login-leave-active {
  animation: zoomOutUp var(--animation-base-time);
}
</style>
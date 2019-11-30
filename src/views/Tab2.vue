<template>
  <div>
    <!-- tab名 -->
    <div id="navs">
      <nav>
        <p
          v-for="(item, index) in arrs"
          @click="toggle(index)"
          :key="index"
          :class="{ active: index == active }"
        >
          {{ item }}
        </p>
      </nav>
    </div>
    <!-- tab内容 -->
    <div
      class="back"
      @touchstart.prevent="touchStart"
      @touchmove.prevent="touchMove"
      @touchend="touchEnd"
      ref="back"
    >
      <div class="back-l" ref="left"></div>
      <div class="back-m" ref="middle"></div>
      <div class="back-r" ref="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      percent: 0,
      arrs: ["red", "blue", "yellow"],
      //   startx starty为初始手指触摸点
      touch: {}
    };
  },
  methods: {
    touchStart(e) {
      const touch = e.touches[0];
      this.touch.startX = touch.pageX;
      this.touch.startY = touch.pageY;
    },
    touchMove(e) {
      const touch = e.touches[0];
      //横向和纵向偏离位置，移动后位置减去初始位置，大于0为右滑，小于为左滑
      const deltaX = touch.pageX - this.touch.startX;
      const deltaY = touch.pageY - this.touch.startY;
      //   判断手指斜拉的时候偏上下还是左右，偏上下的不做处理
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
      }

      if (this.active == 0) {
        var left = 0;
        var offsetWidth = Math.min(
          0,
          Math.max(-window.innerWidth, left + deltaX)
        );
      } else if (this.active == 1) {
        // eslint-disable-next-line no-redeclare
        var left = -window.innerWidth;
        if (deltaX > 0) {
          //判断动作 是左滑还是右滑
          // eslint-disable-next-line no-redeclare
          var offsetWidth = Math.min(
            0,
            Math.max(-window.innerWidth, left + deltaX)
          );
        } else {
          // eslint-disable-next-line no-redeclare
          var offsetWidth = Math.min(
            -window.innerWidth,
            Math.max(-window.innerWidth * 2, left + deltaX)
          );
        }
      } else {
        // eslint-disable-next-line no-redeclare
        var left = -window.innerWidth * 2;
        // eslint-disable-next-line no-redeclare
        var offsetWidth = Math.min(
          -window.innerWidth,
          Math.max(-window.innerWidth * 2, left + deltaX)
        );
      }
      //记录滑动的距离占屏幕宽度的百分比，如果滑动太少则不切换
      this.percent = deltaX / window.innerWidth;
      //动画中滑块的移动
      this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
      //设置动画时间
      this.$refs.back.style["transitionDuration"] = 10;
    },
    touchEnd() {
      let offsetWidth;
      let percent;
      //当前为红色，滑动占比小于-0.1则切换，否则回到原位置
      if (this.active === 0) {
        if (this.percent < -0.5) {
          this.active = 1;
          offsetWidth = -window.innerWidth;
        } else {
          offsetWidth = 0;
        }
      } else if (this.active === 1) {
        if (this.percent > 0.5) {
          this.active = 0;
          offsetWidth = 0;
        } else if (this.percent < -0.5) {
          this.active = 2;
          offsetWidth = -window.innerWidth * 2;
        } else {
          offsetWidth = -window.innerWidth;
        }
      } else {
        //当前为黄色，滑动占比大于0.5则切换，否则回到原位置
        if (this.percent > 0.5) {
          this.active = 1;
          offsetWidth = -window.innerWidth;
        } else {
          offsetWidth = -window.innerWidth * 2;
        }
      }
      //这里的transform是针对最开始的位置而言，而不是移动过程中的位置
      this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
      this.$refs.back.style["transitionDuration"] = 10;
    },
    toggle(index) {
      this.active = index;
      if (index == 0) {
        var offsetWidth = 0;
      } else if (index == 1) {
        // eslint-disable-next-line no-redeclare
        var offsetWidth = -window.innerWidth;
      } else if (index == 2) {
        // eslint-disable-next-line no-redeclare
        var offsetWidth = -window.innerWidth * 2;
      }
      //这里的transform是针对最开始的位置而言，而不是移动过程中的位置
      this.$refs.back.style["transform"] = `translate3d(${offsetWidth}px,0,0)`;
    }
  }
};
</script>

<style scoped lang="scss">
#navs {
  width: 100%;
  overflow: hidden;
}
#navs nav {
  padding: 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: middle;
  -ms-flex-align: middle;
  align-items: middle;
  overflow: auto;
}
#navs p {
  text-align: center;
  font-size: 16px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  padding: 10px;
  margin: 5px;
}
#navs p.active {
  color: #ffff00;
  background-color: #000000;
}
.back {
  position: fixed;
  width: 100%;
  height: 100%;
  white-space: nowrap;

  .back-l {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: red;
  }
  .back-m {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: blue;
  }

  .back-r {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: yellow;
  }
}
</style>

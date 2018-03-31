<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <!-- mpvue组件 -->
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <!-- 原生组件 -->
    <alert></alert>
    <alert text="我是原生实现的 alert组件"></alert>
    <alert text="自定义 slot">
      <div>slot: 默认style</div>
      <div class="diy">slot: 自定义style</div>
    </alert>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {},
    };
  },

  components: {
    card,
  },

  methods: {
    bindViewTap() {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
            },
          });
        },
      });
    },
    clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.diy {
  color: red;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
</style>

import Vue from 'vue';
import App from './index';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: 'mpvue 使用原生组件',
    // 这儿添加要用的小程序组件
    usingComponents: {
      alert: '/static/components/alert/index',
    },
  },
};

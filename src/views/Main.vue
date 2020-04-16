<template>
  <div class="">
    <!-- 头部导航 -->
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />

    <router-view></router-view>

    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item to="/" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/members" name="search" icon="user-circle-o">会员</van-tabbar-item>
      <van-tabbar-item to="/cart" name="friends" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/search" name="setting" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>

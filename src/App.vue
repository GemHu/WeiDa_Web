<template>
  <div id="app">
    <!--标题-->
    <div class="app-header">
      <h1>微打@标签</h1>
    </div>
    <!-- 上部工具栏 -->
    <div class="app-topbar"></div>
    <div class="app-container">
      <!-- 左侧工具栏 -->
      <div class="app-leftbar"></div>
      <!-- 编辑区域 -->
      <div class="app-edit"></div>
      <!-- 属性窗口区域 -->
      <div class="app-property">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
.app-header {
  height: 56px;
  line-height: 56px;
  background: #707070;
  border-bottom: 2px solid #fff;
}
.app-header h1 {
  font-size: 30px;
  text-align: center;
  color: #fff;
  letter-spacing: 6px;
}
.app-topbar {
  height: 50px;
  background: #f0f5fa;
  padding: 2px 0 0 33px;
  border-bottom: 1px solid #999;
}
.app-container {
  position: relative;
  height: 100%;
}
.app-leftbar {
  position:absolute;
  width: 110px;
  float: left;
  background: #f0f5fa;
  border-right: 1px solid #999;
  height: 100%;
}
.app-edit {
  margin-left: 110px;
  margin-right: 352px;
  background: rgba(112, 112, 112, 0.23);
  height: 100%;
  border-right: 1px solid rgba(112, 112, 112, 0.67);
}
.app-property {
  position:absolute;
  right: 0;
  width: 352px;
  height: 100%;
  background: #f0f5fa;
  border: 1px solid #000;
}
</style>

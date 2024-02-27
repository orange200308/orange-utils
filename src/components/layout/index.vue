<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#319891',
      },
      components: {
        Menu: {
          colorItemBg: '#f0f0f0',
        },
      },
      algorithm: theme.defaultAlgorithm,
    }"
  >
    <a-layout class="layout">
      <a-layout-sider theme="light"
        ><a-menu
          v-model:selectedKeys="select"
          style="width: 200px"
          mode="vertical"
          :items="meunList"
      /></a-layout-sider>
      <a-layout>
        <a-layout-header style="background-color: #fff"
          ><H3>🍊Orange Utils</H3></a-layout-header
        >
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer style="background-color: #fff">
          <span>技术说明:&nbsp;&nbsp;&nbsp;</span>
          <a-tag color="#026e00">nodeJs</a-tag>
          <a-tag color="#38a875">Vue3</a-tag>
          <a-tag color="#ffd859">Pinia</a-tag>
          <a-tag></a-tag>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import { HomeOutlined } from "@ant-design/icons-vue";
import { theme } from "ant-design-vue";

interface Meun {
  key: string;
  icon?: any;
  label: string;
}

const select = ref([]);
const meunList = ref<Array<Meun>>([
  {
    key: "1",
    label: "首页",
    icon: () => h(HomeOutlined),
  },
]);
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  /* color: #0dff00; */
}
</style>

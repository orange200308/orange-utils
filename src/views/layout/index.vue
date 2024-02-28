<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#319891'
      },
      components: {
        Menu: {
          colorItemBg: '#f5f5f5'
        }
      },
      algorithm: theme.defaultAlgorithm
    }"
  >
    <a-layout class="layout">
      <a-layout-sider theme="light"
        ><a-menu
          @select="checkMenu"
          v-model:selectedKeys="select"
          style="width: 200px"
          mode="vertical"
          :items="meunList"
      /></a-layout-sider>
      <a-layout>
        <a-layout-header style="background-color: #ffffff"
          ><h3>🍊Orange Utils</h3></a-layout-header
        >
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="background-color: #fff">
          <span>技术说明:&nbsp;&nbsp;&nbsp;</span>
          <a-tag
            class="tag"
            v-for="item in tagList"
            :key="item.text"
            :color="item.color"
            >{{ item.text }}</a-tag
          >
          <span style="margin-left: 50px">社区:&nbsp;&nbsp;&nbsp;</span>
          <a-tag class="tag" @click="goLink('github')" color="#000">
            <template #icon>
              <GithubOutlined />
            </template>
            GitHub
          </a-tag>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
import { type VNode, h, ref } from 'vue'
import {
  HomeOutlined,
  GithubOutlined,
  PictureOutlined
} from '@ant-design/icons-vue'
import { theme } from 'ant-design-vue'
import router from '@/router'

interface Meun {
  key: string
  icon?: () => VNode
  label: string
  path: string
}

const select = ref([])
const meunList = ref<Meun[]>([
  {
    key: '0',
    label: '首页',
    icon: () => h(HomeOutlined),
    path: '/home'
  },
  {
    key: '1',
    label: '图片压缩',
    icon: () => h(PictureOutlined),
    path: '/imgZip'
  }
])
// 跳转页面
const checkMenu = (e: { item: { path: string } }): void => {
  void router.push(e.item.path)
}

const tagList = ref([
  {
    text: 'NodeJs',
    color: '#026e00'
  },
  {
    text: 'Vue3',
    color: '#38a875'
  },
  {
    text: 'Pinia',
    color: '#ffd859'
  },
  {
    text: 'Antd',
    color: '#1182ff'
  }
])
const linkList: Record<string, string> = {
  github: 'https://github.com/orange200308/orange-utils'
}
const goLink = (link: string): void => {
  window.open(linkList[link], '_blank')
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  .tag {
    cursor: pointer;
    user-select: none;
  }
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <!-- <el-col> -->
        <h5>自定义颜色</h5>
        <el-menu
          v-for="(item, index) in list"
          :key="index"
          :default-active="navUrl"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu :index="index + ''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.meta?.title }}</span>
            </template>

            <el-menu-item
              @click="btnPush(i)"
              v-for="(i, ind) in item?.children"
              :key="ind"
              >{{ i.meta?.title }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
        <!-- </el-col> -->
        <!-- </el-row> -->
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  created () {
    this.list = this.$router.options.routes
    console.log(this.$route, 111);
  },
  data () {
    return {
      list: [], navUrl: ""
    }
  },
  methods: {
    btnPush (i) {
      if (i.name == this.$route.name) {
        return
      } else {
        this.$router.push(i)
        console.log(i);
      }
    }
  },
  computed: {},
  watch: {
    $route (val) {
      //路由如果变化则赋值给初始路由
      // if (val == this.navUrl) {
      //   return
      // } else {
      this.navUrl = val.path
      // }
    }
  },
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>

<!-- eslint-disable vue/multi-word-component-names -->
 eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <el-input v-model="input" placeholder=""></el-input>
    <el-button type="primary" @click="edit()">保存</el-button>
  </div>
</template>

<script>
export default {
  created () {

  },
  data () {
    return {
      list: this.$router.options.routes,
      input: this.$route.meta?.title
    }
  },
  methods: {
    edit () {
      this.list.forEach((item) => {
        if (item?.children) {
          item.children.forEach(i => {
            if (this.$route.name == i.name) {
              i.meta.title = this.input
            }

          })
        }
      })

    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>

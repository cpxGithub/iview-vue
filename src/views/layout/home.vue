<template>
  <div class="home-container">
    <!-- 顶部导航栏 -->
    <nav class="top-bar">
      <div class="top-info">内容</div>
      <div class="nav-bar">
        <Menu mode="horizontal" theme="primary" :active-name="$route.matched[0].name" @on-select="menuChange">
          <MenuItem v-for="route in $router.options.routes" :key="route.name" :name="route.name" v-if="!route.hidden">
            <Icon :type="route.icon"></Icon>
              {{route.meta.title}}
          </MenuItem>
        </Menu>
      </div>
    </nav>
    <!-- 侧边栏与内容区 -->
    <div class="bottom-content" v-if="sideRouteLists.length">
      <!-- 侧边栏 -->
      <Menu :active-name="acitveFlag" :open-names="openNames" @on-select="sideChange" ref="side" class="side-bar">
        <template v-for="item in sideRouteLists">
          <MenuItem :name="item.name" :key="item.name" v-if="!item.children">{{item.meta.title}}</MenuItem>
          <Submenu :name="`sub${item.name}`" v-if="item.children" :key="`sub${item.name}`">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                {{item.meta.title}}
            </template>
            <MenuItem v-for="child in item.children" :name="child.name" :key="child.name">{{child.meta.title}}</MenuItem>
          </Submenu>
        </template>
      </Menu>
      <!-- <Menu class="side-bar" :active-name="$route.name" @on-select="sideChange" ref="side">
        <template v-for="(item, index) in sideRouteLists" v-if="!item.children">
          <MenuItem :key="index" :name="item.name">
            <Icon :type="item.icon" :key="index"></Icon>
              {{item.meta.title}}-{{item.name}}
          </MenuItem> -->
          <!-- <Submenu :key="`sub${index}`" :name="item.name" v-if="item.children && item.children.length > 0">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                {{item.meta.title}}
            </template>
            <MenuItem v-for="child in item.children" :name="child.name" :key="child.name">{{child.meta.title}}</MenuItem>
          </Submenu> -->
        <!-- </template> -->
      <!-- </Menu> -->
      <!-- 内容区 -->
      <div class="content">
        mianb
        <router-view />
      </div>
    </div>
    <div v-else>
      这是一级内容
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routeLists: this.$router.options.routes, // 路由列表
      sideRouteLists: [], // 侧边栏路由
      acitveFlag: '', // 侧边栏激活变量
      openNames: [], // 展开Submenu集合
      oldName: ''
    }
  },
  // beforeRouteEnter: (to, from, next) => {
  //   console.log(123, to)
  //   next()
  // },
  created () {
    this.acitveFlag = this.$route.name
    // console.log(1, this.$route)
    this.init()
  },
  methods: {
    menuChange (name) {
      let primary = {}
      if (this.oldName === name) return
      this.oldName = name
      // console.log(332, this.$route)
      this.routeFilter(name)
      if (this.sideRouteLists.length > 0) { // 如果不是一级目录跳到第一个子元素 第一个子元素可能还有子目录
        primary = this.sideRouteLists[0]
        this.acitveFlag = primary.name
        if (primary.children && primary.children.length > 0) {
          this.acitveFlag = primary.children[0].name
        }
        this.$router.push({name: this.acitveFlag}, (route) => {
          // console.log(33, this.$route.matched)
          // console.log(a)
          this.$nextTick(() => {
            this.$refs.side.updateActiveName()
          })
          this.openNames = [`sub${route.matched[1].name}`]
          this.$nextTick(() => {
            this.$refs.side.updateOpened()
          })
        })
        // setTimeout(() => {
        //   let matchedName = this.$route.matched
        //   console.log(12300, matchedName)
        //   this.openNames = [`sub${matchedName[1].name}`]
        //   this.$nextTick(() => {
        //     this.$refs.side.updateOpened()
        //   })
        // }, 50)
      } else {
        this.$router.push({name: name})
      }
    },
    sideChange (name) {
      this.$router.push({name: name})
    },
    init () {
      let matchedName = this.$route.matched
      this.routeFilter(matchedName[0].name)
      let primary = ''
      switch (matchedName.length) {
        case 1: // 一级目录
          if (this.sideRouteLists.length > 0) {
            primary = this.sideRouteLists[0]
            this.acitveFlag = primary.name
            if (primary.children && primary.children.length > 0) {
              this.acitveFlag = primary.children[0].name
            }
            this.$router.push({name: this.acitveFlag}, (route) => {
              this.openNames = [`sub${route.matched[1].name}`]
              this.$nextTick(() => {
                this.$refs.side.updateOpened()
              })
            })
            // setTimeout(() => {
            //   let matchedName = this.$route.matched
            //   console.log(11, matchedName)
            //   this.openNames = [`sub${matchedName[1].name}`]
            //   this.$nextTick(() => {
            //     this.$refs.side.updateOpened()
            //   })
            // }, 500)
          }
          break
        case 2: // 二级目录
          if (this.sideRouteLists.length > 0) {
            primary = this.sideRouteLists[0]
            // debugger
            this.acitveFlag = matchedName[1].name
            if (primary.children && primary.children.length > 0) {
              // this.acitveFlag = primary.children[0].name
            }
            // this.$router.push({name: this.acitveFlag}, (route) => {
            //   this.openNames = [`sub${route.matched[1].name}`]
            // })
            // this.$nextTick(() => {
            //   this.$refs.side.updateActiveName()
            // })
            // setTimeout(() => {
            //   let matchedName = this.$route.matched
            //   this.openNames = [`sub${matchedName[1].name}`]
            //   this.$nextTick(() => {
            //     this.$refs.side.updateOpened()
            //   })
            // }, 500)
          }
          break
        case 3: // 三级目录
          if (matchedName.length === 3) { // 三级菜单
            this.openNames = [`sub${matchedName[1].name}`]
          }
          break
      }
      // console.log(1100, matchedName)
      // this.setOpened()
    },
    routeFilter (name) { // 获取侧边栏路由
      this.routeLists.filter((item) => {
        if (item.name === name) {
          this.sideRouteLists = item.children ? item.children : []
        }
      })
    },
    setOpened () {
      let matchedName = this.$route.matched
      // debugger
      // console.log(752, matchedName)
      if (matchedName.length === 3) { // 三级菜单
        this.openNames = [`sub${matchedName[1].name}`]
        this.$nextTick(() => {
          this.$refs.side.updateOpened()
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.top-bar {
  display: flex;
  .top-info {
    width: 240px;
    background: #2d8cf0;
    color: #fff;
  }
  .nav-bar {
    flex: 1;
  }
}
.bottom-content {
  display: flex;
  .side-bar {
    padding-bottom: 60px;
    overflow-y: auto;
  }
  .content {
    height: 100%;
    flex: 1;
    overflow-y: auto;
    padding: 0 10px;
  }
}
</style>

<template>
  <div class="hello">
    <Menu active-name="11" :open-names="['2']">
      <template v-for="item in sideRouteLists">
        <MenuItem :name="item.name" :key="item.name" v-if="!item.children">{{item.meta.title}}</MenuItem>
        <Submenu name="2" v-if="item.children" :key="`sub${item.name}`">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              {{item.meta.title}}
          </template>
          <MenuItem v-for="child in item.children" :name="child.name" :key="child.name">{{child.meta.title}}</MenuItem>
        </Submenu>
      </template>
     </Menu>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      sideRouteLists: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.sideRouteLists = [
      {
        path: 'list',
        name: 'list',
        meta: { title: '订单列表' },
        icon: 'gear-a',
        component: () => import('@/views/order/list')
      },
      {
        path: 'orderp',
        name: 'orderp',
        meta: { title: '订单列表1' },
        icon: 'gear-a',
        component: () => import('@/views/order/list')
      },
      {
        path: 'goods',
        name: 'goods',
        meta: { title: '商品管理' },
        icon: 'gear-a',
        component: () => import('@/views/layout/content'),
        children: [
          {
            path: 'goods-list',
            name: 'goods-list',
            meta: { title: '商品列表' },
            icon: 'gear-a',
            component: () => import('@/views/order/list')
          }
        ]
      }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

import HelloWorld from '@/components/HelloWorld'

export default [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('views/login/index'),
    hidden: true
  },
  {
    path: '/',
    name: 'HelloWorld',
    meta: { title: '首页1' },
    icon: 'gear-a',
    component: HelloWorld
  },
  {
    path: '/index',
    name: 'index',
    meta: { title: '首页' },
    icon: 'gear-a',
    component: () => import('views/layout/home')
  },
  {
    path: '/second',
    name: 'second',
    meta: { title: '二级菜单' },
    icon: 'gear-a',
    component: () => import('@/views/layout/home'),
    children: [
      {
        path: 'second-list',
        name: 'secondList',
        meta: { title: '列表' },
        icon: 'gear-a',
        component: () => import('@/views/order/list')
      }
    ]
  },
  {
    path: '/second1',
    name: 'second1',
    meta: { title: '二级菜单11' },
    icon: 'gear-a',
    component: () => import('@/views/layout/home'),
    children: [
      {
        path: 'second1-list',
        name: 'secondList1',
        meta: { title: '列表12' },
        icon: 'gear-a',
        component: () => import('@/views/layout/content'),
        children: [
          {
            path: 'second-list2',
            name: 'secondList3',
            meta: { title: '列表33' },
            icon: 'gear-a',
            component: () => import('@/views/order/list')
          }
        ]
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    meta: { title: '订单管理' },
    icon: 'gear-a',
    component: () => import('@/views/layout/home'),
    children: [
      {
        path: 'store',
        name: 'store',
        meta: { title: '店铺管理' },
        icon: 'gear-a',
        component: () => import('@/views/layout/content'),
        children: [
          {
            path: 'store-list',
            name: 'store-list',
            meta: { title: '店铺列表' },
            icon: 'gear-a',
            component: () => import('@/views/order/goods')
          },
          {
            path: 'store-list1',
            name: 'store-list1',
            meta: { title: '店铺列表12' },
            icon: 'gear-a',
            component: () => import('@/views/order/goods')
          }
        ]
      },
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
            component: () => import('@/views/order/goods')
          },
          {
            path: 'goods-list1',
            name: 'goods-list1',
            meta: { title: '商品列表12' },
            icon: 'gear-a',
            component: () => import('@/views/order/goods')
          }
        ]
      }
    ]
  }
]

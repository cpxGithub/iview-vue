import HelloWorld from 'components/HelloWorld'

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
    meta: { title: '主页' },
    icon: 'home',
    component: () => import('views/layout/home')
  },
  {
    path: '/customer',
    name: 'customer',
    meta: { title: '客户' },
    icon: 'person-stalker',
    component: () => import('views/layout/home'),
    children: [
      {
        path: 'lists',
        name: 'customerLists',
        meta: { title: '客户列表' },
        icon: 'android-list',
        component: () => import('views/customer/lists')
      },
      {
        path: 'detail',
        name: 'customerDetail',
        hidden: true,
        meta: { title: '客户详情' },
        component: () => import('views/customer/detail')
      },
      {
        path: 'activity',
        name: 'customerCtivity',
        meta: { title: '营销活动' },
        icon: 'stats-bars',
        component: () => import('views/layout/content'),
        children: [
          {
            path: 'lists',
            name: 'activityLists',
            meta: { title: '客户营销活动列表' },
            component: () => import('views/customer/activityLists')
          },
          {
            path: 'detail',
            name: 'activityDetail',
            meta: { title: '活动详情' },
            component: () => import('views/customer/activityDetail')
          }
        ]
      }
    ]
  },
  {
    path: '/goods-manage',
    name: 'goodsManage',
    meta: { title: '商品管理' },
    icon: 'android-folder',
    component: () => import('views/layout/home'),
    children: [
      {
        path: 'goods-lists',
        name: 'goodsLists',
        meta: { title: '商品列表' },
        icon: 'android-list',
        component: () => import('views/goods/lists')
      },
      {
        path: 'goods-detail',
        name: 'goodsDetail',
        meta: { title: '商品详情' },
        component: () => import('views/goods/detail')
      },
      {
        path: 'goods-add',
        name: 'goodsAdd',
        meta: { title: '商品列表' },
        component: () => import('views/goods/add')
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    meta: { title: '订单管理' },
    icon: 'gear-a',
    component: () => import('views/layout/home'),
    children: [
      {
        path: 'store',
        name: 'store',
        meta: { title: '店铺管理' },
        icon: 'gear-a',
        component: () => import('views/layout/content'),
        children: [
          {
            path: 'store-list',
            name: 'store-list',
            meta: { title: '店铺列表' },
            icon: 'gear-a',
            component: () => import('views/order/goods')
          },
          {
            path: 'store-list1',
            name: 'store-list1',
            meta: { title: '店铺列表12' },
            icon: 'gear-a',
            component: () => import('views/order/goods')
          }
        ]
      },
      {
        path: 'list',
        name: 'list',
        meta: { title: '订单列表' },
        icon: 'gear-a',
        component: () => import('views/order/list')
      },
      {
        path: 'orderp',
        name: 'orderp',
        meta: { title: '订单列表1' },
        icon: 'gear-a',
        component: () => import('views/order/list')
      },
      {
        path: 'goods',
        name: 'goods',
        meta: { title: '商品管理' },
        icon: 'gear-a',
        component: () => import('views/layout/content'),
        children: [
          {
            path: 'goods-list',
            name: 'goods-list',
            meta: { title: '商品列表' },
            icon: 'gear-a',
            component: () => import('views/order/goods')
          },
          {
            path: 'goods-list1',
            name: 'goods-list1',
            meta: { title: '商品列表12' },
            icon: 'gear-a',
            component: () => import('views/order/goods')
          }
        ]
      }
    ]
  }
]

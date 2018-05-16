<template>
  <div>
    <Table border :columns="columns" :data="lists"></Table>
  </div>
</template>
<script>
import { fetchOrderList } from 'api/order/index'
import axios from 'axios'
export default {
  data () {
    return {
      lists: [],
      columns: [{
        title: '商品名',
        key: 'goodsName'
      }, {
        title: '交易时间',
        key: 'date'
      }, {
        title: '用户名',
        key: 'userName'
      }, {
        title: '订单状态',
        key: 'status'
      }, {
        title: '订单号',
        key: 'orderNo'
      }, {
        title: '价格',
        key: 'price'
      }, {
        title: '操作',
        key: 'action',
        render: (h, { row }) => {
          return h('div', {
            attrs: {
              class: 'btn-box'
            }
          }, [
            h('span', {
              on: {
                click: () => {
                  console.log(123, this)
                }
              }
            }, '详情')
          ])
        }
      }]
    }
  },
  created () {
    fetchOrderList().then(res => {
      this.lists = res.lists
    })
    axios.get('/api/order-list').then(res => {
      console.log(res)
    })
    console.log(1)
  }
}
</script>

var Mock = require('mockjs')
var orderData = Mock.mock('/api/order-list', {
	'lists|50-60': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'goodsName': '@cword(6,10)',
		'id': '@natural(100000, 999999)',
		'userName': '@cname',
		'date': '@date(yyyy-MM-dd HH:mm:ss)',
		'status': '@integer(1, 7)',
		'orderNo': '@id',
		'price': '@float(3, 300)'
	}]
})
// export {
// 	orderData
// }

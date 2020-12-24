import { HTTP } from "./request.js"

class indexData extends HTTP {
	// 主页接口数据
	getAppIndex(){
		return this.request({
			url: '/app_index',
			methods:"GET"
		});
	}
	
	// 榜单页面的数据获取
	getReadListData(){
		return this.request({
			url:'/readList',
			methods:"GET"
		})
	}
}
export {indexData}
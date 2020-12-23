import { HTTP } from "./request.js"

class indexData extends HTTP {
	// 主页接口数据
	getAppIndex(){
		return this.request({
			url: '/app_index',
			methods:"GET"
		});
	}
}
export {indexData}
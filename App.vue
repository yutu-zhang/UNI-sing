<script>
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data() {
			return {
				statusBarHeight : statusBarHeight
			}
		 },
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function(s) {
			console.log('App sHide')
		}
	}
</script>
<style>
@import url("./assets/style/animate.min.css");
@import url("./assets/style/free.css");
@import url("./assets/style/iconfont.css");
	/*每个页面公共css */
</style>

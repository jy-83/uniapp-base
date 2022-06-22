import Service from "@/service/request/index.js";
import cache from "@/utils/cache.js";
const BASE_URL="http://tg.51soft.vip/";
const IMG_URL=`${BASE_URL}index/attachment/view/`;
/**
 * 创建一个实例
 */
let queue = []; //缓存队列
const jyRequest=new Service({
	baseURL:BASE_URL,
	/*实例特有的请求和响应拦截*/
	interceptors:{
		/*请求成功拦截*/
		requestInterceptor:config=>{
			return config;
		},
		/*请求失败拦截*/
		requestInterceptorCatch:error=>{
			return error;
		},
		/*响应成功拦截*/
		responseInterceptor:response=>{
			let data=response.data;
			if(data.error){
				codeFunction(response);
				return Promise.reject(data.message);
			}else{
				return Promise.resolve(data.data);
			}
		},
		/*响应失败拦截*/
		responseInterceptorCatch:error=>{
			return error;
		}
	}
});

function codeFunction(res) {
	let { data: { message } } = res;
	if (message.indexOf("登录")!==-1) {
		queue.push(() => {
			jyRequest.request(res.config);
		});
		let pages = getCurrentPages();
		let page = pages[pages.length - 1];
		uni.login({
			success: resCode => {
				let { code } = resCode;
				jyRequest.post({ url: `/index/smapp/base/login?code=${code}` }).then(async response => {
					if (response.newUser) {
						queue = [];
					} else {
						cache.setCache("sessionId", response.sessionId);
						await queue.forEach(callback => {
							  callback();
						});
						queue=[];
						await page.onLoad(page.options);
						await page.onShow();
					}
				});
			}
		});
	}else{
		uni.showModal({
			title:"温馨提示",
			content:message,
			showCancel:false,
			
		});
	}

}

/**
 * 接口实例用法同axios*/
export { jyRequest as default,IMG_URL };

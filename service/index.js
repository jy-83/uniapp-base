import Service from "@/service/request/index.js";
/**
 * 创建一个实例
 */
const jyRequest=new Service({
	baseURL:"http://tg.51soft.vip/",
	/*实例特有的请求和响应拦截*/
	interceptors:{
		/*请求成功拦截*/
		requestInterceptor:(config)=>{
			return config;
		},
		/*请求失败拦截*/
		requestInterceptorCatch:(error)=>{
			return error;
		},
		/*响应成功拦截*/
		responseInterceptor:(response)=>{
			return response;  
		},
		/*响应失败拦截*/
		responseInterceptorCatch:(error)=>{
			return error;
		}
	}
});

/**
 * 接口实例用法同axios*/
export {
	jyRequest as default
};

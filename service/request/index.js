import axios from 'axios';
import cache from '@/utils/cache.js';

const DEFAULT_LOADING = true;

class Service {
	constructor(config) {
		this.instance = axios.create(config);
		this.showLoading = config.showLoading ?? DEFAULT_LOADING;
		/*实例公共的请求拦截*/
		this.instance.interceptors.request.use(config => {
			if (this.showLoading) {
				uni.showLoading({
					title: '加载中',
					mask:true
				})
			}
			/*请求头携带token*/
			let sessionId = cache.getCache('sessionId');
			if (sessionId) {
				config.headers.sessionId = sessionId;
			}
			return config;
		})
		/*实例公共的响应拦截*/
		this.instance.interceptors.response.use(response => {
			uni.hideLoading();
			return response;
		}, error => {
			let {
				response: {
					status
				}
			} = error;
			uni.hideLoading();
			errorFunction(status);
			return error
		})

		/*实例特有的请求拦截*/
		this.instance.interceptors.request.use(
			config.interceptors?.requestInterceptor,
			config.interceptors?.requestInterceptorCatch
		)
		/*实例特有的响应拦截*/
		this.instance.interceptors.response.use(
			config.interceptors?.responseInterceptor,
			config.interceptors?.responseInterceptorCatch
		)
	}
	request(config) {
		return new Promise((reslove, reject) => {
			if (config.showLoading === false) {
				this.showLoading = false;
			}
			this.instance.request(config).then(res => {
				this.showLoading = DEFAULT_LOADING;
				reslove(res)
			}).catch(error => {
				this.showLoading = DEFAULT_LOADING;
				reject(error)
			})
		})
	}
	get(config) {
		return this.request({
			...config,
			method: 'get'
		})
	}
	post(config) {
		return this.request({
			...config,
			method: 'post'
		})
	}
}

export default Service

/**
 * 
 * @param {number} status 
 */
function errorFunction(status) {
	switch (status) {
		case 404:
			uni.showToast({
				title: '接口不存在',
				icon: 'none'
			})
			break;
		case 500:
			uni.showToast({
				title: '服务器错误',
				icon: 'none'
			})
			break;
		default:
			console.log('请求出现了一点小问题～')
			break;
	}
}


/*解决adapter is not a function问题*/
axios.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		var buildFullPath = require('axios/lib/core/buildFullPath');
		let fullurl = buildFullPath(config.baseURL, config.url)
		uni.request({
			method: config.method.toUpperCase(),
			url: buildURL(fullurl, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};

				settle(resolve, reject, response);
			}
		})
	})
}

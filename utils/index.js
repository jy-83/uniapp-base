import dayjs from "dayjs";
/**
 * 数字保留小数
 * @param {number} num 
 * @param {number} decimals 
 */
export function formatNumber(num, decimals=2){
	num=Number(num);
	return number.toFixed(decimals);
}
/**
 * 时间格式化 https://dayjs.fenxianglu.cn/
 * @param {date} date 
 * @param {string} format 
 */
export function formatTime(date,format="YYYY-MM-DD HH:mm"){
	return dayjs(date).format(format);
}

/**
 * 支付调用 
 * @param {object} obj支付凭证
 */
export function requestPayment(obj) {
	return new Promise((resolve, reject) => {
		uni.requestPayment({
			provider:"wxpay",
			...obj,
			success: function(res) {
				resolve(res);
			},
			fail: function(err) {
				reject(err);
			}
		});
	});
}
/**
 * 获取页面栈
 * @param {number} num 
 */
export function getCurrentPage(num=1){
	let pages=getCurrentPage();
	let currentPage=pages[pages.length-num];
	return new Promise((reslove,reject)=>{
		if(currentPage){
			reslove(currentPage);
		}else{
			reject("页面不存在");
		}
	});
}


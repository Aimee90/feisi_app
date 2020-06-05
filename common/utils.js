/**
 * 拼接对象为请求字符串
 * 对于需要编码的文本（比如说中文）我们要进行编码
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 **/
export function formatGetUri(obj) {
  const params = [];
  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    if (typeof value !== 'undefined' || value !== null) {
      params.push([key, encodeURIComponent(value)].join('='))
    }
  })
  return '?' + params.join('&')
}

export function formatDateTime(dateTime){
	let date = new Date(Number(dateTime))
	let year = date.getFullYear(), 
		month = date.getMonth()+1,
		day = date.getDay(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		second = date.getSeconds()
	return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
}
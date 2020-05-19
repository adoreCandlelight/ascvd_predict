const axios = require('axios');

function setCookie(username,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = username+"="+cvalue+"; "+expires;
}
function checkCookie(username){
	var name = username + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}

function getCookie(){
	// 清除cookie 将日期设置为之前就可以
	// document.cookie = "cname=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	var uid=checkCookie("cname");
	if (uid==""){
		//   获取username	
		axios.get("/user/getUserName").then(
			(res)=>{
				uid = res.data.data.cname 
				setCookie("cname", uid, 7);
			}) .catch(function(err) {
				console.log(err)
			}
		);
	}
	return uid;
}

export default { setCookie, getCookie, checkCookie }
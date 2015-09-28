var http=require("http");
var querystring=require("querystring");
var contents=querystring.stringfy({
	name:"byvoid",
	email:"fjj_321@126.com"
});
var options={
	host:"localhost",
	path:"/application/x-www-form-urllenconded",
	method:"POST",
	headers:{}
}

window.onload=function(){
	var nick=prompt("Enter your name");
	var input=document.getElementById("input");
	var chat=new EventSource("/chat");
	chat.onmessage=function(e){
		var mes=e.data;
		var node=document.createElement("div");
		node.innerHTML=mes;
		input.parentNode.insertBefore(node,input);
		input.scrollIntoView();
	}
	input.onchange=function(){
		var msg=nick+":"+input.value;
		var xhr=new XMLHttpRequest();
		xhr.open("POST","/chat");
		xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
		xhr.send(msg);
		//input.value="";
	}
}
window.onunload=function(){
	var xhr=new XMLHttpRequest();
	xhr.open("GET","/unload");
	xhr.send(null);
	window.prompt("ddd")
}
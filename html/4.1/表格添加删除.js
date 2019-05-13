window.onload=function()
{
	var oTab=document.getElementById("tab");	//获取表格
	var oBtn1=document.getElementById("btn1");	//获取按钮
	var oTxt1=document.getElementById("txt1");	//获取文本框1
	var oTxt2=document.getElementById("txt2");	//获取文本框2
	var tr=oTab.tBodies[0].getElementsByTagName("tr");
	var id=tr.length+1;			//或者var id=oTab.tBodies[0].rows.length+1
	
	var oA=oTab.tBodies[0].rows[0].getElementsByTagName("a")[0];
	oA.onclick=function()
	{
		oTab.tBodies[0].removeChild(this.parentNode.parentNode);
	}
	
	
	//后续创建的Tr操作
	oBtn1.onclick=function()
	{
		//鼠标点击添加
		var oTr=document.createElement("tr");		//命名oTr为创建一个tr
		
		var oTd=document.createElement("td");		//命名oTd为创建一个td
		oTd.innerHTML=id++;						//创建第一行的第一个单元格内容
		oTr.appendChild(oTd);					//把单元格添加到行上
		
		var oTd=document.createElement("td");		//命名oTd为创建一个td
		oTd.innerHTML=oTxt1.value;					//创建第一行的第二个单元格内容
		oTr.appendChild(oTd);
		
		var oTd=document.createElement("td");		//命名oTd为创建一个td
		oTd.innerHTML=oTxt2.value;					//创建第一行的第三个单元格内容
		oTr.appendChild(oTd);
		
		var oTd=document.createElement("td");		//命名oTd为创建一个td
		oTd.innerHTML='<a href="javascript:;">删除</a>';		//创建第一行的第四个单元格内容
		oTr.appendChild(oTd);
		
		//鼠标点击A链接删除
		oTd.getElementsByTagName("a")[0].onclick=function()
		{
			oTab.tBodies[0].removeChild(this.parentNode.parentNode);	//父级.removeChild(a标签的上级td的上级tr)
		}
		
		oTab.tBodies[0].appendChild(oTr);			//把整行传入Table中
		
	}
	
	
};
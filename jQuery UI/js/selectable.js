$(document).ready(function(){
	$("#btn").button();
	$("#select").selectable();
	$("#btn").on("click",function(){
		if ($("#right").hasClass("ui-selected")) {
			alert("答对啦！");
		}
	});
});
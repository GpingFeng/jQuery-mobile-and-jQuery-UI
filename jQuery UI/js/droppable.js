$(document).ready(function(){
	$("#react1").draggable();
	$("#react2").droppable();

	$("#react2").on("drop",function(event,ui){
		// alert(event);
		$("#react2").text("drop事件");
	})
});
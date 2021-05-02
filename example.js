var h=$("i");

$('input:text').keypress(function (e) {
	if(e.which==13) {
$(".two").text(inp)
var inp=$(this).val()
$(".two").append("<li><span><i class='fa fa-trash'> </i></span> "+inp+"</li>")
$('input:text').val('')
}
});

$(".ip").text("To Do List")


$("ul").on("click","li",function(){
	if($(this).css("color")=="rgb(128, 128, 128)") {
$(this).css("color","black");
$(this).css("text-decoration","none");
	}
	else {
$(this).css("color","gray")
$(this).css("text-decoration","line-through");
}
})

$("ul").on("click","span",function(event) {
$(this).parent().remove();
	event.stopPropagation();
})

$(".fa-plus").click(function(){
	$("input").fadeToggle();              
});
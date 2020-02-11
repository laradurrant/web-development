$('ul').on("click", "li", function(){
    $(this).toggleClass("selected");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
    if(event.which === 13){
        var newToDo = $(this).val();
        var newToDoHTML = "<li><span class=\"delete\"><i class=\"fa fa-trash\"></i></span> " + newToDo + "</li>";
        $(this).val("");
        $('ul').append(newToDoHTML);
    }
});

$(".fa-plus").click(function ()
{
    $("input[type='text'").fadeToggle();
});
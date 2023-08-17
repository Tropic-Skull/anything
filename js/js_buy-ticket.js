$(document).ready(() => {
    $(window).scroll(function stick(){
        if($(this).scrollTop())
        {
            $("header").addClass("sticky")
        }
        else
        {
            $("header").removeClass("sticky")
        }
    })
});
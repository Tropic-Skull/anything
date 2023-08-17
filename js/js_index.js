$(document).ready(() => {
    let current=0;
    let num = $(".slider div").length;
    let h = "";
    let log = $(".btnLogin").innerText;
    for (let i = 0; i < num; i++)
        h += `
            <button class="digit">${i + 1}</button>
        `;
    $(".buttons > :first-child").after(h);

    let showSlider= (current)=> {
        $(".slider > div").fadeOut("slow");
        $(".slider > div").eq(current).fadeIn("slow");
    }

    $(".buttons button.digit").click(function(){
        let idx=parseInt($(this).text());
        current=idx-1;
        showSlider(current); 
    });
    
    $(".next").click(()=>{
        current++;
        if(current ===num)
            current=0;
        showSlider(current); 
    });
    
    $(".prev").click(()=>{
        current--;
        if(current < 0)
            current=num - 1;
        showSlider(current);
    });

    

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

    $(".slider").height($(".slider img").height());

    let timer =null;
    let runSlider= (duration) => {
        setInterval(()=>{
            $(".next").click();
        },duration)
    }

    runSlider(2500);
});
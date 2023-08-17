$(document).ready(() =>{
    const forms = document.querySelector(".forms"),
    links = document.querySelectorAll(".link");
    
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            forms.classList.toggle("show-signup");
        })
    })
    $("#submit").on("click",  function login(){
        var username = document.getElementById("username").value,
        pass = document.getElementById("pass").value;
        if(username == "user123" && pass == "123456")
        {
            window.location.assign("index.html")
        }
        else
        {
            alert("Invalid user!")
        }
    })
});

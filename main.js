 
$(document).ready(function(){
    $("#login-btn").click(function(){
        if($("#email").val() == "" || $("#pwd").val() == ""){
            alert("Chưa nhập Email hoặc mật khẩu!");
        }else{
            var url = "./home.html";    
            $(location).attr('href',url);
        }
        

        // if ($("#email").val() == "admin@gmail.com" && $("#pwd").val() == "admin") {
        //     window.location.replace("../home.html")
        // } else {
        //     alert("You are not a valid user");
        // }
    });
    
    
  });



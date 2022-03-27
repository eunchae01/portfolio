function blank(){
    alert("이름, 소속, 연락처나 이메일을 입력해주세요.");
}

$(document).ready(function(){
    $("#txtName").on("propertychange change keyup paste input", function(){
        let currentName = $(this).val();

        if(((currentName != "") & ($("#txtCompany").val() != "")) & (($("#txtPhone").val() != "") | ($("#txtEmail").val() != ""))){
            $("#contactBtn").css("color", "#323232");
            $("#contactBtn").css("cursor", "pointer");
            $("#contactBtn").click(function(){
                location.href = "contactSended.html";
            })
        }else{
            $("#contactBtn").css("color", "#969696");
            $("#contactBtn").css("cursor", "default");
        }
    });  

    $("#txtCompany").on("propertychange change keyup paste input", function(){
        let currentCom = $(this).val();

        if(((currentCom != "") & ($("#txtName").val() != "")) & (($("#txtPhone").val() != "") | ($("#txtEmail").val() != ""))){
            $("#contactBtn").css("color", "#323232");
            $("#contactBtn").css("cursor", "pointer");
            $("#contactBtn").click(function(){
                location.href = "contactSended.html";
            })
        }else{
            $("#contactBtn").css("color", "#969696");
            $("#contactBtn").css("cursor", "default");
        }
    });

    $("#txtPhone").on("propertychange change keyup paste input", function(){
        let currentPhone = $(this).val();

        if((($("#txtName").val() != "") & ($("#txtCompany").val() != "")) & ((currentPhone != "") | ($("#txtEmail").val() != ""))){
            $("#contactBtn").css("color", "#323232");
            $("#contactBtn").css("cursor", "pointer");
            $("#contactBtn").click(function(){
                location.href = "contactSended.html";
            })
        }else{
            $("#contactBtn").css("color", "#969696");
            $("#contactBtn").css("cursor", "default");
        }
    });


    $("#txtEmail").on("propertychange change keyup paste input", function(){
        let currentEmail = $(this).val();

        if(($("#txtName").val() != "" & $("#txtCompany").val() != "") & (($("#txtPhone").val() != "") | (currentEmail != ""))){
            $("#contactBtn").css("color", "#323232");
            $("#contactBtn").css("cursor", "pointer");
            $("#contactBtn").click(function(){
                location.href = "contactSended.html";
            })
        }else{
            $("#contactBtn").css("color", "#969696");
            $("#contactBtn").css("cursor", "default");
        }
    });

    $("#contactText").on("propertychange change keyup paste input", function(){
        let currentText = $(this).val();

        if(currentText != ""){
            $("#sendBtn").css("color", "#323232");
            $("#sendBtn").css("cursor", "pointer");
            $("#sendBtn").click(function(){
                location.href = "contactThk.html";
            });

            $("#quitBtn").css("color", "#323232");
            $("#quitBtn").css("cursor", "pointer");
            $("#quitBtn").click(function(){
                $("#contactText").val("");
            })
        }else{
            $("#sendBtn").css("color", "#969696");
            $("#sendBtn").css("cursor", "default");

            $("#quitBtn").css("color", "#969696");
            $("#quitBtn").css("cursor", "default");
        }
    });


});

// sended
// function send(){
//     let button = document.getElementById("sendBtn");

//     button.onclick = function(){
//         let txt = document.querySelector("textArea").value;

//         if(txt == ""){
//             alert("저에게 전하실 말씀을 적어주세요");
//         }else{
//             location.href = "contactThk.html";
//         }
//     }
// }
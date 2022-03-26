function confirm(){
    let button = document.getElementById("contactBtn1");

    button.onclick = function(){
        let idTxt = document.getElementById("txtName").value;
        let comTxt = document.getElementById("txtCompany").value;
        let phoneTxt = document.getElementById("txtPhone").value;
        let EmailTxt = document.getElementById("txtEmail").value;
        if(idTxt == ""){
            alert("이름을 입력해주세요");
        }else if(comTxt == ""){
            alert("소속을 입력해주세요.")
        }else if((phoneTxt == "") && (EmailTxt == "")){
            alert("회신받을 연락처나 이메일을 입력해주세요.")
        }else{
            location.href = "contactSended.html";
        }
    }
}

function send(){
    let button = document.getElementById("sendBtn");

    button.onclick = function(){
        let txt = document.querySelector("textArea").value;

        if(txt == ""){
            alert("저에게 전하실 말씀을 적어주세요");
        }else{
            location.href = "contactThk.html";
        }
    }
}

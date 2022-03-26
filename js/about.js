function url1(){
    let btn = document.getElementById("urlBtn1")
    let show = 0;
    
    btn.onclick = function(){
        if(show == 0){
            document.getElementById("url1").style.display = "inline-block";
            show++;
        }else{
            document.getElementById("url1").style.display = "none";
            show--;
        }
    }
}

function url2(){
    let btn = document.getElementById("urlBtn2")
    let show = 0;

    btn.onclick = function(){
        if(show == 0){
            document.getElementById("url2").style.display = "inline-block";
            show++;
        }else{
            document.getElementById("url2").style.display = "none";
            show--;
        }
    }
}
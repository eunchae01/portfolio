$(document).ready(function(){
    let ulr1 = 0, url2 = 0;

    $("#urlBtn1").click(function(){
        if(ulr1 == 0){
            $("#url1").css("display", "inline-block");
            ulr1++;
        }else{
            $("#url1").css("display", "none");
            ulr1--;
        }
    })

    $("#urlBtn2").click(function(){
        if(url2 == 0){
            $("#url2").css("display", "inline-block");
            url2++;
        }else{
            $("#url2").css("display", "none");
            url2--;
        }
    })
});
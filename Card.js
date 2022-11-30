var src1 = "https://forward-naruto.ucoz.ru/3.jpg";
var src2 = "https://forward-naruto.ucoz.ru/4.jpg";
var src3 = "https://forward-naruto.ucoz.ru/card1.jpg";
var src4 = "https://forward-naruto.ucoz.ru/card2.jpg";
var src5 = "https://forward-naruto.ucoz.ru/3.jpg";
var src6 = "https://forward-naruto.ucoz.ru/4.jpg";
var src7 = "https://forward-naruto.ucoz.ru/card1.jpg";
var src8 = "https://forward-naruto.ucoz.ru/card2.jpg";
var src9 = "https://forward-naruto.ucoz.ru/4.jpg";
var src10="https://forward-naruto.ucoz.ru/card1.jpg";

let srcArray = [];
srcArray[0] = src1;
srcArray[1] = src2;
srcArray[2] = src3;
srcArray[3] = src4;
srcArray[4] = src5;
srcArray[5] = src6;
srcArray[6] = src7;
srcArray[7] = src8;
srcArray[8] = src9;
srcArray[9] = src10;
srcArray[10] = src1;
srcArray[11] = src2;
srcArray[12] = src3;
srcArray[13] = src4;
srcArray[14] = src5;
srcArray[15] = src6;
srcArray[16] = src7;
srcArray[17] = src8;
srcArray[18] = src9;
srcArray[19] = src10;

function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
}

var array = [];
var array1 =[];
var vyb = 0; 
function start(){
        for(let i = 0; i<array1.length;i++){
        var a =array1[0].split(" ");
        var b = array1[1].split(" ");
        $(b[0]).css("display", "block");
        $(b[1]).css("display", "block");
        $(a[0]).css("display", "block");
        $(a[1]).css("display", "block");
        }
        array.length = 0;
        array1.length = 0;
        vyb = 0;
        document.getElementById("time").innerHTML = "00:00";
        shuffle(srcArray);
        $(".ramka").css("display", "flex");
        $(".start").css("display", "none");
        $(".back").css("transform", "rotateY(180deg");
        $(".a1").css("display", "flex");
        $(".result").css("display", "none");
        


        
        var mgn = new Date().getTime();
        var x = setInterval(function() {
                var now = new Date().getTime();
                var distance = now-mgn;
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if(minutes<10 && seconds<10){
                     document.getElementById("time").innerHTML = "0"+ minutes + ":0" + seconds;
                }else if(minutes<10 && seconds>10){
                        document.getElementById("time").innerHTML = "0"+minutes + ":" + seconds;
                }else{
                document.getElementById("time").innerHTML = minutes + ":" + seconds;
                }
        }, 1000);

        for(var i = 0;i<20;i++){
        var a = "card"+(i+1);
        document.getElementById(a).src = srcArray[i];
        }
        var t = 0;
        document.getElementById("frc").src = "photo.jpg";
}
var count = 0;
var array2 = [];
function rotate(fr, bc, cardno){
       array[vyb]= $(cardno).attr('src');
        array1[vyb] = fr + " " +bc;
        array2[vyb] = cardno;

      $(bc).css("transform", "rotateY(0deg)");
      $(bc).css("transition", "1s");
      $(fr).css("transform", "rotateY(180deg)");
      $(fr).css("transition", "1s");
   
         if(array[0] == array[1] && array2[0]!=array2[1]){ 
                setTimeout(deleteElement, 800);
                count+=2;
                if(count==20){
                   setTimeout(stop, 800);
                }

        }else if(vyb==1 && array[0] != array[1]){
                setTimeout(men, 800);

        }
        if(vyb==1){
                vyb=0;
                array[0]="";
                array[1]="";
                array2[0]= "";
                array2[1] = "";
        }else{
        vyb++;
        }
    } 

function deleteElement(){
        var a =array1[0].split(" ");
        var b = array1[1].split(" ");
        $(b[0]).css("display", "none");
        $(b[1]).css("display", "none");
        $(a[0]).css("display", "none");
        $(a[1]).css("display", "none");
}
function men(){
        var a =array1[0].split(" ");
        var b = array1[1].split(" ");
        $(a[0]).css("transform", "rotateY(0deg)");
        $(a[0]).css("transition", "1s");
        $(b[0]).css("transform", "rotateY(0deg)")
        $(b[0]).css("transition", "1s");   

        $(a[1]).css("transform", "rotateY(180deg)");
        $(a[1]).css("transition", "1s");
        $(b[1]).css("transform", "rotateY(-180deg)")
        $(b[1]).css("transition", "1s"); 
}

function stop(){
        $(".ramka").css("display", "none");
        $(".a1").css("display", "none");
        count = 0;
        $(".result").css("display", "block");
        document.getElementById("res").innerHTML = "Your Result: " + document.getElementById("time").innerHTML;
        
        setTimeout(function(){
                window.location.reload();
             }, 4000);
        
}



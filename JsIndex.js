document.getElementById("butjs1").addEventListener("mouseover" ,butover1);
document.getElementById("butjs2").addEventListener("mouseover" ,butover2);
document.getElementById("butjs3").addEventListener("mouseover" ,butover3);
document.getElementById("butjs4").addEventListener("mouseover" ,butover4);
document.getElementById("butjs5").addEventListener("mouseover" ,butover5);
document.getElementById("butjs6").addEventListener("mouseover" ,butover6);
document.getElementById("backjs").addEventListener("mouseover" ,backover);


document.getElementById("butjs1").addEventListener("mouseout" ,butout1);
document.getElementById("butjs2").addEventListener("mouseout" ,butout2);
document.getElementById("butjs3").addEventListener("mouseout" ,butout3);
document.getElementById("butjs4").addEventListener("mouseout" ,butout4);
document.getElementById("butjs5").addEventListener("mouseout" ,butout5);
document.getElementById("butjs6").addEventListener("mouseout" ,butout6);
document.getElementById("backjs").addEventListener("mouseout" ,backout);

function butover1(){
    document.getElementById("butjs1").style.height="8%";
    document.getElementById("butjs1").style.width ="8%";
    document.getElementById("butjs1").style.backgroundColor = "rgb(00, 154, 161)";
    document.getElementById("butjs1").style.color = "rgb(136, 1, 1)";
}
function butout1(){
    document.getElementById("butjs1").style.height="6%";
    document.getElementById("butjs1").style.width ="6%";
    document.getElementById("butjs1").style.backgroundColor = "rgb(127, 204, 214)";
    document.getElementById("butjs1").style.color = "rgb(36, 1, 1)";
}

function butover2(){
    document.getElementById("butjs2").style.height="8%";
    document.getElementById("butjs2").style.width ="8%";
    document.getElementById("butjs2").style.backgroundColor = "rgb(00, 154, 161)";
    document.getElementById("butjs2").style.color = "rgb(136, 1, 1)";
}
function butout2(){
    document.getElementById("butjs2").style.height="6%";
    document.getElementById("butjs2").style.width ="6%";
    document.getElementById("butjs2").style.backgroundColor = "rgb(127, 204, 214)";
    document.getElementById("butjs2").style.color = "rgb(36, 1, 1)";
}

function butover3(){
    document.getElementById("butjs3").style.height="8%";
    document.getElementById("butjs3").style.width ="8%";
    document.getElementById("butjs3").style.backgroundColor = "rgb(00, 154, 161)";
    document.getElementById("butjs3").style.color = "rgb(136, 1, 1)";
}
function butout3(){
    document.getElementById("butjs3").style.height="6%";
    document.getElementById("butjs3").style.width ="6%";
    document.getElementById("butjs3").style.backgroundColor = "rgb(127, 204, 214)";
    document.getElementById("butjs3").style.color = "rgb(36, 1, 1)";
}

function butover4(){
    document.getElementById("butjs4").style.height="8%";
    document.getElementById("butjs4").style.width ="8%";
    document.getElementById("butjs4").style.backgroundColor = "rgb(00, 154, 161)";
    document.getElementById("butjs4").style.color = "rgb(136, 1, 1)";
}
function butout4(){
    document.getElementById("butjs4").style.height="6%";
    document.getElementById("butjs4").style.width ="6%";
    document.getElementById("butjs4").style.backgroundColor = "rgb(127, 204, 214)";
    document.getElementById("butjs4").style.color = "rgb(36, 1, 1)";
}

function butover5(){
    document.getElementById("butjs5").style.height="8%";
    document.getElementById("butjs5").style.width ="8%";
    document.getElementById("butjs5").style.backgroundColor = "rgb(00, 154, 161)";
    document.getElementById("butjs5").style.color = "rgb(136, 1, 1)";
}
function butout5(){
    document.getElementById("butjs5").style.height="6%";
    document.getElementById("butjs5").style.width ="6%";
    document.getElementById("butjs5").style.backgroundColor = "rgb(127, 204, 214)";
    document.getElementById("butjs5").style.color = "rgb(36, 1, 1)";
}

function butover6(){
    document.getElementById("butjs6").style.height="8%";
    document.getElementById("butjs6").style.width ="8%";
    document.getElementById("butjs6").style.backgroundColor = "rgb(00, 154, 161)";
    document.getElementById("butjs6").style.color = "rgb(136, 1, 1)";
}
function butout6(){
    document.getElementById("butjs6").style.height="6%";
    document.getElementById("butjs6").style.width ="6%";
    document.getElementById("butjs6").style.backgroundColor = "rgb(127, 204, 214)";
    document.getElementById("butjs6").style.color = "rgb(36, 1, 1)";
}

function backover(){
    document.getElementById("backjs").style.height="8%";
    document.getElementById("backjs").style.width ="8%";
    document.getElementById("backjs").style.backgroundColor = "rgb(108, 91, 126)";
    document.getElementById("backjs").style.color = "rgb(136, 1, 1)";
}
function backout(){
    document.getElementById("backjs").style.height="6%";
    document.getElementById("backjs").style.width ="6%";
    document.getElementById("backjs").style.backgroundColor = "rgb(50, 34, 66)";
    document.getElementById("backjs").style.color = "rgb(127, 167, 105)";
}
document.getElementById("backjs").addEventListener("click" ,back);
document.getElementById("butjs1").addEventListener("click" ,click1);
document.getElementById("butjs2").addEventListener("click" ,click2);
document.getElementById("butjs3").addEventListener("click" ,click3);
document.getElementById("butjs4").addEventListener("click" ,click4);
document.getElementById("butjs5").addEventListener("click" ,click5);
document.getElementById("butjs6").addEventListener("click" ,click6);

function back(){
    document.getElementById("butjs2").style.left = "20%";
    document.getElementById("butjs1").style.left = "20%";
    document.getElementById("butjs3").style.left = "45%";
    document.getElementById("butjs4").style.left = "45%";
    document.getElementById("butjs5").style.left = "70%";
    document.getElementById("butjs6").style.left = "70%";
    document.getElementById("backjs").style.left = "150%";
    document.getElementById("pic1js").style.left = "0%";

    document.getElementById("butjs2").style.top = "35%";
    document.getElementById("butjs1").style.top = "25%";
    document.getElementById("butjs3").style.top = "25%";
    document.getElementById("butjs4").style.top = "35%";
    document.getElementById("butjs5").style.top = "25%";
    document.getElementById("butjs6").style.top = "35%";

    document.getElementById("pic2js").style.left = "-100%";
    document.getElementById("pic3js").style.left = "-100%";
    document.getElementById("pic4js").style.left = "-100%";
    document.getElementById("pic5js").style.left = "-100%";
    document.getElementById("pic6js").style.left = "-100%";
    document.getElementById("pic7js").style.left = "-100%";

    document.getElementById("seit11js").style.left = "-15%";
    document.getElementById("seit12js").style.left = "-15%";
    document.getElementById("seit13js").style.left = "-15%";
    document.getElementById("seit14js").style.left = "-15%";

    document.getElementById("seit21js").style.left = "-15%";
    document.getElementById("seit22js").style.left = "-15%";
    document.getElementById("seit23js").style.left = "-15%";
    document.getElementById("seit24js").style.left = "-15%";

    document.getElementById("seit31js").style.left = "-15%";
    document.getElementById("seit32js").style.left = "-15%";
    document.getElementById("seit33js").style.left = "-15%";
    document.getElementById("seit34js").style.left = "-15%";

    document.getElementById("seit41js").style.left = "-15%";
    document.getElementById("seit42js").style.left = "-15%";
    document.getElementById("seit43js").style.left = "-15%";
    document.getElementById("seit44js").style.left = "-15%";

    document.getElementById("seit51js").style.left = "-15%";
    document.getElementById("seit52js").style.left = "-15%";
    document.getElementById("seit53js").style.left = "-15%";
    document.getElementById("seit54js").style.left = "-15%";

    document.getElementById("seit61js").style.left = "-15%";
    document.getElementById("seit62js").style.left = "-15%";
    document.getElementById("seit63js").style.left = "-15%";
    document.getElementById("seit64js").style.left = "-15%";


}
function click1(){
    document.getElementById("butjs1").style.left = "20px";
    document.getElementById("butjs1").style.top = "20px";
    document.getElementById("butjs2").style.left = "-20%";
    document.getElementById("butjs3").style.left = "-20%";
    document.getElementById("butjs4").style.left = "-20%";
    document.getElementById("butjs5").style.left = "-20%";
    document.getElementById("butjs6").style.left = "-20%";
    document.getElementById("backjs").style.left = "90%";

    document.getElementById("pic1js").style.left = "200%";
    document.getElementById("pic2js").style.left = "0%";

    document.getElementById("seit11js").style.left = "5%";
    document.getElementById("seit12js").style.left = "5%";
    document.getElementById("seit13js").style.left = "5%";
    document.getElementById("seit14js").style.left = "5%";
}

function click2(){
    document.getElementById("butjs1").style.left = "-20%";
    document.getElementById("butjs2").style.left = "20px";
    document.getElementById("butjs2").style.top = "20px";
    document.getElementById("butjs3").style.left = "-20%";
    document.getElementById("butjs4").style.left = "-20%";
    document.getElementById("butjs5").style.left = "-20%";
    document.getElementById("butjs6").style.left = "-20%";
    document.getElementById("backjs").style.left = "90%";

    document.getElementById("pic1js").style.left = "200%";
    document.getElementById("pic3js").style.left = "0%";

    document.getElementById("seit21js").style.left = "5%";
    document.getElementById("seit22js").style.left = "5%";
    document.getElementById("seit23js").style.left = "5%";
    document.getElementById("seit24js").style.left = "5%";
}

function click3(){
    document.getElementById("butjs1").style.left = "-20%";
    document.getElementById("butjs2").style.left = "-20%";
    document.getElementById("butjs3").style.left = "20px";
    document.getElementById("butjs3").style.top = "20px";
    document.getElementById("butjs4").style.left = "-20%";
    document.getElementById("butjs5").style.left = "-20%";
    document.getElementById("butjs6").style.left = "-20%";
    document.getElementById("backjs").style.left = "90%";

    document.getElementById("pic1js").style.left = "200%";
    document.getElementById("pic4js").style.left = "0%";
    
    document.getElementById("seit31js").style.left = "5%";
    document.getElementById("seit32js").style.left = "5%";
    document.getElementById("seit33js").style.left = "5%";
    document.getElementById("seit34js").style.left = "5%";
}

function click4(){
    document.getElementById("butjs1").style.left = "-20%";
    document.getElementById("butjs2").style.left = "-20%";
    document.getElementById("butjs3").style.left = "-20%";
    document.getElementById("butjs4").style.left = "20px";
    document.getElementById("butjs4").style.top = "20px";
    document.getElementById("butjs5").style.left = "-20%";
    document.getElementById("butjs6").style.left = "-20%";
    document.getElementById("backjs").style.left = "90%";

    document.getElementById("pic1js").style.left = "200%";
    document.getElementById("pic5js").style.left = "0%";
    
    document.getElementById("seit41js").style.left = "5%";
    document.getElementById("seit42js").style.left = "5%";
    document.getElementById("seit43js").style.left = "5%";
    document.getElementById("seit44js").style.left = "5%";
}

function click5(){
    document.getElementById("butjs1").style.left = "-20%";
    document.getElementById("butjs2").style.left = "-20%";
    document.getElementById("butjs3").style.left = "-20%";
    document.getElementById("butjs4").style.left = "-20%";
    document.getElementById("butjs5").style.left = "20px";
    document.getElementById("butjs5").style.top = "20px";
    document.getElementById("butjs6").style.left = "-20%";
    document.getElementById("backjs").style.left = "90%";

    document.getElementById("pic1js").style.left = "200%";
    document.getElementById("pic6js").style.left = "0%";
    
    document.getElementById("seit51js").style.left = "5%";
    document.getElementById("seit52js").style.left = "5%";
    document.getElementById("seit53js").style.left = "5%";
    document.getElementById("seit54js").style.left = "5%";
}

function click6(){
    document.getElementById("butjs1").style.left = "-20%";
    document.getElementById("butjs2").style.left = "-20%";
    document.getElementById("butjs3").style.left = "-20%";
    document.getElementById("butjs4").style.left = "-20%";
    document.getElementById("butjs5").style.left = "-20%";
    document.getElementById("butjs6").style.left = "20px";
    document.getElementById("butjs6").style.top = "20px";
    document.getElementById("backjs").style.left = "90%";

    document.getElementById("pic1js").style.left = "200%";
    document.getElementById("pic7js").style.left = "0%";
    
    document.getElementById("seit61js").style.left = "5%";
    document.getElementById("seit62js").style.left = "5%";
    document.getElementById("seit63js").style.left = "5%";
    document.getElementById("seit64js").style.left = "5%";
}


document.getElementById("seit11js").addEventListener("mouseover" ,overseitjs11);
document.getElementById("seit12js").addEventListener("mouseover" ,overseitjs12);
document.getElementById("seit13js").addEventListener("mouseover" ,overseitjs13);
document.getElementById("seit14js").addEventListener("mouseover" ,overseitjs14);



document.getElementById("seit11js").addEventListener("mouseout" ,outseitjs11);
document.getElementById("seit12js").addEventListener("mouseout" ,outseitjs12);
document.getElementById("seit13js").addEventListener("mouseout" ,outseitjs13);
document.getElementById("seit14js").addEventListener("mouseout" ,outseitjs14);


function overseitjs11(){
    document.getElementById("seit11js").style.height = "8%";
    document.getElementById("seit11js").style.width = "12%";
}

function overseitjs12(){
    document.getElementById("seit12js").style.height = "8%";
    document.getElementById("seit12js").style.width = "12%";
}

function overseitjs13(){
    document.getElementById("seit13js").style.height = "8%";
    document.getElementById("seit13js").style.width = "12%"; 
}

function overseitjs14(){
    document.getElementById("seit14js").style.height = "8%";
    document.getElementById("seit14js").style.width = "12%";
}


function outseitjs11(){
    document.getElementById("seit11js").style.height = "6%";
    document.getElementById("seit11js").style.width = "10%";
}

function outseitjs12(){
    document.getElementById("seit12js").style.height = "6%";
    document.getElementById("seit12js").style.width = "10%";
}

function outseitjs13(){
    document.getElementById("seit13js").style.height = "6%";
    document.getElementById("seit13js").style.width = "10%";
}

function outseitjs14(){
    document.getElementById("seit14js").style.height = "6%";
    document.getElementById("seit14js").style.width = "10%";
}


document.getElementById("seit21js").addEventListener("mouseover" ,overseitjs21);
document.getElementById("seit22js").addEventListener("mouseover" ,overseitjs22);
document.getElementById("seit23js").addEventListener("mouseover" ,overseitjs23);
document.getElementById("seit24js").addEventListener("mouseover" ,overseitjs24);



document.getElementById("seit21js").addEventListener("mouseout" ,outseitjs21);
document.getElementById("seit22js").addEventListener("mouseout" ,outseitjs22);
document.getElementById("seit23js").addEventListener("mouseout" ,outseitjs23);
document.getElementById("seit24js").addEventListener("mouseout" ,outseitjs24);


function overseitjs21(){
    document.getElementById("seit21js").style.height = "8%";
    document.getElementById("seit21js").style.width = "12%"; 
}

function overseitjs22(){
    document.getElementById("seit22js").style.height = "8%";
    document.getElementById("seit22js").style.width = "12%"; 
}

function overseitjs23(){
    document.getElementById("seit23js").style.height = "8%";
    document.getElementById("seit23js").style.width = "12%"; 
}

function overseitjs24(){
    document.getElementById("seit24js").style.height = "8%";
    document.getElementById("seit24js").style.width = "12%";  
}


function outseitjs21(){
    document.getElementById("seit21js").style.height = "6%";
    document.getElementById("seit21js").style.width = "10%";
}

function outseitjs22(){
    document.getElementById("seit22js").style.height = "6%";
    document.getElementById("seit22js").style.width = "10%";
}

function outseitjs23(){
    document.getElementById("seit23js").style.height = "6%";
    document.getElementById("seit23js").style.width = "10%";
}

function outseitjs24(){
    document.getElementById("seit24js").style.height = "6%";
    document.getElementById("seit24js").style.width = "10%";
}


document.getElementById("seit31js").addEventListener("mouseover" ,overseitjs31);
document.getElementById("seit32js").addEventListener("mouseover" ,overseitjs32);
document.getElementById("seit33js").addEventListener("mouseover" ,overseitjs33);
document.getElementById("seit34js").addEventListener("mouseover" ,overseitjs34);



document.getElementById("seit31js").addEventListener("mouseout" ,outseitjs31);
document.getElementById("seit32js").addEventListener("mouseout" ,outseitjs32);
document.getElementById("seit33js").addEventListener("mouseout" ,outseitjs33);
document.getElementById("seit34js").addEventListener("mouseout" ,outseitjs34);


function overseitjs31(){
    document.getElementById("seit31js").style.height = "8%";
    document.getElementById("seit31js").style.width = "12%"; 
}

function overseitjs32(){
    document.getElementById("seit32js").style.height = "8%";
    document.getElementById("seit32js").style.width = "12%"; 
}

function overseitjs33(){
    document.getElementById("seit33js").style.height = "8%";
    document.getElementById("seit33js").style.width = "12%"; 
}

function overseitjs34(){
    document.getElementById("seit34js").style.height = "8%";
    document.getElementById("seit34js").style.width = "12%"; 
}


function outseitjs31(){
    document.getElementById("seit31js").style.height = "6%";
    document.getElementById("seit31js").style.width = "10%";
}

function outseitjs32(){
    document.getElementById("seit32js").style.height = "6%";
    document.getElementById("seit32js").style.width = "10%";
}

function outseitjs33(){
    document.getElementById("seit33js").style.height = "6%";
    document.getElementById("seit33js").style.width = "10%";
}

function outseitjs34(){
    document.getElementById("seit34js").style.height = "6%";
    document.getElementById("seit34js").style.width = "10%";
}


document.getElementById("seit41js").addEventListener("mouseover" ,overseitjs41);
document.getElementById("seit42js").addEventListener("mouseover" ,overseitjs42);
document.getElementById("seit43js").addEventListener("mouseover" ,overseitjs43);
document.getElementById("seit44js").addEventListener("mouseover" ,overseitjs44);



document.getElementById("seit41js").addEventListener("mouseout" ,outseitjs41);
document.getElementById("seit42js").addEventListener("mouseout" ,outseitjs42);
document.getElementById("seit43js").addEventListener("mouseout" ,outseitjs43);
document.getElementById("seit44js").addEventListener("mouseout" ,outseitjs44);


function overseitjs41(){
    document.getElementById("seit41js").style.height = "8%";
    document.getElementById("seit41js").style.width = "12%"; 
}

function overseitjs42(){
    document.getElementById("seit42js").style.height = "8%";
    document.getElementById("seit42js").style.width = "12%"; 
}

function overseitjs43(){
    document.getElementById("seit43js").style.height = "8%";
    document.getElementById("seit43js").style.width = "12%"; 
}

function overseitjs44(){
    document.getElementById("seit44js").style.height = "8%";
    document.getElementById("seit44js").style.width = "12%"; 
}


function outseitjs41(){
    document.getElementById("seit41js").style.height = "6%";
    document.getElementById("seit41js").style.width = "10%";
}

function outseitjs42(){
    document.getElementById("seit42js").style.height = "6%";
    document.getElementById("seit42js").style.width = "10%";
}

function outseitjs43(){
    document.getElementById("seit43js").style.height = "6%";
    document.getElementById("seit43js").style.width = "10%"; 
}

function outseitjs44(){
    document.getElementById("seit44js").style.height = "6%";
    document.getElementById("seit44js").style.width = "10%";  
}


document.getElementById("seit51js").addEventListener("mouseover" ,overseitjs51);
document.getElementById("seit52js").addEventListener("mouseover" ,overseitjs52);
document.getElementById("seit53js").addEventListener("mouseover" ,overseitjs53);
document.getElementById("seit54js").addEventListener("mouseover" ,overseitjs54);



document.getElementById("seit51js").addEventListener("mouseout" ,outseitjs51);
document.getElementById("seit52js").addEventListener("mouseout" ,outseitjs52);
document.getElementById("seit53js").addEventListener("mouseout" ,outseitjs53);
document.getElementById("seit54js").addEventListener("mouseout" ,outseitjs54);


function overseitjs51(){
    document.getElementById("seit51js").style.height = "8%";
    document.getElementById("seit51js").style.width = "12%"; 
}

function overseitjs52(){
    document.getElementById("seit52js").style.height = "8%";
    document.getElementById("seit52js").style.width = "12%"; 
}

function overseitjs53(){
    document.getElementById("seit53js").style.height = "8%";
    document.getElementById("seit53js").style.width = "12%"; 
}

function overseitjs54(){
    document.getElementById("seit54js").style.height = "8%";
    document.getElementById("seit54js").style.width = "12%"; 
}


function outseitjs51(){
    document.getElementById("seit51js").style.height = "6%";
    document.getElementById("seit51js").style.width = "10%";
}

function outseitjs52(){
    document.getElementById("seit52js").style.height = "6%";
    document.getElementById("seit52js").style.width = "10%";
}

function outseitjs53(){
    document.getElementById("seit53js").style.height = "6%";
    document.getElementById("seit53js").style.width = "10%";
}

function outseitjs54(){
    document.getElementById("seit54js").style.height = "6%";
    document.getElementById("seit54js").style.width = "10%";
}


document.getElementById("seit61js").addEventListener("mouseover" ,overseitjs61);
document.getElementById("seit62js").addEventListener("mouseover" ,overseitjs62);
document.getElementById("seit63js").addEventListener("mouseover" ,overseitjs63);
document.getElementById("seit64js").addEventListener("mouseover" ,overseitjs64);



document.getElementById("seit61js").addEventListener("mouseout" ,outseitjs61);
document.getElementById("seit62js").addEventListener("mouseout" ,outseitjs62);
document.getElementById("seit63js").addEventListener("mouseout" ,outseitjs63);
document.getElementById("seit64js").addEventListener("mouseout" ,outseitjs64);


function overseitjs61(){
    document.getElementById("seit61js").style.height = "8%";
    document.getElementById("seit61js").style.width = "12%"; 
}

function overseitjs62(){
    document.getElementById("seit62js").style.height = "8%";
    document.getElementById("seit62js").style.width = "12%"; 
}

function overseitjs63(){
    document.getElementById("seit63js").style.height = "8%";
    document.getElementById("seit63js").style.width = "12%"; 
}

function overseitjs64(){
    document.getElementById("seit64js").style.height = "8%";
    document.getElementById("seit64js").style.width = "12%"; 
}


function outseitjs61(){
    document.getElementById("seit61js").style.height = "6%";
    document.getElementById("seit61js").style.width = "10%";
}

function outseitjs62(){
    document.getElementById("seit62js").style.height = "6%";
    document.getElementById("seit62js").style.width = "10%";
}

function outseitjs63(){
    document.getElementById("seit63js").style.height = "6%";
    document.getElementById("seit63js").style.width = "10%";
}

function outseitjs64(){
    document.getElementById("seit64js").style.height = "6%";
    document.getElementById("seit64js").style.width = "10%";
}
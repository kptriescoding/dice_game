var randomVariable1=Math.floor(6*Math.random()+1);
document.querySelector("img.img1").setAttribute("src","images/dice"+randomVariable1+".png");
var randomVariable2=Math.floor(6*Math.random()+1);
document.querySelector("img.img2").setAttribute("src","images/dice"+randomVariable2+".png");
if(randomVariable1>randomVariable2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!!!";
}
else if(randomVariable1<randomVariable2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!!!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!";  
}

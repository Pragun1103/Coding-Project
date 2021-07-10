player1name=localStorage.getItem("player1_name");
player2name=localStorage.getItem("player2_name");

var player1score=0;
var player2score=0;

var word;
document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question turn : "+player1name;
document.getElementById("playeranswer").innerHTML="Answer turn : "+player2name;

function send(){
  number1=document.getElementById("word1").value;
  number2=document.getElementById("word2").value;
  actualAnswer=parseInt(number1)*parseInt(number2); 


    question="<h4 id='worddisplay'>Q. "+number1+"X"+number2+"</h4>"
    answer="<br> Answer: <input type='text' id='inputcheckbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question+answer+checkbutton;
    document.getElementById("output").innerHTML=row;
    
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";


}
function check(){
  document.getElementById("word1").value="";
  document.getElementById("word2").value="";
  document.getElementById("inputcheckbox").value="";
  
}
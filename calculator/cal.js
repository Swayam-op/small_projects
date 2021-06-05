
function dis(num)
{
    //for decreasing size to s
    if(document.getElementById("f").innerHTML=="OFF")
    {
      document.getElementById("answer")="";
    }
    else{
     
        if(    document.getElementById("answer").value=="0")
        {
            document.getElementById("answer").value="";
        }
document.getElementById('answer').value+=num;

    }

}
function equal()
{
    if(document.getElementById("f").innerHTML=="OFF")
    {
      document.getElementById("answer").value="";
    }else{
    var x=document.getElementById('answer').value;
    var y=eval(x);
    document.getElementById('answer').value=y;
    }
}
function clr()
{
    if(document.getElementById("f").innerHTML=="OFF")
    {
      document.getElementById("answer").value="";
    }else{
    document.getElementById('answer').value="0";
    }
}
function swch()
{
    if(document.getElementById("f").innerHTML=="OFF")
        {
          document.getElementById("f").innerHTML="ON";
          document.getElementById("b").innerHTML="ON";
          document.getElementById("answer").value="0";
        }
       else{
        document.getElementById("f").innerHTML="OFF";
        document.getElementById("b").innerHTML="OFF";
        document.getElementById("answer").value="";
       }
}

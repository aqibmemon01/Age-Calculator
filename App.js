var color=["rgb(111, 0, 255)","rgb(0, 255, 0)","rgb(251, 255, 0)","rgb(255, 0, 0)","rgb(0, 4, 255)","rgb(255, 102, 0)"];
var counter=0;
setInterval( function(){
  document.getElementById("aqib").style.color=color[counter];
  document.getElementById("last").style.color=color[counter];
  counter++;
  if(counter===7){
    counter=0
  }},100);

var newdate=new Date();
document.getElementById("datecur").value=newdate;

function calculate(){
  var curdate=new Date();
    document.getElementById("datecur").value=curdate;
 var enterdateb=new Date(document.getElementById("dateofbirth").value);
 var year=(curdate.getFullYear())-(enterdateb.getFullYear());
     
 var month="";
 var monthbirth=enterdateb.getMonth()+1;
 var monthcur=curdate.getMonth()+1;
   if(monthbirth < monthcur)
      { month=monthcur-monthbirth;};
   if(monthbirth > monthcur)
      { month=(12-monthbirth)+monthcur;
        year-=1;};
 var day="";
 var daybirth=enterdateb.getDate();
 var daycur=curdate.getDate();
   if(daybirth < daycur)
      { day=daycur-daybirth;}
   if(daybirth > daycur)
      { day=(30-daybirth)+daycur;
        month-=1;}

     document.getElementById("day").innerHTML=day;
     document.getElementById("month").innerHTML=month;     
     document.getElementById("year").innerHTML=year;
  
 var hours=curdate.getHours();
    document.getElementById("hour").innerHTML=hours;  
  var minutes=curdate.getMinutes();
    document.getElementById("minute").innerHTML=minutes;
  var Seconds=curdate.getSeconds();
    document.getElementById("second").innerHTML=Seconds;     
}
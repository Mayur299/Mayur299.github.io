const a=document.getElementsByClassName("row");
const b=document.getElementsByClassName("row1");
const c=document.getElementsByClassName("row2");
const d=document.getElementsByClassName("row3");




function fun(item)
{
  if(item==0)
  {
    a[0].style.display='flex';
    b[0].style.display='none';
    c[0].style.display='none';
    d[0].style.display='none';
  }
  else if(item==1)
  {
    a[0].style.display='none';
    b[0].style.display='flex';
    c[0].style.display='none';
    d[0].style.display='none';
  }
  else if(item==2)
  {
    a[0].style.display='none';
    b[0].style.display='none';
    c[0].style.display='flex';
    d[0].style.display='none';
  }
  else
  {
    a[0].style.display='none';
    b[0].style.display='none';
    c[0].style.display='none';
    d[0].style.display='flex';
  }
}

function getStartTime(){
  let date = new Date();
  var tz = date.toString().split("GMT")[1].split(" (")[0];
  tz = tz.substring(1,5);
  let hOffset = parseInt(tz[0]+tz[1]);
  let mOffset = parseInt(tz[2]+tz[3]);
  let offset = date.getTimezoneOffset() * 60 * 1000;
  let localTime = date.getTime();
  let utcTime = localTime + offset;
  let austratia_brisbane = utcTime + (3600000 * hOffset) + (60000 * mOffset);
  let customDate = new Date(austratia_brisbane);

  let data = {
      day: customDate.getDate(),
      month: customDate.getMonth() + 1,
      year: customDate.getFullYear(),
      hour: customDate.getHours(),
      min: customDate.getMinutes(),
      second: customDate.getSeconds(),
      raw: customDate,
      stringDate: customDate.toString()
  }
  text = (data.day + "/" + data.month + "/" + data.year + ' ' + data.hour + ':' + data.min + ':' + data.second);
  document.getElementById("f").innerHTML=text;
}



setInterval(getStartTime,900);


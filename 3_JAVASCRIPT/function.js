function SleepIn(weekday,vacation){
  weekday=prompt("weekday?");
  vacation=prompt("vacation?");

  if (weekday=="false") {
    return true;
  }

  else{
    return false;
  }
}

function stringTimes(str,n){
  var x=str
  while (n>1) {
    str+=x;
    n--;
  }
  return str;
}

function makeBricks(small,big,goal){
  return small*1+big*5==goal
}

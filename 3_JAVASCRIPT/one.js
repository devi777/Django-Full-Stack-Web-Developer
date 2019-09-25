var name=prompt("enter your name");
var flag=0;

var a=name[0];
var i=0;
var b;

while(i<name.length)
  {
    if(name[i]==" ")
      {
          var b=name[i+1];
          break;
      }
      i++;
  }

if(a==b)
{
  console.log(flag++);
}

var age=prompt("enter your age: ");

if(age>20 && age<30)
{
  flag++;
}

var height=prompt("enter height in cms");

if(height>=170)
{
  flag++;
}

var pet=prompt("enter pet name: ");

if(pet[pet.length-1]=="y")
{
  flag++;
}

if(flag==4)
  {
    console.log("you are a spy!");
  }

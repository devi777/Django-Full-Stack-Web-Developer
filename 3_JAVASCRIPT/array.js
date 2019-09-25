function roster(name,w){
  name=prompt("Enter name");
  var myarr=[name];

  while(true){
    w=prompt("add,remove,display,quit?")

    if(w=="add"){
      name=prompt("name?");
      myarr.push(name);
    }

    else if (w=="remove") {
      var x=prompt("name?");
      myarr.pop(x);
    }

    else if (w=="display") {
      for(i of myarr){
        console.log(i);
      }
    }

    else{
      console.log("U may refresh the page to start over.");
      break;
    }
  }
}

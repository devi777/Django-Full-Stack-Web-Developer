var employee={
  name: "John Smith",
  job: "Programmer",
  age: "31",
  nameLength: function(){
    return this.name.length;
  },
  lastName: function(){
    for(i in this.name.length){
      if(this.name[i]==" "){
          while(name[i]){
            console.log(name[i]);
            i++;
          }
          break;
      }
    }
  }
};

function ape(){
  for(i in employee){
    console.log(i+" is "+ employee[i]);
    }
  }

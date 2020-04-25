const testVar = {}

function testFunc() {
  return "hi"
}

function superBowlWin(arr){
  arr.find(element =>{
    if(element.result === "W"){
      return element.year;
    }
    else{
      return undefined;
    }

    
  })
  
}
const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(){
  let arr = testVar;
  arr.find(element =>{
    if(element.result === "W"){
      return element.year;
    }
    else{
      return undefined;
    }


  })

}

s
function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  arr.find(element =>{
    if(element.result === "W"){
      return element.year;
    }
    else{
      return undefined;
    }


  })

}

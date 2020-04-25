s
function testFunc() {
  return "hi"
}

function superbowlWin(arr){
    return arr.find(element =>{
    if(element.result === "W"){
      return element.year;
    }
    else{
      return undefined;
    }


  })

}

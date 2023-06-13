var LoopyLightHouse = function (range,multiples,words){
  for (let i = range[0]; i < range[1]; i ++){
    if (i % multiples[0] === 0){
      if (i % multiples[1] === 0){
        console.log(words[0]+words[1]);
      }
      else{
        console.log(words[0]);
      }
    }
    else if (i % multiples[1] === 0){
      console.log(words[1]);
    }
    else{
      console.log(i);
    }
  }
}
console.log(LoopyLightHouse([2,100],[4,10],["peace","out"]));
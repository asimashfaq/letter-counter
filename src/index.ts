interface ILetterCounter {
  letter: string;
  occurences: number;
}
export const letterCounter = (input:string):ILetterCounter[] => {
  let letterCountArray:ILetterCounter[]  = new Array<ILetterCounter>();
  for (let i = 0; i < input.length; i++) {
    if (letterCountArray[input[i]] == undefined){
      letterCountArray[input[i]] = {letter:input[i],occurences:0}
    }
    letterCountArray[input[i]].occurences++; 
  }
  return letterCountArray;
};

const solution = (S, K) => {
  const textArray = S.split(' ');
  let count = 0;
  let msgString = '';

  for (let i = 0; i < textArray.length; i++) {
    msgString = '';
    if (textArray[i].length > K) {
      return -1;
    } else {
      count++;
    }
    msgString = textArray[i];
    for (let j = i + 1; j < textArray.length; j++) {
      msgString = msgString.concat(textArray[j], ' ');
      if (msgString.length > K) {
        i = j - 1;
        break;
      }
    }
  }

  return count;
};

S1 = 'You have a long piece of text'
K1 = 10;


console.log(solution(S1, K1))



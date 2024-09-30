function solution(str) {
  const compareAlphabetically = (a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  };

  const alphabets = str.split('');

  for (let i = 0; i < alphabets.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < alphabets.length; j++) {
      if (compareAlphabetically(alphabets[j], alphabets[maxIndex]) < 0) {
        maxIndex = j;
      }
    }

    // 최대값을 현재 위치로 스왑
    if (maxIndex !== i) {
      [alphabets[i], alphabets[maxIndex]] = [alphabets[maxIndex], alphabets[i]];
    }
  }
  console.log(alphabets.join(''));
}

solution('Zbcdefg');

// 중복된 숫자가 있으면 어떻게
function solution(numbers) {
  const result = [];

  let minValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    if (current < minValue) {
      result.push(minValue);
      minValue = current;
    } else {
      result.push(current);
    }
  }
  if (result.length === 0) {
    return [-1];
  }
  return result;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));

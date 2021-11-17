// 1. 로또의 최고 순위와 최저 순위

// naive solution
function solution(lottos, win_nums) {
  var answer = [];

  // lottos와 win_nums가 일치하는 횟수 cnt를 구한다.
  // 이는 최소 cnt만큼 번호가 일치한다는 뜻이다.
  const min = (len, cnt = 0) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (lottos[i] === win_nums[j]) {
          cnt++;
        }
      }
    }
    
    if (cnt === 6) return 1;
    if (cnt === 5) return 2;
    if (cnt === 4) return 3;
    if (cnt === 3) return 4;
    if (cnt === 2) return 5;
    return 6;
  }
  
  // lottos 중에서 0이 win_nums와 같은 번호라고 가정하면
  // lottos와 win_nums가 일치하는 경우와 lottos의 0의 갯수를 더한만큼
  // 최대 cnt만큼 일치한다는 뜻이다.
  const max = (len, cnt = 0) => {
    for (let i = 0; i < len; i++) {
      if (lottos[i] === 0) cnt++;
      for (let j = 0; j < len; j++) {
        if (lottos[i] === win_nums[j]) {
          cnt++;
        }
      }
    }

    if (cnt === 6) return 1;
    if (cnt === 5) return 2;
    if (cnt === 4) return 3;
    if (cnt === 3) return 4;
    if (cnt === 2) return 5;
    return 6;
  }

  answer = [max(lottos.length), min(lottos.length)];
  return answer;
}

// solution takes many likes
function solution2(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let min = lottos.filter(num => win_nums.includes(num)).length;
  let zero = lottos.filter(num => num === 0).length;
  let max = min + zero;

  return [rank[max], rank[min]];
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution2(lottos, win_nums));
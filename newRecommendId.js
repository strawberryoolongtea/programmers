// 2. 신규 아이디 추천
function solution(new_id) {
  var answer = '';
  let id = new_id.split('');
  id = id.map((character) => {
    return character.toLowerCase();
  });

  for (let i = 0; i < id.length; i++) {
    if (id[i] === /[a-z]/) {
      console.log('alph')
    }
  }

  return id;
}

const new_id = '...!@BaT#*..y.abcdefghijklm';

console.log(solution(new_id));
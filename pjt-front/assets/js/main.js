// document.getElementById('poll-make-btn').addEventListener('click', function (evt) {
//   // for (const arg of arguments) {
//   //     console.log(arg)
//   // }
//   console.log(evt);       //이벤트 객체가 인자로 전달된다.
//   console.log('this:', this); // 이벤트를 처리하는 함수내에서 this는 이벤트를 발생시킨 요소이다.
//   console.log('thisid:', this.id);
// })

// localStorage.setItem("users", JSON.stringify([]));

let check = 0;
function logout() {
  localStorage.removeItem("userId");
  location.replace("index.html");
}

// 처음 사이트에 들어온 고객일 경우
if (localStorage.getItem("users")==null) {
  localStorage.setItem("users", JSON.stringify([]))
}

// localStorage.setItem("users", JSON.stringify([]))
window.onload = function () {
  // localStorage.setItem("users", JSON.stringify([]));
  // alert(localStorage.getItem("users") + "dd");
}

function regist() {
  // 문서에서 id 로 input data 가져오기
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  // 입력값 검증
  if (!(userId && password && name && email && age)) {
    alert("빈칸이 없도록 입력해주세요.");
    return;
  } else if (check == 0) {
    alert("아이디 중복 검사를 마쳐주세요.");
  }
  else {
    // input data로 user 만들기
    const user = {
      userId: userId,
      password: password,
      name: name,
      email: email,
      age: age,
    };

    var users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
    localStorage.setItem(`users`, JSON.stringify(users));
    alert('성공적으로 회원가입을 완료했습니다.')
    // 로그인 화면으로 돌아가기
    location.replace("login.html");
  }
}




function login() {
  // 문서에서 id로 input data 가져오기
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("password").value;
  let flag = 0;
  var users = JSON.parse(localStorage.getItem("users"));

  // 로컬스토리지에 "user" 키로 저장된 item 가져와서 json 객체로 만들기
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user == null) continue;
    if (userId == user.userId && password == user.password) {
      flag = 1;
      alert("로그인 성공 !");
      // 로그인 성공하면 index 페이지로 이동.
      localStorage.setItem("userId", JSON.stringify(userId));
      location.replace("index.html");
      return;
    }
  }
  if (flag == 0) {
    alert('해당 회원 정보가 조회되지 않습니다.');
  }
}


function checkDuplicate() {
  var userId = document.querySelector("#userId").value;
  let flag = 0;
  check = 0;
  // 로컬스토리지에 "user" 키로 저장된 item 가져와서 json 객체로 만들기
  var users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user == null) continue;
    if (userId == user.userId) {
      flag = 1;
      alert("이미 존재하는 아이디입니다.");
      return;
      // 로그인 성공하면 index 페이지로 이동.
    }
  }
  if (flag == 0) {
    alert('사용가능한 아이디입니다.');
    check = 1;
  }
}
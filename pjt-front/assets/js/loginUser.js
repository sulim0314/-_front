// 로그인 X 일 때
if (!localStorage.getItem('userId')) {
    document.querySelector(".afterLogin").setAttribute("style", "display:none");
} 
// 로그인 O 일 때
if (localStorage.getItem('userId')) {
    document.querySelector(".beforeLogin").setAttribute("style", "display:none");
    // 관리자가 아닐 때
    if (JSON.parse(localStorage.getItem('userId')) != 'admin') {
        document.querySelector(".admin").setAttribute("style", "display:none");
    }
} 
function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화
addJavascript('/js/session.js'); // 세션
addJavascript('/js/cookie.js'); // 쿠키


function login(){
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
	let passward = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
	
	form.action = "../index_login.html";
	form.method = "get";

	const cookieName = "loginFailCount";
  	let count = parseInt(get_logincount_CookieValue(cookieName));

  	if (isNaN(count)) {
    	count = 0;
  	}
	
	if(check.checked == true){ // 아이디 체크 o
    	alert("쿠키를 저장합니다.");
        setCookie("id", id.value, 1); // 1일 저장
        alert("쿠키 값 :" + id.value);
    }
    else { // 아이디 체크 x
        setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
	}

	if(id.value.length === 0 || passward.value.length === 0){
		alert("아이디나 비밀번호를 입력해주세요.");
		count += 1;
  		set_logincount_CookieValue(cookieName, count.toString());
		console.log("로그인 실패 횟수: " + count);
	}
	else{
		session_set(); // 세션 생성
		form.submit();
	}
	
	if (count >= 3) {
    	btn_disActive();
    	console.log("로그인 제한: 3번 이상 실패");
		setTimeout(btn_Active,60000); // 1분동안 로그인 못하게 제한
		deleteCookie(cookieName);
  	}
}
	
function logout(){
	session_del();
	location.href='../index.html';
}

function get_id(){
	if(true){
        decrypt_text();
    }
    if(true){ // else{ 였으나 조건문이 무조건 돌아가면서 else문이 안돌아가기때문에 조건문을 풀어야됨.
    var getParameters = function(paramName){ // 변수 = 함수(이름)
    var returnValue; // 리턴값을 위한 변수 선언
    var url = location.href; // 현재 접속 중인 주소 정보 저장
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
		    var varName = parameters[i].split('=')[0];
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		    }
	    } // 2중 for문 끝
	}; // 함수 끝
	alert(getParameters('id') + '님 반갑습니다!'); // 메시지 창 출력
	}
	setTimeout(logout,300000);
}

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
	session_check(); // 세션 유무 검사
}

function login_check(){
	let id = document.querySelector("#floatingInput");
	let passward = document.querySelector("#floatingPassword");
	
	var id_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
	var pass_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	var id_result = id_check.test(id);
	var pass_result = pass_check.test(passward);

		if(id.value.length === 0 || passward.value.length === 0){
			alert("아이디나 비밀번호를 입력해주세요.");
		}
		else if(id !== id_result && passward !== pass_result){
			alert("아이디나 비밀번호의 형식을 제대로 입력해주세요.");
		}
		else{
			login();
		}
}

function btn_Active(){
	const btn = document.getElementById('login_btn');
	btn.disabled = false;
}

function btn_disActive(){
	const btn = document.getElementById('login_btn');
	btn.disabled = true;
}
	
// 로그인 버튼 클릭 시 실행되는 함수
function login_count() {
  const cookieName = "login_Cnt";
  let count = parseInt(get_login_CookieValue(cookieName)); // value

  if (isNaN(count)) {
    count = 0;
  }

  count += 1;
  set_login_CookieValue(cookieName, count.toString());
  console.log("로그인 횟수: " + count);
  location.href='login.html';
}

// 로그아웃 버튼 클릭 시 실행되는 함수
function logout_count() {
  const cookieName = "logout_Cnt";
  let count = parseInt(get_logout_CookieValue(cookieName));

  if (isNaN(count)) {
    count = 0;
  }

  count += 1;
  set_logout_CookieValue(cookieName, count.toString());

  console.log("로그아웃 횟수: " + count);

	logout();
}

// 로그인 실패 횟수를 기록하고 제한하는 함수
/*function handleFailedLogin() {
  const cookieName = "loginFailCount";
  let count = parseInt(getCookieValue(cookieName));

  if (isNaN(count)) {
    count = 0;
  }

  count += 1;
  setCookieValue(cookieName, count.toString());

  console.log("로그인 실패 횟수: " + count);

  if (count >= 3) {
    // 로그인 제한 로직을 여기에 추가
    console.log("로그인 제한: 3번 이상 실패");
    // ... 로그인 제한에 대한 추가 동작을 수행할 수 있습니다.
  }
}
*/
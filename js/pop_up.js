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
addJavascript('/js/login.js'); // 로그인

function pop_up() {
	var cookieCheck = get_popup_Cookie("popupYN");
        if (cookieCheck != "N"){
        window.open("pop_up.html", "팝업테스트", "width=400, height=300, top=10, left=10");
        }
}


function closePopup() {
        if (document.getElementById('check_popup').value) {
            set_popup_Cookie("popupYN", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
}


function show_clock(){
	let currentDate = new Date(); //날짜 객체 생성
	let divClock = document.getElementById('divClock');
	let msg = "현재 시간 : ";
	if(currentDate.getHours() > 12){ //12시보다 크면 오후 or 오전
		msg += "오후";
		msg += currentDate.getHours()-12+"시";
	}
	else{
		msg += "오전";
		msg += currentDate.getHours()+"시";
	}
	msg += currentDate.getMinutes()+"분";
	msg += currentDate.getSeconds()+"초";
	divClock.innerText = msg;
	if(currentDate.getMinutes()> 58){ // 정각마다 1분전 빨강 표시
		divClock.style.color = "red";
	}
	setTimeout(show_clock, 1000); //1초마다 갱신
}
/*
function timer(){
var time = 300;
			var min = "";
			var sec = "";
			
			var x = setInterval(function(){
				min = parseInt(time/60);
				sec = time%60;
				
				document.getElementById("timer").innerHTML = min + "분" + sec + "초";
				time--;
				
				if(time < 0){
					clearInterval(x);
				}
			}, 1000);
}

timer();*/
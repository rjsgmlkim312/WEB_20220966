function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/login.js'); // 로그인
addJavascript('/js/security.js'); // 암복호화
addJavascript('/js/session.js'); // 세션
addJavascript('/js/cookie.js'); // 쿠키

class SignUp {
  constructor(firstName, lastName, birthdayDate, gender, emailAddress, passward, classNumber, random) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdayDate = birthdayDate;
    this.gender = gender;
    this.emailAddress = emailAddress;
    this.passward = passward;
    this.classNumber = classNumber;
    this.random = random;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get contactInfo() {
    return `${this.emailAddress} ${this.passward} ${this.random}`;
  }

  set contactInfo(contactInfo) {
    const [emailAddress, passward, random] = contactInfo.split(" ");
    this.emailAddress = emailAddress;
    this.passward = passward;
    this.random = random;
      
  }
}

function join(){ // 회원가입
    let form = document.querySelector("#form_main");
    let f_name = document.querySelector("#firstName");
    let l_name = document.querySelector("#lastName");
    let b_day = document.querySelector("#birthdayDate");
    let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress");
    let passward = document.querySelector("#passward");
    let class_check = document.querySelector(".select form-control-lg");
    
    form.action = "../index_join.html";
    form.method = "get";
    
    if(f_name.value.length === 0 || l_name.value.length === 0 || b_day.value.length === 0 || email.value.length === 0 || passward.value.length === 0){
        alert("회원가입 폼에 모든 정보를 입력해주세요.(성별, 분반 제외)");
    }else{
		session_join_set();
        form.submit();
    }
}
function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";       
}

function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                if (cookie_name[0] == "id") {
                    return cookie_name[1];
                }
            }
        }
        return ;
	//if(cookie_name.length == 3){
	//	setCookie("id", id.value, 0);
	//}
}

function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

//팝업 쿠키 설정 함수
function set_popup_Cookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";       
}
//팝업 쿠키 얻는 함수
function get_popup_Cookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                
                if (cookie_name[0] == "popupYN") {
                    return cookie_name[1];
                }
            }
        }
        return ;
}

// 쿠키 로그인 카운팅 값을 얻는 함수
function get_login_CookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];

    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return "";
}

// 쿠키 로그인 카운팅 값을 설정하는 함수
function set_login_CookieValue(cookieName, value) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (1 * 24 * 60 * 60 * 1000)); // 1일 후 만료
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

// 쿠키 로그아웃 카운팅 값을 얻는 함수
function get_logout_CookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];

    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return "";
}

// 쿠키 로그아웃 카운팅 값을 설정하는 함수
function set_logout_CookieValue(cookieName, value) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (1 * 24 * 60 * 60 * 1000)); // 1일 후 만료
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

// 쿠키 로그인 실패 카운팅 값을 얻는 함수
function get_logincount_CookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];

    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return "";
}

// 쿠키 로그인 실패 카운팅 값을 설정하는 함수
function set_logincount_CookieValue(cookieName, value) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (1 * 24 * 60 * 60 * 1000)); // 1일 후 만료
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

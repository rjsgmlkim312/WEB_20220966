document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 - 전역변수

let slang1 = '바보';
let slang2 = '멍청이';
let slang3 = '똥개';
let slang4 = ["바보","멍청이","똥개"];

function search_message(){
   //alert("검색을 수행합니다!");
   let search_str = document.querySelector("#search_txt"); // 변수에 저장
   //document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
   //console.log(search_str.value); // 콘솔에 출력
	if(search_str.value.length === 0){
		alert("검색어가 비었습니다. 입력해주세요.");
		search_str.value = ""; // 17~19,23~25번째 줄은 있어도 되고 없어도 됨.
   		search_str.focus();
    	return false;
	}
	else if(search_str.value === '바보' || search_str.value === '멍청이' || search_str.value === '똥개'){
		alert("비속어가 입력되었습니다.");
		search_str.value = "";
   		search_str.focus();
    	return false;
	}	
	else{
		alert("검색을 수행합니다.");
		if(search_array.length>=10){
			search_array.shift();
		}
		search_array.push(search_str.value); // 배열에 검색어 추가
		let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
		document.querySelector("#form_main").submit();
	}
	/*for(var i = 0; i<slang4.length; i++){ // for문 사용해서 비속어 포함
		if(search_str.value.length === 0){
			alert("검색어가 비었습니다. 입력해주세요.")
		}
		else if(search_str.value == slang4[i]){
			alert("검색어에 비속어가 포함되어 있습니다.")
		}
		else{
			alert("검색을 수행합니다.");
			if(search_array.length>=10){
				search_array.shift();
			}
			search_array.push(search_str.value);
			let text = document.getElementById("search_message").innerHTML = search_array.toString();
			document.querySelector("#form_main").submit();
		}
	}*/
}

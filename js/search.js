document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 - 전역변수

function search_message(){
   // alert("검색을 수행합니다!");
   let search_str = document.querySelector("#search_txt"); // 변수에 저장
   //document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
   //console.log(search_str.value); // 콘솔에 출력
	if(search_str.value.length === 0){
		alert("검색어가 비었습니다. 입력해주세요.");
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
}

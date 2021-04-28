var bodyScrollTop = 0 ;
const gnbSlogan = document.getElementsByClassName('gnb_slogan')[0];
const gnbMenu = document.getElementsByClassName('gnb_menu')[0];

function navChange() {

   bodyScrollTop = window.pageYOffset;
   
   // Header Scroll Event
   if ( bodyScrollTop > 100 ) {
      gnbSlogan.style.width = "0";
      gnbSlogan.style.opacity = "0";
      gnbMenu.style.margin = "-21px 0 0";
   } else {
      gnbSlogan.style.width = "370px";
      gnbSlogan.style.opacity = "1";
      gnbMenu.style.margin = "40px 0 0";
   }

   // 스크롤에 따라 상단으로 이동하는 버튼 나타내고 사라지게 하기
   if ( bodyScrollTop > 960 ) {

      document.getElementsByClassName('move_top')[0].style.bottom = "24px";

   } else {

      document.getElementsByClassName('move_top')[0].style.bottom = "-100px";

   }

}


// Search 입력 창 보이기 숨기기
var gnbRightLink = document.getElementsByClassName('gnb_right_link')[0];
var gnbSearch = document.getElementsByClassName('gnb_search')[0];

function searchShow() {

   gnbRightLink.style.display = "none";
   gnbSearch.style.display = "block";

}

function searchHide() {

   gnbRightLink.style.display = "flex";
   gnbSearch.style.display = "none";

}





// 필요한 변수 선언
var searchText; // 사용자 검색 입력값
var projectItem; // 각 프로젝트의 리스트 요소
var projectTitle; // 각 프로젝트의 타이틀 요소
var projectNum; // 전체 프로젝트의 개수
var resultNum; // 검색 결과 매칭되는 프로젝트 개수

function searchProject() {

   // 검색을 위한 변수 값 할당

   // 대소문자 구문 없이 검색하는 방법 1. toLowerCase() 사용
   // searchText = document.getElementById('project_search').value.toLowerCase();
   // 대소문자 구문 없이 검색하는 방법 2. 정규식 사용
   searchText = document.getElementById('project_search').value;
   searchTextI = new RegExp(searchText,"i");

   projectItem = document.getElementsByClassName('project_item');
   projectTitle = document.getElementsByClassName('project_title');
   projectNum = projectItem.length;

   resultNum = 0; // 검색 결과 수를 0으로 초기화

   // Hero Section 숨기기
   document.getElementById('hero').style.display = "none";

   // 프로젝트 검색
   for (i=0; i<projectNum; i++) {

      if ( projectTitle[i].innerHTML.search(searchTextI) >= 0 ) {

         projectItem[i].style.display = "block";

      } else {

         projectItem[i].style.display = "none";
         
      }

   }

   if ( resultNum == 0 ) {
      document.getElementsByClassName('no_result')[0].style.display = "block";
      document.getElementById('searchKeyword').innerHTML = searchText;
   }
}
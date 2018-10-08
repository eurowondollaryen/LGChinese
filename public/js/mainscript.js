var lv3to4 = `各 각각 각
感 느낄 감
去 갈 거
京 서울 경
界 지경 계
功 공 공
共 함께 공
科 과목 과
果 과실 과
郡 고을 군
根 뿌리 근
急 급할 급
當 마땅할 당
堂 집 당
對 대답할 대
度 법도 도
讀 읽을 독
等 무리 등
禮 예도 례
綠 푸를 록
理 다스릴 리
李 오얏(자두) 리
利 이로울 리
朴 순박할 박
反 돌이킬 반
放 놓을 방
番 차례 번
步 걸음 보
服 옷 복
部 거느릴 부
書 글 서
席 자리 석 
線 줄 선
省 살필 성
性 성품 성
消 사라질 소
孫 손자 손
樹 나무 수
首 머리 수
習 익힐 습
示 보일 시
始 처음 시
式 법 식
野 들 야
言 말씀 언
業 일 업
永 길 영
英 꽃부리 영
勇 날쌜 용
用 쓸 용
友 벗 우
運 움직일 운
遠 멀 원
原 언덕/근본 원
元 으뜸 원
意 뜻 의
昨 어제 작
作 지을 작
章 글 장
在 있을 재
才 재주 재
題 제목 제
第 차례 제
族 겨레 족
晝 낮 주
窓 창문 창
淸 맑을 청
村 마을 촌
表 겉 표
幸 다행 행
號 이름 호
話 말씀 화
和 화할/화목할 화
活 살 활
會 모일 회
價 값 가
加 더할 가
可 옳을 가
改 고칠 개
個 낱 개
客 손님 객
決 결단할 결
結 맺을 결
輕 가벼울 경
敬 공경할 경
季 철 계
固 굳을 고
考 상고할 고
告 알릴 고
曲 굽을 곡
公 공변될 공
課 매길 과
過 지날 과
關 관계할/빗장 관
觀 볼 관
廣 넓을 광
橋 다리 교
求 구할 구
君 임금 군
貴 귀할 귀
極 다할 극
給 줄 급
期 기약할 기
技 재주 기
基 터 기
吉 길할 길
念 생각 념
能 능할 능
談 말씀 담
待 기다릴 대
德 덕 덕
都 도읍 도
到 이를 도
落 떨어질 락
冷 찰 랭
兩 두 량
良 어질 량
量 헤아릴 량
歷 지낼 력
領 옷깃 령
令 하여금/명령할 령
例 법식 례
勞 수고로울 로
料 헤아릴 료
流 흐를 류
望 바랄 망
買 살 매
妹 아랫누이 매
賣 팔 매
武 굳셀 무
未 아닐 미
法 법 법
報 갚을 보
奉 받들 봉
富 부자 부
備 갖출 비
比 견줄 비
貧 가난할 빈
仕 벼슬할 사
思 생각 사
使 하여금 사
産 낳을 산
算 셈 산
賞 상줄 상
相 서로 상
商 장사 상
常 항상 상
序 차례 서
船 배 선
仙 신선 선
說 말씀 설
城 재 성
誠 정성 성
洗 씻을 세
歲 해 세
送 보낼 송
數 셈 수
守 지킬 수
宿 잠잘 숙
順 순할 순
視 볼 시
試 시험 시
識 알 식
臣 신하 신
實 열매 실
氏 성씨 씨
兒 아이 아
案 책상/생각 안
約 맺을 약
養 기를 양
億 억 억
如 같을 여
餘 남을 여
然 그럴 연
熱 더울 열
葉 잎 엽
屋 집 옥
完 완전할 완
要 구할 요
願 원할 원
由 말미암을 유
醫 의원 의
以 써 이
因 인할 인
姊 (=姉)맏누이 자
再 두 재
材 재목 재
財 재물 재
爭 다툴 쟁
貯 쌓을 저
的 과녁 적
典 법 전
傳 전할 전
展 펼 전
店 가게 점
庭 뜰 정
定 정할 정
調 고를 조
助 도울 조
早 이를 조
存 있을 존
終 마칠 종
種 씨 종
罪 허물 죄
注 물댈 주
志 뜻 지
至 이를 지
支 지탱할 지
進 나아갈 진
眞 참 진
質 바탕 질
集 모일 집
次 버금 차
參 참여할(셋 삼) 참
責 꾸짖을 책
鐵 쇠 철
初 처음 초
祝 빌 축
充 채울 충
致 이를 치
他 다를 타
打 칠 타
宅 집 택
統 거느릴 통
害 해칠 해
香 향기 향
許 허락할 허
現 나타날 현
湖 호수 호
患 근심 환
回 돌 회
效 본받을 효
訓 가르칠 훈
凶 흉할(=兇) 흉`.split('\n');
var lv5 = [];
var lv6 = [];
var lv7 = [];
var i_know = [];
function testStart(pools, num) {
	$("#testSpace").empty();
	$("#testSpace").append("<div class='word' id='word1'>" + pools[num][0] + "</div>");
	$("#testSpace").append("<div class='word' id='word2' style='display:none;'>" + pools[num].substr(2,pools[num].length) + "</div>");
	$("#testSpace").append("<p id='seq'>" + (num + 1) + "/" + pools.length + "</p><input id='know' type='checkbox' value='알고 있음'/>알고 있음");
	$("#testSpace").append("<button class='btn' id='btn-next'>Next</button>");
	$("#testSpace").ready(function() {

		/*
		$("#card").on('click', function() {
			if($("#word2").css('display') == 'none') {
				$("#word1").css('display','none');
				$("#word2").fadeIn();
			} else if($("#word1").css('display') == 'none') {
				$("#word2").css('display','none');
				$("#word1").fadeIn();
				console.log('2');
			}
		});*/
		$("#word1").on('click', function() {
			$("#word1").css('display','none');
			$("#word2").fadeIn();
		});
		$("#word2").on('click', function() {
			$("#word2").css('display','none');
			$("#word1").fadeIn();
		});
		$("#btn-next").on('click', function() {
			
			if($('#know').is(':checked')) {
				i_know.push(num+1);
			}
			testStart(pools, num+1);
			console.log('t');
		});
	});
}
function test(level) {
	if(level == "level3to4") {
		testStart(lv3to4,0);
	} else if(level == "level5") {
		testStart(lv5,0);
	} else if(level == "level6") {
		testStart(lv6,0);
	} else if(level == "level7") {
		testStart(lv7,0);
	} else alert('error');
}
$(document).ready(function() {
	$(".panel").each(function(index) {
		$(this).on('click', function() {
			test($(this).attr('id'));
			//console.log($(this).attr('id'));
		});
	});
});

`
[1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 16, 17, 18, 19, 20, 22, 23, 24, 25, 27, 28, 29, 31, 32, 33, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 71, 73, 75, 77, 84, 88, 90, 91, 95, 96, 99, 108, 111, 132, 146, 164, 167, 204]
`
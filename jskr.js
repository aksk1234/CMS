document.addEventListener('DOMContentLoaded', function () {
    function handleClick(contentId) {
        const main = document.querySelector('main');
        let content;

        switch (contentId) {
            case 'Home':
                content = `
                <section class="profile-section">
                    <img src="1.jpg" alt="Profile Image" class="profile-image">
                    <div class="profile-content">
                        <p>지상에 내려온 함락신입니다.<br>
                            햄버거를 더 많이 먹기위해 오늘도 노력합니다.<br><br>
                            
                            직업: 함락神<br>
                            취미: 미소녀 게임, 도주혼 구류<br>
                            좋아하는 음식: 햄버거<br>
                        </p>
                    </div>
                </section>
                `;
                break;
            case 'Guideline':
                content = `
                <section>
                    <h2>Guideline</h2>
                    <p>일본어와 한국어 외의 대응이 어렵습니다.<br><br>

                    <b>::현재 의뢰 접수상태::</b><br>

                    ・방송용, 상업용: 접수중<br>

                    ・커미션: 접수중<br><br>

                    <b>::주요 모집 분야::</b><br>

                    →키 비주얼 일러스트, 스탠딩 일러스트, 아이콘용 일러스트, SD 일러스트, MV 일러스트, 굿즈 제작용 일러스트 등 다양하게 접수중입니다. <br><br>

                    <b>::기본적인 의뢰 진행 과정::</b><br>

                    신청서 확인 → 청구서 작성 후 청구 → 입금 확인 → 러프 제출 → 수정 확인 후 완성 → 납품 전 최종 수정 확인 → 납품 완료</p>
                </section>
                `;
                break;
            case 'Contact':
                content = `
                <section>
                    <h2>Contact</h2>
                    <p>검토해주셔서 대단히 감사드립니다.<br><br>

                    ・문의 시 아래 양식을 참고하여 연락 주시면 검토 하겠습니다.<br>

                    ・아래 템플릿은 필수 항목을 제외하고는 가능한 만큼 작성 해주셔도 좋습니다만, 템플릿이 세세하게 작성되어 있을 경우 확인과 회신이 원활합니다.<br>

                    ・5일 이내 회신이 없는 경우 누락의 가능성이 있기에 재전송 부탁드리겠습니다.<br><br><br>

                    <b>::연락처::</b><br>

                    - anxne0002@gmail.com<br><br><br>

                    <b>::템플릿::</b><br>
                    <U><font color="red">*</font> 표시문항은 필수 작성문항입니다.</U><br><br>

                    <font color="red">*</font>개인/법인:<br>

                    <font color="red">*</font>의뢰 내용,사용 용도:<br>

                    <font color="red">*</font>납기:<br>

                    <font color="red">*</font>예산:<br>

                    <font color="red">*</font>상업이용 유/무:<br>

                    <font color="red">*</font>계약서 작성 유/무:<br>

                    파일 형식:<br>

                    캔버스 크기:<br>

                    참고용 일러스트(제 일러스트 중 따로 원하시는 화풍,데포르메가 있으시다면 참고용으로 첨부해주세요):<br>

                    의뢰인 계정(활동이 확인 가능한 계정):</p>
                </section>
                `;
                break;
            case 'Commission':
                content = `
                <section>
                <h2>Commission</h2>
                    <b>:: 금액 ::</b><br><br><br>

                    <b>▶LD 일러스트 (1인 기준)</b><br><br>

                    ・어깨까지~ 80000원~<br>

                    ・허벅지까지~ 150000원~<br>

                    ・전신 200000원~<br><br>

                    <b>▶그 외 추가 옵션</b><br><br>

                    ・캐릭터 디자인 200000원~<br>

                    ・SD 일러스트 15000원<br><br><br>

                    ・기재 된 금액은 전부 최소 금액 기준입니다.<br><br>

                    ・신청서 내용, 납품 기한 등 신청서 내용에 따라 금액은 변동 될 수 있습니다.<br><br>

                   ・결제는 계좌 입금으로만 가능합니다.<br><br>

                    ・트러블 방지를 위해 전부 선입금 후 진행 됩니다.<br><br>

                    ・작업 기간은 기본 6주입니다.<br><br>

                    ・신청은 아래 폼으로 부탁 드립니다. <br>
                    → <a href = "https://forms.gle/kJDxcexyrtHgMBjPA" target = "_blank">https://forms.gle/kJDxcexyrtHgMBjPA</a>
                </section>
                `;
                break;
            default:
                content = `<p>Page not found</p>`;
        }

        main.innerHTML = content;
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            handleClick(event.target.textContent);
        });
    });
});

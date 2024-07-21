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
                        <p>地上界に降りてきた落とし神です<br>
もっともっと、たくさんのハンバーガーを食べられるように今日も頑張ります。<br><br>

職業: 落とし神<br>
趣味: 美少女ゲーム、駆け魂捕獲<br>
好きな食べ物: ハンバーガー
                        </p>
                    </div>
                </section>
                `;
                break;
            case 'Guideline':
                content = `
                <section>
                    <h2>ガイドライン</h2>
                    <p>日本語と韓国語以外の対応は難しいです。<br><br>

                    <b>::現在のご依頼受付状態::</b><br>

                    ・放送用、商用利用: 受付中<br>

                    ・commission: 停止中 (8月中再開予定)<br><br>

                    <b>::主な制作物::</b><br>

                   → キービジュアル、立ち絵、アイコンイラスト、SDイラスト、MVイラスト、グッズ制作用イラスト~など、様々な分野で受付しています。<br><br>

                    <b>:: 取引の流れ ::</b><br>

                    テンプレート内容確認 →  請求書作成後の請求 → 入金確認 →ラフ提出 → 修正確認後完成 → 納品前の最終修正確認→ 納品完了</p>
                </section>
                `;
                break;
            case 'Contact':
                content = `
                <section>
                    <h2>コンタクト</h2>
                    <p>この度はご依頼をご検討頂き誠にありがとうございます。<br><br>

                    ・お問い合わせの際は、下のテンプレートをご記入の上、ご連絡をお願いします。<br>

                    ・以下のテンプレートは、必須項目を除き、可能な限りご記入いただいても大丈夫です。<br>

                    ・5日以内に返信がない場合、欠落の可能性がありますので 、再送信をお願いします。<br><br><br>

                    <b>::メール::</b><br>

                    - anxne0002@gmail.com<br><br><br>

                    <b>::テンプレート:: </b><br>
                    <U><font color="red">*</font> 表示項目は必須項目です。</U><br><br>

                    <font color="red">*</font>個人/法人 :<br>

                    <font color="red">*</font>依頼内容、使用用途 :<br>

                    <font color="red">*</font>納期 :<br>

                    <font color="red">*</font>予算 :<br>

                    <font color="red">*</font>商用利用の有無 :<br>

                    <font color="red">*</font>契約書の有無 :<br>

                    ファイル形式  :<br>

                    キャンバス·サイズ :<br>

                    参考用イラスト(私の絵の中でお好みの画風、デフォルメがあれば参考までに添付してください) :
<br>

                    アカウント(活動が確認できるアカウント)<br>
                </section>
                `;
                break;
            case 'Commission':
                content = `
                <section>
                <h2>Commission</h2>
                    <b>:: 金額 ::</b><br><br><br>

                    <b>▶LDイラスト (1人基準)</b><br><br>

                    ・肩まで~ 8000円~<br>

                    ・太ももまで~ 15000円~<br>

                    ・全身 20000円~<br><br>

                    <b>▶その他</b><br><br>

                    ・キャラクターデザイン  20000円~<br>

                    ・SDイラスト 1500円<br><br><br>

                    ・記載されている金額は最低金額基準です。<br><br>

                    ・申請書の内容、納期など予算は変動する場合があります。<br><br>

                    ・支払いはpaypalで対応しています。(手数料あり)<br><br>

                    ・トラブル防止のために全額先払いをお願いしております。<br><br>

                    ・作業期間は基本6週間となります。<br><br>

                    ・リクエストをご希望の方は下のフォームから<br>
                    → <a href = "https://forms.gle/D29xp3fSNXbcKwFN7" target = "_blank">https://forms.gle/D29xp3fSNXbcKwFN7</a>
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

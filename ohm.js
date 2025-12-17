let voltba;
let amp;
let vf;
let ans;
let voltbar = document.getElementById('dcv');
let ampr = document.getElementById('i');
let vfr = document.getElementById('vf');
let w;
let mes;
const ansar = document.getElementById('ansdiv');

voltbar.focus();

function cal() {
    voltba = parseFloat(voltbar.value);
    amp = parseFloat(ampr.value);
    vf = parseFloat(vfr.value);
    if (voltba == null || voltba == '' || amp == null || amp == '' || vf == null || vf == '') {
        alert('すべてのテキストボックスに値を入力してください。');
    } else if (amp == 0) {
        alert('アンペア数を確認してください。\n本当に0ですか？');
    } else {
        ans = (voltba - vf) / (amp / 1000);
        w = vf * (amp / 1000);
        if (w < 0.15) {
            mes = '一般的な1/4Wのカーボン抵抗で良いです。';
        } else {
            mes = '1/2Wの金属皮膜抵抗などやそれ以上の電気量に耐えられる抵抗にしてください。';
        }
    }
    ansar.textContent = `結果：${ans}Ω,${w}W　${mes}`;
}

voltbar.addEventListener('input' ,(event) => {
    cal();
});
ampr.addEventListener('input', (event) => {
    cal();
});
vfr.addEventListener('input', (event) => {
    cal();
});




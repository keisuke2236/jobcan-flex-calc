function gt(text){return $("th:contains('" + text + "')").next()[0].innerText.split(':')[0]};
sabun = gt('実労働時間') - gt('実働日数') * 8;
if(sabun > 0){text1 = '現在目標より'+sabun+"時間多く働けてます"}else { text1='目標に'+sabun*-1+"時間足りていません" };
n_day = parseInt(gt('所定労働日数').slice(0,2)) - gt('実働日数');
ave = (gt('月規定労働時間') - gt('実労働時間')) / n_day;
message = "【フレックスタイム計算】\n" +
"今月働かないといけないのは" + gt('月規定労働時間') + "時間です\n" +
"1日8時間勤務の場合" + text1 + "\n" +
'残り' + n_day + '日で1日平均' + ave + "時間働きましょう \n";
console.log(message);
$("h2:contains('出勤簿')")[0].innerText = message;

//javascript:!function(){}();
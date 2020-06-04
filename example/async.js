"use strict";
//指定したtimeoutミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return; //指定時間経過したら関数の実行を終了
    }
  }
}
/*
//1~4の順にログに出力される
console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行する");
//setTimeout()は第2引数で指定したミリ秒後に第1引数で指定したcallback関数を非同期で実行する関数
setTimeout(() => {
  console.log("3. ブロックする処理を開始する");
  blockTime(1000); //1000ミリ秒（1秒）ブロックする
  console.log("4. ブロックする処理が完了した");
}, 10);

console.log("2. 同期的な処理を実行する");
*/

//jsの基本的な非同期処理はメインスレッドで実行されるため、他の同期処理の影響を受ける
const startTime = Date.now();
setTimeout(() => {
  const endTime = Date.now();
  console.log(
    `非同期処理のコールバックが呼ばれるまで${
      endTime - startTime
    }ミリ秒かかりました`
  );
}, 10);
console.log("ブロックする処理を開始します");
blockTime(1000);
console.log("ブロックする処理が完了しました");

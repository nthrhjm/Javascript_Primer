"use strict";
//指定したtimeoutミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

//1~4の順にログに出力される
console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行する");
setTimeout(() => {
  console.log("3. ブロックする処理を開始する");
  blockTime(1000); //1000ミリ秒（1秒）ブロックする
  console.log("4. ブロックする処理が完了した");
}, 10);

console.log("2. 同期的な処理を実行する");

/*:
* @plugindesc 遊戲開始時，直接開啟全螢幕
*/
/*
  1.利用原生程式rpg_core.js內的Graphics類別內的_switchFullScreen函式
*/

(function(){
    //一啟動遊戲後，自動全螢幕
    Graphics._switchFullScreen();
})();
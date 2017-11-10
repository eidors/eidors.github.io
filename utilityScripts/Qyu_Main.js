$(function() {
    var resizeTimer = null;
    var IsAnimate = true;
    var $Icons_IP = $("#Icons_IP");
    var $Icons_Video = $("#Icons_Video");
    var $Icons_Audio = $("#Icons_Audio");
    var $Icons_Fiction = $("#Icons_Fiction");
    var $Icons_Cartoon = $("#Icons_Cartoon");
    var $Icons_Game = $("#Icons_Game");
    var $Icons_Other = $("#Icons_Other");
    $Icons_Video.draggable({
        revert: true,
        opacity: 1,
        // distance: 20,
        // delay: 1000,
        start: function() {
            $Icons_IP.hide();
        },
        drag: function() {
            var valLeft = $Icons_Video.css("left");
            var valTop = $Icons_Video.css("top");
            delayAnimate($Icons_Audio, valLeft, valTop, 100);
            delayAnimate($Icons_Fiction, valLeft, valTop, 200);
            delayAnimate($Icons_Cartoon, valLeft, valTop, 300);
            delayAnimate($Icons_Game, valLeft, valTop, 400);
            delayAnimate($Icons_Other, valLeft, valTop, 500);
        },
        stop: function() {
            $Icons_IP.show();
            var valLeft = $Icons_Video.css("left");
            var valTop = $Icons_Video.css("top");
            reStoreIcon($Icons_Audio, valLeft, valTop, 0);
            reStoreIcon($Icons_Fiction, valLeft, valTop, 100);
            reStoreIcon($Icons_Cartoon, valLeft, valTop, 200);
            reStoreIcon($Icons_Game, valLeft, valTop, 300);
            reStoreIcon($Icons_Other, valLeft, valTop, 400);
        }
    });
    console.log("If you have any qusation, pls find me.(Email:zft774156938@163.com)");
});
// var resizeTimer = null;
// var IsAnimate = true;

function delayAnimate($objThis, valLeft, valTop, valDelay) {
    var resizeTimer = null;
    resizeTimer = setTimeout(function() {
        $objThis.css("left", valLeft);
        $objThis.css("top", valTop);
        // IsAnimate = true;
    }, valDelay);
}

function reStoreIcon($objThis, valLeft, valTop, valDelay) {
    var resizeTimer = null;
    resizeTimer = setTimeout(function() {
        $objThis.animate({
            left: valLeft,
            top: valTop,
            duration: "slow"
        });
        // IsAnimate = true;
    }, valDelay);
}

function openMainMenu() {
    var $Icons_IP = $("#Icons_IP");
    var $Icons_Video = $("#Icons_Video");
    var $Icons_Audio = $("#Icons_Audio");
    var $Icons_Fiction = $("#Icons_Fiction");
    var $Icons_Cartoon = $("#Icons_Cartoon");
    var $Icons_Game = $("#Icons_Game");
    var $Icons_Other = $("#Icons_Other");
    var $Main_Menu = $("#Main_Menu");
    var $modal_backdrop = $("#modal_backdrop")
    $modal_backdrop.show().addClass("in");
    $Main_Menu.removeClass("Main-Menu");
    $Main_Menu.addClass("open-Main-Menu");
}
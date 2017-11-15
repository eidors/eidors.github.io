$(function(e) {
    var resizeTimer = null;
    var IsAnimate = true;
    var $Icons_IP = $("#Icons_IP");
    var $Icons_Video = $("#Icons_Video");
    var $Icons_Audio = $("#Icons_Audio");
    var $Icons_Fiction = $("#Icons_Fiction");
    var $Icons_Cartoon = $("#Icons_Cartoon");
    var $Icons_Game = $("#Icons_Game");
    var $Icons_Other = $("#Icons_Other");
    $Icons_Audio.hide();
    $Icons_Fiction.hide();
    $Icons_Cartoon.hide();
    $Icons_Game.hide();
    $Icons_Other.hide();



    $Icons_Video.on("click", openMainMenu);
    $Icons_Video.draggable({
        revert: true,
        opacity: 1,
        // distance: 20,
        // delay: 1000,
        start: function() {
            $Icons_IP.hide();
            $Icons_Video.off("click", openMainMenu);
            $Icons_Audio.show();
            $Icons_Fiction.show();
            $Icons_Cartoon.show();
            $Icons_Game.show();
            $Icons_Other.show();
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
            $(this).removeAttr("style");
            reStoreIcon($Icons_Audio, valLeft, valTop, 0);
            reStoreIcon($Icons_Fiction, valLeft, valTop, 100);
            reStoreIcon($Icons_Cartoon, valLeft, valTop, 200);
            reStoreIcon($Icons_Game, valLeft, valTop, 300);
            reStoreIcon($Icons_Other, valLeft, valTop, 400);
            $Icons_Video.on("click", openMainMenu);
            // $(document).on("click", "#Icons_Video", function(e) {
            //     openMainMenu(e);
            // })
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
            },
            "fast",
            function() {
                $objThis.removeAttr("style");
                $objThis.hide();
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
    var $modal_backdrop = $("#modal_backdrop");
    var $Main_MenuDIV = $("#Main_Menu div");

    // $Main_MenuDIV.removeAttr("style");
    $Main_MenuDIV.show();
    $Icons_Video.draggable("disable");
    $modal_backdrop.show().addClass("in");
    $Main_Menu.removeClass("Main-Menu");
    $Main_Menu.addClass("open-Main-Menu");
}

function stopBubble(e) {
    // 如果提供了事件对象，则这是一个非IE浏览器
    if (e && e.stopPropagation) {
        // 因此它支持W3C的stopPropagation()方法 
        e.stopPropagation();
    } else {
        // 否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
}

function stopDefault(e) {
    // 阻止默认浏览器动作(W3C)
    if (e && e.preventDefault) {
        e.preventDefault();
    } else {
        // IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
    }
    return false;
}

function restoreDefault() {
    var $Main_Menu = $("#Main_Menu");
    var $modal_backdrop = $("#modal_backdrop");
    var $Icons_Video = $("#Icons_Video");
    var $Main_MenuDIV = $("#Main_Menu div");
    var $Icons_IP = $("#Icons_IP");

    $Icons_Video.draggable("enable");
    $Main_Menu.removeClass("open-Main-Menu");
    $Main_Menu.addClass("Main-Menu");
    $modal_backdrop.removeClass("in").hide();
    $Main_MenuDIV.hide();
    $Icons_IP.show();
    $Icons_Video.show();
}
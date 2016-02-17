/*
    Date: 2016-02-16
*/

var app = {
    self : {},

    onDeviceReady : function () {
        if (device.platform === "iOS") {
            // hide Exit button. They don't have one on iOS devices.
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            document.body.style.marginTop = "20px";
            // hide the Splash Screen for iOS only
            navigator.splashscreen.hide();
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
            //
            document.getElementById('exitApp').addEventListener('click', function() {
                navigator.app.exitApp();
            });
        } else if (device.platform == 'browser') {
            document.getElementById('exitApp').classList.add("hidden");
        }
        if (device.platform != 'browser') {
            app.phonegapStuff();
        }
    },
    phonegapStuff : function () {
        return;
    }
};

//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', function() {
    
    var v = navigator.appVersion.match('X11');
    //
    // This is truthy, not absolute.
    if ( v == 'X11' ) {
        document.getElementById('isbrowser').innerHTML = v;
        // This needs to be global so other modules can see it.
        device = {platform:'browser'};
        // Force the function.
        app.onDeviceReady();
    } else {
        document.getElementById('isbrowser').innerHTML = 'not X11';
        // Wait for PhoneGap to load
        document.addEventListener("deviceready", app.onDeviceReady, false);
    }
});





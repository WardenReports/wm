//Any URLS To Block API Retrieving/Server Retrieving (Malicous Sites)
var block = ["",""];

//Enter Websites In The "" Below That You Would Like To Allow Your Employees To Access. Copy Paste ,"" To Add More Values
var allow= ["",""]

//DO NOT EDIT ANYTHING BELOW HERE. THIS CODE IS PROTECTED OUR LICENSE AGREEMENT.

var _0xe8d5b4=_0x29b2;(function(_0x404fff,_0x1d4159){var _0x2516d5=_0x29b2,_0x3bcc70=_0x404fff();while(!![]){try{var _0x54faf1=parseInt(_0x2516d5(0x19b))/0x1+-parseInt(_0x2516d5(0x194))/0x2*(-parseInt(_0x2516d5(0x196))/0x3)+parseInt(_0x2516d5(0x18f))/0x4*(-parseInt(_0x2516d5(0x192))/0x5)+parseInt(_0x2516d5(0x191))/0x6+-parseInt(_0x2516d5(0x190))/0x7*(parseInt(_0x2516d5(0x197))/0x8)+parseInt(_0x2516d5(0x19c))/0x9*(-parseInt(_0x2516d5(0x198))/0xa)+parseInt(_0x2516d5(0x193))/0xb;if(_0x54faf1===_0x1d4159)break;else _0x3bcc70['push'](_0x3bcc70['shift']());}catch(_0x53c88a){_0x3bcc70['push'](_0x3bcc70['shift']());}}}(_0x2dd5,0x8b3f2));switch(window['location'][_0xe8d5b4(0x199)]){case allow:break;case'serverguard.wixsite.com':break;default:history['back'](),window[_0xe8d5b4(0x19a)](_0xe8d5b4(0x195));}function _0x29b2(_0x1e9ced,_0x8ac936){var _0x2dd512=_0x2dd5();return _0x29b2=function(_0x29b2a9,_0x19f7e5){_0x29b2a9=_0x29b2a9-0x18f;var _0x1c2db4=_0x2dd512[_0x29b2a9];return _0x1c2db4;},_0x29b2(_0x1e9ced,_0x8ac936);};function _0x2dd5(){var _0x33cf11=['open','460158GJgwgz','18xSXQCb','84HrDgLs','42sqNXxu','4128834lUXozc','210475BqLlAg','10779054tBdgPl','87996BxHPJH','https://serverguard.wixsite.com/boratheon/blockedbywork','63tlcSqf','1457464AMusXs','2523610fpdltY','hostname'];_0x2dd5=function(){return _0x33cf11;};return _0x2dd5();}

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: block},
    ["blocking"]
)

// var url = "https://serverguard.wixsite.com/boratheon"

  chrome.runtime.setUninstallURL('https://serverguard.wixsite.com/boratheon')

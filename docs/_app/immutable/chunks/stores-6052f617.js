import{A as w}from"./index-69e7cea0.js";var c=globalThis&&globalThis.__spreadArray||function(e,n,o){if(o||arguments.length===2)for(var r=0,i=n.length,t;r<i;r++)(t||!(r in n))&&(t||(t=Array.prototype.slice.call(n,0,r)),t[r]=n[r]);return e.concat(t||Array.prototype.slice.call(n))},v=function(){function e(n,o,r){this.name=n,this.version=o,this.os=r,this.type="browser"}return e}(),p=function(){function e(n){this.version=n,this.type="node",this.name="node",this.os=process.platform}return e}(),S=function(){function e(n,o,r,i){this.name=n,this.version=o,this.os=r,this.bot=i,this.type="bot-device"}return e}(),m=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),b=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),W=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,g=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,l=3,O=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",W]],f=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function B(e){return e?h(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new b:typeof navigator<"u"?h(navigator.userAgent):y()}function A(e){return e!==""&&O.reduce(function(n,o){var r=o[0],i=o[1];if(n)return n;var t=i.exec(e);return!!t&&[r,t]},!1)}function h(e){var n=A(e);if(!n)return null;var o=n[0],r=n[1];if(o==="searchbot")return new m;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<l&&(i=c(c([],i,!0),M(l-i.length),!0)):i=[];var t=i.join("."),s=E(e),a=g.exec(e);return a&&a[1]?new S(o,t,s,a[1]):new v(o,t,s)}function E(e){for(var n=0,o=f.length;n<o;n++){var r=f[n],i=r[0],t=r[1],s=t.exec(e);if(s)return i}return null}function y(){var e=typeof process<"u"&&process.version;return e?new p(process.version.slice(1)):null}function M(e){for(var n=[],o=0;o<e;o++)n.push("0");return n}const d=B();let u;d&&(d.name==="safari"||d.name==="firefox"?u="running":u="paused");const N=w(u);export{N as a};

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("body"),t=function(e,t){document.addEventListener("click",function(t){e("First promise was resolved")}),setTimeout(function(){t("First promise was rejected")},3e3)},n=function(e,t){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(t){t.preventDefault(),e("Second promise was resolved")})},i=function(e,t){var n=!1,i=!1;document.addEventListener("mousedown",function(t){0===t.button&&(n=!0),2===t.button&&(i=!0),n&&i&&e("Third promise was resolved")})},o=new Promise(t),c=new Promise(n),a=new Promise(i);o.then(function(t){var n=document.createElement("div");n.className="success",n.innerHTML=t,n.setAttribute("data-qa","notification"),e.append(n)}).catch(function(t){var n=document.createElement("div");n.className="error",n.innerHTML=t,n.setAttribute("data-qa","notification"),e.append(n)}),c.then(function(t){var n=document.createElement("div");n.className="success",n.innerHTML=t,n.setAttribute("data-qa","notification"),e.append(n)}),a.then(function(t){var n=document.createElement("div");n.className="success",n.innerHTML=t,n.setAttribute("data-qa","notification"),e.append(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.17950019.js.map
(function(window){var svgSprite='<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M448 768c176.725333 0 320-143.274667 320-320 0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 176.725333 143.274667 320 320 320z m0 42.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S247.701333 85.333333 448 85.333333s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667z m304.917333-27.584a21.333333 21.333333 0 0 1 30.165334-30.165334l150.848 150.848a21.333333 21.333333 0 0 1-30.165334 30.165334l-150.848-150.826667z" fill="#3D3D3D" ></path></symbol><symbol id="icon-xiaoxi" viewBox="0 0 1024 1024"><path d="M938.666667 454.101333c0 201.621333-186.432 364.202667-416.938667 368.661334-9.130667 10.346667-11.733333 13.226667-16.213333 17.898666-1.493333 1.578667-1.493333 1.578667-3.029334 3.136-7.552 7.68-15.253333 14.741333-35.456 32.597334-54.272 41.322667-130.837333 62.165333-186.602666 62.272a21.333333 21.333333 0 0 1-14.378667-5.546667 22.485333 22.485333 0 0 1-6.741333-22.592c0.810667-3.413333 2.197333-6.293333 4.053333-9.28 2.026667-3.242667 4.629333-6.570667 8.874667-11.605333 1.109333-1.322667 8.682667-10.197333 11.093333-13.077334 4.672-5.589333 8.64-10.56 12.416-15.594666 23.253333-31.146667 33.216-58.474667 26.666667-83.52a21.333333 21.333333 0 1 1 41.28-10.794667c10.602667 40.597333-3.52 79.36-33.770667 119.850667-1.173333 1.578667-2.368 3.136-3.584 4.693333 39.104-7.509333 82.026667-23.744 113.6-47.722667 18.282667-16.213333 25.472-22.826667 32.128-29.610666l2.602667-2.666667c4.757333-4.992 7.36-7.893333 21.333333-23.765333a21.333333 21.333333 0 0 1 16-7.253334c212.736 0 384-146.773333 384-326.08C896 274.773333 724.736 128 512 128S128 274.773333 128 454.101333c0 86.933333 40.32 168.661333 111.274667 229.461334a21.333333 21.333333 0 1 1-27.776 32.405333C131.413333 647.296 85.333333 553.941333 85.333333 454.101333 85.333333 249.642667 277.034667 85.333333 512 85.333333s426.666667 164.309333 426.666667 368.768zM341.333333 384c0-11.776 9.493333-21.333333 21.333334-21.333333h298.666666c11.776 0 21.333333 9.472 21.333334 21.333333 0 11.776-9.493333 21.333333-21.333334 21.333333H362.666667c-11.776 0-21.333333-9.472-21.333334-21.333333z m0 128c0-11.776 9.728-21.333333 21.376-21.333333h213.248a21.312 21.312 0 1 1 0 42.666666h-213.248A21.312 21.312 0 0 1 341.333333 512z" fill="#3D3D3D" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
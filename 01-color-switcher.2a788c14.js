const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")},{startBtn:e,stopBtn:d,bodyEl:o}=t;let n=null;d.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),d.addEventListener("click",(function(){d.disabled=!0,e.disabled=!1,clearTimeout(n)}));
//# sourceMappingURL=01-color-switcher.2a788c14.js.map

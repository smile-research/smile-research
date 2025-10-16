(()=>{document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("theme-toggle"),a=document.getElementById("light-syntax-theme"),r=document.getElementById("dark-syntax-theme"),s=t=>{t==="dark"?(a.disabled=!0,r.disabled=!1):(a.disabled=!1,r.disabled=!0)};if(c){let t=()=>document.documentElement.getAttribute("data-theme"),o=i=>{document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i),s(i)},n=t();s(n),c.addEventListener("click",()=>{let e=t()==="dark"?"light":"dark";o(e)})}typeof renderMathInElement=="function"&&renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1});let d=()=>{document.querySelectorAll("pre").forEach(t=>{if(!t.querySelector(".copy-button")){let o=document.createElement("button");o.className="copy-button",o.textContent="Copy",o.addEventListener("click",()=>{let n=t.querySelector("code").textContent;navigator.clipboard.writeText(n).then(()=>{o.textContent="Copied!",setTimeout(()=>{o.textContent="Copy"},2e3)}).catch(i=>{console.error("Failed to copy: ",i),o.textContent="Error!",setTimeout(()=>{o.textContent="Copy"},2e3)})}),t.appendChild(o)}})};d(),document.addEventListener("themeChanged",d),(()=>{document.querySelector(".citation-popup")||document.body.insertAdjacentHTML("beforeend",`
        <div class="citation-popup">
          <div class="citation-content">
            <button class="citation-close">&times;</button>
            <h3 class="citation-title">BibTeX Citation</h3>
            <div class="citation-text"></div>
            <button class="copy-citation-button">Copy to Clipboard</button>
          </div>
        </div>
      `);let t=document.querySelector(".citation-popup"),o=t.querySelector(".citation-close"),n=t.querySelector(".copy-citation-button"),i=t.querySelector(".citation-text");o.addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",e=>{e.target===t&&t.classList.remove("active")}),n.addEventListener("click",()=>{navigator.clipboard.writeText(i.textContent).then(()=>{n.textContent="Copied!",setTimeout(()=>{n.textContent="Copy to Clipboard"},2e3)}).catch(e=>{console.error("Failed to copy: ",e),n.textContent="Error!",setTimeout(()=>{n.textContent="Copy to Clipboard"},2e3)})}),document.querySelectorAll(".cite-button").forEach(e=>{e.addEventListener("click",()=>{let m=e.getAttribute("data-title"),l=e.getAttribute("data-authors"),u=e.getAttribute("data-year"),y=e.getAttribute("data-journal"),p=e.getAttribute("data-doi"),h=`@article{${`${l.split(",")[0].trim().split(" ").pop()}${u}`},
  title = {${m}},
  author = {${l}},
  journal = {${y}},
  year = {${u}}${p?`,
  doi = {${p}}`:""}
}`;i.textContent=h,t.classList.add("active")})})})()});})();

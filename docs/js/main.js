const N=document.querySelector(".js_reset_btn"),$=document.querySelector(".js-name"),P=document.querySelector(".js-job"),n=document.querySelector(".js-designCards"),R=document.querySelector(".wholeForm");document.querySelector(".js-designPalette");const B=document.querySelector(".js-paletteOne"),J=document.querySelector(".js-paletteTwo"),U=document.querySelector(".js-paletteThree");function G(){n.classList.add("paletteOne"),n.classList.remove("paletteTwo","paletteThree")}function V(){n.classList.add("paletteTwo"),n.classList.remove("paletteOne","paletteThree")}function z(){n.classList.add("paletteThree"),n.classList.remove("paletteOne","paletteTwo")}B.addEventListener("click",G);J.addEventListener("click",V);U.addEventListener("click",z);function K(){n.classList.remove("paletteOne","paletteTwo","paletteThree");for(const t in r)r[t]="";$.innerHTML="Nombre Apellido",P.innerHTML="Front-end developer",w.style.backgroundImage='url("../images/valentina.jpg")',b.style.backgroundImage='url("../images/valentina.jpg")',C.href="tel:",T.href="mailto:",k.href="https://www.linkedin.com/",F.href="https://github.com"}function Q(){R.reset(),K(),localStorage.removeItem("AwesomeCard")}N.addEventListener("click",Q);const u=document.querySelector(".js-name-card"),S=document.querySelector(".js-name-form"),m=document.querySelector(".js-job-card"),y=document.querySelector(".js-job-form");document.querySelector(".js-form");const W=document.querySelector(".js-form-container"),r={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},X=t=>{const e=t.target.name;r[e]=t.target.value};W.addEventListener("input",X);function Y(t){t.preventDefault();const e=S.value;e===""?u.innerHTML="Nombre Apellido":u.innerHTML=e}function Z(t){t.preventDefault();const e=y.value;e===""?m.innerHTML="Front-end developer":m.innerHTML=e}S.addEventListener("input",Y);y.addEventListener("input",Z);const j=document.querySelector(".js-createBtn"),v=document.querySelector(".js-createdcard"),h=document.querySelector(".js-linkCard"),q=document.querySelector(".js-errorcard"),ee=document.querySelector(".js-errorcard-title");function te(t){t.preventDefault(),fetch("https://dev.adalab.es/api/card/",{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"application/json"}}).then(e=>e.json()).then(e=>{if(v.classList.add("hidden"),q.classList.add("hidden"),e.success===!0)return ne(e.cardURL);e.error.includes("ER_DATA_TOO_LONG")?f("La imagen es muy grande"):f(e.error)}),re()}j.addEventListener("click",te);function ne(t){h.setAttribute("href",t),h.innerHTML=t,j.classList.add("backgroundgrey");const e=document.querySelector(".js-twitter-button"),M=e.getAttribute("href");e.setAttribute("href",M+encodeURIComponent(`Mira mi nueva tarjeta ${t}`)),v.classList.remove("hidden")}const re=()=>{const t=JSON.stringify(r);localStorage.setItem("AwesomeCard",t)};function f(t){ee.innerHTML=`Error! ${t}`,q.classList.remove("hidden")}const o=new FileReader,oe=document.querySelector(".js-btn"),w=document.querySelector(".js-img-card"),b=document.querySelector(".js-profile-preview");function se(t){const e=t.currentTarget.files[0];o.addEventListener("load",de),o.readAsDataURL(e)}function de(){w.style.backgroundImage=`url(${o.result})`,b.style.backgroundImage=`url(${o.result})`,r.photo=o.result}oe.addEventListener("change",se);const C=document.querySelector(".js-phone-card"),T=document.querySelector(".js-mail-card"),k=document.querySelector(".js-linkedin-card"),F=document.querySelector(".js-git-card"),_=document.querySelector(".js-phone-form"),D=document.querySelector(".js-mail-form"),E=document.querySelector(".js-linkedin-form"),O=document.querySelector(".js-git-form");function ce(){T.href=`mailto:${D.value}`}D.addEventListener("input",ce);function ie(){C.href=`tel:${_.value}`}_.addEventListener("input",ie);function ae(){k.href=`https://www.linkedin.com/in/${E.value}`}E.addEventListener("input",ae);function le(){F.href=`https://github.com/${O.value}`}O.addEventListener("input",le);const ue=document.querySelector(".js-fieldset__legend"),x=document.querySelector(".fieldset__legend--arrowupDesign"),s=document.querySelector(".fieldset__legend--arrowDownDesign"),H=document.querySelector(".form__design--colors"),me=document.querySelector(".js-fieldsetLegendForm"),d=document.querySelector(".fieldset__legend--arrowupForm"),I=document.querySelector(".fieldset__legend--arrowDownForm"),c=document.querySelector(".boxToBeHidden"),he=document.querySelector(".js-fieldsetLegendShare"),i=document.querySelector(".fieldset__legend--arrowupShare"),A=document.querySelector(".fieldset__legend--arrowDownShare"),a=document.querySelector(".fieldset__boxcontent");s.classList.add("hidden");c.classList.add("hidden");d.classList.add("hidden");a.classList.add("hidden");i.classList.add("hidden");function l(t){const e=t.currentTarget;console.log(e),e.classList.contains("js-design")?(fe(),L(),g()):e.classList.contains("js-form")?(p(),pe(),g()):e.classList.contains("js-share")&&(p(),L(),Le())}function p(){x.classList.add("hidden"),s.classList.remove("hidden"),H.classList.add("hidden")}function fe(){x.classList.remove("hidden"),s.classList.add("hidden"),H.classList.remove("hidden")}function L(){d.classList.add("hidden"),I.classList.remove("hidden"),c.classList.add("hidden")}function pe(){d.classList.remove("hidden"),I.classList.add("hidden"),c.classList.remove("hidden")}function g(){i.classList.add("hidden"),A.classList.remove("hidden"),a.classList.add("hidden")}function Le(){i.classList.remove("hidden"),A.classList.add("hidden"),a.classList.remove("hidden")}ue.addEventListener("click",l);me.addEventListener("click",l);he.addEventListener("click",l);
//# sourceMappingURL=main.js.map

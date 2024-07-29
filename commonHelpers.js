import{A as f,a as m,S as b}from"./assets/vendor-fc627baa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function S(){new f(".faq-list",{elementClass:"faq-item",triggerClass:"faq-list-btn",panelClass:"faq-list-panel",showMultiple:!0})}const a=document.querySelector(".modal-backDrop"),w=document.querySelector(".modal-close"),q=document.querySelector(".modal-title"),E=document.querySelector(".modal-text"),y=document.querySelector("body");function u(e){a.classList.remove("is-closed"),y.style.overflow="hidden",q.textContent=e.title?e.title:e.status,E.textContent=e.message,a.addEventListener("click",v),w.addEventListener("click",d),window.addEventListener("keyup",h)}function h(e){e.code==="Escape"&&(d(),window.removeEventListener("keyup",h))}function v(e){e.target.classList.contains("modal-backDrop")&&(a.removeEventListener("click",v),d())}function d(){a.classList.add("is-closed"),w.removeEventListener("click",d),y.style.overflow=""}const c=document.querySelector(".wt-form");m.defaults.baseURL="https://portfolio-js.b.goit.study/api";function L(){c.addEventListener("submit",C)}async function C(e){e.preventDefault();const t={email:c.email.value,comment:c.comment.value.trim()};if(t.email===""||t.comment===""){u({title:"Error",message:"Fill in all the fields"});return}try{const r=(await m.post("/requests",t)).data;c.reset(),u(r)}catch(r){u(r)}}function k(){new f(".aboutme-accordion",{elementClass:"aboutme-accordion-item",panelClass:"aboutme-accord-dropdown",triggerClass:"btn-arrow-read-more",duration:600,showMultiple:!0,openOnInit:[0]})}function x(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutme-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((o,n)=>{const s=o.cloneNode(!0);t.appendChild(s)});const r=new b(".aboutme-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const o=this.slides[this.previousIndex],n=this.slides[this.activeIndex];o.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutme-skills-btn").addEventListener("click",()=>{r.slideNext()})})}const V=document.querySelector(".covers-section"),p=document.querySelectorAll(".marquee__line");function A(e){const t=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight;return t.top<=r&&t.top+t.height>=0}function B(){window.addEventListener("scroll",function(){A(V)?p.forEach(e=>O(e,"marquee_animation")):p.forEach(e=>P(e,"marquee_animation"))})}function O(e,t){e.classList.add(t)}function P(e,t){e.classList.remove(t)}document.addEventListener("DOMContentLoaded",B);let g=[],i;const N=async()=>{try{const e=await m.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status!==200)throw new Error("Failed to fetch reviews");return e.data}catch(e){return console.error(e),[]}},I=()=>{const e=document.querySelector(".reviews-swiper .swiper-wrapper"),t=g.map(r=>`
    <div class="swiper-slide">
      <ul class="review-cards">
        <li class="photo">
          <img src="${r.avatar_url}" alt="${r.author}" />
        </li>
        <div class="description">
          <li class="name"><a href="#">${r.author}</a></li>
          <li class="review"><a href="#">${r.review}</a></li>
        </div>
      </ul>
    </div>
  `).join("");e.innerHTML=t,i?i.update():i=new b(".reviews-swiper",{navigation:{nextEl:".button-right",prevEl:".button-left"},slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},on:{reachEnd:()=>{document.querySelector(".button-right").disabled=!0,document.querySelector(".button-right").setAttribute("aria-disabled","true")},reachBeginning:()=>{document.querySelector(".button-left").disabled=!0,document.querySelector(".button-left").setAttribute("aria-disabled","true")},fromEdge:()=>{document.querySelector(".button-right").disabled=!1,document.querySelector(".button-right").setAttribute("aria-disabled","false"),document.querySelector(".button-left").disabled=!1,document.querySelector(".button-left").setAttribute("aria-disabled","false")}}})},M=async()=>{g=await N(),I(),D()},D=()=>{const e=document.querySelector(".button-left"),t=document.querySelector(".button-right");e.disabled=i.isBeginning,t.disabled=i.isEnd,e.setAttribute("aria-disabled",e.disabled),t.setAttribute("aria-disabled",t.disabled)};S();L();k();x();M();
//# sourceMappingURL=commonHelpers.js.map

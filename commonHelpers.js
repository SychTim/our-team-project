import{A as g,a as b,S as w,N as I,K as C}from"./assets/vendor-ba333b13.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function x(){new g(".faq-list",{elementClass:"faq-item",triggerClass:"faq-list-btn",panelClass:"faq-list-panel",showMultiple:!0})}const f=document.querySelector(".modal-backDrop"),E=document.querySelector(".modal-close"),P=document.querySelector(".modal-title"),A=document.querySelector(".modal-text"),L=document.querySelector("body");function y(e){f.classList.remove("is-closed"),L.style.overflow="hidden",P.textContent=e.title?e.title:e.status,A.textContent=e.message,f.addEventListener("click",q),E.addEventListener("click",p),window.addEventListener("keyup",S)}function S(e){e.code==="Escape"&&(p(),window.removeEventListener("keyup",S))}function q(e){e.target.classList.contains("modal-backDrop")&&(f.removeEventListener("click",q),p())}function p(){f.classList.add("is-closed"),E.removeEventListener("click",p),L.style.overflow=""}const m=document.querySelector(".wt-form");b.defaults.baseURL="https://portfolio-js.b.goit.study/api";function V(){m.addEventListener("submit",j)}async function j(e){e.preventDefault();const t={email:m.email.value,comment:m.comment.value.trim()};if(t.email===""||t.comment===""){y({title:"Error",message:"Fill in all the fields"});return}try{const n=(await b.post("/requests",t)).data;m.reset(),y(n)}catch(n){y(n)}}function O(){new g(".aboutme-accordion",{elementClass:"aboutme-accordion-item",panelClass:"aboutme-accord-dropdown",triggerClass:"btn-arrow-read-more",duration:600,showMultiple:!0,openOnInit:[0]})}function N(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutme-skills-circle"),t=document.querySelector(".swiper-wrapper");e.forEach((o,s)=>{const i=o.cloneNode(!0);t.appendChild(i)});const n=new w(".aboutme-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const o=this.slides[this.previousIndex],s=this.slides[this.activeIndex];o.style.background="",s.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutme-skills-btn").addEventListener("click",()=>{n.slideNext()})})}const D=document.querySelector(".covers-section"),h=document.querySelectorAll(".marquee__line");function M(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top<=n&&t.top+t.height>=0}function T(){window.addEventListener("scroll",function(){M(D)?h.forEach(e=>H(e,"marquee_animation")):h.forEach(e=>R(e,"marquee_animation"))})}function H(e,t){e.classList.add(t)}function R(e,t){e.classList.remove(t)}document.addEventListener("DOMContentLoaded",T);let k=[],a;const _=async()=>{try{const e=await b.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status!==200)throw new Error("Failed to fetch reviews");return e.data}catch(e){return console.error(e),[]}},$=()=>{const e=document.querySelector(".reviews-swiper .swiper-wrapper"),t=k.map(n=>`
    <div class="swiper-slide">
      <ul class="review-cards">
        <li class="photo">
          <img src="${n.avatar_url}" alt="${n.author}" />
        </li>
        <div class="description">
          <li class="name"><a href="#">${n.author}</a></li>
          <li class="review"><a href="#">${n.review}</a></li>
        </div>
      </ul>
    </div>
  `).join("");e.innerHTML=t,a?a.update():a=new w(".reviews-swiper",{navigation:{nextEl:".button-right",prevEl:".button-left"},slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},on:{reachEnd:()=>{document.querySelector(".button-right").disabled=!0,document.querySelector(".button-right").setAttribute("aria-disabled","true")},reachBeginning:()=>{document.querySelector(".button-left").disabled=!0,document.querySelector(".button-left").setAttribute("aria-disabled","true")},fromEdge:()=>{document.querySelector(".button-right").disabled=!1,document.querySelector(".button-right").setAttribute("aria-disabled","false"),document.querySelector(".button-left").disabled=!1,document.querySelector(".button-left").setAttribute("aria-disabled","false")}}})},F=async()=>{k=await _(),$(),K()},K=()=>{const e=document.querySelector(".button-left"),t=document.querySelector(".button-right");e.disabled=a.isBeginning,t.disabled=a.isEnd,e.setAttribute("aria-disabled",e.disabled),t.setAttribute("aria-disabled",t.disabled)},d=document.querySelector(".js-prevPr"),u=document.querySelector(".js-nextPr");function W(){const e=new w(".swiper-projects",{modules:[I,C],speed:500,spaceBetween:5,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});u.addEventListener("click",t),d.addEventListener("click",n);function t(){e.slideNext(),e.activeIndex===2?u.classList.add("is-dark"):u.classList.remove("is-dark"),d.classList.remove("is-dark")}function n(){e.slidePrev(),e.activeIndex===0?d.classList.add("is-dark"):d.classList.remove("is-dark"),u.classList.remove("is-dark")}}function z(){const e=document.getElementById("header-menu-icon");document.getElementById("header-menu-text");const t=document.getElementById("header-close-icon"),n=document.getElementById("header-menu"),c=document.getElementById("order-project-button"),o=document.getElementById("order-project-button-menu");function s(r){const l=document.querySelector(r);l&&l.scrollIntoView({behavior:"smooth",block:"start"})}function i(){s("#work-together")}e.addEventListener("click",function(){n.style.display="flex"}),t.addEventListener("click",function(){n.style.display="none"}),document.querySelectorAll("#header-menu a").forEach(r=>{r.addEventListener("click",function(l){l.preventDefault(),s(r.getAttribute("href")),n.style.display="none"})}),c.addEventListener("click",function(){i(),n.style.display="none"}),o.addEventListener("click",function(){i(),n.style.display="none"}),document.addEventListener("keydown",function(r){r.key==="Escape"&&(document.getElementById("modal").style.display="none",n.style.display="none")}),document.getElementById("header-menu-text").addEventListener("click",function(){const r=document.getElementById("menu-list");r.classList.contains("is-is")||r.style.display==="none"?(r.style.display="block",r.classList.remove("is-is")):r.classList.add("is-is")}),document.querySelectorAll("#menu-list a").forEach(r=>{r.addEventListener("click",function(l){l.preventDefault();const B=this.getAttribute("href").substring(1),v=document.getElementById(B);v&&v.scrollIntoView({behavior:"smooth"}),document.getElementById("menu-list").style.display="none"})})}x();V();O();N();F();W();z();
//# sourceMappingURL=commonHelpers.js.map

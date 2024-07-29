import{A as m,a as f,S as v}from"./assets/vendor-7ce15266.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function h(){new m(".faq-list",{elementClass:"faq-item",triggerClass:"faq-list-btn",panelClass:"faq-list-panel",showMultiple:!0})}const l=document.querySelector(".modal-backDrop"),p=document.querySelector(".modal-close"),g=document.querySelector(".modal-title"),L=document.querySelector(".modal-text"),w=document.querySelector("body");function d(e){l.classList.remove("is-closed"),w.style.overflow="hidden",g.textContent=e.title?e.title:e.status,L.textContent=e.message,l.addEventListener("click",b),p.addEventListener("click",a),window.addEventListener("keyup",y)}function y(e){e.code==="Escape"&&(a(),window.removeEventListener("keyup",y))}function b(e){e.target.classList.contains("modal-backDrop")&&(l.removeEventListener("click",b),a())}function a(){l.classList.add("is-closed"),p.removeEventListener("click",a),w.style.overflow=""}const c=document.querySelector(".wt-form");f.defaults.baseURL="https://portfolio-js.b.goit.study/api";function q(){c.addEventListener("submit",S)}async function S(e){e.preventDefault();const o={email:c.email.value,comment:c.comment.value.trim()};if(o.email===""||o.comment===""){d({title:"Error",message:"Fill in all the fields"});return}try{const r=(await f.post("/requests",o)).data;c.reset(),d(r)}catch(r){d(r)}}function C(){new m(".aboutme-accordion",{elementClass:"aboutme-accordion-item",panelClass:"aboutme-accord-dropdown",triggerClass:"btn-arrow-read-more",duration:600,showMultiple:!0,openOnInit:[0]})}function E(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".aboutme-skills-circle"),o=document.querySelector(".swiper-wrapper");e.forEach((t,n)=>{const s=t.cloneNode(!0);o.appendChild(s)});const r=new v(".aboutme-skills-swiper",{speed:400,spaceBetween:0,loop:!0,setWrapperSize:!0,breakpoints:{1440:{slidesPerView:6},768:{slidesPerView:3},320:{slidesPerView:2}},on:{init:function(){document.querySelector(".swiper-slide").style.backgroundColor="#ed3b44"},slideChange:function(){const t=this.slides[this.previousIndex],n=this.slides[this.activeIndex];t.style.background="",n.style.backgroundColor="#ed3b44"}}});document.querySelector(".aboutme-skills-btn").addEventListener("click",()=>{r.slideNext()})})}const k=document.querySelector(".covers-section"),u=document.querySelectorAll(".marquee__line");function x(e){const o=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight;return o.top<=r&&o.top+o.height>=0}function O(){window.addEventListener("scroll",function(){x(k)?u.forEach(e=>N(e,"marquee_animation")):u.forEach(e=>V(e,"marquee_animation"))})}function N(e,o){e.classList.add(o)}function V(e,o){e.classList.remove(o)}document.addEventListener("DOMContentLoaded",O);h();q();C();E();
//# sourceMappingURL=commonHelpers.js.map

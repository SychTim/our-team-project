import{A as v,a as u}from"./assets/vendor-6f42c08a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function L(){new v(".faq-list",{elementClass:"faq-item",triggerClass:"faq-list-btn",panelClass:"faq-list-panel",showMultiple:!0})}const i=document.querySelector(".modal-backDrop"),m=document.querySelector(".modal-close"),g=document.querySelector(".modal-title"),q=document.querySelector(".modal-text"),f=document.querySelector("body");function a(t){i.classList.remove("is-closed"),f.style.overflow="hidden",g.textContent=t.title?t.title:t.status,q.textContent=t.message,i.addEventListener("click",y),m.addEventListener("click",l),window.addEventListener("keyup",p)}function p(t){t.code==="Escape"&&(l(),window.removeEventListener("keyup",p))}function y(t){t.target.classList.contains("modal-backDrop")&&(i.removeEventListener("click",y),l())}function l(){i.classList.add("is-closed"),m.removeEventListener("click",l),f.style.overflow=""}const n=document.querySelector(".wt-form");u.defaults.baseURL="https://portfolio-js.b.goit.study/api";function b(){n.addEventListener("submit",h)}async function h(t){t.preventDefault();const r={email:n.email.value,comment:n.comment.value.trim()};if(r.email===""||r.comment===""){a({title:"Error",message:"Fill in all the fields"});return}try{const s=(await u.post("/requests",r)).data;n.reset(),a(s)}catch(s){a(s)}}L();b();
//# sourceMappingURL=commonHelpers.js.map

import{u as t,E as s,j as r,B as i,a as c}from"./index-450372a5.js";function l(){const{openModal:n}=t();return{confirm:o=>{n(s.CONFIRM_MODAL,{onConfirm:o.onConfirm,options:o.options})}}}const u=()=>{const{confirm:n}=l(),e=()=>{n({onConfirm:()=>new Promise(o=>setTimeout(()=>{console.log("delete user"),o({})},2e3))})};return r.jsx(i,{sx:{p:2},children:r.jsx(c,{variant:"contained",onClick:e,children:"Confirm delete user"})})};export{u as Feature3_1};

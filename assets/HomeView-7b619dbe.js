import{d as m,u as w,c as x,r as S,o,a,b as e,F as p,e as f,t as d,f as g,n as C,M as y,g as $,h as u,w as b,R as M,_ as k,i as D}from"./index-35889bec.js";const L=e("h4",{class:"fs-2"},"Filter Section",-1),F={class:"d-flex justify-content-between gap-5"},B={class:"input-group flex-grow-1"},A=e("label",{class:"input-group-text",id:"filter-year"},"Year",-1),V=e("option",{selected:"",hidden:""},"Select a year",-1),j=["value"],z={class:"input-group flex-grow-1"},E=e("label",{class:"input-group-text",id:"filter-genre"},"genre",-1),H=e("option",{selected:"",hidden:""},"Select a genre",-1),I=["value"],N=m({__name:"FilterBar",setup(v){const c=w(),i=x(()=>c.state.genres),_=new Array(50).fill(new Date().getFullYear()).map((l,n)=>l-n),s=S({primary_release_year:void 0,include_adult:!1,with_genres:void 0}),r=()=>{const l=!s.include_adult;s.include_adult=l,y.getDiscoverMovies({params:{...s}})},h=(l,n)=>{s[n]=+l.target.value,y.getDiscoverMovies({params:{...s}})};return(l,n)=>(o(),a(p,null,[L,e("div",F,[e("div",B,[A,e("select",{class:"form-select","aria-describedby":"filter-year",onChange:n[0]||(n[0]=t=>h(t,"primary_release_year"))},[V,(o(!0),a(p,null,f(g(_),t=>(o(),a("option",{value:t,key:t},d(t),9,j))),128))],32)]),e("div",z,[E,e("select",{class:"form-select","aria-describedby":"filter-genre",onChange:n[1]||(n[1]=t=>h(t,"with_genres"))},[H,(o(!0),a(p,null,f(i.value,t=>(o(),a("option",{value:t.id,key:t.id},d(t.name),9,I))),128))],32)]),e("button",{class:C([s.include_adult?"btn-danger":"","btn btn-primary flex-shrink-0"]),onClick:r}," Adult content ",2)])],64))}}),R={class:"movie-card card shadow-sm"},T=["src"],Y={class:"card-body"},O={class:"card-title"},P={class:"card-text"},U={class:"overview-see-more"},q={class:"card-footer"},G={class:"text-body-secondary float-end"},J=m({__name:"MovieCard",props:{movie:{}},setup(v){const c=v,i=$(!1),_=$(new Date(c.movie.release_date).toLocaleDateString());return(s,r)=>(o(),a("div",R,[u(g(M),{to:"/movieDetail/"+s.movie.id},{default:b(()=>[e("img",{src:s.movie.imageUrl,class:"card-img-top",alt:"movie poster",loading:"lazy"},null,8,T)]),_:1},8,["to"]),e("div",Y,[u(g(M),{to:"/movieDetail/"+s.movie.id},{default:b(()=>[e("h5",O,d(s.movie.title),1)]),_:1},8,["to"]),e("div",{class:C(["overview",i.value&&"show"])},[e("p",P,d(s.movie.overview),1)],2),e("div",U,[e("button",{onClick:r[0]||(r[0]=h=>i.value=!i.value)},"Show "+d(i.value?"less":"full"),1)])]),e("div",q,[e("small",G,d(_.value),1)])]))}});const K=k(J,[["__scopeId","data-v-d72a8597"]]),Q={class:"container-fluid h-100 pt-4 movies-list"},W={class:"row row-cols-4 row-gap-4"},X=m({__name:"MoviesList",setup(v){const c=w();D(async()=>{await y.getDiscoverMovies()});const i=x(()=>c.state.movies);return(_,s)=>(o(),a("div",Q,[e("div",W,[(o(!0),a(p,null,f(i.value,r=>(o(),a("section",{key:r.id,class:"col d-flex justify-content-center"},[u(K,{movie:r},null,8,["movie"])]))),128))])]))}});const Z=k(X,[["__scopeId","data-v-24d5c562"]]),ee={class:"container card shadow-lg my-3"},se={class:"row row-gap-3 card-body"},te={class:"col col-12 filter-container card"},oe={class:"card-body"},ae={class:"col col-12 filter-container card"},ie={class:"card-body"},ne=e("div",{class:"card-title"},[e("h5",{class:"text-center fw-bolder fs-1"},"Popular Movies")],-1),re=m({__name:"HomeView",setup(v){const c=w();return D(()=>{c.commit("setTitle","HOME")}),(i,_)=>(o(),a("div",ee,[e("div",se,[e("section",te,[e("div",oe,[u(N)])]),e("section",ae,[e("div",ie,[ne,u(Z)])])])]))}});export{re as default};

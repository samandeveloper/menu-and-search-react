(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.f3ad7664.svg"},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=(a(25),a(5)),i=a(1),o=function(e){var t=e.image,a=e.name,n=e.id,r=e.info,l=e.glass;return c.a.createElement("article",{className:"cocktail"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t,alt:a})),c.a.createElement("div",{className:"cocktail-footer"},c.a.createElement("h3",null,a),c.a.createElement("h4",null,l),c.a.createElement("p",null,r),c.a.createElement(s.b,{to:"/cocktail/".concat(n),className:"btn btn-primary btn-details"},"details")))},m=function(){return c.a.createElement("div",{className:"loader"})},u=a(9),E=a.n(u),d=a(11),p=a(8),f=c.a.createContext(),b=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(p.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)("a"),o=Object(p.a)(i,2),m=o[0],u=o[1],b=Object(n.useState)([]),h=Object(p.a)(b,2),k=h[0],g=h[1],v=Object(n.useCallback)(Object(d.a)(E.a.mark((function e(){var t,a,n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,(n=a.drinks)?(c=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),g(c)):g([]),s(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),s(!1);case 16:case"end":return e.stop()}}),e,null,[[1,13]])}))));return Object(n.useEffect)((function(){v()}),[m]),c.a.createElement(f.Provider,{value:{loading:l,cocktails:k,setSearchTerm:u}},t)},h=function(){return Object(n.useContext)(f)},k=function(){var e=h(),t=e.cocktails;return e.loading?c.a.createElement(m,null):t.length<1?c.a.createElement("h2",{className:"section-title"},"no cocktails matched your search criteria"):c.a.createElement("section",{className:"section"},c.a.createElement("h2",{className:"section-title"},"cocktails"),c.a.createElement("div",{className:"cocktails-center"},t.map((function(e){return c.a.createElement(o,Object.assign({key:e.id},e))}))))},g=function(){var e=h().setSearchTerm,t=c.a.useRef("");c.a.useEffect((function(){t.current.focus()}),[]);return c.a.createElement("section",{className:"section search"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"form-control"},c.a.createElement("lable",{htmlFor:"name"},"Search your favorite cocktail"),c.a.createElement("input",{type:"text",id:"name",ref:t,onChange:function(t){return e(t.target.value)}}))))},v=function(){return c.a.createElement("main",null,c.a.createElement(g,null),c.a.createElement(k,null))},N=function(){return c.a.createElement("section",{className:"section about-section"},c.a.createElement("h1",{className:"section-title"},"about us"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?"))},j="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",x=function(){var e=Object(i.f)().id,t=c.a.useState(!1),a=Object(p.a)(t,2),n=a[0],r=a[1],l=c.a.useState(null),o=Object(p.a)(l,2),u=o[0],f=o[1];if(c.a.useEffect((function(){function t(){return(t=Object(d.a)(E.a.mark((function t(){var a,n,c,l,s,i,o,m,u,d,p,b,h,k;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(j).concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:(n=t.sent).drinks?(c=n.drinks[0],l=c.strDrink,s=c.strDrinkThumb,i=c.strAlcoholic,o=c.strCategory,m=c.strGlass,u=c.strInstructions,d=c.strIngredient1,p=c.strIngredient2,b=c.strIngredient3,h=c.strIngredient4,k=c.strIngredient5,f({name:l,image:s,info:i,category:o,glass:m,instructions:u,ingredients:[d,p,b,h,k]})):f([]),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:r(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}r(!0),function(){t.apply(this,arguments)}()}),[e]),n)return c.a.createElement(m,null);if(u){var b=u.name,h=u.image,k=u.category,g=u.info,v=u.instructions,N=u.ingredients,x=u.glass;return c.a.createElement("section",{className:"section cocktail-section"},c.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home"),c.a.createElement("h2",{className:"section-title"},b),c.a.createElement("div",{className:"drink"},c.a.createElement("img",{src:h,alt:b}),c.a.createElement("div",{className:"drink-info"},c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"name :"),b),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"category :"),k),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"info :"),g),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"glass :"),x),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"instructions :"),v),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"ingredients :"),N.map((function(e,t){return e?c.a.createElement("span",{key:t},e):null}))))))}return c.a.createElement("h2",{className:"section-title"},"no cocktail to display")},y=function(){return c.a.createElement("section",{className:"error-page section"},c.a.createElement("div",{className:"error-container"},c.a.createElement("h1",null,"oops! it's a deed end"),c.a.createElement(s.b,{to:"/",className:'"btn btn-primary'},"back home")))},O=a(19),w=a.n(O),S=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"nav-center"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{src:w.a,alt:"cocktail db logo",className:"logo"})),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/about"},"About")))))};var q=function(){return c.a.createElement(s.a,null,c.a.createElement(S,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(v,null)),c.a.createElement(i.a,{path:"/about"},c.a.createElement(N,null)),c.a.createElement(i.a,{exact:!0,path:"/cocktail/:id"},c.a.createElement(x,null)),c.a.createElement(i.a,{exact:!0,path:"*"},c.a.createElement(y,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null,c.a.createElement(q,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.60e0bf88.chunk.js.map
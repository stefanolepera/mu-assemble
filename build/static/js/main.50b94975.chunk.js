(this["webpackJsonpmu-assemble"]=this["webpackJsonpmu-assemble"]||[]).push([[0],{42:function(A,e,I){"use strict";I.r(e);var n,t,i,c,g,B,E,C,r,Q,k,s,a,o=I(0),S=I.n(o),l=I(25),O=I.n(l),u=I(19),R=I(3),f=I(4),j=f.b.div(n||(n=Object(R.a)(["\n    text-align: center;\n"]))),w=Object(f.a)(t||(t=Object(R.a)(["\n\thtml {\n\t\tbackground-color: #f6f6f6;\n\t}\n\tbody {\n\t\tfont-family: Roboto !important;\n\t\tmargin: 0 0;\n\t}\n"]))),p=I(15),J=I(20),b=I.n(J),F=I(29),K=I(6),d=I(2),y=f.b.div(i||(i=Object(R.a)(["\n    display: flex;\n"]))),h=I(1),D=function(A){var e=A.items,I=A.handleItem,n=A.itemValue,t=A.itemName,i=A.placeholder,c=A.label;return Object(h.jsxs)(y,{children:[Object(h.jsx)("div",{children:c}),Object(h.jsxs)("select",{name:i,onChange:function(A){return I(A)},children:["players"!==i&&Object(h.jsx)("option",{value:"",children:"-- ".concat(i," --")}),e.map((function(A){return Object(h.jsx)("option",{value:A[n],children:A[t]},"".concat(A[t]).concat(A[n]))}))]})]})},H=S.a.createContext(null),m=f.b.img(c||(c=Object(R.a)(["\n    text-align: center;\n    cursor: pointer;\n    width: 100px;\n    height: 104px;\n"]))),x=f.b.div(g||(g=Object(R.a)(["\n    width: 100px;\n    height: 104px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-image: url(",");\n"])),(function(A){return A.placeholder})),U=function(A){var e=A.name,I=Object(o.useContext)(H).setContext,n=Object(o.useState)(!1),t=Object(K.a)(n,2),i=t[0],c=t[1];Object(o.useEffect)((function(){c(!1)}),[]);return Object(h.jsx)(x,{placeholder:"data:image/png;base64,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",children:Object(h.jsx)(m,{style:i?{}:{display:"none"},onClick:function(){I({thumbName:e})},src:"images/thumbs/".concat(e,".png"),alt:e,onLoad:function(){return c(!0)}})})},T=f.b.img(B||(B=Object(R.a)(["\n    text-align: center;\n    width: 412px;\n    height: 560px;\n"]))),v=f.b.div(E||(E=Object(R.a)(["\n    width: 412px;\n    height: 560px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-image: url(",");\n"])),(function(A){return A.placeholder})),X=function(){var A=Object(o.useContext)(H).thumbName,e=Object(o.useState)(!1),I=Object(K.a)(e,2),n=I[0],t=I[1];return Object(o.useEffect)((function(){t(!1)}),[A]),Object(h.jsx)(v,{placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzkAAARiCAYAAACH/DmjAAAdvUlEQVR4nO3d7YtV5duA4VW+TRniYChKicaIogj+/5/7GgRRX4y0KCNLNMEyJ6eHe8MWH3++5DQzrn3u44BhO5Pa3mshrJN73dd67/PPP/9nAgAAiHjfiQQAAEpEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkA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f/pXABAicgBCDh06NN28edMp3YVx7ABocLsaAACQInIAAIAUkQMAAKSIHIAV9PTpU6cNAF7B4AGAFXP8+PHpxIkT08OHD526A3Ds2LH8ZwSoETkAMzXGGx89evSlb+7q1avTo0ePnLoDMIISgNUicgBmaATOr7/+uli1eZkRP68KIA6OVR6AebInB2CGxjNb7t69a+/NjI0Hrv7888+erwMwQyIHYKYeP348/fLLL07PTI2Hru7s7Kz7YQCYJZEDMFNjheDWrVuLFR3m5c6dO9ODBw+cFYCZEjkAMzdWDITOfIzAGfEJwHwZPACwAkbo3L9/fzp9+vS0ubnplL0D4/h///33i9Hd9uEAzJvIAVgRY3/O+NrY2FgMJDh79uz04YcfTv/8849TuA/ee++96Y8//ng2XGDskRqvAgdg/kQOwIpYXlyP8dLDDz/84NQdgHHcx4ABcQOwOkQOwIpy0Q0AL2fwAAAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQIrIAQAAUkQOAACQInIAAIAUkQMAAKSIHAAAIEXkAAAAKSIHAABIETkAAECKyAEAAFJEDgAAkCJyAACAFJEDAACkiBwAACBF5AAAACkiBwAASBE5AABAisgBAABSRA4AAJAicgAAgBSRAwAApIgcAAAgReQAAAApIgcAAEgROQAAQMc0Tf8H9taz1h/crxAAAAAASUVORK5CYII=",children:Object(h.jsx)(T,{style:n?{}:{display:"none"},src:"images/fullsize/".concat(A||"Default",".jpg"),alt:A,onLoad:function(){return t(!0)}})})},M=f.b.div(C||(C=Object(R.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),N=f.b.div(r||(r=Object(R.a)(["\n    display: flex;\n    justify-content: flex-start;\n    flex-flow: row wrap;\n    max-width: 500px;\n"]))),z=function(A){var e=A.heroesIDS,I=A.villainsID,n=A.heroesList,t=A.villainsList;return Object(h.jsxs)(M,{children:[Object(h.jsx)("h1",{children:"HEROES"}),Object(h.jsx)(N,{children:e.length>1?e.map((function(A){return Object(h.jsx)(U,{name:n[A].Name},n[A].ID)})):-1===e[0]?Object(h.jsxs)("div",{children:["Not enough heroes!",Object(h.jsx)("br",{}),"Check your Players Count"]}):Object(h.jsx)("div",{children:"Assemble your Team!"})}),Object(h.jsx)("h1",{children:"VILLAINS"}),Object(h.jsx)(N,{children:I.map((function(A){return Object(h.jsx)(U,{name:t[A].Name},t[A].ID)}))})]})},P=function(){var A=Object(o.useState)(null),e=Object(K.a)(A,2),I=e[0],n=e[1],t=Object(o.useContext)(H).config;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(D,{items:t.Scenarios,handleItem:function(A){var e=t.Scenarios.find((function(e){return e.ID===parseInt(A.target.value)}));n(e)},itemValue:"ID",itemName:"ComicIssue",placeholder:"issue",label:"Scenarios"}),I&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"Issue: ==> ".concat(I.ComicIssue," ").concat(I.Date)}),Object(h.jsx)("div",{children:"Summary: ==> ".concat(I.Summary)}),Object(h.jsx)("div",{children:"Heroes: ==> ".concat(I.Heroes)}),Object(h.jsx)("div",{children:"Villain: ==> ".concat(I.Villain)})]})]})},L=function(A,e){return A.filter((function(A){return A.Name===e}))},Y=function(A,e){return A.filter((function(A){return-1!==A.Foes.split(",").map((function(A){return A.trim()})).indexOf(e)}))},V=function(A,e){return A.filter((function(A){return-1!==A.Type.split(",").map((function(A){return A.trim()})).indexOf(e)}))},W=function(A,e){return A.filter((function(A){return-1!==A.Affiliation.split(",").map((function(A){return A.trim()})).indexOf(e)}))},G=f.b.div(Q||(Q=Object(R.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),Z=f.b.div(k||(k=Object(R.a)(["\n    display: flex;\n    justify-content: flex-start;\n    flex-flow: row wrap;\n    max-width: 900px;\n"]))),q=function(){var A=Object(o.useState)([]),e=Object(K.a)(A,2),I=e[0],n=e[1],t=Object(o.useState)([]),i=Object(K.a)(t,2),c=i[0],g=i[1],B=Object(o.useContext)(H),E=B.config,C=B.filters,r=B.setContext;return Object(o.useEffect)((function(){if(C&&C.length>0){var A=function(A,e){if(e.length>0)for(var I=0;I<e.length;I++){if(e[I].hasOwnProperty("affiliation")&&""!==e[I].affiliation)return W(A,e[I].affiliation);if(e[I].hasOwnProperty("type")&&""!==e[I].type)return V(A,e[I].type);if(e[I].hasOwnProperty("foes")&&""!==e[I].foes)return Y(A,e[I].foes)}return A}(E.Heroes,C),e=function(A,e){if(e.length>0)for(var I=0;I<e.length;I++)if(e[I].hasOwnProperty("foes")&&""!==e[I].foes)return L(A,e[I].foes);return A}(E.Villains,C);n(A),g(e),r({filtered:[{heroes:A},{villains:e}]})}else n(E.Heroes),g(E.Villains)}),[C,E.Heroes,E.Villains]),null===E?null:Object(h.jsxs)(G,{children:[Object(h.jsx)("h1",{children:"HEROES"}),Object(h.jsx)(Z,{children:I.map((function(A){return Object(h.jsx)(U,{name:A.Name},A.ID)}))}),Object(h.jsx)("h1",{children:"VILLAINS"}),Object(h.jsx)(Z,{children:c.map((function(A){return Object(h.jsx)(U,{name:A.Name},A.ID)}))})]})},$=I(23),_=function(A){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,I=new Set;I.size!==e;)I.add(Math.floor(Math.random()*A));return I},AA=f.b.div(s||(s=Object(R.a)(["\n    text-align: center;\n"]))),eA=function(){var A=Object(o.useState)(2),e=Object(K.a)(A,2),I=e[0],n=e[1],t=Object(o.useState)([]),i=Object(K.a)(t,2),c=i[0],g=i[1],B=Object(o.useState)([]),E=Object(K.a)(B,2),C=E[0],r=E[1],Q=Object(o.useContext)(H),k=Q.config,s=Q.filters,a=Q.filtered,S=Q.setContext;Object(o.useEffect)((function(){g([]),r([])}),[s]);var l=function(A){Array.from(document.querySelectorAll("select")).forEach((function(e){if(e.name!==A&&"players"!==e.name)return e.value=""}))};return Object(h.jsxs)(AA,{children:[Object(h.jsx)("h1",{children:"SETTINGS"}),Object(h.jsx)(D,{items:[{count:2},{count:3},{count:4}],handleItem:function(A){var e=parseInt(A.target.value);n(e)},itemValue:"count",itemName:"count",placeholder:"players",label:"Players Count"}),Object(h.jsx)(D,{items:k.Affiliation,handleItem:function(A){var e=A.target.value;S({filters:[{affiliation:e}]}),l("affiliation")},itemValue:"Name",itemName:"Name",placeholder:"affiliation",label:"Affiliation"}),Object(h.jsx)(D,{items:k.Type,handleItem:function(A){var e=A.target.value;S({filters:[{type:e}]}),l("type")},itemValue:"Name",itemName:"Name",placeholder:"type",label:"Type"}),Object(h.jsx)(D,{items:k.Villains,handleItem:function(A){var e=A.target.value;S({filters:[{foes:e}]}),l("foes")},itemValue:"Name",itemName:"Name",placeholder:"foes",label:"Foes"}),Object(h.jsx)(D,{items:k.Scenarios,handleItem:function(A){var e=k.Scenarios.find((function(e){return e.ID===parseInt(A.target.value)}));console.log("result",e),l("issue")},itemValue:"ID",itemName:"ComicIssue",placeholder:"issue",label:"Scenarios"}),Object(h.jsx)("button",{onClick:function(){var A=a?a[0].heroes.length:k.Heroes.length,e=a?a[1].villains.length:k.Villains.length;g(A>=I?Object($.a)(_(A,I)):[-1]),r(Object($.a)(_(e,1)))},children:"Assemble Team"}),Object(h.jsx)(z,{heroesIDS:c,villainsID:C,heroesList:a?a[0].heroes:k.Heroes,villainsList:a?a[1].villains:k.Villains}),Object(h.jsx)(X,{})]})},IA=f.b.div(a||(a=Object(R.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n"]))),nA=function(){return Object(h.jsxs)(IA,{children:[Object(h.jsx)(eA,{}),Object(h.jsx)(q,{})]})},tA=function(){var A=Object(o.useState)({config:null,filters:[],filtered:null,thumbName:"Default"}),e=Object(K.a)(A,2),I=e[0],n=e[1];return Object(o.useEffect)((function(){(function(){var A=Object(F.a)(b.a.mark((function A(){var e,I;return b.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,fetch("./config.json");case 3:return e=A.sent,A.next=6,e.json();case 6:I=A.sent,n({config:I}),A.next=13;break;case 10:A.prev=10,A.t0=A.catch(0),console.error(A.t0);case 13:case"end":return A.stop()}}),A,null,[[0,10]])})));return function(){return A.apply(this,arguments)}})()()}),[]),null===I.config?Object(h.jsx)("div",{children:"Loading..."}):Object(h.jsx)(H.Provider,{value:Object(p.a)(Object(p.a)({},I),{},{setContext:function(A){return n(Object(p.a)(Object(p.a)({},I),A))}}),children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",children:Object(h.jsx)(nA,{})}),Object(h.jsx)(d.a,{exact:!0,path:"/scenarios",children:Object(h.jsx)(P,{})})]})})},iA=function(){return Object(h.jsxs)(j,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(u.a,{children:Object(h.jsx)(tA,{})})]})},cA=function(A){A&&A instanceof Function&&I.e(3).then(I.bind(null,43)).then((function(e){var I=e.getCLS,n=e.getFID,t=e.getFCP,i=e.getLCP,c=e.getTTFB;I(A),n(A),t(A),i(A),c(A)}))};O.a.render(Object(h.jsx)(S.a.StrictMode,{children:Object(h.jsx)(iA,{})}),document.getElementById("root")),cA()}},[[42,1,2]]]);
//# sourceMappingURL=main.50b94975.chunk.js.map
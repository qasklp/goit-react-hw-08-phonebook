(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[917],{917:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var a=t(791),r=t(434),o="Contact_text__V-OW6",s="Contact_contact__n9LGk",c="Contact_button__TSg4i",i=t(329),u=function(e){var n=e.id,t=e.name,a=e.number,r=e.removeContact;return(0,i.jsxs)("li",{className:s,children:[(0,i.jsxs)("p",{className:o,children:[t,": ",a]}),(0,i.jsx)("button",{className:c,type:"button",onClick:function(){return r(n)},children:"Delete"})]})},l=t(7),m=t.n(l),p=function(e){var n=e.contacts,t=e.removeContact;return(0,i.jsx)("ul",{children:n.map((function(e){return(0,i.jsx)(u,{id:e.id,name:e.name,number:e.number,removeContact:t},e.id)}))})};u.propTypes={contacts:m().array,removeContact:m().func.isRequired};var d=t(439),f="Form_form__42kpy",h="Form_button__6n4PI",b="Form_label__vM2Wr",_=function(e){var n=e.onSubmit,t=(0,a.useState)(""),r=(0,d.Z)(t,2),o=r[0],s=r[1],c=(0,a.useState)(""),u=(0,d.Z)(c,2),l=u[0],m=u[1],p=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":s(a);break;case"number":m(a);break;default:return}},_=function(){s(""),m("")};return(0,i.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),n({name:o,number:l}),_()},children:[(0,i.jsxs)("label",{className:b,children:["Name",(0,i.jsx)("input",{type:"text",name:"name",value:o,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,i.jsxs)("label",{className:b,children:["Number",(0,i.jsx)("input",{type:"tel",name:"number",value:l,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,i.jsx)("button",{type:"submit",className:h,children:"Add contact"})]})},v="Filter_filter__k0KAx",x="Filter_label__yiDBy",y=function(e){var n=e.handleInput,t=e.value;return(0,i.jsxs)("div",{className:v,children:[(0,i.jsx)("label",{className:x,children:"Find contacts by name"}),(0,i.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},j=t(240),C=function(e){return e.filter},k=function(e){var n=e.contacts,t=e.filter,a=t.toLowerCase();return t?n.items.filter((function(e){return e.name.toLowerCase().includes(a)})):n.items},g=t(646),N="Phonebook_phonebook__A8MMG",T=function(){var e=(0,r.v9)(C),n=(0,r.v9)(k),t=(0,r.I0)();(0,a.useEffect)((function(){t((0,g.yF)())}),[t]);return(0,i.jsxs)("div",{className:N,children:[(0,i.jsx)("h1",{children:"Phonebook"}),(0,i.jsx)(_,{onSubmit:function(e){var n=e.name,a=e.number;t((0,g.uK)({name:n,number:a}))}}),(0,i.jsx)("h2",{children:"Contacts:"}),(0,i.jsx)(y,{handleInput:function(e){var n=e.target;t((0,j.T)(n.value))},value:e}),n&&(n.length?(0,i.jsx)(p,{contacts:n,removeContact:function(e){t((0,g.GK)(e))}}):null)]})},w=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(T,{})})}},888:function(e,n,t){"use strict";var a=t(47);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,o,s){if(s!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=917.f4509628.chunk.js.map
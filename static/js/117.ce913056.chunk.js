"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[117],{3117:function(e,s,n){n.r(s),n.d(s,{default:function(){return M}});var a=n(8687),i="dialogs_dialogs__d-Bv6",t="dialogs_dialogsItems__3ZJ7u",r="dialogs_messages__0R49S",o=n(3504),u="dialog-item_dialogItem__SEJwd",d="dialog-item_link__t8Uid",c="dialog-item_active__t3N4k",l=n(184),g=function(e){var s="/dialogs/"+e.id;return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("img",{src:e.img}),(0,l.jsx)(o.OL,{className:function(e){return e.isActive?c:d},to:s,children:e.name})]})},m="message-item_message__pCciZ",_=function(e){return(0,l.jsx)("div",{className:m,children:e.message})},f=n(767),h={newMessage:"new-message_newMessage__+8yAp"},x=(n(2791),n(5705)),j=function(e){return(0,l.jsx)("div",{className:h.newMessage,children:(0,l.jsx)(x.J9,{initialValues:{newMessageBody:""},onSubmit:function(s,n){var a,i=n.resetForm;a=s.newMessageBody,e.sendMessage(a),console.log(s.newMessageBody),i({values:""})},children:function(){return(0,l.jsxs)(x.l0,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(x.gN,{name:"newMessageBody",type:"text",as:"textarea",placeholder:"Enter new message"})}),(0,l.jsx)("button",{className:h.button,type:"submit",children:"Send"})]})}})})},p=(0,a.$j)((function(e){return{newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(s){e((0,f.X)(s))}}}))(j),v=function(e){var s=e.dialogsPage.dialogsData.map((function(e){return(0,l.jsx)(g,{name:e.name,id:e.id,img:e.img})})),n=e.dialogsPage.messagesData.map((function(e){return(0,l.jsx)(_,{message:e.message})}));return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("div",{className:t,children:s}),(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("div",{children:n}),(0,l.jsx)(p,{})]})]})},w=n(6323),y=n(7781),M=((0,w.P)(v),(0,y.qC)((0,a.$j)((function(e){return{dialogsPage:e.dialogsPage}})),w.P)(v))},6323:function(e,s,n){n.d(s,{P:function(){return m}});var a=n(8683),i=n(5671),t=n(3144),r=n(136),o=n(7277),u=n(2791),d=n(6871),c=n(8687),l=n(184),g=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){(0,r.Z)(u,s);var n=(0,o.Z)(u);function u(){return(0,i.Z)(this,u),n.apply(this,arguments)}return(0,t.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,a.Z)({},this.props)):(0,l.jsx)(d.Fg,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(g)(s)}}}]);
//# sourceMappingURL=117.ce913056.chunk.js.map
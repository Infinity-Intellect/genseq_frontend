(this["webpackJsonpgenseq-frontend"]=this["webpackJsonpgenseq-frontend"]||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(12),c=a.n(o),r=(a(23),a(24),a(16)),i=a(13),m=a(14),u=a(2),s=a(17),h=a(15),d=(a(25),a(26)),p=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={file:"",fileToSend:"",columnData:{0:"A",1:"C",2:"T",3:"G"},resultSequence:""},n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.previewImage=n.previewImage.bind(Object(u.a)(n)),n.handleDropDownChange=n.handleDropDownChange.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){d.get("https://genseq-backend.herokuapp.com/").then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(){var e=this,t=document.createElement("h2");t.innerHTML="The Sequence is:";var a=document.getElementById("result");a.insertBefore(t,a.childNodes[0]);var n=new FormData;n.append("username","sidd"),n.append("image",this.state.fileToSend,this.state.fileToSend.name),n.append("columnOrder",JSON.stringify(this.state.columnData)),console.log(n.get("image")),this.setState({resultSequence:"Loading ..."}),d.post("http://genseq-backend.herokuapp.com/getSequence",n,{headers:{"content-type":"multipart/form-data"}}).then((function(t){console.log(t.data),e.setState({resultSequence:t.data.sequence})})).catch((function(e){console.log(e)}))}},{key:"handleDropDownChange",value:function(e){var t=e.target.id[e.target.id.length-1]-1,a=e.target.value,n=Object(r.a)({},this.state.columnData);n[t]=a,this.setState({columnData:n}),console.log(this.state.columnData)}},{key:"previewImage",value:function(e){this.setState({file:URL.createObjectURL(e.target.files[0])}),this.setState({fileToSend:e.target.files[0]})}},{key:"render",value:function(){return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"columns"},l.a.createElement("h2",null,"Please enter the base column as in the image(left to right):"),l.a.createElement("h4",{className:"warning"},"*Ignore if order is correct*"),l.a.createElement("div",null,"Column 1:",l.a.createElement("select",{id:"column1",name:"column1",onChange:this.handleDropDownChange},l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"T"},"T"),l.a.createElement("option",{value:"G"},"G"))),l.a.createElement("div",null,"Column 2:",l.a.createElement("select",{id:"column2",name:"column2",onChange:this.handleDropDownChange},l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"T"},"T"),l.a.createElement("option",{value:"G"},"G"))),l.a.createElement("div",null,"Column 3:",l.a.createElement("select",{id:"column3",name:"column3",onChange:this.handleDropDownChange},l.a.createElement("option",{value:"T"},"T"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"G"},"G"))),l.a.createElement("div",null,"Column 4:",l.a.createElement("select",{id:"column4",name:"column4",onChange:this.handleDropDownChange},l.a.createElement("option",{value:"G"},"G"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"T"},"T"))),l.a.createElement("p",{className:"warning"},"*Please Verify that the above are correct*"),l.a.createElement("h3",null,"Please upload the result of the experiment:"),l.a.createElement("div",{id:"uploadImage",style:{fontSize:"20px"}},l.a.createElement("div",null,l.a.createElement("img",{src:this.state.file,className:"previewImage",alt:""})),"Upload Image:",l.a.createElement("input",{type:"file",id:"img",name:"img",accept:"image/*",onChange:this.previewImage})),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.onSubmit},"Submit"))),l.a.createElement("div",{id:"result",className:"result"},l.a.createElement("p",{id:"result_para"},this.state.resultSequence)))}}]),a}(n.Component);var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},"GenSeq"),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5e7e5d1a.chunk.js.map
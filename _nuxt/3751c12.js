(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1087:function(t,n,e){t.exports=e.p+"img/EOS-logo.244ceb6.svg"},1103:function(t,n,e){t.exports=e.p+"img/BSC-logo.187534e.svg"},1316:function(t,n,e){"use strict";e.r(n);var o=[function(){var t=this,n=t._self._c;return n("a",[n("span",{staticClass:"icon is-large"},[n("img",{attrs:{src:e(1087),alt:"EOS"}})]),t._v(" "),n("span",[t._v("EOS")])])},function(){var t=this,n=t._self._c;return n("a",[n("span",[t._v("BSC")]),t._v(" "),n("span",{staticClass:"icon is-large"},[n("img",{attrs:{src:e(1103),alt:"BSC"}})])])}],c=e(2),l=(e(27),e(564),e(69),{middleware:["auth"],data:function(){return{loading:!1,account:"eos"===this.$auth.user.blockchain?this.$auth.user.accountName:this.$auth.user.address,submitted:!1,destinationSubmitted:null,message:null,err:!1,tokenAmount:null,memo:null,transactionUrl:null,destinationBlockchain:this.$auth.user.blockchain}},computed:{amount:function(){return null!==this.$blockchain.vefxAvailable?this.$blockchain.vefxAvailable.toFixed(2):-1}},methods:{withdraw:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var e,o,c,l,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,t.err=!1,t.message=null,t.destinationSubmitted=null,e="eos"===t.destinationBlockchain?t.account:"xbsc.ptokens",o=parseFloat(t.tokenAmount).toFixed(4),c="eos"===t.destinationBlockchain?t.memo:t.account,t.destinationSubmitted="eos"===t.destinationBlockchain?"eos":"bsc",n.prev=8,n.next=11,t.$blockchain.withdraw(e,o,c);case 11:if(!(l=n.sent)){n.next=18;break}return n.next=15,t.$blockchain.waitForTransaction(l);case 15:r=n.sent,t.$blockchain.updateUserInfo(),r&&(t.submitted=!0,t.message="Withdrawal successful. Check your transaction here: ",t.transactionUrl="".concat(t.$blockchain.sdk.config.eosExplorerUrl,"/transaction/").concat(l.transaction_id));case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(8),t.$blockchain.handleError(n.t0);case 23:t.loading=!1;case 24:case"end":return n.stop()}}),n,null,[[8,20]])})))()},clearFields:function(){this.tokenAmount=null,this.account=null},toggleDestination:function(t){this.destinationBlockchain=t,this.account="bsc"===t?"bsc"===this.$auth.user.blockchain?this.$auth.user.address:"":"eos"===this.$auth.user.blockchain?this.$auth.user.accountName:""},validateWithdrawForm:function(t){t.preventDefault(),this.err=!1,this.message=null,this.destinationSubmitted=null,this.account?"eos"===this.destinationBlockchain?this.$blockchain.isEosAccount(this.account)?this.withdraw():(this.message="Invalid EOS Account",this.err=!0):this.$blockchain.isBscAddress(this.account)?this.withdraw():(this.message="Invalid BSC Address",this.err=!0):(this.message="Please fill in a valid EOS account or BSC address",this.err=!0)}}}),r=e(22),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"section"},[n("div",{staticClass:"container is-max-widescreen"},[n("h1",{staticClass:"title mt-5"},[t._v("\n      Withdraw tokens\n    ")]),t._v(" "),n("div",{staticClass:"tabs is-centered is-large"},[n("ul",[n("li",{class:["eos"===t.destinationBlockchain?"is-active":""],on:{click:function(n){return n.preventDefault(),t.toggleDestination("eos")}}},[t._m(0)]),t._v(" "),n("li",[t._v("|")]),t._v(" "),n("li",{class:["bsc"===t.destinationBlockchain?"is-active":""],on:{click:function(n){return n.preventDefault(),t.toggleDestination("bsc")}}},[t._m(1)])])]),t._v(" "),t.err?n("div",{staticClass:"notification is-light is-danger"},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e(),t._v(" "),t.submitted&&"bsc"===t.destinationSubmitted&&"bsc"===t.destinationBlockchain?n("div",{staticClass:"notification is-light",class:{"is-danger":!0===t.err,"is-success":!1===t.err}},[t._v("\n      "+t._s(t.message)+"\n      "),n("br"),t._v(" "),n("a",{attrs:{target:"_blank",href:t.transactionUrl}},[t._v(t._s(t.transactionUrl))]),t._v(" "),n("br"),t._v("\n      Withdrawing to a BSC address can take a while, thank you for your patience.\n    ")]):t._e(),t._v(" "),t.submitted&&"eos"===t.destinationSubmitted&&"eos"===t.destinationBlockchain?n("div",{staticClass:"notification is-light",class:{"is-danger":!0===t.err,"is-success":!1===t.err}},[t._v("\n      "+t._s(t.message)+"\n      "),n("br"),t._v(" "),n("a",{attrs:{target:"_blank",href:t.transactionUrl}},[t._v(t._s(t.transactionUrl))]),t._v(" "),n("br")]):t._e(),t._v(" "),n("form",{staticClass:"box has-limited-width is-horizontal-centered",attrs:{"accept-charset":"UTF-8"},on:{submit:function(n){return n.preventDefault(),t.validateWithdrawForm.apply(null,arguments)}}},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Destination "+t._s("eos"===t.destinationBlockchain?"EOS":"BSC")+" Account")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"input",attrs:{type:"text",required:""},domProps:{value:t.account},on:{input:function(n){n.target.composing||(t.account=n.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Amount to withdraw")]),t._v(" "),n("div",{staticClass:"field has-addons"},[n("div",{staticClass:"control is-expanded"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tokenAmount,expression:"tokenAmount"}],staticClass:"input",staticStyle:{height:"100%"},attrs:{required:"",type:"number",min:"1",max:t.amount,disabled:-1==t.amount,placeholder:"1.0000",step:"0.0001"},domProps:{value:t.tokenAmount},on:{input:function(n){n.target.composing||(t.tokenAmount=n.target.value)}}})]),t._v(" "),n("p",{staticClass:"control"},[n("span",{staticClass:"button is-primary",attrs:{disabled:-1==t.amount},on:{click:function(n){n.preventDefault(),t.tokenAmount=t.amount}}},[t._v(t._s(t.amount)+" EFX")])])])]),t._v(" "),"eos"===t.destinationBlockchain?n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:""}},[t._v("Memo (optional)")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.memo},on:{input:function(n){n.target.composing||(t.memo=n.target.value)}}})])]):t._e(),t._v(" "),n("div",{staticClass:"field is-grouped is-grouped-right"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link is-light",on:{click:function(n){return n.preventDefault(),t.clearFields()}}},[t._v("\n            Clear fields\n          ")])]),t._v(" "),n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link",class:{"is-loading":t.loading},attrs:{disabled:!t.tokenAmount||!t.account,type:"submit"}},[t._v("\n            Withdraw\n          ")])])])])])])}),o,!1,null,"6b95ea92",null);n.default=component.exports}}]);
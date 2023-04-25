(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1117:function(t,n,e){var content=e(1165);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("e29f52e2",content,!0,{sourceMap:!1})},1164:function(t,n,e){"use strict";e(1117)},1165:function(t,n,e){var l=e(59)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),l.push([t.i,"div.box[data-v-550e2b82]{background:#f7fbff}",""]),t.exports=l},1305:function(t,n,e){"use strict";e.r(n);e(14),e(126),e(564);var l=e(2),c=(e(27),e(69),{name:"Balances",components:{SuccessModal:e(341).a},middleware:["auth"],data:function(){return{pending:0,finalAmount:0,loading:!1,successMessage:null,successTitle:null,errors:[]}},methods:{payout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.prev=1,n.next=4,t.$blockchain.payout();case 4:e=n.sent,t.$store.dispatch("transaction/addTransaction",e),t.transactionUrl="".concat(t.$blockchain.sdk.config.eosExplorerUrl,"/transaction/").concat(e.transaction_id),t.successTitle="Payout Completed",t.successMessage="All your available pending payouts have been completed and are added to your Effect account",n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),t.loading=!1,t.errors.push(n.t0);case 15:t.loading=!1;case 16:case"end":return n.stop()}}),n,null,[[1,11]])})))()}}}),o=(e(1164),e(22)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"title is-spaced"},[t._v("\n        Your EFX Balance\n      ")]),t._v(" "),t.errors.length?n("div",t._l(t.errors,(function(e){return n("div",{key:t.toString(e),staticClass:"notification is-danger is-light"},[t._v("\n          "+t._s(e)+"\n        ")])})),0):t._e(),t._v(" "),n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is-half"},[n("div",{staticClass:"box"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n              Total Balance\n            ")]),t._v(" "),n("span",{staticClass:"is-flex is-align-items-center",attrs:{to:"/balance"}},[n("span",[n("b",[t._v(t._s(null!==t.$blockchain.efxTotal?t.$blockchain.efxTotal.toFixed(2):"..."))]),t.$blockchain.efxLoading?n("span",[t._v("..")]):t._e(),t._v(" EFX")]),t._v(" "),null!==t.$blockchain.efxTotal&&t.$blockchain.efxPrice?n("span",{staticClass:"is-size-7 pl-2"},[t._v("| $"),n("b",[t._v(t._s((t.$blockchain.efxTotal*t.$blockchain.efxPrice).toFixed(2)))])]):t._e()])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"box"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n              Pending Tasks\n            ")]),t._v(" "),null!==t.$blockchain.efxPending?n("span",[t._v(t._s(t.$blockchain.efxPending.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"box"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n              vAccount Contract Balance\n            ")]),t._v(" "),null!==t.$blockchain.vefxAvailable?n("span",[t._v(t._s(t.$blockchain.vefxAvailable.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"box"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n              Wallet\n            ")]),t._v(" "),null!==t.$blockchain.efxAvailable?n("span",[t._v(t._s(t.$blockchain.efxAvailable.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])])])]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[n("nuxt-link",{staticClass:"button is-accent is-pulled-left",attrs:{to:"/deposit"}},[t._v("\n            Deposit\n          ")])],1),t._v(" "),n("div",{staticClass:"column is-4 is-flex is-justify-content-center"},[null!==t.$blockchain.efxAvailable&&0!=t.$blockchain.efxPayout?n("button",{staticClass:"button is-medium is-primary is-pulsing",class:{"is-loading":!0===t.loading},on:{click:function(n){return n.preventDefault(),t.payout()}}},[t.loading?t._e():n("p",[t._v("\n              Claim "),n("span",[t._v(t._s(t.$blockchain.efxPayout.toFixed(2))+" EFX!")])])]):0==t.$blockchain.efxPayout?n("button",{staticClass:"button is-medium is-primary",attrs:{disabled:"disabled"}},[n("p",[t._v("Nothing to claim in..")])]):n("button",{staticClass:"button is-medium is-primary",attrs:{disabled:"disabled"}},[n("p",[t._v("... EFX")])])]),t._v(" "),n("div",{staticClass:"column is-4"},[n("nuxt-link",{staticClass:"button is-secondary is-pulled-right",attrs:{to:"/withdraw"}},[t._v("\n            Withdraw\n          ")])],1)])]),t._v(" "),t.successMessage?n("success-modal",{attrs:{message:t.successMessage,title:t.successTitle}}):t._e()],1)])}),[],!1,null,"550e2b82",null);n.default=component.exports}}]);
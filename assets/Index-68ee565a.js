import{e as de,i as Me,m as Te,u as Ae,c as C,a as xe,s as De,b as me,o as V,d as R,f as r,g as h,_ as ve,n as he,h as Le,j as ge,r as U,k as H,w as Y,F as ye,l as Ie,t as b,p as $e,q as oe,v as ke,x as we,y as Oe,z as Be,A as Ne,B as We,C as pe,D as Ue,E as fe,G as _e}from"./index-2d8b2bdf.js";let ce;const Ye={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let Ve=de({},Ye);function Fe(){({instance:ce}=Te({setup(){const{state:i,toggle:v}=Ae();return()=>C(De,xe(i,{"onUpdate:show":v}),null)}}))}function He(s){return Me?new Promise((i,v)=>{ce||Fe(),ce.open(de({},Ve,s,{callback:l=>{(l==="confirm"?i:v)(l)}}))}):Promise.resolve()}const Re=s=>He(de({showCancelButton:!0},s)),ze="/assets/images/bg.png";function ue(s,i=4){return s?s.replace(new RegExp(`(.{${i}})(.+)(.{${i}})`),"$1...$3"):""}function Pe(s){return`https://ave.s3.ap-east-1.amazonaws.com/chain/${s.toLowerCase()}.png`}function je(s,i){return`https://ave.s3.ap-east-1.amazonaws.com/token_icon/${s}/${i}.png`}let O=new Array(4);function Ee(s){for(var i=0;i<O.length;i++)O[i]=0;for(var i=0;i<s.length;i++)O[i%4]=(O[i%4]<<5)-O[i%4]+s.charCodeAt(i)}function q(){var s=O[0]^O[0]<<11;return O[0]=O[1],O[1]=O[2],O[2]=O[3],O[3]=O[3]^O[3]>>19^s^s>>8,(O[3]>>>0)/(1<<31>>>0)}function le(){var s=Math.floor(q()*360),i=q()*60+40+"%",v=(q()+q()+q()+q())*25+"%",l="hsl("+s+","+i+","+v+")";return l}function Ge(s){for(var i=s,v=s,l=Math.ceil(i/2),S=i-l,g=[],$=0;$<v;$++){for(var _=[],k=0;k<l;k++)_[k]=Math.floor(q()*2.3);var M=_.slice(0,S);M.reverse(),_=_.concat(M);for(var L=0;L<_.length;L++)g.push(_[L])}return g}function qe(s,i,v,l,S){var g=document.createElement("canvas"),$=Math.sqrt(s.length);g.width=g.height=$*v;var _=g.getContext("2d");_.fillStyle=l,_.fillRect(0,0,g.width,g.height),_.fillStyle=i;for(var k=0;k<s.length;k++){var M=Math.floor(k/$),L=k%$;_.fillStyle=s[k]==1?i:S,s[k]&&_.fillRect(L*v,M*v,v,v)}return g}function Je(s){s=s||{};var i=s.size||8,v=s.scale||4,l=s.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16);Ee(l);var S=s.color||le(),g=s.bgcolor||le(),$=s.spotcolor||le(),_=Ge(i),k=qe(_,S,v,g,$);return k}function Ze(s,i){return Je({seed:s.toLowerCase(),size:i,scale:16}).toDataURL()}const Qe={class:"icon","aria-hidden":"true"},Ke=["xlink:href","fill"],ie={__name:"SvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"}},setup(s){const i=s,v=me(()=>`#${i.prefix}-${i.name}`);return(l,S)=>(V(),R("svg",Qe,[r("use",{"xlink:href":h(v),fill:s.color},null,8,Ke)]))}};const Xe={class:"approve-type"},et={__name:"ApproveTypeTab",props:{type:{type:Number,default:0}},emits:["update:type","selectType"],setup(s,{emit:i}){function v(l){i("update:type",l),i("selectType")}return(l,S)=>(V(),R("div",Xe,[r("div",{class:he(["token",s.type?"":"active"]),onClick:S[0]||(S[0]=g=>v(0))}," Token ",2),r("div",{class:he(["nft",s.type?"active":""]),onClick:S[1]||(S[1]=g=>v(1))}," NFT ",2)]))}},Ce=ve(et,[["__scopeId","data-v-afe00f74"]]);var be={exports:{}};(function(s,i){(function(v,l){s.exports=l()})(Le,function(){var v=1e3,l=6e4,S=36e5,g="millisecond",$="second",_="minute",k="hour",M="day",L="week",w="month",y="quarter",I="year",B="date",z="Invalid Date",J=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var e=["th","st","nd","rd"],t=o%100;return"["+o+(e[(t-20)%10]||e[t]||e[0])+"]"}},Z=function(o,e,t){var c=String(o);return!c||c.length>=e?o:""+Array(e+1-c.length).join(t)+o},ee={s:Z,z:function(o){var e=-o.utcOffset(),t=Math.abs(e),c=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+Z(c,2,"0")+":"+Z(n,2,"0")},m:function o(e,t){if(e.date()<t.date())return-o(t,e);var c=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(c,w),u=t-n<0,a=e.clone().add(c+(u?-1:1),w);return+(-(c+(t-n)/(u?n-a:a-n))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:w,y:I,w:L,d:M,D:B,h:k,m:_,s:$,ms:g,Q:y}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},F="en",P={};P[F]=A;var te=function(o){return o instanceof f},Q=function o(e,t,c){var n;if(!e)return F;if(typeof e=="string"){var u=e.toLowerCase();P[u]&&(n=u),t&&(P[u]=t,n=u);var a=e.split("-");if(!n&&a.length>1)return o(a[0])}else{var m=e.name;P[m]=e,n=m}return!c&&n&&(F=n),n||!c&&F},x=function(o,e){if(te(o))return o.clone();var t=typeof e=="object"?e:{};return t.date=o,t.args=arguments,new f(t)},p=ee;p.l=Q,p.i=te,p.w=function(o,e){return x(o,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var f=function(){function o(t){this.$L=Q(t.locale,null,!0),this.parse(t)}var e=o.prototype;return e.parse=function(t){this.$d=function(c){var n=c.date,u=c.utc;if(n===null)return new Date(NaN);if(p.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var a=n.match(J);if(a){var m=a[2]-1||0,D=(a[7]||"0").substring(0,3);return u?new Date(Date.UTC(a[1],m,a[3]||1,a[4]||0,a[5]||0,a[6]||0,D)):new Date(a[1],m,a[3]||1,a[4]||0,a[5]||0,a[6]||0,D)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return p},e.isValid=function(){return this.$d.toString()!==z},e.isSame=function(t,c){var n=x(t);return this.startOf(c)<=n&&n<=this.endOf(c)},e.isAfter=function(t,c){return x(t)<this.startOf(c)},e.isBefore=function(t,c){return this.endOf(c)<x(t)},e.$g=function(t,c,n){return p.u(t)?this[c]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,c){var n=this,u=!!p.u(c)||c,a=p.p(t),m=function(K,W){var G=p.w(n.$u?Date.UTC(n.$y,W,K):new Date(n.$y,W,K),n);return u?G:G.endOf(M)},D=function(K,W){return p.w(n.toDate()[K].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(W)),n)},T=this.$W,N=this.$M,E=this.$D,j="set"+(this.$u?"UTC":"");switch(a){case I:return u?m(1,0):m(31,11);case w:return u?m(1,N):m(0,N+1);case L:var ne=this.$locale().weekStart||0,se=(T<ne?T+7:T)-ne;return m(u?E-se:E+(6-se),N);case M:case B:return D(j+"Hours",0);case k:return D(j+"Minutes",1);case _:return D(j+"Seconds",2);case $:return D(j+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,c){var n,u=p.p(t),a="set"+(this.$u?"UTC":""),m=(n={},n[M]=a+"Date",n[B]=a+"Date",n[w]=a+"Month",n[I]=a+"FullYear",n[k]=a+"Hours",n[_]=a+"Minutes",n[$]=a+"Seconds",n[g]=a+"Milliseconds",n)[u],D=u===M?this.$D+(c-this.$W):c;if(u===w||u===I){var T=this.clone().set(B,1);T.$d[m](D),T.init(),this.$d=T.set(B,Math.min(this.$D,T.daysInMonth())).$d}else m&&this.$d[m](D);return this.init(),this},e.set=function(t,c){return this.clone().$set(t,c)},e.get=function(t){return this[p.p(t)]()},e.add=function(t,c){var n,u=this;t=Number(t);var a=p.p(c),m=function(N){var E=x(u);return p.w(E.date(E.date()+Math.round(N*t)),u)};if(a===w)return this.set(w,this.$M+t);if(a===I)return this.set(I,this.$y+t);if(a===M)return m(1);if(a===L)return m(7);var D=(n={},n[_]=l,n[k]=S,n[$]=v,n)[a]||1,T=this.$d.getTime()+t*D;return p.w(T,this)},e.subtract=function(t,c){return this.add(-1*t,c)},e.format=function(t){var c=this,n=this.$locale();if(!this.isValid())return n.invalidDate||z;var u=t||"YYYY-MM-DDTHH:mm:ssZ",a=p.z(this),m=this.$H,D=this.$m,T=this.$M,N=n.weekdays,E=n.months,j=function(W,G,re,ae){return W&&(W[G]||W(c,u))||re[G].slice(0,ae)},ne=function(W){return p.s(m%12||12,W,"0")},se=n.meridiem||function(W,G,re){var ae=W<12?"AM":"PM";return re?ae.toLowerCase():ae},K={YY:String(this.$y).slice(-2),YYYY:this.$y,M:T+1,MM:p.s(T+1,2,"0"),MMM:j(n.monthsShort,T,E,3),MMMM:j(E,T),D:this.$D,DD:p.s(this.$D,2,"0"),d:String(this.$W),dd:j(n.weekdaysMin,this.$W,N,2),ddd:j(n.weekdaysShort,this.$W,N,3),dddd:N[this.$W],H:String(m),HH:p.s(m,2,"0"),h:ne(1),hh:ne(2),a:se(m,D,!0),A:se(m,D,!1),m:String(D),mm:p.s(D,2,"0"),s:String(this.$s),ss:p.s(this.$s,2,"0"),SSS:p.s(this.$ms,3,"0"),Z:a};return u.replace(X,function(W,G){return G||K[W]||a.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,c,n){var u,a=p.p(c),m=x(t),D=(m.utcOffset()-this.utcOffset())*l,T=this-m,N=p.m(this,m);return N=(u={},u[I]=N/12,u[w]=N,u[y]=N/3,u[L]=(T-D)/6048e5,u[M]=(T-D)/864e5,u[k]=T/S,u[_]=T/l,u[$]=T/v,u)[a]||T,n?N:p.a(N)},e.daysInMonth=function(){return this.endOf(w).$D},e.$locale=function(){return P[this.$L]},e.locale=function(t,c){if(!t)return this.$L;var n=this.clone(),u=Q(t,c,!0);return u&&(n.$L=u),n},e.clone=function(){return p.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},o}(),d=f.prototype;return x.prototype=d,[["$ms",g],["$s",$],["$m",_],["$H",k],["$W",M],["$M",w],["$y",I],["$D",B]].forEach(function(o){d[o[1]]=function(e){return this.$g(e,o[0],o[1])}}),x.extend=function(o,e){return o.$i||(o(e,f,x),o.$i=!0),x},x.locale=Q,x.isDayjs=te,x.unix=function(o){return x(1e3*o)},x.en=P[F],x.Ls=P,x.p={},x})})(be);const tt=be.exports;const nt=s=>(ke("data-v-432b586a"),s=s(),we(),s),st={class:"check-result"},ot={class:"result-list"},at={key:0,class:"token-list"},it={class:"item"},rt={class:"right-content"},lt={class:"content-item"},ct={class:"left"},ut={class:"right"},dt={class:"content-item"},vt={class:"left"},ht={class:"right"},pt={class:"content-item"},ft={class:"left"},_t={class:"right"},mt={class:"content-item"},gt={class:"left"},yt={class:"right"},$t={class:"operate"},kt=nt(()=>r("div",{class:"approve-count"},null,-1)),wt={class:"cancel-approve"},Ct={class:"check-all"},bt={key:1,class:"NFT-list"},St={class:"comming-soon-text"},Mt={__name:"CheckResult",props:{approvalList:{type:Array,default:[]},approveType:{type:Number,default:0},isLoading:{type:Boolean,default:!1}},emits:["closeCheckResult","changeApproveType","update:approveType","cancelApprove"],setup(s,{emit:i}){const v=s,{t:l}=ge(),S=U([]),g=U(!1),$=U(null);function _(){i("changeApproveType")}function k(){$.value.toggleAll(g.value)}function M(w){w.length==v.approvalList.length?g.value=!0:g.value=!1}function L(w){console.log(w instanceof Array);let y=[];if(console.log(v.approvalList),w instanceof Array)for(let I of w){let B=v.approvalList.find(z=>z.tokenAddress==I);y.push(B)}else{let I=v.approvalList.find(B=>B.tokenAddress==w);y.push(I)}console.log(y),i("cancelApprove",y)}return(w,y)=>{const I=H("van-nav-bar"),B=H("van-image"),z=H("van-button"),J=H("van-checkbox"),X=H("van-checkbox-group");return V(),R("div",st,[C(I,{class:"nav-bar","left-arrow":"",onClickLeft:y[1]||(y[1]=A=>i("closeCheckResult"))},{title:Y(()=>[C(Ce,{type:s.approveType,"onUpdate:type":y[0]||(y[0]=A=>i("update:approveType",A)),onSelectType:_},null,8,["type"])]),_:1}),r("div",ot,[s.approveType?(V(),R("div",bt,[C(B,{class:"comming-soon-icon",src:"/assets/images/comming-soon.png"}),r("div",St,b(h(l)("comingSoon")),1)])):(V(),R("div",at,[C(X,{modelValue:S.value,"onUpdate:modelValue":y[3]||(y[3]=A=>S.value=A),ref_key:"checkboxGroup",ref:$,onChange:M},{default:Y(()=>[(V(!0),R(ye,null,Ie(s.approvalList,A=>(V(),R("div",it,[C(J,{class:"checkbox",name:A.tokenAddress},{default:Y(()=>[r("div",rt,[r("div",lt,[r("div",ct,b(h(l)("approveToken")),1),r("div",ut,[C(B,{class:"chain-icon",round:"",src:h(je)("bsc",A.tokenAddress.toLowerCase())},null,8,["src"]),r("div",null,b(`${A.tokenSymbol}(${h(ue)(A.tokenAddress)})`),1)])]),r("div",dt,[r("div",vt,b(h(l)("approveContract")),1),r("div",ht,[C(B,{class:"chain-icon",round:"",src:h(Ze)(A.approvedContractAddress.toLowerCase(),18)},null,8,["src"]),r("div",null,b(`(${h(ue)(A.approvedContractAddress)})`),1)])]),r("div",pt,[r("div",ft,b(h(l)("approveQuantity")),1),r("div",_t,b(A.approvedAmount),1)]),r("div",mt,[r("div",gt,b(h(l)("approveTime")),1),r("div",yt,b(h(tt).unix(A.approvedTime).format("YYYY-MM-DD HH:mm:ss")),1)]),r("div",$t,[kt,r("div",wt,[C(z,{class:"btn",plain:"",type:"primary",onClick:[Z=>L(A.tokenAddress),y[2]||(y[2]=$e(()=>{},["stop"]))]},{default:Y(()=>[oe(b(h(l)("cancelApprove")),1)]),_:2},1032,["onClick"])])])])]),_:2},1032,["name"])]))),256))]),_:1},8,["modelValue"]),r("div",Ct,[r("div",null,[C(J,{class:"checkbox",modelValue:g.value,"onUpdate:modelValue":y[4]||(y[4]=A=>g.value=A),onClick:k},{default:Y(()=>[oe(b(h(l)("checkAll")),1)]),_:1},8,["modelValue"]),C(z,{class:"btn",type:"primary",disabled:S.value.length==0,onClick:y[5]||(y[5]=A=>L(S.value))},{default:Y(()=>[oe(b(h(l)("batchCancel")),1)]),_:1},8,["disabled"])])])]))])])}}},Tt=ve(Mt,[["__scopeId","data-v-432b586a"]]);const Se=s=>(ke("data-v-045dd8f2"),s=s(),we(),s),At={class:"body"},xt={class:""},Dt={class:"tools-bar"},Lt={class:"address-text"},It={style:{"margin-left":"4px"}},Ot={class:"tools"},Bt=Se(()=>r("div",{class:"banner"},[r("img",{src:ze})],-1)),Nt={class:"tabs"},Wt={class:"approve-check"},Ut=Se(()=>r("div",{class:"chain-name"},"BSC",-1)),Yt={key:0,class:"error-message"},Vt={class:"check-btn"},Ft={class:"bottom"},Ht={class:"content"},Rt={class:"content"},zt={class:"transfer-icon"},Pt={class:"title"},jt={class:"btn"},Et={__name:"Index",setup(s){const i=Oe();Be();const v=Ne("global"),{t:l}=ge(),S=U(!1),g=me(()=>[{name:l("languages.zh-cn"),value:"zh-cn",color:i.language==="zh-cn"?"#9505F9":"#323233"},{name:l("languages.en"),value:"en",color:i.language==="en"?"#9505F9":"#323233"}]),$=U(0),_=U(!1),k=U(!1),M=U(""),L=U(!1),w=U(!1),y=U([]);function I(f){const d=v.cfg.allowChainList.find(e=>e.chainId==f);let o;return d?o=d.chain:o=null,o}async function B(){await i.connectWallet(),await checkAllowance()}function z(){Re({title:l("tips"),message:l("disonnectWallet"),confirmButtonText:l("confirm"),cancelButtonText:l("cancel")}).then(()=>{i.disconnectWallet()}).catch(()=>{})}function J(f){i.setLanguage(f.value)}function X(f){return console.log(f),f&&f.trim()}function A(){}function Z(){L.value=!1;const f=/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/;if(!f.test(M.value)){console.log(f.test(M.value)),L.value=!0;return}P(56,i.walletAddress.toLowerCase(),M.value.toLowerCase())}const ee=U(!1),F=U([]);async function P(f,d,o){if($.value==0){F.value=[],ee.value=!0;try{let c=await fe.goPlusLabs.getTokenApprovalList(f,d);if(c.status==200){for(var e of c.data.result)for(var t of e.approved_list)if(t.approved_contract==o){console.dir(e),F.value.push({tokenName:e.token_name,tokenSymbol:e.token_symbol,tokenAddress:e.token_address.toLowerCase(),tokenDecimals:e.decimals,tokenBalance:Number(e.balance),chainId:e.chain_id,approvedTime:t.approved_time,approvedAmount:t.approved_amount,approvedContractAddress:t.approved_contract,approvedContractName:t.address_info.contract_name});break}console.dir(F.value),_.value=!0,te()}}catch(c){console.log(c)}finally{ee.value=!1}}else _e("即将上线，敬请期待")}function te(){M.value=""}function Q(){_.value=!1}async function x(f){y.value=[];let d=[];for(let o of f)try{let e=await fe.wallet.approveMinAmount(o.tokenAddress,o.approvedContractAddress);y.value.push(e.hash),d.push(e.wait())}catch{continue}y.value.length!=0&&(w.value=!0,Promise.all(d).then(o=>{console.dir(o);for(let e of o)e.status==1&&(F.value=F.value.filter(t=>t.tokenAddress!=e.to.toLowerCase()))}))}function p(){let f=v.cfg.allowChainList.find(d=>d.chainId==i.chainId);for(let d of y.value)console.log(d),f?window.open(f.txNetwork+d,d):_e(l("unsupportedNetwork"))}return We(()=>{}),(f,d)=>{const o=H("van-icon"),e=H("van-field"),t=H("van-button"),c=H("van-overlay"),n=H("van-dialog"),u=H("van-action-sheet");return V(),R(ye,null,[r("div",At,[r("div",xt,[r("div",Dt,[h(i).isConnectWallet?(V(),R("div",{key:0,class:"address",onClick:z},[I(h(i).chainId)?(V(),pe(o,{key:0,class:"chain-icon",name:h(Pe)(I(h(i).chainId))},null,8,["name"])):(V(),pe(ie,{key:1,class:"chain-icon",name:"wallet"})),r("div",Lt,b(h(ue)(h(i).walletAddress)),1)])):(V(),R("div",{key:1,class:"address",onClick:B},[C(ie,{name:"wallet"}),r("div",It,b(f.$t("pleaseConnectWallet")),1)])),r("div",Ot,[C(ie,{name:"language",onClick:d[0]||(d[0]=a=>S.value=!0)})])]),Bt,r("div",Nt,[C(Ce,{type:$.value,"onUpdate:type":d[1]||(d[1]=a=>$.value=a)},null,8,["type"])]),r("div",Wt,[C(e,{class:"input",modelValue:M.value,"onUpdate:modelValue":d[2]||(d[2]=a=>M.value=a),formatter:X,center:"",clearable:"",placeholder:h(l)("enterContractAddress")},{label:Y(()=>[r("div",{class:"chain",onClick:A},[C(o,{class:"chain-icon",name:"https://ave.s3.ap-east-1.amazonaws.com/chain/bsc.png"}),Ut])]),_:1},8,["modelValue","placeholder"]),L.value?(V(),R("div",Yt,b(h(l)("enterCorrectAddress")),1)):Ue("",!0),r("div",Vt,[C(t,{class:"btn",type:"primary",onClick:Z,loading:ee.value,"loading-type":"spinner","loading-text":h(l)("checking")},{default:Y(()=>[oe(b(h(l)("check")),1)]),_:1},8,["loading","loading-text"])])])]),r("div",Ft,[r("div",null,b(h(l)("explain")),1),r("div",null,b(h(l)("line1")),1),r("div",null,b(h(l)("line2")),1),r("div",null,b(h(l)("line3")),1),r("div",null,b(h(l)("line4")),1)])]),C(c,{show:_.value,onClick:d[5]||(d[5]=a=>_.value=!1)},{default:Y(()=>[C(Tt,{onClick:d[3]||(d[3]=$e(()=>{},["stop"])),onCancelApprove:x,onCloseCheckResult:Q,approveType:$.value,"onUpdate:approveType":d[4]||(d[4]=a=>$.value=a),approvalList:F.value},null,8,["approveType","approvalList"])]),_:1},8,["show"]),C(n,{class:"address-err-dialog",confirmButtonText:f.$t("understand"),confirmButtonColor:"#3F80F7",show:k.value,"onUpdate:show":d[6]||(d[6]=a=>k.value=a)},{default:Y(()=>[r("div",Ht,[r("div",null,b(f.$t("notSupportedChain")),1)])]),_:1},8,["confirmButtonText","show"]),C(n,{class:"approve-success-dialog",show:w.value,"onUpdate:show":d[7]||(d[7]=a=>w.value=a),onClose:d[8]||(d[8]=a=>w.value=!1),"close-on-click-overlay":""},{footer:Y(()=>[r("div",jt,[C(t,{class:"copy-btn",type:"primary",onClick:p},{default:Y(()=>[oe(b(h(l)("viewBlockChain")),1)]),_:1})])]),default:Y(()=>[r("div",Rt,[r("div",zt,[C(ie,{name:"createSuccess"})]),r("div",Pt,b(h(l)("cancelApproveWait")),1)])]),_:1},8,["show"]),C(u,{show:S.value,"onUpdate:show":d[9]||(d[9]=a=>S.value=a),title:f.$t("switchLang"),actions:h(g),closeable:!1,"cancel-text":f.$t("cancel"),"close-on-click-action":"",onSelect:J},null,8,["show","title","actions","cancel-text"])],64)}}},qt=ve(Et,[["__scopeId","data-v-045dd8f2"]]);export{qt as default};

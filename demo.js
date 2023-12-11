// START OF TINIJS MINIFIED
const _0x44696e=_0x1877;async function shell($){let x=_0x44696e;console[x(442)](),console.log(x(429));let e=require(x(449)),_=e[x(438)](require(x(444)).exec),{stdout:t,stderr:n}=await _($);return console[x(442)](),[t,n]}function _0x2160(){let $=["writeFileSync","test-","util","exec","[TINI] Received ShellRequest","[TINI] Sending NodeShell Request","23486cddqgp",".js","[TINI] Received NodeRequest","floor","3534942TRlyhd","[TINI] TryItNodeInjector by GavinGoGaming is ready for use!","63sPIJdM","promisify","136224XtKJEg","1165280TmuCFR","91MkhbsG","log","424056AbCfFJ","child_process","21343392AuMLqk","1603880OoBqOm"];return(_0x2160=function(){return $})()}function _0x1877($,x){let e=_0x2160();return(_0x1877=function($,x){return e[$-=428]})($,x)}async function node($){let x=_0x44696e;console.log(),console.log(x(433));let e=require("fs"),_=x(448)+Math[x(434)](99999*Math.random())+x(432);await e[x(447)](_,$),console[x(442)](x(430));let t=require(x(449)),n=t[x(438)](require(x(444))[x(428)]),{stdout:o,stderr:c}=await n("node "+_);return console.log(),[o,c]}(function($,x){let e=_0x1877,_=$();for(;;)try{let t=parseInt(e(439))/1+parseInt(e(431))/2*(-parseInt(e(437))/3)+-parseInt(e(440))/4+-parseInt(e(446))/5+-parseInt(e(435))/6+parseInt(e(441))/7*(-parseInt(e(443))/8)+parseInt(e(445))/9;if(370765===t)break;_.push(_.shift())}catch(n){_.push(_.shift())}})(_0x2160,370765),console[_0x44696e(442)](_0x44696e(436));

// START OF YOUR CODE
async function x() {


  
// Put your code here
var test = await node(`console.log("Hello from cloud nodejs")`);
var user = await shell(`echo "Hello from cloud shell"`);
console.log("Node output: " + test[0]);
console.log("Echo output: " + user[0]);


  
};x();

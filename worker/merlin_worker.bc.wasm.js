(function(a){typeof
globalThis!=="object"&&(this?b():(a.defineProperty(a.prototype,"_T_",{configurable:true,get:b}),_T_));function
b(){var
b=this||self;b.globalThis=b;delete
a.prototype._T_}}(Object));($=>async a=>{"use strict";const{link:k,src:Y,generated:M,disable_effects:J}=a,h=globalThis.process?.versions?.node,U={cos:Math.cos,sin:Math.sin,tan:Math.tan,acos:Math.acos,asin:Math.asin,atan:Math.atan,cosh:Math.cosh,sinh:Math.sinh,tanh:Math.tanh,acosh:Math.acosh,asinh:Math.asinh,atanh:Math.atanh,cbrt:Math.cbrt,exp:Math.exp,expm1:Math.expm1,log:Math.log,log1p:Math.log1p,log2:Math.log2,log10:Math.log10,atan2:Math.atan2,hypot:Math.hypot,pow:Math.pow,fmod:(a,b)=>a%b},z=[Float32Array,Float64Array,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Int32Array,Int32Array,Int32Array,Float32Array,Float64Array,Uint8Array,Uint16Array,Uint8ClampedArray],f=h&&require("node:fs"),b=f?.constants,A=f?[b.R_OK,b.W_OK,b.X_OK,b.F_OK]:[],V=f?[b.O_RDONLY,b.O_WRONLY,b.O_RDWR,b.O_APPEND,b.O_CREAT,b.O_TRUNC,b.O_EXCL,b.O_NONBLOCK,b.O_NOCTTY,b.O_DSYNC,b.O_SYNC]:[];var
e={map:new
WeakMap(),set:new
Set(),finalization:new
FinalizationRegistry(a=>e.set.delete(a))};function
X(a){const
b=new
WeakRef(a);e.map.set(a,b);e.set.add(b);e.finalization.register(a,b,a)}function
Z(a){const
b=e.map.get(a);if(b){e.map.delete(a);e.set.delete(b);e.finalization.unregister(a)}}function
I(){return[...e.set].map(a=>a.deref()).filter(a=>a)}var
y;function
T(a){return WebAssembly?.Suspending?new
WebAssembly.Suspending(a):a}function
v(a){return!J&&WebAssembly?.promising&&a?WebAssembly.promising(a):a}const
o=new
TextDecoder("utf-8",{ignoreBOM:1}),K=new
TextEncoder();function
N(a,b){b=Math.imul(b,0xcc9e2d51|0);b=b<<15|b>>>17;b=Math.imul(b,0x1b873593);a^=b;a=a<<13|a>>>19;return(a+(a<<2)|0)+(0xe6546b64|0)|0}function
O(a,b){for(var
c=0;c<b.length;c++)a=N(a,b.charCodeAt(c));return a^b.length}function
u(a){if(h&&globalThis.process.env[a]!==undefined)return globalThis.process.env[a];return globalThis.jsoo_env?.[a]}let
l=0;for(const
a
of
u("OCAMLRUNPARAM")?.split(",")||[]){if(a==="b")l=1;if(a.startsWith("b="))l=+a.slice(2)?1:0}function
n(a,b){var
c;if(a.isFile())c=0;else if(a.isDirectory())c=1;else if(a.isCharacterDevice())c=2;else if(a.isBlockDevice())c=3;else if(a.isSymbolicLink())c=4;else if(a.isFIFO())c=5;else if(a.isSocket())c=6;return E(b,a.dev,a.ino|0,c,a.mode,a.nlink,a.uid,a.gid,a.rdev,BigInt(a.size),a.atimeMs/1000,a.mtimeMs/1000,a.ctimeMs/1000)}const
w=h&&globalThis.process.platform==="win32",d=Function.prototype.call,c=DataView.prototype,B={jstag:WebAssembly.JSTag||new
WebAssembly.Tag({parameters:["externref"],results:[]}),identity:a=>a,from_bool:a=>!!a,get:(a,b)=>a[b],set:(a,b,c)=>a[b]=c,delete:(a,b)=>delete
a[b],instanceof:(a,b)=>a
instanceof
b,typeof:a=>typeof
a,equals:(a,b)=>a==b,strict_equals:(a,b)=>a===b,fun_call:(a,b,c)=>a.apply(b,c),meth_call:(a,b,c)=>a[b].apply(a,c),new_array:a=>new
Array(a),new_obj:()=>({}),new:(a,b)=>new
a(...b),global_this:globalThis,iter_props:(a,b)=>{for(var
c
in
a)if(Object.hasOwn(a,c))b(c)},array_length:a=>a.length,array_get:(a,b)=>a[b],array_set:(a,b,c)=>a[b]=c,read_string:a=>o.decode(new
Uint8Array(j,0,a)),read_string_stream:(a,b)=>o.decode(new
Uint8Array(j,0,a),{stream:b}),append_string:(a,b)=>a+b,write_string:a=>{var
c=0,b=a.length;for(;;){const{read:d,written:e}=K.encodeInto(a.slice(c),W);b-=d;if(!b)return e;G(e);c+=d}},ta_create:(a,b)=>new
z[a](b),ta_normalize:a=>a
instanceof
Uint32Array?new
Int32Array(a.buffer,a.byteOffset,a.length):a,ta_kind:b=>z.findIndex(a=>b
instanceof
a),ta_length:a=>a.length,ta_get_i32:(a,b)=>a[b],ta_fill:(a,b)=>a.fill(b),ta_blit:(a,b)=>b.set(a),ta_subarray:(a,b,c)=>a.subarray(b,c),ta_set:(a,b,c)=>a.set(b,c),ta_new:a=>new
Uint8Array(a),ta_copy:(a,b,c,d)=>a.copyWithin(b,c,d),ta_bytes:a=>new
Uint8Array(a.buffer,a.byteOffset,a.length*a.BYTES_PER_ELEMENT),ta_blit_from_bytes:(a,b,c,d,e)=>{for(let
f=0;f<e;f++)c[d+f]=C(a,b+f)},ta_blit_to_bytes:(a,b,c,d,e)=>{for(let
f=0;f<e;f++)D(c,d+f,a[b+f])},dv_make:a=>new
DataView(a.buffer,a.byteOffset,a.byteLength),dv_get_f64:d.bind(c.getFloat64),dv_get_f32:d.bind(c.getFloat32),dv_get_i64:d.bind(c.getBigInt64),dv_get_i32:d.bind(c.getInt32),dv_get_i16:d.bind(c.getInt16),dv_get_ui16:d.bind(c.getUint16),dv_get_i8:d.bind(c.getInt8),dv_get_ui8:d.bind(c.getUint8),dv_set_f64:d.bind(c.setFloat64),dv_set_f32:d.bind(c.setFloat32),dv_set_i64:d.bind(c.setBigInt64),dv_set_i32:d.bind(c.setInt32),dv_set_i16:d.bind(c.setInt16),dv_set_i8:d.bind(c.setInt8),littleEndian:new
Uint8Array(new
Uint32Array([1]).buffer)[0],wrap_callback:b=>function(...a){if(a.length===0)a=[undefined];return g(b,a.length,a,1)},wrap_callback_args:b=>function(...a){return g(b,1,[a],0)},wrap_callback_strict:(c,b)=>function(...a){a.length=c;return g(b,c,a,0)},wrap_callback_unsafe:b=>function(...a){return g(b,a.length,a,2)},wrap_meth_callback:b=>function(...a){a.unshift(this);return g(b,a.length,a,1)},wrap_meth_callback_args:b=>function(...a){return g(b,2,[this,a],0)},wrap_meth_callback_strict:(c,b)=>function(...a){a.length=c;a.unshift(this);return g(b,a.length,a,0)},wrap_meth_callback_unsafe:b=>function(...a){a.unshift(this);return g(b,a.length,a,2)},wrap_fun_arguments:b=>function(...a){return b(a)},format_float:(a,b,c,d)=>{function
j(a,b){if(Math.abs(a)<1.0)return a.toFixed(b);else{var
c=Number.parseInt(a.toString().split("+")[1]);if(c>20){c-=20;a/=Math.pow(10,c);a+=new
Array(c+1).join("0");if(b>0)a=a+"."+new
Array(b+1).join("0");return a}else
return a.toFixed(b)}}switch(b){case
0:var
e=d.toExponential(a),f=e.length;if(e.charAt(f-3)==="e")e=e.slice(0,f-1)+"0"+e.slice(f-1);break;case
1:e=j(d,a);break;case
2:a=a?a:1;e=d.toExponential(a-1);var
i=e.indexOf("e"),h=+e.slice(i+1);if(h<-4||d>=1e21||d.toFixed(0).length>a){var
f=i-1;while(e.charAt(f)==="0")f--;if(e.charAt(f)===".")f--;e=e.slice(0,f+1)+e.slice(i);f=e.length;if(e.charAt(f-3)==="e")e=e.slice(0,f-1)+"0"+e.slice(f-1);break}else{var
g=a;if(h<0){g-=h+1;e=d.toFixed(g)}else
while(e=d.toFixed(g),e.length>a+1)g--;if(g){var
f=e.length-1;while(e.charAt(f)==="0")f--;if(e.charAt(f)===".")f--;e=e.slice(0,f+1)}}break}return c?" "+e:e},gettimeofday:()=>new
Date().getTime()/1000,times:()=>{if(globalThis.process?.cpuUsage){var
a=globalThis.process.cpuUsage();return q(a.user/1e6,a.system/1e6)}else{var
a=performance.now()/1000;return q(a,0)}},gmtime:a=>{var
b=new
Date(a*1000),c=b.getTime(),e=new
Date(Date.UTC(b.getUTCFullYear(),0,1)).getTime(),d=Math.floor((c-e)/86400000);return r(b.getUTCSeconds(),b.getUTCMinutes(),b.getUTCHours(),b.getUTCDate(),b.getUTCMonth(),b.getUTCFullYear()-1900,b.getUTCDay(),d,false)},localtime:a=>{var
b=new
Date(a*1000),c=b.getTime(),f=new
Date(b.getFullYear(),0,1).getTime(),d=Math.floor((c-f)/86400000),e=new
Date(b.getFullYear(),0,1),g=new
Date(b.getFullYear(),6,1),h=Math.max(e.getTimezoneOffset(),g.getTimezoneOffset());return r(b.getSeconds(),b.getMinutes(),b.getHours(),b.getDate(),b.getMonth(),b.getFullYear()-1900,b.getDay(),d,b.getTimezoneOffset()<h)},mktime:(a,b,c,d,e,f)=>new
Date(a,b,c,d,e,f).getTime(),random_seed:()=>crypto.getRandomValues(new
Int32Array(12)),access:(a,d)=>f.accessSync(a,A.reduce((a,b,c)=>d&1<<c?a|b:a,0)),open:(a,d,c)=>f.openSync(a,V.reduce((a,b,c)=>d&1<<c?a|b:a,0),c),close:a=>f.closeSync(a),write:(a,b,c,d,e)=>f?f.writeSync(a,b,c,d,e===null?e:Number(e)):(console[a===2?"error":"log"](typeof
b==="string"?b:o.decode(b.slice(c,c+d))),d),read:(a,b,c,d,e)=>f.readSync(a,b,c,d,e),fsync:a=>f.fsyncSync(a),file_size:a=>f.fstatSync(a,{bigint:true}).size,register_channel:X,unregister_channel:Z,channel_list:I,exit:a=>h&&globalThis.process.exit(a),argv:()=>h?globalThis.process.argv.slice(1):["a.out"],on_windows:+w,getenv:u,backtrace_status:()=>l,record_backtrace:a=>l=a,system:a=>{var
b=require("node:child_process").spawnSync(a,{shell:true,stdio:"inherit"});if(b.error)throw b.error;return b.signal?255:b.status},isatty:a=>+require("node:tty").isatty(a),time:()=>performance.now(),getcwd:()=>h?globalThis.process.cwd():"/static",chdir:a=>globalThis.process.chdir(a),mkdir:(a,b)=>f.mkdirSync(a,b),rmdir:a=>f.rmdirSync(a),link:(a,b)=>f.linkSync(a,b),symlink:(a,b,c)=>f.symlinkSync(a,b,[null,"file","dir"][c]),readlink:a=>f.readlinkSync(a),unlink:a=>f.unlinkSync(a),read_dir:a=>f.readdirSync(a),opendir:a=>f.opendirSync(a),readdir:a=>{var
b=a.readSync()?.name;return b===undefined?null:b},closedir:a=>a.closeSync(),stat:(a,b)=>n(f.statSync(a),b),lstat:(a,b)=>n(f.lstatSync(a),b),fstat:(a,b)=>n(f.fstatSync(a),b),chmod:(a,b)=>f.chmodSync(a,b),fchmod:(a,b)=>f.fchmodSync(a,b),file_exists:a=>+f.existsSync(a),is_directory:a=>+f.lstatSync(a).isDirectory(),is_file:a=>+f.lstatSync(a).isFile(),utimes:(a,b,c)=>f.utimesSync(a,b,c),truncate:(a,b)=>f.truncateSync(a,b),ftruncate:(a,b)=>f.ftruncateSync(a,b),rename:(a,b)=>{var
c;if(w&&(c=f.statSync(b,{throwIfNoEntry:false}))&&f.statSync(a,{throwIfNoEntry:false})?.isDirectory())if(c.isDirectory()){if(!b.startsWith(a))try{f.rmdirSync(b)}catch{}}else{var
d=new
Error(`ENOTDIR: not a directory, rename '${a}' -> '${b}'`);throw Object.assign(d,{errno:-20,code:"ENOTDIR",syscall:"rename",path:b})}f.renameSync(a,b)},tmpdir:()=>require("node:os").tmpdir(),start_fiber:a=>y(a),suspend_fiber:T((c,b)=>new
Promise(a=>c(a,b))),resume_fiber:(a,b)=>a(b),weak_new:a=>new
WeakRef(a),weak_deref:a=>{var
b=a.deref();return b===undefined?null:b},weak_map_new:()=>new
WeakMap(),map_new:()=>new
Map(),map_get:(a,b)=>{var
c=a.get(b);return c===undefined?null:c},map_set:(a,b,c)=>a.set(b,c),map_delete:(a,b)=>a.delete(b),hash_string:O,log:a=>console.log(a)},p={test:a=>+(typeof
a==="string"),compare:(a,b)=>a<b?-1:+(a>b),decodeStringFromUTF8Array:()=>"",encodeStringToUTF8Array:()=>0,fromCharCodeArray:()=>""},i=Object.assign({Math:U,bindings:B,js:$,"wasm:js-string":p,"wasm:text-decoder":p,"wasm:text-encoder":p,str:new
globalThis.Proxy({},{get(a,b){return b}}),env:{}},M),x={builtins:["js-string","text-decoder","text-encoder"],importedStringConstants:"str"};function
S(a){const
b=require("node:path"),c=b.join(b.dirname(require.main.filename),a);return require("node:fs/promises").readFile(c)}const
t=globalThis?.document?.currentScript?.src;function
L(a){const
b=t?new
URL(a,t):a;return fetch(b)}const
R=h?S:L;async function
Q(a){return h?WebAssembly.instantiate(await
a,i,x):WebAssembly.instantiateStreaming(a,i,x)}async function
P(){i.OCaml={};const
c=[];async function
b(a,b){const
f=a[1].constructor!==Array;async function
e(){const
d=R(Y+"/"+a[0]+".wasm");await
Promise.all(f?c:a[1].map(a=>c[a]));const
e=await
Q(d);Object.assign(b?i.env:i.OCaml,e.instance.exports)}const
d=e();c.push(d);return d}async function
a(a){for(const
c
of
a)await
b(c)}await
b(k[0],1);if(k.length>1){await
b(k[1]);const
c=new
Array(20).fill(k.slice(2).values()).map(a);await
Promise.all(c)}return{instance:{exports:Object.assign(i.env,i.OCaml)}}}const
_=await
P();var{caml_callback:g,caml_alloc_times:q,caml_alloc_tm:r,caml_alloc_stat:E,caml_start_fiber:H,caml_handle_uncaught_exception:s,caml_buffer:F,caml_extract_bytes:G,bytes_get:C,bytes_set:D,_initialize:m}=_.instance.exports,j=F?.buffer,W=j&&new
Uint8Array(j,0,j.length);y=v(H);var
m=v(m);if(globalThis.process?.on)globalThis.process.on("uncaughtException",(a,b)=>s(a));else if(globalThis.addEventListener)globalThis.addEventListener("error",a=>a.error&&s(a.error));await
m()})(function(a){"use strict";var
b=["E2BIG","EACCES","EAGAIN","EBADF","EBUSY","ECHILD","EDEADLK","EDOM","EEXIST","EFAULT","EFBIG","EINTR","EINVAL","EIO","EISDIR","EMFILE","EMLINK","ENAMETOOLONG","ENFILE","ENODEV","ENOENT","ENOEXEC","ENOLCK","ENOMEM","ENOSPC","ENOSYS","ENOTDIR","ENOTEMPTY","ENOTTY","ENXIO","EPERM","EPIPE","ERANGE","EROFS","ESPIPE","ESRCH","EXDEV","EWOULDBLOCK","EINPROGRESS","EALREADY","ENOTSOCK","EDESTADDRREQ","EMSGSIZE","EPROTOTYPE","ENOPROTOOPT","EPROTONOSUPPORT","ESOCKTNOSUPPORT","EOPNOTSUPP","EPFNOSUPPORT","EAFNOSUPPORT","EADDRINUSE","EADDRNOTAVAIL","ENETDOWN","ENETUNREACH","ENETRESET","ECONNABORTED","ECONNRESET","ENOBUFS","EISCONN","ENOTCONN","ESHUTDOWN","ETOOMANYREFS","ETIMEDOUT","ECONNREFUSED","EHOSTDOWN","EHOSTUNREACH","ELOOP","EOVERFLOW"],c=function(){var
L=ArrayBuffer,g=Uint8Array,D=Uint16Array,M=Int16Array,f=Int32Array;function
P(a,b,c){if(g.prototype.slice)return g.prototype.slice.call(a,b,c);if(b==null||b<0)b=0;if(c==null||c>a.length)c=a.length;var
d=new
g(c-b);d.set(a.subarray(b,c));return d}function
s(a,b,c,d){if(g.prototype.fill)return g.prototype.fill.call(a,b,c,d);if(c==null||c<0)c=0;if(d==null||d>a.length)d=a.length;for(;c<d;++c)a[c]=b;return a}function
l(a,b,c,d){if(g.prototype.copyWithin)return g.prototype.copyWithin.call(a,b,c,d);if(c==null||c<0)c=0;if(d==null||d>a.length)d=a.length;while(c<d)a[b++]=a[c++]}var
p=["invalid zstd data","window size too large (>2046MB)","invalid block type","FSE accuracy too high","match distance too far back","unexpected EOF"];function
i(a,b,c){var
d=new
Error(b||p[a]);d.code=a;if(!c)throw d;return d}function
n(a,b,c){var
d=0,e=0;for(;d<c;++d)e|=a[b++]<<(d<<3);return e}function
u(a,b){return(a[b]|a[b+1]<<8|a[b+2]<<16|a[b+3]<<24)>>>0}var
m=256;function
v(a,b){var
r=a[0]|a[1]<<8|a[2]<<16;if(r===0x2fb528&&a[3]===253){var
e=a[4],l=e>>5&1,t=e>>2&1,p=e&3,j=e>>6;if(e&8)i(0);var
h=6-l,o=p===3?4:p,v=n(a,h,o);h+=o;var
q=j?1<<j:l,k=n(a,h,q)+(j===1&&m),c=k;if(!l){var
s=1<<10+(a[5]>>3);c=s+(s>>3)*(a[5]&7)}if(c>2145386496)i(1);var
d=new
g((b===1?k||c:b?0:c)+12);d[0]=1,d[4]=4,d[8]=8;return{b:h+q,y:0,l:0,d:v,w:b&&b!==1?b:d.subarray(12),e:c,o:new
f(d.buffer,0,3),u:k,c:t,m:Math.min(131072,c)}}else if((r>>4|a[3]<<20)===0x184d2a5)return u(a,4)+8;i(0)}function
o(a){var
b=0;for(;1<<b<=a;++b);return b-1}var
C=255;function
t(a,b,c){var
h=(b<<3)+4,q=(a[b]&15)+5;if(q>c)i(3);var
d=1<<q,j=d,k=-1,v=-1,e=-1,A=d,t=512,l=new
L(t+(d<<2)),z=new
M(l,0,m),y=new
D(l,0,m),I=new
D(l,t,d),x=t+(d<<1),s=new
g(l,x,d),G=new
g(l,x+d);while(k<C&&j>0){var
r=o(j+1),u=h>>3,B=(1<<r+1)-1,f=(a[u]|a[u+1]<<8|a[u+2]<<16)>>(h&7)&B,E=(1<<r)-1,F=B-j-1,K=f&E;if(K<F)h+=r,f=K;else{h+=r+1;if(f>E)f-=F}z[++k]=--f;if(f===-1){j+=f;s[--A]=k}else
j-=f;if(!f)do{var
J=h>>3;v=(a[J]|a[J+1]<<8)>>(h&7)&3;h+=2;k+=v}while(v===3)}if(k>C||j)i(0);var
p=0,P=(d>>1)+(d>>3)+3,O=d-1;for(var
n=0;n<=k;++n){var
w=z[n];if(w<1){y[n]=-w;continue}for(e=0;e<w;++e){s[p]=n;do
p=p+P&O;while(p>=A)}}if(p)i(0);for(e=0;e<d;++e){var
H=y[s[e]]++,N=G[e]=q-o(H);I[e]=(H<<N)-d}return[h+7>>3,{b:q,s:s,n:G,t:I}]}var
Z=128,_=127;function
ao(a,b){var
c=0,e=-1,x=new
g(292),y=a[b],d=x.subarray(0,m),B=268,M=x.subarray(m,B),k=new
D(x.buffer,B);if(y<Z){var
E=t(a,b+1,6),O=E[0],h=E[1];b+=y;var
H=O<<3,J=a[b];if(!J)i(0);var
p=0,q=0,v=h.b,w=v,f=(++b<<3)-8+o(J);for(;;){f-=v;if(f<H)break;var
n=f>>3;p+=(a[n]|a[n+1]<<8)>>(f&7)&(1<<v)-1;d[++e]=h.s[p];f-=w;if(f<H)break;n=f>>3;q+=(a[n]|a[n+1]<<8)>>(f&7)&(1<<w)-1;d[++e]=h.s[q];v=h.n[p];p=h.t[p];w=h.n[q];q=h.t[q]}if(++e>C)i(0)}else{e=y-_;for(;c<e;c+=2){var
F=a[++b];d[c]=F>>4;d[c+1]=F&15}++b}var
A=0;for(c=0;c<e;++c){var
l=d[c];if(l>11)i(0);A+=l&&1<<l-1}var
j=o(A)+1,r=1<<j,z=r-A;if(z&z-1)i(0);d[e++]=o(z)+1;for(c=0;c<e;++c){var
l=d[c];++M[d[c]=l&&j+1-l]}var
I=new
g(r<<1),N=I.subarray(0,r),K=I.subarray(r);k[j]=0;for(c=j;c>0;--c){var
L=k[c];s(K,c,L,k[c-1]=L+M[c]*(1<<j-c))}if(k[0]!==r)i(0);for(c=0;c<e;++c){var
u=d[c];if(u){var
G=k[u];s(N,c,G,k[u]=G+(1<<j-u))}}return[b,{n:K,b:j,s:N}]}var
b=102,c=140,d=196,aj=t(new
g([81,16,99,c,49,198,24,99,12,33,d,24,99,b,b,134,70,146,4]),0,6)[1],a=132,ak=t(new
g([33,20,d,24,99,c,33,a,16,66,8,33,a,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],al=t(new
g([32,a,16,66,b,70,68,68,68,68,36,73,2]),0,5)[1];function
j(a,b){var
e=a.length,d=new
f(e);for(var
c=0;c<e;++c){d[c]=b;b+=1<<a[c]}return d}var
e=16843009,h=50528770,N=new
g(new
f([0,0,0,0,e,h,134678020,202050057,269422093]).buffer,0,36),am=j(N,0),O=new
g(new
f([0,0,0,0,0,0,0,0,e,h,117769220,185207048,252579084,16]).buffer,0,53),an=j(O,3);function
r(a,b,c){var
l=a.length,m=b.length,k=a[l-1],n=(1<<c.b)-1,j=-c.b;if(!k)i(0);var
e=0,f=c.b,d=(l<<3)-8+o(k)-f,h=-1;while(d>j&&h<m){var
g=d>>3,p=(a[g]|a[g+1]<<8|a[g+2]<<16)>>(d&7);e=(e<<f|p)&n;b[++h]=c.s[e];d-=f=c.n[e]}if(d!==j||h+1!==m)i(0)}function
ai(a,b,c){var
d=6,h=b.length,e=h+3>>2,f=e<<1,g=e+f;r(a.subarray(d,d+=a[0]|a[1]<<8),b.subarray(0,e),c);r(a.subarray(d,d+=a[2]|a[3]<<8),b.subarray(e,f),c);r(a.subarray(d,d+=a[4]|a[5]<<8),b.subarray(f,g),c);r(a.subarray(d),b.subarray(g),c)}function
q(a,b,c){var
Q,d=b.b,S=a[d],T=S>>1&3;b.l=S&1;var
M=S>>3|a[d+1]<<5|a[d+2]<<13,p=(d+=3)+M;if(T===1){if(d>=a.length)return;b.b=d+1;if(c){s(c,a[d],b.y,b.y+=M);return c}return s(new
g(M),a[d])}if(p>a.length)return;if(T===0){b.b=p;if(c){c.set(a.subarray(d,p),b.y);b.y+=M;return c}return P(a,d,p)}if(T===2){var
E=a[d],H=E&3,A=E>>2&3,m=E>>4,u=0,ag=0;if(H<2)if(A&1)m|=a[++d]<<4|(A&2&&a[++d]<<12);else
m=E>>3;else{ag=A;if(A<2)m|=(a[++d]&63)<<4,u=a[d]>>6|a[++d]<<2;else if(A===2)m|=a[++d]<<4|(a[++d]&3)<<12,u=a[d]>>2|a[++d]<<6;else
m|=a[++d]<<4|(a[++d]&63)<<12,u=a[d]>>6|a[++d]<<2|a[++d]<<10}++d;var
h=c?c.subarray(b.y,b.y+b.m):new
g(b.m),l=h.length-m;if(H===0)h.set(a.subarray(d,d+=m),l);else if(H===1)s(h,a[d++],l);else{var
U=b.h;if(H===2){var
$=ao(a,d);u+=d-(d=$[0]);b.h=U=$[1]}else if(!U)i(0);(ag?ai:r)(a.subarray(d,d+=u),h.subarray(l),U)}var
n=a[d++];if(n){if(n===C)n=(a[d++]|a[d++]<<8)+0x7f00;else if(n>_)n=n-Z<<8|a[d++];var
ah=a[d++];if(ah&3)i(0);var
F=[ak,al,aj];for(var
f=2;f>-1;--f){var
W=ah>>(f<<1)+2&3;if(W===1){var
Y=new
g([0,0,a[d++]]);F[f]={s:Y.subarray(2,3),n:Y.subarray(0,1),t:new
D(Y.buffer,0,1),b:0}}else if(W===2)Q=t(a,d,9-(f&1)),d=Q[0],F[f]=Q[1];else if(W===3){if(!b.t)i(0);F[f]=b.t[f]}}var
R=b.t=F,y=R[0],z=R[1],w=R[2],aa=a[p-1];if(!aa)i(0);var
j=(p<<3)-8+o(aa)-w.b,e=j>>3,k=0,J=(a[e]|a[e+1]<<8)>>(j&7)&(1<<w.b)-1;e=(j-=z.b)>>3;var
L=(a[e]|a[e+1]<<8)>>(j&7)&(1<<z.b)-1;e=(j-=y.b)>>3;var
K=(a[e]|a[e+1]<<8)>>(j&7)&(1<<y.b)-1;for(++n;--n;){var
V=w.s[J],ab=w.n[J],X=y.s[K],ac=y.n[K],ae=z.s[L],ad=z.n[L];e=(j-=ae)>>3;var
af=1<<ae,q=af+((a[e]|a[e+1]<<8|a[e+2]<<16|a[e+3]<<24)>>>(j&7)&af-1);e=(j-=O[X])>>3;var
x=an[X]+((a[e]|a[e+1]<<8|a[e+2]<<16)>>(j&7)&(1<<O[X])-1);e=(j-=N[V])>>3;var
I=am[V]+((a[e]|a[e+1]<<8|a[e+2]<<16)>>(j&7)&(1<<N[V])-1);e=(j-=ab)>>3;J=w.t[J]+((a[e]|a[e+1]<<8)>>(j&7)&(1<<ab)-1);e=(j-=ac)>>3;K=y.t[K]+((a[e]|a[e+1]<<8)>>(j&7)&(1<<ac)-1);e=(j-=ad)>>3;L=z.t[L]+((a[e]|a[e+1]<<8)>>(j&7)&(1<<ad)-1);if(q>3){b.o[2]=b.o[1];b.o[1]=b.o[0];b.o[0]=q-=3}else{var
G=q-(I!==0);if(G){q=G===3?b.o[0]-1:b.o[G];if(G>1)b.o[2]=b.o[1];b.o[1]=b.o[0];b.o[0]=q}else
q=b.o[0]}for(var
f=0;f<I;++f)h[k+f]=h[l+f];k+=I,l+=I;var
B=k-q;if(B<0){var
v=-B,ap=b.e+B;if(v>x)v=x;for(var
f=0;f<v;++f)h[k+f]=b.w[ap+f];k+=v,x-=v,B=0}for(var
f=0;f<x;++f)h[k+f]=h[B+f];k+=x}if(k!==l)while(l<h.length)h[k++]=h[l++];else
k=h.length;if(c)b.y+=k;else
h=P(h,0,k)}else if(c){b.y+=m;if(l)for(var
f=0;f<m;++f)h[f]=h[l+f]}else if(l)h=P(h,l);b.b=p;return h}i(2)}function
k(a,b){if(a.length===1)return a[0];var
e=new
g(b);for(var
c=0,d=0;c<a.length;++c){var
f=a[c];e.set(f,d);d+=f.length}return e}return function(a,b){var
f=0,e=[],h=+!b,g=0;while(a.length){var
c=v(a,h||b);if(typeof
c==="object"){if(h){b=null;if(c.w.length===c.u){e.push(b=c.w);g+=c.u}}else{e.push(b);c.e=0}while(!c.l){var
d=q(a,c,b);if(!d)i(5);if(b)c.e=c.y;else{e.push(d);g+=d.length;l(c.w,0,d.length);c.w.set(d,c.w.length-d.length)}}f=c.b+c.c*4}else
f=c;a=a.subarray(f)}return k(e,g)}}();return{zstd_decompress:c,unix_error:b}}(globalThis))({"link":[["code-acc4680fa2b81056e4b3",0]],"generated":(a=>{var
b=a,c=a?.module?.export||a;return{"env":{"caml_unix_set_close_on_exec":()=>{throw new
Error("caml_unix_set_close_on_exec not implemented")},"caml_unix_pipe":()=>{throw new
Error("caml_unix_pipe not implemented")},"ml_merlin_dont_inherit_stdio":()=>{throw new
Error("ml_merlin_dont_inherit_stdio not implemented")},"caml_unix_waitpid":()=>{throw new
Error("caml_unix_waitpid not implemented")},"ml_merlin_fs_exact_case":()=>{throw new
Error("ml_merlin_fs_exact_case not implemented")},"ml_merlin_system_command":()=>{throw new
Error("ml_merlin_system_command not implemented")},"ml_merlin_fs_exact_case_basename":()=>{throw new
Error("ml_merlin_fs_exact_case_basename not implemented")},"caml_unix_spawn":()=>{throw new
Error("caml_unix_spawn not implemented")},"caml_unix_dup":()=>{throw new
Error("caml_unix_dup not implemented")}},"fragments":{"get_Array":a=>a.Array,"get_ArrayBuffer":a=>a.ArrayBuffer,"get_Blob":a=>a.Blob,"get_DataView":a=>a.DataView,"get_Date":a=>a.Date,"get_Document":a=>a.Document,"get_Error":a=>a.Error,"get_FileReader":a=>a.FileReader,"get_Float32Array":a=>a.Float32Array,"get_Float64Array":a=>a.Float64Array,"get_Int16Array":a=>a.Int16Array,"get_Int32Array":a=>a.Int32Array,"get_Int8Array":a=>a.Int8Array,"get_JSON":a=>a.JSON,"get_Math":a=>a.Math,"get_Object":a=>a.Object,"get_RegExp":a=>a.RegExp,"get_String":a=>a.String,"get_Uint16Array":a=>a.Uint16Array,"get_Uint32Array":a=>a.Uint32Array,"get_Uint8Array":a=>a.Uint8Array,"get_Worker":a=>a.Worker,"get_data":a=>a.data,"get_onmessage":a=>a.onmessage,"get_postMessage":a=>a.postMessage,"get_response":a=>a.response,"get_status":a=>a.status,"js_expr_12c48ca8":()=>a,"js_expr_26f07992":()=>null,"js_expr_28647a4c":()=>false,"js_expr_ba692c1":()=>undefined,"meth_call_0_toString":a=>a.toString(),"meth_call_1_log":(a,b)=>a.log(b),"meth_call_1_postMessage":(a,b)=>a.postMessage(b),"meth_call_1_send":(a,b)=>a.send(b),"meth_call_3_open":(a,b,c,d)=>a.open(b,c,d),"new_1":(a,b)=>new
a(b),"set_onmessage":(a,b)=>a.onmessage=b,"set_responseType":(a,b)=>a.responseType=b}}})(globalThis),"src":"merlin_worker.bc.wasm.assets"});

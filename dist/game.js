(()=>{var lh="169";var Rf=0,Qh=1,Cf=2;var od=1,ch=2,li=3,Ci=0,Ut=1,Dt=2,Qn=0,Ns=1,zs=2,jh=3,eu=4,Pf=5,Ji=100,If=101,Lf=102,Df=103,Uf=104,Ff=200,Nf=201,Bf=202,Of=203,Bl=204,Ol=205,kf=206,zf=207,Hf=208,Gf=209,Vf=210,Wf=211,Xf=212,qf=213,Yf=214,kl=0,zl=1,Hl=2,Hs=3,Gl=4,Vl=5,Wl=6,Xl=7,hh=0,$f=1,Kf=2,Ri=0,uh=1,dh=2,fh=3,er=4,Zf=5,ph=6,mh=7;var ld=300,Gs=301,Vs=302,ql=303,Yl=304,yo=306,ui=1e3,ji=1001,$l=1002,sn=1003,Jf=1004;var sa=1005;var Nn=1006,nl=1007;var es=1008;var di=1009,cd=1010,hd=1011,Nr=1012,gh=1013,ts=1014,Jn=1015,Vn=1016,xh=1017,vh=1018,Ws=1020,ud=35902,dd=1021,fd=1022,yn=1023,pd=1024,md=1025,Bs=1026,Xs=1027,_h=1028,yh=1029,gd=1030,Mh=1031;var bh=1033,Fa=33776,Na=33777,Ba=33778,Oa=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,jl=36196,ec=37492,tc=37496,nc=37808,ic=37809,sc=37810,rc=37811,ac=37812,oc=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,ka=36492,gc=36494,xc=36495,xd=36283,vc=36284,_c=36285,yc=36286;var Ha=2300,Mc=2301,il=2302,tu=2400,nu=2401,iu=2402;var Qf=3200,jf=3201;var Mo=0,ep=1,Ti="",kt="srgb",Ui="srgb-linear",Sh="display-p3",bo="display-p3-linear",Ga="linear",Mt="srgb",Va="rec709",Wa="p3";var ms=7680;var su=519,tp=512,np=513,ip=514,vd=515,sp=516,rp=517,ap=518,op=519,bc=35044;var ru="300 es",hi=2e3,Xa=2001,Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,Pr=Math.PI/180,qs=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function wh(i,e){return(i%e+e)%e}function lp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cp(i,e,t){return i!==e?(t-i)/(e-i):0}function Ir(i,e,t){return(1-t)*i+t*e}function hp(i,e,t,n){return Ir(i,e,1-Math.exp(-t*n))}function up(i,e=1){return e-Math.abs(wh(i,e*2)-e)}function dp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mp(i,e){return i+Math.random()*(e-i)}function gp(i){return i*(.5-Math.random())}function xp(i){i!==void 0&&(au=i);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vp(i){return i*Pr}function _p(i){return i*qs}function yp(i){return(i&i-1)===0&&i!==0}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _d={DEG2RAD:Pr,RAD2DEG:qs,generateUUID:jn,clamp:Zt,euclideanModulo:wh,mapLinear:lp,inverseLerp:cp,lerp:Ir,damp:hp,pingpong:up,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:xp,degToRad:vp,radToDeg:_p,isPowerOfTwo:yp,ceilPowerOfTwo:Mp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:Sp,normalize:xt,denormalize:Bn},ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],M=s[1],x=s[4],y=s[7],A=s[2],E=s[5],T=s[8];return r[0]=a*v+o*M+l*A,r[3]=a*m+o*x+l*E,r[6]=a*g+o*y+l*T,r[1]=c*v+h*M+u*A,r[4]=c*m+h*x+u*E,r[7]=c*g+h*y+u*T,r[2]=d*v+f*M+p*A,r[5]=d*m+f*x+p*E,r[8]=d*g+f*y+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new it;function yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wp(){let i=qa("canvas");return i.style.display="block",i}var ou={};function za(i){i in ou||(ou[i]=!0,console.warn(i))}function Ep(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Tp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ap(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var lu=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cu=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vr={[Ui]:{transfer:Ga,primaries:Va,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[kt]:{transfer:Mt,primaries:Va,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bo]:{transfer:Ga,primaries:Wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(cu),fromReference:i=>i.applyMatrix3(lu)},[Sh]:{transfer:Mt,primaries:Wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(cu),fromReference:i=>i.applyMatrix3(lu).convertLinearToSRGB()}},Rp=new Set([Ui,bo]),ut={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=vr[e].toReference,s=vr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return vr[i].primaries},getTransfer:function(i){return i===Ti?Ga:vr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(vr[e].luminanceCoefficients)}};function Os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,Sc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=qa("canvas")),gs.width=e.width,gs.height=e.height;let n=gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=qa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Os(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cp=0,Ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(al(s[a].image)):r.push(al(s[a]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pp=0,un=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ji,s=ji,r=Nn,a=es,o=yn,l=di,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=jn(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=ld;un.DEFAULT_ANISOTROPY=1;var _t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(f+1)/2,A=(g+1)/2,E=(h+d)/4,T=(u+v)/4,I=(p+m)/4;return x>y&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=T/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=I/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wc=class extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$a=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let m=1-o,g=l*d+c*f+h*p+u*v,M=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let A=Math.sqrt(x),E=Math.atan2(A,g*M);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}let y=o*M;if(l=l*m+d*y,c=c*m+f*y,h=h*m+p*y,u=u*m+v*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new P,hu=new Mn,On=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),aa.subVectors(this.max,_r),xs.subVectors(e.a,_r),vs.subVectors(e.b,_r),_s.subVectors(e.c,_r),yi.subVectors(vs,xs),Mi.subVectors(_s,vs),Wi.subVectors(xs,_s);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Wi.z,Wi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Wi.z,0,-Wi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Wi.y,Wi.x,0];return!ll(t,xs,vs,_s,aa)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,xs,vs,_s,aa))?!1:(oa.crossVectors(yi,Mi),t=[oa.x,oa.y,oa.z],ll(t,xs,vs,_s,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,ra=new On,xs=new P,vs=new P,_s=new P,yi=new P,Mi=new P,Wi=new P,_r=new P,aa=new P,oa=new P,Xi=new P;function ll(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);let o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ip=new On,yr=new P,cl=new P,Ii=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ip.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(cl)),this.expandByPoint(yr.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new P,hl=new P,la=new P,bi=new P,ul=new P,ca=new P,dl=new P,Ka=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hl.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(hl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(la),o=bi.dot(this.direction),l=-bi.dot(la),c=bi.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hl).addScaledVector(la,d),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){ul.subVectors(t,e),ca.subVectors(n,e),dl.crossVectors(ul,ca);let a=this.direction.dot(dl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);let l=o*this.direction.dot(ca.crossVectors(bi,ca));if(l<0)return null;let c=o*this.direction.dot(ul.cross(bi));if(c<0||l+c>a)return null;let h=-o*bi.dot(dl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,p,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Dp)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Si.crossVectors(n,vn),Si.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Si.crossVectors(n,vn)),Si.normalize(),ha.crossVectors(vn,Si),s[0]=Si.x,s[4]=ha.x,s[8]=vn.x,s[1]=Si.y,s[5]=ha.y,s[9]=vn.y,s[2]=Si.z,s[6]=ha.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],M=n[3],x=n[7],y=n[11],A=n[15],E=s[0],T=s[4],I=s[8],O=s[12],_=s[1],S=s[5],H=s[9],B=s[13],W=s[2],j=s[6],z=s[10],re=s[14],G=s[3],ue=s[7],be=s[11],Me=s[15];return r[0]=a*E+o*_+l*W+c*G,r[4]=a*T+o*S+l*j+c*ue,r[8]=a*I+o*H+l*z+c*be,r[12]=a*O+o*B+l*re+c*Me,r[1]=h*E+u*_+d*W+f*G,r[5]=h*T+u*S+d*j+f*ue,r[9]=h*I+u*H+d*z+f*be,r[13]=h*O+u*B+d*re+f*Me,r[2]=p*E+v*_+m*W+g*G,r[6]=p*T+v*S+m*j+g*ue,r[10]=p*I+v*H+m*z+g*be,r[14]=p*O+v*B+m*re+g*Me,r[3]=M*E+x*_+y*W+A*G,r[7]=M*T+x*S+y*j+A*ue,r[11]=M*I+x*H+y*z+A*be,r[15]=M*O+x*B+y*re+A*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15];return p*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],M=u*m*c-v*d*c+v*l*f-o*m*f-u*l*g+o*d*g,x=p*d*c-h*m*c-p*l*f+a*m*f+h*l*g-a*d*g,y=h*v*c-p*u*c+p*o*f-a*v*f-h*o*g+a*u*g,A=p*u*l-h*v*l-p*o*d+a*v*d+h*o*m-a*u*m,E=t*M+n*x+s*y+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=M*T,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*g-n*d*g)*T,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*g+n*l*g)*T,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*T,e[4]=x*T,e[5]=(h*m*r-p*d*r+p*s*f-t*m*f-h*s*g+t*d*g)*T,e[6]=(p*l*r-a*m*r-p*s*c+t*m*c+a*s*g-t*l*g)*T,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*T,e[8]=y*T,e[9]=(p*u*r-h*v*r-p*n*f+t*v*f+h*n*g-t*u*g)*T,e[10]=(a*v*r-p*o*r+p*n*c-t*v*c-a*n*g+t*o*g)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=A*T,e[13]=(h*v*s-p*u*s+p*n*d-t*v*d-h*n*m+t*u*m)*T,e[14]=(p*o*s-a*v*s-p*n*l+t*v*l+a*n*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,v=a*h,m=a*u,g=o*u,M=l*c,x=l*h,y=l*u,A=n.x,E=n.y,T=n.z;return s[0]=(1-(v+g))*A,s[1]=(f+y)*A,s[2]=(p-x)*A,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+g))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(p+x)*T,s[9]=(m-M)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),o=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let c=1/r,h=1/a,u=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=hi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(o===hi)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Xa)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,p,v;if(o===hi)p=(a+r)*u,v=-2*u;else if(o===Xa)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ys=new P,Un=new rt,Lp=new P(0,0,0),Dp=new P(1,1,1),Si=new P,ha=new P,vn=new P,uu=new rt,du=new Mn,kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Up=0,fu=new P,Ms=new Mn,ri=new rt,ua=new P,Mr=new P,Fp=new P,Np=new Mn,pu=new P(1,0,0),mu=new P(0,1,0),gu=new P(0,0,1),xu={type:"added"},Bp={type:"removed"},bs={type:"childadded",child:null},fl={type:"childremoved",child:null},Wt=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new kn,n=new Mn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new it}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Mr,ua,this.up):ri.lookAt(ua,Mr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ri),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bp),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new P(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new P,ai=new P,pl=new P,oi=new P,Ss=new P,ws=new P,vu=new P,ml=new P,gl=new P,xl=new P,vl=new _t,_l=new _t,yl=new _t,Ai=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ai.subVectors(n,t),pl.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(ai),l=Fn.dot(pl),c=ai.dot(ai),h=ai.dot(pl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return vl.setScalar(0),_l.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(yl,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ai.subVectors(e,t),Fn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),ws.subVectors(r,n),ml.subVectors(e,n);let l=Ss.dot(ml),c=ws.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,s);let h=Ss.dot(gl),u=ws.dot(gl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ss,a);xl.subVectors(e,r);let f=Ss.dot(xl),p=ws.dot(xl);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ws,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return vu.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(vu,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(Ss,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=wh(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ml(a,r,e+1/3),this.g=Ml(a,r,e),this.b=Ml(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=rl(e.r),this.g=rl(e.g),this.b=rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ut.fromWorkingColorSpace(nn.copy(this),e),Math.round(Zt(nn.r*255,0,255))*65536+Math.round(Zt(nn.g*255,0,255))*256+Math.round(Zt(nn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=kt){ut.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(da);let n=Ir(wi.h,da.h,t),s=Ir(wi.s,da.s,t),r=Ir(wi.l,da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Se;Se.NAMES=Md;var Op=0,zn=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ns,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=Ol,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bt=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new P,fa=new ie,dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}};var Ja=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qa=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},kp=0,Rn=new rt,bl=new Wt,Es=new P,_n=new On,br=new On,Kt=new P,mt=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Qa:Ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(_n.min,br.min),_n.expandByPoint(Kt),Kt.addVectors(_n.max,br.max),_n.expandByPoint(Kt)):(_n.expandByPoint(br.min),_n.expandByPoint(br.max))}_n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),Kt.add(Es)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,d=new ie,f=new ie,p=new ie,v=new P,m=new P;function g(I,O,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,O),p.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),o[I].add(v),o[O].add(v),o[_].add(v),l[I].add(m),l[O].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,O=M.length;I<O;++I){let _=M[I],S=_.start,H=_.count;for(let B=S,W=S+H;B<W;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new P,y=new P,A=new P,E=new P;function T(I){A.fromBufferAttribute(s,I),E.copy(A);let O=o[I];x.copy(O),x.sub(A.multiplyScalar(A.dot(O))).normalize(),y.crossVectors(E,O);let S=y.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,S)}for(let I=0,O=M.length;I<O;++I){let _=M[I],S=_.start,H=_.count;for(let B=S,W=S+H;B<W;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_u=new rt,qi=new Ka,pa=new Ii,yu=new P,ma=new P,ga=new P,xa=new P,Sl=new P,va=new P,Mu=new P,_a=new P,de=class extends Wt{constructor(e=new mt,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Sl.fromBufferAttribute(u,e),a?va.addScaledVector(Sl,h):va.addScaledVector(Sl.sub(t),h))}t.add(va)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(pa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(pa,yu)===null||qi.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),qi.copy(e.ray).applyMatrix4(_u),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,A=x;y<A;y+=3){let E=o.getX(y),T=o.getX(y+1),I=o.getX(y+2);s=ya(this,g,e,n,c,h,u,E,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let M=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=ya(this,a,e,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,A=x;y<A;y+=3){let E=y,T=y+1,I=y+2;s=ya(this,g,e,n,c,h,u,E,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let M=m,x=m+1,y=m+2;s=ya(this,a,e,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function zp(i,e,t,n,s,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ci,o),l===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:i}}function ya(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ma),i.getVertexPosition(l,ga),i.getVertexPosition(c,xa);let h=zp(i,e,t,n,ma,ga,xa,Mu);if(h){let u=new P;Ai.getBarycoord(Mu,ma,ga,xa,u),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,l,c,u,new ie)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,l,c,u,new ie)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Ai.getNormal(ma,ga,xa,d.normal),h.face=d,h.barycoord=u}return h}var yt=class i extends mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function p(v,m,g,M,x,y,A,E,T,I,O){let _=y/T,S=A/I,H=y/2,B=A/2,W=E/2,j=T+1,z=I+1,re=0,G=0,ue=new P;for(let be=0;be<z;be++){let Me=be*S-B;for(let et=0;et<j;et++){let Je=et*_-H;ue[v]=Je*M,ue[m]=Me*x,ue[g]=W,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[g]=E>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(et/T),u.push(1-be/I),re+=1}}for(let be=0;be<I;be++)for(let Me=0;Me<T;Me++){let et=d+Me+j*be,Je=d+Me+j*(be+1),Z=d+(Me+1)+j*(be+1),ae=d+(Me+1)+j*be;l.push(et,Je,ae),l.push(Je,Z,ae),G+=6}o.addGroup(f,G,O),f+=G,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Ys(i[t]);for(let s in n)e[s]=n[s]}return e}function Hp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Fi={clone:Ys,merge:ln},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ja=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new P,bu=new ie,Su=new ie,Jt=class extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,bu,Su),t.subVectors(Su,bu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ts=-90,As=1,Tc=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Ts,As,e,t);s.layers=this.layers,this.add(s);let r=new Jt(Ts,As,e,t);r.layers=this.layers,this.add(r);let a=new Jt(Ts,As,e,t);a.layers=this.layers,this.add(a);let o=new Jt(Ts,As,e,t);o.layers=this.layers,this.add(o);let l=new Jt(Ts,As,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},eo=class extends un{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ac=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new eo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yt(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Qn});r.uniforms.tEquirect.value=t;let a=new de(s,r),o=t.minFilter;return t.minFilter===es&&(t.minFilter=Nn),new Tc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wl=new P,Wp=new P,Xp=new it,ci=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wl.subVectors(n,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xp.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Ii,Ma=new P,Br=class{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],v=s[10],m=s[11],g=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-g).normalize(),n[1].setComponents(l+r,d+c,m+f,y+g).normalize(),n[2].setComponents(l+a,d+h,m+p,y+M).normalize(),n[3].setComponents(l-a,d-h,m-p,y-M).normalize(),n[4].setComponents(l-o,d-u,m-v,y-x).normalize(),t===hi)n[5].setComponents(l+o,d+u,m+v,y+x).normalize();else if(t===Xa)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Et=class i extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let M=g*d-a;for(let x=0;x<c;x++){let y=x*u-r;p.push(y,-M,0),v.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let x=M+c*g,y=M+c*(g+1),A=M+1+c*(g+1),E=M+1+c*g;f.push(x,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Yp,alphahash_pars_fragment:$p,alphamap_fragment:Kp,alphamap_pars_fragment:Zp,alphatest_fragment:Jp,alphatest_pars_fragment:Qp,aomap_fragment:jp,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:v0,displacementmap_pars_vertex:_0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:b0,colorspace_fragment:S0,colorspace_pars_fragment:w0,envmap_fragment:E0,envmap_common_pars_fragment:T0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:k0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:I0,fog_fragment:L0,fog_pars_fragment:D0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:F0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:B0,lights_pars_begin:O0,lights_toon_fragment:z0,lights_toon_pars_fragment:H0,lights_phong_fragment:G0,lights_phong_pars_fragment:V0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:$0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:Q0,map_fragment:j0,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:_m,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:bm,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Um,skinnormal_vertex:Fm,specularmap_fragment:Nm,specularmap_pars_fragment:Bm,tonemapping_fragment:Om,tonemapping_pars_fragment:km,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:$m,backgroundCube_frag:Km,cube_vert:Zm,cube_frag:Jm,depth_vert:Qm,depth_frag:jm,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:xg,meshtoon_vert:vg,meshtoon_frag:_g,points_vert:yg,points_frag:Mg,shadow_vert:bg,shadow_frag:Sg,sprite_vert:wg,sprite_frag:Eg},we={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Zn={basic:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ln([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ln([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Se(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ln([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ln([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ln([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ln([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:ln([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:ln([we.lights,we.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Zn.physical={uniforms:ln([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var ba={r:0,b:0,g:0},$i=new kn,Tg=new rt;function Ag(i,e,t,n,s,r,a){let o=new Se(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1,y=p(M);y===null?g(o,l):y&&y.isColor&&(g(y,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){let y=p(x);y&&(y.isCubeTexture||y.mapping===yo)?(h===void 0&&(h=new de(new yt(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Ys(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler($i)),h.material.toneMapped=ut.getTransfer(y.colorSpace)!==Mt,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new de(new Et(2,2),new wt({name:"BackgroundMaterial",uniforms:Ys(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ut.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,x){M.getRGB(ba,bd(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(o,l)},render:v,addToRenderList:m}}function Rg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,S,H,B,W){let j=!1,z=u(B,H,S);r!==z&&(r=z,c(r.object)),j=f(_,B,H,W),j&&p(_,B,H,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(_,S,H,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,H){let B=H.wireframe===!0,W=n[_.id];W===void 0&&(W={},n[_.id]=W);let j=W[S.id];j===void 0&&(j={},W[S.id]=j);let z=j[B];return z===void 0&&(z=d(l()),j[B]=z),z}function d(_){let S=[],H=[],B=[];for(let W=0;W<t;W++)S[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:H,attributeDivisors:B,object:_,attributes:{},index:null}}function f(_,S,H,B){let W=r.attributes,j=S.attributes,z=0,re=H.getAttributes();for(let G in re)if(re[G].location>=0){let be=W[G],Me=j[G];if(Me===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Me=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Me=_.instanceColor)),be===void 0||be.attribute!==Me||Me&&be.data!==Me.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function p(_,S,H,B){let W={},j=S.attributes,z=0,re=H.getAttributes();for(let G in re)if(re[G].location>=0){let be=j[G];be===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(be=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(be=_.instanceColor));let Me={};Me.attribute=be,be&&be.data&&(Me.data=be.data),W[G]=Me,z++}r.attributes=W,r.attributesNum=z,r.index=B}function v(){let _=r.newAttributes;for(let S=0,H=_.length;S<H;S++)_[S]=0}function m(_){g(_,0)}function g(_,S){let H=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;H[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),W[_]!==S&&(i.vertexAttribDivisor(_,S),W[_]=S)}function M(){let _=r.newAttributes,S=r.enabledAttributes;for(let H=0,B=S.length;H<B;H++)S[H]!==_[H]&&(i.disableVertexAttribArray(H),S[H]=0)}function x(_,S,H,B,W,j,z){z===!0?i.vertexAttribIPointer(_,S,H,W,j):i.vertexAttribPointer(_,S,H,B,W,j)}function y(_,S,H,B){v();let W=B.attributes,j=H.getAttributes(),z=S.defaultAttributeValues;for(let re in j){let G=j[re];if(G.location>=0){let ue=W[re];if(ue===void 0&&(re==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),re==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),ue!==void 0){let be=ue.normalized,Me=ue.itemSize,et=e.get(ue);if(et===void 0)continue;let Je=et.buffer,Z=et.type,ae=et.bytesPerElement,Te=Z===i.INT||Z===i.UNSIGNED_INT||ue.gpuType===gh;if(ue.isInterleavedBufferAttribute){let le=ue.data,Xe=le.stride,Fe=ue.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<G.locationSize;Ve++)g(G.location+Ve,le.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<G.locationSize;Ve++)m(G.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Ve=0;Ve<G.locationSize;Ve++)x(G.location+Ve,Me/G.locationSize,Z,be,Xe*ae,(Fe+Me/G.locationSize*Ve)*ae,Te)}else{if(ue.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)g(G.location+le,ue.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let le=0;le<G.locationSize;le++)x(G.location+le,Me/G.locationSize,Z,be,Me*ae,Me/G.locationSize*le*ae,Te)}}else if(z!==void 0){let be=z[re];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(G.location,be);break;case 3:i.vertexAttrib3fv(G.location,be);break;case 4:i.vertexAttrib4fv(G.location,be);break;default:i.vertexAttrib1fv(G.location,be)}}}}M()}function A(){I();for(let _ in n){let S=n[_];for(let H in S){let B=S[H];for(let W in B)h(B[W].object),delete B[W];delete S[H]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let S=n[_.id];for(let H in S){let B=S[H];for(let W in B)h(B[W].object),delete B[W];delete S[H]}delete n[_.id]}function T(_){for(let S in n){let H=n[S];if(H[_.id]===void 0)continue;let B=H[_.id];for(let W in B)h(B[W].object),delete B[W];delete H[_.id]}}function I(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Cg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];for(let v=0;v<d.length;v++)t.update(p,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let I=T===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==di&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Jn&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function Ig(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ci,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,x=M*4,y=g.clippingState||null;l.value=y,y=h(p,d,x,f);for(let A=0;A!==x;++A)y[A]=t[A];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,y=f;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Lg(i){let e=new WeakMap;function t(a,o){return o===ql?a.mapping=Gs:o===Yl&&(a.mapping=Vs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ql||o===Yl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ac(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $s=class extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=4,wu=[.125,.215,.35,.446,.526,.582],Qi=20,El=new $s,Eu=new Se,Tl=null,Al=0,Rl=0,Cl=!1,Zi=(1+Math.sqrt(5))/2,Rs=1/Zi,Tu=[new P(-Zi,Rs,0),new P(Zi,Rs,0),new P(-Rs,0,Zi),new P(Rs,0,Zi),new P(0,Zi,-Rs),new P(0,Zi,Rs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ns=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tl,Al,Rl),this._renderer.xr.enabled=Cl,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Vn,format:yn,colorSpace:Ui,depthBuffer:!1},s=Au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Ug(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,s){let o=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Ri,h.autoClear=!1;let f=new bt({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),p=new de(new yt,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Eu),v=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):M===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let x=this._cubeSize;Sa(s,M*x,g>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,El)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tu[(s-r-1)%Tu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),v=r/p,m=isFinite(r)?1+Math.floor(h*v):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);let g=[],M=0;for(let T=0;T<Qi;++T){let I=T/v,O=Math.exp(-I*I/2);g.push(O),T===0?M+=O:T<m&&(M+=2*O)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;let y=this._sizeLods[s],A=3*y*(s>x-Us?s-x+Us:0),E=4*(this._cubeSize-y);Sa(t,A,E,3*y,2*y),l.setRenderTarget(t),l.render(u,El)}};function Dg(i){let e=[],t=[],n=[],s=i,r=i-Us+1+wu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Us?l=wu[a-i+Us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,m=2,g=1,M=new Float32Array(v*p*f),x=new Float32Array(m*p*f),y=new Float32Array(g*p*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,I=E>2?0:-1,O=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(O,v*p*E),x.set(d,m*p*E);let _=[E,E,E,E,E,E];y.set(_,g*p*E)}let A=new mt;A.setAttribute("position",new dt(M,v)),A.setAttribute("uv",new dt(x,m)),A.setAttribute("faceIndex",new dt(y,g)),e.push(A),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Au(i,e,t){let n=new cn(i,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ug(i,e,t){let n=new Float32Array(Qi),s=new P(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ru(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cu(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ql||l===Yl,h=l===Gs||l===Vs;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ns(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ns(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ng(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&za("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let v=f[p];for(let m=0,g=v.length;m<g;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let x=0,y=M.length;x<y;x+=3){let A=M[x+0],E=M[x+1],T=M[x+2];d.push(A,E,E,T,T,A)}}else if(p!==void 0){let M=p.array;v=p.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let A=x+0,E=x+1,T=x+2;d.push(A,E,E,T,T,A)}}else return;let m=new(yd(d)?Qa:Ja)(d,1);m.version=v;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Og(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function u(d,f,p,v){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let g=0;for(let M=0;M<p;M++)g+=f[M];for(let M=0;M<v.length;M++)t.update(g,n,v[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zg(i,e,t){let n=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let O=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*A*4*u),T=new $a(E,y,A,u);T.type=Jn,T.needsUpdate=!0;let I=x*4;for(let _=0;_<u;_++){let S=m[_],H=g[_],B=M[_],W=y*A*4*_;for(let j=0;j<S.count;j++){let z=j*I;f===!0&&(s.fromBufferAttribute(S,j),E[W+z+0]=s.x,E[W+z+1]=s.y,E[W+z+2]=s.z,E[W+z+3]=0),p===!0&&(s.fromBufferAttribute(H,j),E[W+z+4]=s.x,E[W+z+5]=s.y,E[W+z+6]=s.z,E[W+z+7]=0),v===!0&&(s.fromBufferAttribute(B,j),E[W+z+8]=s.x,E[W+z+9]=s.y,E[W+z+10]=s.z,E[W+z+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ie(y,A)},n.set(o,d),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var to=class extends un{constructor(e,t,n,s,r,a,o,l,c,h=Bs){if(h!==Bs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=ts),n===void 0&&h===Xs&&(n=Ws),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wd=new un,Pu=new to(1,1),Ed=new $a,Td=new Ec,Ad=new eo,Iu=[],Lu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Fu=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function So(i,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),qt(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),qt(t,n)}}function $g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Du.set(n),i.uniformMatrix4fv(this.addr,!1,Du),qt(t,n)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pu.compareFunction=vd,r=Pu):r=wd,t.setTexture2D(e||r,s)}function sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Td,s)}function rx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ad,s)}function ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ed,s)}function ox(i){switch(i){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ax}}function lx(i,e){i.uniform1fv(this.addr,e)}function cx(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function hx(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function ux(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function dx(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fx(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function px(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mx(i,e){i.uniform1iv(this.addr,e)}function gx(i,e){i.uniform2iv(this.addr,e)}function xx(i,e){i.uniform3iv(this.addr,e)}function vx(i,e){i.uniform4iv(this.addr,e)}function _x(i,e){i.uniform1uiv(this.addr,e)}function yx(i,e){i.uniform2uiv(this.addr,e)}function Mx(i,e){i.uniform3uiv(this.addr,e)}function bx(i,e){i.uniform4uiv(this.addr,e)}function Sx(i,e,t){let n=this.cache,s=e.length,r=So(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||wd,r[a])}function wx(i,e,t){let n=this.cache,s=e.length,r=So(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Td,r[a])}function Ex(i,e,t){let n=this.cache,s=e.length,r=So(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ad,r[a])}function Tx(i,e,t){let n=this.cache,s=e.length,r=So(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ed,r[a])}function Ax(i){switch(i){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return vx;case 5125:return _x;case 36294:return yx;case 36295:return Mx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function Nu(i,e){i.seq.push(e),i.map[e.id]=e}function Rx(i,e,t){let n=i.name,s=n.length;for(Pl.lastIndex=0;;){let r=Pl.exec(n),a=Pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nu(t,c===void 0?new Rc(o,i,e):new Cc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Pc(o),Nu(t,u)),t=u}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Rx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Bu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cx=37297,Px=0;function Ix(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Lx(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===Wa&&t===Va?n="LinearDisplayP3ToLinearSRGB":e===Va&&t===Wa&&(n="LinearSRGBToLinearDisplayP3"),i){case Ui:case bo:return[n,"LinearTransferOETF"];case kt:case Sh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ou(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ix(i.getShaderSource(e),a)}else return s}function Dx(i,e){let t=Lx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ux(i,e){let t;switch(e){case uh:t="Linear";break;case dh:t="Reinhard";break;case fh:t="Cineon";break;case er:t="ACESFilmic";break;case ph:t="AgX";break;case mh:t="Neutral";break;case Zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wa=new P;function Fx(){ut.getLuminanceCoefficients(wa);let i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Bx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ox(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cr(i){return i!==""}function ku(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(kx,Hx)}var zx=new Map;function Hx(i,e){let t=nt[e];if(t===void 0){let n=zx.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}var Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(i){return i.replace(Gx,Vx)}function Vx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Xx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:e="ENVMAP_BLENDING_MULTIPLY";break;case $f:e="ENVMAP_BLENDING_MIX";break;case Kf:e="ENVMAP_BLENDING_ADD";break}return e}function $x(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Wx(t),c=Xx(t),h=qx(t),u=Yx(t),d=$x(t),f=Nx(t),p=Bx(r),v=s.createProgram(),m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Cr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Cr).join(`
`),g.length>0&&(g+=`
`)):(m=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),g=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Dx("linearToOutputTexel",t.outputColorSpace),Fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Ic(a),a=ku(a,t),a=zu(a,t),o=Ic(o),o=ku(o,t),o=zu(o,t),a=Hu(a),o=Hu(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=M+m+a,y=M+g+o,A=Bu(s,s.VERTEX_SHADER,x),E=Bu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(S){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(A).trim(),W=s.getShaderInfoLog(E).trim(),j=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,E);else{let re=Ou(s,A,"vertex"),G=Ou(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+H+`
`+re+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||W==="")&&(z=!1);z&&(S.diagnostics={runnable:j,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(A),s.deleteShader(E),I=new ks(s,v),O=Ox(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Cx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var Zx=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}};function Jx(i,e,t,n,s,r,a){let o=new Za,l=new Lc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,H,B,W){let j=B.fog,z=W.geometry,re=_.isMeshStandardMaterial?B.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||re),ue=G&&G.mapping===yo?G.image.height:null,be=v[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let Me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=Me!==void 0?Me.length:0,Je=0;z.morphAttributes.position!==void 0&&(Je=1),z.morphAttributes.normal!==void 0&&(Je=2),z.morphAttributes.color!==void 0&&(Je=3);let Z,ae,Te,le;if(be){let Nt=Zn[be];Z=Nt.vertexShader,ae=Nt.fragmentShader}else Z=_.vertexShader,ae=_.fragmentShader,l.update(_),Te=l.getVertexShaderID(_),le=l.getFragmentShaderID(_);let Xe=i.getRenderTarget(),Fe=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,We=!!_.map,J=!!_.matcap,C=!!G,ce=!!_.aoMap,me=!!_.lightMap,se=!!_.bumpMap,ge=!!_.normalMap,Ue=!!_.displacementMap,Ae=!!_.emissiveMap,R=!!_.metalnessMap,b=!!_.roughnessMap,k=_.anisotropy>0,K=_.clearcoat>0,te=_.dispersion>0,Q=_.iridescence>0,Le=_.sheen>0,_e=_.transmission>0,Re=k&&!!_.anisotropyMap,tt=K&&!!_.clearcoatMap,he=K&&!!_.clearcoatNormalMap,Ee=K&&!!_.clearcoatRoughnessMap,Oe=Q&&!!_.iridescenceMap,ze=Q&&!!_.iridescenceThicknessMap,D=Le&&!!_.sheenColorMap,ee=Le&&!!_.sheenRoughnessMap,fe=!!_.specularMap,De=!!_.specularColorMap,U=!!_.specularIntensityMap,pe=_e&&!!_.transmissionMap,Y=_e&&!!_.thicknessMap,ne=!!_.gradientMap,ye=!!_.alphaMap,xe=_.alphaTest>0,je=!!_.alphaHash,Tt=!!_.extensions,Vt=Ri;_.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let lt={shaderID:be,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:ae,defines:_.defines,customVertexShaderID:Te,customFragmentShaderID:le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&W.instanceColor!==null,instancingMorph:Fe&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Xe===null?i.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Ui,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:J,envMap:C,envMapMode:C&&G.mapping,envMapCubeUVHeight:ue,aoMap:ce,lightMap:me,bumpMap:se,normalMap:ge,displacementMap:f&&Ue,emissiveMap:Ae,normalMapObjectSpace:ge&&_.normalMapType===ep,normalMapTangentSpace:ge&&_.normalMapType===Mo,metalnessMap:R,roughnessMap:b,anisotropy:k,anisotropyMap:Re,clearcoat:K,clearcoatMap:tt,clearcoatNormalMap:he,clearcoatRoughnessMap:Ee,dispersion:te,iridescence:Q,iridescenceMap:Oe,iridescenceThicknessMap:ze,sheen:Le,sheenColorMap:D,sheenRoughnessMap:ee,specularMap:fe,specularColorMap:De,specularIntensityMap:U,transmission:_e,transmissionMap:pe,thicknessMap:Y,gradientMap:ne,opaque:_.transparent===!1&&_.blending===Ns&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:xe,alphaHash:je,combine:_.combine,mapUv:We&&m(_.map.channel),aoMapUv:ce&&m(_.aoMap.channel),lightMapUv:me&&m(_.lightMap.channel),bumpMapUv:se&&m(_.bumpMap.channel),normalMapUv:ge&&m(_.normalMap.channel),displacementMapUv:Ue&&m(_.displacementMap.channel),emissiveMapUv:Ae&&m(_.emissiveMap.channel),metalnessMapUv:R&&m(_.metalnessMap.channel),roughnessMapUv:b&&m(_.roughnessMap.channel),anisotropyMapUv:Re&&m(_.anisotropyMap.channel),clearcoatMapUv:tt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:D&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&m(_.sheenRoughnessMap.channel),specularMapUv:fe&&m(_.specularMap.channel),specularColorMapUv:De&&m(_.specularColorMap.channel),specularIntensityMapUv:U&&m(_.specularIntensityMap.channel),transmissionMapUv:pe&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:ye&&m(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ge||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(We||ye),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dt,flipSided:_.side===Ut,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function M(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)S.push(H),S.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(x(S,_),y(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function A(_){let S=v[_.type],H;if(S){let B=Zn[S];H=Fi.clone(B.uniforms)}else H=_.uniforms;return H}function E(_,S){let H;for(let B=0,W=h.length;B<W;B++){let j=h[B];if(j.cacheKey===S){H=j,++H.usedTimes;break}}return H===void 0&&(H=new Kx(i,S,_,r),h.push(H)),H}function T(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:A,acquireProgram:E,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:O}}function Qx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,p,v,m){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},i[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=v,g.group=m),e++,g}function o(u,d,f,p,v,m){let g=a(u,d,f,p,v,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(u,d,f,p,v,m){let g=a(u,d,f,p,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||jx),n.length>1&&n.sort(d||Vu),s.length>1&&s.sort(d||Vu)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function e1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wu,i.set(n,[a])):s>=r.length?(a=new Wu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function t1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function n1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var i1=0;function s1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r1(i){let e=new t1,t=n1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new rt,a=new rt;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,M=0,x=0,y=0,A=0,E=0,T=0;c.sort(s1);for(let O=0,_=c.length;O<_;O++){let S=c[O],H=S.color,B=S.intensity,W=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=H.r*B,u+=H.g*B,d+=H.b*B;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],B);T++}else if(S.isDirectionalLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let re=S.shadow,G=t.get(S);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=S.shadow.matrix,M++}n.directional[f]=z,f++}else if(S.isSpotLight){let z=e.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(H).multiplyScalar(B),z.distance=W,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[v]=z;let re=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,re.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[v]=re.matrix,S.castShadow){let G=t.get(S);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=j,y++}v++}else if(S.isRectAreaLight){let z=e.get(S);z.color.copy(H).multiplyScalar(B),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=z,m++}else if(S.isPointLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let re=S.shadow,G=t.get(S);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,G.shadowCameraNear=re.camera.near,G.shadowCameraFar=re.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=S.shadow.matrix,x++}n.point[p]=z,p++}else if(S.isHemisphereLight){let z=e.get(S);z.skyColor.copy(S.color).multiplyScalar(B),z.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[g]=z,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=T,n.version=i1++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,m=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let x=c[g];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Xu(i){let e=new r1(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function a1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Xu(i),e.set(s,[o])):r>=a.length?(o=new Xu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Uc=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fc=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},o1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c1(i,e,t){let n=new Br,s=new ie,r=new ie,a=new _t,o=new Uc({depthPacking:jf}),l=new Fc,c={},h=t.maxTextureSize,u={[Ci]:Ut,[Ut]:Ci,[Dt]:Dt},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:o1,fragmentShader:l1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new mt;p.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new de(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let g=this.type;this.render=function(E,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let O=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Qn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=g!==li&&this.type===li,W=g===li&&this.type!==li;for(let j=0,z=E.length;j<z;j++){let re=E[j],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||B===!0||W===!0){let Me=this.type!==li?{minFilter:sn,magFilter:sn}:{};G.map!==null&&G.map.dispose(),G.map=new cn(s.x,s.y,Me),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let be=G.getViewportCount();for(let Me=0;Me<be;Me++){let et=G.getViewport(Me);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),H.viewport(a),G.updateMatrices(re,Me),n=G.getFrustum(),y(T,I,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===li&&M(G,I),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(O,_,S)};function M(E,T){let I=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new cn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,I,f,v,null)}function x(E,T,I,O){let _=null,S=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)_=S;else if(_=I.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=_.uuid,B=T.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let j=W[B];j===void 0&&(j=_.clone(),W[B]=j,T.addEventListener("dispose",A)),_=j}if(_.visible=T.visible,_.wireframe=T.wireframe,O===li?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let H=i.properties.get(_);H.light=I}return _}function y(E,T,I,O,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let B=e.update(E),W=E.material;if(Array.isArray(W)){let j=B.groups;for(let z=0,re=j.length;z<re;z++){let G=j[z],ue=W[G.materialIndex];if(ue&&ue.visible){let be=x(E,ue,O,_);E.onBeforeShadow(i,E,T,I,B,be,G),i.renderBufferDirect(I,null,B,be,E,G),E.onAfterShadow(i,E,T,I,B,be,G)}}}else if(W.visible){let j=x(E,W,O,_);E.onBeforeShadow(i,E,T,I,B,j,null),i.renderBufferDirect(I,null,B,j,E,null),E.onAfterShadow(i,E,T,I,B,j,null)}}let H=E.children;for(let B=0,W=H.length;B<W;B++)y(H[B],T,I,O,_)}function A(E){E.target.removeEventListener("dispose",A);for(let I in c){let O=c[I],_=E.target.uuid;_ in O&&(O[_].dispose(),delete O[_])}}}var h1={[kl]:zl,[Hl]:Wl,[Gl]:Xl,[Hs]:Vl,[zl]:kl,[Wl]:Hl,[Xl]:Gl,[Vl]:Hs};function u1(i){function e(){let U=!1,pe=new _t,Y=null,ne=new _t(0,0,0,0);return{setMask:function(ye){Y!==ye&&!U&&(i.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){U=ye},setClear:function(ye,xe,je,Tt,Vt){Vt===!0&&(ye*=Tt,xe*=Tt,je*=Tt),pe.set(ye,xe,je,Tt),ne.equals(pe)===!1&&(i.clearColor(ye,xe,je,Tt),ne.copy(pe))},reset:function(){U=!1,Y=null,ne.set(-1,0,0,0)}}}function t(){let U=!1,pe=!1,Y=null,ne=null,ye=null;return{setReversed:function(xe){pe=xe},setTest:function(xe){xe?Te(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(xe){Y!==xe&&!U&&(i.depthMask(xe),Y=xe)},setFunc:function(xe){if(pe&&(xe=h1[xe]),ne!==xe){switch(xe){case kl:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case Hl:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=xe}},setLocked:function(xe){U=xe},setClear:function(xe){ye!==xe&&(i.clearDepth(xe),ye=xe)},reset:function(){U=!1,Y=null,ne=null,ye=null}}}function n(){let U=!1,pe=null,Y=null,ne=null,ye=null,xe=null,je=null,Tt=null,Vt=null;return{setTest:function(lt){U||(lt?Te(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!U&&(i.stencilMask(lt),pe=lt)},setFunc:function(lt,Nt,Tn){(Y!==lt||ne!==Nt||ye!==Tn)&&(i.stencilFunc(lt,Nt,Tn),Y=lt,ne=Nt,ye=Tn)},setOp:function(lt,Nt,Tn){(xe!==lt||je!==Nt||Tt!==Tn)&&(i.stencilOp(lt,Nt,Tn),xe=lt,je=Nt,Tt=Tn)},setLocked:function(lt){U=lt},setClear:function(lt){Vt!==lt&&(i.clearStencil(lt),Vt=lt)},reset:function(){U=!1,pe=null,Y=null,ne=null,ye=null,xe=null,je=null,Tt=null,Vt=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,p=!1,v=null,m=null,g=null,M=null,x=null,y=null,A=null,E=new Se(0,0,0),T=0,I=!1,O=null,_=null,S=null,H=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,z=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=z>=1):re.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=z>=2);let G=null,ue={},be=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),et=new _t().fromArray(be),Je=new _t().fromArray(Me);function Z(U,pe,Y,ne){let ye=new Uint8Array(4),xe=i.createTexture();i.bindTexture(U,xe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<Y;je++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(pe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return xe}let ae={};ae[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Te(i.DEPTH_TEST),r.setFunc(Hs),me(!1),se(Qh),Te(i.CULL_FACE),C(Qn);function Te(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function le(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Xe(U,pe){return h[U]!==pe?(i.bindFramebuffer(U,pe),h[U]=pe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Fe(U,pe){let Y=d,ne=!1;if(U){Y=u.get(pe),Y===void 0&&(Y=[],u.set(pe,Y));let ye=U.textures;if(Y.length!==ye.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,je=ye.length;xe<je;xe++)Y[xe]=i.COLOR_ATTACHMENT0+xe;Y.length=ye.length,ne=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Y)}function Ve(U){return f!==U?(i.useProgram(U),f=U,!0):!1}let We={[Ji]:i.FUNC_ADD,[If]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};We[Df]=i.MIN,We[Uf]=i.MAX;let J={[Ff]:i.ZERO,[Nf]:i.ONE,[Bf]:i.SRC_COLOR,[Bl]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[Hf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[qf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,pe,Y,ne,ye,xe,je,Tt,Vt,lt){if(U===Qn){p===!0&&(le(i.BLEND),p=!1);return}if(p===!1&&(Te(i.BLEND),p=!0),U!==Pf){if(U!==v||lt!==I){if((m!==Ji||x!==Ji)&&(i.blendEquation(i.FUNC_ADD),m=Ji,x=Ji),lt)switch(U){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,M=null,y=null,A=null,E.set(0,0,0),T=0,v=U,I=lt}return}ye=ye||pe,xe=xe||Y,je=je||ne,(pe!==m||ye!==x)&&(i.blendEquationSeparate(We[pe],We[ye]),m=pe,x=ye),(Y!==g||ne!==M||xe!==y||je!==A)&&(i.blendFuncSeparate(J[Y],J[ne],J[xe],J[je]),g=Y,M=ne,y=xe,A=je),(Tt.equals(E)===!1||Vt!==T)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Vt),E.copy(Tt),T=Vt),v=U,I=!1}function ce(U,pe){U.side===Dt?le(i.CULL_FACE):Te(i.CULL_FACE);let Y=U.side===Ut;pe&&(Y=!Y),me(Y),U.blending===Ns&&U.transparent===!1?C(Qn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let ne=U.stencilWrite;a.setTest(ne),ne&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function se(U){U!==Rf?(Te(i.CULL_FACE),U!==_&&(U===Qh?i.cullFace(i.BACK):U===Cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),_=U}function ge(U){U!==S&&(j&&i.lineWidth(U),S=U)}function Ue(U,pe,Y){U?(Te(i.POLYGON_OFFSET_FILL),(H!==pe||B!==Y)&&(i.polygonOffset(pe,Y),H=pe,B=Y)):le(i.POLYGON_OFFSET_FILL)}function Ae(U){U?Te(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+W-1),G!==U&&(i.activeTexture(U),G=U)}function b(U,pe,Y){Y===void 0&&(G===null?Y=i.TEXTURE0+W-1:Y=G);let ne=ue[Y];ne===void 0&&(ne={type:void 0,texture:void 0},ue[Y]=ne),(ne.type!==U||ne.texture!==pe)&&(G!==Y&&(i.activeTexture(Y),G=Y),i.bindTexture(U,pe||ae[U]),ne.type=U,ne.texture=pe)}function k(){let U=ue[G];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function D(U){Je.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Je.copy(U))}function ee(U,pe){let Y=l.get(pe);Y===void 0&&(Y=new WeakMap,l.set(pe,Y));let ne=Y.get(U);ne===void 0&&(ne=i.getUniformBlockIndex(pe,U.name),Y.set(U,ne))}function fe(U,pe){let ne=l.get(pe).get(U);o.get(pe)!==ne&&(i.uniformBlockBinding(pe,ne,U.__bindingPointIndex),o.set(pe,ne))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,ue={},h={},u=new WeakMap,d=[],f=null,p=!1,v=null,m=null,g=null,M=null,x=null,y=null,A=null,E=new Se(0,0,0),T=0,I=!1,O=null,_=null,S=null,H=null,B=null,et.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Te,disable:le,bindFramebuffer:Xe,drawBuffers:Fe,useProgram:Ve,setBlending:C,setMaterial:ce,setFlipSided:me,setCullFace:se,setLineWidth:ge,setPolygonOffset:Ue,setScissorTest:Ae,activeTexture:R,bindTexture:b,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:Ee,texImage3D:Oe,updateUBOMapping:ee,uniformBlockBinding:fe,texStorage2D:tt,texStorage3D:he,texSubImage2D:Q,texSubImage3D:Le,compressedTexSubImage2D:_e,compressedTexSubImage3D:Re,scissor:ze,viewport:D,reset:De}}function qu(i,e,t,n){let s=d1(n);switch(t){case dd:return i*e;case pd:return i*e;case md:return i*e*2;case _h:return i*e/s.components*s.byteLength;case yh:return i*e/s.components*s.byteLength;case gd:return i*e*2/s.components*s.byteLength;case Mh:return i*e*2/s.components*s.byteLength;case fd:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case bh:return i*e*4/s.components*s.byteLength;case Fa:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Ql:return Math.max(i,16)*Math.max(e,8)/4;case Kl:case Jl:return Math.max(i,8)*Math.max(e,8)/2;case jl:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ka:case gc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xd:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _c:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d1(i){switch(i){case di:case cd:return{byteLength:1,components:1};case Nr:case hd:case Vn:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case ts:case gh:case Jn:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function f1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):qa("canvas")}function v(R,b,k){let K=1,te=Ae(R);if((te.width>k||te.height>k)&&(K=k/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let Q=Math.floor(K*te.width),Le=Math.floor(K*te.height);u===void 0&&(u=p(Q,Le));let _e=b?p(Q,Le):u;return _e.width=Q,_e.height=Le,_e.getContext("2d").drawImage(R,0,0,Q,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Le+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==sn&&R.minFilter!==Nn}function g(R){i.generateMipmap(R)}function M(R,b,k,K,te=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=b;if(b===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),b===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){let Le=te?Ga:ut.getTransfer(K);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=Le===Mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(R,b){let k;return R?b===null||b===ts||b===Ws?k=i.DEPTH24_STENCIL8:b===Jn?k=i.DEPTH32F_STENCIL8:b===Nr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ts||b===Ws?k=i.DEPTH_COMPONENT24:b===Jn?k=i.DEPTH_COMPONENT32F:b===Nr&&(k=i.DEPTH_COMPONENT16),k}function y(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),T(b),b.isVideoTexture&&h.delete(b)}function E(R){let b=R.target;b.removeEventListener("dispose",E),O(b)}function T(R){let b=n.get(R);if(b.__webglInit===void 0)return;let k=R.source,K=d.get(k);if(K){let te=K[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(R),Object.keys(K).length===0&&d.delete(k)}n.remove(R)}function I(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let k=R.source,K=d.get(k);delete K[b.__cacheKey],a.memory.textures--}function O(R){let b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let te=0;te<b.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(b.__webglFramebuffer[K][te]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=R.textures;for(let K=0,te=k.length;K<te;K++){let Q=n.get(k[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(R)}let _=0;function S(){_=0}function H(){let R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function B(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function W(R,b){let k=n.get(R);if(R.isVideoTexture&&ge(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(k,R,b);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function j(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Je(k,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function z(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Je(k,R,b);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function re(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Z(k,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let G={[ui]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[$l]:i.MIRRORED_REPEAT},ue={[sn]:i.NEAREST,[Jf]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[nl]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},be={[tp]:i.NEVER,[op]:i.ALWAYS,[np]:i.LESS,[vd]:i.LEQUAL,[ip]:i.EQUAL,[ap]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function Me(R,b){if(b.type===Jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===nl||b.magFilter===sa||b.magFilter===es||b.minFilter===Nn||b.minFilter===nl||b.minFilter===sa||b.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,G[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,G[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,G[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ue[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===sn||b.minFilter!==sa&&b.minFilter!==es||b.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function et(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let K=b.source,te=d.get(K);te===void 0&&(te={},d.set(K,te));let Q=B(b);if(Q!==R.__cacheKey){te[Q]===void 0&&(te[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[Q].usedTimes++;let Le=te[R.__cacheKey];Le!==void 0&&(te[R.__cacheKey].usedTimes--,Le.usedTimes===0&&I(b)),R.__cacheKey=Q,R.__webglTexture=te[Q].texture}return k}function Je(R,b,k){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let te=et(R,b),Q=b.source;t.bindTexture(K,R.__webglTexture,i.TEXTURE0+k);let Le=n.get(Q);if(Q.version!==Le.__version||te===!0){t.activeTexture(i.TEXTURE0+k);let _e=ut.getPrimaries(ut.workingColorSpace),Re=b.colorSpace===Ti?null:ut.getPrimaries(b.colorSpace),tt=b.colorSpace===Ti||_e===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let he=v(b.image,!1,s.maxTextureSize);he=Ue(b,he);let Ee=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),ze=M(b.internalFormat,Ee,Oe,b.colorSpace,b.isVideoTexture);Me(K,b);let D,ee=b.mipmaps,fe=b.isVideoTexture!==!0,De=Le.__version===void 0||te===!0,U=Q.dataReady,pe=y(b,he);if(b.isDepthTexture)ze=x(b.format===Xs,b.type),De&&(fe?t.texStorage2D(i.TEXTURE_2D,1,ze,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,ze,he.width,he.height,0,Ee,Oe,null));else if(b.isDataTexture)if(ee.length>0){fe&&De&&t.texStorage2D(i.TEXTURE_2D,pe,ze,ee[0].width,ee[0].height);for(let Y=0,ne=ee.length;Y<ne;Y++)D=ee[Y],fe?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,D.width,D.height,Ee,Oe,D.data):t.texImage2D(i.TEXTURE_2D,Y,ze,D.width,D.height,0,Ee,Oe,D.data);b.generateMipmaps=!1}else fe?(De&&t.texStorage2D(i.TEXTURE_2D,pe,ze,he.width,he.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Ee,Oe,he.data)):t.texImage2D(i.TEXTURE_2D,0,ze,he.width,he.height,0,Ee,Oe,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){fe&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ze,ee[0].width,ee[0].height,he.depth);for(let Y=0,ne=ee.length;Y<ne;Y++)if(D=ee[Y],b.format!==yn)if(Ee!==null)if(fe){if(U)if(b.layerUpdates.size>0){let ye=qu(D.width,D.height,b.format,b.type);for(let xe of b.layerUpdates){let je=D.data.subarray(xe*ye/D.data.BYTES_PER_ELEMENT,(xe+1)*ye/D.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xe,D.width,D.height,1,Ee,je,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,D.width,D.height,he.depth,Ee,D.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ze,D.width,D.height,he.depth,0,D.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,D.width,D.height,he.depth,Ee,Oe,D.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ze,D.width,D.height,he.depth,0,Ee,Oe,D.data)}else{fe&&De&&t.texStorage2D(i.TEXTURE_2D,pe,ze,ee[0].width,ee[0].height);for(let Y=0,ne=ee.length;Y<ne;Y++)D=ee[Y],b.format!==yn?Ee!==null?fe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,D.width,D.height,Ee,D.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ze,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,D.width,D.height,Ee,Oe,D.data):t.texImage2D(i.TEXTURE_2D,Y,ze,D.width,D.height,0,Ee,Oe,D.data)}else if(b.isDataArrayTexture)if(fe){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ze,he.width,he.height,he.depth),U)if(b.layerUpdates.size>0){let Y=qu(he.width,he.height,b.format,b.type);for(let ne of b.layerUpdates){let ye=he.data.subarray(ne*Y/he.data.BYTES_PER_ELEMENT,(ne+1)*Y/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,he.width,he.height,1,Ee,Oe,ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ee,Oe,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,he.width,he.height,he.depth,0,Ee,Oe,he.data);else if(b.isData3DTexture)fe?(De&&t.texStorage3D(i.TEXTURE_3D,pe,ze,he.width,he.height,he.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ee,Oe,he.data)):t.texImage3D(i.TEXTURE_3D,0,ze,he.width,he.height,he.depth,0,Ee,Oe,he.data);else if(b.isFramebufferTexture){if(De)if(fe)t.texStorage2D(i.TEXTURE_2D,pe,ze,he.width,he.height);else{let Y=he.width,ne=he.height;for(let ye=0;ye<pe;ye++)t.texImage2D(i.TEXTURE_2D,ye,ze,Y,ne,0,Ee,Oe,null),Y>>=1,ne>>=1}}else if(ee.length>0){if(fe&&De){let Y=Ae(ee[0]);t.texStorage2D(i.TEXTURE_2D,pe,ze,Y.width,Y.height)}for(let Y=0,ne=ee.length;Y<ne;Y++)D=ee[Y],fe?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ee,Oe,D):t.texImage2D(i.TEXTURE_2D,Y,ze,Ee,Oe,D);b.generateMipmaps=!1}else if(fe){if(De){let Y=Ae(he);t.texStorage2D(i.TEXTURE_2D,pe,ze,Y.width,Y.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Oe,he)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,Oe,he);m(b)&&g(K),Le.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Z(R,b,k){if(b.image.length!==6)return;let K=et(R,b),te=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let Q=n.get(te);if(te.version!==Q.__version||K===!0){t.activeTexture(i.TEXTURE0+k);let Le=ut.getPrimaries(ut.workingColorSpace),_e=b.colorSpace===Ti?null:ut.getPrimaries(b.colorSpace),Re=b.colorSpace===Ti||Le===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let tt=b.isCompressedTexture||b.image[0].isCompressedTexture,he=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let ne=0;ne<6;ne++)!tt&&!he?Ee[ne]=v(b.image[ne],!0,s.maxCubemapSize):Ee[ne]=he?b.image[ne].image:b.image[ne],Ee[ne]=Ue(b,Ee[ne]);let Oe=Ee[0],ze=r.convert(b.format,b.colorSpace),D=r.convert(b.type),ee=M(b.internalFormat,ze,D,b.colorSpace),fe=b.isVideoTexture!==!0,De=Q.__version===void 0||K===!0,U=te.dataReady,pe=y(b,Oe);Me(i.TEXTURE_CUBE_MAP,b);let Y;if(tt){fe&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ee,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){Y=Ee[ne].mipmaps;for(let ye=0;ye<Y.length;ye++){let xe=Y[ye];b.format!==yn?ze!==null?fe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,xe.width,xe.height,ze,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,xe.width,xe.height,ze,D,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,ee,xe.width,xe.height,0,ze,D,xe.data)}}}else{if(Y=b.mipmaps,fe&&De){Y.length>0&&pe++;let ne=Ae(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ee,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee[ne].width,Ee[ne].height,ze,D,Ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ee,Ee[ne].width,Ee[ne].height,0,ze,D,Ee[ne].data);for(let ye=0;ye<Y.length;ye++){let je=Y[ye].image[ne].image;fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,je.width,je.height,ze,D,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,ee,je.width,je.height,0,ze,D,je.data)}}else{fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ze,D,Ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ee,ze,D,Ee[ne]);for(let ye=0;ye<Y.length;ye++){let xe=Y[ye];fe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,ze,D,xe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,ee,ze,D,xe.image[ne])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),Q.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ae(R,b,k,K,te,Q){let Le=r.convert(k.format,k.colorSpace),_e=r.convert(k.type),Re=M(k.internalFormat,Le,_e,k.colorSpace);if(!n.get(b).__hasExternalTextures){let he=Math.max(1,b.width>>Q),Ee=Math.max(1,b.height>>Q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,Re,he,Ee,b.depth,0,Le,_e,null):t.texImage2D(te,Q,Re,he,Ee,0,Le,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),se(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,n.get(k).__webglTexture,0,me(b)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,n.get(k).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(R,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let K=b.depthTexture,te=K&&K.isDepthTexture?K.type:null,Q=x(b.stencilBuffer,te),Le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=me(b);se(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Q,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,R)}else{let K=b.textures;for(let te=0;te<K.length;te++){let Q=K[te],Le=r.convert(Q.format,Q.colorSpace),_e=r.convert(Q.type),Re=M(Q.internalFormat,Le,_e,Q.colorSpace),tt=me(b);k&&se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Re,b.width,b.height):se(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,Re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let K=n.get(b.depthTexture).__webglTexture,te=me(b);if(b.depthTexture.format===Bs)se(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Xs)se(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Xe(R){let b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");le(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),Te(b.__webglDepthbuffer[K],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Te(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(R,b,k){let K=n.get(R);b!==void 0&&ae(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Xe(R)}function Ve(R){let b=R.texture,k=n.get(R),K=n.get(b);R.addEventListener("dispose",E);let te=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Le=te.length>1;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),Q){k.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[_e]=[];for(let Re=0;Re<b.mipmaps.length;Re++)k.__webglFramebuffer[_e][Re]=i.createFramebuffer()}else k.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)k.__webglFramebuffer[_e]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Le)for(let _e=0,Re=te.length;_e<Re;_e++){let tt=n.get(te[_e]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&se(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _e=0;_e<te.length;_e++){let Re=te[_e];k.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[_e]);let tt=r.convert(Re.format,Re.colorSpace),he=r.convert(Re.type),Ee=M(Re.internalFormat,tt,he,Re.colorSpace,R.isXRRenderTarget===!0),Oe=me(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,k.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Me(i.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)ae(k.__webglFramebuffer[_e][Re],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else ae(k.__webglFramebuffer[_e],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let _e=0,Re=te.length;_e<Re;_e++){let tt=te[_e],he=n.get(tt);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Me(i.TEXTURE_2D,tt),ae(k.__webglFramebuffer,R,tt,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),m(tt)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,K.__webglTexture),Me(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)ae(k.__webglFramebuffer[Re],R,b,i.COLOR_ATTACHMENT0,_e,Re);else ae(k.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,_e,0);m(b)&&g(_e),t.unbindTexture()}R.depthBuffer&&Xe(R)}function We(R){let b=R.textures;for(let k=0,K=b.length;k<K;k++){let te=b[k];if(m(te)){let Q=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Le=n.get(te).__webglTexture;t.bindTexture(Q,Le),g(Q),t.unbindTexture()}}}let J=[],C=[];function ce(R){if(R.samples>0){if(se(R)===!1){let b=R.textures,k=R.width,K=R.height,te=i.COLOR_BUFFER_BIT,Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(R),_e=b.length>1;if(_e)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);let tt=n.get(b[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,te,i.NEAREST),l===!0&&(J.length=0,C.length=0,J.push(i.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(Q),C.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);let tt=n.get(b[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function me(R){return Math.min(s.maxSamples,R.samples)}function se(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ue(R,b){let k=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ui&&k!==Ti&&(ut.getTransfer(k)===Mt?(K!==yn||te!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Ae(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=re,this.rebindTextures=Fe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=se}function p1(i,e){function t(n,s=Ti){let r,a=ut.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return i.BYTE;if(n===hd)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===gh)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===dd)return i.ALPHA;if(n===fd)return i.RGB;if(n===yn)return i.RGBA;if(n===pd)return i.LUMINANCE;if(n===md)return i.LUMINANCE_ALPHA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===_h)return i.RED;if(n===yh)return i.RED_INTEGER;if(n===gd)return i.RG;if(n===Mh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===Fa||n===Na||n===Ba||n===Oa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Zl||n===Jl||n===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===ec)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===gc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xd||n===vc||n===_c||n===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nc=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},m1={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},g1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wt({vertexShader:g1,fragmentShader:x1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends Pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=new Bc,m=t.getContextAttributes(),g=null,M=null,x=[],y=[],A=new ie,E=null,T=new Jt;T.layers.enable(1),T.viewport=new _t;let I=new Jt;I.layers.enable(2),I.viewport=new _t;let O=[T,I],_=new Nc;_.layers.enable(1),_.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=x[Z];return ae===void 0&&(ae=new Lr,x[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=x[Z];return ae===void 0&&(ae=new Lr,x[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=x[Z];return ae===void 0&&(ae=new Lr,x[Z]=ae),ae.getHandSpace()};function B(Z){let ae=y.indexOf(Z.inputSource);if(ae===-1)return;let Te=x[ae];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,c||a),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<x.length;Z++){let ae=y[Z];ae!==null&&(y[Z]=null,x[Z].disconnect(ae))}S=null,H=null,v.reset(),e.setRenderTarget(g),f=null,d=null,u=null,s=null,M=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new cn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Te=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Xs:Bs,Te=m.stencil?Ws:ts);let Xe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new cn(d.textureWidth,d.textureHeight,{format:yn,type:di,depthTexture:new to(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(Z){for(let ae=0;ae<Z.removed.length;ae++){let Te=Z.removed[ae],le=y.indexOf(Te);le>=0&&(y[le]=null,x[le].disconnect(Te))}for(let ae=0;ae<Z.added.length;ae++){let Te=Z.added[ae],le=y.indexOf(Te);if(le===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=y.length){y.push(Te),le=Fe;break}else if(y[Fe]===null){y[Fe]=Te,le=Fe;break}if(le===-1)break}let Xe=x[le];Xe&&Xe.connect(Te)}}let z=new P,re=new P;function G(Z,ae,Te){z.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(Te.matrixWorld);let le=z.distanceTo(re),Xe=ae.projectionMatrix.elements,Fe=Te.projectionMatrix.elements,Ve=Xe[14]/(Xe[10]-1),We=Xe[14]/(Xe[10]+1),J=(Xe[9]+1)/Xe[5],C=(Xe[9]-1)/Xe[5],ce=(Xe[8]-1)/Xe[0],me=(Fe[8]+1)/Fe[0],se=Ve*ce,ge=Ve*me,Ue=le/(-ce+me),Ae=Ue*-ce;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(Ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Xe[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let R=Ve+Ue,b=We+Ue,k=se-Ae,K=ge+(le-Ae),te=J*We/b*R,Q=C*We/b*R;Z.projectionMatrix.makePerspective(k,K,te,Q,R,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ae=Z.near,Te=Z.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),_.near=I.near=T.near=ae,_.far=I.far=T.far=Te,(S!==_.near||H!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,H=_.far);let le=Z.parent,Xe=_.cameras;ue(_,le);for(let Fe=0;Fe<Xe.length;Fe++)ue(Xe[Fe],le);Xe.length===2?G(_,T,I):_.projectionMatrix.copy(T.projectionMatrix),be(Z,_,le)};function be(Z,ae,Te){Te===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Me=null;function et(Z,ae){if(h=ae.getViewerPose(c||a),p=ae,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;Te.length!==_.cameras.length&&(_.cameras.length=0,le=!0);for(let Fe=0;Fe<Te.length;Fe++){let Ve=Te[Fe],We=null;if(f!==null)We=f.getViewport(Ve);else{let C=u.getViewSubImage(d,Ve);We=C.viewport,Fe===0&&(e.setRenderTargetTextures(M,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(M))}let J=O[Fe];J===void 0&&(J=new Jt,J.layers.enable(Fe),J.viewport=new _t,O[Fe]=J),J.matrix.fromArray(Ve.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ve.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(We.x,We.y,We.width,We.height),Fe===0&&(_.matrix.copy(J.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),le===!0&&_.cameras.push(J)}let Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){let Fe=u.getDepthInformation(Te[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,s.renderState)}}for(let Te=0;Te<x.length;Te++){let le=y[Te],Xe=x[Te];le!==null&&Xe!==void 0&&Xe.update(le,ae,c||a)}Me&&Me(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),p=null}let Je=new Sd;Je.setAnimationLoop(et),this.setAnimationLoop=function(Z){Me=Z},this.dispose=function(){}}},Ki=new kn,v1=new rt;function _1(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,bd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,x,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),x=M.envMap,y=M.envMapRotation;x&&(m.envMap.value=x,Ki.copy(y),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(Ki)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ut&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=s[M.id];y===void 0&&(p(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));let A=x.program;n.updateUBOMapping(M,A);let E=e.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let x=u();M.__bindingPointIndex=x;let y=i.createBuffer(),A=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=y.length;E<T;E++){let I=Array.isArray(y[E])?y[E]:[y[E]];for(let O=0,_=I.length;O<_;O++){let S=I[O];if(f(S,E,O,A)===!0){let H=S.__offset,B=Array.isArray(S.value)?S.value:[S.value],W=0;for(let j=0;j<B.length;j++){let z=B[j],re=v(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+W,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,y,A){let E=M.value,T=x+"_"+y;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{let I=A[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function p(M){let x=M.uniforms,y=0,A=16;for(let T=0,I=x.length;T<I;T++){let O=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,S=O.length;_<S;_++){let H=O[_],B=Array.isArray(H.value)?H.value:[H.value];for(let W=0,j=B.length;W<j;W++){let z=B[W],re=v(z),G=y%A,ue=G%re.boundary,be=G+ue;y+=ue,be!==0&&A-be<re.storage&&(y+=A-be),H.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=re.storage}}}let E=y%A;return E>0&&(y+=A-E),M.__size=y,M.__cache={},this}function v(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Or=class{constructor(e={}){let{canvas:t=wp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),p=new Int32Array(4),v=null,m=null,g=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Ri,this.toneMappingExposure=1;let x=this,y=!1,A=0,E=0,T=null,I=-1,O=null,_=new _t,S=new _t,H=null,B=new Se(0),W=0,j=t.width,z=t.height,re=1,G=null,ue=null,be=new _t(0,0,j,z),Me=new _t(0,0,j,z),et=!1,Je=new Br,Z=!1,ae=!1,Te=new rt,le=new rt,Xe=new P,Fe=new _t,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function J(){return T===null?re:1}let C=n;function ce(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",xe,!1),C===null){let F="webgl2";if(C=ce(F,w),C===null)throw ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let me,se,ge,Ue,Ae,R,b,k,K,te,Q,Le,_e,Re,tt,he,Ee,Oe,ze,D,ee,fe,De,U;function pe(){me=new Ng(C),me.init(),fe=new p1(C,me),se=new Pg(C,me,e,fe),ge=new u1(C),se.reverseDepthBuffer&&ge.buffers.depth.setReversed(!0),Ue=new kg(C),Ae=new Qx,R=new f1(C,me,ge,Ae,se,fe,Ue),b=new Lg(x),k=new Fg(x),K=new qp(C),De=new Rg(C,K),te=new Bg(C,K,Ue,De),Q=new Hg(C,te,K,Ue),ze=new zg(C,se,R),he=new Ig(Ae),Le=new Jx(x,b,k,me,se,De,he),_e=new _1(x,Ae),Re=new e1,tt=new a1(me),Oe=new Ag(x,b,k,ge,Q,d,l),Ee=new c1(x,Q,se),U=new y1(C,Ue,se,ge),D=new Cg(C,me,Ue),ee=new Og(C,me,Ue),Ue.programs=Le.programs,x.capabilities=se,x.extensions=me,x.properties=Ae,x.renderLists=Re,x.shadowMap=Ee,x.state=ge,x.info=Ue}pe();let Y=new Oc(x,C);this.xr=Y,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(j,z,!1))},this.getSize=function(w){return w.set(j,z)},this.setSize=function(w,F,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,z=F,t.width=Math.floor(w*re),t.height=Math.floor(F*re),X===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(j*re,z*re).floor()},this.setDrawingBufferSize=function(w,F,X){j=w,z=F,re=X,t.width=Math.floor(w*X),t.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,F,X,q){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,F,X,q),ge.viewport(_.copy(be).multiplyScalar(re).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,F,X,q){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,F,X,q),ge.scissor(S.copy(Me).multiplyScalar(re).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){ge.setScissorTest(et=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,F=!0,X=!0){let q=0;if(w){let N=!1;if(T!==null){let ve=T.texture.format;N=ve===bh||ve===Mh||ve===yh}if(N){let ve=T.texture.type,Pe=ve===di||ve===ts||ve===Nr||ve===Ws||ve===xh||ve===vh,Ne=Oe.getClearColor(),Be=Oe.getClearAlpha(),Ye=Ne.r,Ke=Ne.g,ke=Ne.b;Pe?(f[0]=Ye,f[1]=Ke,f[2]=ke,f[3]=Be,C.clearBufferuiv(C.COLOR,0,f)):(p[0]=Ye,p[1]=Ke,p[2]=ke,p[3]=Be,C.clearBufferiv(C.COLOR,0,p))}else q|=C.COLOR_BUFFER_BIT}F&&(q|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Re.dispose(),tt.dispose(),Ae.dispose(),b.dispose(),k.dispose(),Q.dispose(),De.dispose(),U.dispose(),Le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",dr),Y.removeEventListener("sessionend",fr),Kn.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=Ue.autoReset,F=Ee.enabled,X=Ee.autoUpdate,q=Ee.needsUpdate,N=Ee.type;pe(),Ue.autoReset=w,Ee.enabled=F,Ee.autoUpdate=X,Ee.needsUpdate=q,Ee.type=N}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){let F=w.target;F.removeEventListener("dispose",je),Tt(F)}function Tt(w){Vt(w),Ae.remove(w)}function Vt(w){let F=Ae.get(w).programs;F!==void 0&&(F.forEach(function(X){Le.releaseProgram(X)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,q,N,ve){F===null&&(F=Ve);let Pe=N.isMesh&&N.matrixWorld.determinant()<0,Ne=vi(w,F,X,q,N);ge.setMaterial(q,Pe);let Be=X.index,Ye=1;if(q.wireframe===!0){if(Be=te.getWireframeAttribute(X),Be===void 0)return;Ye=2}let Ke=X.drawRange,ke=X.attributes.position,gt=Ke.start*Ye,At=(Ke.start+Ke.count)*Ye;ve!==null&&(gt=Math.max(gt,ve.start*Ye),At=Math.min(At,(ve.start+ve.count)*Ye)),Be!==null?(gt=Math.max(gt,0),At=Math.min(At,Be.count)):ke!=null&&(gt=Math.max(gt,0),At=Math.min(At,ke.count));let Lt=At-gt;if(Lt<0||Lt===1/0)return;De.setup(N,q,Ne,X,Be);let gn,ft=D;if(Be!==null&&(gn=K.get(Be),ft=ee,ft.setIndex(gn)),N.isMesh)q.wireframe===!0?(ge.setLineWidth(q.wireframeLinewidth*J()),ft.setMode(C.LINES)):ft.setMode(C.TRIANGLES);else if(N.isLine){let He=q.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*J()),N.isLineSegments?ft.setMode(C.LINES):N.isLineLoop?ft.setMode(C.LINE_LOOP):ft.setMode(C.LINE_STRIP)}else N.isPoints?ft.setMode(C.POINTS):N.isSprite&&ft.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ft.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ft.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let He=N._multiDrawStarts,jt=N._multiDrawCounts,pt=N._multiDrawCount,Ln=Be?K.get(Be).bytesPerElement:1,ps=Ae.get(q).currentProgram.getUniforms();for(let xn=0;xn<pt;xn++)ps.setValue(C,"_gl_DrawID",xn),ft.render(He[xn]/Ln,jt[xn])}else if(N.isInstancedMesh)ft.renderInstances(gt,Lt,N.count);else if(X.isInstancedBufferGeometry){let He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,jt=Math.min(X.instanceCount,He);ft.renderInstances(gt,Lt,jt)}else ft.render(gt,Lt)};function lt(w,F,X){w.transparent===!0&&w.side===Dt&&w.forceSinglePass===!1?(w.side=Ut,w.needsUpdate=!0,Gi(w,F,X),w.side=Ci,w.needsUpdate=!0,Gi(w,F,X),w.side=Dt):Gi(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),m=tt.get(X),m.init(F),M.push(m),X.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==X&&w.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let q=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ve=N.material;if(ve)if(Array.isArray(ve))for(let Pe=0;Pe<ve.length;Pe++){let Ne=ve[Pe];lt(Ne,X,N),q.add(Ne)}else lt(ve,X,N),q.add(ve)}),M.pop(),m=null,q},this.compileAsync=function(w,F,X=null){let q=this.compile(w,F,X);return new Promise(N=>{function ve(){if(q.forEach(function(Pe){Ae.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){N(w);return}setTimeout(ve,10)}me.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Nt=null;function Tn(w){Nt&&Nt(w)}function dr(){Kn.stop()}function fr(){Kn.start()}let Kn=new Sd;Kn.setAnimationLoop(Tn),typeof self!="undefined"&&Kn.setContext(self),this.setAnimationLoop=function(w){Nt=w,Y.setAnimationLoop(w),w===null?Kn.stop():Kn.start()},Y.addEventListener("sessionstart",dr),Y.addEventListener("sessionend",fr),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,T),m=tt.get(w,M.length),m.init(F),M.push(m),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Je.setFromProjectionMatrix(le),ae=this.localClippingEnabled,Z=he.init(this.clippingPlanes,ae),v=Re.get(w,g.length),v.init(),g.push(v),Y.enabled===!0&&Y.isPresenting===!0){let ve=x.xr.getDepthSensingMesh();ve!==null&&fs(ve,F,-1/0,x.sortObjects)}fs(w,F,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ue),We=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,We&&Oe.addToRenderList(v,w),this.info.render.frame++,Z===!0&&he.beginShadows();let X=m.state.shadowsArray;Ee.render(X,w,F),Z===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=v.opaque,N=v.transmissive;if(m.setupLights(),F.isArrayCamera){let ve=F.cameras;if(N.length>0)for(let Pe=0,Ne=ve.length;Pe<Ne;Pe++){let Be=ve[Pe];mr(q,N,w,Be)}We&&Oe.render(w);for(let Pe=0,Ne=ve.length;Pe<Ne;Pe++){let Be=ve[Pe];pr(v,w,Be,Be.viewport)}}else N.length>0&&mr(q,N,w,F),We&&Oe.render(w),pr(v,w,F);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,F),De.resetDefaultState(),I=-1,O=null,M.pop(),M.length>0?(m=M[M.length-1],Z===!0&&he.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function fs(w,F,X,q){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){q&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);let Pe=Q.update(w),Ne=w.material;Ne.visible&&v.push(w,Pe,Ne,X,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){let Pe=Q.update(w),Ne=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Fe.copy(Pe.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(Ne)){let Be=Pe.groups;for(let Ye=0,Ke=Be.length;Ye<Ke;Ye++){let ke=Be[Ye],gt=Ne[ke.materialIndex];gt&&gt.visible&&v.push(w,Pe,gt,X,Fe.z,ke)}}else Ne.visible&&v.push(w,Pe,Ne,X,Fe.z,null)}}let ve=w.children;for(let Pe=0,Ne=ve.length;Pe<Ne;Pe++)fs(ve[Pe],F,X,q)}function pr(w,F,X,q){let N=w.opaque,ve=w.transmissive,Pe=w.transparent;m.setupLightsView(X),Z===!0&&he.setGlobalState(x.clippingPlanes,X),q&&ge.viewport(_.copy(q)),N.length>0&&Hi(N,F,X),ve.length>0&&Hi(ve,F,X),Pe.length>0&&Hi(Pe,F,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function mr(w,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new cn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Vn:di,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let ve=m.state.transmissionRenderTarget[q.id],Pe=q.viewport||_;ve.setSize(Pe.z,Pe.w);let Ne=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),We&&Oe.render(X);let Be=x.toneMapping;x.toneMapping=Ri;let Ye=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),Z===!0&&he.setGlobalState(x.clippingPlanes,q),Hi(w,X,q),R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ke=0,gt=F.length;ke<gt;ke++){let At=F[ke],Lt=At.object,gn=At.geometry,ft=At.material,He=At.group;if(ft.side===Dt&&Lt.layers.test(q.layers)){let jt=ft.side;ft.side=Ut,ft.needsUpdate=!0,gr(Lt,X,q,gn,ft,He),ft.side=jt,ft.needsUpdate=!0,Ke=!0}}Ke===!0&&(R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve))}x.setRenderTarget(Ne),x.setClearColor(B,W),Ye!==void 0&&(q.viewport=Ye),x.toneMapping=Be}function Hi(w,F,X){let q=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ve=w.length;N<ve;N++){let Pe=w[N],Ne=Pe.object,Be=Pe.geometry,Ye=q===null?Pe.material:q,Ke=Pe.group;Ne.layers.test(X.layers)&&gr(Ne,F,X,Be,Ye,Ke)}}function gr(w,F,X,q,N,ve){w.onBeforeRender(x,F,X,q,N,ve),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,F,X,q,w,ve),N.transparent===!0&&N.side===Dt&&N.forceSinglePass===!1?(N.side=Ut,N.needsUpdate=!0,x.renderBufferDirect(X,F,q,N,w,ve),N.side=Ci,N.needsUpdate=!0,x.renderBufferDirect(X,F,q,N,w,ve),N.side=Dt):x.renderBufferDirect(X,F,q,N,w,ve),w.onAfterRender(x,F,X,q,N,ve)}function Gi(w,F,X){F.isScene!==!0&&(F=Ve);let q=Ae.get(w),N=m.state.lights,ve=m.state.shadowsArray,Pe=N.state.version,Ne=Le.getParameters(w,N.state,ve,F,X),Be=Le.getProgramCacheKey(Ne),Ye=q.programs;q.environment=w.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(w.isMeshStandardMaterial?k:b).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",je),Ye=new Map,q.programs=Ye);let Ke=Ye.get(Be);if(Ke!==void 0){if(q.currentProgram===Ke&&q.lightsStateVersion===Pe)return Bt(w,Ne),Ke}else Ne.uniforms=Le.getUniforms(w),w.onBeforeCompile(Ne,x),Ke=Le.acquireProgram(Ne,Be),Ye.set(Be,Ke),q.uniforms=Ne.uniforms;let ke=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=he.uniform),Bt(w,Ne),q.needsLights=ia(w),q.lightsStateVersion=Pe,q.needsLights&&(ke.ambientLightColor.value=N.state.ambient,ke.lightProbe.value=N.state.probe,ke.directionalLights.value=N.state.directional,ke.directionalLightShadows.value=N.state.directionalShadow,ke.spotLights.value=N.state.spot,ke.spotLightShadows.value=N.state.spotShadow,ke.rectAreaLights.value=N.state.rectArea,ke.ltc_1.value=N.state.rectAreaLTC1,ke.ltc_2.value=N.state.rectAreaLTC2,ke.pointLights.value=N.state.point,ke.pointLightShadows.value=N.state.pointShadow,ke.hemisphereLights.value=N.state.hemi,ke.directionalShadowMap.value=N.state.directionalShadowMap,ke.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ke.spotShadowMap.value=N.state.spotShadowMap,ke.spotLightMatrix.value=N.state.spotLightMatrix,ke.spotLightMap.value=N.state.spotLightMap,ke.pointShadowMap.value=N.state.pointShadowMap,ke.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=Ke,q.uniformsList=null,Ke}function xr(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Bt(w,F){let X=Ae.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function vi(w,F,X,q,N){F.isScene!==!0&&(F=Ve),R.resetTextureUnits();let ve=F.fog,Pe=q.isMeshStandardMaterial?F.environment:null,Ne=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ui,Be=(q.isMeshStandardMaterial?k:b).get(q.envMap||Pe),Ye=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!X.morphAttributes.position,gt=!!X.morphAttributes.normal,At=!!X.morphAttributes.color,Lt=Ri;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Lt=x.toneMapping);let gn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=gn!==void 0?gn.length:0,He=Ae.get(q),jt=m.state.lights;if(Z===!0&&(ae===!0||w!==O)){let An=w===O&&q.id===I;he.setState(q,w,An)}let pt=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==jt.state.version||He.outputColorSpace!==Ne||N.isBatchedMesh&&He.batching===!1||!N.isBatchedMesh&&He.batching===!0||N.isBatchedMesh&&He.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&He.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&He.instancing===!1||!N.isInstancedMesh&&He.instancing===!0||N.isSkinnedMesh&&He.skinning===!1||!N.isSkinnedMesh&&He.skinning===!0||N.isInstancedMesh&&He.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&He.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&He.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&He.instancingMorph===!1&&N.morphTexture!==null||He.envMap!==Be||q.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==Ye||He.vertexTangents!==Ke||He.morphTargets!==ke||He.morphNormals!==gt||He.morphColors!==At||He.toneMapping!==Lt||He.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,He.__version=q.version);let Ln=He.currentProgram;pt===!0&&(Ln=Gi(q,F,N));let ps=!1,xn=!1,jo=!1,Ot=Ln.getUniforms(),_i=He.uniforms;if(ge.useProgram(Ln.program)&&(ps=!0,xn=!0,jo=!0),q.id!==I&&(I=q.id,xn=!0),ps||O!==w){se.reverseDepthBuffer?(Te.copy(w.projectionMatrix),Tp(Te),Ap(Te),Ot.setValue(C,"projectionMatrix",Te)):Ot.setValue(C,"projectionMatrix",w.projectionMatrix),Ot.setValue(C,"viewMatrix",w.matrixWorldInverse);let An=Ot.map.cameraPosition;An!==void 0&&An.setValue(C,Xe.setFromMatrixPosition(w.matrixWorld)),se.logarithmicDepthBuffer&&Ot.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,xn=!0,jo=!0)}if(N.isSkinnedMesh){Ot.setOptional(C,N,"bindMatrix"),Ot.setOptional(C,N,"bindMatrixInverse");let An=N.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ot.setValue(C,"boneTexture",An.boneTexture,R))}N.isBatchedMesh&&(Ot.setOptional(C,N,"batchingTexture"),Ot.setValue(C,"batchingTexture",N._matricesTexture,R),Ot.setOptional(C,N,"batchingIdTexture"),Ot.setValue(C,"batchingIdTexture",N._indirectTexture,R),Ot.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Ot.setValue(C,"batchingColorTexture",N._colorsTexture,R));let el=X.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0)&&ze.update(N,X,Ln),(xn||He.receiveShadow!==N.receiveShadow)&&(He.receiveShadow=N.receiveShadow,Ot.setValue(C,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(_i.envMap.value=Be,_i.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(_i.envMapIntensity.value=F.environmentIntensity),xn&&(Ot.setValue(C,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Vi(_i,jo),ve&&q.fog===!0&&_e.refreshFogUniforms(_i,ve),_e.refreshMaterialUniforms(_i,q,re,z,m.state.transmissionRenderTarget[w.id]),ks.upload(C,xr(He),_i,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ks.upload(C,xr(He),_i,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(C,"center",N.center),Ot.setValue(C,"modelViewMatrix",N.modelViewMatrix),Ot.setValue(C,"normalMatrix",N.normalMatrix),Ot.setValue(C,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let An=q.uniformsGroups;for(let tl=0,Af=An.length;tl<Af;tl++){let Jh=An[tl];U.update(Jh,Ln),U.bind(Jh,Ln)}}return Ln}function Vi(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function ia(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,X){Ae.get(w.texture).__webglTexture=F,Ae.get(w.depthTexture).__webglTexture=X;let q=Ae.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let X=Ae.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,X=0){T=w,A=F,E=X;let q=!0,N=null,ve=!1,Pe=!1;if(w){let Be=Ae.get(w);if(Be.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Be.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Be.__hasExternalTextures)R.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ke=w.depthTexture;if(Be.__boundDepthTexture!==ke){if(ke!==null&&Ae.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Ye=w.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);let Ke=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[F])?N=Ke[F][X]:N=Ke[F],ve=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?N=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?N=Ke[X]:N=Ke,_.copy(w.viewport),S.copy(w.scissor),H=w.scissorTest}else _.copy(be).multiplyScalar(re).floor(),S.copy(Me).multiplyScalar(re).floor(),H=et;if(ge.bindFramebuffer(C.FRAMEBUFFER,N)&&q&&ge.drawBuffers(w,N),ge.viewport(_),ge.scissor(S),ge.setScissorTest(H),ve){let Be=Ae.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Be.__webglTexture,X)}else if(Pe){let Be=Ae.get(w.texture),Ye=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Be.__webglTexture,X||0,Ye)}I=-1},this.readRenderTargetPixels=function(w,F,X,q,N,ve,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){ge.bindFramebuffer(C.FRAMEBUFFER,Ne);try{let Be=w.texture,Ye=Be.format,Ke=Be.type;if(!se.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-q&&X>=0&&X<=w.height-N&&C.readPixels(F,X,q,N,fe.convert(Ye),fe.convert(Ke),ve)}finally{let Be=T!==null?Ae.get(T).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,q,N,ve,Pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){let Be=w.texture,Ye=Be.format,Ke=Be.type;if(!se.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-q&&X>=0&&X<=w.height-N){ge.bindFramebuffer(C.FRAMEBUFFER,Ne);let ke=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.bufferData(C.PIXEL_PACK_BUFFER,ve.byteLength,C.STREAM_READ),C.readPixels(F,X,q,N,fe.convert(Ye),fe.convert(Ke),0);let gt=T!==null?Ae.get(T).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,gt);let At=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ep(C,At,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ve),C.deleteBuffer(ke),C.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,X=0){w.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-X),N=Math.floor(w.image.width*q),ve=Math.floor(w.image.height*q),Pe=F!==null?F.x:0,Ne=F!==null?F.y:0;R.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Pe,Ne,N,ve),ge.unbindTexture()},this.copyTextureToTexture=function(w,F,X=null,q=null,N=0){w.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],F=arguments[2],N=arguments[3]||0,X=null);let ve,Pe,Ne,Be,Ye,Ke;X!==null?(ve=X.max.x-X.min.x,Pe=X.max.y-X.min.y,Ne=X.min.x,Be=X.min.y):(ve=w.image.width,Pe=w.image.height,Ne=0,Be=0),q!==null?(Ye=q.x,Ke=q.y):(Ye=0,Ke=0);let ke=fe.convert(F.format),gt=fe.convert(F.type);R.setTexture2D(F,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let At=C.getParameter(C.UNPACK_ROW_LENGTH),Lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),gn=C.getParameter(C.UNPACK_SKIP_PIXELS),ft=C.getParameter(C.UNPACK_SKIP_ROWS),He=C.getParameter(C.UNPACK_SKIP_IMAGES),jt=w.isCompressedTexture?w.mipmaps[N]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,jt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,jt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Ye,Ke,ve,Pe,ke,gt,jt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Ye,Ke,jt.width,jt.height,ke,jt.data):C.texSubImage2D(C.TEXTURE_2D,N,Ye,Ke,ve,Pe,ke,gt,jt),C.pixelStorei(C.UNPACK_ROW_LENGTH,At),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He),N===0&&F.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(w,F,X=null,q=null,N=0){w.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],F=arguments[3],N=arguments[4]||0);let ve,Pe,Ne,Be,Ye,Ke,ke,gt,At,Lt=w.isCompressedTexture?w.mipmaps[N]:w.image;X!==null?(ve=X.max.x-X.min.x,Pe=X.max.y-X.min.y,Ne=X.max.z-X.min.z,Be=X.min.x,Ye=X.min.y,Ke=X.min.z):(ve=Lt.width,Pe=Lt.height,Ne=Lt.depth,Be=0,Ye=0,Ke=0),q!==null?(ke=q.x,gt=q.y,At=q.z):(ke=0,gt=0,At=0);let gn=fe.convert(F.format),ft=fe.convert(F.type),He;if(F.isData3DTexture)R.setTexture3D(F,0),He=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),He=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let jt=C.getParameter(C.UNPACK_ROW_LENGTH),pt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ln=C.getParameter(C.UNPACK_SKIP_PIXELS),ps=C.getParameter(C.UNPACK_SKIP_ROWS),xn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ye),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ke),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(He,N,ke,gt,At,ve,Pe,Ne,gn,ft,Lt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(He,N,ke,gt,At,ve,Pe,Ne,gn,Lt.data):C.texSubImage3D(He,N,ke,gt,At,ve,Pe,Ne,gn,ft,Lt),C.pixelStorei(C.UNPACK_ROW_LENGTH,jt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,ps),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xn),N===0&&F.generateMipmaps&&C.generateMipmap(He),ge.unbindTexture()},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ge.unbindTexture()},this.resetState=function(){A=0,E=0,T=null,ge.reset(),De.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Sh?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===bo?"display-p3":"srgb"}};var no=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fi=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new P,kr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Li=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cs,Sr=new P,Ps=new P,Is=new P,Ls=new ie,wr=new ie,Rd=new rt,Ea=new P,Er=new P,Ta=new P,Yu=new ie,Il=new ie,$u=new ie,is=class extends Wt{constructor(e=new Li){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new kr(n,3,0,!1)),Cs.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Aa(Ea.set(-.5,-.5,0),Is,a,Ps,s,r),Aa(Er.set(.5,-.5,0),Is,a,Ps,s,r),Aa(Ta.set(.5,.5,0),Is,a,Ps,s,r),Yu.set(0,0),Il.set(1,0),$u.set(1,1);let o=e.ray.intersectTriangle(Ea,Er,Ta,!1,Sr);if(o===null&&(Aa(Er.set(-.5,.5,0),Is,a,Ps,s,r),Il.set(0,1),o=e.ray.intersectTriangle(Ea,Ta,Er,!1,Sr),o===null))return;let l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:Ai.getInterpolation(Sr,Ea,Er,Ta,Yu,Il,$u,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Aa(i,e,t,n,s,r){Ls.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(wr.x=r*Ls.x-s*Ls.y,wr.y=s*Ls.x+r*Ls.y):wr.copy(Ls),i.copy(e),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(Rd)}var zr=class extends un{constructor(e=null,t=1,n=1,s,r,a,o,l,c=sn,h=sn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hr=class extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new rt,Ku=new rt,Ra=[],Zu=new On,M1=new rt,Tr=new de,Ar=new Ii,Hn=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,M1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),Zu.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Zu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),Ar.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Ku.multiplyMatrices(n,Ds),Tr.matrixWorld=Ku,Tr.raycast(e,Ra);for(let a=0,o=Ra.length;a<o;a++){let l=Ra[a];l.instanceId=r,l.object=this,t.push(l)}Ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(s*this.count),s,this.count,_h,Jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ks=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ju=new rt,kc=new Ka,Ca=new Ii,Pa=new P,Zs=class extends Wt{constructor(e=new mt,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Ju.copy(s).invert(),kc.copy(e.ray).applyMatrix4(Ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let m=c.getX(p);Pa.fromBufferAttribute(u,m),Qu(Pa,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)Pa.fromBufferAttribute(u,p),Qu(Pa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qu(i,e,t,n,s,r,a){let o=kc.distanceSqToPoint(i);if(o<t){let l=new P;kc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var dn=class extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],a=[],o=new P,l=new rt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gr=class extends Cn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zc=class extends Gr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ia=new P,Ll=new Th,Dl=new Th,Ul=new Th,Hc=class extends Cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Ll.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,m),Dl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,m),Ul.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ul.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ll.calc(l),Dl.calc(l),Ul.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ju(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function b1(i,e){let t=1-i;return t*t*e}function S1(i,e){return 2*(1-i)*i*e}function w1(i,e){return i*i*e}function Dr(i,e,t,n){return b1(i,e)+S1(i,t)+w1(i,n)}function E1(i,e){let t=1-i;return t*t*t*e}function T1(i,e){let t=1-i;return 3*t*t*i*e}function A1(i,e){return 3*(1-i)*i*i*e}function R1(i,e){return i*i*i*e}function Ur(i,e,t,n,s){return E1(i,e)+T1(i,t)+A1(i,n)+R1(i,s)}var so=class extends Cn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(e,s.x,r.x,a.x,o.x),Ur(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gc=class extends Cn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(e,s.x,r.x,a.x,o.x),Ur(e,s.y,r.y,a.y,o.y),Ur(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ro=class extends Cn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends Cn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Cn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Dr(e,s.x,r.x,a.x),Dr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wc=class extends Cn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Dr(e,s.x,r.x,a.x),Dr(e,s.y,r.y,a.y),Dr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ju(o,l.x,c.x,h.x,u.x),ju(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},Xc=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:Hc,CubicBezierCurve:so,CubicBezierCurve3:Gc,EllipseCurve:Gr,LineCurve:ro,LineCurve3:Vc,QuadraticBezierCurve:ao,QuadraticBezierCurve3:Wc,SplineCurve:oo}),qc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xc[s.type]().fromJSON(s))}return this}},lo=class extends qc{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ro(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ao(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new so(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Gr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},co=class i extends mt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Zt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new ie,f=new P,p=new P,v=new P,m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let M=0;M<=t;M++){let x=n+M*h*s,y=Math.sin(x),A=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*A,a.push(u.x,u.y,u.z),d.x=M/t,d.y=E/(e.length-1),o.push(d.x,d.y);let T=l[3*E+0]*y,I=l[3*E+1],O=l[3*E+0]*A;c.push(T,I,O)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){let y=x+M*e.length,A=y,E=y+e.length,T=y+e.length+1,I=y+1;r.push(A,E,I),r.push(T,I,E)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var St=class i extends mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],m=n/2,g=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function M(){let y=new P,A=new P,E=0,T=(t-e)/n;for(let I=0;I<=r;I++){let O=[],_=I/r,S=_*(t-e)+e;for(let H=0;H<=s;H++){let B=H/s,W=B*l+o,j=Math.sin(W),z=Math.cos(W);A.x=S*j,A.y=-_*n+m,A.z=S*z,u.push(A.x,A.y,A.z),y.set(j,T,z).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-_),O.push(p++)}v.push(O)}for(let I=0;I<s;I++)for(let O=0;O<r;O++){let _=v[O][I],S=v[O+1][I],H=v[O+1][I+1],B=v[O][I+1];e>0&&(h.push(_,S,B),E+=3),t>0&&(h.push(S,H,B),E+=3)}c.addGroup(g,E,0),g+=E}function x(y){let A=p,E=new ie,T=new P,I=0,O=y===!0?e:t,_=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),p++;let S=p;for(let H=0;H<=s;H++){let W=H/s*l+o,j=Math.cos(W),z=Math.sin(W);T.x=O*z,T.y=m*_,T.z=O*j,u.push(T.x,T.y,T.z),d.push(0,_,0),E.x=j*.5+.5,E.y=z*.5*_+.5,f.push(E.x,E.y),p++}for(let H=0;H<s;H++){let B=A+H,W=S+H;y===!0?h.push(W,W+1,B):h.push(W+1,W,B),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bn=class i extends St{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ho=class i extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new P,y=new P,A=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],y),f(t[E+2],A),l(x,y,A,M)}function l(M,x,y,A){let E=A+1,T=[];for(let I=0;I<=E;I++){T[I]=[];let O=M.clone().lerp(y,I/E),_=x.clone().lerp(y,I/E),S=E-I;for(let H=0;H<=S;H++)H===0&&I===E?T[I][H]=O:T[I][H]=O.clone().lerp(_,H/S)}for(let I=0;I<E;I++)for(let O=0;O<2*(E-I)-1;O++){let _=Math.floor(O/2);O%2===0?(d(T[I][_+1]),d(T[I+1][_]),d(T[I][_])):(d(T[I][_+1]),d(T[I+1][_+1]),d(T[I+1][_]))}}function c(M){let x=new P;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let M=new P;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let y=m(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;a.push(y,1-A)}p(),u()}function u(){for(let M=0;M<a.length;M+=6){let x=a[M+0],y=a[M+2],A=a[M+4],E=Math.max(x,y,A),T=Math.min(x,y,A);E>.9&&T<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){let y=M*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function p(){let M=new P,x=new P,y=new P,A=new P,E=new ie,T=new ie,I=new ie;for(let O=0,_=0;O<r.length;O+=9,_+=6){M.set(r[O+0],r[O+1],r[O+2]),x.set(r[O+3],r[O+4],r[O+5]),y.set(r[O+6],r[O+7],r[O+8]),E.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),A.copy(M).add(x).add(y).divideScalar(3);let S=m(A);v(E,_+0,M,S),v(T,_+2,x,S),v(I,_+4,y,S)}}function v(M,x,y,A){A<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Js=class i extends ho{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Di=class extends lo{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new lo().fromJSON(s))}return this}},C1={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Cd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=U1(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let p=t;p<s;p+=t)u=i[p],d=i[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Vr(r,a,t,o,l,f,0),a}};function Cd(i,e,t,n,s){let r,a;if(s===X1(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ed(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ed(r,i[r],i[r+1],a);return a&&wo(a,a.next)&&(Xr(a),a=a.next),a}function ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wo(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&k1(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?I1(i,n,s,r):P1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Xr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=L1(ss(i),e,t),Vr(i,e,t,n,s,r,2)):a===2&&D1(i,e,t,n,s,r):Vr(ss(i),e,t,n,s,r,1);break}}}function P1(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Fs(s,o,r,l,a,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function I1(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=Yc(f,p,e,t,n),M=Yc(v,m,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=g&&y&&y.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&Fs(o,h,l,u,c,d,x.x,x.y)&&Ct(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Fs(o,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&Fs(o,h,l,u,c,d,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Fs(o,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function L1(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!wo(s,r)&&Pd(s,n,n.next,r)&&Wr(s,r)&&Wr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Xr(n),Xr(n.next),n=i=r),n=n.next}while(n!==i);return ss(n)}function D1(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&G1(a,o)){let l=Id(a,o);a=ss(a,a.next),l=ss(l,l.next),Vr(a,e,t,n,s,r,0),Vr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function U1(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Cd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(H1(c));for(s.sort(F1),r=0;r<s.length;r++)t=N1(s[r],t);return t}function F1(i,e){return i.x-e.x}function N1(i,e){let t=B1(i,e);if(!t)return e;let n=Id(t,i);return ss(n,n.next),ss(t,t.next)}function B1(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Fs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Wr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&O1(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function O1(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function k1(i,e,t,n){let s=i;do s.z===0&&(s.z=Yc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,z1(s)}function z1(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Yc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function H1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function G1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!V1(i,e)&&(Wr(i,e)&&Wr(e,i)&&W1(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||wo(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wo(i,e){return i.x===e.x&&i.y===e.y}function Pd(i,e,t,n){let s=Da(Ct(i,e,t)),r=Da(Ct(i,e,n)),a=Da(Ct(t,n,i)),o=Da(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&La(i,t,e)||r===0&&La(i,n,e)||a===0&&La(t,i,n)||o===0&&La(t,e,n))}function La(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Da(i){return i>0?1:i<0?-1:0}function V1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wr(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function W1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Id(i,e){let t=new $c(i.i,i.x,i.y),n=new $c(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ed(i,e,t,n){let s=new $c(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $c(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X1(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];td(e),nd(n,e);let a=e.length;t.forEach(td);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,nd(n,t[l]);let o=C1.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function td(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function nd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var uo=class i extends mt{constructor(e=new Di([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:q1,x,y=!1,A,E,T,I;g&&(x=g.getSpacedPoints(h),y=!0,d=!1,A=g.computeFrenetFrames(h,!1),E=new P,T=new P,I=new P),d||(m=0,f=0,p=0,v=0);let O=o.extractPoints(c),_=O.shape,S=O.holes;if(!Fr.isClockWise(_)){_=_.reverse();for(let J=0,C=S.length;J<C;J++){let ce=S[J];Fr.isClockWise(ce)&&(S[J]=ce.reverse())}}let B=Fr.triangulateShape(_,S),W=_;for(let J=0,C=S.length;J<C;J++){let ce=S[J];_=_.concat(ce)}function j(J,C,ce){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(C,ce)}let z=_.length,re=B.length;function G(J,C,ce){let me,se,ge,Ue=J.x-C.x,Ae=J.y-C.y,R=ce.x-J.x,b=ce.y-J.y,k=Ue*Ue+Ae*Ae,K=Ue*b-Ae*R;if(Math.abs(K)>Number.EPSILON){let te=Math.sqrt(k),Q=Math.sqrt(R*R+b*b),Le=C.x-Ae/te,_e=C.y+Ue/te,Re=ce.x-b/Q,tt=ce.y+R/Q,he=((Re-Le)*b-(tt-_e)*R)/(Ue*b-Ae*R);me=Le+Ue*he-J.x,se=_e+Ae*he-J.y;let Ee=me*me+se*se;if(Ee<=2)return new ie(me,se);ge=Math.sqrt(Ee/2)}else{let te=!1;Ue>Number.EPSILON?R>Number.EPSILON&&(te=!0):Ue<-Number.EPSILON?R<-Number.EPSILON&&(te=!0):Math.sign(Ae)===Math.sign(b)&&(te=!0),te?(me=-Ae,se=Ue,ge=Math.sqrt(k)):(me=Ue,se=Ae,ge=Math.sqrt(k/2))}return new ie(me/ge,se/ge)}let ue=[];for(let J=0,C=W.length,ce=C-1,me=J+1;J<C;J++,ce++,me++)ce===C&&(ce=0),me===C&&(me=0),ue[J]=G(W[J],W[ce],W[me]);let be=[],Me,et=ue.concat();for(let J=0,C=S.length;J<C;J++){let ce=S[J];Me=[];for(let me=0,se=ce.length,ge=se-1,Ue=me+1;me<se;me++,ge++,Ue++)ge===se&&(ge=0),Ue===se&&(Ue=0),Me[me]=G(ce[me],ce[ge],ce[Ue]);be.push(Me),et=et.concat(Me)}for(let J=0;J<m;J++){let C=J/m,ce=f*Math.cos(C*Math.PI/2),me=p*Math.sin(C*Math.PI/2)+v;for(let se=0,ge=W.length;se<ge;se++){let Ue=j(W[se],ue[se],me);le(Ue.x,Ue.y,-ce)}for(let se=0,ge=S.length;se<ge;se++){let Ue=S[se];Me=be[se];for(let Ae=0,R=Ue.length;Ae<R;Ae++){let b=j(Ue[Ae],Me[Ae],me);le(b.x,b.y,-ce)}}}let Je=p+v;for(let J=0;J<z;J++){let C=d?j(_[J],et[J],Je):_[J];y?(T.copy(A.normals[0]).multiplyScalar(C.x),E.copy(A.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(T).add(E),le(I.x,I.y,I.z)):le(C.x,C.y,0)}for(let J=1;J<=h;J++)for(let C=0;C<z;C++){let ce=d?j(_[C],et[C],Je):_[C];y?(T.copy(A.normals[J]).multiplyScalar(ce.x),E.copy(A.binormals[J]).multiplyScalar(ce.y),I.copy(x[J]).add(T).add(E),le(I.x,I.y,I.z)):le(ce.x,ce.y,u/h*J)}for(let J=m-1;J>=0;J--){let C=J/m,ce=f*Math.cos(C*Math.PI/2),me=p*Math.sin(C*Math.PI/2)+v;for(let se=0,ge=W.length;se<ge;se++){let Ue=j(W[se],ue[se],me);le(Ue.x,Ue.y,u+ce)}for(let se=0,ge=S.length;se<ge;se++){let Ue=S[se];Me=be[se];for(let Ae=0,R=Ue.length;Ae<R;Ae++){let b=j(Ue[Ae],Me[Ae],me);y?le(b.x,b.y+x[h-1].y,x[h-1].x+ce):le(b.x,b.y,u+ce)}}}Z(),ae();function Z(){let J=s.length/3;if(d){let C=0,ce=z*C;for(let me=0;me<re;me++){let se=B[me];Xe(se[2]+ce,se[1]+ce,se[0]+ce)}C=h+m*2,ce=z*C;for(let me=0;me<re;me++){let se=B[me];Xe(se[0]+ce,se[1]+ce,se[2]+ce)}}else{for(let C=0;C<re;C++){let ce=B[C];Xe(ce[2],ce[1],ce[0])}for(let C=0;C<re;C++){let ce=B[C];Xe(ce[0]+z*h,ce[1]+z*h,ce[2]+z*h)}}n.addGroup(J,s.length/3-J,0)}function ae(){let J=s.length/3,C=0;Te(W,C),C+=W.length;for(let ce=0,me=S.length;ce<me;ce++){let se=S[ce];Te(se,C),C+=se.length}n.addGroup(J,s.length/3-J,1)}function Te(J,C){let ce=J.length;for(;--ce>=0;){let me=ce,se=ce-1;se<0&&(se=J.length-1);for(let ge=0,Ue=h+m*2;ge<Ue;ge++){let Ae=z*ge,R=z*(ge+1),b=C+me+Ae,k=C+se+Ae,K=C+se+R,te=C+me+R;Fe(b,k,K,te)}}}function le(J,C,ce){l.push(J),l.push(C),l.push(ce)}function Xe(J,C,ce){Ve(J),Ve(C),Ve(ce);let me=s.length/3,se=M.generateTopUV(n,s,me-3,me-2,me-1);We(se[0]),We(se[1]),We(se[2])}function Fe(J,C,ce,me){Ve(J),Ve(C),Ve(me),Ve(C),Ve(ce),Ve(me);let se=s.length/3,ge=M.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);We(ge[0]),We(ge[1]),We(ge[3]),We(ge[1]),We(ge[2]),We(ge[3])}function Ve(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function We(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Y1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xc[s.type]().fromJSON(s)),new i(n,e.options)}},q1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-u),new ie(d,1-p),new ie(v,1-g)]:[new ie(o,1-l),new ie(h,1-u),new ie(f,1-p),new ie(m,1-g)]}};function Y1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fo=class i extends ho{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ei=class i extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let M=[],x=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+y,1-x),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let x=h[g][M+1],y=h[g][M],A=h[g+1][M],E=h[g+1][M+1];(g!==0||a>0)&&f.push(x,y,E),(g!==n-1||l<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ti=class i extends mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let v=p/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let v=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,M=(s+1)*f+p;a.push(v,m,M),a.push(m,g,M)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var po=class extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ct=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var mo=class extends zn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ua(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kc=class extends Qs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nu:r=e,o=2*t-n;break;case iu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nu:a=e,l=2*n-t;break;case iu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+M*a[c+A]+x*a[l+A]+y*a[u+A];return r}},Zc=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Jc=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Mc:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Mc;var rs=class extends Gn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ha;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends Gn{};Qc.prototype.ValueTypeName="color";var jc=class extends Gn{};jc.prototype.ValueTypeName="number";var eh=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},go=class extends Gn{InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Gn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ha;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends Gn{};th.prototype.ValueTypeName="vector";var nh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},K1=new nh,ih=class{constructor(e){this.manager=e!==void 0?e:K1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ih.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},qr=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fl=new rt,id=new P,sd=new P,Yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sh=class extends Yr{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xo=class extends js{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rd=new rt,Rr=new P,Nl=new P,rh=class extends Yr{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rr),Nl.copy(n.position),Nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nl),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd)}},vo=class extends js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ah=class extends Yr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var _o=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ad();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ad(){return performance.now()}var Ah="\\[\\]\\.:\\/",Z1=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",J1="[^"+Ah.replace("\\.","")+"]",Q1=/((?:WC+[\/:])*)/.source.replace("WC",Rh),j1=/(WCOD+)?/.source.replace("WCOD",J1),ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),nv=new RegExp("^"+Q1+j1+ev+tv+"$"),iv=["material","materials","bones","map"],oh=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z1,"")}static parseTrackName(e){let t=nv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);iv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=oh;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);var Kr=class extends fi{constructor(){super();let e=new yt;e.deleteAttribute("uv");let t=new ct({side:Ut}),n=new ct,s=new vo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new de(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new de(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new de(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new de(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new de(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new de(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new de(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new de(e,nr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new de(e,nr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let p=new de(e,nr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let v=new de(e,nr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new de(e,nr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let g=new de(e,nr(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function nr(i){let e=new bt;return e.color.setScalar(i),e}function Yt(i,e,t){return i<e?e:i>t?t:i}function pi(i){return i<0?-1:i>0?1:0}function sv(i){var n;let e=Math.min(1,((i.muFront+i.muRear)/2-.9)/.45+((n=i.downforce)!=null?n:0)*.2),t=Math.min(1,Math.max(.15,(i.drive==="RWD"?.55:.25)+(i.muFront-i.muRear)*2.2+(i.torque/i.mass-.25)*.8));return Yt((.76-t)/.2+(e-.7)*1.5,0,1)}var Eo=class{constructor(e){var n,s;this.spec=e;let t=e;this.m=t.mass,this.L=t.wheelbase,this.a=t.wheelbase*t.frontWeight,this.b=t.wheelbase-this.a,this.I=t.mass*((n=t.inertiaK)!=null?n:.95)*this.a*this.b*1.35,this.gripK=(s=t.gripK)!=null?s:sv(t),this.reset(0,0,0)}reset(e,t,n){this.x=e,this.z=t,this.h=n,this.vx=0,this.vz=0,this.r=0,this.u=0,this.v=0,this.steer=0,this.gear=1,this.rpm=this.spec.idle,this.shiftTimer=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.spinR=0,this.lockR=0,this.frontSlide=0,this.rearSlide=0,this.wheelSpin=0,this.offroad=!1,this.lastHit=0}get speed(){return Math.hypot(this.vx,this.vz)}get kmh(){return this.speed*3.6}get beta(){return this.speed<1?0:Math.atan2(this.v,Math.abs(this.u))}torqueAt(e){var a;let t=this.spec,n=Yt(e/t.redline,0,1.05),s=(a=t.peakAt)!=null?a:.7,r;return n<s?r=.55+.45*Math.sin(n/s*Math.PI/2):r=1-.35*Math.pow((n-s)/(1.05-s),2),t.torque*r}step(e,t,n){var Nt,Tn,dr,fr,Kn,fs,pr,mr,Hi,gr,Gi,xr;let s=this.spec,r=(Nt=n.grip)!=null?Nt:1,a=Math.cos(this.h),o=Math.sin(this.h),l=this.vx*o+this.vz*a,c=this.vx*a-this.vz*o;this.u=l,this.v=c;let h=Math.hypot(l,c),u=1/(1+Math.max(0,Math.abs(l)-5)/(((Tn=s.steerFade)!=null?Tn:22)*(n.easy?1.35:1))),d=t.steer*s.steerMax*u,f=h>3?Math.atan2(c,Math.max(Math.abs(l),.5)):0;t.handbrake>.3||this.kickT>0?this.intent=n.real?1.6:1.1:Math.abs(f)>.2&&t.throttle>.3&&(this.intent||0)>0?this.intent=Math.max(this.intent,.6):l<12&&(this.intent=Math.max(this.intent||0,.3)),this.intent=Math.max(0,(this.intent||0)-e);let p=n.easy&&this.intent<=0;if(n.assist>0&&l>3){let Bt=Math.abs(f)>.35||t.handbrake>.1?1:1-.65*this.gripK;d+=Yt(f,-.9,.9)*.85*n.assist*Bt*(1-.5*Math.abs(t.steer))}d=Yt(d,-s.steerMax*1.25,s.steerMax*1.25);let v=7.5;this.steer+=Yt(d-this.steer,-v*e,v*e);let m=this.steer,g=s.gears,M=Bt=>Math.abs(l)/s.wheelRadius*g[Math.abs(Bt)-1]*s.finalDrive*60/(2*Math.PI);this.shiftTimer>0&&(this.shiftTimer-=e);let x=t.brake>.1&&t.throttle<.1&&l<1&&!t.noReverse;this.gear===-1?t.throttle>.1&&l>-1&&(this.gear=1):x&&Math.abs(l)<.6&&this.revHold>.25&&(this.gear=-1),this.revHold=x&&Math.abs(l)<.6?(this.revHold||0)+e:0;let y=0;if(this.gear>0){let Bt=M(this.gear);n.manual?(t.shiftUp&&this.gear<g.length&&(this.gear++,this.shiftTimer=.12,y=1),t.shiftDown&&this.gear>1&&(this.gear--,this.shiftTimer=.12,y=-1)):this.shiftTimer<=0&&(Bt>s.redline*.9&&this.gear<g.length?(this.gear++,this.shiftTimer=.09,y=1):this.gear>1&&Math.abs(f)<.22&&this.spinR<.05&&M(this.gear-1)<s.redline*.62&&(this.gear--,this.shiftTimer=.12,y=-1))}let A=Math.abs(this.gear)-1,E=g[A]*s.finalDrive*(this.gear===-1?1.1:1),T=Math.abs(l)/s.wheelRadius*E*60/(2*Math.PI),I=this.shiftTimer>0?0:this.gear===-1?t.brake:t.throttle,O=Math.max(s.idle,T);this.spinR>.05&&(O=Math.max(O,s.idle+(s.redline*.9-s.idle)*(.6+.4*I)*Math.min(1,this.spinR*2))),Math.abs(l)<2&&I>0&&(O=Math.max(O,s.idle+(s.redline*.6-s.idle)*I)),this.rpm+=(O-this.rpm)*Math.min(1,e*12);let _=T>=s.redline;_?this.rpm=s.redline-150*Math.random():this.rpm=Math.min(this.rpm,s.redline*.97);let S=t.throttle;S<.2&&(this.liftT=(this.liftT||0)+e),this.gripK<.5&&((dr=this.thrPrev)!=null?dr:0)<.3&&S>.8&&(this.liftT||0)<.35&&(this.liftT||0)>.02&&l>6&&this.gear>0&&(this.kickT=.28),S>=.2&&(this.liftT=0),this.thrPrev=S,this.kickT>0&&(this.kickT-=e);let H=this.torqueAt(Math.max(this.rpm,s.idle))*I*(_?.1:1);I<.05&&Math.abs(l)>1&&(H=-s.torque*.12*Yt(this.rpm/s.redline,0,1));let B=H*E*.88/s.wheelRadius*(this.kickT>0?n.real?1.9:1.5:1);this.gear===-1&&(B=-Math.abs(B),l<-9&&(B=0)),H<0&&(B=pi(l)*H*E*.88/s.wheelRadius);let W=((fr=s.downforce)!=null?fr:0)*h*h,j=s.cgHeight/this.L,z=this.m*9.81*this.b/this.L-this.m*this.ax*j+W*.45,re=this.m*9.81*this.a/this.L+this.m*this.ax*j+W*.55;z=Math.max(z,this.m*9.81*.12),re=Math.max(re,this.m*9.81*.12);let G=this.offroad?.62:1,ue=s.muFront*r*G,be=s.muRear*r*G,Me=(fs=(Kn=s.body)==null?void 0:Kn.track)!=null?fs:1.55,et=this.m*Math.abs(this.ay)*s.cgHeight/Me,Je=(pr=s.rollFront)!=null?pr:s.drive==="RWD"?.46:.56,Z=1-.14*Math.min(1,et*Je/(z/2))**2,ae=1-.14*Math.min(1,et*(1-Je)/(re/2))**2,Te=1;p&&(Te=1+.8*Yt((h-15)/30,0,1));let le=t.handbrake>.1?0:this.gripK,Xe=t.handbrake>.1||this.kickT>0?0:Math.max(this.gripK,.3),Fe=ue*z*Z*Te*(1+le*.08),Ve=be*re*ae*Te*(1+Xe*(n.real?.28:.16)),We=0,J=0,C=s.drive==="AWD"?(mr=s.awdFront)!=null?mr:.35:s.drive==="FWD"?1:0;We+=B*C,J+=B*(1-C);let ce=this.gear===-1?t.throttle:t.brake,me=ce>0&&Math.abs(l)>.3?ce:0;if(me>0){let Bt=s.brakeForce*me;We+=-pi(l)*Bt*.64,J+=-pi(l)*Bt*.36}var se=t.handbrake;se>0&&Math.abs(l)>.5&&(J=-pi(l)*Ve*(n.real?.95:.8)*se+J*(1-se));let ge=Math.abs(f)<.1&&Math.abs(t.steer)<.3&&se<.1&&!(this.kickT>0)||p&&l>15||le>.5&&se<.1&&Math.abs(f)<.25;n.tcs!==!1&&ge&&B>0&&(J=Math.min(J,Ve*.97),We=Math.min(We,Fe*.97)),this.spinR=0,this.lockR=0;let Ue=0,Ae=Math.abs(J)/Ve;Ae>1&&(pi(J)===pi(B)&&B!==0&&!(se>.3)?this.spinR=Yt(Ae-1+.35,0,1):this.lockR=1,J=pi(J)*Ve*(this.spinR>0?.92:.98)),se>.3&&Math.abs(l)>.5&&(this.lockR=Math.max(this.lockR,se)),Math.abs(We)>Fe&&(Ue=1,We=pi(We)*Fe*.95);let R=(Hi=s.tireB)!=null?Hi:9,b=(gr=s.tireC)!=null?gr:1.45,k=c+this.a*this.r,K=Math.cos(m),te=Math.sin(m),Q=l*K+k*te,Le=-l*te+k*K,_e=Math.atan2(Le,Math.max(Math.abs(Q),.8)),Re=c-this.b*this.r,tt=Math.atan2(Re,Math.max(Math.abs(l),.8));this.slipF=_e,this.slipR=tt;let he=Fe*Math.sqrt(Math.max(.04,1-.85*Math.pow(We/Fe,2))),Ee=Ve*Math.sqrt(Math.max(.04,1-.85*Math.pow(J/Ve,2)));this.lockR>0&&(Ee*=1-(n.real?.45:.3)*this.lockR);let Oe=-Fe*Math.sin(b*Math.atan(R*_e)),ze=-Ve*Math.sin(b*Math.atan(R*tt));Oe=Yt(Oe,-he,he),ze=Yt(ze,-Ee,Ee);let D=this.m*this.b/this.L,ee=this.m*this.a/this.L,fe=(Bt,vi,Vi)=>Yt(Bt,-Math.abs(vi)*Vi/e,Math.abs(vi)*Vi/e);Oe=fe(Oe,Le,D),ze=fe(ze,Re,ee),this.frontSlide=Yt(Math.abs(_e)/.25,0,1),this.rearSlide=Yt(Math.max(Math.abs(tt)/.2,this.spinR,this.lockR*(Math.abs(l)>3?1:0)),0,1);let De=s.drag*l*Math.abs(l),U=((Gi=s.rolling)!=null?Gi:12)*l*(this.offroad?5:1),pe=We*K-Oe*te+J-De-U,Y=We*te+Oe*K+ze-s.drag*2*c*Math.abs(c),ne=this.a*(Oe*K+We*te)-this.b*ze;h<.3&&I<.05&&Math.abs(B)<1&&(this.vx*=.9,this.vz*=.9,this.r*=.8);let ye=pe/this.m,xe=Y/this.m;this.ax+=(Yt(ye,-12,12)-this.ax)*Math.min(1,e*8),this.ay+=(Yt(xe,-14,14)-this.ay)*Math.min(1,e*8);let je=pe*o+Y*a,Tt=pe*a-Y*o;this.vx+=je/this.m*e,this.vz+=Tt/this.m*e,this.r+=ne/this.I*e,n.assist>0&&l>5&&Math.abs(t.steer)>.3&&Math.sign(t.steer)!==Math.sign(this.r)&&(Math.abs(f)>.12||this.rearSlide>.4)&&(this.r+=t.steer*(n.real?3:2.3)*e*n.assist*Math.min(1,l/15)*(Math.abs(f)>.3?1:1-.6*le));let Vt=Math.abs(f)>.15;if(n.assist>0&&Math.abs(f)>.2&&Math.abs(f)<1.2&&I>.5&&h>6){let Bt=3.2*n.assist*I*e/h;this.vx+=this.vx*Bt,this.vz+=this.vz*Bt}if(this.r*=1-Math.min(.5,((xr=s.yawDamp)!=null?xr:.6)*(Vt?n.real?.4:.8:1+1.6*le)*e),p&&l>12){let Bt=l*Math.tan(this.steer)/this.L*.95,vi=1.3+.9*Yt((l-15)/30,0,1),Vi=9.81*vi/Math.max(l,1);this.r+=(Yt(Bt,-Vi,Vi)-this.r)*Math.min(1,5*e);let ia=Math.abs(Bt)*l/9.81;if(ia>vi&&I<.9){let N=Math.min(.5,(ia-vi)*.9)*e;this.vx-=this.vx*N,this.vz-=this.vz*N}let w=Math.min(1,3*e),F=o,X=a,q=this.vx*F+this.vz*X;this.vx+=(F*q-this.vx)*w*.5*Yt(Math.abs(f)/.3,0,1),this.vz+=(X*q-this.vz)*w*.5*Yt(Math.abs(f)/.3,0,1)}if(n.assist>0&&Math.abs(f)>1.05&&l>2&&(this.r*=1-2.5*e*n.assist),n.assist>0&&!n.real&&Math.abs(f)>.5&&l>4){let Bt=Math.abs(f)-.5;Math.sign(this.r)!==Math.sign(f)&&(this.r*=1-Math.min(.6,Bt*9*e*n.assist*(n.easy?1.4:1)))}this.h+=this.r*e,this.x+=this.vx*e,this.z+=this.vz*e;let lt=this.spinR>0?Math.max(Math.abs(l),25*this.spinR)*pi(this.gear):this.lockR>.5?0:l;return this.wheelSpin+=lt/s.wheelRadius*e,{shifted:y,limiter:_}}collideWall(e,t,n,s=.25){this.x+=e*n,this.z+=t*n;let r=this.vx*e+this.vz*t;if(r<0){let a=-t,o=e,l=this.vx*a+this.vz*o,c=-r*s,h=l*(1-Math.min(.5,Math.abs(r)*.04));this.vx=e*c+a*h,this.vz=t*c+o*h;let u=Math.sin(this.h),d=Math.cos(this.h),f=u*a+d*o;return this.r+=-f*r*.02,this.r*=.7,Math.abs(r)}return 0}};var at=[{id:"kaze",name:"KAZE RS",tag:"\u042F\u043F\u043E\u043D\u0441\u043A\u043E\u0435 \u0434\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435. \u041B\u0435\u0433\u043A\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043D\u043E\u0441 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u0443\u0433\u043E\u043B.",colors:["#e8e8e8","#d7263d","#1b98e0","#f4d35e","#2e2e2e","#7ae582"],hp:300,mass:1180,torque:330,redline:8e3,idle:900,peakAt:.72,cylinders:4,vmax:265,gears:[3.3,2.15,1.55,1.18,.95,.78],finalDrive:4.1,wheelRadius:.31,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.48,muFront:1.12,muRear:1,tireB:9,tireC:1.5,steerMax:.62,steerFade:26,brakeForce:13e3,drag:.329,downforce:.2,yawDamp:.5,body:{L:4.45,W:1.72,H:1.3,track:1.48,wheelF:1.3,wheelR:-1.22,upper:[[2.22,.36],[2.26,.56],[2.12,.69],[1.2,.8],[.55,.85],[-1.3,.88],[-1.75,.92],[-2.18,.9],[-2.25,.62],[-2.22,.36]],cabin:[[.52,.84],[-.15,1.3],[-.95,1.29],[-1.58,.9]],extras:["popups","ducktail"]}},{id:"bulldog",name:"BULLDOG V8",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043C\u0430\u0441\u043B\u043A\u0430\u0440",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0437\u0430\u0434. \u0414\u044B\u043C\u0438\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435.",colors:["#f25c05","#111111","#0b3d91","#c1121f","#ffd166","#ffffff"],hp:510,mass:1560,torque:620,redline:6500,idle:750,peakAt:.55,cylinders:8,vmax:285,gears:[2.9,1.95,1.4,1.05,.774],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.8,frontWeight:.55,cgHeight:.52,muFront:1.08,muRear:.98,tireB:8.5,tireC:1.5,steerMax:.58,steerFade:24,brakeForce:15e3,drag:.395,downforce:.15,yawDamp:.55,body:{L:4.85,W:1.92,H:1.36,track:1.62,wheelF:1.5,wheelR:-1.3,upper:[[2.4,.38],[2.43,.7],[2.3,.82],[.7,.92],[.5,.93],[-1.6,.96],[-2.3,.99],[-2.42,.9],[-2.43,.45],[-2.4,.38]],cabin:[[.48,.92],[-.3,1.34],[-1,1.33],[-1.72,.95]],extras:["scoop","stripes"]}},{id:"veloce",name:"VELOCE GT",tag:"\u0421\u0440\u0435\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u044B\u0439 \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0438\u0436\u0438\u043C\u043D\u0430\u044F \u0441\u0438\u043B\u0430. \u0414\u0435\u0440\u0436\u0438\u0442 \u0434\u043E\u0440\u043E\u0433\u0443 \u043A\u0430\u043A \u043D\u0430 \u0440\u0435\u043B\u044C\u0441\u0430\u0445.",colors:["#e63946","#ffbe0b","#06d6a0","#3a86ff","#ffffff","#8338ec"],hp:640,mass:1420,torque:680,redline:8500,idle:1e3,peakAt:.75,cylinders:10,vmax:345,gears:[3.1,2.2,1.65,1.3,1.05,.86,.72],finalDrive:3.6,wheelRadius:.34,drive:"RWD",wheelbase:2.65,frontWeight:.42,cgHeight:.4,muFront:1.28,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:19e3,drag:.36,downforce:1.1,yawDamp:.8,body:{L:4.55,W:1.98,H:1.14,track:1.68,wheelF:1.38,wheelR:-1.27,upper:[[2.26,.3],[2.3,.46],[1.4,.62],[.9,.7],[-1.9,.95],[-2.26,.96],[-2.28,.4],[-2.25,.3]],cabin:[[.9,.69],[0,1.12],[-.6,1.12],[-1.9,.94]],extras:["wing","intakes"]}},{id:"tundra",name:"TUNDRA R",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A",desc:"\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0431\u0430\u0437\u0430. \u041A\u043E\u0440\u043E\u043B\u044C \u0441\u043D\u0435\u0433\u0430 \u0438 \u0440\u0435\u0437\u043A\u0438\u0445 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432.",colors:["#0077b6","#ffffff","#e76f51","#2a9d8f","#f9c74f","#1d1d1d"],hp:350,mass:1300,torque:420,redline:7500,idle:900,peakAt:.6,cylinders:4,vmax:270,gears:[3,2.05,1.5,1.15,.9,.74],finalDrive:4.3,wheelRadius:.32,drive:"AWD",awdFront:.4,wheelbase:2.5,frontWeight:.56,cgHeight:.52,muFront:1.18,muRear:1.08,tireB:8.5,tireC:1.45,steerMax:.62,steerFade:24,brakeForce:14500,drag:.354,downforce:.35,yawDamp:.6,body:{L:4.05,W:1.8,H:1.46,track:1.55,wheelF:1.28,wheelR:-1.22,ride:.05,upper:[[2,.4],[2.03,.62],[1.86,.78],[1,.88],[.75,.9],[-1.9,.95],[-2.02,.9],[-2.03,.42],[-2,.4]],cabin:[[.73,.9],[.05,1.42],[-1.78,1.42],[-1.96,.95]],extras:["roofscoop","rallylights","mudflaps","roofwing"]}},{id:"ronin",name:"RONIN 34",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C",desc:"\u0422\u0443\u0440\u0431\u043E-\u043C\u043E\u0442\u043E\u0440 \u0438 \u0443\u043C\u043D\u044B\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u043F\u043E\u0441\u043B\u0443\u0448\u043D\u044B\u0439 \u0432 \u043B\u044E\u0431\u043E\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435.",colors:["#5e60ce","#c0c0c0","#101010","#d62828","#ffffff","#2b9348"],hp:520,mass:1480,torque:560,redline:8e3,idle:900,peakAt:.65,cylinders:6,vmax:300,gears:[3.2,2.1,1.55,1.2,.97,.8],finalDrive:3.9,wheelRadius:.33,drive:"AWD",awdFront:.3,wheelbase:2.66,frontWeight:.54,cgHeight:.47,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.58,steerFade:27,brakeForce:17e3,drag:.4,downforce:.6,yawDamp:.65,body:{L:4.6,W:1.86,H:1.34,track:1.58,wheelF:1.38,wheelR:-1.28,upper:[[2.3,.36],[2.33,.62],[2.2,.76],[.8,.86],[.6,.88],[-1.5,.9],[-2.2,1],[-2.31,.95],[-2.32,.4],[-2.3,.36]],cabin:[[.58,.88],[-.1,1.34],[-1,1.33],[-1.62,.92]],extras:["wing","roundtails"]}},{id:"vanta",name:"VANTA GTR",tag:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u0443\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0433\u043E\u043D\u044C",desc:"\u0421\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u043E\u0435 \u0433\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0441\u0438\u043D\u0438\u043C\u0438 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u2014 \u043E\u0431\u0440\u0430\u0437 \xAB\u0441\u0430\u043C\u043E\u0439 \u0440\u0430\u0437\u044B\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u043E\u0439\xBB \u043C\u0430\u0448\u0438\u043D\u044B. \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0438 \u0446\u0435\u043F\u043A\u043E\u0435.",colors:["#c9ced6","#1d3f8f","#111111","#e8e8e8","#b31b1b","#f2b400"],hp:470,mass:1350,torque:480,redline:8500,idle:900,peakAt:.72,cylinders:6,vmax:295,gears:[3.2,2.2,1.6,1.25,1,.84],finalDrive:3.9,wheelRadius:.33,drive:"RWD",wheelbase:2.73,frontWeight:.5,cgHeight:.46,muFront:1.2,muRear:1.12,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:28,brakeForce:17e3,drag:.4,downforce:.55,yawDamp:.65,body:{L:4.5,W:1.9,H:1.34,track:1.6,wheelF:1.4,wheelR:-1.33,upper:[[2.25,.34],[2.28,.6],[2.1,.74],[.8,.84],[.62,.86],[-1.45,.9],[-2.1,.96],[-2.25,.92],[-2.26,.4],[-2.24,.34]],cabin:[[.6,.86],[-.1,1.34],[-1.05,1.33],[-1.55,.93]],extras:["wing","stripes"]}},{id:"kitsune",name:"KITSUNE RX",tag:"\u0420\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0438\u0437 \u0430\u043D\u0434\u0435\u0433\u0440\u0430\u0443\u043D\u0434\u0430",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u043D\u0438\u0437\u043A\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u0440\u0435\u0441\u043D\u0438\u0446\u0430\u043C\u0438\xBB \u0438 \u0440\u043E\u0442\u043E\u0440\u043D\u044B\u043C \u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0434\u043E 9000 \u043E\u0431/\u043C\u0438\u043D. \u041E\u0431\u043E\u0436\u0430\u0435\u0442 \u0434\u0440\u0438\u0444\u0442.",colors:["#f2c500","#e8e8e8","#d7263d","#3a0ca3","#101010","#00b4d8"],hp:320,mass:1240,torque:320,redline:9e3,idle:1e3,peakAt:.8,cylinders:4,vmax:280,gears:[3.4,2.2,1.6,1.2,.96,.8],finalDrive:4.3,wheelRadius:.31,drive:"RWD",wheelbase:2.43,frontWeight:.5,cgHeight:.44,muFront:1.15,muRear:1.02,tireB:9,tireC:1.5,steerMax:.64,steerFade:26,brakeForce:13500,drag:.313,downforce:.25,yawDamp:.5,body:{L:4.3,W:1.76,H:1.2,track:1.48,wheelF:1.25,wheelR:-1.18,upper:[[2.15,.33],[2.18,.5],[1.9,.62],[.9,.74],[.55,.78],[-1.5,.86],[-2.05,.88],[-2.15,.62],[-2.14,.34]],cabin:[[.52,.78],[-.2,1.2],[-.8,1.2],[-1.6,.87]],extras:["popups","ducktail"]}},{id:"tora",name:"TORA MK4",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u0440\u044B\u043B\u043E\u043C",desc:"\u041F\u043B\u0430\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u0440\u044F\u0434\u043D\u0430\u044F \xAB\u0448\u0435\u0441\u0442\u0451\u0440\u043A\u0430\xBB \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439 \u0438 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D.",colors:["#ff6b00","#f2f2f2","#111111","#c1121f","#2d6a4f","#4361ee"],hp:560,mass:1460,torque:620,redline:7200,idle:850,peakAt:.62,cylinders:6,vmax:295,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.7,wheelRadius:.34,drive:"RWD",wheelbase:2.55,frontWeight:.53,cgHeight:.47,muFront:1.16,muRear:1.06,tireB:9,tireC:1.5,steerMax:.58,steerFade:26,brakeForce:16500,drag:.42,downforce:.45,yawDamp:.6,body:{L:4.5,W:1.82,H:1.28,track:1.56,wheelF:1.32,wheelR:-1.23,upper:[[2.25,.34],[2.28,.55],[2.05,.68],[.7,.8],[.5,.82],[-1.4,.88],[-2.1,.92],[-2.25,.7],[-2.24,.36]],cabin:[[.48,.82],[-.25,1.26],[-.95,1.25],[-1.5,.9]],extras:["wing","roundtails"]}},{id:"toro",name:"TORO V12",tag:"\u0421\u0443\u043F\u0435\u0440\u043A\u0430\u0440-\u043A\u043B\u0438\u043D",desc:"\u041E\u0441\u0442\u0440\u044B\u0439 \u043A\u043B\u0438\u043D \u0441 V12 \u0437\u0430 \u0441\u043F\u0438\u043D\u043E\u0439 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0421\u0430\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435.",colors:["#9bd600","#ff9f1c","#ffdd00","#111111","#e5e5e5","#7209b7"],hp:740,mass:1550,torque:720,redline:8700,idle:1e3,peakAt:.78,cylinders:12,vmax:360,gears:[3.1,2.25,1.7,1.35,1.1,.9,.76],finalDrive:3.5,wheelRadius:.35,drive:"AWD",awdFront:.3,wheelbase:2.7,frontWeight:.43,cgHeight:.42,muFront:1.3,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:2e4,drag:.36,downforce:1.2,yawDamp:.8,body:{L:4.6,W:2,H:1.12,track:1.7,wheelF:1.42,wheelR:-1.28,upper:[[2.3,.3],[2.32,.42],[1.2,.64],[.75,.7],[-1.95,.92],[-2.3,.9],[-2.31,.38],[-2.28,.3]],cabin:[[.75,.69],[-.15,1.1],[-.7,1.1],[-1.95,.9]],extras:["intakes","wing"]}},{id:"stutt",name:"STUTT 9",tag:"\u0417\u0430\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u0441\u043F\u043E\u0440\u0442\u043A\u0443\u043F\u0435",desc:"\u041A\u0440\u0443\u0433\u043B\u044B\u0435 \u0444\u0430\u0440\u044B, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u043C\u043E\u0442\u043E\u0440 \u0441\u0437\u0430\u0434\u0438. \u041E\u0442\u043B\u0438\u0447\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442 \u0438 \u0440\u0435\u0437\u043A\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442.",colors:["#e9e4d8","#1b263b","#d00000","#fca311","#6a994e","#000000"],hp:450,mass:1420,torque:500,redline:8400,idle:900,peakAt:.74,cylinders:6,vmax:300,gears:[3.3,2.15,1.6,1.25,1.02,.86,.72],finalDrive:3.6,wheelRadius:.33,drive:"RWD",wheelbase:2.45,frontWeight:.39,cgHeight:.45,muFront:1.18,muRear:1.2,tireB:9.5,tireC:1.45,steerMax:.6,steerFade:28,brakeForce:18500,drag:.4,downforce:.4,yawDamp:.65,body:{L:4.35,W:1.85,H:1.28,track:1.56,wheelF:1.3,wheelR:-1.15,upper:[[2.17,.33],[2.2,.52],[2,.64],[1.1,.74],[.62,.8],[-1.2,.95],[-1.9,.9],[-2.15,.72],[-2.16,.36]],cabin:[[.6,.8],[-.05,1.26],[-.55,1.28],[-1.7,.92]],extras:["ducktail","roundlights"]}},{id:"shiro",name:"SHIRO 86",tag:"\u041B\u0451\u0433\u043A\u0438\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A 80-\u0445",desc:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u043C\u0438\u0433\u0430\u043B\u043A\u0430\u043C\u0438\xBB. \u041C\u043E\u0442\u043E\u0440 \u0441\u043B\u0430\u0431\u044B\u0439, \u0437\u0430\u0442\u043E \u043C\u0430\u0448\u0438\u043D\u0430 \u043B\u0451\u0433\u043A\u0430\u044F \u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u0442 \u0432 \u0437\u0430\u043D\u043E\u0441\u0435.",colors:["#f4f4f4","#111111","#c1121f","#2b59c3","#ffbe0b","#6c757d"],hp:180,mass:960,torque:185,redline:7800,idle:900,peakAt:.75,cylinders:4,vmax:210,gears:[3.6,2.3,1.6,1.2,.911],finalDrive:4.3,wheelRadius:.3,drive:"RWD",wheelbase:2.4,frontWeight:.53,cgHeight:.48,muFront:1.1,muRear:.98,tireB:9,tireC:1.5,steerMax:.66,steerFade:24,brakeForce:11e3,drag:.318,downforce:.1,yawDamp:.45,body:{L:4.2,W:1.66,H:1.33,track:1.42,wheelF:1.2,wheelR:-1.2,upper:[[2.1,.36],[2.12,.56],[2,.66],[1,.74],[.6,.78],[-1.7,.86],[-2.05,.86],[-2.1,.6],[-2.08,.36]],cabin:[[.58,.78],[-.1,1.3],[-1.3,1.3],[-2,.9]],extras:["popups"]}},{id:"hayate",name:"HAYATE EVO",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D",desc:"\u0427\u0435\u0442\u044B\u0440\u0451\u0445\u0434\u0432\u0435\u0440\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439, \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E\u043C. \u0426\u0435\u043F\u043A\u0438\u0439, \u0440\u0435\u0437\u043A\u0438\u0439, \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0430\u0437\u0433\u043E\u043D\u044F\u0435\u0442\u0441\u044F \u0438\u0437 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.",colors:["#e9ecef","#d00000","#1d3557","#ffd60a","#111111","#2a9d8f"],hp:415,mass:1390,torque:470,redline:7500,idle:900,peakAt:.6,cylinders:4,vmax:285,gears:[3,2,1.48,1.14,.9,.719],finalDrive:4.2,wheelRadius:.32,drive:"AWD",awdFront:.38,wheelbase:2.62,frontWeight:.56,cgHeight:.5,muFront:1.2,muRear:1.12,tireB:9,tireC:1.45,steerMax:.62,steerFade:25,brakeForce:15500,drag:.351,downforce:.5,yawDamp:.62,body:{L:4.5,W:1.81,H:1.45,track:1.55,wheelF:1.36,wheelR:-1.26,upper:[[2.25,.38],[2.27,.62],[2.1,.76],[.9,.86],[.65,.88],[-1.45,.92],[-2.15,.98],[-2.25,.9],[-2.26,.42],[-2.24,.38]],cabin:[[.63,.88],[-.05,1.42],[-1.15,1.41],[-1.6,.94]],extras:["wing","mudflaps","rallylights"]}},{id:"sakura",name:"SAKURA S",tag:"\u0414\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F",desc:"\u041D\u0438\u0437\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0442\u0443\u0440\u0431\u043E-\xAB\u0447\u0435\u0442\u0432\u0451\u0440\u043A\u043E\u0439\xBB. \u0421\u0430\u043C\u0430\u044F \xAB\u0434\u0440\u0438\u0444\u0442\u043E\u0432\u0430\u044F\xBB \u043C\u0430\u0448\u0438\u043D\u0430: \u043E\u0445\u043E\u0442\u043D\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0443\u0433\u043E\u043B.",colors:["#ff8fab","#f8f9fa","#7209b7","#00b4d8","#212529","#fb8500"],hp:385,mass:1240,torque:420,redline:7800,idle:900,peakAt:.68,cylinders:4,vmax:285,gears:[3.25,2.1,1.5,1.15,.94,.78],finalDrive:4.1,wheelRadius:.32,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.46,muFront:1.16,muRear:.96,tireB:9,tireC:1.5,steerMax:.7,steerFade:24,brakeForce:14e3,drag:.315,downforce:.3,yawDamp:.45,body:{L:4.45,W:1.78,H:1.28,track:1.52,wheelF:1.32,wheelR:-1.22,upper:[[2.22,.34],[2.25,.55],[2.06,.68],[.9,.8],[.6,.83],[-1.4,.88],[-2.08,.94],[-2.22,.86],[-2.23,.4],[-2.21,.34]],cabin:[[.58,.83],[-.1,1.27],[-.95,1.26],[-1.55,.9]],extras:["wing"]}},{id:"stallion",name:"STALLION GT",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0444\u0430\u0441\u0442\u0431\u044D\u043A",desc:"\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u044B\u0439 V8. \u041C\u043E\u0449\u043D\u044B\u0439 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u2014 \u0434\u044B\u043C\u0438\u0442 \u043A\u043E\u043B\u0451\u0441\u0430\u043C\u0438 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 \u0438\u0437 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.",colors:["#0353a4","#d90429","#ffffff","#111111","#ffb703","#606c38"],hp:500,mass:1680,torque:560,redline:7400,idle:750,peakAt:.62,cylinders:8,vmax:290,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.72,frontWeight:.54,cgHeight:.52,muFront:1.1,muRear:1,tireB:8.5,tireC:1.5,steerMax:.6,steerFade:25,brakeForce:16e3,drag:.4,downforce:.2,yawDamp:.55,body:{L:4.8,W:1.92,H:1.36,track:1.62,wheelF:1.48,wheelR:-1.28,upper:[[2.4,.4],[2.42,.72],[2.3,.84],[.75,.94],[.55,.95],[-1.9,.98],[-2.32,1],[-2.4,.9],[-2.41,.45],[-2.38,.4]],cabin:[[.52,.94],[-.25,1.34],[-.85,1.33],[-2,.99]],extras:["scoop","stripes"]}},{id:"pixel",name:"PIXEL GTI",tag:"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434, \u0445\u043E\u0442-\u0445\u044D\u0442\u0447",desc:"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A \u0441 \u0442\u0443\u0440\u0431\u043E\u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0438 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u041D\u0435 \u0434\u0440\u0438\u0444\u0442\u0443\u0435\u0442, \u043D\u043E \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043F\u043A\u0438\u0439 \u0438 \u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u2014 \u043E\u0442\u043B\u0438\u0447\u0435\u043D \u0434\u043B\u044F \u0433\u043E\u043D\u043A\u0438.",colors:["#e63946","#f1faee","#1d3557","#adb5bd","#000000","#80ed99"],hp:275,mass:1250,torque:370,redline:6800,idle:850,peakAt:.5,cylinders:4,vmax:250,gears:[3.4,2.15,1.5,1.12,.9,.76],finalDrive:3.9,wheelRadius:.32,drive:"FWD",wheelbase:2.62,frontWeight:.61,cgHeight:.52,muFront:1.2,muRear:1.2,tireB:9,tireC:1.45,steerMax:.6,steerFade:25,brakeForce:14500,drag:.348,downforce:.25,yawDamp:.7,body:{L:4.2,W:1.79,H:1.45,track:1.54,wheelF:1.32,wheelR:-1.3,ride:.02,upper:[[2.1,.4],[2.12,.64],[1.95,.78],[1.1,.88],[.8,.9],[-1.9,.98],[-2.08,.95],[-2.1,.44],[-2.08,.4]],cabin:[[.78,.9],[.05,1.42],[-1.75,1.42],[-2,1]],extras:["roofwing"]}},{id:"estate",name:"ESTATE RS",tag:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B",desc:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B \u0441 \u0431\u0438\u0442\u0443\u0440\u0431\u043E V8 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0412\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u043A\u0440\u043E\u043C\u043D\u043E, \u0430 \u0435\u0434\u0435\u0442 \u043A\u0430\u043A \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440.",colors:["#495057","#f8f9fa","#003049","#9d0208","#2d6a4f","#000000"],hp:600,mass:1980,torque:800,redline:7e3,idle:800,peakAt:.55,cylinders:8,vmax:305,gears:[3.2,2.1,1.55,1.2,.97,.8,.67],finalDrive:3.4,wheelRadius:.35,drive:"AWD",awdFront:.35,wheelbase:2.93,frontWeight:.55,cgHeight:.54,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.56,steerFade:28,brakeForce:2e4,drag:.46,downforce:.35,yawDamp:.7,body:{L:4.9,W:1.9,H:1.45,track:1.64,wheelF:1.52,wheelR:-1.41,upper:[[2.45,.38],[2.47,.62],[2.3,.76],[1.2,.86],[.95,.88],[-2.2,.95],[-2.42,.92],[-2.45,.42],[-2.43,.38]],cabin:[[.92,.88],[.2,1.4],[-2.15,1.38],[-2.36,.96]],extras:["roundtails"]}},{id:"aurora",name:"AURORA X",tag:"\u0413\u0438\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u0413\u0438\u0431\u0440\u0438\u0434\u043D\u044B\u0439 \u0433\u0438\u043F\u0435\u0440\u043A\u0430\u0440: V8 \u043F\u043B\u044E\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440\u044B, \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0430\u044D\u0440\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430. \u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u043D \u0432 \u0438\u0433\u0440\u0435.",colors:["#00f5d4","#f15bb5","#fee440","#111111","#f8f9fa","#3a0ca3"],hp:900,mass:1520,torque:900,redline:9e3,idle:1e3,peakAt:.7,cylinders:8,vmax:395,gears:[3,2.2,1.7,1.38,1.14,.95,.8],finalDrive:3.4,wheelRadius:.35,drive:"AWD",awdFront:.35,wheelbase:2.7,frontWeight:.42,cgHeight:.4,muFront:1.32,muRear:1.34,tireB:10,tireC:1.45,steerMax:.55,steerFade:31,brakeForce:21e3,drag:.34,downforce:1.3,yawDamp:.85,body:{L:4.65,W:2.02,H:1.1,track:1.72,wheelF:1.42,wheelR:-1.3,upper:[[2.3,.28],[2.33,.4],[1.3,.6],[.85,.66],[-1.9,.9],[-2.3,.88],[-2.32,.36],[-2.28,.28]],cabin:[[.85,.65],[-.05,1.08],[-.6,1.08],[-1.9,.88]],extras:["wing","intakes"]}},{id:"bars",name:"BARS 4x4",tag:"\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",desc:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u043E\u043B\u043D\u043E\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A \u0441 \u043B\u044E\u0441\u0442\u0440\u043E\u0439 \u0444\u0430\u0440. \u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u0432\u0430\u043B\u043A\u0438\u0439, \u0437\u0430\u0442\u043E \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0435\u0434\u0435\u0442 \u043F\u043E \u0441\u043D\u0435\u0433\u0443 \u0438 \u0431\u0435\u0437\u0434\u043E\u0440\u043E\u0436\u044C\u044E \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u043E\u0432.",colors:["#606c38","#f2e8cf","#bc6c25","#283618","#111111","#e5e5e5"],hp:445,mass:2150,torque:650,redline:6200,idle:700,peakAt:.5,cylinders:8,vmax:270,gears:[3.5,2.2,1.5,1.15,.92,.75],finalDrive:3.9,wheelRadius:.38,drive:"AWD",awdFront:.45,wheelbase:2.85,frontWeight:.55,cgHeight:.66,muFront:1.14,muRear:1.1,tireB:8,tireC:1.45,steerMax:.6,steerFade:22,brakeForce:19e3,drag:.483,downforce:.05,yawDamp:.7,body:{L:4.5,W:1.94,H:1.78,track:1.66,wheelF:1.45,wheelR:-1.4,ride:.12,upper:[[2.22,.6],[2.24,.9],[2.08,1.02],[1.05,1.08],[.8,1.1],[-2.1,1.14],[-2.22,1.1],[-2.24,.62],[-2.22,.6]],cabin:[[.78,1.1],[.2,1.74],[-1.95,1.74],[-2.16,1.14]],extras:["rallylights","mudflaps"]}},{id:"baron",name:"BARON M",tag:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0435\u0434\u0430\u043D",desc:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D \u0441 V8. \u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u0441\u043D\u0430\u0440\u0443\u0436\u0438, \u0437\u043B\u043E\u0439 \u0432\u043D\u0443\u0442\u0440\u0438 \u2014 \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u0438 \u0434\u043B\u0438\u043D\u043D\u043E \u0434\u0440\u0438\u0444\u0442\u0443\u0435\u0442.",colors:["#14213d","#e5e5e5","#000000","#3d5a80","#6a040f","#adb5bd"],hp:620,mass:1850,torque:750,redline:7200,idle:750,peakAt:.6,cylinders:8,vmax:305,gears:[3.4,2.2,1.6,1.25,1,.83,.7],finalDrive:3.3,wheelRadius:.35,drive:"RWD",wheelbase:2.98,frontWeight:.53,cgHeight:.5,muFront:1.16,muRear:1.04,tireB:9,tireC:1.5,steerMax:.58,steerFade:27,brakeForce:19500,drag:.44,downforce:.3,yawDamp:.6,body:{L:4.95,W:1.9,H:1.45,track:1.62,wheelF:1.55,wheelR:-1.43,upper:[[2.47,.38],[2.49,.63],[2.32,.77],[1,.88],[.75,.9],[-1.55,.95],[-2.3,.99],[-2.47,.9],[-2.48,.42],[-2.45,.38]],cabin:[[.73,.9],[0,1.42],[-1.3,1.41],[-1.85,.96]],extras:["ducktail"]}},{id:"mamba",name:"MAMBA ACR",tag:"\u0422\u0440\u0435\u043A\u043E\u0432\u044B\u0439 \u043C\u043E\u043D\u0441\u0442\u0440 \u0441 V10",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442, V10 \u0438 \u0442\u0440\u0435\u043A\u043E\u0432\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0411\u0435\u0437\u0443\u043C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0445 \u043A\u043E\u043B\u0451\u0441\u0430\u0445 \u2014 \u043D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u0430\u044F \u043F\u0435\u0434\u0430\u043B\u044C \u0433\u0430\u0437\u0430.",colors:["#d00000","#1b1b1e","#f8f9fa","#3c096c","#ffba08","#00a6fb"],hp:660,mass:1520,torque:810,redline:6800,idle:800,peakAt:.6,cylinders:10,vmax:315,gears:[2.7,1.9,1.4,1.1,.9,.75],finalDrive:3.55,wheelRadius:.35,drive:"RWD",wheelbase:2.51,frontWeight:.5,cgHeight:.44,muFront:1.24,muRear:1.18,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:29,brakeForce:2e4,drag:.42,downforce:.9,yawDamp:.65,body:{L:4.5,W:1.95,H:1.22,track:1.68,wheelF:1.35,wheelR:-1.16,upper:[[2.25,.34],[2.28,.55],[2.1,.68],[.3,.8],[.1,.82],[-1.7,.9],[-2.2,.92],[-2.26,.6],[-2.25,.36]],cabin:[[.1,.82],[-.5,1.2],[-1.1,1.2],[-1.75,.9]],extras:["wing","stripes","scoop"]}},{id:"kei",name:"KEI 660",tag:"\u041C\u0438\u043A\u0440\u043E-\u043A\u0430\u0440, \u0441\u0430\u043C\u044B\u0439 \u0441\u043B\u0430\u0431\u044B\u0439",desc:"\u041A\u0440\u043E\u0448\u0435\u0447\u043D\u0430\u044F \xAB\u043A\u043E\u0440\u043E\u0431\u043E\u0447\u043A\u0430\xBB \u0441 \u043C\u043E\u0442\u043E\u0440\u043E\u043C 660 \u043A\u0443\u0431\u043E\u0432. \u0421\u0430\u043C\u0430\u044F \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435 \u2014 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043B\u044E\u0431\u0438\u0442 \u0447\u0435\u043B\u043B\u0435\u043D\u0434\u0436.",colors:["#f1faee","#a8dadc","#ffb703","#e76f51","#90be6d","#264653"],hp:52,mass:720,torque:80,redline:7500,idle:1e3,peakAt:.7,cylinders:3,vmax:135,gears:[3.8,2.2,1.5,1.1,.88],finalDrive:4.4,wheelRadius:.27,drive:"FWD",wheelbase:2.36,frontWeight:.6,cgHeight:.56,muFront:1.04,muRear:1.06,tireB:8.5,tireC:1.45,steerMax:.64,steerFade:22,brakeForce:8500,drag:.52,downforce:0,yawDamp:.7,body:{L:3.4,W:1.48,H:1.62,track:1.3,wheelF:1.12,wheelR:-1.14,upper:[[1.7,.34],[1.72,.6],[1.6,.72],[1.1,.8],[.9,.82],[-1.6,.86],[-1.7,.84],[-1.72,.36],[-1.7,.34]],cabin:[[.88,.82],[.4,1.56],[-1.58,1.57],[-1.68,.86]],extras:["roundlights"]}},{id:"zhiga",name:"ZHIGA 07",tag:"\u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0439 \u0441\u0435\u0434\u0430\u043D",desc:"\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D 80-\u0445 \u0441 \u0445\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0431\u0430\u043C\u043F\u0435\u0440\u0430\u043C\u0438. \u041C\u043E\u0442\u043E\u0440 \u0441\u043B\u0430\u0431\u044B\u0439, \u043D\u043E \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u043C\u044F\u0433\u043A\u0430\u044F \u043F\u043E\u0434\u0432\u0435\u0441\u043A\u0430 \u2014 \u0434\u0440\u0438\u0444\u0442\u0438\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.",colors:["#f2f2f2","#9d0208","#14213d","#588157","#e9c46a","#2b2d42"],hp:80,mass:1030,torque:120,redline:6e3,idle:800,peakAt:.6,cylinders:4,vmax:145,gears:[3.67,2.1,1.36,1,.82],finalDrive:4.1,wheelRadius:.3,drive:"RWD",wheelbase:2.42,frontWeight:.53,cgHeight:.54,muFront:1.04,muRear:.93,tireB:8.5,tireC:1.5,steerMax:.68,steerFade:22,brakeForce:9500,drag:.42,downforce:0,yawDamp:.45,body:{L:4.15,W:1.62,H:1.44,track:1.38,wheelF:1.22,wheelR:-1.2,upper:[[2.07,.38],[2.09,.66],[2,.76],[.95,.8],[.8,.82],[-1.4,.84],[-2.05,.84],[-2.08,.4],[-2.06,.38]],cabin:[[.78,.82],[.25,1.4],[-1,1.4],[-1.45,.85]],extras:[]}},{id:"taiga",name:"TAIGA 4x4",tag:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",desc:"\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0442\u0440\u0451\u0445\u0434\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0435\u0437\u0434\u0435\u0445\u043E\u0434. \u041C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0439, \u0437\u0430\u0442\u043E \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u043F\u043E\u0434\u0432\u0435\u0441\u043A\u0430 \u2014 \u0435\u0434\u0435\u0442 \u0433\u0434\u0435 \u0443\u0433\u043E\u0434\u043D\u043E.",colors:["#386641","#f2e8cf","#bc4749","#0077b6","#ffb703","#6c584c"],hp:85,mass:1210,torque:130,redline:5400,idle:750,peakAt:.55,cylinders:4,vmax:140,gears:[3.24,1.99,1.29,1,.8],finalDrive:4.3,wheelRadius:.36,drive:"AWD",awdFront:.45,wheelbase:2.2,frontWeight:.55,cgHeight:.64,muFront:1.06,muRear:1.04,tireB:8,tireC:1.45,steerMax:.62,steerFade:20,brakeForce:11e3,drag:.52,downforce:0,yawDamp:.7,body:{L:3.75,W:1.68,H:1.7,track:1.44,wheelF:1.12,wheelR:-1.08,ride:.12,upper:[[1.86,.58],[1.88,.88],[1.75,.98],[.95,1.02],[.75,1.04],[-1.8,1.07],[-1.87,1.02],[-1.88,.6],[-1.86,.58]],cabin:[[.72,1.04],[.22,1.64],[-1.74,1.64],[-1.84,1.07]],extras:["roundlights","mudflaps"]}},{id:"rossa",name:"ROSSA SPIDER",tag:"\u041B\u0451\u0433\u043A\u0438\u0439 \u0440\u043E\u0434\u0441\u0442\u0435\u0440",desc:"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0434\u0432\u0443\u0445\u043C\u0435\u0441\u0442\u043D\u044B\u0439 \u0440\u043E\u0434\u0441\u0442\u0435\u0440 \u0441 \u0434\u043B\u0438\u043D\u043D\u044B\u043C \u043A\u0430\u043F\u043E\u0442\u043E\u043C. \u041B\u0451\u0433\u043A\u0438\u0439, \u0442\u043E\u0447\u043D\u044B\u0439 \u0440\u0443\u043B\u044C, \u043F\u043E\u0441\u043B\u0443\u0448\u043D\u044B\u0439 \u0437\u0430\u043D\u043E\u0441.",colors:["#c1121f","#fdf0d5","#003049","#ffd60a","#2d6a4f","#111111"],hp:210,mass:1e3,torque:230,redline:7800,idle:900,peakAt:.72,cylinders:4,vmax:215,gears:[3.5,2.2,1.6,1.25,1,.82],finalDrive:4.1,wheelRadius:.31,drive:"RWD",wheelbase:2.35,frontWeight:.51,cgHeight:.44,muFront:1.13,muRear:1.02,tireB:9,tireC:1.5,steerMax:.66,steerFade:25,brakeForce:12500,drag:.4,downforce:.15,yawDamp:.5,body:{L:4,W:1.73,H:1.2,track:1.48,wheelF:1.2,wheelR:-1.15,upper:[[2,.32],[2.03,.5],[1.85,.62],[.4,.76],[-1.6,.82],[-1.98,.8],[-2,.4],[-1.98,.32]],cabin:[[.36,.77],[-.05,1.08],[-.3,1.08],[-.4,.78]],extras:["ducktail","roundtails"]}},{id:"rancho",name:"RANCHO V8",tag:"\u041F\u0438\u043A\u0430\u043F",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043F\u0438\u043A\u0430\u043F \u0441 V8. \u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u043D\u0435\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043B\u0438\u0432\u044B\u0439, \u043D\u043E \u043C\u043E\u0449\u043D\u044B\u0439 \u2014 \u0438 \u043E\u0447\u0435\u043D\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u043D\u043E \u0434\u044B\u043C\u0438\u0442 \u0437\u0430\u0434\u043D\u0438\u043C\u0438 \u043A\u043E\u043B\u0451\u0441\u0430\u043C\u0438.",colors:["#1d3557","#e63946","#f1faee","#111111","#a3a380","#fb8500"],hp:400,mass:2100,torque:610,redline:6e3,idle:700,peakAt:.5,cylinders:8,vmax:235,gears:[3.2,2.1,1.5,1.15,.9,.72],finalDrive:3.73,wheelRadius:.39,drive:"RWD",wheelbase:3.3,frontWeight:.57,cgHeight:.68,muFront:1.08,muRear:.98,tireB:8,tireC:1.5,steerMax:.56,steerFade:22,brakeForce:19e3,drag:.62,downforce:0,yawDamp:.6,body:{L:5.4,W:2,H:1.88,track:1.7,wheelF:1.72,wheelR:-1.58,ride:.1,upper:[[2.7,.6],[2.72,.95],[2.55,1.08],[1.3,1.14],[1.1,1.15],[-2.6,1.12],[-2.72,1.1],[-2.72,.62],[-2.7,.6]],cabin:[[1.05,1.15],[.5,1.84],[-.8,1.84],[-.9,1.15]],extras:["rallylights","mudflaps","stripes"]}},{id:"volt",name:"VOLT E",tag:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0435\u0434\u0430\u043D",desc:"\u0422\u0438\u0445\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E-\u0441\u0435\u0434\u0430\u043D \u0441 \u0434\u0432\u0443\u043C\u044F \u043C\u043E\u0442\u043E\u0440\u0430\u043C\u0438. \u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u043D \u0441 \u043C\u0435\u0441\u0442\u0430, \u043D\u043E \u043D\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0443\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440\u0430\u043C.",colors:["#f8f9fa","#212529","#3a86ff","#d00000","#adb5bd","#2ec4b6"],hp:670,mass:2150,torque:1e3,redline:15e3,idle:1e3,peakAt:.3,cylinders:12,vmax:315,gears:[2.4,1.6],finalDrive:3.9,wheelRadius:.35,drive:"AWD",awdFront:.45,wheelbase:2.96,frontWeight:.5,cgHeight:.42,muFront:1.2,muRear:1.18,tireB:9,tireC:1.45,steerMax:.56,steerFade:27,brakeForce:2e4,drag:.4,downforce:.4,yawDamp:.75,body:{L:4.95,W:1.96,H:1.42,track:1.66,wheelF:1.5,wheelR:-1.46,upper:[[2.47,.36],[2.5,.56],[2.3,.7],[1.2,.84],[.9,.86],[-1.9,.92],[-2.42,.9],[-2.48,.4],[-2.46,.36]],cabin:[[.88,.86],[0,1.4],[-1,1.4],[-2.1,.92]],extras:[]}},{id:"gruppo",name:"GRUPPO B",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u0430\u044F \u043B\u0435\u0433\u0435\u043D\u0434\u0430",desc:"\u0411\u0435\u0437\u0443\u043C\u043D\u044B\u0439 \u0440\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u043C\u043E\u043D\u0441\u0442\u0440 80-\u0445: \u043B\u0451\u0433\u043A\u0438\u0439 \u043A\u0443\u0437\u043E\u0432, \u0442\u0443\u0440\u0431\u043E \u0438 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D \u0438 \u0446\u0435\u043F\u043A\u043E\u0441\u0442\u044C \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445.",colors:["#ffffff","#e63946","#003566","#ffc300","#2b9348","#111111"],hp:500,mass:1100,torque:520,redline:8e3,idle:1e3,peakAt:.65,cylinders:4,vmax:250,gears:[3,2,1.48,1.15,.92],finalDrive:4.2,wheelRadius:.32,drive:"AWD",awdFront:.35,wheelbase:2.45,frontWeight:.5,cgHeight:.5,muFront:1.2,muRear:1.13,tireB:9,tireC:1.45,steerMax:.64,steerFade:25,brakeForce:15500,drag:.5,downforce:.45,yawDamp:.6,body:{L:3.95,W:1.84,H:1.38,track:1.58,wheelF:1.22,wheelR:-1.22,ride:.04,upper:[[1.97,.38],[2,.6],[1.84,.74],[.95,.84],[.75,.86],[-1.85,.92],[-1.96,.88],[-1.98,.42],[-1.96,.38]],cabin:[[.73,.86],[.1,1.34],[-1.25,1.34],[-1.7,.92]],extras:["roofscoop","rallylights","mudflaps","wing"]}},{id:"kaiju",name:"KAIJU DR",tag:"\u0414\u0440\u0438\u0444\u0442-\u043C\u043E\u043D\u0441\u0442\u0440",desc:"\u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u043A\u0443\u0437\u043E\u0432, 760 \u0441\u0438\u043B \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0435 \u043A\u043E\u043B\u0451\u0441\u0430 \u0438 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0443\u0433\u043E\u043B \u0440\u0443\u043B\u044F. \u0421\u043E\u0437\u0434\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0434\u0440\u0438\u0444\u0442\u0430 \u2014 \u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0430\u043C\u044B\u0435 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0443\u0433\u043B\u044B.",colors:["#7209b7","#f72585","#4cc9f0","#111111","#f8f9fa","#ffbe0b"],hp:760,mass:1300,torque:780,redline:8500,idle:1e3,peakAt:.68,cylinders:6,vmax:330,gears:[3,2.1,1.55,1.2,.98,.82],finalDrive:3.9,wheelRadius:.33,drive:"RWD",wheelbase:2.55,frontWeight:.52,cgHeight:.44,muFront:1.22,muRear:1,tireB:9,tireC:1.5,steerMax:.78,steerFade:24,brakeForce:17e3,drag:.42,downforce:.4,yawDamp:.4,body:{L:4.55,W:1.98,H:1.26,track:1.68,wheelF:1.36,wheelR:-1.22,upper:[[2.27,.32],[2.3,.52],[2.1,.66],[.9,.78],[.6,.81],[-1.4,.87],[-2.12,.93],[-2.27,.86],[-2.28,.38],[-2.26,.32]],cabin:[[.58,.81],[-.1,1.24],[-.95,1.23],[-1.55,.88]],extras:["wing","intakes"]}},{id:"proto",name:"PROTO LM",tag:"\u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \xAB24 \u0447\u0430\u0441\u0430\xBB",desc:"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u0433\u043E\u043D\u043E\u043A \u043D\u0430 \u0432\u044B\u043D\u043E\u0441\u043B\u0438\u0432\u043E\u0441\u0442\u044C. \u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u043F\u0440\u0438\u0436\u0438\u043C\u043D\u0430\u044F \u0441\u0438\u043B\u0430: \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445 \u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u043E\u0440\u043E\u0433\u0443 \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0445.",colors:["#06d6a0","#ef476f","#ffd166","#118ab2","#f8f9fa","#073b4c"],hp:850,mass:1100,torque:650,redline:9500,idle:1200,peakAt:.78,cylinders:8,vmax:365,gears:[3,2.2,1.7,1.38,1.14,.95,.8],finalDrive:3.4,wheelRadius:.34,drive:"RWD",wheelbase:2.9,frontWeight:.44,cgHeight:.34,muFront:1.38,muRear:1.42,tireB:10,tireC:1.45,steerMax:.54,steerFade:32,brakeForce:22e3,drag:.33,downforce:2.2,yawDamp:.9,gripK:1,body:{L:4.8,W:2,H:1.06,track:1.72,wheelF:1.5,wheelR:-1.4,upper:[[2.4,.26],[2.42,.36],[1.4,.62],[.8,.7],[-1.9,.92],[-2.4,.92],[-2.42,.34],[-2.38,.26]],cabin:[[.8,.69],[.1,1.04],[-.7,1.04],[-1.4,.86]],extras:["wing","intakes"]}},{id:"zenith",name:"ZENITH W16",tag:"\u0413\u0438\u043F\u0435\u0440\u043A\u0430\u0440, \u0441\u0430\u043C\u044B\u0439 \u0441\u0438\u043B\u044C\u043D\u044B\u0439",desc:"1500 \u0441\u0438\u043B, \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 16 \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u043E\u0432. \u0421\u0430\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438 \u043C\u043E\u0449\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0438\u0433\u0440\u0435 \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 430 \u043A\u043C/\u0447.",colors:["#14213d","#fca311","#e5e5e5","#9d0208","#000000","#4361ee"],hp:1500,mass:1950,torque:1600,redline:7e3,idle:900,peakAt:.62,cylinders:16,vmax:450,gears:[2.6,1.9,1.45,1.17,.96,.8,.66],finalDrive:3.2,wheelRadius:.36,drive:"AWD",awdFront:.35,wheelbase:2.71,frontWeight:.44,cgHeight:.4,muFront:1.32,muRear:1.36,tireB:10,tireC:1.45,steerMax:.55,steerFade:32,brakeForce:24e3,drag:.31,downforce:1.2,yawDamp:.85,body:{L:4.55,W:2.04,H:1.2,track:1.74,wheelF:1.4,wheelR:-1.3,upper:[[2.27,.3],[2.3,.46],[2.1,.58],[.9,.7],[-1.6,.95],[-2.2,.95],[-2.28,.4],[-2.25,.3]],cabin:[[.9,.7],[0,1.18],[-.7,1.18],[-1.7,.94]],extras:["wing","intakes","roundtails"]}},{id:"bigfoot",name:"BIGFOOT",tag:"\u041C\u043E\u043D\u0441\u0442\u0440-\u0442\u0440\u0430\u043A",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0435 \u043A\u043E\u043B\u0451\u0441\u0430, \u0432\u044B\u0441\u043E\u0447\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0434\u0432\u0435\u0441\u043A\u0430 \u0438 650 \u0441\u0438\u043B \u043D\u0430 \u0432\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u043A\u043E\u043B\u0435\u0441\u0430. \u041C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442, \u0437\u0430\u0442\u043E \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u044D\u043F\u0438\u0447\u043D\u043E.",colors:["#ff006e","#3a86ff","#ffbe0b","#06d6a0","#111111","#fb5607"],hp:650,mass:3200,torque:1150,redline:5600,idle:700,peakAt:.5,cylinders:8,vmax:230,gears:[3,2,1.45,1.1,.86],finalDrive:3.3,wheelRadius:.62,drive:"AWD",awdFront:.45,wheelbase:3.2,frontWeight:.52,cgHeight:.95,muFront:1.02,muRear:1,tireB:7.5,tireC:1.45,steerMax:.6,steerFade:20,brakeForce:26e3,drag:1.5,downforce:0,yawDamp:.75,body:{L:4.9,W:2.2,H:2.75,track:2.34,wheelF:1.6,wheelR:-1.6,ride:.55,tireW:.58,upper:[[2.45,1.28],[2.48,1.62],[2.3,1.78],[.9,1.86],[.7,1.88],[-2.3,1.92],[-2.45,1.88],[-2.47,1.32],[-2.45,1.28]],cabin:[[.66,1.88],[.15,2.6],[-1.15,2.6],[-1.3,1.9]],extras:["rallylights","stripes"]}},{id:"semya",name:"SEMYA VAN",tag:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u043C\u0438\u043D\u0438\u0432\u044D\u043D",desc:"\u0421\u0435\u043C\u044C \u043C\u0435\u0441\u0442, \u0441\u0434\u0432\u0438\u0436\u043D\u044B\u0435 \u0434\u0432\u0435\u0440\u0438 \u0438 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u041D\u0435\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043B\u0438\u0432\u044B\u0439, \u043D\u043E \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0437\u0432\u044B\u0439 \u0434\u043B\u044F \xAB\u0430\u0432\u0442\u043E\u0431\u0443\u0441\u0430\xBB.",colors:["#adb5bd","#1d3557","#e63946","#f1faee","#2a9d8f","#6d597a"],hp:200,mass:1950,torque:270,redline:6300,idle:750,peakAt:.6,cylinders:6,vmax:190,gears:[3.3,2,1.4,1.05,.84,.7],finalDrive:3.9,wheelRadius:.34,drive:"FWD",wheelbase:3,frontWeight:.58,cgHeight:.66,muFront:1.06,muRear:1.06,tireB:8,tireC:1.45,steerMax:.6,steerFade:22,brakeForce:15e3,drag:.56,downforce:0,yawDamp:.75,body:{L:5,W:1.95,H:1.78,track:1.66,wheelF:1.55,wheelR:-1.5,ride:.04,upper:[[2.5,.42],[2.52,.72],[2.35,.86],[1.6,.98],[1.45,1],[-2.38,1.06],[-2.5,1.02],[-2.52,.46],[-2.5,.42]],cabin:[[1.42,1],[.6,1.74],[-2.25,1.76],[-2.42,1.07]],extras:["roundtails"]}},{id:"kross",name:"KROSS GT",tag:"\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",desc:"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440 \u0441 \u0442\u0443\u0440\u0431\u043E\u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0421\u0438\u0434\u0438\u0448\u044C \u0432\u044B\u0441\u043E\u043A\u043E, \u0435\u0434\u0435\u0442 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0432 \u043B\u044E\u0431\u0443\u044E \u043F\u043E\u0433\u043E\u0434\u0443.",colors:["#264653","#e9c46a","#f4a261","#e76f51","#f8f9fa","#000000"],hp:340,mass:1800,torque:450,redline:6500,idle:750,peakAt:.55,cylinders:4,vmax:240,gears:[3.5,2.2,1.5,1.15,.92,.76,.64],finalDrive:3.6,wheelRadius:.36,drive:"AWD",awdFront:.4,wheelbase:2.75,frontWeight:.56,cgHeight:.6,muFront:1.12,muRear:1.1,tireB:8.5,tireC:1.45,steerMax:.58,steerFade:24,brakeForce:17e3,drag:.46,downforce:.1,yawDamp:.75,body:{L:4.55,W:1.9,H:1.66,track:1.62,wheelF:1.38,wheelR:-1.38,ride:.1,upper:[[2.27,.52],[2.3,.82],[2.12,.94],[1.15,1.04],[.95,1.06],[-1.9,1.1],[-2.25,1.06],[-2.28,.56],[-2.26,.52]],cabin:[[.92,1.06],[.2,1.6],[-1.6,1.58],[-2.15,1.1]],extras:["mudflaps"]}},{id:"bukhanka",name:"BUKHANKA",tag:"\u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0439 \u0444\u0443\u0440\u0433\u043E\u043D",desc:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u044F \xAB\u0431\u0443\u0445\u0430\u043D\u043A\u0430\xBB: \u043A\u0440\u0443\u0433\u043B\u044B\u0435 \u0444\u0430\u0440\u044B, \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0444\u043E\u0440\u043C\u0430 \u0445\u043B\u0435\u0431\u043D\u043E\u0433\u043E \u0431\u0430\u0442\u043E\u043D\u0430. \u041C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F, \u043D\u043E \u0435\u0434\u0435\u0442 \u0432\u0435\u0437\u0434\u0435.",colors:["#606c38","#dda15e","#f2e8cf","#457b9d","#bc4749","#ffffff"],hp:112,mass:1850,torque:200,redline:4800,idle:700,peakAt:.5,cylinders:4,vmax:140,gears:[3.78,2.6,1.55,1],finalDrive:4.6,wheelRadius:.38,drive:"AWD",awdFront:.5,wheelbase:2.3,frontWeight:.5,cgHeight:.8,muFront:1,muRear:.98,tireB:7.5,tireC:1.45,steerMax:.62,steerFade:18,brakeForce:12e3,drag:.75,downforce:0,yawDamp:.6,body:{L:4.4,W:1.94,H:2.06,track:1.45,wheelF:1.15,wheelR:-1.15,ride:.16,upper:[[2.2,.62],[2.24,.98],[2.2,1.1],[2.1,1.16],[2,1.18],[-2.05,1.2],[-2.2,1.14],[-2.22,.66],[-2.2,.62]],cabin:[[1.98,1.18],[1.72,1.98],[-2,2],[-2.16,1.2]],extras:["roundlights","mudflaps"]}},{id:"titan",name:"TITAN SUV",tag:"\u0421\u0443\u043F\u0435\u0440-\u043A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440",desc:"\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A \u0441 \u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440\u0430: 650 \u0441\u0438\u043B, \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0432\u0435\u0441\u043A\u0430. \u0422\u044F\u0436\u0451\u043B\u044B\u0439, \u043D\u043E \u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043A\u0430\u043A \u0441\u043F\u043E\u0440\u0442\u043A\u0430\u0440.",colors:["#ffbe0b","#111111","#8338ec","#f8f9fa","#2b9348","#d00000"],hp:650,mass:2200,torque:850,redline:6800,idle:800,peakAt:.55,cylinders:8,vmax:330,gears:[3.2,2.2,1.6,1.25,1,.82,.68,.58],finalDrive:3.4,wheelRadius:.38,drive:"AWD",awdFront:.35,wheelbase:3,frontWeight:.55,cgHeight:.56,muFront:1.26,muRear:1.28,tireB:9,tireC:1.45,steerMax:.56,steerFade:27,brakeForce:23e3,drag:.36,downforce:.5,yawDamp:.85,body:{L:5.1,W:2.02,H:1.64,track:1.72,wheelF:1.55,wheelR:-1.5,ride:.06,upper:[[2.55,.48],[2.58,.76],[2.38,.9],[1.25,1.02],[1.05,1.04],[-2,1.08],[-2.52,1.04],[-2.56,.52],[-2.54,.48]],cabin:[[1.02,1.04],[.25,1.58],[-1.5,1.56],[-2.3,1.08]],extras:["intakes","roofwing"]}},{id:"punto",name:"PUNTO R",tag:"\u0425\u043E\u0442-\u0445\u044D\u0442\u0447",desc:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0437\u043B\u043E\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A \u0441 \u0442\u0443\u0440\u0431\u043E \u0438 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u041B\u0451\u0433\u043A\u0438\u0439 \u0438 \u0432\u0451\u0440\u0442\u043A\u0438\u0439 \u2014 \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0448\u043F\u0438\u043B\u044C\u043A\u0438.",colors:["#d62828","#f8f9fa","#003049","#fcbf49","#2ec4b6","#000000"],hp:230,mass:1250,torque:320,redline:7e3,idle:850,peakAt:.62,cylinders:4,vmax:235,gears:[3.4,2.1,1.5,1.15,.93,.78],finalDrive:4,wheelRadius:.31,drive:"FWD",wheelbase:2.5,frontWeight:.6,cgHeight:.5,muFront:1.16,muRear:1.14,tireB:9,tireC:1.45,steerMax:.62,steerFade:24,brakeForce:13500,drag:.4,downforce:.15,yawDamp:.7,body:{L:4,W:1.78,H:1.44,track:1.52,wheelF:1.25,wheelR:-1.22,upper:[[2,.34],[2.02,.6],[1.85,.72],[1,.82],[.8,.84],[-1.75,.9],[-1.98,.88],[-2,.38],[-1.98,.34]],cabin:[[.78,.84],[.05,1.4],[-1.45,1.38],[-1.9,.9]],extras:["roofwing","stripes"]}},{id:"charger",name:"CHARGER HC",tag:"\u041C\u0430\u0441\u043B\u043A\u0430\u0440",desc:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043C\u0430\u0441\u043B\u043A\u0430\u0440 \u0441 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u043D\u044B\u043C V8 \u043D\u0430 717 \u0441\u0438\u043B. \u0417\u0430\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0434\u044B\u043C\u044F\u0449\u0438\u0435\u0441\u044F \u0448\u0438\u043D\u044B \u2014 \u043A\u043E\u0440\u043E\u043B\u044C \u0431\u0451\u0440\u043D\u0430\u0443\u0442\u043E\u0432.",colors:["#9d0208","#111111","#f48c06","#4361ee","#f8f9fa","#2d6a4f"],hp:717,mass:1950,torque:880,redline:6200,idle:700,peakAt:.55,cylinders:8,vmax:315,gears:[3,2.1,1.6,1.25,1,.82,.68,.56],finalDrive:3.1,wheelRadius:.36,drive:"RWD",wheelbase:3.05,frontWeight:.55,cgHeight:.5,muFront:1.18,muRear:.98,tireB:9,tireC:1.5,steerMax:.62,steerFade:24,brakeForce:2e4,drag:.4,downforce:.1,yawDamp:.45,body:{L:5.1,W:1.96,H:1.46,track:1.66,wheelF:1.62,wheelR:-1.45,upper:[[2.55,.36],[2.57,.62],[2.45,.74],[.9,.86],[.7,.88],[-1.6,.9],[-2.5,.92],[-2.55,.4],[-2.53,.36]],cabin:[[.68,.88],[-.15,1.42],[-1.15,1.42],[-1.75,.9]],extras:["scoop","stripes","ducktail"]}},{id:"diplomat",name:"DIPLOMAT LIMO",tag:"\u041B\u0438\u043C\u0443\u0437\u0438\u043D",desc:"\u0428\u0435\u0441\u0442\u0438\u043C\u0435\u0442\u0440\u043E\u0432\u044B\u0439 \u043B\u0438\u043C\u0443\u0437\u0438\u043D \u0441 V12. \u0420\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u043E\u0440\u0430\u0431\u043B\u044C, \u043D\u043E \u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0439 \u0443\u0434\u0438\u0432\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E.",colors:["#000000","#f8f9fa","#6c757d","#3c096c","#9d0208","#e9c46a"],hp:520,mass:2800,torque:750,redline:6e3,idle:650,peakAt:.5,cylinders:12,vmax:290,gears:[3.4,2.3,1.6,1.2,1,.82,.68],finalDrive:3,wheelRadius:.37,drive:"RWD",wheelbase:4.2,frontWeight:.52,cgHeight:.52,muFront:1.08,muRear:1.04,tireB:8.5,tireC:1.45,steerMax:.58,steerFade:20,brakeForce:22e3,drag:.42,downforce:0,yawDamp:.85,inertiaK:1.1,body:{L:6.6,W:2,H:1.5,track:1.68,wheelF:2.4,wheelR:-2.2,upper:[[3.3,.38],[3.32,.66],[3.15,.78],[1.9,.88],[1.7,.9],[-2.6,.92],[-3.25,.9],[-3.3,.42],[-3.28,.38]],cabin:[[1.68,.9],[.95,1.46],[-2.15,1.46],[-2.8,.92]],extras:[]}},{id:"dune",name:"DUNE BUGGY",tag:"\u041F\u043B\u044F\u0436\u043D\u044B\u0439 \u0431\u0430\u0433\u0433\u0438",desc:"\u041B\u0451\u0433\u043A\u0438\u0439 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0431\u0430\u0433\u0433\u0438 \u0441 \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u043E\u0439 \u0440\u0430\u043C\u043E\u0439. \u0412\u0435\u0441\u0438\u0442 \u043A\u0430\u043A \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B, \u043B\u0435\u0433\u043A\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043D\u043E\u0441.",colors:["#fb8500","#219ebc","#ffb703","#8ac926","#ff006e","#ffffff"],hp:200,mass:760,torque:230,redline:7200,idle:900,peakAt:.6,cylinders:4,vmax:190,gears:[3.3,2.2,1.6,1.2,.95],finalDrive:4.2,wheelRadius:.35,drive:"RWD",wheelbase:2.35,frontWeight:.4,cgHeight:.55,muFront:1.1,muRear:.96,tireB:8,tireC:1.5,steerMax:.7,steerFade:22,brakeForce:9e3,drag:.55,downforce:0,yawDamp:.45,body:{L:3.6,W:1.8,H:1.5,track:1.62,wheelF:1.2,wheelR:-1.1,ride:.14,tireW:.36,upper:[[1.8,.56],[1.82,.72],[1.5,.8],[.7,.84],[.5,.86],[-1.5,.9],[-1.78,.9],[-1.8,.6],[-1.78,.56]],cabin:[[.48,.86],[.05,1.44],[-1.1,1.44],[-1.4,.9]],extras:["rallylights"]}},{id:"gelato",name:"GELATO VAN",tag:"\u0424\u0443\u0440\u0433\u043E\u043D \u0441 \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u044B\u043C",desc:"\u0424\u0443\u0440\u0433\u043E\u043D \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u0449\u0438\u043A\u0430 \u0441 \u043C\u0443\u0437\u044B\u043A\u043E\u0439\u2026 \u0438 \u0442\u0443\u0440\u0431\u043E\u0434\u0438\u0437\u0435\u043B\u0435\u043C. \u0412\u044B\u0441\u043E\u043A\u0438\u0439, \u0432\u0430\u043B\u043A\u0438\u0439 \u0438 \u043E\u0447\u0435\u043D\u044C \u0441\u043C\u0435\u0448\u043D\u043E\u0439 \u0432 \u0437\u0430\u043D\u043E\u0441\u0435.",colors:["#ffafcc","#a2d2ff","#fdffb6","#caffbf","#ffffff","#ffc6ff"],hp:160,mass:2400,torque:360,redline:4600,idle:700,peakAt:.45,cylinders:4,vmax:165,gears:[4,2.4,1.5,1,.8],finalDrive:4.1,wheelRadius:.36,drive:"RWD",wheelbase:3.3,frontWeight:.5,cgHeight:.9,muFront:1,muRear:.94,tireB:7.5,tireC:1.45,steerMax:.6,steerFade:18,brakeForce:14e3,drag:.85,downforce:0,yawDamp:.6,body:{L:5.4,W:2,H:2.5,track:1.7,wheelF:1.75,wheelR:-1.6,ride:.08,upper:[[2.7,.52],[2.72,.86],[2.55,.98],[1.9,1.06],[1.7,1.08],[1.6,2.38],[-2.6,2.42],[-2.7,2.36],[-2.72,.56],[-2.7,.52]],cabin:[[1.7,1.08],[1.2,1.9],[.9,1.92],[.85,1.1]],extras:["roundlights","roundtails"]}}];function Ld(i){let e=i.vmax?Math.min(1,i.vmax/450):Math.min(1,i.hp/i.mass/.47),t=Math.min(1,i.torque*i.gears[0]*i.finalDrive/i.wheelRadius/i.mass/22),n=Math.min(1,((i.muFront+i.muRear)/2-.9)/.45+i.downforce*.2),s=Math.min(1,Math.max(.15,(i.drive==="RWD"?.55:.25)+(i.muFront-i.muRear)*2.2+(i.torque/i.mass-.25)*.8));return{top:e,accel:t,handling:n,drift:s}}function Ni(i){let e=i.vmax||250;return e<200?"D":e<270?"C":e<300?"B":e<340?"A":"S"}function Pn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new mt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Dd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let p=Dd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Dd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new dt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let v=h.getComponent(d,p);o.setComponent(d+u,p,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Ud(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,x=o.length;M<x;M++){let y=o[M],A=i.attributes[y];l[y]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let E=i.morphAttributes[y];E&&(c[y]||(c[y]=[]),E.forEach((T,I)=>{let O=new T.array.constructor(T.count*T.itemSize);c[y][I]=new T.constructor(O,T.itemSize,T.normalized)}))}let f=e*.5,p=Math.log10(1/e),v=Math.pow(10,p),m=f*v;for(let M=0;M<r;M++){let x=n?n.getX(M):M,y="";for(let A=0,E=o.length;A<E;A++){let T=o[A],I=i.getAttribute(T),O=I.itemSize;for(let _=0;_<O;_++)y+=`${~~(I[u[_]](x)*v+m)},`}if(y in t)h.push(t[y]);else{for(let A=0,E=o.length;A<E;A++){let T=o[A],I=i.getAttribute(T),O=i.morphAttributes[T],_=I.itemSize,S=l[T],H=c[T];for(let B=0;B<_;B++){let W=u[B],j=d[B];if(S[j](a,I[W](x)),O)for(let z=0,re=O.length;z<re;z++)H[z][j](a,O[z][W](x))}}t[y]=a,h.push(a),a++}}let g=i.clone();for(let M in i.attributes){let x=l[M];if(g.setAttribute(M,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),M in c)for(let y=0;y<c[M].length;y++){let A=c[M][y];g.morphAttributes[M][y]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return g.setIndex(h),g}var ht=(i,e,t)=>i<e?e:i>t?t:i,Ch=(i,e,t)=>i+(e-i)*t,mi=i=>i*i*(3-2*i);function Sn(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function To(i,e,t){let n=i*374761393+e*668265263+t*2147483647;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)/4294967296}function Fd(i,e,t=1){let n=Math.floor(i),s=Math.floor(e),r=mi(i-n),a=mi(e-s),o=To(n,s,t),l=To(n+1,s,t),c=To(n,s+1,t),h=To(n+1,s+1,t);return Ch(Ch(o,l,r),Ch(c,h,r),a)}function ls(i,e,t=1,n=4){let s=0,r=.5,a=1,o=0;for(let l=0;l<n;l++)s+=Fd(i*a,e*a,t+l*17)*r,o+=r,r*=.5,a*=2.03;return s/o}function Ph(i,e=1){return Fd(i,.5,e)}function ot(i,e){let t=new Se(e),n=i.index?i.toNonIndexed():i,s=n.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=t.r,r[a*3+1]=t.g,r[a*3+2]=t.b;return n.setAttribute("color",new dt(r,3)),n.attributes.uv&&n.deleteAttribute("uv"),n}function fn(i,e,t,n={}){var o;let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let a=new dn(s);return a.colorSpace=kt,n.repeat&&(a.wrapS=a.wrapT=ui),a.anisotropy=(o=n.aniso)!=null?o:4,a}function ni(i){i=Math.max(0,i);let e=Math.floor(i/60),t=Math.floor(i%60),n=Math.floor(i*10%10);return`${e}:${String(t).padStart(2,"0")}.${n}`}var rn=[{id:"desert",name:"\u041A\u0430\u043D\u044C\u043E\u043D \xAB\u0417\u0430\u043A\u0430\u0442\xBB",tag:"\u041F\u0443\u0441\u0442\u044B\u043D\u044F",desc:"\u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u0430\u0441\u0444\u0430\u043B\u044C\u0442, \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u0441\u043A\u0430\u043B\u044B \u0438 \u043A\u0430\u043A\u0442\u0443\u0441\u044B. \u0414\u043B\u0438\u043D\u043D\u044B\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0443\u0433\u0438.",grip:1,night:!1,weather:null,sky:{top:4029641,horizon:16171659,bottom:15180650},fog:{color:15381898,near:120,far:700},sun:{color:16773334,intensity:2.8,dir:[.5,.75,-.4]},hemi:{sky:16771532,ground:10119749,intensity:1.1},ground:{near:14065766,far:12614213,hills:26},road:{asphalt:"#55504b",line:"#f2c230",edge:"#eeeeee",halfWidth:7.5,shoulder:1.6,shoulderColor:"#b98a5a"},barrier:"tires",track:{minR:40,maxR:170,straight:[50,180],hill:9},props:["cactus","rock","mesa","bush"]},{id:"snow",name:"\u041F\u0435\u0440\u0435\u0432\u0430\u043B \xAB\u0410\u043B\u0430-\u0422\u043E\u043E\xBB",tag:"\u0417\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u044B\u0435 \u0433\u043E\u0440\u044B",desc:"\u0421\u043A\u043E\u043B\u044C\u0437\u043A\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430 \u0441\u0440\u0435\u0434\u0438 \u0435\u043B\u0435\u0439 \u0438 \u0432\u0435\u0440\u0448\u0438\u043D. \u041D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C: \u0441\u0446\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043D\u0438\u0436\u0435.",grip:.74,night:!1,weather:"snow",sky:{top:7312324,horizon:14674162,bottom:15922938},fog:{color:14542575,near:60,far:460},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:40},road:{asphalt:"#5d6168",line:"#ffffff",edge:"#f2f2f2",halfWidth:7.2,shoulder:1.8,shoulderColor:"#e9eef4"},barrier:"rail",track:{minR:30,maxR:130,straight:[35,120],hill:14},props:["pine","pine","rock","peak"]},{id:"city",name:"\u041D\u0435\u043E\u043D-\u0421\u0438\u0442\u0438",tag:"\u041D\u043E\u0447\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",desc:"\u041D\u043E\u0447\u043D\u043E\u0439 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441: \u043D\u0435\u043E\u043D\u043E\u0432\u044B\u0435 \u0432\u044B\u0432\u0435\u0441\u043A\u0438, \u0444\u043E\u043D\u0430\u0440\u0438 \u0438 \u043D\u0435\u0431\u043E\u0441\u043A\u0440\u0451\u0431\u044B \u0432\u0434\u043E\u043B\u044C \u0442\u0440\u0430\u0441\u0441\u044B.",grip:.95,night:!0,weather:null,sky:{top:329231,horizon:2758469,bottom:657940},fog:{color:1708080,near:60,far:520},sun:{color:10466559,intensity:.55,dir:[.3,.8,.4]},hemi:{sky:5917338,ground:2105392,intensity:.9},ground:{near:2763315,far:1842212,hills:0},road:{asphalt:"#2c2c33",line:"#ffcc33",edge:"#dddddd",halfWidth:8.3,shoulder:1.4,shoulderColor:"#50505a"},barrier:"concrete",track:{minR:30,maxR:130,straight:[50,160],hill:3,corners:!0},props:["building","building","lamp","neon"]},{id:"field_asphalt",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0410\u0441\u0444\u0430\u043B\u044C\u0442\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0430\u0441\u0444\u0430\u043B\u044C\u0442",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0441 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u0445\u043E\u043B\u043C\u0430\u043C\u0438. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u043A\u0443\u0434\u0430 \u0445\u043E\u0447\u0435\u0448\u044C \u0438 \u0434\u0440\u0438\u0444\u0442\u0438.",grip:1,night:!1,weather:null,horizon:"hills",sky:{top:4163286,horizon:13624306,bottom:14674416},fog:{color:13622760,near:120,far:380},sun:{color:16774368,intensity:2.6,dir:[.45,.8,-.35]},hemi:{sky:15397631,ground:6974058,intensity:1.15},ground:{near:5592666,far:8227450,hills:0},smoke:15263978,dust:9079434,skid:789516,field:{surface:"asphalt",freq:.006,amp:3.4,texBase:"#4d4e52",colA:16777215,colB:14277081,colLow:13619151,props:[["tires",5,1,1.2,.7],["cone",10,1,1,0],["mast",1,1,1,.3],["block",2,1,1,1.1]]}},{id:"field_beach",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u041F\u043B\u044F\u0436\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u043F\u043B\u044F\u0436",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0441\u0447\u0430\u043D\u044B\u0439 \u043F\u043B\u044F\u0436 \u0441 \u0434\u044E\u043D\u0430\u043C\u0438, \u043F\u0430\u043B\u044C\u043C\u0430\u043C\u0438 \u0438 \u043C\u043E\u0440\u0435\u043C. \u041F\u0435\u0441\u043E\u043A \u0441\u043A\u043E\u043B\u044C\u0437\u043A\u0438\u0439 \u2014 \u0434\u0440\u0438\u0444\u0442 \u0432 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435.",grip:.8,night:!1,weather:null,horizon:"sea",sky:{top:3117024,horizon:14217471,bottom:15984328},fog:{color:14281973,near:120,far:400},sun:{color:16773584,intensity:2.9,dir:[-.5,.75,-.3]},hemi:{sky:16774364,ground:13215854,intensity:1.15},ground:{near:15126424,far:3120836,hills:0},smoke:15918792,dust:14730636,skid:9071940,field:{surface:"beach",freq:.009,amp:3.4,shore:-70,texBase:"#e3c98f",colA:16777215,colB:15983296,colLow:11769960,props:[["palm",3,.9,1.3,.45],["umbrella",2,1,1,0],["rock",1.5,.6,1.4,1]]}},{id:"field_snow",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0421\u043D\u0435\u0433\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0441\u043D\u0435\u0433",desc:"\u0411\u0435\u0441\u043A\u0440\u0430\u0439\u043D\u0435\u0435 \u0437\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438 \u0438 \u0451\u043B\u043A\u0430\u043C\u0438. \u0421\u043A\u043E\u043B\u044C\u0437\u043A\u043E \u2014 \u0437\u0430\u043D\u043E\u0441\u044B \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0438 \u043F\u043B\u0430\u0432\u043D\u044B\u0435.",grip:.68,night:!1,weather:"snow",horizon:"snow",sky:{top:7312324,horizon:14937076,bottom:15922938},fog:{color:14739696,near:90,far:360},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:0},smoke:16777215,dust:16054527,skid:8226968,field:{surface:"snow",freq:.007,amp:7,texBase:"#f2f5f9",colA:16777215,colB:15134198,colLow:13622506,props:[["pine",6,.8,1.5,.5],["srock",1.5,.6,1.5,1],["snowman",.4,1,1,.5]]}}];function rv(){let i=[],e=new St(.35,.4,4.5,7);e.translate(0,2.25,0),i.push(ot(e,4160826));let t=new St(.22,.25,1.6,6);t.translate(.8,2.6,0),i.push(ot(t,4160826));let n=new St(.22,.22,.9,6);n.rotateZ(Math.PI/2),n.translate(.45,1.9,0),i.push(ot(n,4160826));let s=new St(.2,.22,1.3,6);s.translate(-.75,3.1,0),i.push(ot(s,4491071));let r=new St(.2,.2,.8,6);return r.rotateZ(Math.PI/2),r.translate(-.4,2.5,0),i.push(ot(r,4491071)),Pn(i)}function av(i=10246971){let e=new Js(1.4,0),t=e.attributes.position,n=Sn(7);for(let s=0;s<t.count;s++)t.setXYZ(s,t.getX(s)*(.8+n()*.5),t.getY(s)*(.6+n()*.3),t.getZ(s)*(.8+n()*.5));return e.translate(0,.6,0),ot(e,i)}function ov(){let i=[],e=new St(14,20,26,9);e.translate(0,13,0),i.push(ot(e,11819066));let t=new St(14.3,14.6,3,9);t.translate(0,22,0),i.push(ot(t,13662799));let n=new St(13,14,1.5,9);return n.translate(0,26.5,0),i.push(ot(n,10242608)),Pn(i)}function lv(){let i=new fo(.7,0);return i.scale(1.2,.6,1.2),i.translate(0,.3,0),ot(i,9076028)}function cv(){let i=[],e=new St(.2,.3,1.6,6);return e.translate(0,.8,0),i.push(ot(e,5913899)),[[2.2,2.6,1.6],[1.7,2.3,3.2],[1.2,2,4.6],[.7,1.6,5.8]].forEach(([n,s,r],a)=>{let o=new bn(n,s,7);o.translate(0,r,0),i.push(ot(o,a%2?2051382:2382398));let l=new bn(n*.72,s*.45,7);l.translate(0,r+s*.3,0),i.push(ot(l,15857146))}),Pn(i)}function hv(){let i=[],e=new bn(38,60,7);e.translate(0,30,0),i.push(ot(e,7043208));let t=new bn(17,27,7);return t.translate(0,46.6,0),i.push(ot(t,16054524)),Pn(i)}function uv(){let i=[],e=new St(.1,.14,7,6);e.translate(0,3.5,0),i.push(ot(e,3816004));let t=new yt(.12,.12,2.2);return t.translate(0,7,-1),i.push(ot(t,3816004)),Pn(i)}function Nd(i){let e={};for(let t of new Set(i.props))t==="cactus"&&(e[t]=rv()),t==="rock"&&(e[t]=av(i.id==="snow"?8226708:10246971)),t==="mesa"&&(e[t]=ov()),t==="bush"&&(e[t]=lv()),t==="pine"&&(e[t]=cv()),t==="peak"&&(e[t]=hv()),t==="lamp"&&(e[t]=uv());return e}var Qt=2,cs=50,Zr=1.45,Bd=11,Ih=3,Lh=500,Od=400;function dv(i){let e=new Map;for(let t of i.children){if(!t.isMesh||t.isInstancedMesh||Array.isArray(t.material)||t.userData.sharedGeo||t.children.length||t.renderOrder)continue;let n=t.geometry,s=t.material.uuid+"|"+Object.keys(n.attributes).sort().join(",")+"|"+(n.index?"i":"n")+"|"+t.castShadow+t.receiveShadow;e.has(s)||e.set(s,[]),e.get(s).push(t)}for(let t of e.values()){if(t.length<2)continue;let n=t.map(a=>{a.updateMatrix();let o=a.geometry.clone();return o.applyMatrix4(a.matrix),o}),s=Pn(n);if(n.forEach(a=>a.dispose()),!s)continue;let r=new de(s,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=t[0].receiveShadow;for(let a of t)i.remove(a),a.geometry.dispose();i.add(r)}}var Ao=class{constructor(e,t,n=1,s=1,r={}){var a,o,l;this.scene=e,this.map=t,this.seed=n,this.quality=s,this.draw=(a=r.draw)!=null?a:1,this.ahead=(o=[8,Bd,16][this.draw])!=null?o:Bd,this.finishIdx=(l=r.finishIdx)!=null?l:1/0,this.rnd=Sn(n*9301+49297),this.hw=t.road.halfWidth,this.sh=t.road.shoulder,this.wall=this.hw+this.sh+.35,this.pts=[],this.base=0,this.g={x:0,z:0,h:0,s:0,k:0,seg:{type:"straight",L:160,u:0,k:0,ramp:1}},this.chunks=new Map,this.root=new Pt,e.add(this.root),this.makeMaterials(),this.propGeo=Nd(t),this.ensure(cs*(this.ahead+2))}newSegment(){if(this.queue&&this.queue.length)return this.queue.shift();let e=this.rnd,t=this.map.track,n=this.g,s=h=>({type:"straight",L:h,u:0,k:0,ramp:1}),r=(h,u,d,f)=>{Math.abs(f+d*u*.75)>Zr&&(d=-d),Math.abs(f+d*u*.75)>Zr&&(u=Math.max(.3,(Zr-Math.abs(f))/.75));let p=u*h;return{seg:{type:"curve",L:p,u:0,k:d/h,ramp:Math.min(p*.3,22)},dh:d*u*.75,dir:d}},a=e()<.5?1:-1,o=e();if(n.s>300&&!(n.ev&&n.s<n.ev.s0+n.ev.L)&&e()<.38&&this.planElevation(),e()<.12){let h=r(t.minR*(.72+e()*.25),1+e()*.6,a,n.h);return this.queue=[s(15+e()*40)],h.seg}if(o<.2)return s(t.straight[0]+e()*(t.straight[1]-t.straight[0]));if(o<.32){let h=t.minR*(1+e()*1.4),u=.5+e()*.7,d=r(h,u,a,n.h),f=r(h*(.8+e()*.5),u*(.8+e()*.4),-d.dir,n.h+d.dh);return this.queue=[s(4+e()*18),f.seg],d.seg}if(o<.4)return r(t.minR*(1+e()*.4),1.1+e()*.7,a,n.h).seg;if(o<.54){let h=r(t.maxR*(.5+e()*.4),.4+e()*.3,a,n.h),u=r(t.minR*(1+e()*.5),.6+e()*.6,h.dir,n.h+h.dh);return this.queue=[u.seg],h.seg}if(o<.64&&t.corners){let h=r(t.minR*(.9+e()*.3),1.45+e()*.25,a,n.h);return this.queue=[s(20+e()*50)],h.seg}let l=t.minR+Math.pow(e(),1.3)*(t.maxR-t.minR),c=r(l,.4+e()*1.3,a,n.h);return e()<.5&&(this.queue=[s(10+e()*50)]),c.seg}planElevation(){let e=this.rnd,t=this.g,n=ht(this.map.track.hill/9,.45,1.5),s=110+e()*170,r=t.lvl||0,a=e(),o=r,l=0;if(a<.55){let c=Math.min(s*.12,(8+e()*14)*n*(s/200)),h=26*n;o=r+(r>h*.4?-c:r<-h*.4||e()<.5?c:-c),o=ht(o,-h,h)}else l=(e()<.7?1:-1)*Math.min(s*.06,(5+e()*7)*n);t.ev={s0:t.s,L:s,from:r,to:o,crest:l}}genPoint(){let e=this.g;e.seg.u>=e.seg.L&&(e.seg=this.newSegment());let t=e.seg,n=Math.min(t.u,t.L-t.u),s=t.k*mi(ht(n/t.ramp,0,1));e.h+=s*Qt,e.h=ht(e.h,-Zr-.1,Zr+.1);let r=this.pts.length+this.base,a={x:e.x,z:e.z,h:e.h,k:s,s:e.s,i:r,y:this.map.track.hill*(Ph(e.s*.0042,this.seed)*2-1)+(Ph(e.s*.021,this.seed+5)-.5)*this.map.track.hill*.15,lx:Math.cos(e.h),lz:-Math.sin(e.h)};if(e.ev){let o=ht((e.s-e.ev.s0)/e.ev.L,0,1);e.lvl=e.ev.from+(e.ev.to-e.ev.from)*mi(o),a.y+=e.lvl+e.ev.crest*Math.sin(Math.PI*o)**2}e.s<120&&(a.y*=e.s/120),this.pts.push(a),e.x+=Math.sin(e.h)*Qt,e.z+=Math.cos(e.h)*Qt,e.s+=Qt,t.u+=Qt}ensure(e){for(;this.base+this.pts.length<=e+2;)this.genPoint()}P(e){e=Math.round(e);let t=ht(e-this.base,0,this.pts.length-1);return this.pts[t]}get lastIdx(){return this.base+this.pts.length-1}sample(e,t={}){this.ensure(Math.ceil(e)+1);let n=Math.max(this.base,Math.floor(e)),s=ht(e-n,0,1),r=this.P(n),a=this.P(n+1);return t.x=r.x+(a.x-r.x)*s,t.y=r.y+(a.y-r.y)*s,t.z=r.z+(a.z-r.z)*s,t.h=r.h+(a.h-r.h)*s,t.k=r.k+(a.k-r.k)*s,t.lx=Math.cos(t.h),t.lz=-Math.sin(t.h),t.slope=(a.y-r.y)/Qt,t}project(e,t,n){let s=ht(Math.round(n),this.base+1,this.lastIdx-2),r=M=>{let x=this.P(M);return(x.x-e)**2+(x.z-t)**2},a=r(s);for(let M=0;M<400;M++){let x=s+1<=this.lastIdx-1?r(s+1):1/0,y=s-1>=this.base?r(s-1):1/0;if(x<a)s++,a=x;else if(y<a)s--,a=y;else break}let o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((e-o.x)*c+(t-o.z)*h)/(c*c+h*h);u<0&&s>this.base&&(s--,o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((e-o.x)*c+(t-o.z)*h)/(c*c+h*h)),u=ht(u,0,1);let d=o.x+c*u,f=o.z+h*u,p=o.h+(l.h-o.h)*u,v=Math.cos(p),m=-Math.sin(p),g=(e-d)*v+(t-f)*m;return{idx:s+u,lat:g,y:o.y+(l.y-o.y)*u,h:p,lx:v,lz:m,slope:(l.y-o.y)/Qt,k:o.k}}terrainY(e,t){let n=Math.abs(t),s=e.x+e.lx*t,r=e.z+e.lz*t,a=this.map.ground.hills,o=e.y,l=this.hw+this.sh;if(this.map.id==="city")return n>l+.4&&(o+=.18),o;n>l&&(o-=Math.min(.6,(n-l)*.25));let c=mi(ht((n-l-6)/70,0,1));return o+=c*a*(ls(s*.008,r*.008,this.seed+11,4)*1.6-.35),o}makeMaterials(){let e=this.map,t=e.road,n=fn(256,512,(c,h,u)=>{c.fillStyle=t.asphalt,c.fillRect(0,0,h,u);let d=Sn(3);for(let f=0;f<9e3;f++){let p=d();c.fillStyle=p<.5?"rgba(0,0,0,0.13)":"rgba(255,255,255,0.07)",c.fillRect(d()*h,d()*u,1+d()*2,1+d()*2)}c.fillStyle="rgba(0,0,0,0.12)",c.fillRect(h*.18,0,h*.1,u),c.fillRect(h*.72,0,h*.1,u),c.fillStyle=t.edge,c.fillRect(6,0,6,u),c.fillRect(h-12,0,6,u),c.fillStyle=t.line,c.fillRect(h/2-4,0,8,u*.5)},{repeat:!0,aniso:8});this.roadMat=new ct({map:n,roughness:e.night?.42:.88,metalness:e.night?.15:0,envMapIntensity:e.night?.8:.4});let s=fn(32,64,(c,h,u)=>{c.fillStyle="#d42b2b",c.fillRect(0,0,h,u/2),c.fillStyle="#f2f2f2",c.fillRect(0,u/2,h,u/2)},{repeat:!0});if(this.kerbMat=new ct({map:s,roughness:.7}),this.shoulderMat=new zt({color:t.shoulderColor}),this.terrainMat=new zt({vertexColors:!0}),this.propMat=new zt({vertexColors:!0,flatShading:!0}),e.barrier==="tires"){let c=fn(128,64,(h,u,d)=>{for(let f=0;f<4;f++){h.fillStyle=f%2?"#e8e8e8":"#d63a2f",h.fillRect(f*32,0,32,d),h.fillStyle="rgba(0,0,0,0.85)";for(let p=0;p<3;p++)h.beginPath(),h.ellipse(f*32+16,p*21+11,12,8,0,0,Math.PI*2),h.fill()}},{repeat:!0});this.barrierMat=new zt({map:c,side:Dt})}else if(e.barrier==="rail")this.barrierMat=new ct({color:12107976,metalness:.7,roughness:.35,side:Dt}),this.postMat=new zt({color:5922662}),this.snowbankMat=new zt({color:16185852,side:Dt});else{let c=fn(128,32,(h,u,d)=>{h.fillStyle="#8d8d95",h.fillRect(0,0,u,d),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(0,0,2,d),h.fillRect(64,0,2,d)},{repeat:!0});this.barrierMat=new zt({map:c,side:Dt}),this.neonMat=new bt({color:2680831}),this.neonMat2=new bt({color:16723622})}let r=c=>fn(512,96,(h,u,d)=>{for(let f=0;f<u;f+=24)for(let p=0;p<d;p+=24)h.fillStyle=(f+p)/24%2?"#111":"#fff",h.fillRect(f,p,24,24);h.fillStyle="rgba(10,10,20,0.85)",h.fillRect(60,12,u-120,d-24),h.fillStyle="#ffd400",h.font="bold 54px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText(c,u/2,d/2+2)});this.gateMatCP=new bt({map:r("\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422"),side:Dt}),this.gateMatStart=new bt({map:r("\u0421\u0422\u0410\u0420\u0422"),side:Dt}),this.gateMatFinish=new bt({map:r("\u0424\u0418\u041D\u0418\u0428"),side:Dt}),this.finishLineMat=new bt({map:fn(256,32,(c,h,u)=>{for(let d=0;d<h;d+=16)for(let f=0;f<u;f+=16)c.fillStyle=(d+f)/16%2?"#111":"#f4f4f4",c.fillRect(d,f,16,16)}),side:Dt}),this.pillarMat=new ct({color:2236968,roughness:.6});let a=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];this.bannerRows=a.length;let o=fn(512,512,(c,h,u)=>{a.forEach(([d,f,p],v)=>{let m=v*64;c.fillStyle=f,c.fillRect(0,m,h,64),c.fillStyle=p,c.fillRect(0,m,h,4),c.fillRect(0,m+60,h,4),c.font="italic 900 42px Arial",c.textAlign="center",c.textBaseline="middle",c.fillText(d,h/2,m+34)})});o.wrapS=ui,this.bannerMat=new zt({map:o,side:Dt});let l=fn(512,128,(c,h,u)=>{c.fillStyle="#3a3d46",c.fillRect(0,0,h,u);let d=Sn(77),f=["#e63946","#f1faee","#457b9d","#ffb703","#2a9d8f","#fb8500","#8338ec","#ffffff","#111111"];for(let p=0;p<5;p++){let v=14+p*23;c.fillStyle="#2b2d34",c.fillRect(0,v+12,h,11);for(let m=4;m<h;m+=9+d()*4)d()<.12||(c.fillStyle=f[Math.floor(d()*f.length)],c.fillRect(m,v+2,7,11),c.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(d()*4)],c.beginPath(),c.arc(m+3.5,v-1,3.2,0,Math.PI*2),c.fill(),d()<.15&&(c.fillStyle="#ffd400",c.fillRect(m+5,v-9,2,8)))}},{repeat:!0});if(l.repeat.set(3,1),this.standMats=[l,l].map(c=>new zt({map:c})),this.standGrey=new zt({color:7040888}),this.roofMat=new zt({color:14034984}),e.id==="city"){this.buildingMats=[0,1,2].map(d=>{let f=fn(128,256,(p,v,m)=>{let g=["#20222c","#262033","#1d2a33"][d];p.fillStyle=g,p.fillRect(0,0,v,m);let M=Sn(100+d);for(let x=6;x<m-4;x+=12)for(let y=6;y<v-4;y+=12){let A=M()<.42;p.fillStyle=A?["#ffd98a","#fff2c4","#9fd8ff","#ffb36b"][Math.floor(M()*4)]:"#0c0d12",p.fillRect(y,x,7,8)}},{repeat:!0});return f.repeat.set(2,3),new zt({map:f,emissiveMap:f,emissive:16777215,emissiveIntensity:.85})}),this.lampHeadMat=new bt({color:16769696});let c=fn(128,128,(d,f,p)=>{let v=d.createRadialGradient(64,64,0,64,64,64);v.addColorStop(0,"rgba(255,210,140,0.55)"),v.addColorStop(1,"rgba(255,210,140,0)"),d.fillStyle=v,d.fillRect(0,0,f,p)});this.poolMat=new bt({map:c,transparent:!0,depthWrite:!1,blending:zs});let h=["RAMEN","HOTEL","24/7","DRIFT","\u041A\u0410\u0424\u0415","NEON","CLUB","\u0422\u0410\u041A\u0421\u0418","SUSHI","GARAGE","\u041A\u0418\u041D\u041E","TURBO"],u=["#ff2ea6","#28e7ff","#ffe600","#7cff4f","#ff7b1c","#b26bff"];this.neonSigns=h.map((d,f)=>new bt({map:fn(256,96,(p,v,m)=>{p.fillStyle="#07070c",p.fillRect(0,0,v,m);let g=u[f%u.length];p.strokeStyle=g,p.lineWidth=5,p.strokeRect(6,6,v-12,m-12),p.shadowColor=g,p.shadowBlur=18,p.fillStyle=g,p.font="bold 56px Arial",p.textAlign="center",p.textBaseline="middle",p.fillText(d,v/2,m/2+3),p.fillText(d,v/2,m/2+3)}),side:Dt}))}}update(e){var o,l;let t=Math.floor(e/cs);this.ensure((t+this.ahead+1)*cs+2);let n=0;for(let c=Math.max(0,t-Ih);c<=t+this.ahead;c++)if(!this.chunks.has(c)){if(n>=2&&c>t+2)break;this.buildChunk(c),n++}let s=this.P(Math.max(this.base,Math.min(this.lastIdx,Math.round(e)))),r=this.draw===0?((l=(o=this.map.fog)==null?void 0:o.far)!=null?l:700)*.8+60:1/0;for(let[c,h]of this.chunks){let u=h.userData;u.cx!==void 0&&(h.visible=Math.hypot(u.cx-s.x,u.cy-s.y,u.cz-s.z)<r),c<t-Ih&&(this.root.remove(h),h.traverse(d=>{d.geometry&&!d.userData.sharedGeo&&d.geometry.dispose(),d.isInstancedMesh&&d.dispose()}),this.chunks.delete(c))}let a=(t-Ih-2)*cs;if(a>this.base+200){let c=a-this.base;this.pts.splice(0,c),this.base+=c}}ribbon(e,t,n,s,r,a=0,o){let l=[],c=[],h=[],u=[],d=n.length,f=0;for(let v=e;v<=t;v++){let m=this.P(v);for(let g=0;g<d;g++){let M=n[g];if(l.push(m.x+m.lx*M,s(m,M),m.z+m.lz*M),c.push(g/(d-1),m.s*a),r){let x=r(m,M);h.push(x.r,x.g,x.b)}}if(v>e&&!(o&&o(v-1))){let g=(f-1)*d,M=f*d;for(let x=0;x<d-1;x++)u.push(g+x,g+x+1,M+x,g+x+1,M+x+1,M+x)}f++}let p=new mt;return p.setAttribute("position",new st(l,3)),p.setAttribute("uv",new st(c,2)),r&&p.setAttribute("color",new st(h,3)),p.setIndex(u),p.computeVertexNormals(),p}buildChunk(e){let t=e*cs,n=t+cs;this.ensure(n+2);let s=new Pt,r=this.map,a=this.hw,o=this.sh,l=M=>M.y,c=new de(this.ribbon(t,n,[a,-a],M=>M.y+.02,null,1/12),this.roadMat);c.receiveShadow=!0,s.add(c);let h=M=>Math.abs(this.P(M).k)>1/170||Math.abs(this.P(M+1).k)>1/170;for(let M of[1,-1]){let x=M>0?[a+o,a]:[-a,-a-o],y=new de(this.ribbon(t,n,x,(E,T)=>E.y+.035+(Math.abs(T)>a+.1?.03:0),null,1/4,E=>!h(E)),this.kerbMat);y.receiveShadow=!0,s.add(y);let A=new de(this.ribbon(t,n,x,E=>E.y+.015,null,0,E=>h(E)),this.shoulderMat);A.receiveShadow=!0,s.add(A)}let u=new Se(r.ground.near),d=new Se(r.ground.far),f=new Se,p=(M,x)=>{let y=M.x+M.lx*x,A=M.z+M.lz*x,E=ls(y*.05,A*.05,this.seed+3,2);return f.copy(u).lerp(d,ht(E*1.3-.15+Math.abs(x)/400,0,1)).clone()},v=a+o,m=[v,v+1.5,v+4,v+9,v+18,v+34,v+60,v+100,v+160,v+240];for(let M of[1,-1]){let x=M>0?m.slice().reverse():m.map(A=>-A),y=new de(this.ribbon(t,n,x,(A,E)=>this.terrainY(A,E),p),this.terrainMat);y.receiveShadow=!0,s.add(y)}this.buildBarriers(s,t,n),this.buildBanners(s,e,t,n),this.buildProps(s,e,t,n);for(let M=t;M<n;M++)M===28&&(this.buildGate(s,M,this.gateMatStart),this.buildStands(s,M+12)),M>=Od&&(M-Od)%Lh===0&&M<this.finishIdx-100&&(this.buildGate(s,M,this.gateMatCP),this.buildStands(s,M-14)),M===this.finishIdx&&(this.buildGate(s,M,this.gateMatFinish),this.buildFinishLine(s,M),this.buildStands(s,M-14),this.buildStands(s,M+20));dv(s);let g=this.P(t+(cs>>1));s.userData.cx=g.x,s.userData.cy=g.y,s.userData.cz=g.z,this.root.add(s),this.chunks.set(e,s)}buildBarriers(e,t,n){let s=this.wall,r=this.map;for(let a of[1,-1]){let o=a;if(r.barrier==="tires"){let l=this.ribbon(t,n,[o*s,o*s],(h,u)=>0,null,.3125);this.wallFromRibbon(l,t,n,o*s,0,1.05);let c=new de(l,this.barrierMat);c.castShadow=!0,c.receiveShadow=!0,e.add(c)}else if(r.barrier==="rail"){let l=this.ribbon(t,n,[o*s,o*s],()=>0,null,.25);this.wallFromRibbon(l,t,n,o*s,.45,.8);let c=new de(l,this.barrierMat);c.castShadow=!0,e.add(c);let h=Math.floor((n-t)/2),u=new Hn(new yt(.12,.85,.12),this.postMat,h);u.userData.sharedGeo=!1;let d=new rt;for(let p=0;p<h;p++){let v=this.P(t+p*2);d.makeTranslation(v.x+v.lx*o*(s+.12),v.y+.42,v.z+v.lz*o*(s+.12)),u.setMatrixAt(p,d)}e.add(u);let f=new de(this.ribbon(t,n,o>0?[s+3,s+1.6,s+.4]:[-s-.4,-s-1.6,-s-3],(p,v)=>p.y+(Math.abs(Math.abs(v)-s-1.6)<.1?.9:.05),null),this.snowbankMat);e.add(f)}else{let l=[[s,0],[s+.12,.3],[s+.18,.85],[s+.32,.85],[s+.4,.3],[s+.45,0]],c=this.sweep(t,n,l.map(([d,f])=>[o*d,f]),1/6),h=new de(c,this.barrierMat);h.castShadow=!0,h.receiveShadow=!0,e.add(h);let u=new de(this.ribbon(t,n,o>0?[s+.3,s+.2]:[-s-.2,-s-.3],d=>d.y+.87,null),o>0?this.neonMat:this.neonMat2);e.add(u)}}}sweep(e,t,n,s=0){let r=[],a=[],o=[],l=n.length,c=0;for(let u=e;u<=t;u++,c++){let d=this.P(u);if(n.forEach(([f,p],v)=>{r.push(d.x+d.lx*f,d.y+p,d.z+d.lz*f),a.push(d.s*s,v/(l-1))}),u>e){let f=(c-1)*l,p=c*l;for(let v=0;v<l-1;v++)o.push(f+v,f+v+1,p+v,f+v+1,p+v+1,p+v)}}let h=new mt;return h.setAttribute("position",new st(r,3)),h.setAttribute("uv",new st(a,2)),h.setIndex(o),h.computeVertexNormals(),h}wallFromRibbon(e,t,n,s,r,a){let o=e.attributes.position,l=0;for(let h=t;h<=n;h++,l++){let u=this.P(h);o.setY(l*2,u.y+a),o.setY(l*2+1,u.y+r)}let c=e.attributes.uv;for(let h=0;h<c.count;h++)c.setX(h,h%2);for(let h=0;h<c.count;h++){let u=c.getX(h),d=c.getY(h);c.setXY(h,d,u)}e.computeVertexNormals()}clearOfRoad(e,t,n,s){let r=(this.wall+s)**2;for(let a=Math.max(this.base,n-90);a<=Math.min(this.lastIdx,n+90);a+=3){let o=this.P(a);if((o.x-e)**2+(o.z-t)**2<r)return!1}return!0}buildProps(e,t,n,s){let r=this.map,a=Sn(this.seed*1e3+t*7919),o=new rt,l=new Mn,c=new P,h=new P,u=new P(0,1,0),d=(f,p,v,m,g,M,x=3,y=!0)=>{let A=this.propGeo[f];if(!A)return;let E=[];for(let I=0;I<p*3&&E.length<p;I++){let O=n+Math.floor(a()*(s-n)),_=this.P(O),H=(a()<.5?-1:1)*(v+a()*(m-v)),B=_.x+_.lx*H,W=_.z+_.lz*H;if(!this.clearOfRoad(B,W,O,x))continue;let j=g+a()*(M-g);l.setFromAxisAngle(u,a()*Math.PI*2),c.set(j,j*(.85+a()*.3),j),h.set(B,this.terrainY(_,H)-.1,W),E.push(o.compose(h,l,c).clone())}if(!E.length)return;let T=new Hn(A,this.propMat,E.length);T.userData.sharedGeo=!0,E.forEach((I,O)=>T.setMatrixAt(O,I)),T.castShadow=y&&this.quality>0,T.receiveShadow=!1,e.add(T)};r.id==="desert"?(d("cactus",8,this.wall+3,70,.8,1.5),d("bush",8,this.wall+2,60,.7,1.6,2,!1),d("rock",8,this.wall+4,110,.6,3.2),a()<.8&&d("mesa",1,150,240,.7,1.7,60,!1)):r.id==="snow"?(d("pine",22,this.wall+3,110,.8,1.6),d("rock",6,this.wall+3,80,.6,2.2),a()<.9&&d("peak",1,170,250,.8,1.8,90,!1)):r.id==="city"&&this.buildCity(e,t,n,s,a)}buildCity(e,t,n,s,r){let a=new yt(1,1,1);a.translate(0,.5,0);let o=[[],[],[]],l=new rt,c=new Mn,h=new P,u=new P,d=new P(0,1,0),f=[];for(let x of[1,-1]){let y=n+Math.floor(r()*3);for(;y<s;){let A=this.P(y),E=10+r()*10,T=12+r()*14,I=14+Math.pow(r(),1.6)*80,O=x*(this.wall+8+T/2+r()*6),_=A.x+A.lx*O,S=A.z+A.lz*O;this.clearOfRoad(_,S,y,T/2+4)&&(c.setFromAxisAngle(d,A.h),h.set(E,I,T),u.set(_,A.y,S),o[Math.floor(r()*3)].push(l.compose(u,c,h).clone()),r()<.45&&f.push({p:A,off:O-x*(T/2+.3),y:A.y+6+r()*Math.min(20,I-10),side:x,w:6+r()*3})),y+=Math.ceil((E+3)/Qt)}}o.forEach((x,y)=>{if(!x.length)return;let A=new Hn(a,this.buildingMats[y],x.length);x.forEach((E,T)=>A.setMatrixAt(T,E)),A.userData.sharedGeo=!1,e.add(A)});let p=new Et(1,1);for(let x of f){let y=this.neonSigns[Math.floor(r()*this.neonSigns.length)],A=new de(p,y);A.userData.sharedGeo=!0,A.scale.set(x.w,x.w*.375,1),A.position.set(x.p.x+x.p.lx*x.off,x.y,x.p.z+x.p.lz*x.off),A.rotation.y=x.p.h+(x.side>0?-Math.PI/2:Math.PI/2),e.add(A)}let v=this.propGeo.lamp,m=[],g=[],M=[];for(let x=n+t%2*7;x<s;x+=15){let y=this.P(x),A=(x/15|0)%2?1:-1,E=A*(this.wall+.9);c.setFromAxisAngle(d,y.h+(A>0?-Math.PI/2:Math.PI/2)),u.set(y.x+y.lx*E,y.y,y.z+y.lz*E),h.set(1,1,1),m.push(l.compose(u,c,h).clone());let T=E-A*2;g.push(new rt().makeTranslation(y.x+y.lx*T,y.y+6.9,y.z+y.lz*T));let I=E-A*3.5;M.push({x:y.x+y.lx*I,y:y.y+.05,z:y.z+y.lz*I})}if(m.length){let x=new Hn(v,this.propMat,m.length);x.userData.sharedGeo=!0,m.forEach((I,O)=>x.setMatrixAt(O,I)),e.add(x);let y=new yt(.5,.15,.9),A=new Hn(y,this.lampHeadMat,g.length);g.forEach((I,O)=>A.setMatrixAt(O,I)),e.add(A);let E=new Et(11,11);E.rotateX(-Math.PI/2);let T=new Hn(E,this.poolMat,M.length);M.forEach((I,O)=>T.setMatrixAt(O,new rt().makeTranslation(I.x,I.y,I.z))),T.renderOrder=1,e.add(T)}}buildBanners(e,t,n,s){let r=Sn(this.seed*31+t*101),a={tires:1.1,rail:.85,concrete:.9}[this.map.barrier],o=[],l=[],c=[],h=this.bannerRows;for(let d=n;d+3<=s;d+=4){if(r()<.45)continue;let f=r()<.5?1:-1,p=Math.floor(r()*h),v=1-(p+1)/h,m=1-p/h,g=f*(this.wall+.05),M=o.length/3;for(let x=0;x<=3;x++){let y=this.P(d+x),A=y.x+y.lx*g,E=y.z+y.lz*g;o.push(A,y.y+a,E,A,y.y+a+.75,E);let T=f>0?x/3:1-x/3;l.push(T,v,T,m)}for(let x=0;x<3;x++){let y=M+x*2;c.push(y,y+2,y+1,y+1,y+2,y+3)}}if(!o.length)return;let u=new mt;u.setAttribute("position",new st(o,3)),u.setAttribute("uv",new st(l,2)),u.setIndex(c),u.computeVertexNormals(),e.add(new de(u,this.bannerMat))}buildStands(e,t){let n=this.P(t);for(let s of[1,-1]){let r=s*(this.wall+7.5),a=n.x+n.lx*r,o=n.z+n.lz*r;if(!this.clearOfRoad(a,o,t,5.5))continue;let l=[this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey];l[s>0?1:0]=this.standMats[0];let c=new de(new yt(8,5,34),l);c.position.set(a,n.y+2.5,o),c.rotation.y=n.h,c.castShadow=!0,e.add(c);let h=new de(new yt(9.5,.3,35),this.roofMat);h.position.set(a-n.lx*s*.6,n.y+7.2,o-n.lz*s*.6),h.rotation.y=n.h,h.rotation.z=s*.08,e.add(h);for(let u of[-16,0,16]){let d=new de(new yt(.25,2.3,.25),this.pillarMat);d.position.set(a-n.lx*s*4.3+Math.sin(n.h)*u,n.y+6,o-n.lz*s*4.3+Math.cos(n.h)*u),e.add(d)}}}buildFinishLine(e,t){let n=this.P(t),s=new Et(this.hw*2,2);s.rotateX(-Math.PI/2);let r=new de(s,this.finishLineMat);r.rotation.y=n.h,r.position.set(n.x,n.y+.04,n.z),e.add(r)}buildGate(e,t,n){let s=this.P(t),r=this.wall+.5,a=new yt(.6,6.5,.6);for(let l of[1,-1]){let c=new de(a,this.pillarMat);c.position.set(s.x+s.lx*l*r,s.y+3.25,s.z+s.lz*l*r),c.rotation.y=s.h,c.castShadow=!0,e.add(c)}let o=new de(new Et(r*2,r*2*96/512),n);o.position.set(s.x,s.y+6.2,s.z),o.rotation.y=s.h+Math.PI,e.add(o)}};var Wn=96,wn=4,Jr=Wn/wn,Dh=3,Ro=class{constructor(e,t,n=1,s=1,r={}){this.isField=!0,this.props=r.props!==!1,this.flat=!!r.flat,this.scene=e,this.map=t,this.seed=n,this.quality=s,this.f=t.field,this.hw=1e9,this.wall=1e9,this.base=0,this.lastIdx=1e9,this.sh=0,this.chunks=new Map,this.root=new Pt,e.add(this.root),this.target={x:0,z:0},this.makeMaterials(),this.propGeo=fv(t.field.surface),this.update(0)}H(e,t){let n=this.f,s=this.seed,r=0;this.flat||(r=(ls(e*n.freq,t*n.freq,s+3,4)-.5)*n.amp*2,r+=(ls(e*n.freq*3.1,t*n.freq*3.1,s+41,2)-.5)*n.amp*.35);let a=Math.hypot(e,t);return r*=mi(ht((a-25)/60,0,1)),n.shore!==void 0&&e<n.shore+30&&(r-=(n.shore+30-e)*.09),r}heightAt(e,t){let n=Math.floor(e/wn),s=Math.floor(t/wn),r=e/wn-n,a=t/wn-s,o=n*wn,l=s*wn,c=this.H(o,l),h=this.H(o+wn,l),u=this.H(o,l+wn),d=this.H(o+wn,l+wn);return r+a<=1?c+(h-c)*r+(u-c)*a:d+(u-d)*(1-r)+(h-d)*(1-a)}grad(e,t){return[(this.heightAt(e+1.2,t)-this.heightAt(e-1.2,t))/(2*1.2),(this.heightAt(e,t+1.2)-this.heightAt(e,t-1.2))/(2*1.2)]}ensure(){}P(e){let t=e*2,n=this.heightAt(0,t);return{x:0,z:t,y:n,h:0,lx:1,lz:0,s:t,k:0}}sample(e,t={}){return Object.assign(t,this.P(e),{slope:0})}project(e,t,n){return{idx:n,lat:0,y:this.heightAt(e,t),h:0,lx:1,lz:0,slope:0,k:0}}collidersNear(e,t){let n=[],s=Math.floor(e/Wn),r=Math.floor(t/Wn);for(let a=s-1;a<=s+1;a++)for(let o=r-1;o<=r+1;o++){let l=this.chunks.get(a+","+o);if(l)for(let c of l.userData.col)n.push(c)}return n}makeMaterials(){let e=this.f,t=fn(512,512,(n,s,r)=>{n.fillStyle=e.texBase,n.fillRect(0,0,s,r);let a=Sn(5);for(let o=0;o<9e3;o++){let l=a();n.fillStyle=l<.5?`rgba(0,0,0,${.05+a()*.08})`:`rgba(255,255,255,${.04+a()*.07})`;let c=1+a()*2.5;n.fillRect(a()*s,a()*r,c,c)}if(e.surface==="asphalt"){n.strokeStyle="rgba(245,245,240,0.8)",n.lineWidth=5,n.strokeRect(2.5,2.5,s-5,r-5),n.setLineDash([26,22]),n.strokeStyle="rgba(242,194,48,0.75)",n.lineWidth=4,n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,r),n.stroke(),n.setLineDash([]),n.strokeStyle="rgba(10,10,10,0.18)",n.lineWidth=7;for(let o=0;o<5;o++)n.beginPath(),n.arc(a()*s,a()*r,60+a()*120,a()*6,a()*6+2.5),n.stroke()}if(e.surface==="beach"){n.strokeStyle="rgba(160,120,70,0.13)",n.lineWidth=3;for(let o=10;o<r;o+=22){n.beginPath();for(let l=0;l<=s;l+=16)n.lineTo(l,o+Math.sin(l*.05+o)*5);n.stroke()}}},{repeat:!0});if(this.groundMat=new zt({map:t,vertexColors:!0}),this.propMat=new zt({vertexColors:!0,flatShading:!0}),e.shore!==void 0){let n=new de(new Et(900,4e3),new zt({color:3120836,transparent:!0,opacity:.88}));n.rotation.x=-Math.PI/2,n.position.set(e.shore-440,-1.4,0),this.water=n,this.root.add(n)}}update(){let e=this.target,t=Math.floor(e.x/Wn),n=Math.floor(e.z/Wn),s=0;for(let r=0;r<=Dh;r++)for(let a=t-r;a<=t+r;a++)for(let o=n-r;o<=n+r;o++){if(Math.max(Math.abs(a-t),Math.abs(o-n))!==r)continue;let l=a+","+o;this.chunks.has(l)||s>=2&&r>1||(this.buildChunk(a,o),s++)}for(let[r,a]of this.chunks){let[o,l]=r.split(",").map(Number);(Math.abs(o-t)>Dh+1||Math.abs(l-n)>Dh+1)&&(this.root.remove(a),a.traverse(c=>{c.geometry&&!c.userData.sharedGeo&&c.geometry.dispose(),c.isInstancedMesh&&c.dispose()}),this.chunks.delete(r))}this.water&&(this.water.position.z=e.z)}buildChunk(e,t){var M;let n=this.f,s=new Pt,r=e*Wn,a=t*Wn,o=Jr+1,l=new Float32Array(o*o*3),c=new Float32Array(o*o*2),h=new Float32Array(o*o*3),u=new Se(n.colA),d=new Se(n.colB),f=new Se((M=n.colLow)!=null?M:n.colB),p=new Se;for(let x=0;x<=Jr;x++)for(let y=0;y<=Jr;y++){let A=x*o+y,E=r+y*wn,T=a+x*wn,I=this.H(E,T);l[A*3]=E,l[A*3+1]=I,l[A*3+2]=T,c[A*2]=E/32,c[A*2+1]=T/32;let O=ls(E*.02,T*.02,this.seed+77,2);p.copy(u).lerp(d,O),n.shore!==void 0?p.lerp(f,mi(ht((n.shore+34-E)/22,0,1))):p.lerp(f,ht(-I/(n.amp*1.2),0,.6)),h[A*3]=p.r,h[A*3+1]=p.g,h[A*3+2]=p.b}let v=[];for(let x=0;x<Jr;x++)for(let y=0;y<Jr;y++){let A=x*o+y,E=A+1,T=A+o,I=T+1;v.push(A,T,E,E,T,I)}let m=new mt;m.setAttribute("position",new dt(l,3)),m.setAttribute("uv",new dt(c,2)),m.setAttribute("color",new dt(h,3)),m.setIndex(v),m.computeVertexNormals();let g=new de(m,this.groundMat);g.receiveShadow=this.quality>0,s.add(g),s.userData.col=[],this.props&&this.buildProps(s,e,t),this.root.add(s),this.chunks.set(e+","+t,s)}buildProps(e,t,n){let s=this.f,r=Sn(this.seed*131+t*7919+n*104729),a=new rt,o=new Mn,l=new P,c=new P,h=new P(0,1,0);for(let[u,d,f,p,v]of s.props){let m=this.propGeo[u];if(!m)continue;let g=[],M=Math.floor(d*(.5+r()));for(let y=0;y<M;y++){let A=t*Wn+r()*Wn,E=n*Wn+r()*Wn;if(Math.hypot(A,E)<45||s.shore!==void 0&&A<s.shore+(u==="palm"||u==="umbrella"?12:40))continue;let T=f+r()*(p-f);o.setFromAxisAngle(h,r()*Math.PI*2),l.set(T,T,T),c.set(A,this.heightAt(A,E)-.05,E),g.push(a.compose(c,o,l).clone()),v>0&&e.userData.col.push({x:A,z:E,r:v*T})}if(!g.length)continue;let x=new Hn(m,this.propMat,g.length);x.userData.sharedGeo=!0,g.forEach((y,A)=>x.setMatrixAt(A,y)),x.castShadow=this.quality>0,e.add(x)}}};function fv(i){let e={},t=n=>Pn(n);{let n=[];for(let s=0;s<3;s++){let r=new ti(.42,.2,6,10);r.rotateX(Math.PI/2),r.translate(0,.2+s*.36,0),n.push(ot(r,s===1?15921906:1842204))}e.tires=t(n)}{let n=new bn(.28,.75,8);n.translate(0,.42,0);let s=new yt(.6,.06,.6);s.translate(0,.03,0);let r=new St(.17,.2,.14,8);r.translate(0,.45,0),e.cone=t([ot(n,16738835),ot(s,16738835),ot(r,16777215)])}{let n=new St(.12,.18,9,6);n.translate(0,4.5,0);let s=new yt(1.4,.25,.5);s.translate(0,9,0),e.mast=t([ot(n,6053992),ot(s,15263968)])}{let n=new yt(3,.8,.7);n.translate(0,.4,0),e.block=t([ot(n,13223613)])}{let n=[],s=0;for(let r=0;r<6;r++){let a=new St(.2-r*.015,.24-r*.015,1.1,6);a.translate(s,.55+r*1.05,0),s+=.12,n.push(ot(a,r%2?9071171:10254928))}for(let r=0;r<7;r++){let a=new yt(.5,.06,3);a.translate(0,0,1.4),a.rotateX(.35),a.rotateY(r/7*Math.PI*2),a.translate(s,6.5,0),n.push(ot(a,r%2?3115578:4169800))}e.palm=t(n)}{let n=new St(.04,.04,2.3,5);n.translate(0,1.15,0);let s=new bn(1.4,.5,8);s.translate(0,2.3,0),e.umbrella=t([ot(n,15658734),ot(s,[16730955,3115744,16763187][Math.floor(Math.random()*3)])])}for(let[n,s]of[["rock",9407104],["srock",8226708]]){let r=new Js(1.2,0),a=r.attributes.position,o=Sn(9);for(let l=0;l<a.count;l++)a.setXYZ(l,a.getX(l)*(.8+o()*.5),a.getY(l)*(.55+o()*.3),a.getZ(l)*(.8+o()*.5));r.translate(0,.45,0),e[n]=ot(r,s)}{let n=[],s=new St(.2,.3,1.6,6);s.translate(0,.8,0),n.push(ot(s,5913899)),[[2,2.4,1.6],[1.5,2.1,3],[1,1.8,4.3]].forEach(([r,a,o],l)=>{let c=new bn(r,a,7);c.translate(0,o,0),n.push(ot(c,l%2?2051382:2382398));let h=new bn(r*.72,a*.45,7);h.translate(0,o+a*.3,0),n.push(ot(h,15857146))}),e.pine=t(n)}{let n=new ei(.6,8,6);n.translate(0,.55,0);let s=new ei(.42,8,6);s.translate(0,1.35,0);let r=new bn(.07,.35,5);r.rotateX(Math.PI/2),r.translate(0,1.38,.52),e.snowman=t([ot(n,16777215),ot(s,16777215),ot(r,16742938)])}return e}var Uh=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Ie={glass:new ct({color:1779251,roughness:.05,metalness:.2,transparent:!0,opacity:.55,envMapIntensity:1.4,depthWrite:!1}),black:new ct({color:1184276,roughness:.65}),gloss:new ct({color:789518,roughness:.25,metalness:.3}),trim:new ct({color:1973794,roughness:.6,metalness:.05}),chrome:new ct({color:15132908,roughness:.12,metalness:1}),tire:new ct({color:1644827,roughness:.92}),disc:new ct({color:7829628,roughness:.35,metalness:.9}),interior:new ct({color:1710621,roughness:.8}),seat:new ct({color:2763312,roughness:.75}),carbon:new ct({color:1710879,roughness:.3,metalness:.5}),lensClear:new ct({color:16777215,roughness:.02,transparent:!0,opacity:.25,depthWrite:!1}),reverse:new ct({color:14540253,emissive:16777215,emissiveIntensity:.1,roughness:.2}),amber:new ct({color:16751130,emissive:16746496,emissiveIntensity:.4,roughness:.3})},kd={kaze:{spokes:6,rim:14277340,caliper:14034984,rimDepth:.06,plate:"01 KG 086 AE"},bulldog:{spokes:5,rim:13225170,caliper:2763306,rimDepth:.03,plate:"01 KG 069 V8",chromeBumpers:!0},veloce:{spokes:10,rim:2105636,caliper:16761856,rimDepth:.02,plate:"01 KG 777 GT"},tundra:{spokes:8,rim:15856113,caliper:14034984,rimDepth:.04,plate:"01 KG 555 RR",cage:!0},ronin:{spokes:6,rim:7172214,caliper:2060256,rimDepth:.05,plate:"01 KG 034 GR"},vanta:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MW"},kitsune:{spokes:5,rim:2829102,caliper:16761856,rimDepth:.05,plate:"01 KG 013 RX"},tora:{spokes:5,rim:14080220,caliper:14034984,rimDepth:.07,plate:"01 KG 002 JZ"},toro:{spokes:10,rim:1842207,caliper:16747520,rimDepth:.02,plate:"01 KG 012 LP"},stutt:{spokes:5,rim:13225170,caliper:16764928,rimDepth:.03,plate:"01 KG 911 SS"},shiro:{spokes:8,rim:12633032,caliper:4473924,rimDepth:.07,plate:"01 KG 086 AE"},hayate:{spokes:6,rim:15263976,caliper:14034984,rimDepth:.04,plate:"01 KG 009 EV",cage:!0},sakura:{spokes:5,rim:2829634,caliper:16731501,rimDepth:.07,plate:"01 KG 015 SL"},stallion:{spokes:5,rim:1842207,caliper:14034984,rimDepth:.04,plate:"01 KG 050 GT"},pixel:{spokes:5,rim:9279918,caliper:14034984,rimDepth:.03,plate:"01 KG 007 GT"},estate:{spokes:10,rim:3948357,caliper:14034984,rimDepth:.03,plate:"01 KG 006 RS"},aurora:{spokes:10,rim:1118484,caliper:62932,rimDepth:.02,plate:"01 KG 001 HX"},bars:{spokes:6,rim:2829099,caliper:5592405,rimDepth:.06,plate:"01 KG 444 OR"},baron:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MB"},mamba:{spokes:5,rim:1842207,caliper:16759304,rimDepth:.04,plate:"01 KG 010 VR"},kei:{spokes:4,rim:14277340,caliper:4473924,rimDepth:.03,plate:"01 KG 660 KC"},zhiga:{spokes:6,rim:13225170,caliper:4473924,rimDepth:.06,plate:"01 KG 107 AA",chromeBumpers:!0},taiga:{spokes:5,rim:6052956,caliper:4473924,rimDepth:.05,plate:"01 KG 214 NV"},rossa:{spokes:7,rim:14080220,caliper:14034984,rimDepth:.06,plate:"01 KG 124 SP",chromeBumpers:!0},rancho:{spokes:6,rim:2829099,caliper:5592405,rimDepth:.07,plate:"01 KG 150 V8",chromeBumpers:!0},volt:{spokes:10,rim:9279918,caliper:3835647,rimDepth:.02,plate:"01 KG 003 EV"},gruppo:{spokes:8,rim:15856113,caliper:14034984,rimDepth:.04,plate:"01 KG 037 GB",cage:!0},kaiju:{spokes:6,rim:1118484,caliper:16196997,rimDepth:.08,plate:"01 KG 760 DR"},proto:{spokes:10,rim:1118484,caliper:16765286,rimDepth:.02,plate:"01 KG 024 LM"},zenith:{spokes:10,rim:1842207,caliper:16556817,rimDepth:.02,plate:"01 KG 016 W1"},bigfoot:{spokes:6,rim:12633292,caliper:3355443,rimDepth:.12,plate:"01 KG 999 MT"},semya:{spokes:5,rim:12106948,caliper:4473924,rimDepth:.04,plate:"01 KG 777 VN"},kross:{spokes:5,rim:3815999,caliper:15167313,rimDepth:.05,plate:"01 KG 340 KR"},bukhanka:{spokes:4,rim:6319160,caliper:3355443,rimDepth:.06,plate:"01 KG 452 UZ"},titan:{spokes:10,rim:1842207,caliper:16760331,rimDepth:.03,plate:"01 KG 650 TT"},punto:{spokes:7,rim:14737632,caliper:14034984,rimDepth:.04,plate:"01 KG 230 PR"},charger:{spokes:5,rim:2829099,caliper:16026630,rimDepth:.07,plate:"01 KG 717 HC"},diplomat:{spokes:10,rim:15263978,caliper:5592405,rimDepth:.03,plate:"01 KG 001 VIP",chromeBumpers:!0},dune:{spokes:6,rim:2236962,caliper:3355443,rimDepth:.08,plate:"01 KG 200 DB",cage:!0},gelato:{spokes:5,rim:16777215,caliper:4473924,rimDepth:.04,plate:"01 KG 123 IC"}};function pv(i,e=2){for(let t=0;t<e;t++){let n=[i[0]];for(let s=0;s<i.length-1;s++){let r=i[s],a=i[s+1];n.push([r[0]*.75+a[0]*.25,r[1]*.75+a[1]*.25]),n.push([r[0]*.25+a[0]*.75,r[1]*.25+a[1]*.75])}n.push(i[i.length-1]),i=n}return i}function mv(i,e,t){var l;let n=new Di,s=i[i.length-1][1];n.moveTo(i[0][0],i[0][1]);for(let c=1;c<i.length;c++)n.lineTo(i[c][0],i[c][1]);let r=t+.08,a=t+((l=e.ride)!=null?l:0),o=c=>{n.lineTo(c-r,s),n.lineTo(c-r,Math.min(a,s+.02)),n.absarc(c,a,r,Math.PI,0,!0),n.lineTo(c+r,s)};return o(e.wheelR),o(e.wheelF),n.lineTo(i[0][0],s),n.closePath(),n}function Co(i,e,t,n=3){let s=new uo(i,{depth:e-t*2,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:n,curveSegments:14});s.rotateY(-Math.PI/2),s.computeBoundingBox();let r=s.boundingBox;return s.translate(-(r.min.x+r.max.x)/2,0,0),s}function zd(i,e){let t=i.attributes.position,n=new P;for(let s=0;s<t.count;s++)n.fromBufferAttribute(t,s),e(n),t.setXYZ(s,n.x,n.y,n.z);i.computeVertexNormals()}function $e(i,e,t,n,s,r,a,o){let l=new de(new yt(i,e,t),n);return l.position.set(s,r,a),l.castShadow=!0,o&&o.add(l),l}function $t(i,e,t,n,s,r,a,o,l=16){let c=new St(i,i,e,l);a==="x"?c.rotateZ(Math.PI/2):a==="z"&&c.rotateX(Math.PI/2);let h=new de(c,t);return h.position.set(n,s,r),o&&o.add(h),h}function gi(i,e,t,n,s,r=!1){let a=i.distanceTo(e),o=r?new St(t,t,a,8).rotateX(Math.PI/2):new yt(t,t,a),l=new de(o,n);return l.position.copy(i).add(e).multiplyScalar(.5),l.lookAt(e),s.add(l),l}function Qr(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new dn(n);return s.colorSpace=kt,s.anisotropy=4,s}var Ht={};function gv(){return Ht.grille||(Ht.grille=Qr(128,64,(i,e,t)=>{i.fillStyle="#050505",i.fillRect(0,0,e,t),i.strokeStyle="#3a3a3e",i.lineWidth=2;for(let n=0;n<t+8;n+=8)for(let s=n/8%2?0:5;s<e+10;s+=10){i.beginPath();for(let r=0;r<6;r++){let a=r*Math.PI/3;i.lineTo(s+Math.cos(a)*4,n+Math.sin(a)*4)}i.closePath(),i.stroke()}}))}function xv(i){var e;return Ht[e="p"+i]||(Ht[e]=Qr(256,56,(t,n,s)=>{t.fillStyle="#f4f4f4",t.fillRect(0,0,n,s),t.strokeStyle="#111",t.lineWidth=4,t.strokeRect(2,2,n-4,s-4),t.fillStyle="#d0021b",t.fillRect(6,6,34,s-12),t.fillStyle="#ffd400",t.beginPath(),t.arc(23,22,8,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.font="bold 12px Arial",t.textAlign="center",t.fillText("KG",23,45),t.fillStyle="#111",t.font="bold 34px Arial",t.textBaseline="middle",t.fillText(i.slice(6),150,30),t.font="bold 26px Arial",t.fillText(i.slice(0,2),62,30)}))}function vv(i,e){var t;return Ht[t="n"+i+e]||(Ht[t]=Qr(128,128,n=>{n.fillStyle=e?"#111":"#fff",n.beginPath(),n.arc(64,64,58,0,Math.PI*2),n.fill(),n.fillStyle=e?"#fff":"#111",n.font="bold 70px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)}))}var Hd=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];function _v(i){var s;let[e,t,n]=Hd[i%Hd.length];return Ht[s="s"+i]||(Ht[s]=Qr(256,64,(r,a,o)=>{r.fillStyle=t,r.beginPath(),r.roundRect?r.roundRect(2,2,a-4,o-4,14):r.rect(2,2,a-4,o-4),r.fill(),r.strokeStyle=n,r.lineWidth=3,r.stroke(),r.fillStyle=n,r.font="italic 900 36px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(e,a/2,o/2+2)}))}function yv(i){var e;return Ht[e="b"+i]||(Ht[e]=Qr(512,48,(t,n,s)=>{t.fillStyle="#0d0d10",t.fillRect(0,0,n,s),t.fillStyle="#fff",t.font="italic 900 34px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(i,n/2,s/2+2)}))}function Mv(){if(Ht.ramp)return Ht.ramp;let i=new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),e=new zr(i,4,1,yn);return e.minFilter=e.magFilter=sn,e.needsUpdate=!0,Ht.ramp=e}function bv(){return Ht.ao||(Ht.ao=(()=>{let i=document.createElement("canvas");i.width=64,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(32,64,8,32,64,64);return t.addColorStop(0,"rgba(0,0,0,0.8)"),t.addColorStop(.6,"rgba(0,0,0,0.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,128),new dn(i)})())}function Gd(i){i.updateMatrixWorld(!0);let e=new rt().copy(i.matrixWorld).invert(),t=new Map,n=[],s=[];i.traverse(a=>{a.isMesh&&n.push(a)});let r=new rt;for(let a of n){let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new st(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(r.multiplyMatrices(e,a.matrixWorld));let l=a.material.uuid;t.has(l)||t.set(l,{mat:a.material,list:[],order:a.renderOrder}),t.get(l).list.push(o),a.parent.remove(a),a.geometry.dispose()}for(let{mat:a,list:o,order:l}of t.values()){let c=Pn(o);o.forEach(u=>u.dispose());let h=new de(c,a);h.renderOrder=l,h.castShadow=a!==Ie.lensClear&&!(a.transparent&&a!==Ie.glass),h.receiveShadow=a!==Ie.glass,i.add(h),s.push(h)}return s}var Vd=new wt({side:Ut,uniforms:{t:{value:.022}},vertexShader:"uniform float t; void main(){ vec3 p = position + normal * t; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.03, 0.03, 0.045, 1.0); }"});function Wd(i,e){let t=i.geometry.clone();t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=Ud(t,.001),t.computeVertexNormals();let n=e?Vd.clone():Vd;e&&(n.uniforms.t.value=e);let s=new de(t,n);return s.position.copy(i.position),s.quaternion.copy(i.quaternion),s.userData.outlineOf=i,i.parent.add(s),s}function Sv(i,e,t,n){let s=new Pt,r=e/2,a=[[i*.7,-r*.96],[i*.86,-r],[i*.95,-r*.92],[i*.995,-r*.6],[i,-r*.2],[i,r*.2],[i*.995,r*.6],[i*.95,r*.92],[i*.86,r],[i*.7,r*.96]],o=new co(a.map(([p,v])=>new ie(p,v)),28);o.rotateZ(Math.PI/2);let l=new de(o,Ie.tire);l.castShadow=!0,s.add(l);let c=new ct({color:t.rim,roughness:.3,metalness:.6}),h=new de(new St(i*.7,i*.7,e*.92,24,1,!0).rotateZ(Math.PI/2),new ct({color:3816255,metalness:.8,roughness:.4,side:Dt}));s.add(h);let u=n*(r*.82-t.rimDepth),d=new de(new ti(i*.69,.018,6,28).rotateY(Math.PI/2),c);d.position.x=n*r*.86,s.add(d),$t(i*.56,.035,Ie.disc,-n*.02,0,0,"x",s,24),$t(i*.2,.06,Ie.trim,-n*.01,0,0,"x",s,12);let f=t.spokes;for(let p=0;p<f;p++){let v=p/f*Math.PI*2,m=new de(new yt(.035,i*.52,f>8?.035:.06),c);m.position.set(u,Math.cos(v)*i*.42,Math.sin(v)*i*.42),m.rotation.x=v,s.add(m)}$t(i*.17,.06,c,u,0,0,"x",s,16);for(let p=0;p<5;p++){let v=p/5*Math.PI*2;$t(.014,.05,Ie.chrome,u+n*.03,Math.cos(v)*i*.1,Math.sin(v)*i*.1,"x",s,6)}return $t(i*.055,.07,Ie.gloss,u+n*.02,0,0,"x",s,12),s}function jr(i,e,t={}){var Re,tt,he,Ee,Oe,ze;let n=i.body,s=i.wheelRadius,r=kd[i.id]||kd.kaze,a=new Pt,o=new mo({color:e,gradientMap:Mv()}),l=new Se(e).getHSL({}).l>.6,c=new ct({color:i.id==="vanta"?1920952:l?1315860:15921906,roughness:.4}),h=n.L,u=n.W,d=pv(n.upper,2),f=h/2,p=n.cabin[0][1],v=(D,ee)=>(1-.085*Uh(.55,1.02,Math.abs(D)/f))*(1-.07*Uh(p-.3,p+.05,ee)),m=Co(mv(d,n,s),u,.07,3);zd(m,D=>{D.x*=v(D.z,D.y)});let g=new de(m,o);g.castShadow=!0,g.receiveShadow=!0,a.add(g);let M=(D,ee)=>u/2*v(D,ee),x=n.cabin,y=u*.84,A=Math.max(x[1][1],x[2][1]),E=D=>1-.2*Uh(p,A,D),T=new Di;T.moveTo(x[0][0]+.06,x[0][1]-.06);for(let D=0;D<x.length;D++)T.lineTo(x[D][0],x[D][1]);T.lineTo(x[x.length-1][0]+.06,x[x.length-1][1]-.06),T.closePath();let I=Co(T,y,.04,2);zd(I,D=>{D.x*=E(D.y)});let O=new de(I,Ie.glass);O.renderOrder=3,a.add(O);let _=D=>y/2*E(D),S=Math.abs(x[1][0]-x[2][0])+.12,H=(x[1][0]+x[2][0])/2,B=new Di;B.moveTo(-S/2,0),B.lineTo(S/2,0),B.lineTo(S/2-.04,.05),B.lineTo(-S/2+.04,.06),B.closePath();let W=Co(B,_(A)*2+.04,.02,2),j=new de(W,o);j.position.set(0,A-.02,H),j.castShadow=!0,a.add(j);for(let D of[1,-1]){let ee=(De,U,pe=.012)=>new P(D*(_(U)+pe),U,De);gi(ee(x[0][0],x[0][1]),ee(x[1][0],x[1][1]),.07,o,a),gi(ee(x[2][0],x[2][1]),ee(x[3][0],x[3][1]),.09,o,a);let fe=x[1][0]+(x[2][0]-x[1][0])*.45;gi(ee(fe,p),ee(fe,A-.03),.05,Ie.gloss,a),gi(ee(x[0][0]-.02,p+.015,.02),ee(x[3][0]+.05,p+.015,.02),.03,Ie.gloss,a)}for(let D of[.2,-.25])$e(.5,.015,.03,Ie.black,D*u,x[0][1]+.03,x[0][0]-.1,a).rotation.set(-.5,0,.12);let z=.45;$e(y*.9,.2,.35,Ie.interior,0,p-.05,x[0][0]-.25,a);for(let D of[1,-1]){let ee=D*y*.24,fe=x[1][0]-.3;$e(.42,.12,.45,Ie.seat,ee,z+.12,fe,a);let De=$e(.42,.55,.1,Ie.seat,ee,z+.42,fe-.25,a);De.rotation.x=-.18,$e(.2,.14,.08,Ie.seat,ee,z+.78,fe-.3,a)}let re=new de(new ti(.15,.022,8,20),Ie.interior);if(re.position.set(y*.24,p+.05,x[0][0]-.5),re.rotation.x=-.35,a.add(re),r.cage){let D=x[1][0]-.1,ee=x[2][0]+.1,fe=A-.08;for(let De of[1,-1]){let U=De*_(A)*.95;gi(new P(U,z,D),new P(U,fe,D),.02,Ie.chrome,a,!0),gi(new P(U,fe,D),new P(U,fe,ee),.02,Ie.chrome,a,!0),gi(new P(U,z,ee),new P(U,fe,ee),.02,Ie.chrome,a,!0)}gi(new P(_(A)*.95,fe,ee),new P(-_(A)*.95,z+.2,ee),.02,Ie.chrome,a,!0)}let G=Math.max(...n.upper.map(D=>D[0]))+.07,ue=Math.min(...n.upper.map(D=>D[0]))-.07,be=n.upper[0][1],Me=(n.upper[0][1]+n.upper[1][1])/2+.06,et=n.upper.length-2,Je=(n.upper[et][1]+n.upper[et+1][1])/2+.08,Z=new ct({color:16774872,emissive:16773824,emissiveIntensity:t.night?2.4:.5,roughness:.15}),ae=new ct({color:6948872,emissive:16718362,emissiveIntensity:t.night?1.2:.35,roughness:.25}),Te=u*.92,le=n.extras||[];if(le.includes("popups"))for(let D of[1,-1])$e(.44,.05,.32,o,D*u*.3,n.upper[2][1]+.02,G-.4,a),$e(.4,.02,.28,Ie.gloss,D*u*.3,n.upper[2][1]-.005,G-.4,a);if(le.includes("roundlights"))for(let D of[1,-1]){let ee=D*Te*.34,fe=n.upper[2][1]-.02,De=G-.32;$t(.12,.2,o,ee,fe,De,"z",a,20),$t(.1,.03,Z,ee,fe,De+.1,"z",a,20)}let Xe=n.upper[1][1]-n.upper[0][1]<.2;if(Xe){let D=G-.35,ee=d[0][1];for(let De=0;De<d.length-1;De++)if(d[De][0]>=D&&d[De+1][0]<=D){let U=(d[De][0]-D)/(d[De][0]-d[De+1][0]);ee=d[De][1]+(d[De+1][1]-d[De][1])*U}let fe=Math.atan2(n.upper[2][1]-n.upper[1][1],n.upper[1][0]-n.upper[2][0]);for(let De of[1,-1]){let U=$e(.46,.03,.2,Ie.gloss,De*Te*.32,ee+.09,D,a);U.rotation.x=fe;let pe=$e(.4,.035,.05,Z,De*Te*.32,ee+.1,D+.07,a);pe.rotation.x=fe}}for(let D of le.includes("roundlights")||Xe?[]:[1,-1]){let ee=D*Te*.33;$e(.44,.15,.08,Ie.gloss,ee,Me,G-.02,a),$e(.36,.07,.03,Z,ee+D*.03,Me+.01,G+.02,a),$t(.04,.03,Ie.chrome,ee-D*.12,Me,G+.025,"z",a,14),$e(.44,.15,.01,Ie.lensClear,ee,Me,G+.035,a),$e(.1,.035,.02,Ie.amber,ee+D*.16,Me-.055,G+.03,a)}let Fe=new ct({map:gv(),roughness:.6}),Ve=new de(new Et(u*.34,.1),Fe);Ve.position.set(0,Me-.04,G+.012),a.add(Ve);let We=new de(new Et(u*.62,.12),Fe);We.position.set(0,be+.09,G+.01),a.add(We),$e(u*.94,.06,.14,r.chromeBumpers?Ie.chrome:Ie.trim,0,be+.01,G-.01,a),$e(u*.9,.02,.12,Ie.carbon,0,be-.035,G+.03,a);for(let D of[1,-1])$t(.04,.03,Z,D*u*.37,be+.09,G+.01,"z",a,12);let J=new ct({map:xv(r.plate),roughness:.5}),C=new de(new Et(.44,.1),J);if(C.position.set(0,be+.1,G+.02),a.add(C),$t(.04,.015,Ie.chrome,0,Me+.04,G+.02,"z",a,16),le.includes("roundtails"))for(let D of[1,-1])for(let ee of[.22,.38])$t(.085,.05,Ie.gloss,D*u*ee,Je,ue+.01,"z",a,18),$t(.07,.06,ae,D*u*ee,Je,ue-.005,"z",a,18),$t(.03,.065,ae,D*u*ee,Je,ue-.01,"z",a,12);else{$e(u*.88,.13,.05,Ie.gloss,0,Je,ue+.015,a);for(let D of[1,-1])$e(.42,.09,.03,ae,D*u*.28,Je,ue-.005,a),$e(.1,.05,.03,Ie.reverse,D*u*.1,Je,ue-.005,a);$e(u*.12,.03,.03,ae,0,Je+.02,ue-.005,a)}let ce=n.upper[n.upper.length-1][1];$e(u*.94,.07,.14,r.chromeBumpers?Ie.chrome:Ie.trim,0,ce+.01,ue+.01,a);let me=new de(new Et(.44,.1),J);if(me.position.set(0,Je-.16,ue-.01),me.rotation.y=Math.PI,a.add(me),le.includes("wing")||le.includes("intakes")){$e(u*.7,.08,.2,Ie.carbon,0,ce-.02,ue+.05,a);for(let D=-2;D<=2;D++)$e(.015,.1,.22,Ie.carbon,D*u*.13,ce-.02,ue+.03,a)}let se=i.id==="veloce"?[[.06,0],[-.06,0]]:i.cylinders>=6?[[u*.3,0],[u*.36,0],[-u*.3,0],[-u*.36,0]]:[[u*.3,0]];for(let[D]of se)$t(.045,.2,Ie.chrome,D,ce+0,ue+.02,"z",a,14),$t(.032,.21,Ie.black,D,ce+0,ue+.02,"z",a,12);for(let D of[1,-1]){let ee=x[0][0]-.2,fe=p+.1,De=D*(M(ee,p)+.06);gi(new P(D*(M(ee,p)-.02),p+.02,ee),new P(De,fe,ee),.025,Ie.gloss,a),$e(.13,.09,.14,o,De+D*.03,fe,ee,a),$e(.01,.07,.11,Ie.chrome,De+D*.03,fe,ee-.075,a);let U=x[0][0]-.05,pe=x[1][0]+(x[2][0]-x[1][0])*.45,Y=(ce+p)/2;for(let ye of[U,pe])$e(.008,p-ce-.08,.012,Ie.black,D*(M(ye,Y)+.003),Y+.02,ye,a);$e(.008,.012,Math.abs(U-pe),Ie.black,D*(M((U+pe)/2,ce+.06)+.003),ce+.06,(U+pe)/2,a),$e(.03,.03,.14,Ie.gloss,D*(M(pe+.2,p-.1)+.012),p-.1,pe+.2,a);let ne=Math.abs(n.wheelF-n.wheelR)-(s+.1)*2;$e(.07,.1,ne,Ie.carbon,D*(M(0,ce)+.01),ce+.04,(n.wheelF+n.wheelR)/2,a),$t(.06,.01,Ie.trim,D*(M(n.wheelR+.35,p-.15)+.004),p-.15,n.wheelR+.35,"x",a,14);for(let ye of[n.wheelF,n.wheelR]){let xe=new de(new ti(s+.09,.035,6,20,Math.PI),Ie.trim);xe.rotation.y=Math.PI/2,xe.position.set(D*(M(ye,s)+.005),s+((Re=n.ride)!=null?Re:0),ye),a.add(xe)}if(!le.includes("stripes")){let ye=new ct({map:vv((tt=t.number)!=null?tt:i.id.length*17%90+10,l),transparent:!0,roughness:.4}),xe=new de(new Et(.46,.46),ye),je=(U+pe)/2;xe.position.set(D*(M(je,.66)+.006),.66,je),xe.rotation.y=D*Math.PI/2,a.add(xe)}}let ge=Math.max(...n.upper.filter(D=>D[0]<x[x.length-1][0]+.05).map(D=>D[1]));if(le.includes("wing")){let D=new Di;D.moveTo(0,0),D.lineTo(.36,.02),D.lineTo(.34,.05),D.lineTo(.02,.04),D.closePath();let ee=Co(D,u*.95,.01,1),fe=new de(ee,i.id==="ronin"?Ie.carbon:o);fe.rotation.y=Math.PI,fe.position.set(0,ge+.32,ue+.46),fe.castShadow=!0,a.add(fe);for(let De of[1,-1])$e(.03,.3,.12,Ie.gloss,De*u*.3,ge+.16,ue+.3,a),$e(.015,.16,.42,i.id==="ronin"?Ie.carbon:o,De*u*.475,ge+.33,ue+.28,a)}else le.includes("ducktail")&&$e(u*.88,.05,.16,o,0,ge+.04,ue+.13,a);if(le.includes("roofwing")){$e(_(A)*2+.06,.035,.28,o,0,A+.07,x[2][0]-.1,a);for(let D of[1,-1])$e(.02,.1,.26,o,D*(_(A)+.03),A+.04,x[2][0]-.1,a)}if(le.includes("scoop")){let D=(n.upper[2][0]+x[0][0])/2;$e(.55,.1,.75,o,0,n.upper[3][1]+.05,D,a);let ee=new de(new Et(.46,.07),Fe);ee.position.set(0,n.upper[3][1]+.06,D+.38),a.add(ee)}if(i.id==="ronin"){let D=(n.upper[2][0]+x[0][0])/2;for(let ee of[1,-1])for(let fe=0;fe<4;fe++)$e(.22,.012,.03,Ie.gloss,ee*.32,n.upper[3][1]+.02,D-.12+fe*.08,a);$e(u*.9,.025,.1,Ie.carbon,0,be-.04,G+.06,a)}if(i.id==="veloce")for(let D=0;D<6;D++)$e(u*.5,.012,.05,Ie.gloss,0,x[3][1]+.01-D*.012,x[3][0]+.05-D*.1-.12,a);if(le.includes("roofscoop")){$e(.36,.08,.4,o,0,A+.07,H+.25,a);let D=new de(new Et(.3,.05),Fe);D.position.set(0,A+.07,H+.451),a.add(D)}if(le.includes("intakes"))for(let D of[1,-1]){let ee=new de(new Et(.62,.2),Fe);ee.position.set(D*(M(-.6,.55)+.006),.55,-.6),ee.rotation.y=D*Math.PI/2,a.add(ee)}if(le.includes("stripes"))for(let D of[.13,-.13]){let ee=$e(.16,.008,Math.abs(G-x[0][0]),c,D,0,(G+x[0][0])/2,a);ee.position.y=n.upper[3][1]+.03,$e(.16,.008,S,c,D,A+.045,H,a),$e(.16,.008,Math.abs(x[3][0]-ue),c,D,ge+.012,(x[3][0]+ue)/2,a)}if(le.includes("rallylights")){$e(u*.7,.03,.05,Ie.gloss,0,Me+.12,G+.1,a);for(let D of[.3,.1,-.1,-.3])$t(.085,.07,Ie.gloss,D*u,Me+.05,G+.12,"z",a,16),$t(.07,.075,Z,D*u,Me+.05,G+.125,"z",a,16)}if(le.includes("mudflaps"))for(let D of[1,-1])for(let ee of[n.wheelF-s-.14,n.wheelR-s-.14])$e(.3,.28,.015,Ie.black,D*(n.track/2),.26,ee,a);if(i.id==="kaze"||i.id==="bulldog"){let D=new de(new St(.004,.006,.55,5),Ie.black);D.position.set(-u*.35,ge+.28,ue+.45),D.rotation.x=-.25,a.add(D)}i.id==="tundra"&&$e(.8,.012,.14,c,0,A+.045,H-.2,a);{let D=new P(0,x[1][1]-x[0][1],x[1][0]-x[0][0]).normalize(),ee=new P(0,-D.z,D.y).normalize(),fe=new P(0,x[1][1],x[1][0]).addScaledVector(D,-.08).addScaledVector(ee,.012),De=new de(new Et(_(fe.y)*2*.95,.11),new ct({map:yv(r.banner||i.name+" RACING"),roughness:.5}));De.position.copy(fe),De.lookAt(fe.clone().add(ee)),a.add(De);let U=i.id.charCodeAt(0)+i.id.charCodeAt(1),pe=(xe,je,Tt,Vt)=>{for(let lt of[1,-1]){let Nt=new de(new Et(Vt,Vt/4),new ct({map:_v(U+xe),transparent:!0,roughness:.45}));Nt.position.set(lt*(M(je,Tt)+.007),Tt,je),Nt.rotation.y=lt*Math.PI/2,a.add(Nt)}};pe(0,n.wheelF-.02,s*2+.16+((he=n.ride)!=null?he:0),.5),pe(1,n.wheelR+.05,s*2+.17+((Ee=n.ride)!=null?Ee:0),.46),pe(2,(n.wheelF+n.wheelR)/2+.15,ce+.17,.62);let Y=new ct({color:14687774,roughness:.5}),ne=new de(new ti(.06,.018,6,12),Y);ne.position.set(-u*.3,be+.02,G+.1),a.add(ne);let ye=new de(new ti(.06,.018,6,12),Y);ye.position.set(u*.34,ce+.02,ue-.08),a.add(ye);for(let xe of[1,-1]){let je=$e(.22,.015,.12,Ie.carbon,xe*u*.42,be+.12,G-.05,a);je.rotation.z=xe*.25}for(let xe of[1,-1])$t(.02,.02,Ie.chrome,xe*u*.3,n.upper[3][1]+.015,G-.25,"y",a,8)}$e(u*.86,.05,h*.82,Ie.black,0,ce+0,0,a);let Ue=[],Ae=s+((Oe=n.ride)!=null?Oe:0),R=new ct({color:r.caliper,roughness:.4,metalness:.3});for(let[D,ee,fe]of[[n.wheelF,1,!0],[n.wheelF,-1,!0],[n.wheelR,1,!1],[n.wheelR,-1,!1]]){let De=new Pt;De.position.set(ee*n.track/2,Ae,D);let U=Sv(s,(ze=n.tireW)!=null?ze:fe?.25:.27,r,ee);De.add(U);let pe=$e(.07,s*.36,s*.26,R,-ee*0,s*.3,-s*.3,De);pe.rotation.x=.8,a.add(De),Ue.push({pivot:De,wheel:U,front:fe,side:ee,z:D})}let b=new de(new Et(u*1.35,h*1.2),new bt({map:bv(),transparent:!0,depthWrite:!1,opacity:.8}));b.rotation.x=-Math.PI/2,b.position.y=.03,b.renderOrder=2;let k=new Pt,K=new Pt;k.add(a);for(let D of Ue)a.remove(D.pivot),K.add(D.pivot);let te=Gd(a);if(t.outline!==!1)for(let D of te)(D.material===o||D.material===Ie.glass||D.material===Ie.trim||D.material===Ie.carbon)&&Wd(D,D.material===o?0:.014);for(let D of Ue){let ee=Gd(D.wheel);if(t.outline!==!1)for(let fe of ee)fe.material===Ie.tire&&Wd(fe,.016);D.pivot.children.forEach(fe=>{fe.isMesh&&(fe.castShadow=!1)})}K.add(k),K.add(b);let Q=new Set([o,Ie.glass,Ie.black,ae,Z,Ie.tire]),Le=[];a.children.forEach(D=>{D.isMesh&&!Q.has(D.material)&&!(D.userData.outlineOf&&D.userData.outlineOf.material===o)&&Le.push(D)});for(let D of Ue)D.wheel.children.forEach(ee=>{ee.isMesh&&ee.material!==Ie.tire&&!ee.userData.outlineOf&&Le.push(ee)});for(let D of Ue)D.pivot.children.forEach(ee=>{ee.isMesh&&Le.push(ee)});for(let D of Le)D.userData.detail=!0;let _e=[];return K.traverse(D=>{D.isMesh&&D.castShadow&&_e.push(D)}),{root:K,chassis:k,wheels:Ue,bodyMat:o,headMat:Z,tailMat:ae,spec:i,detail:Le,casters:_e,far:!1}}function Xd(i,e){if(i.far!==e){i.far=e;for(let t of i.detail)t.visible=!e;for(let t of i.casters)t.castShadow=!e}}function qd(i,e,t,n){var a;for(let o of i.wheels)o.wheel.rotation.x=e.wheelSpin,o.front&&(o.pivot.rotation.y=e.steer);let s=Math.max(-.05,Math.min(.05,e.ay*.005)),r=Math.max(-.025,Math.min(.025,-e.ax*.0025));i.chassis.rotation.z+=(s-i.chassis.rotation.z)*Math.min(1,t*4),i.chassis.rotation.x+=(r-i.chassis.rotation.x)*Math.min(1,t*3),i.tailMat.emissiveIntensity=n?3:(a=i._tailBase)!=null?a:.35}var Po=class{constructor(e,t,n,s,r,a){this.spec=e,this.model=t,this.fi=n,this.d=s,this.targetD=s,this.dv=0,this.v=0,this.skill=r,this.grip=a,this.top=Math.min(96,58+e.hp/16)*r,this.mu=(e.muFront+e.muRear)/2*a*1.15,this.laneTimer=1+Math.random()*2.5,this.stopAt=1/0,this.wheelSpin=0,this.steer=0,this.ahead=!0,this.h=0,this.pose={},this.bump=0}update(e,t,n,s){var f;let r=t.hw;if(!s){this.v=0,this.place(t,e);return}let a=this.top,o={};for(let p=3;p<=80;p+=3){t.sample(this.fi+p,o);let v=Math.abs(o.k);if(v<1e-4)continue;let m=Math.sqrt(this.mu*9.81/v),g=p*Qt;a=Math.min(a,Math.sqrt(m*m+2*12*g))}let l=n.idx-this.fi;l>0&&((f=n.t)!=null?f:99)>5?a*=1+Math.min(.3,l/200):l<-260&&(a*=.95),this.bump>0&&(this.bump-=e,a*=.8),this.fi>this.stopAt&&(a=0);let c=9.8*(1-.5*Math.min(1,this.v/this.top));this.v+=ht(a-this.v,-15*e,c*e),this.v=Math.max(0,this.v),this.laneTimer-=e,this.laneTimer<=0&&(this.targetD=(Math.random()*2-1)*(r-1.8),this.laneTimer=1.5+Math.random()*3);let h=n.idx-this.fi;h>0&&h<16&&Math.abs(n.lat-this.d)<2.8&&(this.targetD=n.lat>0?n.lat-3.2:n.lat+3.2,this.targetD=ht(this.targetD,-(r-1.4),r-1.4)),t.sample(this.fi+10,o);let u=ht(o.k*400,-1,1)*(r-2),d=ht(this.targetD*.6+u*.4,-(r-1.3),r-1.3);this.dv+=(ht((d-this.d)*3.2,-6.5,6.5)-this.dv)*Math.min(1,e*8),this.d+=this.dv*e,this.d=ht(this.d,-(r-1.1),r-1.1),this.fi+=this.v*e/Qt,this.place(t,e)}place(e,t){let n=e.sample(this.fi,this.pose);this.x=n.x+n.lx*this.d,this.z=n.z+n.lz*this.d,this.y=n.y;let s=Math.atan2(this.dv,Math.max(this.v,3));this.h=n.h+s*.9,this.steer=ht(n.k*2.6+s,-.5,.5),this.slope=n.slope,this.wheelSpin+=this.v/this.spec.wheelRadius*t;let r=this.model;r.root.position.set(this.x,this.y,this.z),r.root.rotation.set(-Math.atan(this.slope),this.h,0,"YXZ");for(let a of r.wheels)a.wheel.rotation.x=this.wheelSpin,a.front&&(a.pivot.rotation.y=this.steer);r.chassis.rotation.z=ht(n.k*this.v*this.v*.008,-.07,.07)}get vx(){return Math.sin(this.h)*this.v}get vz(){return Math.cos(this.h)*this.v}};var Io=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this.musicOn=!0,this.musicVol=.3,this.sfxVol=.8}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-20,this.comp.knee.value=12,this.comp.ratio.value=4,this.comp.attack.value=.005,this.comp.release.value=.2,this.comp.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(this.comp),this.sfx=t.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicOn?this.musicVol:0,this.musicBus.connect(this.master);let n=t.sampleRate*2;this.noiseBuf=t.createBuffer(1,n,t.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let _=0;_<n;_++)s[_]=Math.random()*2-1;this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=1.4;let r=t.createWaveShaper(),a=new Float32Array(1024);for(let _=0;_<1024;_++){let S=_/512-1;a[_]=Math.tanh(S*1.6)}r.curve=a,this.oscs=[{o:t.createOscillator(),type:"sawtooth",mul:1,g:.38},{o:t.createOscillator(),type:"sine",mul:.5,g:.6},{o:t.createOscillator(),type:"triangle",mul:2,g:.16},{o:t.createOscillator(),type:"sawtooth",mul:1.005,g:.25}];let o=t.createGain();o.gain.value=.5;for(let _ of this.oscs){_.o.type=_.type;let S=t.createGain();S.gain.value=_.g,_.o.connect(S),S.connect(o),_.o.start()}this.rumble=t.createOscillator(),this.rumble.frequency.value=18;let l=t.createGain();l.gain.value=.15,this.rumble.connect(l),l.connect(o.gain),this.rumble.start(),o.connect(r),r.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.sfx),this.tireGain=t.createGain(),this.tireGain.gain.value=0;let c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=3200,c.Q.value=.5;let h=t.createBiquadFilter();h.type="highpass",h.frequency.value=700,h.Q.value=.5,this.tireGain.connect(h),h.connect(c),c.connect(this.sfx);let u=t.createGain();u.gain.value=1,u.connect(this.tireGain),this.sqOscs=[{o:t.createOscillator(),type:"triangle",mul:1,g:.55},{o:t.createOscillator(),type:"sine",mul:1.5,g:.22},{o:t.createOscillator(),type:"triangle",mul:1.012,g:.3}];let d=t.createGain();d.gain.value=38;let f=t.createOscillator();f.frequency.value=6.3,f.start();let p=t.createOscillator();p.frequency.value=11.7,p.start();let v=t.createGain();v.gain.value=.6,f.connect(d),p.connect(v),v.connect(d);let m=this.loopNoise(),g=t.createBiquadFilter();g.type="lowpass",g.frequency.value=18;let M=t.createGain();M.gain.value=3,m.connect(g),g.connect(M),M.connect(d);for(let _ of this.sqOscs){_.o.type=_.type,_.o.frequency.value=1150*_.mul,d.connect(_.o.frequency);let S=t.createGain();S.gain.value=_.g*.5,_.o.connect(S),S.connect(u),_.o.start()}let x=this.loopNoise(),y=t.createBiquadFilter();y.type="lowpass",y.frequency.value=25;let A=t.createGain();A.gain.value=1.2,x.connect(y),y.connect(A),A.connect(u.gain),this.tireSrc=this.loopNoise();let E=t.createBiquadFilter();E.type="bandpass",E.frequency.value=2200,E.Q.value=.8;let T=t.createGain();T.gain.value=.35,this.tireSrc.connect(E),E.connect(T),T.connect(this.tireGain),this.gravelSrc=this.loopNoise();let I=t.createBiquadFilter();I.type="lowpass",I.frequency.value=900,this.gravelGain=t.createGain(),this.gravelGain.gain.value=0,this.gravelSrc.connect(I),I.connect(this.gravelGain),this.gravelGain.connect(this.sfx),this.windSrc=this.loopNoise();let O=t.createBiquadFilter();O.type="lowpass",O.frequency.value=420,this.windGain=t.createGain(),this.windGain.gain.value=0,this.windSrc.connect(O),O.connect(this.windGain),this.windGain.connect(this.sfx),this.startMusic()}loopNoise(){let e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=!0,e.start(),e}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}setSfxVol(e){this.sfxVol=e,this.sfx&&(this.sfx.gain.value=e)}setMusicVol(e){this.musicVol=e,this.musicBus&&this.musicOn&&(this.musicBus.gain.value=e)}setMusic(e){this.musicOn=e,this.musicBus&&this.musicBus.gain.setTargetAtTime(e?this.musicVol:0,this.ctx.currentTime,.2)}update(e,t,n,s,r,a,o){if(!this.ctx)return;let l=this.ctx.currentTime;if(!o){this.engGain.gain.setTargetAtTime(0,l,.08),this.tireGain.gain.setTargetAtTime(0,l,.05),this.windGain.gain.setTargetAtTime(0,l,.1),this.gravelGain.gain.setTargetAtTime(0,l,.1);return}let c=e.rpm,h=c/60*(t.cylinders/2)*.5;for(let m of this.oscs)m.o.frequency.setTargetAtTime(h*m.mul,l,.02);this.rumble.frequency.setTargetAtTime(8+c/400,l,.05);let u=.35+.65*n;this.engFilter.frequency.setTargetAtTime(220+c*.22*u+n*500,l,.04);let d=Math.min(1,s)*(r?0:1)*Math.min(1,a/6),f=Math.max(0,(d-.15)/.85),p=f*f*(3-2*f);this.engGain.gain.setTargetAtTime((.1+.08*u)*(1-.22*p),l,.05),this.tireGain.gain.setTargetAtTime(p*.07,l,.18);let v=1e3+p*350+Math.min(1,a/50)*120;for(let m of this.sqOscs)m.o.frequency.setTargetAtTime(v*m.mul,l,.25);this.gravelGain.gain.setTargetAtTime(r?Math.min(.18,a/90):0,l,.08),this.windGain.gain.setTargetAtTime(Math.min(.12,(a/70)**2*.12),l,.15)}burst(e,t,n,s="lowpass"){if(!this.ctx)return;let r=this.ctx,a=r.currentTime,o=r.createBufferSource();o.buffer=this.noiseBuf;let l=r.createBiquadFilter();l.type=s,l.frequency.value=t;let c=r.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(l),l.connect(c),c.connect(this.sfx),o.start(a,Math.random()),o.stop(a+e+.05)}tone(e,t,n=.2,s="sine",r=0,a){if(!this.ctx)return;let o=this.ctx,l=o.currentTime+r,c=o.createOscillator();c.type=s,c.frequency.value=e;let h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(n,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(a||this.sfx),c.start(l),c.stop(l+t+.05)}crash(e){this.burst(.3,500+e*25,Math.min(.32,.1+e*.015)),this.tone(70,.22,Math.min(.22,e*.012),"sine")}shift(){this.burst(.06,2200,.05,"bandpass")}backfire(){this.burst(.1,280,.18)}click(){this.tone(880,.05,.05,"triangle")}checkpoint(){[660,880,1320].forEach((e,t)=>this.tone(e,.18,.09,"triangle",t*.09))}countdown(e){this.tone(e?1046:523,e?.5:.22,.1,"triangle")}score(){this.tone(1320,.12,.06,"triangle"),this.tone(1760,.14,.05,"triangle",.06)}gameOver(){[523,440,349,262].forEach((e,t)=>this.tone(e,.3,.08,"triangle",t*.18))}startMusic(){let e=this.ctx,t=112,n=60/t/4,s=[0,0,12,0,0,0,10,0,0,0,12,0,7,0,10,0],r=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],a=[0,1,2,1,0,2,1,2],o=0,l=e.currentTime+.1,c=u=>440*Math.pow(2,(u-69)/12),h=()=>{if(this.ctx){for(;l<e.currentTime+.2;){let u=Math.floor(o/16)%4,d=o%16,f=r[u];this.musicOn&&((s[d]!==0||d%4===0)&&this.tone(c(f[0]-24+(s[d]||0)),n*1.8,.14,"triangle",l-e.currentTime,this.musicBus),d%2===0&&this.tone(c(f[a[d/2%8]]+12),n*1.5,.05,"triangle",l-e.currentTime,this.musicBus),d%4===0&&this.kick(l),d%8===4&&this.snare(l),d%2===1&&this.hat(l)),l+=n,o++}this._musicTimer=setTimeout(h,60)}};h()}kick(e){let t=this.ctx,n=t.createOscillator(),s=t.createGain();n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(40,e+.15),s.gain.setValueAtTime(.35,e),s.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(s),s.connect(this.musicBus),n.start(e),n.stop(e+.25)}snare(e){let t=this.ctx,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="highpass",s.frequency.value=1500;let r=t.createGain();r.gain.setValueAtTime(.14,e),r.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(e,Math.random()),n.stop(e+.2)}hat(e){let t=this.ctx,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;let r=t.createGain();r.gain.setValueAtTime(.035,e),r.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(e,Math.random()),n.stop(e+.06)}};var Lo=class{constructor(){this.keys=new Set,this.events=[],this.steer=0,this.touch={left:!1,right:!1,gas:!1,brake:!1,hb:!1},this.touchActive=!1,window.addEventListener("keydown",e=>{if(!(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="SELECT"))){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),!e.repeat){let t={KeyC:"camera",KeyR:"reset",Escape:"pause",KeyP:"pause",KeyE:"shiftUp",KeyQ:"shiftDown",KeyM:"mute",Enter:"enter"};t[e.code]&&this.events.push(t[e.code])}this.keys.add(e.code)}}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),this.gpPrev={}}bindTouch(e){e.querySelectorAll("[data-touch]").forEach(n=>{let s=n.dataset.touch,r=o=>{o.preventDefault(),this.touch[s]=!0,n.classList.add("on"),this.touchActive=!0},a=o=>{o.preventDefault(),this.touch[s]=!1,n.classList.remove("on")};n.addEventListener("touchstart",r,{passive:!1}),n.addEventListener("touchend",a,{passive:!1}),n.addEventListener("touchcancel",a,{passive:!1}),n.addEventListener("mousedown",r),n.addEventListener("mouseup",a),n.addEventListener("mouseleave",a)}),e.querySelectorAll("[data-tap]").forEach(n=>{n.addEventListener("touchstart",s=>{s.preventDefault(),this.events.push(n.dataset.tap)},{passive:!1}),n.addEventListener("click",()=>this.events.push(n.dataset.tap))})}down(...e){return e.some(t=>this.keys.has(t))}read(e,t){var d,f,p,v,m,g;let n=this.touch,s=this.down("KeyW","ArrowUp")||n.gas?1:0,r=this.down("KeyS","ArrowDown")||n.brake?1:0,a=this.down("Space")||n.hb?1:0,o=this.down("KeyA","ArrowLeft")||n.left,l=this.down("KeyD","ArrowRight")||n.right,c=(o?1:0)-(l?1:0),h=null,u=navigator.getGamepads?navigator.getGamepads():[];for(let M of u){if(!M)continue;let x=M.axes[0]||0;Math.abs(x)>.12&&(h=-x);let y=((d=M.buttons[7])==null?void 0:d.value)||0,A=((f=M.buttons[6])==null?void 0:f.value)||0;s=Math.max(s,y,(p=M.buttons[0])!=null&&p.pressed?1:0),r=Math.max(r,A,(v=M.buttons[2])!=null&&v.pressed?1:0),a=Math.max(a,(m=M.buttons[1])!=null&&m.pressed?1:0,(g=M.buttons[5])!=null&&g.pressed?1:0);let E=(T,I)=>{var _;let O=!!((_=M.buttons[T])!=null&&_.pressed);O&&!this.gpPrev[T]&&this.events.push(I),this.gpPrev[T]=O};E(3,"camera"),E(9,"pause"),E(8,"reset"),E(12,"shiftUp"),E(13,"shiftDown");break}if(h!==null)this.steer=h;else{let M=c===0?7:Math.sign(c)!==Math.sign(this.steer)&&this.steer!==0?9:4.2-Math.min(1.8,t/40),x=c-this.steer;this.steer+=Math.sign(x)*Math.min(Math.abs(x),M*e)}return{throttle:s,brake:r,handbrake:a,steer:this.steer}}takeEvents(){let e=this.events;return this.events=[],e}};function Yd(i){let e=new Pt,t=new ei(900,32,16),n=new wt({side:Ut,depthWrite:!1,fog:!1,uniforms:{top:{value:new Se(i.sky.top)},horizon:{value:new Se(i.sky.horizon)},bottom:{value:new Se(i.sky.bottom)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.6),0.7)) : mix(horizon, bottom, min(1.0,-h*4.0));
      gl_FragColor = vec4(c,1.0); }`});e.add(new de(t,n));let s=new P(...i.sun.dir).normalize(),r=document.createElement("canvas");r.width=r.height=128;let a=r.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);i.night?(o.addColorStop(0,"rgba(235,240,255,1)"),o.addColorStop(.25,"rgba(220,230,255,0.95)"),o.addColorStop(.3,"rgba(160,170,255,0.25)"),o.addColorStop(1,"rgba(0,0,0,0)")):(o.addColorStop(0,"rgba(255,255,240,1)"),o.addColorStop(.2,"rgba(255,250,220,0.95)"),o.addColorStop(.45,"rgba(255,220,160,0.25)"),o.addColorStop(1,"rgba(255,200,120,0)")),a.fillStyle=o,a.fillRect(0,0,128,128);let l=new dn(r),c=new is(new Li({map:l,fog:!1,depthWrite:!1,transparent:!0}));if(c.position.copy(s).multiplyScalar(800),c.scale.setScalar(i.night?70:150),e.add(c),i.night){let u=new Float32Array(4500);for(let f=0;f<1500;f++){let p=Math.random()*Math.PI*2,v=Math.acos(Math.random()*.9+.1);u[f*3]=850*Math.sin(v)*Math.cos(p),u[f*3+1]=850*Math.cos(v),u[f*3+2]=850*Math.sin(v)*Math.sin(p)}let d=new mt;d.setAttribute("position",new dt(u,3)),e.add(new Zs(d,new Ks({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1})))}return e.renderOrder=-10,e}var ea=class{constructor(e,t=16777215,n=260){this.max=n,this.pos=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n).fill(1),this.base=new Float32Array(n),this.op=new Float32Array(n);let s=new mt;s.setAttribute("position",new dt(this.pos,3)),s.setAttribute("size",new dt(this.size,1)),s.setAttribute("alpha",new dt(this.alpha,1));let r=new wt({transparent:!0,depthWrite:!1,uniforms:{color:{value:new Se(t)},scale:{value:innerHeight*.5}},vertexShader:`attribute float size; attribute float alpha; varying float a; uniform float scale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
          // \u0432\u043E\u0437\u043B\u0435 \u043A\u0430\u043C\u0435\u0440\u044B \u0434\u044B\u043C \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0435 \u0437\u0430\u043B\u0435\u043F\u043B\u044F\u0435\u0442 \u044D\u043A\u0440\u0430\u043D
          a = alpha * smoothstep(3.0, 9.0, -mv.z);
          gl_PointSize = min(size * scale / -mv.z, 260.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 color; varying float a;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d)*4.0; if (r > 1.0) discard; gl_FragColor = vec4(color, a * (1.0 - r) * (1.0 - r)); }`});this.points=new Zs(s,r),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points),this.next=0}emit(e,t,n,s,r,a,o=.5){let l=this.next;this.next=(this.next+1)%this.max,this.pos[l*3]=e+(Math.random()-.5)*.3,this.pos[l*3+1]=t+.35,this.pos[l*3+2]=n+(Math.random()-.5)*.3;let c=Math.random()*Math.PI*2,h=.8+Math.random()*1.4;this.vel[l*3]=s*.08+Math.cos(c)*h,this.vel[l*3+1]=.08+Math.random()*.15,this.vel[l*3+2]=r*.08+Math.sin(c)*h,this.life[l]=0,this.maxLife[l]=1.4+Math.random()*.8*a,this.base[l]=1.1+Math.random()*.5,this.op[l]=o}update(e){let t=1-e*1.5;for(let s=0;s<this.max;s++){if(this.op[s]===0)continue;this.life[s]+=e;let r=this.life[s]/this.maxLife[s];if(r>=1){this.op[s]=0,this.alpha[s]=0;continue}this.pos[s*3]+=this.vel[s*3]*e,this.pos[s*3+1]+=this.vel[s*3+1]*e,this.pos[s*3+2]+=this.vel[s*3+2]*e,this.vel[s*3]*=t,this.vel[s*3+2]*=t,this.size[s]=this.base[s]*(1+r*2.4),this.alpha[s]=this.op[s]*(1-r)*Math.min(1,this.life[s]*8)}let n=this.points.geometry.attributes;n.position.needsUpdate=!0,n.size.needsUpdate=!0,n.alpha.needsUpdate=!0}clear(){this.op.fill(0),this.alpha.fill(0)}dispose(e){e.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()}},Do=class{constructor(e,t=2400,n=1118481,s=.55){this.max=t;let r=new mt;this.pos=new Float32Array(t*4*3),this.alpha=new Float32Array(t*4);let a=new Uint32Array(t*6);for(let l=0;l<t;l++){let c=l*4;a.set([c,c+1,c+2,c+1,c+3,c+2],l*6)}r.setAttribute("position",new dt(this.pos,3)),r.setAttribute("alpha",new dt(this.alpha,1)),r.setIndex(new dt(a,1));let o=new wt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{color:{value:new Se(n)},op:{value:s}},vertexShader:"attribute float alpha; varying float a; void main(){ a = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 color; uniform float op; varying float a; void main(){ gl_FragColor = vec4(color, a*op); }"});this.mesh=new de(r,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh),this.n=0,this.last=[null,null,null,null]}add(e,t,n,s,r,a,o){let l=this.last[e],c=.13,h={x:t,y:n+.045,z:s,lx:r,lz:a};if(l&&o>0&&(t-l.x)**2+(s-l.z)**2<4){if((t-l.x)**2+(s-l.z)**2<.09)return;let u=this.n%this.max;this.n++;let d=this.pos,f=u*12;d[f]=l.x+l.lx*c,d[f+1]=l.y,d[f+2]=l.z+l.lz*c,d[f+3]=l.x-l.lx*c,d[f+4]=l.y,d[f+5]=l.z-l.lz*c,d[f+6]=t+r*c,d[f+7]=h.y,d[f+8]=s+a*c,d[f+9]=t-r*c,d[f+10]=h.y,d[f+11]=s-a*c;let p=Math.min(1,o);this.alpha.set([p,p,p,p],u*4),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.alpha.needsUpdate=!0}this.last[e]=o>0?h:null}clear(){this.pos.fill(0),this.alpha.fill(0),this.mesh.geometry.attributes.position.needsUpdate=!0,this.last=[null,null,null,null]}},Uo=class{constructor(e,t=2500){this.n=t;let n=new Float32Array(t*3);for(let r=0;r<t;r++)n[r*3]=(Math.random()-.5)*80,n[r*3+1]=Math.random()*40,n[r*3+2]=(Math.random()-.5)*80;let s=new mt;s.setAttribute("position",new dt(n,3)),this.pts=new Zs(s,new Ks({color:16777215,size:.18,transparent:!0,opacity:.9,depthWrite:!1})),this.pts.frustumCulled=!1,e.add(this.pts)}update(e,t){let n=this.pts.geometry.attributes.position,s=n.array;for(let r=0;r<this.n;r++)s[r*3+1]-=e*(2+r%5*.4),s[r*3]+=Math.sin(r+performance.now()*5e-4)*e*.6,s[r*3+1]<-2&&(s[r*3+1]+=40);n.needsUpdate=!0,this.pts.position.set(0,t.position.y-15,0);for(let r=0;r<this.n;r++){let a=s[r*3],o=s[r*3+2];a-t.position.x>40?s[r*3]-=80:a-t.position.x<-40&&(s[r*3]+=80),o-t.position.z>40?s[r*3+2]-=80:o-t.position.z<-40&&(s[r*3+2]+=80)}}};function $d(i){let e=new fi,t=new ei(50,32,16),n=new wt({side:Ut,uniforms:{top:{value:new Se(i.sky.top)},horizon:{value:new Se(i.sky.horizon).lerp(new Se(14541802),i.night?0:.45)},ground:{value:new Se(i.ground.far).lerp(new Se(5921374),.7).multiplyScalar(i.night?.25:.55)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.5),0.6)) : mix(horizon*0.8, ground, min(1.0,-h*6.0)); gl_FragColor = vec4(c,1.0); }`});e.add(new de(t,n));let s=new P(...i.sun.dir).normalize(),r=new de(new ei(i.night?2:4,16,8),new bt({color:new Se(i.sun.color).multiplyScalar(i.night?2:12)}));if(r.position.copy(s).multiplyScalar(40),e.add(r),i.night){let a=[16723622,2680831,16767370,8191823,16757611];for(let o=0;o<40;o++){let l=Math.random()*Math.PI*2,c=Math.random()*12-2,h=new de(new yt(3+Math.random()*4,1+Math.random()*3,.5),new bt({color:new Se(a[o%a.length]).multiplyScalar(2.5)}));h.position.set(Math.cos(l)*40,c,Math.sin(l)*40),h.lookAt(0,c,0),e.add(h)}}else for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,l=8+Math.random()*20,c=new de(new ei(4+Math.random()*5,8,6),new bt({color:new Se(16777215).multiplyScalar(1.4)}));c.scale.y=.35,c.position.set(Math.cos(o)*42,l,Math.sin(o)*42),e.add(c)}return e}function Kd(i){var v;let n=document.createElement("canvas");n.width=2048,n.height=256;let s=n.getContext("2d"),r=(()=>{let m=12345;return()=>(m=m*16807%2147483647,m/2147483647)})(),a=new Se(i.fog.color),o=(m,g,M,x,y)=>{s.fillStyle=m,s.beginPath(),s.moveTo(0,256);let A=[r()*10,r()*10,r()*10];for(let E=0;E<=2048;E+=4){let T=E/2048*Math.PI*2,I=Math.sin(T*x+A[0])*.5+Math.sin(T*x*2.3+A[1])*.3+Math.sin(T*x*5.7+A[2])*.2;I+=(r()-.5)*y,s.lineTo(E,256-M-(I*.5+.5)*g)}s.lineTo(2048,256),s.closePath(),s.fill()},l=(m,g)=>"#"+new Se(m).lerp(a,g).getHexString(),c=(v=i.horizon)!=null?v:i.id;if(c==="hills")o(l(8032138,.55),80,14,3,.04),o(l(6257250,.4),45,4,6,.05);else if(c==="sea")o(l(7049082,.6),34,0,2,.02);else if(c==="desert")o(l(10115658,.55),110,20,3,.05),o(l(11556922,.35),70,8,5,.08);else if(c==="snow"){o(l(9413565,.5),190,20,4,.12),s.globalCompositeOperation="source-atop";let m=s.createLinearGradient(0,0,0,256);m.addColorStop(0,"#ffffff"),m.addColorStop(.45,"rgba(255,255,255,0.8)"),m.addColorStop(.6,"rgba(255,255,255,0)"),s.fillStyle=m,s.fillRect(0,0,2048,256),s.globalCompositeOperation="source-over",o(l(7307930,.35),90,6,7,.15)}else{let m=0;for(;m<2048;){let g=14+r()*40,M=30+Math.pow(r(),1.5)*190;s.fillStyle=l(1314854,.25),s.fillRect(m,256-M,g,M);for(let x=256-M+4;x<252;x+=6)for(let y=m+3;y<m+g-3;y+=5)r()<.18&&(s.fillStyle=["#ffd98a","#9fd8ff","#ff9ad5"][Math.floor(r()*3)],s.fillRect(y,x,2,2));r()<.15&&(s.fillStyle="#ff2020",s.fillRect(m+g/2-1,256-M-6,2,2)),m+=g+r()*6}}let h=new dn(n);h.colorSpace=kt,h.wrapS=ui;let u=820,d=c==="snow"?230:c==="city"?190:140,f=new St(u,u,d,96,1,!0),p=new de(f,new bt({map:h,transparent:!0,side:Ut,fog:!1,depthWrite:!1}));return p.userData.h=d,p.renderOrder=-9,p}function Zd(i){let e=new Pt;if(i.night)return e;let t=document.createElement("canvas");t.width=256,t.height=128;let n=t.getContext("2d");for(let a=0;a<16;a++){let o=40+Math.random()*176,l=50+Math.random()*40,c=20+Math.random()*30,h=n.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,256,128)}let s=new dn(t),r=i.id==="desert"?16769736:16777215;for(let a=0;a<14;a++){let o=new is(new Li({map:s,color:r,fog:!1,depthWrite:!1,transparent:!0,opacity:.75})),l=Math.random()*Math.PI*2,c=450+Math.random()*300;o.position.set(Math.cos(l)*c,160+Math.random()*180,Math.sin(l)*c);let h=180+Math.random()*220;o.scale.set(h,h*.45,1),e.add(o)}return e}var Fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wv=new $s(-1,1,1,-1,0,1),Fh=class extends mt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},Ev=new Fh,Bi=class{constructor(e){this._mesh=new de(Ev,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var No=class extends En{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fi.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ta=class extends En{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Bo=class extends En{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Oo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new No(Fo),this.copyPass.material.blending=Qn,this.clock=new _o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ta!==void 0&&(a instanceof ta?n=!0:a instanceof Bo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ko=class extends En{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Jd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ir=class i extends En{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,a,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new cn(r,a,{type:Vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new cn(r,a,{type:Vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Jd;this.highPassUniforms=Fi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ie(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Fo;this.copyUniforms=Fi.clone(h.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new bt,this.fsQuad=new Bi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ir.BlurDirectionX=new ie(1,0);ir.BlurDirectionY=new ie(0,1);var Qd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var zo=class extends En{constructor(){super();let e=Qd;this.uniforms=Fi.clone(e.uniforms),this.material=new po({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jd="wss://endless-drift-server.onrender.com";var Ge={ws:null,id:0,code:"",host:0,isPublic:!1,state:"off",mm:null,mmStatus:null,config:null,players:new Map,results:[],racers:[],on:{},lastSend:0,get isHost(){return this.id&&this.id===this.host},get connected(){return this.ws&&this.ws.readyState===1},connect(i,e){return this.disconnect(!0),this.state="connecting",new Promise((t,n)=>{let s;try{s=new WebSocket(i)}catch{this.state="off",n(new Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"));return}this.ws=s;let r=setTimeout(()=>{s.readyState!==1&&(s.close(),n(new Error("\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \xAB\u043F\u0440\u043E\u0441\u044B\u043F\u0430\u0442\u044C\u0441\u044F\xBB \u0434\u043E \u043C\u0438\u043D\u0443\u0442\u044B \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.")))},65e3);s.onopen=()=>{clearTimeout(r),this.send({t:"join",...e})},s.onerror=()=>{clearTimeout(r),this.state==="connecting"&&n(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"))},s.onclose=()=>{clearTimeout(r);let a=this.state;this.state="off",this.players.clear(),a!=="off"&&this.ws===s&&this.emit("close")},s.onmessage=a=>{let o;try{o=JSON.parse(a.data)}catch{return}if(o.t==="joined"&&t(o),o.t==="error"&&this.state==="connecting"){n(new Error(o.text));return}this.handle(o)}})},disconnect(i){if(this.mm=null,this.mmStatus=null,this.ws){let e=this.ws;this.ws=null,this.state="off";try{e.close()}catch{}}this.players.clear(),i||this.emit("close")},send(i){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(i))},emit(i,...e){this.on[i]&&this.on[i](...e)},addPlayer(i){let e=this.players.get(i.id);if(e)return Object.assign(e,i),e;let t={...i,buf:[],vis:null,model:null,fin:null};return this.players.set(i.id,t),t},handle(i){switch(i.t){case"joined":this.id=i.id,this.code=i.code,this.host=i.host,this.config=i.config,this.isPublic=i.isPublic,this.mm=i.mm||null,this.mmStatus=i.mm?{count:i.players.length,size:i.mm.size,state:"search",left:0}:null,this.results=[],this.state="lobby",this.players.clear();for(let e of i.players)e.id!==this.id&&this.addPlayer(e);this.emit("joined",i);break;case"player":i.p.id!==this.id?this.addPlayer(i.p):this.me=i.p,this.emit("player",i.p);break;case"left":{let e=this.players.get(i.id);this.players.delete(i.id),this.host=i.host,this.emit("left",e,i.id);break}case"config":this.config=i.config,this.emit("config",i.config);break;case"start":this.state="racing",this.results=[],this.racers=i.racers,this.config=i.config;for(let e of i.players)if(e.id!==this.id){let t=this.addPlayer(e);t.buf=[],t.vis=null,t.fin=null}this.emit("start",i);break;case"s":{let e=this.players.get(i.id);if(!e)break;let[t,n,s,r,a,o,l,c]=i.d;e.buf.push({t:performance.now(),x:t,y:n,z:s,h:r,spd:a,idx:o,steer:l,slope:c}),e.buf.length>30&&e.buf.shift();break}case"fin":{this.results.push(i.r);let e=this.players.get(i.r.id);e&&(e.fin=i.r),this.emit("fin",i.r);break}case"mm":this.mmStatus=i,this.emit("mm",i);break;case"lobby":this.state=i.state==="done"?"done":"lobby",this.results=i.results||this.results;for(let e of this.players.values())e.inRace=!1;this.emit("lobby",i);break;case"error":this.emit("error",i.text);break;default:break}},sendState(i){let e=performance.now();e-this.lastSend<66.66666666666667||(this.lastSend=e,this.send({t:"s",d:[i.x,i.roadY,i.z,i.h,i.speed,i.idx,i.steer||0,i.slope||0]}))},finish(i,e,t){this.send({t:"fin",finished:i,time:e,score:t})},sample(i){let e=i.buf;if(!e.length)return null;let t=performance.now()-120;for(;e.length>2&&e[1].t<=t;)e.shift();let n=e[0],s=e[1];if(!s||t<=n.t)return n;let r=Math.min(1,(t-n.t)/Math.max(1,s.t-n.t)),a=s.h-n.h;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;let o=(l,c)=>l+(c-l)*r;return{x:o(n.x,s.x),y:o(n.y,s.y),z:o(n.z,s.z),h:n.h+a*r,spd:o(n.spd,s.spd),idx:o(n.idx,s.idx),steer:o(n.steer,s.steer),slope:o(n.slope,s.slope)}}};var qn=[{id:"race",name:"\u0413\u043E\u043D\u043A\u0430",desc:"\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0442\u0430\u0439\u043C\u0435\u0440. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E, \u043E\u0431\u0433\u043E\u043D\u044B \u0438 \u0434\u0440\u0438\u0444\u0442.",timer:50,rivals:5,bonus:i=>Math.max(22,40-i*2)},{id:"drift",name:"\u0414\u0440\u0438\u0444\u0442",desc:"\u041E\u0447\u043A\u0438 \u0437\u0430 \u0437\u0430\u043D\u043E\u0441. \u041D\u0430 \u0442\u0440\u0430\u0441\u0441\u0435 \u0441 \u0444\u0438\u043D\u0438\u0448\u0435\u043C \u0438\u0442\u043E\u0433 = \u043E\u0447\u043A\u0438 \u0434\u0440\u0438\u0444\u0442\u0430 + \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 \u0431\u044B\u0441\u0442\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F (\u0432 \u043E\u043D\u043B\u0430\u0439\u043D\u0435 \u0435\u0449\u0451 \u0438 \u0437\u0430 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u0444\u0438\u043D\u0438\u0448\u0435).",timer:60,rivals:0,bonus:i=>Math.max(26,42-i*1.5)},{id:"free",name:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430",desc:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430 \u0438 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0439 \u0434\u0440\u0438\u0444\u0442.",timer:0,rivals:3,bonus:()=>0}],Hh={id:"field",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D",desc:"",timer:0,rivals:0,bonus:()=>0},xi=1/240,Tv=400,af=5,ds={get(i,e){try{let t=localStorage.getItem("ed_"+i);return t?JSON.parse(t):e}catch{return e}},set(i,e){try{localStorage.setItem("ed_"+i,JSON.stringify(e))}catch{}}},Gh="ontouchstart"in window||navigator.maxTouchPoints>0;Gh&&document.body.classList.add("touch");var oe=Object.assign({vol:.8,music:!0,assist:!0,manual:!1,quality:Gh?0:1,camera:0,units:"kmh",fps:0,showFps:!1,sfxVol:.8,musicVol:.3,easy:!0,smoke:!0,outline:!0,autoRes:!1,assistMode:"all",draw:1},ds.get("settings",{}));oe.v3||(oe.v3=1,oe.autoRes=!1,oe.assist===!1&&(oe.assistMode="off"));oe.handling||(oe.handling=oe.easy===!1?"real":"easy");oe.easy=oe.handling==="easy";var Ce=Object.assign({car:0,colors:{},mode:0,map:0,len:10,fieldMode:"obst"},ds.get("sel",{}));Ce.mm=Object.assign({mode:"race",len:10,size:5,carRule:"any"},Ce.mm||{});Ce.car>=at.length&&(Ce.car=0);var Av=5,of=50,mn=ds.get("records",{});for(let i of Object.keys(mn)){if(i.includes("|"))continue;let e=mn[i],t=at.find(n=>n.name===e.car);t&&!mn[i+"|"+t.id]&&(mn[i+"|"+t.id]={...e})}var en=()=>ds.set("settings",oe),Yn=()=>ds.set("sel",Ce),V=i=>document.getElementById(i),Rv=V("game"),hn=new Or({canvas:Rv,antialias:!0,powerPreference:"high-performance"});hn.outputColorSpace=kt;hn.toneMapping=er;hn.shadowMap.type=ch;var Xn=new fi,It=new Jt(62,1,.1,1600),lf=new ns(hn);Xn.environment=lf.fromScene(new Kr,.04).texture;var Ft={scale:1,t:0,frames:0,good:0},cf=()=>[1,Math.min(devicePixelRatio,1.5),Math.min(devicePixelRatio,2)][+oe.quality]||1;function Bh(){let i=Math.max(.5,cf()*(oe.autoRes?Ft.scale:1));Math.abs(hn.getPixelRatio()-i)<.01||(hn.setPixelRatio(i),Yo())}function Cv(i){if(!oe.autoRes||Qe!=="race"){Ft.t=0,Ft.frames=0;return}if(Ft.t+=i,Ft.frames++,Ft.t<1.5)return;let e=Ft.frames/Ft.t;Ft.t=0,Ft.frames=0;let t=oe.fps>0?Math.min(oe.fps,60):60;e<t*.82&&Ft.scale>.6?(Ft.scale=Math.max(.6,Ft.scale-.12),Ft.good=0,Bh()):e>t*.95?++Ft.good>=3&&Ft.scale<1&&(Ft.scale=Math.min(1,Ft.scale+.08),Ft.good=0,Bh()):Ft.good=0}function Pv(){var e;let i=+oe.quality;if(hn.setPixelRatio(Math.max(.5,cf()*(oe.autoRes?Ft.scale:1))),hn.shadowMap.enabled=i>0,$&&$.sun){$.sun.castShadow=i>0;let t=i===2?2048:1024;$.sun.shadow.mapSize.x!==t&&($.sun.shadow.mapSize.set(t,t),(e=$.sun.shadow.map)==null||e.dispose(),$.sun.shadow.map=null)}Yo()}var In=null,sr=null;function Iv(){+oe.quality==2?(In||(In=new Oo(hn),In.addPass(new ko(Xn,It)),sr=new ir(new ie(innerWidth/2,innerHeight/2),.5,.45,.85),In.addPass(sr),In.addPass(new zo)),In.setPixelRatio(hn.getPixelRatio()),In.setSize(innerWidth,innerHeight),$&&(sr.strength=$.map.night?.55:.18,sr.threshold=$.map.night?.72:.96,sr.radius=.35)):In&&(In.dispose(),In=null,sr=null)}function Yo(){let i=innerWidth,e=innerHeight;hn.setSize(i,e,!1),Iv(),It.aspect=i/e,Vh(),It.updateProjectionMatrix()}var ar={x:0,y:0};function Vh(){let i=innerWidth,e=innerHeight;ar.x||ar.y?It.setViewOffset(i,e,-i*ar.x,e*ar.y,i,e):It.clearViewOffset()}addEventListener("resize",Yo);var Ze=new Io;Ze.setVolume(oe.vol);Ze.musicOn=oe.music;Ze.sfxVol=oe.sfxVol;Ze.musicVol=oe.musicVol;var Xo=new Lo;Xo.bindTouch(V("touch"));addEventListener("pointerdown",()=>Ze.init(),{once:!1});addEventListener("keydown",()=>Ze.init(),{once:!0});var Ho=null,$=null,L=null,Qe="loading";function Lv(){$&&(Xn.remove($.group),$.group.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(e=>{var t;(t=e.map)==null||t.dispose(),e.dispose()})}),$=null)}function hr(i,e,t={}){var y,A,E,T,I,O;Lv();let n=rn[i],s=new Pt;Xn.add(s);let r=(y=[.8,1,1.35][+oe.draw])!=null?y:1;Xn.fog=new no(n.fog.color,n.fog.near*r,n.fog.far*r),Xn.background=new Se(n.fog.color),Ho&&Ho.dispose(),Ho=lf.fromScene($d(n),.02).texture,Xn.environment=Ho,Xn.environmentIntensity=n.night?.7:1,hn.toneMappingExposure=n.night?1.15:1;let a=new qr(n.hemi.sky,n.hemi.ground,n.hemi.intensity);s.add(a);let o=new $r(n.sun.color,n.sun.intensity),l=new P(...n.sun.dir).normalize();o.shadow.camera.left=-32,o.shadow.camera.right=32,o.shadow.camera.top=32,o.shadow.camera.bottom=-32,o.shadow.camera.near=1,o.shadow.camera.far=220,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,s.add(o),s.add(o.target);let c=Yd(n);s.add(c);let h=Kd(n);h.position.y=h.userData.h/2-45,c.add(h),c.add(Zd(n));let u=(A=t.fieldMode)!=null?A:Ce.fieldMode,d=n.field?new Ro(s,n,e,+oe.quality,{props:u==="obst",flat:u==="flat"}):new Ao(s,n,e,+oe.quality,{finishIdx:(E=t.finishIdx)!=null?E:1/0,draw:+oe.draw}),f=new de(new Et(5e3,5e3),new zt({color:n.ground.far}));f.rotation.x=-Math.PI/2,s.add(f);let p=(T=n.smoke)!=null?T:{desert:15130064,snow:16777215,city:12105928}[n.id],v=new ea(s,p,oe.quality>0?90:50),m=new ea(s,(I=n.dust)!=null?I:{desert:13606764,snow:16054527,city:7829375}[n.id],40),g=(O=n.skid)!=null?O:n.id==="snow"?8226968:789516,M=new Do(s,oe.quality>0?3e3:1200,g,g===789516?.6:.4),x=n.weather==="snow"?new Uo(s,oe.quality>0?2600:900):null;$={map:n,mapIdx:i,group:s,hemi:a,sun:o,sunDir:l,sky:c,track:d,farPlane:f,smoke:v,dust:m,skids:M,snow:x,rivals:[],player:null},Pv(),na(6,-2.8)}function hf(i){var e;return i.colors[(e=Ce.colors[i.id])!=null?e:0]}function na(i,e){let t=at[Ce.car];$.player&&$.group.remove($.player.model.root);let n=jr(t,hf(t),{night:$.map.night,outline:oe.outline});n._tailBase=$.map.night?1.2:.35,$.group.add(n.root);let s=new Eo(t),r=$.track.P(i);if(s.reset(r.x+r.lx*e,r.z+r.lz*e,r.h),s.idx=i,s.lat=e,s.roadY=r.y,s.slope=0,s.roll=0,$.track.isField&&($.track.target=s,s.odo=0),$.map.night){let a=new xo(16773590,40,100,.5,.6,1.4);a.position.set(0,.8,2),a.target.position.set(0,0,25),n.root.add(a),n.root.add(a.target)}$.player={veh:s,model:n},Wh(0)}function uf(){var s,r;let{veh:i}=$.player,e=L&&i.px!==void 0?ht(L.acc/xi,0,1):1,t=(a,o)=>a===void 0?o:a+(o-a)*e,n=i.h-((s=i.ph)!=null?s:i.h);return{x:t(i.px,i.x),z:t(i.pz,i.z),h:((r=i.ph)!=null?r:i.h)+n*e,y:t(i.pY,i.roadY)}}function Wh(i){let{veh:e,model:t}=$.player,n=uf();t.root.position.set(n.x,n.y+.03,n.z),t.root.rotation.set(-Math.atan(e.slope||0),n.h,Math.atan(e.roll||0),"YXZ"),qd(t,e,i||.016,L&&L.braking)}function df(i,e){i.ghostMats=[],i.outlines=[];let t=new Map;e.root.traverse(n=>{if(!(!n.isMesh||n.isSprite)){if(n.material.isShaderMaterial){i.outlines.push(n);return}if(!t.has(n.material)){let s=n.material.clone();s.userData.baseOp=n.material.transparent?n.material.opacity:1,s.transparent=!0,t.set(n.material,s),i.ghostMats.push(s)}n.material=t.get(n.material)}})}var Dv=65,Uv=55;function ff(i,e){var a,o;let t=ht((e-4)/14,.3,1),n=i.model,s=n&&+oe.quality==0?n.far?e>Uv:e>Dv:!1,r=n&&s!==n.far;if(r&&Xd(n,s),!(Math.abs(t-((a=i.op)!=null?a:1))<.02&&!r)){i.op=t;for(let l of i.ghostMats){let c=t*((o=l.userData.baseOp)!=null?o:1);l.opacity=c,l.transparent=c<.999}for(let l of i.outlines)l.visible=t>.95&&!(s&&l.userData.outlineOf&&l.userData.outlineOf.userData.detail)}}function pf(i){let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.fillStyle="rgba(0,0,0,0.55)",t.beginPath(),t.roundRect(8,8,240,48,14),t.fill(),t.fillStyle="#7cff4f",t.font="bold 30px Segoe UI, Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(i,128,33);let n=new dn(e);n.colorSpace=kt;let s=new is(new Li({map:n,depthTest:!1,transparent:!0}));return s.scale.set(2.6,.65,1),s.position.y=2.1,s.renderOrder=10,s}function Fv(i){if(i.model||!$)return;let e=at[i.car]||at[0],t=jr(e,e.colors[i.color%e.colors.length],{night:$.map.night,outline:oe.outline});t._tailBase=$.map.night?1.2:.35,df(i,t),i.label=pf(i.name),t.root.add(i.label),t.root.visible=!1,$.group.add(t.root),i.model=t,i.wheelSpin=0}function Nv(i){!i||!i.model||($&&$.group.remove(i.model.root),i.model=null)}function Bv(i){if(!L||!L.online)return;let{veh:e}=$.player;for(let t of Ge.players.values()){if(!Ge.racers.includes(t.id))continue;t.model||Fv(t);let n=Ge.sample(t);if(!n)continue;t.vis=n;let s=t.model;s.root.visible=!0,s.root.position.set(n.x,n.y+.03,n.z),s.root.rotation.set(-Math.atan(n.slope||0),n.h,0,"YXZ"),t.wheelSpin+=n.spd/s.spec.wheelRadius*i;for(let r of s.wheels)r.wheel.rotation.x=t.wheelSpin,r.front&&(r.pivot.rotation.y=n.steer);ff(t,Math.hypot(n.x-e.x,n.z-e.z))}}function Ov(i){let e=[[6,2.8],[14,-2.8],[14,2.8],[22,-2.8],[22,2.8],[30,0]];for(let t=0;t<i;t++){let n=at[(Ce.car+1+t)%at.length],s=n.colors[(t*2+1)%n.colors.length],r=jr(n,s,{night:$.map.night,outline:oe.outline});r._tailBase=$.map.night?1.2:.35,$.group.add(r.root);let a=new Po(n,r,e[t][0],e[t][1],.97+Math.random()*.1,$.map.grip);df(a,r),a.name=`\u0411\u043E\u0442 ${t+1}`,a.label=pf(a.name),r.root.add(a.label),a.ahead=e[t][0]>6||e[t][0]===6&&!1,a.place($.track,0),$.rivals.push(a)}}var qe={mode:+oe.camera,h:0,pos:new P,look:new P,shake:0,fov:62,cineT:0,cineA:0,orbit:0},kv=["\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438, \u0434\u0430\u043B\u044C\u043D\u044F\u044F","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441 \u043A\u0430\u043F\u043E\u0442\u0430","\u041A\u0430\u043C\u0435\u0440\u0430: \u043A\u0438\u043D\u043E"],or=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t};function Xh(i,e=!1){let{veh:t}=$.player,n=uf(),s={x:n.x,z:n.z,h:n.h,roadY:n.y,speed:t.speed,u:t.u,vx:t.vx,vz:t.vz,spec:t.spec,slope:t.slope},r=s.speed,a=Math.sin(s.h),o=Math.cos(s.h),l=s.roadY,c=ht((s.u-3)/8,0,1)*.45,h=s.h+ht(or(Math.atan2(s.vx,s.vz),s.h),-.7,.7)*c;e&&(qe.h=h),qe.h+=or(h,qe.h)*Math.min(1,i*6);let u=e?1:1-Math.exp(-i*7),d=60+Math.min(9,r*.12),f=new P,p=new P;if(qe.mode===0||qe.mode===1){let v=qe.mode===0?5.4:8.2,m=qe.mode===0?1.9:3;(e||qe.y===void 0)&&(qe.y=l+m),qe.y+=(l+m-qe.y)*Math.min(1,i*6),f.set(s.x-Math.sin(qe.h)*v,Math.max(qe.y,l+1),s.z-Math.cos(qe.h)*v),$.track.isField&&(f.y=Math.max(f.y,$.track.heightAt(f.x,f.z)+.9)),p.set(s.x+Math.sin(qe.h)*2.5,l+1.05,s.z+Math.cos(qe.h)*2.5),qe.pos.copy(f),qe.look.copy(p)}else if(qe.mode===2){let v=s.spec.body;f.set(s.x+a*(v.cabin[0][0]+.25),l+v.cabin[0][1]+.55,s.z+o*(v.cabin[0][0]+.25)),p.set(s.x+a*30,l+1.3+(s.slope||0)*30,s.z+o*30),qe.pos.copy(f),qe.look.copy(p),d+=6}else{qe.cineT-=i,(qe.cineT<=0||e)&&(qe.cineT=4+Math.random()*3,qe.cineA=(Math.random()*2-1)*2.4,qe.cineD=6+Math.random()*6,qe.cineH=.8+Math.random()*3);let v=s.h+Math.PI+qe.cineA;f.set(s.x+Math.sin(v)*qe.cineD,l+qe.cineH,s.z+Math.cos(v)*qe.cineD),qe.pos.lerp(f,1-Math.exp(-i*2)),p.set(s.x,l+.8,s.z),qe.look.lerp(p,1-Math.exp(-i*12)),d=55}qe.fov+=(d-qe.fov)*Math.min(1,i*1.5),It.fov=qe.fov,It.updateProjectionMatrix(),It.position.copy(qe.pos),qe.shake>.001&&(It.position.x+=(Math.random()-.5)*qe.shake*.5,It.position.y+=(Math.random()-.5)*qe.shake*.5,qe.shake*=Math.exp(-i*6)),It.lookAt(qe.look)}function zv(i,e){let{veh:t}=$.player;qe.orbit+=i*.18;let n=e?6.2:7.5,s=t.h+(e?.75:Math.PI*.75)+Math.sin(qe.orbit)*(e?.6:.9);It.position.set(t.x+Math.sin(s)*n,t.roadY+(e?1.6:2.2),t.z+Math.cos(s)*n),It.fov=50,It.updateProjectionMatrix(),It.lookAt(t.x,t.roadY+.7,t.z)}function Hv(){return rn[Ce.map].field?Hh:qn[Ce.mode]}function Gv(i){let e=Hv(),t=!$.track.isField&&i>0;L={mode:e,finite:t,lenKm:t?i:0,finishIdx:t?$.track.finishIdx:1/0,maxIdx:6,finished:!1,place:0,rivalFin:0,time:t?0:e.timer,score:0,dist:0,startS:$.track.P(6).s,driftTotal:0,overtakes:0,cpCount:0,nextCp:Tv,maxSpeed:0,bestDrift:0,hits:0,cd:3.6,cdShown:4,started:!1,over:!1,braking:!1,drift:{active:!1,pts:0,mult:1,time:0,idle:0,angle:0},driftShowT:0,elapsed:0,acc:0}}var Vv=i=>i>0?6+Math.round(i*1e3/Qt):1/0;function ur(i={}){var t,n;Ze.init();let e=(t=i.len)!=null?t:rn[Ce.map].field?0:Ce.len;hr(Ce.map,(n=i.seed)!=null?n:Math.random()*1e6|0,{finishIdx:Vv(e),fieldMode:i.fieldMode}),Gv(e),L.online=!!i.online,Wv(),Ov(L.online?0:L.mode.rivals),i.onStart&&i.onStart(),qe.mode=+oe.camera,Qe="countdown",an(null),V("hud").classList.remove("hidden"),Gh&&V("touch").classList.remove("hidden"),V("hud-mode").textContent=`${L.online?"\u041E\u043D\u043B\u0430\u0439\u043D \xB7 ":""}${L.mode.name} \xB7 ${$.map.name}${L.finite?` \xB7 ${L.lenKm} \u043A\u043C`:""}`,ar={x:0,y:0},Vh(),Xh(.016,!0);try{hn.compile(Xn,It)}catch{}}var Go=null;function Wv(){if($.track.isField)return;if(!Go){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");for(let s=-128;s<640;s+=64)n.fillStyle=s/64%2?"#f4f4f4":"#d62828",n.beginPath(),n.moveTo(s,0),n.lineTo(s+64,0),n.lineTo(s+128,128),n.lineTo(s+64,128),n.fill();n.fillStyle="rgba(0,0,0,0.75)",n.fillRect(96,36,320,56),n.fillStyle="#fff",n.font="bold 40px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText("\u041D\u0410\u0417\u0410\u0414 \u041D\u0415\u041B\u042C\u0417\u042F",256,66),Go=new dn(t),Go.colorSpace=kt}let i=$.track.wall*2,e=new de(new Et(i,i/4),new bt({map:Go,transparent:!0,opacity:.9}));$.group.add(e),$.backWall=e,mf()}function mf(){if(!$.backWall)return;let i=$.track.sample(Math.max($.track.base+4,3,L.maxIdx-af/Qt));$.backWall.position.set(i.x,i.y+$.track.wall/4,i.z),$.backWall.rotation.set(0,i.h,0)}function ki(i,e=1.6,t="#fff"){let n=V("hud-msg");n.textContent=i,n.style.color=t,n.classList.add("show"),clearTimeout(ki._t),ki._t=setTimeout(()=>n.classList.remove("show"),e*1e3)}var ef=0;function Xv(i){let e=performance.now();return e-ef<330?!1:(ef=e,Ze.crash(Math.min(i,25)),qe.shake=i>8?Math.min(.25,i/60):0,!0)}function qo(i){if(Xv(i)&&(L.hits++,L.drift.active&&L.drift.pts>0&&i>3)){let e=V("drift-pts");e.textContent=Math.floor(L.drift.pts),e.className="drift-pts lost",V("drift-info").textContent="\u0423\u0414\u0410\u0420 \u2014 \u0441\u0435\u0440\u0438\u044F \u0441\u0433\u043E\u0440\u0435\u043B\u0430",L.driftShowT=1.3,L.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}}function qv(i){let{veh:e}=$.player;e.px=e.x,e.pz=e.z,e.ph=e.h,e.pY=e.roadY;let t=$.track,n=oe.handling==="easy",s=oe.assistMode,r=s==="all"||s==="drift"&&(L.mode.id==="drift"||L.mode.id==="field"),a=e.step(xi,i,n?{grip:$.map.grip*1.12,assist:r?1.15:0,manual:oe.manual,easy:!0}:{grip:$.map.grip,assist:r?.45:0,manual:oe.manual,easy:!1,real:!0});if(a.shifted&&(Ze.shift(),a.shifted>0&&i.throttle>.5&&Math.random()<.35&&Ze.backfire()),i.shiftUp=i.shiftDown=!1,t.isField){Yv(e,t);return}let o=t.project(e.x,e.z,e.idx);if(e.idx=o.idx,e.lat=o.lat,e.roadY=o.y,e.slope=o.slope,e.offroad=Math.abs(o.lat)>t.hw+.3&&Math.abs(o.k)<1/170,e.trackH=o.h,L){Qe==="race"&&(L.maxIdx=Math.max(L.maxIdx,e.idx));let f=af/Qt,p=Math.max(t.base+4,3,L.maxIdx-f);if(e.idx<p){let v=e.collideWall(Math.sin(o.h),Math.cos(o.h),(p-e.idx)*Qt,.05);e.idx=p,v>4&&qo(v)}}let l=e.spec.body,c=e.h-o.h,h=Math.abs(Math.cos(c))*l.W/2+Math.abs(Math.sin(c))*l.L/2,u=t.wall-.1-h,d=Math.sign(o.lat);if(n&&e.speed>3){let f=u-2.2,p=Math.abs(o.lat)-f;if(p>0){let v=ht(p/2.2,0,1),m=e.vx*o.lx+e.vz*o.lz;if(m*d>0){let x=m*Math.min(1,v*v*9*xi);e.vx-=o.lx*x,e.vz-=o.lz*x}let g=or(o.h,e.h),M=Math.cos(g)>0?g:or(o.h+Math.PI,e.h);Math.abs(e.beta)<.7&&(e.r+=M*v*5*xi*Math.min(1,e.speed/15))}}if(Math.abs(o.lat)>u){let f=e.collideWall(-d*o.lx,-d*o.lz,Math.abs(o.lat)-u,n?.08:.25);if(n){let p=or(o.h,e.h),v=Math.cos(p)>0?p:or(o.h+Math.PI,e.h);e.h+=v*.08,e.r*=.6}f>(n?3.5:1.5)&&L&&qo(f)}}function Yv(i,e){i.idx=6,i.lat=0,i.offroad=!1;let t=Math.sin(i.h),n=Math.cos(i.h);i.roadY=e.heightAt(i.x,i.z);let[s,r]=e.grad(i.x,i.z);i.slope=s*t+r*n,i.roll=(s*n-r*t)*.8,i.vx-=9.81*s*.85*xi,i.vz-=9.81*r*.85*xi,L&&(i.odo=(i.odo||0)+i.speed*xi);let a=i.spec.body;for(let o of e.collidersNear(i.x,i.z)){let l=i.x-o.x,c=i.z-o.z,h=Math.hypot(l,c),u=o.r+a.W*.55;if(h<u&&h>1e-4){let d=i.collideWall(l/h,c/h,u-h,.15);d>3&&L&&qo(d)}}if(e.f.shore!==void 0&&i.x<e.f.shore-18){let o=i.collideWall(1,0,e.f.shore-18-i.x,.1);o>4&&L&&qo(o)}}function $v(){let{veh:i}=$.player;for(let e of $.rivals)ff(e,Math.hypot(e.x-i.x,e.z-i.z))}function gf(i){let{veh:e,model:t}=$.player,n=$.track,s=L._events||[],r=Qe==="race",a=r?Xo.read(i,e.speed):{throttle:0,brake:0,steer:0,handbrake:0};if(Qe==="over"&&(a={throttle:0,brake:.35,steer:0,handbrake:0,noReverse:!0}),Qe==="countdown"){let o=Xo.read(i,0);L.cd-=i;let l=Math.ceil(L.cd-.6);l!==L.cdShown&&(L.cdShown=l,V("countdown").textContent=l>0?l:"\u0421\u0422\u0410\u0420\u0422!",Ze.countdown(l<=0)),e.rpm+=(e.spec.idle+o.throttle*e.spec.redline*.75-e.rpm)*Math.min(1,i*6),L.cd<=.6&&(Qe="race",L.started=!0,setTimeout(()=>{V("countdown").textContent=""},700))}else{for(let l of s)l==="shiftUp"&&(a.shiftUp=!0),l==="shiftDown"&&(a.shiftDown=!0);L.acc+=i;let o=0;for(;L.acc>=xi&&o<24;)L.acc-=xi,qv(a),o++;o===24&&(L.acc=0)}L.braking=a.brake>.1&&e.u>.5;for(let o of $.rivals)o.out||o.update(i,n,{idx:e.idx,lat:e.lat,t:L.elapsed},L.started);$v(),Bv(i),mf(),L.online&&Qe!=="countdown"&&Ge.sendState(e),n.update(e.idx);for(let o of $.rivals){if(o.out)continue;L.finite&&(o.stopAt=L.finishIdx+40),L.finite&&o.finOrder===void 0&&o.fi>=L.finishIdx&&(o.finOrder=++L.rivalFin);let l=o.fi>e.idx;if(r&&o.ahead&&!l&&L.mode.id==="race"&&(L.overtakes++,ki("\u041E\u0411\u0413\u041E\u041D!  +300",1.2,"#7cff4f"),Ze.score()),o.ahead=l,L.finite&&e.idx-o.fi>170){o.out=!0,o.model.root.visible=!1;continue}e.idx-o.fi>170&&(o.fi=e.idx+180+Math.random()*140,o.v=o.top*.6,o.d=(Math.random()*2-1)*(n.hw-2),o.targetD=o.d,o.ahead=!0,n.ensure(Math.ceil(o.fi)+80))}Wh(i),Zv(i,a),Qe==="race"&&Kv(i,e),Ze.update(e,e.spec,Qe==="countdown"?Math.max(0,(e.rpm-e.spec.idle)/e.spec.redline):a.throttle,Math.max(ht((Math.abs(e.beta)-.15)*2.2,0,1),e.lockR>.5&&e.speed>8?.6:0),e.offroad,e.speed,Qe!=="paused"),Xh(i),t_(i)}function Kv(i,e){L.elapsed+=i;let t=e.speed,n=t*3.6;L.maxSpeed=Math.max(L.maxSpeed,n),L.dist=$.track.isField?e.odo||0:Math.max(L.dist,$.track.P(e.idx).s-L.startS);let s=Math.abs(e.beta)*57.3,r=L.drift;if(t>8.5&&s>11&&s<110&&e.u>2&&!e.offroad)r.active=!0,r.idle=0,r.time+=i,r.mult=Math.min(5,1+Math.floor(r.time/2.5)),r.pts+=s*t*i*.35*r.mult,r.angle=s;else if(r.active&&(r.idle+=i,r.idle>(e.offroad?.3:1.1))){let o=Math.floor(r.pts);if(o>30){L.driftTotal+=o,L.bestDrift=Math.max(L.bestDrift,o),L.mode.id==="drift"&&!L.finite&&(L.time+=Math.min(8,o/1200));let l=V("drift-pts");l.textContent="+"+o,l.className="drift-pts banked",V("drift-info").textContent=o>5e3?"\u041B\u0415\u0413\u0415\u041D\u0414\u0410\u0420\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":o>2e3?"\u041E\u0422\u041B\u0418\u0427\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":"\u0414\u0420\u0418\u0424\u0422 \u0417\u0410\u0421\u0427\u0418\u0422\u0410\u041D",L.driftShowT=1.3,Ze.score()}L.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}if(L.finite&&e.idx>=L.finishIdx){tf(!0);return}if(e.idx>=L.nextCp&&e.idx<L.finishIdx-100){if(L.cpCount++,L.nextCp+=Lh,L.mode.timer&&!L.finite){let o=Math.round(L.mode.bonus(L.cpCount-1));L.time+=o,ki(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422  +${o} \u0441`,1.8,"#ffcc00")}else ki(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422 ${L.cpCount}`,1.5,"#ffcc00");Ze.checkpoint()}if(L.mode.id==="race"?L.score=Math.floor(L.dist)+L.overtakes*300+Math.floor(L.driftTotal/4):L.mode.id==="drift"||L.mode.id==="field"?L.score=L.driftTotal:L.score=Math.floor(L.dist),L.mode.timer&&!L.finite&&(L.time-=i,L.time<=0&&(L.time=0,tf())),L.mode.id==="race"&&$.rivals.length&&(L.place=1+$.rivals.filter(o=>!o.out&&(o.finOrder!==void 0||o.fi>e.idx)).length),L.mode.id==="race"&&L.online){let o=0;for(let l of Ge.players.values())Ge.racers.includes(l.id)&&(l.fin&&l.fin.finished||!l.fin&&l.vis&&l.vis.idx>e.idx)&&o++;L.place=1+o}}var $o=(i,e,t)=>`${i}_${e}${t?"_"+t:""}`,Ko=(i,e)=>e>0&&i!=="drift";function tf(i=!1){if(Qe==="over")return;L.drift.active&&L.drift.pts>30&&(L.driftTotal+=Math.floor(L.drift.pts),L.bestDrift=Math.max(L.bestDrift,Math.floor(L.drift.pts))),(L.mode.id==="drift"||L.mode.id==="field")&&(L.score=L.driftTotal),L.finished=i,i&&L.mode.id==="race"&&$.rivals.length&&(L.place=1+$.rivals.filter(u=>!u.out&&u.finOrder!==void 0).length),i&&L.mode.id==="race"&&L.online&&(L.place=1+Ge.results.filter(u=>u.finished).length),L.mode.id==="drift"&&L.finite&&(L.timeBonus=i?Math.max(0,Math.round((L.lenKm*60-L.elapsed)*50)):0,L.finPlace=i&&L.online?1+Ge.results.filter(u=>u.finished).length:0,L.placeBonus=[0,5e3,3e3,1500][L.finPlace]||0,L.score=L.driftTotal+L.timeBonus+L.placeBonus),Qe="over",Ze.gameOver();let e=$o(L.mode.id,$.map.id,L.lenKm),t=mn[e],n=Ko(L.mode.id,L.lenKm),s=!L.online&&(n?i&&(!t||!t.time||L.elapsed<t.time):L.score>0&&(!t||L.score>t.score)),r={score:L.score,time:i?L.elapsed:0,dist:Math.floor(L.dist),drift:L.bestDrift,car:at[Ce.car].name,date:new Date().toLocaleDateString("ru-RU"),ts:Date.now(),maxSpeed:Math.round(L.maxSpeed)};s&&(mn[e]=r);let a=e+"|"+at[Ce.car].id,o=mn[a],l=!L.online&&(n?i&&(!o||!o.time||L.elapsed<o.time):L.score>0&&(!o||L.score>o.score));l&&(mn[a]=r),(s||l)&&ds.set("records",mn);let c=L.mode.timer&&!L.finite?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E!":"\u0417\u0430\u0435\u0437\u0434 \u043E\u043A\u043E\u043D\u0447\u0435\u043D";i&&(c=L.place?`\u0424\u0418\u041D\u0418\u0428! ${L.place} \u043C\u0435\u0441\u0442\u043E`:"\u0424\u0418\u041D\u0418\u0428!"),V("over-title").textContent=c,V("over-record").classList.toggle("show",s);let h=[];i&&h.push(["\u0412\u0440\u0435\u043C\u044F",ni(L.elapsed)]),L.place&&!L.online&&h.push(["\u041C\u0435\u0441\u0442\u043E",`${L.place} \u0438\u0437 ${$.rivals.length+1}`]),h.push(["\u041E\u0447\u043A\u0438",L.score.toLocaleString("ru-RU")],["\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F",`${(L.dist/1e3).toFixed(2)} \u043A\u043C`],["\u041C\u0430\u043A\u0441. \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",qh(L.maxSpeed)],["\u041B\u0443\u0447\u0448\u0438\u0439 \u0434\u0440\u0438\u0444\u0442",L.bestDrift.toLocaleString("ru-RU")],["\u0412\u0441\u0435 \u043E\u0447\u043A\u0438 \u0434\u0440\u0438\u0444\u0442\u0430",L.driftTotal.toLocaleString("ru-RU")],["\u0427\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B",L.cpCount]),L.mode.id==="race"&&!L.online&&h.push(["\u041E\u0431\u0433\u043E\u043D\u044B",L.overtakes]),L.mode.id==="drift"&&L.finite&&(h.push(["\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0432\u0440\u0435\u043C\u044F","+"+L.timeBonus.toLocaleString("ru-RU")]),L.online&&h.push(["\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u0444\u0438\u043D\u0438\u0448\u0435",L.finPlace?`${L.finPlace}-\u0439 \xB7 +${L.placeBonus.toLocaleString("ru-RU")}`:"\u2014"])),h.push(["\u0423\u0434\u0430\u0440\u044B",L.hits]),i||h.push(["\u0412\u0440\u0435\u043C\u044F \u0432 \u0437\u0430\u0435\u0437\u0434\u0435",ni(L.elapsed)]),t&&!s&&h.push(["\u0420\u0435\u043A\u043E\u0440\u0434",n?t.time?ni(t.time):"\u2014":t.score.toLocaleString("ru-RU")]),V("over-stats").innerHTML=h.map(([u,d])=>`<span>${u}</span><b>${d}</b>`).join(""),L.online&&Ge.finish(i,L.elapsed,L.score),Qo(),V("touch").classList.add("hidden"),setTimeout(()=>{Qe==="over"&&an("over")},900),qe.mode=3,qe.cineT=0}var qh=i=>oe.units==="mph"?`${Math.round(i/1.609)} mph`:`${Math.round(i)} \u043A\u043C/\u0447`;function Zv(i,e){let{veh:t}=$.player,n=t.spec.body,s=t.speed,r=Math.sin(t.h),a=Math.cos(t.h),o=a,l=-r,c=Math.max(t.rearSlide*(Math.abs(t.beta)>.1||t.lockR>0?1:.4),t.spinR),h=(f,p)=>[t.x+r*f+o*p,t.z+a*f+l*p],u=+oe.quality;for(let f of[1,-1]){let[p,v]=h(n.wheelR,f*n.track/2);oe.smoke&&c>.55&&s>8&&!t.offroad&&Math.abs(t.beta)>.35&&Math.random()<(u>0?2:1)*i*Math.min(1,(Math.abs(t.beta)-.3)*3)&&$.smoke.emit(p,t.roadY,v,t.vx,t.vz,c,$.map.night?.1:.15),oe.smoke&&t.offroad&&s>4&&Math.random()<5*i&&$.dust.emit(p,t.roadY,v,t.vx,t.vz,1,.55);let m=$.track.isField;$.skids.add(f>0?0:1,p,m?$.track.heightAt(p,v):t.roadY,v,o,l,!t.offroad&&c>.42?Math.min(1,(c-.3)*1.6):0);let[g,M]=h(n.wheelF,f*n.track/2);$.skids.add(f>0?2:3,g,m?$.track.heightAt(g,M):t.roadY,M,o,l,!t.offroad&&(t.frontSlide>.85||e.brake>.5&&s>15&&t.u>0&&t.lockR>0)?.6:0)}for(let f of $.rivals);$.smoke.update(i),$.dust.update(i),$.snow&&$.snow.update(i,It);let d=$.sunDir;$.sun.position.set(t.x+d.x*90,t.roadY+d.y*90,t.z+d.z*90),$.sun.target.position.set(t.x,t.roadY,t.z),$.sky.position.copy(It.position),$.farPlane.position.set(t.x,t.roadY-14,t.z)}var Jv=V("gauge").getContext("2d"),Qv=V("minimap").getContext("2d"),nf={};function rr(i,e){nf[i]!==e&&(nf[i]=e,V(i).textContent=e)}function jv(i){let e=Jv,t=220,n=110,s=118,r=92;e.clearRect(0,0,t,t);let a=Math.PI*.75,o=Math.PI*2.25;e.lineCap="round",e.beginPath(),e.arc(n,s,r,a,o),e.strokeStyle="rgba(0,0,0,0.45)",e.lineWidth=16,e.stroke();let l=ht(i.rpm/i.spec.redline,0,1);e.beginPath(),e.arc(n,s,r,a,a+(o-a)*l),e.strokeStyle=l>.95?"#ff3b3b":l>.85?"#ffb300":"#ffcc00",e.lineWidth=10,e.stroke();for(let u=0;u<=10;u++){let d=a+(o-a)*u/10;e.beginPath(),e.moveTo(n+Math.cos(d)*(r-16),s+Math.sin(d)*(r-16)),e.lineTo(n+Math.cos(d)*(r-24),s+Math.sin(d)*(r-24)),e.strokeStyle=u>=9?"#ff5050":"rgba(255,255,255,0.7)",e.lineWidth=2,e.stroke()}let c=i.kmh,h=oe.units==="mph"?c/1.609:c;e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font="italic 900 50px Segoe UI, Arial",e.fillText(Math.round(h),n,s-4),e.font="600 13px Segoe UI, Arial",e.fillStyle="rgba(255,255,255,0.75)",e.fillText(oe.units==="mph"?"MPH":"\u041A\u041C/\u0427",n,s+26),e.font="900 26px Segoe UI, Arial",e.fillStyle="#ffcc00",e.fillText(i.gear===-1?"R":i.speed<.5&&i.gear===1?"N":String(i.gear),n,s+58)}function e_(i){let e=Qv,t=170,n=85,s=112;e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(85,85,84,0,Math.PI*2),e.clip();let r=.2,a=Math.sin(i.h),o=Math.cos(i.h),l=(h,u)=>{let d=h-i.x,f=u-i.z,p=d*a+f*o,v=d*o-f*a;return[n-v*r,s-p*r]},c=$.track;if(c.isField){e.strokeStyle="rgba(255,255,255,0.18)",e.lineWidth=1;let h=Math.floor((i.x-450)/32)*32,u=Math.floor((i.z-450)/32)*32;for(let d=0;d<30;d++){let[f,p]=l(h+d*32,i.z-450),[v,m]=l(h+d*32,i.z+450);e.beginPath(),e.moveTo(f,p),e.lineTo(v,m),e.stroke(),[f,p]=l(i.x-450,u+d*32),[v,m]=l(i.x+450,u+d*32),e.beginPath(),e.moveTo(f,p),e.lineTo(v,m),e.stroke()}e.fillStyle="rgba(255,255,255,0.8)";for(let d of c.collidersNear(i.x,i.z)){let[f,p]=l(d.x,d.z);e.beginPath(),e.arc(f,p,2.5,0,Math.PI*2),e.fill()}if(c.f.shore!==void 0){let[d,f]=l(c.f.shore-18,i.z-600),[p,v]=l(c.f.shore-18,i.z+600);e.strokeStyle="#4bb8ff",e.lineWidth=4,e.beginPath(),e.moveTo(d,f),e.lineTo(p,v),e.stroke()}e.restore(),e.fillStyle="#4bd2ff",e.beginPath(),e.moveTo(n,s-8),e.lineTo(n-6,s+6),e.lineTo(n+6,s+6),e.closePath(),e.fill();return}e.lineCap="round",e.lineJoin="round",e.beginPath();for(let h=Math.max(c.base,Math.floor(i.idx)-60);h<Math.min(c.lastIdx,i.idx+320);h+=3){let u=c.P(h),[d,f]=l(u.x,u.z);h===Math.max(c.base,Math.floor(i.idx)-60)?e.moveTo(d,f):e.lineTo(d,f)}if(e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=6,e.stroke(),L&&L.nextCp<c.lastIdx&&L.nextCp<L.finishIdx-100){let h=c.P(L.nextCp),[u,d]=l(h.x,h.z);e.fillStyle="#ffcc00",e.beginPath(),e.arc(u,d,5,0,Math.PI*2),e.fill()}if(L&&L.finishIdx<=c.lastIdx&&L.finishIdx>=c.base){let h=c.P(L.finishIdx),[u,d]=l(h.x,h.z);e.fillStyle="#fff",e.fillRect(u-6,d-6,12,12),e.fillStyle="#111",e.fillRect(u-6,d-6,6,6),e.fillRect(u,d,6,6)}for(let h of Ge.players.values()){if(!h.vis)continue;let[u,d]=l(h.vis.x,h.vis.z);e.fillStyle="#7cff4f",e.beginPath(),e.arc(u,d,4.5,0,Math.PI*2),e.fill()}for(let h of $.rivals){if(h.out)continue;let[u,d]=l(h.x,h.z);e.fillStyle="#ff4b4b",e.beginPath(),e.arc(u,d,4,0,Math.PI*2),e.fill()}e.restore(),e.fillStyle="#4bd2ff",e.beginPath(),e.moveTo(n,s-8),e.lineTo(n-6,s+6),e.lineTo(n+6,s+6),e.closePath(),e.fill()}function t_(i){let{veh:e}=$.player;if(jv(e),e_(e),!L)return;L.mode.timer&&!L.finite?(rr("hud-timer",ni(L.time)),V("hud-timer").classList.toggle("warn",L.time<10)):(rr("hud-timer",ni(L.elapsed)),V("hud-timer").classList.remove("warn"));let t=Math.max(0,(L.nextCp-e.idx)*Qt),n=Math.max(0,(L.finishIdx-e.idx)*Qt),s=$.track.isField?"\u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \xB7 \u0434\u0440\u0438\u0444\u0442":`\u0434\u043E \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430 ${Math.round(t)} \u043C`;L.finite&&(s=`\u0434\u043E \u0444\u0438\u043D\u0438\u0448\u0430 ${n>=1e3?(n/1e3).toFixed(2)+" \u043A\u043C":Math.round(n)+" \u043C"}`),rr("hud-next",s),rr("hud-score",L.score.toLocaleString("ru-RU"));let r=(L.online?Ge.players.size:$.rivals.length)+1,a=L.place&&L.mode.id==="race"?` \xB7 \u043C\u0435\u0441\u0442\u043E ${L.place}/${r}`:"";rr("hud-dist",`${(L.dist/1e3).toFixed(2)} \u043A\u043C${L.finite?` \u0438\u0437 ${L.lenKm}`:""}${L.mode.id==="race"&&!L.online?` \xB7 \u043E\u0431\u0433\u043E\u043D\u043E\u0432: ${L.overtakes}`:""}${a}`);let o=mn[$o(L.mode.id,$.map.id,L.lenKm)],l=Ko(L.mode.id,L.lenKm);rr("hud-sub",o?l?`\u0440\u0435\u043A\u043E\u0440\u0434: ${o.time?ni(o.time):"\u2014"}`:`\u0440\u0435\u043A\u043E\u0440\u0434: ${o.score.toLocaleString("ru-RU")}`:"\u0440\u0435\u043A\u043E\u0440\u0434\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442");let c=V("hud-drift");if(L.drift.active&&L.drift.pts>5){c.classList.add("show");let h=V("drift-pts");h.className="drift-pts",h.textContent=Math.floor(L.drift.pts).toLocaleString("ru-RU"),V("drift-info").textContent=`x${L.drift.mult}  \xB7  \u0443\u0433\u043E\u043B ${Math.round(L.drift.angle)}\xB0`}else L.driftShowT>0?(L.driftShowT-=i,c.classList.add("show")):c.classList.remove("show")}var n_=["main","setup","garage","records","settings","controls","pause","over","online","lobby"],i_=["main","setup","garage","records","settings","controls","online","lobby"];function an(i){for(let t of n_)V("menu-"+t).classList.toggle("show",t===i);V("loading").classList.remove("show"),i_.includes(i)&&(Qe!=="menu"&&xf(),Qe="menu",V("hud").classList.add("hidden"),V("touch").classList.add("hidden"),ar=i==="setup"?{x:0,y:.18}:i==="lobby"||i==="online"?{x:innerWidth>800?-.16:0,y:innerWidth>800?0:.2}:{x:innerWidth>800?.16:0,y:innerWidth>800?0:.2},Vh(),It.updateProjectionMatrix()),i==="setup"&&lr(),V("garage-info").classList.toggle("hidden",i!=="garage"),i==="garage"&&(vf(),Yh()),i==="records"&&$h(),i==="settings"&&l_(),i==="online"&&Kh(),i==="lobby"&&zi();let e=!!(L&&L.online);V("btn-restart").classList.toggle("hidden",e),V("btn-again").classList.toggle("hidden",e),V("btn-tomenu").textContent=e?"\u0412\u044B\u0439\u0442\u0438 \u0432 \u043B\u043E\u0431\u0431\u0438":"\u0412 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E",V("btn-over-menu").textContent=e?"\u0412 \u043B\u043E\u0431\u0431\u0438":"\u0412 \u043C\u0435\u043D\u044E",$n=i}var $n="main";function xf(){L=null,V("countdown").textContent="",hr(Ce.map,7)}document.querySelectorAll("[data-go]").forEach(i=>i.addEventListener("click",()=>{Ze.init(),Ze.click(),an(i.dataset.go)}));function lr(){let i=!!rn[Ce.map].field;V("mode-cards").innerHTML=(i?'<div class="card sel"><b>\u041F\u043E\u043B\u0438\u0433\u043E\u043D</b><small>\u041D\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0435 \u043D\u0435\u0442 \u0442\u0440\u0430\u0441\u0441\u044B: \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430, \u043E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0440\u0438\u0444\u0442.</small></div>':"")+qn.map((e,t)=>`<div class="card ${t===Ce.mode&&!i?"sel":""}" ${i?'style="opacity:.4"':""} data-mode="${t}"><b>${e.name}</b><small>${e.desc}</small></div>`).join(""),V("map-cards").innerHTML=rn.map((e,t)=>{let n=e.field?0:Ce.len,s=e.field?"field":qn[Ce.mode].id,r=mn[$o(s,e.id,n)],a=r?Ko(s,n)?r.time?ni(r.time):"":r.score.toLocaleString("ru-RU"):"";return`<div class="card ${t===Ce.map?"sel":""}" data-map="${t}"><span class="tag">${e.tag}</span><b>${e.name}</b><small>${e.desc}</small>${a?`<span class="rec">\u0440\u0435\u043A\u043E\u0440\u0434: ${a}</span>`:""}</div>`}).join(""),s_(i),V("setup-car-name").textContent=at[Ce.car].name,document.querySelectorAll("[data-mode]").forEach(e=>e.addEventListener("click",()=>{Ce.mode=+e.dataset.mode,Yn(),Ze.click(),lr()})),document.querySelectorAll("[data-map]").forEach(e=>e.addEventListener("click",()=>{let t=+e.dataset.map;Ze.click(),t!==Ce.map&&(Ce.map=t,Yn(),hr(Ce.map,7)),lr()}))}function s_(i){let e=V("setup-opts");if(i){V("opts-title").textContent="\u041F\u043E\u043B\u0438\u0433\u043E\u043D";let t=[["obst","\u0421 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F\u043C\u0438","\u0428\u0438\u043D\u044B, \u043A\u043E\u043D\u0443\u0441\u044B, \u0431\u043B\u043E\u043A\u0438, \u0434\u0435\u0440\u0435\u0432\u044C\u044F, \u043A\u0430\u043C\u043D\u0438 \u2014 \u043E\u0431\u044A\u0435\u0437\u0436\u0430\u0439 \u0438 \u0434\u0440\u0438\u0444\u0442\u0443\u0439 \u0432\u043E\u043A\u0440\u0443\u0433."],["clean","\u0427\u0438\u0441\u0442\u043E\u0435 \u043F\u043E\u043B\u0435","\u0412\u0441\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0443\u0431\u0440\u0430\u043D\u044B \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u0435 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438."],["flat","\u0427\u0438\u0441\u0442\u043E\u0435 \u0438 \u0440\u043E\u0432\u043D\u043E\u0435","\u0411\u0435\u0437 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u0431\u0435\u0437 \u0445\u043E\u043B\u043C\u043E\u0432 \u2014 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0440\u043E\u0432\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438."]];e.innerHTML=`<div class="cards">${t.map(([n,s,r])=>`<div class="card ${Ce.fieldMode===n?"sel":""}" data-fm="${n}"><b>${s}</b><small>${r}</small></div>`).join("")}</div>`,e.querySelectorAll("[data-fm]").forEach(n=>n.addEventListener("click",()=>{Ce.fieldMode!==n.dataset.fm&&(Ce.fieldMode=n.dataset.fm,Yn(),Ze.click(),hr(Ce.map,7),lr())}))}else{V("opts-title").textContent="\u0414\u043B\u0438\u043D\u0430 \u0442\u0440\u0430\u0441\u0441\u044B";let t=!Ce.len,n=Ce.len||10;e.innerHTML=`<div class="len-row">
      <input type="range" id="len-range" min="${Av}" max="${of}" step="1" value="${n}" ${t?'class="off"':""} />
      <div class="len-val" id="len-val">${t?"\u221E":n+" \u043A\u043C"}</div>
      <button class="btn small ${t?"accent":""}" id="len-inf">\u221E \u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F</button>
    </div>
    <small class="len-hint">${t?"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u0440\u0430\u0441\u0441\u0430: \u0435\u0434\u0435\u0448\u044C, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432\u044B\u0439\u0434\u0435\u0442 \u0432\u0440\u0435\u043C\u044F (\u0432 \u0413\u043E\u043D\u043A\u0435 \u0438 \u0414\u0440\u0438\u0444\u0442\u0435) \u0438\u043B\u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0445\u043E\u0447\u0435\u0448\u044C (\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430).":"\u0412 \u043A\u043E\u043D\u0446\u0435 \u0442\u0440\u0430\u0441\u0441\u044B \u2014 \u0444\u0438\u043D\u0438\u0448. \u0422\u0430\u0439\u043C\u0435\u0440 \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0435\u0437\u0434\u0430, \u0432 \u0413\u043E\u043D\u043A\u0435 \u0432\u0430\u0436\u043D\u043E \u043C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u043E\u0432."}</small>`;let s=V("len-range");s.addEventListener("input",()=>{Ce.len=+s.value,V("len-val").textContent=Ce.len+" \u043A\u043C",s.classList.remove("off"),V("len-inf").classList.remove("accent")}),s.addEventListener("change",()=>{Yn(),lr()}),V("len-inf").addEventListener("click",()=>{Ze.click(),Ce.len=Ce.len?0:+s.value,Yn(),lr()})}}V("btn-start").addEventListener("click",()=>{Ze.click(),ur()});var us={},pn=null,hs=null,Vo=null,Oh=[],Nh=!1,sf=0;function kh(i){var e;return`${i.id}:${(e=Ce.colors[i.id])!=null?e:0}`}function r_(i){if(!pn){let l=document.createElement("canvas");l.width=320,l.height=180,pn=new Or({canvas:l,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),pn.outputColorSpace=kt,pn.toneMapping=er,pn.setPixelRatio(1),pn.setSize(320,180,!1),pn.setClearColor(0,0),hs=new fi;let c=new ns(pn);hs.environment=c.fromScene(new Kr,.04).texture,c.dispose(),hs.add(new qr(16777215,4478310,1.6));let h=new $r(16777215,2.2);h.position.set(-4,8,6),hs.add(h),Vo=new Jt(26,16/9,.1,100)}let e=jr(i,hf(i),{outline:oe.outline});hs.add(e.root);let t=new On().setFromObject(e.root),n=t.getSize(new P),s=t.getCenter(new P),r=Math.max(n.z*.95,n.x*1.6,n.y*2.2)/Math.tan(_d.degToRad(13))*.36,a=new P(-.62,.36,.7).normalize();Vo.position.copy(s).addScaledVector(a,r),Vo.lookAt(s.x,s.y-n.y*.05,s.z),pn.render(hs,Vo);let o=pn.domElement.toDataURL("image/png");return hs.remove(e.root),e.root.traverse(l=>{l.geometry&&!l.userData.sharedGeo&&l.geometry.dispose()}),o}function a_(){if(Nh)return;Nh=!0;let i=()=>{let e=Oh.shift();if(!e){Nh=!1,clearTimeout(sf),sf=setTimeout(()=>{!Oh.length&&pn&&(pn.dispose(),pn.forceContextLoss(),pn=null)},3e3);return}let t=kh(e);if(!us[t]){try{us[t]=r_(e)}catch{us[t]=""}let n=document.querySelector(`.car-card[data-car="${at.indexOf(e)}"] img`);n&&us[t]&&(n.src=us[t])}setTimeout(i,0)};i()}function vf(){V("garage-count").textContent=`${at.length} \u043C\u0430\u0448\u0438\u043D`;let i=at.map((n,s)=>s).sort((n,s)=>(at[n].vmax||0)-(at[s].vmax||0));V("car-grid").innerHTML=i.map(n=>{let s=at[n],r=us[kh(s)];return`<div class="car-card ${n===Ce.car?"sel":""}" data-car="${n}"><img class="thumb" alt="" ${r?`src="${r}"`:""}/><b>${s.name}</b></div>`}).join(""),document.querySelectorAll(".car-card").forEach(n=>n.addEventListener("click",()=>_f(+n.dataset.car)));let e=at.filter(n=>!us[kh(n)]);e.sort((n,s)=>Math.abs(at.indexOf(n)-Ce.car)-Math.abs(at.indexOf(s)-Ce.car)),Oh=e,a_();let t=document.querySelector(".car-card.sel");t&&t.scrollIntoView({block:"nearest"})}function Yh(){var n;let i=at[Ce.car];V("car-name").textContent=i.name,V("car-tag").innerHTML=`${Jo(i.tag)}<span class="cls cls-${Ni(i)}">${Ni(i)}</span>`,V("car-desc").textContent=i.desc;let e=Ld(i);V("car-stats").innerHTML=[["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",e.top],["\u0420\u0430\u0437\u0433\u043E\u043D",e.accel],["\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C",e.handling],["\u0414\u0440\u0438\u0444\u0442",e.drift]].map(([s,r])=>`<div class="stat"><span>${s}</span><div class="bar"><i style="width:${Math.round(r*100)}%"></i></div></div>`).join(""),V("car-spec").textContent=`${i.hp} \u043B.\u0441. \xB7 ${i.torque} \u041D\xB7\u043C \xB7 ${i.mass} \u043A\u0433 \xB7 \u0434\u043E ${qh(i.vmax||250)} \xB7 \u043F\u0440\u0438\u0432\u043E\u0434 ${i.drive==="RWD"?"\u0437\u0430\u0434\u043D\u0438\u0439":i.drive==="AWD"?"\u043F\u043E\u043B\u043D\u044B\u0439":"\u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439"} \xB7 ${i.gears.length} ${i.gears.length<5?"\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438":"\u043F\u0435\u0440\u0435\u0434\u0430\u0447"}`;let t=(n=Ce.colors[i.id])!=null?n:0;V("car-colors").innerHTML=i.colors.map((s,r)=>`<div class="swatch ${r===t?"sel":""}" style="background:${s}" data-col="${r}"></div>`).join(""),document.querySelectorAll("[data-col]").forEach(s=>s.addEventListener("click",()=>{Ce.colors[i.id]=+s.dataset.col,Yn(),Ze.click(),$.player.model.bodyMat.color.set(i.colors[+s.dataset.col]),Yh(),vf()})),document.querySelectorAll(".car-card").forEach(s=>s.classList.toggle("sel",+s.dataset.car===Ce.car))}function _f(i){if(i===Ce.car)return;Ce.car=(i+at.length)%at.length,Yn(),Ze.click(),na(6,-2.8),Yh();let e=document.querySelector(".car-card.sel");e&&e.scrollIntoView({block:"nearest"})}function yf(i){_f((Ce.car+i+at.length)%at.length)}V("car-prev").addEventListener("click",()=>yf(-1));V("car-next").addEventListener("click",()=>yf(1));var vt={map:"all",mode:"all",car:"all",len:"all",group:"map",sort:"best"};function o_(){let i=[];for(let e of[...qn,Hh])for(let t of rn)if(!!t.field==(e.id==="field"))for(let n=0;n<=of;n++)for(let s of at){let r=mn[$o(e.id,t.id,n)+"|"+s.id];r&&i.push({r,mode:e,map:t,len:n,car:s,timeRec:Ko(e.id,n)})}return i}function $h(){let i=o_(),e=(c,h,u)=>`<option value="${c}" ${String(c)===String(u)?"selected":""}>${h}</option>`,t=at.filter(c=>i.some(h=>h.car===c)),n=[...new Set(i.map(c=>c.len))].sort((c,h)=>c-h);V("rec-filters").innerHTML=`
    <label>\u041A\u0430\u0440\u0442\u0430<select data-rf="map">${e("all","\u0412\u0441\u0435 \u043A\u0430\u0440\u0442\u044B",vt.map)}${rn.map(c=>e(c.id,c.name,vt.map)).join("")}</select></label>
    <label>\u0420\u0435\u0436\u0438\u043C<select data-rf="mode">${e("all","\u0412\u0441\u0435 \u0440\u0435\u0436\u0438\u043C\u044B",vt.mode)}${[...qn,Hh].map(c=>e(c.id,c.name,vt.mode)).join("")}</select></label>
    <label>\u041C\u0430\u0448\u0438\u043D\u0430<select data-rf="car">${e("all","\u0412\u0441\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",vt.car)}${t.map(c=>e(c.id,c.name,vt.car)).join("")}</select></label>
    <label>\u0414\u043B\u0438\u043D\u0430<select data-rf="len">${e("all","\u041B\u044E\u0431\u0430\u044F",vt.len)}${n.map(c=>e(c,c?c+" \u043A\u043C":"\u221E / \u043F\u043E\u043B\u0438\u0433\u043E\u043D",vt.len)).join("")}</select></label>
    <label>\u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C<select data-rf="group">${e("map","\u041F\u043E \u043A\u0430\u0440\u0442\u0430\u043C",vt.group)}${e("car","\u041F\u043E \u043C\u0430\u0448\u0438\u043D\u0430\u043C",vt.group)}${e("mode","\u041F\u043E \u0440\u0435\u0436\u0438\u043C\u0430\u043C",vt.group)}</select></label>
    <label>\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430<select data-rf="sort">${e("best","\u041B\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",vt.sort)}${e("date","\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",vt.sort)}${e("speed","\u041C\u0430\u043A\u0441. \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",vt.sort)}${e("dist","\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F",vt.sort)}</select></label>`,document.querySelectorAll("[data-rf]").forEach(c=>c.addEventListener("change",()=>{vt[c.dataset.rf]=c.value,$h()}));let s=i.filter(c=>(vt.map==="all"||c.map.id===vt.map)&&(vt.mode==="all"||c.mode.id===vt.mode)&&(vt.car==="all"||c.car.id===vt.car)&&(vt.len==="all"||c.len===+vt.len));if(!i.length){V("records-table").innerHTML='<p class="hint">\u0420\u0435\u043A\u043E\u0440\u0434\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0441\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439!</p>';return}if(!s.length){V("records-table").innerHTML='<p class="hint">\u041F\u043E \u044D\u0442\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432 \u043D\u0435\u0442.</p>';return}let r=c=>vt.group==="car"?c.car.name:vt.group==="mode"?c.mode.name:c.map.name,a=(c,h)=>vt.sort==="date"?(h.r.ts||0)-(c.r.ts||0):vt.sort==="speed"?(h.r.maxSpeed||0)-(c.r.maxSpeed||0):vt.sort==="dist"?(h.r.dist||0)-(c.r.dist||0):c.mode.id!==h.mode.id?qn.indexOf(c.mode)-qn.indexOf(h.mode):c.len!==h.len?c.len-h.len:c.timeRec?(c.r.time||1e9)-(h.r.time||1e9):h.r.score-c.r.score,o=new Map;for(let c of s){let h=r(c);o.has(h)||o.set(h,[]),o.get(h).push(c)}let l="<table><tr><th>\u041A\u0430\u0440\u0442\u0430 \xB7 \u0440\u0435\u0436\u0438\u043C</th><th>\u0414\u043B\u0438\u043D\u0430</th><th>\u041C\u0430\u0448\u0438\u043D\u0430</th><th>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</th><th>\u0414\u0430\u0442\u0430</th></tr>";for(let[c,h]of o){l+=`<tr><td colspan="5" class="rec-group">${Jo(c)}</td></tr>`;for(let u of h.sort(a)){let d=u.timeRec?u.r.time?ni(u.r.time):"\u2014":`${u.r.score.toLocaleString("ru-RU")} \u043E\u0447\u043A.`,f=[u.r.dist?`${(u.r.dist/1e3).toFixed(1)} \u043A\u043C`:"",u.r.maxSpeed?qh(u.r.maxSpeed):""].filter(Boolean).join(" \xB7 ");l+=`<tr><td>${u.map.name}<small>${u.mode.name}</small></td><td>${u.map.field?"\u2014":u.len?u.len+" \u043A\u043C":"\u221E"}</td><td>${u.car.name}<span class="cls cls-${Ni(u.car)}">${Ni(u.car)}</span></td><td><b>${d}</b>${f?`<small>${f}</small>`:""}</td><td><small>${u.r.date||""}</small></td></tr>`}}V("records-table").innerHTML=l+"</table>"}V("btn-reset-rec").addEventListener("click",()=>{confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u043A\u043E\u0440\u0434\u044B?")&&(mn={},ds.set("records",mn),$h())});function l_(){V("set-vol").value=oe.vol,V("set-music").checked=oe.music,V("set-assist").value=oe.assistMode,V("set-draw").value=oe.draw,V("set-manual").checked=oe.manual,V("set-quality").value=oe.quality,V("set-camera").value=oe.camera,V("set-units").value=oe.units,V("set-sfx").value=oe.sfxVol,V("set-musicvol").value=oe.musicVol,V("set-outline").checked=oe.outline,V("set-handling").value=oe.handling,V("set-smoke").checked=oe.smoke,V("set-fps").value=oe.fps,V("set-showfps").checked=oe.showFps,V("set-autores").checked=oe.autoRes}V("set-vol").addEventListener("input",i=>{oe.vol=+i.target.value,Ze.setVolume(oe.vol),en()});V("set-sfx").addEventListener("input",i=>{oe.sfxVol=+i.target.value,Ze.setSfxVol(oe.sfxVol),en()});V("set-musicvol").addEventListener("input",i=>{oe.musicVol=+i.target.value,Ze.setMusicVol(oe.musicVol),en()});V("set-outline").addEventListener("change",i=>{oe.outline=i.target.checked,en(),Qe==="menu"&&na(6,-2.8)});V("set-handling").addEventListener("change",i=>{oe.handling=i.target.value,oe.easy=oe.handling==="easy",en()});V("set-smoke").addEventListener("change",i=>{oe.smoke=i.target.checked,en(),$&&$.smoke.clear()});V("set-music").addEventListener("change",i=>{oe.music=i.target.checked,Ze.setMusic(oe.music),en()});V("set-assist").addEventListener("change",i=>{oe.assistMode=i.target.value,en()});V("set-draw").addEventListener("change",i=>{oe.draw=+i.target.value,en(),Qe!=="race"&&hr(Ce.map,7)});function c_(){let i=document,e=i.documentElement,t=i.fullscreenElement||i.webkitFullscreenElement;try{if(t)(i.exitFullscreen||i.webkitExitFullscreen).call(i);else{let n=e.requestFullscreen||e.webkitRequestFullscreen;if(n){let s=n.call(e,{navigationUI:"hide"});s&&s.then&&s.then(()=>{var r,a;return(a=(r=screen.orientation)==null?void 0:r.lock)==null?void 0:a.call(r,"landscape").catch(()=>{})}).catch(()=>{})}}}catch{}}for(let i of document.querySelectorAll(".btn-fs"))i.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),c_()});V("set-manual").addEventListener("change",i=>{oe.manual=i.target.checked,en()});V("set-quality").addEventListener("change",i=>{oe.quality=+i.target.value,en(),hr(Ce.map,7)});V("set-camera").addEventListener("change",i=>{oe.camera=+i.target.value,en()});V("set-units").addEventListener("change",i=>{oe.units=i.target.value,en()});V("set-fps").addEventListener("change",i=>{oe.fps=+i.target.value,en()});V("set-showfps").addEventListener("change",i=>{oe.showFps=i.target.checked,en()});V("set-autores").addEventListener("change",i=>{oe.autoRes=i.target.checked,en(),Ft.scale=1,Bh()});var Mf=()=>(oe.server||"").trim()||(/^(localhost|127\.)/.test(location.hostname)?"ws://localhost:8080":jd);function cr(i,e){let t=V("online-status");t.textContent=i,t.classList.toggle("err",!!e)}var rf=[5,10,15,20,25,30,40,50,0];function Kh(){let i=at[Ce.car],e=Ni(i);V("mm-car").innerHTML=`${i.name}<span class="cls cls-${e}">${e}</span>`;let t=(n,s,r)=>{V(n).innerHTML=s.map(([a,o])=>`<button class="btn small ${Ce.mm[r]===a?"on":""}" data-v="${a}">${o}</button>`).join(""),V(n).querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{Ze.click();let o=a.dataset.v;Ce.mm[r]=/^\d+$/.test(o)?+o:o,Yn(),Kh()}))};t("mm-mode",[["race","\u0413\u043E\u043D\u043A\u0430"],["drift","\u0414\u0440\u0438\u0444\u0442"]],"mode"),t("mm-size",[[5,"5"],[10,"10"]],"size"),t("mm-car-rule",[["any","\u041B\u044E\u0431\u044B\u0435"],["class",`\u041A\u043B\u0430\u0441\u0441 ${e}`],["same","\u0422\u0430 \u0436\u0435 \u043C\u0430\u0448\u0438\u043D\u0430"]],"carRule"),rf.includes(Ce.mm.len)||(Ce.mm.len=10),V("mm-len").innerHTML=rf.map(n=>`<option value="${n}" ${n===Ce.mm.len?"selected":""}>${n?n+" \u043A\u043C":"\u221E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F"}</option>`).join(""),V("on-name").value=oe.name||"",V("on-server").value=oe.server||"",V("on-server").placeholder=Mf(),cr(Ge.connected?"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"")}function Zh(){var e;let i=at[Ce.car];return{name:oe.name||"\u0418\u0433\u0440\u043E\u043A",car:Ce.car,cls:Ni(i),color:(e=Ce.colors[i.id])!=null?e:0}}async function Zo(i){Ze.click(),oe.name=V("on-name").value.trim().slice(0,16),oe.server=V("on-server").value.trim(),en(),cr("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026 (\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0438\u043D\u0443\u0442\u044B)"),document.querySelectorAll("#menu-online .btn").forEach(e=>e.disabled=!0);try{await Ge.connect(Mf(),{...i,...Zh()}),an("lobby")}catch(e){cr(e.message,!0)}document.querySelectorAll("#menu-online .btn").forEach(e=>e.disabled=!1)}var bf=()=>({mm:{...Ce.mm,maps:rn.map((i,e)=>i.field?-1:e).filter(i=>i>=0)}});V("on-quick").addEventListener("click",()=>Zo(bf()));V("mm-len").addEventListener("change",i=>{Ce.mm.len=+i.target.value,Yn()});function Sf(i){Ce.car=(Ce.car+i+at.length)%at.length,Yn(),Ze.click(),$&&Qe==="menu"&&na(6,-2.8),Kh()}V("mm-prev").addEventListener("click",()=>Sf(-1));V("mm-next").addEventListener("click",()=>Sf(1));V("mm-again").addEventListener("click",()=>{an("online"),Zo(bf())});V("on-create").addEventListener("click",()=>Zo({}));V("on-join").addEventListener("click",()=>{let i=V("on-code").value.trim().toUpperCase();if(i.length!==4){cr("\u0412\u0432\u0435\u0434\u0438 \u043A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u0438\u0437 4 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",!0);return}Zo({code:i})});V("on-back").addEventListener("click",()=>{Ze.click(),Ge.disconnect(!0),an("main")});function h_(i){let e=rn[i.map]||rn[0],t=e.field?"\u041F\u043E\u043B\u0438\u0433\u043E\u043D":(qn.find(s=>s.id===i.mode)||qn[0]).name,n=e.field?{obst:"\u0441 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F\u043C\u0438",clean:"\u0447\u0438\u0441\u0442\u043E\u0435 \u043F\u043E\u043B\u0435",flat:"\u0447\u0438\u0441\u0442\u043E\u0435 \u0438 \u0440\u043E\u0432\u043D\u043E\u0435"}[i.fieldMode]:i.len?`${i.len} \u043A\u043C`:"\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F";return`${t} \xB7 ${e.name} \xB7 ${n}`}function zi(){if(!Ge.connected){an("online");return}let i=Ge.mm;V("lobby-code").textContent=i?"":Ge.code,V("menu-lobby").querySelector("h2").firstChild.textContent=i?"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043C\u0430\u0442\u0447 ":"\u041A\u043E\u043C\u043D\u0430\u0442\u0430 ",V("lobby-type").textContent=i?`${i.mode==="drift"?"\u0414\u0440\u0438\u0444\u0442":"\u0413\u043E\u043D\u043A\u0430"} \xB7 ${i.len?i.len+" \u043A\u043C":"\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F"} \xB7 ${i.size} \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \xB7 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438: ${{any:"\u043B\u044E\u0431\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",class:"\u043A\u043B\u0430\u0441\u0441 "+Ni(at[Ce.car]),same:at[Ce.car].name}[i.carRule]}`:"\u0417\u0430\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430 \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u043A\u043E\u0434 \u0434\u0440\u0443\u0437\u044C\u044F\u043C";let e=Zh(),t=[{id:Ge.id,...e,me:!0},...Ge.players.values()];V("lobby-players").innerHTML=t.map(l=>{let c=at[l.car]||at[0];return`<div class="lp"><i style="background:${c.colors[l.color%c.colors.length]}"></i><b>${l.id===Ge.host&&!Ge.mm?"\u{1F451} ":""}${Jo(l.name)}${l.me?" (\u0442\u044B)":""}</b><span>${c.name}${l.inRace?" \xB7 \u0432 \u0437\u0430\u0435\u0437\u0434\u0435":""}</span></div>`}).join(""),V("lobby-count").textContent=`\u0418\u0433\u0440\u043E\u043A\u0438: ${t.length} / ${i?i.size:10}`,V("lobby-car").textContent=at[Ce.car].name;let n=Ge.config,s=Ge.isHost&&!i;V("lobby-host").classList.toggle("hidden",!s),V("lobby-guest").classList.toggle("hidden",s||!!i),V("lobby-start").classList.toggle("hidden",!s),V("lobby-carsw").classList.toggle("hidden",!!i);let r=Ge.state==="done";V("mm-again").classList.toggle("hidden",!(i&&r)),V("lobby-leave").textContent=i&&!r?"\u2715 \u041E\u0442\u043C\u0435\u043D\u0430":"\u2190 \u0412\u044B\u0439\u0442\u0438";let a=Ge.mmStatus;V("mm-search").classList.toggle("hidden",!i),i&&(V("mm-search").innerHTML=r?'<div class="hud-small">\u041C\u0430\u0442\u0447 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D</div>':a&&a.state==="countdown"?`<div class="hud-small">\u0412\u0441\u0435 \u0432 \u0441\u0431\u043E\u0440\u0435! \u0421\u0442\u0430\u0440\u0442 \u0447\u0435\u0440\u0435\u0437</div><div class="mm-cd">${a.left}</div>`:Ge.state==="racing"?'<div class="hud-small">\u0418\u0434\u0451\u0442 \u0437\u0430\u0435\u0437\u0434\u2026</div>':`<div class="hud-small">\u0418\u0449\u0435\u043C \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u043E\u0432\u2026</div><div class="mm-count">${a?a.count:t.length} / ${i.size}</div><div class="hud-small" id="mm-wait-t"></div>`),V("lobby-conf-text").textContent=h_(n);let o=Ge.state==="racing";if(V("lobby-wait").textContent=i?r?"\u041D\u0430\u0436\u043C\u0438 \xAB\u0418\u0441\u043A\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430\xBB, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0439\u0442\u0438 \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0442\u0447 \u0441 \u0442\u0435\u043C\u0438 \u0436\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438.":"\u041C\u0430\u0442\u0447 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0441\u0430\u043C, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u043D\u0443\u0436\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u043C\u0438 \u043C\u0430\u0448\u0438\u043D\u0430\u043C\u0438.":o?"\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0434\u0451\u0442 \u0437\u0430\u0435\u0437\u0434 \u2014 \u043F\u043E\u0434\u043E\u0436\u0434\u0438, \u043F\u043E\u043A\u0430 \u043E\u043D \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F.":s?t.length<2?"\u041C\u043E\u0436\u043D\u043E \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u043B\u0438 \u043F\u043E\u0434\u043E\u0436\u0434\u0430\u0442\u044C \u0434\u0440\u0443\u0437\u0435\u0439.":"":"\u0416\u0434\u0451\u043C, \u043A\u043E\u0433\u0434\u0430 \u0445\u043E\u0441\u0442 \u043D\u0430\u0436\u043C\u0451\u0442 \xAB\u0421\u0442\u0430\u0440\u0442\xBB.",s){V("lc-map").innerHTML=rn.map((h,u)=>`<option value="${u}" ${u===n.map?"selected":""}>${h.name}</option>`).join("");let l=!!(rn[n.map]||{}).field;V("lc-mode").innerHTML=qn.map(h=>`<option value="${h.id}" ${h.id===n.mode?"selected":""}>${h.name}</option>`).join(""),V("lc-mode-row").classList.toggle("hidden",l),V("lc-len-row").classList.toggle("hidden",l),V("lc-fm-row").classList.toggle("hidden",!l);let c=[5,10,15,20,25,30,35,40,45,50,0];V("lc-len").innerHTML=c.map(h=>`<option value="${h}" ${h===n.len?"selected":""}>${h?h+" \u043A\u043C":"\u221E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F"}</option>`).join(""),V("lc-fm").value=n.fieldMode}Qo()}var Jo=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function u_(){Ge.send({t:"config",config:{map:+V("lc-map").value,mode:V("lc-mode").value,len:+V("lc-len").value,fieldMode:V("lc-fm").value}})}["lc-map","lc-mode","lc-len","lc-fm"].forEach(i=>V(i).addEventListener("change",()=>{Ze.click(),u_()}));V("lobby-start").addEventListener("click",()=>{Ze.click(),Ge.state==="lobby"&&Ge.send({t:"start"})});V("lobby-leave").addEventListener("click",()=>{Ze.click(),Ge.disconnect(!0),an("online")});function wf(i){Ce.car=(Ce.car+i+at.length)%at.length,Yn(),Ze.click(),$&&Qe==="menu"&&na(6,-2.8),Ge.send({t:"profile",...Zh()}),zi()}V("lobby-prev").addEventListener("click",()=>wf(-1));V("lobby-next").addEventListener("click",()=>wf(1));function Qo(){let i=V("online-results"),e=V("lobby-results"),t=Ge.results.slice(),n=Ge.config||{},s=n.mode==="drift"||!n.len||(rn[n.map]||{}).field,r=c=>`${Jo(c.name)}${c.id===Ge.id?" (\u0442\u044B)":""}`,a;if(s)a=t.sort((c,h)=>h.score-c.score).map((c,h)=>`<tr><td>${h+1}</td><td>${r(c)}</td><td>${c.score.toLocaleString("ru-RU")} \u043E\u0447\u043A.</td></tr>`);else{let c=t.filter(u=>u.finished).sort((u,d)=>u.time-d.time),h=t.filter(u=>!u.finished);a=[...c.map((u,d)=>`<tr><td>${d+1}</td><td>${r(u)}</td><td>${ni(u.time)}</td></tr>`),...h.map(u=>`<tr class="dnf"><td>\u2014</td><td>${r(u)}</td><td>\u0441\u043E\u0448\u0451\u043B</td></tr>`)]}let o=t.length?`<table>${a.join("")}</table>`:"",l=L&&L.online;i.innerHTML=l&&o?`<h3>\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u0435\u0437\u0434</h3>${o}${Ge.state==="racing"?"<small>\u0416\u0434\u0451\u043C \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432\u2026</small>":""}`:"",i.classList.toggle("hidden",!(l&&o)),e.innerHTML=o?`<h3>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u0435\u0437\u0434</h3>${o}`:""}Ge.on.joined=()=>{Ge.mmSince=Date.now(),$n==="lobby"&&zi()};Ge.on.player=()=>{$n==="lobby"&&zi()};Ge.on.config=()=>{$n==="lobby"&&zi()};Ge.on.left=i=>{Nv(i),$n==="lobby"&&zi()};Ge.on.fin=()=>{Qo()};setInterval(()=>{let i=document.getElementById("mm-wait-t");if(i&&Ge.mmSince){let e=Math.floor((Date.now()-Ge.mmSince)/1e3);i.textContent=`\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 ${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}},1e3);Ge.on.mm=i=>{i.state==="countdown"&&Ze.countdown(!1),$n==="lobby"&&zi()};Ge.on.lobby=()=>{Qo(),$n==="lobby"&&zi()};Ge.on.error=i=>{$n==="online"?cr(i,!0):ki(i,2.5,"#ff6b6b")};Ge.on.close=()=>{L&&L.online&&(Qe==="race"||Qe==="countdown")&&ki("\u0421\u0412\u042F\u0417\u042C \u0421 \u0421\u0415\u0420\u0412\u0415\u0420\u041E\u041C \u041F\u041E\u0422\u0415\u0420\u042F\u041D\u0410",3,"#ff6b6b"),$n==="lobby"&&Qe==="menu"&&(an("online"),cr("\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E",!0))};Ge.on.start=i=>{let e=i.config;Ce.map=Math.min(e.map,rn.length-1);let t=qn.findIndex(s=>s.id===e.mode);Ce.mode=t<0?0:t;let n=!!rn[Ce.map].field;for(let s of Ge.players.values())s.model=null,s.vis=null,s.buf=[];ur({seed:i.seed,len:n?0:e.len,fieldMode:e.fieldMode,online:!0})};function d_(){Qe!=="race"&&Qe!=="countdown"||(L.prevState=Qe,Qe="paused",an("pause"),Ze.update($.player.veh,$.player.veh.spec,0,0,!1,0,!1))}function Ef(){Qe==="paused"&&(Qe=L.prevState,an(null),Wo=performance.now())}V("btn-resume").addEventListener("click",()=>{Ze.click(),Ef()});V("btn-restart").addEventListener("click",()=>{Ze.click(),ur()});V("btn-tomenu").addEventListener("click",()=>{Ze.click(),L&&L.online?(Qe!=="over"&&Ge.finish(!1,L.elapsed,L.score),L=null,an(Ge.connected?"lobby":"online")):an("main")});V("btn-again").addEventListener("click",()=>{Ze.click(),ur()});V("btn-over-menu").addEventListener("click",()=>{Ze.click();let i=L&&L.online;L=null,an(i?Ge.connected?"lobby":"online":"main")});function zh(i){for(let e of i){if(e==="mute"&&Ze.setVolume(Ze.volume>0?0:oe.vol),e==="pause"&&(Qe==="paused"?Ef():d_()),Qe==="race"||Qe==="countdown"){if(e==="camera"){qe.mode=(qe.mode+1)%4,Xh(.016,!0);let t=V("cam-hint");t.textContent=kv[qe.mode],t.classList.add("show"),clearTimeout(zh._t),zh._t=setTimeout(()=>t.classList.remove("show"),1200)}if(e==="reset"&&Qe==="race"){let{veh:t}=$.player,n=$.track.isField?{x:t.x,z:t.z,h:t.h,y:$.track.heightAt(t.x,t.z)}:$.track.sample(Math.max($.track.base+2,t.idx));t.reset(n.x,n.z,n.h),t.idx=Math.round(t.idx),t.roadY=n.y,t.px=void 0,t.ph=void 0,t.pY=void 0,t.pz=void 0,$.skids.last=[null,null,null,null],ki("\u041D\u0410 \u0422\u0420\u0410\u0421\u0421\u0423",.8)}}e==="enter"&&Qe==="menu"&&$n==="setup"&&ur()}}var Wo=performance.now(),Oi={frames:0,t:performance.now(),value:0};function Tf(i){if(requestAnimationFrame(Tf),oe.fps>0&&i-Wo<1e3/oe.fps-.7)return;let e=Math.min(.05,(i-Wo)/1e3);if(Wo=i,Oi.frames++,i-Oi.t>=500){Oi.value=Math.round(Oi.frames*1e3/(i-Oi.t)),Oi.frames=0,Oi.t=i;let n=V("fps");n.classList.toggle("hidden",!oe.showFps),oe.showFps&&(n.textContent=`${Oi.value} FPS`)}let t=Xo.takeEvents();zh(t),$&&(Qe==="menu"?($.track.update($.player.veh.idx),Wh(e),$.sun.position.set($.player.veh.x+$.sunDir.x*90,$.player.veh.roadY+$.sunDir.y*90,$.player.veh.z+$.sunDir.z*90),$.sun.target.position.set($.player.veh.x,$.player.veh.roadY,$.player.veh.z),$.farPlane.position.set($.player.veh.x,$.player.veh.roadY-14,$.player.veh.z),$.snow&&$.snow.update(e,It),zv(e,$n==="garage"),$.sky.position.copy(It.position)):(Qe==="countdown"||Qe==="race"||Qe==="over")&&(L._events=t,gf(e)),Cv(e),In?In.render():hn.render(Xn,It))}Yo();xf();Qe="menu";an("main");requestAnimationFrame(Tf);window.__game={renderer:hn,get W(){return $},get G(){return L},get state(){return Qe},startRace:ur,showScreen:an,sel:Ce,settings:oe,cam:qe,net:Ge,CARS:at,camera:It,scene:Xn,tick(i,e=1){for(let t=0;t<e;t++)(Qe==="countdown"||Qe==="race"||Qe==="over")&&(L._events=[],gf(i))}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

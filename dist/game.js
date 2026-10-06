(()=>{var ch="169";var Tf=0,jh=1,Af=2;var yo=1,Rf=2,ci=3,Ri=0,Ue=1,De=2,Qn=0,Ns=1,zs=2,tu=3,eu=4,Cf=5,Ji=100,Pf=101,If=102,Lf=103,Df=104,Uf=200,Ff=201,Nf=202,Bf=203,Ol=204,kl=205,Of=206,kf=207,zf=208,Hf=209,Gf=210,Vf=211,Wf=212,Xf=213,qf=214,zl=0,Hl=1,Gl=2,Hs=3,Vl=4,Wl=5,Xl=6,ql=7,hh=0,Yf=1,$f=2,Ai=0,uh=1,dh=2,fh=3,tr=4,Zf=5,ph=6,mh=7;var ld=300,Gs=301,Vs=302,Yl=303,$l=304,Mo=306,di=1e3,ji=1001,Zl=1002,nn=1003,Kf=1004;var sa=1005;var Nn=1006,il=1007;var ts=1008;var fi=1009,cd=1010,hd=1011,Ur=1012,gh=1013,es=1014,Jn=1015,Vn=1016,xh=1017,vh=1018,Ws=1020,ud=35902,dd=1021,fd=1022,yn=1023,pd=1024,md=1025,Bs=1026,Xs=1027,_h=1028,yh=1029,gd=1030,Mh=1031;var bh=1033,Fa=33776,Na=33777,Ba=33778,Oa=33779,Kl=35840,Jl=35841,Ql=35842,jl=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,lc=37813,cc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,ka=36492,xc=36494,vc=36495,xd=36283,_c=36284,yc=36285,Mc=36286;var Ha=2300,bc=2301,sl=2302,nu=2400,iu=2401,su=2402;var Jf=3200,Qf=3201;var bo=0,jf=1,Ei="",Be="srgb",Di="srgb-linear",Sh="display-p3",So="display-p3-linear",Ga="linear",Me="srgb",Va="rec709",Wa="p3";var ms=7680;var ru=519,tp=512,ep=513,np=514,vd=515,ip=516,sp=517,rp=518,ap=519,Sc=35044;var au="300 es",ui=2e3,Xa=2001,Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=1234567,Rr=Math.PI/180,qs=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function wh(i,t){return(i%t+t)%t}function op(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lp(i,t,e){return i!==t?(e-i)/(t-i):0}function Cr(i,t,e){return(1-e)*i+e*t}function cp(i,t,e,n){return Cr(i,t,1-Math.exp(-e*n))}function hp(i,t=1){return t-Math.abs(wh(i,t*2)-t)}function up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pp(i,t){return i+Math.random()*(t-i)}function mp(i){return i*(.5-Math.random())}function gp(i){i!==void 0&&(ou=i);let t=ou+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(i){return i*Rr}function vp(i){return i*qs}function _p(i){return(i&i-1)===0&&i!==0}function yp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _d={DEG2RAD:Rr,RAD2DEG:qs,generateUUID:jn,clamp:Ze,euclideanModulo:wh,mapLinear:op,inverseLerp:lp,lerp:Cr,damp:cp,pingpong:hp,smoothstep:up,smootherstep:dp,randInt:fp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:xp,radToDeg:vp,isPowerOfTwo:_p,ceilPowerOfTwo:yp,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:bp,normalize:xe,denormalize:Bn},it=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],p=s[3],g=s[6],M=s[1],x=s[4],y=s[7],A=s[2],E=s[5],T=s[8];return r[0]=a*v+o*M+l*A,r[3]=a*p+o*x+l*E,r[6]=a*g+o*y+l*T,r[1]=c*v+h*M+u*A,r[4]=c*p+h*x+u*E,r[7]=c*g+h*y+u*T,r[2]=d*v+f*M+m*A,r[5]=d*p+f*x+m*E,r[8]=d*g+f*y+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rl=new ne;function yd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){let i=qa("canvas");return i.style.display="block",i}var lu={};function za(i){i in lu||(lu[i]=!0,console.warn(i))}function wp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ep(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var cu=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hu=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[Di]:{transfer:Ga,primaries:Va,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Be]:{transfer:Me,primaries:Va,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[So]:{transfer:Ga,primaries:Wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hu),fromReference:i=>i.applyMatrix3(cu)},[Sh]:{transfer:Me,primaries:Wa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hu),fromReference:i=>i.applyMatrix3(cu).convertLinearToSRGB()}},Ap=new Set([Di,So]),he={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ap.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=gr[t].toReference,s=gr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return gr[i].primaries},getTransfer:function(i){return i===Ei?Ga:gr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(gr[t].luminanceCoefficients)}};function Os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function al(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=qa("canvas")),gs.width=t.width,gs.height=t.height;let n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=qa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Os(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Os(e[n]/255)*255):e[n]=Os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rp=0,Ya=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cp=0,un=class i extends Ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ji,s=ji,r=Nn,a=ts,o=yn,l=fi,c=i.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=jn(),this.name="",this.source=new Ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=ld;un.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,A=(g+1)/2,E=(h+d)/4,T=(u+v)/4,I=(m+p)/4;return x>y&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=T/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$a=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let p=1-o,g=l*d+c*f+h*m+u*v,M=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let A=Math.sqrt(x),E=Math.atan2(A,g*M);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A}let y=o*M;if(l=l*p+d*y,c=c*p+f*y,h=h*p+m*y,u=u*p+v*y,p===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new P,uu=new Mn,On=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),aa.subVectors(this.max,xr),xs.subVectors(t.a,xr),vs.subVectors(t.b,xr),_s.subVectors(t.c,xr),_i.subVectors(vs,xs),yi.subVectors(_s,vs),Wi.subVectors(xs,_s);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Wi.z,Wi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Wi.z,0,-Wi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Wi.y,Wi.x,0];return!cl(e,xs,vs,_s,aa)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,xs,vs,_s,aa))?!1:(oa.crossVectors(_i,yi),e=[oa.x,oa.y,oa.z],cl(e,xs,vs,_s,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},si=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,ra=new On,xs=new P,vs=new P,_s=new P,_i=new P,yi=new P,Wi=new P,xr=new P,aa=new P,oa=new P,Xi=new P;function cl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);let o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pp=new On,vr=new P,hl=new P,Pi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);let e=vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(hl)),this.expandByPoint(vr.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new P,ul=new P,la=new P,Mi=new P,dl=new P,ca=new P,fl=new P,Za=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,a=-this.direction.dot(la),o=Mi.dot(this.direction),l=-Mi.dot(la),c=Mi.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ul).addScaledVector(la,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){dl.subVectors(e,t),ca.subVectors(n,t),fl.crossVectors(dl,ca);let a=this.direction.dot(fl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,t);let l=o*this.direction.dot(ca.crossVectors(Mi,ca));if(l<0)return null;let c=o*this.direction.dot(dl.cross(Mi));if(c<0||l+c>a)return null;let h=-o*Mi.dot(fl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,v,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,v,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d+v*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Lp)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),bi.crossVectors(n,vn),bi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),bi.crossVectors(n,vn)),bi.normalize(),ha.crossVectors(vn,bi),s[0]=bi.x,s[4]=ha.x,s[8]=vn.x,s[1]=bi.y,s[5]=ha.y,s[9]=vn.y,s[2]=bi.z,s[6]=ha.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],M=n[3],x=n[7],y=n[11],A=n[15],E=s[0],T=s[4],I=s[8],k=s[12],_=s[1],S=s[5],H=s[9],B=s[13],W=s[2],j=s[6],z=s[10],st=s[14],G=s[3],ht=s[7],Mt=s[11],yt=s[15];return r[0]=a*E+o*_+l*W+c*G,r[4]=a*T+o*S+l*j+c*ht,r[8]=a*I+o*H+l*z+c*Mt,r[12]=a*k+o*B+l*st+c*yt,r[1]=h*E+u*_+d*W+f*G,r[5]=h*T+u*S+d*j+f*ht,r[9]=h*I+u*H+d*z+f*Mt,r[13]=h*k+u*B+d*st+f*yt,r[2]=m*E+v*_+p*W+g*G,r[6]=m*T+v*S+p*j+g*ht,r[10]=m*I+v*H+p*z+g*Mt,r[14]=m*k+v*B+p*st+g*yt,r[3]=M*E+x*_+y*W+A*G,r[7]=M*T+x*S+y*j+A*ht,r[11]=M*I+x*H+y*z+A*Mt,r[15]=M*k+x*B+y*st+A*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],p=t[14],g=t[15],M=u*p*c-v*d*c+v*l*f-o*p*f-u*l*g+o*d*g,x=m*d*c-h*p*c-m*l*f+a*p*f+h*l*g-a*d*g,y=h*v*c-m*u*c+m*o*f-a*v*f-h*o*g+a*u*g,A=m*u*l-h*v*l-m*o*d+a*v*d+h*o*p-a*u*p,E=e*M+n*x+s*y+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=M*T,t[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*g-n*d*g)*T,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*g+n*l*g)*T,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*T,t[4]=x*T,t[5]=(h*p*r-m*d*r+m*s*f-e*p*f-h*s*g+e*d*g)*T,t[6]=(m*l*r-a*p*r-m*s*c+e*p*c+a*s*g-e*l*g)*T,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*T,t[8]=y*T,t[9]=(m*u*r-h*v*r-m*n*f+e*v*f+h*n*g-e*u*g)*T,t[10]=(a*v*r-m*o*r+m*n*c-e*v*c-a*n*g+e*o*g)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=A*T,t[13]=(h*v*s-m*u*s+m*n*d-e*v*d-h*n*p+e*u*p)*T,t[14]=(m*o*s-a*v*s-m*n*l+e*v*l+a*n*p-e*o*p)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,v=a*h,p=a*u,g=o*u,M=l*c,x=l*h,y=l*u,A=n.x,E=n.y,T=n.z;return s[0]=(1-(v+g))*A,s[1]=(f+y)*A,s[2]=(m-x)*A,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+g))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(m+x)*T,s[9]=(p-M)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),o=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let c=1/r,h=1/a,u=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ui){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(o===ui)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Xa)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ui){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,m,v;if(o===ui)m=(a+r)*u,v=-2*u;else if(o===Xa)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ys=new P,Un=new se,Ip=new P(0,0,0),Lp=new P(1,1,1),bi=new P,ha=new P,vn=new P,du=new se,fu=new Mn,kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dp=0,pu=new P,Ms=new Mn,ai=new se,ua=new P,_r=new P,Up=new P,Fp=new Mn,mu=new P(1,0,0),gu=new P(0,1,0),xu=new P(0,0,1),vu={type:"added"},Np={type:"removed"},bs={type:"childadded",child:null},pl={type:"childremoved",child:null},Ve=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new kn,n=new Mn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new ne}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(_r,ua,this.up):ai.lookAt(ua,_r,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ai),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vu),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Np),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vu),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new P(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new P,oi=new P,ml=new P,li=new P,Ss=new P,ws=new P,_u=new P,gl=new P,xl=new P,vl=new P,_l=new _e,yl=new _e,Ml=new _e,Ti=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),oi.subVectors(n,e),ml.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(oi),l=Fn.dot(ml),c=oi.dot(oi),h=oi.dot(ml),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return _l.setScalar(0),yl.setScalar(0),Ml.setScalar(0),_l.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),Ml.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_l,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(Ml,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),oi.subVectors(t,e),Fn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),ws.subVectors(r,n),gl.subVectors(t,n);let l=Ss.dot(gl),c=ws.dot(gl);if(l<=0&&c<=0)return e.copy(n);xl.subVectors(t,s);let h=Ss.dot(xl),u=ws.dot(xl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ss,a);vl.subVectors(t,r);let f=Ss.dot(vl),m=ws.dot(vl);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ws,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return _u.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(_u,o);let g=1/(p+v+d);return a=v*g,o=d*g,e.copy(n).addScaledVector(Ss,a).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},da={h:0,s:0,l:0};function bl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=wh(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bl(a,r,t+1/3),this.g=bl(a,r,t),this.b=bl(a,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=al(t.r),this.g=al(t.g),this.b=al(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return he.fromWorkingColorSpace(en.copy(this),t),Math.round(Ze(en.r*255,0,255))*65536+Math.round(Ze(en.g*255,0,255))*256+Math.round(Ze(en.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Be){he.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(da);let n=Cr(Si.h,da.h,e),s=Cr(Si.s,da.s,e),r=Cr(Si.l,da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new bt;bt.NAMES=Md;var Bp=0,zn=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ns,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=kl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},be=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new P,fa=new it,ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fa.fromBufferAttribute(this,e),fa.applyMatrix3(t),this.setXY(e,fa.x,fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}};var Ja=class extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qa=class extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},Op=0,Rn=new se,Sl=new Ve,Es=new P,_n=new On,yr=new On,$e=new P,pe=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yd(t)?Qa:Ja)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(_n.min,yr.min),_n.expandByPoint($e),$e.addVectors(_n.max,yr.max),_n.expandByPoint($e)):(_n.expandByPoint(yr.min),_n.expandByPoint(yr.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(t,c),$e.add(Es)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,d=new it,f=new it,m=new it,v=new P,p=new P;function g(I,k,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,k),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(S),o[I].add(v),o[k].add(v),o[_].add(v),l[I].add(p),l[k].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,k=M.length;I<k;++I){let _=M[I],S=_.start,H=_.count;for(let B=S,W=S+H;B<W;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new P,y=new P,A=new P,E=new P;function T(I){A.fromBufferAttribute(s,I),E.copy(A);let k=o[I];x.copy(k),x.sub(A.multiplyScalar(A.dot(k))).normalize(),y.crossVectors(E,k);let S=y.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,S)}for(let I=0,k=M.length;I<k;++I){let _=M[I],S=_.start,H=_.count;for(let B=S,W=S+H;B<W;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yu=new se,qi=new Za,pa=new Pi,Mu=new P,ma=new P,ga=new P,xa=new P,wl=new P,va=new P,bu=new P,_a=new P,dt=class extends Ve{constructor(t=new pe,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(wl.fromBufferAttribute(u,t),a?va.addScaledVector(wl,h):va.addScaledVector(wl.sub(e),h))}e.add(va)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(pa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(pa,Mu)===null||qi.origin.distanceToSquared(Mu)>(t.far-t.near)**2))&&(yu.copy(r).invert(),qi.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=x;y<A;y+=3){let E=o.getX(y),T=o.getX(y+1),I=o.getX(y+2);s=ya(this,g,t,n,c,h,u,E,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let M=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);s=ya(this,a,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=x;y<A;y+=3){let E=y,T=y+1,I=y+2;s=ya(this,g,t,n,c,h,u,E,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let M=p,x=p+1,y=p+2;s=ya(this,a,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function kp(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ri,o),l===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_a);return c<e.near||c>e.far?null:{distance:c,point:_a.clone(),object:i}}function ya(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ma),i.getVertexPosition(l,ga),i.getVertexPosition(c,xa);let h=kp(i,t,e,n,ma,ga,xa,bu);if(h){let u=new P;Ti.getBarycoord(bu,ma,ga,xa,u),s&&(h.uv=Ti.getInterpolatedAttribute(s,o,l,c,u,new it)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,o,l,c,u,new it)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Ti.getNormal(ma,ga,xa,d.normal),h.face=d,h.barycoord=u}return h}var ye=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function m(v,p,g,M,x,y,A,E,T,I,k){let _=y/T,S=A/I,H=y/2,B=A/2,W=E/2,j=T+1,z=I+1,st=0,G=0,ht=new P;for(let Mt=0;Mt<z;Mt++){let yt=Mt*S-B;for(let jt=0;jt<j;jt++){let Jt=jt*_-H;ht[v]=Jt*M,ht[p]=yt*x,ht[g]=W,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[p]=0,ht[g]=E>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(jt/T),u.push(1-Mt/I),st+=1}}for(let Mt=0;Mt<I;Mt++)for(let yt=0;yt<T;yt++){let jt=d+yt+j*Mt,Jt=d+yt+j*(Mt+1),J=d+(yt+1)+j*(Mt+1),rt=d+(yt+1)+j*Mt;l.push(jt,Jt,rt),l.push(Jt,J,rt),G+=6}o.addGroup(f,G,k),f+=G,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=Ys(i[e]);for(let s in n)t[s]=n[s]}return t}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Ui={clone:Ys,merge:ln},Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,we=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ja=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new P,Su=new it,wu=new it,Ke=class extends ja{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Su,wu),e.subVectors(wu,Su)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ts=-90,As=1,Ac=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(Ts,As,t,e);s.layers=this.layers,this.add(s);let r=new Ke(Ts,As,t,e);r.layers=this.layers,this.add(r);let a=new Ke(Ts,As,t,e);a.layers=this.layers,this.add(a);let o=new Ke(Ts,As,t,e);o.layers=this.layers,this.add(o);let l=new Ke(Ts,As,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},to=class extends un{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rc=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new to(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ye(5,5,5),r=new we({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Qn});r.uniforms.tEquirect.value=e;let a=new dt(s,r),o=e.minFilter;return e.minFilter===ts&&(e.minFilter=Nn),new Ac(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},El=new P,Vp=new P,Wp=new ne,hi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=El.subVectors(n,e).cross(Vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(El),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wp.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Pi,Ma=new P,Fr=class{constructor(t=new hi,e=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],v=s[10],p=s[11],g=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,p-f,y-g).normalize(),n[1].setComponents(l+r,d+c,p+f,y+g).normalize(),n[2].setComponents(l+a,d+h,p+m,y+M).normalize(),n[3].setComponents(l-a,d-h,p-m,y-M).normalize(),n[4].setComponents(l-o,d-u,p-v,y-x).normalize(),e===ui)n[5].setComponents(l+o,d+u,p+v,y+x).normalize();else if(e===Xa)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ma.x=s.normal.x>0?t.max.x:t.min.x,Ma.y=s.normal.y>0?t.max.y:t.min.y,Ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ee=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){let M=g*d-a;for(let x=0;x<c;x++){let y=x*u-r;m.push(y,-M,0),v.push(0,0,1),p.push(x/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let x=M+c*g,y=M+c*(g+1),A=M+1+c*(g+1),E=M+1+c*g;f.push(x,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`
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
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Wm=`struct PhysicalMaterial {
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
}`,Xm=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,j0=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,vg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,Sg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:$p,alphamap_pars_fragment:Zp,alphatest_fragment:Kp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:jp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:xm,displacementmap_pars_vertex:vm,displacementmap_vertex:_m,emissivemap_fragment:ym,emissivemap_pars_fragment:Mm,colorspace_fragment:bm,colorspace_pars_fragment:Sm,envmap_fragment:wm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Tm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Om,envmap_vertex:Rm,fog_vertex:Cm,fog_pars_vertex:Pm,fog_fragment:Im,fog_pars_fragment:Lm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Bm,lights_toon_fragment:km,lights_toon_pars_fragment:zm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:jm,map_particle_fragment:t0,map_particle_pars_fragment:e0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:v0,opaque_fragment:_0,packing:y0,premultiplied_alpha_fragment:M0,project_vertex:b0,dithering_fragment:S0,dithering_pars_fragment:w0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:U0,specularmap_fragment:F0,specularmap_pars_fragment:N0,tonemapping_fragment:B0,tonemapping_pars_fragment:O0,transmission_fragment:k0,transmission_pars_fragment:z0,uv_pars_fragment:H0,uv_pars_vertex:G0,uv_vertex:V0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:$0,cube_vert:Z0,cube_frag:K0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:j0,distanceRGBA_frag:tg,equirect_vert:eg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:vg,points_vert:_g,points_frag:yg,shadow_vert:Mg,shadow_frag:bg,sprite_vert:Sg,sprite_frag:wg},Tt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Kn={basic:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new bt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:ln([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:ln([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new bt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:ln([Tt.points,Tt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:ln([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:ln([Tt.common,Tt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:ln([Tt.sprite,Tt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:ln([Tt.common,Tt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:ln([Tt.lights,Tt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Kn.physical={uniforms:ln([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var ba={r:0,b:0,g:0},$i=new kn,Eg=new se;function Tg(i,t,e,n,s,r,a){let o=new bt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1,y=m(M);y===null?g(o,l):y&&y.isColor&&(g(y,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){let y=m(x);y&&(y.isCubeTexture||y.mapping===Mo)?(h===void 0&&(h=new dt(new ye(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:Ys(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler($i)),h.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dt(new Ee(2,2),new we({name:"BackgroundMaterial",uniforms:Ys(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,x){M.getRGB(ba,bd(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(o,l)},render:v,addToRenderList:p}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,S,H,B,W){let j=!1,z=u(B,H,S);r!==z&&(r=z,c(r.object)),j=f(_,B,H,W),j&&m(_,B,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(_,S,H,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,H){let B=H.wireframe===!0,W=n[_.id];W===void 0&&(W={},n[_.id]=W);let j=W[S.id];j===void 0&&(j={},W[S.id]=j);let z=j[B];return z===void 0&&(z=d(l()),j[B]=z),z}function d(_){let S=[],H=[],B=[];for(let W=0;W<e;W++)S[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:H,attributeDivisors:B,object:_,attributes:{},index:null}}function f(_,S,H,B){let W=r.attributes,j=S.attributes,z=0,st=H.getAttributes();for(let G in st)if(st[G].location>=0){let Mt=W[G],yt=j[G];if(yt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),Mt===void 0||Mt.attribute!==yt||yt&&Mt.data!==yt.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function m(_,S,H,B){let W={},j=S.attributes,z=0,st=H.getAttributes();for(let G in st)if(st[G].location>=0){let Mt=j[G];Mt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor));let yt={};yt.attribute=Mt,Mt&&Mt.data&&(yt.data=Mt.data),W[G]=yt,z++}r.attributes=W,r.attributesNum=z,r.index=B}function v(){let _=r.newAttributes;for(let S=0,H=_.length;S<H;S++)_[S]=0}function p(_){g(_,0)}function g(_,S){let H=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;H[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),W[_]!==S&&(i.vertexAttribDivisor(_,S),W[_]=S)}function M(){let _=r.newAttributes,S=r.enabledAttributes;for(let H=0,B=S.length;H<B;H++)S[H]!==_[H]&&(i.disableVertexAttribArray(H),S[H]=0)}function x(_,S,H,B,W,j,z){z===!0?i.vertexAttribIPointer(_,S,H,W,j):i.vertexAttribPointer(_,S,H,B,W,j)}function y(_,S,H,B){v();let W=B.attributes,j=H.getAttributes(),z=S.defaultAttributeValues;for(let st in j){let G=j[st];if(G.location>=0){let ht=W[st];if(ht===void 0&&(st==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),st==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ht!==void 0){let Mt=ht.normalized,yt=ht.itemSize,jt=t.get(ht);if(jt===void 0)continue;let Jt=jt.buffer,J=jt.type,rt=jt.bytesPerElement,Rt=J===i.INT||J===i.UNSIGNED_INT||ht.gpuType===gh;if(ht.isInterleavedBufferAttribute){let lt=ht.data,kt=lt.stride,Ft=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)g(G.location+Ot,lt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)p(G.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Ot=0;Ot<G.locationSize;Ot++)x(G.location+Ot,yt/G.locationSize,J,Mt,kt*rt,(Ft+yt/G.locationSize*Ot)*rt,Rt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)g(G.location+lt,ht.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let lt=0;lt<G.locationSize;lt++)x(G.location+lt,yt/G.locationSize,J,Mt,yt*rt,yt/G.locationSize*lt*rt,Rt)}}else if(z!==void 0){let Mt=z[st];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(G.location,Mt);break;case 3:i.vertexAttrib3fv(G.location,Mt);break;case 4:i.vertexAttrib4fv(G.location,Mt);break;default:i.vertexAttrib1fv(G.location,Mt)}}}}M()}function A(){I();for(let _ in n){let S=n[_];for(let H in S){let B=S[H];for(let W in B)h(B[W].object),delete B[W];delete S[H]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let S=n[_.id];for(let H in S){let B=S[H];for(let W in B)h(B[W].object),delete B[W];delete S[H]}delete n[_.id]}function T(_){for(let S in n){let H=n[S];if(H[_.id]===void 0)continue;let B=H[_.id];for(let W in B)h(B[W].object),delete B[W];delete H[_.id]}}function I(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Rg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];for(let v=0;v<d.length;v++)e.update(m,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let I=T===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==fi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Jn&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function Pg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hi,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,x=M*4,y=g.clippingState||null;l.value=y,y=h(m,d,x,f);for(let A=0;A!==x;++A)y[A]=e[A];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,m!==!0||p===null){let g=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=f;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Ig(i){let t=new WeakMap;function e(a,o){return o===Yl?a.mapping=Gs:o===$l&&(a.mapping=Vs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yl||o===$l)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Rc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $s=class extends ja{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Us=4,Eu=[.125,.215,.35,.446,.526,.582],Qi=20,Tl=new $s,Tu=new bt,Al=null,Rl=0,Cl=0,Pl=!1,Ki=(1+Math.sqrt(5))/2,Rs=1/Ki,Au=[new P(-Ki,Rs,0),new P(Ki,Rs,0),new P(-Rs,0,Ki),new P(Rs,0,Ki),new P(0,Ki,-Rs),new P(0,Ki,Rs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Rl,Cl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,Sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Vn,format:yn,colorSpace:Di,depthBuffer:!1},s=Ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Dg(r,t,e)}return s}_compileMaterial(t){let e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,n,s){let o=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Tu),h.toneMapping=Ai,h.autoClear=!1;let f=new be({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new dt(new ye,f),v=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(Tu),v=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):M===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let x=this._cubeSize;Sa(s,M*x,g>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gs||t.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Sa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Tl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Au[(s-r-1)%Au.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new dt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),v=r/m,p=isFinite(r)?1+Math.floor(h*v):Qi;p>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);let g=[],M=0;for(let T=0;T<Qi;++T){let I=T/v,k=Math.exp(-I*I/2);g.push(k),T===0?M+=k:T<p&&(M+=2*k)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;let y=this._sizeLods[s],A=3*y*(s>x-Us?s-x+Us:0),E=4*(this._cubeSize-y);Sa(e,A,E,3*y,2*y),l.setRenderTarget(e),l.render(u,Tl)}};function Lg(i){let t=[],e=[],n=[],s=i,r=i-Us+1+Eu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Us?l=Eu[a-i+Us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,p=2,g=1,M=new Float32Array(v*m*f),x=new Float32Array(p*m*f),y=new Float32Array(g*m*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,I=E>2?0:-1,k=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(k,v*m*E),x.set(d,p*m*E);let _=[E,E,E,E,E,E];y.set(_,g*m*E)}let A=new pe;A.setAttribute("position",new ue(M,v)),A.setAttribute("uv",new ue(x,p)),A.setAttribute("faceIndex",new ue(y,g)),t.push(A),s>Us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ru(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){let n=new Float32Array(Qi),s=new P(0,1,0);return new we({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cu(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Pu(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

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
	`}function Ug(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Yl||l===$l,h=l===Gs||l===Vs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ns(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ns(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&za("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let v=d.morphAttributes[m];for(let p=0,g=v.length;p<g;p++)t.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let v=f[m];for(let p=0,g=v.length;p<g;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let x=0,y=M.length;x<y;x+=3){let A=M[x+0],E=M[x+1],T=M[x+2];d.push(A,E,E,T,T,A)}}else if(m!==void 0){let M=m.array;v=m.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let A=x+0,E=x+1,T=x+2;d.push(A,E,E,T,T,A)}}else return;let p=new(yd(d)?Qa:Ja)(d,1);p.version=v;let g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Bg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}function u(d,f,m,v){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let g=0;for(let M=0;M<m;M++)g+=f[M];for(let M=0;M<v.length;M++)e.update(g,n,v[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,t,e){let n=new WeakMap,s=new _e;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let k=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],x=0;f===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*A*4*u),T=new $a(E,y,A,u);T.type=Jn,T.needsUpdate=!0;let I=x*4;for(let _=0;_<u;_++){let S=p[_],H=g[_],B=M[_],W=y*A*4*_;for(let j=0;j<S.count;j++){let z=j*I;f===!0&&(s.fromBufferAttribute(S,j),E[W+z+0]=s.x,E[W+z+1]=s.y,E[W+z+2]=s.z,E[W+z+3]=0),m===!0&&(s.fromBufferAttribute(H,j),E[W+z+4]=s.x,E[W+z+5]=s.y,E[W+z+6]=s.z,E[W+z+7]=0),v===!0&&(s.fromBufferAttribute(B,j),E[W+z+8]=s.x,E[W+z+9]=s.y,E[W+z+10]=s.z,E[W+z+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new it(y,A)},n.set(o,d),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var eo=class extends un{constructor(t,e,n,s,r,a,o,l,c,h=Bs){if(h!==Bs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=es),n===void 0&&h===Xs&&(n=Ws),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wd=new un,Iu=new eo(1,1),Ed=new $a,Td=new Tc,Ad=new to,Lu=[],Du=[],Uu=new Float32Array(16),Fu=new Float32Array(9),Nu=new Float32Array(4);function er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wo(i,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Xe(e,n)}}function qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Xe(e,n)}}function Yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Uu.set(n),i.uniformMatrix4fv(this.addr,!1,Uu),Xe(e,n)}}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=vd,r=Iu):r=wd,e.setTexture2D(t||r,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Td,s)}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ad,s)}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ed,s)}function ax(i){switch(i){case 5126:return Hg;case 35664:return Gg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return Zg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return jg;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(i,t){i.uniform1fv(this.addr,t)}function lx(i,t){let e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function cx(i,t){let e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function hx(i,t){let e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function ux(i,t){let e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dx(i,t){let e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fx(i,t){let e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function px(i,t){i.uniform1iv(this.addr,t)}function mx(i,t){i.uniform2iv(this.addr,t)}function gx(i,t){i.uniform3iv(this.addr,t)}function xx(i,t){i.uniform4iv(this.addr,t)}function vx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function yx(i,t){i.uniform3uiv(this.addr,t)}function Mx(i,t){i.uniform4uiv(this.addr,t)}function bx(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||wd,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Td,r[a])}function wx(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ad,r[a])}function Ex(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ed,r[a])}function Tx(i){switch(i){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return vx;case 36294:return _x;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}var Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ax(e.type)}},Pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tx(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Bu(i,t){i.seq.push(t),i.map[t.id]=t}function Ax(i,t,e){let n=i.name,s=n.length;for(Il.lastIndex=0;;){let r=Il.exec(n),a=Il.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bu(e,c===void 0?new Cc(o,i,t):new Pc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ic(o),Bu(e,u)),e=u}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ax(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rx=37297,Cx=0;function Px(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ix(i){let t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i),n;switch(t===e?n="":t===Wa&&e===Va?n="LinearDisplayP3ToLinearSRGB":t===Va&&e===Wa&&(n="LinearSRGBToLinearDisplayP3"),i){case Di:case So:return[n,"LinearTransferOETF"];case Be:case Sh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ku(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Px(i.getShaderSource(t),a)}else return s}function Lx(i,t){let e=Ix(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dx(i,t){let e;switch(t){case uh:e="Linear";break;case dh:e="Reinhard";break;case fh:e="Cineon";break;case tr:e="ACESFilmic";break;case ph:e="AgX";break;case mh:e="Neutral";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wa=new P;function Ux(){he.getLuminanceCoefficients(wa);let i=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Nx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ar(i){return i!==""}function zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace(Ox,zx)}var kx=new Map;function zx(i,t){let e=ee[t];if(e===void 0){let n=kx.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(Hx,Gx)}function Gx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case Mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Yf:t="ENVMAP_BLENDING_MIX";break;case $f:t="ENVMAP_BLENDING_ADD";break}return t}function Yx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $x(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Vx(e),c=Wx(e),h=Xx(e),u=qx(e),d=Yx(e),f=Fx(e),m=Nx(r),v=s.createProgram(),p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),g.length>0&&(g+=`
`)):(p=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),g=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ai?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Lx("linearToOutputTexel",e.outputColorSpace),Ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Lc(a),a=zu(a,e),a=Hu(a,e),o=Lc(o),o=zu(o,e),o=Hu(o,e),a=Gu(a),o=Gu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=M+p+a,y=M+g+o,A=Ou(s,s.VERTEX_SHADER,x),E=Ou(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(S){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(A).trim(),W=s.getShaderInfoLog(E).trim(),j=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,E);else{let st=ku(s,A,"vertex"),G=ku(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+H+`
`+st+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||W==="")&&(z=!1);z&&(S.diagnostics={runnable:j,programLog:H,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:g}})}s.deleteShader(A),s.deleteShader(E),I=new ks(s,v),k=Bx(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Rx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var Zx=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uc(t),e.set(t,n)),n}},Uc=class{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}};function Kx(i,t,e,n,s,r,a){let o=new Ka,l=new Dc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,m=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,H,B,W){let j=B.fog,z=W.geometry,st=_.isMeshStandardMaterial?B.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||st),ht=G&&G.mapping===Mo?G.image.height:null,Mt=v[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,jt=yt!==void 0?yt.length:0,Jt=0;z.morphAttributes.position!==void 0&&(Jt=1),z.morphAttributes.normal!==void 0&&(Jt=2),z.morphAttributes.color!==void 0&&(Jt=3);let J,rt,Rt,lt;if(Mt){let Qe=Kn[Mt];J=Qe.vertexShader,rt=Qe.fragmentShader}else J=_.vertexShader,rt=_.fragmentShader,l.update(_),Rt=l.getVertexShaderID(_),lt=l.getFragmentShaderID(_);let kt=i.getRenderTarget(),Ft=W.isInstancedMesh===!0,Ot=W.isBatchedMesh===!0,Vt=!!_.map,et=!!_.matcap,C=!!G,at=!!_.aoMap,ut=!!_.lightMap,ct=!!_.bumpMap,mt=!!_.normalMap,Ut=!!_.displacementMap,Ct=!!_.emissiveMap,R=!!_.metalnessMap,b=!!_.roughnessMap,O=_.anisotropy>0,K=_.clearcoat>0,nt=_.dispersion>0,Q=_.iridescence>0,It=_.sheen>0,_t=_.transmission>0,At=O&&!!_.anisotropyMap,te=K&&!!_.clearcoatMap,ot=K&&!!_.clearcoatNormalMap,St=K&&!!_.clearcoatRoughnessMap,Ht=Q&&!!_.iridescenceMap,D=Q&&!!_.iridescenceThicknessMap,q=It&&!!_.sheenColorMap,vt=It&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Xt=!!_.specularColorMap,U=!!_.specularIntensityMap,wt=_t&&!!_.transmissionMap,Z=_t&&!!_.thicknessMap,tt=!!_.gradientMap,pt=!!_.alphaMap,Et=_.alphaTest>0,ae=!!_.alphaHash,Te=!!_.extensions,He=Ai;_.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(He=i.toneMapping);let oe={shaderID:Mt,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:rt,defines:_.defines,customVertexShaderID:Rt,customFragmentShaderID:lt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&W._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&W.instanceColor!==null,instancingMorph:Ft&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:Di,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:et,envMap:C,envMapMode:C&&G.mapping,envMapCubeUVHeight:ht,aoMap:at,lightMap:ut,bumpMap:ct,normalMap:mt,displacementMap:f&&Ut,emissiveMap:Ct,normalMapObjectSpace:mt&&_.normalMapType===jf,normalMapTangentSpace:mt&&_.normalMapType===bo,metalnessMap:R,roughnessMap:b,anisotropy:O,anisotropyMap:At,clearcoat:K,clearcoatMap:te,clearcoatNormalMap:ot,clearcoatRoughnessMap:St,dispersion:nt,iridescence:Q,iridescenceMap:Ht,iridescenceThicknessMap:D,sheen:It,sheenColorMap:q,sheenRoughnessMap:vt,specularMap:gt,specularColorMap:Xt,specularIntensityMap:U,transmission:_t,transmissionMap:wt,thicknessMap:Z,gradientMap:tt,opaque:_.transparent===!1&&_.blending===Ns&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:Et,alphaHash:ae,combine:_.combine,mapUv:Vt&&p(_.map.channel),aoMapUv:at&&p(_.aoMap.channel),lightMapUv:ut&&p(_.lightMap.channel),bumpMapUv:ct&&p(_.bumpMap.channel),normalMapUv:mt&&p(_.normalMap.channel),displacementMapUv:Ut&&p(_.displacementMap.channel),emissiveMapUv:Ct&&p(_.emissiveMap.channel),metalnessMapUv:R&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:At&&p(_.anisotropyMap.channel),clearcoatMapUv:te&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:D&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:q&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:Xt&&p(_.specularColorMap.channel),specularIntensityMapUv:U&&p(_.specularIntensityMap.channel),transmissionMapUv:wt&&p(_.transmissionMap.channel),thicknessMapUv:Z&&p(_.thicknessMap.channel),alphaMapUv:pt&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(Vt||pt),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:Jt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===De,flipSided:_.side===Ue,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Te&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&_.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function M(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)S.push(H),S.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(x(S,_),y(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function A(_){let S=v[_.type],H;if(S){let B=Kn[S];H=Ui.clone(B.uniforms)}else H=_.uniforms;return H}function E(_,S){let H;for(let B=0,W=h.length;B<W;B++){let j=h[B];if(j.cacheKey===S){H=j,++H.usedTimes;break}}return H===void 0&&(H=new $x(i,S,_,r),h.push(H)),H}function T(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:A,acquireProgram:E,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:k}}function Jx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,v,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=v,g.group=p),t++,g}function o(u,d,f,m,v,p){let g=a(u,d,f,m,v,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(u,d,f,m,v,p){let g=a(u,d,f,m,v,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||Qx),n.length>1&&n.sort(d||Wu),s.length>1&&s.sort(d||Wu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function jx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xu,i.set(n,[a])):s>=r.length?(a=new Xu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function tv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new bt};break;case"SpotLight":e={position:new P,direction:new P,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function ev(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var nv=0;function iv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sv(i){let t=new tv,e=ev(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new se,a=new se;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,M=0,x=0,y=0,A=0,E=0,T=0;c.sort(iv);for(let k=0,_=c.length;k<_;k++){let S=c[k],H=S.color,B=S.intensity,W=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=H.r*B,u+=H.g*B,d+=H.b*B;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],B);T++}else if(S.isDirectionalLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let st=S.shadow,G=e.get(S);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=S.shadow.matrix,M++}n.directional[f]=z,f++}else if(S.isSpotLight){let z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(H).multiplyScalar(B),z.distance=W,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[v]=z;let st=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,st.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[v]=st.matrix,S.castShadow){let G=e.get(S);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=j,y++}v++}else if(S.isRectAreaLight){let z=t.get(S);z.color.copy(H).multiplyScalar(B),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=z,p++}else if(S.isPointLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let st=S.shadow,G=e.get(S);G.shadowIntensity=st.intensity,G.shadowBias=st.bias,G.shadowNormalBias=st.normalBias,G.shadowRadius=st.radius,G.shadowMapSize=st.mapSize,G.shadowCameraNear=st.camera.near,G.shadowCameraFar=st.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=S.shadow.matrix,x++}n.point[m]=z,m++}else if(S.isHemisphereLight){let z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(B),z.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[g]=z,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,I.directionalLength=f,I.pointLength=m,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=T,n.version=nv++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let x=c[g];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function qu(i){let t=new sv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function rv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qu(i),t.set(s,[o])):r>=a.length?(o=new qu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fc=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nc=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`;function lv(i,t,e){let n=new Fr,s=new it,r=new it,a=new _e,o=new Fc({depthPacking:Qf}),l=new Nc,c={},h=e.maxTextureSize,u={[Ri]:Ue,[Ue]:Ri,[De]:De},d=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:av,fragmentShader:ov}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let g=this.type;this.render=function(E,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let k=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Qn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=g!==ci&&this.type===ci,W=g===ci&&this.type!==ci;for(let j=0,z=E.length;j<z;j++){let st=E[j],G=st.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||B===!0||W===!0){let yt=this.type!==ci?{minFilter:nn,magFilter:nn}:{};G.map!==null&&G.map.dispose(),G.map=new cn(s.x,s.y,yt),G.map.texture.name=st.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let Mt=G.getViewportCount();for(let yt=0;yt<Mt;yt++){let jt=G.getViewport(yt);a.set(r.x*jt.x,r.y*jt.y,r.x*jt.z,r.y*jt.w),H.viewport(a),G.updateMatrices(st,yt),n=G.getFrustum(),y(T,I,G.camera,st,this.type)}G.isPointLightShadow!==!0&&this.type===ci&&M(G,I),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(k,_,S)};function M(E,T){let I=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new cn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,I,f,v,null)}function x(E,T,I,k){let _=null,S=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)_=S;else if(_=I.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=_.uuid,B=T.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let j=W[B];j===void 0&&(j=_.clone(),W[B]=j,T.addEventListener("dispose",A)),_=j}if(_.visible=T.visible,_.wireframe=T.wireframe,k===ci?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let H=i.properties.get(_);H.light=I}return _}function y(E,T,I,k,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===ci)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let B=t.update(E),W=E.material;if(Array.isArray(W)){let j=B.groups;for(let z=0,st=j.length;z<st;z++){let G=j[z],ht=W[G.materialIndex];if(ht&&ht.visible){let Mt=x(E,ht,k,_);E.onBeforeShadow(i,E,T,I,B,Mt,G),i.renderBufferDirect(I,null,B,Mt,E,G),E.onAfterShadow(i,E,T,I,B,Mt,G)}}}else if(W.visible){let j=x(E,W,k,_);E.onBeforeShadow(i,E,T,I,B,j,null),i.renderBufferDirect(I,null,B,j,E,null),E.onAfterShadow(i,E,T,I,B,j,null)}}let H=E.children;for(let B=0,W=H.length;B<W;B++)y(H[B],T,I,k,_)}function A(E){E.target.removeEventListener("dispose",A);for(let I in c){let k=c[I],_=E.target.uuid;_ in k&&(k[_].dispose(),delete k[_])}}}var cv={[zl]:Hl,[Gl]:Xl,[Vl]:ql,[Hs]:Wl,[Hl]:zl,[Xl]:Gl,[ql]:Vl,[Wl]:Hs};function hv(i){function t(){let U=!1,wt=new _e,Z=null,tt=new _e(0,0,0,0);return{setMask:function(pt){Z!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),Z=pt)},setLocked:function(pt){U=pt},setClear:function(pt,Et,ae,Te,He){He===!0&&(pt*=Te,Et*=Te,ae*=Te),wt.set(pt,Et,ae,Te),tt.equals(wt)===!1&&(i.clearColor(pt,Et,ae,Te),tt.copy(wt))},reset:function(){U=!1,Z=null,tt.set(-1,0,0,0)}}}function e(){let U=!1,wt=!1,Z=null,tt=null,pt=null;return{setReversed:function(Et){wt=Et},setTest:function(Et){Et?Rt(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Et){Z!==Et&&!U&&(i.depthMask(Et),Z=Et)},setFunc:function(Et){if(wt&&(Et=cv[Et]),tt!==Et){switch(Et){case zl:i.depthFunc(i.NEVER);break;case Hl:i.depthFunc(i.ALWAYS);break;case Gl:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Vl:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=Et}},setLocked:function(Et){U=Et},setClear:function(Et){pt!==Et&&(i.clearDepth(Et),pt=Et)},reset:function(){U=!1,Z=null,tt=null,pt=null}}}function n(){let U=!1,wt=null,Z=null,tt=null,pt=null,Et=null,ae=null,Te=null,He=null;return{setTest:function(oe){U||(oe?Rt(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(oe){wt!==oe&&!U&&(i.stencilMask(oe),wt=oe)},setFunc:function(oe,Qe,Tn){(Z!==oe||tt!==Qe||pt!==Tn)&&(i.stencilFunc(oe,Qe,Tn),Z=oe,tt=Qe,pt=Tn)},setOp:function(oe,Qe,Tn){(Et!==oe||ae!==Qe||Te!==Tn)&&(i.stencilOp(oe,Qe,Tn),Et=oe,ae=Qe,Te=Tn)},setLocked:function(oe){U=oe},setClear:function(oe){He!==oe&&(i.clearStencil(oe),He=oe)},reset:function(){U=!1,wt=null,Z=null,tt=null,pt=null,Et=null,ae=null,Te=null,He=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,M=null,x=null,y=null,A=null,E=new bt(0,0,0),T=0,I=!1,k=null,_=null,S=null,H=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,z=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(st)[1]),j=z>=1):st.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),j=z>=2);let G=null,ht={},Mt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),jt=new _e().fromArray(Mt),Jt=new _e().fromArray(yt);function J(U,wt,Z,tt){let pt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(U,Et),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<Z;ae++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(wt+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return Et}let rt={};rt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Rt(i.DEPTH_TEST),r.setFunc(Hs),ut(!1),ct(jh),Rt(i.CULL_FACE),C(Qn);function Rt(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function lt(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function kt(U,wt){return h[U]!==wt?(i.bindFramebuffer(U,wt),h[U]=wt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=wt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ft(U,wt){let Z=d,tt=!1;if(U){Z=u.get(wt),Z===void 0&&(Z=[],u.set(wt,Z));let pt=U.textures;if(Z.length!==pt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,ae=pt.length;Et<ae;Et++)Z[Et]=i.COLOR_ATTACHMENT0+Et;Z.length=pt.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function Ot(U){return f!==U?(i.useProgram(U),f=U,!0):!1}let Vt={[Ji]:i.FUNC_ADD,[Pf]:i.FUNC_SUBTRACT,[If]:i.FUNC_REVERSE_SUBTRACT};Vt[Lf]=i.MIN,Vt[Df]=i.MAX;let et={[Uf]:i.ZERO,[Ff]:i.ONE,[Nf]:i.SRC_COLOR,[Ol]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[Bf]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Wf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,wt,Z,tt,pt,Et,ae,Te,He,oe){if(U===Qn){m===!0&&(lt(i.BLEND),m=!1);return}if(m===!1&&(Rt(i.BLEND),m=!0),U!==Cf){if(U!==v||oe!==I){if((p!==Ji||x!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,x=Ji),oe)switch(U){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,M=null,y=null,A=null,E.set(0,0,0),T=0,v=U,I=oe}return}pt=pt||wt,Et=Et||Z,ae=ae||tt,(wt!==p||pt!==x)&&(i.blendEquationSeparate(Vt[wt],Vt[pt]),p=wt,x=pt),(Z!==g||tt!==M||Et!==y||ae!==A)&&(i.blendFuncSeparate(et[Z],et[tt],et[Et],et[ae]),g=Z,M=tt,y=Et,A=ae),(Te.equals(E)===!1||He!==T)&&(i.blendColor(Te.r,Te.g,Te.b,He),E.copy(Te),T=He),v=U,I=!1}function at(U,wt){U.side===De?lt(i.CULL_FACE):Rt(i.CULL_FACE);let Z=U.side===Ue;wt&&(Z=!Z),ut(Z),U.blending===Ns&&U.transparent===!1?C(Qn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Rt(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(U){k!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),k=U)}function ct(U){U!==Tf?(Rt(i.CULL_FACE),U!==_&&(U===jh?i.cullFace(i.BACK):U===Af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),_=U}function mt(U){U!==S&&(j&&i.lineWidth(U),S=U)}function Ut(U,wt,Z){U?(Rt(i.POLYGON_OFFSET_FILL),(H!==wt||B!==Z)&&(i.polygonOffset(wt,Z),H=wt,B=Z)):lt(i.POLYGON_OFFSET_FILL)}function Ct(U){U?Rt(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+W-1),G!==U&&(i.activeTexture(U),G=U)}function b(U,wt,Z){Z===void 0&&(G===null?Z=i.TEXTURE0+W-1:Z=G);let tt=ht[Z];tt===void 0&&(tt={type:void 0,texture:void 0},ht[Z]=tt),(tt.type!==U||tt.texture!==wt)&&(G!==Z&&(i.activeTexture(Z),G=Z),i.bindTexture(U,wt||rt[U]),tt.type=U,tt.texture=wt)}function O(){let U=ht[G];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(U){jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),jt.copy(U))}function q(U){Jt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Jt.copy(U))}function vt(U,wt){let Z=l.get(wt);Z===void 0&&(Z=new WeakMap,l.set(wt,Z));let tt=Z.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(wt,U.name),Z.set(U,tt))}function gt(U,wt){let tt=l.get(wt).get(U);o.get(wt)!==tt&&(i.uniformBlockBinding(wt,tt,U.__bindingPointIndex),o.set(wt,tt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,ht={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,M=null,x=null,y=null,A=null,E=new bt(0,0,0),T=0,I=!1,k=null,_=null,S=null,H=null,B=null,jt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Rt,disable:lt,bindFramebuffer:kt,drawBuffers:Ft,useProgram:Ot,setBlending:C,setMaterial:at,setFlipSided:ut,setCullFace:ct,setLineWidth:mt,setPolygonOffset:Ut,setScissorTest:Ct,activeTexture:R,bindTexture:b,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:St,texImage3D:Ht,updateUBOMapping:vt,uniformBlockBinding:gt,texStorage2D:te,texStorage3D:ot,texSubImage2D:Q,texSubImage3D:It,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:D,viewport:q,reset:Xt}}function Yu(i,t,e,n){let s=uv(n);switch(e){case dd:return i*t;case pd:return i*t;case md:return i*t*2;case _h:return i*t/s.components*s.byteLength;case yh:return i*t/s.components*s.byteLength;case gd:return i*t*2/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case fd:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case bh:return i*t*4/s.components*s.byteLength;case Fa:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:case jl:return Math.max(i,16)*Math.max(t,8)/4;case Kl:case Ql:return Math.max(i,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case xc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xd:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uv(i){switch(i){case fi:case cd:return{byteLength:1,components:1};case Ur:case hd:case Vn:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case es:case gh:case Jn:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):qa("canvas")}function v(R,b,O){let K=1,nt=Ct(R);if((nt.width>O||nt.height>O)&&(K=O/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let Q=Math.floor(K*nt.width),It=Math.floor(K*nt.height);u===void 0&&(u=m(Q,It));let _t=b?m(Q,It):u;return _t.width=Q,_t.height=It,_t.getContext("2d").drawImage(R,0,0,Q,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+It+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==nn&&R.minFilter!==Nn}function g(R){i.generateMipmap(R)}function M(R,b,O,K,nt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=b;if(b===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),b===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){let It=nt?Ga:he.getTransfer(K);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=It===Me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(R,b){let O;return R?b===null||b===es||b===Ws?O=i.DEPTH24_STENCIL8:b===Jn?O=i.DEPTH32F_STENCIL8:b===Ur&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===es||b===Ws?O=i.DEPTH_COMPONENT24:b===Jn?O=i.DEPTH_COMPONENT32F:b===Ur&&(O=i.DEPTH_COMPONENT16),O}function y(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),T(b),b.isVideoTexture&&h.delete(b)}function E(R){let b=R.target;b.removeEventListener("dispose",E),k(b)}function T(R){let b=n.get(R);if(b.__webglInit===void 0)return;let O=R.source,K=d.get(O);if(K){let nt=K[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(R),Object.keys(K).length===0&&d.delete(O)}n.remove(R)}function I(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let O=R.source,K=d.get(O);delete K[b.__cacheKey],a.memory.textures--}function k(R){let b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let nt=0;nt<b.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=R.textures;for(let K=0,nt=O.length;K<nt;K++){let Q=n.get(O[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(R)}let _=0;function S(){_=0}function H(){let R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function B(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function W(R,b){let O=n.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(O,R,b);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function j(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){Jt(O,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function z(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){Jt(O,R,b);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function st(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){J(O,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let G={[di]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[Zl]:i.MIRRORED_REPEAT},ht={[nn]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[il]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},Mt={[tp]:i.NEVER,[ap]:i.ALWAYS,[ep]:i.LESS,[vd]:i.LEQUAL,[np]:i.EQUAL,[rp]:i.GEQUAL,[ip]:i.GREATER,[sp]:i.NOTEQUAL};function yt(R,b){if(b.type===Jn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===il||b.magFilter===sa||b.magFilter===ts||b.minFilter===Nn||b.minFilter===il||b.minFilter===sa||b.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,G[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,G[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,G[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==sa&&b.minFilter!==ts||b.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function jt(R,b){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let K=b.source,nt=d.get(K);nt===void 0&&(nt={},d.set(K,nt));let Q=B(b);if(Q!==R.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),nt[Q].usedTimes++;let It=nt[R.__cacheKey];It!==void 0&&(nt[R.__cacheKey].usedTimes--,It.usedTimes===0&&I(b)),R.__cacheKey=Q,R.__webglTexture=nt[Q].texture}return O}function Jt(R,b,O){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let nt=jt(R,b),Q=b.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+O);let It=n.get(Q);if(Q.version!==It.__version||nt===!0){e.activeTexture(i.TEXTURE0+O);let _t=he.getPrimaries(he.workingColorSpace),At=b.colorSpace===Ei?null:he.getPrimaries(b.colorSpace),te=b.colorSpace===Ei||_t===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ot=v(b.image,!1,s.maxTextureSize);ot=Ut(b,ot);let St=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type),D=M(b.internalFormat,St,Ht,b.colorSpace,b.isVideoTexture);yt(K,b);let q,vt=b.mipmaps,gt=b.isVideoTexture!==!0,Xt=It.__version===void 0||nt===!0,U=Q.dataReady,wt=y(b,ot);if(b.isDepthTexture)D=x(b.format===Xs,b.type),Xt&&(gt?e.texStorage2D(i.TEXTURE_2D,1,D,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,D,ot.width,ot.height,0,St,Ht,null));else if(b.isDataTexture)if(vt.length>0){gt&&Xt&&e.texStorage2D(i.TEXTURE_2D,wt,D,vt[0].width,vt[0].height);for(let Z=0,tt=vt.length;Z<tt;Z++)q=vt[Z],gt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,q.width,q.height,St,Ht,q.data):e.texImage2D(i.TEXTURE_2D,Z,D,q.width,q.height,0,St,Ht,q.data);b.generateMipmaps=!1}else gt?(Xt&&e.texStorage2D(i.TEXTURE_2D,wt,D,ot.width,ot.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,St,Ht,ot.data)):e.texImage2D(i.TEXTURE_2D,0,D,ot.width,ot.height,0,St,Ht,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){gt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,D,vt[0].width,vt[0].height,ot.depth);for(let Z=0,tt=vt.length;Z<tt;Z++)if(q=vt[Z],b.format!==yn)if(St!==null)if(gt){if(U)if(b.layerUpdates.size>0){let pt=Yu(q.width,q.height,b.format,b.type);for(let Et of b.layerUpdates){let ae=q.data.subarray(Et*pt/q.data.BYTES_PER_ELEMENT,(Et+1)*pt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Et,q.width,q.height,1,St,ae,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,q.width,q.height,ot.depth,St,q.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,D,q.width,q.height,ot.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,q.width,q.height,ot.depth,St,Ht,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,D,q.width,q.height,ot.depth,0,St,Ht,q.data)}else{gt&&Xt&&e.texStorage2D(i.TEXTURE_2D,wt,D,vt[0].width,vt[0].height);for(let Z=0,tt=vt.length;Z<tt;Z++)q=vt[Z],b.format!==yn?St!==null?gt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,q.width,q.height,St,q.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,D,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,q.width,q.height,St,Ht,q.data):e.texImage2D(i.TEXTURE_2D,Z,D,q.width,q.height,0,St,Ht,q.data)}else if(b.isDataArrayTexture)if(gt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,D,ot.width,ot.height,ot.depth),U)if(b.layerUpdates.size>0){let Z=Yu(ot.width,ot.height,b.format,b.type);for(let tt of b.layerUpdates){let pt=ot.data.subarray(tt*Z/ot.data.BYTES_PER_ELEMENT,(tt+1)*Z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,St,Ht,pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,Ht,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,D,ot.width,ot.height,ot.depth,0,St,Ht,ot.data);else if(b.isData3DTexture)gt?(Xt&&e.texStorage3D(i.TEXTURE_3D,wt,D,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,Ht,ot.data)):e.texImage3D(i.TEXTURE_3D,0,D,ot.width,ot.height,ot.depth,0,St,Ht,ot.data);else if(b.isFramebufferTexture){if(Xt)if(gt)e.texStorage2D(i.TEXTURE_2D,wt,D,ot.width,ot.height);else{let Z=ot.width,tt=ot.height;for(let pt=0;pt<wt;pt++)e.texImage2D(i.TEXTURE_2D,pt,D,Z,tt,0,St,Ht,null),Z>>=1,tt>>=1}}else if(vt.length>0){if(gt&&Xt){let Z=Ct(vt[0]);e.texStorage2D(i.TEXTURE_2D,wt,D,Z.width,Z.height)}for(let Z=0,tt=vt.length;Z<tt;Z++)q=vt[Z],gt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,St,Ht,q):e.texImage2D(i.TEXTURE_2D,Z,D,St,Ht,q);b.generateMipmaps=!1}else if(gt){if(Xt){let Z=Ct(ot);e.texStorage2D(i.TEXTURE_2D,wt,D,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ht,ot)}else e.texImage2D(i.TEXTURE_2D,0,D,St,Ht,ot);p(b)&&g(K),It.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,O){if(b.image.length!==6)return;let K=jt(R,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);let Q=n.get(nt);if(nt.version!==Q.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let It=he.getPrimaries(he.workingColorSpace),_t=b.colorSpace===Ei?null:he.getPrimaries(b.colorSpace),At=b.colorSpace===Ei||It===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let te=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!te&&!ot?St[tt]=v(b.image[tt],!0,s.maxCubemapSize):St[tt]=ot?b.image[tt].image:b.image[tt],St[tt]=Ut(b,St[tt]);let Ht=St[0],D=r.convert(b.format,b.colorSpace),q=r.convert(b.type),vt=M(b.internalFormat,D,q,b.colorSpace),gt=b.isVideoTexture!==!0,Xt=Q.__version===void 0||K===!0,U=nt.dataReady,wt=y(b,Ht);yt(i.TEXTURE_CUBE_MAP,b);let Z;if(te){gt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,vt,Ht.width,Ht.height);for(let tt=0;tt<6;tt++){Z=St[tt].mipmaps;for(let pt=0;pt<Z.length;pt++){let Et=Z[pt];b.format!==yn?D!==null?gt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,Et.width,Et.height,D,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,Et.width,Et.height,D,q,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,vt,Et.width,Et.height,0,D,q,Et.data)}}}else{if(Z=b.mipmaps,gt&&Xt){Z.length>0&&wt++;let tt=Ct(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,vt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,D,q,St[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,vt,St[tt].width,St[tt].height,0,D,q,St[tt].data);for(let pt=0;pt<Z.length;pt++){let ae=Z[pt].image[tt].image;gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,ae.width,ae.height,D,q,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,vt,ae.width,ae.height,0,D,q,ae.data)}}else{gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,D,q,St[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,vt,D,q,St[tt]);for(let pt=0;pt<Z.length;pt++){let Et=Z[pt];gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,D,q,Et.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,vt,D,q,Et.image[tt])}}}p(b)&&g(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function rt(R,b,O,K,nt,Q){let It=r.convert(O.format,O.colorSpace),_t=r.convert(O.type),At=M(O.internalFormat,It,_t,O.colorSpace);if(!n.get(b).__hasExternalTextures){let ot=Math.max(1,b.width>>Q),St=Math.max(1,b.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,At,ot,St,b.depth,0,It,_t,null):e.texImage2D(nt,Q,At,ot,St,0,It,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ct(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,n.get(O).__webglTexture,0,ut(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,n.get(O).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let K=b.depthTexture,nt=K&&K.isDepthTexture?K.type:null,Q=x(b.stencilBuffer,nt),It=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ut(b);ct(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Q,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,R)}else{let K=b.textures;for(let nt=0;nt<K.length;nt++){let Q=K[nt],It=r.convert(Q.format,Q.colorSpace),_t=r.convert(Q.type),At=M(Q.internalFormat,It,_t,Q.colorSpace),te=ut(b);O&&ct(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,At,b.width,b.height):ct(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let K=n.get(b.depthTexture).__webglTexture,nt=ut(b);if(b.depthTexture.format===Bs)ct(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Xs)ct(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function kt(R){let b=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");lt(b.__webglFramebuffer,R)}else if(O){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),Rt(b.__webglDepthbuffer[K],R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Rt(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(R,b,O){let K=n.get(R);b!==void 0&&rt(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&kt(R)}function Ot(R){let b=R.texture,O=n.get(R),K=n.get(b);R.addEventListener("dispose",E);let nt=R.textures,Q=R.isWebGLCubeRenderTarget===!0,It=nt.length>1;if(It||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),Q){O.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[_t]=[];for(let At=0;At<b.mipmaps.length;At++)O.__webglFramebuffer[_t][At]=i.createFramebuffer()}else O.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)O.__webglFramebuffer[_t]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(It)for(let _t=0,At=nt.length;_t<At;_t++){let te=n.get(nt[_t]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ct(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<nt.length;_t++){let At=nt[_t];O.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);let te=r.convert(At.format,At.colorSpace),ot=r.convert(At.type),St=M(At.internalFormat,te,ot,At.colorSpace,R.isXRRenderTarget===!0),Ht=ut(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,St,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),yt(i.TEXTURE_CUBE_MAP,b);for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)rt(O.__webglFramebuffer[_t][At],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else rt(O.__webglFramebuffer[_t],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);p(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let _t=0,At=nt.length;_t<At;_t++){let te=nt[_t],ot=n.get(te);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),yt(i.TEXTURE_2D,te),rt(O.__webglFramebuffer,R,te,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),p(te)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,K.__webglTexture),yt(_t,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)rt(O.__webglFramebuffer[At],R,b,i.COLOR_ATTACHMENT0,_t,At);else rt(O.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,_t,0);p(b)&&g(_t),e.unbindTexture()}R.depthBuffer&&kt(R)}function Vt(R){let b=R.textures;for(let O=0,K=b.length;O<K;O++){let nt=b[O];if(p(nt)){let Q=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,It=n.get(nt).__webglTexture;e.bindTexture(Q,It),g(Q),e.unbindTexture()}}}let et=[],C=[];function at(R){if(R.samples>0){if(ct(R)===!1){let b=R.textures,O=R.width,K=R.height,nt=i.COLOR_BUFFER_BIT,Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(R),_t=b.length>1;if(_t)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let At=0;At<b.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let te=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,nt,i.NEAREST),l===!0&&(et.length=0,C.length=0,et.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push(Q),C.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let te=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ut(R){return Math.min(s.maxSamples,R.samples)}function ct(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function mt(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ut(R,b){let O=R.colorSpace,K=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Di&&O!==Ei&&(he.getTransfer(O)===Me?(K!==yn||nt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Ct(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=st,this.rebindTextures=Ft,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ct}function fv(i,t){function e(n,s=Ei){let r,a=he.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return i.BYTE;if(n===hd)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===gh)return i.INT;if(n===es)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===dd)return i.ALPHA;if(n===fd)return i.RGB;if(n===yn)return i.RGBA;if(n===pd)return i.LUMINANCE;if(n===md)return i.LUMINANCE_ALPHA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===_h)return i.RED;if(n===yh)return i.RED_INTEGER;if(n===gd)return i.RG;if(n===Mh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===Fa||n===Na||n===Ba||n===Oa)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Jl||n===Ql||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===ec)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===xc||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xd||n===_c||n===yc||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bc=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pe=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},pv={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new un,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new we({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends Ci{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,v=new Oc,p=e.getContextAttributes(),g=null,M=null,x=[],y=[],A=new it,E=null,T=new Ke;T.layers.enable(1),T.viewport=new _e;let I=new Ke;I.layers.enable(2),I.viewport=new _e;let k=[T,I],_=new Bc;_.layers.enable(1),_.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=x[J];return rt===void 0&&(rt=new Pr,x[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=x[J];return rt===void 0&&(rt=new Pr,x[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=x[J];return rt===void 0&&(rt=new Pr,x[J]=rt),rt.getHandSpace()};function B(J){let rt=y.indexOf(J.inputSource);if(rt===-1)return;let Rt=x[rt];Rt!==void 0&&(Rt.update(J.inputSource,J.frame,c||a),Rt.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let J=0;J<x.length;J++){let rt=y[J];rt!==null&&(y[J]=null,x[J].disconnect(rt))}S=null,H=null,v.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,M=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let rt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new cn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let rt=null,Rt=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=p.stencil?Xs:Bs,Rt=p.stencil?Ws:es);let kt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new cn(d.textureWidth,d.textureHeight,{format:yn,type:fi,depthTexture:new eo(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(J){for(let rt=0;rt<J.removed.length;rt++){let Rt=J.removed[rt],lt=y.indexOf(Rt);lt>=0&&(y[lt]=null,x[lt].disconnect(Rt))}for(let rt=0;rt<J.added.length;rt++){let Rt=J.added[rt],lt=y.indexOf(Rt);if(lt===-1){for(let Ft=0;Ft<x.length;Ft++)if(Ft>=y.length){y.push(Rt),lt=Ft;break}else if(y[Ft]===null){y[Ft]=Rt,lt=Ft;break}if(lt===-1)break}let kt=x[lt];kt&&kt.connect(Rt)}}let z=new P,st=new P;function G(J,rt,Rt){z.setFromMatrixPosition(rt.matrixWorld),st.setFromMatrixPosition(Rt.matrixWorld);let lt=z.distanceTo(st),kt=rt.projectionMatrix.elements,Ft=Rt.projectionMatrix.elements,Ot=kt[14]/(kt[10]-1),Vt=kt[14]/(kt[10]+1),et=(kt[9]+1)/kt[5],C=(kt[9]-1)/kt[5],at=(kt[8]-1)/kt[0],ut=(Ft[8]+1)/Ft[0],ct=Ot*at,mt=Ot*ut,Ut=lt/(-at+ut),Ct=Ut*-at;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ct),J.translateZ(Ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),kt[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let R=Ot+Ut,b=Vt+Ut,O=ct-Ct,K=mt+(lt-Ct),nt=et*Vt/b*R,Q=C*Vt/b*R;J.projectionMatrix.makePerspective(O,K,nt,Q,R,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let rt=J.near,Rt=J.far;v.texture!==null&&(v.depthNear>0&&(rt=v.depthNear),v.depthFar>0&&(Rt=v.depthFar)),_.near=I.near=T.near=rt,_.far=I.far=T.far=Rt,(S!==_.near||H!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,H=_.far);let lt=J.parent,kt=_.cameras;ht(_,lt);for(let Ft=0;Ft<kt.length;Ft++)ht(kt[Ft],lt);kt.length===2?G(_,T,I):_.projectionMatrix.copy(T.projectionMatrix),Mt(J,_,lt)};function Mt(J,rt,Rt){Rt===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(Rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let yt=null;function jt(J,rt){if(h=rt.getViewerPose(c||a),m=rt,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;Rt.length!==_.cameras.length&&(_.cameras.length=0,lt=!0);for(let Ft=0;Ft<Rt.length;Ft++){let Ot=Rt[Ft],Vt=null;if(f!==null)Vt=f.getViewport(Ot);else{let C=u.getViewSubImage(d,Ot);Vt=C.viewport,Ft===0&&(t.setRenderTargetTextures(M,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let et=k[Ft];et===void 0&&(et=new Ke,et.layers.enable(Ft),et.viewport=new _e,k[Ft]=et),et.matrix.fromArray(Ot.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ot.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Ft===0&&(_.matrix.copy(et.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),lt===!0&&_.cameras.push(et)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Ft=u.getDepthInformation(Rt[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(t,Ft,s.renderState)}}for(let Rt=0;Rt<x.length;Rt++){let lt=y[Rt],kt=x[Rt];lt!==null&&kt!==void 0&&kt.update(lt,rt,c||a)}yt&&yt(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Jt=new Sd;Jt.setAnimationLoop(jt),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}},Zi=new kn,xv=new se;function vv(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,bd(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,x,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,M,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ue&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ue&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Zi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=x*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ue&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));let A=x.program;n.updateUBOMapping(M,A);let E=t.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let x=u();M.__bindingPointIndex=x;let y=i.createBuffer(),A=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=y.length;E<T;E++){let I=Array.isArray(y[E])?y[E]:[y[E]];for(let k=0,_=I.length;k<_;k++){let S=I[k];if(f(S,E,k,A)===!0){let H=S.__offset,B=Array.isArray(S.value)?S.value:[S.value],W=0;for(let j=0;j<B.length;j++){let z=B[j],st=v(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+W,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,W),W+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,y,A){let E=M.value,T=x+"_"+y;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{let I=A[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(M){let x=M.uniforms,y=0,A=16;for(let T=0,I=x.length;T<I;T++){let k=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,S=k.length;_<S;_++){let H=k[_],B=Array.isArray(H.value)?H.value:[H.value];for(let W=0,j=B.length;W<j;W++){let z=B[W],st=v(z),G=y%A,ht=G%st.boundary,Mt=G+ht;y+=ht,Mt!==0&&A-Mt<st.storage&&(y+=A-Mt),H.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=st.storage}}}let E=y%A;return E>0&&(y+=A-E),M.__size=y,M.__cache={},this}function v(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Nr=class{constructor(t={}){let{canvas:e=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),m=new Int32Array(4),v=null,p=null,g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Ai,this.toneMappingExposure=1;let x=this,y=!1,A=0,E=0,T=null,I=-1,k=null,_=new _e,S=new _e,H=null,B=new bt(0),W=0,j=e.width,z=e.height,st=1,G=null,ht=null,Mt=new _e(0,0,j,z),yt=new _e(0,0,j,z),jt=!1,Jt=new Fr,J=!1,rt=!1,Rt=new se,lt=new se,kt=new P,Ft=new _e,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function et(){return T===null?st:1}let C=n;function at(w,F){return e.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ch}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),C===null){let F="webgl2";if(C=at(F,w),C===null)throw at(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,ct,mt,Ut,Ct,R,b,O,K,nt,Q,It,_t,At,te,ot,St,Ht,D,q,vt,gt,Xt,U;function wt(){ut=new Fg(C),ut.init(),gt=new fv(C,ut),ct=new Cg(C,ut,t,gt),mt=new hv(C),ct.reverseDepthBuffer&&mt.buffers.depth.setReversed(!0),Ut=new Og(C),Ct=new Jx,R=new dv(C,ut,mt,Ct,ct,gt,Ut),b=new Ig(x),O=new Ug(x),K=new Xp(C),Xt=new Ag(C,K),nt=new Ng(C,K,Ut,Xt),Q=new zg(C,nt,K,Ut),D=new kg(C,ct,R),ot=new Pg(Ct),It=new Kx(x,b,O,ut,ct,Xt,ot),_t=new vv(x,Ct),At=new jx,te=new rv(ut),Ht=new Tg(x,b,O,mt,Q,d,l),St=new lv(x,Q,ct),U=new _v(C,Ut,ct,mt),q=new Rg(C,ut,Ut),vt=new Bg(C,ut,Ut),Ut.programs=It.programs,x.capabilities=ct,x.extensions=ut,x.properties=Ct,x.renderLists=At,x.shadowMap=St,x.state=mt,x.info=Ut}wt();let Z=new kc(x,C);this.xr=Z,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(j,z,!1))},this.getSize=function(w){return w.set(j,z)},this.setSize=function(w,F,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,z=F,e.width=Math.floor(w*st),e.height=Math.floor(F*st),X===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(j*st,z*st).floor()},this.setDrawingBufferSize=function(w,F,X){j=w,z=F,st=X,e.width=Math.floor(w*X),e.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,F,X,Y){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,F,X,Y),mt.viewport(_.copy(Mt).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,F,X,Y){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,F,X,Y),mt.scissor(S.copy(yt).multiplyScalar(st).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){mt.setScissorTest(jt=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(w=!0,F=!0,X=!0){let Y=0;if(w){let N=!1;if(T!==null){let xt=T.texture.format;N=xt===bh||xt===Mh||xt===yh}if(N){let xt=T.texture.type,Lt=xt===fi||xt===es||xt===Ur||xt===Ws||xt===xh||xt===vh,Nt=Ht.getClearColor(),Bt=Ht.getClearAlpha(),Yt=Nt.r,Zt=Nt.g,zt=Nt.b;Lt?(f[0]=Yt,f[1]=Zt,f[2]=zt,f[3]=Bt,C.clearBufferuiv(C.COLOR,0,f)):(m[0]=Yt,m[1]=Zt,m[2]=zt,m[3]=Bt,C.clearBufferiv(C.COLOR,0,m))}else Y|=C.COLOR_BUFFER_BIT}F&&(Y|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),te.dispose(),Ct.dispose(),b.dispose(),O.dispose(),Q.dispose(),Xt.dispose(),U.dispose(),It.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ur),Z.removeEventListener("sessionend",dr),Zn.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=Ut.autoReset,F=St.enabled,X=St.autoUpdate,Y=St.needsUpdate,N=St.type;wt(),Ut.autoReset=w,St.enabled=F,St.autoUpdate=X,St.needsUpdate=Y,St.type=N}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){let F=w.target;F.removeEventListener("dispose",ae),Te(F)}function Te(w){He(w),Ct.remove(w)}function He(w){let F=Ct.get(w).programs;F!==void 0&&(F.forEach(function(X){It.releaseProgram(X)}),w.isShaderMaterial&&It.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,Y,N,xt){F===null&&(F=Ot);let Lt=N.isMesh&&N.matrixWorld.determinant()<0,Nt=Vi(w,F,X,Y,N);mt.setMaterial(Y,Lt);let Bt=X.index,Yt=1;if(Y.wireframe===!0){if(Bt=nt.getWireframeAttribute(X),Bt===void 0)return;Yt=2}let Zt=X.drawRange,zt=X.attributes.position,ge=Zt.start*Yt,Ae=(Zt.start+Zt.count)*Yt;xt!==null&&(ge=Math.max(ge,xt.start*Yt),Ae=Math.min(Ae,(xt.start+xt.count)*Yt)),Bt!==null?(ge=Math.max(ge,0),Ae=Math.min(Ae,Bt.count)):zt!=null&&(ge=Math.max(ge,0),Ae=Math.min(Ae,zt.count));let Le=Ae-ge;if(Le<0||Le===1/0)return;Xt.setup(N,Y,Nt,X,Bt);let gn,de=q;if(Bt!==null&&(gn=K.get(Bt),de=vt,de.setIndex(gn)),N.isMesh)Y.wireframe===!0?(mt.setLineWidth(Y.wireframeLinewidth*et()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(N.isLine){let Gt=Y.linewidth;Gt===void 0&&(Gt=1),mt.setLineWidth(Gt*et()),N.isLineSegments?de.setMode(C.LINES):N.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else N.isPoints?de.setMode(C.POINTS):N.isSprite&&de.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)de.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))de.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Gt=N._multiDrawStarts,je=N._multiDrawCounts,fe=N._multiDrawCount,Ln=Bt?K.get(Bt).bytesPerElement:1,ps=Ct.get(Y).currentProgram.getUniforms();for(let xn=0;xn<fe;xn++)ps.setValue(C,"_gl_DrawID",xn),de.render(Gt[xn]/Ln,je[xn])}else if(N.isInstancedMesh)de.renderInstances(ge,Le,N.count);else if(X.isInstancedBufferGeometry){let Gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,je=Math.min(X.instanceCount,Gt);de.renderInstances(ge,Le,je)}else de.render(ge,Le)};function oe(w,F,X){w.transparent===!0&&w.side===De&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,Gi(w,F,X),w.side=Ri,w.needsUpdate=!0,Gi(w,F,X),w.side=De):Gi(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),p=te.get(X),p.init(F),M.push(p),X.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==X&&w.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let Y=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let xt=N.material;if(xt)if(Array.isArray(xt))for(let Lt=0;Lt<xt.length;Lt++){let Nt=xt[Lt];oe(Nt,X,N),Y.add(Nt)}else oe(xt,X,N),Y.add(xt)}),M.pop(),p=null,Y},this.compileAsync=function(w,F,X=null){let Y=this.compile(w,F,X);return new Promise(N=>{function xt(){if(Y.forEach(function(Lt){Ct.get(Lt).currentProgram.isReady()&&Y.delete(Lt)}),Y.size===0){N(w);return}setTimeout(xt,10)}ut.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Qe=null;function Tn(w){Qe&&Qe(w)}function ur(){Zn.stop()}function dr(){Zn.start()}let Zn=new Sd;Zn.setAnimationLoop(Tn),typeof self!="undefined"&&Zn.setContext(self),this.setAnimationLoop=function(w){Qe=w,Z.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},Z.addEventListener("sessionstart",ur),Z.addEventListener("sessionend",dr),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,T),p=te.get(w,M.length),p.init(F),M.push(p),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Jt.setFromProjectionMatrix(lt),rt=this.localClippingEnabled,J=ot.init(this.clippingPlanes,rt),v=At.get(w,g.length),v.init(),g.push(v),Z.enabled===!0&&Z.isPresenting===!0){let xt=x.xr.getDepthSensingMesh();xt!==null&&fs(xt,F,-1/0,x.sortObjects)}fs(w,F,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ht),Vt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Vt&&Ht.addToRenderList(v,w),this.info.render.frame++,J===!0&&ot.beginShadows();let X=p.state.shadowsArray;St.render(X,w,F),J===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=v.opaque,N=v.transmissive;if(p.setupLights(),F.isArrayCamera){let xt=F.cameras;if(N.length>0)for(let Lt=0,Nt=xt.length;Lt<Nt;Lt++){let Bt=xt[Lt];pr(Y,N,w,Bt)}Vt&&Ht.render(w);for(let Lt=0,Nt=xt.length;Lt<Nt;Lt++){let Bt=xt[Lt];fr(v,w,Bt,Bt.viewport)}}else N.length>0&&pr(Y,N,w,F),Vt&&Ht.render(w),fr(v,w,F);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,F),Xt.resetDefaultState(),I=-1,k=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function fs(w,F,X,Y){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Jt.intersectsSprite(w)){Y&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);let Lt=Q.update(w),Nt=w.material;Nt.visible&&v.push(w,Lt,Nt,X,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Jt.intersectsObject(w))){let Lt=Q.update(w),Nt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ft.copy(Lt.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Nt)){let Bt=Lt.groups;for(let Yt=0,Zt=Bt.length;Yt<Zt;Yt++){let zt=Bt[Yt],ge=Nt[zt.materialIndex];ge&&ge.visible&&v.push(w,Lt,ge,X,Ft.z,zt)}}else Nt.visible&&v.push(w,Lt,Nt,X,Ft.z,null)}}let xt=w.children;for(let Lt=0,Nt=xt.length;Lt<Nt;Lt++)fs(xt[Lt],F,X,Y)}function fr(w,F,X,Y){let N=w.opaque,xt=w.transmissive,Lt=w.transparent;p.setupLightsView(X),J===!0&&ot.setGlobalState(x.clippingPlanes,X),Y&&mt.viewport(_.copy(Y)),N.length>0&&Hi(N,F,X),xt.length>0&&Hi(xt,F,X),Lt.length>0&&Hi(Lt,F,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function pr(w,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new cn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Vn:fi,minFilter:ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let xt=p.state.transmissionRenderTarget[Y.id],Lt=Y.viewport||_;xt.setSize(Lt.z,Lt.w);let Nt=x.getRenderTarget();x.setRenderTarget(xt),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&Ht.render(X);let Bt=x.toneMapping;x.toneMapping=Ai;let Yt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),J===!0&&ot.setGlobalState(x.clippingPlanes,Y),Hi(w,X,Y),R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let zt=0,ge=F.length;zt<ge;zt++){let Ae=F[zt],Le=Ae.object,gn=Ae.geometry,de=Ae.material,Gt=Ae.group;if(de.side===De&&Le.layers.test(Y.layers)){let je=de.side;de.side=Ue,de.needsUpdate=!0,mr(Le,X,Y,gn,de,Gt),de.side=je,de.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt))}x.setRenderTarget(Nt),x.setClearColor(B,W),Yt!==void 0&&(Y.viewport=Yt),x.toneMapping=Bt}function Hi(w,F,X){let Y=F.isScene===!0?F.overrideMaterial:null;for(let N=0,xt=w.length;N<xt;N++){let Lt=w[N],Nt=Lt.object,Bt=Lt.geometry,Yt=Y===null?Lt.material:Y,Zt=Lt.group;Nt.layers.test(X.layers)&&mr(Nt,F,X,Bt,Yt,Zt)}}function mr(w,F,X,Y,N,xt){w.onBeforeRender(x,F,X,Y,N,xt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,F,X,Y,w,xt),N.transparent===!0&&N.side===De&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,x.renderBufferDirect(X,F,Y,N,w,xt),N.side=Ri,N.needsUpdate=!0,x.renderBufferDirect(X,F,Y,N,w,xt),N.side=De):x.renderBufferDirect(X,F,Y,N,w,xt),w.onAfterRender(x,F,X,Y,N,xt)}function Gi(w,F,X){F.isScene!==!0&&(F=Ot);let Y=Ct.get(w),N=p.state.lights,xt=p.state.shadowsArray,Lt=N.state.version,Nt=It.getParameters(w,N.state,xt,F,X),Bt=It.getProgramCacheKey(Nt),Yt=Y.programs;Y.environment=w.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(w.isMeshStandardMaterial?O:b).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",ae),Yt=new Map,Y.programs=Yt);let Zt=Yt.get(Bt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===Lt)return ii(w,Nt),Zt}else Nt.uniforms=It.getUniforms(w),w.onBeforeCompile(Nt,x),Zt=It.acquireProgram(Nt,Bt),Yt.set(Bt,Zt),Y.uniforms=Nt.uniforms;let zt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=ot.uniform),ii(w,Nt),Y.needsLights=ia(w),Y.lightsStateVersion=Lt,Y.needsLights&&(zt.ambientLightColor.value=N.state.ambient,zt.lightProbe.value=N.state.probe,zt.directionalLights.value=N.state.directional,zt.directionalLightShadows.value=N.state.directionalShadow,zt.spotLights.value=N.state.spot,zt.spotLightShadows.value=N.state.spotShadow,zt.rectAreaLights.value=N.state.rectArea,zt.ltc_1.value=N.state.rectAreaLTC1,zt.ltc_2.value=N.state.rectAreaLTC2,zt.pointLights.value=N.state.point,zt.pointLightShadows.value=N.state.pointShadow,zt.hemisphereLights.value=N.state.hemi,zt.directionalShadowMap.value=N.state.directionalShadowMap,zt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,zt.spotShadowMap.value=N.state.spotShadowMap,zt.spotLightMatrix.value=N.state.spotLightMatrix,zt.spotLightMap.value=N.state.spotLightMap,zt.pointShadowMap.value=N.state.pointShadowMap,zt.pointShadowMatrix.value=N.state.pointShadowMatrix),Y.currentProgram=Zt,Y.uniformsList=null,Zt}function Ge(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ii(w,F){let X=Ct.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Vi(w,F,X,Y,N){F.isScene!==!0&&(F=Ot),R.resetTextureUnits();let xt=F.fog,Lt=Y.isMeshStandardMaterial?F.environment:null,Nt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Di,Bt=(Y.isMeshStandardMaterial?O:b).get(Y.envMap||Lt),Yt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!X.morphAttributes.position,ge=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color,Le=Ai;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Le=x.toneMapping);let gn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=gn!==void 0?gn.length:0,Gt=Ct.get(Y),je=p.state.lights;if(J===!0&&(rt===!0||w!==k)){let An=w===k&&Y.id===I;ot.setState(Y,w,An)}let fe=!1;Y.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==je.state.version||Gt.outputColorSpace!==Nt||N.isBatchedMesh&&Gt.batching===!1||!N.isBatchedMesh&&Gt.batching===!0||N.isBatchedMesh&&Gt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Gt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Gt.instancing===!1||!N.isInstancedMesh&&Gt.instancing===!0||N.isSkinnedMesh&&Gt.skinning===!1||!N.isSkinnedMesh&&Gt.skinning===!0||N.isInstancedMesh&&Gt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Gt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Gt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Gt.instancingMorph===!1&&N.morphTexture!==null||Gt.envMap!==Bt||Y.fog===!0&&Gt.fog!==xt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ot.numPlanes||Gt.numIntersection!==ot.numIntersection)||Gt.vertexAlphas!==Yt||Gt.vertexTangents!==Zt||Gt.morphTargets!==zt||Gt.morphNormals!==ge||Gt.morphColors!==Ae||Gt.toneMapping!==Le||Gt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Gt.__version=Y.version);let Ln=Gt.currentProgram;fe===!0&&(Ln=Gi(Y,F,N));let ps=!1,xn=!1,tl=!1,Ne=Ln.getUniforms(),vi=Gt.uniforms;if(mt.useProgram(Ln.program)&&(ps=!0,xn=!0,tl=!0),Y.id!==I&&(I=Y.id,xn=!0),ps||k!==w){ct.reverseDepthBuffer?(Rt.copy(w.projectionMatrix),Ep(Rt),Tp(Rt),Ne.setValue(C,"projectionMatrix",Rt)):Ne.setValue(C,"projectionMatrix",w.projectionMatrix),Ne.setValue(C,"viewMatrix",w.matrixWorldInverse);let An=Ne.map.cameraPosition;An!==void 0&&An.setValue(C,kt.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&Ne.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ne.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,xn=!0,tl=!0)}if(N.isSkinnedMesh){Ne.setOptional(C,N,"bindMatrix"),Ne.setOptional(C,N,"bindMatrixInverse");let An=N.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ne.setValue(C,"boneTexture",An.boneTexture,R))}N.isBatchedMesh&&(Ne.setOptional(C,N,"batchingTexture"),Ne.setValue(C,"batchingTexture",N._matricesTexture,R),Ne.setOptional(C,N,"batchingIdTexture"),Ne.setValue(C,"batchingIdTexture",N._indirectTexture,R),Ne.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Ne.setValue(C,"batchingColorTexture",N._colorsTexture,R));let el=X.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0)&&D.update(N,X,Ln),(xn||Gt.receiveShadow!==N.receiveShadow)&&(Gt.receiveShadow=N.receiveShadow,Ne.setValue(C,"receiveShadow",N.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vi.envMap.value=Bt,vi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(vi.envMapIntensity.value=F.environmentIntensity),xn&&(Ne.setValue(C,"toneMappingExposure",x.toneMappingExposure),Gt.needsLights&&na(vi,tl),xt&&Y.fog===!0&&_t.refreshFogUniforms(vi,xt),_t.refreshMaterialUniforms(vi,Y,st,z,p.state.transmissionRenderTarget[w.id]),ks.upload(C,Ge(Gt),vi,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ks.upload(C,Ge(Gt),vi,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ne.setValue(C,"center",N.center),Ne.setValue(C,"modelViewMatrix",N.modelViewMatrix),Ne.setValue(C,"normalMatrix",N.normalMatrix),Ne.setValue(C,"modelMatrix",N.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let An=Y.uniformsGroups;for(let nl=0,Ef=An.length;nl<Ef;nl++){let Qh=An[nl];U.update(Qh,Ln),U.bind(Qh,Ln)}}return Ln}function na(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function ia(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,X){Ct.get(w.texture).__webglTexture=F,Ct.get(w.depthTexture).__webglTexture=X;let Y=Ct.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let X=Ct.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,X=0){T=w,A=F,E=X;let Y=!0,N=null,xt=!1,Lt=!1;if(w){let Bt=Ct.get(w);if(Bt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(Bt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Bt.__hasExternalTextures)R.rebindTextures(w,Ct.get(w.texture).__webglTexture,Ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let zt=w.depthTexture;if(Bt.__boundDepthTexture!==zt){if(zt!==null&&Ct.has(zt)&&(w.width!==zt.image.width||w.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Lt=!0);let Zt=Ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?N=Zt[F][X]:N=Zt[F],xt=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?N=Ct.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?N=Zt[X]:N=Zt,_.copy(w.viewport),S.copy(w.scissor),H=w.scissorTest}else _.copy(Mt).multiplyScalar(st).floor(),S.copy(yt).multiplyScalar(st).floor(),H=jt;if(mt.bindFramebuffer(C.FRAMEBUFFER,N)&&Y&&mt.drawBuffers(w,N),mt.viewport(_),mt.scissor(S),mt.setScissorTest(H),xt){let Bt=Ct.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Bt.__webglTexture,X)}else if(Lt){let Bt=Ct.get(w.texture),Yt=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,X||0,Yt)}I=-1},this.readRenderTargetPixels=function(w,F,X,Y,N,xt,Lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){mt.bindFramebuffer(C.FRAMEBUFFER,Nt);try{let Bt=w.texture,Yt=Bt.format,Zt=Bt.type;if(!ct.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-Y&&X>=0&&X<=w.height-N&&C.readPixels(F,X,Y,N,gt.convert(Yt),gt.convert(Zt),xt)}finally{let Bt=T!==null?Ct.get(T).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,Y,N,xt,Lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){let Bt=w.texture,Yt=Bt.format,Zt=Bt.type;if(!ct.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-Y&&X>=0&&X<=w.height-N){mt.bindFramebuffer(C.FRAMEBUFFER,Nt);let zt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.bufferData(C.PIXEL_PACK_BUFFER,xt.byteLength,C.STREAM_READ),C.readPixels(F,X,Y,N,gt.convert(Yt),gt.convert(Zt),0);let ge=T!==null?Ct.get(T).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,ge);let Ae=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await wp(C,Ae,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xt),C.deleteBuffer(zt),C.deleteSync(Ae),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,X=0){w.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let Y=Math.pow(2,-X),N=Math.floor(w.image.width*Y),xt=Math.floor(w.image.height*Y),Lt=F!==null?F.x:0,Nt=F!==null?F.y:0;R.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Lt,Nt,N,xt),mt.unbindTexture()},this.copyTextureToTexture=function(w,F,X=null,Y=null,N=0){w.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],F=arguments[2],N=arguments[3]||0,X=null);let xt,Lt,Nt,Bt,Yt,Zt;X!==null?(xt=X.max.x-X.min.x,Lt=X.max.y-X.min.y,Nt=X.min.x,Bt=X.min.y):(xt=w.image.width,Lt=w.image.height,Nt=0,Bt=0),Y!==null?(Yt=Y.x,Zt=Y.y):(Yt=0,Zt=0);let zt=gt.convert(F.format),ge=gt.convert(F.type);R.setTexture2D(F,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let Ae=C.getParameter(C.UNPACK_ROW_LENGTH),Le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),gn=C.getParameter(C.UNPACK_SKIP_PIXELS),de=C.getParameter(C.UNPACK_SKIP_ROWS),Gt=C.getParameter(C.UNPACK_SKIP_IMAGES),je=w.isCompressedTexture?w.mipmaps[N]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,je.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,je.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Yt,Zt,xt,Lt,zt,ge,je.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Yt,Zt,je.width,je.height,zt,je.data):C.texSubImage2D(C.TEXTURE_2D,N,Yt,Zt,xt,Lt,zt,ge,je),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ae),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,de),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Gt),N===0&&F.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,X=null,Y=null,N=0){w.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],F=arguments[3],N=arguments[4]||0);let xt,Lt,Nt,Bt,Yt,Zt,zt,ge,Ae,Le=w.isCompressedTexture?w.mipmaps[N]:w.image;X!==null?(xt=X.max.x-X.min.x,Lt=X.max.y-X.min.y,Nt=X.max.z-X.min.z,Bt=X.min.x,Yt=X.min.y,Zt=X.min.z):(xt=Le.width,Lt=Le.height,Nt=Le.depth,Bt=0,Yt=0,Zt=0),Y!==null?(zt=Y.x,ge=Y.y,Ae=Y.z):(zt=0,ge=0,Ae=0);let gn=gt.convert(F.format),de=gt.convert(F.type),Gt;if(F.isData3DTexture)R.setTexture3D(F,0),Gt=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),Gt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let je=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ln=C.getParameter(C.UNPACK_SKIP_PIXELS),ps=C.getParameter(C.UNPACK_SKIP_ROWS),xn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Le.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Le.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Gt,N,zt,ge,Ae,xt,Lt,Nt,gn,de,Le.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Gt,N,zt,ge,Ae,xt,Lt,Nt,gn,Le.data):C.texSubImage3D(Gt,N,zt,ge,Ae,xt,Lt,Nt,gn,de,Le),C.pixelStorei(C.UNPACK_ROW_LENGTH,je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,ps),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xn),N===0&&F.generateMipmaps&&C.generateMipmap(Gt),mt.unbindTexture()},this.initRenderTarget=function(w){Ct.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),mt.unbindTexture()},this.resetState=function(){A=0,E=0,T=null,mt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Sh?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===So?"display-p3":"srgb"}};var no=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},io=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new P,Br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ii=class extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cs,Mr=new P,Ps=new P,Is=new P,Ls=new it,br=new it,Rd=new se,Ea=new P,Sr=new P,Ta=new P,$u=new it,Ll=new it,Zu=new it,is=class extends Ve{constructor(t=new Ii){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(e,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new Br(n,3,0,!1)),Cs.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Cs,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Aa(Ea.set(-.5,-.5,0),Is,a,Ps,s,r),Aa(Sr.set(.5,-.5,0),Is,a,Ps,s,r),Aa(Ta.set(.5,.5,0),Is,a,Ps,s,r),$u.set(0,0),Ll.set(1,0),Zu.set(1,1);let o=t.ray.intersectTriangle(Ea,Sr,Ta,!1,Mr);if(o===null&&(Aa(Sr.set(-.5,.5,0),Is,a,Ps,s,r),Ll.set(0,1),o=t.ray.intersectTriangle(Ea,Ta,Sr,!1,Mr),o===null))return;let l=t.ray.origin.distanceTo(Mr);l<t.near||l>t.far||e.push({distance:l,point:Mr.clone(),uv:Ti.getInterpolation(Mr,Ea,Sr,Ta,$u,Ll,Zu,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Aa(i,t,e,n,s,r){Ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(br.x=r*Ls.x-s*Ls.y,br.y=s*Ls.x+r*Ls.y):br.copy(Ls),i.copy(t),i.x+=br.x,i.y+=br.y,i.applyMatrix4(Rd)}var Or=class extends un{constructor(t=null,e=1,n=1,s,r,a,o,l,c=nn,h=nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new se,Ku=new se,Ra=[],Ju=new On,yv=new se,wr=new dt,Er=new Pi,Hn=class extends dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Ju.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Er.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Ku.multiplyMatrices(n,Ds),wr.matrixWorld=Ku,wr.raycast(t,Ra);for(let a=0,o=Ra.length;a<o;a++){let l=Ra[a];l.instanceId=r,l.object=this,e.push(l)}Ra.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,_h,Jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zs=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qu=new se,zc=new Za,Ca=new Pi,Pa=new P,Ks=class extends Ve{constructor(t=new pe,e=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;Qu.copy(s).invert(),zc.copy(t.ray).applyMatrix4(Qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){let p=c.getX(m);Pa.fromBufferAttribute(u,p),ju(Pa,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)Pa.fromBufferAttribute(u,m),ju(Pa,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ju(i,t,e,n,s,r,a){let o=zc.distanceSqToPoint(i);if(o<e){let l=new P;zc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var dn=class extends un{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new se;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zr=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Hc=class extends zr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ia=new P,Dl=new Th,Ul=new Th,Fl=new Th,Gc=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),Dl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,p),Ul.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,p),Fl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ul.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Dl.calc(l),Ul.calc(l),Fl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function td(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Mv(i,t){let e=1-i;return e*e*t}function bv(i,t){return 2*(1-i)*i*t}function Sv(i,t){return i*i*t}function Ir(i,t,e,n){return Mv(i,t)+bv(i,e)+Sv(i,n)}function wv(i,t){let e=1-i;return e*e*e*t}function Ev(i,t){let e=1-i;return 3*e*e*i*t}function Tv(i,t){return 3*(1-i)*i*i*t}function Av(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return wv(i,t)+Ev(i,e)+Tv(i,n)+Av(i,s)}var so=class extends Cn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vc=class extends Cn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y),Lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends Cn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wc=class extends Cn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Cn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends Cn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(td(o,l.x,c.x,h.x,u.x),td(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Gc,CubicBezierCurve:so,CubicBezierCurve3:Vc,EllipseCurve:zr,LineCurve:ro,LineCurve3:Wc,QuadraticBezierCurve:ao,QuadraticBezierCurve3:Xc,SplineCurve:oo}),Yc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new qc[s.type]().fromJSON(s))}return this}},lo=class extends Yc{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ro(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ao(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new so(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new zr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},co=class i extends pe{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,d=new it,f=new P,m=new P,v=new P,p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-p,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let M=0;M<=e;M++){let x=n+M*h*s,y=Math.sin(x),A=Math.cos(x);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*A,a.push(u.x,u.y,u.z),d.x=M/e,d.y=E/(t.length-1),o.push(d.x,d.y);let T=l[3*E+0]*y,I=l[3*E+1],k=l[3*E+0]*A;c.push(T,I,k)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let y=x+M*t.length,A=y,E=y+t.length,T=y+t.length+1,I=y+1;r.push(A,E,I),r.push(T,I,E)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Se=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],p=n/2,g=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function M(){let y=new P,A=new P,E=0,T=(e-t)/n;for(let I=0;I<=r;I++){let k=[],_=I/r,S=_*(e-t)+t;for(let H=0;H<=s;H++){let B=H/s,W=B*l+o,j=Math.sin(W),z=Math.cos(W);A.x=S*j,A.y=-_*n+p,A.z=S*z,u.push(A.x,A.y,A.z),y.set(j,T,z).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-_),k.push(m++)}v.push(k)}for(let I=0;I<s;I++)for(let k=0;k<r;k++){let _=v[k][I],S=v[k+1][I],H=v[k+1][I+1],B=v[k][I+1];t>0&&(h.push(_,S,B),E+=3),e>0&&(h.push(S,H,B),E+=3)}c.addGroup(g,E,0),g+=E}function x(y){let A=m,E=new it,T=new P,I=0,k=y===!0?t:e,_=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),m++;let S=m;for(let H=0;H<=s;H++){let W=H/s*l+o,j=Math.cos(W),z=Math.sin(W);T.x=k*z,T.y=p*_,T.z=k*j,u.push(T.x,T.y,T.z),d.push(0,_,0),E.x=j*.5+.5,E.y=z*.5*_+.5,f.push(E.x,E.y),m++}for(let H=0;H<s;H++){let B=A+H,W=S+H;y===!0?h.push(W,W+1,B):h.push(W+1,W,B),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bn=class i extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ho=class i extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new P,y=new P,A=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],y),f(e[E+2],A),l(x,y,A,M)}function l(M,x,y,A){let E=A+1,T=[];for(let I=0;I<=E;I++){T[I]=[];let k=M.clone().lerp(y,I/E),_=x.clone().lerp(y,I/E),S=E-I;for(let H=0;H<=S;H++)H===0&&I===E?T[I][H]=k:T[I][H]=k.clone().lerp(_,H/S)}for(let I=0;I<E;I++)for(let k=0;k<2*(E-I)-1;k++){let _=Math.floor(k/2);k%2===0?(d(T[I][_+1]),d(T[I+1][_]),d(T[I][_])):(d(T[I][_+1]),d(T[I+1][_+1]),d(T[I+1][_]))}}function c(M){let x=new P;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let M=new P;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let y=p(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;a.push(y,1-A)}m(),u()}function u(){for(let M=0;M<a.length;M+=6){let x=a[M+0],y=a[M+2],A=a[M+4],E=Math.max(x,y,A),T=Math.min(x,y,A);E>.9&&T<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){let y=M*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function m(){let M=new P,x=new P,y=new P,A=new P,E=new it,T=new it,I=new it;for(let k=0,_=0;k<r.length;k+=9,_+=6){M.set(r[k+0],r[k+1],r[k+2]),x.set(r[k+3],r[k+4],r[k+5]),y.set(r[k+6],r[k+7],r[k+8]),E.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),A.copy(M).add(x).add(y).divideScalar(3);let S=p(A);v(E,_+0,M,S),v(T,_+2,x,S),v(I,_+4,y,S)}}function v(M,x,y,A){A<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Js=class i extends ho{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Li=class extends lo{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new lo().fromJSON(s))}return this}},Rv={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Dv(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Hr(r,a,e,o,l,f,0),a}};function Cd(i,t,e,n,s){let r,a;if(s===Wv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=ed(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=ed(r,i[r],i[r+1],a);return a&&Eo(a,a.next)&&(Vr(a),a=a.next),a}function ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Eo(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ov(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Pv(i,n,s,r):Cv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Iv(ss(i),t,e),Hr(i,t,e,n,s,r,2)):a===2&&Lv(i,t,e,n,s,r):Hr(ss(i),t,e,n,s,r,1);break}}}function Cv(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Fs(s,o,r,l,a,c,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pv(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ce(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=$c(f,m,t,e,n),M=$c(v,p,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=g&&y&&y.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==a&&Fs(o,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&Fs(o,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==a&&Fs(o,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&Fs(o,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Iv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Eo(s,r)&&Pd(s,n,n.next,r)&&Gr(s,r)&&Gr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vr(n),Vr(n.next),n=i=r),n=n.next}while(n!==i);return ss(n)}function Lv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hv(a,o)){let l=Id(a,o);a=ss(a,a.next),l=ss(l,l.next),Hr(a,t,e,n,s,r,0),Hr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Dv(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Cd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(zv(c));for(s.sort(Uv),r=0;r<s.length;r++)e=Fv(s[r],e);return e}function Uv(i,t){return i.x-t.x}function Fv(i,t){let e=Nv(i,t);if(!e)return t;let n=Id(e,i);return ss(n,n.next),ss(e,e.next)}function Nv(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Fs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Gr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Bv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Bv(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Ov(i,t,e,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kv(s)}function kv(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function $c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Hv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gv(i,t)&&(Gr(i,t)&&Gr(t,i)&&Vv(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Eo(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Eo(i,t){return i.x===t.x&&i.y===t.y}function Pd(i,t,e,n){let s=Da(Ce(i,t,e)),r=Da(Ce(i,t,n)),a=Da(Ce(e,n,i)),o=Da(Ce(e,n,t));return!!(s!==r&&a!==o||s===0&&La(i,e,t)||r===0&&La(i,n,t)||a===0&&La(e,i,n)||o===0&&La(e,t,n))}function La(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Da(i){return i>0?1:i<0?-1:0}function Gv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Vv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Id(i,t){let e=new Zc(i.i,i.x,i.y),n=new Zc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ed(i,t,e,n){let s=new Zc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Dr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nd(t),id(n,t);let a=t.length;e.forEach(nd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,id(n,e[l]);let o=Rv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function nd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function id(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var uo=class i extends pe{constructor(t=new Li([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Xv,x,y=!1,A,E,T,I;g&&(x=g.getSpacedPoints(h),y=!0,d=!1,A=g.computeFrenetFrames(h,!1),E=new P,T=new P,I=new P),d||(p=0,f=0,m=0,v=0);let k=o.extractPoints(c),_=k.shape,S=k.holes;if(!Dr.isClockWise(_)){_=_.reverse();for(let et=0,C=S.length;et<C;et++){let at=S[et];Dr.isClockWise(at)&&(S[et]=at.reverse())}}let B=Dr.triangulateShape(_,S),W=_;for(let et=0,C=S.length;et<C;et++){let at=S[et];_=_.concat(at)}function j(et,C,at){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(C,at)}let z=_.length,st=B.length;function G(et,C,at){let ut,ct,mt,Ut=et.x-C.x,Ct=et.y-C.y,R=at.x-et.x,b=at.y-et.y,O=Ut*Ut+Ct*Ct,K=Ut*b-Ct*R;if(Math.abs(K)>Number.EPSILON){let nt=Math.sqrt(O),Q=Math.sqrt(R*R+b*b),It=C.x-Ct/nt,_t=C.y+Ut/nt,At=at.x-b/Q,te=at.y+R/Q,ot=((At-It)*b-(te-_t)*R)/(Ut*b-Ct*R);ut=It+Ut*ot-et.x,ct=_t+Ct*ot-et.y;let St=ut*ut+ct*ct;if(St<=2)return new it(ut,ct);mt=Math.sqrt(St/2)}else{let nt=!1;Ut>Number.EPSILON?R>Number.EPSILON&&(nt=!0):Ut<-Number.EPSILON?R<-Number.EPSILON&&(nt=!0):Math.sign(Ct)===Math.sign(b)&&(nt=!0),nt?(ut=-Ct,ct=Ut,mt=Math.sqrt(O)):(ut=Ut,ct=Ct,mt=Math.sqrt(O/2))}return new it(ut/mt,ct/mt)}let ht=[];for(let et=0,C=W.length,at=C-1,ut=et+1;et<C;et++,at++,ut++)at===C&&(at=0),ut===C&&(ut=0),ht[et]=G(W[et],W[at],W[ut]);let Mt=[],yt,jt=ht.concat();for(let et=0,C=S.length;et<C;et++){let at=S[et];yt=[];for(let ut=0,ct=at.length,mt=ct-1,Ut=ut+1;ut<ct;ut++,mt++,Ut++)mt===ct&&(mt=0),Ut===ct&&(Ut=0),yt[ut]=G(at[ut],at[mt],at[Ut]);Mt.push(yt),jt=jt.concat(yt)}for(let et=0;et<p;et++){let C=et/p,at=f*Math.cos(C*Math.PI/2),ut=m*Math.sin(C*Math.PI/2)+v;for(let ct=0,mt=W.length;ct<mt;ct++){let Ut=j(W[ct],ht[ct],ut);lt(Ut.x,Ut.y,-at)}for(let ct=0,mt=S.length;ct<mt;ct++){let Ut=S[ct];yt=Mt[ct];for(let Ct=0,R=Ut.length;Ct<R;Ct++){let b=j(Ut[Ct],yt[Ct],ut);lt(b.x,b.y,-at)}}}let Jt=m+v;for(let et=0;et<z;et++){let C=d?j(_[et],jt[et],Jt):_[et];y?(T.copy(A.normals[0]).multiplyScalar(C.x),E.copy(A.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(T).add(E),lt(I.x,I.y,I.z)):lt(C.x,C.y,0)}for(let et=1;et<=h;et++)for(let C=0;C<z;C++){let at=d?j(_[C],jt[C],Jt):_[C];y?(T.copy(A.normals[et]).multiplyScalar(at.x),E.copy(A.binormals[et]).multiplyScalar(at.y),I.copy(x[et]).add(T).add(E),lt(I.x,I.y,I.z)):lt(at.x,at.y,u/h*et)}for(let et=p-1;et>=0;et--){let C=et/p,at=f*Math.cos(C*Math.PI/2),ut=m*Math.sin(C*Math.PI/2)+v;for(let ct=0,mt=W.length;ct<mt;ct++){let Ut=j(W[ct],ht[ct],ut);lt(Ut.x,Ut.y,u+at)}for(let ct=0,mt=S.length;ct<mt;ct++){let Ut=S[ct];yt=Mt[ct];for(let Ct=0,R=Ut.length;Ct<R;Ct++){let b=j(Ut[Ct],yt[Ct],ut);y?lt(b.x,b.y+x[h-1].y,x[h-1].x+at):lt(b.x,b.y,u+at)}}}J(),rt();function J(){let et=s.length/3;if(d){let C=0,at=z*C;for(let ut=0;ut<st;ut++){let ct=B[ut];kt(ct[2]+at,ct[1]+at,ct[0]+at)}C=h+p*2,at=z*C;for(let ut=0;ut<st;ut++){let ct=B[ut];kt(ct[0]+at,ct[1]+at,ct[2]+at)}}else{for(let C=0;C<st;C++){let at=B[C];kt(at[2],at[1],at[0])}for(let C=0;C<st;C++){let at=B[C];kt(at[0]+z*h,at[1]+z*h,at[2]+z*h)}}n.addGroup(et,s.length/3-et,0)}function rt(){let et=s.length/3,C=0;Rt(W,C),C+=W.length;for(let at=0,ut=S.length;at<ut;at++){let ct=S[at];Rt(ct,C),C+=ct.length}n.addGroup(et,s.length/3-et,1)}function Rt(et,C){let at=et.length;for(;--at>=0;){let ut=at,ct=at-1;ct<0&&(ct=et.length-1);for(let mt=0,Ut=h+p*2;mt<Ut;mt++){let Ct=z*mt,R=z*(mt+1),b=C+ut+Ct,O=C+ct+Ct,K=C+ct+R,nt=C+ut+R;Ft(b,O,K,nt)}}}function lt(et,C,at){l.push(et),l.push(C),l.push(at)}function kt(et,C,at){Ot(et),Ot(C),Ot(at);let ut=s.length/3,ct=M.generateTopUV(n,s,ut-3,ut-2,ut-1);Vt(ct[0]),Vt(ct[1]),Vt(ct[2])}function Ft(et,C,at,ut){Ot(et),Ot(C),Ot(ut),Ot(C),Ot(at),Ot(ut);let ct=s.length/3,mt=M.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);Vt(mt[0]),Vt(mt[1]),Vt(mt[3]),Vt(mt[1]),Vt(mt[2]),Vt(mt[3])}function Ot(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function Vt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qc[s.type]().fromJSON(s)),new i(n,t.options)}},Xv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-u),new it(d,1-m),new it(v,1-g)]:[new it(o,1-l),new it(h,1-u),new it(f,1-m),new it(p,1-g)]}};function qv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fo=class i extends ho{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ti=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){let M=[],x=g/n,y=0;g===0&&a===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(E+y,1-x),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let x=h[g][M+1],y=h[g][M],A=h[g+1][M],E=h[g+1][M+1];(g!==0||a>0)&&f.push(x,y,E),(g!==n-1||l<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ei=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let v=m/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let v=(s+1)*f+m-1,p=(s+1)*(f-1)+m-1,g=(s+1)*(f-1)+m,M=(s+1)*f+m;a.push(v,p,M),a.push(p,g,M)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var po=class extends we{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ce=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var mo=class extends zn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=class extends zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ua(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kc=class extends Qs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case iu:r=t,o=2*e-n;break;case su:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case iu:a=t,l=2*n-e;break;case su:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-f)*p+(1.5+f)*v+.5*m,y=f*p-f*v;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+M*a[c+A]+x*a[l+A]+y*a[u+A];return r}},Jc=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Qc=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ua(e,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ua(t.times,Array),values:Ua(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ha:e=this.InterpolantFactoryMethodDiscrete;break;case bc:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Yv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=bc;var rs=class extends Gn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ha;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Gn{};jc.prototype.ValueTypeName="color";var th=class extends Gn{};th.prototype.ValueTypeName="number";var eh=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},go=class extends Gn{InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Gn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ha;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends Gn{};nh.prototype.ValueTypeName="vector";var ih=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},$v=new ih,sh=class{constructor(t){this.manager=t!==void 0?t:$v,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Wr=class extends js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Nl=new se,sd=new P,rd=new P,Xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(sd),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rh=class extends Xr{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=qs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},xo=class extends js{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ad=new se,Tr=new P,Bl=new P,ah=class extends Xr{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tr),Bl.copy(n.position),Bl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Bl),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad)}},vo=class extends js{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},oh=class extends Xr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var _o=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=od(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=od();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function od(){return performance.now()}var Ah="\\[\\]\\.:\\/",Zv=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",Kv="[^"+Ah.replace("\\.","")+"]",Jv=/((?:WC+[\/:])*)/.source.replace("WC",Rh),Qv=/(WCOD+)?/.source.replace("WCOD",Kv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),t_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),e_=new RegExp("^"+Jv+Qv+jv+t_+"$"),n_=["material","materials","bones","map"],lh=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(t){let e=e_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);n_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=lh;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);var Yr=class extends pi{constructor(){super();let t=new ye;t.deleteAttribute("uv");let e=new ce({side:Ue}),n=new ce,s=new vo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new dt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new dt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new dt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new dt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new dt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new dt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new dt(t,nr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new dt(t,nr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new dt(t,nr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let v=new dt(t,nr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let p=new dt(t,nr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let g=new dt(t,nr(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function nr(i){let t=new be;return t.color.setScalar(i),t}function qe(i,t,e){return i<t?t:i>e?e:i}function mi(i){return i<0?-1:i>0?1:0}function i_(i){var n;let t=Math.min(1,((i.muFront+i.muRear)/2-.9)/.45+((n=i.downforce)!=null?n:0)*.2),e=Math.min(1,Math.max(.15,(i.drive==="RWD"?.55:.25)+(i.muFront-i.muRear)*2.2+(i.torque/i.mass-.25)*.8));return qe((.76-e)/.2+(t-.7)*1.5,0,1)}var To=class{constructor(t){var n,s;this.spec=t;let e=t;this.m=e.mass,this.L=e.wheelbase,this.a=e.wheelbase*e.frontWeight,this.b=e.wheelbase-this.a,this.I=e.mass*((n=e.inertiaK)!=null?n:.95)*this.a*this.b*1.35,this.gripK=(s=e.gripK)!=null?s:i_(e),this.reset(0,0,0)}reset(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=0,this.vz=0,this.r=0,this.u=0,this.v=0,this.steer=0,this.gear=1,this.rpm=this.spec.idle,this.shiftTimer=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.spinR=0,this.lockR=0,this.frontSlide=0,this.rearSlide=0,this.wheelSpin=0,this.offroad=!1,this.lastHit=0}get speed(){return Math.hypot(this.vx,this.vz)}get kmh(){return this.speed*3.6}get beta(){return this.speed<1?0:Math.atan2(this.v,Math.abs(this.u))}torqueAt(t){var a;let e=this.spec,n=qe(t/e.redline,0,1.05),s=(a=e.peakAt)!=null?a:.7,r;return n<s?r=.55+.45*Math.sin(n/s*Math.PI/2):r=1-.35*Math.pow((n-s)/(1.05-s),2),e.torque*r}step(t,e,n){var oe,Qe,Tn,ur,dr,Zn,fs,fr,pr,Hi,mr,Gi;let s=this.spec,r=(oe=n.grip)!=null?oe:1,a=Math.cos(this.h),o=Math.sin(this.h),l=this.vx*o+this.vz*a,c=this.vx*a-this.vz*o;this.u=l,this.v=c;let h=Math.hypot(l,c),u=1/(1+Math.max(0,Math.abs(l)-5)/(((Qe=s.steerFade)!=null?Qe:22)*(n.easy?1.35:1))),d=e.steer*s.steerMax*u,f=h>3?Math.atan2(c,Math.max(Math.abs(l),.5)):0;e.handbrake>.3||this.kickT>0?this.intent=n.real?1.6:1.1:Math.abs(f)>.2&&e.throttle>.3&&(this.intent||0)>0?this.intent=Math.max(this.intent,.6):l<12&&(this.intent=Math.max(this.intent||0,.3)),this.intent=Math.max(0,(this.intent||0)-t);let m=n.easy&&this.intent<=0;n.assist>0&&l>3&&(d+=qe(f,-.9,.9)*.85*n.assist*(1-.5*Math.abs(e.steer))),d=qe(d,-s.steerMax*1.25,s.steerMax*1.25);let v=7.5;this.steer+=qe(d-this.steer,-v*t,v*t);let p=this.steer,g=s.gears,M=Ge=>Math.abs(l)/s.wheelRadius*g[Math.abs(Ge)-1]*s.finalDrive*60/(2*Math.PI);this.shiftTimer>0&&(this.shiftTimer-=t);let x=e.brake>.1&&e.throttle<.1&&l<1&&!e.noReverse;this.gear===-1?e.throttle>.1&&l>-1&&(this.gear=1):x&&Math.abs(l)<.6&&this.revHold>.25&&(this.gear=-1),this.revHold=x&&Math.abs(l)<.6?(this.revHold||0)+t:0;let y=0;if(this.gear>0){let Ge=M(this.gear);n.manual?(e.shiftUp&&this.gear<g.length&&(this.gear++,this.shiftTimer=.12,y=1),e.shiftDown&&this.gear>1&&(this.gear--,this.shiftTimer=.12,y=-1)):this.shiftTimer<=0&&(Ge>s.redline*.9&&this.gear<g.length?(this.gear++,this.shiftTimer=.09,y=1):this.gear>1&&Math.abs(f)<.22&&this.spinR<.05&&M(this.gear-1)<s.redline*.62&&(this.gear--,this.shiftTimer=.12,y=-1))}let A=Math.abs(this.gear)-1,E=g[A]*s.finalDrive*(this.gear===-1?1.1:1),T=Math.abs(l)/s.wheelRadius*E*60/(2*Math.PI),I=this.shiftTimer>0?0:this.gear===-1?e.brake:e.throttle,k=Math.max(s.idle,T);this.spinR>.05&&(k=Math.max(k,s.idle+(s.redline*.9-s.idle)*(.6+.4*I)*Math.min(1,this.spinR*2))),Math.abs(l)<2&&I>0&&(k=Math.max(k,s.idle+(s.redline*.6-s.idle)*I)),this.rpm+=(k-this.rpm)*Math.min(1,t*12);let _=T>=s.redline;_?this.rpm=s.redline-150*Math.random():this.rpm=Math.min(this.rpm,s.redline*.97);let S=e.throttle;S<.2&&(this.liftT=(this.liftT||0)+t),this.gripK<.5&&((Tn=this.thrPrev)!=null?Tn:0)<.3&&S>.8&&(this.liftT||0)<.35&&(this.liftT||0)>.02&&l>6&&this.gear>0&&(this.kickT=.28),S>=.2&&(this.liftT=0),this.thrPrev=S,this.kickT>0&&(this.kickT-=t);let H=this.torqueAt(Math.max(this.rpm,s.idle))*I*(_?.1:1);I<.05&&Math.abs(l)>1&&(H=-s.torque*.12*qe(this.rpm/s.redline,0,1));let B=H*E*.88/s.wheelRadius*(this.kickT>0?n.real?1.9:1.5:1);this.gear===-1&&(B=-Math.abs(B),l<-9&&(B=0)),H<0&&(B=mi(l)*H*E*.88/s.wheelRadius);let W=((ur=s.downforce)!=null?ur:0)*h*h,j=s.cgHeight/this.L,z=this.m*9.81*this.b/this.L-this.m*this.ax*j+W*.45,st=this.m*9.81*this.a/this.L+this.m*this.ax*j+W*.55;z=Math.max(z,this.m*9.81*.12),st=Math.max(st,this.m*9.81*.12);let G=this.offroad?.62:1,ht=s.muFront*r*G,Mt=s.muRear*r*G,yt=(Zn=(dr=s.body)==null?void 0:dr.track)!=null?Zn:1.55,jt=this.m*Math.abs(this.ay)*s.cgHeight/yt,Jt=(fs=s.rollFront)!=null?fs:s.drive==="RWD"?.46:.56,J=1-.14*Math.min(1,jt*Jt/(z/2))**2,rt=1-.14*Math.min(1,jt*(1-Jt)/(st/2))**2,Rt=1;m&&(Rt=1+.8*qe((h-15)/30,0,1));let lt=e.handbrake>.1?0:this.gripK,kt=ht*z*J*Rt,Ft=Mt*st*rt*Rt*(1+lt*(n.real?.22:.12)),Ot=0,Vt=0,et=s.drive==="AWD"?(fr=s.awdFront)!=null?fr:.35:s.drive==="FWD"?1:0;Ot+=B*et,Vt+=B*(1-et);let C=this.gear===-1?e.throttle:e.brake,at=C>0&&Math.abs(l)>.3?C:0;if(at>0){let Ge=s.brakeForce*at;Ot+=-mi(l)*Ge*.64,Vt+=-mi(l)*Ge*.36}var ut=e.handbrake;ut>0&&Math.abs(l)>.5&&(Vt=-mi(l)*Ft*(n.real?.95:.8)*ut+Vt*(1-ut));let ct=Math.abs(f)<.1&&Math.abs(e.steer)<.3&&ut<.1&&!(this.kickT>0)||m&&l>15||lt>.5&&ut<.1&&Math.abs(f)<.25;n.tcs!==!1&&ct&&B>0&&(Vt=Math.min(Vt,Ft*.97),Ot=Math.min(Ot,kt*.97)),this.spinR=0,this.lockR=0;let mt=0,Ut=Math.abs(Vt)/Ft;Ut>1&&(mi(Vt)===mi(B)&&B!==0&&!(ut>.3)?this.spinR=qe(Ut-1+.35,0,1):this.lockR=1,Vt=mi(Vt)*Ft*(this.spinR>0?.92:.98)),ut>.3&&Math.abs(l)>.5&&(this.lockR=Math.max(this.lockR,ut)),Math.abs(Ot)>kt&&(mt=1,Ot=mi(Ot)*kt*.95);let Ct=(pr=s.tireB)!=null?pr:9,R=(Hi=s.tireC)!=null?Hi:1.45,b=c+this.a*this.r,O=Math.cos(p),K=Math.sin(p),nt=l*O+b*K,Q=-l*K+b*O,It=Math.atan2(Q,Math.max(Math.abs(nt),.8)),_t=c-this.b*this.r,At=Math.atan2(_t,Math.max(Math.abs(l),.8));this.slipF=It,this.slipR=At;let te=kt*Math.sqrt(Math.max(.04,1-.85*Math.pow(Ot/kt,2))),ot=Ft*Math.sqrt(Math.max(.04,1-.85*Math.pow(Vt/Ft,2)));this.lockR>0&&(ot*=1-(n.real?.45:.3)*this.lockR);let St=-kt*Math.sin(R*Math.atan(Ct*It)),Ht=-Ft*Math.sin(R*Math.atan(Ct*At));St=qe(St,-te,te),Ht=qe(Ht,-ot,ot);let D=this.m*this.b/this.L,q=this.m*this.a/this.L,vt=(Ge,ii,Vi)=>qe(Ge,-Math.abs(ii)*Vi/t,Math.abs(ii)*Vi/t);St=vt(St,Q,D),Ht=vt(Ht,_t,q),this.frontSlide=qe(Math.abs(It)/.25,0,1),this.rearSlide=qe(Math.max(Math.abs(At)/.2,this.spinR,this.lockR*(Math.abs(l)>3?1:0)),0,1);let gt=s.drag*l*Math.abs(l),Xt=((mr=s.rolling)!=null?mr:12)*l*(this.offroad?5:1),U=Ot*O-St*K+Vt-gt-Xt,wt=Ot*K+St*O+Ht-s.drag*2*c*Math.abs(c),Z=this.a*(St*O+Ot*K)-this.b*Ht;h<.3&&I<.05&&Math.abs(B)<1&&(this.vx*=.9,this.vz*=.9,this.r*=.8);let tt=U/this.m,pt=wt/this.m;this.ax+=(qe(tt,-12,12)-this.ax)*Math.min(1,t*8),this.ay+=(qe(pt,-14,14)-this.ay)*Math.min(1,t*8);let Et=U*o+wt*a,ae=U*a-wt*o;this.vx+=Et/this.m*t,this.vz+=ae/this.m*t,this.r+=Z/this.I*t,n.assist>0&&l>5&&Math.abs(e.steer)>.3&&Math.sign(e.steer)!==Math.sign(this.r)&&(Math.abs(f)>.12||this.rearSlide>.4)&&(this.r+=e.steer*(n.real?3:2.3)*t*n.assist*Math.min(1,l/15));let Te=Math.abs(f)>.15;if(n.assist>0&&Math.abs(f)>.2&&Math.abs(f)<1.2&&I>.5&&h>6){let Ge=3.2*n.assist*I*t/h;this.vx+=this.vx*Ge,this.vz+=this.vz*Ge}if(this.r*=1-Math.min(.5,((Gi=s.yawDamp)!=null?Gi:.6)*(Te?n.real?.4:.8:1)*t),m&&l>12){let Ge=l*Math.tan(this.steer)/this.L*.95,ii=1.3+.9*qe((l-15)/30,0,1),Vi=9.81*ii/Math.max(l,1);this.r+=(qe(Ge,-Vi,Vi)-this.r)*Math.min(1,5*t);let na=Math.abs(Ge)*l/9.81;if(na>ii&&I<.9){let Y=Math.min(.5,(na-ii)*.9)*t;this.vx-=this.vx*Y,this.vz-=this.vz*Y}let ia=Math.min(1,3*t),w=o,F=a,X=this.vx*w+this.vz*F;this.vx+=(w*X-this.vx)*ia*.5*qe(Math.abs(f)/.3,0,1),this.vz+=(F*X-this.vz)*ia*.5*qe(Math.abs(f)/.3,0,1)}if(n.assist>0&&Math.abs(f)>1.05&&l>2&&(this.r*=1-2.5*t*n.assist),n.assist>0&&!n.real&&Math.abs(f)>.5&&l>4){let Ge=Math.abs(f)-.5;Math.sign(this.r)!==Math.sign(f)&&(this.r*=1-Math.min(.6,Ge*9*t*n.assist*(n.easy?1.4:1)))}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t;let He=this.spinR>0?Math.max(Math.abs(l),25*this.spinR)*mi(this.gear):this.lockR>.5?0:l;return this.wheelSpin+=He/s.wheelRadius*t,{shifted:y,limiter:_}}collideWall(t,e,n,s=.25){this.x+=t*n,this.z+=e*n;let r=this.vx*t+this.vz*e;if(r<0){let a=-e,o=t,l=this.vx*a+this.vz*o,c=-r*s,h=l*(1-Math.min(.5,Math.abs(r)*.04));this.vx=t*c+a*h,this.vz=e*c+o*h;let u=Math.sin(this.h),d=Math.cos(this.h),f=u*a+d*o;return this.r+=-f*r*.02,this.r*=.7,Math.abs(r)}return 0}};var re=[{id:"kaze",name:"KAZE RS",tag:"\u042F\u043F\u043E\u043D\u0441\u043A\u043E\u0435 \u0434\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435. \u041B\u0435\u0433\u043A\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043D\u043E\u0441 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u0443\u0433\u043E\u043B.",colors:["#e8e8e8","#d7263d","#1b98e0","#f4d35e","#2e2e2e","#7ae582"],hp:300,mass:1180,torque:330,redline:8e3,idle:900,peakAt:.72,cylinders:4,vmax:265,gears:[3.3,2.15,1.55,1.18,.95,.78],finalDrive:4.1,wheelRadius:.31,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.48,muFront:1.12,muRear:1,tireB:9,tireC:1.5,steerMax:.62,steerFade:26,brakeForce:13e3,drag:.329,downforce:.2,yawDamp:.5,body:{L:4.45,W:1.72,H:1.3,track:1.48,wheelF:1.3,wheelR:-1.22,upper:[[2.22,.36],[2.26,.56],[2.12,.69],[1.2,.8],[.55,.85],[-1.3,.88],[-1.75,.92],[-2.18,.9],[-2.25,.62],[-2.22,.36]],cabin:[[.52,.84],[-.15,1.3],[-.95,1.29],[-1.58,.9]],extras:["popups","ducktail"]}},{id:"bulldog",name:"BULLDOG V8",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043C\u0430\u0441\u043B\u043A\u0430\u0440",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0437\u0430\u0434. \u0414\u044B\u043C\u0438\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435.",colors:["#f25c05","#111111","#0b3d91","#c1121f","#ffd166","#ffffff"],hp:510,mass:1560,torque:620,redline:6500,idle:750,peakAt:.55,cylinders:8,vmax:285,gears:[2.9,1.95,1.4,1.05,.774],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.8,frontWeight:.55,cgHeight:.52,muFront:1.08,muRear:.98,tireB:8.5,tireC:1.5,steerMax:.58,steerFade:24,brakeForce:15e3,drag:.395,downforce:.15,yawDamp:.55,body:{L:4.85,W:1.92,H:1.36,track:1.62,wheelF:1.5,wheelR:-1.3,upper:[[2.4,.38],[2.43,.7],[2.3,.82],[.7,.92],[.5,.93],[-1.6,.96],[-2.3,.99],[-2.42,.9],[-2.43,.45],[-2.4,.38]],cabin:[[.48,.92],[-.3,1.34],[-1,1.33],[-1.72,.95]],extras:["scoop","stripes"]}},{id:"veloce",name:"VELOCE GT",tag:"\u0421\u0440\u0435\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u044B\u0439 \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0438\u0436\u0438\u043C\u043D\u0430\u044F \u0441\u0438\u043B\u0430. \u0414\u0435\u0440\u0436\u0438\u0442 \u0434\u043E\u0440\u043E\u0433\u0443 \u043A\u0430\u043A \u043D\u0430 \u0440\u0435\u043B\u044C\u0441\u0430\u0445.",colors:["#e63946","#ffbe0b","#06d6a0","#3a86ff","#ffffff","#8338ec"],hp:640,mass:1420,torque:680,redline:8500,idle:1e3,peakAt:.75,cylinders:10,vmax:345,gears:[3.1,2.2,1.65,1.3,1.05,.86,.72],finalDrive:3.6,wheelRadius:.34,drive:"RWD",wheelbase:2.65,frontWeight:.42,cgHeight:.4,muFront:1.28,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:19e3,drag:.36,downforce:1.1,yawDamp:.8,body:{L:4.55,W:1.98,H:1.14,track:1.68,wheelF:1.38,wheelR:-1.27,upper:[[2.26,.3],[2.3,.46],[1.4,.62],[.9,.7],[-1.9,.95],[-2.26,.96],[-2.28,.4],[-2.25,.3]],cabin:[[.9,.69],[0,1.12],[-.6,1.12],[-1.9,.94]],extras:["wing","intakes"]}},{id:"tundra",name:"TUNDRA R",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A",desc:"\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0431\u0430\u0437\u0430. \u041A\u043E\u0440\u043E\u043B\u044C \u0441\u043D\u0435\u0433\u0430 \u0438 \u0440\u0435\u0437\u043A\u0438\u0445 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432.",colors:["#0077b6","#ffffff","#e76f51","#2a9d8f","#f9c74f","#1d1d1d"],hp:350,mass:1300,torque:420,redline:7500,idle:900,peakAt:.6,cylinders:4,vmax:270,gears:[3,2.05,1.5,1.15,.9,.74],finalDrive:4.3,wheelRadius:.32,drive:"AWD",awdFront:.4,wheelbase:2.5,frontWeight:.56,cgHeight:.52,muFront:1.18,muRear:1.08,tireB:8.5,tireC:1.45,steerMax:.62,steerFade:24,brakeForce:14500,drag:.354,downforce:.35,yawDamp:.6,body:{L:4.05,W:1.8,H:1.46,track:1.55,wheelF:1.28,wheelR:-1.22,ride:.05,upper:[[2,.4],[2.03,.62],[1.86,.78],[1,.88],[.75,.9],[-1.9,.95],[-2.02,.9],[-2.03,.42],[-2,.4]],cabin:[[.73,.9],[.05,1.42],[-1.78,1.42],[-1.96,.95]],extras:["roofscoop","rallylights","mudflaps","roofwing"]}},{id:"ronin",name:"RONIN 34",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C",desc:"\u0422\u0443\u0440\u0431\u043E-\u043C\u043E\u0442\u043E\u0440 \u0438 \u0443\u043C\u043D\u044B\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u043F\u043E\u0441\u043B\u0443\u0448\u043D\u044B\u0439 \u0432 \u043B\u044E\u0431\u043E\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435.",colors:["#5e60ce","#c0c0c0","#101010","#d62828","#ffffff","#2b9348"],hp:520,mass:1480,torque:560,redline:8e3,idle:900,peakAt:.65,cylinders:6,vmax:300,gears:[3.2,2.1,1.55,1.2,.97,.8],finalDrive:3.9,wheelRadius:.33,drive:"AWD",awdFront:.3,wheelbase:2.66,frontWeight:.54,cgHeight:.47,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.58,steerFade:27,brakeForce:17e3,drag:.4,downforce:.6,yawDamp:.65,body:{L:4.6,W:1.86,H:1.34,track:1.58,wheelF:1.38,wheelR:-1.28,upper:[[2.3,.36],[2.33,.62],[2.2,.76],[.8,.86],[.6,.88],[-1.5,.9],[-2.2,1],[-2.31,.95],[-2.32,.4],[-2.3,.36]],cabin:[[.58,.88],[-.1,1.34],[-1,1.33],[-1.62,.92]],extras:["wing","roundtails"]}},{id:"vanta",name:"VANTA GTR",tag:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u0443\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0433\u043E\u043D\u044C",desc:"\u0421\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u043E\u0435 \u0433\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0441\u0438\u043D\u0438\u043C\u0438 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u2014 \u043E\u0431\u0440\u0430\u0437 \xAB\u0441\u0430\u043C\u043E\u0439 \u0440\u0430\u0437\u044B\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u043E\u0439\xBB \u043C\u0430\u0448\u0438\u043D\u044B. \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0438 \u0446\u0435\u043F\u043A\u043E\u0435.",colors:["#c9ced6","#1d3f8f","#111111","#e8e8e8","#b31b1b","#f2b400"],hp:470,mass:1350,torque:480,redline:8500,idle:900,peakAt:.72,cylinders:6,vmax:295,gears:[3.2,2.2,1.6,1.25,1,.84],finalDrive:3.9,wheelRadius:.33,drive:"RWD",wheelbase:2.73,frontWeight:.5,cgHeight:.46,muFront:1.2,muRear:1.12,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:28,brakeForce:17e3,drag:.4,downforce:.55,yawDamp:.65,body:{L:4.5,W:1.9,H:1.34,track:1.6,wheelF:1.4,wheelR:-1.33,upper:[[2.25,.34],[2.28,.6],[2.1,.74],[.8,.84],[.62,.86],[-1.45,.9],[-2.1,.96],[-2.25,.92],[-2.26,.4],[-2.24,.34]],cabin:[[.6,.86],[-.1,1.34],[-1.05,1.33],[-1.55,.93]],extras:["wing","stripes"]}},{id:"kitsune",name:"KITSUNE RX",tag:"\u0420\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0438\u0437 \u0430\u043D\u0434\u0435\u0433\u0440\u0430\u0443\u043D\u0434\u0430",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u043D\u0438\u0437\u043A\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u0440\u0435\u0441\u043D\u0438\u0446\u0430\u043C\u0438\xBB \u0438 \u0440\u043E\u0442\u043E\u0440\u043D\u044B\u043C \u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0434\u043E 9000 \u043E\u0431/\u043C\u0438\u043D. \u041E\u0431\u043E\u0436\u0430\u0435\u0442 \u0434\u0440\u0438\u0444\u0442.",colors:["#f2c500","#e8e8e8","#d7263d","#3a0ca3","#101010","#00b4d8"],hp:320,mass:1240,torque:320,redline:9e3,idle:1e3,peakAt:.8,cylinders:4,vmax:280,gears:[3.4,2.2,1.6,1.2,.96,.8],finalDrive:4.3,wheelRadius:.31,drive:"RWD",wheelbase:2.43,frontWeight:.5,cgHeight:.44,muFront:1.15,muRear:1.02,tireB:9,tireC:1.5,steerMax:.64,steerFade:26,brakeForce:13500,drag:.313,downforce:.25,yawDamp:.5,body:{L:4.3,W:1.76,H:1.2,track:1.48,wheelF:1.25,wheelR:-1.18,upper:[[2.15,.33],[2.18,.5],[1.9,.62],[.9,.74],[.55,.78],[-1.5,.86],[-2.05,.88],[-2.15,.62],[-2.14,.34]],cabin:[[.52,.78],[-.2,1.2],[-.8,1.2],[-1.6,.87]],extras:["popups","ducktail"]}},{id:"tora",name:"TORA MK4",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u0440\u044B\u043B\u043E\u043C",desc:"\u041F\u043B\u0430\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u0440\u044F\u0434\u043D\u0430\u044F \xAB\u0448\u0435\u0441\u0442\u0451\u0440\u043A\u0430\xBB \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439 \u0438 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D.",colors:["#ff6b00","#f2f2f2","#111111","#c1121f","#2d6a4f","#4361ee"],hp:560,mass:1460,torque:620,redline:7200,idle:850,peakAt:.62,cylinders:6,vmax:295,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.7,wheelRadius:.34,drive:"RWD",wheelbase:2.55,frontWeight:.53,cgHeight:.47,muFront:1.16,muRear:1.06,tireB:9,tireC:1.5,steerMax:.58,steerFade:26,brakeForce:16500,drag:.42,downforce:.45,yawDamp:.6,body:{L:4.5,W:1.82,H:1.28,track:1.56,wheelF:1.32,wheelR:-1.23,upper:[[2.25,.34],[2.28,.55],[2.05,.68],[.7,.8],[.5,.82],[-1.4,.88],[-2.1,.92],[-2.25,.7],[-2.24,.36]],cabin:[[.48,.82],[-.25,1.26],[-.95,1.25],[-1.5,.9]],extras:["wing","roundtails"]}},{id:"toro",name:"TORO V12",tag:"\u0421\u0443\u043F\u0435\u0440\u043A\u0430\u0440-\u043A\u043B\u0438\u043D",desc:"\u041E\u0441\u0442\u0440\u044B\u0439 \u043A\u043B\u0438\u043D \u0441 V12 \u0437\u0430 \u0441\u043F\u0438\u043D\u043E\u0439 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0421\u0430\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435.",colors:["#9bd600","#ff9f1c","#ffdd00","#111111","#e5e5e5","#7209b7"],hp:740,mass:1550,torque:720,redline:8700,idle:1e3,peakAt:.78,cylinders:12,vmax:360,gears:[3.1,2.25,1.7,1.35,1.1,.9,.76],finalDrive:3.5,wheelRadius:.35,drive:"AWD",awdFront:.3,wheelbase:2.7,frontWeight:.43,cgHeight:.42,muFront:1.3,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:2e4,drag:.36,downforce:1.2,yawDamp:.8,body:{L:4.6,W:2,H:1.12,track:1.7,wheelF:1.42,wheelR:-1.28,upper:[[2.3,.3],[2.32,.42],[1.2,.64],[.75,.7],[-1.95,.92],[-2.3,.9],[-2.31,.38],[-2.28,.3]],cabin:[[.75,.69],[-.15,1.1],[-.7,1.1],[-1.95,.9]],extras:["intakes","wing"]}},{id:"stutt",name:"STUTT 9",tag:"\u0417\u0430\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u0441\u043F\u043E\u0440\u0442\u043A\u0443\u043F\u0435",desc:"\u041A\u0440\u0443\u0433\u043B\u044B\u0435 \u0444\u0430\u0440\u044B, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u043C\u043E\u0442\u043E\u0440 \u0441\u0437\u0430\u0434\u0438. \u041E\u0442\u043B\u0438\u0447\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442 \u0438 \u0440\u0435\u0437\u043A\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442.",colors:["#e9e4d8","#1b263b","#d00000","#fca311","#6a994e","#000000"],hp:450,mass:1420,torque:500,redline:8400,idle:900,peakAt:.74,cylinders:6,vmax:300,gears:[3.3,2.15,1.6,1.25,1.02,.86,.72],finalDrive:3.6,wheelRadius:.33,drive:"RWD",wheelbase:2.45,frontWeight:.39,cgHeight:.45,muFront:1.18,muRear:1.2,tireB:9.5,tireC:1.45,steerMax:.6,steerFade:28,brakeForce:18500,drag:.4,downforce:.4,yawDamp:.65,body:{L:4.35,W:1.85,H:1.28,track:1.56,wheelF:1.3,wheelR:-1.15,upper:[[2.17,.33],[2.2,.52],[2,.64],[1.1,.74],[.62,.8],[-1.2,.95],[-1.9,.9],[-2.15,.72],[-2.16,.36]],cabin:[[.6,.8],[-.05,1.26],[-.55,1.28],[-1.7,.92]],extras:["ducktail","roundlights"]}},{id:"shiro",name:"SHIRO 86",tag:"\u041B\u0451\u0433\u043A\u0438\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A 80-\u0445",desc:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u043C\u0438\u0433\u0430\u043B\u043A\u0430\u043C\u0438\xBB. \u041C\u043E\u0442\u043E\u0440 \u0441\u043B\u0430\u0431\u044B\u0439, \u0437\u0430\u0442\u043E \u043C\u0430\u0448\u0438\u043D\u0430 \u043B\u0451\u0433\u043A\u0430\u044F \u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u0442 \u0432 \u0437\u0430\u043D\u043E\u0441\u0435.",colors:["#f4f4f4","#111111","#c1121f","#2b59c3","#ffbe0b","#6c757d"],hp:180,mass:960,torque:185,redline:7800,idle:900,peakAt:.75,cylinders:4,vmax:210,gears:[3.6,2.3,1.6,1.2,.911],finalDrive:4.3,wheelRadius:.3,drive:"RWD",wheelbase:2.4,frontWeight:.53,cgHeight:.48,muFront:1.1,muRear:.98,tireB:9,tireC:1.5,steerMax:.66,steerFade:24,brakeForce:11e3,drag:.318,downforce:.1,yawDamp:.45,body:{L:4.2,W:1.66,H:1.33,track:1.42,wheelF:1.2,wheelR:-1.2,upper:[[2.1,.36],[2.12,.56],[2,.66],[1,.74],[.6,.78],[-1.7,.86],[-2.05,.86],[-2.1,.6],[-2.08,.36]],cabin:[[.58,.78],[-.1,1.3],[-1.3,1.3],[-2,.9]],extras:["popups"]}},{id:"hayate",name:"HAYATE EVO",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D",desc:"\u0427\u0435\u0442\u044B\u0440\u0451\u0445\u0434\u0432\u0435\u0440\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439, \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E\u043C. \u0426\u0435\u043F\u043A\u0438\u0439, \u0440\u0435\u0437\u043A\u0438\u0439, \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0430\u0437\u0433\u043E\u043D\u044F\u0435\u0442\u0441\u044F \u0438\u0437 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.",colors:["#e9ecef","#d00000","#1d3557","#ffd60a","#111111","#2a9d8f"],hp:415,mass:1390,torque:470,redline:7500,idle:900,peakAt:.6,cylinders:4,vmax:285,gears:[3,2,1.48,1.14,.9,.719],finalDrive:4.2,wheelRadius:.32,drive:"AWD",awdFront:.38,wheelbase:2.62,frontWeight:.56,cgHeight:.5,muFront:1.2,muRear:1.12,tireB:9,tireC:1.45,steerMax:.62,steerFade:25,brakeForce:15500,drag:.351,downforce:.5,yawDamp:.62,body:{L:4.5,W:1.81,H:1.45,track:1.55,wheelF:1.36,wheelR:-1.26,upper:[[2.25,.38],[2.27,.62],[2.1,.76],[.9,.86],[.65,.88],[-1.45,.92],[-2.15,.98],[-2.25,.9],[-2.26,.42],[-2.24,.38]],cabin:[[.63,.88],[-.05,1.42],[-1.15,1.41],[-1.6,.94]],extras:["wing","mudflaps","rallylights"]}},{id:"sakura",name:"SAKURA S",tag:"\u0414\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F",desc:"\u041D\u0438\u0437\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0442\u0443\u0440\u0431\u043E-\xAB\u0447\u0435\u0442\u0432\u0451\u0440\u043A\u043E\u0439\xBB. \u0421\u0430\u043C\u0430\u044F \xAB\u0434\u0440\u0438\u0444\u0442\u043E\u0432\u0430\u044F\xBB \u043C\u0430\u0448\u0438\u043D\u0430: \u043E\u0445\u043E\u0442\u043D\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0443\u0433\u043E\u043B.",colors:["#ff8fab","#f8f9fa","#7209b7","#00b4d8","#212529","#fb8500"],hp:385,mass:1240,torque:420,redline:7800,idle:900,peakAt:.68,cylinders:4,vmax:285,gears:[3.25,2.1,1.5,1.15,.94,.78],finalDrive:4.1,wheelRadius:.32,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.46,muFront:1.16,muRear:.96,tireB:9,tireC:1.5,steerMax:.7,steerFade:24,brakeForce:14e3,drag:.315,downforce:.3,yawDamp:.45,body:{L:4.45,W:1.78,H:1.28,track:1.52,wheelF:1.32,wheelR:-1.22,upper:[[2.22,.34],[2.25,.55],[2.06,.68],[.9,.8],[.6,.83],[-1.4,.88],[-2.08,.94],[-2.22,.86],[-2.23,.4],[-2.21,.34]],cabin:[[.58,.83],[-.1,1.27],[-.95,1.26],[-1.55,.9]],extras:["wing"]}},{id:"stallion",name:"STALLION GT",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0444\u0430\u0441\u0442\u0431\u044D\u043A",desc:"\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u044B\u0439 V8. \u041C\u043E\u0449\u043D\u044B\u0439 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u2014 \u0434\u044B\u043C\u0438\u0442 \u043A\u043E\u043B\u0451\u0441\u0430\u043C\u0438 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 \u0438\u0437 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.",colors:["#0353a4","#d90429","#ffffff","#111111","#ffb703","#606c38"],hp:500,mass:1680,torque:560,redline:7400,idle:750,peakAt:.62,cylinders:8,vmax:290,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.72,frontWeight:.54,cgHeight:.52,muFront:1.1,muRear:1,tireB:8.5,tireC:1.5,steerMax:.6,steerFade:25,brakeForce:16e3,drag:.4,downforce:.2,yawDamp:.55,body:{L:4.8,W:1.92,H:1.36,track:1.62,wheelF:1.48,wheelR:-1.28,upper:[[2.4,.4],[2.42,.72],[2.3,.84],[.75,.94],[.55,.95],[-1.9,.98],[-2.32,1],[-2.4,.9],[-2.41,.45],[-2.38,.4]],cabin:[[.52,.94],[-.25,1.34],[-.85,1.33],[-2,.99]],extras:["scoop","stripes"]}},{id:"pixel",name:"PIXEL GTI",tag:"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434, \u0445\u043E\u0442-\u0445\u044D\u0442\u0447",desc:"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A \u0441 \u0442\u0443\u0440\u0431\u043E\u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0438 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u041D\u0435 \u0434\u0440\u0438\u0444\u0442\u0443\u0435\u0442, \u043D\u043E \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043F\u043A\u0438\u0439 \u0438 \u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u2014 \u043E\u0442\u043B\u0438\u0447\u0435\u043D \u0434\u043B\u044F \u0433\u043E\u043D\u043A\u0438.",colors:["#e63946","#f1faee","#1d3557","#adb5bd","#000000","#80ed99"],hp:275,mass:1250,torque:370,redline:6800,idle:850,peakAt:.5,cylinders:4,vmax:250,gears:[3.4,2.15,1.5,1.12,.9,.76],finalDrive:3.9,wheelRadius:.32,drive:"FWD",wheelbase:2.62,frontWeight:.61,cgHeight:.52,muFront:1.2,muRear:1.2,tireB:9,tireC:1.45,steerMax:.6,steerFade:25,brakeForce:14500,drag:.348,downforce:.25,yawDamp:.7,body:{L:4.2,W:1.79,H:1.45,track:1.54,wheelF:1.32,wheelR:-1.3,ride:.02,upper:[[2.1,.4],[2.12,.64],[1.95,.78],[1.1,.88],[.8,.9],[-1.9,.98],[-2.08,.95],[-2.1,.44],[-2.08,.4]],cabin:[[.78,.9],[.05,1.42],[-1.75,1.42],[-2,1]],extras:["roofwing"]}},{id:"estate",name:"ESTATE RS",tag:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B",desc:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B \u0441 \u0431\u0438\u0442\u0443\u0440\u0431\u043E V8 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0412\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u043A\u0440\u043E\u043C\u043D\u043E, \u0430 \u0435\u0434\u0435\u0442 \u043A\u0430\u043A \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440.",colors:["#495057","#f8f9fa","#003049","#9d0208","#2d6a4f","#000000"],hp:600,mass:1980,torque:800,redline:7e3,idle:800,peakAt:.55,cylinders:8,vmax:305,gears:[3.2,2.1,1.55,1.2,.97,.8,.67],finalDrive:3.4,wheelRadius:.35,drive:"AWD",awdFront:.35,wheelbase:2.93,frontWeight:.55,cgHeight:.54,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.56,steerFade:28,brakeForce:2e4,drag:.46,downforce:.35,yawDamp:.7,body:{L:4.9,W:1.9,H:1.45,track:1.64,wheelF:1.52,wheelR:-1.41,upper:[[2.45,.38],[2.47,.62],[2.3,.76],[1.2,.86],[.95,.88],[-2.2,.95],[-2.42,.92],[-2.45,.42],[-2.43,.38]],cabin:[[.92,.88],[.2,1.4],[-2.15,1.38],[-2.36,.96]],extras:["roundtails"]}},{id:"aurora",name:"AURORA X",tag:"\u0413\u0438\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u0413\u0438\u0431\u0440\u0438\u0434\u043D\u044B\u0439 \u0433\u0438\u043F\u0435\u0440\u043A\u0430\u0440: V8 \u043F\u043B\u044E\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440\u044B, \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0430\u044D\u0440\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430. \u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u043D \u0432 \u0438\u0433\u0440\u0435.",colors:["#00f5d4","#f15bb5","#fee440","#111111","#f8f9fa","#3a0ca3"],hp:900,mass:1520,torque:900,redline:9e3,idle:1e3,peakAt:.7,cylinders:8,vmax:395,gears:[3,2.2,1.7,1.38,1.14,.95,.8],finalDrive:3.4,wheelRadius:.35,drive:"AWD",awdFront:.35,wheelbase:2.7,frontWeight:.42,cgHeight:.4,muFront:1.32,muRear:1.34,tireB:10,tireC:1.45,steerMax:.55,steerFade:31,brakeForce:21e3,drag:.34,downforce:1.3,yawDamp:.85,body:{L:4.65,W:2.02,H:1.1,track:1.72,wheelF:1.42,wheelR:-1.3,upper:[[2.3,.28],[2.33,.4],[1.3,.6],[.85,.66],[-1.9,.9],[-2.3,.88],[-2.32,.36],[-2.28,.28]],cabin:[[.85,.65],[-.05,1.08],[-.6,1.08],[-1.9,.88]],extras:["wing","intakes"]}},{id:"bars",name:"BARS 4x4",tag:"\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",desc:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u043E\u043B\u043D\u043E\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A \u0441 \u043B\u044E\u0441\u0442\u0440\u043E\u0439 \u0444\u0430\u0440. \u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u0432\u0430\u043B\u043A\u0438\u0439, \u0437\u0430\u0442\u043E \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0435\u0434\u0435\u0442 \u043F\u043E \u0441\u043D\u0435\u0433\u0443 \u0438 \u0431\u0435\u0437\u0434\u043E\u0440\u043E\u0436\u044C\u044E \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u043E\u0432.",colors:["#606c38","#f2e8cf","#bc6c25","#283618","#111111","#e5e5e5"],hp:445,mass:2150,torque:650,redline:6200,idle:700,peakAt:.5,cylinders:8,vmax:270,gears:[3.5,2.2,1.5,1.15,.92,.75],finalDrive:3.9,wheelRadius:.38,drive:"AWD",awdFront:.45,wheelbase:2.85,frontWeight:.55,cgHeight:.66,muFront:1.14,muRear:1.1,tireB:8,tireC:1.45,steerMax:.6,steerFade:22,brakeForce:19e3,drag:.483,downforce:.05,yawDamp:.7,body:{L:4.5,W:1.94,H:1.78,track:1.66,wheelF:1.45,wheelR:-1.4,ride:.12,upper:[[2.22,.6],[2.24,.9],[2.08,1.02],[1.05,1.08],[.8,1.1],[-2.1,1.14],[-2.22,1.1],[-2.24,.62],[-2.22,.6]],cabin:[[.78,1.1],[.2,1.74],[-1.95,1.74],[-2.16,1.14]],extras:["rallylights","mudflaps"]}},{id:"baron",name:"BARON M",tag:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0435\u0434\u0430\u043D",desc:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D \u0441 V8. \u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u0441\u043D\u0430\u0440\u0443\u0436\u0438, \u0437\u043B\u043E\u0439 \u0432\u043D\u0443\u0442\u0440\u0438 \u2014 \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u0438 \u0434\u043B\u0438\u043D\u043D\u043E \u0434\u0440\u0438\u0444\u0442\u0443\u0435\u0442.",colors:["#14213d","#e5e5e5","#000000","#3d5a80","#6a040f","#adb5bd"],hp:620,mass:1850,torque:750,redline:7200,idle:750,peakAt:.6,cylinders:8,vmax:305,gears:[3.4,2.2,1.6,1.25,1,.83,.7],finalDrive:3.3,wheelRadius:.35,drive:"RWD",wheelbase:2.98,frontWeight:.53,cgHeight:.5,muFront:1.16,muRear:1.04,tireB:9,tireC:1.5,steerMax:.58,steerFade:27,brakeForce:19500,drag:.44,downforce:.3,yawDamp:.6,body:{L:4.95,W:1.9,H:1.45,track:1.62,wheelF:1.55,wheelR:-1.43,upper:[[2.47,.38],[2.49,.63],[2.32,.77],[1,.88],[.75,.9],[-1.55,.95],[-2.3,.99],[-2.47,.9],[-2.48,.42],[-2.45,.38]],cabin:[[.73,.9],[0,1.42],[-1.3,1.41],[-1.85,.96]],extras:["ducktail"]}},{id:"mamba",name:"MAMBA ACR",tag:"\u0422\u0440\u0435\u043A\u043E\u0432\u044B\u0439 \u043C\u043E\u043D\u0441\u0442\u0440 \u0441 V10",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442, V10 \u0438 \u0442\u0440\u0435\u043A\u043E\u0432\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0411\u0435\u0437\u0443\u043C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0445 \u043A\u043E\u043B\u0451\u0441\u0430\u0445 \u2014 \u043D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u0430\u044F \u043F\u0435\u0434\u0430\u043B\u044C \u0433\u0430\u0437\u0430.",colors:["#d00000","#1b1b1e","#f8f9fa","#3c096c","#ffba08","#00a6fb"],hp:660,mass:1520,torque:810,redline:6800,idle:800,peakAt:.6,cylinders:10,vmax:315,gears:[2.7,1.9,1.4,1.1,.9,.75],finalDrive:3.55,wheelRadius:.35,drive:"RWD",wheelbase:2.51,frontWeight:.5,cgHeight:.44,muFront:1.24,muRear:1.18,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:29,brakeForce:2e4,drag:.42,downforce:.9,yawDamp:.65,body:{L:4.5,W:1.95,H:1.22,track:1.68,wheelF:1.35,wheelR:-1.16,upper:[[2.25,.34],[2.28,.55],[2.1,.68],[.3,.8],[.1,.82],[-1.7,.9],[-2.2,.92],[-2.26,.6],[-2.25,.36]],cabin:[[.1,.82],[-.5,1.2],[-1.1,1.2],[-1.75,.9]],extras:["wing","stripes","scoop"]}},{id:"kei",name:"KEI 660",tag:"\u041C\u0438\u043A\u0440\u043E-\u043A\u0430\u0440, \u0441\u0430\u043C\u044B\u0439 \u0441\u043B\u0430\u0431\u044B\u0439",desc:"\u041A\u0440\u043E\u0448\u0435\u0447\u043D\u0430\u044F \xAB\u043A\u043E\u0440\u043E\u0431\u043E\u0447\u043A\u0430\xBB \u0441 \u043C\u043E\u0442\u043E\u0440\u043E\u043C 660 \u043A\u0443\u0431\u043E\u0432. \u0421\u0430\u043C\u0430\u044F \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435 \u2014 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043B\u044E\u0431\u0438\u0442 \u0447\u0435\u043B\u043B\u0435\u043D\u0434\u0436.",colors:["#f1faee","#a8dadc","#ffb703","#e76f51","#90be6d","#264653"],hp:52,mass:720,torque:80,redline:7500,idle:1e3,peakAt:.7,cylinders:3,vmax:135,gears:[3.8,2.2,1.5,1.1,.88],finalDrive:4.4,wheelRadius:.27,drive:"FWD",wheelbase:2.36,frontWeight:.6,cgHeight:.56,muFront:1.04,muRear:1.06,tireB:8.5,tireC:1.45,steerMax:.64,steerFade:22,brakeForce:8500,drag:.52,downforce:0,yawDamp:.7,body:{L:3.4,W:1.48,H:1.62,track:1.3,wheelF:1.12,wheelR:-1.14,upper:[[1.7,.34],[1.72,.6],[1.6,.72],[1.1,.8],[.9,.82],[-1.6,.86],[-1.7,.84],[-1.72,.36],[-1.7,.34]],cabin:[[.88,.82],[.4,1.56],[-1.58,1.57],[-1.68,.86]],extras:["roundlights"]}},{id:"zhiga",name:"ZHIGA 07",tag:"\u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0439 \u0441\u0435\u0434\u0430\u043D",desc:"\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D 80-\u0445 \u0441 \u0445\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0431\u0430\u043C\u043F\u0435\u0440\u0430\u043C\u0438. \u041C\u043E\u0442\u043E\u0440 \u0441\u043B\u0430\u0431\u044B\u0439, \u043D\u043E \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u043C\u044F\u0433\u043A\u0430\u044F \u043F\u043E\u0434\u0432\u0435\u0441\u043A\u0430 \u2014 \u0434\u0440\u0438\u0444\u0442\u0438\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.",colors:["#f2f2f2","#9d0208","#14213d","#588157","#e9c46a","#2b2d42"],hp:80,mass:1030,torque:120,redline:6e3,idle:800,peakAt:.6,cylinders:4,vmax:145,gears:[3.67,2.1,1.36,1,.82],finalDrive:4.1,wheelRadius:.3,drive:"RWD",wheelbase:2.42,frontWeight:.53,cgHeight:.54,muFront:1.04,muRear:.93,tireB:8.5,tireC:1.5,steerMax:.68,steerFade:22,brakeForce:9500,drag:.42,downforce:0,yawDamp:.45,body:{L:4.15,W:1.62,H:1.44,track:1.38,wheelF:1.22,wheelR:-1.2,upper:[[2.07,.38],[2.09,.66],[2,.76],[.95,.8],[.8,.82],[-1.4,.84],[-2.05,.84],[-2.08,.4],[-2.06,.38]],cabin:[[.78,.82],[.25,1.4],[-1,1.4],[-1.45,.85]],extras:[]}},{id:"taiga",name:"TAIGA 4x4",tag:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",desc:"\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0442\u0440\u0451\u0445\u0434\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0435\u0437\u0434\u0435\u0445\u043E\u0434. \u041C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0439, \u0437\u0430\u0442\u043E \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u043F\u043E\u0434\u0432\u0435\u0441\u043A\u0430 \u2014 \u0435\u0434\u0435\u0442 \u0433\u0434\u0435 \u0443\u0433\u043E\u0434\u043D\u043E.",colors:["#386641","#f2e8cf","#bc4749","#0077b6","#ffb703","#6c584c"],hp:85,mass:1210,torque:130,redline:5400,idle:750,peakAt:.55,cylinders:4,vmax:140,gears:[3.24,1.99,1.29,1,.8],finalDrive:4.3,wheelRadius:.36,drive:"AWD",awdFront:.45,wheelbase:2.2,frontWeight:.55,cgHeight:.64,muFront:1.06,muRear:1.04,tireB:8,tireC:1.45,steerMax:.62,steerFade:20,brakeForce:11e3,drag:.52,downforce:0,yawDamp:.7,body:{L:3.75,W:1.68,H:1.7,track:1.44,wheelF:1.12,wheelR:-1.08,ride:.12,upper:[[1.86,.58],[1.88,.88],[1.75,.98],[.95,1.02],[.75,1.04],[-1.8,1.07],[-1.87,1.02],[-1.88,.6],[-1.86,.58]],cabin:[[.72,1.04],[.22,1.64],[-1.74,1.64],[-1.84,1.07]],extras:["roundlights","mudflaps"]}},{id:"rossa",name:"ROSSA SPIDER",tag:"\u041B\u0451\u0433\u043A\u0438\u0439 \u0440\u043E\u0434\u0441\u0442\u0435\u0440",desc:"\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0434\u0432\u0443\u0445\u043C\u0435\u0441\u0442\u043D\u044B\u0439 \u0440\u043E\u0434\u0441\u0442\u0435\u0440 \u0441 \u0434\u043B\u0438\u043D\u043D\u044B\u043C \u043A\u0430\u043F\u043E\u0442\u043E\u043C. \u041B\u0451\u0433\u043A\u0438\u0439, \u0442\u043E\u0447\u043D\u044B\u0439 \u0440\u0443\u043B\u044C, \u043F\u043E\u0441\u043B\u0443\u0448\u043D\u044B\u0439 \u0437\u0430\u043D\u043E\u0441.",colors:["#c1121f","#fdf0d5","#003049","#ffd60a","#2d6a4f","#111111"],hp:210,mass:1e3,torque:230,redline:7800,idle:900,peakAt:.72,cylinders:4,vmax:215,gears:[3.5,2.2,1.6,1.25,1,.82],finalDrive:4.1,wheelRadius:.31,drive:"RWD",wheelbase:2.35,frontWeight:.51,cgHeight:.44,muFront:1.13,muRear:1.02,tireB:9,tireC:1.5,steerMax:.66,steerFade:25,brakeForce:12500,drag:.4,downforce:.15,yawDamp:.5,body:{L:4,W:1.73,H:1.2,track:1.48,wheelF:1.2,wheelR:-1.15,upper:[[2,.32],[2.03,.5],[1.85,.62],[.4,.76],[-1.6,.82],[-1.98,.8],[-2,.4],[-1.98,.32]],cabin:[[.36,.77],[-.05,1.08],[-.3,1.08],[-.4,.78]],extras:["ducktail","roundtails"]}},{id:"rancho",name:"RANCHO V8",tag:"\u041F\u0438\u043A\u0430\u043F",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043F\u0438\u043A\u0430\u043F \u0441 V8. \u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u043D\u0435\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043B\u0438\u0432\u044B\u0439, \u043D\u043E \u043C\u043E\u0449\u043D\u044B\u0439 \u2014 \u0438 \u043E\u0447\u0435\u043D\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u043D\u043E \u0434\u044B\u043C\u0438\u0442 \u0437\u0430\u0434\u043D\u0438\u043C\u0438 \u043A\u043E\u043B\u0451\u0441\u0430\u043C\u0438.",colors:["#1d3557","#e63946","#f1faee","#111111","#a3a380","#fb8500"],hp:400,mass:2100,torque:610,redline:6e3,idle:700,peakAt:.5,cylinders:8,vmax:235,gears:[3.2,2.1,1.5,1.15,.9,.72],finalDrive:3.73,wheelRadius:.39,drive:"RWD",wheelbase:3.3,frontWeight:.57,cgHeight:.68,muFront:1.08,muRear:.98,tireB:8,tireC:1.5,steerMax:.56,steerFade:22,brakeForce:19e3,drag:.62,downforce:0,yawDamp:.6,body:{L:5.4,W:2,H:1.88,track:1.7,wheelF:1.72,wheelR:-1.58,ride:.1,upper:[[2.7,.6],[2.72,.95],[2.55,1.08],[1.3,1.14],[1.1,1.15],[-2.6,1.12],[-2.72,1.1],[-2.72,.62],[-2.7,.6]],cabin:[[1.05,1.15],[.5,1.84],[-.8,1.84],[-.9,1.15]],extras:["rallylights","mudflaps","stripes"]}},{id:"volt",name:"VOLT E",tag:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0435\u0434\u0430\u043D",desc:"\u0422\u0438\u0445\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E-\u0441\u0435\u0434\u0430\u043D \u0441 \u0434\u0432\u0443\u043C\u044F \u043C\u043E\u0442\u043E\u0440\u0430\u043C\u0438. \u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u043D \u0441 \u043C\u0435\u0441\u0442\u0430, \u043D\u043E \u043D\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0443\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440\u0430\u043C.",colors:["#f8f9fa","#212529","#3a86ff","#d00000","#adb5bd","#2ec4b6"],hp:670,mass:2150,torque:1e3,redline:15e3,idle:1e3,peakAt:.3,cylinders:12,vmax:315,gears:[2.4,1.6],finalDrive:3.9,wheelRadius:.35,drive:"AWD",awdFront:.45,wheelbase:2.96,frontWeight:.5,cgHeight:.42,muFront:1.2,muRear:1.18,tireB:9,tireC:1.45,steerMax:.56,steerFade:27,brakeForce:2e4,drag:.4,downforce:.4,yawDamp:.75,body:{L:4.95,W:1.96,H:1.42,track:1.66,wheelF:1.5,wheelR:-1.46,upper:[[2.47,.36],[2.5,.56],[2.3,.7],[1.2,.84],[.9,.86],[-1.9,.92],[-2.42,.9],[-2.48,.4],[-2.46,.36]],cabin:[[.88,.86],[0,1.4],[-1,1.4],[-2.1,.92]],extras:[]}},{id:"gruppo",name:"GRUPPO B",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u0430\u044F \u043B\u0435\u0433\u0435\u043D\u0434\u0430",desc:"\u0411\u0435\u0437\u0443\u043C\u043D\u044B\u0439 \u0440\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u043C\u043E\u043D\u0441\u0442\u0440 80-\u0445: \u043B\u0451\u0433\u043A\u0438\u0439 \u043A\u0443\u0437\u043E\u0432, \u0442\u0443\u0440\u0431\u043E \u0438 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D \u0438 \u0446\u0435\u043F\u043A\u043E\u0441\u0442\u044C \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445.",colors:["#ffffff","#e63946","#003566","#ffc300","#2b9348","#111111"],hp:500,mass:1100,torque:520,redline:8e3,idle:1e3,peakAt:.65,cylinders:4,vmax:250,gears:[3,2,1.48,1.15,.92],finalDrive:4.2,wheelRadius:.32,drive:"AWD",awdFront:.35,wheelbase:2.45,frontWeight:.5,cgHeight:.5,muFront:1.2,muRear:1.13,tireB:9,tireC:1.45,steerMax:.64,steerFade:25,brakeForce:15500,drag:.5,downforce:.45,yawDamp:.6,body:{L:3.95,W:1.84,H:1.38,track:1.58,wheelF:1.22,wheelR:-1.22,ride:.04,upper:[[1.97,.38],[2,.6],[1.84,.74],[.95,.84],[.75,.86],[-1.85,.92],[-1.96,.88],[-1.98,.42],[-1.96,.38]],cabin:[[.73,.86],[.1,1.34],[-1.25,1.34],[-1.7,.92]],extras:["roofscoop","rallylights","mudflaps","wing"]}},{id:"kaiju",name:"KAIJU DR",tag:"\u0414\u0440\u0438\u0444\u0442-\u043C\u043E\u043D\u0441\u0442\u0440",desc:"\u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u043A\u0443\u0437\u043E\u0432, 760 \u0441\u0438\u043B \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0435 \u043A\u043E\u043B\u0451\u0441\u0430 \u0438 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0443\u0433\u043E\u043B \u0440\u0443\u043B\u044F. \u0421\u043E\u0437\u0434\u0430\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0434\u0440\u0438\u0444\u0442\u0430 \u2014 \u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0430\u043C\u044B\u0435 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0443\u0433\u043B\u044B.",colors:["#7209b7","#f72585","#4cc9f0","#111111","#f8f9fa","#ffbe0b"],hp:760,mass:1300,torque:780,redline:8500,idle:1e3,peakAt:.68,cylinders:6,vmax:330,gears:[3,2.1,1.55,1.2,.98,.82],finalDrive:3.9,wheelRadius:.33,drive:"RWD",wheelbase:2.55,frontWeight:.52,cgHeight:.44,muFront:1.22,muRear:1,tireB:9,tireC:1.5,steerMax:.78,steerFade:24,brakeForce:17e3,drag:.42,downforce:.4,yawDamp:.4,body:{L:4.55,W:1.98,H:1.26,track:1.68,wheelF:1.36,wheelR:-1.22,upper:[[2.27,.32],[2.3,.52],[2.1,.66],[.9,.78],[.6,.81],[-1.4,.87],[-2.12,.93],[-2.27,.86],[-2.28,.38],[-2.26,.32]],cabin:[[.58,.81],[-.1,1.24],[-.95,1.23],[-1.55,.88]],extras:["wing","intakes"]}},{id:"proto",name:"PROTO LM",tag:"\u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \xAB24 \u0447\u0430\u0441\u0430\xBB",desc:"\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u0433\u043E\u043D\u043E\u043A \u043D\u0430 \u0432\u044B\u043D\u043E\u0441\u043B\u0438\u0432\u043E\u0441\u0442\u044C. \u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u043F\u0440\u0438\u0436\u0438\u043C\u043D\u0430\u044F \u0441\u0438\u043B\u0430: \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445 \u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u043E\u0440\u043E\u0433\u0443 \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0445.",colors:["#06d6a0","#ef476f","#ffd166","#118ab2","#f8f9fa","#073b4c"],hp:850,mass:1100,torque:650,redline:9500,idle:1200,peakAt:.78,cylinders:8,vmax:365,gears:[3,2.2,1.7,1.38,1.14,.95,.8],finalDrive:3.4,wheelRadius:.34,drive:"RWD",wheelbase:2.9,frontWeight:.44,cgHeight:.34,muFront:1.38,muRear:1.42,tireB:10,tireC:1.45,steerMax:.54,steerFade:32,brakeForce:22e3,drag:.33,downforce:2.2,yawDamp:.9,gripK:1,body:{L:4.8,W:2,H:1.06,track:1.72,wheelF:1.5,wheelR:-1.4,upper:[[2.4,.26],[2.42,.36],[1.4,.62],[.8,.7],[-1.9,.92],[-2.4,.92],[-2.42,.34],[-2.38,.26]],cabin:[[.8,.69],[.1,1.04],[-.7,1.04],[-1.4,.86]],extras:["wing","intakes"]}},{id:"zenith",name:"ZENITH W16",tag:"\u0413\u0438\u043F\u0435\u0440\u043A\u0430\u0440, \u0441\u0430\u043C\u044B\u0439 \u0441\u0438\u043B\u044C\u043D\u044B\u0439",desc:"1500 \u0441\u0438\u043B, \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 16 \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u043E\u0432. \u0421\u0430\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438 \u043C\u043E\u0449\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0438\u0433\u0440\u0435 \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 430 \u043A\u043C/\u0447.",colors:["#14213d","#fca311","#e5e5e5","#9d0208","#000000","#4361ee"],hp:1500,mass:1950,torque:1600,redline:7e3,idle:900,peakAt:.62,cylinders:16,vmax:450,gears:[2.6,1.9,1.45,1.17,.96,.8,.66],finalDrive:3.2,wheelRadius:.36,drive:"AWD",awdFront:.35,wheelbase:2.71,frontWeight:.44,cgHeight:.4,muFront:1.32,muRear:1.36,tireB:10,tireC:1.45,steerMax:.55,steerFade:32,brakeForce:24e3,drag:.31,downforce:1.2,yawDamp:.85,body:{L:4.55,W:2.04,H:1.2,track:1.74,wheelF:1.4,wheelR:-1.3,upper:[[2.27,.3],[2.3,.46],[2.1,.58],[.9,.7],[-1.6,.95],[-2.2,.95],[-2.28,.4],[-2.25,.3]],cabin:[[.9,.7],[0,1.18],[-.7,1.18],[-1.7,.94]],extras:["wing","intakes","roundtails"]}}];function Ld(i){let t=i.vmax?Math.min(1,i.vmax/450):Math.min(1,i.hp/i.mass/.47),e=Math.min(1,i.torque*i.gears[0]*i.finalDrive/i.wheelRadius/i.mass/22),n=Math.min(1,((i.muFront+i.muRear)/2-.9)/.45+i.downforce*.2),s=Math.min(1,Math.max(.15,(i.drive==="RWD"?.55:.25)+(i.muFront-i.muRear)*2.2+(i.torque/i.mass-.25)*.8));return{top:t,accel:e,handling:n,drift:s}}function Fi(i){let t=i.vmax||250;return t<200?"D":t<270?"C":t<300?"B":t<340?"A":"S"}function Pn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new pe,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Dd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let m=Dd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Dd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ue(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let v=h.getComponent(d,m);o.setComponent(d+u,m,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Ud(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,x=o.length;M<x;M++){let y=o[M],A=i.attributes[y];l[y]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let E=i.morphAttributes[y];E&&(c[y]||(c[y]=[]),E.forEach((T,I)=>{let k=new T.array.constructor(T.count*T.itemSize);c[y][I]=new T.constructor(k,T.itemSize,T.normalized)}))}let f=t*.5,m=Math.log10(1/t),v=Math.pow(10,m),p=f*v;for(let M=0;M<r;M++){let x=n?n.getX(M):M,y="";for(let A=0,E=o.length;A<E;A++){let T=o[A],I=i.getAttribute(T),k=I.itemSize;for(let _=0;_<k;_++)y+=`${~~(I[u[_]](x)*v+p)},`}if(y in e)h.push(e[y]);else{for(let A=0,E=o.length;A<E;A++){let T=o[A],I=i.getAttribute(T),k=i.morphAttributes[T],_=I.itemSize,S=l[T],H=c[T];for(let B=0;B<_;B++){let W=u[B],j=d[B];if(S[j](a,I[W](x)),k)for(let z=0,st=k.length;z<st;z++)H[z][j](a,k[z][W](x))}}e[y]=a,h.push(a),a++}}let g=i.clone();for(let M in i.attributes){let x=l[M];if(g.setAttribute(M,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),M in c)for(let y=0;y<c[M].length;y++){let A=c[M][y];g.morphAttributes[M][y]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return g.setIndex(h),g}var me=(i,t,e)=>i<t?t:i>e?e:i,Ch=(i,t,e)=>i+(t-i)*e,Ni=i=>i*i*(3-2*i);function Sn(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ao(i,t,e){let n=i*374761393+t*668265263+e*2147483647;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)/4294967296}function Fd(i,t,e=1){let n=Math.floor(i),s=Math.floor(t),r=Ni(i-n),a=Ni(t-s),o=Ao(n,s,e),l=Ao(n+1,s,e),c=Ao(n,s+1,e),h=Ao(n+1,s+1,e);return Ch(Ch(o,l,r),Ch(c,h,r),a)}function ls(i,t,e=1,n=4){let s=0,r=.5,a=1,o=0;for(let l=0;l<n;l++)s+=Fd(i*a,t*a,e+l*17)*r,o+=r,r*=.5,a*=2.03;return s/o}function Ph(i,t=1){return Fd(i,.5,t)}function le(i,t){let e=new bt(t),n=i.index?i.toNonIndexed():i,s=n.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=e.r,r[a*3+1]=e.g,r[a*3+2]=e.b;return n.setAttribute("color",new ue(r,3)),n.attributes.uv&&n.deleteAttribute("uv"),n}function fn(i,t,e,n={}){var o;let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let a=new dn(s);return a.colorSpace=Be,n.repeat&&(a.wrapS=a.wrapT=di),a.anisotropy=(o=n.aniso)!=null?o:4,a}function ni(i){i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*10%10);return`${t}:${String(e).padStart(2,"0")}.${n}`}var sn=[{id:"desert",name:"\u041A\u0430\u043D\u044C\u043E\u043D \xAB\u0417\u0430\u043A\u0430\u0442\xBB",tag:"\u041F\u0443\u0441\u0442\u044B\u043D\u044F",desc:"\u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u0430\u0441\u0444\u0430\u043B\u044C\u0442, \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u0441\u043A\u0430\u043B\u044B \u0438 \u043A\u0430\u043A\u0442\u0443\u0441\u044B. \u0414\u043B\u0438\u043D\u043D\u044B\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0443\u0433\u0438.",grip:1,night:!1,weather:null,sky:{top:4029641,horizon:16171659,bottom:15180650},fog:{color:15381898,near:120,far:700},sun:{color:16773334,intensity:2.8,dir:[.5,.75,-.4]},hemi:{sky:16771532,ground:10119749,intensity:1.1},ground:{near:14065766,far:12614213,hills:26},road:{asphalt:"#55504b",line:"#f2c230",edge:"#eeeeee",halfWidth:7.5,shoulder:1.6,shoulderColor:"#b98a5a"},barrier:"tires",track:{minR:40,maxR:170,straight:[50,180],hill:9},props:["cactus","rock","mesa","bush"]},{id:"snow",name:"\u041F\u0435\u0440\u0435\u0432\u0430\u043B \xAB\u0410\u043B\u0430-\u0422\u043E\u043E\xBB",tag:"\u0417\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u044B\u0435 \u0433\u043E\u0440\u044B",desc:"\u0421\u043A\u043E\u043B\u044C\u0437\u043A\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430 \u0441\u0440\u0435\u0434\u0438 \u0435\u043B\u0435\u0439 \u0438 \u0432\u0435\u0440\u0448\u0438\u043D. \u041D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C: \u0441\u0446\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043D\u0438\u0436\u0435.",grip:.74,night:!1,weather:"snow",sky:{top:7312324,horizon:14674162,bottom:15922938},fog:{color:14542575,near:60,far:460},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:40},road:{asphalt:"#5d6168",line:"#ffffff",edge:"#f2f2f2",halfWidth:7.2,shoulder:1.8,shoulderColor:"#e9eef4"},barrier:"rail",track:{minR:30,maxR:130,straight:[35,120],hill:14},props:["pine","pine","rock","peak"]},{id:"city",name:"\u041D\u0435\u043E\u043D-\u0421\u0438\u0442\u0438",tag:"\u041D\u043E\u0447\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",desc:"\u041D\u043E\u0447\u043D\u043E\u0439 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441: \u043D\u0435\u043E\u043D\u043E\u0432\u044B\u0435 \u0432\u044B\u0432\u0435\u0441\u043A\u0438, \u0444\u043E\u043D\u0430\u0440\u0438 \u0438 \u043D\u0435\u0431\u043E\u0441\u043A\u0440\u0451\u0431\u044B \u0432\u0434\u043E\u043B\u044C \u0442\u0440\u0430\u0441\u0441\u044B.",grip:.95,night:!0,weather:null,sky:{top:329231,horizon:2758469,bottom:657940},fog:{color:1708080,near:60,far:520},sun:{color:10466559,intensity:.55,dir:[.3,.8,.4]},hemi:{sky:5917338,ground:2105392,intensity:.9},ground:{near:2763315,far:1842212,hills:0},road:{asphalt:"#2c2c33",line:"#ffcc33",edge:"#dddddd",halfWidth:8.3,shoulder:1.4,shoulderColor:"#50505a"},barrier:"concrete",track:{minR:30,maxR:130,straight:[50,160],hill:3,corners:!0},props:["building","building","lamp","neon"]},{id:"field_asphalt",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0410\u0441\u0444\u0430\u043B\u044C\u0442\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0430\u0441\u0444\u0430\u043B\u044C\u0442",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0441 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u0445\u043E\u043B\u043C\u0430\u043C\u0438. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u043A\u0443\u0434\u0430 \u0445\u043E\u0447\u0435\u0448\u044C \u0438 \u0434\u0440\u0438\u0444\u0442\u0438.",grip:1,night:!1,weather:null,horizon:"hills",sky:{top:4163286,horizon:13624306,bottom:14674416},fog:{color:13622760,near:120,far:380},sun:{color:16774368,intensity:2.6,dir:[.45,.8,-.35]},hemi:{sky:15397631,ground:6974058,intensity:1.15},ground:{near:5592666,far:8227450,hills:0},smoke:15263978,dust:9079434,skid:789516,field:{surface:"asphalt",freq:.006,amp:3.4,texBase:"#4d4e52",colA:16777215,colB:14277081,colLow:13619151,props:[["tires",5,1,1.2,.7],["cone",10,1,1,0],["mast",1,1,1,.3],["block",2,1,1,1.1]]}},{id:"field_beach",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u041F\u043B\u044F\u0436\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u043F\u043B\u044F\u0436",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0441\u0447\u0430\u043D\u044B\u0439 \u043F\u043B\u044F\u0436 \u0441 \u0434\u044E\u043D\u0430\u043C\u0438, \u043F\u0430\u043B\u044C\u043C\u0430\u043C\u0438 \u0438 \u043C\u043E\u0440\u0435\u043C. \u041F\u0435\u0441\u043E\u043A \u0441\u043A\u043E\u043B\u044C\u0437\u043A\u0438\u0439 \u2014 \u0434\u0440\u0438\u0444\u0442 \u0432 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435.",grip:.8,night:!1,weather:null,horizon:"sea",sky:{top:3117024,horizon:14217471,bottom:15984328},fog:{color:14281973,near:120,far:400},sun:{color:16773584,intensity:2.9,dir:[-.5,.75,-.3]},hemi:{sky:16774364,ground:13215854,intensity:1.15},ground:{near:15126424,far:3120836,hills:0},smoke:15918792,dust:14730636,skid:9071940,field:{surface:"beach",freq:.009,amp:3.4,shore:-70,texBase:"#e3c98f",colA:16777215,colB:15983296,colLow:11769960,props:[["palm",3,.9,1.3,.45],["umbrella",2,1,1,0],["rock",1.5,.6,1.4,1]]}},{id:"field_snow",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0421\u043D\u0435\u0433\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0441\u043D\u0435\u0433",desc:"\u0411\u0435\u0441\u043A\u0440\u0430\u0439\u043D\u0435\u0435 \u0437\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438 \u0438 \u0451\u043B\u043A\u0430\u043C\u0438. \u0421\u043A\u043E\u043B\u044C\u0437\u043A\u043E \u2014 \u0437\u0430\u043D\u043E\u0441\u044B \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0438 \u043F\u043B\u0430\u0432\u043D\u044B\u0435.",grip:.68,night:!1,weather:"snow",horizon:"snow",sky:{top:7312324,horizon:14937076,bottom:15922938},fog:{color:14739696,near:90,far:360},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:0},smoke:16777215,dust:16054527,skid:8226968,field:{surface:"snow",freq:.007,amp:7,texBase:"#f2f5f9",colA:16777215,colB:15134198,colLow:13622506,props:[["pine",6,.8,1.5,.5],["srock",1.5,.6,1.5,1],["snowman",.4,1,1,.5]]}}];function s_(){let i=[],t=new Se(.35,.4,4.5,7);t.translate(0,2.25,0),i.push(le(t,4160826));let e=new Se(.22,.25,1.6,6);e.translate(.8,2.6,0),i.push(le(e,4160826));let n=new Se(.22,.22,.9,6);n.rotateZ(Math.PI/2),n.translate(.45,1.9,0),i.push(le(n,4160826));let s=new Se(.2,.22,1.3,6);s.translate(-.75,3.1,0),i.push(le(s,4491071));let r=new Se(.2,.2,.8,6);return r.rotateZ(Math.PI/2),r.translate(-.4,2.5,0),i.push(le(r,4491071)),Pn(i)}function r_(i=10246971){let t=new Js(1.4,0),e=t.attributes.position,n=Sn(7);for(let s=0;s<e.count;s++)e.setXYZ(s,e.getX(s)*(.8+n()*.5),e.getY(s)*(.6+n()*.3),e.getZ(s)*(.8+n()*.5));return t.translate(0,.6,0),le(t,i)}function a_(){let i=[],t=new Se(14,20,26,9);t.translate(0,13,0),i.push(le(t,11819066));let e=new Se(14.3,14.6,3,9);e.translate(0,22,0),i.push(le(e,13662799));let n=new Se(13,14,1.5,9);return n.translate(0,26.5,0),i.push(le(n,10242608)),Pn(i)}function o_(){let i=new fo(.7,0);return i.scale(1.2,.6,1.2),i.translate(0,.3,0),le(i,9076028)}function l_(){let i=[],t=new Se(.2,.3,1.6,6);return t.translate(0,.8,0),i.push(le(t,5913899)),[[2.2,2.6,1.6],[1.7,2.3,3.2],[1.2,2,4.6],[.7,1.6,5.8]].forEach(([n,s,r],a)=>{let o=new bn(n,s,7);o.translate(0,r,0),i.push(le(o,a%2?2051382:2382398));let l=new bn(n*.72,s*.45,7);l.translate(0,r+s*.3,0),i.push(le(l,15857146))}),Pn(i)}function c_(){let i=[],t=new bn(38,60,7);t.translate(0,30,0),i.push(le(t,7043208));let e=new bn(17,27,7);return e.translate(0,46.6,0),i.push(le(e,16054524)),Pn(i)}function h_(){let i=[],t=new Se(.1,.14,7,6);t.translate(0,3.5,0),i.push(le(t,3816004));let e=new ye(.12,.12,2.2);return e.translate(0,7,-1),i.push(le(e,3816004)),Pn(i)}function Nd(i){let t={};for(let e of new Set(i.props))e==="cactus"&&(t[e]=s_()),e==="rock"&&(t[e]=r_(i.id==="snow"?8226708:10246971)),e==="mesa"&&(t[e]=a_()),e==="bush"&&(t[e]=o_()),e==="pine"&&(t[e]=l_()),e==="peak"&&(t[e]=c_()),e==="lamp"&&(t[e]=h_());return t}var Je=2,cs=50,$r=1.45,Ih=11,Lh=3,Dh=500,Bd=400;function u_(i){let t=new Map;for(let e of i.children){if(!e.isMesh||e.isInstancedMesh||Array.isArray(e.material)||e.userData.sharedGeo||e.children.length||e.renderOrder)continue;let n=e.geometry,s=e.material.uuid+"|"+Object.keys(n.attributes).sort().join(",")+"|"+(n.index?"i":"n")+"|"+e.castShadow+e.receiveShadow;t.has(s)||t.set(s,[]),t.get(s).push(e)}for(let e of t.values()){if(e.length<2)continue;let n=e.map(a=>{a.updateMatrix();let o=a.geometry.clone();return o.applyMatrix4(a.matrix),o}),s=Pn(n);if(n.forEach(a=>a.dispose()),!s)continue;let r=new dt(s,e[0].material);r.castShadow=e[0].castShadow,r.receiveShadow=e[0].receiveShadow;for(let a of e)i.remove(a),a.geometry.dispose();i.add(r)}}var Ro=class{constructor(t,e,n=1,s=1,r={}){var a;this.scene=t,this.map=e,this.seed=n,this.quality=s,this.finishIdx=(a=r.finishIdx)!=null?a:1/0,this.rnd=Sn(n*9301+49297),this.hw=e.road.halfWidth,this.sh=e.road.shoulder,this.wall=this.hw+this.sh+.35,this.pts=[],this.base=0,this.g={x:0,z:0,h:0,s:0,k:0,seg:{type:"straight",L:160,u:0,k:0,ramp:1}},this.chunks=new Map,this.root=new Pe,t.add(this.root),this.makeMaterials(),this.propGeo=Nd(e),this.ensure(cs*(Ih+2))}newSegment(){if(this.queue&&this.queue.length)return this.queue.shift();let t=this.rnd,e=this.map.track,n=this.g,s=h=>({type:"straight",L:h,u:0,k:0,ramp:1}),r=(h,u,d,f)=>{Math.abs(f+d*u*.75)>$r&&(d=-d),Math.abs(f+d*u*.75)>$r&&(u=Math.max(.3,($r-Math.abs(f))/.75));let m=u*h;return{seg:{type:"curve",L:m,u:0,k:d/h,ramp:Math.min(m*.3,22)},dh:d*u*.75,dir:d}},a=t()<.5?1:-1,o=t();if(o<.2)return s(e.straight[0]+t()*(e.straight[1]-e.straight[0]));if(o<.32){let h=e.minR*(1+t()*1.4),u=.5+t()*.7,d=r(h,u,a,n.h),f=r(h*(.8+t()*.5),u*(.8+t()*.4),-d.dir,n.h+d.dh);return this.queue=[s(4+t()*18),f.seg],d.seg}if(o<.4)return r(e.minR*(1+t()*.4),1.1+t()*.7,a,n.h).seg;if(o<.54){let h=r(e.maxR*(.5+t()*.4),.4+t()*.3,a,n.h),u=r(e.minR*(1+t()*.5),.6+t()*.6,h.dir,n.h+h.dh);return this.queue=[u.seg],h.seg}if(o<.64&&e.corners){let h=r(e.minR*(.9+t()*.3),1.45+t()*.25,a,n.h);return this.queue=[s(20+t()*50)],h.seg}let l=e.minR+Math.pow(t(),1.3)*(e.maxR-e.minR),c=r(l,.4+t()*1.3,a,n.h);return t()<.5&&(this.queue=[s(10+t()*50)]),c.seg}genPoint(){let t=this.g;t.seg.u>=t.seg.L&&(t.seg=this.newSegment());let e=t.seg,n=Math.min(e.u,e.L-e.u),s=e.k*Ni(me(n/e.ramp,0,1));t.h+=s*Je,t.h=me(t.h,-$r-.1,$r+.1);let r=this.pts.length+this.base,a={x:t.x,z:t.z,h:t.h,k:s,s:t.s,i:r,y:this.map.track.hill*(Ph(t.s*.0042,this.seed)*2-1)+(Ph(t.s*.021,this.seed+5)-.5)*this.map.track.hill*.15,lx:Math.cos(t.h),lz:-Math.sin(t.h)};t.s<120&&(a.y*=t.s/120),this.pts.push(a),t.x+=Math.sin(t.h)*Je,t.z+=Math.cos(t.h)*Je,t.s+=Je,e.u+=Je}ensure(t){for(;this.base+this.pts.length<=t+2;)this.genPoint()}P(t){t=Math.round(t);let e=me(t-this.base,0,this.pts.length-1);return this.pts[e]}get lastIdx(){return this.base+this.pts.length-1}sample(t,e={}){this.ensure(Math.ceil(t)+1);let n=Math.max(this.base,Math.floor(t)),s=me(t-n,0,1),r=this.P(n),a=this.P(n+1);return e.x=r.x+(a.x-r.x)*s,e.y=r.y+(a.y-r.y)*s,e.z=r.z+(a.z-r.z)*s,e.h=r.h+(a.h-r.h)*s,e.k=r.k+(a.k-r.k)*s,e.lx=Math.cos(e.h),e.lz=-Math.sin(e.h),e.slope=(a.y-r.y)/Je,e}project(t,e,n){let s=me(Math.round(n),this.base+1,this.lastIdx-2),r=M=>{let x=this.P(M);return(x.x-t)**2+(x.z-e)**2},a=r(s);for(let M=0;M<400;M++){let x=s+1<=this.lastIdx-1?r(s+1):1/0,y=s-1>=this.base?r(s-1):1/0;if(x<a)s++,a=x;else if(y<a)s--,a=y;else break}let o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((t-o.x)*c+(e-o.z)*h)/(c*c+h*h);u<0&&s>this.base&&(s--,o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((t-o.x)*c+(e-o.z)*h)/(c*c+h*h)),u=me(u,0,1);let d=o.x+c*u,f=o.z+h*u,m=o.h+(l.h-o.h)*u,v=Math.cos(m),p=-Math.sin(m),g=(t-d)*v+(e-f)*p;return{idx:s+u,lat:g,y:o.y+(l.y-o.y)*u,h:m,lx:v,lz:p,slope:(l.y-o.y)/Je,k:o.k}}terrainY(t,e){let n=Math.abs(e),s=t.x+t.lx*e,r=t.z+t.lz*e,a=this.map.ground.hills,o=t.y,l=this.hw+this.sh;if(this.map.id==="city")return n>l+.4&&(o+=.18),o;n>l&&(o-=Math.min(.6,(n-l)*.25));let c=Ni(me((n-l-6)/70,0,1));return o+=c*a*(ls(s*.008,r*.008,this.seed+11,4)*1.6-.35),o}makeMaterials(){let t=this.map,e=t.road,n=fn(256,512,(c,h,u)=>{c.fillStyle=e.asphalt,c.fillRect(0,0,h,u);let d=Sn(3);for(let f=0;f<9e3;f++){let m=d();c.fillStyle=m<.5?"rgba(0,0,0,0.13)":"rgba(255,255,255,0.07)",c.fillRect(d()*h,d()*u,1+d()*2,1+d()*2)}c.fillStyle="rgba(0,0,0,0.12)",c.fillRect(h*.18,0,h*.1,u),c.fillRect(h*.72,0,h*.1,u),c.fillStyle=e.edge,c.fillRect(6,0,6,u),c.fillRect(h-12,0,6,u),c.fillStyle=e.line,c.fillRect(h/2-4,0,8,u*.5)},{repeat:!0,aniso:8});this.roadMat=new ce({map:n,roughness:t.night?.42:.88,metalness:t.night?.15:0,envMapIntensity:t.night?.8:.4});let s=fn(32,64,(c,h,u)=>{c.fillStyle="#d42b2b",c.fillRect(0,0,h,u/2),c.fillStyle="#f2f2f2",c.fillRect(0,u/2,h,u/2)},{repeat:!0});if(this.kerbMat=new ce({map:s,roughness:.7}),this.shoulderMat=new Oe({color:e.shoulderColor}),this.terrainMat=new Oe({vertexColors:!0}),this.propMat=new Oe({vertexColors:!0,flatShading:!0}),t.barrier==="tires"){let c=fn(128,64,(h,u,d)=>{for(let f=0;f<4;f++){h.fillStyle=f%2?"#e8e8e8":"#d63a2f",h.fillRect(f*32,0,32,d),h.fillStyle="rgba(0,0,0,0.85)";for(let m=0;m<3;m++)h.beginPath(),h.ellipse(f*32+16,m*21+11,12,8,0,0,Math.PI*2),h.fill()}},{repeat:!0});this.barrierMat=new Oe({map:c,side:De})}else if(t.barrier==="rail")this.barrierMat=new ce({color:12107976,metalness:.7,roughness:.35,side:De}),this.postMat=new Oe({color:5922662}),this.snowbankMat=new Oe({color:16185852,side:De});else{let c=fn(128,32,(h,u,d)=>{h.fillStyle="#8d8d95",h.fillRect(0,0,u,d),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(0,0,2,d),h.fillRect(64,0,2,d)},{repeat:!0});this.barrierMat=new Oe({map:c,side:De}),this.neonMat=new be({color:2680831}),this.neonMat2=new be({color:16723622})}let r=c=>fn(512,96,(h,u,d)=>{for(let f=0;f<u;f+=24)for(let m=0;m<d;m+=24)h.fillStyle=(f+m)/24%2?"#111":"#fff",h.fillRect(f,m,24,24);h.fillStyle="rgba(10,10,20,0.85)",h.fillRect(60,12,u-120,d-24),h.fillStyle="#ffd400",h.font="bold 54px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText(c,u/2,d/2+2)});this.gateMatCP=new be({map:r("\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422"),side:De}),this.gateMatStart=new be({map:r("\u0421\u0422\u0410\u0420\u0422"),side:De}),this.gateMatFinish=new be({map:r("\u0424\u0418\u041D\u0418\u0428"),side:De}),this.finishLineMat=new be({map:fn(256,32,(c,h,u)=>{for(let d=0;d<h;d+=16)for(let f=0;f<u;f+=16)c.fillStyle=(d+f)/16%2?"#111":"#f4f4f4",c.fillRect(d,f,16,16)}),side:De}),this.pillarMat=new ce({color:2236968,roughness:.6});let a=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];this.bannerRows=a.length;let o=fn(512,512,(c,h,u)=>{a.forEach(([d,f,m],v)=>{let p=v*64;c.fillStyle=f,c.fillRect(0,p,h,64),c.fillStyle=m,c.fillRect(0,p,h,4),c.fillRect(0,p+60,h,4),c.font="italic 900 42px Arial",c.textAlign="center",c.textBaseline="middle",c.fillText(d,h/2,p+34)})});o.wrapS=di,this.bannerMat=new Oe({map:o,side:De});let l=fn(512,128,(c,h,u)=>{c.fillStyle="#3a3d46",c.fillRect(0,0,h,u);let d=Sn(77),f=["#e63946","#f1faee","#457b9d","#ffb703","#2a9d8f","#fb8500","#8338ec","#ffffff","#111111"];for(let m=0;m<5;m++){let v=14+m*23;c.fillStyle="#2b2d34",c.fillRect(0,v+12,h,11);for(let p=4;p<h;p+=9+d()*4)d()<.12||(c.fillStyle=f[Math.floor(d()*f.length)],c.fillRect(p,v+2,7,11),c.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(d()*4)],c.beginPath(),c.arc(p+3.5,v-1,3.2,0,Math.PI*2),c.fill(),d()<.15&&(c.fillStyle="#ffd400",c.fillRect(p+5,v-9,2,8)))}},{repeat:!0});if(l.repeat.set(3,1),this.standMats=[l,l].map(c=>new Oe({map:c})),this.standGrey=new Oe({color:7040888}),this.roofMat=new Oe({color:14034984}),t.id==="city"){this.buildingMats=[0,1,2].map(d=>{let f=fn(128,256,(m,v,p)=>{let g=["#20222c","#262033","#1d2a33"][d];m.fillStyle=g,m.fillRect(0,0,v,p);let M=Sn(100+d);for(let x=6;x<p-4;x+=12)for(let y=6;y<v-4;y+=12){let A=M()<.42;m.fillStyle=A?["#ffd98a","#fff2c4","#9fd8ff","#ffb36b"][Math.floor(M()*4)]:"#0c0d12",m.fillRect(y,x,7,8)}},{repeat:!0});return f.repeat.set(2,3),new Oe({map:f,emissiveMap:f,emissive:16777215,emissiveIntensity:.85})}),this.lampHeadMat=new be({color:16769696});let c=fn(128,128,(d,f,m)=>{let v=d.createRadialGradient(64,64,0,64,64,64);v.addColorStop(0,"rgba(255,210,140,0.55)"),v.addColorStop(1,"rgba(255,210,140,0)"),d.fillStyle=v,d.fillRect(0,0,f,m)});this.poolMat=new be({map:c,transparent:!0,depthWrite:!1,blending:zs});let h=["RAMEN","HOTEL","24/7","DRIFT","\u041A\u0410\u0424\u0415","NEON","CLUB","\u0422\u0410\u041A\u0421\u0418","SUSHI","GARAGE","\u041A\u0418\u041D\u041E","TURBO"],u=["#ff2ea6","#28e7ff","#ffe600","#7cff4f","#ff7b1c","#b26bff"];this.neonSigns=h.map((d,f)=>new be({map:fn(256,96,(m,v,p)=>{m.fillStyle="#07070c",m.fillRect(0,0,v,p);let g=u[f%u.length];m.strokeStyle=g,m.lineWidth=5,m.strokeRect(6,6,v-12,p-12),m.shadowColor=g,m.shadowBlur=18,m.fillStyle=g,m.font="bold 56px Arial",m.textAlign="center",m.textBaseline="middle",m.fillText(d,v/2,p/2+3),m.fillText(d,v/2,p/2+3)}),side:De}))}}update(t){var o,l;let e=Math.floor(t/cs);this.ensure((e+Ih+1)*cs+2);let n=0;for(let c=Math.max(0,e-Lh);c<=e+Ih;c++)if(!this.chunks.has(c)){if(n>=2&&c>e+2)break;this.buildChunk(c),n++}let s=this.P(Math.max(this.base,Math.min(this.lastIdx,Math.round(t)))),r=((l=(o=this.map.fog)==null?void 0:o.far)!=null?l:700)+90;for(let[c,h]of this.chunks){let u=h.userData;u.cx!==void 0&&(h.visible=Math.hypot(u.cx-s.x,u.cy-s.y,u.cz-s.z)<r),c<e-Lh&&(this.root.remove(h),h.traverse(d=>{d.geometry&&!d.userData.sharedGeo&&d.geometry.dispose(),d.isInstancedMesh&&d.dispose()}),this.chunks.delete(c))}let a=(e-Lh-2)*cs;if(a>this.base+200){let c=a-this.base;this.pts.splice(0,c),this.base+=c}}ribbon(t,e,n,s,r,a=0,o){let l=[],c=[],h=[],u=[],d=n.length,f=0;for(let v=t;v<=e;v++){let p=this.P(v);for(let g=0;g<d;g++){let M=n[g];if(l.push(p.x+p.lx*M,s(p,M),p.z+p.lz*M),c.push(g/(d-1),p.s*a),r){let x=r(p,M);h.push(x.r,x.g,x.b)}}if(v>t&&!(o&&o(v-1))){let g=(f-1)*d,M=f*d;for(let x=0;x<d-1;x++)u.push(g+x,g+x+1,M+x,g+x+1,M+x+1,M+x)}f++}let m=new pe;return m.setAttribute("position",new ie(l,3)),m.setAttribute("uv",new ie(c,2)),r&&m.setAttribute("color",new ie(h,3)),m.setIndex(u),m.computeVertexNormals(),m}buildChunk(t){let e=t*cs,n=e+cs;this.ensure(n+2);let s=new Pe,r=this.map,a=this.hw,o=this.sh,l=M=>M.y,c=new dt(this.ribbon(e,n,[a,-a],M=>M.y+.02,null,1/12),this.roadMat);c.receiveShadow=!0,s.add(c);let h=M=>Math.abs(this.P(M).k)>1/170||Math.abs(this.P(M+1).k)>1/170;for(let M of[1,-1]){let x=M>0?[a+o,a]:[-a,-a-o],y=new dt(this.ribbon(e,n,x,(E,T)=>E.y+.035+(Math.abs(T)>a+.1?.03:0),null,1/4,E=>!h(E)),this.kerbMat);y.receiveShadow=!0,s.add(y);let A=new dt(this.ribbon(e,n,x,E=>E.y+.015,null,0,E=>h(E)),this.shoulderMat);A.receiveShadow=!0,s.add(A)}let u=new bt(r.ground.near),d=new bt(r.ground.far),f=new bt,m=(M,x)=>{let y=M.x+M.lx*x,A=M.z+M.lz*x,E=ls(y*.05,A*.05,this.seed+3,2);return f.copy(u).lerp(d,me(E*1.3-.15+Math.abs(x)/400,0,1)).clone()},v=a+o,p=[v,v+1.5,v+4,v+9,v+18,v+34,v+60,v+100,v+160,v+240];for(let M of[1,-1]){let x=M>0?p.slice().reverse():p.map(A=>-A),y=new dt(this.ribbon(e,n,x,(A,E)=>this.terrainY(A,E),m),this.terrainMat);y.receiveShadow=!0,s.add(y)}this.buildBarriers(s,e,n),this.buildBanners(s,t,e,n),this.buildProps(s,t,e,n);for(let M=e;M<n;M++)M===28&&(this.buildGate(s,M,this.gateMatStart),this.buildStands(s,M+12)),M>=Bd&&(M-Bd)%Dh===0&&M<this.finishIdx-100&&(this.buildGate(s,M,this.gateMatCP),this.buildStands(s,M-14)),M===this.finishIdx&&(this.buildGate(s,M,this.gateMatFinish),this.buildFinishLine(s,M),this.buildStands(s,M-14),this.buildStands(s,M+20));u_(s);let g=this.P(e+(cs>>1));s.userData.cx=g.x,s.userData.cy=g.y,s.userData.cz=g.z,this.root.add(s),this.chunks.set(t,s)}buildBarriers(t,e,n){let s=this.wall,r=this.map;for(let a of[1,-1]){let o=a;if(r.barrier==="tires"){let l=this.ribbon(e,n,[o*s,o*s],(h,u)=>0,null,.3125);this.wallFromRibbon(l,e,n,o*s,0,1.05);let c=new dt(l,this.barrierMat);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}else if(r.barrier==="rail"){let l=this.ribbon(e,n,[o*s,o*s],()=>0,null,.25);this.wallFromRibbon(l,e,n,o*s,.45,.8);let c=new dt(l,this.barrierMat);c.castShadow=!0,t.add(c);let h=Math.floor((n-e)/2),u=new Hn(new ye(.12,.85,.12),this.postMat,h);u.userData.sharedGeo=!1;let d=new se;for(let m=0;m<h;m++){let v=this.P(e+m*2);d.makeTranslation(v.x+v.lx*o*(s+.12),v.y+.42,v.z+v.lz*o*(s+.12)),u.setMatrixAt(m,d)}t.add(u);let f=new dt(this.ribbon(e,n,o>0?[s+3,s+1.6,s+.4]:[-s-.4,-s-1.6,-s-3],(m,v)=>m.y+(Math.abs(Math.abs(v)-s-1.6)<.1?.9:.05),null),this.snowbankMat);t.add(f)}else{let l=[[s,0],[s+.12,.3],[s+.18,.85],[s+.32,.85],[s+.4,.3],[s+.45,0]],c=this.sweep(e,n,l.map(([d,f])=>[o*d,f]),1/6),h=new dt(c,this.barrierMat);h.castShadow=!0,h.receiveShadow=!0,t.add(h);let u=new dt(this.ribbon(e,n,o>0?[s+.3,s+.2]:[-s-.2,-s-.3],d=>d.y+.87,null),o>0?this.neonMat:this.neonMat2);t.add(u)}}}sweep(t,e,n,s=0){let r=[],a=[],o=[],l=n.length,c=0;for(let u=t;u<=e;u++,c++){let d=this.P(u);if(n.forEach(([f,m],v)=>{r.push(d.x+d.lx*f,d.y+m,d.z+d.lz*f),a.push(d.s*s,v/(l-1))}),u>t){let f=(c-1)*l,m=c*l;for(let v=0;v<l-1;v++)o.push(f+v,f+v+1,m+v,f+v+1,m+v+1,m+v)}}let h=new pe;return h.setAttribute("position",new ie(r,3)),h.setAttribute("uv",new ie(a,2)),h.setIndex(o),h.computeVertexNormals(),h}wallFromRibbon(t,e,n,s,r,a){let o=t.attributes.position,l=0;for(let h=e;h<=n;h++,l++){let u=this.P(h);o.setY(l*2,u.y+a),o.setY(l*2+1,u.y+r)}let c=t.attributes.uv;for(let h=0;h<c.count;h++)c.setX(h,h%2);for(let h=0;h<c.count;h++){let u=c.getX(h),d=c.getY(h);c.setXY(h,d,u)}t.computeVertexNormals()}clearOfRoad(t,e,n,s){let r=(this.wall+s)**2;for(let a=Math.max(this.base,n-90);a<=Math.min(this.lastIdx,n+90);a+=3){let o=this.P(a);if((o.x-t)**2+(o.z-e)**2<r)return!1}return!0}buildProps(t,e,n,s){let r=this.map,a=Sn(this.seed*1e3+e*7919),o=new se,l=new Mn,c=new P,h=new P,u=new P(0,1,0),d=(f,m,v,p,g,M,x=3,y=!0)=>{let A=this.propGeo[f];if(!A)return;let E=[];for(let I=0;I<m*3&&E.length<m;I++){let k=n+Math.floor(a()*(s-n)),_=this.P(k),H=(a()<.5?-1:1)*(v+a()*(p-v)),B=_.x+_.lx*H,W=_.z+_.lz*H;if(!this.clearOfRoad(B,W,k,x))continue;let j=g+a()*(M-g);l.setFromAxisAngle(u,a()*Math.PI*2),c.set(j,j*(.85+a()*.3),j),h.set(B,this.terrainY(_,H)-.1,W),E.push(o.compose(h,l,c).clone())}if(!E.length)return;let T=new Hn(A,this.propMat,E.length);T.userData.sharedGeo=!0,E.forEach((I,k)=>T.setMatrixAt(k,I)),T.castShadow=y&&this.quality>0,T.receiveShadow=!1,t.add(T)};r.id==="desert"?(d("cactus",8,this.wall+3,70,.8,1.5),d("bush",8,this.wall+2,60,.7,1.6,2,!1),d("rock",8,this.wall+4,110,.6,3.2),a()<.8&&d("mesa",1,150,240,.7,1.7,60,!1)):r.id==="snow"?(d("pine",22,this.wall+3,110,.8,1.6),d("rock",6,this.wall+3,80,.6,2.2),a()<.9&&d("peak",1,170,250,.8,1.8,90,!1)):r.id==="city"&&this.buildCity(t,e,n,s,a)}buildCity(t,e,n,s,r){let a=new ye(1,1,1);a.translate(0,.5,0);let o=[[],[],[]],l=new se,c=new Mn,h=new P,u=new P,d=new P(0,1,0),f=[];for(let x of[1,-1]){let y=n+Math.floor(r()*3);for(;y<s;){let A=this.P(y),E=10+r()*10,T=12+r()*14,I=14+Math.pow(r(),1.6)*80,k=x*(this.wall+8+T/2+r()*6),_=A.x+A.lx*k,S=A.z+A.lz*k;this.clearOfRoad(_,S,y,T/2+4)&&(c.setFromAxisAngle(d,A.h),h.set(E,I,T),u.set(_,A.y,S),o[Math.floor(r()*3)].push(l.compose(u,c,h).clone()),r()<.45&&f.push({p:A,off:k-x*(T/2+.3),y:A.y+6+r()*Math.min(20,I-10),side:x,w:6+r()*3})),y+=Math.ceil((E+3)/Je)}}o.forEach((x,y)=>{if(!x.length)return;let A=new Hn(a,this.buildingMats[y],x.length);x.forEach((E,T)=>A.setMatrixAt(T,E)),A.userData.sharedGeo=!1,t.add(A)});let m=new Ee(1,1);for(let x of f){let y=this.neonSigns[Math.floor(r()*this.neonSigns.length)],A=new dt(m,y);A.userData.sharedGeo=!0,A.scale.set(x.w,x.w*.375,1),A.position.set(x.p.x+x.p.lx*x.off,x.y,x.p.z+x.p.lz*x.off),A.rotation.y=x.p.h+(x.side>0?-Math.PI/2:Math.PI/2),t.add(A)}let v=this.propGeo.lamp,p=[],g=[],M=[];for(let x=n+e%2*7;x<s;x+=15){let y=this.P(x),A=(x/15|0)%2?1:-1,E=A*(this.wall+.9);c.setFromAxisAngle(d,y.h+(A>0?-Math.PI/2:Math.PI/2)),u.set(y.x+y.lx*E,y.y,y.z+y.lz*E),h.set(1,1,1),p.push(l.compose(u,c,h).clone());let T=E-A*2;g.push(new se().makeTranslation(y.x+y.lx*T,y.y+6.9,y.z+y.lz*T));let I=E-A*3.5;M.push({x:y.x+y.lx*I,y:y.y+.05,z:y.z+y.lz*I})}if(p.length){let x=new Hn(v,this.propMat,p.length);x.userData.sharedGeo=!0,p.forEach((I,k)=>x.setMatrixAt(k,I)),t.add(x);let y=new ye(.5,.15,.9),A=new Hn(y,this.lampHeadMat,g.length);g.forEach((I,k)=>A.setMatrixAt(k,I)),t.add(A);let E=new Ee(11,11);E.rotateX(-Math.PI/2);let T=new Hn(E,this.poolMat,M.length);M.forEach((I,k)=>T.setMatrixAt(k,new se().makeTranslation(I.x,I.y,I.z))),T.renderOrder=1,t.add(T)}}buildBanners(t,e,n,s){let r=Sn(this.seed*31+e*101),a={tires:1.1,rail:.85,concrete:.9}[this.map.barrier],o=[],l=[],c=[],h=this.bannerRows;for(let d=n;d+3<=s;d+=4){if(r()<.45)continue;let f=r()<.5?1:-1,m=Math.floor(r()*h),v=1-(m+1)/h,p=1-m/h,g=f*(this.wall+.05),M=o.length/3;for(let x=0;x<=3;x++){let y=this.P(d+x),A=y.x+y.lx*g,E=y.z+y.lz*g;o.push(A,y.y+a,E,A,y.y+a+.75,E);let T=f>0?x/3:1-x/3;l.push(T,v,T,p)}for(let x=0;x<3;x++){let y=M+x*2;c.push(y,y+2,y+1,y+1,y+2,y+3)}}if(!o.length)return;let u=new pe;u.setAttribute("position",new ie(o,3)),u.setAttribute("uv",new ie(l,2)),u.setIndex(c),u.computeVertexNormals(),t.add(new dt(u,this.bannerMat))}buildStands(t,e){let n=this.P(e);for(let s of[1,-1]){let r=s*(this.wall+7.5),a=n.x+n.lx*r,o=n.z+n.lz*r;if(!this.clearOfRoad(a,o,e,5.5))continue;let l=[this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey];l[s>0?1:0]=this.standMats[0];let c=new dt(new ye(8,5,34),l);c.position.set(a,n.y+2.5,o),c.rotation.y=n.h,c.castShadow=!0,t.add(c);let h=new dt(new ye(9.5,.3,35),this.roofMat);h.position.set(a-n.lx*s*.6,n.y+7.2,o-n.lz*s*.6),h.rotation.y=n.h,h.rotation.z=s*.08,t.add(h);for(let u of[-16,0,16]){let d=new dt(new ye(.25,2.3,.25),this.pillarMat);d.position.set(a-n.lx*s*4.3+Math.sin(n.h)*u,n.y+6,o-n.lz*s*4.3+Math.cos(n.h)*u),t.add(d)}}}buildFinishLine(t,e){let n=this.P(e),s=new Ee(this.hw*2,2);s.rotateX(-Math.PI/2);let r=new dt(s,this.finishLineMat);r.rotation.y=n.h,r.position.set(n.x,n.y+.04,n.z),t.add(r)}buildGate(t,e,n){let s=this.P(e),r=this.wall+.5,a=new ye(.6,6.5,.6);for(let l of[1,-1]){let c=new dt(a,this.pillarMat);c.position.set(s.x+s.lx*l*r,s.y+3.25,s.z+s.lz*l*r),c.rotation.y=s.h,c.castShadow=!0,t.add(c)}let o=new dt(new Ee(r*2,r*2*96/512),n);o.position.set(s.x,s.y+6.2,s.z),o.rotation.y=s.h+Math.PI,t.add(o)}};var Wn=96,wn=4,Zr=Wn/wn,Uh=3,Co=class{constructor(t,e,n=1,s=1,r={}){this.isField=!0,this.props=r.props!==!1,this.flat=!!r.flat,this.scene=t,this.map=e,this.seed=n,this.quality=s,this.f=e.field,this.hw=1e9,this.wall=1e9,this.base=0,this.lastIdx=1e9,this.sh=0,this.chunks=new Map,this.root=new Pe,t.add(this.root),this.target={x:0,z:0},this.makeMaterials(),this.propGeo=d_(e.field.surface),this.update(0)}H(t,e){let n=this.f,s=this.seed,r=0;this.flat||(r=(ls(t*n.freq,e*n.freq,s+3,4)-.5)*n.amp*2,r+=(ls(t*n.freq*3.1,e*n.freq*3.1,s+41,2)-.5)*n.amp*.35);let a=Math.hypot(t,e);return r*=Ni(me((a-25)/60,0,1)),n.shore!==void 0&&t<n.shore+30&&(r-=(n.shore+30-t)*.09),r}heightAt(t,e){let n=Math.floor(t/wn),s=Math.floor(e/wn),r=t/wn-n,a=e/wn-s,o=n*wn,l=s*wn,c=this.H(o,l),h=this.H(o+wn,l),u=this.H(o,l+wn),d=this.H(o+wn,l+wn);return r+a<=1?c+(h-c)*r+(u-c)*a:d+(u-d)*(1-r)+(h-d)*(1-a)}grad(t,e){return[(this.heightAt(t+1.2,e)-this.heightAt(t-1.2,e))/(2*1.2),(this.heightAt(t,e+1.2)-this.heightAt(t,e-1.2))/(2*1.2)]}ensure(){}P(t){let e=t*2,n=this.heightAt(0,e);return{x:0,z:e,y:n,h:0,lx:1,lz:0,s:e,k:0}}sample(t,e={}){return Object.assign(e,this.P(t),{slope:0})}project(t,e,n){return{idx:n,lat:0,y:this.heightAt(t,e),h:0,lx:1,lz:0,slope:0,k:0}}collidersNear(t,e){let n=[],s=Math.floor(t/Wn),r=Math.floor(e/Wn);for(let a=s-1;a<=s+1;a++)for(let o=r-1;o<=r+1;o++){let l=this.chunks.get(a+","+o);if(l)for(let c of l.userData.col)n.push(c)}return n}makeMaterials(){let t=this.f,e=fn(512,512,(n,s,r)=>{n.fillStyle=t.texBase,n.fillRect(0,0,s,r);let a=Sn(5);for(let o=0;o<9e3;o++){let l=a();n.fillStyle=l<.5?`rgba(0,0,0,${.05+a()*.08})`:`rgba(255,255,255,${.04+a()*.07})`;let c=1+a()*2.5;n.fillRect(a()*s,a()*r,c,c)}if(t.surface==="asphalt"){n.strokeStyle="rgba(245,245,240,0.8)",n.lineWidth=5,n.strokeRect(2.5,2.5,s-5,r-5),n.setLineDash([26,22]),n.strokeStyle="rgba(242,194,48,0.75)",n.lineWidth=4,n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,r),n.stroke(),n.setLineDash([]),n.strokeStyle="rgba(10,10,10,0.18)",n.lineWidth=7;for(let o=0;o<5;o++)n.beginPath(),n.arc(a()*s,a()*r,60+a()*120,a()*6,a()*6+2.5),n.stroke()}if(t.surface==="beach"){n.strokeStyle="rgba(160,120,70,0.13)",n.lineWidth=3;for(let o=10;o<r;o+=22){n.beginPath();for(let l=0;l<=s;l+=16)n.lineTo(l,o+Math.sin(l*.05+o)*5);n.stroke()}}},{repeat:!0});if(this.groundMat=new Oe({map:e,vertexColors:!0}),this.propMat=new Oe({vertexColors:!0,flatShading:!0}),t.shore!==void 0){let n=new dt(new Ee(900,4e3),new Oe({color:3120836,transparent:!0,opacity:.88}));n.rotation.x=-Math.PI/2,n.position.set(t.shore-440,-1.4,0),this.water=n,this.root.add(n)}}update(){let t=this.target,e=Math.floor(t.x/Wn),n=Math.floor(t.z/Wn),s=0;for(let r=0;r<=Uh;r++)for(let a=e-r;a<=e+r;a++)for(let o=n-r;o<=n+r;o++){if(Math.max(Math.abs(a-e),Math.abs(o-n))!==r)continue;let l=a+","+o;this.chunks.has(l)||s>=2&&r>1||(this.buildChunk(a,o),s++)}for(let[r,a]of this.chunks){let[o,l]=r.split(",").map(Number);(Math.abs(o-e)>Uh+1||Math.abs(l-n)>Uh+1)&&(this.root.remove(a),a.traverse(c=>{c.geometry&&!c.userData.sharedGeo&&c.geometry.dispose(),c.isInstancedMesh&&c.dispose()}),this.chunks.delete(r))}this.water&&(this.water.position.z=t.z)}buildChunk(t,e){var M;let n=this.f,s=new Pe,r=t*Wn,a=e*Wn,o=Zr+1,l=new Float32Array(o*o*3),c=new Float32Array(o*o*2),h=new Float32Array(o*o*3),u=new bt(n.colA),d=new bt(n.colB),f=new bt((M=n.colLow)!=null?M:n.colB),m=new bt;for(let x=0;x<=Zr;x++)for(let y=0;y<=Zr;y++){let A=x*o+y,E=r+y*wn,T=a+x*wn,I=this.H(E,T);l[A*3]=E,l[A*3+1]=I,l[A*3+2]=T,c[A*2]=E/32,c[A*2+1]=T/32;let k=ls(E*.02,T*.02,this.seed+77,2);m.copy(u).lerp(d,k),n.shore!==void 0?m.lerp(f,Ni(me((n.shore+34-E)/22,0,1))):m.lerp(f,me(-I/(n.amp*1.2),0,.6)),h[A*3]=m.r,h[A*3+1]=m.g,h[A*3+2]=m.b}let v=[];for(let x=0;x<Zr;x++)for(let y=0;y<Zr;y++){let A=x*o+y,E=A+1,T=A+o,I=T+1;v.push(A,T,E,E,T,I)}let p=new pe;p.setAttribute("position",new ue(l,3)),p.setAttribute("uv",new ue(c,2)),p.setAttribute("color",new ue(h,3)),p.setIndex(v),p.computeVertexNormals();let g=new dt(p,this.groundMat);g.receiveShadow=this.quality>0,s.add(g),s.userData.col=[],this.props&&this.buildProps(s,t,e),this.root.add(s),this.chunks.set(t+","+e,s)}buildProps(t,e,n){let s=this.f,r=Sn(this.seed*131+e*7919+n*104729),a=new se,o=new Mn,l=new P,c=new P,h=new P(0,1,0);for(let[u,d,f,m,v]of s.props){let p=this.propGeo[u];if(!p)continue;let g=[],M=Math.floor(d*(.5+r()));for(let y=0;y<M;y++){let A=e*Wn+r()*Wn,E=n*Wn+r()*Wn;if(Math.hypot(A,E)<45||s.shore!==void 0&&A<s.shore+(u==="palm"||u==="umbrella"?12:40))continue;let T=f+r()*(m-f);o.setFromAxisAngle(h,r()*Math.PI*2),l.set(T,T,T),c.set(A,this.heightAt(A,E)-.05,E),g.push(a.compose(c,o,l).clone()),v>0&&t.userData.col.push({x:A,z:E,r:v*T})}if(!g.length)continue;let x=new Hn(p,this.propMat,g.length);x.userData.sharedGeo=!0,g.forEach((y,A)=>x.setMatrixAt(A,y)),x.castShadow=this.quality>0,t.add(x)}}};function d_(i){let t={},e=n=>Pn(n);{let n=[];for(let s=0;s<3;s++){let r=new ei(.42,.2,6,10);r.rotateX(Math.PI/2),r.translate(0,.2+s*.36,0),n.push(le(r,s===1?15921906:1842204))}t.tires=e(n)}{let n=new bn(.28,.75,8);n.translate(0,.42,0);let s=new ye(.6,.06,.6);s.translate(0,.03,0);let r=new Se(.17,.2,.14,8);r.translate(0,.45,0),t.cone=e([le(n,16738835),le(s,16738835),le(r,16777215)])}{let n=new Se(.12,.18,9,6);n.translate(0,4.5,0);let s=new ye(1.4,.25,.5);s.translate(0,9,0),t.mast=e([le(n,6053992),le(s,15263968)])}{let n=new ye(3,.8,.7);n.translate(0,.4,0),t.block=e([le(n,13223613)])}{let n=[],s=0;for(let r=0;r<6;r++){let a=new Se(.2-r*.015,.24-r*.015,1.1,6);a.translate(s,.55+r*1.05,0),s+=.12,n.push(le(a,r%2?9071171:10254928))}for(let r=0;r<7;r++){let a=new ye(.5,.06,3);a.translate(0,0,1.4),a.rotateX(.35),a.rotateY(r/7*Math.PI*2),a.translate(s,6.5,0),n.push(le(a,r%2?3115578:4169800))}t.palm=e(n)}{let n=new Se(.04,.04,2.3,5);n.translate(0,1.15,0);let s=new bn(1.4,.5,8);s.translate(0,2.3,0),t.umbrella=e([le(n,15658734),le(s,[16730955,3115744,16763187][Math.floor(Math.random()*3)])])}for(let[n,s]of[["rock",9407104],["srock",8226708]]){let r=new Js(1.2,0),a=r.attributes.position,o=Sn(9);for(let l=0;l<a.count;l++)a.setXYZ(l,a.getX(l)*(.8+o()*.5),a.getY(l)*(.55+o()*.3),a.getZ(l)*(.8+o()*.5));r.translate(0,.45,0),t[n]=le(r,s)}{let n=[],s=new Se(.2,.3,1.6,6);s.translate(0,.8,0),n.push(le(s,5913899)),[[2,2.4,1.6],[1.5,2.1,3],[1,1.8,4.3]].forEach(([r,a,o],l)=>{let c=new bn(r,a,7);c.translate(0,o,0),n.push(le(c,l%2?2051382:2382398));let h=new bn(r*.72,a*.45,7);h.translate(0,o+a*.3,0),n.push(le(h,15857146))}),t.pine=e(n)}{let n=new ti(.6,8,6);n.translate(0,.55,0);let s=new ti(.42,8,6);s.translate(0,1.35,0);let r=new bn(.07,.35,5);r.rotateX(Math.PI/2),r.translate(0,1.38,.52),t.snowman=e([le(n,16777215),le(s,16777215),le(r,16742938)])}return t}var Fh=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Dt={glass:new ce({color:1779251,roughness:.05,metalness:.2,transparent:!0,opacity:.55,envMapIntensity:1.4,depthWrite:!1}),black:new ce({color:1184276,roughness:.65}),gloss:new ce({color:789518,roughness:.25,metalness:.3}),trim:new ce({color:1973794,roughness:.6,metalness:.05}),chrome:new ce({color:15132908,roughness:.12,metalness:1}),tire:new ce({color:1644827,roughness:.92}),disc:new ce({color:7829628,roughness:.35,metalness:.9}),interior:new ce({color:1710621,roughness:.8}),seat:new ce({color:2763312,roughness:.75}),carbon:new ce({color:1710879,roughness:.3,metalness:.5}),lensClear:new ce({color:16777215,roughness:.02,transparent:!0,opacity:.25,depthWrite:!1}),reverse:new ce({color:14540253,emissive:16777215,emissiveIntensity:.1,roughness:.2}),amber:new ce({color:16751130,emissive:16746496,emissiveIntensity:.4,roughness:.3})},Od={kaze:{spokes:6,rim:14277340,caliper:14034984,rimDepth:.06,plate:"01 KG 086 AE"},bulldog:{spokes:5,rim:13225170,caliper:2763306,rimDepth:.03,plate:"01 KG 069 V8",chromeBumpers:!0},veloce:{spokes:10,rim:2105636,caliper:16761856,rimDepth:.02,plate:"01 KG 777 GT"},tundra:{spokes:8,rim:15856113,caliper:14034984,rimDepth:.04,plate:"01 KG 555 RR",cage:!0},ronin:{spokes:6,rim:7172214,caliper:2060256,rimDepth:.05,plate:"01 KG 034 GR"},vanta:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MW"},kitsune:{spokes:5,rim:2829102,caliper:16761856,rimDepth:.05,plate:"01 KG 013 RX"},tora:{spokes:5,rim:14080220,caliper:14034984,rimDepth:.07,plate:"01 KG 002 JZ"},toro:{spokes:10,rim:1842207,caliper:16747520,rimDepth:.02,plate:"01 KG 012 LP"},stutt:{spokes:5,rim:13225170,caliper:16764928,rimDepth:.03,plate:"01 KG 911 SS"},shiro:{spokes:8,rim:12633032,caliper:4473924,rimDepth:.07,plate:"01 KG 086 AE"},hayate:{spokes:6,rim:15263976,caliper:14034984,rimDepth:.04,plate:"01 KG 009 EV",cage:!0},sakura:{spokes:5,rim:2829634,caliper:16731501,rimDepth:.07,plate:"01 KG 015 SL"},stallion:{spokes:5,rim:1842207,caliper:14034984,rimDepth:.04,plate:"01 KG 050 GT"},pixel:{spokes:5,rim:9279918,caliper:14034984,rimDepth:.03,plate:"01 KG 007 GT"},estate:{spokes:10,rim:3948357,caliper:14034984,rimDepth:.03,plate:"01 KG 006 RS"},aurora:{spokes:10,rim:1118484,caliper:62932,rimDepth:.02,plate:"01 KG 001 HX"},bars:{spokes:6,rim:2829099,caliper:5592405,rimDepth:.06,plate:"01 KG 444 OR"},baron:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MB"},mamba:{spokes:5,rim:1842207,caliper:16759304,rimDepth:.04,plate:"01 KG 010 VR"},kei:{spokes:4,rim:14277340,caliper:4473924,rimDepth:.03,plate:"01 KG 660 KC"},zhiga:{spokes:6,rim:13225170,caliper:4473924,rimDepth:.06,plate:"01 KG 107 AA",chromeBumpers:!0},taiga:{spokes:5,rim:6052956,caliper:4473924,rimDepth:.05,plate:"01 KG 214 NV"},rossa:{spokes:7,rim:14080220,caliper:14034984,rimDepth:.06,plate:"01 KG 124 SP",chromeBumpers:!0},rancho:{spokes:6,rim:2829099,caliper:5592405,rimDepth:.07,plate:"01 KG 150 V8",chromeBumpers:!0},volt:{spokes:10,rim:9279918,caliper:3835647,rimDepth:.02,plate:"01 KG 003 EV"},gruppo:{spokes:8,rim:15856113,caliper:14034984,rimDepth:.04,plate:"01 KG 037 GB",cage:!0},kaiju:{spokes:6,rim:1118484,caliper:16196997,rimDepth:.08,plate:"01 KG 760 DR"},proto:{spokes:10,rim:1118484,caliper:16765286,rimDepth:.02,plate:"01 KG 024 LM"},zenith:{spokes:10,rim:1842207,caliper:16556817,rimDepth:.02,plate:"01 KG 016 W1"}};function f_(i,t=2){for(let e=0;e<t;e++){let n=[i[0]];for(let s=0;s<i.length-1;s++){let r=i[s],a=i[s+1];n.push([r[0]*.75+a[0]*.25,r[1]*.75+a[1]*.25]),n.push([r[0]*.25+a[0]*.75,r[1]*.25+a[1]*.75])}n.push(i[i.length-1]),i=n}return i}function p_(i,t,e){var l;let n=new Li,s=i[i.length-1][1];n.moveTo(i[0][0],i[0][1]);for(let c=1;c<i.length;c++)n.lineTo(i[c][0],i[c][1]);let r=e+.08,a=e+((l=t.ride)!=null?l:0),o=c=>{n.lineTo(c-r,s),n.lineTo(c-r,Math.min(a,s+.02)),n.absarc(c,a,r,Math.PI,0,!0),n.lineTo(c+r,s)};return o(t.wheelR),o(t.wheelF),n.lineTo(i[0][0],s),n.closePath(),n}function Po(i,t,e,n=3){let s=new uo(i,{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:n,curveSegments:14});s.rotateY(-Math.PI/2),s.computeBoundingBox();let r=s.boundingBox;return s.translate(-(r.min.x+r.max.x)/2,0,0),s}function kd(i,t){let e=i.attributes.position,n=new P;for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);i.computeVertexNormals()}function $t(i,t,e,n,s,r,a,o){let l=new dt(new ye(i,t,e),n);return l.position.set(s,r,a),l.castShadow=!0,o&&o.add(l),l}function Ye(i,t,e,n,s,r,a,o,l=16){let c=new Se(i,i,t,l);a==="x"?c.rotateZ(Math.PI/2):a==="z"&&c.rotateX(Math.PI/2);let h=new dt(c,e);return h.position.set(n,s,r),o&&o.add(h),h}function gi(i,t,e,n,s,r=!1){let a=i.distanceTo(t),o=r?new Se(e,e,a,8).rotateX(Math.PI/2):new ye(e,e,a),l=new dt(o,n);return l.position.copy(i).add(t).multiplyScalar(.5),l.lookAt(t),s.add(l),l}function Kr(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new dn(n);return s.colorSpace=Be,s.anisotropy=4,s}var ke={};function m_(){return ke.grille||(ke.grille=Kr(128,64,(i,t,e)=>{i.fillStyle="#050505",i.fillRect(0,0,t,e),i.strokeStyle="#3a3a3e",i.lineWidth=2;for(let n=0;n<e+8;n+=8)for(let s=n/8%2?0:5;s<t+10;s+=10){i.beginPath();for(let r=0;r<6;r++){let a=r*Math.PI/3;i.lineTo(s+Math.cos(a)*4,n+Math.sin(a)*4)}i.closePath(),i.stroke()}}))}function g_(i){var t;return ke[t="p"+i]||(ke[t]=Kr(256,56,(e,n,s)=>{e.fillStyle="#f4f4f4",e.fillRect(0,0,n,s),e.strokeStyle="#111",e.lineWidth=4,e.strokeRect(2,2,n-4,s-4),e.fillStyle="#d0021b",e.fillRect(6,6,34,s-12),e.fillStyle="#ffd400",e.beginPath(),e.arc(23,22,8,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",23,45),e.fillStyle="#111",e.font="bold 34px Arial",e.textBaseline="middle",e.fillText(i.slice(6),150,30),e.font="bold 26px Arial",e.fillText(i.slice(0,2),62,30)}))}function x_(i,t){var e;return ke[e="n"+i+t]||(ke[e]=Kr(128,128,n=>{n.fillStyle=t?"#111":"#fff",n.beginPath(),n.arc(64,64,58,0,Math.PI*2),n.fill(),n.fillStyle=t?"#fff":"#111",n.font="bold 70px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)}))}var zd=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];function v_(i){var s;let[t,e,n]=zd[i%zd.length];return ke[s="s"+i]||(ke[s]=Kr(256,64,(r,a,o)=>{r.fillStyle=e,r.beginPath(),r.roundRect?r.roundRect(2,2,a-4,o-4,14):r.rect(2,2,a-4,o-4),r.fill(),r.strokeStyle=n,r.lineWidth=3,r.stroke(),r.fillStyle=n,r.font="italic 900 36px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(t,a/2,o/2+2)}))}function __(i){var t;return ke[t="b"+i]||(ke[t]=Kr(512,48,(e,n,s)=>{e.fillStyle="#0d0d10",e.fillRect(0,0,n,s),e.fillStyle="#fff",e.font="italic 900 34px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(i,n/2,s/2+2)}))}function y_(){if(ke.ramp)return ke.ramp;let i=new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),t=new Or(i,4,1,yn);return t.minFilter=t.magFilter=nn,t.needsUpdate=!0,ke.ramp=t}function M_(){return ke.ao||(ke.ao=(()=>{let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(32,64,8,32,64,64);return e.addColorStop(0,"rgba(0,0,0,0.8)"),e.addColorStop(.6,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),new dn(i)})())}function Hd(i){i.updateMatrixWorld(!0);let t=new se().copy(i.matrixWorld).invert(),e=new Map,n=[],s=[];i.traverse(a=>{a.isMesh&&n.push(a)});let r=new se;for(let a of n){let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new ie(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(r.multiplyMatrices(t,a.matrixWorld));let l=a.material.uuid;e.has(l)||e.set(l,{mat:a.material,list:[],order:a.renderOrder}),e.get(l).list.push(o),a.parent.remove(a),a.geometry.dispose()}for(let{mat:a,list:o,order:l}of e.values()){let c=Pn(o);o.forEach(u=>u.dispose());let h=new dt(c,a);h.renderOrder=l,h.castShadow=a!==Dt.lensClear&&!(a.transparent&&a!==Dt.glass),h.receiveShadow=a!==Dt.glass,i.add(h),s.push(h)}return s}var Gd=new we({side:Ue,uniforms:{t:{value:.022}},vertexShader:"uniform float t; void main(){ vec3 p = position + normal * t; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.03, 0.03, 0.045, 1.0); }"});function Vd(i,t){let e=i.geometry.clone();e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=Ud(e,.001),e.computeVertexNormals();let n=t?Gd.clone():Gd;t&&(n.uniforms.t.value=t);let s=new dt(e,n);return s.position.copy(i.position),s.quaternion.copy(i.quaternion),s.userData.outlineOf=i,i.parent.add(s),s}function b_(i,t,e,n){let s=new Pe,r=t/2,a=[[i*.7,-r*.96],[i*.86,-r],[i*.95,-r*.92],[i*.995,-r*.6],[i,-r*.2],[i,r*.2],[i*.995,r*.6],[i*.95,r*.92],[i*.86,r],[i*.7,r*.96]],o=new co(a.map(([m,v])=>new it(m,v)),28);o.rotateZ(Math.PI/2);let l=new dt(o,Dt.tire);l.castShadow=!0,s.add(l);let c=new ce({color:e.rim,roughness:.3,metalness:.6}),h=new dt(new Se(i*.7,i*.7,t*.92,24,1,!0).rotateZ(Math.PI/2),new ce({color:3816255,metalness:.8,roughness:.4,side:De}));s.add(h);let u=n*(r*.82-e.rimDepth),d=new dt(new ei(i*.69,.018,6,28).rotateY(Math.PI/2),c);d.position.x=n*r*.86,s.add(d),Ye(i*.56,.035,Dt.disc,-n*.02,0,0,"x",s,24),Ye(i*.2,.06,Dt.trim,-n*.01,0,0,"x",s,12);let f=e.spokes;for(let m=0;m<f;m++){let v=m/f*Math.PI*2,p=new dt(new ye(.035,i*.52,f>8?.035:.06),c);p.position.set(u,Math.cos(v)*i*.42,Math.sin(v)*i*.42),p.rotation.x=v,s.add(p)}Ye(i*.17,.06,c,u,0,0,"x",s,16);for(let m=0;m<5;m++){let v=m/5*Math.PI*2;Ye(.014,.05,Dt.chrome,u+n*.03,Math.cos(v)*i*.1,Math.sin(v)*i*.1,"x",s,6)}return Ye(i*.055,.07,Dt.gloss,u+n*.02,0,0,"x",s,12),s}function Jr(i,t,e={}){var At,te,ot,St,Ht;let n=i.body,s=i.wheelRadius,r=Od[i.id]||Od.kaze,a=new Pe,o=new mo({color:t,gradientMap:y_()}),l=new bt(t).getHSL({}).l>.6,c=new ce({color:i.id==="vanta"?1920952:l?1315860:15921906,roughness:.4}),h=n.L,u=n.W,d=f_(n.upper,2),f=h/2,m=n.cabin[0][1],v=(D,q)=>(1-.085*Fh(.55,1.02,Math.abs(D)/f))*(1-.07*Fh(m-.3,m+.05,q)),p=Po(p_(d,n,s),u,.07,3);kd(p,D=>{D.x*=v(D.z,D.y)});let g=new dt(p,o);g.castShadow=!0,g.receiveShadow=!0,a.add(g);let M=(D,q)=>u/2*v(D,q),x=n.cabin,y=u*.84,A=Math.max(x[1][1],x[2][1]),E=D=>1-.2*Fh(m,A,D),T=new Li;T.moveTo(x[0][0]+.06,x[0][1]-.06);for(let D=0;D<x.length;D++)T.lineTo(x[D][0],x[D][1]);T.lineTo(x[x.length-1][0]+.06,x[x.length-1][1]-.06),T.closePath();let I=Po(T,y,.04,2);kd(I,D=>{D.x*=E(D.y)});let k=new dt(I,Dt.glass);k.renderOrder=3,a.add(k);let _=D=>y/2*E(D),S=Math.abs(x[1][0]-x[2][0])+.12,H=(x[1][0]+x[2][0])/2,B=new Li;B.moveTo(-S/2,0),B.lineTo(S/2,0),B.lineTo(S/2-.04,.05),B.lineTo(-S/2+.04,.06),B.closePath();let W=Po(B,_(A)*2+.04,.02,2),j=new dt(W,o);j.position.set(0,A-.02,H),j.castShadow=!0,a.add(j);for(let D of[1,-1]){let q=(gt,Xt,U=.012)=>new P(D*(_(Xt)+U),Xt,gt);gi(q(x[0][0],x[0][1]),q(x[1][0],x[1][1]),.07,o,a),gi(q(x[2][0],x[2][1]),q(x[3][0],x[3][1]),.09,o,a);let vt=x[1][0]+(x[2][0]-x[1][0])*.45;gi(q(vt,m),q(vt,A-.03),.05,Dt.gloss,a),gi(q(x[0][0]-.02,m+.015,.02),q(x[3][0]+.05,m+.015,.02),.03,Dt.gloss,a)}for(let D of[.2,-.25])$t(.5,.015,.03,Dt.black,D*u,x[0][1]+.03,x[0][0]-.1,a).rotation.set(-.5,0,.12);let z=.45;$t(y*.9,.2,.35,Dt.interior,0,m-.05,x[0][0]-.25,a);for(let D of[1,-1]){let q=D*y*.24,vt=x[1][0]-.3;$t(.42,.12,.45,Dt.seat,q,z+.12,vt,a);let gt=$t(.42,.55,.1,Dt.seat,q,z+.42,vt-.25,a);gt.rotation.x=-.18,$t(.2,.14,.08,Dt.seat,q,z+.78,vt-.3,a)}let st=new dt(new ei(.15,.022,8,20),Dt.interior);if(st.position.set(y*.24,m+.05,x[0][0]-.5),st.rotation.x=-.35,a.add(st),r.cage){let D=x[1][0]-.1,q=x[2][0]+.1,vt=A-.08;for(let gt of[1,-1]){let Xt=gt*_(A)*.95;gi(new P(Xt,z,D),new P(Xt,vt,D),.02,Dt.chrome,a,!0),gi(new P(Xt,vt,D),new P(Xt,vt,q),.02,Dt.chrome,a,!0),gi(new P(Xt,z,q),new P(Xt,vt,q),.02,Dt.chrome,a,!0)}gi(new P(_(A)*.95,vt,q),new P(-_(A)*.95,z+.2,q),.02,Dt.chrome,a,!0)}let G=Math.max(...n.upper.map(D=>D[0]))+.07,ht=Math.min(...n.upper.map(D=>D[0]))-.07,Mt=n.upper[0][1],yt=(n.upper[0][1]+n.upper[1][1])/2+.06,jt=n.upper.length-2,Jt=(n.upper[jt][1]+n.upper[jt+1][1])/2+.08,J=new ce({color:16774872,emissive:16773824,emissiveIntensity:e.night?2.4:.5,roughness:.15}),rt=new ce({color:6948872,emissive:16718362,emissiveIntensity:e.night?1.2:.35,roughness:.25}),Rt=u*.92,lt=n.extras||[];if(lt.includes("popups"))for(let D of[1,-1])$t(.44,.05,.32,o,D*u*.3,n.upper[2][1]+.02,G-.4,a),$t(.4,.02,.28,Dt.gloss,D*u*.3,n.upper[2][1]-.005,G-.4,a);if(lt.includes("roundlights"))for(let D of[1,-1]){let q=D*Rt*.34,vt=n.upper[2][1]-.02,gt=G-.32;Ye(.12,.2,o,q,vt,gt,"z",a,20),Ye(.1,.03,J,q,vt,gt+.1,"z",a,20)}let kt=n.upper[1][1]-n.upper[0][1]<.2;if(kt){let D=G-.35,q=d[0][1];for(let gt=0;gt<d.length-1;gt++)if(d[gt][0]>=D&&d[gt+1][0]<=D){let Xt=(d[gt][0]-D)/(d[gt][0]-d[gt+1][0]);q=d[gt][1]+(d[gt+1][1]-d[gt][1])*Xt}let vt=Math.atan2(n.upper[2][1]-n.upper[1][1],n.upper[1][0]-n.upper[2][0]);for(let gt of[1,-1]){let Xt=$t(.46,.03,.2,Dt.gloss,gt*Rt*.32,q+.09,D,a);Xt.rotation.x=vt;let U=$t(.4,.035,.05,J,gt*Rt*.32,q+.1,D+.07,a);U.rotation.x=vt}}for(let D of lt.includes("roundlights")||kt?[]:[1,-1]){let q=D*Rt*.33;$t(.44,.15,.08,Dt.gloss,q,yt,G-.02,a),$t(.36,.07,.03,J,q+D*.03,yt+.01,G+.02,a),Ye(.04,.03,Dt.chrome,q-D*.12,yt,G+.025,"z",a,14),$t(.44,.15,.01,Dt.lensClear,q,yt,G+.035,a),$t(.1,.035,.02,Dt.amber,q+D*.16,yt-.055,G+.03,a)}let Ft=new ce({map:m_(),roughness:.6}),Ot=new dt(new Ee(u*.34,.1),Ft);Ot.position.set(0,yt-.04,G+.012),a.add(Ot);let Vt=new dt(new Ee(u*.62,.12),Ft);Vt.position.set(0,Mt+.09,G+.01),a.add(Vt),$t(u*.94,.06,.14,r.chromeBumpers?Dt.chrome:Dt.trim,0,Mt+.01,G-.01,a),$t(u*.9,.02,.12,Dt.carbon,0,Mt-.035,G+.03,a);for(let D of[1,-1])Ye(.04,.03,J,D*u*.37,Mt+.09,G+.01,"z",a,12);let et=new ce({map:g_(r.plate),roughness:.5}),C=new dt(new Ee(.44,.1),et);if(C.position.set(0,Mt+.1,G+.02),a.add(C),Ye(.04,.015,Dt.chrome,0,yt+.04,G+.02,"z",a,16),lt.includes("roundtails"))for(let D of[1,-1])for(let q of[.22,.38])Ye(.085,.05,Dt.gloss,D*u*q,Jt,ht+.01,"z",a,18),Ye(.07,.06,rt,D*u*q,Jt,ht-.005,"z",a,18),Ye(.03,.065,rt,D*u*q,Jt,ht-.01,"z",a,12);else{$t(u*.88,.13,.05,Dt.gloss,0,Jt,ht+.015,a);for(let D of[1,-1])$t(.42,.09,.03,rt,D*u*.28,Jt,ht-.005,a),$t(.1,.05,.03,Dt.reverse,D*u*.1,Jt,ht-.005,a);$t(u*.12,.03,.03,rt,0,Jt+.02,ht-.005,a)}let at=n.upper[n.upper.length-1][1];$t(u*.94,.07,.14,r.chromeBumpers?Dt.chrome:Dt.trim,0,at+.01,ht+.01,a);let ut=new dt(new Ee(.44,.1),et);if(ut.position.set(0,Jt-.16,ht-.01),ut.rotation.y=Math.PI,a.add(ut),lt.includes("wing")||lt.includes("intakes")){$t(u*.7,.08,.2,Dt.carbon,0,at-.02,ht+.05,a);for(let D=-2;D<=2;D++)$t(.015,.1,.22,Dt.carbon,D*u*.13,at-.02,ht+.03,a)}let ct=i.id==="veloce"?[[.06,0],[-.06,0]]:i.cylinders>=6?[[u*.3,0],[u*.36,0],[-u*.3,0],[-u*.36,0]]:[[u*.3,0]];for(let[D]of ct)Ye(.045,.2,Dt.chrome,D,at+0,ht+.02,"z",a,14),Ye(.032,.21,Dt.black,D,at+0,ht+.02,"z",a,12);for(let D of[1,-1]){let q=x[0][0]-.2,vt=m+.1,gt=D*(M(q,m)+.06);gi(new P(D*(M(q,m)-.02),m+.02,q),new P(gt,vt,q),.025,Dt.gloss,a),$t(.13,.09,.14,o,gt+D*.03,vt,q,a),$t(.01,.07,.11,Dt.chrome,gt+D*.03,vt,q-.075,a);let Xt=x[0][0]-.05,U=x[1][0]+(x[2][0]-x[1][0])*.45,wt=(at+m)/2;for(let tt of[Xt,U])$t(.008,m-at-.08,.012,Dt.black,D*(M(tt,wt)+.003),wt+.02,tt,a);$t(.008,.012,Math.abs(Xt-U),Dt.black,D*(M((Xt+U)/2,at+.06)+.003),at+.06,(Xt+U)/2,a),$t(.03,.03,.14,Dt.gloss,D*(M(U+.2,m-.1)+.012),m-.1,U+.2,a);let Z=Math.abs(n.wheelF-n.wheelR)-(s+.1)*2;$t(.07,.1,Z,Dt.carbon,D*(M(0,at)+.01),at+.04,(n.wheelF+n.wheelR)/2,a),Ye(.06,.01,Dt.trim,D*(M(n.wheelR+.35,m-.15)+.004),m-.15,n.wheelR+.35,"x",a,14);for(let tt of[n.wheelF,n.wheelR]){let pt=new dt(new ei(s+.09,.035,6,20,Math.PI),Dt.trim);pt.rotation.y=Math.PI/2,pt.position.set(D*(M(tt,s)+.005),s+((At=n.ride)!=null?At:0),tt),a.add(pt)}if(!lt.includes("stripes")){let tt=new ce({map:x_((te=e.number)!=null?te:i.id.length*17%90+10,l),transparent:!0,roughness:.4}),pt=new dt(new Ee(.46,.46),tt),Et=(Xt+U)/2;pt.position.set(D*(M(Et,.66)+.006),.66,Et),pt.rotation.y=D*Math.PI/2,a.add(pt)}}let mt=Math.max(...n.upper.filter(D=>D[0]<x[x.length-1][0]+.05).map(D=>D[1]));if(lt.includes("wing")){let D=new Li;D.moveTo(0,0),D.lineTo(.36,.02),D.lineTo(.34,.05),D.lineTo(.02,.04),D.closePath();let q=Po(D,u*.95,.01,1),vt=new dt(q,i.id==="ronin"?Dt.carbon:o);vt.rotation.y=Math.PI,vt.position.set(0,mt+.32,ht+.46),vt.castShadow=!0,a.add(vt);for(let gt of[1,-1])$t(.03,.3,.12,Dt.gloss,gt*u*.3,mt+.16,ht+.3,a),$t(.015,.16,.42,i.id==="ronin"?Dt.carbon:o,gt*u*.475,mt+.33,ht+.28,a)}else lt.includes("ducktail")&&$t(u*.88,.05,.16,o,0,mt+.04,ht+.13,a);if(lt.includes("roofwing")){$t(_(A)*2+.06,.035,.28,o,0,A+.07,x[2][0]-.1,a);for(let D of[1,-1])$t(.02,.1,.26,o,D*(_(A)+.03),A+.04,x[2][0]-.1,a)}if(lt.includes("scoop")){let D=(n.upper[2][0]+x[0][0])/2;$t(.55,.1,.75,o,0,n.upper[3][1]+.05,D,a);let q=new dt(new Ee(.46,.07),Ft);q.position.set(0,n.upper[3][1]+.06,D+.38),a.add(q)}if(i.id==="ronin"){let D=(n.upper[2][0]+x[0][0])/2;for(let q of[1,-1])for(let vt=0;vt<4;vt++)$t(.22,.012,.03,Dt.gloss,q*.32,n.upper[3][1]+.02,D-.12+vt*.08,a);$t(u*.9,.025,.1,Dt.carbon,0,Mt-.04,G+.06,a)}if(i.id==="veloce")for(let D=0;D<6;D++)$t(u*.5,.012,.05,Dt.gloss,0,x[3][1]+.01-D*.012,x[3][0]+.05-D*.1-.12,a);if(lt.includes("roofscoop")){$t(.36,.08,.4,o,0,A+.07,H+.25,a);let D=new dt(new Ee(.3,.05),Ft);D.position.set(0,A+.07,H+.451),a.add(D)}if(lt.includes("intakes"))for(let D of[1,-1]){let q=new dt(new Ee(.62,.2),Ft);q.position.set(D*(M(-.6,.55)+.006),.55,-.6),q.rotation.y=D*Math.PI/2,a.add(q)}if(lt.includes("stripes"))for(let D of[.13,-.13]){let q=$t(.16,.008,Math.abs(G-x[0][0]),c,D,0,(G+x[0][0])/2,a);q.position.y=n.upper[3][1]+.03,$t(.16,.008,S,c,D,A+.045,H,a),$t(.16,.008,Math.abs(x[3][0]-ht),c,D,mt+.012,(x[3][0]+ht)/2,a)}if(lt.includes("rallylights")){$t(u*.7,.03,.05,Dt.gloss,0,yt+.12,G+.1,a);for(let D of[.3,.1,-.1,-.3])Ye(.085,.07,Dt.gloss,D*u,yt+.05,G+.12,"z",a,16),Ye(.07,.075,J,D*u,yt+.05,G+.125,"z",a,16)}if(lt.includes("mudflaps"))for(let D of[1,-1])for(let q of[n.wheelF-s-.14,n.wheelR-s-.14])$t(.3,.28,.015,Dt.black,D*(n.track/2),.26,q,a);if(i.id==="kaze"||i.id==="bulldog"){let D=new dt(new Se(.004,.006,.55,5),Dt.black);D.position.set(-u*.35,mt+.28,ht+.45),D.rotation.x=-.25,a.add(D)}i.id==="tundra"&&$t(.8,.012,.14,c,0,A+.045,H-.2,a);{let D=new P(0,x[1][1]-x[0][1],x[1][0]-x[0][0]).normalize(),q=new P(0,-D.z,D.y).normalize(),vt=new P(0,x[1][1],x[1][0]).addScaledVector(D,-.08).addScaledVector(q,.012),gt=new dt(new Ee(_(vt.y)*2*.95,.11),new ce({map:__(r.banner||i.name+" RACING"),roughness:.5}));gt.position.copy(vt),gt.lookAt(vt.clone().add(q)),a.add(gt);let Xt=i.id.charCodeAt(0)+i.id.charCodeAt(1),U=(pt,Et,ae,Te)=>{for(let He of[1,-1]){let oe=new dt(new Ee(Te,Te/4),new ce({map:v_(Xt+pt),transparent:!0,roughness:.45}));oe.position.set(He*(M(Et,ae)+.007),ae,Et),oe.rotation.y=He*Math.PI/2,a.add(oe)}};U(0,n.wheelF-.02,s*2+.16+((ot=n.ride)!=null?ot:0),.5),U(1,n.wheelR+.05,s*2+.17+((St=n.ride)!=null?St:0),.46),U(2,(n.wheelF+n.wheelR)/2+.15,at+.17,.62);let wt=new ce({color:14687774,roughness:.5}),Z=new dt(new ei(.06,.018,6,12),wt);Z.position.set(-u*.3,Mt+.02,G+.1),a.add(Z);let tt=new dt(new ei(.06,.018,6,12),wt);tt.position.set(u*.34,at+.02,ht-.08),a.add(tt);for(let pt of[1,-1]){let Et=$t(.22,.015,.12,Dt.carbon,pt*u*.42,Mt+.12,G-.05,a);Et.rotation.z=pt*.25}for(let pt of[1,-1])Ye(.02,.02,Dt.chrome,pt*u*.3,n.upper[3][1]+.015,G-.25,"y",a,8)}$t(u*.86,.05,h*.82,Dt.black,0,at+0,0,a);let Ut=[],Ct=s+((Ht=n.ride)!=null?Ht:0),R=new ce({color:r.caliper,roughness:.4,metalness:.3});for(let[D,q,vt]of[[n.wheelF,1,!0],[n.wheelF,-1,!0],[n.wheelR,1,!1],[n.wheelR,-1,!1]]){let gt=new Pe;gt.position.set(q*n.track/2,Ct,D);let Xt=b_(s,vt?.25:.27,r,q);gt.add(Xt);let U=$t(.07,s*.36,s*.26,R,-q*0,s*.3,-s*.3,gt);U.rotation.x=.8,a.add(gt),Ut.push({pivot:gt,wheel:Xt,front:vt,side:q,z:D})}let b=new dt(new Ee(u*1.35,h*1.2),new be({map:M_(),transparent:!0,depthWrite:!1,opacity:.8}));b.rotation.x=-Math.PI/2,b.position.y=.03,b.renderOrder=2;let O=new Pe,K=new Pe;O.add(a);for(let D of Ut)a.remove(D.pivot),K.add(D.pivot);let nt=Hd(a);if(e.outline!==!1)for(let D of nt)(D.material===o||D.material===Dt.glass||D.material===Dt.trim||D.material===Dt.carbon)&&Vd(D,D.material===o?0:.014);for(let D of Ut){let q=Hd(D.wheel);if(e.outline!==!1)for(let vt of q)vt.material===Dt.tire&&Vd(vt,.016);D.pivot.children.forEach(vt=>{vt.isMesh&&(vt.castShadow=!1)})}K.add(O),K.add(b);let Q=new Set([o,Dt.glass,Dt.black,rt,J,Dt.tire]),It=[];a.children.forEach(D=>{D.isMesh&&!Q.has(D.material)&&!(D.userData.outlineOf&&D.userData.outlineOf.material===o)&&It.push(D)});for(let D of Ut)D.wheel.children.forEach(q=>{q.isMesh&&q.material!==Dt.tire&&!q.userData.outlineOf&&It.push(q)});for(let D of Ut)D.pivot.children.forEach(q=>{q.isMesh&&It.push(q)});for(let D of It)D.userData.detail=!0;let _t=[];return K.traverse(D=>{D.isMesh&&D.castShadow&&_t.push(D)}),{root:K,chassis:O,wheels:Ut,bodyMat:o,headMat:J,tailMat:rt,spec:i,detail:It,casters:_t,far:!1}}function Wd(i,t){if(i.far!==t){i.far=t;for(let e of i.detail)e.visible=!t;for(let e of i.casters)e.castShadow=!t}}function Xd(i,t,e,n){var a;for(let o of i.wheels)o.wheel.rotation.x=t.wheelSpin,o.front&&(o.pivot.rotation.y=t.steer);let s=Math.max(-.05,Math.min(.05,t.ay*.005)),r=Math.max(-.025,Math.min(.025,-t.ax*.0025));i.chassis.rotation.z+=(s-i.chassis.rotation.z)*Math.min(1,e*4),i.chassis.rotation.x+=(r-i.chassis.rotation.x)*Math.min(1,e*3),i.tailMat.emissiveIntensity=n?3:(a=i._tailBase)!=null?a:.35}var Io=class{constructor(t,e,n,s,r,a){this.spec=t,this.model=e,this.fi=n,this.d=s,this.targetD=s,this.dv=0,this.v=0,this.skill=r,this.grip=a,this.top=Math.min(88,54+t.hp/19)*r,this.mu=(t.muFront+t.muRear)/2*a*1.06,this.laneTimer=1+Math.random()*2.5,this.stopAt=1/0,this.wheelSpin=0,this.steer=0,this.ahead=!0,this.h=0,this.pose={},this.bump=0}update(t,e,n,s){var f;let r=e.hw;if(!s){this.v=0,this.place(e,t);return}let a=this.top,o={};for(let m=3;m<=80;m+=3){e.sample(this.fi+m,o);let v=Math.abs(o.k);if(v<1e-4)continue;let p=Math.sqrt(this.mu*9.81/v),g=m*Je;a=Math.min(a,Math.sqrt(p*p+2*10*g))}let l=n.idx-this.fi;l>0&&((f=n.t)!=null?f:99)>8?a*=1+Math.min(.25,l/250):l<-160&&(a*=.9),this.bump>0&&(this.bump-=t,a*=.8),this.fi>this.stopAt&&(a=0);let c=8*(1-.55*Math.min(1,this.v/this.top));this.v+=me(a-this.v,-13*t,c*t),this.v=Math.max(0,this.v),this.laneTimer-=t,this.laneTimer<=0&&(this.targetD=(Math.random()*2-1)*(r-1.8),this.laneTimer=1.5+Math.random()*3);let h=n.idx-this.fi;h>0&&h<16&&Math.abs(n.lat-this.d)<2.8&&(this.targetD=n.lat>0?n.lat-3.2:n.lat+3.2,this.targetD=me(this.targetD,-(r-1.4),r-1.4)),e.sample(this.fi+10,o);let u=me(o.k*400,-1,1)*(r-2),d=me(this.targetD*.6+u*.4,-(r-1.3),r-1.3);this.dv+=(me((d-this.d)*2.6,-5,5)-this.dv)*Math.min(1,t*6),this.d+=this.dv*t,this.d=me(this.d,-(r-1.1),r-1.1),this.fi+=this.v*t/Je,this.place(e,t)}place(t,e){let n=t.sample(this.fi,this.pose);this.x=n.x+n.lx*this.d,this.z=n.z+n.lz*this.d,this.y=n.y;let s=Math.atan2(this.dv,Math.max(this.v,3));this.h=n.h+s*.9,this.steer=me(n.k*2.6+s,-.5,.5),this.slope=n.slope,this.wheelSpin+=this.v/this.spec.wheelRadius*e;let r=this.model;r.root.position.set(this.x,this.y,this.z),r.root.rotation.set(-Math.atan(this.slope),this.h,0,"YXZ");for(let a of r.wheels)a.wheel.rotation.x=this.wheelSpin,a.front&&(a.pivot.rotation.y=this.steer);r.chassis.rotation.z=me(n.k*this.v*this.v*.008,-.07,.07)}get vx(){return Math.sin(this.h)*this.v}get vz(){return Math.cos(this.h)*this.v}};var Lo=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this.musicOn=!0,this.musicVol=.3,this.sfxVol=.8}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-20,this.comp.knee.value=12,this.comp.ratio.value=4,this.comp.attack.value=.005,this.comp.release.value=.2,this.comp.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(this.comp),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?this.musicVol:0,this.musicBus.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let _=0;_<n;_++)s[_]=Math.random()*2-1;this.engGain=e.createGain(),this.engGain.gain.value=0,this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=1.4;let r=e.createWaveShaper(),a=new Float32Array(1024);for(let _=0;_<1024;_++){let S=_/512-1;a[_]=Math.tanh(S*1.6)}r.curve=a,this.oscs=[{o:e.createOscillator(),type:"sawtooth",mul:1,g:.38},{o:e.createOscillator(),type:"sine",mul:.5,g:.6},{o:e.createOscillator(),type:"triangle",mul:2,g:.16},{o:e.createOscillator(),type:"sawtooth",mul:1.005,g:.25}];let o=e.createGain();o.gain.value=.5;for(let _ of this.oscs){_.o.type=_.type;let S=e.createGain();S.gain.value=_.g,_.o.connect(S),S.connect(o),_.o.start()}this.rumble=e.createOscillator(),this.rumble.frequency.value=18;let l=e.createGain();l.gain.value=.15,this.rumble.connect(l),l.connect(o.gain),this.rumble.start(),o.connect(r),r.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.sfx),this.tireGain=e.createGain(),this.tireGain.gain.value=0;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=3200,c.Q.value=.5;let h=e.createBiquadFilter();h.type="highpass",h.frequency.value=700,h.Q.value=.5,this.tireGain.connect(h),h.connect(c),c.connect(this.sfx);let u=e.createGain();u.gain.value=1,u.connect(this.tireGain),this.sqOscs=[{o:e.createOscillator(),type:"triangle",mul:1,g:.55},{o:e.createOscillator(),type:"sine",mul:1.5,g:.22},{o:e.createOscillator(),type:"triangle",mul:1.012,g:.3}];let d=e.createGain();d.gain.value=38;let f=e.createOscillator();f.frequency.value=6.3,f.start();let m=e.createOscillator();m.frequency.value=11.7,m.start();let v=e.createGain();v.gain.value=.6,f.connect(d),m.connect(v),v.connect(d);let p=this.loopNoise(),g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=18;let M=e.createGain();M.gain.value=3,p.connect(g),g.connect(M),M.connect(d);for(let _ of this.sqOscs){_.o.type=_.type,_.o.frequency.value=1150*_.mul,d.connect(_.o.frequency);let S=e.createGain();S.gain.value=_.g*.5,_.o.connect(S),S.connect(u),_.o.start()}let x=this.loopNoise(),y=e.createBiquadFilter();y.type="lowpass",y.frequency.value=25;let A=e.createGain();A.gain.value=1.2,x.connect(y),y.connect(A),A.connect(u.gain),this.tireSrc=this.loopNoise();let E=e.createBiquadFilter();E.type="bandpass",E.frequency.value=2200,E.Q.value=.8;let T=e.createGain();T.gain.value=.35,this.tireSrc.connect(E),E.connect(T),T.connect(this.tireGain),this.gravelSrc=this.loopNoise();let I=e.createBiquadFilter();I.type="lowpass",I.frequency.value=900,this.gravelGain=e.createGain(),this.gravelGain.gain.value=0,this.gravelSrc.connect(I),I.connect(this.gravelGain),this.gravelGain.connect(this.sfx),this.windSrc=this.loopNoise();let k=e.createBiquadFilter();k.type="lowpass",k.frequency.value=420,this.windGain=e.createGain(),this.windGain.gain.value=0,this.windSrc.connect(k),k.connect(this.windGain),this.windGain.connect(this.sfx),this.startMusic()}loopNoise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setSfxVol(t){this.sfxVol=t,this.sfx&&(this.sfx.gain.value=t)}setMusicVol(t){this.musicVol=t,this.musicBus&&this.musicOn&&(this.musicBus.gain.value=t)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?this.musicVol:0,this.ctx.currentTime,.2)}update(t,e,n,s,r,a,o){if(!this.ctx)return;let l=this.ctx.currentTime;if(!o){this.engGain.gain.setTargetAtTime(0,l,.08),this.tireGain.gain.setTargetAtTime(0,l,.05),this.windGain.gain.setTargetAtTime(0,l,.1),this.gravelGain.gain.setTargetAtTime(0,l,.1);return}let c=t.rpm,h=c/60*(e.cylinders/2)*.5;for(let p of this.oscs)p.o.frequency.setTargetAtTime(h*p.mul,l,.02);this.rumble.frequency.setTargetAtTime(8+c/400,l,.05);let u=.35+.65*n;this.engFilter.frequency.setTargetAtTime(220+c*.22*u+n*500,l,.04);let d=Math.min(1,s)*(r?0:1)*Math.min(1,a/6),f=Math.max(0,(d-.15)/.85),m=f*f*(3-2*f);this.engGain.gain.setTargetAtTime((.1+.08*u)*(1-.22*m),l,.05),this.tireGain.gain.setTargetAtTime(m*.07,l,.18);let v=1e3+m*350+Math.min(1,a/50)*120;for(let p of this.sqOscs)p.o.frequency.setTargetAtTime(v*p.mul,l,.25);this.gravelGain.gain.setTargetAtTime(r?Math.min(.18,a/90):0,l,.08),this.windGain.gain.setTargetAtTime(Math.min(.12,(a/70)**2*.12),l,.15)}burst(t,e,n,s="lowpass"){if(!this.ctx)return;let r=this.ctx,a=r.currentTime,o=r.createBufferSource();o.buffer=this.noiseBuf;let l=r.createBiquadFilter();l.type=s,l.frequency.value=e;let c=r.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(l),l.connect(c),c.connect(this.sfx),o.start(a,Math.random()),o.stop(a+t+.05)}tone(t,e,n=.2,s="sine",r=0,a){if(!this.ctx)return;let o=this.ctx,l=o.currentTime+r,c=o.createOscillator();c.type=s,c.frequency.value=t;let h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(n,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(a||this.sfx),c.start(l),c.stop(l+e+.05)}crash(t){this.burst(.3,500+t*25,Math.min(.32,.1+t*.015)),this.tone(70,.22,Math.min(.22,t*.012),"sine")}shift(){this.burst(.06,2200,.05,"bandpass")}backfire(){this.burst(.1,280,.18)}click(){this.tone(880,.05,.05,"triangle")}checkpoint(){[660,880,1320].forEach((t,e)=>this.tone(t,.18,.09,"triangle",e*.09))}countdown(t){this.tone(t?1046:523,t?.5:.22,.1,"triangle")}score(){this.tone(1320,.12,.06,"triangle"),this.tone(1760,.14,.05,"triangle",.06)}gameOver(){[523,440,349,262].forEach((t,e)=>this.tone(t,.3,.08,"triangle",e*.18))}startMusic(){let t=this.ctx,e=112,n=60/e/4,s=[0,0,12,0,0,0,10,0,0,0,12,0,7,0,10,0],r=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],a=[0,1,2,1,0,2,1,2],o=0,l=t.currentTime+.1,c=u=>440*Math.pow(2,(u-69)/12),h=()=>{if(this.ctx){for(;l<t.currentTime+.2;){let u=Math.floor(o/16)%4,d=o%16,f=r[u];this.musicOn&&((s[d]!==0||d%4===0)&&this.tone(c(f[0]-24+(s[d]||0)),n*1.8,.14,"triangle",l-t.currentTime,this.musicBus),d%2===0&&this.tone(c(f[a[d/2%8]]+12),n*1.5,.05,"triangle",l-t.currentTime,this.musicBus),d%4===0&&this.kick(l),d%8===4&&this.snare(l),d%2===1&&this.hat(l)),l+=n,o++}this._musicTimer=setTimeout(h,60)}};h()}kick(t){let e=this.ctx,n=e.createOscillator(),s=e.createGain();n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(40,t+.15),s.gain.setValueAtTime(.35,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),n.connect(s),s.connect(this.musicBus),n.start(t),n.stop(t+.25)}snare(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=1500;let r=e.createGain();r.gain.setValueAtTime(.14,t),r.gain.exponentialRampToValueAtTime(.001,t+.15),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.2)}hat(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;let r=e.createGain();r.gain.setValueAtTime(.035,t),r.gain.exponentialRampToValueAtTime(.001,t+.04),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.06)}};var Do=class{constructor(){this.keys=new Set,this.events=[],this.steer=0,this.touch={left:!1,right:!1,gas:!1,brake:!1,hb:!1},this.touchActive=!1,window.addEventListener("keydown",t=>{if(!(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),!t.repeat){let e={KeyC:"camera",KeyR:"reset",Escape:"pause",KeyP:"pause",KeyE:"shiftUp",KeyQ:"shiftDown",KeyM:"mute",Enter:"enter"};e[t.code]&&this.events.push(e[t.code])}this.keys.add(t.code)}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),this.gpPrev={}}bindTouch(t){t.querySelectorAll("[data-touch]").forEach(n=>{let s=n.dataset.touch,r=o=>{o.preventDefault(),this.touch[s]=!0,n.classList.add("on"),this.touchActive=!0},a=o=>{o.preventDefault(),this.touch[s]=!1,n.classList.remove("on")};n.addEventListener("touchstart",r,{passive:!1}),n.addEventListener("touchend",a,{passive:!1}),n.addEventListener("touchcancel",a,{passive:!1}),n.addEventListener("mousedown",r),n.addEventListener("mouseup",a),n.addEventListener("mouseleave",a)}),t.querySelectorAll("[data-tap]").forEach(n=>{n.addEventListener("touchstart",s=>{s.preventDefault(),this.events.push(n.dataset.tap)},{passive:!1}),n.addEventListener("click",()=>this.events.push(n.dataset.tap))})}down(...t){return t.some(e=>this.keys.has(e))}read(t,e){var d,f,m,v,p,g;let n=this.touch,s=this.down("KeyW","ArrowUp")||n.gas?1:0,r=this.down("KeyS","ArrowDown")||n.brake?1:0,a=this.down("Space")||n.hb?1:0,o=this.down("KeyA","ArrowLeft")||n.left,l=this.down("KeyD","ArrowRight")||n.right,c=(o?1:0)-(l?1:0),h=null,u=navigator.getGamepads?navigator.getGamepads():[];for(let M of u){if(!M)continue;let x=M.axes[0]||0;Math.abs(x)>.12&&(h=-x);let y=((d=M.buttons[7])==null?void 0:d.value)||0,A=((f=M.buttons[6])==null?void 0:f.value)||0;s=Math.max(s,y,(m=M.buttons[0])!=null&&m.pressed?1:0),r=Math.max(r,A,(v=M.buttons[2])!=null&&v.pressed?1:0),a=Math.max(a,(p=M.buttons[1])!=null&&p.pressed?1:0,(g=M.buttons[5])!=null&&g.pressed?1:0);let E=(T,I)=>{var _;let k=!!((_=M.buttons[T])!=null&&_.pressed);k&&!this.gpPrev[T]&&this.events.push(I),this.gpPrev[T]=k};E(3,"camera"),E(9,"pause"),E(8,"reset"),E(12,"shiftUp"),E(13,"shiftDown");break}if(h!==null)this.steer=h;else{let M=c===0?7:Math.sign(c)!==Math.sign(this.steer)&&this.steer!==0?9:4.2-Math.min(1.8,e/40),x=c-this.steer;this.steer+=Math.sign(x)*Math.min(Math.abs(x),M*t)}return{throttle:s,brake:r,handbrake:a,steer:this.steer}}takeEvents(){let t=this.events;return this.events=[],t}};function qd(i){let t=new Pe,e=new ti(900,32,16),n=new we({side:Ue,depthWrite:!1,fog:!1,uniforms:{top:{value:new bt(i.sky.top)},horizon:{value:new bt(i.sky.horizon)},bottom:{value:new bt(i.sky.bottom)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.6),0.7)) : mix(horizon, bottom, min(1.0,-h*4.0));
      gl_FragColor = vec4(c,1.0); }`});t.add(new dt(e,n));let s=new P(...i.sun.dir).normalize(),r=document.createElement("canvas");r.width=r.height=128;let a=r.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);i.night?(o.addColorStop(0,"rgba(235,240,255,1)"),o.addColorStop(.25,"rgba(220,230,255,0.95)"),o.addColorStop(.3,"rgba(160,170,255,0.25)"),o.addColorStop(1,"rgba(0,0,0,0)")):(o.addColorStop(0,"rgba(255,255,240,1)"),o.addColorStop(.2,"rgba(255,250,220,0.95)"),o.addColorStop(.45,"rgba(255,220,160,0.25)"),o.addColorStop(1,"rgba(255,200,120,0)")),a.fillStyle=o,a.fillRect(0,0,128,128);let l=new dn(r),c=new is(new Ii({map:l,fog:!1,depthWrite:!1,transparent:!0}));if(c.position.copy(s).multiplyScalar(800),c.scale.setScalar(i.night?70:150),t.add(c),i.night){let u=new Float32Array(4500);for(let f=0;f<1500;f++){let m=Math.random()*Math.PI*2,v=Math.acos(Math.random()*.9+.1);u[f*3]=850*Math.sin(v)*Math.cos(m),u[f*3+1]=850*Math.cos(v),u[f*3+2]=850*Math.sin(v)*Math.sin(m)}let d=new pe;d.setAttribute("position",new ue(u,3)),t.add(new Ks(d,new Zs({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1})))}return t.renderOrder=-10,t}var Qr=class{constructor(t,e=16777215,n=260){this.max=n,this.pos=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n).fill(1),this.base=new Float32Array(n),this.op=new Float32Array(n);let s=new pe;s.setAttribute("position",new ue(this.pos,3)),s.setAttribute("size",new ue(this.size,1)),s.setAttribute("alpha",new ue(this.alpha,1));let r=new we({transparent:!0,depthWrite:!1,uniforms:{color:{value:new bt(e)},scale:{value:innerHeight*.5}},vertexShader:`attribute float size; attribute float alpha; varying float a; uniform float scale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
          // \u0432\u043E\u0437\u043B\u0435 \u043A\u0430\u043C\u0435\u0440\u044B \u0434\u044B\u043C \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0435 \u0437\u0430\u043B\u0435\u043F\u043B\u044F\u0435\u0442 \u044D\u043A\u0440\u0430\u043D
          a = alpha * smoothstep(3.0, 9.0, -mv.z);
          gl_PointSize = min(size * scale / -mv.z, 260.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 color; varying float a;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d)*4.0; if (r > 1.0) discard; gl_FragColor = vec4(color, a * (1.0 - r) * (1.0 - r)); }`});this.points=new Ks(s,r),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.next=0}emit(t,e,n,s,r,a,o=.5){let l=this.next;this.next=(this.next+1)%this.max,this.pos[l*3]=t+(Math.random()-.5)*.3,this.pos[l*3+1]=e+.35,this.pos[l*3+2]=n+(Math.random()-.5)*.3;let c=Math.random()*Math.PI*2,h=.8+Math.random()*1.4;this.vel[l*3]=s*.08+Math.cos(c)*h,this.vel[l*3+1]=.08+Math.random()*.15,this.vel[l*3+2]=r*.08+Math.sin(c)*h,this.life[l]=0,this.maxLife[l]=1.4+Math.random()*.8*a,this.base[l]=1.1+Math.random()*.5,this.op[l]=o}update(t){let e=1-t*1.5;for(let s=0;s<this.max;s++){if(this.op[s]===0)continue;this.life[s]+=t;let r=this.life[s]/this.maxLife[s];if(r>=1){this.op[s]=0,this.alpha[s]=0;continue}this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]+=this.vel[s*3+1]*t,this.pos[s*3+2]+=this.vel[s*3+2]*t,this.vel[s*3]*=e,this.vel[s*3+2]*=e,this.size[s]=this.base[s]*(1+r*2.4),this.alpha[s]=this.op[s]*(1-r)*Math.min(1,this.life[s]*8)}let n=this.points.geometry.attributes;n.position.needsUpdate=!0,n.size.needsUpdate=!0,n.alpha.needsUpdate=!0}clear(){this.op.fill(0),this.alpha.fill(0)}dispose(t){t.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()}},Uo=class{constructor(t,e=2400,n=1118481,s=.55){this.max=e;let r=new pe;this.pos=new Float32Array(e*4*3),this.alpha=new Float32Array(e*4);let a=new Uint32Array(e*6);for(let l=0;l<e;l++){let c=l*4;a.set([c,c+1,c+2,c+1,c+3,c+2],l*6)}r.setAttribute("position",new ue(this.pos,3)),r.setAttribute("alpha",new ue(this.alpha,1)),r.setIndex(new ue(a,1));let o=new we({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{color:{value:new bt(n)},op:{value:s}},vertexShader:"attribute float alpha; varying float a; void main(){ a = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 color; uniform float op; varying float a; void main(){ gl_FragColor = vec4(color, a*op); }"});this.mesh=new dt(r,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.n=0,this.last=[null,null,null,null]}add(t,e,n,s,r,a,o){let l=this.last[t],c=.13,h={x:e,y:n+.045,z:s,lx:r,lz:a};if(l&&o>0&&(e-l.x)**2+(s-l.z)**2<4){if((e-l.x)**2+(s-l.z)**2<.09)return;let u=this.n%this.max;this.n++;let d=this.pos,f=u*12;d[f]=l.x+l.lx*c,d[f+1]=l.y,d[f+2]=l.z+l.lz*c,d[f+3]=l.x-l.lx*c,d[f+4]=l.y,d[f+5]=l.z-l.lz*c,d[f+6]=e+r*c,d[f+7]=h.y,d[f+8]=s+a*c,d[f+9]=e-r*c,d[f+10]=h.y,d[f+11]=s-a*c;let m=Math.min(1,o);this.alpha.set([m,m,m,m],u*4),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.alpha.needsUpdate=!0}this.last[t]=o>0?h:null}clear(){this.pos.fill(0),this.alpha.fill(0),this.mesh.geometry.attributes.position.needsUpdate=!0,this.last=[null,null,null,null]}},Fo=class{constructor(t,e=2500){this.n=e;let n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*80,n[r*3+1]=Math.random()*40,n[r*3+2]=(Math.random()-.5)*80;let s=new pe;s.setAttribute("position",new ue(n,3)),this.pts=new Ks(s,new Zs({color:16777215,size:.18,transparent:!0,opacity:.9,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts)}update(t,e){let n=this.pts.geometry.attributes.position,s=n.array;for(let r=0;r<this.n;r++)s[r*3+1]-=t*(2+r%5*.4),s[r*3]+=Math.sin(r+performance.now()*5e-4)*t*.6,s[r*3+1]<-2&&(s[r*3+1]+=40);n.needsUpdate=!0,this.pts.position.set(0,e.position.y-15,0);for(let r=0;r<this.n;r++){let a=s[r*3],o=s[r*3+2];a-e.position.x>40?s[r*3]-=80:a-e.position.x<-40&&(s[r*3]+=80),o-e.position.z>40?s[r*3+2]-=80:o-e.position.z<-40&&(s[r*3+2]+=80)}}};function Yd(i){let t=new pi,e=new ti(50,32,16),n=new we({side:Ue,uniforms:{top:{value:new bt(i.sky.top)},horizon:{value:new bt(i.sky.horizon).lerp(new bt(14541802),i.night?0:.45)},ground:{value:new bt(i.ground.far).lerp(new bt(5921374),.7).multiplyScalar(i.night?.25:.55)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.5),0.6)) : mix(horizon*0.8, ground, min(1.0,-h*6.0)); gl_FragColor = vec4(c,1.0); }`});t.add(new dt(e,n));let s=new P(...i.sun.dir).normalize(),r=new dt(new ti(i.night?2:4,16,8),new be({color:new bt(i.sun.color).multiplyScalar(i.night?2:12)}));if(r.position.copy(s).multiplyScalar(40),t.add(r),i.night){let a=[16723622,2680831,16767370,8191823,16757611];for(let o=0;o<40;o++){let l=Math.random()*Math.PI*2,c=Math.random()*12-2,h=new dt(new ye(3+Math.random()*4,1+Math.random()*3,.5),new be({color:new bt(a[o%a.length]).multiplyScalar(2.5)}));h.position.set(Math.cos(l)*40,c,Math.sin(l)*40),h.lookAt(0,c,0),t.add(h)}}else for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,l=8+Math.random()*20,c=new dt(new ti(4+Math.random()*5,8,6),new be({color:new bt(16777215).multiplyScalar(1.4)}));c.scale.y=.35,c.position.set(Math.cos(o)*42,l,Math.sin(o)*42),t.add(c)}return t}function $d(i){var v;let n=document.createElement("canvas");n.width=2048,n.height=256;let s=n.getContext("2d"),r=(()=>{let p=12345;return()=>(p=p*16807%2147483647,p/2147483647)})(),a=new bt(i.fog.color),o=(p,g,M,x,y)=>{s.fillStyle=p,s.beginPath(),s.moveTo(0,256);let A=[r()*10,r()*10,r()*10];for(let E=0;E<=2048;E+=4){let T=E/2048*Math.PI*2,I=Math.sin(T*x+A[0])*.5+Math.sin(T*x*2.3+A[1])*.3+Math.sin(T*x*5.7+A[2])*.2;I+=(r()-.5)*y,s.lineTo(E,256-M-(I*.5+.5)*g)}s.lineTo(2048,256),s.closePath(),s.fill()},l=(p,g)=>"#"+new bt(p).lerp(a,g).getHexString(),c=(v=i.horizon)!=null?v:i.id;if(c==="hills")o(l(8032138,.55),80,14,3,.04),o(l(6257250,.4),45,4,6,.05);else if(c==="sea")o(l(7049082,.6),34,0,2,.02);else if(c==="desert")o(l(10115658,.55),110,20,3,.05),o(l(11556922,.35),70,8,5,.08);else if(c==="snow"){o(l(9413565,.5),190,20,4,.12),s.globalCompositeOperation="source-atop";let p=s.createLinearGradient(0,0,0,256);p.addColorStop(0,"#ffffff"),p.addColorStop(.45,"rgba(255,255,255,0.8)"),p.addColorStop(.6,"rgba(255,255,255,0)"),s.fillStyle=p,s.fillRect(0,0,2048,256),s.globalCompositeOperation="source-over",o(l(7307930,.35),90,6,7,.15)}else{let p=0;for(;p<2048;){let g=14+r()*40,M=30+Math.pow(r(),1.5)*190;s.fillStyle=l(1314854,.25),s.fillRect(p,256-M,g,M);for(let x=256-M+4;x<252;x+=6)for(let y=p+3;y<p+g-3;y+=5)r()<.18&&(s.fillStyle=["#ffd98a","#9fd8ff","#ff9ad5"][Math.floor(r()*3)],s.fillRect(y,x,2,2));r()<.15&&(s.fillStyle="#ff2020",s.fillRect(p+g/2-1,256-M-6,2,2)),p+=g+r()*6}}let h=new dn(n);h.colorSpace=Be,h.wrapS=di;let u=820,d=c==="snow"?230:c==="city"?190:140,f=new Se(u,u,d,96,1,!0),m=new dt(f,new be({map:h,transparent:!0,side:Ue,fog:!1,depthWrite:!1}));return m.userData.h=d,m.renderOrder=-9,m}function Zd(i){let t=new Pe;if(i.night)return t;let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");for(let a=0;a<16;a++){let o=40+Math.random()*176,l=50+Math.random()*40,c=20+Math.random()*30,h=n.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,256,128)}let s=new dn(e),r=i.id==="desert"?16769736:16777215;for(let a=0;a<14;a++){let o=new is(new Ii({map:s,color:r,fog:!1,depthWrite:!1,transparent:!0,opacity:.75})),l=Math.random()*Math.PI*2,c=450+Math.random()*300;o.position.set(Math.cos(l)*c,160+Math.random()*180,Math.sin(l)*c);let h=180+Math.random()*220;o.scale.set(h,h*.45,1),t.add(o)}return t}var No={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},S_=new $s(-1,1,1,-1,0,1),Nh=class extends pe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},w_=new Nh,Bi=class{constructor(t){this._mesh=new dt(w_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,S_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Bo=class extends En{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ui.clone(t.uniforms),this.material=new we({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Bi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jr=class extends En{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oo=class extends En{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ko=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bo(No),this.copyPass.material.blending=Qn,this.clock=new _o}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jr!==void 0&&(a instanceof jr?n=!0:a instanceof Oo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zo=class extends En{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Kd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ir=class i extends En{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,a,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new cn(r,a,{type:Vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new cn(r,a,{type:Vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Kd;this.highPassUniforms=Ui.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new we({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=No;this.copyUniforms=Ui.clone(h.uniforms),this.blendMaterial=new we({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new Bi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new we({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new we({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ir.BlurDirectionX=new it(1,0);ir.BlurDirectionY=new it(0,1);var Jd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ho=class extends En{constructor(){super();let t=Jd;this.uniforms=Ui.clone(t.uniforms),this.material=new po({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qd="wss://endless-drift-server.onrender.com";var Wt={ws:null,id:0,code:"",host:0,isPublic:!1,state:"off",mm:null,mmStatus:null,config:null,players:new Map,results:[],racers:[],on:{},lastSend:0,get isHost(){return this.id&&this.id===this.host},get connected(){return this.ws&&this.ws.readyState===1},connect(i,t){return this.disconnect(!0),this.state="connecting",new Promise((e,n)=>{let s;try{s=new WebSocket(i)}catch{this.state="off",n(new Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"));return}this.ws=s;let r=setTimeout(()=>{s.readyState!==1&&(s.close(),n(new Error("\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \xAB\u043F\u0440\u043E\u0441\u044B\u043F\u0430\u0442\u044C\u0441\u044F\xBB \u0434\u043E \u043C\u0438\u043D\u0443\u0442\u044B \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.")))},65e3);s.onopen=()=>{clearTimeout(r),this.send({t:"join",...t})},s.onerror=()=>{clearTimeout(r),this.state==="connecting"&&n(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"))},s.onclose=()=>{clearTimeout(r);let a=this.state;this.state="off",this.players.clear(),a!=="off"&&this.ws===s&&this.emit("close")},s.onmessage=a=>{let o;try{o=JSON.parse(a.data)}catch{return}if(o.t==="joined"&&e(o),o.t==="error"&&this.state==="connecting"){n(new Error(o.text));return}this.handle(o)}})},disconnect(i){if(this.mm=null,this.mmStatus=null,this.ws){let t=this.ws;this.ws=null,this.state="off";try{t.close()}catch{}}this.players.clear(),i||this.emit("close")},send(i){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(i))},emit(i,...t){this.on[i]&&this.on[i](...t)},addPlayer(i){let t=this.players.get(i.id);if(t)return Object.assign(t,i),t;let e={...i,buf:[],vis:null,model:null,fin:null};return this.players.set(i.id,e),e},handle(i){switch(i.t){case"joined":this.id=i.id,this.code=i.code,this.host=i.host,this.config=i.config,this.isPublic=i.isPublic,this.mm=i.mm||null,this.mmStatus=i.mm?{count:i.players.length,size:i.mm.size,state:"search",left:0}:null,this.results=[],this.state="lobby",this.players.clear();for(let t of i.players)t.id!==this.id&&this.addPlayer(t);this.emit("joined",i);break;case"player":i.p.id!==this.id?this.addPlayer(i.p):this.me=i.p,this.emit("player",i.p);break;case"left":{let t=this.players.get(i.id);this.players.delete(i.id),this.host=i.host,this.emit("left",t,i.id);break}case"config":this.config=i.config,this.emit("config",i.config);break;case"start":this.state="racing",this.results=[],this.racers=i.racers,this.config=i.config;for(let t of i.players)if(t.id!==this.id){let e=this.addPlayer(t);e.buf=[],e.vis=null,e.fin=null}this.emit("start",i);break;case"s":{let t=this.players.get(i.id);if(!t)break;let[e,n,s,r,a,o,l,c]=i.d;t.buf.push({t:performance.now(),x:e,y:n,z:s,h:r,spd:a,idx:o,steer:l,slope:c}),t.buf.length>30&&t.buf.shift();break}case"fin":{this.results.push(i.r);let t=this.players.get(i.r.id);t&&(t.fin=i.r),this.emit("fin",i.r);break}case"mm":this.mmStatus=i,this.emit("mm",i);break;case"lobby":this.state=i.state==="done"?"done":"lobby",this.results=i.results||this.results;for(let t of this.players.values())t.inRace=!1;this.emit("lobby",i);break;case"error":this.emit("error",i.text);break;default:break}},sendState(i){let t=performance.now();t-this.lastSend<66.66666666666667||(this.lastSend=t,this.send({t:"s",d:[i.x,i.roadY,i.z,i.h,i.speed,i.idx,i.steer||0,i.slope||0]}))},finish(i,t,e){this.send({t:"fin",finished:i,time:t,score:e})},sample(i){let t=i.buf;if(!t.length)return null;let e=performance.now()-120;for(;t.length>2&&t[1].t<=e;)t.shift();let n=t[0],s=t[1];if(!s||e<=n.t)return n;let r=Math.min(1,(e-n.t)/Math.max(1,s.t-n.t)),a=s.h-n.h;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;let o=(l,c)=>l+(c-l)*r;return{x:o(n.x,s.x),y:o(n.y,s.y),z:o(n.z,s.z),h:n.h+a*r,spd:o(n.spd,s.spd),idx:o(n.idx,s.idx),steer:o(n.steer,s.steer),slope:o(n.slope,s.slope)}}};var qn=[{id:"race",name:"\u0413\u043E\u043D\u043A\u0430",desc:"\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0442\u0430\u0439\u043C\u0435\u0440. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E, \u043E\u0431\u0433\u043E\u043D\u044B \u0438 \u0434\u0440\u0438\u0444\u0442.",timer:50,rivals:5,bonus:i=>Math.max(22,40-i*2)},{id:"drift",name:"\u0414\u0440\u0438\u0444\u0442",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0438 \u0442\u0440\u0430\u0441\u0441\u0430. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0437\u0430\u043D\u043E\u0441, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0441\u0435\u0440\u0438\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0432\u0440\u0435\u043C\u044F.",timer:60,rivals:0,bonus:i=>Math.max(26,42-i*1.5)},{id:"free",name:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430",desc:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430 \u0438 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0439 \u0434\u0440\u0438\u0444\u0442.",timer:0,rivals:3,bonus:()=>0}],Gh={id:"field",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D",desc:"",timer:0,rivals:0,bonus:()=>0},xi=1/240,E_=400,rf=5,ds={get(i,t){try{let e=localStorage.getItem("ed_"+i);return e?JSON.parse(e):t}catch{return t}},set(i,t){try{localStorage.setItem("ed_"+i,JSON.stringify(t))}catch{}}},Vh="ontouchstart"in window||navigator.maxTouchPoints>0;Vh&&document.body.classList.add("touch");var ft=Object.assign({vol:.8,music:!0,assist:!0,manual:!1,quality:Vh?0:1,camera:0,units:"kmh",fps:0,showFps:!1,sfxVol:.8,musicVol:.3,easy:!0,smoke:!0,outline:!0,autoRes:!0},ds.get("settings",{}));ft.handling||(ft.handling=ft.easy===!1?"real":"easy");ft.easy=ft.handling==="easy";var Pt=Object.assign({car:0,colors:{},mode:0,map:0,len:10,fieldMode:"obst"},ds.get("sel",{}));Pt.mm=Object.assign({mode:"race",len:10,size:5,carRule:"any"},Pt.mm||{});Pt.car>=re.length&&(Pt.car=0);var T_=5,af=50,mn=ds.get("records",{});for(let i of Object.keys(mn)){if(i.includes("|"))continue;let t=mn[i],e=re.find(n=>n.name===t.car);e&&!mn[i+"|"+e.id]&&(mn[i+"|"+e.id]={...t})}var an=()=>ds.set("settings",ft),Yn=()=>ds.set("sel",Pt),V=i=>document.getElementById(i),A_=V("game"),hn=new Nr({canvas:A_,antialias:!0,powerPreference:"high-performance"});hn.outputColorSpace=Be;hn.toneMapping=tr;hn.shadowMap.type=yo;var Xn=new pi,Ie=new Ke(62,1,.1,1600),of=new ns(hn);Xn.environment=of.fromScene(new Yr,.04).texture;var Fe={scale:1,t:0,frames:0,good:0},lf=()=>[1,Math.min(devicePixelRatio,1.5),Math.min(devicePixelRatio,2)][+ft.quality]||1;function Oh(){let i=Math.max(.5,lf()*(ft.autoRes?Fe.scale:1));Math.abs(hn.getPixelRatio()-i)<.01||(hn.setPixelRatio(i),$o())}function R_(i){if(!ft.autoRes||Qt!=="race"){Fe.t=0,Fe.frames=0;return}if(Fe.t+=i,Fe.frames++,Fe.t<1.5)return;let t=Fe.frames/Fe.t;Fe.t=0,Fe.frames=0;let e=ft.fps>0?Math.min(ft.fps,60):60;t<e*.82&&Fe.scale>.6?(Fe.scale=Math.max(.6,Fe.scale-.12),Fe.good=0,Oh()):t>e*.95?++Fe.good>=3&&Fe.scale<1&&(Fe.scale=Math.min(1,Fe.scale+.08),Fe.good=0,Oh()):Fe.good=0}function C_(){var t;let i=+ft.quality;if(hn.setPixelRatio(Math.max(.5,lf()*(ft.autoRes?Fe.scale:1))),hn.shadowMap.enabled=i>0,$&&$.sun){$.sun.castShadow=i>0;let e=i===2?2048:1024;$.sun.shadow.mapSize.x!==e&&($.sun.shadow.mapSize.set(e,e),(t=$.sun.shadow.map)==null||t.dispose(),$.sun.shadow.map=null)}$o()}var In=null,sr=null;function P_(){+ft.quality==2?(In||(In=new ko(hn),In.addPass(new zo(Xn,Ie)),sr=new ir(new it(innerWidth/2,innerHeight/2),.5,.45,.85),In.addPass(sr),In.addPass(new Ho)),In.setPixelRatio(hn.getPixelRatio()),In.setSize(innerWidth,innerHeight),$&&(sr.strength=$.map.night?.55:.18,sr.threshold=$.map.night?.72:.96,sr.radius=.35)):In&&(In.dispose(),In=null,sr=null)}function $o(){let i=innerWidth,t=innerHeight;hn.setSize(i,t,!1),P_(),Ie.aspect=i/t,Wh(),Ie.updateProjectionMatrix()}var ar={x:0,y:0};function Wh(){let i=innerWidth,t=innerHeight;ar.x||ar.y?Ie.setViewOffset(i,t,-i*ar.x,t*ar.y,i,t):Ie.clearViewOffset()}addEventListener("resize",$o);var Kt=new Lo;Kt.setVolume(ft.vol);Kt.musicOn=ft.music;Kt.sfxVol=ft.sfxVol;Kt.musicVol=ft.musicVol;var qo=new Do;qo.bindTouch(V("touch"));addEventListener("pointerdown",()=>Kt.init(),{once:!1});addEventListener("keydown",()=>Kt.init(),{once:!0});var Go=null,$=null,L=null,Qt="loading";function I_(){$&&(Xn.remove($.group),$.group.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(t=>{var e;(e=t.map)==null||e.dispose(),t.dispose()})}),$=null)}function ta(i,t,e={}){var x,y,A,E,T;I_();let n=sn[i],s=new Pe;Xn.add(s),Xn.fog=new no(n.fog.color,n.fog.near,n.fog.far),Xn.background=new bt(n.fog.color),Go&&Go.dispose(),Go=of.fromScene(Yd(n),.02).texture,Xn.environment=Go,Xn.environmentIntensity=n.night?.7:1,hn.toneMappingExposure=n.night?1.15:1;let r=new Wr(n.hemi.sky,n.hemi.ground,n.hemi.intensity);s.add(r);let a=new qr(n.sun.color,n.sun.intensity),o=new P(...n.sun.dir).normalize();a.shadow.camera.left=-32,a.shadow.camera.right=32,a.shadow.camera.top=32,a.shadow.camera.bottom=-32,a.shadow.camera.near=1,a.shadow.camera.far=220,a.shadow.bias=-4e-4,a.shadow.normalBias=.03,s.add(a),s.add(a.target);let l=qd(n);s.add(l);let c=$d(n);c.position.y=c.userData.h/2-45,l.add(c),l.add(Zd(n));let h=(x=e.fieldMode)!=null?x:Pt.fieldMode,u=n.field?new Co(s,n,t,+ft.quality,{props:h==="obst",flat:h==="flat"}):new Ro(s,n,t,+ft.quality,{finishIdx:(y=e.finishIdx)!=null?y:1/0}),d=new dt(new Ee(5e3,5e3),new Oe({color:n.ground.far}));d.rotation.x=-Math.PI/2,s.add(d);let f=(A=n.smoke)!=null?A:{desert:15130064,snow:16777215,city:12105928}[n.id],m=new Qr(s,f,ft.quality>0?90:50),v=new Qr(s,(E=n.dust)!=null?E:{desert:13606764,snow:16054527,city:7829375}[n.id],40),p=(T=n.skid)!=null?T:n.id==="snow"?8226968:789516,g=new Uo(s,ft.quality>0?3e3:1200,p,p===789516?.6:.4),M=n.weather==="snow"?new Fo(s,ft.quality>0?2600:900):null;$={map:n,mapIdx:i,group:s,hemi:r,sun:a,sunDir:o,sky:l,track:u,farPlane:d,smoke:m,dust:v,skids:g,snow:M,rivals:[],player:null},C_(),ea(6,-2.8)}function cf(i){var t;return i.colors[(t=Pt.colors[i.id])!=null?t:0]}function ea(i,t){let e=re[Pt.car];$.player&&$.group.remove($.player.model.root);let n=Jr(e,cf(e),{night:$.map.night,outline:ft.outline});n._tailBase=$.map.night?1.2:.35,$.group.add(n.root);let s=new To(e),r=$.track.P(i);if(s.reset(r.x+r.lx*t,r.z+r.lz*t,r.h),s.idx=i,s.lat=t,s.roadY=r.y,s.slope=0,s.roll=0,$.track.isField&&($.track.target=s,s.odo=0),$.map.night){let a=new xo(16773590,40,100,.5,.6,1.4);a.position.set(0,.8,2),a.target.position.set(0,0,25),n.root.add(a),n.root.add(a.target)}$.player={veh:s,model:n},Xh(0)}function hf(){var s,r;let{veh:i}=$.player,t=L&&i.px!==void 0?me(L.acc/xi,0,1):1,e=(a,o)=>a===void 0?o:a+(o-a)*t,n=i.h-((s=i.ph)!=null?s:i.h);return{x:e(i.px,i.x),z:e(i.pz,i.z),h:((r=i.ph)!=null?r:i.h)+n*t,y:e(i.pY,i.roadY)}}function Xh(i){let{veh:t,model:e}=$.player,n=hf();e.root.position.set(n.x,n.y+.03,n.z),e.root.rotation.set(-Math.atan(t.slope||0),n.h,Math.atan(t.roll||0),"YXZ"),Xd(e,t,i||.016,L&&L.braking)}function uf(i,t){i.ghostMats=[],i.outlines=[];let e=new Map;t.root.traverse(n=>{if(!(!n.isMesh||n.isSprite)){if(n.material.isShaderMaterial){i.outlines.push(n);return}if(!e.has(n.material)){let s=n.material.clone();s.userData.baseOp=n.material.transparent?n.material.opacity:1,s.transparent=!0,e.set(n.material,s),i.ghostMats.push(s)}n.material=e.get(n.material)}})}var L_=65,D_=55;function df(i,t){var a,o;let e=me((t-4)/14,.3,1),n=i.model,s=n?n.far?t>D_:t>L_:!1,r=n&&s!==n.far;if(r&&Wd(n,s),!(Math.abs(e-((a=i.op)!=null?a:1))<.02&&!r)){i.op=e;for(let l of i.ghostMats){let c=e*((o=l.userData.baseOp)!=null?o:1);l.opacity=c,l.transparent=c<.999}for(let l of i.outlines)l.visible=e>.95&&!(s&&l.userData.outlineOf&&l.userData.outlineOf.userData.detail)}}function U_(i){let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");e.fillStyle="rgba(0,0,0,0.55)",e.beginPath(),e.roundRect(8,8,240,48,14),e.fill(),e.fillStyle="#7cff4f",e.font="bold 30px Segoe UI, Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,33);let n=new dn(t);n.colorSpace=Be;let s=new is(new Ii({map:n,depthTest:!1,transparent:!0}));return s.scale.set(2.6,.65,1),s.position.y=2.1,s.renderOrder=10,s}function F_(i){if(i.model||!$)return;let t=re[i.car]||re[0],e=Jr(t,t.colors[i.color%t.colors.length],{night:$.map.night,outline:ft.outline});e._tailBase=$.map.night?1.2:.35,uf(i,e),i.label=U_(i.name),e.root.add(i.label),e.root.visible=!1,$.group.add(e.root),i.model=e,i.wheelSpin=0}function N_(i){!i||!i.model||($&&$.group.remove(i.model.root),i.model=null)}function B_(i){if(!L||!L.online)return;let{veh:t}=$.player;for(let e of Wt.players.values()){if(!Wt.racers.includes(e.id))continue;e.model||F_(e);let n=Wt.sample(e);if(!n)continue;e.vis=n;let s=e.model;s.root.visible=!0,s.root.position.set(n.x,n.y+.03,n.z),s.root.rotation.set(-Math.atan(n.slope||0),n.h,0,"YXZ"),e.wheelSpin+=n.spd/s.spec.wheelRadius*i;for(let r of s.wheels)r.wheel.rotation.x=e.wheelSpin,r.front&&(r.pivot.rotation.y=n.steer);df(e,Math.hypot(n.x-t.x,n.z-t.z))}}function O_(i){let t=[[6,2.8],[14,-2.8],[14,2.8],[22,-2.8],[22,2.8],[30,0]];for(let e=0;e<i;e++){let n=re[(Pt.car+1+e)%re.length],s=n.colors[(e*2+1)%n.colors.length],r=Jr(n,s,{night:$.map.night,outline:ft.outline});r._tailBase=$.map.night?1.2:.35,$.group.add(r.root);let a=new Io(n,r,t[e][0],t[e][1],.9+Math.random()*.12,$.map.grip);uf(a,r),a.ahead=t[e][0]>6||t[e][0]===6&&!1,a.place($.track,0),$.rivals.push(a)}}var qt={mode:+ft.camera,h:0,pos:new P,look:new P,shake:0,fov:62,cineT:0,cineA:0,orbit:0},k_=["\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438, \u0434\u0430\u043B\u044C\u043D\u044F\u044F","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441 \u043A\u0430\u043F\u043E\u0442\u0430","\u041A\u0430\u043C\u0435\u0440\u0430: \u043A\u0438\u043D\u043E"],or=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e};function qh(i,t=!1){let{veh:e}=$.player,n=hf(),s={x:n.x,z:n.z,h:n.h,roadY:n.y,speed:e.speed,u:e.u,vx:e.vx,vz:e.vz,spec:e.spec,slope:e.slope},r=s.speed,a=Math.sin(s.h),o=Math.cos(s.h),l=s.roadY,c=me((s.u-3)/8,0,1)*.45,h=s.h+me(or(Math.atan2(s.vx,s.vz),s.h),-.7,.7)*c;t&&(qt.h=h),qt.h+=or(h,qt.h)*Math.min(1,i*6);let u=t?1:1-Math.exp(-i*7),d=60+Math.min(9,r*.12),f=new P,m=new P;if(qt.mode===0||qt.mode===1){let v=qt.mode===0?5.4:8.2,p=qt.mode===0?1.9:3;(t||qt.y===void 0)&&(qt.y=l+p),qt.y+=(l+p-qt.y)*Math.min(1,i*6),f.set(s.x-Math.sin(qt.h)*v,Math.max(qt.y,l+1),s.z-Math.cos(qt.h)*v),$.track.isField&&(f.y=Math.max(f.y,$.track.heightAt(f.x,f.z)+.9)),m.set(s.x+Math.sin(qt.h)*2.5,l+1.05,s.z+Math.cos(qt.h)*2.5),qt.pos.copy(f),qt.look.copy(m)}else if(qt.mode===2){let v=s.spec.body;f.set(s.x+a*(v.cabin[0][0]+.25),l+v.cabin[0][1]+.55,s.z+o*(v.cabin[0][0]+.25)),m.set(s.x+a*30,l+1.3+(s.slope||0)*30,s.z+o*30),qt.pos.copy(f),qt.look.copy(m),d+=6}else{qt.cineT-=i,(qt.cineT<=0||t)&&(qt.cineT=4+Math.random()*3,qt.cineA=(Math.random()*2-1)*2.4,qt.cineD=6+Math.random()*6,qt.cineH=.8+Math.random()*3);let v=s.h+Math.PI+qt.cineA;f.set(s.x+Math.sin(v)*qt.cineD,l+qt.cineH,s.z+Math.cos(v)*qt.cineD),qt.pos.lerp(f,1-Math.exp(-i*2)),m.set(s.x,l+.8,s.z),qt.look.lerp(m,1-Math.exp(-i*12)),d=55}qt.fov+=(d-qt.fov)*Math.min(1,i*1.5),Ie.fov=qt.fov,Ie.updateProjectionMatrix(),Ie.position.copy(qt.pos),qt.shake>.001&&(Ie.position.x+=(Math.random()-.5)*qt.shake*.5,Ie.position.y+=(Math.random()-.5)*qt.shake*.5,qt.shake*=Math.exp(-i*6)),Ie.lookAt(qt.look)}function z_(i,t){let{veh:e}=$.player;qt.orbit+=i*.18;let n=t?6.2:7.5,s=e.h+(t?.75:Math.PI*.75)+Math.sin(qt.orbit)*(t?.6:.9);Ie.position.set(e.x+Math.sin(s)*n,e.roadY+(t?1.6:2.2),e.z+Math.cos(s)*n),Ie.fov=50,Ie.updateProjectionMatrix(),Ie.lookAt(e.x,e.roadY+.7,e.z)}function H_(){return sn[Pt.map].field?Gh:qn[Pt.mode]}function G_(i){let t=H_(),e=!$.track.isField&&i>0;L={mode:t,finite:e,lenKm:e?i:0,finishIdx:e?$.track.finishIdx:1/0,maxIdx:6,finished:!1,place:0,rivalFin:0,time:e?0:t.timer,score:0,dist:0,startS:$.track.P(6).s,driftTotal:0,overtakes:0,cpCount:0,nextCp:E_,maxSpeed:0,bestDrift:0,hits:0,cd:3.6,cdShown:4,started:!1,over:!1,braking:!1,drift:{active:!1,pts:0,mult:1,time:0,idle:0,angle:0},driftShowT:0,elapsed:0,acc:0}}var V_=i=>i>0?6+Math.round(i*1e3/Je):1/0;function hr(i={}){var e,n;Kt.init();let t=(e=i.len)!=null?e:sn[Pt.map].field?0:Pt.len;ta(Pt.map,(n=i.seed)!=null?n:Math.random()*1e6|0,{finishIdx:V_(t),fieldMode:i.fieldMode}),G_(t),L.online=!!i.online,W_(),O_(L.online?0:L.mode.rivals),i.onStart&&i.onStart(),qt.mode=+ft.camera,Qt="countdown",rn(null),V("hud").classList.remove("hidden"),Vh&&V("touch").classList.remove("hidden"),V("hud-mode").textContent=`${L.online?"\u041E\u043D\u043B\u0430\u0439\u043D \xB7 ":""}${L.mode.name} \xB7 ${$.map.name}${L.finite?` \xB7 ${L.lenKm} \u043A\u043C`:""}`,ar={x:0,y:0},Wh(),qh(.016,!0);try{hn.compile(Xn,Ie)}catch{}}var Vo=null;function W_(){if($.track.isField)return;if(!Vo){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");for(let s=-128;s<640;s+=64)n.fillStyle=s/64%2?"#f4f4f4":"#d62828",n.beginPath(),n.moveTo(s,0),n.lineTo(s+64,0),n.lineTo(s+128,128),n.lineTo(s+64,128),n.fill();n.fillStyle="rgba(0,0,0,0.75)",n.fillRect(96,36,320,56),n.fillStyle="#fff",n.font="bold 40px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText("\u041D\u0410\u0417\u0410\u0414 \u041D\u0415\u041B\u042C\u0417\u042F",256,66),Vo=new dn(e),Vo.colorSpace=Be}let i=$.track.wall*2,t=new dt(new Ee(i,i/4),new be({map:Vo,transparent:!0,opacity:.9}));$.group.add(t),$.backWall=t,ff()}function ff(){if(!$.backWall)return;let i=$.track.sample(Math.max($.track.base+4,3,L.maxIdx-rf/Je));$.backWall.position.set(i.x,i.y+$.track.wall/4,i.z),$.backWall.rotation.set(0,i.h,0)}function ki(i,t=1.6,e="#fff"){let n=V("hud-msg");n.textContent=i,n.style.color=e,n.classList.add("show"),clearTimeout(ki._t),ki._t=setTimeout(()=>n.classList.remove("show"),t*1e3)}var jd=0;function X_(i){let t=performance.now();return t-jd<330?!1:(jd=t,Kt.crash(Math.min(i,25)),qt.shake=i>8?Math.min(.25,i/60):0,!0)}function Yo(i){if(X_(i)&&(L.hits++,L.drift.active&&L.drift.pts>0&&i>3)){let t=V("drift-pts");t.textContent=Math.floor(L.drift.pts),t.className="drift-pts lost",V("drift-info").textContent="\u0423\u0414\u0410\u0420 \u2014 \u0441\u0435\u0440\u0438\u044F \u0441\u0433\u043E\u0440\u0435\u043B\u0430",L.driftShowT=1.3,L.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}}function q_(i){let{veh:t}=$.player;t.px=t.x,t.pz=t.z,t.ph=t.h,t.pY=t.roadY;let e=$.track,n=ft.handling==="easy",s=t.step(xi,i,n?{grip:$.map.grip*1.12,assist:ft.assist?1.15:0,manual:ft.manual,easy:!0}:{grip:$.map.grip,assist:ft.assist?.45:0,manual:ft.manual,easy:!1,real:!0});if(s.shifted&&(Kt.shift(),s.shifted>0&&i.throttle>.5&&Math.random()<.35&&Kt.backfire()),i.shiftUp=i.shiftDown=!1,e.isField){Y_(t,e);return}let r=e.project(t.x,t.z,t.idx);if(t.idx=r.idx,t.lat=r.lat,t.roadY=r.y,t.slope=r.slope,t.offroad=Math.abs(r.lat)>e.hw+.3&&Math.abs(r.k)<1/170,t.trackH=r.h,L){Qt==="race"&&(L.maxIdx=Math.max(L.maxIdx,t.idx));let u=rf/Je,d=Math.max(e.base+4,3,L.maxIdx-u);if(t.idx<d){let f=t.collideWall(Math.sin(r.h),Math.cos(r.h),(d-t.idx)*Je,.05);t.idx=d,f>4&&Yo(f)}}let a=t.spec.body,o=t.h-r.h,l=Math.abs(Math.cos(o))*a.W/2+Math.abs(Math.sin(o))*a.L/2,c=e.wall-.1-l,h=Math.sign(r.lat);if(n&&t.speed>3){let u=c-2.2,d=Math.abs(r.lat)-u;if(d>0){let f=me(d/2.2,0,1),m=t.vx*r.lx+t.vz*r.lz;if(m*h>0){let g=m*Math.min(1,f*f*9*xi);t.vx-=r.lx*g,t.vz-=r.lz*g}let v=or(r.h,t.h),p=Math.cos(v)>0?v:or(r.h+Math.PI,t.h);Math.abs(t.beta)<.7&&(t.r+=p*f*5*xi*Math.min(1,t.speed/15))}}if(Math.abs(r.lat)>c){let u=t.collideWall(-h*r.lx,-h*r.lz,Math.abs(r.lat)-c,n?.08:.25);if(n){let d=or(r.h,t.h),f=Math.cos(d)>0?d:or(r.h+Math.PI,t.h);t.h+=f*.08,t.r*=.6}u>(n?3.5:1.5)&&L&&Yo(u)}}function Y_(i,t){i.idx=6,i.lat=0,i.offroad=!1;let e=Math.sin(i.h),n=Math.cos(i.h);i.roadY=t.heightAt(i.x,i.z);let[s,r]=t.grad(i.x,i.z);i.slope=s*e+r*n,i.roll=(s*n-r*e)*.8,i.vx-=9.81*s*.85*xi,i.vz-=9.81*r*.85*xi,L&&(i.odo=(i.odo||0)+i.speed*xi);let a=i.spec.body;for(let o of t.collidersNear(i.x,i.z)){let l=i.x-o.x,c=i.z-o.z,h=Math.hypot(l,c),u=o.r+a.W*.55;if(h<u&&h>1e-4){let d=i.collideWall(l/h,c/h,u-h,.15);d>3&&L&&Yo(d)}}if(t.f.shore!==void 0&&i.x<t.f.shore-18){let o=i.collideWall(1,0,t.f.shore-18-i.x,.1);o>4&&L&&Yo(o)}}function $_(){let{veh:i}=$.player;for(let t of $.rivals)df(t,Math.hypot(t.x-i.x,t.z-i.z))}function pf(i){let{veh:t,model:e}=$.player,n=$.track,s=L._events||[],r=Qt==="race",a=r?qo.read(i,t.speed):{throttle:0,brake:0,steer:0,handbrake:0};if(Qt==="over"&&(a={throttle:0,brake:.35,steer:0,handbrake:0,noReverse:!0}),Qt==="countdown"){let o=qo.read(i,0);L.cd-=i;let l=Math.ceil(L.cd-.6);l!==L.cdShown&&(L.cdShown=l,V("countdown").textContent=l>0?l:"\u0421\u0422\u0410\u0420\u0422!",Kt.countdown(l<=0)),t.rpm+=(t.spec.idle+o.throttle*t.spec.redline*.75-t.rpm)*Math.min(1,i*6),L.cd<=.6&&(Qt="race",L.started=!0,setTimeout(()=>{V("countdown").textContent=""},700))}else{for(let l of s)l==="shiftUp"&&(a.shiftUp=!0),l==="shiftDown"&&(a.shiftDown=!0);L.acc+=i;let o=0;for(;L.acc>=xi&&o<24;)L.acc-=xi,q_(a),o++;o===24&&(L.acc=0)}L.braking=a.brake>.1&&t.u>.5;for(let o of $.rivals)o.out||o.update(i,n,{idx:t.idx,lat:t.lat,t:L.elapsed},L.started);$_(),B_(i),ff(),L.online&&Qt!=="countdown"&&Wt.sendState(t),n.update(t.idx);for(let o of $.rivals){if(o.out)continue;L.finite&&(o.stopAt=L.finishIdx+40),L.finite&&o.finOrder===void 0&&o.fi>=L.finishIdx&&(o.finOrder=++L.rivalFin);let l=o.fi>t.idx;if(r&&o.ahead&&!l&&L.mode.id==="race"&&(L.overtakes++,ki("\u041E\u0411\u0413\u041E\u041D!  +300",1.2,"#7cff4f"),Kt.score()),o.ahead=l,L.finite&&t.idx-o.fi>170){o.out=!0,o.model.root.visible=!1;continue}t.idx-o.fi>170&&(o.fi=t.idx+180+Math.random()*140,o.v=o.top*.6,o.d=(Math.random()*2-1)*(n.hw-2),o.targetD=o.d,o.ahead=!0,n.ensure(Math.ceil(o.fi)+80))}Xh(i),K_(i,a),Qt==="race"&&Z_(i,t),Kt.update(t,t.spec,Qt==="countdown"?Math.max(0,(t.rpm-t.spec.idle)/t.spec.redline):a.throttle,Math.max(me((Math.abs(t.beta)-.15)*2.2,0,1),t.lockR>.5&&t.speed>8?.6:0),t.offroad,t.speed,Qt!=="paused"),qh(i),ey(i)}function Z_(i,t){L.elapsed+=i;let e=t.speed,n=e*3.6;L.maxSpeed=Math.max(L.maxSpeed,n),L.dist=$.track.isField?t.odo||0:Math.max(L.dist,$.track.P(t.idx).s-L.startS);let s=Math.abs(t.beta)*57.3,r=L.drift;if(e>8.5&&s>11&&s<110&&t.u>2&&!t.offroad)r.active=!0,r.idle=0,r.time+=i,r.mult=Math.min(5,1+Math.floor(r.time/2.5)),r.pts+=s*e*i*.35*r.mult,r.angle=s;else if(r.active&&(r.idle+=i,r.idle>(t.offroad?.3:1.1))){let o=Math.floor(r.pts);if(o>30){L.driftTotal+=o,L.bestDrift=Math.max(L.bestDrift,o),L.mode.id==="drift"&&!L.finite&&(L.time+=Math.min(8,o/1200));let l=V("drift-pts");l.textContent="+"+o,l.className="drift-pts banked",V("drift-info").textContent=o>5e3?"\u041B\u0415\u0413\u0415\u041D\u0414\u0410\u0420\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":o>2e3?"\u041E\u0422\u041B\u0418\u0427\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":"\u0414\u0420\u0418\u0424\u0422 \u0417\u0410\u0421\u0427\u0418\u0422\u0410\u041D",L.driftShowT=1.3,Kt.score()}L.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}if(L.finite&&t.idx>=L.finishIdx){tf(!0);return}if(t.idx>=L.nextCp&&t.idx<L.finishIdx-100){if(L.cpCount++,L.nextCp+=Dh,L.mode.timer&&!L.finite){let o=Math.round(L.mode.bonus(L.cpCount-1));L.time+=o,ki(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422  +${o} \u0441`,1.8,"#ffcc00")}else ki(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422 ${L.cpCount}`,1.5,"#ffcc00");Kt.checkpoint()}if(L.mode.id==="race"?L.score=Math.floor(L.dist)+L.overtakes*300+Math.floor(L.driftTotal/4):L.mode.id==="drift"||L.mode.id==="field"?L.score=L.driftTotal:L.score=Math.floor(L.dist),L.mode.timer&&!L.finite&&(L.time-=i,L.time<=0&&(L.time=0,tf())),L.mode.id==="race"&&$.rivals.length&&(L.place=1+$.rivals.filter(o=>!o.out&&(o.finOrder!==void 0||o.fi>t.idx)).length),L.mode.id==="race"&&L.online){let o=0;for(let l of Wt.players.values())Wt.racers.includes(l.id)&&(l.fin&&l.fin.finished||!l.fin&&l.vis&&l.vis.idx>t.idx)&&o++;L.place=1+o}}var Zo=(i,t,e)=>`${i}_${t}${e?"_"+e:""}`,Ko=(i,t)=>t>0&&i!=="drift";function tf(i=!1){if(Qt==="over")return;L.drift.active&&L.drift.pts>30&&(L.driftTotal+=Math.floor(L.drift.pts),L.bestDrift=Math.max(L.bestDrift,Math.floor(L.drift.pts))),(L.mode.id==="drift"||L.mode.id==="field")&&(L.score=L.driftTotal),L.finished=i,i&&L.mode.id==="race"&&$.rivals.length&&(L.place=1+$.rivals.filter(u=>!u.out&&u.finOrder!==void 0).length),i&&L.mode.id==="race"&&L.online&&(L.place=1+Wt.results.filter(u=>u.finished).length),Qt="over",Kt.gameOver();let t=Zo(L.mode.id,$.map.id,L.lenKm),e=mn[t],n=Ko(L.mode.id,L.lenKm),s=!L.online&&(n?i&&(!e||!e.time||L.elapsed<e.time):L.score>0&&(!e||L.score>e.score)),r={score:L.score,time:i?L.elapsed:0,dist:Math.floor(L.dist),drift:L.bestDrift,car:re[Pt.car].name,date:new Date().toLocaleDateString("ru-RU"),ts:Date.now(),maxSpeed:Math.round(L.maxSpeed)};s&&(mn[t]=r);let a=t+"|"+re[Pt.car].id,o=mn[a],l=!L.online&&(n?i&&(!o||!o.time||L.elapsed<o.time):L.score>0&&(!o||L.score>o.score));l&&(mn[a]=r),(s||l)&&ds.set("records",mn);let c=L.mode.timer&&!L.finite?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E!":"\u0417\u0430\u0435\u0437\u0434 \u043E\u043A\u043E\u043D\u0447\u0435\u043D";i&&(c=L.place?`\u0424\u0418\u041D\u0418\u0428! ${L.place} \u043C\u0435\u0441\u0442\u043E`:"\u0424\u0418\u041D\u0418\u0428!"),V("over-title").textContent=c,V("over-record").classList.toggle("show",s);let h=[];i&&h.push(["\u0412\u0440\u0435\u043C\u044F",ni(L.elapsed)]),L.place&&!L.online&&h.push(["\u041C\u0435\u0441\u0442\u043E",`${L.place} \u0438\u0437 ${$.rivals.length+1}`]),h.push(["\u041E\u0447\u043A\u0438",L.score.toLocaleString("ru-RU")],["\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F",`${(L.dist/1e3).toFixed(2)} \u043A\u043C`],["\u041C\u0430\u043A\u0441. \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",Yh(L.maxSpeed)],["\u041B\u0443\u0447\u0448\u0438\u0439 \u0434\u0440\u0438\u0444\u0442",L.bestDrift.toLocaleString("ru-RU")],["\u0412\u0441\u0435 \u043E\u0447\u043A\u0438 \u0434\u0440\u0438\u0444\u0442\u0430",L.driftTotal.toLocaleString("ru-RU")],["\u0427\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B",L.cpCount]),L.mode.id==="race"&&!L.online&&h.push(["\u041E\u0431\u0433\u043E\u043D\u044B",L.overtakes]),h.push(["\u0423\u0434\u0430\u0440\u044B",L.hits]),i||h.push(["\u0412\u0440\u0435\u043C\u044F \u0432 \u0437\u0430\u0435\u0437\u0434\u0435",ni(L.elapsed)]),e&&!s&&h.push(["\u0420\u0435\u043A\u043E\u0440\u0434",n?e.time?ni(e.time):"\u2014":e.score.toLocaleString("ru-RU")]),V("over-stats").innerHTML=h.map(([u,d])=>`<span>${u}</span><b>${d}</b>`).join(""),L.online&&Wt.finish(i,L.elapsed,L.score),jo(),V("touch").classList.add("hidden"),setTimeout(()=>{Qt==="over"&&rn("over")},900),qt.mode=3,qt.cineT=0}var Yh=i=>ft.units==="mph"?`${Math.round(i/1.609)} mph`:`${Math.round(i)} \u043A\u043C/\u0447`;function K_(i,t){let{veh:e}=$.player,n=e.spec.body,s=e.speed,r=Math.sin(e.h),a=Math.cos(e.h),o=a,l=-r,c=Math.max(e.rearSlide*(Math.abs(e.beta)>.1||e.lockR>0?1:.4),e.spinR),h=(f,m)=>[e.x+r*f+o*m,e.z+a*f+l*m],u=+ft.quality;for(let f of[1,-1]){let[m,v]=h(n.wheelR,f*n.track/2);ft.smoke&&c>.55&&s>8&&!e.offroad&&Math.abs(e.beta)>.35&&Math.random()<(u>0?2:1)*i*Math.min(1,(Math.abs(e.beta)-.3)*3)&&$.smoke.emit(m,e.roadY,v,e.vx,e.vz,c,$.map.night?.1:.15),ft.smoke&&e.offroad&&s>4&&Math.random()<5*i&&$.dust.emit(m,e.roadY,v,e.vx,e.vz,1,.55);let p=$.track.isField;$.skids.add(f>0?0:1,m,p?$.track.heightAt(m,v):e.roadY,v,o,l,!e.offroad&&c>.42?Math.min(1,(c-.3)*1.6):0);let[g,M]=h(n.wheelF,f*n.track/2);$.skids.add(f>0?2:3,g,p?$.track.heightAt(g,M):e.roadY,M,o,l,!e.offroad&&(e.frontSlide>.85||t.brake>.5&&s>15&&e.u>0&&e.lockR>0)?.6:0)}for(let f of $.rivals);$.smoke.update(i),$.dust.update(i),$.snow&&$.snow.update(i,Ie);let d=$.sunDir;$.sun.position.set(e.x+d.x*90,e.roadY+d.y*90,e.z+d.z*90),$.sun.target.position.set(e.x,e.roadY,e.z),$.sky.position.copy(Ie.position),$.farPlane.position.set(e.x,e.roadY-14,e.z)}var J_=V("gauge").getContext("2d"),Q_=V("minimap").getContext("2d"),ef={};function rr(i,t){ef[i]!==t&&(ef[i]=t,V(i).textContent=t)}function j_(i){let t=J_,e=220,n=110,s=118,r=92;t.clearRect(0,0,e,e);let a=Math.PI*.75,o=Math.PI*2.25;t.lineCap="round",t.beginPath(),t.arc(n,s,r,a,o),t.strokeStyle="rgba(0,0,0,0.45)",t.lineWidth=16,t.stroke();let l=me(i.rpm/i.spec.redline,0,1);t.beginPath(),t.arc(n,s,r,a,a+(o-a)*l),t.strokeStyle=l>.95?"#ff3b3b":l>.85?"#ffb300":"#ffcc00",t.lineWidth=10,t.stroke();for(let u=0;u<=10;u++){let d=a+(o-a)*u/10;t.beginPath(),t.moveTo(n+Math.cos(d)*(r-16),s+Math.sin(d)*(r-16)),t.lineTo(n+Math.cos(d)*(r-24),s+Math.sin(d)*(r-24)),t.strokeStyle=u>=9?"#ff5050":"rgba(255,255,255,0.7)",t.lineWidth=2,t.stroke()}let c=i.kmh,h=ft.units==="mph"?c/1.609:c;t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font="italic 900 50px Segoe UI, Arial",t.fillText(Math.round(h),n,s-4),t.font="600 13px Segoe UI, Arial",t.fillStyle="rgba(255,255,255,0.75)",t.fillText(ft.units==="mph"?"MPH":"\u041A\u041C/\u0427",n,s+26),t.font="900 26px Segoe UI, Arial",t.fillStyle="#ffcc00",t.fillText(i.gear===-1?"R":i.speed<.5&&i.gear===1?"N":String(i.gear),n,s+58)}function ty(i){let t=Q_,e=170,n=85,s=112;t.clearRect(0,0,e,e),t.save(),t.beginPath(),t.arc(85,85,84,0,Math.PI*2),t.clip();let r=.2,a=Math.sin(i.h),o=Math.cos(i.h),l=(h,u)=>{let d=h-i.x,f=u-i.z,m=d*a+f*o,v=d*o-f*a;return[n-v*r,s-m*r]},c=$.track;if(c.isField){t.strokeStyle="rgba(255,255,255,0.18)",t.lineWidth=1;let h=Math.floor((i.x-450)/32)*32,u=Math.floor((i.z-450)/32)*32;for(let d=0;d<30;d++){let[f,m]=l(h+d*32,i.z-450),[v,p]=l(h+d*32,i.z+450);t.beginPath(),t.moveTo(f,m),t.lineTo(v,p),t.stroke(),[f,m]=l(i.x-450,u+d*32),[v,p]=l(i.x+450,u+d*32),t.beginPath(),t.moveTo(f,m),t.lineTo(v,p),t.stroke()}t.fillStyle="rgba(255,255,255,0.8)";for(let d of c.collidersNear(i.x,i.z)){let[f,m]=l(d.x,d.z);t.beginPath(),t.arc(f,m,2.5,0,Math.PI*2),t.fill()}if(c.f.shore!==void 0){let[d,f]=l(c.f.shore-18,i.z-600),[m,v]=l(c.f.shore-18,i.z+600);t.strokeStyle="#4bb8ff",t.lineWidth=4,t.beginPath(),t.moveTo(d,f),t.lineTo(m,v),t.stroke()}t.restore(),t.fillStyle="#4bd2ff",t.beginPath(),t.moveTo(n,s-8),t.lineTo(n-6,s+6),t.lineTo(n+6,s+6),t.closePath(),t.fill();return}t.lineCap="round",t.lineJoin="round",t.beginPath();for(let h=Math.max(c.base,Math.floor(i.idx)-60);h<Math.min(c.lastIdx,i.idx+320);h+=3){let u=c.P(h),[d,f]=l(u.x,u.z);h===Math.max(c.base,Math.floor(i.idx)-60)?t.moveTo(d,f):t.lineTo(d,f)}if(t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=6,t.stroke(),L&&L.nextCp<c.lastIdx&&L.nextCp<L.finishIdx-100){let h=c.P(L.nextCp),[u,d]=l(h.x,h.z);t.fillStyle="#ffcc00",t.beginPath(),t.arc(u,d,5,0,Math.PI*2),t.fill()}if(L&&L.finishIdx<=c.lastIdx&&L.finishIdx>=c.base){let h=c.P(L.finishIdx),[u,d]=l(h.x,h.z);t.fillStyle="#fff",t.fillRect(u-6,d-6,12,12),t.fillStyle="#111",t.fillRect(u-6,d-6,6,6),t.fillRect(u,d,6,6)}for(let h of Wt.players.values()){if(!h.vis)continue;let[u,d]=l(h.vis.x,h.vis.z);t.fillStyle="#7cff4f",t.beginPath(),t.arc(u,d,4.5,0,Math.PI*2),t.fill()}for(let h of $.rivals){if(h.out)continue;let[u,d]=l(h.x,h.z);t.fillStyle="#ff4b4b",t.beginPath(),t.arc(u,d,4,0,Math.PI*2),t.fill()}t.restore(),t.fillStyle="#4bd2ff",t.beginPath(),t.moveTo(n,s-8),t.lineTo(n-6,s+6),t.lineTo(n+6,s+6),t.closePath(),t.fill()}function ey(i){let{veh:t}=$.player;if(j_(t),ty(t),!L)return;L.mode.timer&&!L.finite?(rr("hud-timer",ni(L.time)),V("hud-timer").classList.toggle("warn",L.time<10)):(rr("hud-timer",ni(L.elapsed)),V("hud-timer").classList.remove("warn"));let e=Math.max(0,(L.nextCp-t.idx)*Je),n=Math.max(0,(L.finishIdx-t.idx)*Je),s=$.track.isField?"\u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \xB7 \u0434\u0440\u0438\u0444\u0442":`\u0434\u043E \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430 ${Math.round(e)} \u043C`;L.finite&&(s=`\u0434\u043E \u0444\u0438\u043D\u0438\u0448\u0430 ${n>=1e3?(n/1e3).toFixed(2)+" \u043A\u043C":Math.round(n)+" \u043C"}`),rr("hud-next",s),rr("hud-score",L.score.toLocaleString("ru-RU"));let r=(L.online?Wt.players.size:$.rivals.length)+1,a=L.place&&L.mode.id==="race"?` \xB7 \u043C\u0435\u0441\u0442\u043E ${L.place}/${r}`:"";rr("hud-dist",`${(L.dist/1e3).toFixed(2)} \u043A\u043C${L.finite?` \u0438\u0437 ${L.lenKm}`:""}${L.mode.id==="race"&&!L.online?` \xB7 \u043E\u0431\u0433\u043E\u043D\u043E\u0432: ${L.overtakes}`:""}${a}`);let o=mn[Zo(L.mode.id,$.map.id,L.lenKm)],l=Ko(L.mode.id,L.lenKm);rr("hud-sub",o?l?`\u0440\u0435\u043A\u043E\u0440\u0434: ${o.time?ni(o.time):"\u2014"}`:`\u0440\u0435\u043A\u043E\u0440\u0434: ${o.score.toLocaleString("ru-RU")}`:"\u0440\u0435\u043A\u043E\u0440\u0434\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442");let c=V("hud-drift");if(L.drift.active&&L.drift.pts>5){c.classList.add("show");let h=V("drift-pts");h.className="drift-pts",h.textContent=Math.floor(L.drift.pts).toLocaleString("ru-RU"),V("drift-info").textContent=`x${L.drift.mult}  \xB7  \u0443\u0433\u043E\u043B ${Math.round(L.drift.angle)}\xB0`}else L.driftShowT>0?(L.driftShowT-=i,c.classList.add("show")):c.classList.remove("show")}var ny=["main","setup","garage","records","settings","controls","pause","over","online","lobby"],iy=["main","setup","garage","records","settings","controls","online","lobby"];function rn(i){for(let e of ny)V("menu-"+e).classList.toggle("show",e===i);V("loading").classList.remove("show"),iy.includes(i)&&(Qt!=="menu"&&mf(),Qt="menu",V("hud").classList.add("hidden"),V("touch").classList.add("hidden"),ar=i==="setup"?{x:0,y:.18}:i==="lobby"||i==="online"?{x:innerWidth>800?-.16:0,y:innerWidth>800?0:.2}:{x:innerWidth>800?.16:0,y:innerWidth>800?0:.2},Wh(),Ie.updateProjectionMatrix()),i==="setup"&&lr(),V("garage-info").classList.toggle("hidden",i!=="garage"),i==="garage"&&(gf(),$h()),i==="records"&&Zh(),i==="settings"&&ly(),i==="online"&&Kh(),i==="lobby"&&zi();let t=!!(L&&L.online);V("btn-restart").classList.toggle("hidden",t),V("btn-again").classList.toggle("hidden",t),V("btn-tomenu").textContent=t?"\u0412\u044B\u0439\u0442\u0438 \u0432 \u043B\u043E\u0431\u0431\u0438":"\u0412 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E",V("btn-over-menu").textContent=t?"\u0412 \u043B\u043E\u0431\u0431\u0438":"\u0412 \u043C\u0435\u043D\u044E",$n=i}var $n="main";function mf(){L=null,V("countdown").textContent="",ta(Pt.map,7)}document.querySelectorAll("[data-go]").forEach(i=>i.addEventListener("click",()=>{Kt.init(),Kt.click(),rn(i.dataset.go)}));function lr(){let i=!!sn[Pt.map].field;V("mode-cards").innerHTML=(i?'<div class="card sel"><b>\u041F\u043E\u043B\u0438\u0433\u043E\u043D</b><small>\u041D\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0435 \u043D\u0435\u0442 \u0442\u0440\u0430\u0441\u0441\u044B: \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430, \u043E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0440\u0438\u0444\u0442.</small></div>':"")+qn.map((t,e)=>`<div class="card ${e===Pt.mode&&!i?"sel":""}" ${i?'style="opacity:.4"':""} data-mode="${e}"><b>${t.name}</b><small>${t.desc}</small></div>`).join(""),V("map-cards").innerHTML=sn.map((t,e)=>{let n=t.field?0:Pt.len,s=t.field?"field":qn[Pt.mode].id,r=mn[Zo(s,t.id,n)],a=r?Ko(s,n)?r.time?ni(r.time):"":r.score.toLocaleString("ru-RU"):"";return`<div class="card ${e===Pt.map?"sel":""}" data-map="${e}"><span class="tag">${t.tag}</span><b>${t.name}</b><small>${t.desc}</small>${a?`<span class="rec">\u0440\u0435\u043A\u043E\u0440\u0434: ${a}</span>`:""}</div>`}).join(""),sy(i),V("setup-car-name").textContent=re[Pt.car].name,document.querySelectorAll("[data-mode]").forEach(t=>t.addEventListener("click",()=>{Pt.mode=+t.dataset.mode,Yn(),Kt.click(),lr()})),document.querySelectorAll("[data-map]").forEach(t=>t.addEventListener("click",()=>{let e=+t.dataset.map;Kt.click(),e!==Pt.map&&(Pt.map=e,Yn(),ta(Pt.map,7)),lr()}))}function sy(i){let t=V("setup-opts");if(i){V("opts-title").textContent="\u041F\u043E\u043B\u0438\u0433\u043E\u043D";let e=[["obst","\u0421 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F\u043C\u0438","\u0428\u0438\u043D\u044B, \u043A\u043E\u043D\u0443\u0441\u044B, \u0431\u043B\u043E\u043A\u0438, \u0434\u0435\u0440\u0435\u0432\u044C\u044F, \u043A\u0430\u043C\u043D\u0438 \u2014 \u043E\u0431\u044A\u0435\u0437\u0436\u0430\u0439 \u0438 \u0434\u0440\u0438\u0444\u0442\u0443\u0439 \u0432\u043E\u043A\u0440\u0443\u0433."],["clean","\u0427\u0438\u0441\u0442\u043E\u0435 \u043F\u043E\u043B\u0435","\u0412\u0441\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0443\u0431\u0440\u0430\u043D\u044B \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u0435 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438."],["flat","\u0427\u0438\u0441\u0442\u043E\u0435 \u0438 \u0440\u043E\u0432\u043D\u043E\u0435","\u0411\u0435\u0437 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u0431\u0435\u0437 \u0445\u043E\u043B\u043C\u043E\u0432 \u2014 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0440\u043E\u0432\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438."]];t.innerHTML=`<div class="cards">${e.map(([n,s,r])=>`<div class="card ${Pt.fieldMode===n?"sel":""}" data-fm="${n}"><b>${s}</b><small>${r}</small></div>`).join("")}</div>`,t.querySelectorAll("[data-fm]").forEach(n=>n.addEventListener("click",()=>{Pt.fieldMode!==n.dataset.fm&&(Pt.fieldMode=n.dataset.fm,Yn(),Kt.click(),ta(Pt.map,7),lr())}))}else{V("opts-title").textContent="\u0414\u043B\u0438\u043D\u0430 \u0442\u0440\u0430\u0441\u0441\u044B";let e=!Pt.len,n=Pt.len||10;t.innerHTML=`<div class="len-row">
      <input type="range" id="len-range" min="${T_}" max="${af}" step="1" value="${n}" ${e?'class="off"':""} />
      <div class="len-val" id="len-val">${e?"\u221E":n+" \u043A\u043C"}</div>
      <button class="btn small ${e?"accent":""}" id="len-inf">\u221E \u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F</button>
    </div>
    <small class="len-hint">${e?"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u0440\u0430\u0441\u0441\u0430: \u0435\u0434\u0435\u0448\u044C, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432\u044B\u0439\u0434\u0435\u0442 \u0432\u0440\u0435\u043C\u044F (\u0432 \u0413\u043E\u043D\u043A\u0435 \u0438 \u0414\u0440\u0438\u0444\u0442\u0435) \u0438\u043B\u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0445\u043E\u0447\u0435\u0448\u044C (\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430).":"\u0412 \u043A\u043E\u043D\u0446\u0435 \u0442\u0440\u0430\u0441\u0441\u044B \u2014 \u0444\u0438\u043D\u0438\u0448. \u0422\u0430\u0439\u043C\u0435\u0440 \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0435\u0437\u0434\u0430, \u0432 \u0413\u043E\u043D\u043A\u0435 \u0432\u0430\u0436\u043D\u043E \u043C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u043E\u0432."}</small>`;let s=V("len-range");s.addEventListener("input",()=>{Pt.len=+s.value,V("len-val").textContent=Pt.len+" \u043A\u043C",s.classList.remove("off"),V("len-inf").classList.remove("accent")}),s.addEventListener("change",()=>{Yn(),lr()}),V("len-inf").addEventListener("click",()=>{Kt.click(),Pt.len=Pt.len?0:+s.value,Yn(),lr()})}}V("btn-start").addEventListener("click",()=>{Kt.click(),hr()});var us={},pn=null,hs=null,Wo=null,kh=[],Bh=!1,nf=0;function zh(i){var t;return`${i.id}:${(t=Pt.colors[i.id])!=null?t:0}`}function ry(i){if(!pn){let l=document.createElement("canvas");l.width=320,l.height=180,pn=new Nr({canvas:l,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),pn.outputColorSpace=Be,pn.toneMapping=tr,pn.setPixelRatio(1),pn.setSize(320,180,!1),pn.setClearColor(0,0),hs=new pi;let c=new ns(pn);hs.environment=c.fromScene(new Yr,.04).texture,c.dispose(),hs.add(new Wr(16777215,4478310,1.6));let h=new qr(16777215,2.2);h.position.set(-4,8,6),hs.add(h),Wo=new Ke(26,16/9,.1,100)}let t=Jr(i,cf(i),{outline:ft.outline});hs.add(t.root);let e=new On().setFromObject(t.root),n=e.getSize(new P),s=e.getCenter(new P),r=Math.max(n.z*.95,n.x*1.6,n.y*2.2)/Math.tan(_d.degToRad(13))*.36,a=new P(-.62,.36,.7).normalize();Wo.position.copy(s).addScaledVector(a,r),Wo.lookAt(s.x,s.y-n.y*.05,s.z),pn.render(hs,Wo);let o=pn.domElement.toDataURL("image/png");return hs.remove(t.root),t.root.traverse(l=>{l.geometry&&!l.userData.sharedGeo&&l.geometry.dispose()}),o}function ay(){if(Bh)return;Bh=!0;let i=()=>{let t=kh.shift();if(!t){Bh=!1,clearTimeout(nf),nf=setTimeout(()=>{!kh.length&&pn&&(pn.dispose(),pn.forceContextLoss(),pn=null)},3e3);return}let e=zh(t);if(!us[e]){try{us[e]=ry(t)}catch{us[e]=""}let n=document.querySelector(`.car-card[data-car="${re.indexOf(t)}"] img`);n&&us[e]&&(n.src=us[e])}setTimeout(i,0)};i()}function gf(){V("garage-count").textContent=`${re.length} \u043C\u0430\u0448\u0438\u043D`;let i=re.map((n,s)=>s).sort((n,s)=>(re[n].vmax||0)-(re[s].vmax||0));V("car-grid").innerHTML=i.map(n=>{let s=re[n],r=us[zh(s)];return`<div class="car-card ${n===Pt.car?"sel":""}" data-car="${n}"><img class="thumb" alt="" ${r?`src="${r}"`:""}/><b>${s.name}</b></div>`}).join(""),document.querySelectorAll(".car-card").forEach(n=>n.addEventListener("click",()=>xf(+n.dataset.car)));let t=re.filter(n=>!us[zh(n)]);t.sort((n,s)=>Math.abs(re.indexOf(n)-Pt.car)-Math.abs(re.indexOf(s)-Pt.car)),kh=t,ay();let e=document.querySelector(".car-card.sel");e&&e.scrollIntoView({block:"nearest"})}function $h(){var n;let i=re[Pt.car];V("car-name").textContent=i.name,V("car-tag").innerHTML=`${Qo(i.tag)}<span class="cls cls-${Fi(i)}">${Fi(i)}</span>`,V("car-desc").textContent=i.desc;let t=Ld(i);V("car-stats").innerHTML=[["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",t.top],["\u0420\u0430\u0437\u0433\u043E\u043D",t.accel],["\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C",t.handling],["\u0414\u0440\u0438\u0444\u0442",t.drift]].map(([s,r])=>`<div class="stat"><span>${s}</span><div class="bar"><i style="width:${Math.round(r*100)}%"></i></div></div>`).join(""),V("car-spec").textContent=`${i.hp} \u043B.\u0441. \xB7 ${i.torque} \u041D\xB7\u043C \xB7 ${i.mass} \u043A\u0433 \xB7 \u0434\u043E ${Yh(i.vmax||250)} \xB7 \u043F\u0440\u0438\u0432\u043E\u0434 ${i.drive==="RWD"?"\u0437\u0430\u0434\u043D\u0438\u0439":i.drive==="AWD"?"\u043F\u043E\u043B\u043D\u044B\u0439":"\u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439"} \xB7 ${i.gears.length} ${i.gears.length<5?"\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438":"\u043F\u0435\u0440\u0435\u0434\u0430\u0447"}`;let e=(n=Pt.colors[i.id])!=null?n:0;V("car-colors").innerHTML=i.colors.map((s,r)=>`<div class="swatch ${r===e?"sel":""}" style="background:${s}" data-col="${r}"></div>`).join(""),document.querySelectorAll("[data-col]").forEach(s=>s.addEventListener("click",()=>{Pt.colors[i.id]=+s.dataset.col,Yn(),Kt.click(),$.player.model.bodyMat.color.set(i.colors[+s.dataset.col]),$h(),gf()})),document.querySelectorAll(".car-card").forEach(s=>s.classList.toggle("sel",+s.dataset.car===Pt.car))}function xf(i){if(i===Pt.car)return;Pt.car=(i+re.length)%re.length,Yn(),Kt.click(),ea(6,-2.8),$h();let t=document.querySelector(".car-card.sel");t&&t.scrollIntoView({block:"nearest"})}function vf(i){xf((Pt.car+i+re.length)%re.length)}V("car-prev").addEventListener("click",()=>vf(-1));V("car-next").addEventListener("click",()=>vf(1));var ve={map:"all",mode:"all",car:"all",len:"all",group:"map",sort:"best"};function oy(){let i=[];for(let t of[...qn,Gh])for(let e of sn)if(!!e.field==(t.id==="field"))for(let n=0;n<=af;n++)for(let s of re){let r=mn[Zo(t.id,e.id,n)+"|"+s.id];r&&i.push({r,mode:t,map:e,len:n,car:s,timeRec:Ko(t.id,n)})}return i}function Zh(){let i=oy(),t=(c,h,u)=>`<option value="${c}" ${String(c)===String(u)?"selected":""}>${h}</option>`,e=re.filter(c=>i.some(h=>h.car===c)),n=[...new Set(i.map(c=>c.len))].sort((c,h)=>c-h);V("rec-filters").innerHTML=`
    <label>\u041A\u0430\u0440\u0442\u0430<select data-rf="map">${t("all","\u0412\u0441\u0435 \u043A\u0430\u0440\u0442\u044B",ve.map)}${sn.map(c=>t(c.id,c.name,ve.map)).join("")}</select></label>
    <label>\u0420\u0435\u0436\u0438\u043C<select data-rf="mode">${t("all","\u0412\u0441\u0435 \u0440\u0435\u0436\u0438\u043C\u044B",ve.mode)}${[...qn,Gh].map(c=>t(c.id,c.name,ve.mode)).join("")}</select></label>
    <label>\u041C\u0430\u0448\u0438\u043D\u0430<select data-rf="car">${t("all","\u0412\u0441\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",ve.car)}${e.map(c=>t(c.id,c.name,ve.car)).join("")}</select></label>
    <label>\u0414\u043B\u0438\u043D\u0430<select data-rf="len">${t("all","\u041B\u044E\u0431\u0430\u044F",ve.len)}${n.map(c=>t(c,c?c+" \u043A\u043C":"\u221E / \u043F\u043E\u043B\u0438\u0433\u043E\u043D",ve.len)).join("")}</select></label>
    <label>\u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C<select data-rf="group">${t("map","\u041F\u043E \u043A\u0430\u0440\u0442\u0430\u043C",ve.group)}${t("car","\u041F\u043E \u043C\u0430\u0448\u0438\u043D\u0430\u043C",ve.group)}${t("mode","\u041F\u043E \u0440\u0435\u0436\u0438\u043C\u0430\u043C",ve.group)}</select></label>
    <label>\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430<select data-rf="sort">${t("best","\u041B\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",ve.sort)}${t("date","\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",ve.sort)}${t("speed","\u041C\u0430\u043A\u0441. \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",ve.sort)}${t("dist","\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F",ve.sort)}</select></label>`,document.querySelectorAll("[data-rf]").forEach(c=>c.addEventListener("change",()=>{ve[c.dataset.rf]=c.value,Zh()}));let s=i.filter(c=>(ve.map==="all"||c.map.id===ve.map)&&(ve.mode==="all"||c.mode.id===ve.mode)&&(ve.car==="all"||c.car.id===ve.car)&&(ve.len==="all"||c.len===+ve.len));if(!i.length){V("records-table").innerHTML='<p class="hint">\u0420\u0435\u043A\u043E\u0440\u0434\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0441\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439!</p>';return}if(!s.length){V("records-table").innerHTML='<p class="hint">\u041F\u043E \u044D\u0442\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432 \u043D\u0435\u0442.</p>';return}let r=c=>ve.group==="car"?c.car.name:ve.group==="mode"?c.mode.name:c.map.name,a=(c,h)=>ve.sort==="date"?(h.r.ts||0)-(c.r.ts||0):ve.sort==="speed"?(h.r.maxSpeed||0)-(c.r.maxSpeed||0):ve.sort==="dist"?(h.r.dist||0)-(c.r.dist||0):c.mode.id!==h.mode.id?qn.indexOf(c.mode)-qn.indexOf(h.mode):c.len!==h.len?c.len-h.len:c.timeRec?(c.r.time||1e9)-(h.r.time||1e9):h.r.score-c.r.score,o=new Map;for(let c of s){let h=r(c);o.has(h)||o.set(h,[]),o.get(h).push(c)}let l="<table><tr><th>\u041A\u0430\u0440\u0442\u0430 \xB7 \u0440\u0435\u0436\u0438\u043C</th><th>\u0414\u043B\u0438\u043D\u0430</th><th>\u041C\u0430\u0448\u0438\u043D\u0430</th><th>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</th><th>\u0414\u0430\u0442\u0430</th></tr>";for(let[c,h]of o){l+=`<tr><td colspan="5" class="rec-group">${Qo(c)}</td></tr>`;for(let u of h.sort(a)){let d=u.timeRec?u.r.time?ni(u.r.time):"\u2014":`${u.r.score.toLocaleString("ru-RU")} \u043E\u0447\u043A.`,f=[u.r.dist?`${(u.r.dist/1e3).toFixed(1)} \u043A\u043C`:"",u.r.maxSpeed?Yh(u.r.maxSpeed):""].filter(Boolean).join(" \xB7 ");l+=`<tr><td>${u.map.name}<small>${u.mode.name}</small></td><td>${u.map.field?"\u2014":u.len?u.len+" \u043A\u043C":"\u221E"}</td><td>${u.car.name}<span class="cls cls-${Fi(u.car)}">${Fi(u.car)}</span></td><td><b>${d}</b>${f?`<small>${f}</small>`:""}</td><td><small>${u.r.date||""}</small></td></tr>`}}V("records-table").innerHTML=l+"</table>"}V("btn-reset-rec").addEventListener("click",()=>{confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u043A\u043E\u0440\u0434\u044B?")&&(mn={},ds.set("records",mn),Zh())});function ly(){V("set-vol").value=ft.vol,V("set-music").checked=ft.music,V("set-assist").checked=ft.assist,V("set-manual").checked=ft.manual,V("set-quality").value=ft.quality,V("set-camera").value=ft.camera,V("set-units").value=ft.units,V("set-sfx").value=ft.sfxVol,V("set-musicvol").value=ft.musicVol,V("set-outline").checked=ft.outline,V("set-handling").value=ft.handling,V("set-smoke").checked=ft.smoke,V("set-fps").value=ft.fps,V("set-showfps").checked=ft.showFps,V("set-autores").checked=ft.autoRes}V("set-vol").addEventListener("input",i=>{ft.vol=+i.target.value,Kt.setVolume(ft.vol),an()});V("set-sfx").addEventListener("input",i=>{ft.sfxVol=+i.target.value,Kt.setSfxVol(ft.sfxVol),an()});V("set-musicvol").addEventListener("input",i=>{ft.musicVol=+i.target.value,Kt.setMusicVol(ft.musicVol),an()});V("set-outline").addEventListener("change",i=>{ft.outline=i.target.checked,an(),Qt==="menu"&&ea(6,-2.8)});V("set-handling").addEventListener("change",i=>{ft.handling=i.target.value,ft.easy=ft.handling==="easy",an()});V("set-smoke").addEventListener("change",i=>{ft.smoke=i.target.checked,an(),$&&$.smoke.clear()});V("set-music").addEventListener("change",i=>{ft.music=i.target.checked,Kt.setMusic(ft.music),an()});V("set-assist").addEventListener("change",i=>{ft.assist=i.target.checked,an()});V("set-manual").addEventListener("change",i=>{ft.manual=i.target.checked,an()});V("set-quality").addEventListener("change",i=>{ft.quality=+i.target.value,an(),ta(Pt.map,7)});V("set-camera").addEventListener("change",i=>{ft.camera=+i.target.value,an()});V("set-units").addEventListener("change",i=>{ft.units=i.target.value,an()});V("set-fps").addEventListener("change",i=>{ft.fps=+i.target.value,an()});V("set-showfps").addEventListener("change",i=>{ft.showFps=i.target.checked,an()});V("set-autores").addEventListener("change",i=>{ft.autoRes=i.target.checked,an(),Fe.scale=1,Oh()});var _f=()=>(ft.server||"").trim()||(/^(localhost|127\.)/.test(location.hostname)?"ws://localhost:8080":Qd);function cr(i,t){let e=V("online-status");e.textContent=i,e.classList.toggle("err",!!t)}var sf=[5,10,15,20,25,30,40,50,0];function Kh(){let i=re[Pt.car],t=Fi(i);V("mm-car").innerHTML=`${i.name}<span class="cls cls-${t}">${t}</span>`;let e=(n,s,r)=>{V(n).innerHTML=s.map(([a,o])=>`<button class="btn small ${Pt.mm[r]===a?"on":""}" data-v="${a}">${o}</button>`).join(""),V(n).querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{Kt.click();let o=a.dataset.v;Pt.mm[r]=/^\d+$/.test(o)?+o:o,Yn(),Kh()}))};e("mm-mode",[["race","\u0413\u043E\u043D\u043A\u0430"],["drift","\u0414\u0440\u0438\u0444\u0442"]],"mode"),e("mm-size",[[5,"5"],[10,"10"]],"size"),e("mm-car-rule",[["any","\u041B\u044E\u0431\u044B\u0435"],["class",`\u041A\u043B\u0430\u0441\u0441 ${t}`],["same","\u0422\u0430 \u0436\u0435 \u043C\u0430\u0448\u0438\u043D\u0430"]],"carRule"),sf.includes(Pt.mm.len)||(Pt.mm.len=10),V("mm-len").innerHTML=sf.map(n=>`<option value="${n}" ${n===Pt.mm.len?"selected":""}>${n?n+" \u043A\u043C":"\u221E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F"}</option>`).join(""),V("on-name").value=ft.name||"",V("on-server").value=ft.server||"",V("on-server").placeholder=_f(),cr(Wt.connected?"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"")}function Jh(){var t;let i=re[Pt.car];return{name:ft.name||"\u0418\u0433\u0440\u043E\u043A",car:Pt.car,cls:Fi(i),color:(t=Pt.colors[i.id])!=null?t:0}}async function Jo(i){Kt.click(),ft.name=V("on-name").value.trim().slice(0,16),ft.server=V("on-server").value.trim(),an(),cr("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026 (\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0438\u043D\u0443\u0442\u044B)"),document.querySelectorAll("#menu-online .btn").forEach(t=>t.disabled=!0);try{await Wt.connect(_f(),{...i,...Jh()}),rn("lobby")}catch(t){cr(t.message,!0)}document.querySelectorAll("#menu-online .btn").forEach(t=>t.disabled=!1)}var yf=()=>({mm:{...Pt.mm,maps:sn.map((i,t)=>i.field?-1:t).filter(i=>i>=0)}});V("on-quick").addEventListener("click",()=>Jo(yf()));V("mm-len").addEventListener("change",i=>{Pt.mm.len=+i.target.value,Yn()});function Mf(i){Pt.car=(Pt.car+i+re.length)%re.length,Yn(),Kt.click(),$&&Qt==="menu"&&ea(6,-2.8),Kh()}V("mm-prev").addEventListener("click",()=>Mf(-1));V("mm-next").addEventListener("click",()=>Mf(1));V("mm-again").addEventListener("click",()=>{rn("online"),Jo(yf())});V("on-create").addEventListener("click",()=>Jo({}));V("on-join").addEventListener("click",()=>{let i=V("on-code").value.trim().toUpperCase();if(i.length!==4){cr("\u0412\u0432\u0435\u0434\u0438 \u043A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u0438\u0437 4 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",!0);return}Jo({code:i})});V("on-back").addEventListener("click",()=>{Kt.click(),Wt.disconnect(!0),rn("main")});function cy(i){let t=sn[i.map]||sn[0],e=t.field?"\u041F\u043E\u043B\u0438\u0433\u043E\u043D":(qn.find(s=>s.id===i.mode)||qn[0]).name,n=t.field?{obst:"\u0441 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F\u043C\u0438",clean:"\u0447\u0438\u0441\u0442\u043E\u0435 \u043F\u043E\u043B\u0435",flat:"\u0447\u0438\u0441\u0442\u043E\u0435 \u0438 \u0440\u043E\u0432\u043D\u043E\u0435"}[i.fieldMode]:i.len?`${i.len} \u043A\u043C`:"\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F";return`${e} \xB7 ${t.name} \xB7 ${n}`}function zi(){if(!Wt.connected){rn("online");return}let i=Wt.mm;V("lobby-code").textContent=i?"":Wt.code,V("menu-lobby").querySelector("h2").firstChild.textContent=i?"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043C\u0430\u0442\u0447 ":"\u041A\u043E\u043C\u043D\u0430\u0442\u0430 ",V("lobby-type").textContent=i?`${i.mode==="drift"?"\u0414\u0440\u0438\u0444\u0442":"\u0413\u043E\u043D\u043A\u0430"} \xB7 ${i.len?i.len+" \u043A\u043C":"\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F"} \xB7 ${i.size} \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \xB7 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438: ${{any:"\u043B\u044E\u0431\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",class:"\u043A\u043B\u0430\u0441\u0441 "+Fi(re[Pt.car]),same:re[Pt.car].name}[i.carRule]}`:"\u0417\u0430\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430 \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u043A\u043E\u0434 \u0434\u0440\u0443\u0437\u044C\u044F\u043C";let t=Jh(),e=[{id:Wt.id,...t,me:!0},...Wt.players.values()];V("lobby-players").innerHTML=e.map(l=>{let c=re[l.car]||re[0];return`<div class="lp"><i style="background:${c.colors[l.color%c.colors.length]}"></i><b>${l.id===Wt.host&&!Wt.mm?"\u{1F451} ":""}${Qo(l.name)}${l.me?" (\u0442\u044B)":""}</b><span>${c.name}${l.inRace?" \xB7 \u0432 \u0437\u0430\u0435\u0437\u0434\u0435":""}</span></div>`}).join(""),V("lobby-count").textContent=`\u0418\u0433\u0440\u043E\u043A\u0438: ${e.length} / ${i?i.size:10}`,V("lobby-car").textContent=re[Pt.car].name;let n=Wt.config,s=Wt.isHost&&!i;V("lobby-host").classList.toggle("hidden",!s),V("lobby-guest").classList.toggle("hidden",s||!!i),V("lobby-start").classList.toggle("hidden",!s),V("lobby-carsw").classList.toggle("hidden",!!i);let r=Wt.state==="done";V("mm-again").classList.toggle("hidden",!(i&&r)),V("lobby-leave").textContent=i&&!r?"\u2715 \u041E\u0442\u043C\u0435\u043D\u0430":"\u2190 \u0412\u044B\u0439\u0442\u0438";let a=Wt.mmStatus;V("mm-search").classList.toggle("hidden",!i),i&&(V("mm-search").innerHTML=r?'<div class="hud-small">\u041C\u0430\u0442\u0447 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D</div>':a&&a.state==="countdown"?`<div class="hud-small">\u0412\u0441\u0435 \u0432 \u0441\u0431\u043E\u0440\u0435! \u0421\u0442\u0430\u0440\u0442 \u0447\u0435\u0440\u0435\u0437</div><div class="mm-cd">${a.left}</div>`:Wt.state==="racing"?'<div class="hud-small">\u0418\u0434\u0451\u0442 \u0437\u0430\u0435\u0437\u0434\u2026</div>':`<div class="hud-small">\u0418\u0449\u0435\u043C \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u043E\u0432\u2026</div><div class="mm-count">${a?a.count:e.length} / ${i.size}</div><div class="hud-small" id="mm-wait-t"></div>`),V("lobby-conf-text").textContent=cy(n);let o=Wt.state==="racing";if(V("lobby-wait").textContent=i?r?"\u041D\u0430\u0436\u043C\u0438 \xAB\u0418\u0441\u043A\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430\xBB, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0439\u0442\u0438 \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0442\u0447 \u0441 \u0442\u0435\u043C\u0438 \u0436\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438.":"\u041C\u0430\u0442\u0447 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0441\u0430\u043C, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u043D\u0443\u0436\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u043C\u0438 \u043C\u0430\u0448\u0438\u043D\u0430\u043C\u0438.":o?"\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0434\u0451\u0442 \u0437\u0430\u0435\u0437\u0434 \u2014 \u043F\u043E\u0434\u043E\u0436\u0434\u0438, \u043F\u043E\u043A\u0430 \u043E\u043D \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F.":s?e.length<2?"\u041C\u043E\u0436\u043D\u043E \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u043B\u0438 \u043F\u043E\u0434\u043E\u0436\u0434\u0430\u0442\u044C \u0434\u0440\u0443\u0437\u0435\u0439.":"":"\u0416\u0434\u0451\u043C, \u043A\u043E\u0433\u0434\u0430 \u0445\u043E\u0441\u0442 \u043D\u0430\u0436\u043C\u0451\u0442 \xAB\u0421\u0442\u0430\u0440\u0442\xBB.",s){V("lc-map").innerHTML=sn.map((h,u)=>`<option value="${u}" ${u===n.map?"selected":""}>${h.name}</option>`).join("");let l=!!(sn[n.map]||{}).field;V("lc-mode").innerHTML=qn.map(h=>`<option value="${h.id}" ${h.id===n.mode?"selected":""}>${h.name}</option>`).join(""),V("lc-mode-row").classList.toggle("hidden",l),V("lc-len-row").classList.toggle("hidden",l),V("lc-fm-row").classList.toggle("hidden",!l);let c=[5,10,15,20,25,30,35,40,45,50,0];V("lc-len").innerHTML=c.map(h=>`<option value="${h}" ${h===n.len?"selected":""}>${h?h+" \u043A\u043C":"\u221E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F"}</option>`).join(""),V("lc-fm").value=n.fieldMode}jo()}var Qo=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function hy(){Wt.send({t:"config",config:{map:+V("lc-map").value,mode:V("lc-mode").value,len:+V("lc-len").value,fieldMode:V("lc-fm").value}})}["lc-map","lc-mode","lc-len","lc-fm"].forEach(i=>V(i).addEventListener("change",()=>{Kt.click(),hy()}));V("lobby-start").addEventListener("click",()=>{Kt.click(),Wt.state==="lobby"&&Wt.send({t:"start"})});V("lobby-leave").addEventListener("click",()=>{Kt.click(),Wt.disconnect(!0),rn("online")});function bf(i){Pt.car=(Pt.car+i+re.length)%re.length,Yn(),Kt.click(),$&&Qt==="menu"&&ea(6,-2.8),Wt.send({t:"profile",...Jh()}),zi()}V("lobby-prev").addEventListener("click",()=>bf(-1));V("lobby-next").addEventListener("click",()=>bf(1));function jo(){let i=V("online-results"),t=V("lobby-results"),e=Wt.results.slice(),n=Wt.config||{},s=n.mode==="drift"||!n.len||(sn[n.map]||{}).field,r=c=>`${Qo(c.name)}${c.id===Wt.id?" (\u0442\u044B)":""}`,a;if(s)a=e.sort((c,h)=>h.score-c.score).map((c,h)=>`<tr><td>${h+1}</td><td>${r(c)}</td><td>${c.score.toLocaleString("ru-RU")} \u043E\u0447\u043A.</td></tr>`);else{let c=e.filter(u=>u.finished).sort((u,d)=>u.time-d.time),h=e.filter(u=>!u.finished);a=[...c.map((u,d)=>`<tr><td>${d+1}</td><td>${r(u)}</td><td>${ni(u.time)}</td></tr>`),...h.map(u=>`<tr class="dnf"><td>\u2014</td><td>${r(u)}</td><td>\u0441\u043E\u0448\u0451\u043B</td></tr>`)]}let o=e.length?`<table>${a.join("")}</table>`:"",l=L&&L.online;i.innerHTML=l&&o?`<h3>\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u0435\u0437\u0434</h3>${o}${Wt.state==="racing"?"<small>\u0416\u0434\u0451\u043C \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432\u2026</small>":""}`:"",i.classList.toggle("hidden",!(l&&o)),t.innerHTML=o?`<h3>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u0435\u0437\u0434</h3>${o}`:""}Wt.on.joined=()=>{Wt.mmSince=Date.now(),$n==="lobby"&&zi()};Wt.on.player=()=>{$n==="lobby"&&zi()};Wt.on.config=()=>{$n==="lobby"&&zi()};Wt.on.left=i=>{N_(i),$n==="lobby"&&zi()};Wt.on.fin=()=>{jo()};setInterval(()=>{let i=document.getElementById("mm-wait-t");if(i&&Wt.mmSince){let t=Math.floor((Date.now()-Wt.mmSince)/1e3);i.textContent=`\u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 ${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}},1e3);Wt.on.mm=i=>{i.state==="countdown"&&Kt.countdown(!1),$n==="lobby"&&zi()};Wt.on.lobby=()=>{jo(),$n==="lobby"&&zi()};Wt.on.error=i=>{$n==="online"?cr(i,!0):ki(i,2.5,"#ff6b6b")};Wt.on.close=()=>{L&&L.online&&(Qt==="race"||Qt==="countdown")&&ki("\u0421\u0412\u042F\u0417\u042C \u0421 \u0421\u0415\u0420\u0412\u0415\u0420\u041E\u041C \u041F\u041E\u0422\u0415\u0420\u042F\u041D\u0410",3,"#ff6b6b"),$n==="lobby"&&Qt==="menu"&&(rn("online"),cr("\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E",!0))};Wt.on.start=i=>{let t=i.config;Pt.map=Math.min(t.map,sn.length-1);let e=qn.findIndex(s=>s.id===t.mode);Pt.mode=e<0?0:e;let n=!!sn[Pt.map].field;for(let s of Wt.players.values())s.model=null,s.vis=null,s.buf=[];hr({seed:i.seed,len:n?0:t.len,fieldMode:t.fieldMode,online:!0})};function uy(){Qt!=="race"&&Qt!=="countdown"||(L.prevState=Qt,Qt="paused",rn("pause"),Kt.update($.player.veh,$.player.veh.spec,0,0,!1,0,!1))}function Sf(){Qt==="paused"&&(Qt=L.prevState,rn(null),Xo=performance.now())}V("btn-resume").addEventListener("click",()=>{Kt.click(),Sf()});V("btn-restart").addEventListener("click",()=>{Kt.click(),hr()});V("btn-tomenu").addEventListener("click",()=>{Kt.click(),L&&L.online?(Qt!=="over"&&Wt.finish(!1,L.elapsed,L.score),L=null,rn(Wt.connected?"lobby":"online")):rn("main")});V("btn-again").addEventListener("click",()=>{Kt.click(),hr()});V("btn-over-menu").addEventListener("click",()=>{Kt.click();let i=L&&L.online;L=null,rn(i?Wt.connected?"lobby":"online":"main")});function Hh(i){for(let t of i){if(t==="mute"&&Kt.setVolume(Kt.volume>0?0:ft.vol),t==="pause"&&(Qt==="paused"?Sf():uy()),Qt==="race"||Qt==="countdown"){if(t==="camera"){qt.mode=(qt.mode+1)%4,qh(.016,!0);let e=V("cam-hint");e.textContent=k_[qt.mode],e.classList.add("show"),clearTimeout(Hh._t),Hh._t=setTimeout(()=>e.classList.remove("show"),1200)}if(t==="reset"&&Qt==="race"){let{veh:e}=$.player,n=$.track.isField?{x:e.x,z:e.z,h:e.h,y:$.track.heightAt(e.x,e.z)}:$.track.sample(Math.max($.track.base+2,e.idx));e.reset(n.x,n.z,n.h),e.idx=Math.round(e.idx),e.roadY=n.y,e.px=void 0,e.ph=void 0,e.pY=void 0,e.pz=void 0,$.skids.last=[null,null,null,null],ki("\u041D\u0410 \u0422\u0420\u0410\u0421\u0421\u0423",.8)}}t==="enter"&&Qt==="menu"&&$n==="setup"&&hr()}}var Xo=performance.now(),Oi={frames:0,t:performance.now(),value:0};function wf(i){if(requestAnimationFrame(wf),ft.fps>0&&i-Xo<1e3/ft.fps-.7)return;let t=Math.min(.05,(i-Xo)/1e3);if(Xo=i,Oi.frames++,i-Oi.t>=500){Oi.value=Math.round(Oi.frames*1e3/(i-Oi.t)),Oi.frames=0,Oi.t=i;let n=V("fps");n.classList.toggle("hidden",!ft.showFps),ft.showFps&&(n.textContent=`${Oi.value} FPS`)}let e=qo.takeEvents();Hh(e),$&&(Qt==="menu"?($.track.update($.player.veh.idx),Xh(t),$.sun.position.set($.player.veh.x+$.sunDir.x*90,$.player.veh.roadY+$.sunDir.y*90,$.player.veh.z+$.sunDir.z*90),$.sun.target.position.set($.player.veh.x,$.player.veh.roadY,$.player.veh.z),$.farPlane.position.set($.player.veh.x,$.player.veh.roadY-14,$.player.veh.z),$.snow&&$.snow.update(t,Ie),z_(t,$n==="garage"),$.sky.position.copy(Ie.position)):(Qt==="countdown"||Qt==="race"||Qt==="over")&&(L._events=e,pf(t)),R_(t),In?In.render():hn.render(Xn,Ie))}$o();mf();Qt="menu";rn("main");requestAnimationFrame(wf);window.__game={renderer:hn,get W(){return $},get G(){return L},get state(){return Qt},startRace:hr,showScreen:rn,sel:Pt,settings:ft,cam:qt,net:Wt,CARS:re,camera:Ie,scene:Xn,tick(i,t=1){for(let e=0;e<t;e++)(Qt==="countdown"||Qt==="race"||Qt==="over")&&(L._events=[],pf(i))}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

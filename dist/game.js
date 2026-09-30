(()=>{var Nf=0,Th=1,Ff=2;var Uu=1,kc=2,Zn=3,_i=0,Ce=1,Fe=2,On=0,xs=1,Ms=2,Ah=3,Rh=4,Bf=5,Bi=100,Of=101,zf=102,kf=103,Hf=104,Vf=200,Gf=201,Wf=202,Xf=203,ml=204,gl=205,qf=206,Yf=207,Zf=208,$f=209,Kf=210,Jf=211,Qf=212,jf=213,td=214,xl=0,_l=1,vl=2,bs=3,yl=4,Ml=5,bl=6,Sl=7,Hc=0,ed=1,nd=2,xi=0,Vc=1,Gc=2,Wc=3,Er=4,id=5,Xc=6,qc=7;var Nu=300,Ss=301,Es=302,El=303,wl=304,ta=306,Qn=1e3,zi=1001,Tl=1002,Je=1003,sd=1004;var Ur=1005;var Tn=1006,La=1007;var ki=1008;var jn=1009,Fu=1010,Bu=1011,dr=1012,Yc=1013,Hi=1014,Bn=1015,Ln=1016,Zc=1017,$c=1018,ws=1020,Ou=35902,zu=1021,ku=1022,ln=1023,Hu=1024,Vu=1025,_s=1026,Ts=1027,Kc=1028,Jc=1029,Gu=1030,Qc=1031;var jc=1033,uo=33776,fo=33777,po=33778,mo=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Ll=37492,Dl=37496,Ul=37808,Nl=37809,Fl=37810,Bl=37811,Ol=37812,zl=37813,kl=37814,Hl=37815,Vl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,go=36492,Zl=36494,$l=36495,Wu=36283,Kl=36284,Jl=36285,Ql=36286;var _o=2300,jl=2301,Da=2302,Ch=2400,Ph=2401,Ih=2402;var rd=3200,od=3201;var ea=0,ad=1,mi="",Ve="srgb",Si="srgb-linear",th="display-p3",na="display-p3-linear",vo="linear",xe="srgb",yo="rec709",Mo="p3";var Ki=7680;var Lh=519,ld=512,cd=513,hd=514,Xu=515,ud=516,fd=517,dd=518,pd=519,tc=35044;var Dh="300 es",Kn=2e3,bo=2001,vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ua=Math.PI/180,So=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function md(i,t){return(i%t+t)%t}function Na(i,t,e){return(1-e)*i+e*t}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],p=s[3],g=s[6],M=s[1],x=s[4],y=s[7],A=s[2],T=s[5],w=s[8];return r[0]=o*_+a*M+l*A,r[3]=o*p+a*x+l*T,r[6]=o*g+a*y+l*w,r[1]=c*_+h*M+u*A,r[4]=c*p+h*x+u*T,r[7]=c*g+h*y+u*w,r[2]=f*_+d*M+m*A,r[5]=f*p+d*x+m*T,r[8]=f*g+d*y+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fa=new Jt;function qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){let i=Eo("canvas");return i.style.display="block",i}var Uh={};function xo(i){i in Uh||(Uh[i]=!0,console.warn(i))}function xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _d(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Nh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[Si]:{transfer:vo,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:xe,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[na]:{transfer:vo,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Fh),fromReference:i=>i.applyMatrix3(Nh)},[th]:{transfer:xe,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fh),fromReference:i=>i.applyMatrix3(Nh).convertLinearToSRGB()}},yd=new Set([Si,na]),oe={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Js[t].toReference,s=Js[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Js[i].primaries},getTransfer:function(i){return i===mi?vo:Js[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Js[t].luminanceCoefficients)}};function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ba(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,ec=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Eo("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vs(e[n]/255)*255):e[n]=vs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Md=0,wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bd=0,en=class i extends vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zi,s=zi,r=Tn,o=ki,a=ln,l=jn,c=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Jn(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Nu;en.DEFAULT_ANISOTROPY=1;var me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(d+1)/2,A=(g+1)/2,T=(h+f)/4,w=(u+_)/4,I=(m+p)/4;return x>y&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},To=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let p=1-a,g=l*f+c*d+h*m+u*_,M=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,g*M);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}let y=a*M;if(l=l*p+f*y,c=c*p+d*y,h=h*p+m*y,u=u*p+_*y,p===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new P,Bh=new cn,ti=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Fr.subVectors(this.max,Qs),Qi.subVectors(t.a,Qs),ji.subVectors(t.b,Qs),ts.subVectors(t.c,Qs),ci.subVectors(ji,Qi),hi.subVectors(ts,ji),Pi.subVectors(Qi,ts);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Pi.z,Pi.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Pi.z,0,-Pi.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Pi.y,Pi.x,0];return!ka(e,Qi,ji,ts,Fr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Qi,ji,ts,Fr))?!1:(Br.crossVectors(ci,hi),e=[Br.x,Br.y,Br.z],ka(e,Qi,ji,ts,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new P,new P,new P,new P,new P,new P,new P,new P],Sn=new P,Nr=new ti,Qi=new P,ji=new P,ts=new P,ci=new P,hi=new P,Pi=new P,Qs=new P,Fr=new P,Br=new P,Ii=new P;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Sd=new ti,js=new P,Ha=new P,yi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Ha)),this.expandByPoint(js.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new P,Va=new P,Or=new P,ui=new P,Ga=new P,zr=new P,Wa=new P,Ao=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Va.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Va);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Or),a=ui.dot(this.direction),l=-ui.dot(Or),c=ui.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Va).addScaledVector(Or,f),d}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){Ga.subVectors(e,t),zr.subVectors(n,t),Wa.crossVectors(Ga,zr);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);let l=a*this.direction.dot(zr.crossVectors(ui,zr));if(l<0)return null;let c=a*this.direction.dot(Ga.cross(ui));if(c<0||l+c>o)return null;let h=-a*ui.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,wd)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),fi.crossVectors(n,on),fi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),fi.crossVectors(n,on)),fi.normalize(),kr.crossVectors(on,fi),s[0]=fi.x,s[4]=kr.x,s[8]=on.x,s[1]=fi.y,s[5]=kr.y,s[9]=on.y,s[2]=fi.z,s[6]=kr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],x=n[7],y=n[11],A=n[15],T=s[0],w=s[4],I=s[8],O=s[12],v=s[1],S=s[5],k=s[9],F=s[13],V=s[2],J=s[6],z=s[10],it=s[14],H=s[3],lt=s[7],vt=s[11],_t=s[15];return r[0]=o*T+a*v+l*V+c*H,r[4]=o*w+a*S+l*J+c*lt,r[8]=o*I+a*k+l*z+c*vt,r[12]=o*O+a*F+l*it+c*_t,r[1]=h*T+u*v+f*V+d*H,r[5]=h*w+u*S+f*J+d*lt,r[9]=h*I+u*k+f*z+d*vt,r[13]=h*O+u*F+f*it+d*_t,r[2]=m*T+_*v+p*V+g*H,r[6]=m*w+_*S+p*J+g*lt,r[10]=m*I+_*k+p*z+g*vt,r[14]=m*O+_*F+p*it+g*_t,r[3]=M*T+x*v+y*V+A*H,r[7]=M*w+x*S+y*J+A*lt,r[11]=M*I+x*k+y*z+A*vt,r[15]=M*O+x*F+y*it+A*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],p=t[14],g=t[15],M=u*p*c-_*f*c+_*l*d-a*p*d-u*l*g+a*f*g,x=m*f*c-h*p*c-m*l*d+o*p*d+h*l*g-o*f*g,y=h*_*c-m*u*c+m*a*d-o*_*d-h*a*g+o*u*g,A=m*u*l-h*_*l-m*a*f+o*_*f+h*a*p-o*u*p,T=e*M+n*x+s*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=M*w,t[1]=(_*f*r-u*p*r-_*s*d+n*p*d+u*s*g-n*f*g)*w,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*g+n*l*g)*w,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*w,t[4]=x*w,t[5]=(h*p*r-m*f*r+m*s*d-e*p*d-h*s*g+e*f*g)*w,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*w,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*w,t[8]=y*w,t[9]=(m*u*r-h*_*r-m*n*d+e*_*d+h*n*g-e*u*g)*w,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*g+e*a*g)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=A*w,t[13]=(h*_*s-m*u*s+m*n*f-e*_*f-h*n*p+e*u*p)*w,t[14]=(m*a*s-o*_*s-m*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,_=o*h,p=o*u,g=a*u,M=l*c,x=l*h,y=l*u,A=n.x,T=n.y,w=n.z;return s[0]=(1-(_+g))*A,s[1]=(d+y)*A,s[2]=(m-x)*A,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+g))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(m+x)*w,s[9]=(p-M)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=es.set(s[0],s[1],s[2]).length(),o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,m;if(a===Kn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===bo)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Kn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,m,_;if(a===Kn)m=(o+r)*u,_=-2*u;else if(a===bo)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},es=new P,En=new te,Ed=new P(0,0,0),wd=new P(1,1,1),fi=new P,kr=new P,on=new P,Oh=new te,zh=new cn,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Td=0,kh=new P,ns=new cn,Xn=new te,Hr=new P,tr=new P,Ad=new P,Rd=new cn,Hh=new P(1,0,0),Vh=new P(0,1,0),Gh=new P(0,0,1),Wh={type:"added"},Cd={type:"removed"},is={type:"childadded",child:null},Xa={type:"childremoved",child:null},Be=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new An,n=new cn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Jt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(tr,Hr,this.up):Xn.lookAt(Hr,tr,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Xn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cd),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Be.DEFAULT_UP=new P(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new P,qn=new P,qa=new P,Yn=new P,ss=new P,rs=new P,Xh=new P,Ya=new P,Za=new P,$a=new P,Ka=new me,Ja=new me,Qa=new me,gi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),qn.subVectors(n,e),qa.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(qn),l=wn.dot(qa),c=qn.dot(qn),h=qn.dot(qa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ka.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Ka.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,n),Qa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),qn.subVectors(t,e),wn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ss.subVectors(s,n),rs.subVectors(r,n),Ya.subVectors(t,n);let l=ss.dot(Ya),c=rs.dot(Ya);if(l<=0&&c<=0)return e.copy(n);Za.subVectors(t,s);let h=ss.dot(Za),u=rs.dot(Za);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ss,o);$a.subVectors(t,r);let d=ss.dot($a),m=rs.dot($a);if(m>=0&&d<=m)return e.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(rs,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return Xh.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Xh,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=md(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ja(o,r,t+1/3),this.g=ja(o,r,t),this.b=ja(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return oe.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Ye(Ke.r*255,0,255))*65536+Math.round(Ye(Ke.g*255,0,255))*256+Math.round(Ye(Ke.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ve){oe.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Vr);let n=Na(di.h,Vr.h,e),s=Na(di.s,Vr.s,e),r=Na(di.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new yt;yt.NAMES=Yu;var Pd=0,Rn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=xs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Te=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new P,Gr=new nt,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}};var Co=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Po=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Id=0,_n=new te,tl=new Be,os=new P,an=new ti,er=new ti,He=new P,he=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Po:Co)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(an.min,er.min),an.expandByPoint(He),He.addVectors(an.max,er.max),an.expandByPoint(He)):(an.expandByPoint(er.min),an.expandByPoint(er.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),He.add(os)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,f=new nt,d=new nt,m=new nt,_=new P,p=new P;function g(I,O,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,O),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let S=1/(d.x*m.y-m.x*d.y);isFinite(S)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(S),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(S),a[I].add(_),a[O].add(_),a[v].add(_),l[I].add(p),l[O].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,O=M.length;I<O;++I){let v=M[I],S=v.start,k=v.count;for(let F=S,V=S+k;F<V;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let x=new P,y=new P,A=new P,T=new P;function w(I){A.fromBufferAttribute(s,I),T.copy(A);let O=a[I];x.copy(O),x.sub(A.multiplyScalar(A.dot(O))).normalize(),y.crossVectors(T,O);let S=y.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,S)}for(let I=0,O=M.length;I<O;++I){let v=M[I],S=v.start,k=v.count;for(let F=S,V=S+k;F<V;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new te,Li=new Ao,Wr=new yi,Yh=new P,Xr=new P,qr=new P,Yr=new P,el=new P,Zr=new P,Zh=new P,$r=new P,ut=class extends Be{constructor(t=new he,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(el.fromBufferAttribute(u,t),o?Zr.addScaledVector(el,h):Zr.addScaledVector(el.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Wr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Wr,Yh)===null||Li.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){let T=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);s=Kr(this,g,t,n,c,h,u,T,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=Kr(this,o,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){let T=y,w=y+1,I=y+2;s=Kr(this,g,t,n,c,h,u,T,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=p,x=p+1,y=p+2;s=Kr(this,o,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ld(i,t,e,n,s,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:i}}function Kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Xr),i.getVertexPosition(l,qr),i.getVertexPosition(c,Yr);let h=Ld(i,t,e,n,Xr,qr,Yr,Zh);if(h){let u=new P;gi.getBarycoord(Zh,Xr,qr,Yr,u),s&&(h.uv=gi.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=gi.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=gi.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};gi.getNormal(Xr,qr,Yr,f.normal),h.face=f,h.barycoord=u}return h}var ge=class i extends he{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function m(_,p,g,M,x,y,A,T,w,I,O){let v=y/w,S=A/I,k=y/2,F=A/2,V=T/2,J=w+1,z=I+1,it=0,H=0,lt=new P;for(let vt=0;vt<z;vt++){let _t=vt*S-F;for(let Zt=0;Zt<J;Zt++){let qt=Zt*v-k;lt[_]=qt*M,lt[p]=_t*x,lt[g]=V,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[p]=0,lt[g]=T>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Zt/w),u.push(1-vt/I),it+=1}}for(let vt=0;vt<I;vt++)for(let _t=0;_t<w;_t++){let Zt=f+_t+J*vt,qt=f+_t+J*(vt+1),Z=f+(_t+1)+J*(vt+1),ot=f+(_t+1)+J*vt;l.push(Zt,qt,ot),l.push(qt,Z,ot),H+=6}a.addGroup(d,H,O),d+=H,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Dd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Ei={clone:As,merge:je},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Io=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new P,$h=new nt,Kh=new nt,Ze=class extends Io{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Kh),e.subVectors(Kh,$h)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ua*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,ls=1,sc=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(as,ls,t,e);s.layers=this.layers,this.add(s);let r=new Ze(as,ls,t,e);r.layers=this.layers,this.add(r);let o=new Ze(as,ls,t,e);o.layers=this.layers,this.add(o);let a=new Ze(as,ls,t,e);a.layers=this.layers,this.add(a);let l=new Ze(as,ls,t,e);l.layers=this.layers,this.add(l);let c=new Ze(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Lo=class extends en{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rc=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ge(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:On});r.uniforms.tEquirect.value=e;let o=new ut(s,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=Tn),new sc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},nl=new P,Fd=new P,Bd=new Jt,$n=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nl.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bd.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new yi,Jr=new P,pr=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],_=s[10],p=s[11],g=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-d,y-g).normalize(),n[1].setComponents(l+r,f+c,p+d,y+g).normalize(),n[2].setComponents(l+o,f+h,p+m,y+M).normalize(),n[3].setComponents(l-o,f-h,p-m,y-M).normalize(),n[4].setComponents(l-a,f-u,p-_,y-x).normalize(),e===Kn)n[5].setComponents(l+a,f+u,p+_,y+x).normalize();else if(e===bo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $u(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Od(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Se=class i extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let M=g*f-o;for(let x=0;x<c;x++){let y=x*u-r;m.push(y,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let x=M+c*g,y=M+c*(g+1),A=M+1+c*(g+1),T=M+1+c*g;d.push(x,y,T),d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,jd=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`
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
}`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Bp=`struct PhysicalMaterial {
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
}`,Op=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,o0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,u0=`#define TOON
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
}`,f0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:zd,alphahash_pars_fragment:kd,alphamap_fragment:Hd,alphamap_pars_fragment:Vd,alphatest_fragment:Gd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:Zd,begin_vertex:$d,beginnormal_vertex:Kd,bsdfs:Jd,iridescence_fragment:Qd,bumpmap_pars_fragment:jd,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:fp,emissivemap_fragment:dp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:xp,envmap_common_pars_fragment:_p,envmap_pars_fragment:vp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Ip,envmap_vertex:Mp,fog_vertex:bp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:wp,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Up,lights_phong_pars_fragment:Np,lights_physical_fragment:Fp,lights_physical_pars_fragment:Bp,lights_fragment_begin:Op,lights_fragment_maps:zp,lights_fragment_end:kp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:Zp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Jp,morphcolor_vertex:Qp,morphnormal_vertex:jp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:fm,packing:dm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:xm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:Mm,shadowmap_vertex:bm,shadowmask_pars_fragment:Sm,skinbase_vertex:Em,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Um,uv_pars_vertex:Nm,uv_vertex:Fm,worldpos_vertex:Bm,background_vert:Om,background_frag:zm,backgroundCube_vert:km,backgroundCube_frag:Hm,cube_vert:Vm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:Zm,equirect_frag:$m,linedashed_vert:Km,linedashed_frag:Jm,meshbasic_vert:Qm,meshbasic_frag:jm,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:f0,points_frag:d0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:x0},bt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Nn={basic:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:je([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:je([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:je([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:je([bt.common,bt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:je([bt.lights,bt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Nn.physical={uniforms:je([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Qr={r:0,b:0,g:0},Ui=new An,_0=new te;function v0(i,t,e,n,s,r,o){let a=new yt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,y=m(M);y===null?g(a,l):y&&y.isColor&&(g(y,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){let y=m(x);y&&(y.isCubeTexture||y.mapping===ta)?(h===void 0&&(h=new ut(new ge(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:As(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Ui)),h.material.toneMapped=oe.getTransfer(y.colorSpace)!==xe,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ut(new Se(2,2),new ve({name:"BackgroundMaterial",uniforms:As(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=oe.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,x){M.getRGB(Qr,Zu(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:_,addToRenderList:p}}function y0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,S,k,F,V){let J=!1,z=u(F,k,S);r!==z&&(r=z,c(r.object)),J=d(v,F,k,V),J&&m(v,F,k,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(v,S,k,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,S,k){let F=k.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let J=V[S.id];J===void 0&&(J={},V[S.id]=J);let z=J[F];return z===void 0&&(z=f(l()),J[F]=z),z}function f(v){let S=[],k=[],F=[];for(let V=0;V<e;V++)S[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,S,k,F){let V=r.attributes,J=S.attributes,z=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let vt=V[H],_t=J[H];if(_t===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor)),vt===void 0||vt.attribute!==_t||_t&&vt.data!==_t.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function m(v,S,k,F){let V={},J=S.attributes,z=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let vt=J[H];vt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor));let _t={};_t.attribute=vt,vt&&vt.data&&(_t.data=vt.data),V[H]=_t,z++}r.attributes=V,r.attributesNum=z,r.index=F}function _(){let v=r.newAttributes;for(let S=0,k=v.length;S<k;S++)v[S]=0}function p(v){g(v,0)}function g(v,S){let k=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;k[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),V[v]!==S&&(i.vertexAttribDivisor(v,S),V[v]=S)}function M(){let v=r.newAttributes,S=r.enabledAttributes;for(let k=0,F=S.length;k<F;k++)S[k]!==v[k]&&(i.disableVertexAttribArray(k),S[k]=0)}function x(v,S,k,F,V,J,z){z===!0?i.vertexAttribIPointer(v,S,k,V,J):i.vertexAttribPointer(v,S,k,F,V,J)}function y(v,S,k,F){_();let V=F.attributes,J=k.getAttributes(),z=S.defaultAttributeValues;for(let it in J){let H=J[it];if(H.location>=0){let lt=V[it];if(lt===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){let vt=lt.normalized,_t=lt.itemSize,Zt=t.get(lt);if(Zt===void 0)continue;let qt=Zt.buffer,Z=Zt.type,ot=Zt.bytesPerElement,Et=Z===i.INT||Z===i.UNSIGNED_INT||lt.gpuType===Yc;if(lt.isInterleavedBufferAttribute){let rt=lt.data,Bt=rt.stride,Pt=lt.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)g(H.location+Nt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)p(H.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Nt=0;Nt<H.locationSize;Nt++)x(H.location+Nt,_t/H.locationSize,Z,vt,Bt*ot,(Pt+_t/H.locationSize*Nt)*ot,Et)}else{if(lt.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)g(H.location+rt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let rt=0;rt<H.locationSize;rt++)x(H.location+rt,_t/H.locationSize,Z,vt,_t*ot,_t/H.locationSize*rt*ot,Et)}}else if(z!==void 0){let vt=z[it];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(H.location,vt);break;case 3:i.vertexAttrib3fv(H.location,vt);break;case 4:i.vertexAttrib4fv(H.location,vt);break;default:i.vertexAttrib1fv(H.location,vt)}}}}M()}function A(){I();for(let v in n){let S=n[v];for(let k in S){let F=S[k];for(let V in F)h(F[V].object),delete F[V];delete S[k]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let k in S){let F=S[k];for(let V in F)h(F[V].object),delete F[V];delete S[k]}delete n[v.id]}function w(v){for(let S in n){let k=n[S];if(k[v.id]===void 0)continue;let F=k[v.id];for(let V in F)h(F[V].object),delete F[V];delete k[v.id]}}function I(){O(),o=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function M0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<f.length;_++)e.update(m,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function b0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==jn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Bn&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function S0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $n,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,x=M*4,y=g.clippingState||null;l.value=y,y=h(m,f,x,d);for(let A=0;A!==x;++A)y[A]=e[A];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function E0(i){let t=new WeakMap;function e(o,a){return a===El?o.mapping=Ss:a===wl&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===El||a===wl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rs=class extends Io{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,Jh=[.125,.215,.35,.446,.526,.582],Oi=20,il=new Rs,Qh=new yt,sl=null,rl=0,ol=0,al=!1,Fi=(1+Math.sqrt(5))/2,cs=1/Fi,jh=[new P(-Fi,cs,0),new P(Fi,cs,0),new P(-cs,0,Fi),new P(cs,0,Fi),new P(0,Fi,-cs),new P(0,Fi,cs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ln,format:ln,colorSpace:Si,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w0(r)),this._blurMaterial=T0(r,t,e)}return s}_compileMaterial(t){let e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,n,s){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Qh),h.toneMapping=xi,h.autoClear=!1;let d=new Te({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),m=new ut(new ge,d),_=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Qh),_=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let x=this._cubeSize;jr(s,M*x,g>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ss||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,il)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jh[(s-r-1)%jh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ut(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);let g=[],M=0;for(let w=0;w<Oi;++w){let I=w/_,O=Math.exp(-I*I/2);g.push(O),w===0?M+=O:w<p&&(M+=2*O)}for(let w=0;w<g.length;w++)g[w]=g[w]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let y=this._sizeLods[s],A=3*y*(s>x-ms?s-x+ms:0),T=4*(this._cubeSize-y);jr(e,A,T,3*y,2*y),l.setRenderTarget(e),l.render(u,il)}};function w0(i){let t=[],e=[],n=[],s=i,r=i-ms+1+Jh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ms?l=Jh[o-i+ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,p=2,g=1,M=new Float32Array(_*m*d),x=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,I=T>2?0:-1,O=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(O,_*m*T),x.set(f,p*m*T);let v=[T,T,T,T,T,T];y.set(v,g*m*T)}let A=new he;A.setAttribute("position",new ae(M,_)),A.setAttribute("uv",new ae(x,p)),A.setAttribute("faceIndex",new ae(y,g)),t.push(A),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tu(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function T0(i,t,e){let n=new Float32Array(Oi),s=new P(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function eu(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function nu(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function A0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===El||l===wl,h=l===Ss||l===Es;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Cs(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function R0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function C0(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let _=f.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let _=d[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let x=0,y=M.length;x<y;x+=3){let A=M[x+0],T=M[x+1],w=M[x+2];f.push(A,T,T,w,w,A)}}else if(m!==void 0){let M=m.array;_=m.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let A=x+0,T=x+1,w=x+2;f.push(A,T,T,w,w,A)}}else return;let p=new(qu(f)?Po:Co)(f,1);p.version=_;let g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function P0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,_){if(m===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let g=0;for(let M=0;M<m;M++)g+=d[M];for(let M=0;M<_.length;M++)e.update(g,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function L0(i,t,e){let n=new WeakMap,s=new me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let O=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;d===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*A*4*u),w=new To(T,y,A,u);w.type=Bn,w.needsUpdate=!0;let I=x*4;for(let v=0;v<u;v++){let S=p[v],k=g[v],F=M[v],V=y*A*4*v;for(let J=0;J<S.count;J++){let z=J*I;d===!0&&(s.fromBufferAttribute(S,J),T[V+z+0]=s.x,T[V+z+1]=s.y,T[V+z+2]=s.z,T[V+z+3]=0),m===!0&&(s.fromBufferAttribute(k,J),T[V+z+4]=s.x,T[V+z+5]=s.y,T[V+z+6]=s.z,T[V+z+7]=0),_===!0&&(s.fromBufferAttribute(F,J),T[V+z+8]=s.x,T[V+z+9]=s.y,T[V+z+10]=s.z,T[V+z+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new nt(y,A)},n.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function D0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Do=class extends en{constructor(t,e,n,s,r,o,a,l,c,h=_s){if(h!==_s&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Hi),n===void 0&&h===Ts&&(n=ws),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ku=new en,iu=new Do(1,1),Ju=new To,Qu=new ic,ju=new Lo,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function U0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function O0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),ze(e,n)}}function z0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),ze(e,n)}}function k0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),ze(e,n)}}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function X0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function $0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=Xu,r=iu):r=Ku,e.setTexture2D(t||r,s)}function K0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qu,s)}function J0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ju,s)}function Q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ju,s)}function j0(i){switch(i){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return B0;case 35674:return O0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return H0;case 35667:case 35671:return V0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function tg(i,t){i.uniform1fv(this.addr,t)}function eg(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function ng(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function ig(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function sg(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rg(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function og(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ag(i,t){i.uniform1iv(this.addr,t)}function lg(i,t){i.uniform2iv(this.addr,t)}function cg(i,t){i.uniform3iv(this.addr,t)}function hg(i,t){i.uniform4iv(this.addr,t)}function ug(i,t){i.uniform1uiv(this.addr,t)}function fg(i,t){i.uniform2uiv(this.addr,t)}function dg(i,t){i.uniform3uiv(this.addr,t)}function pg(i,t){i.uniform4uiv(this.addr,t)}function mg(i,t,e){let n=this.cache,s=t.length,r=ia(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ku,r[o])}function gg(i,t,e){let n=this.cache,s=t.length,r=ia(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qu,r[o])}function xg(i,t,e){let n=this.cache,s=t.length,r=ia(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ju,r[o])}function _g(i,t,e){let n=this.cache,s=t.length,r=ia(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ju,r[o])}function vg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return _g}}var oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j0(e.type)}},ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}},lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ll=/(\w+)(\])?(\[|\.)?/g;function cu(i,t){i.seq.push(t),i.map[t.id]=t}function yg(i,t,e){let n=i.name,s=n.length;for(ll.lastIndex=0;;){let r=ll.exec(n),o=ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cu(e,c===void 0?new oc(a,i,t):new ac(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new lc(a),cu(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Mg=37297,bg=0;function Sg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Eg(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===Mo&&e===yo?n="LinearDisplayP3ToLinearSRGB":t===yo&&e===Mo&&(n="LinearSRGBToLinearDisplayP3"),i){case Si:case na:return[n,"LinearTransferOETF"];case Ve:case th:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sg(i.getShaderSource(t),o)}else return s}function wg(i,t){let e=Eg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tg(i,t){let e;switch(t){case Vc:e="Linear";break;case Gc:e="Reinhard";break;case Wc:e="Cineon";break;case Er:e="ACESFilmic";break;case Xc:e="AgX";break;case qc:e="Neutral";break;case id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var to=new P;function Ag(){oe.getLuminanceCoefficients(to);let i=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Cg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function lr(i){return i!==""}function fu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace(Ig,Dg)}var Lg=new Map;function Dg(i,t){let e=Kt[t];if(e===void 0){let n=Lg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cc(e)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(Ug,Ng)}function Ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case Es:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Og(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Es&&(t="ENVMAP_MODE_REFRACTION"),t}function zg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function kg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Fg(e),c=Bg(e),h=Og(e),u=zg(e),f=kg(e),d=Rg(e),m=Cg(r),_=s.createProgram(),p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(lr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(lr).join(`
`),g.length>0&&(g+=`
`)):(p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),g=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==xi?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),o=cc(o),o=fu(o,e),o=du(o,e),a=cc(a),a=fu(a,e),a=du(a,e),o=pu(o),a=pu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=M+p+o,y=M+g+a,A=hu(s,s.VERTEX_SHADER,x),T=hu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(S){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(A).trim(),V=s.getShaderInfoLog(T).trim(),J=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,T);else{let it=uu(s,A,"vertex"),H=uu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+it+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(z=!1);z&&(S.diagnostics={runnable:J,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:g}})}s.deleteShader(A),s.deleteShader(T),I=new ys(s,_),O=Pg(s,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let O;this.getAttributes=function(){return O===void 0&&w(this),O};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Mg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}var Vg=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uc(t),e.set(t,n)),n}},uc=class{constructor(t){this.id=Vg++,this.code=t,this.usedTimes=0}};function Gg(i,t,e,n,s,r,o){let a=new Ro,l=new hc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,S,k,F,V){let J=F.fog,z=V.geometry,it=v.isMeshStandardMaterial?F.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||it),lt=H&&H.mapping===ta?H.image.height:null,vt=_[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let _t=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=_t!==void 0?_t.length:0,qt=0;z.morphAttributes.position!==void 0&&(qt=1),z.morphAttributes.normal!==void 0&&(qt=2),z.morphAttributes.color!==void 0&&(qt=3);let Z,ot,Et,rt;if(vt){let Xe=Nn[vt];Z=Xe.vertexShader,ot=Xe.fragmentShader}else Z=v.vertexShader,ot=v.fragmentShader,l.update(v),Et=l.getVertexShaderID(v),rt=l.getFragmentShaderID(v);let Bt=i.getRenderTarget(),Pt=V.isInstancedMesh===!0,Nt=V.isBatchedMesh===!0,Yt=!!v.map,j=!!v.matcap,C=!!H,st=!!v.aoMap,pt=!!v.lightMap,at=!!v.bumpMap,dt=!!v.normalMap,Dt=!!v.displacementMap,wt=!!v.emissiveMap,R=!!v.metalnessMap,b=!!v.roughnessMap,B=v.anisotropy>0,$=v.clearcoat>0,tt=v.dispersion>0,K=v.iridescence>0,It=v.sheen>0,xt=v.transmission>0,Tt=B&&!!v.anisotropyMap,$t=$&&!!v.clearcoatMap,L=$&&!!v.clearcoatNormalMap,W=$&&!!v.clearcoatRoughnessMap,ct=K&&!!v.iridescenceMap,ft=K&&!!v.iridescenceThicknessMap,ht=It&&!!v.sheenColorMap,kt=It&&!!v.sheenRoughnessMap,Vt=!!v.specularMap,ie=!!v.specularColorMap,D=!!v.specularIntensityMap,mt=xt&&!!v.transmissionMap,q=xt&&!!v.thicknessMap,et=!!v.gradientMap,St=!!v.alphaMap,At=v.alphaTest>0,jt=!!v.alphaHash,Ae=!!v.extensions,We=xi;v.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(We=i.toneMapping);let re={shaderID:vt,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:ot,defines:v.defines,customVertexShaderID:Et,customFragmentShaderID:rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&V._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&V.instanceColor!==null,instancingMorph:Pt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:Si,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:j,envMap:C,envMapMode:C&&H.mapping,envMapCubeUVHeight:lt,aoMap:st,lightMap:pt,bumpMap:at,normalMap:dt,displacementMap:d&&Dt,emissiveMap:wt,normalMapObjectSpace:dt&&v.normalMapType===ad,normalMapTangentSpace:dt&&v.normalMapType===ea,metalnessMap:R,roughnessMap:b,anisotropy:B,anisotropyMap:Tt,clearcoat:$,clearcoatMap:$t,clearcoatNormalMap:L,clearcoatRoughnessMap:W,dispersion:tt,iridescence:K,iridescenceMap:ct,iridescenceThicknessMap:ft,sheen:It,sheenColorMap:ht,sheenRoughnessMap:kt,specularMap:Vt,specularColorMap:ie,specularIntensityMap:D,transmission:xt,transmissionMap:mt,thicknessMap:q,gradientMap:et,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:St,alphaTest:At,alphaHash:jt,combine:v.combine,mapUv:Yt&&p(v.map.channel),aoMapUv:st&&p(v.aoMap.channel),lightMapUv:pt&&p(v.lightMap.channel),bumpMapUv:at&&p(v.bumpMap.channel),normalMapUv:dt&&p(v.normalMap.channel),displacementMapUv:Dt&&p(v.displacementMap.channel),emissiveMapUv:wt&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:Tt&&p(v.anisotropyMap.channel),clearcoatMapUv:$t&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:L&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&p(v.sheenRoughnessMap.channel),specularMapUv:Vt&&p(v.specularMap.channel),specularColorMapUv:ie&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:mt&&p(v.transmissionMap.channel),thicknessMapUv:q&&p(v.thicknessMap.channel),alphaMapUv:St&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(dt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!z.attributes.uv&&(Yt||St),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fe,flipSided:v.side===Ce,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&v.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function M(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)S.push(k),S.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(x(S,v),y(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){let S=_[v.type],k;if(S){let F=Nn[S];k=Ei.clone(F.uniforms)}else k=v.uniforms;return k}function T(v,S){let k;for(let F=0,V=h.length;F<V;F++){let J=h[F];if(J.cacheKey===S){k=J,++k.usedTimes;break}}return k===void 0&&(k=new Hg(i,S,v,r),h.push(k)),k}function w(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:A,acquireProgram:T,releaseProgram:w,releaseShaderCache:I,programs:h,dispose:O}}function Wg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,_,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),t++,g}function a(u,f,d,m,_,p){let g=o(u,f,d,m,_,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(u,f,d,m,_,p){let g=o(u,f,d,m,_,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||Xg),n.length>1&&n.sort(f||gu),s.length>1&&s.sort(f||gu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function qg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xu,i.set(n,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new yt};break;case"SpotLight":e={position:new P,direction:new P,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Zg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $g=0;function Kg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jg(i){let t=new Yg,e=Zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new te,o=new te;function a(c){let h=0,u=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,M=0,x=0,y=0,A=0,T=0,w=0;c.sort(Kg);for(let O=0,v=c.length;O<v;O++){let S=c[O],k=S.color,F=S.intensity,V=S.distance,J=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=k.r*F,u+=k.g*F,f+=k.b*F;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],F);w++}else if(S.isDirectionalLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let it=S.shadow,H=e.get(S);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=S.shadow.matrix,M++}n.directional[d]=z,d++}else if(S.isSpotLight){let z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(k).multiplyScalar(F),z.distance=V,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[_]=z;let it=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,it.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[_]=it.matrix,S.castShadow){let H=e.get(S);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=J,y++}_++}else if(S.isRectAreaLight){let z=t.get(S);z.color.copy(k).multiplyScalar(F),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=z,p++}else if(S.isPointLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let it=S.shadow,H=e.get(S);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=S.shadow.matrix,x++}n.point[m]=z,m++}else if(S.isHemisphereLight){let z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(F),z.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[g]=z,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,I.directionalLength=d,I.pointLength=m,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=w,n.version=$g++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0,p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let x=c[g];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(x.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(x.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function _u(i){let t=new Jg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _u(i),t.set(s,[a])):r>=o.length?(a=new _u(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var fc=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dc=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`;function ex(i,t,e){let n=new pr,s=new nt,r=new nt,o=new me,a=new fc({depthPacking:od}),l=new dc,c={},h=e.maxTextureSize,u={[_i]:Ce,[Ce]:_i,[Fe]:Fe},f=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:jg,fragmentShader:tx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new he;m.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ut(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let g=this.type;this.render=function(T,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let O=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),k=i.state;k.setBlending(On),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=g!==Zn&&this.type===Zn,V=g===Zn&&this.type!==Zn;for(let J=0,z=T.length;J<z;J++){let it=T[J],H=it.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let lt=H.getFrameExtents();if(s.multiply(lt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,H.mapSize.y=r.y)),H.map===null||F===!0||V===!0){let _t=this.type!==Zn?{minFilter:Je,magFilter:Je}:{};H.map!==null&&H.map.dispose(),H.map=new tn(s.x,s.y,_t),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let vt=H.getViewportCount();for(let _t=0;_t<vt;_t++){let Zt=H.getViewport(_t);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),k.viewport(o),H.updateMatrices(it,_t),n=H.getFrustum(),y(w,I,H.camera,it,this.type)}H.isPointLightShadow!==!0&&this.type===Zn&&M(H,I),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(O,v,S)};function M(T,w){let I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new tn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,I,d,_,null)}function x(T,w,I,O){let v=null,S=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)v=S;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let k=v.uuid,F=w.uuid,V=c[k];V===void 0&&(V={},c[k]=V);let J=V[F];J===void 0&&(J=v.clone(),V[F]=J,w.addEventListener("dispose",A)),v=J}if(v.visible=w.visible,v.wireframe=w.wireframe,O===Zn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=i.properties.get(v);k.light=I}return v}function y(T,w,I,O,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let F=t.update(T),V=T.material;if(Array.isArray(V)){let J=F.groups;for(let z=0,it=J.length;z<it;z++){let H=J[z],lt=V[H.materialIndex];if(lt&&lt.visible){let vt=x(T,lt,O,v);T.onBeforeShadow(i,T,w,I,F,vt,H),i.renderBufferDirect(I,null,F,vt,T,H),T.onAfterShadow(i,T,w,I,F,vt,H)}}}else if(V.visible){let J=x(T,V,O,v);T.onBeforeShadow(i,T,w,I,F,J,null),i.renderBufferDirect(I,null,F,J,T,null),T.onAfterShadow(i,T,w,I,F,J,null)}}let k=T.children;for(let F=0,V=k.length;F<V;F++)y(k[F],w,I,O,v)}function A(T){T.target.removeEventListener("dispose",A);for(let I in c){let O=c[I],v=T.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}var nx={[xl]:_l,[vl]:bl,[yl]:Sl,[bs]:Ml,[_l]:xl,[bl]:vl,[Sl]:yl,[Ml]:bs};function ix(i){function t(){let D=!1,mt=new me,q=null,et=new me(0,0,0,0);return{setMask:function(St){q!==St&&!D&&(i.colorMask(St,St,St,St),q=St)},setLocked:function(St){D=St},setClear:function(St,At,jt,Ae,We){We===!0&&(St*=Ae,At*=Ae,jt*=Ae),mt.set(St,At,jt,Ae),et.equals(mt)===!1&&(i.clearColor(St,At,jt,Ae),et.copy(mt))},reset:function(){D=!1,q=null,et.set(-1,0,0,0)}}}function e(){let D=!1,mt=!1,q=null,et=null,St=null;return{setReversed:function(At){mt=At},setTest:function(At){At?Et(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(At){q!==At&&!D&&(i.depthMask(At),q=At)},setFunc:function(At){if(mt&&(At=nx[At]),et!==At){switch(At){case xl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=At}},setLocked:function(At){D=At},setClear:function(At){St!==At&&(i.clearDepth(At),St=At)},reset:function(){D=!1,q=null,et=null,St=null}}}function n(){let D=!1,mt=null,q=null,et=null,St=null,At=null,jt=null,Ae=null,We=null;return{setTest:function(re){D||(re?Et(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(re){mt!==re&&!D&&(i.stencilMask(re),mt=re)},setFunc:function(re,Xe,gn){(q!==re||et!==Xe||St!==gn)&&(i.stencilFunc(re,Xe,gn),q=re,et=Xe,St=gn)},setOp:function(re,Xe,gn){(At!==re||jt!==Xe||Ae!==gn)&&(i.stencilOp(re,Xe,gn),At=re,jt=Xe,Ae=gn)},setLocked:function(re){D=re},setClear:function(re){We!==re&&(i.clearStencil(re),We=re)},reset:function(){D=!1,mt=null,q=null,et=null,St=null,At=null,jt=null,Ae=null,We=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,p=null,g=null,M=null,x=null,y=null,A=null,T=new yt(0,0,0),w=0,I=!1,O=null,v=null,S=null,k=null,F=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,z=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(it)[1]),J=z>=1):it.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),J=z>=2);let H=null,lt={},vt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Zt=new me().fromArray(vt),qt=new me().fromArray(_t);function Z(D,mt,q,et){let St=new Uint8Array(4),At=i.createTexture();i.bindTexture(D,At),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<q;jt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(mt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return At}let ot={};ot[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Et(i.DEPTH_TEST),r.setFunc(bs),pt(!1),at(Th),Et(i.CULL_FACE),C(On);function Et(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function rt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Bt(D,mt){return h[D]!==mt?(i.bindFramebuffer(D,mt),h[D]=mt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Pt(D,mt){let q=f,et=!1;if(D){q=u.get(mt),q===void 0&&(q=[],u.set(mt,q));let St=D.textures;if(q.length!==St.length||q[0]!==i.COLOR_ATTACHMENT0){for(let At=0,jt=St.length;At<jt;At++)q[At]=i.COLOR_ATTACHMENT0+At;q.length=St.length,et=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,et=!0);et&&i.drawBuffers(q)}function Nt(D){return d!==D?(i.useProgram(D),d=D,!0):!1}let Yt={[Bi]:i.FUNC_ADD,[Of]:i.FUNC_SUBTRACT,[zf]:i.FUNC_REVERSE_SUBTRACT};Yt[kf]=i.MIN,Yt[Hf]=i.MAX;let j={[Vf]:i.ZERO,[Gf]:i.ONE,[Wf]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[Zf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[$f]:i.ONE_MINUS_DST_COLOR,[Yf]:i.ONE_MINUS_DST_ALPHA,[Jf]:i.CONSTANT_COLOR,[Qf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,mt,q,et,St,At,jt,Ae,We,re){if(D===On){m===!0&&(rt(i.BLEND),m=!1);return}if(m===!1&&(Et(i.BLEND),m=!0),D!==Bf){if(D!==_||re!==I){if((p!==Bi||x!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,x=Bi),re)switch(D){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,M=null,y=null,A=null,T.set(0,0,0),w=0,_=D,I=re}return}St=St||mt,At=At||q,jt=jt||et,(mt!==p||St!==x)&&(i.blendEquationSeparate(Yt[mt],Yt[St]),p=mt,x=St),(q!==g||et!==M||At!==y||jt!==A)&&(i.blendFuncSeparate(j[q],j[et],j[At],j[jt]),g=q,M=et,y=At,A=jt),(Ae.equals(T)===!1||We!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,We),T.copy(Ae),w=We),_=D,I=!1}function st(D,mt){D.side===Fe?rt(i.CULL_FACE):Et(i.CULL_FACE);let q=D.side===Ce;mt&&(q=!q),pt(q),D.blending===xs&&D.transparent===!1?C(On):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let et=D.stencilWrite;o.setTest(et),et&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function at(D){D!==Nf?(Et(i.CULL_FACE),D!==v&&(D===Th?i.cullFace(i.BACK):D===Ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),v=D}function dt(D){D!==S&&(J&&i.lineWidth(D),S=D)}function Dt(D,mt,q){D?(Et(i.POLYGON_OFFSET_FILL),(k!==mt||F!==q)&&(i.polygonOffset(mt,q),k=mt,F=q)):rt(i.POLYGON_OFFSET_FILL)}function wt(D){D?Et(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+V-1),H!==D&&(i.activeTexture(D),H=D)}function b(D,mt,q){q===void 0&&(H===null?q=i.TEXTURE0+V-1:q=H);let et=lt[q];et===void 0&&(et={type:void 0,texture:void 0},lt[q]=et),(et.type!==D||et.texture!==mt)&&(H!==q&&(i.activeTexture(q),H=q),i.bindTexture(D,mt||ot[D]),et.type=D,et.texture=mt)}function B(){let D=lt[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(D){Zt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Zt.copy(D))}function ht(D){qt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),qt.copy(D))}function kt(D,mt){let q=l.get(mt);q===void 0&&(q=new WeakMap,l.set(mt,q));let et=q.get(D);et===void 0&&(et=i.getUniformBlockIndex(mt,D.name),q.set(D,et))}function Vt(D,mt){let et=l.get(mt).get(D);a.get(mt)!==et&&(i.uniformBlockBinding(mt,et,D.__bindingPointIndex),a.set(mt,et))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,lt={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,p=null,g=null,M=null,x=null,y=null,A=null,T=new yt(0,0,0),w=0,I=!1,O=null,v=null,S=null,k=null,F=null,Zt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Et,disable:rt,bindFramebuffer:Bt,drawBuffers:Pt,useProgram:Nt,setBlending:C,setMaterial:st,setFlipSided:pt,setCullFace:at,setLineWidth:dt,setPolygonOffset:Dt,setScissorTest:wt,activeTexture:R,bindTexture:b,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:W,texImage3D:ct,updateUBOMapping:kt,uniformBlockBinding:Vt,texStorage2D:$t,texStorage3D:L,texSubImage2D:K,texSubImage3D:It,compressedTexSubImage2D:xt,compressedTexSubImage3D:Tt,scissor:ft,viewport:ht,reset:ie}}function vu(i,t,e,n){let s=sx(n);switch(e){case zu:return i*t;case Hu:return i*t;case Vu:return i*t*2;case Kc:return i*t/s.components*s.byteLength;case Jc:return i*t/s.components*s.byteLength;case Gu:return i*t*2/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case ku:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case jc:return i*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(t,8)/2;case Il:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case go:case Zl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wu:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sx(i){switch(i){case jn:case Fu:return{byteLength:1,components:1};case dr:case Bu:case Ln:return{byteLength:2,components:1};case Zc:case $c:return{byteLength:2,components:4};case Hi:case Yc:case Bn:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return d?new OffscreenCanvas(R,b):Eo("canvas")}function _(R,b,B){let $=1,tt=wt(R);if((tt.width>B||tt.height>B)&&($=B/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let K=Math.floor($*tt.width),It=Math.floor($*tt.height);u===void 0&&(u=m(K,It));let xt=b?m(K,It):u;return xt.width=K,xt.height=It,xt.getContext("2d").drawImage(R,0,0,K,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+It+")."),xt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Je&&R.minFilter!==Tn}function g(R){i.generateMipmap(R)}function M(R,b,B,$,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),b===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){let It=tt?vo:oe.getTransfer($);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=It===xe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,b){let B;return R?b===null||b===Hi||b===ws?B=i.DEPTH24_STENCIL8:b===Bn?B=i.DEPTH32F_STENCIL8:b===dr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===ws?B=i.DEPTH_COMPONENT24:b===Bn?B=i.DEPTH_COMPONENT32F:b===dr&&(B=i.DEPTH_COMPONENT16),B}function y(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Je&&R.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&h.delete(b)}function T(R){let b=R.target;b.removeEventListener("dispose",T),O(b)}function w(R){let b=n.get(R);if(b.__webglInit===void 0)return;let B=R.source,$=f.get(B);if($){let tt=$[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(R),Object.keys($).length===0&&f.delete(B)}n.remove(R)}function I(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let B=R.source,$=f.get(B);delete $[b.__cacheKey],o.memory.textures--}function O(R){let b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let tt=0;tt<b.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=R.textures;for(let $=0,tt=B.length;$<tt;$++){let K=n.get(B[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(R)}let v=0;function S(){v=0}function k(){let R=v;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function F(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function V(R,b){let B=n.get(R);if(R.isVideoTexture&&dt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(B,R,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function J(R,b){let B=n.get(R);if(R.version>0&&B.__version!==R.version){qt(B,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function z(R,b){let B=n.get(R);if(R.version>0&&B.__version!==R.version){qt(B,R,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function it(R,b){let B=n.get(R);if(R.version>0&&B.__version!==R.version){Z(B,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}let H={[Qn]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},lt={[Je]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},vt={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[Xu]:i.LEQUAL,[hd]:i.EQUAL,[dd]:i.GEQUAL,[ud]:i.GREATER,[fd]:i.NOTEQUAL};function _t(R,b){if(b.type===Bn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===La||b.magFilter===Ur||b.magFilter===ki||b.minFilter===Tn||b.minFilter===La||b.minFilter===Ur||b.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,H[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,H[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,H[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,lt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Je||b.minFilter!==Ur&&b.minFilter!==ki||b.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Zt(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let $=b.source,tt=f.get($);tt===void 0&&(tt={},f.set($,tt));let K=F(b);if(K!==R.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[K].usedTimes++;let It=tt[R.__cacheKey];It!==void 0&&(tt[R.__cacheKey].usedTimes--,It.usedTimes===0&&I(b)),R.__cacheKey=K,R.__webglTexture=tt[K].texture}return B}function qt(R,b,B){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);let tt=Zt(R,b),K=b.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+B);let It=n.get(K);if(K.version!==It.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let xt=oe.getPrimaries(oe.workingColorSpace),Tt=b.colorSpace===mi?null:oe.getPrimaries(b.colorSpace),$t=b.colorSpace===mi||xt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let L=_(b.image,!1,s.maxTextureSize);L=Dt(b,L);let W=r.convert(b.format,b.colorSpace),ct=r.convert(b.type),ft=M(b.internalFormat,W,ct,b.colorSpace,b.isVideoTexture);_t($,b);let ht,kt=b.mipmaps,Vt=b.isVideoTexture!==!0,ie=It.__version===void 0||tt===!0,D=K.dataReady,mt=y(b,L);if(b.isDepthTexture)ft=x(b.format===Ts,b.type),ie&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,ft,L.width,L.height):e.texImage2D(i.TEXTURE_2D,0,ft,L.width,L.height,0,W,ct,null));else if(b.isDataTexture)if(kt.length>0){Vt&&ie&&e.texStorage2D(i.TEXTURE_2D,mt,ft,kt[0].width,kt[0].height);for(let q=0,et=kt.length;q<et;q++)ht=kt[q],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,W,ct,ht.data):e.texImage2D(i.TEXTURE_2D,q,ft,ht.width,ht.height,0,W,ct,ht.data);b.generateMipmaps=!1}else Vt?(ie&&e.texStorage2D(i.TEXTURE_2D,mt,ft,L.width,L.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,W,ct,L.data)):e.texImage2D(i.TEXTURE_2D,0,ft,L.width,L.height,0,W,ct,L.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ft,kt[0].width,kt[0].height,L.depth);for(let q=0,et=kt.length;q<et;q++)if(ht=kt[q],b.format!==ln)if(W!==null)if(Vt){if(D)if(b.layerUpdates.size>0){let St=vu(ht.width,ht.height,b.format,b.type);for(let At of b.layerUpdates){let jt=ht.data.subarray(At*St/ht.data.BYTES_PER_ELEMENT,(At+1)*St/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,At,ht.width,ht.height,1,W,jt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,L.depth,W,ht.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,ft,ht.width,ht.height,L.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,L.depth,W,ct,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,ft,ht.width,ht.height,L.depth,0,W,ct,ht.data)}else{Vt&&ie&&e.texStorage2D(i.TEXTURE_2D,mt,ft,kt[0].width,kt[0].height);for(let q=0,et=kt.length;q<et;q++)ht=kt[q],b.format!==ln?W!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,W,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,q,ft,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,W,ct,ht.data):e.texImage2D(i.TEXTURE_2D,q,ft,ht.width,ht.height,0,W,ct,ht.data)}else if(b.isDataArrayTexture)if(Vt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ft,L.width,L.height,L.depth),D)if(b.layerUpdates.size>0){let q=vu(L.width,L.height,b.format,b.type);for(let et of b.layerUpdates){let St=L.data.subarray(et*q/L.data.BYTES_PER_ELEMENT,(et+1)*q/L.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,L.width,L.height,1,W,ct,St)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,W,ct,L.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,L.width,L.height,L.depth,0,W,ct,L.data);else if(b.isData3DTexture)Vt?(ie&&e.texStorage3D(i.TEXTURE_3D,mt,ft,L.width,L.height,L.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,W,ct,L.data)):e.texImage3D(i.TEXTURE_3D,0,ft,L.width,L.height,L.depth,0,W,ct,L.data);else if(b.isFramebufferTexture){if(ie)if(Vt)e.texStorage2D(i.TEXTURE_2D,mt,ft,L.width,L.height);else{let q=L.width,et=L.height;for(let St=0;St<mt;St++)e.texImage2D(i.TEXTURE_2D,St,ft,q,et,0,W,ct,null),q>>=1,et>>=1}}else if(kt.length>0){if(Vt&&ie){let q=wt(kt[0]);e.texStorage2D(i.TEXTURE_2D,mt,ft,q.width,q.height)}for(let q=0,et=kt.length;q<et;q++)ht=kt[q],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,W,ct,ht):e.texImage2D(i.TEXTURE_2D,q,ft,W,ct,ht);b.generateMipmaps=!1}else if(Vt){if(ie){let q=wt(L);e.texStorage2D(i.TEXTURE_2D,mt,ft,q.width,q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W,ct,L)}else e.texImage2D(i.TEXTURE_2D,0,ft,W,ct,L);p(b)&&g($),It.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Z(R,b,B){if(b.image.length!==6)return;let $=Zt(R,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let K=n.get(tt);if(tt.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+B);let It=oe.getPrimaries(oe.workingColorSpace),xt=b.colorSpace===mi?null:oe.getPrimaries(b.colorSpace),Tt=b.colorSpace===mi||It===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let $t=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,W=[];for(let et=0;et<6;et++)!$t&&!L?W[et]=_(b.image[et],!0,s.maxCubemapSize):W[et]=L?b.image[et].image:b.image[et],W[et]=Dt(b,W[et]);let ct=W[0],ft=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),kt=M(b.internalFormat,ft,ht,b.colorSpace),Vt=b.isVideoTexture!==!0,ie=K.__version===void 0||$===!0,D=tt.dataReady,mt=y(b,ct);_t(i.TEXTURE_CUBE_MAP,b);let q;if($t){Vt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,ct.width,ct.height);for(let et=0;et<6;et++){q=W[et].mipmaps;for(let St=0;St<q.length;St++){let At=q[St];b.format!==ln?ft!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,At.width,At.height,ft,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,kt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,0,0,At.width,At.height,ft,ht,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St,kt,At.width,At.height,0,ft,ht,At.data)}}}else{if(q=b.mipmaps,Vt&&ie){q.length>0&&mt++;let et=wt(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,et.width,et.height)}for(let et=0;et<6;et++)if(L){Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,W[et].width,W[et].height,ft,ht,W[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,kt,W[et].width,W[et].height,0,ft,ht,W[et].data);for(let St=0;St<q.length;St++){let jt=q[St].image[et].image;Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,jt.width,jt.height,ft,ht,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,kt,jt.width,jt.height,0,ft,ht,jt.data)}}else{Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ft,ht,W[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,kt,ft,ht,W[et]);for(let St=0;St<q.length;St++){let At=q[St];Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,0,0,ft,ht,At.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,St+1,kt,ft,ht,At.image[et])}}}p(b)&&g(i.TEXTURE_CUBE_MAP),K.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ot(R,b,B,$,tt,K){let It=r.convert(B.format,B.colorSpace),xt=r.convert(B.type),Tt=M(B.internalFormat,It,xt,B.colorSpace);if(!n.get(b).__hasExternalTextures){let L=Math.max(1,b.width>>K),W=Math.max(1,b.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,Tt,L,W,b.depth,0,It,xt,null):e.texImage2D(tt,K,Tt,L,W,0,It,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),at(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,n.get(B).__webglTexture,0,pt(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,n.get(B).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let $=b.depthTexture,tt=$&&$.isDepthTexture?$.type:null,K=x(b.stencilBuffer,tt),It=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=pt(b);at(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,K,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,R)}else{let $=b.textures;for(let tt=0;tt<$.length;tt++){let K=$[tt],It=r.convert(K.format,K.colorSpace),xt=r.convert(K.type),Tt=M(K.internalFormat,It,xt,K.colorSpace),$t=pt(b);B&&at(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Tt,b.width,b.height):at(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,Tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let $=n.get(b.depthTexture).__webglTexture,tt=pt(b);if(b.depthTexture.format===_s)at(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(b.depthTexture.format===Ts)at(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Bt(R){let b=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=$}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");rt(b.__webglFramebuffer,R)}else if(B){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),Et(b.__webglDepthbuffer[$],R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Et(b.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,b,B){let $=n.get(R);b!==void 0&&ot($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Bt(R)}function Nt(R){let b=R.texture,B=n.get(R),$=n.get(b);R.addEventListener("dispose",T);let tt=R.textures,K=R.isWebGLCubeRenderTarget===!0,It=tt.length>1;if(It||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[xt]=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)B.__webglFramebuffer[xt][Tt]=i.createFramebuffer()}else B.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)B.__webglFramebuffer[xt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(It)for(let xt=0,Tt=tt.length;xt<Tt;xt++){let $t=n.get(tt[xt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&at(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<tt.length;xt++){let Tt=tt[xt];B.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);let $t=r.convert(Tt.format,Tt.colorSpace),L=r.convert(Tt.type),W=M(Tt.internalFormat,$t,L,Tt.colorSpace,R.isXRRenderTarget===!0),ct=pt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,W,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),_t(i.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)ot(B.__webglFramebuffer[xt][Tt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Tt);else ot(B.__webglFramebuffer[xt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let xt=0,Tt=tt.length;xt<Tt;xt++){let $t=tt[xt],L=n.get($t);e.bindTexture(i.TEXTURE_2D,L.__webglTexture),_t(i.TEXTURE_2D,$t),ot(B.__webglFramebuffer,R,$t,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),p($t)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,$.__webglTexture),_t(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)ot(B.__webglFramebuffer[Tt],R,b,i.COLOR_ATTACHMENT0,xt,Tt);else ot(B.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,xt,0);p(b)&&g(xt),e.unbindTexture()}R.depthBuffer&&Bt(R)}function Yt(R){let b=R.textures;for(let B=0,$=b.length;B<$;B++){let tt=b[B];if(p(tt)){let K=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,It=n.get(tt).__webglTexture;e.bindTexture(K,It),g(K),e.unbindTexture()}}}let j=[],C=[];function st(R){if(R.samples>0){if(at(R)===!1){let b=R.textures,B=R.width,$=R.height,tt=i.COLOR_BUFFER_BIT,K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(R),xt=b.length>1;if(xt)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let $t=n.get(b[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,tt,i.NEAREST),l===!0&&(j.length=0,C.length=0,j.push(i.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(j.push(K),C.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let $t=n.get(b[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function pt(R){return Math.min(s.maxSamples,R.samples)}function at(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Dt(R,b){let B=R.colorSpace,$=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Si&&B!==mi&&(oe.getTransfer(B)===xe?($!==ln||tt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function wt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=z,this.setTextureCube=it,this.rebindTextures=Pt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=at}function ox(i,t){function e(n,s=mi){let r,o=oe.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return i.BYTE;if(n===Bu)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Yc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===zu)return i.ALPHA;if(n===ku)return i.RGB;if(n===ln)return i.RGBA;if(n===Hu)return i.LUMINANCE;if(n===Vu)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Jc)return i.RED_INTEGER;if(n===Gu)return i.RG;if(n===Qc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Ll)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ul||n===Nl||n===Fl||n===Bl||n===Ol||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===Zl||n===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wu||n===Kl||n===Jl||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pc=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},we=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},ax={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends vi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,_=new mc,p=e.getContextAttributes(),g=null,M=null,x=[],y=[],A=new nt,T=null,w=new Ze;w.layers.enable(1),w.viewport=new me;let I=new Ze;I.layers.enable(2),I.viewport=new me;let O=[w,I],v=new pc;v.layers.enable(1),v.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=x[Z];return ot===void 0&&(ot=new cr,x[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=x[Z];return ot===void 0&&(ot=new cr,x[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=x[Z];return ot===void 0&&(ot=new cr,x[Z]=ot),ot.getHandSpace()};function F(Z){let ot=y.indexOf(Z.inputSource);if(ot===-1)return;let Et=x[ot];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,c||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<x.length;Z++){let ot=y[Z];ot!==null&&(y[Z]=null,x[Z].disconnect(ot))}S=null,k=null,_.reset(),t.setRenderTarget(g),d=null,f=null,u=null,s=null,M=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new tn(d.framebufferWidth,d.framebufferHeight,{format:ln,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,Et=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?Ts:_s,Et=p.stencil?ws:Hi);let Bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new tn(f.textureWidth,f.textureHeight,{format:ln,type:jn,depthTexture:new Do(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Z){for(let ot=0;ot<Z.removed.length;ot++){let Et=Z.removed[ot],rt=y.indexOf(Et);rt>=0&&(y[rt]=null,x[rt].disconnect(Et))}for(let ot=0;ot<Z.added.length;ot++){let Et=Z.added[ot],rt=y.indexOf(Et);if(rt===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=y.length){y.push(Et),rt=Pt;break}else if(y[Pt]===null){y[Pt]=Et,rt=Pt;break}if(rt===-1)break}let Bt=x[rt];Bt&&Bt.connect(Et)}}let z=new P,it=new P;function H(Z,ot,Et){z.setFromMatrixPosition(ot.matrixWorld),it.setFromMatrixPosition(Et.matrixWorld);let rt=z.distanceTo(it),Bt=ot.projectionMatrix.elements,Pt=Et.projectionMatrix.elements,Nt=Bt[14]/(Bt[10]-1),Yt=Bt[14]/(Bt[10]+1),j=(Bt[9]+1)/Bt[5],C=(Bt[9]-1)/Bt[5],st=(Bt[8]-1)/Bt[0],pt=(Pt[8]+1)/Pt[0],at=Nt*st,dt=Nt*pt,Dt=rt/(-st+pt),wt=Dt*-st;if(ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(Dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Bt[10]===-1)Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let R=Nt+Dt,b=Yt+Dt,B=at-wt,$=dt+(rt-wt),tt=j*Yt/b*R,K=C*Yt/b*R;Z.projectionMatrix.makePerspective(B,$,tt,K,R,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ot=Z.near,Et=Z.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),v.near=I.near=w.near=ot,v.far=I.far=w.far=Et,(S!==v.near||k!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,k=v.far);let rt=Z.parent,Bt=v.cameras;lt(v,rt);for(let Pt=0;Pt<Bt.length;Pt++)lt(Bt[Pt],rt);Bt.length===2?H(v,w,I):v.projectionMatrix.copy(w.projectionMatrix),vt(Z,v,rt)};function vt(Z,ot,Et){Et===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=So*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let _t=null;function Zt(Z,ot){if(h=ot.getViewerPose(c||o),m=ot,h!==null){let Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let rt=!1;Et.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Pt=0;Pt<Et.length;Pt++){let Nt=Et[Pt],Yt=null;if(d!==null)Yt=d.getViewport(Nt);else{let C=u.getViewSubImage(f,Nt);Yt=C.viewport,Pt===0&&(t.setRenderTargetTextures(M,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let j=O[Pt];j===void 0&&(j=new Ze,j.layers.enable(Pt),j.viewport=new me,O[Pt]=j),j.matrix.fromArray(Nt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Nt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Pt===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(j)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){let Pt=u.getDepthInformation(Et[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let Et=0;Et<x.length;Et++){let rt=y[Et],Bt=x[Et];rt!==null&&Bt!==void 0&&Bt.update(rt,ot,c||o)}_t&&_t(Z,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}let qt=new $u;qt.setAnimationLoop(Zt),this.setAnimationLoop=function(Z){_t=Z},this.dispose=function(){}}},Ni=new An,hx=new te;function ux(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Zu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,x,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ce&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ce&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Ni)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=x*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ce&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));let A=x.program;n.updateUBOMapping(M,A);let T=t.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){let x=u();M.__bindingPointIndex=x;let y=i.createBuffer(),A=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=y.length;T<w;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let O=0,v=I.length;O<v;O++){let S=I[O];if(d(S,T,O,A)===!0){let k=S.__offset,F=Array.isArray(S.value)?S.value:[S.value],V=0;for(let J=0;J<F.length;J++){let z=F[J],it=_(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,k+V,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,V),V+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,y,A){let T=M.value,w=x+"_"+y;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{let I=A[w];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[w]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(M){let x=M.uniforms,y=0,A=16;for(let w=0,I=x.length;w<I;w++){let O=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,S=O.length;v<S;v++){let k=O[v],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,J=F.length;V<J;V++){let z=F[V],it=_(z),H=y%A,lt=H%it.boundary,vt=H+lt;y+=lt,vt!==0&&A-vt<it.storage&&(y+=A-vt),k.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=it.storage}}}let T=y%A;return T>0&&(y+=A-T),M.__size=y,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Uo=class{constructor(t={}){let{canvas:e=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),m=new Int32Array(4),_=null,p=null,g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=xi,this.toneMappingExposure=1;let x=this,y=!1,A=0,T=0,w=null,I=-1,O=null,v=new me,S=new me,k=null,F=new yt(0),V=0,J=e.width,z=e.height,it=1,H=null,lt=null,vt=new me(0,0,J,z),_t=new me(0,0,J,z),Zt=!1,qt=new pr,Z=!1,ot=!1,Et=new te,rt=new te,Bt=new P,Pt=new me,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function j(){return w===null?it:1}let C=n;function st(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",At,!1),C===null){let U="webgl2";if(C=st(U,E),C===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pt,at,dt,Dt,wt,R,b,B,$,tt,K,It,xt,Tt,$t,L,W,ct,ft,ht,kt,Vt,ie,D;function mt(){pt=new R0(C),pt.init(),Vt=new ox(C,pt),at=new b0(C,pt,t,Vt),dt=new ix(C),at.reverseDepthBuffer&&dt.buffers.depth.setReversed(!0),Dt=new I0(C),wt=new Wg,R=new rx(C,pt,dt,wt,at,Vt,Dt),b=new E0(x),B=new A0(x),$=new Od(C),ie=new y0(C,$),tt=new C0(C,$,Dt,ie),K=new D0(C,tt,$,Dt),ft=new L0(C,at,R),L=new S0(wt),It=new Gg(x,b,B,pt,at,ie,L),xt=new ux(x,wt),Tt=new qg,$t=new Qg(pt),ct=new v0(x,b,B,dt,K,f,l),W=new ex(x,K,at),D=new fx(C,Dt,at,dt),ht=new M0(C,pt,Dt),kt=new P0(C,pt,Dt),Dt.programs=It.programs,x.capabilities=at,x.extensions=pt,x.properties=wt,x.renderLists=Tt,x.shadowMap=W,x.state=dt,x.info=Dt}mt();let q=new gc(x,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=pt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=pt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(J,z,!1))},this.getSize=function(E){return E.set(J,z)},this.setSize=function(E,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,z=U,e.width=Math.floor(E*it),e.height=Math.floor(U*it),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(J*it,z*it).floor()},this.setDrawingBufferSize=function(E,U,G){J=E,z=U,it=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,U,G,X){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,U,G,X),dt.viewport(v.copy(vt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(_t)},this.setScissor=function(E,U,G,X){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,U,G,X),dt.scissor(S.copy(_t).multiplyScalar(it).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(E){dt.setScissorTest(Zt=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,U=!0,G=!0){let X=0;if(E){let N=!1;if(w!==null){let gt=w.texture.format;N=gt===jc||gt===Qc||gt===Jc}if(N){let gt=w.texture.type,Ct=gt===jn||gt===Hi||gt===dr||gt===ws||gt===Zc||gt===$c,Ut=ct.getClearColor(),Ft=ct.getClearAlpha(),Gt=Ut.r,Xt=Ut.g,Ot=Ut.b;Ct?(d[0]=Gt,d[1]=Xt,d[2]=Ot,d[3]=Ft,C.clearBufferuiv(C.COLOR,0,d)):(m[0]=Gt,m[1]=Xt,m[2]=Ot,m[3]=Ft,C.clearBufferiv(C.COLOR,0,m))}else X|=C.COLOR_BUFFER_BIT}U&&(X|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Tt.dispose(),$t.dispose(),wt.dispose(),b.dispose(),B.dispose(),K.dispose(),ie.dispose(),D.dispose(),It.dispose(),q.dispose(),q.removeEventListener("sessionstart",qs),q.removeEventListener("sessionend",Ys),Un.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let E=Dt.autoReset,U=W.enabled,G=W.autoUpdate,X=W.needsUpdate,N=W.type;mt(),Dt.autoReset=E,W.enabled=U,W.autoUpdate=G,W.needsUpdate=X,W.type=N}function At(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jt(E){let U=E.target;U.removeEventListener("dispose",jt),Ae(U)}function Ae(E){We(E),wt.remove(E)}function We(E){let U=wt.get(E).programs;U!==void 0&&(U.forEach(function(G){It.releaseProgram(G)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,X,N,gt){U===null&&(U=Nt);let Ct=N.isMesh&&N.matrixWorld.determinant()<0,Ut=Ir(E,U,G,X,N);dt.setMaterial(X,Ct);let Ft=G.index,Gt=1;if(X.wireframe===!0){if(Ft=tt.getWireframeAttribute(G),Ft===void 0)return;Gt=2}let Xt=G.drawRange,Ot=G.attributes.position,de=Xt.start*Gt,ye=(Xt.start+Xt.count)*Gt;gt!==null&&(de=Math.max(de,gt.start*Gt),ye=Math.min(ye,(gt.start+gt.count)*Gt)),Ft!==null?(de=Math.max(de,0),ye=Math.min(ye,Ft.count)):Ot!=null&&(de=Math.max(de,0),ye=Math.min(ye,Ot.count));let Re=ye-de;if(Re<0||Re===1/0)return;ie.setup(N,X,Ut,G,Ft);let sn,le=ht;if(Ft!==null&&(sn=$.get(Ft),le=kt,le.setIndex(sn)),N.isMesh)X.wireframe===!0?(dt.setLineWidth(X.wireframeLinewidth*j()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(N.isLine){let zt=X.linewidth;zt===void 0&&(zt=1),dt.setLineWidth(zt*j()),N.isLineSegments?le.setMode(C.LINES):N.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else N.isPoints?le.setMode(C.POINTS):N.isSprite&&le.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let zt=N._multiDrawStarts,qe=N._multiDrawCounts,ce=N._multiDrawCount,bn=Ft?$.get(Ft).bytesPerElement:1,$i=wt.get(X).currentProgram.getUniforms();for(let rn=0;rn<ce;rn++)$i.setValue(C,"_gl_DrawID",rn),le.render(zt[rn]/bn,qe[rn])}else if(N.isInstancedMesh)le.renderInstances(de,Re,N.count);else if(G.isInstancedBufferGeometry){let zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,qe=Math.min(G.instanceCount,zt);le.renderInstances(de,Re,qe)}else le.render(de,Re)};function re(E,U,G){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,Pe(E,U,G),E.side=_i,E.needsUpdate=!0,Pe(E,U,G),E.side=Fe):Pe(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=$t.get(G),p.init(U),M.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==G&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let X=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let gt=N.material;if(gt)if(Array.isArray(gt))for(let Ct=0;Ct<gt.length;Ct++){let Ut=gt[Ct];re(Ut,G,N),X.add(Ut)}else re(gt,G,N),X.add(gt)}),M.pop(),p=null,X},this.compileAsync=function(E,U,G=null){let X=this.compile(E,U,G);return new Promise(N=>{function gt(){if(X.forEach(function(Ct){wt.get(Ct).currentProgram.isReady()&&X.delete(Ct)}),X.size===0){N(E);return}setTimeout(gt,10)}pt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Xe=null;function gn(E){Xe&&Xe(E)}function qs(){Un.stop()}function Ys(){Un.start()}let Un=new $u;Un.setAnimationLoop(gn),typeof self!="undefined"&&Un.setContext(self),this.setAnimationLoop=function(E){Xe=E,q.setAnimationLoop(E),E===null?Un.stop():Un.start()},q.addEventListener("sessionstart",qs),q.addEventListener("sessionend",Ys),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,w),p=$t.get(E,M.length),p.init(U),M.push(p),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),qt.setFromProjectionMatrix(rt),ot=this.localClippingEnabled,Z=L.init(this.clippingPlanes,ot),_=Tt.get(E,g.length),_.init(),g.push(_),q.enabled===!0&&q.isPresenting===!0){let gt=x.xr.getDepthSensingMesh();gt!==null&&Zi(gt,U,-1/0,x.sortObjects)}Zi(E,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,lt),Yt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Yt&&ct.addToRenderList(_,E),this.info.render.frame++,Z===!0&&L.beginShadows();let G=p.state.shadowsArray;W.render(G,E,U),Z===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=_.opaque,N=_.transmissive;if(p.setupLights(),U.isArrayCamera){let gt=U.cameras;if(N.length>0)for(let Ct=0,Ut=gt.length;Ct<Ut;Ct++){let Ft=gt[Ct];$s(X,N,E,Ft)}Yt&&ct.render(E);for(let Ct=0,Ut=gt.length;Ct<Ut;Ct++){let Ft=gt[Ct];Zs(_,E,Ft,Ft.viewport)}}else N.length>0&&$s(X,N,E,U),Yt&&ct.render(E),Zs(_,E,U);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,U),ie.resetDefaultState(),I=-1,O=null,M.pop(),M.length>0?(p=M[M.length-1],Z===!0&&L.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Zi(E,U,G,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qt.intersectsSprite(E)){X&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);let Ct=K.update(E),Ut=E.material;Ut.visible&&_.push(E,Ct,Ut,G,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qt.intersectsObject(E))){let Ct=K.update(E),Ut=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Pt.copy(Ct.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(Ut)){let Ft=Ct.groups;for(let Gt=0,Xt=Ft.length;Gt<Xt;Gt++){let Ot=Ft[Gt],de=Ut[Ot.materialIndex];de&&de.visible&&_.push(E,Ct,de,G,Pt.z,Ot)}}else Ut.visible&&_.push(E,Ct,Ut,G,Pt.z,null)}}let gt=E.children;for(let Ct=0,Ut=gt.length;Ct<Ut;Ct++)Zi(gt[Ct],U,G,X)}function Zs(E,U,G,X){let N=E.opaque,gt=E.transmissive,Ct=E.transparent;p.setupLightsView(G),Z===!0&&L.setGlobalState(x.clippingPlanes,G),X&&dt.viewport(v.copy(X)),N.length>0&&Ci(N,U,G),gt.length>0&&Ci(gt,U,G),Ct.length>0&&Ci(Ct,U,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function $s(E,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new tn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ln:jn,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let gt=p.state.transmissionRenderTarget[X.id],Ct=X.viewport||v;gt.setSize(Ct.z,Ct.w);let Ut=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(F),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&ct.render(G);let Ft=x.toneMapping;x.toneMapping=xi;let Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Z===!0&&L.setGlobalState(x.clippingPlanes,X),Ci(E,G,X),R.updateMultisampleRenderTarget(gt),R.updateRenderTargetMipmap(gt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ot=0,de=U.length;Ot<de;Ot++){let ye=U[Ot],Re=ye.object,sn=ye.geometry,le=ye.material,zt=ye.group;if(le.side===Fe&&Re.layers.test(X.layers)){let qe=le.side;le.side=Ce,le.needsUpdate=!0,Ks(Re,G,X,sn,le,zt),le.side=qe,le.needsUpdate=!0,Xt=!0}}Xt===!0&&(R.updateMultisampleRenderTarget(gt),R.updateRenderTargetMipmap(gt))}x.setRenderTarget(Ut),x.setClearColor(F,V),Gt!==void 0&&(X.viewport=Gt),x.toneMapping=Ft}function Ci(E,U,G){let X=U.isScene===!0?U.overrideMaterial:null;for(let N=0,gt=E.length;N<gt;N++){let Ct=E[N],Ut=Ct.object,Ft=Ct.geometry,Gt=X===null?Ct.material:X,Xt=Ct.group;Ut.layers.test(G.layers)&&Ks(Ut,U,G,Ft,Gt,Xt)}}function Ks(E,U,G,X,N,gt){E.onBeforeRender(x,U,G,X,N,gt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,G,X,E,gt),N.transparent===!0&&N.side===Fe&&N.forceSinglePass===!1?(N.side=Ce,N.needsUpdate=!0,x.renderBufferDirect(G,U,X,N,E,gt),N.side=_i,N.needsUpdate=!0,x.renderBufferDirect(G,U,X,N,E,gt),N.side=Fe):x.renderBufferDirect(G,U,X,N,E,gt),E.onAfterRender(x,U,G,X,N,gt)}function Pe(E,U,G){U.isScene!==!0&&(U=Nt);let X=wt.get(E),N=p.state.lights,gt=p.state.shadowsArray,Ct=N.state.version,Ut=It.getParameters(E,N.state,gt,U,G),Ft=It.getProgramCacheKey(Ut),Gt=X.programs;X.environment=E.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(E.isMeshStandardMaterial?B:b).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",jt),Gt=new Map,X.programs=Gt);let Xt=Gt.get(Ft);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===Ct)return ai(E,Ut),Xt}else Ut.uniforms=It.getUniforms(E),E.onBeforeCompile(Ut,x),Xt=It.acquireProgram(Ut,Ft),Gt.set(Ft,Xt),X.uniforms=Ut.uniforms;let Ot=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=L.uniform),ai(E,Ut),X.needsLights=Dr(E),X.lightsStateVersion=Ct,X.needsLights&&(Ot.ambientLightColor.value=N.state.ambient,Ot.lightProbe.value=N.state.probe,Ot.directionalLights.value=N.state.directional,Ot.directionalLightShadows.value=N.state.directionalShadow,Ot.spotLights.value=N.state.spot,Ot.spotLightShadows.value=N.state.spotShadow,Ot.rectAreaLights.value=N.state.rectArea,Ot.ltc_1.value=N.state.rectAreaLTC1,Ot.ltc_2.value=N.state.rectAreaLTC2,Ot.pointLights.value=N.state.point,Ot.pointLightShadows.value=N.state.pointShadow,Ot.hemisphereLights.value=N.state.hemi,Ot.directionalShadowMap.value=N.state.directionalShadowMap,Ot.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ot.spotShadowMap.value=N.state.spotShadowMap,Ot.spotLightMatrix.value=N.state.spotLightMatrix,Ot.spotLightMap.value=N.state.spotLightMap,Ot.pointShadowMap.value=N.state.pointShadowMap,Ot.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function Vn(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=ys.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ai(E,U){let G=wt.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ir(E,U,G,X,N){U.isScene!==!0&&(U=Nt),R.resetTextureUnits();let gt=U.fog,Ct=X.isMeshStandardMaterial?U.environment:null,Ut=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Si,Ft=(X.isMeshStandardMaterial?B:b).get(X.envMap||Ct),Gt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ot=!!G.morphAttributes.position,de=!!G.morphAttributes.normal,ye=!!G.morphAttributes.color,Re=xi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Re=x.toneMapping);let sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=sn!==void 0?sn.length:0,zt=wt.get(X),qe=p.state.lights;if(Z===!0&&(ot===!0||E!==O)){let xn=E===O&&X.id===I;L.setState(X,E,xn)}let ce=!1;X.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==qe.state.version||zt.outputColorSpace!==Ut||N.isBatchedMesh&&zt.batching===!1||!N.isBatchedMesh&&zt.batching===!0||N.isBatchedMesh&&zt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&zt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&zt.instancing===!1||!N.isInstancedMesh&&zt.instancing===!0||N.isSkinnedMesh&&zt.skinning===!1||!N.isSkinnedMesh&&zt.skinning===!0||N.isInstancedMesh&&zt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&zt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&zt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&zt.instancingMorph===!1&&N.morphTexture!==null||zt.envMap!==Ft||X.fog===!0&&zt.fog!==gt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==L.numPlanes||zt.numIntersection!==L.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Xt||zt.morphTargets!==Ot||zt.morphNormals!==de||zt.morphColors!==ye||zt.toneMapping!==Re||zt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,zt.__version=X.version);let bn=zt.currentProgram;ce===!0&&(bn=Pe(X,U,N));let $i=!1,rn=!1,Ca=!1,Ie=bn.getUniforms(),li=zt.uniforms;if(dt.useProgram(bn.program)&&($i=!0,rn=!0,Ca=!0),X.id!==I&&(I=X.id,rn=!0),$i||O!==E){at.reverseDepthBuffer?(Et.copy(E.projectionMatrix),_d(Et),vd(Et),Ie.setValue(C,"projectionMatrix",Et)):Ie.setValue(C,"projectionMatrix",E.projectionMatrix),Ie.setValue(C,"viewMatrix",E.matrixWorldInverse);let xn=Ie.map.cameraPosition;xn!==void 0&&xn.setValue(C,Bt.setFromMatrixPosition(E.matrixWorld)),at.logarithmicDepthBuffer&&Ie.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ie.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,rn=!0,Ca=!0)}if(N.isSkinnedMesh){Ie.setOptional(C,N,"bindMatrix"),Ie.setOptional(C,N,"bindMatrixInverse");let xn=N.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ie.setValue(C,"boneTexture",xn.boneTexture,R))}N.isBatchedMesh&&(Ie.setOptional(C,N,"batchingTexture"),Ie.setValue(C,"batchingTexture",N._matricesTexture,R),Ie.setOptional(C,N,"batchingIdTexture"),Ie.setValue(C,"batchingIdTexture",N._indirectTexture,R),Ie.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Ie.setValue(C,"batchingColorTexture",N._colorsTexture,R));let Pa=G.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0)&&ft.update(N,G,bn),(rn||zt.receiveShadow!==N.receiveShadow)&&(zt.receiveShadow=N.receiveShadow,Ie.setValue(C,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(li.envMap.value=Ft,li.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(li.envMapIntensity.value=U.environmentIntensity),rn&&(Ie.setValue(C,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&Lr(li,Ca),gt&&X.fog===!0&&xt.refreshFogUniforms(li,gt),xt.refreshMaterialUniforms(li,X,it,z,p.state.transmissionRenderTarget[E.id]),ys.upload(C,Vn(zt),li,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ys.upload(C,Vn(zt),li,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ie.setValue(C,"center",N.center),Ie.setValue(C,"modelViewMatrix",N.modelViewMatrix),Ie.setValue(C,"normalMatrix",N.normalMatrix),Ie.setValue(C,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let xn=X.uniformsGroups;for(let Ia=0,Uf=xn.length;Ia<Uf;Ia++){let wh=xn[Ia];D.update(wh,bn),D.bind(wh,bn)}}return bn}function Lr(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Dr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,G){wt.get(E.texture).__webglTexture=U,wt.get(E.depthTexture).__webglTexture=G;let X=wt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let G=wt.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){w=E,A=U,T=G;let X=!0,N=null,gt=!1,Ct=!1;if(E){let Ft=wt.get(E);if(Ft.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(C.FRAMEBUFFER,null),X=!1;else if(Ft.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Ft.__hasExternalTextures)R.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ot=E.depthTexture;if(Ft.__boundDepthTexture!==Ot){if(Ot!==null&&wt.has(Ot)&&(E.width!==Ot.image.width||E.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ct=!0);let Xt=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][G]:N=Xt[U],gt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[G]:N=Xt,v.copy(E.viewport),S.copy(E.scissor),k=E.scissorTest}else v.copy(vt).multiplyScalar(it).floor(),S.copy(_t).multiplyScalar(it).floor(),k=Zt;if(dt.bindFramebuffer(C.FRAMEBUFFER,N)&&X&&dt.drawBuffers(E,N),dt.viewport(v),dt.scissor(S),dt.setScissorTest(k),gt){let Ft=wt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ft.__webglTexture,G)}else if(Ct){let Ft=wt.get(E.texture),Gt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,G||0,Gt)}I=-1},this.readRenderTargetPixels=function(E,U,G,X,N,gt,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);try{let Ft=E.texture,Gt=Ft.format,Xt=Ft.type;if(!at.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&G>=0&&G<=E.height-N&&C.readPixels(U,G,X,N,Vt.convert(Gt),Vt.convert(Xt),gt)}finally{let Ft=w!==null?wt.get(w).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,X,N,gt,Ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){let Ft=E.texture,Gt=Ft.format,Xt=Ft.type;if(!at.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-X&&G>=0&&G<=E.height-N){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);let Ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.bufferData(C.PIXEL_PACK_BUFFER,gt.byteLength,C.STREAM_READ),C.readPixels(U,G,X,N,Vt.convert(Gt),Vt.convert(Xt),0);let de=w!==null?wt.get(w).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,de);let ye=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await xd(C,ye,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,gt),C.deleteBuffer(Ot),C.deleteSync(ye),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,G=0){E.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let X=Math.pow(2,-G),N=Math.floor(E.image.width*X),gt=Math.floor(E.image.height*X),Ct=U!==null?U.x:0,Ut=U!==null?U.y:0;R.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,Ct,Ut,N,gt),dt.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,X=null,N=0){E.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let gt,Ct,Ut,Ft,Gt,Xt;G!==null?(gt=G.max.x-G.min.x,Ct=G.max.y-G.min.y,Ut=G.min.x,Ft=G.min.y):(gt=E.image.width,Ct=E.image.height,Ut=0,Ft=0),X!==null?(Gt=X.x,Xt=X.y):(Gt=0,Xt=0);let Ot=Vt.convert(U.format),de=Vt.convert(U.type);R.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let ye=C.getParameter(C.UNPACK_ROW_LENGTH),Re=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),le=C.getParameter(C.UNPACK_SKIP_ROWS),zt=C.getParameter(C.UNPACK_SKIP_IMAGES),qe=E.isCompressedTexture?E.mipmaps[N]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,qe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,qe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Gt,Xt,gt,Ct,Ot,de,qe.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Gt,Xt,qe.width,qe.height,Ot,qe.data):C.texSubImage2D(C.TEXTURE_2D,N,Gt,Xt,gt,Ct,Ot,de,qe),C.pixelStorei(C.UNPACK_ROW_LENGTH,ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt),N===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,X=null,N=0){E.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let gt,Ct,Ut,Ft,Gt,Xt,Ot,de,ye,Re=E.isCompressedTexture?E.mipmaps[N]:E.image;G!==null?(gt=G.max.x-G.min.x,Ct=G.max.y-G.min.y,Ut=G.max.z-G.min.z,Ft=G.min.x,Gt=G.min.y,Xt=G.min.z):(gt=Re.width,Ct=Re.height,Ut=Re.depth,Ft=0,Gt=0,Xt=0),X!==null?(Ot=X.x,de=X.y,ye=X.z):(Ot=0,de=0,ye=0);let sn=Vt.convert(U.format),le=Vt.convert(U.type),zt;if(U.isData3DTexture)R.setTexture3D(U,0),zt=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),zt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let qe=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),bn=C.getParameter(C.UNPACK_SKIP_PIXELS),$i=C.getParameter(C.UNPACK_SKIP_ROWS),rn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xt),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(zt,N,Ot,de,ye,gt,Ct,Ut,sn,le,Re.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(zt,N,Ot,de,ye,gt,Ct,Ut,sn,Re.data):C.texSubImage3D(zt,N,Ot,de,ye,gt,Ct,Ut,sn,le,Re),C.pixelStorei(C.UNPACK_ROW_LENGTH,qe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bn),C.pixelStorei(C.UNPACK_SKIP_ROWS,$i),C.pixelStorei(C.UNPACK_SKIP_IMAGES,rn),N===0&&U.generateMipmaps&&C.generateMipmap(zt),dt.unbindTexture()},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),dt.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,dt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===th?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===na?"display-p3":"srgb"}};var No=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mi=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new P,mr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ps=class extends Rn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hs,nr=new P,us=new P,fs=new P,ds=new nt,ir=new nt,tf=new te,eo=new P,sr=new P,no=new P,yu=new nt,cl=new nt,Mu=new nt,gr=class extends Be{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new he;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fo(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new mr(n,3,0,!1)),hs.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=hs,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),tf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;io(eo.set(-.5,-.5,0),fs,o,us,s,r),io(sr.set(.5,-.5,0),fs,o,us,s,r),io(no.set(.5,.5,0),fs,o,us,s,r),yu.set(0,0),cl.set(1,0),Mu.set(1,1);let a=t.ray.intersectTriangle(eo,sr,no,!1,nr);if(a===null&&(io(sr.set(-.5,.5,0),fs,o,us,s,r),cl.set(0,1),a=t.ray.intersectTriangle(eo,no,sr,!1,nr),a===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:gi.getInterpolation(nr,eo,sr,no,yu,cl,Mu,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function io(i,t,e,n,s,r){ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*ds.x-s*ds.y,ir.y=s*ds.x+r*ds.y):ir.copy(ds),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(tf)}var xr=class extends en{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Je,h=Je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new te,bu=new te,so=[],Su=new ti,dx=new te,rr=new ut,or=new yi,Cn=class extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Su.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),or.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),bu.multiplyMatrices(n,ps),rr.matrixWorld=bu,rr.raycast(t,so);for(let o=0,a=so.length;o<a;o++){let l=so[o];l.instanceId=r,l.object=this,e.push(l)}so.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,Kc,Bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Is=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eu=new te,xc=new Ao,ro=new yi,oo=new P,Ls=class extends Be{constructor(t=new he,e=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;Eu.copy(s).invert(),xc.copy(t.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){let p=c.getX(m);oo.fromBufferAttribute(u,p),wu(oo,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)oo.fromBufferAttribute(u,m),wu(oo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wu(i,t,e,n,s,r,o){let a=xc.distanceSqToPoint(i);if(a<e){let l=new P;xc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pn=class extends en{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,l=new te;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ye(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_c=class extends vr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ao=new P,hl=new nh,ul=new nh,fl=new nh,vc=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ao.subVectors(s[0],s[1]).add(s[0]),c=ao);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ao),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),hl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,p),ul.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,p),fl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ul.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),fl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(hl.calc(l),ul.calc(l),fl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Tu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function px(i,t){let e=1-i;return e*e*t}function mx(i,t){return 2*(1-i)*i*t}function gx(i,t){return i*i*t}function hr(i,t,e,n){return px(i,t)+mx(i,e)+gx(i,n)}function xx(i,t){let e=1-i;return e*e*e*t}function _x(i,t){let e=1-i;return 3*e*e*i*t}function vx(i,t){return 3*(1-i)*i*i*t}function yx(i,t){return i*i*i*t}function ur(i,t,e,n,s){return xx(i,t)+_x(i,e)+vx(i,n)+yx(i,s)}var Bo=class extends vn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yc=class extends vn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y),ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends vn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mc=class extends vn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends vn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bc=class extends vn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Tu(a,l.x,c.x,h.x,u.x),Tu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},Sc=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:vc,CubicBezierCurve:Bo,CubicBezierCurve3:yc,EllipseCurve:vr,LineCurve:Oo,LineCurve3:Mc,QuadraticBezierCurve:zo,QuadraticBezierCurve3:bc,SplineCurve:ko}),Ec=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}},Ho=class extends Ec{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Oo(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zo(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Bo(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ko(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new vr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vo=class i extends he{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,f=new nt,d=new P,m=new P,_=new P,p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let M=0;M<=e;M++){let x=n+M*h*s,y=Math.sin(x),A=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*A,o.push(u.x,u.y,u.z),f.x=M/e,f.y=T/(t.length-1),a.push(f.x,f.y);let w=l[3*T+0]*y,I=l[3*T+1],O=l[3*T+0]*A;c.push(w,I,O)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let y=x+M*t.length,A=y,T=y+t.length,w=y+t.length+1,I=y+1;r.push(A,T,I),r.push(w,I,T)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var _e=class i extends he{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],p=n/2,g=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function M(){let y=new P,A=new P,T=0,w=(e-t)/n;for(let I=0;I<=r;I++){let O=[],v=I/r,S=v*(e-t)+t;for(let k=0;k<=s;k++){let F=k/s,V=F*l+a,J=Math.sin(V),z=Math.cos(V);A.x=S*J,A.y=-v*n+p,A.z=S*z,u.push(A.x,A.y,A.z),y.set(J,w,z).normalize(),f.push(y.x,y.y,y.z),d.push(F,1-v),O.push(m++)}_.push(O)}for(let I=0;I<s;I++)for(let O=0;O<r;O++){let v=_[O][I],S=_[O+1][I],k=_[O+1][I+1],F=_[O][I+1];t>0&&(h.push(v,S,F),T+=3),e>0&&(h.push(S,k,F),T+=3)}c.addGroup(g,T,0),g+=T}function x(y){let A=m,T=new nt,w=new P,I=0,O=y===!0?t:e,v=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),m++;let S=m;for(let k=0;k<=s;k++){let V=k/s*l+a,J=Math.cos(V),z=Math.sin(V);w.x=O*z,w.y=p*v,w.z=O*J,u.push(w.x,w.y,w.z),f.push(0,v,0),T.x=J*.5+.5,T.y=z*.5*v+.5,d.push(T.x,T.y),m++}for(let k=0;k<s;k++){let F=A+k,V=S+k;y===!0?h.push(V,V+1,F):h.push(V+1,V,F),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hn=class i extends _e{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Go=class i extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new P,y=new P,A=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],y),d(e[T+2],A),l(x,y,A,M)}function l(M,x,y,A){let T=A+1,w=[];for(let I=0;I<=T;I++){w[I]=[];let O=M.clone().lerp(y,I/T),v=x.clone().lerp(y,I/T),S=T-I;for(let k=0;k<=S;k++)k===0&&I===T?w[I][k]=O:w[I][k]=O.clone().lerp(v,k/S)}for(let I=0;I<T;I++)for(let O=0;O<2*(T-I)-1;O++){let v=Math.floor(O/2);O%2===0?(f(w[I][v+1]),f(w[I+1][v]),f(w[I][v])):(f(w[I][v+1]),f(w[I+1][v+1]),f(w[I+1][v]))}}function c(M){let x=new P;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let M=new P;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let y=p(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;o.push(y,1-A)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let x=o[M+0],y=o[M+2],A=o[M+4],T=Math.max(x,y,A),w=Math.min(x,y,A);T>.9&&w<.1&&(x<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){let y=M*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function m(){let M=new P,x=new P,y=new P,A=new P,T=new nt,w=new nt,I=new nt;for(let O=0,v=0;O<r.length;O+=9,v+=6){M.set(r[O+0],r[O+1],r[O+2]),x.set(r[O+3],r[O+4],r[O+5]),y.set(r[O+6],r[O+7],r[O+8]),T.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),A.copy(M).add(x).add(y).divideScalar(3);let S=p(A);_(T,v+0,M,S),_(w,v+2,x,S),_(I,v+4,y,S)}}function _(M,x,y,A){A<0&&M.x===1&&(o[x]=M.x-1),y.x===0&&y.z===0&&(o[x]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ds=class i extends Go{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var bi=class extends Ho{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ho().fromJSON(s))}return this}},Mx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ef(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Tx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return yr(r,o,e,a,l,d,0),o}};function ef(i,t,e,n,s){let r,o;if(s===Bx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Au(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Au(r,i[r],i[r+1],o);return o&&sa(o,o.next)&&(br(o),o=o.next),o}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sa(e,e.next)||Ee(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ix(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Sx(i,n,s,r):bx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),br(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ex(Vi(i),t,e),yr(i,t,e,n,s,r,2)):o===2&&wx(i,t,e,n,s,r):yr(Vi(i),t,e,n,s,r,1);break}}}function bx(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&gs(s,a,r,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,g=wc(d,m,t,e,n),M=wc(_,p,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=g&&y&&y.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&gs(a,h,l,u,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&gs(a,h,l,u,c,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&gs(a,h,l,u,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&gs(a,h,l,u,c,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ex(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!sa(s,r)&&nf(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function wx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ux(o,a)){let l=sf(o,a);o=Vi(o,o.next),l=Vi(l,l.next),yr(o,t,e,n,s,r,0),yr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Tx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ef(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Dx(c));for(s.sort(Ax),r=0;r<s.length;r++)e=Rx(s[r],e);return e}function Ax(i,t){return i.x-t.x}function Rx(i,t){let e=Cx(i,t);if(!e)return t;let n=sf(e,i);return Vi(n,n.next),Vi(e,e.next)}function Cx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Mr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Px(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Px(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Ix(i,t,e,n){let s=i;do s.z===0&&(s.z=wc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lx(s)}function Lx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function wc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ux(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Nx(i,t)&&(Mr(i,t)&&Mr(t,i)&&Fx(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||sa(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sa(i,t){return i.x===t.x&&i.y===t.y}function nf(i,t,e,n){let s=co(Ee(i,t,e)),r=co(Ee(i,t,n)),o=co(Ee(e,n,i)),a=co(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&lo(i,e,t)||r===0&&lo(i,n,t)||o===0&&lo(e,i,n)||a===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function co(i){return i>0?1:i<0?-1:0}function Nx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Fx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function sf(i,t){let e=new Tc(i.i,i.x,i.y),n=new Tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Au(i,t,e,n){let s=new Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var fr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ru(t),Cu(n,t);let o=t.length;e.forEach(Ru);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Cu(n,e[l]);let a=Mx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ru(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Wo=class i extends he{constructor(t=new bi([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ox,x,y=!1,A,T,w,I;g&&(x=g.getSpacedPoints(h),y=!0,f=!1,A=g.computeFrenetFrames(h,!1),T=new P,w=new P,I=new P),f||(p=0,d=0,m=0,_=0);let O=a.extractPoints(c),v=O.shape,S=O.holes;if(!fr.isClockWise(v)){v=v.reverse();for(let j=0,C=S.length;j<C;j++){let st=S[j];fr.isClockWise(st)&&(S[j]=st.reverse())}}let F=fr.triangulateShape(v,S),V=v;for(let j=0,C=S.length;j<C;j++){let st=S[j];v=v.concat(st)}function J(j,C,st){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(C,st)}let z=v.length,it=F.length;function H(j,C,st){let pt,at,dt,Dt=j.x-C.x,wt=j.y-C.y,R=st.x-j.x,b=st.y-j.y,B=Dt*Dt+wt*wt,$=Dt*b-wt*R;if(Math.abs($)>Number.EPSILON){let tt=Math.sqrt(B),K=Math.sqrt(R*R+b*b),It=C.x-wt/tt,xt=C.y+Dt/tt,Tt=st.x-b/K,$t=st.y+R/K,L=((Tt-It)*b-($t-xt)*R)/(Dt*b-wt*R);pt=It+Dt*L-j.x,at=xt+wt*L-j.y;let W=pt*pt+at*at;if(W<=2)return new nt(pt,at);dt=Math.sqrt(W/2)}else{let tt=!1;Dt>Number.EPSILON?R>Number.EPSILON&&(tt=!0):Dt<-Number.EPSILON?R<-Number.EPSILON&&(tt=!0):Math.sign(wt)===Math.sign(b)&&(tt=!0),tt?(pt=-wt,at=Dt,dt=Math.sqrt(B)):(pt=Dt,at=wt,dt=Math.sqrt(B/2))}return new nt(pt/dt,at/dt)}let lt=[];for(let j=0,C=V.length,st=C-1,pt=j+1;j<C;j++,st++,pt++)st===C&&(st=0),pt===C&&(pt=0),lt[j]=H(V[j],V[st],V[pt]);let vt=[],_t,Zt=lt.concat();for(let j=0,C=S.length;j<C;j++){let st=S[j];_t=[];for(let pt=0,at=st.length,dt=at-1,Dt=pt+1;pt<at;pt++,dt++,Dt++)dt===at&&(dt=0),Dt===at&&(Dt=0),_t[pt]=H(st[pt],st[dt],st[Dt]);vt.push(_t),Zt=Zt.concat(_t)}for(let j=0;j<p;j++){let C=j/p,st=d*Math.cos(C*Math.PI/2),pt=m*Math.sin(C*Math.PI/2)+_;for(let at=0,dt=V.length;at<dt;at++){let Dt=J(V[at],lt[at],pt);rt(Dt.x,Dt.y,-st)}for(let at=0,dt=S.length;at<dt;at++){let Dt=S[at];_t=vt[at];for(let wt=0,R=Dt.length;wt<R;wt++){let b=J(Dt[wt],_t[wt],pt);rt(b.x,b.y,-st)}}}let qt=m+_;for(let j=0;j<z;j++){let C=f?J(v[j],Zt[j],qt):v[j];y?(w.copy(A.normals[0]).multiplyScalar(C.x),T.copy(A.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(w).add(T),rt(I.x,I.y,I.z)):rt(C.x,C.y,0)}for(let j=1;j<=h;j++)for(let C=0;C<z;C++){let st=f?J(v[C],Zt[C],qt):v[C];y?(w.copy(A.normals[j]).multiplyScalar(st.x),T.copy(A.binormals[j]).multiplyScalar(st.y),I.copy(x[j]).add(w).add(T),rt(I.x,I.y,I.z)):rt(st.x,st.y,u/h*j)}for(let j=p-1;j>=0;j--){let C=j/p,st=d*Math.cos(C*Math.PI/2),pt=m*Math.sin(C*Math.PI/2)+_;for(let at=0,dt=V.length;at<dt;at++){let Dt=J(V[at],lt[at],pt);rt(Dt.x,Dt.y,u+st)}for(let at=0,dt=S.length;at<dt;at++){let Dt=S[at];_t=vt[at];for(let wt=0,R=Dt.length;wt<R;wt++){let b=J(Dt[wt],_t[wt],pt);y?rt(b.x,b.y+x[h-1].y,x[h-1].x+st):rt(b.x,b.y,u+st)}}}Z(),ot();function Z(){let j=s.length/3;if(f){let C=0,st=z*C;for(let pt=0;pt<it;pt++){let at=F[pt];Bt(at[2]+st,at[1]+st,at[0]+st)}C=h+p*2,st=z*C;for(let pt=0;pt<it;pt++){let at=F[pt];Bt(at[0]+st,at[1]+st,at[2]+st)}}else{for(let C=0;C<it;C++){let st=F[C];Bt(st[2],st[1],st[0])}for(let C=0;C<it;C++){let st=F[C];Bt(st[0]+z*h,st[1]+z*h,st[2]+z*h)}}n.addGroup(j,s.length/3-j,0)}function ot(){let j=s.length/3,C=0;Et(V,C),C+=V.length;for(let st=0,pt=S.length;st<pt;st++){let at=S[st];Et(at,C),C+=at.length}n.addGroup(j,s.length/3-j,1)}function Et(j,C){let st=j.length;for(;--st>=0;){let pt=st,at=st-1;at<0&&(at=j.length-1);for(let dt=0,Dt=h+p*2;dt<Dt;dt++){let wt=z*dt,R=z*(dt+1),b=C+pt+wt,B=C+at+wt,$=C+at+R,tt=C+pt+R;Pt(b,B,$,tt)}}}function rt(j,C,st){l.push(j),l.push(C),l.push(st)}function Bt(j,C,st){Nt(j),Nt(C),Nt(st);let pt=s.length/3,at=M.generateTopUV(n,s,pt-3,pt-2,pt-1);Yt(at[0]),Yt(at[1]),Yt(at[2])}function Pt(j,C,st,pt){Nt(j),Nt(C),Nt(pt),Nt(C),Nt(st),Nt(pt);let at=s.length/3,dt=M.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);Yt(dt[0]),Yt(dt[1]),Yt(dt[3]),Yt(dt[1]),Yt(dt[2]),Yt(dt[3])}function Nt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Yt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sc[s.type]().fromJSON(s)),new i(n,t.options)}},Ox={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(f,1-m),new nt(_,1-g)]:[new nt(a,1-l),new nt(h,1-u),new nt(d,1-m),new nt(p,1-g)]}};function zx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xo=class i extends Go{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var zn=class i extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let M=[],x=g/n,y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+y,1-x),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let x=h[g][M+1],y=h[g][M],A=h[g+1][M],T=h[g+1][M+1];(g!==0||o>0)&&d.push(x,y,T),(g!==n-1||l<Math.PI)&&d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var kn=class i extends he{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let _=m/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let _=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,g=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(_,p,M),o.push(p,g,M)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var qo=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ne=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yo=class extends Rn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new yt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ho(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function kx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ac=class extends Us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=t,a=2*e-n;break;case Ih:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:o=t,l=2*n-e;break;case Ih:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,x=(-1-d)*p+(1.5+d)*_+.5*m,y=d*p-d*_;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+M*o[c+A]+x*o[l+A]+y*o[u+A];return r}},Rc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Cc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ho(e,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ho(t.times,Array),values:ho(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ac(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case jl:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&kx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=jl;var Gi=class extends In{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=_o;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends In{};Pc.prototype.ValueTypeName="color";var Ic=class extends In{};Ic.prototype.ValueTypeName="number";var Lc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zo=class extends In{InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends In{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=_o;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends In{};Dc.prototype.ValueTypeName="vector";var Uc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},Hx=new Uc,Nc=class{constructor(t){this.manager=t!==void 0?t:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$o=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dl=new te,Pu=new P,Iu=new P,Sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fc=class extends Sr{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=So*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ko=class extends Ns{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Lu=new te,ar=new P,pl=new P,Bc=class extends Sr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(ar),pl.copy(n.position),pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pl),n.updateMatrixWorld(),s.makeTranslation(-ar.x,-ar.y,-ar.z),Lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu)}},Jo=class extends Ns{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Oc=class extends Sr{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qo=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Oc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var jo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Du();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Du(){return performance.now()}var ih="\\[\\]\\.:\\/",Vx=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",Gx="[^"+ih.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",sh),Xx=/(WCOD+)?/.source.replace("WCOD",Gx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),Zx=new RegExp("^"+Wx+Xx+qx+Yx+"$"),$x=["material","materials","bones","map"],zc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(t){let e=Zx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=zc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var ra=class extends Mi{constructor(){super();let t=new ge;t.deleteAttribute("uv");let e=new ne({side:Ce}),n=new ne,s=new Jo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ut(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ut(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new ut(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ut(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ut(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ut(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new ut(t,Bs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new ut(t,Bs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let m=new ut(t,Bs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let _=new ut(t,Bs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let p=new ut(t,Bs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let g=new ut(t,Bs(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Bs(i){let t=new Te;return t.color.setScalar(i),t}function Ge(i,t,e){return i<t?t:i>e?e:i}function ei(i){return i<0?-1:i>0?1:0}var oa=class{constructor(t){var n;this.spec=t;let e=t;this.m=e.mass,this.L=e.wheelbase,this.a=e.wheelbase*e.frontWeight,this.b=e.wheelbase-this.a,this.I=e.mass*((n=e.inertiaK)!=null?n:.95)*this.a*this.b*1.35,this.reset(0,0,0)}reset(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=0,this.vz=0,this.r=0,this.u=0,this.v=0,this.steer=0,this.gear=1,this.rpm=this.spec.idle,this.shiftTimer=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.spinR=0,this.lockR=0,this.frontSlide=0,this.rearSlide=0,this.wheelSpin=0,this.offroad=!1,this.lastHit=0}get speed(){return Math.hypot(this.vx,this.vz)}get kmh(){return this.speed*3.6}get beta(){return this.speed<1?0:Math.atan2(this.v,Math.abs(this.u))}torqueAt(t){var o;let e=this.spec,n=Ge(t/e.redline,0,1.05),s=(o=e.peakAt)!=null?o:.7,r;return n<s?r=.55+.45*Math.sin(n/s*Math.PI/2):r=1-.35*Math.pow((n-s)/(1.05-s),2),e.torque*r}step(t,e,n){var We,re,Xe,gn,qs,Ys,Un,Zi,Zs,$s,Ci,Ks;let s=this.spec,r=(We=n.grip)!=null?We:1,o=Math.cos(this.h),a=Math.sin(this.h),l=this.vx*a+this.vz*o,c=this.vx*o-this.vz*a;this.u=l,this.v=c;let h=Math.hypot(l,c),u=1/(1+Math.max(0,Math.abs(l)-5)/(((re=s.steerFade)!=null?re:22)*(n.easy?1.35:1))),f=e.steer*s.steerMax*u,d=h>3?Math.atan2(c,Math.max(Math.abs(l),.5)):0;e.handbrake>.3||this.kickT>0?this.intent=n.real?1.6:1.1:Math.abs(d)>.2&&e.throttle>.3&&(this.intent||0)>0?this.intent=Math.max(this.intent,.6):l<12&&(this.intent=Math.max(this.intent||0,.3)),this.intent=Math.max(0,(this.intent||0)-t);let m=n.easy&&this.intent<=0;n.assist>0&&l>3&&(f+=Ge(d,-.9,.9)*.85*n.assist*(1-.5*Math.abs(e.steer))),f=Ge(f,-s.steerMax*1.25,s.steerMax*1.25);let _=7.5;this.steer+=Ge(f-this.steer,-_*t,_*t);let p=this.steer,g=s.gears,M=Pe=>Math.abs(l)/s.wheelRadius*g[Math.abs(Pe)-1]*s.finalDrive*60/(2*Math.PI);this.shiftTimer>0&&(this.shiftTimer-=t);let x=e.brake>.1&&e.throttle<.1&&l<1;this.gear===-1?e.throttle>.1&&l>-1&&(this.gear=1):x&&Math.abs(l)<.6&&this.revHold>.25&&(this.gear=-1),this.revHold=x&&Math.abs(l)<.6?(this.revHold||0)+t:0;let y=0;if(this.gear>0){let Pe=M(this.gear);n.manual?(e.shiftUp&&this.gear<g.length&&(this.gear++,this.shiftTimer=.12,y=1),e.shiftDown&&this.gear>1&&(this.gear--,this.shiftTimer=.12,y=-1)):this.shiftTimer<=0&&(Pe>s.redline*.9&&this.gear<g.length?(this.gear++,this.shiftTimer=.09,y=1):this.gear>1&&Math.abs(d)<.22&&this.spinR<.05&&M(this.gear-1)<s.redline*.62&&(this.gear--,this.shiftTimer=.12,y=-1))}let A=Math.abs(this.gear)-1,T=g[A]*s.finalDrive*(this.gear===-1?1.1:1),w=Math.abs(l)/s.wheelRadius*T*60/(2*Math.PI),I=this.shiftTimer>0?0:this.gear===-1?e.brake:e.throttle,O=Math.max(s.idle,w);this.spinR>.05&&(O=Math.max(O,s.idle+(s.redline*.9-s.idle)*(.6+.4*I)*Math.min(1,this.spinR*2))),Math.abs(l)<2&&I>0&&(O=Math.max(O,s.idle+(s.redline*.6-s.idle)*I)),this.rpm+=(O-this.rpm)*Math.min(1,t*12);let v=w>=s.redline;v?this.rpm=s.redline-150*Math.random():this.rpm=Math.min(this.rpm,s.redline*.97);let S=e.throttle;S<.2&&(this.liftT=(this.liftT||0)+t),((Xe=this.thrPrev)!=null?Xe:0)<.3&&S>.8&&(this.liftT||0)<.35&&(this.liftT||0)>.02&&l>6&&this.gear>0&&(this.kickT=.28),S>=.2&&(this.liftT=0),this.thrPrev=S,this.kickT>0&&(this.kickT-=t);let k=this.torqueAt(Math.max(this.rpm,s.idle))*I*(v?.1:1);I<.05&&Math.abs(l)>1&&(k=-s.torque*.12*Ge(this.rpm/s.redline,0,1));let F=k*T*.88/s.wheelRadius*(this.kickT>0?n.real?1.9:1.5:1);this.gear===-1&&(F=-Math.abs(F),l<-9&&(F=0)),k<0&&(F=ei(l)*k*T*.88/s.wheelRadius);let V=((gn=s.downforce)!=null?gn:0)*h*h,J=s.cgHeight/this.L,z=this.m*9.81*this.b/this.L-this.m*this.ax*J+V*.45,it=this.m*9.81*this.a/this.L+this.m*this.ax*J+V*.55;z=Math.max(z,this.m*9.81*.12),it=Math.max(it,this.m*9.81*.12);let H=this.offroad?.62:1,lt=s.muFront*r*H,vt=s.muRear*r*H,_t=(Ys=(qs=s.body)==null?void 0:qs.track)!=null?Ys:1.55,Zt=this.m*Math.abs(this.ay)*s.cgHeight/_t,qt=(Un=s.rollFront)!=null?Un:s.drive==="RWD"?.46:.56,Z=1-.14*Math.min(1,Zt*qt/(z/2))**2,ot=1-.14*Math.min(1,Zt*(1-qt)/(it/2))**2,Et=1;m&&(Et=1+.8*Ge((h-15)/30,0,1));let rt=lt*z*Z*Et,Bt=vt*it*ot*Et,Pt=0,Nt=0,Yt=s.drive==="AWD"?(Zi=s.awdFront)!=null?Zi:.35:s.drive==="FWD"?1:0;Pt+=F*Yt,Nt+=F*(1-Yt);let j=this.gear===-1?e.throttle:e.brake,C=j>0&&Math.abs(l)>.3?j:0;if(C>0){let Pe=s.brakeForce*C;Pt+=-ei(l)*Pe*.64,Nt+=-ei(l)*Pe*.36}var st=e.handbrake;st>0&&Math.abs(l)>.5&&(Nt=-ei(l)*Bt*(n.real?.95:.8)*st+Nt*(1-st));let pt=Math.abs(d)<.1&&Math.abs(e.steer)<.3&&st<.1&&!(this.kickT>0)||m&&l>15;n.tcs!==!1&&pt&&F>0&&(Nt=Math.min(Nt,Bt*.97),Pt=Math.min(Pt,rt*.97)),this.spinR=0,this.lockR=0;let at=0,dt=Math.abs(Nt)/Bt;dt>1&&(ei(Nt)===ei(F)&&F!==0&&!(st>.3)?this.spinR=Ge(dt-1+.35,0,1):this.lockR=1,Nt=ei(Nt)*Bt*(this.spinR>0?.92:.98)),st>.3&&Math.abs(l)>.5&&(this.lockR=Math.max(this.lockR,st)),Math.abs(Pt)>rt&&(at=1,Pt=ei(Pt)*rt*.95);let Dt=(Zs=s.tireB)!=null?Zs:9,wt=($s=s.tireC)!=null?$s:1.45,R=c+this.a*this.r,b=Math.cos(p),B=Math.sin(p),$=l*b+R*B,tt=-l*B+R*b,K=Math.atan2(tt,Math.max(Math.abs($),.8)),It=c-this.b*this.r,xt=Math.atan2(It,Math.max(Math.abs(l),.8));this.slipF=K,this.slipR=xt;let Tt=rt*Math.sqrt(Math.max(.04,1-.85*Math.pow(Pt/rt,2))),$t=Bt*Math.sqrt(Math.max(.04,1-.85*Math.pow(Nt/Bt,2)));this.lockR>0&&($t*=1-(n.real?.45:.3)*this.lockR);let L=-rt*Math.sin(wt*Math.atan(Dt*K)),W=-Bt*Math.sin(wt*Math.atan(Dt*xt));L=Ge(L,-Tt,Tt),W=Ge(W,-$t,$t);let ct=this.m*this.b/this.L,ft=this.m*this.a/this.L,ht=(Pe,Vn,ai)=>Ge(Pe,-Math.abs(Vn)*ai/t,Math.abs(Vn)*ai/t);L=ht(L,tt,ct),W=ht(W,It,ft),this.frontSlide=Ge(Math.abs(K)/.25,0,1),this.rearSlide=Ge(Math.max(Math.abs(xt)/.2,this.spinR,this.lockR*(Math.abs(l)>3?1:0)),0,1);let kt=s.drag*l*Math.abs(l),Vt=((Ci=s.rolling)!=null?Ci:12)*l*(this.offroad?5:1),ie=Pt*b-L*B+Nt-kt-Vt,D=Pt*B+L*b+W-s.drag*2*c*Math.abs(c),mt=this.a*(L*b+Pt*B)-this.b*W;h<.3&&I<.05&&Math.abs(F)<1&&(this.vx*=.9,this.vz*=.9,this.r*=.8);let q=ie/this.m,et=D/this.m;this.ax+=(Ge(q,-12,12)-this.ax)*Math.min(1,t*8),this.ay+=(Ge(et,-14,14)-this.ay)*Math.min(1,t*8);let St=ie*a+D*o,At=ie*o-D*a;this.vx+=St/this.m*t,this.vz+=At/this.m*t,this.r+=mt/this.I*t,n.assist>0&&l>5&&Math.abs(e.steer)>.3&&Math.sign(e.steer)!==Math.sign(this.r)&&(Math.abs(d)>.12||this.rearSlide>.4)&&(this.r+=e.steer*(n.real?3:2.3)*t*n.assist*Math.min(1,l/15));let jt=Math.abs(d)>.15;if(n.assist>0&&Math.abs(d)>.2&&Math.abs(d)<1.2&&I>.5&&h>6){let Pe=3.2*n.assist*I*t/h;this.vx+=this.vx*Pe,this.vz+=this.vz*Pe}if(this.r*=1-Math.min(.5,((Ks=s.yawDamp)!=null?Ks:.6)*(jt?n.real?.4:.8:1)*t),m&&l>12){let Pe=l*Math.tan(this.steer)/this.L*.95,Vn=1.3+.9*Ge((l-15)/30,0,1),ai=9.81*Vn/Math.max(l,1);this.r+=(Ge(Pe,-ai,ai)-this.r)*Math.min(1,5*t);let Ir=Math.abs(Pe)*l/9.81;if(Ir>Vn&&I<.9){let G=Math.min(.5,(Ir-Vn)*.9)*t;this.vx-=this.vx*G,this.vz-=this.vz*G}let Lr=Math.min(1,3*t),Dr=a,E=o,U=this.vx*Dr+this.vz*E;this.vx+=(Dr*U-this.vx)*Lr*.5*Ge(Math.abs(d)/.3,0,1),this.vz+=(E*U-this.vz)*Lr*.5*Ge(Math.abs(d)/.3,0,1)}if(n.assist>0&&Math.abs(d)>1.05&&l>2&&(this.r*=1-2.5*t*n.assist),n.assist>0&&!n.real&&Math.abs(d)>.5&&l>4){let Pe=Math.abs(d)-.5;Math.sign(this.r)!==Math.sign(d)&&(this.r*=1-Math.min(.6,Pe*9*t*n.assist*(n.easy?1.4:1)))}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t;let Ae=this.spinR>0?Math.max(Math.abs(l),25*this.spinR)*ei(this.gear):this.lockR>.5?0:l;return this.wheelSpin+=Ae/s.wheelRadius*t,{shifted:y,limiter:v}}collideWall(t,e,n,s=.25){this.x+=t*n,this.z+=e*n;let r=this.vx*t+this.vz*e;if(r<0){let o=-e,a=t,l=this.vx*o+this.vz*a,c=-r*s,h=l*(1-Math.min(.5,Math.abs(r)*.04));this.vx=t*c+o*h,this.vz=e*c+a*h;let u=Math.sin(this.h),f=Math.cos(this.h),d=u*o+f*a;return this.r+=-d*r*.02,this.r*=.7,Math.abs(r)}return 0}};var ni=[{id:"kaze",name:"KAZE RS",tag:"\u042F\u043F\u043E\u043D\u0441\u043A\u043E\u0435 \u0434\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435. \u041B\u0435\u0433\u043A\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043D\u043E\u0441 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u0443\u0433\u043E\u043B.",colors:["#e8e8e8","#d7263d","#1b98e0","#f4d35e","#2e2e2e","#7ae582"],hp:280,mass:1180,torque:330,redline:8e3,idle:900,peakAt:.72,cylinders:4,gears:[3.3,2.15,1.55,1.18,.95,.78],finalDrive:4.1,wheelRadius:.31,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.48,muFront:1.12,muRear:1,tireB:9,tireC:1.5,steerMax:.62,steerFade:26,brakeForce:13e3,drag:.42,downforce:.2,yawDamp:.5,body:{L:4.45,W:1.72,H:1.3,track:1.48,wheelF:1.3,wheelR:-1.22,upper:[[2.22,.36],[2.26,.56],[2.12,.69],[1.2,.8],[.55,.85],[-1.3,.88],[-1.75,.92],[-2.18,.9],[-2.25,.62],[-2.22,.36]],cabin:[[.52,.84],[-.15,1.3],[-.95,1.29],[-1.58,.9]],extras:["popups","ducktail"]}},{id:"bulldog",name:"BULLDOG V8",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043C\u0430\u0441\u043B\u043A\u0430\u0440",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0437\u0430\u0434. \u0414\u044B\u043C\u0438\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435.",colors:["#f25c05","#111111","#0b3d91","#c1121f","#ffd166","#ffffff"],hp:480,mass:1560,torque:620,redline:6500,idle:750,peakAt:.55,cylinders:8,gears:[2.9,1.95,1.4,1.05,.82],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.8,frontWeight:.55,cgHeight:.52,muFront:1.08,muRear:.98,tireB:8.5,tireC:1.5,steerMax:.58,steerFade:24,brakeForce:15e3,drag:.5,downforce:.15,yawDamp:.55,body:{L:4.85,W:1.92,H:1.36,track:1.62,wheelF:1.5,wheelR:-1.3,upper:[[2.4,.38],[2.43,.7],[2.3,.82],[.7,.92],[.5,.93],[-1.6,.96],[-2.3,.99],[-2.42,.9],[-2.43,.45],[-2.4,.38]],cabin:[[.48,.92],[-.3,1.34],[-1,1.33],[-1.72,.95]],extras:["scoop","stripes"]}},{id:"veloce",name:"VELOCE GT",tag:"\u0421\u0440\u0435\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u044B\u0439 \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0438\u0436\u0438\u043C\u043D\u0430\u044F \u0441\u0438\u043B\u0430. \u0414\u0435\u0440\u0436\u0438\u0442 \u0434\u043E\u0440\u043E\u0433\u0443 \u043A\u0430\u043A \u043D\u0430 \u0440\u0435\u043B\u044C\u0441\u0430\u0445.",colors:["#e63946","#ffbe0b","#06d6a0","#3a86ff","#ffffff","#8338ec"],hp:640,mass:1420,torque:680,redline:8500,idle:1e3,peakAt:.75,cylinders:10,gears:[3.1,2.2,1.65,1.3,1.05,.86,.72],finalDrive:3.6,wheelRadius:.34,drive:"RWD",wheelbase:2.65,frontWeight:.42,cgHeight:.4,muFront:1.28,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:19e3,drag:.36,downforce:1.1,yawDamp:.8,body:{L:4.55,W:1.98,H:1.14,track:1.68,wheelF:1.38,wheelR:-1.27,upper:[[2.26,.3],[2.3,.46],[1.4,.62],[.9,.7],[-1.9,.95],[-2.26,.96],[-2.28,.4],[-2.25,.3]],cabin:[[.9,.69],[0,1.12],[-.6,1.12],[-1.9,.94]],extras:["wing","intakes"]}},{id:"tundra",name:"TUNDRA R",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A",desc:"\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0431\u0430\u0437\u0430. \u041A\u043E\u0440\u043E\u043B\u044C \u0441\u043D\u0435\u0433\u0430 \u0438 \u0440\u0435\u0437\u043A\u0438\u0445 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432.",colors:["#0077b6","#ffffff","#e76f51","#2a9d8f","#f9c74f","#1d1d1d"],hp:330,mass:1300,torque:420,redline:7500,idle:900,peakAt:.6,cylinders:4,gears:[3,2.05,1.5,1.15,.9,.74],finalDrive:4.3,wheelRadius:.32,drive:"AWD",awdFront:.4,wheelbase:2.5,frontWeight:.56,cgHeight:.52,muFront:1.18,muRear:1.08,tireB:8.5,tireC:1.45,steerMax:.62,steerFade:24,brakeForce:14500,drag:.46,downforce:.35,yawDamp:.6,body:{L:4.05,W:1.8,H:1.46,track:1.55,wheelF:1.28,wheelR:-1.22,ride:.05,upper:[[2,.4],[2.03,.62],[1.86,.78],[1,.88],[.75,.9],[-1.9,.95],[-2.02,.9],[-2.03,.42],[-2,.4]],cabin:[[.73,.9],[.05,1.42],[-1.78,1.42],[-1.96,.95]],extras:["roofscoop","rallylights","mudflaps","roofwing"]}},{id:"ronin",name:"RONIN 34",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C",desc:"\u0422\u0443\u0440\u0431\u043E-\u043C\u043E\u0442\u043E\u0440 \u0438 \u0443\u043C\u043D\u044B\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u043F\u043E\u0441\u043B\u0443\u0448\u043D\u044B\u0439 \u0432 \u043B\u044E\u0431\u043E\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435.",colors:["#5e60ce","#c0c0c0","#101010","#d62828","#ffffff","#2b9348"],hp:520,mass:1480,torque:560,redline:8e3,idle:900,peakAt:.65,cylinders:6,gears:[3.2,2.1,1.55,1.2,.97,.8],finalDrive:3.9,wheelRadius:.33,drive:"AWD",awdFront:.3,wheelbase:2.66,frontWeight:.54,cgHeight:.47,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.58,steerFade:27,brakeForce:17e3,drag:.4,downforce:.6,yawDamp:.65,body:{L:4.6,W:1.86,H:1.34,track:1.58,wheelF:1.38,wheelR:-1.28,upper:[[2.3,.36],[2.33,.62],[2.2,.76],[.8,.86],[.6,.88],[-1.5,.9],[-2.2,1],[-2.31,.95],[-2.32,.4],[-2.3,.36]],cabin:[[.58,.88],[-.1,1.34],[-1,1.33],[-1.62,.92]],extras:["wing","roundtails"]}},{id:"vanta",name:"VANTA GTR",tag:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u0443\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0433\u043E\u043D\u044C",desc:"\u0421\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u043E\u0435 \u0433\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0441\u0438\u043D\u0438\u043C\u0438 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u2014 \u043E\u0431\u0440\u0430\u0437 \xAB\u0441\u0430\u043C\u043E\u0439 \u0440\u0430\u0437\u044B\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u043E\u0439\xBB \u043C\u0430\u0448\u0438\u043D\u044B. \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0438 \u0446\u0435\u043F\u043A\u043E\u0435.",colors:["#c9ced6","#1d3f8f","#111111","#e8e8e8","#b31b1b","#f2b400"],hp:470,mass:1350,torque:480,redline:8500,idle:900,peakAt:.72,cylinders:6,gears:[3.2,2.2,1.6,1.25,1,.84],finalDrive:3.9,wheelRadius:.33,drive:"RWD",wheelbase:2.73,frontWeight:.5,cgHeight:.46,muFront:1.2,muRear:1.12,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:28,brakeForce:17e3,drag:.4,downforce:.55,yawDamp:.65,body:{L:4.5,W:1.9,H:1.34,track:1.6,wheelF:1.4,wheelR:-1.33,upper:[[2.25,.34],[2.28,.6],[2.1,.74],[.8,.84],[.62,.86],[-1.45,.9],[-2.1,.96],[-2.25,.92],[-2.26,.4],[-2.24,.34]],cabin:[[.6,.86],[-.1,1.34],[-1.05,1.33],[-1.55,.93]],extras:["wing","stripes"]}},{id:"kitsune",name:"KITSUNE RX",tag:"\u0420\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0438\u0437 \u0430\u043D\u0434\u0435\u0433\u0440\u0430\u0443\u043D\u0434\u0430",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u043D\u0438\u0437\u043A\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u0440\u0435\u0441\u043D\u0438\u0446\u0430\u043C\u0438\xBB \u0438 \u0440\u043E\u0442\u043E\u0440\u043D\u044B\u043C \u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0434\u043E 9000 \u043E\u0431/\u043C\u0438\u043D. \u041E\u0431\u043E\u0436\u0430\u0435\u0442 \u0434\u0440\u0438\u0444\u0442.",colors:["#f2c500","#e8e8e8","#d7263d","#3a0ca3","#101010","#00b4d8"],hp:300,mass:1240,torque:320,redline:9e3,idle:1e3,peakAt:.8,cylinders:4,gears:[3.4,2.2,1.6,1.2,.96,.8],finalDrive:4.3,wheelRadius:.31,drive:"RWD",wheelbase:2.43,frontWeight:.5,cgHeight:.44,muFront:1.15,muRear:1.02,tireB:9,tireC:1.5,steerMax:.64,steerFade:26,brakeForce:13500,drag:.4,downforce:.25,yawDamp:.5,body:{L:4.3,W:1.76,H:1.2,track:1.48,wheelF:1.25,wheelR:-1.18,upper:[[2.15,.33],[2.18,.5],[1.9,.62],[.9,.74],[.55,.78],[-1.5,.86],[-2.05,.88],[-2.15,.62],[-2.14,.34]],cabin:[[.52,.78],[-.2,1.2],[-.8,1.2],[-1.6,.87]],extras:["popups","ducktail"]}},{id:"tora",name:"TORA MK4",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u0440\u044B\u043B\u043E\u043C",desc:"\u041F\u043B\u0430\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u0440\u044F\u0434\u043D\u0430\u044F \xAB\u0448\u0435\u0441\u0442\u0451\u0440\u043A\u0430\xBB \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439 \u0438 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D.",colors:["#ff6b00","#f2f2f2","#111111","#c1121f","#2d6a4f","#4361ee"],hp:560,mass:1460,torque:620,redline:7200,idle:850,peakAt:.62,cylinders:6,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.7,wheelRadius:.34,drive:"RWD",wheelbase:2.55,frontWeight:.53,cgHeight:.47,muFront:1.16,muRear:1.06,tireB:9,tireC:1.5,steerMax:.58,steerFade:26,brakeForce:16500,drag:.42,downforce:.45,yawDamp:.6,body:{L:4.5,W:1.82,H:1.28,track:1.56,wheelF:1.32,wheelR:-1.23,upper:[[2.25,.34],[2.28,.55],[2.05,.68],[.7,.8],[.5,.82],[-1.4,.88],[-2.1,.92],[-2.25,.7],[-2.24,.36]],cabin:[[.48,.82],[-.25,1.26],[-.95,1.25],[-1.5,.9]],extras:["wing","roundtails"]}},{id:"toro",name:"TORO V12",tag:"\u0421\u0443\u043F\u0435\u0440\u043A\u0430\u0440-\u043A\u043B\u0438\u043D",desc:"\u041E\u0441\u0442\u0440\u044B\u0439 \u043A\u043B\u0438\u043D \u0441 V12 \u0437\u0430 \u0441\u043F\u0438\u043D\u043E\u0439 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0421\u0430\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435.",colors:["#9bd600","#ff9f1c","#ffdd00","#111111","#e5e5e5","#7209b7"],hp:740,mass:1550,torque:720,redline:8700,idle:1e3,peakAt:.78,cylinders:12,gears:[3.1,2.25,1.7,1.35,1.1,.9,.76],finalDrive:3.5,wheelRadius:.35,drive:"AWD",awdFront:.3,wheelbase:2.7,frontWeight:.43,cgHeight:.42,muFront:1.3,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:2e4,drag:.36,downforce:1.2,yawDamp:.8,body:{L:4.6,W:2,H:1.12,track:1.7,wheelF:1.42,wheelR:-1.28,upper:[[2.3,.3],[2.32,.42],[1.2,.64],[.75,.7],[-1.95,.92],[-2.3,.9],[-2.31,.38],[-2.28,.3]],cabin:[[.75,.69],[-.15,1.1],[-.7,1.1],[-1.95,.9]],extras:["intakes","wing"]}},{id:"stutt",name:"STUTT 9",tag:"\u0417\u0430\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u0441\u043F\u043E\u0440\u0442\u043A\u0443\u043F\u0435",desc:"\u041A\u0440\u0443\u0433\u043B\u044B\u0435 \u0444\u0430\u0440\u044B, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u043C\u043E\u0442\u043E\u0440 \u0441\u0437\u0430\u0434\u0438. \u041E\u0442\u043B\u0438\u0447\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442 \u0438 \u0440\u0435\u0437\u043A\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442.",colors:["#e9e4d8","#1b263b","#d00000","#fca311","#6a994e","#000000"],hp:450,mass:1420,torque:500,redline:8400,idle:900,peakAt:.74,cylinders:6,gears:[3.3,2.15,1.6,1.25,1.02,.86,.72],finalDrive:3.6,wheelRadius:.33,drive:"RWD",wheelbase:2.45,frontWeight:.39,cgHeight:.45,muFront:1.18,muRear:1.2,tireB:9.5,tireC:1.45,steerMax:.6,steerFade:28,brakeForce:18500,drag:.4,downforce:.4,yawDamp:.65,body:{L:4.35,W:1.85,H:1.28,track:1.56,wheelF:1.3,wheelR:-1.15,upper:[[2.17,.33],[2.2,.52],[2,.64],[1.1,.74],[.62,.8],[-1.2,.95],[-1.9,.9],[-2.15,.72],[-2.16,.36]],cabin:[[.6,.8],[-.05,1.26],[-.55,1.28],[-1.7,.92]],extras:["ducktail","roundlights"]}}];function rf(i){let t=Math.min(1,i.hp/i.mass/.47),e=Math.min(1,i.torque*i.gears[0]*i.finalDrive/i.wheelRadius/i.mass/22),n=Math.min(1,((i.muFront+i.muRear)/2-.9)/.45+i.downforce*.2),s=Math.min(1,Math.max(.15,(i.drive==="RWD"?.55:.25)+(i.muFront-i.muRear)*2.2+(i.torque/i.mass-.25)*.8));return{top:t,accel:e,handling:n,drift:s}}function Hn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new he,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=of(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let m=of(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function of(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ae(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function af(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,x=a.length;M<x;M++){let y=a[M],A=i.attributes[y];l[y]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let T=i.morphAttributes[y];T&&(c[y]||(c[y]=[]),T.forEach((w,I)=>{let O=new w.array.constructor(w.count*w.itemSize);c[y][I]=new w.constructor(O,w.itemSize,w.normalized)}))}let d=t*.5,m=Math.log10(1/t),_=Math.pow(10,m),p=d*_;for(let M=0;M<r;M++){let x=n?n.getX(M):M,y="";for(let A=0,T=a.length;A<T;A++){let w=a[A],I=i.getAttribute(w),O=I.itemSize;for(let v=0;v<O;v++)y+=`${~~(I[u[v]](x)*_+p)},`}if(y in e)h.push(e[y]);else{for(let A=0,T=a.length;A<T;A++){let w=a[A],I=i.getAttribute(w),O=i.morphAttributes[w],v=I.itemSize,S=l[w],k=c[w];for(let F=0;F<v;F++){let V=u[F],J=f[F];if(S[J](o,I[V](x)),O)for(let z=0,it=O.length;z<it;z++)k[z][J](o,O[z][V](x))}}e[y]=o,h.push(o),o++}}let g=i.clone();for(let M in i.attributes){let x=l[M];if(g.setAttribute(M,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),M in c)for(let y=0;y<c[M].length;y++){let A=c[M][y];g.morphAttributes[M][y]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return g.setIndex(h),g}var ue=(i,t,e)=>i<t?t:i>e?e:i,rh=(i,t,e)=>i+(t-i)*e,wi=i=>i*i*(3-2*i);function un(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function aa(i,t,e){let n=i*374761393+t*668265263+e*2147483647;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)/4294967296}function lf(i,t,e=1){let n=Math.floor(i),s=Math.floor(t),r=wi(i-n),o=wi(t-s),a=aa(n,s,e),l=aa(n+1,s,e),c=aa(n,s+1,e),h=aa(n+1,s+1,e);return rh(rh(a,l,r),rh(c,h,r),o)}function qi(i,t,e=1,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=lf(i*o,t*o,e+l*17)*r,a+=r,r*=.5,o*=2.03;return s/a}function oh(i,t=1){return lf(i,.5,t)}function ee(i,t){let e=new yt(t),n=i.index?i.toNonIndexed():i,s=n.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=e.r,r[o*3+1]=e.g,r[o*3+2]=e.b;return n.setAttribute("color",new ae(r,3)),n.attributes.uv&&n.deleteAttribute("uv"),n}function fn(i,t,e,n={}){var a;let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let o=new Pn(s);return o.colorSpace=Ve,n.repeat&&(o.wrapS=o.wrapT=Qn),o.anisotropy=(a=n.aniso)!=null?a:4,o}function la(i){i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*10%10);return`${t}:${String(e).padStart(2,"0")}.${n}`}var Os=[{id:"desert",name:"\u041A\u0430\u043D\u044C\u043E\u043D \xAB\u0417\u0430\u043A\u0430\u0442\xBB",tag:"\u041F\u0443\u0441\u0442\u044B\u043D\u044F",desc:"\u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u0430\u0441\u0444\u0430\u043B\u044C\u0442, \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u0441\u043A\u0430\u043B\u044B \u0438 \u043A\u0430\u043A\u0442\u0443\u0441\u044B. \u0414\u043B\u0438\u043D\u043D\u044B\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0443\u0433\u0438.",grip:1,night:!1,weather:null,sky:{top:4029641,horizon:16171659,bottom:15180650},fog:{color:15381898,near:120,far:700},sun:{color:16773334,intensity:2.8,dir:[.5,.75,-.4]},hemi:{sky:16771532,ground:10119749,intensity:1.1},ground:{near:14065766,far:12614213,hills:26},road:{asphalt:"#55504b",line:"#f2c230",edge:"#eeeeee",halfWidth:7.5,shoulder:1.6,shoulderColor:"#b98a5a"},barrier:"tires",track:{minR:40,maxR:170,straight:[50,180],hill:9},props:["cactus","rock","mesa","bush"]},{id:"snow",name:"\u041F\u0435\u0440\u0435\u0432\u0430\u043B \xAB\u0410\u043B\u0430-\u0422\u043E\u043E\xBB",tag:"\u0417\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u044B\u0435 \u0433\u043E\u0440\u044B",desc:"\u0421\u043A\u043E\u043B\u044C\u0437\u043A\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430 \u0441\u0440\u0435\u0434\u0438 \u0435\u043B\u0435\u0439 \u0438 \u0432\u0435\u0440\u0448\u0438\u043D. \u041D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C: \u0441\u0446\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043D\u0438\u0436\u0435.",grip:.74,night:!1,weather:"snow",sky:{top:7312324,horizon:14674162,bottom:15922938},fog:{color:14542575,near:60,far:460},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:40},road:{asphalt:"#5d6168",line:"#ffffff",edge:"#f2f2f2",halfWidth:7.2,shoulder:1.8,shoulderColor:"#e9eef4"},barrier:"rail",track:{minR:30,maxR:130,straight:[35,120],hill:14},props:["pine","pine","rock","peak"]},{id:"city",name:"\u041D\u0435\u043E\u043D-\u0421\u0438\u0442\u0438",tag:"\u041D\u043E\u0447\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",desc:"\u041D\u043E\u0447\u043D\u043E\u0439 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441: \u043D\u0435\u043E\u043D\u043E\u0432\u044B\u0435 \u0432\u044B\u0432\u0435\u0441\u043A\u0438, \u0444\u043E\u043D\u0430\u0440\u0438 \u0438 \u043D\u0435\u0431\u043E\u0441\u043A\u0440\u0451\u0431\u044B \u0432\u0434\u043E\u043B\u044C \u0442\u0440\u0430\u0441\u0441\u044B.",grip:.95,night:!0,weather:null,sky:{top:329231,horizon:2758469,bottom:657940},fog:{color:1708080,near:60,far:520},sun:{color:10466559,intensity:.55,dir:[.3,.8,.4]},hemi:{sky:5917338,ground:2105392,intensity:.9},ground:{near:2763315,far:1842212,hills:0},road:{asphalt:"#2c2c33",line:"#ffcc33",edge:"#dddddd",halfWidth:8.3,shoulder:1.4,shoulderColor:"#50505a"},barrier:"concrete",track:{minR:30,maxR:130,straight:[50,160],hill:3,corners:!0},props:["building","building","lamp","neon"]},{id:"field_asphalt",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0410\u0441\u0444\u0430\u043B\u044C\u0442\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0430\u0441\u0444\u0430\u043B\u044C\u0442",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0441 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u0445\u043E\u043B\u043C\u0430\u043C\u0438. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u043A\u0443\u0434\u0430 \u0445\u043E\u0447\u0435\u0448\u044C \u0438 \u0434\u0440\u0438\u0444\u0442\u0438.",grip:1,night:!1,weather:null,horizon:"hills",sky:{top:4163286,horizon:13624306,bottom:14674416},fog:{color:13622760,near:120,far:380},sun:{color:16774368,intensity:2.6,dir:[.45,.8,-.35]},hemi:{sky:15397631,ground:6974058,intensity:1.15},ground:{near:5592666,far:8227450,hills:0},smoke:15263978,dust:9079434,skid:789516,field:{surface:"asphalt",freq:.006,amp:3.4,texBase:"#4d4e52",colA:16777215,colB:14277081,colLow:13619151,props:[["tires",5,1,1.2,.7],["cone",10,1,1,0],["mast",1,1,1,.3],["block",2,1,1,1.1]]}},{id:"field_beach",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u041F\u043B\u044F\u0436\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u043F\u043B\u044F\u0436",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0441\u0447\u0430\u043D\u044B\u0439 \u043F\u043B\u044F\u0436 \u0441 \u0434\u044E\u043D\u0430\u043C\u0438, \u043F\u0430\u043B\u044C\u043C\u0430\u043C\u0438 \u0438 \u043C\u043E\u0440\u0435\u043C. \u041F\u0435\u0441\u043E\u043A \u0441\u043A\u043E\u043B\u044C\u0437\u043A\u0438\u0439 \u2014 \u0434\u0440\u0438\u0444\u0442 \u0432 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435.",grip:.8,night:!1,weather:null,horizon:"sea",sky:{top:3117024,horizon:14217471,bottom:15984328},fog:{color:14281973,near:120,far:400},sun:{color:16773584,intensity:2.9,dir:[-.5,.75,-.3]},hemi:{sky:16774364,ground:13215854,intensity:1.15},ground:{near:15126424,far:3120836,hills:0},smoke:15918792,dust:14730636,skid:9071940,field:{surface:"beach",freq:.009,amp:3.4,shore:-70,texBase:"#e3c98f",colA:16777215,colB:15983296,colLow:11769960,props:[["palm",3,.9,1.3,.45],["umbrella",2,1,1,0],["rock",1.5,.6,1.4,1]]}},{id:"field_snow",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0421\u043D\u0435\u0433\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0441\u043D\u0435\u0433",desc:"\u0411\u0435\u0441\u043A\u0440\u0430\u0439\u043D\u0435\u0435 \u0437\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438 \u0438 \u0451\u043B\u043A\u0430\u043C\u0438. \u0421\u043A\u043E\u043B\u044C\u0437\u043A\u043E \u2014 \u0437\u0430\u043D\u043E\u0441\u044B \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0438 \u043F\u043B\u0430\u0432\u043D\u044B\u0435.",grip:.68,night:!1,weather:"snow",horizon:"snow",sky:{top:7312324,horizon:14937076,bottom:15922938},fog:{color:14739696,near:90,far:360},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:0},smoke:16777215,dust:16054527,skid:8226968,field:{surface:"snow",freq:.007,amp:7,texBase:"#f2f5f9",colA:16777215,colB:15134198,colLow:13622506,props:[["pine",6,.8,1.5,.5],["srock",1.5,.6,1.5,1],["snowman",.4,1,1,.5]]}}];function Kx(){let i=[],t=new _e(.35,.4,4.5,7);t.translate(0,2.25,0),i.push(ee(t,4160826));let e=new _e(.22,.25,1.6,6);e.translate(.8,2.6,0),i.push(ee(e,4160826));let n=new _e(.22,.22,.9,6);n.rotateZ(Math.PI/2),n.translate(.45,1.9,0),i.push(ee(n,4160826));let s=new _e(.2,.22,1.3,6);s.translate(-.75,3.1,0),i.push(ee(s,4491071));let r=new _e(.2,.2,.8,6);return r.rotateZ(Math.PI/2),r.translate(-.4,2.5,0),i.push(ee(r,4491071)),Hn(i)}function Jx(i=10246971){let t=new Ds(1.4,0),e=t.attributes.position,n=un(7);for(let s=0;s<e.count;s++)e.setXYZ(s,e.getX(s)*(.8+n()*.5),e.getY(s)*(.6+n()*.3),e.getZ(s)*(.8+n()*.5));return t.translate(0,.6,0),ee(t,i)}function Qx(){let i=[],t=new _e(14,20,26,9);t.translate(0,13,0),i.push(ee(t,11819066));let e=new _e(14.3,14.6,3,9);e.translate(0,22,0),i.push(ee(e,13662799));let n=new _e(13,14,1.5,9);return n.translate(0,26.5,0),i.push(ee(n,10242608)),Hn(i)}function jx(){let i=new Xo(.7,0);return i.scale(1.2,.6,1.2),i.translate(0,.3,0),ee(i,9076028)}function t_(){let i=[],t=new _e(.2,.3,1.6,6);return t.translate(0,.8,0),i.push(ee(t,5913899)),[[2.2,2.6,1.6],[1.7,2.3,3.2],[1.2,2,4.6],[.7,1.6,5.8]].forEach(([n,s,r],o)=>{let a=new hn(n,s,7);a.translate(0,r,0),i.push(ee(a,o%2?2051382:2382398));let l=new hn(n*.72,s*.45,7);l.translate(0,r+s*.3,0),i.push(ee(l,15857146))}),Hn(i)}function e_(){let i=[],t=new hn(38,60,7);t.translate(0,30,0),i.push(ee(t,7043208));let e=new hn(17,27,7);return e.translate(0,46.6,0),i.push(ee(e,16054524)),Hn(i)}function n_(){let i=[],t=new _e(.1,.14,7,6);t.translate(0,3.5,0),i.push(ee(t,3816004));let e=new ge(.12,.12,2.2);return e.translate(0,7,-1),i.push(ee(e,3816004)),Hn(i)}function cf(i){let t={};for(let e of new Set(i.props))e==="cactus"&&(t[e]=Kx()),e==="rock"&&(t[e]=Jx(i.id==="snow"?8226708:10246971)),e==="mesa"&&(t[e]=Qx()),e==="bush"&&(t[e]=jx()),e==="pine"&&(t[e]=t_()),e==="peak"&&(t[e]=e_()),e==="lamp"&&(t[e]=n_());return t}var dn=2,zs=50,wr=1.45,ah=11,lh=3,ch=500,hf=400,ca=class{constructor(t,e,n=1,s=1){this.scene=t,this.map=e,this.seed=n,this.quality=s,this.rnd=un(n*9301+49297),this.hw=e.road.halfWidth,this.sh=e.road.shoulder,this.wall=this.hw+this.sh+.35,this.pts=[],this.base=0,this.g={x:0,z:0,h:0,s:0,k:0,seg:{type:"straight",L:160,u:0,k:0,ramp:1}},this.chunks=new Map,this.root=new we,t.add(this.root),this.makeMaterials(),this.propGeo=cf(e),this.ensure(zs*(ah+2))}newSegment(){if(this.queue&&this.queue.length)return this.queue.shift();let t=this.rnd,e=this.map.track,n=this.g,s=h=>({type:"straight",L:h,u:0,k:0,ramp:1}),r=(h,u,f,d)=>{Math.abs(d+f*u*.75)>wr&&(f=-f),Math.abs(d+f*u*.75)>wr&&(u=Math.max(.3,(wr-Math.abs(d))/.75));let m=u*h;return{seg:{type:"curve",L:m,u:0,k:f/h,ramp:Math.min(m*.3,22)},dh:f*u*.75,dir:f}},o=t()<.5?1:-1,a=t();if(a<.2)return s(e.straight[0]+t()*(e.straight[1]-e.straight[0]));if(a<.32){let h=e.minR*(1+t()*1.4),u=.5+t()*.7,f=r(h,u,o,n.h),d=r(h*(.8+t()*.5),u*(.8+t()*.4),-f.dir,n.h+f.dh);return this.queue=[s(4+t()*18),d.seg],f.seg}if(a<.4)return r(e.minR*(1+t()*.4),1.1+t()*.7,o,n.h).seg;if(a<.54){let h=r(e.maxR*(.5+t()*.4),.4+t()*.3,o,n.h),u=r(e.minR*(1+t()*.5),.6+t()*.6,h.dir,n.h+h.dh);return this.queue=[u.seg],h.seg}if(a<.64&&e.corners){let h=r(e.minR*(.9+t()*.3),1.45+t()*.25,o,n.h);return this.queue=[s(20+t()*50)],h.seg}let l=e.minR+Math.pow(t(),1.3)*(e.maxR-e.minR),c=r(l,.4+t()*1.3,o,n.h);return t()<.5&&(this.queue=[s(10+t()*50)]),c.seg}genPoint(){let t=this.g;t.seg.u>=t.seg.L&&(t.seg=this.newSegment());let e=t.seg,n=Math.min(e.u,e.L-e.u),s=e.k*wi(ue(n/e.ramp,0,1));t.h+=s*dn,t.h=ue(t.h,-wr-.1,wr+.1);let r=this.pts.length+this.base,o={x:t.x,z:t.z,h:t.h,k:s,s:t.s,i:r,y:this.map.track.hill*(oh(t.s*.0042,this.seed)*2-1)+(oh(t.s*.021,this.seed+5)-.5)*this.map.track.hill*.15,lx:Math.cos(t.h),lz:-Math.sin(t.h)};t.s<120&&(o.y*=t.s/120),this.pts.push(o),t.x+=Math.sin(t.h)*dn,t.z+=Math.cos(t.h)*dn,t.s+=dn,e.u+=dn}ensure(t){for(;this.base+this.pts.length<=t+2;)this.genPoint()}P(t){t=Math.round(t);let e=ue(t-this.base,0,this.pts.length-1);return this.pts[e]}get lastIdx(){return this.base+this.pts.length-1}sample(t,e={}){this.ensure(Math.ceil(t)+1);let n=Math.max(this.base,Math.floor(t)),s=ue(t-n,0,1),r=this.P(n),o=this.P(n+1);return e.x=r.x+(o.x-r.x)*s,e.y=r.y+(o.y-r.y)*s,e.z=r.z+(o.z-r.z)*s,e.h=r.h+(o.h-r.h)*s,e.k=r.k+(o.k-r.k)*s,e.lx=Math.cos(e.h),e.lz=-Math.sin(e.h),e.slope=(o.y-r.y)/dn,e}project(t,e,n){let s=ue(Math.round(n),this.base+1,this.lastIdx-2),r=M=>{let x=this.P(M);return(x.x-t)**2+(x.z-e)**2},o=r(s);for(let M=0;M<400;M++){let x=s+1<=this.lastIdx-1?r(s+1):1/0,y=s-1>=this.base?r(s-1):1/0;if(x<o)s++,o=x;else if(y<o)s--,o=y;else break}let a=this.P(s),l=this.P(s+1),c=l.x-a.x,h=l.z-a.z,u=((t-a.x)*c+(e-a.z)*h)/(c*c+h*h);u<0&&s>this.base&&(s--,a=this.P(s),l=this.P(s+1),c=l.x-a.x,h=l.z-a.z,u=((t-a.x)*c+(e-a.z)*h)/(c*c+h*h)),u=ue(u,0,1);let f=a.x+c*u,d=a.z+h*u,m=a.h+(l.h-a.h)*u,_=Math.cos(m),p=-Math.sin(m),g=(t-f)*_+(e-d)*p;return{idx:s+u,lat:g,y:a.y+(l.y-a.y)*u,h:m,lx:_,lz:p,slope:(l.y-a.y)/dn,k:a.k}}terrainY(t,e){let n=Math.abs(e),s=t.x+t.lx*e,r=t.z+t.lz*e,o=this.map.ground.hills,a=t.y,l=this.hw+this.sh;if(this.map.id==="city")return n>l+.4&&(a+=.18),a;n>l&&(a-=Math.min(.6,(n-l)*.25));let c=wi(ue((n-l-6)/70,0,1));return a+=c*o*(qi(s*.008,r*.008,this.seed+11,4)*1.6-.35),a}makeMaterials(){let t=this.map,e=t.road,n=fn(256,512,(c,h,u)=>{c.fillStyle=e.asphalt,c.fillRect(0,0,h,u);let f=un(3);for(let d=0;d<9e3;d++){let m=f();c.fillStyle=m<.5?"rgba(0,0,0,0.13)":"rgba(255,255,255,0.07)",c.fillRect(f()*h,f()*u,1+f()*2,1+f()*2)}c.fillStyle="rgba(0,0,0,0.12)",c.fillRect(h*.18,0,h*.1,u),c.fillRect(h*.72,0,h*.1,u),c.fillStyle=e.edge,c.fillRect(6,0,6,u),c.fillRect(h-12,0,6,u),c.fillStyle=e.line,c.fillRect(h/2-4,0,8,u*.5)},{repeat:!0,aniso:8});this.roadMat=new ne({map:n,roughness:t.night?.42:.88,metalness:t.night?.15:0,envMapIntensity:t.night?.8:.4});let s=fn(32,64,(c,h,u)=>{c.fillStyle="#d42b2b",c.fillRect(0,0,h,u/2),c.fillStyle="#f2f2f2",c.fillRect(0,u/2,h,u/2)},{repeat:!0});if(this.kerbMat=new ne({map:s,roughness:.7}),this.shoulderMat=new Le({color:e.shoulderColor}),this.terrainMat=new Le({vertexColors:!0}),this.propMat=new Le({vertexColors:!0,flatShading:!0}),t.barrier==="tires"){let c=fn(128,64,(h,u,f)=>{for(let d=0;d<4;d++){h.fillStyle=d%2?"#e8e8e8":"#d63a2f",h.fillRect(d*32,0,32,f),h.fillStyle="rgba(0,0,0,0.85)";for(let m=0;m<3;m++)h.beginPath(),h.ellipse(d*32+16,m*21+11,12,8,0,0,Math.PI*2),h.fill()}},{repeat:!0});this.barrierMat=new Le({map:c,side:Fe})}else if(t.barrier==="rail")this.barrierMat=new ne({color:12107976,metalness:.7,roughness:.35,side:Fe}),this.postMat=new Le({color:5922662}),this.snowbankMat=new Le({color:16185852,side:Fe});else{let c=fn(128,32,(h,u,f)=>{h.fillStyle="#8d8d95",h.fillRect(0,0,u,f),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(0,0,2,f),h.fillRect(64,0,2,f)},{repeat:!0});this.barrierMat=new Le({map:c,side:Fe}),this.neonMat=new Te({color:2680831}),this.neonMat2=new Te({color:16723622})}let r=c=>fn(512,96,(h,u,f)=>{for(let d=0;d<u;d+=24)for(let m=0;m<f;m+=24)h.fillStyle=(d+m)/24%2?"#111":"#fff",h.fillRect(d,m,24,24);h.fillStyle="rgba(10,10,20,0.85)",h.fillRect(60,12,u-120,f-24),h.fillStyle="#ffd400",h.font="bold 54px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText(c,u/2,f/2+2)});this.gateMatCP=new Te({map:r("\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422"),side:Fe}),this.gateMatStart=new Te({map:r("\u0421\u0422\u0410\u0420\u0422"),side:Fe}),this.pillarMat=new ne({color:2236968,roughness:.6});let o=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];this.bannerRows=o.length;let a=fn(512,512,(c,h,u)=>{o.forEach(([f,d,m],_)=>{let p=_*64;c.fillStyle=d,c.fillRect(0,p,h,64),c.fillStyle=m,c.fillRect(0,p,h,4),c.fillRect(0,p+60,h,4),c.font="italic 900 42px Arial",c.textAlign="center",c.textBaseline="middle",c.fillText(f,h/2,p+34)})});a.wrapS=Qn,this.bannerMat=new Le({map:a,side:Fe});let l=fn(512,128,(c,h,u)=>{c.fillStyle="#3a3d46",c.fillRect(0,0,h,u);let f=un(77),d=["#e63946","#f1faee","#457b9d","#ffb703","#2a9d8f","#fb8500","#8338ec","#ffffff","#111111"];for(let m=0;m<5;m++){let _=14+m*23;c.fillStyle="#2b2d34",c.fillRect(0,_+12,h,11);for(let p=4;p<h;p+=9+f()*4)f()<.12||(c.fillStyle=d[Math.floor(f()*d.length)],c.fillRect(p,_+2,7,11),c.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(f()*4)],c.beginPath(),c.arc(p+3.5,_-1,3.2,0,Math.PI*2),c.fill(),f()<.15&&(c.fillStyle="#ffd400",c.fillRect(p+5,_-9,2,8)))}},{repeat:!0});if(l.repeat.set(3,1),this.standMats=[l,l].map(c=>new Le({map:c})),this.standGrey=new Le({color:7040888}),this.roofMat=new Le({color:14034984}),t.id==="city"){this.buildingMats=[0,1,2].map(f=>{let d=fn(128,256,(m,_,p)=>{let g=["#20222c","#262033","#1d2a33"][f];m.fillStyle=g,m.fillRect(0,0,_,p);let M=un(100+f);for(let x=6;x<p-4;x+=12)for(let y=6;y<_-4;y+=12){let A=M()<.42;m.fillStyle=A?["#ffd98a","#fff2c4","#9fd8ff","#ffb36b"][Math.floor(M()*4)]:"#0c0d12",m.fillRect(y,x,7,8)}},{repeat:!0});return d.repeat.set(2,3),new Le({map:d,emissiveMap:d,emissive:16777215,emissiveIntensity:.85})}),this.lampHeadMat=new Te({color:16769696});let c=fn(128,128,(f,d,m)=>{let _=f.createRadialGradient(64,64,0,64,64,64);_.addColorStop(0,"rgba(255,210,140,0.55)"),_.addColorStop(1,"rgba(255,210,140,0)"),f.fillStyle=_,f.fillRect(0,0,d,m)});this.poolMat=new Te({map:c,transparent:!0,depthWrite:!1,blending:Ms});let h=["RAMEN","HOTEL","24/7","DRIFT","\u041A\u0410\u0424\u0415","NEON","CLUB","\u0422\u0410\u041A\u0421\u0418","SUSHI","GARAGE","\u041A\u0418\u041D\u041E","TURBO"],u=["#ff2ea6","#28e7ff","#ffe600","#7cff4f","#ff7b1c","#b26bff"];this.neonSigns=h.map((f,d)=>new Te({map:fn(256,96,(m,_,p)=>{m.fillStyle="#07070c",m.fillRect(0,0,_,p);let g=u[d%u.length];m.strokeStyle=g,m.lineWidth=5,m.strokeRect(6,6,_-12,p-12),m.shadowColor=g,m.shadowBlur=18,m.fillStyle=g,m.font="bold 56px Arial",m.textAlign="center",m.textBaseline="middle",m.fillText(f,_/2,p/2+3),m.fillText(f,_/2,p/2+3)}),side:Fe}))}}update(t){let e=Math.floor(t/zs);this.ensure((e+ah+1)*zs+2);let n=0;for(let r=Math.max(0,e-lh);r<=e+ah;r++)if(!this.chunks.has(r)){if(n>=2&&r>e+2)break;this.buildChunk(r),n++}for(let[r,o]of this.chunks)r<e-lh&&(this.root.remove(o),o.traverse(a=>{a.geometry&&!a.userData.sharedGeo&&a.geometry.dispose(),a.isInstancedMesh&&a.dispose()}),this.chunks.delete(r));let s=(e-lh-2)*zs;if(s>this.base+200){let r=s-this.base;this.pts.splice(0,r),this.base+=r}}ribbon(t,e,n,s,r,o=0,a){let l=[],c=[],h=[],u=[],f=n.length,d=0;for(let _=t;_<=e;_++){let p=this.P(_);for(let g=0;g<f;g++){let M=n[g];if(l.push(p.x+p.lx*M,s(p,M),p.z+p.lz*M),c.push(g/(f-1),p.s*o),r){let x=r(p,M);h.push(x.r,x.g,x.b)}}if(_>t&&!(a&&a(_-1))){let g=(d-1)*f,M=d*f;for(let x=0;x<f-1;x++)u.push(g+x,g+x+1,M+x,g+x+1,M+x+1,M+x)}d++}let m=new he;return m.setAttribute("position",new Qt(l,3)),m.setAttribute("uv",new Qt(c,2)),r&&m.setAttribute("color",new Qt(h,3)),m.setIndex(u),m.computeVertexNormals(),m}buildChunk(t){let e=t*zs,n=e+zs;this.ensure(n+2);let s=new we,r=this.map,o=this.hw,a=this.sh,l=g=>g.y,c=new ut(this.ribbon(e,n,[o,-o],g=>g.y+.02,null,1/12),this.roadMat);c.receiveShadow=!0,s.add(c);let h=g=>Math.abs(this.P(g).k)>1/170||Math.abs(this.P(g+1).k)>1/170;for(let g of[1,-1]){let M=g>0?[o+a,o]:[-o,-o-a],x=new ut(this.ribbon(e,n,M,(A,T)=>A.y+.035+(Math.abs(T)>o+.1?.03:0),null,1/4,A=>!h(A)),this.kerbMat);x.receiveShadow=!0,s.add(x);let y=new ut(this.ribbon(e,n,M,A=>A.y+.015,null,0,A=>h(A)),this.shoulderMat);y.receiveShadow=!0,s.add(y)}let u=new yt(r.ground.near),f=new yt(r.ground.far),d=new yt,m=(g,M)=>{let x=g.x+g.lx*M,y=g.z+g.lz*M,A=qi(x*.05,y*.05,this.seed+3,2);return d.copy(u).lerp(f,ue(A*1.3-.15+Math.abs(M)/400,0,1)).clone()},_=o+a,p=[_,_+1.5,_+4,_+9,_+18,_+34,_+60,_+100,_+160,_+240];for(let g of[1,-1]){let M=g>0?p.slice().reverse():p.map(y=>-y),x=new ut(this.ribbon(e,n,M,(y,A)=>this.terrainY(y,A),m),this.terrainMat);x.receiveShadow=!0,s.add(x)}this.buildBarriers(s,e,n),this.buildBanners(s,t,e,n),this.buildProps(s,t,e,n);for(let g=e;g<n;g++)g===28&&(this.buildGate(s,g,this.gateMatStart),this.buildStands(s,g+12)),g>=hf&&(g-hf)%ch===0&&(this.buildGate(s,g,this.gateMatCP),this.buildStands(s,g-14));this.root.add(s),this.chunks.set(t,s)}buildBarriers(t,e,n){let s=this.wall,r=this.map;for(let o of[1,-1]){let a=o;if(r.barrier==="tires"){let l=this.ribbon(e,n,[a*s,a*s],(h,u)=>0,null,.3125);this.wallFromRibbon(l,e,n,a*s,0,1.05);let c=new ut(l,this.barrierMat);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}else if(r.barrier==="rail"){let l=this.ribbon(e,n,[a*s,a*s],()=>0,null,.25);this.wallFromRibbon(l,e,n,a*s,.45,.8);let c=new ut(l,this.barrierMat);c.castShadow=!0,t.add(c);let h=Math.floor((n-e)/2),u=new Cn(new ge(.12,.85,.12),this.postMat,h);u.userData.sharedGeo=!1;let f=new te;for(let m=0;m<h;m++){let _=this.P(e+m*2);f.makeTranslation(_.x+_.lx*a*(s+.12),_.y+.42,_.z+_.lz*a*(s+.12)),u.setMatrixAt(m,f)}t.add(u);let d=new ut(this.ribbon(e,n,a>0?[s+3,s+1.6,s+.4]:[-s-.4,-s-1.6,-s-3],(m,_)=>m.y+(Math.abs(Math.abs(_)-s-1.6)<.1?.9:.05),null),this.snowbankMat);t.add(d)}else{let l=[[s,0],[s+.12,.3],[s+.18,.85],[s+.32,.85],[s+.4,.3],[s+.45,0]],c=this.sweep(e,n,l.map(([f,d])=>[a*f,d]),1/6),h=new ut(c,this.barrierMat);h.castShadow=!0,h.receiveShadow=!0,t.add(h);let u=new ut(this.ribbon(e,n,a>0?[s+.3,s+.2]:[-s-.2,-s-.3],f=>f.y+.87,null),a>0?this.neonMat:this.neonMat2);t.add(u)}}}sweep(t,e,n,s=0){let r=[],o=[],a=[],l=n.length,c=0;for(let u=t;u<=e;u++,c++){let f=this.P(u);if(n.forEach(([d,m],_)=>{r.push(f.x+f.lx*d,f.y+m,f.z+f.lz*d),o.push(f.s*s,_/(l-1))}),u>t){let d=(c-1)*l,m=c*l;for(let _=0;_<l-1;_++)a.push(d+_,d+_+1,m+_,d+_+1,m+_+1,m+_)}}let h=new he;return h.setAttribute("position",new Qt(r,3)),h.setAttribute("uv",new Qt(o,2)),h.setIndex(a),h.computeVertexNormals(),h}wallFromRibbon(t,e,n,s,r,o){let a=t.attributes.position,l=0;for(let h=e;h<=n;h++,l++){let u=this.P(h);a.setY(l*2,u.y+o),a.setY(l*2+1,u.y+r)}let c=t.attributes.uv;for(let h=0;h<c.count;h++)c.setX(h,h%2);for(let h=0;h<c.count;h++){let u=c.getX(h),f=c.getY(h);c.setXY(h,f,u)}t.computeVertexNormals()}clearOfRoad(t,e,n,s){let r=(this.wall+s)**2;for(let o=Math.max(this.base,n-90);o<=Math.min(this.lastIdx,n+90);o+=3){let a=this.P(o);if((a.x-t)**2+(a.z-e)**2<r)return!1}return!0}buildProps(t,e,n,s){let r=this.map,o=un(this.seed*1e3+e*7919),a=new te,l=new cn,c=new P,h=new P,u=new P(0,1,0),f=(d,m,_,p,g,M,x=3,y=!0)=>{let A=this.propGeo[d];if(!A)return;let T=[];for(let I=0;I<m*3&&T.length<m;I++){let O=n+Math.floor(o()*(s-n)),v=this.P(O),k=(o()<.5?-1:1)*(_+o()*(p-_)),F=v.x+v.lx*k,V=v.z+v.lz*k;if(!this.clearOfRoad(F,V,O,x))continue;let J=g+o()*(M-g);l.setFromAxisAngle(u,o()*Math.PI*2),c.set(J,J*(.85+o()*.3),J),h.set(F,this.terrainY(v,k)-.1,V),T.push(a.compose(h,l,c).clone())}if(!T.length)return;let w=new Cn(A,this.propMat,T.length);w.userData.sharedGeo=!0,T.forEach((I,O)=>w.setMatrixAt(O,I)),w.castShadow=y&&this.quality>0,w.receiveShadow=!1,t.add(w)};r.id==="desert"?(f("cactus",8,this.wall+3,70,.8,1.5),f("bush",8,this.wall+2,60,.7,1.6,2,!1),f("rock",8,this.wall+4,110,.6,3.2),o()<.8&&f("mesa",1,150,240,.7,1.7,60,!1)):r.id==="snow"?(f("pine",22,this.wall+3,110,.8,1.6),f("rock",6,this.wall+3,80,.6,2.2),o()<.9&&f("peak",1,170,250,.8,1.8,90,!1)):r.id==="city"&&this.buildCity(t,e,n,s,o)}buildCity(t,e,n,s,r){let o=new ge(1,1,1);o.translate(0,.5,0);let a=[[],[],[]],l=new te,c=new cn,h=new P,u=new P,f=new P(0,1,0),d=[];for(let x of[1,-1]){let y=n+Math.floor(r()*3);for(;y<s;){let A=this.P(y),T=10+r()*10,w=12+r()*14,I=14+Math.pow(r(),1.6)*80,O=x*(this.wall+8+w/2+r()*6),v=A.x+A.lx*O,S=A.z+A.lz*O;this.clearOfRoad(v,S,y,w/2+4)&&(c.setFromAxisAngle(f,A.h),h.set(T,I,w),u.set(v,A.y,S),a[Math.floor(r()*3)].push(l.compose(u,c,h).clone()),r()<.45&&d.push({p:A,off:O-x*(w/2+.3),y:A.y+6+r()*Math.min(20,I-10),side:x,w:6+r()*3})),y+=Math.ceil((T+3)/dn)}}a.forEach((x,y)=>{if(!x.length)return;let A=new Cn(o,this.buildingMats[y],x.length);x.forEach((T,w)=>A.setMatrixAt(w,T)),A.userData.sharedGeo=!1,t.add(A)});let m=new Se(1,1);for(let x of d){let y=this.neonSigns[Math.floor(r()*this.neonSigns.length)],A=new ut(m,y);A.userData.sharedGeo=!0,A.scale.set(x.w,x.w*.375,1),A.position.set(x.p.x+x.p.lx*x.off,x.y,x.p.z+x.p.lz*x.off),A.rotation.y=x.p.h+(x.side>0?-Math.PI/2:Math.PI/2),t.add(A)}let _=this.propGeo.lamp,p=[],g=[],M=[];for(let x=n+e%2*7;x<s;x+=15){let y=this.P(x),A=(x/15|0)%2?1:-1,T=A*(this.wall+.9);c.setFromAxisAngle(f,y.h+(A>0?-Math.PI/2:Math.PI/2)),u.set(y.x+y.lx*T,y.y,y.z+y.lz*T),h.set(1,1,1),p.push(l.compose(u,c,h).clone());let w=T-A*2;g.push(new te().makeTranslation(y.x+y.lx*w,y.y+6.9,y.z+y.lz*w));let I=T-A*3.5;M.push({x:y.x+y.lx*I,y:y.y+.05,z:y.z+y.lz*I})}if(p.length){let x=new Cn(_,this.propMat,p.length);x.userData.sharedGeo=!0,p.forEach((I,O)=>x.setMatrixAt(O,I)),t.add(x);let y=new ge(.5,.15,.9),A=new Cn(y,this.lampHeadMat,g.length);g.forEach((I,O)=>A.setMatrixAt(O,I)),t.add(A);let T=new Se(11,11);T.rotateX(-Math.PI/2);let w=new Cn(T,this.poolMat,M.length);M.forEach((I,O)=>w.setMatrixAt(O,new te().makeTranslation(I.x,I.y,I.z))),w.renderOrder=1,t.add(w)}}buildBanners(t,e,n,s){let r=un(this.seed*31+e*101),o={tires:1.1,rail:.85,concrete:.9}[this.map.barrier],a=[],l=[],c=[],h=this.bannerRows;for(let f=n;f+3<=s;f+=4){if(r()<.45)continue;let d=r()<.5?1:-1,m=Math.floor(r()*h),_=1-(m+1)/h,p=1-m/h,g=d*(this.wall+.05),M=a.length/3;for(let x=0;x<=3;x++){let y=this.P(f+x),A=y.x+y.lx*g,T=y.z+y.lz*g;a.push(A,y.y+o,T,A,y.y+o+.75,T);let w=d>0?x/3:1-x/3;l.push(w,_,w,p)}for(let x=0;x<3;x++){let y=M+x*2;c.push(y,y+2,y+1,y+1,y+2,y+3)}}if(!a.length)return;let u=new he;u.setAttribute("position",new Qt(a,3)),u.setAttribute("uv",new Qt(l,2)),u.setIndex(c),u.computeVertexNormals(),t.add(new ut(u,this.bannerMat))}buildStands(t,e){let n=this.P(e);for(let s of[1,-1]){let r=s*(this.wall+7.5),o=n.x+n.lx*r,a=n.z+n.lz*r;if(!this.clearOfRoad(o,a,e,5.5))continue;let l=[this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey];l[s>0?1:0]=this.standMats[0];let c=new ut(new ge(8,5,34),l);c.position.set(o,n.y+2.5,a),c.rotation.y=n.h,c.castShadow=!0,t.add(c);let h=new ut(new ge(9.5,.3,35),this.roofMat);h.position.set(o-n.lx*s*.6,n.y+7.2,a-n.lz*s*.6),h.rotation.y=n.h,h.rotation.z=s*.08,t.add(h);for(let u of[-16,0,16]){let f=new ut(new ge(.25,2.3,.25),this.pillarMat);f.position.set(o-n.lx*s*4.3+Math.sin(n.h)*u,n.y+6,a-n.lz*s*4.3+Math.cos(n.h)*u),t.add(f)}}}buildGate(t,e,n){let s=this.P(e),r=this.wall+.5,o=new ge(.6,6.5,.6);for(let l of[1,-1]){let c=new ut(o,this.pillarMat);c.position.set(s.x+s.lx*l*r,s.y+3.25,s.z+s.lz*l*r),c.rotation.y=s.h,c.castShadow=!0,t.add(c)}let a=new ut(new Se(r*2,r*2*96/512),n);a.position.set(s.x,s.y+6.2,s.z),a.rotation.y=s.h+Math.PI,t.add(a)}};var Dn=96,pn=4,Tr=Dn/pn,hh=3,ha=class{constructor(t,e,n=1,s=1){this.isField=!0,this.scene=t,this.map=e,this.seed=n,this.quality=s,this.f=e.field,this.hw=1e9,this.wall=1e9,this.base=0,this.lastIdx=1e9,this.sh=0,this.chunks=new Map,this.root=new we,t.add(this.root),this.target={x:0,z:0},this.makeMaterials(),this.propGeo=i_(e.field.surface),this.update(0)}H(t,e){let n=this.f,s=this.seed,r=(qi(t*n.freq,e*n.freq,s+3,4)-.5)*n.amp*2;r+=(qi(t*n.freq*3.1,e*n.freq*3.1,s+41,2)-.5)*n.amp*.35;let o=Math.hypot(t,e);return r*=wi(ue((o-25)/60,0,1)),n.shore!==void 0&&t<n.shore+30&&(r-=(n.shore+30-t)*.09),r}heightAt(t,e){let n=Math.floor(t/pn),s=Math.floor(e/pn),r=t/pn-n,o=e/pn-s,a=n*pn,l=s*pn,c=this.H(a,l),h=this.H(a+pn,l),u=this.H(a,l+pn),f=this.H(a+pn,l+pn);return r+o<=1?c+(h-c)*r+(u-c)*o:f+(u-f)*(1-r)+(h-f)*(1-o)}grad(t,e){return[(this.heightAt(t+1.2,e)-this.heightAt(t-1.2,e))/(2*1.2),(this.heightAt(t,e+1.2)-this.heightAt(t,e-1.2))/(2*1.2)]}ensure(){}P(t){let e=t*2,n=this.heightAt(0,e);return{x:0,z:e,y:n,h:0,lx:1,lz:0,s:e,k:0}}sample(t,e={}){return Object.assign(e,this.P(t),{slope:0})}project(t,e,n){return{idx:n,lat:0,y:this.heightAt(t,e),h:0,lx:1,lz:0,slope:0,k:0}}collidersNear(t,e){let n=[],s=Math.floor(t/Dn),r=Math.floor(e/Dn);for(let o=s-1;o<=s+1;o++)for(let a=r-1;a<=r+1;a++){let l=this.chunks.get(o+","+a);if(l)for(let c of l.userData.col)n.push(c)}return n}makeMaterials(){let t=this.f,e=fn(512,512,(n,s,r)=>{n.fillStyle=t.texBase,n.fillRect(0,0,s,r);let o=un(5);for(let a=0;a<9e3;a++){let l=o();n.fillStyle=l<.5?`rgba(0,0,0,${.05+o()*.08})`:`rgba(255,255,255,${.04+o()*.07})`;let c=1+o()*2.5;n.fillRect(o()*s,o()*r,c,c)}if(t.surface==="asphalt"){n.strokeStyle="rgba(245,245,240,0.8)",n.lineWidth=5,n.strokeRect(2.5,2.5,s-5,r-5),n.setLineDash([26,22]),n.strokeStyle="rgba(242,194,48,0.75)",n.lineWidth=4,n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,r),n.stroke(),n.setLineDash([]),n.strokeStyle="rgba(10,10,10,0.18)",n.lineWidth=7;for(let a=0;a<5;a++)n.beginPath(),n.arc(o()*s,o()*r,60+o()*120,o()*6,o()*6+2.5),n.stroke()}if(t.surface==="beach"){n.strokeStyle="rgba(160,120,70,0.13)",n.lineWidth=3;for(let a=10;a<r;a+=22){n.beginPath();for(let l=0;l<=s;l+=16)n.lineTo(l,a+Math.sin(l*.05+a)*5);n.stroke()}}},{repeat:!0});if(this.groundMat=new Le({map:e,vertexColors:!0}),this.propMat=new Le({vertexColors:!0,flatShading:!0}),t.shore!==void 0){let n=new ut(new Se(900,4e3),new Le({color:3120836,transparent:!0,opacity:.88}));n.rotation.x=-Math.PI/2,n.position.set(t.shore-440,-1.4,0),this.water=n,this.root.add(n)}}update(){let t=this.target,e=Math.floor(t.x/Dn),n=Math.floor(t.z/Dn),s=0;for(let r=0;r<=hh;r++)for(let o=e-r;o<=e+r;o++)for(let a=n-r;a<=n+r;a++){if(Math.max(Math.abs(o-e),Math.abs(a-n))!==r)continue;let l=o+","+a;this.chunks.has(l)||s>=2&&r>1||(this.buildChunk(o,a),s++)}for(let[r,o]of this.chunks){let[a,l]=r.split(",").map(Number);(Math.abs(a-e)>hh+1||Math.abs(l-n)>hh+1)&&(this.root.remove(o),o.traverse(c=>{c.geometry&&!c.userData.sharedGeo&&c.geometry.dispose(),c.isInstancedMesh&&c.dispose()}),this.chunks.delete(r))}this.water&&(this.water.position.z=t.z)}buildChunk(t,e){var M;let n=this.f,s=new we,r=t*Dn,o=e*Dn,a=Tr+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*2),h=new Float32Array(a*a*3),u=new yt(n.colA),f=new yt(n.colB),d=new yt((M=n.colLow)!=null?M:n.colB),m=new yt;for(let x=0;x<=Tr;x++)for(let y=0;y<=Tr;y++){let A=x*a+y,T=r+y*pn,w=o+x*pn,I=this.H(T,w);l[A*3]=T,l[A*3+1]=I,l[A*3+2]=w,c[A*2]=T/32,c[A*2+1]=w/32;let O=qi(T*.02,w*.02,this.seed+77,2);m.copy(u).lerp(f,O),n.shore!==void 0?m.lerp(d,wi(ue((n.shore+34-T)/22,0,1))):m.lerp(d,ue(-I/(n.amp*1.2),0,.6)),h[A*3]=m.r,h[A*3+1]=m.g,h[A*3+2]=m.b}let _=[];for(let x=0;x<Tr;x++)for(let y=0;y<Tr;y++){let A=x*a+y,T=A+1,w=A+a,I=w+1;_.push(A,w,T,T,w,I)}let p=new he;p.setAttribute("position",new ae(l,3)),p.setAttribute("uv",new ae(c,2)),p.setAttribute("color",new ae(h,3)),p.setIndex(_),p.computeVertexNormals();let g=new ut(p,this.groundMat);g.receiveShadow=this.quality>0,s.add(g),s.userData.col=[],this.buildProps(s,t,e),this.root.add(s),this.chunks.set(t+","+e,s)}buildProps(t,e,n){let s=this.f,r=un(this.seed*131+e*7919+n*104729),o=new te,a=new cn,l=new P,c=new P,h=new P(0,1,0);for(let[u,f,d,m,_]of s.props){let p=this.propGeo[u];if(!p)continue;let g=[],M=Math.floor(f*(.5+r()));for(let y=0;y<M;y++){let A=e*Dn+r()*Dn,T=n*Dn+r()*Dn;if(Math.hypot(A,T)<45||s.shore!==void 0&&A<s.shore+(u==="palm"||u==="umbrella"?12:40))continue;let w=d+r()*(m-d);a.setFromAxisAngle(h,r()*Math.PI*2),l.set(w,w,w),c.set(A,this.heightAt(A,T)-.05,T),g.push(o.compose(c,a,l).clone()),_>0&&t.userData.col.push({x:A,z:T,r:_*w})}if(!g.length)continue;let x=new Cn(p,this.propMat,g.length);x.userData.sharedGeo=!0,g.forEach((y,A)=>x.setMatrixAt(A,y)),x.castShadow=this.quality>0,t.add(x)}}};function i_(i){let t={},e=n=>Hn(n);{let n=[];for(let s=0;s<3;s++){let r=new kn(.42,.2,6,10);r.rotateX(Math.PI/2),r.translate(0,.2+s*.36,0),n.push(ee(r,s===1?15921906:1842204))}t.tires=e(n)}{let n=new hn(.28,.75,8);n.translate(0,.42,0);let s=new ge(.6,.06,.6);s.translate(0,.03,0);let r=new _e(.17,.2,.14,8);r.translate(0,.45,0),t.cone=e([ee(n,16738835),ee(s,16738835),ee(r,16777215)])}{let n=new _e(.12,.18,9,6);n.translate(0,4.5,0);let s=new ge(1.4,.25,.5);s.translate(0,9,0),t.mast=e([ee(n,6053992),ee(s,15263968)])}{let n=new ge(3,.8,.7);n.translate(0,.4,0),t.block=e([ee(n,13223613)])}{let n=[],s=0;for(let r=0;r<6;r++){let o=new _e(.2-r*.015,.24-r*.015,1.1,6);o.translate(s,.55+r*1.05,0),s+=.12,n.push(ee(o,r%2?9071171:10254928))}for(let r=0;r<7;r++){let o=new ge(.5,.06,3);o.translate(0,0,1.4),o.rotateX(.35),o.rotateY(r/7*Math.PI*2),o.translate(s,6.5,0),n.push(ee(o,r%2?3115578:4169800))}t.palm=e(n)}{let n=new _e(.04,.04,2.3,5);n.translate(0,1.15,0);let s=new hn(1.4,.5,8);s.translate(0,2.3,0),t.umbrella=e([ee(n,15658734),ee(s,[16730955,3115744,16763187][Math.floor(Math.random()*3)])])}for(let[n,s]of[["rock",9407104],["srock",8226708]]){let r=new Ds(1.2,0),o=r.attributes.position,a=un(9);for(let l=0;l<o.count;l++)o.setXYZ(l,o.getX(l)*(.8+a()*.5),o.getY(l)*(.55+a()*.3),o.getZ(l)*(.8+a()*.5));r.translate(0,.45,0),t[n]=ee(r,s)}{let n=[],s=new _e(.2,.3,1.6,6);s.translate(0,.8,0),n.push(ee(s,5913899)),[[2,2.4,1.6],[1.5,2.1,3],[1,1.8,4.3]].forEach(([r,o,a],l)=>{let c=new hn(r,o,7);c.translate(0,a,0),n.push(ee(c,l%2?2051382:2382398));let h=new hn(r*.72,o*.45,7);h.translate(0,a+o*.3,0),n.push(ee(h,15857146))}),t.pine=e(n)}{let n=new zn(.6,8,6);n.translate(0,.55,0);let s=new zn(.42,8,6);s.translate(0,1.35,0);let r=new hn(.07,.35,5);r.rotateX(Math.PI/2),r.translate(0,1.38,.52),t.snowman=e([ee(n,16777215),ee(s,16777215),ee(r,16742938)])}return t}var uh=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Lt={glass:new ne({color:1779251,roughness:.05,metalness:.2,transparent:!0,opacity:.55,envMapIntensity:1.4,depthWrite:!1}),black:new ne({color:1184276,roughness:.65}),gloss:new ne({color:789518,roughness:.25,metalness:.3}),trim:new ne({color:1973794,roughness:.6,metalness:.05}),chrome:new ne({color:15132908,roughness:.12,metalness:1}),tire:new ne({color:1644827,roughness:.92}),disc:new ne({color:7829628,roughness:.35,metalness:.9}),interior:new ne({color:1710621,roughness:.8}),seat:new ne({color:2763312,roughness:.75}),carbon:new ne({color:1710879,roughness:.3,metalness:.5}),lensClear:new ne({color:16777215,roughness:.02,transparent:!0,opacity:.25,depthWrite:!1}),reverse:new ne({color:14540253,emissive:16777215,emissiveIntensity:.1,roughness:.2}),amber:new ne({color:16751130,emissive:16746496,emissiveIntensity:.4,roughness:.3})},uf={kaze:{spokes:6,rim:14277340,caliper:14034984,rimDepth:.06,plate:"01 KG 086 AE"},bulldog:{spokes:5,rim:13225170,caliper:2763306,rimDepth:.03,plate:"01 KG 069 V8",chromeBumpers:!0},veloce:{spokes:10,rim:2105636,caliper:16761856,rimDepth:.02,plate:"01 KG 777 GT"},tundra:{spokes:8,rim:15856113,caliper:14034984,rimDepth:.04,plate:"01 KG 555 RR",cage:!0},ronin:{spokes:6,rim:7172214,caliper:2060256,rimDepth:.05,plate:"01 KG 034 GR"},vanta:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MW"},kitsune:{spokes:5,rim:2829102,caliper:16761856,rimDepth:.05,plate:"01 KG 013 RX"},tora:{spokes:5,rim:14080220,caliper:14034984,rimDepth:.07,plate:"01 KG 002 JZ"},toro:{spokes:10,rim:1842207,caliper:16747520,rimDepth:.02,plate:"01 KG 012 LP"},stutt:{spokes:5,rim:13225170,caliper:16764928,rimDepth:.03,plate:"01 KG 911 SS"}};function s_(i,t=2){for(let e=0;e<t;e++){let n=[i[0]];for(let s=0;s<i.length-1;s++){let r=i[s],o=i[s+1];n.push([r[0]*.75+o[0]*.25,r[1]*.75+o[1]*.25]),n.push([r[0]*.25+o[0]*.75,r[1]*.25+o[1]*.75])}n.push(i[i.length-1]),i=n}return i}function r_(i,t,e){var l;let n=new bi,s=i[i.length-1][1];n.moveTo(i[0][0],i[0][1]);for(let c=1;c<i.length;c++)n.lineTo(i[c][0],i[c][1]);let r=e+.08,o=e+((l=t.ride)!=null?l:0),a=c=>{n.lineTo(c-r,s),n.lineTo(c-r,Math.min(o,s+.02)),n.absarc(c,o,r,Math.PI,0,!0),n.lineTo(c+r,s)};return a(t.wheelR),a(t.wheelF),n.lineTo(i[0][0],s),n.closePath(),n}function ua(i,t,e,n=3){let s=new Wo(i,{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:n,curveSegments:14});s.rotateY(-Math.PI/2),s.computeBoundingBox();let r=s.boundingBox;return s.translate(-(r.min.x+r.max.x)/2,0,0),s}function ff(i,t){let e=i.attributes.position,n=new P;for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);i.computeVertexNormals()}function Wt(i,t,e,n,s,r,o,a){let l=new ut(new ge(i,t,e),n);return l.position.set(s,r,o),l.castShadow=!0,a&&a.add(l),l}function ke(i,t,e,n,s,r,o,a,l=16){let c=new _e(i,i,t,l);o==="x"?c.rotateZ(Math.PI/2):o==="z"&&c.rotateX(Math.PI/2);let h=new ut(c,e);return h.position.set(n,s,r),a&&a.add(h),h}function ii(i,t,e,n,s,r=!1){let o=i.distanceTo(t),a=r?new _e(e,e,o,8).rotateX(Math.PI/2):new ge(e,e,o),l=new ut(a,n);return l.position.copy(i).add(t).multiplyScalar(.5),l.lookAt(t),s.add(l),l}function Ar(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Pn(n);return s.colorSpace=Ve,s.anisotropy=4,s}var De={};function o_(){return De.grille||(De.grille=Ar(128,64,(i,t,e)=>{i.fillStyle="#050505",i.fillRect(0,0,t,e),i.strokeStyle="#3a3a3e",i.lineWidth=2;for(let n=0;n<e+8;n+=8)for(let s=n/8%2?0:5;s<t+10;s+=10){i.beginPath();for(let r=0;r<6;r++){let o=r*Math.PI/3;i.lineTo(s+Math.cos(o)*4,n+Math.sin(o)*4)}i.closePath(),i.stroke()}}))}function a_(i){var t;return De[t="p"+i]||(De[t]=Ar(256,56,(e,n,s)=>{e.fillStyle="#f4f4f4",e.fillRect(0,0,n,s),e.strokeStyle="#111",e.lineWidth=4,e.strokeRect(2,2,n-4,s-4),e.fillStyle="#d0021b",e.fillRect(6,6,34,s-12),e.fillStyle="#ffd400",e.beginPath(),e.arc(23,22,8,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",23,45),e.fillStyle="#111",e.font="bold 34px Arial",e.textBaseline="middle",e.fillText(i.slice(6),150,30),e.font="bold 26px Arial",e.fillText(i.slice(0,2),62,30)}))}function l_(i,t){var e;return De[e="n"+i+t]||(De[e]=Ar(128,128,n=>{n.fillStyle=t?"#111":"#fff",n.beginPath(),n.arc(64,64,58,0,Math.PI*2),n.fill(),n.fillStyle=t?"#fff":"#111",n.font="bold 70px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)}))}var df=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];function c_(i){var s;let[t,e,n]=df[i%df.length];return De[s="s"+i]||(De[s]=Ar(256,64,(r,o,a)=>{r.fillStyle=e,r.beginPath(),r.roundRect?r.roundRect(2,2,o-4,a-4,14):r.rect(2,2,o-4,a-4),r.fill(),r.strokeStyle=n,r.lineWidth=3,r.stroke(),r.fillStyle=n,r.font="italic 900 36px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(t,o/2,a/2+2)}))}function h_(i){var t;return De[t="b"+i]||(De[t]=Ar(512,48,(e,n,s)=>{e.fillStyle="#0d0d10",e.fillRect(0,0,n,s),e.fillStyle="#fff",e.font="italic 900 34px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(i,n/2,s/2+2)}))}function u_(){if(De.ramp)return De.ramp;let i=new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),t=new xr(i,4,1,ln);return t.minFilter=t.magFilter=Je,t.needsUpdate=!0,De.ramp=t}function f_(){return De.ao||(De.ao=(()=>{let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(32,64,8,32,64,64);return e.addColorStop(0,"rgba(0,0,0,0.8)"),e.addColorStop(.6,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),new Pn(i)})())}function pf(i){i.updateMatrixWorld(!0);let t=new te().copy(i.matrixWorld).invert(),e=new Map,n=[],s=[];i.traverse(o=>{o.isMesh&&n.push(o)});let r=new te;for(let o of n){let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();for(let c of Object.keys(a.attributes))["position","normal","uv"].includes(c)||a.deleteAttribute(c);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new Qt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.multiplyMatrices(t,o.matrixWorld));let l=o.material.uuid;e.has(l)||e.set(l,{mat:o.material,list:[],order:o.renderOrder}),e.get(l).list.push(a),o.parent.remove(o),o.geometry.dispose()}for(let{mat:o,list:a,order:l}of e.values()){let c=Hn(a);a.forEach(u=>u.dispose());let h=new ut(c,o);h.renderOrder=l,h.castShadow=o!==Lt.lensClear&&!(o.transparent&&o!==Lt.glass),h.receiveShadow=o!==Lt.glass,i.add(h),s.push(h)}return s}var mf=new ve({side:Ce,uniforms:{t:{value:.022}},vertexShader:"uniform float t; void main(){ vec3 p = position + normal * t; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.03, 0.03, 0.045, 1.0); }"});function gf(i,t){let e=i.geometry.clone();e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=af(e,.001),e.computeVertexNormals();let n=t?mf.clone():mf;t&&(n.uniforms.t.value=t);let s=new ut(e,n);s.position.copy(i.position),s.quaternion.copy(i.quaternion),i.parent.add(s)}function d_(i,t,e,n){let s=new we,r=t/2,o=[[i*.7,-r*.96],[i*.86,-r],[i*.95,-r*.92],[i*.995,-r*.6],[i,-r*.2],[i,r*.2],[i*.995,r*.6],[i*.95,r*.92],[i*.86,r],[i*.7,r*.96]],a=new Vo(o.map(([m,_])=>new nt(m,_)),28);a.rotateZ(Math.PI/2);let l=new ut(a,Lt.tire);l.castShadow=!0,s.add(l);let c=new ne({color:e.rim,roughness:.3,metalness:.6}),h=new ut(new _e(i*.7,i*.7,t*.92,24,1,!0).rotateZ(Math.PI/2),new ne({color:3816255,metalness:.8,roughness:.4,side:Fe}));s.add(h);let u=n*(r*.82-e.rimDepth),f=new ut(new kn(i*.69,.018,6,28).rotateY(Math.PI/2),c);f.position.x=n*r*.86,s.add(f),ke(i*.56,.035,Lt.disc,-n*.02,0,0,"x",s,24),ke(i*.2,.06,Lt.trim,-n*.01,0,0,"x",s,12);let d=e.spokes;for(let m=0;m<d;m++){let _=m/d*Math.PI*2,p=new ut(new ge(.035,i*.52,d>8?.035:.06),c);p.position.set(u,Math.cos(_)*i*.42,Math.sin(_)*i*.42),p.rotation.x=_,s.add(p)}ke(i*.17,.06,c,u,0,0,"x",s,16);for(let m=0;m<5;m++){let _=m/5*Math.PI*2;ke(.014,.05,Lt.chrome,u+n*.03,Math.cos(_)*i*.1,Math.sin(_)*i*.1,"x",s,6)}return ke(i*.055,.07,Lt.gloss,u+n*.02,0,0,"x",s,12),s}function fh(i,t,e={}){var K,It,xt,Tt,$t;let n=i.body,s=i.wheelRadius,r=uf[i.id]||uf.kaze,o=new we,a=new Yo({color:t,gradientMap:u_()}),l=new yt(t).getHSL({}).l>.6,c=new ne({color:i.id==="vanta"?1920952:l?1315860:15921906,roughness:.4}),h=n.L,u=n.W,f=s_(n.upper,2),d=h/2,m=n.cabin[0][1],_=(L,W)=>(1-.085*uh(.55,1.02,Math.abs(L)/d))*(1-.07*uh(m-.3,m+.05,W)),p=ua(r_(f,n,s),u,.07,3);ff(p,L=>{L.x*=_(L.z,L.y)});let g=new ut(p,a);g.castShadow=!0,g.receiveShadow=!0,o.add(g);let M=(L,W)=>u/2*_(L,W),x=n.cabin,y=u*.84,A=Math.max(x[1][1],x[2][1]),T=L=>1-.2*uh(m,A,L),w=new bi;w.moveTo(x[0][0]+.06,x[0][1]-.06);for(let L=0;L<x.length;L++)w.lineTo(x[L][0],x[L][1]);w.lineTo(x[x.length-1][0]+.06,x[x.length-1][1]-.06),w.closePath();let I=ua(w,y,.04,2);ff(I,L=>{L.x*=T(L.y)});let O=new ut(I,Lt.glass);O.renderOrder=3,o.add(O);let v=L=>y/2*T(L),S=Math.abs(x[1][0]-x[2][0])+.12,k=(x[1][0]+x[2][0])/2,F=new bi;F.moveTo(-S/2,0),F.lineTo(S/2,0),F.lineTo(S/2-.04,.05),F.lineTo(-S/2+.04,.06),F.closePath();let V=ua(F,v(A)*2+.04,.02,2),J=new ut(V,a);J.position.set(0,A-.02,k),J.castShadow=!0,o.add(J);for(let L of[1,-1]){let W=(ft,ht,kt=.012)=>new P(L*(v(ht)+kt),ht,ft);ii(W(x[0][0],x[0][1]),W(x[1][0],x[1][1]),.07,a,o),ii(W(x[2][0],x[2][1]),W(x[3][0],x[3][1]),.09,a,o);let ct=x[1][0]+(x[2][0]-x[1][0])*.45;ii(W(ct,m),W(ct,A-.03),.05,Lt.gloss,o),ii(W(x[0][0]-.02,m+.015,.02),W(x[3][0]+.05,m+.015,.02),.03,Lt.gloss,o)}for(let L of[.2,-.25])Wt(.5,.015,.03,Lt.black,L*u,x[0][1]+.03,x[0][0]-.1,o).rotation.set(-.5,0,.12);let z=.45;Wt(y*.9,.2,.35,Lt.interior,0,m-.05,x[0][0]-.25,o);for(let L of[1,-1]){let W=L*y*.24,ct=x[1][0]-.3;Wt(.42,.12,.45,Lt.seat,W,z+.12,ct,o);let ft=Wt(.42,.55,.1,Lt.seat,W,z+.42,ct-.25,o);ft.rotation.x=-.18,Wt(.2,.14,.08,Lt.seat,W,z+.78,ct-.3,o)}let it=new ut(new kn(.15,.022,8,20),Lt.interior);if(it.position.set(y*.24,m+.05,x[0][0]-.5),it.rotation.x=-.35,o.add(it),r.cage){let L=x[1][0]-.1,W=x[2][0]+.1,ct=A-.08;for(let ft of[1,-1]){let ht=ft*v(A)*.95;ii(new P(ht,z,L),new P(ht,ct,L),.02,Lt.chrome,o,!0),ii(new P(ht,ct,L),new P(ht,ct,W),.02,Lt.chrome,o,!0),ii(new P(ht,z,W),new P(ht,ct,W),.02,Lt.chrome,o,!0)}ii(new P(v(A)*.95,ct,W),new P(-v(A)*.95,z+.2,W),.02,Lt.chrome,o,!0)}let H=Math.max(...n.upper.map(L=>L[0]))+.07,lt=Math.min(...n.upper.map(L=>L[0]))-.07,vt=n.upper[0][1],_t=(n.upper[0][1]+n.upper[1][1])/2+.06,Zt=n.upper.length-2,qt=(n.upper[Zt][1]+n.upper[Zt+1][1])/2+.08,Z=new ne({color:16774872,emissive:16773824,emissiveIntensity:e.night?2.4:.5,roughness:.15}),ot=new ne({color:6948872,emissive:16718362,emissiveIntensity:e.night?1.2:.35,roughness:.25}),Et=u*.92,rt=n.extras||[];if(rt.includes("popups"))for(let L of[1,-1])Wt(.44,.05,.32,a,L*u*.3,n.upper[2][1]+.02,H-.4,o),Wt(.4,.02,.28,Lt.gloss,L*u*.3,n.upper[2][1]-.005,H-.4,o);if(rt.includes("roundlights"))for(let L of[1,-1]){let W=L*Et*.34,ct=n.upper[2][1]-.02,ft=H-.32;ke(.12,.2,a,W,ct,ft,"z",o,20),ke(.1,.03,Z,W,ct,ft+.1,"z",o,20)}let Bt=n.upper[1][1]-n.upper[0][1]<.2;if(Bt){let L=H-.35,W=f[0][1];for(let ft=0;ft<f.length-1;ft++)if(f[ft][0]>=L&&f[ft+1][0]<=L){let ht=(f[ft][0]-L)/(f[ft][0]-f[ft+1][0]);W=f[ft][1]+(f[ft+1][1]-f[ft][1])*ht}let ct=Math.atan2(n.upper[2][1]-n.upper[1][1],n.upper[1][0]-n.upper[2][0]);for(let ft of[1,-1]){let ht=Wt(.46,.03,.2,Lt.gloss,ft*Et*.32,W+.09,L,o);ht.rotation.x=ct;let kt=Wt(.4,.035,.05,Z,ft*Et*.32,W+.1,L+.07,o);kt.rotation.x=ct}}for(let L of rt.includes("roundlights")||Bt?[]:[1,-1]){let W=L*Et*.33;Wt(.44,.15,.08,Lt.gloss,W,_t,H-.02,o),Wt(.36,.07,.03,Z,W+L*.03,_t+.01,H+.02,o),ke(.04,.03,Lt.chrome,W-L*.12,_t,H+.025,"z",o,14),Wt(.44,.15,.01,Lt.lensClear,W,_t,H+.035,o),Wt(.1,.035,.02,Lt.amber,W+L*.16,_t-.055,H+.03,o)}let Pt=new ne({map:o_(),roughness:.6}),Nt=new ut(new Se(u*.34,.1),Pt);Nt.position.set(0,_t-.04,H+.012),o.add(Nt);let Yt=new ut(new Se(u*.62,.12),Pt);Yt.position.set(0,vt+.09,H+.01),o.add(Yt),Wt(u*.94,.06,.14,r.chromeBumpers?Lt.chrome:Lt.trim,0,vt+.01,H-.01,o),Wt(u*.9,.02,.12,Lt.carbon,0,vt-.035,H+.03,o);for(let L of[1,-1])ke(.04,.03,Z,L*u*.37,vt+.09,H+.01,"z",o,12);let j=new ne({map:a_(r.plate),roughness:.5}),C=new ut(new Se(.44,.1),j);if(C.position.set(0,vt+.1,H+.02),o.add(C),ke(.04,.015,Lt.chrome,0,_t+.04,H+.02,"z",o,16),rt.includes("roundtails"))for(let L of[1,-1])for(let W of[.22,.38])ke(.085,.05,Lt.gloss,L*u*W,qt,lt+.01,"z",o,18),ke(.07,.06,ot,L*u*W,qt,lt-.005,"z",o,18),ke(.03,.065,ot,L*u*W,qt,lt-.01,"z",o,12);else{Wt(u*.88,.13,.05,Lt.gloss,0,qt,lt+.015,o);for(let L of[1,-1])Wt(.42,.09,.03,ot,L*u*.28,qt,lt-.005,o),Wt(.1,.05,.03,Lt.reverse,L*u*.1,qt,lt-.005,o);Wt(u*.12,.03,.03,ot,0,qt+.02,lt-.005,o)}let st=n.upper[n.upper.length-1][1];Wt(u*.94,.07,.14,r.chromeBumpers?Lt.chrome:Lt.trim,0,st+.01,lt+.01,o);let pt=new ut(new Se(.44,.1),j);if(pt.position.set(0,qt-.16,lt-.01),pt.rotation.y=Math.PI,o.add(pt),rt.includes("wing")||rt.includes("intakes")){Wt(u*.7,.08,.2,Lt.carbon,0,st-.02,lt+.05,o);for(let L=-2;L<=2;L++)Wt(.015,.1,.22,Lt.carbon,L*u*.13,st-.02,lt+.03,o)}let at=i.id==="veloce"?[[.06,0],[-.06,0]]:i.cylinders>=6?[[u*.3,0],[u*.36,0],[-u*.3,0],[-u*.36,0]]:[[u*.3,0]];for(let[L]of at)ke(.045,.2,Lt.chrome,L,st+0,lt+.02,"z",o,14),ke(.032,.21,Lt.black,L,st+0,lt+.02,"z",o,12);for(let L of[1,-1]){let W=x[0][0]-.2,ct=m+.1,ft=L*(M(W,m)+.06);ii(new P(L*(M(W,m)-.02),m+.02,W),new P(ft,ct,W),.025,Lt.gloss,o),Wt(.13,.09,.14,a,ft+L*.03,ct,W,o),Wt(.01,.07,.11,Lt.chrome,ft+L*.03,ct,W-.075,o);let ht=x[0][0]-.05,kt=x[1][0]+(x[2][0]-x[1][0])*.45,Vt=(st+m)/2;for(let D of[ht,kt])Wt(.008,m-st-.08,.012,Lt.black,L*(M(D,Vt)+.003),Vt+.02,D,o);Wt(.008,.012,Math.abs(ht-kt),Lt.black,L*(M((ht+kt)/2,st+.06)+.003),st+.06,(ht+kt)/2,o),Wt(.03,.03,.14,Lt.gloss,L*(M(kt+.2,m-.1)+.012),m-.1,kt+.2,o);let ie=Math.abs(n.wheelF-n.wheelR)-(s+.1)*2;Wt(.07,.1,ie,Lt.carbon,L*(M(0,st)+.01),st+.04,(n.wheelF+n.wheelR)/2,o),ke(.06,.01,Lt.trim,L*(M(n.wheelR+.35,m-.15)+.004),m-.15,n.wheelR+.35,"x",o,14);for(let D of[n.wheelF,n.wheelR]){let mt=new ut(new kn(s+.09,.035,6,20,Math.PI),Lt.trim);mt.rotation.y=Math.PI/2,mt.position.set(L*(M(D,s)+.005),s+((K=n.ride)!=null?K:0),D),o.add(mt)}if(!rt.includes("stripes")){let D=new ne({map:l_((It=e.number)!=null?It:i.id.length*17%90+10,l),transparent:!0,roughness:.4}),mt=new ut(new Se(.46,.46),D),q=(ht+kt)/2;mt.position.set(L*(M(q,.66)+.006),.66,q),mt.rotation.y=L*Math.PI/2,o.add(mt)}}let dt=Math.max(...n.upper.filter(L=>L[0]<x[x.length-1][0]+.05).map(L=>L[1]));if(rt.includes("wing")){let L=new bi;L.moveTo(0,0),L.lineTo(.36,.02),L.lineTo(.34,.05),L.lineTo(.02,.04),L.closePath();let W=ua(L,u*.95,.01,1),ct=new ut(W,i.id==="ronin"?Lt.carbon:a);ct.rotation.y=Math.PI,ct.position.set(0,dt+.32,lt+.46),ct.castShadow=!0,o.add(ct);for(let ft of[1,-1])Wt(.03,.3,.12,Lt.gloss,ft*u*.3,dt+.16,lt+.3,o),Wt(.015,.16,.42,i.id==="ronin"?Lt.carbon:a,ft*u*.475,dt+.33,lt+.28,o)}else rt.includes("ducktail")&&Wt(u*.88,.05,.16,a,0,dt+.04,lt+.13,o);if(rt.includes("roofwing")){Wt(v(A)*2+.06,.035,.28,a,0,A+.07,x[2][0]-.1,o);for(let L of[1,-1])Wt(.02,.1,.26,a,L*(v(A)+.03),A+.04,x[2][0]-.1,o)}if(rt.includes("scoop")){let L=(n.upper[2][0]+x[0][0])/2;Wt(.55,.1,.75,a,0,n.upper[3][1]+.05,L,o);let W=new ut(new Se(.46,.07),Pt);W.position.set(0,n.upper[3][1]+.06,L+.38),o.add(W)}if(i.id==="ronin"){let L=(n.upper[2][0]+x[0][0])/2;for(let W of[1,-1])for(let ct=0;ct<4;ct++)Wt(.22,.012,.03,Lt.gloss,W*.32,n.upper[3][1]+.02,L-.12+ct*.08,o);Wt(u*.9,.025,.1,Lt.carbon,0,vt-.04,H+.06,o)}if(i.id==="veloce")for(let L=0;L<6;L++)Wt(u*.5,.012,.05,Lt.gloss,0,x[3][1]+.01-L*.012,x[3][0]+.05-L*.1-.12,o);if(rt.includes("roofscoop")){Wt(.36,.08,.4,a,0,A+.07,k+.25,o);let L=new ut(new Se(.3,.05),Pt);L.position.set(0,A+.07,k+.451),o.add(L)}if(rt.includes("intakes"))for(let L of[1,-1]){let W=new ut(new Se(.62,.2),Pt);W.position.set(L*(M(-.6,.55)+.006),.55,-.6),W.rotation.y=L*Math.PI/2,o.add(W)}if(rt.includes("stripes"))for(let L of[.13,-.13]){let W=Wt(.16,.008,Math.abs(H-x[0][0]),c,L,0,(H+x[0][0])/2,o);W.position.y=n.upper[3][1]+.03,Wt(.16,.008,S,c,L,A+.045,k,o),Wt(.16,.008,Math.abs(x[3][0]-lt),c,L,dt+.012,(x[3][0]+lt)/2,o)}if(rt.includes("rallylights")){Wt(u*.7,.03,.05,Lt.gloss,0,_t+.12,H+.1,o);for(let L of[.3,.1,-.1,-.3])ke(.085,.07,Lt.gloss,L*u,_t+.05,H+.12,"z",o,16),ke(.07,.075,Z,L*u,_t+.05,H+.125,"z",o,16)}if(rt.includes("mudflaps"))for(let L of[1,-1])for(let W of[n.wheelF-s-.14,n.wheelR-s-.14])Wt(.3,.28,.015,Lt.black,L*(n.track/2),.26,W,o);if(i.id==="kaze"||i.id==="bulldog"){let L=new ut(new _e(.004,.006,.55,5),Lt.black);L.position.set(-u*.35,dt+.28,lt+.45),L.rotation.x=-.25,o.add(L)}i.id==="tundra"&&Wt(.8,.012,.14,c,0,A+.045,k-.2,o);{let L=new P(0,x[1][1]-x[0][1],x[1][0]-x[0][0]).normalize(),W=new P(0,-L.z,L.y).normalize(),ct=new P(0,x[1][1],x[1][0]).addScaledVector(L,-.08).addScaledVector(W,.012),ft=new ut(new Se(v(ct.y)*2*.95,.11),new ne({map:h_(r.banner||i.name+" RACING"),roughness:.5}));ft.position.copy(ct),ft.lookAt(ct.clone().add(W)),o.add(ft);let ht=i.id.charCodeAt(0)+i.id.charCodeAt(1),kt=(mt,q,et,St)=>{for(let At of[1,-1]){let jt=new ut(new Se(St,St/4),new ne({map:c_(ht+mt),transparent:!0,roughness:.45}));jt.position.set(At*(M(q,et)+.007),et,q),jt.rotation.y=At*Math.PI/2,o.add(jt)}};kt(0,n.wheelF-.02,s*2+.16+((xt=n.ride)!=null?xt:0),.5),kt(1,n.wheelR+.05,s*2+.17+((Tt=n.ride)!=null?Tt:0),.46),kt(2,(n.wheelF+n.wheelR)/2+.15,st+.17,.62);let Vt=new ne({color:14687774,roughness:.5}),ie=new ut(new kn(.06,.018,6,12),Vt);ie.position.set(-u*.3,vt+.02,H+.1),o.add(ie);let D=new ut(new kn(.06,.018,6,12),Vt);D.position.set(u*.34,st+.02,lt-.08),o.add(D);for(let mt of[1,-1]){let q=Wt(.22,.015,.12,Lt.carbon,mt*u*.42,vt+.12,H-.05,o);q.rotation.z=mt*.25}for(let mt of[1,-1])ke(.02,.02,Lt.chrome,mt*u*.3,n.upper[3][1]+.015,H-.25,"y",o,8)}Wt(u*.86,.05,h*.82,Lt.black,0,st+0,0,o);let Dt=[],wt=s+(($t=n.ride)!=null?$t:0),R=new ne({color:r.caliper,roughness:.4,metalness:.3});for(let[L,W,ct]of[[n.wheelF,1,!0],[n.wheelF,-1,!0],[n.wheelR,1,!1],[n.wheelR,-1,!1]]){let ft=new we;ft.position.set(W*n.track/2,wt,L);let ht=d_(s,ct?.25:.27,r,W);ft.add(ht);let kt=Wt(.07,s*.36,s*.26,R,-W*0,s*.3,-s*.3,ft);kt.rotation.x=.8,o.add(ft),Dt.push({pivot:ft,wheel:ht,front:ct,side:W,z:L})}let b=new ut(new Se(u*1.35,h*1.2),new Te({map:f_(),transparent:!0,depthWrite:!1,opacity:.8}));b.rotation.x=-Math.PI/2,b.position.y=.03,b.renderOrder=2;let B=new we,$=new we;B.add(o);for(let L of Dt)o.remove(L.pivot),$.add(L.pivot);let tt=pf(o);if(e.outline!==!1)for(let L of tt)(L.material===a||L.material===Lt.glass||L.material===Lt.trim||L.material===Lt.carbon)&&gf(L,L.material===a?0:.014);for(let L of Dt){let W=pf(L.wheel);if(e.outline!==!1)for(let ct of W)ct.material===Lt.tire&&gf(ct,.016);L.pivot.children.forEach(ct=>{ct.isMesh&&(ct.castShadow=!1)})}return $.add(B),$.add(b),{root:$,chassis:B,wheels:Dt,bodyMat:a,headMat:Z,tailMat:ot,spec:i}}function xf(i,t,e,n){var o;for(let a of i.wheels)a.wheel.rotation.x=t.wheelSpin,a.front&&(a.pivot.rotation.y=t.steer);let s=Math.max(-.05,Math.min(.05,t.ay*.005)),r=Math.max(-.025,Math.min(.025,-t.ax*.0025));i.chassis.rotation.z+=(s-i.chassis.rotation.z)*Math.min(1,e*4),i.chassis.rotation.x+=(r-i.chassis.rotation.x)*Math.min(1,e*3),i.tailMat.emissiveIntensity=n?3:(o=i._tailBase)!=null?o:.35}var fa=class{constructor(t,e,n,s,r,o){this.spec=t,this.model=e,this.fi=n,this.d=s,this.targetD=s,this.dv=0,this.v=0,this.skill=r,this.grip=o,this.top=(44+t.hp/24)*r,this.mu=(t.muFront+t.muRear)/2*o*.92,this.laneTimer=2+Math.random()*4,this.wheelSpin=0,this.steer=0,this.ahead=!0,this.h=0,this.pose={},this.bump=0}update(t,e,n,s){var d;let r=e.hw;if(!s){this.v=0,this.place(e,t);return}let o=this.top,a={};for(let m=3;m<=70;m+=3){e.sample(this.fi+m,a);let _=Math.abs(a.k);if(_<1e-4)continue;let p=Math.sqrt(this.mu*9.81/_),g=m*dn;o=Math.min(o,Math.sqrt(p*p+14*g))}let l=n.idx-this.fi;l>0&&((d=n.t)!=null?d:99)>12?o*=1+Math.min(.2,l/300):l<-120&&(o*=.86),this.bump>0&&(this.bump-=t,o*=.7);let c=5*(1-.65*Math.min(1,this.v/this.top));this.v+=ue(o-this.v,-9*t,c*t),this.v=Math.max(0,this.v),this.laneTimer-=t,this.laneTimer<=0&&(this.targetD=(Math.random()*2-1)*(r-1.8),this.laneTimer=3+Math.random()*5);let h=n.idx-this.fi;h>0&&h<10&&Math.abs(n.lat-this.d)<2.6&&(this.targetD=n.lat>0?n.lat-3.2:n.lat+3.2,this.targetD=ue(this.targetD,-(r-1.4),r-1.4)),e.sample(this.fi+10,a);let u=ue(a.k*400,-1,1)*(r-2),f=ue(this.targetD*.6+u*.4,-(r-1.3),r-1.3);this.dv+=(ue((f-this.d)*1.6,-3,3)-this.dv)*Math.min(1,t*3),this.d+=this.dv*t,this.d=ue(this.d,-(r-1.1),r-1.1),this.fi+=this.v*t/dn,this.place(e,t)}place(t,e){let n=t.sample(this.fi,this.pose);this.x=n.x+n.lx*this.d,this.z=n.z+n.lz*this.d,this.y=n.y;let s=Math.atan2(this.dv,Math.max(this.v,3));this.h=n.h+s*.9,this.steer=ue(n.k*2.6+s,-.5,.5),this.slope=n.slope,this.wheelSpin+=this.v/this.spec.wheelRadius*e;let r=this.model;r.root.position.set(this.x,this.y,this.z),r.root.rotation.set(-Math.atan(this.slope),this.h,0,"YXZ");for(let o of r.wheels)o.wheel.rotation.x=this.wheelSpin,o.front&&(o.pivot.rotation.y=this.steer);r.chassis.rotation.z=ue(n.k*this.v*this.v*.008,-.07,.07)}get vx(){return Math.sin(this.h)*this.v}get vz(){return Math.cos(this.h)*this.v}};var da=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this.musicOn=!0,this.musicVol=.3,this.sfxVol=.8}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-20,this.comp.knee.value=12,this.comp.ratio.value=4,this.comp.attack.value=.005,this.comp.release.value=.2,this.comp.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(this.comp),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?this.musicVol:0,this.musicBus.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let v=0;v<n;v++)s[v]=Math.random()*2-1;this.engGain=e.createGain(),this.engGain.gain.value=0,this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=1.4;let r=e.createWaveShaper(),o=new Float32Array(1024);for(let v=0;v<1024;v++){let S=v/512-1;o[v]=Math.tanh(S*1.6)}r.curve=o,this.oscs=[{o:e.createOscillator(),type:"sawtooth",mul:1,g:.38},{o:e.createOscillator(),type:"sine",mul:.5,g:.6},{o:e.createOscillator(),type:"triangle",mul:2,g:.16},{o:e.createOscillator(),type:"sawtooth",mul:1.005,g:.25}];let a=e.createGain();a.gain.value=.5;for(let v of this.oscs){v.o.type=v.type;let S=e.createGain();S.gain.value=v.g,v.o.connect(S),S.connect(a),v.o.start()}this.rumble=e.createOscillator(),this.rumble.frequency.value=18;let l=e.createGain();l.gain.value=.15,this.rumble.connect(l),l.connect(a.gain),this.rumble.start(),a.connect(r),r.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.sfx),this.tireGain=e.createGain(),this.tireGain.gain.value=0;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=3200,c.Q.value=.5;let h=e.createBiquadFilter();h.type="highpass",h.frequency.value=700,h.Q.value=.5,this.tireGain.connect(h),h.connect(c),c.connect(this.sfx);let u=e.createGain();u.gain.value=1,u.connect(this.tireGain),this.sqOscs=[{o:e.createOscillator(),type:"triangle",mul:1,g:.55},{o:e.createOscillator(),type:"sine",mul:1.5,g:.22},{o:e.createOscillator(),type:"triangle",mul:1.012,g:.3}];let f=e.createGain();f.gain.value=38;let d=e.createOscillator();d.frequency.value=6.3,d.start();let m=e.createOscillator();m.frequency.value=11.7,m.start();let _=e.createGain();_.gain.value=.6,d.connect(f),m.connect(_),_.connect(f);let p=this.loopNoise(),g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=18;let M=e.createGain();M.gain.value=3,p.connect(g),g.connect(M),M.connect(f);for(let v of this.sqOscs){v.o.type=v.type,v.o.frequency.value=1150*v.mul,f.connect(v.o.frequency);let S=e.createGain();S.gain.value=v.g*.5,v.o.connect(S),S.connect(u),v.o.start()}let x=this.loopNoise(),y=e.createBiquadFilter();y.type="lowpass",y.frequency.value=25;let A=e.createGain();A.gain.value=1.2,x.connect(y),y.connect(A),A.connect(u.gain),this.tireSrc=this.loopNoise();let T=e.createBiquadFilter();T.type="bandpass",T.frequency.value=2200,T.Q.value=.8;let w=e.createGain();w.gain.value=.35,this.tireSrc.connect(T),T.connect(w),w.connect(this.tireGain),this.gravelSrc=this.loopNoise();let I=e.createBiquadFilter();I.type="lowpass",I.frequency.value=900,this.gravelGain=e.createGain(),this.gravelGain.gain.value=0,this.gravelSrc.connect(I),I.connect(this.gravelGain),this.gravelGain.connect(this.sfx),this.windSrc=this.loopNoise();let O=e.createBiquadFilter();O.type="lowpass",O.frequency.value=420,this.windGain=e.createGain(),this.windGain.gain.value=0,this.windSrc.connect(O),O.connect(this.windGain),this.windGain.connect(this.sfx),this.startMusic()}loopNoise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setSfxVol(t){this.sfxVol=t,this.sfx&&(this.sfx.gain.value=t)}setMusicVol(t){this.musicVol=t,this.musicBus&&this.musicOn&&(this.musicBus.gain.value=t)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?this.musicVol:0,this.ctx.currentTime,.2)}update(t,e,n,s,r,o,a){if(!this.ctx)return;let l=this.ctx.currentTime;if(!a){this.engGain.gain.setTargetAtTime(0,l,.08),this.tireGain.gain.setTargetAtTime(0,l,.05),this.windGain.gain.setTargetAtTime(0,l,.1),this.gravelGain.gain.setTargetAtTime(0,l,.1);return}let c=t.rpm,h=c/60*(e.cylinders/2)*.5;for(let p of this.oscs)p.o.frequency.setTargetAtTime(h*p.mul,l,.02);this.rumble.frequency.setTargetAtTime(8+c/400,l,.05);let u=.35+.65*n;this.engFilter.frequency.setTargetAtTime(220+c*.22*u+n*500,l,.04);let f=Math.min(1,s)*(r?0:1)*Math.min(1,o/6),d=Math.max(0,(f-.15)/.85),m=d*d*(3-2*d);this.engGain.gain.setTargetAtTime((.1+.08*u)*(1-.22*m),l,.05),this.tireGain.gain.setTargetAtTime(m*.07,l,.18);let _=1e3+m*350+Math.min(1,o/50)*120;for(let p of this.sqOscs)p.o.frequency.setTargetAtTime(_*p.mul,l,.25);this.gravelGain.gain.setTargetAtTime(r?Math.min(.18,o/90):0,l,.08),this.windGain.gain.setTargetAtTime(Math.min(.12,(o/70)**2*.12),l,.15)}burst(t,e,n,s="lowpass"){if(!this.ctx)return;let r=this.ctx,o=r.currentTime,a=r.createBufferSource();a.buffer=this.noiseBuf;let l=r.createBiquadFilter();l.type=s,l.frequency.value=e;let c=r.createGain();c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(l),l.connect(c),c.connect(this.sfx),a.start(o,Math.random()),a.stop(o+t+.05)}tone(t,e,n=.2,s="sine",r=0,o){if(!this.ctx)return;let a=this.ctx,l=a.currentTime+r,c=a.createOscillator();c.type=s,c.frequency.value=t;let h=a.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(n,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(o||this.sfx),c.start(l),c.stop(l+e+.05)}crash(t){this.burst(.3,500+t*25,Math.min(.32,.1+t*.015)),this.tone(70,.22,Math.min(.22,t*.012),"sine")}shift(){this.burst(.06,2200,.05,"bandpass")}backfire(){this.burst(.1,280,.18)}click(){this.tone(880,.05,.05,"triangle")}checkpoint(){[660,880,1320].forEach((t,e)=>this.tone(t,.18,.09,"triangle",e*.09))}countdown(t){this.tone(t?1046:523,t?.5:.22,.1,"triangle")}score(){this.tone(1320,.12,.06,"triangle"),this.tone(1760,.14,.05,"triangle",.06)}gameOver(){[523,440,349,262].forEach((t,e)=>this.tone(t,.3,.08,"triangle",e*.18))}startMusic(){let t=this.ctx,e=112,n=60/e/4,s=[0,0,12,0,0,0,10,0,0,0,12,0,7,0,10,0],r=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],o=[0,1,2,1,0,2,1,2],a=0,l=t.currentTime+.1,c=u=>440*Math.pow(2,(u-69)/12),h=()=>{if(this.ctx){for(;l<t.currentTime+.2;){let u=Math.floor(a/16)%4,f=a%16,d=r[u];this.musicOn&&((s[f]!==0||f%4===0)&&this.tone(c(d[0]-24+(s[f]||0)),n*1.8,.14,"triangle",l-t.currentTime,this.musicBus),f%2===0&&this.tone(c(d[o[f/2%8]]+12),n*1.5,.05,"triangle",l-t.currentTime,this.musicBus),f%4===0&&this.kick(l),f%8===4&&this.snare(l),f%2===1&&this.hat(l)),l+=n,a++}this._musicTimer=setTimeout(h,60)}};h()}kick(t){let e=this.ctx,n=e.createOscillator(),s=e.createGain();n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(40,t+.15),s.gain.setValueAtTime(.35,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),n.connect(s),s.connect(this.musicBus),n.start(t),n.stop(t+.25)}snare(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=1500;let r=e.createGain();r.gain.setValueAtTime(.14,t),r.gain.exponentialRampToValueAtTime(.001,t+.15),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.2)}hat(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;let r=e.createGain();r.gain.setValueAtTime(.035,t),r.gain.exponentialRampToValueAtTime(.001,t+.04),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.06)}};var pa=class{constructor(){this.keys=new Set,this.events=[],this.steer=0,this.touch={left:!1,right:!1,gas:!1,brake:!1,hb:!1},this.touchActive=!1,window.addEventListener("keydown",t=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),!t.repeat){let e={KeyC:"camera",KeyR:"reset",Escape:"pause",KeyP:"pause",KeyE:"shiftUp",KeyQ:"shiftDown",KeyM:"mute",Enter:"enter"};e[t.code]&&this.events.push(e[t.code])}this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),this.gpPrev={}}bindTouch(t){t.querySelectorAll("[data-touch]").forEach(n=>{let s=n.dataset.touch,r=a=>{a.preventDefault(),this.touch[s]=!0,n.classList.add("on"),this.touchActive=!0},o=a=>{a.preventDefault(),this.touch[s]=!1,n.classList.remove("on")};n.addEventListener("touchstart",r,{passive:!1}),n.addEventListener("touchend",o,{passive:!1}),n.addEventListener("touchcancel",o,{passive:!1}),n.addEventListener("mousedown",r),n.addEventListener("mouseup",o),n.addEventListener("mouseleave",o)}),t.querySelectorAll("[data-tap]").forEach(n=>{n.addEventListener("touchstart",s=>{s.preventDefault(),this.events.push(n.dataset.tap)},{passive:!1}),n.addEventListener("click",()=>this.events.push(n.dataset.tap))})}down(...t){return t.some(e=>this.keys.has(e))}read(t,e){var f,d,m,_,p,g;let n=this.touch,s=this.down("KeyW","ArrowUp")||n.gas?1:0,r=this.down("KeyS","ArrowDown")||n.brake?1:0,o=this.down("Space")||n.hb?1:0,a=this.down("KeyA","ArrowLeft")||n.left,l=this.down("KeyD","ArrowRight")||n.right,c=(a?1:0)-(l?1:0),h=null,u=navigator.getGamepads?navigator.getGamepads():[];for(let M of u){if(!M)continue;let x=M.axes[0]||0;Math.abs(x)>.12&&(h=-x);let y=((f=M.buttons[7])==null?void 0:f.value)||0,A=((d=M.buttons[6])==null?void 0:d.value)||0;s=Math.max(s,y,(m=M.buttons[0])!=null&&m.pressed?1:0),r=Math.max(r,A,(_=M.buttons[2])!=null&&_.pressed?1:0),o=Math.max(o,(p=M.buttons[1])!=null&&p.pressed?1:0,(g=M.buttons[5])!=null&&g.pressed?1:0);let T=(w,I)=>{var v;let O=!!((v=M.buttons[w])!=null&&v.pressed);O&&!this.gpPrev[w]&&this.events.push(I),this.gpPrev[w]=O};T(3,"camera"),T(9,"pause"),T(8,"reset"),T(12,"shiftUp"),T(13,"shiftDown");break}if(h!==null)this.steer=h;else{let M=c===0?7:Math.sign(c)!==Math.sign(this.steer)&&this.steer!==0?9:4.2-Math.min(1.8,e/40),x=c-this.steer;this.steer+=Math.sign(x)*Math.min(Math.abs(x),M*t)}return{throttle:s,brake:r,handbrake:o,steer:this.steer}}takeEvents(){let t=this.events;return this.events=[],t}};function _f(i){let t=new we,e=new zn(900,32,16),n=new ve({side:Ce,depthWrite:!1,fog:!1,uniforms:{top:{value:new yt(i.sky.top)},horizon:{value:new yt(i.sky.horizon)},bottom:{value:new yt(i.sky.bottom)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.6),0.7)) : mix(horizon, bottom, min(1.0,-h*4.0));
      gl_FragColor = vec4(c,1.0); }`});t.add(new ut(e,n));let s=new P(...i.sun.dir).normalize(),r=document.createElement("canvas");r.width=r.height=128;let o=r.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);i.night?(a.addColorStop(0,"rgba(235,240,255,1)"),a.addColorStop(.25,"rgba(220,230,255,0.95)"),a.addColorStop(.3,"rgba(160,170,255,0.25)"),a.addColorStop(1,"rgba(0,0,0,0)")):(a.addColorStop(0,"rgba(255,255,240,1)"),a.addColorStop(.2,"rgba(255,250,220,0.95)"),a.addColorStop(.45,"rgba(255,220,160,0.25)"),a.addColorStop(1,"rgba(255,200,120,0)")),o.fillStyle=a,o.fillRect(0,0,128,128);let l=new Pn(r),c=new gr(new Ps({map:l,fog:!1,depthWrite:!1,transparent:!0}));if(c.position.copy(s).multiplyScalar(800),c.scale.setScalar(i.night?70:150),t.add(c),i.night){let u=new Float32Array(4500);for(let d=0;d<1500;d++){let m=Math.random()*Math.PI*2,_=Math.acos(Math.random()*.9+.1);u[d*3]=850*Math.sin(_)*Math.cos(m),u[d*3+1]=850*Math.cos(_),u[d*3+2]=850*Math.sin(_)*Math.sin(m)}let f=new he;f.setAttribute("position",new ae(u,3)),t.add(new Ls(f,new Is({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1})))}return t.renderOrder=-10,t}var Rr=class{constructor(t,e=16777215,n=260){this.max=n,this.pos=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n).fill(1),this.base=new Float32Array(n),this.op=new Float32Array(n);let s=new he;s.setAttribute("position",new ae(this.pos,3)),s.setAttribute("size",new ae(this.size,1)),s.setAttribute("alpha",new ae(this.alpha,1));let r=new ve({transparent:!0,depthWrite:!1,uniforms:{color:{value:new yt(e)},scale:{value:innerHeight*.5}},vertexShader:`attribute float size; attribute float alpha; varying float a; uniform float scale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
          // \u0432\u043E\u0437\u043B\u0435 \u043A\u0430\u043C\u0435\u0440\u044B \u0434\u044B\u043C \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0435 \u0437\u0430\u043B\u0435\u043F\u043B\u044F\u0435\u0442 \u044D\u043A\u0440\u0430\u043D
          a = alpha * smoothstep(3.0, 9.0, -mv.z);
          gl_PointSize = min(size * scale / -mv.z, 260.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 color; varying float a;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d)*4.0; if (r > 1.0) discard; gl_FragColor = vec4(color, a * (1.0 - r) * (1.0 - r)); }`});this.points=new Ls(s,r),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.next=0}emit(t,e,n,s,r,o,a=.5){let l=this.next;this.next=(this.next+1)%this.max,this.pos[l*3]=t+(Math.random()-.5)*.3,this.pos[l*3+1]=e+.35,this.pos[l*3+2]=n+(Math.random()-.5)*.3;let c=Math.random()*Math.PI*2,h=.8+Math.random()*1.4;this.vel[l*3]=s*.08+Math.cos(c)*h,this.vel[l*3+1]=.08+Math.random()*.15,this.vel[l*3+2]=r*.08+Math.sin(c)*h,this.life[l]=0,this.maxLife[l]=1.4+Math.random()*.8*o,this.base[l]=1.1+Math.random()*.5,this.op[l]=a}update(t){let e=1-t*1.5;for(let s=0;s<this.max;s++){if(this.op[s]===0)continue;this.life[s]+=t;let r=this.life[s]/this.maxLife[s];if(r>=1){this.op[s]=0,this.alpha[s]=0;continue}this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]+=this.vel[s*3+1]*t,this.pos[s*3+2]+=this.vel[s*3+2]*t,this.vel[s*3]*=e,this.vel[s*3+2]*=e,this.size[s]=this.base[s]*(1+r*2.4),this.alpha[s]=this.op[s]*(1-r)*Math.min(1,this.life[s]*8)}let n=this.points.geometry.attributes;n.position.needsUpdate=!0,n.size.needsUpdate=!0,n.alpha.needsUpdate=!0}clear(){this.op.fill(0),this.alpha.fill(0)}dispose(t){t.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()}},ma=class{constructor(t,e=2400,n=1118481,s=.55){this.max=e;let r=new he;this.pos=new Float32Array(e*4*3),this.alpha=new Float32Array(e*4);let o=new Uint32Array(e*6);for(let l=0;l<e;l++){let c=l*4;o.set([c,c+1,c+2,c+1,c+3,c+2],l*6)}r.setAttribute("position",new ae(this.pos,3)),r.setAttribute("alpha",new ae(this.alpha,1)),r.setIndex(new ae(o,1));let a=new ve({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{color:{value:new yt(n)},op:{value:s}},vertexShader:"attribute float alpha; varying float a; void main(){ a = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 color; uniform float op; varying float a; void main(){ gl_FragColor = vec4(color, a*op); }"});this.mesh=new ut(r,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.n=0,this.last=[null,null,null,null]}add(t,e,n,s,r,o,a){let l=this.last[t],c=.13,h={x:e,y:n+.045,z:s,lx:r,lz:o};if(l&&a>0&&(e-l.x)**2+(s-l.z)**2<4){if((e-l.x)**2+(s-l.z)**2<.09)return;let u=this.n%this.max;this.n++;let f=this.pos,d=u*12;f[d]=l.x+l.lx*c,f[d+1]=l.y,f[d+2]=l.z+l.lz*c,f[d+3]=l.x-l.lx*c,f[d+4]=l.y,f[d+5]=l.z-l.lz*c,f[d+6]=e+r*c,f[d+7]=h.y,f[d+8]=s+o*c,f[d+9]=e-r*c,f[d+10]=h.y,f[d+11]=s-o*c;let m=Math.min(1,a);this.alpha.set([m,m,m,m],u*4),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.alpha.needsUpdate=!0}this.last[t]=a>0?h:null}clear(){this.pos.fill(0),this.alpha.fill(0),this.mesh.geometry.attributes.position.needsUpdate=!0,this.last=[null,null,null,null]}},ga=class{constructor(t,e=2500){this.n=e;let n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*80,n[r*3+1]=Math.random()*40,n[r*3+2]=(Math.random()-.5)*80;let s=new he;s.setAttribute("position",new ae(n,3)),this.pts=new Ls(s,new Is({color:16777215,size:.18,transparent:!0,opacity:.9,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts)}update(t,e){let n=this.pts.geometry.attributes.position,s=n.array;for(let r=0;r<this.n;r++)s[r*3+1]-=t*(2+r%5*.4),s[r*3]+=Math.sin(r+performance.now()*5e-4)*t*.6,s[r*3+1]<-2&&(s[r*3+1]+=40);n.needsUpdate=!0,this.pts.position.set(0,e.position.y-15,0);for(let r=0;r<this.n;r++){let o=s[r*3],a=s[r*3+2];o-e.position.x>40?s[r*3]-=80:o-e.position.x<-40&&(s[r*3]+=80),a-e.position.z>40?s[r*3+2]-=80:a-e.position.z<-40&&(s[r*3+2]+=80)}}};function vf(i){let t=new Mi,e=new zn(50,32,16),n=new ve({side:Ce,uniforms:{top:{value:new yt(i.sky.top)},horizon:{value:new yt(i.sky.horizon).lerp(new yt(14541802),i.night?0:.45)},ground:{value:new yt(i.ground.far).lerp(new yt(5921374),.7).multiplyScalar(i.night?.25:.55)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.5),0.6)) : mix(horizon*0.8, ground, min(1.0,-h*6.0)); gl_FragColor = vec4(c,1.0); }`});t.add(new ut(e,n));let s=new P(...i.sun.dir).normalize(),r=new ut(new zn(i.night?2:4,16,8),new Te({color:new yt(i.sun.color).multiplyScalar(i.night?2:12)}));if(r.position.copy(s).multiplyScalar(40),t.add(r),i.night){let o=[16723622,2680831,16767370,8191823,16757611];for(let a=0;a<40;a++){let l=Math.random()*Math.PI*2,c=Math.random()*12-2,h=new ut(new ge(3+Math.random()*4,1+Math.random()*3,.5),new Te({color:new yt(o[a%o.length]).multiplyScalar(2.5)}));h.position.set(Math.cos(l)*40,c,Math.sin(l)*40),h.lookAt(0,c,0),t.add(h)}}else for(let o=0;o<12;o++){let a=Math.random()*Math.PI*2,l=8+Math.random()*20,c=new ut(new zn(4+Math.random()*5,8,6),new Te({color:new yt(16777215).multiplyScalar(1.4)}));c.scale.y=.35,c.position.set(Math.cos(a)*42,l,Math.sin(a)*42),t.add(c)}return t}function yf(i){var _;let n=document.createElement("canvas");n.width=2048,n.height=256;let s=n.getContext("2d"),r=(()=>{let p=12345;return()=>(p=p*16807%2147483647,p/2147483647)})(),o=new yt(i.fog.color),a=(p,g,M,x,y)=>{s.fillStyle=p,s.beginPath(),s.moveTo(0,256);let A=[r()*10,r()*10,r()*10];for(let T=0;T<=2048;T+=4){let w=T/2048*Math.PI*2,I=Math.sin(w*x+A[0])*.5+Math.sin(w*x*2.3+A[1])*.3+Math.sin(w*x*5.7+A[2])*.2;I+=(r()-.5)*y,s.lineTo(T,256-M-(I*.5+.5)*g)}s.lineTo(2048,256),s.closePath(),s.fill()},l=(p,g)=>"#"+new yt(p).lerp(o,g).getHexString(),c=(_=i.horizon)!=null?_:i.id;if(c==="hills")a(l(8032138,.55),80,14,3,.04),a(l(6257250,.4),45,4,6,.05);else if(c==="sea")a(l(7049082,.6),34,0,2,.02);else if(c==="desert")a(l(10115658,.55),110,20,3,.05),a(l(11556922,.35),70,8,5,.08);else if(c==="snow"){a(l(9413565,.5),190,20,4,.12),s.globalCompositeOperation="source-atop";let p=s.createLinearGradient(0,0,0,256);p.addColorStop(0,"#ffffff"),p.addColorStop(.45,"rgba(255,255,255,0.8)"),p.addColorStop(.6,"rgba(255,255,255,0)"),s.fillStyle=p,s.fillRect(0,0,2048,256),s.globalCompositeOperation="source-over",a(l(7307930,.35),90,6,7,.15)}else{let p=0;for(;p<2048;){let g=14+r()*40,M=30+Math.pow(r(),1.5)*190;s.fillStyle=l(1314854,.25),s.fillRect(p,256-M,g,M);for(let x=256-M+4;x<252;x+=6)for(let y=p+3;y<p+g-3;y+=5)r()<.18&&(s.fillStyle=["#ffd98a","#9fd8ff","#ff9ad5"][Math.floor(r()*3)],s.fillRect(y,x,2,2));r()<.15&&(s.fillStyle="#ff2020",s.fillRect(p+g/2-1,256-M-6,2,2)),p+=g+r()*6}}let h=new Pn(n);h.colorSpace=Ve,h.wrapS=Qn;let u=820,f=c==="snow"?230:c==="city"?190:140,d=new _e(u,u,f,96,1,!0),m=new ut(d,new Te({map:h,transparent:!0,side:Ce,fog:!1,depthWrite:!1}));return m.userData.h=f,m.renderOrder=-9,m}function Mf(i){let t=new we;if(i.night)return t;let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");for(let o=0;o<16;o++){let a=40+Math.random()*176,l=50+Math.random()*40,c=20+Math.random()*30,h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,256,128)}let s=new Pn(e),r=i.id==="desert"?16769736:16777215;for(let o=0;o<14;o++){let a=new gr(new Ps({map:s,color:r,fog:!1,depthWrite:!1,transparent:!0,opacity:.75})),l=Math.random()*Math.PI*2,c=450+Math.random()*300;a.position.set(Math.cos(l)*c,160+Math.random()*180,Math.sin(l)*c);let h=180+Math.random()*220;a.scale.set(h,h*.45,1),t.add(a)}return t}var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},p_=new Rs(-1,1,1,-1,0,1),dh=class extends he{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}},m_=new dh,Ti=class{constructor(t){this._mesh=new ut(m_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,p_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var _a=class extends mn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ei.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ti(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cr=class extends mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},va=class extends mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ya=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _a(xa),this.copyPass.material.blending=On,this.clock=new jo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cr!==void 0&&(o instanceof Cr?n=!0:o instanceof va&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ma=class extends mn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var bf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ks=class i extends mn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new tn(r,o,{type:Ln});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new tn(r,o,{type:Ln});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=bf;this.highPassUniforms=Ei.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=xa;this.copyUniforms=Ei.clone(h.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new Te,this.fsQuad=new Ti(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ks.BlurDirectionX=new nt(1,0);ks.BlurDirectionY=new nt(0,1);var Sf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ba=class extends mn{constructor(){super();let t=Sf;this.uniforms=Ei.clone(t.uniforms),this.material=new qo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wa=[{id:"race",name:"\u0413\u043E\u043D\u043A\u0430",desc:"\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0442\u0430\u0439\u043C\u0435\u0440. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E, \u043E\u0431\u0433\u043E\u043D\u044B \u0438 \u0434\u0440\u0438\u0444\u0442.",timer:50,rivals:5,bonus:i=>Math.max(22,40-i*2)},{id:"drift",name:"\u0414\u0440\u0438\u0444\u0442",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0438 \u0442\u0440\u0430\u0441\u0441\u0430. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0437\u0430\u043D\u043E\u0441, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0441\u0435\u0440\u0438\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0432\u0440\u0435\u043C\u044F.",timer:60,rivals:0,bonus:i=>Math.max(26,42-i*1.5)},{id:"free",name:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430",desc:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430 \u0438 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u043F\u043E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u0435 \u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0439 \u0434\u0440\u0438\u0444\u0442.",timer:0,rivals:3,bonus:()=>0}],Tf={id:"field",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D",desc:"",timer:0,rivals:0,bonus:()=>0},ri=1/240,g_=400,Yi={get(i,t){try{let e=localStorage.getItem("ed_"+i);return e?JSON.parse(e):t}catch{return t}},set(i,t){try{localStorage.setItem("ed_"+i,JSON.stringify(t))}catch{}}},xh="ontouchstart"in window||navigator.maxTouchPoints>0;xh&&document.body.classList.add("touch");var Rt=Object.assign({vol:.8,music:!0,assist:!0,manual:!1,quality:xh?0:1,camera:0,units:"kmh",fps:0,showFps:!1,sfxVol:.8,musicVol:.3,easy:!0,smoke:!0,outline:!0},Yi.get("settings",{}));Rt.handling||(Rt.handling=Rt.easy===!1?"real":"easy");Rt.easy=Rt.handling==="easy";var Me=Object.assign({car:0,colors:{},mode:0,map:0},Yi.get("sel",{})),Ri=Yi.get("records",{}),nn=()=>Yi.set("settings",Rt),Ta=()=>Yi.set("sel",Me),Mt=i=>document.getElementById(i),x_=Mt("game"),Mn=new Uo({canvas:x_,antialias:!0,powerPreference:"high-performance"});Mn.outputColorSpace=Ve;Mn.toneMapping=Er;Mn.shadowMap.type=kc;var si=new Mi,Ue=new Ze(62,1,.1,1600),Af=new Cs(Mn);si.environment=Af.fromScene(new ra,.04).texture;function __(){var t;let i=+Rt.quality;if(Mn.setPixelRatio([1,Math.min(devicePixelRatio,1.5),Math.min(devicePixelRatio,2)][i]),Mn.shadowMap.enabled=i>0,Q&&Q.sun){Q.sun.castShadow=i>0;let e=i===2?2048:1024;Q.sun.shadow.mapSize.x!==e&&(Q.sun.shadow.mapSize.set(e,e),(t=Q.sun.shadow.map)==null||t.dispose(),Q.sun.shadow.map=null)}_h()}var yn=null,Hs=null;function v_(){+Rt.quality==2?(yn||(yn=new ya(Mn),yn.addPass(new Ma(si,Ue)),Hs=new ks(new nt(innerWidth/2,innerHeight/2),.5,.45,.85),yn.addPass(Hs),yn.addPass(new ba)),yn.setPixelRatio(Mn.getPixelRatio()),yn.setSize(innerWidth,innerHeight),Q&&(Hs.strength=Q.map.night?.55:.18,Hs.threshold=Q.map.night?.72:.96,Hs.radius=.35)):yn&&(yn.dispose(),yn=null,Hs=null)}function _h(){let i=innerWidth,t=innerHeight;Mn.setSize(i,t,!1),v_(),Ue.aspect=i/t,vh(),Ue.updateProjectionMatrix()}var Gs={x:0,y:0};function vh(){let i=innerWidth,t=innerHeight;Gs.x||Gs.y?Ue.setViewOffset(i,t,-i*Gs.x,t*Gs.y,i,t):Ue.clearViewOffset()}addEventListener("resize",_h);var se=new da;se.setVolume(Rt.vol);se.musicOn=Rt.music;se.sfxVol=Rt.sfxVol;se.musicVol=Rt.musicVol;var Aa=new pa;Aa.bindTouch(Mt("touch"));addEventListener("pointerdown",()=>se.init(),{once:!1});addEventListener("keydown",()=>se.init(),{once:!0});var Sa=null,Q=null,Y=null,fe="loading";function y_(){Q&&(si.remove(Q.group),Q.group.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(t=>{var e;(e=t.map)==null||e.dispose(),t.dispose()})}),Q=null)}function Ra(i,t){var g,M,x;y_();let e=Os[i],n=new we;si.add(n),si.fog=new No(e.fog.color,e.fog.near,e.fog.far),si.background=new yt(e.fog.color),Sa&&Sa.dispose(),Sa=Af.fromScene(vf(e),.02).texture,si.environment=Sa,si.environmentIntensity=e.night?.7:1,Mn.toneMappingExposure=e.night?1.15:1;let s=new $o(e.hemi.sky,e.hemi.ground,e.hemi.intensity);n.add(s);let r=new Qo(e.sun.color,e.sun.intensity),o=new P(...e.sun.dir).normalize();r.shadow.camera.left=-32,r.shadow.camera.right=32,r.shadow.camera.top=32,r.shadow.camera.bottom=-32,r.shadow.camera.near=1,r.shadow.camera.far=220,r.shadow.bias=-4e-4,r.shadow.normalBias=.03,n.add(r),n.add(r.target);let a=_f(e);n.add(a);let l=yf(e);l.position.y=l.userData.h/2-45,a.add(l),a.add(Mf(e));let c=e.field?new ha(n,e,t,+Rt.quality):new ca(n,e,t,+Rt.quality),h=new ut(new Se(5e3,5e3),new Le({color:e.ground.far}));h.rotation.x=-Math.PI/2,n.add(h);let u=(g=e.smoke)!=null?g:{desert:15130064,snow:16777215,city:12105928}[e.id],f=new Rr(n,u,Rt.quality>0?90:50),d=new Rr(n,(M=e.dust)!=null?M:{desert:13606764,snow:16054527,city:7829375}[e.id],40),m=(x=e.skid)!=null?x:e.id==="snow"?8226968:789516,_=new ma(n,Rt.quality>0?3e3:1200,m,m===789516?.6:.4),p=e.weather==="snow"?new ga(n,Rt.quality>0?2600:900):null;Q={map:e,mapIdx:i,group:n,hemi:s,sun:r,sunDir:o,sky:a,track:c,farPlane:h,smoke:f,dust:d,skids:_,snow:p,rivals:[],player:null},__(),yh(6,-2.8)}function M_(i){var t;return i.colors[(t=Me.colors[i.id])!=null?t:0]}function yh(i,t){let e=ni[Me.car];Q.player&&Q.group.remove(Q.player.model.root);let n=fh(e,M_(e),{night:Q.map.night,outline:Rt.outline});n._tailBase=Q.map.night?1.2:.35,Q.group.add(n.root);let s=new oa(e),r=Q.track.P(i);if(s.reset(r.x+r.lx*t,r.z+r.lz*t,r.h),s.idx=i,s.lat=t,s.roadY=r.y,s.slope=0,s.roll=0,Q.track.isField&&(Q.track.target=s,s.odo=0),Q.map.night){let o=new Ko(16773590,40,100,.5,.6,1.4);o.position.set(0,.8,2),o.target.position.set(0,0,25),n.root.add(o),n.root.add(o.target)}Q.player={veh:s,model:n},Mh(0)}function Rf(){var s,r;let{veh:i}=Q.player,t=Y&&i.px!==void 0?ue(Y.acc/ri,0,1):1,e=(o,a)=>o===void 0?a:o+(a-o)*t,n=i.h-((s=i.ph)!=null?s:i.h);return{x:e(i.px,i.x),z:e(i.pz,i.z),h:((r=i.ph)!=null?r:i.h)+n*t,y:e(i.pY,i.roadY)}}function Mh(i){let{veh:t,model:e}=Q.player,n=Rf();e.root.position.set(n.x,n.y+.03,n.z),e.root.rotation.set(-Math.atan(t.slope||0),n.h,Math.atan(t.roll||0),"YXZ"),xf(e,t,i||.016,Y&&Y.braking)}function b_(i){let t=[[6,2.8],[14,-2.8],[14,2.8],[22,-2.8],[22,2.8],[30,0]];for(let e=0;e<i;e++){let n=ni[(Me.car+1+e)%ni.length],s=n.colors[(e*2+1)%n.colors.length],r=fh(n,s,{night:Q.map.night,outline:Rt.outline});r._tailBase=Q.map.night?1.2:.35,Q.group.add(r.root);let o=new fa(n,r,t[e][0],t[e][1],.82+Math.random()*.13,Q.map.grip);o.ghostMats=[],o.outlines=[];let a=new Map;r.root.traverse(l=>{if(l.isMesh){if(l.material.isShaderMaterial){o.outlines.push(l);return}if(!a.has(l.material)){let c=l.material.clone();c.userData.baseOp=l.material.transparent?l.material.opacity:1,c.transparent=!0,a.set(l.material,c),o.ghostMats.push(c)}l.material=a.get(l.material)}}),o.ahead=t[e][0]>6||t[e][0]===6&&!1,o.place(Q.track,0),Q.rivals.push(o)}}var Ht={mode:+Rt.camera,h:0,pos:new P,look:new P,shake:0,fov:62,cineT:0,cineA:0,orbit:0},S_=["\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438, \u0434\u0430\u043B\u044C\u043D\u044F\u044F","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441 \u043A\u0430\u043F\u043E\u0442\u0430","\u041A\u0430\u043C\u0435\u0440\u0430: \u043A\u0438\u043D\u043E"],Ws=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e};function bh(i,t=!1){let{veh:e}=Q.player,n=Rf(),s={x:n.x,z:n.z,h:n.h,roadY:n.y,speed:e.speed,u:e.u,vx:e.vx,vz:e.vz,spec:e.spec,slope:e.slope},r=s.speed,o=Math.sin(s.h),a=Math.cos(s.h),l=s.roadY,c=ue((s.u-3)/8,0,1)*.45,h=s.h+ue(Ws(Math.atan2(s.vx,s.vz),s.h),-.7,.7)*c;t&&(Ht.h=h),Ht.h+=Ws(h,Ht.h)*Math.min(1,i*6);let u=t?1:1-Math.exp(-i*7),f=60+Math.min(9,r*.12),d=new P,m=new P;if(Ht.mode===0||Ht.mode===1){let _=Ht.mode===0?5.4:8.2,p=Ht.mode===0?1.9:3;(t||Ht.y===void 0)&&(Ht.y=l+p),Ht.y+=(l+p-Ht.y)*Math.min(1,i*6),d.set(s.x-Math.sin(Ht.h)*_,Math.max(Ht.y,l+1),s.z-Math.cos(Ht.h)*_),Q.track.isField&&(d.y=Math.max(d.y,Q.track.heightAt(d.x,d.z)+.9)),m.set(s.x+Math.sin(Ht.h)*2.5,l+1.05,s.z+Math.cos(Ht.h)*2.5),Ht.pos.copy(d),Ht.look.copy(m)}else if(Ht.mode===2){let _=s.spec.body;d.set(s.x+o*(_.cabin[0][0]+.25),l+_.cabin[0][1]+.55,s.z+a*(_.cabin[0][0]+.25)),m.set(s.x+o*30,l+1.3+(s.slope||0)*30,s.z+a*30),Ht.pos.copy(d),Ht.look.copy(m),f+=6}else{Ht.cineT-=i,(Ht.cineT<=0||t)&&(Ht.cineT=4+Math.random()*3,Ht.cineA=(Math.random()*2-1)*2.4,Ht.cineD=6+Math.random()*6,Ht.cineH=.8+Math.random()*3);let _=s.h+Math.PI+Ht.cineA;d.set(s.x+Math.sin(_)*Ht.cineD,l+Ht.cineH,s.z+Math.cos(_)*Ht.cineD),Ht.pos.lerp(d,1-Math.exp(-i*2)),m.set(s.x,l+.8,s.z),Ht.look.lerp(m,1-Math.exp(-i*12)),f=55}Ht.fov+=(f-Ht.fov)*Math.min(1,i*1.5),Ue.fov=Ht.fov,Ue.updateProjectionMatrix(),Ue.position.copy(Ht.pos),Ht.shake>.001&&(Ue.position.x+=(Math.random()-.5)*Ht.shake*.5,Ue.position.y+=(Math.random()-.5)*Ht.shake*.5,Ht.shake*=Math.exp(-i*6)),Ue.lookAt(Ht.look)}function E_(i,t){let{veh:e}=Q.player;Ht.orbit+=i*.18;let n=t?6.2:7.5,s=e.h+(t?.75:Math.PI*.75)+Math.sin(Ht.orbit)*(t?.6:.9);Ue.position.set(e.x+Math.sin(s)*n,e.roadY+(t?1.6:2.2),e.z+Math.cos(s)*n),Ue.fov=50,Ue.updateProjectionMatrix(),Ue.lookAt(e.x,e.roadY+.7,e.z)}function w_(){return Os[Me.map].field?Tf:wa[Me.mode]}function T_(){let i=w_();Y={mode:i,time:i.timer,score:0,dist:0,startS:Q.track.P(6).s,driftTotal:0,overtakes:0,cpCount:0,nextCp:g_,maxSpeed:0,bestDrift:0,hits:0,cd:3.6,cdShown:4,started:!1,over:!1,braking:!1,drift:{active:!1,pts:0,mult:1,time:0,idle:0,angle:0},driftShowT:0,elapsed:0,acc:0}}function Pr(){se.init(),Ra(Me.map,Math.random()*1e6|0),T_(),b_(Y.mode.rivals),Ht.mode=+Rt.camera,fe="countdown",oi(null),Mt("hud").classList.remove("hidden"),xh&&Mt("touch").classList.remove("hidden"),Mt("hud-mode").textContent=`${Y.mode.name} \xB7 ${Q.map.name}`,Gs={x:0,y:0},vh(),bh(.016,!0)}function Xs(i,t=1.6,e="#fff"){let n=Mt("hud-msg");n.textContent=i,n.style.color=e,n.classList.add("show"),clearTimeout(Xs._t),Xs._t=setTimeout(()=>n.classList.remove("show"),t*1e3)}var Ef=0;function A_(i){let t=performance.now();return t-Ef<330?!1:(Ef=t,se.crash(Math.min(i,25)),Ht.shake=i>8?Math.min(.25,i/60):0,!0)}function ph(i){if(A_(i)&&(Y.hits++,Y.drift.active&&Y.drift.pts>0&&i>3)){let t=Mt("drift-pts");t.textContent=Math.floor(Y.drift.pts),t.className="drift-pts lost",Mt("drift-info").textContent="\u0423\u0414\u0410\u0420 \u2014 \u0441\u0435\u0440\u0438\u044F \u0441\u0433\u043E\u0440\u0435\u043B\u0430",Y.driftShowT=1.3,Y.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}}function R_(i){let{veh:t}=Q.player;t.px=t.x,t.pz=t.z,t.ph=t.h,t.pY=t.roadY;let e=Q.track,n=Rt.handling==="easy",s=t.step(ri,i,n?{grip:Q.map.grip*1.12,assist:Rt.assist?1.15:0,manual:Rt.manual,easy:!0}:{grip:Q.map.grip,assist:Rt.assist?.45:0,manual:Rt.manual,easy:!1,real:!0});if(s.shifted&&(se.shift(),s.shifted>0&&i.throttle>.5&&Math.random()<.35&&se.backfire()),i.shiftUp=i.shiftDown=!1,e.isField){C_(t,e);return}let r=e.project(t.x,t.z,t.idx);t.idx=r.idx,t.lat=r.lat,t.roadY=r.y,t.slope=r.slope,t.offroad=Math.abs(r.lat)>e.hw+.3&&Math.abs(r.k)<1/170;let o=t.spec.body,a=t.h-r.h,l=Math.abs(Math.cos(a))*o.W/2+Math.abs(Math.sin(a))*o.L/2,c=e.wall-.1-l,h=Math.sign(r.lat);if(n&&t.speed>3){let u=c-2.2,f=Math.abs(r.lat)-u;if(f>0){let d=ue(f/2.2,0,1),m=t.vx*r.lx+t.vz*r.lz;if(m*h>0){let g=m*Math.min(1,d*d*9*ri);t.vx-=r.lx*g,t.vz-=r.lz*g}let _=Ws(r.h,t.h),p=Math.cos(_)>0?_:Ws(r.h+Math.PI,t.h);Math.abs(t.beta)<.7&&(t.r+=p*d*5*ri*Math.min(1,t.speed/15))}}if(Math.abs(r.lat)>c){let u=t.collideWall(-h*r.lx,-h*r.lz,Math.abs(r.lat)-c,n?.08:.25);if(n){let f=Ws(r.h,t.h),d=Math.cos(f)>0?f:Ws(r.h+Math.PI,t.h);t.h+=d*.08,t.r*=.6}u>(n?3.5:1.5)&&Y&&ph(u)}}function C_(i,t){i.idx=6,i.lat=0,i.offroad=!1;let e=Math.sin(i.h),n=Math.cos(i.h);i.roadY=t.heightAt(i.x,i.z);let[s,r]=t.grad(i.x,i.z);i.slope=s*e+r*n,i.roll=(s*n-r*e)*.8,i.vx-=9.81*s*.85*ri,i.vz-=9.81*r*.85*ri,Y&&(i.odo=(i.odo||0)+i.speed*ri);let o=i.spec.body;for(let a of t.collidersNear(i.x,i.z)){let l=i.x-a.x,c=i.z-a.z,h=Math.hypot(l,c),u=a.r+o.W*.55;if(h<u&&h>1e-4){let f=i.collideWall(l/h,c/h,u-h,.15);f>3&&Y&&ph(f)}}if(t.f.shore!==void 0&&i.x<t.f.shore-18){let a=i.collideWall(1,0,t.f.shore-18-i.x,.1);a>4&&Y&&ph(a)}}function P_(){var t,e;let{veh:i}=Q.player;for(let n of Q.rivals){let s=Math.hypot(n.x-i.x,n.z-i.z),r=ue((s-4)/14,.3,1);if(!(Math.abs(r-((t=n.op)!=null?t:1))<.02)){n.op=r;for(let o of n.ghostMats)o.opacity=r*((e=o.userData.baseOp)!=null?e:1);for(let o of n.outlines)o.visible=r>.95}}}function I_(i){let{veh:t,model:e}=Q.player,n=Q.track,s=Y._events||[],r=fe==="race",o=r?Aa.read(i,t.speed):{throttle:0,brake:0,steer:0,handbrake:0};if(fe==="over"&&(o={throttle:0,brake:.35,steer:0,handbrake:0}),fe==="countdown"){let a=Aa.read(i,0);Y.cd-=i;let l=Math.ceil(Y.cd-.6);l!==Y.cdShown&&(Y.cdShown=l,Mt("countdown").textContent=l>0?l:"\u0421\u0422\u0410\u0420\u0422!",se.countdown(l<=0)),t.rpm+=(t.spec.idle+a.throttle*t.spec.redline*.75-t.rpm)*Math.min(1,i*6),Y.cd<=.6&&(fe="race",Y.started=!0,setTimeout(()=>{Mt("countdown").textContent=""},700))}else{for(let l of s)l==="shiftUp"&&(o.shiftUp=!0),l==="shiftDown"&&(o.shiftDown=!0);Y.acc+=i;let a=0;for(;Y.acc>=ri&&a<24;)Y.acc-=ri,R_(o),a++;a===24&&(Y.acc=0)}Y.braking=o.brake>.1&&t.u>.5;for(let a of Q.rivals)a.update(i,n,{idx:t.idx,lat:t.lat,t:Y.elapsed},Y.started);P_(),n.update(t.idx);for(let a of Q.rivals){let l=a.fi>t.idx;r&&a.ahead&&!l&&Y.mode.id==="race"&&(Y.overtakes++,Xs("\u041E\u0411\u0413\u041E\u041D!  +300",1.2,"#7cff4f"),se.score()),a.ahead=l,t.idx-a.fi>170&&(a.fi=t.idx+180+Math.random()*140,a.v=a.top*.6,a.d=(Math.random()*2-1)*(n.hw-2),a.targetD=a.d,a.ahead=!0,n.ensure(Math.ceil(a.fi)+80))}Mh(i),N_(i,o),fe==="race"&&L_(i,t),se.update(t,t.spec,fe==="countdown"?Math.max(0,(t.rpm-t.spec.idle)/t.spec.redline):o.throttle,Math.max(ue((Math.abs(t.beta)-.15)*2.2,0,1),t.lockR>.5&&t.speed>8?.6:0),t.offroad,t.speed,fe!=="paused"),bh(i),k_(i)}function L_(i,t){Y.elapsed+=i;let e=t.speed,n=e*3.6;Y.maxSpeed=Math.max(Y.maxSpeed,n),Y.dist=Q.track.isField?t.odo||0:Math.max(Y.dist,Q.track.P(t.idx).s-Y.startS);let s=Math.abs(t.beta)*57.3,r=Y.drift;if(e>8.5&&s>11&&s<110&&t.u>2&&!t.offroad)r.active=!0,r.idle=0,r.time+=i,r.mult=Math.min(5,1+Math.floor(r.time/2.5)),r.pts+=s*e*i*.35*r.mult,r.angle=s;else if(r.active&&(r.idle+=i,r.idle>(t.offroad?.3:1.1))){let a=Math.floor(r.pts);if(a>30){Y.driftTotal+=a,Y.bestDrift=Math.max(Y.bestDrift,a),Y.mode.id==="drift"&&(Y.time+=Math.min(8,a/1200));let l=Mt("drift-pts");l.textContent="+"+a,l.className="drift-pts banked",Mt("drift-info").textContent=a>5e3?"\u041B\u0415\u0413\u0415\u041D\u0414\u0410\u0420\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":a>2e3?"\u041E\u0422\u041B\u0418\u0427\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":"\u0414\u0420\u0418\u0424\u0422 \u0417\u0410\u0421\u0427\u0418\u0422\u0410\u041D",Y.driftShowT=1.3,se.score()}Y.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}if(t.idx>=Y.nextCp){if(Y.cpCount++,Y.nextCp+=ch,Y.mode.timer){let a=Math.round(Y.mode.bonus(Y.cpCount-1));Y.time+=a,Xs(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422  +${a} \u0441`,1.8,"#ffcc00")}else Xs(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422 ${Y.cpCount}`,1.5,"#ffcc00");se.checkpoint()}Y.mode.id==="race"?Y.score=Math.floor(Y.dist)+Y.overtakes*300+Math.floor(Y.driftTotal/4):Y.mode.id==="drift"||Y.mode.id==="field"?Y.score=Y.driftTotal:Y.score=Math.floor(Y.dist),Y.mode.timer&&(Y.time-=i,Y.time<=0&&(Y.time=0,D_()))}function D_(){Y.drift.active&&Y.drift.pts>30&&(Y.driftTotal+=Math.floor(Y.drift.pts),Y.bestDrift=Math.max(Y.bestDrift,Math.floor(Y.drift.pts)),Y.mode.id==="drift"&&(Y.score=Y.driftTotal)),fe="over",se.gameOver();let i=`${Y.mode.id}_${Q.map.id}`,t=Ri[i],e=Y.score>0&&(!t||Y.score>t.score);e&&(Ri[i]={score:Y.score,dist:Math.floor(Y.dist),drift:Y.bestDrift,car:ni[Me.car].name,date:new Date().toLocaleDateString("ru-RU")},Yi.set("records",Ri)),Mt("over-title").textContent=Y.mode.timer?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E!":"\u0417\u0430\u0435\u0437\u0434 \u043E\u043A\u043E\u043D\u0447\u0435\u043D",Mt("over-record").classList.toggle("show",e&&Y.score>0);let n=[["\u041E\u0447\u043A\u0438",Y.score.toLocaleString("ru-RU")],["\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F",`${(Y.dist/1e3).toFixed(2)} \u043A\u043C`],["\u041C\u0430\u043A\u0441. \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",U_(Y.maxSpeed)],["\u041B\u0443\u0447\u0448\u0438\u0439 \u0434\u0440\u0438\u0444\u0442",Y.bestDrift.toLocaleString("ru-RU")],["\u0412\u0441\u0435 \u043E\u0447\u043A\u0438 \u0434\u0440\u0438\u0444\u0442\u0430",Y.driftTotal.toLocaleString("ru-RU")],["\u0427\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B",Y.cpCount]];Y.mode.id==="race"&&n.splice(4,0,["\u041E\u0431\u0433\u043E\u043D\u044B",Y.overtakes]),n.push(["\u0423\u0434\u0430\u0440\u044B",Y.hits],["\u0412\u0440\u0435\u043C\u044F \u0432 \u0437\u0430\u0435\u0437\u0434\u0435",la(Y.elapsed)]),t&&!e&&n.push(["\u0420\u0435\u043A\u043E\u0440\u0434",t.score.toLocaleString("ru-RU")]),Mt("over-stats").innerHTML=n.map(([s,r])=>`<span>${s}</span><b>${r}</b>`).join(""),Mt("touch").classList.add("hidden"),setTimeout(()=>{fe==="over"&&oi("over")},900),Ht.mode=3,Ht.cineT=0}var U_=i=>Rt.units==="mph"?`${Math.round(i/1.609)} mph`:`${Math.round(i)} \u043A\u043C/\u0447`;function N_(i,t){let{veh:e}=Q.player,n=e.spec.body,s=e.speed,r=Math.sin(e.h),o=Math.cos(e.h),a=o,l=-r,c=Math.max(e.rearSlide*(Math.abs(e.beta)>.1||e.lockR>0?1:.4),e.spinR),h=(d,m)=>[e.x+r*d+a*m,e.z+o*d+l*m],u=+Rt.quality;for(let d of[1,-1]){let[m,_]=h(n.wheelR,d*n.track/2);Rt.smoke&&c>.55&&s>8&&!e.offroad&&Math.abs(e.beta)>.35&&Math.random()<(u>0?2:1)*i*Math.min(1,(Math.abs(e.beta)-.3)*3)&&Q.smoke.emit(m,e.roadY,_,e.vx,e.vz,c,Q.map.night?.1:.15),Rt.smoke&&e.offroad&&s>4&&Math.random()<5*i&&Q.dust.emit(m,e.roadY,_,e.vx,e.vz,1,.55);let p=Q.track.isField;Q.skids.add(d>0?0:1,m,p?Q.track.heightAt(m,_):e.roadY,_,a,l,!e.offroad&&c>.42?Math.min(1,(c-.3)*1.6):0);let[g,M]=h(n.wheelF,d*n.track/2);Q.skids.add(d>0?2:3,g,p?Q.track.heightAt(g,M):e.roadY,M,a,l,!e.offroad&&(e.frontSlide>.85||t.brake>.5&&s>15&&e.u>0&&e.lockR>0)?.6:0)}for(let d of Q.rivals);Q.smoke.update(i),Q.dust.update(i),Q.snow&&Q.snow.update(i,Ue);let f=Q.sunDir;Q.sun.position.set(e.x+f.x*90,e.roadY+f.y*90,e.z+f.z*90),Q.sun.target.position.set(e.x,e.roadY,e.z),Q.sky.position.copy(Ue.position),Q.farPlane.position.set(e.x,e.roadY-14,e.z)}var F_=Mt("gauge").getContext("2d"),B_=Mt("minimap").getContext("2d"),wf={};function Vs(i,t){wf[i]!==t&&(wf[i]=t,Mt(i).textContent=t)}function O_(i){let t=F_,e=220,n=110,s=118,r=92;t.clearRect(0,0,e,e);let o=Math.PI*.75,a=Math.PI*2.25;t.lineCap="round",t.beginPath(),t.arc(n,s,r,o,a),t.strokeStyle="rgba(0,0,0,0.45)",t.lineWidth=16,t.stroke();let l=ue(i.rpm/i.spec.redline,0,1);t.beginPath(),t.arc(n,s,r,o,o+(a-o)*l),t.strokeStyle=l>.95?"#ff3b3b":l>.85?"#ffb300":"#ffcc00",t.lineWidth=10,t.stroke();for(let u=0;u<=10;u++){let f=o+(a-o)*u/10;t.beginPath(),t.moveTo(n+Math.cos(f)*(r-16),s+Math.sin(f)*(r-16)),t.lineTo(n+Math.cos(f)*(r-24),s+Math.sin(f)*(r-24)),t.strokeStyle=u>=9?"#ff5050":"rgba(255,255,255,0.7)",t.lineWidth=2,t.stroke()}let c=i.kmh,h=Rt.units==="mph"?c/1.609:c;t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font="italic 900 50px Segoe UI, Arial",t.fillText(Math.round(h),n,s-4),t.font="600 13px Segoe UI, Arial",t.fillStyle="rgba(255,255,255,0.75)",t.fillText(Rt.units==="mph"?"MPH":"\u041A\u041C/\u0427",n,s+26),t.font="900 26px Segoe UI, Arial",t.fillStyle="#ffcc00",t.fillText(i.gear===-1?"R":i.speed<.5&&i.gear===1?"N":String(i.gear),n,s+58)}function z_(i){let t=B_,e=170,n=85,s=112;t.clearRect(0,0,e,e),t.save(),t.beginPath(),t.arc(85,85,84,0,Math.PI*2),t.clip();let r=.2,o=Math.sin(i.h),a=Math.cos(i.h),l=(h,u)=>{let f=h-i.x,d=u-i.z,m=f*o+d*a,_=f*a-d*o;return[n-_*r,s-m*r]},c=Q.track;if(c.isField){t.strokeStyle="rgba(255,255,255,0.18)",t.lineWidth=1;let h=Math.floor((i.x-450)/32)*32,u=Math.floor((i.z-450)/32)*32;for(let f=0;f<30;f++){let[d,m]=l(h+f*32,i.z-450),[_,p]=l(h+f*32,i.z+450);t.beginPath(),t.moveTo(d,m),t.lineTo(_,p),t.stroke(),[d,m]=l(i.x-450,u+f*32),[_,p]=l(i.x+450,u+f*32),t.beginPath(),t.moveTo(d,m),t.lineTo(_,p),t.stroke()}t.fillStyle="rgba(255,255,255,0.8)";for(let f of c.collidersNear(i.x,i.z)){let[d,m]=l(f.x,f.z);t.beginPath(),t.arc(d,m,2.5,0,Math.PI*2),t.fill()}if(c.f.shore!==void 0){let[f,d]=l(c.f.shore-18,i.z-600),[m,_]=l(c.f.shore-18,i.z+600);t.strokeStyle="#4bb8ff",t.lineWidth=4,t.beginPath(),t.moveTo(f,d),t.lineTo(m,_),t.stroke()}t.restore(),t.fillStyle="#4bd2ff",t.beginPath(),t.moveTo(n,s-8),t.lineTo(n-6,s+6),t.lineTo(n+6,s+6),t.closePath(),t.fill();return}t.lineCap="round",t.lineJoin="round",t.beginPath();for(let h=Math.max(c.base,Math.floor(i.idx)-60);h<Math.min(c.lastIdx,i.idx+320);h+=3){let u=c.P(h),[f,d]=l(u.x,u.z);h===Math.max(c.base,Math.floor(i.idx)-60)?t.moveTo(f,d):t.lineTo(f,d)}if(t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=6,t.stroke(),Y&&Y.nextCp<c.lastIdx){let h=c.P(Y.nextCp),[u,f]=l(h.x,h.z);t.fillStyle="#ffcc00",t.beginPath(),t.arc(u,f,5,0,Math.PI*2),t.fill()}for(let h of Q.rivals){let[u,f]=l(h.x,h.z);t.fillStyle="#ff4b4b",t.beginPath(),t.arc(u,f,4,0,Math.PI*2),t.fill()}t.restore(),t.fillStyle="#4bd2ff",t.beginPath(),t.moveTo(n,s-8),t.lineTo(n-6,s+6),t.lineTo(n+6,s+6),t.closePath(),t.fill()}function k_(i){let{veh:t}=Q.player;if(O_(t),z_(t),!Y)return;Y.mode.timer?(Vs("hud-timer",la(Y.time)),Mt("hud-timer").classList.toggle("warn",Y.time<10)):Vs("hud-timer",la(Y.elapsed));let e=Math.max(0,(Y.nextCp-t.idx)*dn);Vs("hud-next",Q.track.isField?"\u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \xB7 \u0434\u0440\u0438\u0444\u0442":`\u0434\u043E \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430 ${Math.round(e)} \u043C`),Vs("hud-score",Y.score.toLocaleString("ru-RU")),Vs("hud-dist",`${(Y.dist/1e3).toFixed(2)} \u043A\u043C${Y.mode.id==="race"?` \xB7 \u043E\u0431\u0433\u043E\u043D\u043E\u0432: ${Y.overtakes}`:""}`);let n=Ri[`${Y.mode.id}_${Q.map.id}`];Vs("hud-sub",n?`\u0440\u0435\u043A\u043E\u0440\u0434: ${n.score.toLocaleString("ru-RU")}`:"\u0440\u0435\u043A\u043E\u0440\u0434\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442");let s=Mt("hud-drift");if(Y.drift.active&&Y.drift.pts>5){s.classList.add("show");let r=Mt("drift-pts");r.className="drift-pts",r.textContent=Math.floor(Y.drift.pts).toLocaleString("ru-RU"),Mt("drift-info").textContent=`x${Y.drift.mult}  \xB7  \u0443\u0433\u043E\u043B ${Math.round(Y.drift.angle)}\xB0`}else Y.driftShowT>0?(Y.driftShowT-=i,s.classList.add("show")):s.classList.remove("show")}var H_=["main","setup","garage","records","settings","controls","pause","over"];function oi(i){for(let t of H_)Mt("menu-"+t).classList.toggle("show",t===i);Mt("loading").classList.remove("show"),["main","setup","garage","records","settings","controls"].includes(i)&&(fe!=="menu"&&Cf(),fe="menu",Mt("hud").classList.add("hidden"),Mt("touch").classList.add("hidden"),Gs=i==="setup"?{x:0,y:.18}:{x:innerWidth>800?.16:0,y:innerWidth>800?0:.2},vh(),Ue.updateProjectionMatrix()),i==="setup"&&mh(),i==="garage"&&Eh(),i==="records"&&If(),i==="settings"&&V_(),Sh=i}var Sh="main";function Cf(){Y=null,Mt("countdown").textContent="",Ra(Me.map,7)}document.querySelectorAll("[data-go]").forEach(i=>i.addEventListener("click",()=>{se.init(),se.click(),oi(i.dataset.go)}));function mh(){let i=!!Os[Me.map].field;Mt("mode-cards").innerHTML=(i?'<div class="card sel"><b>\u041F\u043E\u043B\u0438\u0433\u043E\u043D</b><small>\u041D\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0435 \u043D\u0435\u0442 \u0442\u0440\u0430\u0441\u0441\u044B: \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430, \u043E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0440\u0438\u0444\u0442.</small></div>':"")+wa.map((t,e)=>`<div class="card ${e===Me.mode&&!i?"sel":""}" ${i?'style="opacity:.4"':""} data-mode="${e}"><b>${t.name}</b><small>${t.desc}</small></div>`).join(""),Mt("map-cards").innerHTML=Os.map((t,e)=>{let n=Ri[`${t.field?"field":wa[Me.mode].id}_${t.id}`];return`<div class="card ${e===Me.map?"sel":""}" data-map="${e}"><span class="tag">${t.tag}</span><b>${t.name}</b><small>${t.desc}</small>${n?`<span class="rec">\u0440\u0435\u043A\u043E\u0440\u0434: ${n.score.toLocaleString("ru-RU")}</span>`:""}</div>`}).join(""),Mt("setup-car-name").textContent=ni[Me.car].name,document.querySelectorAll("[data-mode]").forEach(t=>t.addEventListener("click",()=>{Me.mode=+t.dataset.mode,Ta(),se.click(),mh()})),document.querySelectorAll("[data-map]").forEach(t=>t.addEventListener("click",()=>{let e=+t.dataset.map;se.click(),e!==Me.map&&(Me.map=e,Ta(),Ra(Me.map,7)),mh()}))}Mt("btn-start").addEventListener("click",()=>{se.click(),Pr()});function Eh(){var n;let i=ni[Me.car];Mt("car-name").textContent=i.name,Mt("car-tag").textContent=i.tag,Mt("car-desc").textContent=i.desc;let t=rf(i);Mt("car-stats").innerHTML=[["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",t.top],["\u0420\u0430\u0437\u0433\u043E\u043D",t.accel],["\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C",t.handling],["\u0414\u0440\u0438\u0444\u0442",t.drift]].map(([s,r])=>`<div class="stat"><span>${s}</span><div class="bar"><i style="width:${Math.round(r*100)}%"></i></div></div>`).join(""),Mt("car-spec").textContent=`${i.hp} \u043B.\u0441. \xB7 ${i.torque} \u041D\xB7\u043C \xB7 ${i.mass} \u043A\u0433 \xB7 \u043F\u0440\u0438\u0432\u043E\u0434 ${i.drive==="RWD"?"\u0437\u0430\u0434\u043D\u0438\u0439":i.drive==="AWD"?"\u043F\u043E\u043B\u043D\u044B\u0439":"\u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439"} \xB7 ${i.gears.length} \u043F\u0435\u0440\u0435\u0434\u0430\u0447`;let e=(n=Me.colors[i.id])!=null?n:0;Mt("car-colors").innerHTML=i.colors.map((s,r)=>`<div class="swatch ${r===e?"sel":""}" style="background:${s}" data-col="${r}"></div>`).join(""),document.querySelectorAll("[data-col]").forEach(s=>s.addEventListener("click",()=>{Me.colors[i.id]=+s.dataset.col,Ta(),se.click(),Q.player.model.bodyMat.color.set(i.colors[+s.dataset.col]),Eh()}))}function Pf(i){Me.car=(Me.car+i+ni.length)%ni.length,Ta(),se.click();let{veh:t}=Q.player,e=Q.track.P(6);yh(6,-2.8),Eh()}Mt("car-prev").addEventListener("click",()=>Pf(-1));Mt("car-next").addEventListener("click",()=>Pf(1));function If(){let i="<table><tr><th>\u0420\u0435\u0436\u0438\u043C</th><th>\u041A\u0430\u0440\u0442\u0430</th><th>\u041E\u0447\u043A\u0438</th><th>\u041A\u043C</th><th>\u041C\u0430\u0448\u0438\u043D\u0430</th></tr>",t=!1;for(let e of[...wa,Tf])for(let n of Os){let s=Ri[`${e.id}_${n.id}`];s&&(t=!0,i+=`<tr><td>${e.name}</td><td>${n.name}</td><td><b>${s.score.toLocaleString("ru-RU")}</b></td><td>${(s.dist/1e3).toFixed(2)}</td><td>${s.car}</td></tr>`)}i+="</table>",Mt("records-table").innerHTML=t?i:'<p class="hint">\u0420\u0435\u043A\u043E\u0440\u0434\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0441\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439!</p>'}Mt("btn-reset-rec").addEventListener("click",()=>{confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u043A\u043E\u0440\u0434\u044B?")&&(Ri={},Yi.set("records",Ri),If())});function V_(){Mt("set-vol").value=Rt.vol,Mt("set-music").checked=Rt.music,Mt("set-assist").checked=Rt.assist,Mt("set-manual").checked=Rt.manual,Mt("set-quality").value=Rt.quality,Mt("set-camera").value=Rt.camera,Mt("set-units").value=Rt.units,Mt("set-sfx").value=Rt.sfxVol,Mt("set-musicvol").value=Rt.musicVol,Mt("set-outline").checked=Rt.outline,Mt("set-handling").value=Rt.handling,Mt("set-smoke").checked=Rt.smoke,Mt("set-fps").value=Rt.fps,Mt("set-showfps").checked=Rt.showFps}Mt("set-vol").addEventListener("input",i=>{Rt.vol=+i.target.value,se.setVolume(Rt.vol),nn()});Mt("set-sfx").addEventListener("input",i=>{Rt.sfxVol=+i.target.value,se.setSfxVol(Rt.sfxVol),nn()});Mt("set-musicvol").addEventListener("input",i=>{Rt.musicVol=+i.target.value,se.setMusicVol(Rt.musicVol),nn()});Mt("set-outline").addEventListener("change",i=>{Rt.outline=i.target.checked,nn(),fe==="menu"&&yh(6,-2.8)});Mt("set-handling").addEventListener("change",i=>{Rt.handling=i.target.value,Rt.easy=Rt.handling==="easy",nn()});Mt("set-smoke").addEventListener("change",i=>{Rt.smoke=i.target.checked,nn(),Q&&Q.smoke.clear()});Mt("set-music").addEventListener("change",i=>{Rt.music=i.target.checked,se.setMusic(Rt.music),nn()});Mt("set-assist").addEventListener("change",i=>{Rt.assist=i.target.checked,nn()});Mt("set-manual").addEventListener("change",i=>{Rt.manual=i.target.checked,nn()});Mt("set-quality").addEventListener("change",i=>{Rt.quality=+i.target.value,nn(),Ra(Me.map,7)});Mt("set-camera").addEventListener("change",i=>{Rt.camera=+i.target.value,nn()});Mt("set-units").addEventListener("change",i=>{Rt.units=i.target.value,nn()});Mt("set-fps").addEventListener("change",i=>{Rt.fps=+i.target.value,nn()});Mt("set-showfps").addEventListener("change",i=>{Rt.showFps=i.target.checked,nn()});function G_(){fe!=="race"&&fe!=="countdown"||(Y.prevState=fe,fe="paused",oi("pause"),se.update(Q.player.veh,Q.player.veh.spec,0,0,!1,0,!1))}function Lf(){fe==="paused"&&(fe=Y.prevState,oi(null),Ea=performance.now())}Mt("btn-resume").addEventListener("click",()=>{se.click(),Lf()});Mt("btn-restart").addEventListener("click",()=>{se.click(),Pr()});Mt("btn-tomenu").addEventListener("click",()=>{se.click(),oi("main")});Mt("btn-again").addEventListener("click",()=>{se.click(),Pr()});Mt("btn-over-menu").addEventListener("click",()=>{se.click(),oi("main")});function gh(i){for(let t of i){if(t==="mute"&&se.setVolume(se.volume>0?0:Rt.vol),t==="pause"&&(fe==="paused"?Lf():G_()),fe==="race"||fe==="countdown"){if(t==="camera"){Ht.mode=(Ht.mode+1)%4,bh(.016,!0);let e=Mt("cam-hint");e.textContent=S_[Ht.mode],e.classList.add("show"),clearTimeout(gh._t),gh._t=setTimeout(()=>e.classList.remove("show"),1200)}if(t==="reset"&&fe==="race"){let{veh:e}=Q.player,n=Q.track.isField?{x:e.x,z:e.z,h:e.h,y:Q.track.heightAt(e.x,e.z)}:Q.track.sample(Math.max(Q.track.base+2,e.idx));e.reset(n.x,n.z,n.h),e.idx=Math.round(e.idx),e.roadY=n.y,e.px=void 0,e.ph=void 0,e.pY=void 0,e.pz=void 0,Q.skids.last=[null,null,null,null],Xs("\u041D\u0410 \u0422\u0420\u0410\u0421\u0421\u0423",.8)}}t==="enter"&&fe==="menu"&&Sh==="setup"&&Pr()}}var Ea=performance.now(),Ai={frames:0,t:performance.now(),value:0};function Df(i){if(requestAnimationFrame(Df),Rt.fps>0&&i-Ea<1e3/Rt.fps-.7)return;let t=Math.min(.05,(i-Ea)/1e3);if(Ea=i,Ai.frames++,i-Ai.t>=500){Ai.value=Math.round(Ai.frames*1e3/(i-Ai.t)),Ai.frames=0,Ai.t=i;let n=Mt("fps");n.classList.toggle("hidden",!Rt.showFps),Rt.showFps&&(n.textContent=`${Ai.value} FPS`)}let e=Aa.takeEvents();gh(e),Q&&(fe==="menu"?(Q.track.update(Q.player.veh.idx),Mh(t),Q.sun.position.set(Q.player.veh.x+Q.sunDir.x*90,Q.player.veh.roadY+Q.sunDir.y*90,Q.player.veh.z+Q.sunDir.z*90),Q.sun.target.position.set(Q.player.veh.x,Q.player.veh.roadY,Q.player.veh.z),Q.farPlane.position.set(Q.player.veh.x,Q.player.veh.roadY-14,Q.player.veh.z),Q.snow&&Q.snow.update(t,Ue),E_(t,Sh==="garage"),Q.sky.position.copy(Ue.position)):(fe==="countdown"||fe==="race"||fe==="over")&&(Y._events=e,I_(t)),yn?yn.render():Mn.render(si,Ue))}_h();Cf();fe="menu";oi("main");requestAnimationFrame(Df);window.__game={renderer:Mn,get W(){return Q},get G(){return Y},get state(){return fe},startRace:Pr,showScreen:oi,sel:Me,settings:Rt,cam:Ht};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

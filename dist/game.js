(()=>{var Qc="169";var nd=0,Fh=1,id=2;var Wu=1,jc=2,ti=3,bi=0,Ie=1,Pe=2,Vn=0,As=1,Is=2,Bh=3,Oh=4,sd=5,Xi=100,rd=101,ad=102,od=103,ld=104,cd=200,hd=201,ud=202,fd=203,Al=204,Rl=205,dd=206,pd=207,md=208,gd=209,xd=210,_d=211,vd=212,yd=213,Md=214,Cl=0,Pl=1,Il=2,Ls=3,Ll=4,Dl=5,Ul=6,Nl=7,th=0,bd=1,Sd=2,Mi=0,eh=1,nh=2,ih=3,Dr=4,wd=5,sh=6,rh=7;var Xu=300,Ds=301,Us=302,Fl=303,Bl=304,lo=306,si=1e3,Yi=1001,Ol=1002,tn=1003,Ed=1004;var Gr=1005;var In=1006,Wo=1007;var $i=1008;var ri=1009,qu=1010,Yu=1011,Sr=1012,ah=1013,Zi=1014,Hn=1015,Fn=1016,oh=1017,lh=1018,Ns=1020,$u=35902,Zu=1021,Ku=1022,mn=1023,Ju=1024,Qu=1025,Rs=1026,Fs=1027,ch=1028,hh=1029,ju=1030,uh=1031;var fh=1033,ya=33776,Ma=33777,ba=33778,Sa=33779,zl=35840,kl=35841,Hl=35842,Vl=35843,Gl=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,$l=37810,Zl=37811,Kl=37812,Jl=37813,Ql=37814,jl=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,wa=36492,ac=36494,oc=36495,tf=36283,lc=36284,cc=36285,hc=36286;var Ta=2300,uc=2301,Xo=2302,zh=2400,kh=2401,Hh=2402;var Td=3200,Ad=3201;var co=0,Rd=1,vi="",Oe="srgb",Ri="srgb-linear",dh="display-p3",ho="display-p3-linear",Aa="linear",ve="srgb",Ra="rec709",Ca="p3";var as=7680;var Vh=519,Cd=512,Pd=513,Id=514,ef=515,Ld=516,Dd=517,Ud=518,Nd=519,fc=35044;var Gh="300 es",ni=2e3,Pa=2001,Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qo=Math.PI/180,Ia=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function Fd(i,t){return(i%t+t)%t}function Yo(i,t,e){return(1-e)*i+e*t}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var it=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],x=s[4],y=s[7],A=s[2],T=s[5],E=s[8];return r[0]=a*_+o*M+l*A,r[3]=a*p+o*x+l*T,r[6]=a*m+o*y+l*E,r[1]=c*_+h*M+u*A,r[4]=c*p+h*x+u*T,r[7]=c*m+h*y+u*E,r[2]=f*_+d*M+g*A,r[5]=f*p+d*x+g*T,r[8]=f*m+d*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$o=new ee;function nf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bd(){let i=La("canvas");return i.style.display="block",i}var Wh={};function Ea(i){i in Wh||(Wh[i]=!0,console.warn(i))}function Od(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xh=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),or={[Ri]:{transfer:Aa,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:ve,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ho]:{transfer:Aa,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(qh),fromReference:i=>i.applyMatrix3(Xh)},[dh]:{transfer:ve,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(qh),fromReference:i=>i.applyMatrix3(Xh).convertLinearToSRGB()}},Hd=new Set([Ri,ho]),ce={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=or[t].toReference,s=or[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return or[i].primaries},getTransfer:function(i){return i===vi?Aa:or[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(or[t].luminanceCoefficients)}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,dc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=La("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vd=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ko(s[a].image)):r.push(Ko(s[a]))}else r=Ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ko(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gd=0,on=class i extends Si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=In,a=$i,o=mn,l=ri,c=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ii(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case si:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case si:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Xu;on.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(d+1)/2,A=(m+1)/2,T=(h+f)/4,E=(u+_)/4,I=(g+p)/4;return x>y&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ua=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let p=1-o,m=l*f+c*d+h*g+u*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,m*M);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A}let y=o*M;if(l=l*p+f*y,c=c*p+d*y,h=h*p+g*y,u=u*p+_*y,p===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new P,Yh=new gn,ai=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),Xr.subVectors(this.max,lr),ls.subVectors(t.a,lr),cs.subVectors(t.b,lr),hs.subVectors(t.c,lr),di.subVectors(cs,ls),pi.subVectors(hs,cs),Oi.subVectors(ls,hs);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!Qo(e,ls,cs,hs,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,ls,cs,hs,Xr))?!1:(qr.crossVectors(di,pi),e=[qr.x,qr.y,qr.z],Qo(e,ls,cs,hs,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,Wr=new ai,ls=new P,cs=new P,hs=new P,di=new P,pi=new P,Oi=new P,lr=new P,Xr=new P,qr=new P,zi=new P;function Qo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wd=new ai,cr=new P,jo=new P,wi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(jo)),this.expandByPoint(cr.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new P,tl=new P,Yr=new P,mi=new P,el=new P,$r=new P,nl=new P,Na=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tl.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yr),o=mi.dot(this.direction),l=-mi.dot(Yr),c=mi.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tl).addScaledVector(Yr,f),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){el.subVectors(e,t),$r.subVectors(n,t),nl.crossVectors(el,$r);let a=this.direction.dot(nl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,t);let l=o*this.direction.dot($r.crossVectors(mi,$r));if(l<0)return null;let c=o*this.direction.dot(el.cross(mi));if(c<0||l+c>a)return null;let h=-o*mi.dot(nl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xd,t,qd)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),gi.crossVectors(n,dn),gi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),gi.crossVectors(n,dn)),gi.normalize(),Zr.crossVectors(dn,gi),s[0]=gi.x,s[4]=Zr.x,s[8]=dn.x,s[1]=gi.y,s[5]=Zr.y,s[9]=dn.y,s[2]=gi.z,s[6]=Zr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],y=n[11],A=n[15],T=s[0],E=s[4],I=s[8],z=s[12],v=s[1],S=s[5],H=s[9],B=s[13],G=s[2],j=s[6],k=s[10],st=s[14],V=s[3],ct=s[7],yt=s[11],vt=s[15];return r[0]=a*T+o*v+l*G+c*V,r[4]=a*E+o*S+l*j+c*ct,r[8]=a*I+o*H+l*k+c*yt,r[12]=a*z+o*B+l*st+c*vt,r[1]=h*T+u*v+f*G+d*V,r[5]=h*E+u*S+f*j+d*ct,r[9]=h*I+u*H+f*k+d*yt,r[13]=h*z+u*B+f*st+d*vt,r[2]=g*T+_*v+p*G+m*V,r[6]=g*E+_*S+p*j+m*ct,r[10]=g*I+_*H+p*k+m*yt,r[14]=g*z+_*B+p*st+m*vt,r[3]=M*T+x*v+y*G+A*V,r[7]=M*E+x*S+y*j+A*ct,r[11]=M*I+x*H+y*k+A*yt,r[15]=M*z+x*B+y*st+A*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+_*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+p*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=u*p*c-_*f*c+_*l*d-o*p*d-u*l*m+o*f*m,x=g*f*c-h*p*c-g*l*d+a*p*d+h*l*m-a*f*m,y=h*_*c-g*u*c+g*o*d-a*_*d-h*o*m+a*u*m,A=g*u*l-h*_*l-g*o*f+a*_*f+h*o*p-a*u*p,T=e*M+n*x+s*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=M*E,t[1]=(_*f*r-u*p*r-_*s*d+n*p*d+u*s*m-n*f*m)*E,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*m+n*l*m)*E,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*E,t[4]=x*E,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*E,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*E,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*E,t[8]=y*E,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*m-e*u*m)*E,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*m+e*o*m)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*E,t[12]=A*E,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*p+e*u*p)*E,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,p=a*u,m=o*u,M=l*c,x=l*h,y=l*u,A=n.x,T=n.y,E=n.z;return s[0]=(1-(_+m))*A,s[1]=(d+y)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+x)*E,s[9]=(p-M)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=us.set(s[0],s[1],s[2]).length(),a=us.set(s[4],s[5],s[6]).length(),o=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let c=1/r,h=1/a,u=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ni){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===ni)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Pa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ni){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h,g,_;if(o===ni)g=(a+r)*u,_=-2*u;else if(o===Pa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new P,Cn=new se,Xd=new P(0,0,0),qd=new P(1,1,1),gi=new P,Zr=new P,dn=new P,$h=new se,Zh=new gn,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $h.makeRotationFromQuaternion(t),this.setFromRotationMatrix($h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Fa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yd=0,Kh=new P,fs=new gn,Jn=new se,Kr=new P,hr=new P,$d=new P,Zd=new gn,Jh=new P(1,0,0),Qh=new P(0,1,0),jh=new P(0,0,1),tu={type:"added"},Kd={type:"removed"},ds={type:"childadded",child:null},il={type:"childremoved",child:null},ze=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Ln,n=new gn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new ee}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(jh,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(hr,Kr,this.up):Jn.lookAt(Kr,hr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Jn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kd),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,$d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new P(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new P,Qn=new P,sl=new P,jn=new P,ps=new P,ms=new P,eu=new P,rl=new P,al=new P,ol=new P,ll=new xe,cl=new xe,hl=new xe,yi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),Qn.subVectors(n,e),sl.subVectors(t,e);let a=Pn.dot(Pn),o=Pn.dot(Qn),l=Pn.dot(sl),c=Qn.dot(Qn),h=Qn.dot(sl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ll,r.x),a.addScaledVector(cl,r.y),a.addScaledVector(hl,r.z),a}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),Qn.subVectors(t,e),Pn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),rl.subVectors(t,n);let l=ps.dot(rl),c=ms.dot(rl);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,s);let h=ps.dot(al),u=ms.dot(al);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ps,a);ol.subVectors(t,r);let d=ps.dot(ol),g=ms.dot(ol);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ms,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return eu.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(eu,o);let m=1/(p+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Fd(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ul(a,r,t+1/3),this.g=ul(a,r,t),this.b=ul(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ce.fromWorkingColorSpace(je.copy(this),t),Math.round(Ke(je.r*255,0,255))*65536+Math.round(Ke(je.g*255,0,255))*256+Math.round(Ke(je.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Oe){ce.fromWorkingColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Jr);let n=Yo(xi.h,Jr.h,e),s=Yo(xi.s,Jr.s,e),r=Yo(xi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Mt;Mt.NAMES=sf;var Jd=0,Dn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=As,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ye=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new P,Qr=new it,he=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}};var Ba=class extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Oa=class extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qd=0,Sn=new se,fl=new ze,gs=new P,pn=new ai,ur=new ai,We=new P,de=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?Oa:Ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(pn.min,ur.min),pn.expandByPoint(We),We.addVectors(pn.max,ur.max),pn.expandByPoint(We)):(pn.expandByPoint(ur.min),pn.expandByPoint(ur.max))}pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),We.add(gs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,f=new it,d=new it,g=new it,_=new P,p=new P;function m(I,z,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,z),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(S),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(S),o[I].add(_),o[z].add(_),o[v].add(_),l[I].add(p),l[z].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,z=M.length;I<z;++I){let v=M[I],S=v.start,H=v.count;for(let B=S,G=S+H;B<G;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new P,y=new P,A=new P,T=new P;function E(I){A.fromBufferAttribute(s,I),T.copy(A);let z=o[I];x.copy(z),x.sub(A.multiplyScalar(A.dot(z))).normalize(),y.crossVectors(T,z);let S=y.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,S)}for(let I=0,z=M.length;I<z;++I){let v=M[I],S=v.start,H=v.count;for(let B=S,G=S+H;B<G;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new he(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nu=new se,ki=new Na,jr=new wi,iu=new P,ta=new P,ea=new P,na=new P,dl=new P,ia=new P,su=new P,sa=new P,ft=class extends ze{constructor(t=new de,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(dl.fromBufferAttribute(u,t),a?ia.addScaledVector(dl,h):ia.addScaledVector(dl.sub(e),h))}e.add(ia)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(jr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(jr,iu)===null||ki.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(nu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){let T=o.getX(y),E=o.getX(y+1),I=o.getX(y+2);s=ra(this,m,t,n,c,h,u,T,E,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let M=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);s=ra(this,a,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){let T=y,E=y+1,I=y+2;s=ra(this,m,t,n,c,h,u,T,E,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let M=p,x=p+1,y=p+2;s=ra(this,a,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function jd(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bi,o),l===null)return null;sa.copy(o),sa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:i}}function ra(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ta),i.getVertexPosition(l,ea),i.getVertexPosition(c,na);let h=jd(i,t,e,n,ta,ea,na,su);if(h){let u=new P;yi.getBarycoord(su,ta,ea,na,u),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,u,new it)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,u,new it)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};yi.getNormal(ta,ea,na,f.normal),h.face=f,h.barycoord=u}return h}var _e=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,p,m,M,x,y,A,T,E,I,z){let v=y/E,S=A/I,H=y/2,B=A/2,G=T/2,j=E+1,k=I+1,st=0,V=0,ct=new P;for(let yt=0;yt<k;yt++){let vt=yt*S-B;for(let Jt=0;Jt<j;Jt++){let $t=Jt*v-H;ct[_]=$t*M,ct[p]=vt*x,ct[m]=G,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[p]=0,ct[m]=T>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Jt/E),u.push(1-yt/I),st+=1}}for(let yt=0;yt<I;yt++)for(let vt=0;vt<E;vt++){let Jt=f+vt+j*yt,$t=f+vt+j*(yt+1),K=f+(vt+1)+j*(yt+1),ot=f+(vt+1)+j*yt;l.push(Jt,$t,ot),l.push($t,K,ot),V+=6}o.addGroup(d,V,z),d+=V,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=Bs(i[e]);for(let s in n)t[s]=n[s]}return t}function tp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Ci={clone:Bs,merge:nn},ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,be=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},za=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new P,ru=new it,au=new it,Je=class extends za{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,ru,au),e.subVectors(au,ru)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,_s=1,gc=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Je(xs,_s,t,e);r.layers=this.layers,this.add(r);let a=new Je(xs,_s,t,e);a.layers=this.layers,this.add(a);let o=new Je(xs,_s,t,e);o.layers=this.layers,this.add(o);let l=new Je(xs,_s,t,e);l.layers=this.layers,this.add(l);let c=new Je(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ka=class extends on{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xc=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ka(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _e(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Vn});r.uniforms.tEquirect.value=e;let a=new ft(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=In),new gc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},pl=new P,ip=new P,sp=new ee,ei=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pl.subVectors(n,e).cross(ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sp.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new wi,aa=new P,wr=class{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-d,y-m).normalize(),n[1].setComponents(l+r,f+c,p+d,y+m).normalize(),n[2].setComponents(l+a,f+h,p+g,y+M).normalize(),n[3].setComponents(l-a,f-h,p-g,y-M).normalize(),n[4].setComponents(l-o,f-u,p-_,y-x).normalize(),e===ni)n[5].setComponents(l+o,f+u,p+_,y+x).normalize();else if(e===Pa)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(aa.x=s.normal.x>0?t.max.x:t.min.x,aa.y=s.normal.y>0?t.max.y:t.min.y,aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function af(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Se=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*f-a;for(let x=0;x<c;x++){let y=x*u-r;g.push(y,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let x=M+c*m,y=M+c*(m+1),A=M+1+c*(m+1),T=M+1+c*m;d.push(x,y,T),d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
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
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cp=`#define PI 3.141592653589793
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
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`
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
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
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
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`struct PhysicalMaterial {
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
}`,rm=`
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,f0=`#if DEPTH_PACKING == 3200
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
}`,d0=`#define DISTANCE
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
}`,p0=`#define DISTANCE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,T0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,C0=`#define STANDARD
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
}`,P0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,L0=`#define TOON
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
}`,D0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:ap,alphahash_pars_fragment:op,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:fp,aomap_pars_fragment:dp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:xp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:wp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Up,emissivemap_pars_fragment:Np,colorspace_fragment:Fp,colorspace_pars_fragment:Bp,envmap_fragment:Op,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:$p,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Kp,lights_pars_begin:Jp,lights_toon_fragment:jp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:am,lights_fragment_end:om,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:fm,map_pars_fragment:dm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:xm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:bm,normal_fragment_begin:Sm,normal_fragment_maps:wm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Um,premultiplied_alpha_fragment:Nm,project_vertex:Fm,dithering_fragment:Bm,dithering_pars_fragment:Om,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:$m,specularmap_fragment:Zm,specularmap_pars_fragment:Km,tonemapping_fragment:Jm,tonemapping_pars_fragment:Qm,transmission_fragment:jm,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:s0,background_vert:r0,background_frag:a0,backgroundCube_vert:o0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:h0,depth_vert:u0,depth_frag:f0,distanceRGBA_vert:d0,distanceRGBA_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:x0,linedashed_frag:_0,meshbasic_vert:v0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:b0,meshmatcap_vert:S0,meshmatcap_frag:w0,meshnormal_vert:E0,meshnormal_frag:T0,meshphong_vert:A0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:I0,meshtoon_frag:L0,points_vert:D0,points_frag:U0,shadow_vert:N0,shadow_frag:F0,sprite_vert:B0,sprite_frag:O0},St={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},zn={basic:{uniforms:nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Mt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:nn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:nn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Mt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:nn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:nn([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:nn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:nn([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:nn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:nn([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:nn([St.common,St.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:nn([St.lights,St.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var oa={r:0,b:0,g:0},Vi=new Ln,z0=new se;function k0(i,t,e,n,s,r,a){let o=new Mt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,y=g(M);y===null?m(o,l):y&&y.isColor&&(m(y,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===lo)?(h===void 0&&(h=new ft(new _e(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:Bs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(x.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(Vi)),h.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ft(new Se(2,2),new be({name:"BackgroundMaterial",uniforms:Bs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(oa,rf(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:_,addToRenderList:p}}function H0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,S,H,B,G){let j=!1,k=u(B,H,S);r!==k&&(r=k,c(r.object)),j=d(v,B,H,G),j&&g(v,B,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(v,S,H,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,S,H){let B=H.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let j=G[S.id];j===void 0&&(j={},G[S.id]=j);let k=j[B];return k===void 0&&(k=f(l()),j[B]=k),k}function f(v){let S=[],H=[],B=[];for(let G=0;G<e;G++)S[G]=0,H[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:H,attributeDivisors:B,object:v,attributes:{},index:null}}function d(v,S,H,B){let G=r.attributes,j=S.attributes,k=0,st=H.getAttributes();for(let V in st)if(st[V].location>=0){let yt=G[V],vt=j[V];if(vt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor)),yt===void 0||yt.attribute!==vt||vt&&yt.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(v,S,H,B){let G={},j=S.attributes,k=0,st=H.getAttributes();for(let V in st)if(st[V].location>=0){let yt=j[V];yt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor));let vt={};vt.attribute=yt,yt&&yt.data&&(vt.data=yt.data),G[V]=vt,k++}r.attributes=G,r.attributesNum=k,r.index=B}function _(){let v=r.newAttributes;for(let S=0,H=v.length;S<H;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){let H=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;H[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),G[v]!==S&&(i.vertexAttribDivisor(v,S),G[v]=S)}function M(){let v=r.newAttributes,S=r.enabledAttributes;for(let H=0,B=S.length;H<B;H++)S[H]!==v[H]&&(i.disableVertexAttribArray(H),S[H]=0)}function x(v,S,H,B,G,j,k){k===!0?i.vertexAttribIPointer(v,S,H,G,j):i.vertexAttribPointer(v,S,H,B,G,j)}function y(v,S,H,B){_();let G=B.attributes,j=H.getAttributes(),k=S.defaultAttributeValues;for(let st in j){let V=j[st];if(V.location>=0){let ct=G[st];if(ct===void 0&&(st==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),st==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){let yt=ct.normalized,vt=ct.itemSize,Jt=t.get(ct);if(Jt===void 0)continue;let $t=Jt.buffer,K=Jt.type,ot=Jt.bytesPerElement,Et=K===i.INT||K===i.UNSIGNED_INT||ct.gpuType===ah;if(ct.isInterleavedBufferAttribute){let at=ct.data,Bt=at.stride,Pt=ct.offset;if(at.isInstancedInterleavedBuffer){for(let Nt=0;Nt<V.locationSize;Nt++)m(V.location+Nt,at.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Nt=0;Nt<V.locationSize;Nt++)p(V.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Nt=0;Nt<V.locationSize;Nt++)x(V.location+Nt,vt/V.locationSize,K,yt,Bt*ot,(Pt+vt/V.locationSize*Nt)*ot,Et)}else{if(ct.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,ct.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let at=0;at<V.locationSize;at++)x(V.location+at,vt/V.locationSize,K,yt,vt*ot,vt/V.locationSize*at*ot,Et)}}else if(k!==void 0){let yt=k[st];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(V.location,yt);break;case 3:i.vertexAttrib3fv(V.location,yt);break;case 4:i.vertexAttrib4fv(V.location,yt);break;default:i.vertexAttrib1fv(V.location,yt)}}}}M()}function A(){I();for(let v in n){let S=n[v];for(let H in S){let B=S[H];for(let G in B)h(B[G].object),delete B[G];delete S[H]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let H in S){let B=S[H];for(let G in B)h(B[G].object),delete B[G];delete S[H]}delete n[v.id]}function E(v){for(let S in n){let H=n[S];if(H[v.id]===void 0)continue;let B=H[v.id];for(let G in B)h(B[G].object),delete B[G];delete H[v.id]}}function I(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function V0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function G0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let I=E===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ri&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hn&&!I)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function W0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ei,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,x=M*4,y=m.clippingState||null;l.value=y,y=h(g,f,x,d);for(let A=0;A!==x;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function X0(i){let t=new WeakMap;function e(a,o){return o===Fl?a.mapping=Ds:o===Bl&&(a.mapping=Us),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fl||o===Bl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new xc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Os=class extends za{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,ou=[.125,.215,.35,.446,.526,.582],qi=20,ml=new Os,lu=new Mt,gl=null,xl=0,_l=0,vl=!1,Wi=(1+Math.sqrt(5))/2,vs=1/Wi,cu=[new P(-Wi,vs,0),new P(Wi,vs,0),new P(-vs,0,Wi),new P(vs,0,Wi),new P(0,Wi,-vs),new P(0,Wi,vs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,xl,_l),this._renderer.xr.enabled=vl,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Fn,format:mn,colorSpace:Ri,depthBuffer:!1},s=hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=Y0(r,t,e)}return s}_compileMaterial(t){let e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,n,s){let o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(lu),h.toneMapping=Mi,h.autoClear=!1;let d=new ye({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new ft(new _e,d),_=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(lu),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let x=this._cubeSize;la(s,M*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ds||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;la(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cu[(s-r-1)%cu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):qi;p>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);let m=[],M=0;for(let E=0;E<qi;++E){let I=E/_,z=Math.exp(-I*I/2);m.push(z),E===0?M+=z:E<p&&(M+=2*z)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let y=this._sizeLods[s],A=3*y*(s>x-Es?s-x+Es:0),T=4*(this._cubeSize-y);la(e,A,T,3*y,2*y),l.setRenderTarget(e),l.render(u,ml)}};function q0(i){let t=[],e=[],n=[],s=i,r=i-Es+1+ou.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Es?l=ou[a-i+Es-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),x=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let T=0;T<d;T++){let E=T%3*2/3-1,I=T>2?0:-1,z=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];M.set(z,_*g*T),x.set(f,p*g*T);let v=[T,T,T,T,T,T];y.set(v,m*g*T)}let A=new de;A.setAttribute("position",new he(M,_)),A.setAttribute("uv",new he(x,p)),A.setAttribute("faceIndex",new he(y,m)),t.push(A),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hu(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Y0(i,t,e){let n=new Float32Array(qi),s=new P(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function uu(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function fu(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function $0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Fl||l===Bl,h=l===Ds||l===Us;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new zs(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new zs(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Z0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ea("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function K0(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let x=0,y=M.length;x<y;x+=3){let A=M[x+0],T=M[x+1],E=M[x+2];f.push(A,T,T,E,E,A)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let A=x+0,T=x+1,E=x+2;f.push(A,T,T,E,E,A)}}else return;let p=new(nf(f)?Oa:Ba)(f,1);p.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function J0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,t,e){let n=new WeakMap,s=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let z=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*A*4*u),E=new Ua(T,y,A,u);E.type=Hn,E.needsUpdate=!0;let I=x*4;for(let v=0;v<u;v++){let S=p[v],H=m[v],B=M[v],G=y*A*4*v;for(let j=0;j<S.count;j++){let k=j*I;d===!0&&(s.fromBufferAttribute(S,j),T[G+k+0]=s.x,T[G+k+1]=s.y,T[G+k+2]=s.z,T[G+k+3]=0),g===!0&&(s.fromBufferAttribute(H,j),T[G+k+4]=s.x,T[G+k+5]=s.y,T[G+k+6]=s.z,T[G+k+7]=0),_===!0&&(s.fromBufferAttribute(B,j),T[G+k+8]=s.x,T[G+k+9]=s.y,T[G+k+10]=s.z,T[G+k+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new it(y,A)},n.set(o,f),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ha=class extends on{constructor(t,e,n,s,r,a,o,l,c,h=Rs){if(h!==Rs&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=Zi),n===void 0&&h===Fs&&(n=Ns),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},of=new on,du=new Ha(1,1),lf=new Ua,cf=new mc,hf=new ka,pu=[],mu=[],gu=new Float32Array(16),xu=new Float32Array(9),_u=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uo(i,t){let e=mu[t];e===void 0&&(e=new Int32Array(t),mu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),He(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),He(e,n)}}function og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),He(e,n)}}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(du.compareFunction=ef,r=du):r=of,e.setTexture2D(t||r,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cf,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hf,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lf,s)}function yg(i){switch(i){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return fg;case 36294:return dg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(i,t){i.uniform1fv(this.addr,t)}function bg(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function wg(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ag(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rg(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Pg(i,t){i.uniform3iv(this.addr,t)}function Ig(i,t){i.uniform4iv(this.addr,t)}function Lg(i,t){i.uniform1uiv(this.addr,t)}function Dg(i,t){i.uniform2uiv(this.addr,t)}function Ug(i,t){i.uniform3uiv(this.addr,t)}function Ng(i,t){i.uniform4uiv(this.addr,t)}function Fg(i,t,e){let n=this.cache,s=t.length,r=uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||of,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cf,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hf,r[a])}function zg(i,t,e){let n=this.cache,s=t.length,r=uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lf,r[a])}function kg(i){switch(i){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return wg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return zg}}var _c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function vu(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),a=yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vu(e,c===void 0?new _c(o,i,t):new vc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new yc(o),vu(e,u)),e=u}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Hg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Gg=0;function Wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Xg(i){let t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i),n;switch(t===e?n="":t===Ca&&e===Ra?n="LinearDisplayP3ToLinearSRGB":t===Ra&&e===Ca&&(n="LinearSRGBToLinearDisplayP3"),i){case Ri:case ho:return[n,"LinearTransferOETF"];case Oe:case dh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wg(i.getShaderSource(t),a)}else return s}function qg(i,t){let e=Xg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yg(i,t){let e;switch(t){case eh:e="Linear";break;case nh:e="Reinhard";break;case ih:e="Cineon";break;case Dr:e="ACESFilmic";break;case sh:e="AgX";break;case rh:e="Neutral";break;case wd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ca=new P;function $g(){ce.getLuminanceCoefficients(ca);let i=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function Kg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _r(i){return i!==""}function bu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Su(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(Qg,tx)}var jg=new Map;function tx(i,t){let e=te[t];if(e===void 0){let n=jg.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(ex,nx)}function nx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ix(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function sx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function ax(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case th:t="ENVMAP_BLENDING_MULTIPLY";break;case bd:t="ENVMAP_BLENDING_MIX";break;case Sd:t="ENVMAP_BLENDING_ADD";break}return t}function ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ix(e),c=sx(e),h=rx(e),u=ax(e),f=ox(e),d=Zg(e),g=Kg(r),_=s.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`)):(p=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?te.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=Mc(a),a=bu(a,e),a=Su(a,e),o=Mc(o),o=bu(o,e),o=Su(o,e),a=wu(a),o=wu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=M+p+a,y=M+m+o,A=yu(s,s.VERTEX_SHADER,x),T=yu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(S){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(A).trim(),G=s.getShaderInfoLog(T).trim(),j=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,T);else{let st=Mu(s,A,"vertex"),V=Mu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+H+`
`+st+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||G==="")&&(k=!1);k&&(S.diagnostics={runnable:j,programLog:H,vertexShader:{log:B,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(A),s.deleteShader(T),I=new Ps(s,_),z=Jg(s,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let z;this.getAttributes=function(){return z===void 0&&E(this),z};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Vg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}var cx=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}};function hx(i,t,e,n,s,r,a){let o=new Fa,l=new bc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,H,B,G){let j=B.fog,k=G.geometry,st=v.isMeshStandardMaterial?B.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||st),ct=V&&V.mapping===lo?V.image.height:null,yt=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let vt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=vt!==void 0?vt.length:0,$t=0;k.morphAttributes.position!==void 0&&($t=1),k.morphAttributes.normal!==void 0&&($t=2),k.morphAttributes.color!==void 0&&($t=3);let K,ot,Et,at;if(yt){let $e=zn[yt];K=$e.vertexShader,ot=$e.fragmentShader}else K=v.vertexShader,ot=v.fragmentShader,l.update(v),Et=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);let Bt=i.getRenderTarget(),Pt=G.isInstancedMesh===!0,Nt=G.isBatchedMesh===!0,Zt=!!v.map,tt=!!v.matcap,C=!!V,rt=!!v.aoMap,mt=!!v.lightMap,lt=!!v.bumpMap,pt=!!v.normalMap,Dt=!!v.displacementMap,Tt=!!v.emissiveMap,R=!!v.metalnessMap,b=!!v.roughnessMap,O=v.anisotropy>0,J=v.clearcoat>0,et=v.dispersion>0,Q=v.iridescence>0,It=v.sheen>0,_t=v.transmission>0,At=O&&!!v.anisotropyMap,Qt=J&&!!v.clearcoatMap,L=J&&!!v.clearcoatNormalMap,X=J&&!!v.clearcoatRoughnessMap,ht=Q&&!!v.iridescenceMap,dt=Q&&!!v.iridescenceThicknessMap,ut=It&&!!v.sheenColorMap,kt=It&&!!v.sheenRoughnessMap,Vt=!!v.specularMap,oe=!!v.specularColorMap,U=!!v.specularIntensityMap,gt=_t&&!!v.transmissionMap,$=_t&&!!v.thicknessMap,nt=!!v.gradientMap,wt=!!v.alphaMap,Rt=v.alphaTest>0,ie=!!v.alphaHash,Re=!!v.extensions,Ye=Mi;v.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let le={shaderID:yt,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:ot,defines:v.defines,customVertexShaderID:Et,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Nt,batchingColor:Nt&&G._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&G.instanceColor!==null,instancingMorph:Pt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:Ri,alphaToCoverage:!!v.alphaToCoverage,map:Zt,matcap:tt,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:ct,aoMap:rt,lightMap:mt,bumpMap:lt,normalMap:pt,displacementMap:d&&Dt,emissiveMap:Tt,normalMapObjectSpace:pt&&v.normalMapType===Rd,normalMapTangentSpace:pt&&v.normalMapType===co,metalnessMap:R,roughnessMap:b,anisotropy:O,anisotropyMap:At,clearcoat:J,clearcoatMap:Qt,clearcoatNormalMap:L,clearcoatRoughnessMap:X,dispersion:et,iridescence:Q,iridescenceMap:ht,iridescenceThicknessMap:dt,sheen:It,sheenColorMap:ut,sheenRoughnessMap:kt,specularMap:Vt,specularColorMap:oe,specularIntensityMap:U,transmission:_t,transmissionMap:gt,thicknessMap:$,gradientMap:nt,opaque:v.transparent===!1&&v.blending===As&&v.alphaToCoverage===!1,alphaMap:wt,alphaTest:Rt,alphaHash:ie,combine:v.combine,mapUv:Zt&&p(v.map.channel),aoMapUv:rt&&p(v.aoMap.channel),lightMapUv:mt&&p(v.lightMap.channel),bumpMapUv:lt&&p(v.bumpMap.channel),normalMapUv:pt&&p(v.normalMap.channel),displacementMapUv:Dt&&p(v.displacementMap.channel),emissiveMapUv:Tt&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:At&&p(v.anisotropyMap.channel),clearcoatMapUv:Qt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:L&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&p(v.sheenRoughnessMap.channel),specularMapUv:Vt&&p(v.specularMap.channel),specularColorMapUv:oe&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:gt&&p(v.transmissionMap.channel),thicknessMapUv:$&&p(v.thicknessMap.channel),alphaMapUv:wt&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(pt||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(Zt||wt),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:$t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Zt&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pe,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function M(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let H in v.defines)S.push(H),S.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(x(S,v),y(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function A(v){let S=_[v.type],H;if(S){let B=zn[S];H=Ci.clone(B.uniforms)}else H=v.uniforms;return H}function T(v,S){let H;for(let B=0,G=h.length;B<G;B++){let j=h[B];if(j.cacheKey===S){H=j,++H.usedTimes;break}}return H===void 0&&(H=new lx(i,S,v,r),h.push(H)),H}function E(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:A,acquireProgram:T,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:z}}function ux(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function o(u,f,d,g,_,p){let m=a(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,_,p){let m=a(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||fx),n.length>1&&n.sort(f||Tu),s.length>1&&s.sort(f||Tu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Mt};break;case"SpotLight":e={position:new P,direction:new P,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gx=0;function xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){let t=new px,e=mx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new se,a=new se;function o(c){let h=0,u=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,x=0,y=0,A=0,T=0,E=0;c.sort(xx);for(let z=0,v=c.length;z<v;z++){let S=c[z],H=S.color,B=S.intensity,G=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=H.r*B,u+=H.g*B,f+=H.b*B;else if(S.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(S.sh.coefficients[k],B);E++}else if(S.isDirectionalLight){let k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let st=S.shadow,V=e.get(S);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=S.shadow.matrix,M++}n.directional[d]=k,d++}else if(S.isSpotLight){let k=t.get(S);k.position.setFromMatrixPosition(S.matrixWorld),k.color.copy(H).multiplyScalar(B),k.distance=G,k.coneCos=Math.cos(S.angle),k.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),k.decay=S.decay,n.spot[_]=k;let st=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,st.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[_]=st.matrix,S.castShadow){let V=e.get(S);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=j,y++}_++}else if(S.isRectAreaLight){let k=t.get(S);k.color.copy(H).multiplyScalar(B),k.halfWidth.set(S.width*.5,0,0),k.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=k,p++}else if(S.isPointLight){let k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),k.distance=S.distance,k.decay=S.decay,S.castShadow){let st=S.shadow,V=e.get(S);V.shadowIntensity=st.intensity,V.shadowBias=st.bias,V.shadowNormalBias=st.normalBias,V.shadowRadius=st.radius,V.shadowMapSize=st.mapSize,V.shadowCameraNear=st.camera.near,V.shadowCameraFar=st.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=k,g++}else if(S.isHemisphereLight){let k=t.get(S);k.skyColor.copy(S.color).multiplyScalar(B),k.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=E,n.version=gx++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let x=c[m];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(x.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Ru(i){let t=new _x(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ru(i),t.set(s,[o])):r>=a.length?(o=new Ru(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wc=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`;function bx(i,t,e){let n=new wr,s=new it,r=new it,a=new xe,o=new wc({depthPacking:Ad}),l=new Ec,c={},h=e.maxTextureSize,u={[bi]:Ie,[Ie]:bi,[Pe]:Pe},f=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:yx,fragmentShader:Mx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let m=this.type;this.render=function(T,E,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let z=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Vn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=m!==ti&&this.type===ti,G=m===ti&&this.type!==ti;for(let j=0,k=T.length;j<k;j++){let st=T[j],V=st.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ct=V.getFrameExtents();if(s.multiply(ct),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,V.mapSize.y=r.y)),V.map===null||B===!0||G===!0){let vt=this.type!==ti?{minFilter:tn,magFilter:tn}:{};V.map!==null&&V.map.dispose(),V.map=new sn(s.x,s.y,vt),V.map.texture.name=st.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let yt=V.getViewportCount();for(let vt=0;vt<yt;vt++){let Jt=V.getViewport(vt);a.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),H.viewport(a),V.updateMatrices(st,vt),n=V.getFrustum(),y(E,I,V.camera,st,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&M(V,I),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(z,v,S)};function M(T,E){let I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new sn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,I,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,I,d,_,null)}function x(T,E,I,z){let v=null,S=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)v=S;else if(v=I.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let H=v.uuid,B=E.uuid,G=c[H];G===void 0&&(G={},c[H]=G);let j=G[B];j===void 0&&(j=v.clone(),G[B]=j,E.addEventListener("dispose",A)),v=j}if(v.visible=E.visible,v.wireframe=E.wireframe,z===ti?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=i.properties.get(v);H.light=I}return v}function y(T,E,I,z,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ti)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let B=t.update(T),G=T.material;if(Array.isArray(G)){let j=B.groups;for(let k=0,st=j.length;k<st;k++){let V=j[k],ct=G[V.materialIndex];if(ct&&ct.visible){let yt=x(T,ct,z,v);T.onBeforeShadow(i,T,E,I,B,yt,V),i.renderBufferDirect(I,null,B,yt,T,V),T.onAfterShadow(i,T,E,I,B,yt,V)}}}else if(G.visible){let j=x(T,G,z,v);T.onBeforeShadow(i,T,E,I,B,j,null),i.renderBufferDirect(I,null,B,j,T,null),T.onAfterShadow(i,T,E,I,B,j,null)}}let H=T.children;for(let B=0,G=H.length;B<G;B++)y(H[B],E,I,z,v)}function A(T){T.target.removeEventListener("dispose",A);for(let I in c){let z=c[I],v=T.target.uuid;v in z&&(z[v].dispose(),delete z[v])}}}var Sx={[Cl]:Pl,[Il]:Ul,[Ll]:Nl,[Ls]:Dl,[Pl]:Cl,[Ul]:Il,[Nl]:Ll,[Dl]:Ls};function wx(i){function t(){let U=!1,gt=new xe,$=null,nt=new xe(0,0,0,0);return{setMask:function(wt){$!==wt&&!U&&(i.colorMask(wt,wt,wt,wt),$=wt)},setLocked:function(wt){U=wt},setClear:function(wt,Rt,ie,Re,Ye){Ye===!0&&(wt*=Re,Rt*=Re,ie*=Re),gt.set(wt,Rt,ie,Re),nt.equals(gt)===!1&&(i.clearColor(wt,Rt,ie,Re),nt.copy(gt))},reset:function(){U=!1,$=null,nt.set(-1,0,0,0)}}}function e(){let U=!1,gt=!1,$=null,nt=null,wt=null;return{setReversed:function(Rt){gt=Rt},setTest:function(Rt){Rt?Et(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Rt){$!==Rt&&!U&&(i.depthMask(Rt),$=Rt)},setFunc:function(Rt){if(gt&&(Rt=Sx[Rt]),nt!==Rt){switch(Rt){case Cl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Il:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Ul:i.depthFunc(i.GREATER);break;case Nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Rt}},setLocked:function(Rt){U=Rt},setClear:function(Rt){wt!==Rt&&(i.clearDepth(Rt),wt=Rt)},reset:function(){U=!1,$=null,nt=null,wt=null}}}function n(){let U=!1,gt=null,$=null,nt=null,wt=null,Rt=null,ie=null,Re=null,Ye=null;return{setTest:function(le){U||(le?Et(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(le){gt!==le&&!U&&(i.stencilMask(le),gt=le)},setFunc:function(le,$e,Mn){($!==le||nt!==$e||wt!==Mn)&&(i.stencilFunc(le,$e,Mn),$=le,nt=$e,wt=Mn)},setOp:function(le,$e,Mn){(Rt!==le||ie!==$e||Re!==Mn)&&(i.stencilOp(le,$e,Mn),Rt=le,ie=$e,Re=Mn)},setLocked:function(le){U=le},setClear:function(le){Ye!==le&&(i.clearStencil(le),Ye=le)},reset:function(){U=!1,gt=null,$=null,nt=null,wt=null,Rt=null,ie=null,Re=null,Ye=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,A=null,T=new Mt(0,0,0),E=0,I=!1,z=null,v=null,S=null,H=null,B=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,k=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(st)[1]),j=k>=1):st.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),j=k>=2);let V=null,ct={},yt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Jt=new xe().fromArray(yt),$t=new xe().fromArray(vt);function K(U,gt,$,nt){let wt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(U,Rt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<$;ie++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(gt+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Rt}let ot={};ot[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Et(i.DEPTH_TEST),r.setFunc(Ls),mt(!1),lt(Fh),Et(i.CULL_FACE),C(Vn);function Et(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function at(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Bt(U,gt){return h[U]!==gt?(i.bindFramebuffer(U,gt),h[U]=gt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Pt(U,gt){let $=f,nt=!1;if(U){$=u.get(gt),$===void 0&&($=[],u.set(gt,$));let wt=U.textures;if($.length!==wt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,ie=wt.length;Rt<ie;Rt++)$[Rt]=i.COLOR_ATTACHMENT0+Rt;$.length=wt.length,nt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,nt=!0);nt&&i.drawBuffers($)}function Nt(U){return d!==U?(i.useProgram(U),d=U,!0):!1}let Zt={[Xi]:i.FUNC_ADD,[rd]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};Zt[od]=i.MIN,Zt[ld]=i.MAX;let tt={[cd]:i.ZERO,[hd]:i.ONE,[ud]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[xd]:i.SRC_ALPHA_SATURATE,[md]:i.DST_COLOR,[dd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[pd]:i.ONE_MINUS_DST_ALPHA,[_d]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[yd]:i.CONSTANT_ALPHA,[Md]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,gt,$,nt,wt,Rt,ie,Re,Ye,le){if(U===Vn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(Et(i.BLEND),g=!0),U!==sd){if(U!==_||le!==I){if((p!==Xi||x!==Xi)&&(i.blendEquation(i.FUNC_ADD),p=Xi,x=Xi),le)switch(U){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,M=null,y=null,A=null,T.set(0,0,0),E=0,_=U,I=le}return}wt=wt||gt,Rt=Rt||$,ie=ie||nt,(gt!==p||wt!==x)&&(i.blendEquationSeparate(Zt[gt],Zt[wt]),p=gt,x=wt),($!==m||nt!==M||Rt!==y||ie!==A)&&(i.blendFuncSeparate(tt[$],tt[nt],tt[Rt],tt[ie]),m=$,M=nt,y=Rt,A=ie),(Re.equals(T)===!1||Ye!==E)&&(i.blendColor(Re.r,Re.g,Re.b,Ye),T.copy(Re),E=Ye),_=U,I=!1}function rt(U,gt){U.side===Pe?at(i.CULL_FACE):Et(i.CULL_FACE);let $=U.side===Ie;gt&&($=!$),mt($),U.blending===As&&U.transparent===!1?C(Vn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let nt=U.stencilWrite;a.setTest(nt),nt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){z!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),z=U)}function lt(U){U!==nd?(Et(i.CULL_FACE),U!==v&&(U===Fh?i.cullFace(i.BACK):U===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),v=U}function pt(U){U!==S&&(j&&i.lineWidth(U),S=U)}function Dt(U,gt,$){U?(Et(i.POLYGON_OFFSET_FILL),(H!==gt||B!==$)&&(i.polygonOffset(gt,$),H=gt,B=$)):at(i.POLYGON_OFFSET_FILL)}function Tt(U){U?Et(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+G-1),V!==U&&(i.activeTexture(U),V=U)}function b(U,gt,$){$===void 0&&(V===null?$=i.TEXTURE0+G-1:$=V);let nt=ct[$];nt===void 0&&(nt={type:void 0,texture:void 0},ct[$]=nt),(nt.type!==U||nt.texture!==gt)&&(V!==$&&(i.activeTexture($),V=$),i.bindTexture(U,gt||ot[U]),nt.type=U,nt.texture=gt)}function O(){let U=ct[V];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(U){Jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Jt.copy(U))}function ut(U){$t.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function kt(U,gt){let $=l.get(gt);$===void 0&&($=new WeakMap,l.set(gt,$));let nt=$.get(U);nt===void 0&&(nt=i.getUniformBlockIndex(gt,U.name),$.set(U,nt))}function Vt(U,gt){let nt=l.get(gt).get(U);o.get(gt)!==nt&&(i.uniformBlockBinding(gt,nt,U.__bindingPointIndex),o.set(gt,nt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,ct={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,A=null,T=new Mt(0,0,0),E=0,I=!1,z=null,v=null,S=null,H=null,B=null,Jt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Et,disable:at,bindFramebuffer:Bt,drawBuffers:Pt,useProgram:Nt,setBlending:C,setMaterial:rt,setFlipSided:mt,setCullFace:lt,setLineWidth:pt,setPolygonOffset:Dt,setScissorTest:Tt,activeTexture:R,bindTexture:b,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:X,texImage3D:ht,updateUBOMapping:kt,uniformBlockBinding:Vt,texStorage2D:Qt,texStorage3D:L,texSubImage2D:Q,texSubImage3D:It,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:dt,viewport:ut,reset:oe}}function Cu(i,t,e,n){let s=Ex(n);switch(e){case Zu:return i*t;case Ju:return i*t;case Qu:return i*t*2;case ch:return i*t/s.components*s.byteLength;case hh:return i*t/s.components*s.byteLength;case ju:return i*t*2/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case Ku:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case fh:return i*t*4/s.components*s.byteLength;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:case Vl:return Math.max(i,16)*Math.max(t,8)/4;case zl:case Hl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wa:case ac:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tf:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ex(i){switch(i){case ri:case qu:return{byteLength:1,components:1};case Sr:case Yu:case Fn:return{byteLength:2,components:1};case oh:case lh:return{byteLength:2,components:4};case Zi:case ah:case Hn:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return d?new OffscreenCanvas(R,b):La("canvas")}function _(R,b,O){let J=1,et=Tt(R);if((et.width>O||et.height>O)&&(J=O/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let Q=Math.floor(J*et.width),It=Math.floor(J*et.height);u===void 0&&(u=g(Q,It));let _t=b?g(Q,It):u;return _t.width=Q,_t.height=It,_t.getContext("2d").drawImage(R,0,0,Q,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+It+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==tn&&R.minFilter!==In}function m(R){i.generateMipmap(R)}function M(R,b,O,J,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=b;if(b===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),b===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){let It=et?Aa:ce.getTransfer(J);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=It===ve?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(R,b){let O;return R?b===null||b===Zi||b===Ns?O=i.DEPTH24_STENCIL8:b===Hn?O=i.DEPTH32F_STENCIL8:b===Sr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===Ns?O=i.DEPTH_COMPONENT24:b===Hn?O=i.DEPTH_COMPONENT32F:b===Sr&&(O=i.DEPTH_COMPONENT16),O}function y(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&h.delete(b)}function T(R){let b=R.target;b.removeEventListener("dispose",T),z(b)}function E(R){let b=n.get(R);if(b.__webglInit===void 0)return;let O=R.source,J=f.get(O);if(J){let et=J[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(R),Object.keys(J).length===0&&f.delete(O)}n.remove(R)}function I(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let O=R.source,J=f.get(O);delete J[b.__cacheKey],a.memory.textures--}function z(R){let b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let et=0;et<b.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[J][et]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=R.textures;for(let J=0,et=O.length;J<et;J++){let Q=n.get(O[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(O[J])}n.remove(R)}let v=0;function S(){v=0}function H(){let R=v;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function B(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function G(R,b){let O=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(O,R,b);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function j(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){$t(O,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function k(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){$t(O,R,b);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function st(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){K(O,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let V={[si]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},ct={[tn]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},yt={[Cd]:i.NEVER,[Nd]:i.ALWAYS,[Pd]:i.LESS,[ef]:i.LEQUAL,[Id]:i.EQUAL,[Ud]:i.GEQUAL,[Ld]:i.GREATER,[Dd]:i.NOTEQUAL};function vt(R,b){if(b.type===Hn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Wo||b.magFilter===Gr||b.magFilter===$i||b.minFilter===In||b.minFilter===Wo||b.minFilter===Gr||b.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,V[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,V[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,V[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==Gr&&b.minFilter!==$i||b.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(R,b){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let J=b.source,et=f.get(J);et===void 0&&(et={},f.set(J,et));let Q=B(b);if(Q!==R.__cacheKey){et[Q]===void 0&&(et[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[Q].usedTimes++;let It=et[R.__cacheKey];It!==void 0&&(et[R.__cacheKey].usedTimes--,It.usedTimes===0&&I(b)),R.__cacheKey=Q,R.__webglTexture=et[Q].texture}return O}function $t(R,b,O){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);let et=Jt(R,b),Q=b.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+O);let It=n.get(Q);if(Q.version!==It.__version||et===!0){e.activeTexture(i.TEXTURE0+O);let _t=ce.getPrimaries(ce.workingColorSpace),At=b.colorSpace===vi?null:ce.getPrimaries(b.colorSpace),Qt=b.colorSpace===vi||_t===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let L=_(b.image,!1,s.maxTextureSize);L=Dt(b,L);let X=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),dt=M(b.internalFormat,X,ht,b.colorSpace,b.isVideoTexture);vt(J,b);let ut,kt=b.mipmaps,Vt=b.isVideoTexture!==!0,oe=It.__version===void 0||et===!0,U=Q.dataReady,gt=y(b,L);if(b.isDepthTexture)dt=x(b.format===Fs,b.type),oe&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,dt,L.width,L.height):e.texImage2D(i.TEXTURE_2D,0,dt,L.width,L.height,0,X,ht,null));else if(b.isDataTexture)if(kt.length>0){Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,gt,dt,kt[0].width,kt[0].height);for(let $=0,nt=kt.length;$<nt;$++)ut=kt[$],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ut.width,ut.height,X,ht,ut.data):e.texImage2D(i.TEXTURE_2D,$,dt,ut.width,ut.height,0,X,ht,ut.data);b.generateMipmaps=!1}else Vt?(oe&&e.texStorage2D(i.TEXTURE_2D,gt,dt,L.width,L.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,X,ht,L.data)):e.texImage2D(i.TEXTURE_2D,0,dt,L.width,L.height,0,X,ht,L.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,dt,kt[0].width,kt[0].height,L.depth);for(let $=0,nt=kt.length;$<nt;$++)if(ut=kt[$],b.format!==mn)if(X!==null)if(Vt){if(U)if(b.layerUpdates.size>0){let wt=Cu(ut.width,ut.height,b.format,b.type);for(let Rt of b.layerUpdates){let ie=ut.data.subarray(Rt*wt/ut.data.BYTES_PER_ELEMENT,(Rt+1)*wt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Rt,ut.width,ut.height,1,X,ie,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ut.width,ut.height,L.depth,X,ut.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,dt,ut.width,ut.height,L.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ut.width,ut.height,L.depth,X,ht,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,dt,ut.width,ut.height,L.depth,0,X,ht,ut.data)}else{Vt&&oe&&e.texStorage2D(i.TEXTURE_2D,gt,dt,kt[0].width,kt[0].height);for(let $=0,nt=kt.length;$<nt;$++)ut=kt[$],b.format!==mn?X!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ut.width,ut.height,X,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,$,dt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ut.width,ut.height,X,ht,ut.data):e.texImage2D(i.TEXTURE_2D,$,dt,ut.width,ut.height,0,X,ht,ut.data)}else if(b.isDataArrayTexture)if(Vt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,dt,L.width,L.height,L.depth),U)if(b.layerUpdates.size>0){let $=Cu(L.width,L.height,b.format,b.type);for(let nt of b.layerUpdates){let wt=L.data.subarray(nt*$/L.data.BYTES_PER_ELEMENT,(nt+1)*$/L.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,L.width,L.height,1,X,ht,wt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,X,ht,L.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,L.width,L.height,L.depth,0,X,ht,L.data);else if(b.isData3DTexture)Vt?(oe&&e.texStorage3D(i.TEXTURE_3D,gt,dt,L.width,L.height,L.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,X,ht,L.data)):e.texImage3D(i.TEXTURE_3D,0,dt,L.width,L.height,L.depth,0,X,ht,L.data);else if(b.isFramebufferTexture){if(oe)if(Vt)e.texStorage2D(i.TEXTURE_2D,gt,dt,L.width,L.height);else{let $=L.width,nt=L.height;for(let wt=0;wt<gt;wt++)e.texImage2D(i.TEXTURE_2D,wt,dt,$,nt,0,X,ht,null),$>>=1,nt>>=1}}else if(kt.length>0){if(Vt&&oe){let $=Tt(kt[0]);e.texStorage2D(i.TEXTURE_2D,gt,dt,$.width,$.height)}for(let $=0,nt=kt.length;$<nt;$++)ut=kt[$],Vt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,X,ht,ut):e.texImage2D(i.TEXTURE_2D,$,dt,X,ht,ut);b.generateMipmaps=!1}else if(Vt){if(oe){let $=Tt(L);e.texStorage2D(i.TEXTURE_2D,gt,dt,$.width,$.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,X,ht,L)}else e.texImage2D(i.TEXTURE_2D,0,dt,X,ht,L);p(b)&&m(J),It.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function K(R,b,O){if(b.image.length!==6)return;let J=Jt(R,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);let Q=n.get(et);if(et.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+O);let It=ce.getPrimaries(ce.workingColorSpace),_t=b.colorSpace===vi?null:ce.getPrimaries(b.colorSpace),At=b.colorSpace===vi||It===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,X=[];for(let nt=0;nt<6;nt++)!Qt&&!L?X[nt]=_(b.image[nt],!0,s.maxCubemapSize):X[nt]=L?b.image[nt].image:b.image[nt],X[nt]=Dt(b,X[nt]);let ht=X[0],dt=r.convert(b.format,b.colorSpace),ut=r.convert(b.type),kt=M(b.internalFormat,dt,ut,b.colorSpace),Vt=b.isVideoTexture!==!0,oe=Q.__version===void 0||J===!0,U=et.dataReady,gt=y(b,ht);vt(i.TEXTURE_CUBE_MAP,b);let $;if(Qt){Vt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,kt,ht.width,ht.height);for(let nt=0;nt<6;nt++){$=X[nt].mipmaps;for(let wt=0;wt<$.length;wt++){let Rt=$[wt];b.format!==mn?dt!==null?Vt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Rt.width,Rt.height,dt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,kt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,Rt.width,Rt.height,dt,ut,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,kt,Rt.width,Rt.height,0,dt,ut,Rt.data)}}}else{if($=b.mipmaps,Vt&&oe){$.length>0&&gt++;let nt=Tt(X[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,kt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,X[nt].width,X[nt].height,dt,ut,X[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,kt,X[nt].width,X[nt].height,0,dt,ut,X[nt].data);for(let wt=0;wt<$.length;wt++){let ie=$[wt].image[nt].image;Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,ie.width,ie.height,dt,ut,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,kt,ie.width,ie.height,0,dt,ut,ie.data)}}else{Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,ut,X[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,kt,dt,ut,X[nt]);for(let wt=0;wt<$.length;wt++){let Rt=$[wt];Vt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,dt,ut,Rt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,kt,dt,ut,Rt.image[nt])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),Q.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ot(R,b,O,J,et,Q){let It=r.convert(O.format,O.colorSpace),_t=r.convert(O.type),At=M(O.internalFormat,It,_t,O.colorSpace);if(!n.get(b).__hasExternalTextures){let L=Math.max(1,b.width>>Q),X=Math.max(1,b.height>>Q);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,At,L,X,b.depth,0,It,_t,null):e.texImage2D(et,Q,At,L,X,0,It,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),lt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,n.get(O).__webglTexture,0,mt(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,n.get(O).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let J=b.depthTexture,et=J&&J.isDepthTexture?J.type:null,Q=x(b.stencilBuffer,et),It=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=mt(b);lt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Q,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,R)}else{let J=b.textures;for(let et=0;et<J.length;et++){let Q=J[et],It=r.convert(Q.format,Q.colorSpace),_t=r.convert(Q.type),At=M(Q.internalFormat,It,_t,Q.colorSpace),Qt=mt(b);O&&lt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,At,b.width,b.height):lt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let J=n.get(b.depthTexture).__webglTexture,et=mt(b);if(b.depthTexture.format===Rs)lt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(b.depthTexture.format===Fs)lt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Bt(R){let b=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");at(b.__webglFramebuffer,R)}else if(O){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),Et(b.__webglDepthbuffer[J],R,!1);else{let et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Et(b.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,b,O){let J=n.get(R);b!==void 0&&ot(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Bt(R)}function Nt(R){let b=R.texture,O=n.get(R),J=n.get(b);R.addEventListener("dispose",T);let et=R.textures,Q=R.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,a.memory.textures++),Q){O.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[_t]=[];for(let At=0;At<b.mipmaps.length;At++)O.__webglFramebuffer[_t][At]=i.createFramebuffer()}else O.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)O.__webglFramebuffer[_t]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(It)for(let _t=0,At=et.length;_t<At;_t++){let Qt=n.get(et[_t]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&lt(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<et.length;_t++){let At=et[_t];O.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);let Qt=r.convert(At.format,At.colorSpace),L=r.convert(At.type),X=M(At.internalFormat,Qt,L,At.colorSpace,R.isXRRenderTarget===!0),ht=mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,X,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),vt(i.TEXTURE_CUBE_MAP,b);for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)ot(O.__webglFramebuffer[_t][At],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else ot(O.__webglFramebuffer[_t],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);p(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let _t=0,At=et.length;_t<At;_t++){let Qt=et[_t],L=n.get(Qt);e.bindTexture(i.TEXTURE_2D,L.__webglTexture),vt(i.TEXTURE_2D,Qt),ot(O.__webglFramebuffer,R,Qt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),p(Qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,J.__webglTexture),vt(_t,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)ot(O.__webglFramebuffer[At],R,b,i.COLOR_ATTACHMENT0,_t,At);else ot(O.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,_t,0);p(b)&&m(_t),e.unbindTexture()}R.depthBuffer&&Bt(R)}function Zt(R){let b=R.textures;for(let O=0,J=b.length;O<J;O++){let et=b[O];if(p(et)){let Q=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,It=n.get(et).__webglTexture;e.bindTexture(Q,It),m(Q),e.unbindTexture()}}}let tt=[],C=[];function rt(R){if(R.samples>0){if(lt(R)===!1){let b=R.textures,O=R.width,J=R.height,et=i.COLOR_BUFFER_BIT,Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(R),_t=b.length>1;if(_t)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let At=0;At<b.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let Qt=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,et,i.NEAREST),l===!0&&(tt.length=0,C.length=0,tt.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(Q),C.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let Qt=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function mt(R){return Math.min(s.maxSamples,R.samples)}function lt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pt(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Dt(R,b){let O=R.colorSpace,J=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Ri&&O!==vi&&(ce.getTransfer(O)===ve?(J!==mn||et!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Tt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=k,this.setTextureCube=st,this.rebindTextures=Pt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=lt}function Ax(i,t){function e(n,s=vi){let r,a=ce.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return i.BYTE;if(n===Yu)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===ah)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Zu)return i.ALPHA;if(n===Ku)return i.RGB;if(n===mn)return i.RGBA;if(n===Ju)return i.LUMINANCE;if(n===Qu)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===ch)return i.RED;if(n===hh)return i.RED_INTEGER;if(n===ju)return i.RG;if(n===uh)return i.RG_INTEGER;if(n===fh)return i.RGBA_INTEGER;if(n===ya||n===Ma||n===ba||n===Sa)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===kl||n===Hl||n===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Wl)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Yl||n===$l||n===Zl||n===Kl||n===Jl||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===ac||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wa)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tf||n===lc||n===cc||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ae=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rx={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
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

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new be({vertexShader:Cx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends Si{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=new Ac,p=e.getContextAttributes(),m=null,M=null,x=[],y=[],A=new it,T=null,E=new Je;E.layers.enable(1),E.viewport=new xe;let I=new Je;I.layers.enable(2),I.viewport=new xe;let z=[E,I],v=new Tc;v.layers.enable(1),v.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=x[K];return ot===void 0&&(ot=new vr,x[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=x[K];return ot===void 0&&(ot=new vr,x[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=x[K];return ot===void 0&&(ot=new vr,x[K]=ot),ot.getHandSpace()};function B(K){let ot=y.indexOf(K.inputSource);if(ot===-1)return;let Et=x[ot];Et!==void 0&&(Et.update(K.inputSource,K.frame,c||a),Et.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let K=0;K<x.length;K++){let ot=y[K];ot!==null&&(y[K]=null,x[K].disconnect(ot))}S=null,H=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,M=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new sn(d.framebufferWidth,d.framebufferHeight,{format:mn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,Et=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?Fs:Rs,Et=p.stencil?Ns:Zi);let Bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new sn(f.textureWidth,f.textureHeight,{format:mn,type:ri,depthTexture:new Ha(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(K){for(let ot=0;ot<K.removed.length;ot++){let Et=K.removed[ot],at=y.indexOf(Et);at>=0&&(y[at]=null,x[at].disconnect(Et))}for(let ot=0;ot<K.added.length;ot++){let Et=K.added[ot],at=y.indexOf(Et);if(at===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=y.length){y.push(Et),at=Pt;break}else if(y[Pt]===null){y[Pt]=Et,at=Pt;break}if(at===-1)break}let Bt=x[at];Bt&&Bt.connect(Et)}}let k=new P,st=new P;function V(K,ot,Et){k.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(Et.matrixWorld);let at=k.distanceTo(st),Bt=ot.projectionMatrix.elements,Pt=Et.projectionMatrix.elements,Nt=Bt[14]/(Bt[10]-1),Zt=Bt[14]/(Bt[10]+1),tt=(Bt[9]+1)/Bt[5],C=(Bt[9]-1)/Bt[5],rt=(Bt[8]-1)/Bt[0],mt=(Pt[8]+1)/Pt[0],lt=Nt*rt,pt=Nt*mt,Dt=at/(-rt+mt),Tt=Dt*-rt;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Bt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let R=Nt+Dt,b=Zt+Dt,O=lt-Tt,J=pt+(at-Tt),et=tt*Zt/b*R,Q=C*Zt/b*R;K.projectionMatrix.makePerspective(O,J,et,Q,R,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ct(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,Et=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),v.near=I.near=E.near=ot,v.far=I.far=E.far=Et,(S!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,H=v.far);let at=K.parent,Bt=v.cameras;ct(v,at);for(let Pt=0;Pt<Bt.length;Pt++)ct(Bt[Pt],at);Bt.length===2?V(v,E,I):v.projectionMatrix.copy(E.projectionMatrix),yt(K,v,at)};function yt(K,ot,Et){Et===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(Et.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ia*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let vt=null;function Jt(K,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){let Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let at=!1;Et.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Pt=0;Pt<Et.length;Pt++){let Nt=Et[Pt],Zt=null;if(d!==null)Zt=d.getViewport(Nt);else{let C=u.getViewSubImage(f,Nt);Zt=C.viewport,Pt===0&&(t.setRenderTargetTextures(M,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let tt=z[Pt];tt===void 0&&(tt=new Je,tt.layers.enable(Pt),tt.viewport=new xe,z[Pt]=tt),tt.matrix.fromArray(Nt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Nt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Pt===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(tt)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){let Pt=u.getDepthInformation(Et[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let Et=0;Et<x.length;Et++){let at=y[Et],Bt=x[Et];at!==null&&Bt!==void 0&&Bt.update(at,ot,c||a)}vt&&vt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let $t=new af;$t.setAnimationLoop(Jt),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}},Gi=new Ln,Ix=new se;function Lx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,rf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ie&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ie&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,Gi.copy(y),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),p.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(Gi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));let A=x.program;n.updateUBOMapping(M,A);let T=t.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){let x=u();M.__bindingPointIndex=x;let y=i.createBuffer(),A=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=y.length;T<E;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let z=0,v=I.length;z<v;z++){let S=I[z];if(d(S,T,z,A)===!0){let H=S.__offset,B=Array.isArray(S.value)?S.value:[S.value],G=0;for(let j=0;j<B.length;j++){let k=B[j],st=_(k);typeof k=="number"||typeof k=="boolean"?(S.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+G,S.__data)):k.isMatrix3?(S.__data[0]=k.elements[0],S.__data[1]=k.elements[1],S.__data[2]=k.elements[2],S.__data[3]=0,S.__data[4]=k.elements[3],S.__data[5]=k.elements[4],S.__data[6]=k.elements[5],S.__data[7]=0,S.__data[8]=k.elements[6],S.__data[9]=k.elements[7],S.__data[10]=k.elements[8],S.__data[11]=0):(k.toArray(S.__data,G),G+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,y,A){let T=M.value,E=x+"_"+y;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{let I=A[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(M){let x=M.uniforms,y=0,A=16;for(let E=0,I=x.length;E<I;E++){let z=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,S=z.length;v<S;v++){let H=z[v],B=Array.isArray(H.value)?H.value:[H.value];for(let G=0,j=B.length;G<j;G++){let k=B[G],st=_(k),V=y%A,ct=V%st.boundary,yt=V+ct;y+=ct,yt!==0&&A-yt<st.storage&&(y+=A-yt),H.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=st.storage}}}let T=y%A;return T>0&&(y+=A-T),M.__size=y,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Va=class{constructor(t={}){let{canvas:e=Bd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let d=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Mi,this.toneMappingExposure=1;let x=this,y=!1,A=0,T=0,E=null,I=-1,z=null,v=new xe,S=new xe,H=null,B=new Mt(0),G=0,j=e.width,k=e.height,st=1,V=null,ct=null,yt=new xe(0,0,j,k),vt=new xe(0,0,j,k),Jt=!1,$t=new wr,K=!1,ot=!1,Et=new se,at=new se,Bt=new P,Pt=new xe,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function tt(){return E===null?st:1}let C=n;function rt(w,N){return e.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),C===null){let N="webgl2";if(C=rt(N,w),C===null)throw rt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,lt,pt,Dt,Tt,R,b,O,J,et,Q,It,_t,At,Qt,L,X,ht,dt,ut,kt,Vt,oe,U;function gt(){mt=new Z0(C),mt.init(),Vt=new Ax(C,mt),lt=new G0(C,mt,t,Vt),pt=new wx(C),lt.reverseDepthBuffer&&pt.buffers.depth.setReversed(!0),Dt=new Q0(C),Tt=new ux,R=new Tx(C,mt,pt,Tt,lt,Vt,Dt),b=new X0(x),O=new $0(x),J=new rp(C),oe=new H0(C,J),et=new K0(C,J,Dt,oe),Q=new tg(C,et,J,Dt),dt=new j0(C,lt,R),L=new W0(Tt),It=new hx(x,b,O,mt,lt,oe,L),_t=new Lx(x,Tt),At=new dx,Qt=new vx(mt),ht=new k0(x,b,O,pt,Q,f,l),X=new bx(x,Q,lt),U=new Dx(C,Dt,lt,pt),ut=new V0(C,mt,Dt),kt=new J0(C,mt,Dt),Dt.programs=It.programs,x.capabilities=lt,x.extensions=mt,x.properties=Tt,x.renderLists=At,x.shadowMap=X,x.state=pt,x.info=Dt}gt();let $=new Rc(x,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(j,k,!1))},this.getSize=function(w){return w.set(j,k)},this.setSize=function(w,N,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,k=N,e.width=Math.floor(w*st),e.height=Math.floor(N*st),W===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(j*st,k*st).floor()},this.setDrawingBufferSize=function(w,N,W){j=w,k=N,st=W,e.width=Math.floor(w*W),e.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,N,W,q){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,N,W,q),pt.viewport(v.copy(yt).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,N,W,q){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,N,W,q),pt.scissor(S.copy(vt).multiplyScalar(st).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(w){pt.setScissorTest(Jt=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(w=!0,N=!0,W=!0){let q=0;if(w){let F=!1;if(E!==null){let xt=E.texture.format;F=xt===fh||xt===uh||xt===hh}if(F){let xt=E.texture.type,Ct=xt===ri||xt===Zi||xt===Sr||xt===Ns||xt===oh||xt===lh,Ut=ht.getClearColor(),Ft=ht.getClearAlpha(),Wt=Ut.r,qt=Ut.g,Ot=Ut.b;Ct?(d[0]=Wt,d[1]=qt,d[2]=Ot,d[3]=Ft,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=Wt,g[1]=qt,g[2]=Ot,g[3]=Ft,C.clearBufferiv(C.COLOR,0,g))}else q|=C.COLOR_BUFFER_BIT}N&&(q|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),At.dispose(),Qt.dispose(),Tt.dispose(),b.dispose(),O.dispose(),Q.dispose(),oe.dispose(),U.dispose(),It.dispose(),$.dispose(),$.removeEventListener("sessionstart",nr),$.removeEventListener("sessionend",ir),On.stop()};function nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=Dt.autoReset,N=X.enabled,W=X.autoUpdate,q=X.needsUpdate,F=X.type;gt(),Dt.autoReset=w,X.enabled=N,X.autoUpdate=W,X.needsUpdate=q,X.type=F}function Rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){let N=w.target;N.removeEventListener("dispose",ie),Re(N)}function Re(w){Ye(w),Tt.remove(w)}function Ye(w){let N=Tt.get(w).programs;N!==void 0&&(N.forEach(function(W){It.releaseProgram(W)}),w.isShaderMaterial&&It.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,q,F,xt){N===null&&(N=Nt);let Ct=F.isMesh&&F.matrixWorld.determinant()<0,Ut=kr(w,N,W,q,F);pt.setMaterial(q,Ct);let Ft=W.index,Wt=1;if(q.wireframe===!0){if(Ft=et.getWireframeAttribute(W),Ft===void 0)return;Wt=2}let qt=W.drawRange,Ot=W.attributes.position,me=qt.start*Wt,we=(qt.start+qt.count)*Wt;xt!==null&&(me=Math.max(me,xt.start*Wt),we=Math.min(we,(xt.start+xt.count)*Wt)),Ft!==null?(me=Math.max(me,0),we=Math.min(we,Ft.count)):Ot!=null&&(me=Math.max(me,0),we=Math.min(we,Ot.count));let Ce=we-me;if(Ce<0||Ce===1/0)return;oe.setup(F,q,Ut,W,Ft);let un,ue=ut;if(Ft!==null&&(un=J.get(Ft),ue=kt,ue.setIndex(un)),F.isMesh)q.wireframe===!0?(pt.setLineWidth(q.wireframeLinewidth*tt()),ue.setMode(C.LINES)):ue.setMode(C.TRIANGLES);else if(F.isLine){let zt=q.linewidth;zt===void 0&&(zt=1),pt.setLineWidth(zt*tt()),F.isLineSegments?ue.setMode(C.LINES):F.isLineLoop?ue.setMode(C.LINE_LOOP):ue.setMode(C.LINE_STRIP)}else F.isPoints?ue.setMode(C.POINTS):F.isSprite&&ue.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let zt=F._multiDrawStarts,Ze=F._multiDrawCounts,fe=F._multiDrawCount,An=Ft?J.get(Ft).bytesPerElement:1,rs=Tt.get(q).currentProgram.getUniforms();for(let fn=0;fn<fe;fn++)rs.setValue(C,"_gl_DrawID",fn),ue.render(zt[fn]/An,Ze[fn])}else if(F.isInstancedMesh)ue.renderInstances(me,Ce,F.count);else if(W.isInstancedBufferGeometry){let zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ze=Math.min(W.instanceCount,zt);ue.renderInstances(me,Ce,Ze)}else ue.render(me,Ce)};function le(w,N,W){w.transparent===!0&&w.side===Pe&&w.forceSinglePass===!1?(w.side=Ie,w.needsUpdate=!0,Le(w,N,W),w.side=bi,w.needsUpdate=!0,Le(w,N,W),w.side=Pe):Le(w,N,W)}this.compile=function(w,N,W=null){W===null&&(W=w),p=Qt.get(W),p.init(N),M.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==W&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let q=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let xt=F.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){let Ut=xt[Ct];le(Ut,W,F),q.add(Ut)}else le(xt,W,F),q.add(xt)}),M.pop(),p=null,q},this.compileAsync=function(w,N,W=null){let q=this.compile(w,N,W);return new Promise(F=>{function xt(){if(q.forEach(function(Ct){Tt.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){F(w);return}setTimeout(xt,10)}mt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let $e=null;function Mn(w){$e&&$e(w)}function nr(){On.stop()}function ir(){On.start()}let On=new af;On.setAnimationLoop(Mn),typeof self!="undefined"&&On.setContext(self),this.setAnimationLoop=function(w){$e=w,$.setAnimationLoop(w),w===null?On.stop():On.start()},$.addEventListener("sessionstart",nr),$.addEventListener("sessionend",ir),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,E),p=Qt.get(w,M.length),p.init(N),M.push(p),at.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$t.setFromProjectionMatrix(at),ot=this.localClippingEnabled,K=L.init(this.clippingPlanes,ot),_=At.get(w,m.length),_.init(),m.push(_),$.enabled===!0&&$.isPresenting===!0){let xt=x.xr.getDepthSensingMesh();xt!==null&&ss(xt,N,-1/0,x.sortObjects)}ss(w,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,ct),Zt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Zt&&ht.addToRenderList(_,w),this.info.render.frame++,K===!0&&L.beginShadows();let W=p.state.shadowsArray;X.render(W,w,N),K===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=_.opaque,F=_.transmissive;if(p.setupLights(),N.isArrayCamera){let xt=N.cameras;if(F.length>0)for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++){let Ft=xt[Ct];rr(q,F,w,Ft)}Zt&&ht.render(w);for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++){let Ft=xt[Ct];sr(_,w,Ft,Ft.viewport)}}else F.length>0&&rr(q,F,w,N),Zt&&ht.render(w),sr(_,w,N);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(x,w,N),oe.resetDefaultState(),I=-1,z=null,M.pop(),M.length>0?(p=M[M.length-1],K===!0&&L.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ss(w,N,W,q){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$t.intersectsSprite(w)){q&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(at);let Ct=Q.update(w),Ut=w.material;Ut.visible&&_.push(w,Ct,Ut,W,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$t.intersectsObject(w))){let Ct=Q.update(w),Ut=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Pt.copy(Ct.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(at)),Array.isArray(Ut)){let Ft=Ct.groups;for(let Wt=0,qt=Ft.length;Wt<qt;Wt++){let Ot=Ft[Wt],me=Ut[Ot.materialIndex];me&&me.visible&&_.push(w,Ct,me,W,Pt.z,Ot)}}else Ut.visible&&_.push(w,Ct,Ut,W,Pt.z,null)}}let xt=w.children;for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++)ss(xt[Ct],N,W,q)}function sr(w,N,W,q){let F=w.opaque,xt=w.transmissive,Ct=w.transparent;p.setupLightsView(W),K===!0&&L.setGlobalState(x.clippingPlanes,W),q&&pt.viewport(v.copy(q)),F.length>0&&Bi(F,N,W),xt.length>0&&Bi(xt,N,W),Ct.length>0&&Bi(Ct,N,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function rr(w,N,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new sn(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Fn:ri,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let xt=p.state.transmissionRenderTarget[q.id],Ct=q.viewport||v;xt.setSize(Ct.z,Ct.w);let Ut=x.getRenderTarget();x.setRenderTarget(xt),x.getClearColor(B),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&ht.render(W);let Ft=x.toneMapping;x.toneMapping=Mi;let Wt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),K===!0&&L.setGlobalState(x.clippingPlanes,q),Bi(w,W,q),R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ot=0,me=N.length;Ot<me;Ot++){let we=N[Ot],Ce=we.object,un=we.geometry,ue=we.material,zt=we.group;if(ue.side===Pe&&Ce.layers.test(q.layers)){let Ze=ue.side;ue.side=Ie,ue.needsUpdate=!0,ar(Ce,W,q,un,ue,zt),ue.side=Ze,ue.needsUpdate=!0,qt=!0}}qt===!0&&(R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt))}x.setRenderTarget(Ut),x.setClearColor(B,G),Wt!==void 0&&(q.viewport=Wt),x.toneMapping=Ft}function Bi(w,N,W){let q=N.isScene===!0?N.overrideMaterial:null;for(let F=0,xt=w.length;F<xt;F++){let Ct=w[F],Ut=Ct.object,Ft=Ct.geometry,Wt=q===null?Ct.material:q,qt=Ct.group;Ut.layers.test(W.layers)&&ar(Ut,N,W,Ft,Wt,qt)}}function ar(w,N,W,q,F,xt){w.onBeforeRender(x,N,W,q,F,xt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,W,q,w,xt),F.transparent===!0&&F.side===Pe&&F.forceSinglePass===!1?(F.side=Ie,F.needsUpdate=!0,x.renderBufferDirect(W,N,q,F,w,xt),F.side=bi,F.needsUpdate=!0,x.renderBufferDirect(W,N,q,F,w,xt),F.side=Pe):x.renderBufferDirect(W,N,q,F,w,xt),w.onAfterRender(x,N,W,q,F,xt)}function Le(w,N,W){N.isScene!==!0&&(N=Nt);let q=Tt.get(w),F=p.state.lights,xt=p.state.shadowsArray,Ct=F.state.version,Ut=It.getParameters(w,F.state,xt,N,W),Ft=It.getProgramCacheKey(Ut),Wt=q.programs;q.environment=w.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(w.isMeshStandardMaterial?O:b).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",ie),Wt=new Map,q.programs=Wt);let qt=Wt.get(Ft);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===Ct)return ui(w,Ut),qt}else Ut.uniforms=It.getUniforms(w),w.onBeforeCompile(Ut,x),qt=It.acquireProgram(Ut,Ft),Wt.set(Ft,qt),q.uniforms=Ut.uniforms;let Ot=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=L.uniform),ui(w,Ut),q.needsLights=Vr(w),q.lightsStateVersion=Ct,q.needsLights&&(Ot.ambientLightColor.value=F.state.ambient,Ot.lightProbe.value=F.state.probe,Ot.directionalLights.value=F.state.directional,Ot.directionalLightShadows.value=F.state.directionalShadow,Ot.spotLights.value=F.state.spot,Ot.spotLightShadows.value=F.state.spotShadow,Ot.rectAreaLights.value=F.state.rectArea,Ot.ltc_1.value=F.state.rectAreaLTC1,Ot.ltc_2.value=F.state.rectAreaLTC2,Ot.pointLights.value=F.state.point,Ot.pointLightShadows.value=F.state.pointShadow,Ot.hemisphereLights.value=F.state.hemi,Ot.directionalShadowMap.value=F.state.directionalShadowMap,Ot.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ot.spotShadowMap.value=F.state.spotShadowMap,Ot.spotLightMatrix.value=F.state.spotLightMatrix,Ot.spotLightMap.value=F.state.spotLightMap,Ot.pointShadowMap.value=F.state.pointShadowMap,Ot.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function $n(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Ps.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ui(w,N){let W=Tt.get(w);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function kr(w,N,W,q,F){N.isScene!==!0&&(N=Nt),R.resetTextureUnits();let xt=N.fog,Ct=q.isMeshStandardMaterial?N.environment:null,Ut=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ri,Ft=(q.isMeshStandardMaterial?O:b).get(q.envMap||Ct),Wt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!W.morphAttributes.position,me=!!W.morphAttributes.normal,we=!!W.morphAttributes.color,Ce=Mi;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ce=x.toneMapping);let un=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=un!==void 0?un.length:0,zt=Tt.get(q),Ze=p.state.lights;if(K===!0&&(ot===!0||w!==z)){let bn=w===z&&q.id===I;L.setState(q,w,bn)}let fe=!1;q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Ze.state.version||zt.outputColorSpace!==Ut||F.isBatchedMesh&&zt.batching===!1||!F.isBatchedMesh&&zt.batching===!0||F.isBatchedMesh&&zt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&zt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&zt.instancing===!1||!F.isInstancedMesh&&zt.instancing===!0||F.isSkinnedMesh&&zt.skinning===!1||!F.isSkinnedMesh&&zt.skinning===!0||F.isInstancedMesh&&zt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&zt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&zt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&zt.instancingMorph===!1&&F.morphTexture!==null||zt.envMap!==Ft||q.fog===!0&&zt.fog!==xt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==L.numPlanes||zt.numIntersection!==L.numIntersection)||zt.vertexAlphas!==Wt||zt.vertexTangents!==qt||zt.morphTargets!==Ot||zt.morphNormals!==me||zt.morphColors!==we||zt.toneMapping!==Ce||zt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,zt.__version=q.version);let An=zt.currentProgram;fe===!0&&(An=Le(q,N,F));let rs=!1,fn=!1,Ho=!1,De=An.getUniforms(),fi=zt.uniforms;if(pt.useProgram(An.program)&&(rs=!0,fn=!0,Ho=!0),q.id!==I&&(I=q.id,fn=!0),rs||z!==w){lt.reverseDepthBuffer?(Et.copy(w.projectionMatrix),zd(Et),kd(Et),De.setValue(C,"projectionMatrix",Et)):De.setValue(C,"projectionMatrix",w.projectionMatrix),De.setValue(C,"viewMatrix",w.matrixWorldInverse);let bn=De.map.cameraPosition;bn!==void 0&&bn.setValue(C,Bt.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&De.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&De.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,fn=!0,Ho=!0)}if(F.isSkinnedMesh){De.setOptional(C,F,"bindMatrix"),De.setOptional(C,F,"bindMatrixInverse");let bn=F.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),De.setValue(C,"boneTexture",bn.boneTexture,R))}F.isBatchedMesh&&(De.setOptional(C,F,"batchingTexture"),De.setValue(C,"batchingTexture",F._matricesTexture,R),De.setOptional(C,F,"batchingIdTexture"),De.setValue(C,"batchingIdTexture",F._indirectTexture,R),De.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&De.setValue(C,"batchingColorTexture",F._colorsTexture,R));let Vo=W.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0)&&dt.update(F,W,An),(fn||zt.receiveShadow!==F.receiveShadow)&&(zt.receiveShadow=F.receiveShadow,De.setValue(C,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(fi.envMap.value=Ft,fi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(fi.envMapIntensity.value=N.environmentIntensity),fn&&(De.setValue(C,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&Hr(fi,Ho),xt&&q.fog===!0&&_t.refreshFogUniforms(fi,xt),_t.refreshMaterialUniforms(fi,q,st,k,p.state.transmissionRenderTarget[w.id]),Ps.upload(C,$n(zt),fi,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ps.upload(C,$n(zt),fi,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&De.setValue(C,"center",F.center),De.setValue(C,"modelViewMatrix",F.modelViewMatrix),De.setValue(C,"normalMatrix",F.normalMatrix),De.setValue(C,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let bn=q.uniformsGroups;for(let Go=0,ed=bn.length;Go<ed;Go++){let Nh=bn[Go];U.update(Nh,An),U.bind(Nh,An)}}return An}function Hr(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Vr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,N,W){Tt.get(w.texture).__webglTexture=N,Tt.get(w.depthTexture).__webglTexture=W;let q=Tt.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let W=Tt.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,W=0){E=w,A=N,T=W;let q=!0,F=null,xt=!1,Ct=!1;if(w){let Ft=Tt.get(w);if(Ft.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Ft.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Ft.__hasExternalTextures)R.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ot=w.depthTexture;if(Ft.__boundDepthTexture!==Ot){if(Ot!==null&&Tt.has(Ot)&&(w.width!==Ot.image.width||w.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ct=!0);let qt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?F=qt[N][W]:F=qt[N],xt=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?F=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[W]:F=qt,v.copy(w.viewport),S.copy(w.scissor),H=w.scissorTest}else v.copy(yt).multiplyScalar(st).floor(),S.copy(vt).multiplyScalar(st).floor(),H=Jt;if(pt.bindFramebuffer(C.FRAMEBUFFER,F)&&q&&pt.drawBuffers(w,F),pt.viewport(v),pt.scissor(S),pt.setScissorTest(H),xt){let Ft=Tt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ft.__webglTexture,W)}else if(Ct){let Ft=Tt.get(w.texture),Wt=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,W||0,Wt)}I=-1},this.readRenderTargetPixels=function(w,N,W,q,F,xt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){pt.bindFramebuffer(C.FRAMEBUFFER,Ut);try{let Ft=w.texture,Wt=Ft.format,qt=Ft.type;if(!lt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-q&&W>=0&&W<=w.height-F&&C.readPixels(N,W,q,F,Vt.convert(Wt),Vt.convert(qt),xt)}finally{let Ft=E!==null?Tt.get(E).__webglFramebuffer:null;pt.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,N,W,q,F,xt,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){let Ft=w.texture,Wt=Ft.format,qt=Ft.type;if(!lt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-q&&W>=0&&W<=w.height-F){pt.bindFramebuffer(C.FRAMEBUFFER,Ut);let Ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.bufferData(C.PIXEL_PACK_BUFFER,xt.byteLength,C.STREAM_READ),C.readPixels(N,W,q,F,Vt.convert(Wt),Vt.convert(qt),0);let me=E!==null?Tt.get(E).__webglFramebuffer:null;pt.bindFramebuffer(C.FRAMEBUFFER,me);let we=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Od(C,we,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xt),C.deleteBuffer(Ot),C.deleteSync(we),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,W=0){w.isTexture!==!0&&(Ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-W),F=Math.floor(w.image.width*q),xt=Math.floor(w.image.height*q),Ct=N!==null?N.x:0,Ut=N!==null?N.y:0;R.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,Ct,Ut,F,xt),pt.unbindTexture()},this.copyTextureToTexture=function(w,N,W=null,q=null,F=0){w.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,W=null);let xt,Ct,Ut,Ft,Wt,qt;W!==null?(xt=W.max.x-W.min.x,Ct=W.max.y-W.min.y,Ut=W.min.x,Ft=W.min.y):(xt=w.image.width,Ct=w.image.height,Ut=0,Ft=0),q!==null?(Wt=q.x,qt=q.y):(Wt=0,qt=0);let Ot=Vt.convert(N.format),me=Vt.convert(N.type);R.setTexture2D(N,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let we=C.getParameter(C.UNPACK_ROW_LENGTH),Ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),un=C.getParameter(C.UNPACK_SKIP_PIXELS),ue=C.getParameter(C.UNPACK_SKIP_ROWS),zt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ze=w.isCompressedTexture?w.mipmaps[F]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ze.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Wt,qt,xt,Ct,Ot,me,Ze.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Wt,qt,Ze.width,Ze.height,Ot,Ze.data):C.texSubImage2D(C.TEXTURE_2D,F,Wt,qt,xt,Ct,Ot,me,Ze),C.pixelStorei(C.UNPACK_ROW_LENGTH,we),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,un),C.pixelStorei(C.UNPACK_SKIP_ROWS,ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt),F===0&&N.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,W=null,q=null,F=0){w.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0);let xt,Ct,Ut,Ft,Wt,qt,Ot,me,we,Ce=w.isCompressedTexture?w.mipmaps[F]:w.image;W!==null?(xt=W.max.x-W.min.x,Ct=W.max.y-W.min.y,Ut=W.max.z-W.min.z,Ft=W.min.x,Wt=W.min.y,qt=W.min.z):(xt=Ce.width,Ct=Ce.height,Ut=Ce.depth,Ft=0,Wt=0,qt=0),q!==null?(Ot=q.x,me=q.y,we=q.z):(Ot=0,me=0,we=0);let un=Vt.convert(N.format),ue=Vt.convert(N.type),zt;if(N.isData3DTexture)R.setTexture3D(N,0),zt=C.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)R.setTexture2DArray(N,0),zt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let Ze=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),An=C.getParameter(C.UNPACK_SKIP_PIXELS),rs=C.getParameter(C.UNPACK_SKIP_ROWS),fn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(zt,F,Ot,me,we,xt,Ct,Ut,un,ue,Ce.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(zt,F,Ot,me,we,xt,Ct,Ut,un,Ce.data):C.texSubImage3D(zt,F,Ot,me,we,xt,Ct,Ut,un,ue,Ce),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,An),C.pixelStorei(C.UNPACK_SKIP_ROWS,rs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,fn),F===0&&N.generateMipmaps&&C.generateMipmap(zt),pt.unbindTexture()},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){A=0,T=0,E=null,pt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===dh?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===ho?"display-p3":"srgb"}};var Ga=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ei=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new P,Er=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ti=class extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,fr=new P,Ms=new P,bs=new P,Ss=new it,dr=new it,uf=new se,ha=new P,pr=new P,ua=new P,Pu=new it,Ml=new it,Iu=new it,Ki=class extends ze{constructor(t=new Ti){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wa(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Er(n,3,0,!1)),ys.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fa(ha.set(-.5,-.5,0),bs,a,Ms,s,r),fa(pr.set(.5,-.5,0),bs,a,Ms,s,r),fa(ua.set(.5,.5,0),bs,a,Ms,s,r),Pu.set(0,0),Ml.set(1,0),Iu.set(1,1);let o=t.ray.intersectTriangle(ha,pr,ua,!1,fr);if(o===null&&(fa(pr.set(-.5,.5,0),bs,a,Ms,s,r),Ml.set(0,1),o=t.ray.intersectTriangle(ha,ua,pr,!1,fr),o===null))return;let l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:yi.getInterpolation(fr,ha,pr,ua,Pu,Ml,Iu,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fa(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(dr.x=r*Ss.x-s*Ss.y,dr.y=s*Ss.x+r*Ss.y):dr.copy(Ss),i.copy(t),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(uf)}var Tr=class extends on{constructor(t=null,e=1,n=1,s,r,a,o,l,c=tn,h=tn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ar=class extends he{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new se,Lu=new se,da=[],Du=new ai,Ux=new se,mr=new ft,gr=new wi,Un=class extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Du.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),gr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Lu.multiplyMatrices(n,ws),mr.matrixWorld=Lu,mr.raycast(t,da);for(let a=0,o=da.length;a<o;a++){let l=da[a];l.instanceId=r,l.object=this,e.push(l)}da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,ch,Hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ks=class extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uu=new se,Cc=new Na,pa=new wi,ma=new P,Hs=class extends ze{constructor(t=new de,e=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;Uu.copy(s).invert(),Cc.copy(t.ray).applyMatrix4(Uu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){let p=c.getX(g);ma.fromBufferAttribute(u,p),Nu(ma,p,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)ma.fromBufferAttribute(u,g),Nu(ma,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nu(i,t,e,n,s,r,a){let o=Cc.distanceSqToPoint(i);if(o<e){let l=new P;Cc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ln=class extends on{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new se;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ke(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rr=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pc=class extends Rr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ga=new P,bl=new mh,Sl=new mh,wl=new mh,Ic=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ga.subVectors(s[0],s[1]).add(s[0]),c=ga);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ga.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ga),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),bl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),Sl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),wl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(bl.calc(l),Sl.calc(l),wl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Nx(i,t){let e=1-i;return e*e*t}function Fx(i,t){return 2*(1-i)*i*t}function Bx(i,t){return i*i*t}function yr(i,t,e,n){return Nx(i,t)+Fx(i,e)+Bx(i,n)}function Ox(i,t){let e=1-i;return e*e*e*t}function zx(i,t){let e=1-i;return 3*e*e*i*t}function kx(i,t){return 3*(1-i)*i*i*t}function Hx(i,t){return i*i*i*t}function Mr(i,t,e,n,s){return Ox(i,t)+zx(i,e)+kx(i,n)+Hx(i,s)}var Xa=class extends wn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends wn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y),Mr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends wn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dc=class extends wn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends wn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends wn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y),yr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Fu(o,l.x,c.x,h.x,u.x),Fu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Nc=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:Ic,CubicBezierCurve:Xa,CubicBezierCurve3:Lc,EllipseCurve:Rr,LineCurve:qa,LineCurve3:Dc,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:Uc,SplineCurve:$a}),Fc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Nc[s.type]().fromJSON(s))}return this}},Za=class extends Fc{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qa(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ya(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Xa(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Rr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ka=class i extends de{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,f=new it,d=new P,g=new P,_=new P,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){let x=n+M*h*s,y=Math.sin(x),A=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*A,a.push(u.x,u.y,u.z),f.x=M/e,f.y=T/(t.length-1),o.push(f.x,f.y);let E=l[3*T+0]*y,I=l[3*T+1],z=l[3*T+0]*A;c.push(E,I,z)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let y=x+M*t.length,A=y,T=y+t.length,E=y+t.length+1,I=y+1;r.push(A,T,I),r.push(E,I,T)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Me=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],p=n/2,m=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function M(){let y=new P,A=new P,T=0,E=(e-t)/n;for(let I=0;I<=r;I++){let z=[],v=I/r,S=v*(e-t)+t;for(let H=0;H<=s;H++){let B=H/s,G=B*l+o,j=Math.sin(G),k=Math.cos(G);A.x=S*j,A.y=-v*n+p,A.z=S*k,u.push(A.x,A.y,A.z),y.set(j,E,k).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-v),z.push(g++)}_.push(z)}for(let I=0;I<s;I++)for(let z=0;z<r;z++){let v=_[z][I],S=_[z+1][I],H=_[z+1][I+1],B=_[z][I+1];t>0&&(h.push(v,S,B),T+=3),e>0&&(h.push(S,H,B),T+=3)}c.addGroup(m,T,0),m+=T}function x(y){let A=g,T=new it,E=new P,I=0,z=y===!0?t:e,v=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),g++;let S=g;for(let H=0;H<=s;H++){let G=H/s*l+o,j=Math.cos(G),k=Math.sin(G);E.x=z*k,E.y=p*v,E.z=z*j,u.push(E.x,E.y,E.z),f.push(0,v,0),T.x=j*.5+.5,T.y=k*.5*v+.5,d.push(T.x,T.y),g++}for(let H=0;H<s;H++){let B=A+H,G=S+H;y===!0?h.push(G,G+1,B):h.push(G+1,G,B),I+=3}c.addGroup(m,I,y===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xn=class i extends Me{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ja=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new P,y=new P,A=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],y),d(e[T+2],A),l(x,y,A,M)}function l(M,x,y,A){let T=A+1,E=[];for(let I=0;I<=T;I++){E[I]=[];let z=M.clone().lerp(y,I/T),v=x.clone().lerp(y,I/T),S=T-I;for(let H=0;H<=S;H++)H===0&&I===T?E[I][H]=z:E[I][H]=z.clone().lerp(v,H/S)}for(let I=0;I<T;I++)for(let z=0;z<2*(T-I)-1;z++){let v=Math.floor(z/2);z%2===0?(f(E[I][v+1]),f(E[I+1][v]),f(E[I][v])):(f(E[I][v+1]),f(E[I+1][v+1]),f(E[I+1][v]))}}function c(M){let x=new P;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let M=new P;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let y=p(M)/2/Math.PI+.5,A=m(M)/Math.PI+.5;a.push(y,1-A)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){let x=a[M+0],y=a[M+2],A=a[M+4],T=Math.max(x,y,A),E=Math.min(x,y,A);T>.9&&E<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){let y=M*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){let M=new P,x=new P,y=new P,A=new P,T=new it,E=new it,I=new it;for(let z=0,v=0;z<r.length;z+=9,v+=6){M.set(r[z+0],r[z+1],r[z+2]),x.set(r[z+3],r[z+4],r[z+5]),y.set(r[z+6],r[z+7],r[z+8]),T.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),A.copy(M).add(x).add(y).divideScalar(3);let S=p(A);_(T,v+0,M,S),_(E,v+2,x,S),_(I,v+4,y,S)}}function _(M,x,y,A){A<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Vs=class i extends Ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ai=class extends Za{constructor(t){super(t),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Za().fromJSON(s))}return this}},Vx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ff(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=Yx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Cr(r,a,e,o,l,d,0),a}};function ff(i,t,e,n,s){let r,a;if(s===s_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Bu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Bu(r,i[r],i[r+1],a);return a&&fo(a,a.next)&&(Ir(a),a=a.next),a}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fo(e,e.next)||Te(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Qx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Wx(i,n,s,r):Gx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ir(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xx(Ji(i),t,e),Cr(i,t,e,n,s,r,2)):a===2&&qx(i,t,e,n,s,r):Cr(Ji(i),t,e,n,s,r,1);break}}}function Gx(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ts(s,o,r,l,a,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Bc(d,g,t,e,n),M=Bc(_,p,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Ts(o,h,l,u,c,f,x.x,x.y)&&Te(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ts(o,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Ts(o,h,l,u,c,f,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ts(o,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!fo(s,r)&&df(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return Ji(n)}function qx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&e_(a,o)){let l=pf(a,o);a=Ji(a,a.next),l=Ji(l,l.next),Cr(a,t,e,n,s,r,0),Cr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Yx(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ff(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(t_(c));for(s.sort($x),r=0;r<s.length;r++)e=Zx(s[r],e);return e}function $x(i,t){return i.x-t.x}function Zx(i,t){let e=Kx(i,t);if(!e)return t;let n=pf(e,i);return Ji(n,n.next),Ji(e,e.next)}function Kx(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ts(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Pr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Jx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Jx(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Qx(i,t,e,n){let s=i;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jx(s)}function jx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function t_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ts(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function e_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!n_(i,t)&&(Pr(i,t)&&Pr(t,i)&&i_(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||fo(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fo(i,t){return i.x===t.x&&i.y===t.y}function df(i,t,e,n){let s=_a(Te(i,t,e)),r=_a(Te(i,t,n)),a=_a(Te(e,n,i)),o=_a(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&xa(i,e,t)||r===0&&xa(i,n,t)||a===0&&xa(e,i,n)||o===0&&xa(e,t,n))}function xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function n_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&df(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function i_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pf(i,t){let e=new Oc(i.i,i.x,i.y),n=new Oc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bu(i,t,e,n){let s=new Oc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function s_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var br=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ou(t),zu(n,t);let a=t.length;e.forEach(Ou);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,zu(n,e[l]);let o=Vx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ou(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qa=class i extends de{constructor(t=new Ai([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:r_,x,y=!1,A,T,E,I;m&&(x=m.getSpacedPoints(h),y=!0,f=!1,A=m.computeFrenetFrames(h,!1),T=new P,E=new P,I=new P),f||(p=0,d=0,g=0,_=0);let z=o.extractPoints(c),v=z.shape,S=z.holes;if(!br.isClockWise(v)){v=v.reverse();for(let tt=0,C=S.length;tt<C;tt++){let rt=S[tt];br.isClockWise(rt)&&(S[tt]=rt.reverse())}}let B=br.triangulateShape(v,S),G=v;for(let tt=0,C=S.length;tt<C;tt++){let rt=S[tt];v=v.concat(rt)}function j(tt,C,rt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(C,rt)}let k=v.length,st=B.length;function V(tt,C,rt){let mt,lt,pt,Dt=tt.x-C.x,Tt=tt.y-C.y,R=rt.x-tt.x,b=rt.y-tt.y,O=Dt*Dt+Tt*Tt,J=Dt*b-Tt*R;if(Math.abs(J)>Number.EPSILON){let et=Math.sqrt(O),Q=Math.sqrt(R*R+b*b),It=C.x-Tt/et,_t=C.y+Dt/et,At=rt.x-b/Q,Qt=rt.y+R/Q,L=((At-It)*b-(Qt-_t)*R)/(Dt*b-Tt*R);mt=It+Dt*L-tt.x,lt=_t+Tt*L-tt.y;let X=mt*mt+lt*lt;if(X<=2)return new it(mt,lt);pt=Math.sqrt(X/2)}else{let et=!1;Dt>Number.EPSILON?R>Number.EPSILON&&(et=!0):Dt<-Number.EPSILON?R<-Number.EPSILON&&(et=!0):Math.sign(Tt)===Math.sign(b)&&(et=!0),et?(mt=-Tt,lt=Dt,pt=Math.sqrt(O)):(mt=Dt,lt=Tt,pt=Math.sqrt(O/2))}return new it(mt/pt,lt/pt)}let ct=[];for(let tt=0,C=G.length,rt=C-1,mt=tt+1;tt<C;tt++,rt++,mt++)rt===C&&(rt=0),mt===C&&(mt=0),ct[tt]=V(G[tt],G[rt],G[mt]);let yt=[],vt,Jt=ct.concat();for(let tt=0,C=S.length;tt<C;tt++){let rt=S[tt];vt=[];for(let mt=0,lt=rt.length,pt=lt-1,Dt=mt+1;mt<lt;mt++,pt++,Dt++)pt===lt&&(pt=0),Dt===lt&&(Dt=0),vt[mt]=V(rt[mt],rt[pt],rt[Dt]);yt.push(vt),Jt=Jt.concat(vt)}for(let tt=0;tt<p;tt++){let C=tt/p,rt=d*Math.cos(C*Math.PI/2),mt=g*Math.sin(C*Math.PI/2)+_;for(let lt=0,pt=G.length;lt<pt;lt++){let Dt=j(G[lt],ct[lt],mt);at(Dt.x,Dt.y,-rt)}for(let lt=0,pt=S.length;lt<pt;lt++){let Dt=S[lt];vt=yt[lt];for(let Tt=0,R=Dt.length;Tt<R;Tt++){let b=j(Dt[Tt],vt[Tt],mt);at(b.x,b.y,-rt)}}}let $t=g+_;for(let tt=0;tt<k;tt++){let C=f?j(v[tt],Jt[tt],$t):v[tt];y?(E.copy(A.normals[0]).multiplyScalar(C.x),T.copy(A.binormals[0]).multiplyScalar(C.y),I.copy(x[0]).add(E).add(T),at(I.x,I.y,I.z)):at(C.x,C.y,0)}for(let tt=1;tt<=h;tt++)for(let C=0;C<k;C++){let rt=f?j(v[C],Jt[C],$t):v[C];y?(E.copy(A.normals[tt]).multiplyScalar(rt.x),T.copy(A.binormals[tt]).multiplyScalar(rt.y),I.copy(x[tt]).add(E).add(T),at(I.x,I.y,I.z)):at(rt.x,rt.y,u/h*tt)}for(let tt=p-1;tt>=0;tt--){let C=tt/p,rt=d*Math.cos(C*Math.PI/2),mt=g*Math.sin(C*Math.PI/2)+_;for(let lt=0,pt=G.length;lt<pt;lt++){let Dt=j(G[lt],ct[lt],mt);at(Dt.x,Dt.y,u+rt)}for(let lt=0,pt=S.length;lt<pt;lt++){let Dt=S[lt];vt=yt[lt];for(let Tt=0,R=Dt.length;Tt<R;Tt++){let b=j(Dt[Tt],vt[Tt],mt);y?at(b.x,b.y+x[h-1].y,x[h-1].x+rt):at(b.x,b.y,u+rt)}}}K(),ot();function K(){let tt=s.length/3;if(f){let C=0,rt=k*C;for(let mt=0;mt<st;mt++){let lt=B[mt];Bt(lt[2]+rt,lt[1]+rt,lt[0]+rt)}C=h+p*2,rt=k*C;for(let mt=0;mt<st;mt++){let lt=B[mt];Bt(lt[0]+rt,lt[1]+rt,lt[2]+rt)}}else{for(let C=0;C<st;C++){let rt=B[C];Bt(rt[2],rt[1],rt[0])}for(let C=0;C<st;C++){let rt=B[C];Bt(rt[0]+k*h,rt[1]+k*h,rt[2]+k*h)}}n.addGroup(tt,s.length/3-tt,0)}function ot(){let tt=s.length/3,C=0;Et(G,C),C+=G.length;for(let rt=0,mt=S.length;rt<mt;rt++){let lt=S[rt];Et(lt,C),C+=lt.length}n.addGroup(tt,s.length/3-tt,1)}function Et(tt,C){let rt=tt.length;for(;--rt>=0;){let mt=rt,lt=rt-1;lt<0&&(lt=tt.length-1);for(let pt=0,Dt=h+p*2;pt<Dt;pt++){let Tt=k*pt,R=k*(pt+1),b=C+mt+Tt,O=C+lt+Tt,J=C+lt+R,et=C+mt+R;Pt(b,O,J,et)}}}function at(tt,C,rt){l.push(tt),l.push(C),l.push(rt)}function Bt(tt,C,rt){Nt(tt),Nt(C),Nt(rt);let mt=s.length/3,lt=M.generateTopUV(n,s,mt-3,mt-2,mt-1);Zt(lt[0]),Zt(lt[1]),Zt(lt[2])}function Pt(tt,C,rt,mt){Nt(tt),Nt(C),Nt(mt),Nt(C),Nt(rt),Nt(mt);let lt=s.length/3,pt=M.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);Zt(pt[0]),Zt(pt[1]),Zt(pt[3]),Zt(pt[1]),Zt(pt[2]),Zt(pt[3])}function Nt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Zt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return a_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nc[s.type]().fromJSON(s)),new i(n,t.options)}},r_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-u),new it(f,1-g),new it(_,1-m)]:[new it(o,1-l),new it(h,1-u),new it(d,1-g),new it(p,1-m)]}};function a_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ja=class i extends Ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Gn=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,f=new P,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let M=[],x=m/n,y=0;m===0&&a===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+y,1-x),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let x=h[m][M+1],y=h[m][M],A=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&d.push(x,y,T),(m!==n-1||l<Math.PI)&&d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wn=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,M=(s+1)*d+g;a.push(_,p,M),a.push(p,m,M)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var to=class extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var eo=class extends Dn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function va(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function o_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kh:r=t,o=2*e-n;break;case Hh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kh:a=t,l=2*n-e;break;case Hh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*_+.5*g,y=d*p-d*_;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+M*a[c+A]+x*a[l+A]+y*a[u+A];return r}},kc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Hc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&o_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=uc;var Qi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ta;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Nn{};Vc.prototype.ValueTypeName="color";var Gc=class extends Nn{};Gc.prototype.ValueTypeName="number";var Wc=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},no=class extends Nn{InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Nn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ta;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Nn{};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},l_=new qc,Yc=class{constructor(t){this.manager=t!==void 0?t:l_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},io=class extends Ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},El=new se,ku=new P,Hu=new P,Lr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hu),e.updateMatrixWorld(),El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$c=class extends Lr{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ia*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},so=class extends Ws{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $c}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Vu=new se,xr=new P,Tl=new P,Zc=class extends Lr{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),Tl.copy(n.position),Tl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tl),n.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}},ro=class extends Ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Kc=class extends Lr{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ao=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Kc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Gu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Gu(){return performance.now()}var gh="\\[\\]\\.:\\/",c_=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",h_="[^"+gh.replace("\\.","")+"]",u_=/((?:WC+[\/:])*)/.source.replace("WC",xh),f_=/(WCOD+)?/.source.replace("WCOD",h_),d_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),p_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),m_=new RegExp("^"+u_+f_+d_+p_+"$"),g_=["material","materials","bones","map"],Jc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c_,"")}static parseTrackName(t){let e=m_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);g_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Jc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);var po=class extends Ei{constructor(){super();let t=new _e;t.deleteAttribute("uv");let e=new ae({side:Ie}),n=new ae,s=new ro(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ft(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ft(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new ft(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new ft(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ft(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ft(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ft(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new ft(t,qs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new ft(t,qs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new ft(t,qs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new ft(t,qs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let p=new ft(t,qs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new ft(t,qs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function qs(i){let t=new ye;return t.color.setScalar(i),t}function Xe(i,t,e){return i<t?t:i>e?e:i}function oi(i){return i<0?-1:i>0?1:0}var mo=class{constructor(t){var n;this.spec=t;let e=t;this.m=e.mass,this.L=e.wheelbase,this.a=e.wheelbase*e.frontWeight,this.b=e.wheelbase-this.a,this.I=e.mass*((n=e.inertiaK)!=null?n:.95)*this.a*this.b*1.35,this.reset(0,0,0)}reset(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=0,this.vz=0,this.r=0,this.u=0,this.v=0,this.steer=0,this.gear=1,this.rpm=this.spec.idle,this.shiftTimer=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.spinR=0,this.lockR=0,this.frontSlide=0,this.rearSlide=0,this.wheelSpin=0,this.offroad=!1,this.lastHit=0}get speed(){return Math.hypot(this.vx,this.vz)}get kmh(){return this.speed*3.6}get beta(){return this.speed<1?0:Math.atan2(this.v,Math.abs(this.u))}torqueAt(t){var a;let e=this.spec,n=Xe(t/e.redline,0,1.05),s=(a=e.peakAt)!=null?a:.7,r;return n<s?r=.55+.45*Math.sin(n/s*Math.PI/2):r=1-.35*Math.pow((n-s)/(1.05-s),2),e.torque*r}step(t,e,n){var Ye,le,$e,Mn,nr,ir,On,ss,sr,rr,Bi,ar;let s=this.spec,r=(Ye=n.grip)!=null?Ye:1,a=Math.cos(this.h),o=Math.sin(this.h),l=this.vx*o+this.vz*a,c=this.vx*a-this.vz*o;this.u=l,this.v=c;let h=Math.hypot(l,c),u=1/(1+Math.max(0,Math.abs(l)-5)/(((le=s.steerFade)!=null?le:22)*(n.easy?1.35:1))),f=e.steer*s.steerMax*u,d=h>3?Math.atan2(c,Math.max(Math.abs(l),.5)):0;e.handbrake>.3||this.kickT>0?this.intent=n.real?1.6:1.1:Math.abs(d)>.2&&e.throttle>.3&&(this.intent||0)>0?this.intent=Math.max(this.intent,.6):l<12&&(this.intent=Math.max(this.intent||0,.3)),this.intent=Math.max(0,(this.intent||0)-t);let g=n.easy&&this.intent<=0;n.assist>0&&l>3&&(f+=Xe(d,-.9,.9)*.85*n.assist*(1-.5*Math.abs(e.steer))),f=Xe(f,-s.steerMax*1.25,s.steerMax*1.25);let _=7.5;this.steer+=Xe(f-this.steer,-_*t,_*t);let p=this.steer,m=s.gears,M=Le=>Math.abs(l)/s.wheelRadius*m[Math.abs(Le)-1]*s.finalDrive*60/(2*Math.PI);this.shiftTimer>0&&(this.shiftTimer-=t);let x=e.brake>.1&&e.throttle<.1&&l<1&&!e.noReverse;this.gear===-1?e.throttle>.1&&l>-1&&(this.gear=1):x&&Math.abs(l)<.6&&this.revHold>.25&&(this.gear=-1),this.revHold=x&&Math.abs(l)<.6?(this.revHold||0)+t:0;let y=0;if(this.gear>0){let Le=M(this.gear);n.manual?(e.shiftUp&&this.gear<m.length&&(this.gear++,this.shiftTimer=.12,y=1),e.shiftDown&&this.gear>1&&(this.gear--,this.shiftTimer=.12,y=-1)):this.shiftTimer<=0&&(Le>s.redline*.9&&this.gear<m.length?(this.gear++,this.shiftTimer=.09,y=1):this.gear>1&&Math.abs(d)<.22&&this.spinR<.05&&M(this.gear-1)<s.redline*.62&&(this.gear--,this.shiftTimer=.12,y=-1))}let A=Math.abs(this.gear)-1,T=m[A]*s.finalDrive*(this.gear===-1?1.1:1),E=Math.abs(l)/s.wheelRadius*T*60/(2*Math.PI),I=this.shiftTimer>0?0:this.gear===-1?e.brake:e.throttle,z=Math.max(s.idle,E);this.spinR>.05&&(z=Math.max(z,s.idle+(s.redline*.9-s.idle)*(.6+.4*I)*Math.min(1,this.spinR*2))),Math.abs(l)<2&&I>0&&(z=Math.max(z,s.idle+(s.redline*.6-s.idle)*I)),this.rpm+=(z-this.rpm)*Math.min(1,t*12);let v=E>=s.redline;v?this.rpm=s.redline-150*Math.random():this.rpm=Math.min(this.rpm,s.redline*.97);let S=e.throttle;S<.2&&(this.liftT=(this.liftT||0)+t),(($e=this.thrPrev)!=null?$e:0)<.3&&S>.8&&(this.liftT||0)<.35&&(this.liftT||0)>.02&&l>6&&this.gear>0&&(this.kickT=.28),S>=.2&&(this.liftT=0),this.thrPrev=S,this.kickT>0&&(this.kickT-=t);let H=this.torqueAt(Math.max(this.rpm,s.idle))*I*(v?.1:1);I<.05&&Math.abs(l)>1&&(H=-s.torque*.12*Xe(this.rpm/s.redline,0,1));let B=H*T*.88/s.wheelRadius*(this.kickT>0?n.real?1.9:1.5:1);this.gear===-1&&(B=-Math.abs(B),l<-9&&(B=0)),H<0&&(B=oi(l)*H*T*.88/s.wheelRadius);let G=((Mn=s.downforce)!=null?Mn:0)*h*h,j=s.cgHeight/this.L,k=this.m*9.81*this.b/this.L-this.m*this.ax*j+G*.45,st=this.m*9.81*this.a/this.L+this.m*this.ax*j+G*.55;k=Math.max(k,this.m*9.81*.12),st=Math.max(st,this.m*9.81*.12);let V=this.offroad?.62:1,ct=s.muFront*r*V,yt=s.muRear*r*V,vt=(ir=(nr=s.body)==null?void 0:nr.track)!=null?ir:1.55,Jt=this.m*Math.abs(this.ay)*s.cgHeight/vt,$t=(On=s.rollFront)!=null?On:s.drive==="RWD"?.46:.56,K=1-.14*Math.min(1,Jt*$t/(k/2))**2,ot=1-.14*Math.min(1,Jt*(1-$t)/(st/2))**2,Et=1;g&&(Et=1+.8*Xe((h-15)/30,0,1));let at=ct*k*K*Et,Bt=yt*st*ot*Et,Pt=0,Nt=0,Zt=s.drive==="AWD"?(ss=s.awdFront)!=null?ss:.35:s.drive==="FWD"?1:0;Pt+=B*Zt,Nt+=B*(1-Zt);let tt=this.gear===-1?e.throttle:e.brake,C=tt>0&&Math.abs(l)>.3?tt:0;if(C>0){let Le=s.brakeForce*C;Pt+=-oi(l)*Le*.64,Nt+=-oi(l)*Le*.36}var rt=e.handbrake;rt>0&&Math.abs(l)>.5&&(Nt=-oi(l)*Bt*(n.real?.95:.8)*rt+Nt*(1-rt));let mt=Math.abs(d)<.1&&Math.abs(e.steer)<.3&&rt<.1&&!(this.kickT>0)||g&&l>15;n.tcs!==!1&&mt&&B>0&&(Nt=Math.min(Nt,Bt*.97),Pt=Math.min(Pt,at*.97)),this.spinR=0,this.lockR=0;let lt=0,pt=Math.abs(Nt)/Bt;pt>1&&(oi(Nt)===oi(B)&&B!==0&&!(rt>.3)?this.spinR=Xe(pt-1+.35,0,1):this.lockR=1,Nt=oi(Nt)*Bt*(this.spinR>0?.92:.98)),rt>.3&&Math.abs(l)>.5&&(this.lockR=Math.max(this.lockR,rt)),Math.abs(Pt)>at&&(lt=1,Pt=oi(Pt)*at*.95);let Dt=(sr=s.tireB)!=null?sr:9,Tt=(rr=s.tireC)!=null?rr:1.45,R=c+this.a*this.r,b=Math.cos(p),O=Math.sin(p),J=l*b+R*O,et=-l*O+R*b,Q=Math.atan2(et,Math.max(Math.abs(J),.8)),It=c-this.b*this.r,_t=Math.atan2(It,Math.max(Math.abs(l),.8));this.slipF=Q,this.slipR=_t;let At=at*Math.sqrt(Math.max(.04,1-.85*Math.pow(Pt/at,2))),Qt=Bt*Math.sqrt(Math.max(.04,1-.85*Math.pow(Nt/Bt,2)));this.lockR>0&&(Qt*=1-(n.real?.45:.3)*this.lockR);let L=-at*Math.sin(Tt*Math.atan(Dt*Q)),X=-Bt*Math.sin(Tt*Math.atan(Dt*_t));L=Xe(L,-At,At),X=Xe(X,-Qt,Qt);let ht=this.m*this.b/this.L,dt=this.m*this.a/this.L,ut=(Le,$n,ui)=>Xe(Le,-Math.abs($n)*ui/t,Math.abs($n)*ui/t);L=ut(L,et,ht),X=ut(X,It,dt),this.frontSlide=Xe(Math.abs(Q)/.25,0,1),this.rearSlide=Xe(Math.max(Math.abs(_t)/.2,this.spinR,this.lockR*(Math.abs(l)>3?1:0)),0,1);let kt=s.drag*l*Math.abs(l),Vt=((Bi=s.rolling)!=null?Bi:12)*l*(this.offroad?5:1),oe=Pt*b-L*O+Nt-kt-Vt,U=Pt*O+L*b+X-s.drag*2*c*Math.abs(c),gt=this.a*(L*b+Pt*O)-this.b*X;h<.3&&I<.05&&Math.abs(B)<1&&(this.vx*=.9,this.vz*=.9,this.r*=.8);let $=oe/this.m,nt=U/this.m;this.ax+=(Xe($,-12,12)-this.ax)*Math.min(1,t*8),this.ay+=(Xe(nt,-14,14)-this.ay)*Math.min(1,t*8);let wt=oe*o+U*a,Rt=oe*a-U*o;this.vx+=wt/this.m*t,this.vz+=Rt/this.m*t,this.r+=gt/this.I*t,n.assist>0&&l>5&&Math.abs(e.steer)>.3&&Math.sign(e.steer)!==Math.sign(this.r)&&(Math.abs(d)>.12||this.rearSlide>.4)&&(this.r+=e.steer*(n.real?3:2.3)*t*n.assist*Math.min(1,l/15));let ie=Math.abs(d)>.15;if(n.assist>0&&Math.abs(d)>.2&&Math.abs(d)<1.2&&I>.5&&h>6){let Le=3.2*n.assist*I*t/h;this.vx+=this.vx*Le,this.vz+=this.vz*Le}if(this.r*=1-Math.min(.5,((ar=s.yawDamp)!=null?ar:.6)*(ie?n.real?.4:.8:1)*t),g&&l>12){let Le=l*Math.tan(this.steer)/this.L*.95,$n=1.3+.9*Xe((l-15)/30,0,1),ui=9.81*$n/Math.max(l,1);this.r+=(Xe(Le,-ui,ui)-this.r)*Math.min(1,5*t);let kr=Math.abs(Le)*l/9.81;if(kr>$n&&I<.9){let W=Math.min(.5,(kr-$n)*.9)*t;this.vx-=this.vx*W,this.vz-=this.vz*W}let Hr=Math.min(1,3*t),Vr=o,w=a,N=this.vx*Vr+this.vz*w;this.vx+=(Vr*N-this.vx)*Hr*.5*Xe(Math.abs(d)/.3,0,1),this.vz+=(w*N-this.vz)*Hr*.5*Xe(Math.abs(d)/.3,0,1)}if(n.assist>0&&Math.abs(d)>1.05&&l>2&&(this.r*=1-2.5*t*n.assist),n.assist>0&&!n.real&&Math.abs(d)>.5&&l>4){let Le=Math.abs(d)-.5;Math.sign(this.r)!==Math.sign(d)&&(this.r*=1-Math.min(.6,Le*9*t*n.assist*(n.easy?1.4:1)))}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t;let Re=this.spinR>0?Math.max(Math.abs(l),25*this.spinR)*oi(this.gear):this.lockR>.5?0:l;return this.wheelSpin+=Re/s.wheelRadius*t,{shifted:y,limiter:v}}collideWall(t,e,n,s=.25){this.x+=t*n,this.z+=e*n;let r=this.vx*t+this.vz*e;if(r<0){let a=-e,o=t,l=this.vx*a+this.vz*o,c=-r*s,h=l*(1-Math.min(.5,Math.abs(r)*.04));this.vx=t*c+a*h,this.vz=e*c+o*h;let u=Math.sin(this.h),f=Math.cos(this.h),d=u*a+f*o;return this.r+=-d*r*.02,this.r*=.7,Math.abs(r)}return 0}};var Ve=[{id:"kaze",name:"KAZE RS",tag:"\u042F\u043F\u043E\u043D\u0441\u043A\u043E\u0435 \u0434\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435. \u041B\u0435\u0433\u043A\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043D\u043E\u0441 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u0443\u0433\u043E\u043B.",colors:["#e8e8e8","#d7263d","#1b98e0","#f4d35e","#2e2e2e","#7ae582"],hp:280,mass:1180,torque:330,redline:8e3,idle:900,peakAt:.72,cylinders:4,gears:[3.3,2.15,1.55,1.18,.95,.78],finalDrive:4.1,wheelRadius:.31,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.48,muFront:1.12,muRear:1,tireB:9,tireC:1.5,steerMax:.62,steerFade:26,brakeForce:13e3,drag:.42,downforce:.2,yawDamp:.5,body:{L:4.45,W:1.72,H:1.3,track:1.48,wheelF:1.3,wheelR:-1.22,upper:[[2.22,.36],[2.26,.56],[2.12,.69],[1.2,.8],[.55,.85],[-1.3,.88],[-1.75,.92],[-2.18,.9],[-2.25,.62],[-2.22,.36]],cabin:[[.52,.84],[-.15,1.3],[-.95,1.29],[-1.58,.9]],extras:["popups","ducktail"]}},{id:"bulldog",name:"BULLDOG V8",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043C\u0430\u0441\u043B\u043A\u0430\u0440",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0437\u0430\u0434. \u0414\u044B\u043C\u0438\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435.",colors:["#f25c05","#111111","#0b3d91","#c1121f","#ffd166","#ffffff"],hp:480,mass:1560,torque:620,redline:6500,idle:750,peakAt:.55,cylinders:8,gears:[2.9,1.95,1.4,1.05,.82],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.8,frontWeight:.55,cgHeight:.52,muFront:1.08,muRear:.98,tireB:8.5,tireC:1.5,steerMax:.58,steerFade:24,brakeForce:15e3,drag:.5,downforce:.15,yawDamp:.55,body:{L:4.85,W:1.92,H:1.36,track:1.62,wheelF:1.5,wheelR:-1.3,upper:[[2.4,.38],[2.43,.7],[2.3,.82],[.7,.92],[.5,.93],[-1.6,.96],[-2.3,.99],[-2.42,.9],[-2.43,.45],[-2.4,.38]],cabin:[[.48,.92],[-.3,1.34],[-1,1.33],[-1.72,.95]],extras:["scoop","stripes"]}},{id:"veloce",name:"VELOCE GT",tag:"\u0421\u0440\u0435\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u044B\u0439 \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0438\u0436\u0438\u043C\u043D\u0430\u044F \u0441\u0438\u043B\u0430. \u0414\u0435\u0440\u0436\u0438\u0442 \u0434\u043E\u0440\u043E\u0433\u0443 \u043A\u0430\u043A \u043D\u0430 \u0440\u0435\u043B\u044C\u0441\u0430\u0445.",colors:["#e63946","#ffbe0b","#06d6a0","#3a86ff","#ffffff","#8338ec"],hp:640,mass:1420,torque:680,redline:8500,idle:1e3,peakAt:.75,cylinders:10,gears:[3.1,2.2,1.65,1.3,1.05,.86,.72],finalDrive:3.6,wheelRadius:.34,drive:"RWD",wheelbase:2.65,frontWeight:.42,cgHeight:.4,muFront:1.28,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:19e3,drag:.36,downforce:1.1,yawDamp:.8,body:{L:4.55,W:1.98,H:1.14,track:1.68,wheelF:1.38,wheelR:-1.27,upper:[[2.26,.3],[2.3,.46],[1.4,.62],[.9,.7],[-1.9,.95],[-2.26,.96],[-2.28,.4],[-2.25,.3]],cabin:[[.9,.69],[0,1.12],[-.6,1.12],[-1.9,.94]],extras:["wing","intakes"]}},{id:"tundra",name:"TUNDRA R",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A",desc:"\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0431\u0430\u0437\u0430. \u041A\u043E\u0440\u043E\u043B\u044C \u0441\u043D\u0435\u0433\u0430 \u0438 \u0440\u0435\u0437\u043A\u0438\u0445 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432.",colors:["#0077b6","#ffffff","#e76f51","#2a9d8f","#f9c74f","#1d1d1d"],hp:330,mass:1300,torque:420,redline:7500,idle:900,peakAt:.6,cylinders:4,gears:[3,2.05,1.5,1.15,.9,.74],finalDrive:4.3,wheelRadius:.32,drive:"AWD",awdFront:.4,wheelbase:2.5,frontWeight:.56,cgHeight:.52,muFront:1.18,muRear:1.08,tireB:8.5,tireC:1.45,steerMax:.62,steerFade:24,brakeForce:14500,drag:.46,downforce:.35,yawDamp:.6,body:{L:4.05,W:1.8,H:1.46,track:1.55,wheelF:1.28,wheelR:-1.22,ride:.05,upper:[[2,.4],[2.03,.62],[1.86,.78],[1,.88],[.75,.9],[-1.9,.95],[-2.02,.9],[-2.03,.42],[-2,.4]],cabin:[[.73,.9],[.05,1.42],[-1.78,1.42],[-1.96,.95]],extras:["roofscoop","rallylights","mudflaps","roofwing"]}},{id:"ronin",name:"RONIN 34",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C",desc:"\u0422\u0443\u0440\u0431\u043E-\u043C\u043E\u0442\u043E\u0440 \u0438 \u0443\u043C\u043D\u044B\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u043F\u043E\u0441\u043B\u0443\u0448\u043D\u044B\u0439 \u0432 \u043B\u044E\u0431\u043E\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435.",colors:["#5e60ce","#c0c0c0","#101010","#d62828","#ffffff","#2b9348"],hp:520,mass:1480,torque:560,redline:8e3,idle:900,peakAt:.65,cylinders:6,gears:[3.2,2.1,1.55,1.2,.97,.8],finalDrive:3.9,wheelRadius:.33,drive:"AWD",awdFront:.3,wheelbase:2.66,frontWeight:.54,cgHeight:.47,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.58,steerFade:27,brakeForce:17e3,drag:.4,downforce:.6,yawDamp:.65,body:{L:4.6,W:1.86,H:1.34,track:1.58,wheelF:1.38,wheelR:-1.28,upper:[[2.3,.36],[2.33,.62],[2.2,.76],[.8,.86],[.6,.88],[-1.5,.9],[-2.2,1],[-2.31,.95],[-2.32,.4],[-2.3,.36]],cabin:[[.58,.88],[-.1,1.34],[-1,1.33],[-1.62,.92]],extras:["wing","roundtails"]}},{id:"vanta",name:"VANTA GTR",tag:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u0443\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0433\u043E\u043D\u044C",desc:"\u0421\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u043E\u0435 \u0433\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0441\u0438\u043D\u0438\u043C\u0438 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u2014 \u043E\u0431\u0440\u0430\u0437 \xAB\u0441\u0430\u043C\u043E\u0439 \u0440\u0430\u0437\u044B\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u043E\u0439\xBB \u043C\u0430\u0448\u0438\u043D\u044B. \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0438 \u0446\u0435\u043F\u043A\u043E\u0435.",colors:["#c9ced6","#1d3f8f","#111111","#e8e8e8","#b31b1b","#f2b400"],hp:470,mass:1350,torque:480,redline:8500,idle:900,peakAt:.72,cylinders:6,gears:[3.2,2.2,1.6,1.25,1,.84],finalDrive:3.9,wheelRadius:.33,drive:"RWD",wheelbase:2.73,frontWeight:.5,cgHeight:.46,muFront:1.2,muRear:1.12,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:28,brakeForce:17e3,drag:.4,downforce:.55,yawDamp:.65,body:{L:4.5,W:1.9,H:1.34,track:1.6,wheelF:1.4,wheelR:-1.33,upper:[[2.25,.34],[2.28,.6],[2.1,.74],[.8,.84],[.62,.86],[-1.45,.9],[-2.1,.96],[-2.25,.92],[-2.26,.4],[-2.24,.34]],cabin:[[.6,.86],[-.1,1.34],[-1.05,1.33],[-1.55,.93]],extras:["wing","stripes"]}},{id:"kitsune",name:"KITSUNE RX",tag:"\u0420\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0438\u0437 \u0430\u043D\u0434\u0435\u0433\u0440\u0430\u0443\u043D\u0434\u0430",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u043D\u0438\u0437\u043A\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u0440\u0435\u0441\u043D\u0438\u0446\u0430\u043C\u0438\xBB \u0438 \u0440\u043E\u0442\u043E\u0440\u043D\u044B\u043C \u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0434\u043E 9000 \u043E\u0431/\u043C\u0438\u043D. \u041E\u0431\u043E\u0436\u0430\u0435\u0442 \u0434\u0440\u0438\u0444\u0442.",colors:["#f2c500","#e8e8e8","#d7263d","#3a0ca3","#101010","#00b4d8"],hp:300,mass:1240,torque:320,redline:9e3,idle:1e3,peakAt:.8,cylinders:4,gears:[3.4,2.2,1.6,1.2,.96,.8],finalDrive:4.3,wheelRadius:.31,drive:"RWD",wheelbase:2.43,frontWeight:.5,cgHeight:.44,muFront:1.15,muRear:1.02,tireB:9,tireC:1.5,steerMax:.64,steerFade:26,brakeForce:13500,drag:.4,downforce:.25,yawDamp:.5,body:{L:4.3,W:1.76,H:1.2,track:1.48,wheelF:1.25,wheelR:-1.18,upper:[[2.15,.33],[2.18,.5],[1.9,.62],[.9,.74],[.55,.78],[-1.5,.86],[-2.05,.88],[-2.15,.62],[-2.14,.34]],cabin:[[.52,.78],[-.2,1.2],[-.8,1.2],[-1.6,.87]],extras:["popups","ducktail"]}},{id:"tora",name:"TORA MK4",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u0440\u044B\u043B\u043E\u043C",desc:"\u041F\u043B\u0430\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u0440\u044F\u0434\u043D\u0430\u044F \xAB\u0448\u0435\u0441\u0442\u0451\u0440\u043A\u0430\xBB \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439 \u0438 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D.",colors:["#ff6b00","#f2f2f2","#111111","#c1121f","#2d6a4f","#4361ee"],hp:560,mass:1460,torque:620,redline:7200,idle:850,peakAt:.62,cylinders:6,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.7,wheelRadius:.34,drive:"RWD",wheelbase:2.55,frontWeight:.53,cgHeight:.47,muFront:1.16,muRear:1.06,tireB:9,tireC:1.5,steerMax:.58,steerFade:26,brakeForce:16500,drag:.42,downforce:.45,yawDamp:.6,body:{L:4.5,W:1.82,H:1.28,track:1.56,wheelF:1.32,wheelR:-1.23,upper:[[2.25,.34],[2.28,.55],[2.05,.68],[.7,.8],[.5,.82],[-1.4,.88],[-2.1,.92],[-2.25,.7],[-2.24,.36]],cabin:[[.48,.82],[-.25,1.26],[-.95,1.25],[-1.5,.9]],extras:["wing","roundtails"]}},{id:"toro",name:"TORO V12",tag:"\u0421\u0443\u043F\u0435\u0440\u043A\u0430\u0440-\u043A\u043B\u0438\u043D",desc:"\u041E\u0441\u0442\u0440\u044B\u0439 \u043A\u043B\u0438\u043D \u0441 V12 \u0437\u0430 \u0441\u043F\u0438\u043D\u043E\u0439 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0421\u0430\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435.",colors:["#9bd600","#ff9f1c","#ffdd00","#111111","#e5e5e5","#7209b7"],hp:740,mass:1550,torque:720,redline:8700,idle:1e3,peakAt:.78,cylinders:12,gears:[3.1,2.25,1.7,1.35,1.1,.9,.76],finalDrive:3.5,wheelRadius:.35,drive:"AWD",awdFront:.3,wheelbase:2.7,frontWeight:.43,cgHeight:.42,muFront:1.3,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:2e4,drag:.36,downforce:1.2,yawDamp:.8,body:{L:4.6,W:2,H:1.12,track:1.7,wheelF:1.42,wheelR:-1.28,upper:[[2.3,.3],[2.32,.42],[1.2,.64],[.75,.7],[-1.95,.92],[-2.3,.9],[-2.31,.38],[-2.28,.3]],cabin:[[.75,.69],[-.15,1.1],[-.7,1.1],[-1.95,.9]],extras:["intakes","wing"]}},{id:"stutt",name:"STUTT 9",tag:"\u0417\u0430\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u0441\u043F\u043E\u0440\u0442\u043A\u0443\u043F\u0435",desc:"\u041A\u0440\u0443\u0433\u043B\u044B\u0435 \u0444\u0430\u0440\u044B, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u043C\u043E\u0442\u043E\u0440 \u0441\u0437\u0430\u0434\u0438. \u041E\u0442\u043B\u0438\u0447\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442 \u0438 \u0440\u0435\u0437\u043A\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442.",colors:["#e9e4d8","#1b263b","#d00000","#fca311","#6a994e","#000000"],hp:450,mass:1420,torque:500,redline:8400,idle:900,peakAt:.74,cylinders:6,gears:[3.3,2.15,1.6,1.25,1.02,.86,.72],finalDrive:3.6,wheelRadius:.33,drive:"RWD",wheelbase:2.45,frontWeight:.39,cgHeight:.45,muFront:1.18,muRear:1.2,tireB:9.5,tireC:1.45,steerMax:.6,steerFade:28,brakeForce:18500,drag:.4,downforce:.4,yawDamp:.65,body:{L:4.35,W:1.85,H:1.28,track:1.56,wheelF:1.3,wheelR:-1.15,upper:[[2.17,.33],[2.2,.52],[2,.64],[1.1,.74],[.62,.8],[-1.2,.95],[-1.9,.9],[-2.15,.72],[-2.16,.36]],cabin:[[.6,.8],[-.05,1.26],[-.55,1.28],[-1.7,.92]],extras:["ducktail","roundlights"]}},{id:"shiro",name:"SHIRO 86",tag:"\u041B\u0451\u0433\u043A\u0438\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A 80-\u0445",desc:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u043C\u0438\u0433\u0430\u043B\u043A\u0430\u043C\u0438\xBB. \u041C\u043E\u0442\u043E\u0440 \u0441\u043B\u0430\u0431\u044B\u0439, \u0437\u0430\u0442\u043E \u043C\u0430\u0448\u0438\u043D\u0430 \u043B\u0451\u0433\u043A\u0430\u044F \u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u0443\u0435\u0442 \u0432 \u0437\u0430\u043D\u043E\u0441\u0435.",colors:["#f4f4f4","#111111","#c1121f","#2b59c3","#ffbe0b","#6c757d"],hp:170,mass:960,torque:185,redline:7800,idle:900,peakAt:.75,cylinders:4,gears:[3.6,2.3,1.6,1.2,.95],finalDrive:4.3,wheelRadius:.3,drive:"RWD",wheelbase:2.4,frontWeight:.53,cgHeight:.48,muFront:1.1,muRear:.98,tireB:9,tireC:1.5,steerMax:.66,steerFade:24,brakeForce:11e3,drag:.42,downforce:.1,yawDamp:.45,body:{L:4.2,W:1.66,H:1.33,track:1.42,wheelF:1.2,wheelR:-1.2,upper:[[2.1,.36],[2.12,.56],[2,.66],[1,.74],[.6,.78],[-1.7,.86],[-2.05,.86],[-2.1,.6],[-2.08,.36]],cabin:[[.58,.78],[-.1,1.3],[-1.3,1.3],[-2,.9]],extras:["popups"]}},{id:"hayate",name:"HAYATE EVO",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D",desc:"\u0427\u0435\u0442\u044B\u0440\u0451\u0445\u0434\u0432\u0435\u0440\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439, \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E\u043C. \u0426\u0435\u043F\u043A\u0438\u0439, \u0440\u0435\u0437\u043A\u0438\u0439, \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0430\u0437\u0433\u043E\u043D\u044F\u0435\u0442\u0441\u044F \u0438\u0437 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.",colors:["#e9ecef","#d00000","#1d3557","#ffd60a","#111111","#2a9d8f"],hp:390,mass:1390,torque:470,redline:7500,idle:900,peakAt:.6,cylinders:4,gears:[3,2,1.48,1.14,.9,.75],finalDrive:4.2,wheelRadius:.32,drive:"AWD",awdFront:.38,wheelbase:2.62,frontWeight:.56,cgHeight:.5,muFront:1.2,muRear:1.12,tireB:9,tireC:1.45,steerMax:.62,steerFade:25,brakeForce:15500,drag:.45,downforce:.5,yawDamp:.62,body:{L:4.5,W:1.81,H:1.45,track:1.55,wheelF:1.36,wheelR:-1.26,upper:[[2.25,.38],[2.27,.62],[2.1,.76],[.9,.86],[.65,.88],[-1.45,.92],[-2.15,.98],[-2.25,.9],[-2.26,.42],[-2.24,.38]],cabin:[[.63,.88],[-.05,1.42],[-1.15,1.41],[-1.6,.94]],extras:["wing","mudflaps","rallylights"]}},{id:"sakura",name:"SAKURA S",tag:"\u0414\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F",desc:"\u041D\u0438\u0437\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0442\u0443\u0440\u0431\u043E-\xAB\u0447\u0435\u0442\u0432\u0451\u0440\u043A\u043E\u0439\xBB. \u0421\u0430\u043C\u0430\u044F \xAB\u0434\u0440\u0438\u0444\u0442\u043E\u0432\u0430\u044F\xBB \u043C\u0430\u0448\u0438\u043D\u0430: \u043E\u0445\u043E\u0442\u043D\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0443\u0433\u043E\u043B.",colors:["#ff8fab","#f8f9fa","#7209b7","#00b4d8","#212529","#fb8500"],hp:360,mass:1240,torque:420,redline:7800,idle:900,peakAt:.68,cylinders:4,gears:[3.25,2.1,1.5,1.15,.94,.78],finalDrive:4.1,wheelRadius:.32,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.46,muFront:1.16,muRear:.96,tireB:9,tireC:1.5,steerMax:.7,steerFade:24,brakeForce:14e3,drag:.42,downforce:.3,yawDamp:.45,body:{L:4.45,W:1.78,H:1.28,track:1.52,wheelF:1.32,wheelR:-1.22,upper:[[2.22,.34],[2.25,.55],[2.06,.68],[.9,.8],[.6,.83],[-1.4,.88],[-2.08,.94],[-2.22,.86],[-2.23,.4],[-2.21,.34]],cabin:[[.58,.83],[-.1,1.27],[-.95,1.26],[-1.55,.9]],extras:["wing"]}},{id:"stallion",name:"STALLION GT",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0444\u0430\u0441\u0442\u0431\u044D\u043A",desc:"\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u044B\u0439 V8. \u041C\u043E\u0449\u043D\u044B\u0439 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u2014 \u0434\u044B\u043C\u0438\u0442 \u043A\u043E\u043B\u0451\u0441\u0430\u043C\u0438 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 \u0438\u0437 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.",colors:["#0353a4","#d90429","#ffffff","#111111","#ffb703","#606c38"],hp:470,mass:1680,torque:560,redline:7400,idle:750,peakAt:.62,cylinders:8,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.72,frontWeight:.54,cgHeight:.52,muFront:1.1,muRear:1,tireB:8.5,tireC:1.5,steerMax:.6,steerFade:25,brakeForce:16e3,drag:.48,downforce:.2,yawDamp:.55,body:{L:4.8,W:1.92,H:1.36,track:1.62,wheelF:1.48,wheelR:-1.28,upper:[[2.4,.4],[2.42,.72],[2.3,.84],[.75,.94],[.55,.95],[-1.9,.98],[-2.32,1],[-2.4,.9],[-2.41,.45],[-2.38,.4]],cabin:[[.52,.94],[-.25,1.34],[-.85,1.33],[-2,.99]],extras:["scoop","stripes"]}},{id:"pixel",name:"PIXEL GTI",tag:"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434, \u0445\u043E\u0442-\u0445\u044D\u0442\u0447",desc:"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A \u0441 \u0442\u0443\u0440\u0431\u043E\u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0438 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u041D\u0435 \u0434\u0440\u0438\u0444\u0442\u0443\u0435\u0442, \u043D\u043E \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043F\u043A\u0438\u0439 \u0438 \u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u2014 \u043E\u0442\u043B\u0438\u0447\u0435\u043D \u0434\u043B\u044F \u0433\u043E\u043D\u043A\u0438.",colors:["#e63946","#f1faee","#1d3557","#adb5bd","#000000","#80ed99"],hp:260,mass:1250,torque:370,redline:6800,idle:850,peakAt:.5,cylinders:4,gears:[3.4,2.15,1.5,1.12,.9,.76],finalDrive:3.9,wheelRadius:.32,drive:"FWD",wheelbase:2.62,frontWeight:.61,cgHeight:.52,muFront:1.2,muRear:1.2,tireB:9,tireC:1.45,steerMax:.6,steerFade:25,brakeForce:14500,drag:.44,downforce:.25,yawDamp:.7,body:{L:4.2,W:1.79,H:1.45,track:1.54,wheelF:1.32,wheelR:-1.3,ride:.02,upper:[[2.1,.4],[2.12,.64],[1.95,.78],[1.1,.88],[.8,.9],[-1.9,.98],[-2.08,.95],[-2.1,.44],[-2.08,.4]],cabin:[[.78,.9],[.05,1.42],[-1.75,1.42],[-2,1]],extras:["roofwing"]}},{id:"estate",name:"ESTATE RS",tag:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B",desc:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B \u0441 \u0431\u0438\u0442\u0443\u0440\u0431\u043E V8 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0412\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u043A\u0440\u043E\u043C\u043D\u043E, \u0430 \u0435\u0434\u0435\u0442 \u043A\u0430\u043A \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440.",colors:["#495057","#f8f9fa","#003049","#9d0208","#2d6a4f","#000000"],hp:600,mass:1980,torque:800,redline:7e3,idle:800,peakAt:.55,cylinders:8,gears:[3.2,2.1,1.55,1.2,.97,.8,.67],finalDrive:3.4,wheelRadius:.35,drive:"AWD",awdFront:.35,wheelbase:2.93,frontWeight:.55,cgHeight:.54,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.56,steerFade:28,brakeForce:2e4,drag:.46,downforce:.35,yawDamp:.7,body:{L:4.9,W:1.9,H:1.45,track:1.64,wheelF:1.52,wheelR:-1.41,upper:[[2.45,.38],[2.47,.62],[2.3,.76],[1.2,.86],[.95,.88],[-2.2,.95],[-2.42,.92],[-2.45,.42],[-2.43,.38]],cabin:[[.92,.88],[.2,1.4],[-2.15,1.38],[-2.36,.96]],extras:["roundtails"]}},{id:"aurora",name:"AURORA X",tag:"\u0413\u0438\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u0413\u0438\u0431\u0440\u0438\u0434\u043D\u044B\u0439 \u0433\u0438\u043F\u0435\u0440\u043A\u0430\u0440: V8 \u043F\u043B\u044E\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0442\u043E\u0440\u044B, \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0430\u044D\u0440\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430. \u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u043D \u0432 \u0438\u0433\u0440\u0435.",colors:["#00f5d4","#f15bb5","#fee440","#111111","#f8f9fa","#3a0ca3"],hp:900,mass:1520,torque:900,redline:9e3,idle:1e3,peakAt:.7,cylinders:8,gears:[3,2.2,1.7,1.38,1.14,.95,.8],finalDrive:3.4,wheelRadius:.35,drive:"AWD",awdFront:.35,wheelbase:2.7,frontWeight:.42,cgHeight:.4,muFront:1.32,muRear:1.34,tireB:10,tireC:1.45,steerMax:.55,steerFade:31,brakeForce:21e3,drag:.34,downforce:1.3,yawDamp:.85,body:{L:4.65,W:2.02,H:1.1,track:1.72,wheelF:1.42,wheelR:-1.3,upper:[[2.3,.28],[2.33,.4],[1.3,.6],[.85,.66],[-1.9,.9],[-2.3,.88],[-2.32,.36],[-2.28,.28]],cabin:[[.85,.65],[-.05,1.08],[-.6,1.08],[-1.9,.88]],extras:["wing","intakes"]}},{id:"bars",name:"BARS 4x4",tag:"\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",desc:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u043E\u043B\u043D\u043E\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A \u0441 \u043B\u044E\u0441\u0442\u0440\u043E\u0439 \u0444\u0430\u0440. \u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u0432\u0430\u043B\u043A\u0438\u0439, \u0437\u0430\u0442\u043E \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0435\u0434\u0435\u0442 \u043F\u043E \u0441\u043D\u0435\u0433\u0443 \u0438 \u0431\u0435\u0437\u0434\u043E\u0440\u043E\u0436\u044C\u044E \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u043E\u0432.",colors:["#606c38","#f2e8cf","#bc6c25","#283618","#111111","#e5e5e5"],hp:420,mass:2150,torque:650,redline:6200,idle:700,peakAt:.5,cylinders:8,gears:[3.5,2.2,1.5,1.15,.92,.75],finalDrive:3.9,wheelRadius:.38,drive:"AWD",awdFront:.45,wheelbase:2.85,frontWeight:.55,cgHeight:.66,muFront:1.14,muRear:1.1,tireB:8,tireC:1.45,steerMax:.6,steerFade:22,brakeForce:19e3,drag:.6,downforce:.05,yawDamp:.7,body:{L:4.5,W:1.94,H:1.78,track:1.66,wheelF:1.45,wheelR:-1.4,ride:.12,upper:[[2.22,.6],[2.24,.9],[2.08,1.02],[1.05,1.08],[.8,1.1],[-2.1,1.14],[-2.22,1.1],[-2.24,.62],[-2.22,.6]],cabin:[[.78,1.1],[.2,1.74],[-1.95,1.74],[-2.16,1.14]],extras:["rallylights","mudflaps"]}},{id:"baron",name:"BARON M",tag:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0435\u0434\u0430\u043D",desc:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u044B\u0439 \u0441\u0435\u0434\u0430\u043D \u0441 V8. \u041A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u044B\u0439 \u0441\u043D\u0430\u0440\u0443\u0436\u0438, \u0437\u043B\u043E\u0439 \u0432\u043D\u0443\u0442\u0440\u0438 \u2014 \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u0438 \u0434\u043B\u0438\u043D\u043D\u043E \u0434\u0440\u0438\u0444\u0442\u0443\u0435\u0442.",colors:["#14213d","#e5e5e5","#000000","#3d5a80","#6a040f","#adb5bd"],hp:620,mass:1850,torque:750,redline:7200,idle:750,peakAt:.6,cylinders:8,gears:[3.4,2.2,1.6,1.25,1,.83,.7],finalDrive:3.3,wheelRadius:.35,drive:"RWD",wheelbase:2.98,frontWeight:.53,cgHeight:.5,muFront:1.16,muRear:1.04,tireB:9,tireC:1.5,steerMax:.58,steerFade:27,brakeForce:19500,drag:.44,downforce:.3,yawDamp:.6,body:{L:4.95,W:1.9,H:1.45,track:1.62,wheelF:1.55,wheelR:-1.43,upper:[[2.47,.38],[2.49,.63],[2.32,.77],[1,.88],[.75,.9],[-1.55,.95],[-2.3,.99],[-2.47,.9],[-2.48,.42],[-2.45,.38]],cabin:[[.73,.9],[0,1.42],[-1.3,1.41],[-1.85,.96]],extras:["ducktail"]}},{id:"mamba",name:"MAMBA ACR",tag:"\u0422\u0440\u0435\u043A\u043E\u0432\u044B\u0439 \u043C\u043E\u043D\u0441\u0442\u0440 \u0441 V10",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043A\u0430\u043F\u043E\u0442, V10 \u0438 \u0442\u0440\u0435\u043A\u043E\u0432\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0411\u0435\u0437\u0443\u043C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0445 \u043A\u043E\u043B\u0451\u0441\u0430\u0445 \u2014 \u043D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u0430\u044F \u043F\u0435\u0434\u0430\u043B\u044C \u0433\u0430\u0437\u0430.",colors:["#d00000","#1b1b1e","#f8f9fa","#3c096c","#ffba08","#00a6fb"],hp:660,mass:1520,torque:810,redline:6800,idle:800,peakAt:.6,cylinders:10,gears:[2.7,1.9,1.4,1.1,.9,.75],finalDrive:3.55,wheelRadius:.35,drive:"RWD",wheelbase:2.51,frontWeight:.5,cgHeight:.44,muFront:1.24,muRear:1.18,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:29,brakeForce:2e4,drag:.42,downforce:.9,yawDamp:.65,body:{L:4.5,W:1.95,H:1.22,track:1.68,wheelF:1.35,wheelR:-1.16,upper:[[2.25,.34],[2.28,.55],[2.1,.68],[.3,.8],[.1,.82],[-1.7,.9],[-2.2,.92],[-2.26,.6],[-2.25,.36]],cabin:[[.1,.82],[-.5,1.2],[-1.1,1.2],[-1.75,.9]],extras:["wing","stripes","scoop"]}}];function mf(i){let t=Math.min(1,i.hp/i.mass/.47),e=Math.min(1,i.torque*i.gears[0]*i.finalDrive/i.wheelRadius/i.mass/22),n=Math.min(1,((i.muFront+i.muRear)/2-.9)/.45+i.downforce*.2),s=Math.min(1,Math.max(.15,(i.drive==="RWD"?.55:.25)+(i.muFront-i.muRear)*2.2+(i.torque/i.mass-.25)*.8));return{top:t,accel:e,handling:n,drift:s}}function Xn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new de,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=gf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);let g=gf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function gf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new he(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function xf(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,x=o.length;M<x;M++){let y=o[M],A=i.attributes[y];l[y]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let T=i.morphAttributes[y];T&&(c[y]||(c[y]=[]),T.forEach((E,I)=>{let z=new E.array.constructor(E.count*E.itemSize);c[y][I]=new E.constructor(z,E.itemSize,E.normalized)}))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),p=d*_;for(let M=0;M<r;M++){let x=n?n.getX(M):M,y="";for(let A=0,T=o.length;A<T;A++){let E=o[A],I=i.getAttribute(E),z=I.itemSize;for(let v=0;v<z;v++)y+=`${~~(I[u[v]](x)*_+p)},`}if(y in e)h.push(e[y]);else{for(let A=0,T=o.length;A<T;A++){let E=o[A],I=i.getAttribute(E),z=i.morphAttributes[E],v=I.itemSize,S=l[E],H=c[E];for(let B=0;B<v;B++){let G=u[B],j=f[B];if(S[j](a,I[G](x)),z)for(let k=0,st=z.length;k<st;k++)H[k][j](a,z[k][G](x))}}e[y]=a,h.push(a),a++}}let m=i.clone();for(let M in i.attributes){let x=l[M];if(m.setAttribute(M,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),M in c)for(let y=0;y<c[M].length;y++){let A=c[M][y];m.morphAttributes[M][y]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return m.setIndex(h),m}var pe=(i,t,e)=>i<t?t:i>e?e:i,_h=(i,t,e)=>i+(t-i)*e,Pi=i=>i*i*(3-2*i);function _n(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function go(i,t,e){let n=i*374761393+t*668265263+e*2147483647;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)/4294967296}function _f(i,t,e=1){let n=Math.floor(i),s=Math.floor(t),r=Pi(i-n),a=Pi(t-s),o=go(n,s,e),l=go(n+1,s,e),c=go(n,s+1,e),h=go(n+1,s+1,e);return _h(_h(o,l,r),_h(c,h,r),a)}function es(i,t,e=1,n=4){let s=0,r=.5,a=1,o=0;for(let l=0;l<n;l++)s+=_f(i*a,t*a,e+l*17)*r,o+=r,r*=.5,a*=2.03;return s/o}function vh(i,t=1){return _f(i,.5,t)}function re(i,t){let e=new Mt(t),n=i.index?i.toNonIndexed():i,s=n.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=e.r,r[a*3+1]=e.g,r[a*3+2]=e.b;return n.setAttribute("color",new he(r,3)),n.attributes.uv&&n.deleteAttribute("uv"),n}function cn(i,t,e,n={}){var o;let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let a=new ln(s);return a.colorSpace=Oe,n.repeat&&(a.wrapS=a.wrapT=si),a.anisotropy=(o=n.aniso)!=null?o:4,a}function qn(i){i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*10%10);return`${t}:${String(e).padStart(2,"0")}.${n}`}var hn=[{id:"desert",name:"\u041A\u0430\u043D\u044C\u043E\u043D \xAB\u0417\u0430\u043A\u0430\u0442\xBB",tag:"\u041F\u0443\u0441\u0442\u044B\u043D\u044F",desc:"\u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u0430\u0441\u0444\u0430\u043B\u044C\u0442, \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u0441\u043A\u0430\u043B\u044B \u0438 \u043A\u0430\u043A\u0442\u0443\u0441\u044B. \u0414\u043B\u0438\u043D\u043D\u044B\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0443\u0433\u0438.",grip:1,night:!1,weather:null,sky:{top:4029641,horizon:16171659,bottom:15180650},fog:{color:15381898,near:120,far:700},sun:{color:16773334,intensity:2.8,dir:[.5,.75,-.4]},hemi:{sky:16771532,ground:10119749,intensity:1.1},ground:{near:14065766,far:12614213,hills:26},road:{asphalt:"#55504b",line:"#f2c230",edge:"#eeeeee",halfWidth:7.5,shoulder:1.6,shoulderColor:"#b98a5a"},barrier:"tires",track:{minR:40,maxR:170,straight:[50,180],hill:9},props:["cactus","rock","mesa","bush"]},{id:"snow",name:"\u041F\u0435\u0440\u0435\u0432\u0430\u043B \xAB\u0410\u043B\u0430-\u0422\u043E\u043E\xBB",tag:"\u0417\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u044B\u0435 \u0433\u043E\u0440\u044B",desc:"\u0421\u043A\u043E\u043B\u044C\u0437\u043A\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430 \u0441\u0440\u0435\u0434\u0438 \u0435\u043B\u0435\u0439 \u0438 \u0432\u0435\u0440\u0448\u0438\u043D. \u041D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C: \u0441\u0446\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043D\u0438\u0436\u0435.",grip:.74,night:!1,weather:"snow",sky:{top:7312324,horizon:14674162,bottom:15922938},fog:{color:14542575,near:60,far:460},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:40},road:{asphalt:"#5d6168",line:"#ffffff",edge:"#f2f2f2",halfWidth:7.2,shoulder:1.8,shoulderColor:"#e9eef4"},barrier:"rail",track:{minR:30,maxR:130,straight:[35,120],hill:14},props:["pine","pine","rock","peak"]},{id:"city",name:"\u041D\u0435\u043E\u043D-\u0421\u0438\u0442\u0438",tag:"\u041D\u043E\u0447\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",desc:"\u041D\u043E\u0447\u043D\u043E\u0439 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441: \u043D\u0435\u043E\u043D\u043E\u0432\u044B\u0435 \u0432\u044B\u0432\u0435\u0441\u043A\u0438, \u0444\u043E\u043D\u0430\u0440\u0438 \u0438 \u043D\u0435\u0431\u043E\u0441\u043A\u0440\u0451\u0431\u044B \u0432\u0434\u043E\u043B\u044C \u0442\u0440\u0430\u0441\u0441\u044B.",grip:.95,night:!0,weather:null,sky:{top:329231,horizon:2758469,bottom:657940},fog:{color:1708080,near:60,far:520},sun:{color:10466559,intensity:.55,dir:[.3,.8,.4]},hemi:{sky:5917338,ground:2105392,intensity:.9},ground:{near:2763315,far:1842212,hills:0},road:{asphalt:"#2c2c33",line:"#ffcc33",edge:"#dddddd",halfWidth:8.3,shoulder:1.4,shoulderColor:"#50505a"},barrier:"concrete",track:{minR:30,maxR:130,straight:[50,160],hill:3,corners:!0},props:["building","building","lamp","neon"]},{id:"field_asphalt",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0410\u0441\u0444\u0430\u043B\u044C\u0442\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0430\u0441\u0444\u0430\u043B\u044C\u0442",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0441 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u0445\u043E\u043B\u043C\u0430\u043C\u0438. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u043A\u0443\u0434\u0430 \u0445\u043E\u0447\u0435\u0448\u044C \u0438 \u0434\u0440\u0438\u0444\u0442\u0438.",grip:1,night:!1,weather:null,horizon:"hills",sky:{top:4163286,horizon:13624306,bottom:14674416},fog:{color:13622760,near:120,far:380},sun:{color:16774368,intensity:2.6,dir:[.45,.8,-.35]},hemi:{sky:15397631,ground:6974058,intensity:1.15},ground:{near:5592666,far:8227450,hills:0},smoke:15263978,dust:9079434,skid:789516,field:{surface:"asphalt",freq:.006,amp:3.4,texBase:"#4d4e52",colA:16777215,colB:14277081,colLow:13619151,props:[["tires",5,1,1.2,.7],["cone",10,1,1,0],["mast",1,1,1,.3],["block",2,1,1,1.1]]}},{id:"field_beach",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u041F\u043B\u044F\u0436\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u043F\u043B\u044F\u0436",desc:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0441\u0447\u0430\u043D\u044B\u0439 \u043F\u043B\u044F\u0436 \u0441 \u0434\u044E\u043D\u0430\u043C\u0438, \u043F\u0430\u043B\u044C\u043C\u0430\u043C\u0438 \u0438 \u043C\u043E\u0440\u0435\u043C. \u041F\u0435\u0441\u043E\u043A \u0441\u043A\u043E\u043B\u044C\u0437\u043A\u0438\u0439 \u2014 \u0434\u0440\u0438\u0444\u0442 \u0432 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435.",grip:.8,night:!1,weather:null,horizon:"sea",sky:{top:3117024,horizon:14217471,bottom:15984328},fog:{color:14281973,near:120,far:400},sun:{color:16773584,intensity:2.9,dir:[-.5,.75,-.3]},hemi:{sky:16774364,ground:13215854,intensity:1.15},ground:{near:15126424,far:3120836,hills:0},smoke:15918792,dust:14730636,skid:9071940,field:{surface:"beach",freq:.009,amp:3.4,shore:-70,texBase:"#e3c98f",colA:16777215,colB:15983296,colLow:11769960,props:[["palm",3,.9,1.3,.45],["umbrella",2,1,1,0],["rock",1.5,.6,1.4,1]]}},{id:"field_snow",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D \xAB\u0421\u043D\u0435\u0433\xBB",tag:"\u041F\u043E\u043B\u0435 \xB7 \u0441\u043D\u0435\u0433",desc:"\u0411\u0435\u0441\u043A\u0440\u0430\u0439\u043D\u0435\u0435 \u0437\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438 \u0438 \u0451\u043B\u043A\u0430\u043C\u0438. \u0421\u043A\u043E\u043B\u044C\u0437\u043A\u043E \u2014 \u0437\u0430\u043D\u043E\u0441\u044B \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0438 \u043F\u043B\u0430\u0432\u043D\u044B\u0435.",grip:.68,night:!1,weather:"snow",horizon:"snow",sky:{top:7312324,horizon:14937076,bottom:15922938},fog:{color:14739696,near:90,far:360},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:0},smoke:16777215,dust:16054527,skid:8226968,field:{surface:"snow",freq:.007,amp:7,texBase:"#f2f5f9",colA:16777215,colB:15134198,colLow:13622506,props:[["pine",6,.8,1.5,.5],["srock",1.5,.6,1.5,1],["snowman",.4,1,1,.5]]}}];function x_(){let i=[],t=new Me(.35,.4,4.5,7);t.translate(0,2.25,0),i.push(re(t,4160826));let e=new Me(.22,.25,1.6,6);e.translate(.8,2.6,0),i.push(re(e,4160826));let n=new Me(.22,.22,.9,6);n.rotateZ(Math.PI/2),n.translate(.45,1.9,0),i.push(re(n,4160826));let s=new Me(.2,.22,1.3,6);s.translate(-.75,3.1,0),i.push(re(s,4491071));let r=new Me(.2,.2,.8,6);return r.rotateZ(Math.PI/2),r.translate(-.4,2.5,0),i.push(re(r,4491071)),Xn(i)}function __(i=10246971){let t=new Vs(1.4,0),e=t.attributes.position,n=_n(7);for(let s=0;s<e.count;s++)e.setXYZ(s,e.getX(s)*(.8+n()*.5),e.getY(s)*(.6+n()*.3),e.getZ(s)*(.8+n()*.5));return t.translate(0,.6,0),re(t,i)}function v_(){let i=[],t=new Me(14,20,26,9);t.translate(0,13,0),i.push(re(t,11819066));let e=new Me(14.3,14.6,3,9);e.translate(0,22,0),i.push(re(e,13662799));let n=new Me(13,14,1.5,9);return n.translate(0,26.5,0),i.push(re(n,10242608)),Xn(i)}function y_(){let i=new ja(.7,0);return i.scale(1.2,.6,1.2),i.translate(0,.3,0),re(i,9076028)}function M_(){let i=[],t=new Me(.2,.3,1.6,6);return t.translate(0,.8,0),i.push(re(t,5913899)),[[2.2,2.6,1.6],[1.7,2.3,3.2],[1.2,2,4.6],[.7,1.6,5.8]].forEach(([n,s,r],a)=>{let o=new xn(n,s,7);o.translate(0,r,0),i.push(re(o,a%2?2051382:2382398));let l=new xn(n*.72,s*.45,7);l.translate(0,r+s*.3,0),i.push(re(l,15857146))}),Xn(i)}function b_(){let i=[],t=new xn(38,60,7);t.translate(0,30,0),i.push(re(t,7043208));let e=new xn(17,27,7);return e.translate(0,46.6,0),i.push(re(e,16054524)),Xn(i)}function S_(){let i=[],t=new Me(.1,.14,7,6);t.translate(0,3.5,0),i.push(re(t,3816004));let e=new _e(.12,.12,2.2);return e.translate(0,7,-1),i.push(re(e,3816004)),Xn(i)}function vf(i){let t={};for(let e of new Set(i.props))e==="cactus"&&(t[e]=x_()),e==="rock"&&(t[e]=__(i.id==="snow"?8226708:10246971)),e==="mesa"&&(t[e]=v_()),e==="bush"&&(t[e]=y_()),e==="pine"&&(t[e]=M_()),e==="peak"&&(t[e]=b_()),e==="lamp"&&(t[e]=S_());return t}var qe=2,Ys=50,Ur=1.45,yh=11,Mh=3,bh=500,yf=400,xo=class{constructor(t,e,n=1,s=1,r={}){var a;this.scene=t,this.map=e,this.seed=n,this.quality=s,this.finishIdx=(a=r.finishIdx)!=null?a:1/0,this.rnd=_n(n*9301+49297),this.hw=e.road.halfWidth,this.sh=e.road.shoulder,this.wall=this.hw+this.sh+.35,this.pts=[],this.base=0,this.g={x:0,z:0,h:0,s:0,k:0,seg:{type:"straight",L:160,u:0,k:0,ramp:1}},this.chunks=new Map,this.root=new Ae,t.add(this.root),this.makeMaterials(),this.propGeo=vf(e),this.ensure(Ys*(yh+2))}newSegment(){if(this.queue&&this.queue.length)return this.queue.shift();let t=this.rnd,e=this.map.track,n=this.g,s=h=>({type:"straight",L:h,u:0,k:0,ramp:1}),r=(h,u,f,d)=>{Math.abs(d+f*u*.75)>Ur&&(f=-f),Math.abs(d+f*u*.75)>Ur&&(u=Math.max(.3,(Ur-Math.abs(d))/.75));let g=u*h;return{seg:{type:"curve",L:g,u:0,k:f/h,ramp:Math.min(g*.3,22)},dh:f*u*.75,dir:f}},a=t()<.5?1:-1,o=t();if(o<.2)return s(e.straight[0]+t()*(e.straight[1]-e.straight[0]));if(o<.32){let h=e.minR*(1+t()*1.4),u=.5+t()*.7,f=r(h,u,a,n.h),d=r(h*(.8+t()*.5),u*(.8+t()*.4),-f.dir,n.h+f.dh);return this.queue=[s(4+t()*18),d.seg],f.seg}if(o<.4)return r(e.minR*(1+t()*.4),1.1+t()*.7,a,n.h).seg;if(o<.54){let h=r(e.maxR*(.5+t()*.4),.4+t()*.3,a,n.h),u=r(e.minR*(1+t()*.5),.6+t()*.6,h.dir,n.h+h.dh);return this.queue=[u.seg],h.seg}if(o<.64&&e.corners){let h=r(e.minR*(.9+t()*.3),1.45+t()*.25,a,n.h);return this.queue=[s(20+t()*50)],h.seg}let l=e.minR+Math.pow(t(),1.3)*(e.maxR-e.minR),c=r(l,.4+t()*1.3,a,n.h);return t()<.5&&(this.queue=[s(10+t()*50)]),c.seg}genPoint(){let t=this.g;t.seg.u>=t.seg.L&&(t.seg=this.newSegment());let e=t.seg,n=Math.min(e.u,e.L-e.u),s=e.k*Pi(pe(n/e.ramp,0,1));t.h+=s*qe,t.h=pe(t.h,-Ur-.1,Ur+.1);let r=this.pts.length+this.base,a={x:t.x,z:t.z,h:t.h,k:s,s:t.s,i:r,y:this.map.track.hill*(vh(t.s*.0042,this.seed)*2-1)+(vh(t.s*.021,this.seed+5)-.5)*this.map.track.hill*.15,lx:Math.cos(t.h),lz:-Math.sin(t.h)};t.s<120&&(a.y*=t.s/120),this.pts.push(a),t.x+=Math.sin(t.h)*qe,t.z+=Math.cos(t.h)*qe,t.s+=qe,e.u+=qe}ensure(t){for(;this.base+this.pts.length<=t+2;)this.genPoint()}P(t){t=Math.round(t);let e=pe(t-this.base,0,this.pts.length-1);return this.pts[e]}get lastIdx(){return this.base+this.pts.length-1}sample(t,e={}){this.ensure(Math.ceil(t)+1);let n=Math.max(this.base,Math.floor(t)),s=pe(t-n,0,1),r=this.P(n),a=this.P(n+1);return e.x=r.x+(a.x-r.x)*s,e.y=r.y+(a.y-r.y)*s,e.z=r.z+(a.z-r.z)*s,e.h=r.h+(a.h-r.h)*s,e.k=r.k+(a.k-r.k)*s,e.lx=Math.cos(e.h),e.lz=-Math.sin(e.h),e.slope=(a.y-r.y)/qe,e}project(t,e,n){let s=pe(Math.round(n),this.base+1,this.lastIdx-2),r=M=>{let x=this.P(M);return(x.x-t)**2+(x.z-e)**2},a=r(s);for(let M=0;M<400;M++){let x=s+1<=this.lastIdx-1?r(s+1):1/0,y=s-1>=this.base?r(s-1):1/0;if(x<a)s++,a=x;else if(y<a)s--,a=y;else break}let o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((t-o.x)*c+(e-o.z)*h)/(c*c+h*h);u<0&&s>this.base&&(s--,o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((t-o.x)*c+(e-o.z)*h)/(c*c+h*h)),u=pe(u,0,1);let f=o.x+c*u,d=o.z+h*u,g=o.h+(l.h-o.h)*u,_=Math.cos(g),p=-Math.sin(g),m=(t-f)*_+(e-d)*p;return{idx:s+u,lat:m,y:o.y+(l.y-o.y)*u,h:g,lx:_,lz:p,slope:(l.y-o.y)/qe,k:o.k}}terrainY(t,e){let n=Math.abs(e),s=t.x+t.lx*e,r=t.z+t.lz*e,a=this.map.ground.hills,o=t.y,l=this.hw+this.sh;if(this.map.id==="city")return n>l+.4&&(o+=.18),o;n>l&&(o-=Math.min(.6,(n-l)*.25));let c=Pi(pe((n-l-6)/70,0,1));return o+=c*a*(es(s*.008,r*.008,this.seed+11,4)*1.6-.35),o}makeMaterials(){let t=this.map,e=t.road,n=cn(256,512,(c,h,u)=>{c.fillStyle=e.asphalt,c.fillRect(0,0,h,u);let f=_n(3);for(let d=0;d<9e3;d++){let g=f();c.fillStyle=g<.5?"rgba(0,0,0,0.13)":"rgba(255,255,255,0.07)",c.fillRect(f()*h,f()*u,1+f()*2,1+f()*2)}c.fillStyle="rgba(0,0,0,0.12)",c.fillRect(h*.18,0,h*.1,u),c.fillRect(h*.72,0,h*.1,u),c.fillStyle=e.edge,c.fillRect(6,0,6,u),c.fillRect(h-12,0,6,u),c.fillStyle=e.line,c.fillRect(h/2-4,0,8,u*.5)},{repeat:!0,aniso:8});this.roadMat=new ae({map:n,roughness:t.night?.42:.88,metalness:t.night?.15:0,envMapIntensity:t.night?.8:.4});let s=cn(32,64,(c,h,u)=>{c.fillStyle="#d42b2b",c.fillRect(0,0,h,u/2),c.fillStyle="#f2f2f2",c.fillRect(0,u/2,h,u/2)},{repeat:!0});if(this.kerbMat=new ae({map:s,roughness:.7}),this.shoulderMat=new Ue({color:e.shoulderColor}),this.terrainMat=new Ue({vertexColors:!0}),this.propMat=new Ue({vertexColors:!0,flatShading:!0}),t.barrier==="tires"){let c=cn(128,64,(h,u,f)=>{for(let d=0;d<4;d++){h.fillStyle=d%2?"#e8e8e8":"#d63a2f",h.fillRect(d*32,0,32,f),h.fillStyle="rgba(0,0,0,0.85)";for(let g=0;g<3;g++)h.beginPath(),h.ellipse(d*32+16,g*21+11,12,8,0,0,Math.PI*2),h.fill()}},{repeat:!0});this.barrierMat=new Ue({map:c,side:Pe})}else if(t.barrier==="rail")this.barrierMat=new ae({color:12107976,metalness:.7,roughness:.35,side:Pe}),this.postMat=new Ue({color:5922662}),this.snowbankMat=new Ue({color:16185852,side:Pe});else{let c=cn(128,32,(h,u,f)=>{h.fillStyle="#8d8d95",h.fillRect(0,0,u,f),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(0,0,2,f),h.fillRect(64,0,2,f)},{repeat:!0});this.barrierMat=new Ue({map:c,side:Pe}),this.neonMat=new ye({color:2680831}),this.neonMat2=new ye({color:16723622})}let r=c=>cn(512,96,(h,u,f)=>{for(let d=0;d<u;d+=24)for(let g=0;g<f;g+=24)h.fillStyle=(d+g)/24%2?"#111":"#fff",h.fillRect(d,g,24,24);h.fillStyle="rgba(10,10,20,0.85)",h.fillRect(60,12,u-120,f-24),h.fillStyle="#ffd400",h.font="bold 54px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText(c,u/2,f/2+2)});this.gateMatCP=new ye({map:r("\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422"),side:Pe}),this.gateMatStart=new ye({map:r("\u0421\u0422\u0410\u0420\u0422"),side:Pe}),this.gateMatFinish=new ye({map:r("\u0424\u0418\u041D\u0418\u0428"),side:Pe}),this.finishLineMat=new ye({map:cn(256,32,(c,h,u)=>{for(let f=0;f<h;f+=16)for(let d=0;d<u;d+=16)c.fillStyle=(f+d)/16%2?"#111":"#f4f4f4",c.fillRect(f,d,16,16)}),side:Pe}),this.pillarMat=new ae({color:2236968,roughness:.6});let a=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];this.bannerRows=a.length;let o=cn(512,512,(c,h,u)=>{a.forEach(([f,d,g],_)=>{let p=_*64;c.fillStyle=d,c.fillRect(0,p,h,64),c.fillStyle=g,c.fillRect(0,p,h,4),c.fillRect(0,p+60,h,4),c.font="italic 900 42px Arial",c.textAlign="center",c.textBaseline="middle",c.fillText(f,h/2,p+34)})});o.wrapS=si,this.bannerMat=new Ue({map:o,side:Pe});let l=cn(512,128,(c,h,u)=>{c.fillStyle="#3a3d46",c.fillRect(0,0,h,u);let f=_n(77),d=["#e63946","#f1faee","#457b9d","#ffb703","#2a9d8f","#fb8500","#8338ec","#ffffff","#111111"];for(let g=0;g<5;g++){let _=14+g*23;c.fillStyle="#2b2d34",c.fillRect(0,_+12,h,11);for(let p=4;p<h;p+=9+f()*4)f()<.12||(c.fillStyle=d[Math.floor(f()*d.length)],c.fillRect(p,_+2,7,11),c.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(f()*4)],c.beginPath(),c.arc(p+3.5,_-1,3.2,0,Math.PI*2),c.fill(),f()<.15&&(c.fillStyle="#ffd400",c.fillRect(p+5,_-9,2,8)))}},{repeat:!0});if(l.repeat.set(3,1),this.standMats=[l,l].map(c=>new Ue({map:c})),this.standGrey=new Ue({color:7040888}),this.roofMat=new Ue({color:14034984}),t.id==="city"){this.buildingMats=[0,1,2].map(f=>{let d=cn(128,256,(g,_,p)=>{let m=["#20222c","#262033","#1d2a33"][f];g.fillStyle=m,g.fillRect(0,0,_,p);let M=_n(100+f);for(let x=6;x<p-4;x+=12)for(let y=6;y<_-4;y+=12){let A=M()<.42;g.fillStyle=A?["#ffd98a","#fff2c4","#9fd8ff","#ffb36b"][Math.floor(M()*4)]:"#0c0d12",g.fillRect(y,x,7,8)}},{repeat:!0});return d.repeat.set(2,3),new Ue({map:d,emissiveMap:d,emissive:16777215,emissiveIntensity:.85})}),this.lampHeadMat=new ye({color:16769696});let c=cn(128,128,(f,d,g)=>{let _=f.createRadialGradient(64,64,0,64,64,64);_.addColorStop(0,"rgba(255,210,140,0.55)"),_.addColorStop(1,"rgba(255,210,140,0)"),f.fillStyle=_,f.fillRect(0,0,d,g)});this.poolMat=new ye({map:c,transparent:!0,depthWrite:!1,blending:Is});let h=["RAMEN","HOTEL","24/7","DRIFT","\u041A\u0410\u0424\u0415","NEON","CLUB","\u0422\u0410\u041A\u0421\u0418","SUSHI","GARAGE","\u041A\u0418\u041D\u041E","TURBO"],u=["#ff2ea6","#28e7ff","#ffe600","#7cff4f","#ff7b1c","#b26bff"];this.neonSigns=h.map((f,d)=>new ye({map:cn(256,96,(g,_,p)=>{g.fillStyle="#07070c",g.fillRect(0,0,_,p);let m=u[d%u.length];g.strokeStyle=m,g.lineWidth=5,g.strokeRect(6,6,_-12,p-12),g.shadowColor=m,g.shadowBlur=18,g.fillStyle=m,g.font="bold 56px Arial",g.textAlign="center",g.textBaseline="middle",g.fillText(f,_/2,p/2+3),g.fillText(f,_/2,p/2+3)}),side:Pe}))}}update(t){let e=Math.floor(t/Ys);this.ensure((e+yh+1)*Ys+2);let n=0;for(let r=Math.max(0,e-Mh);r<=e+yh;r++)if(!this.chunks.has(r)){if(n>=2&&r>e+2)break;this.buildChunk(r),n++}for(let[r,a]of this.chunks)r<e-Mh&&(this.root.remove(a),a.traverse(o=>{o.geometry&&!o.userData.sharedGeo&&o.geometry.dispose(),o.isInstancedMesh&&o.dispose()}),this.chunks.delete(r));let s=(e-Mh-2)*Ys;if(s>this.base+200){let r=s-this.base;this.pts.splice(0,r),this.base+=r}}ribbon(t,e,n,s,r,a=0,o){let l=[],c=[],h=[],u=[],f=n.length,d=0;for(let _=t;_<=e;_++){let p=this.P(_);for(let m=0;m<f;m++){let M=n[m];if(l.push(p.x+p.lx*M,s(p,M),p.z+p.lz*M),c.push(m/(f-1),p.s*a),r){let x=r(p,M);h.push(x.r,x.g,x.b)}}if(_>t&&!(o&&o(_-1))){let m=(d-1)*f,M=d*f;for(let x=0;x<f-1;x++)u.push(m+x,m+x+1,M+x,m+x+1,M+x+1,M+x)}d++}let g=new de;return g.setAttribute("position",new ne(l,3)),g.setAttribute("uv",new ne(c,2)),r&&g.setAttribute("color",new ne(h,3)),g.setIndex(u),g.computeVertexNormals(),g}buildChunk(t){let e=t*Ys,n=e+Ys;this.ensure(n+2);let s=new Ae,r=this.map,a=this.hw,o=this.sh,l=m=>m.y,c=new ft(this.ribbon(e,n,[a,-a],m=>m.y+.02,null,1/12),this.roadMat);c.receiveShadow=!0,s.add(c);let h=m=>Math.abs(this.P(m).k)>1/170||Math.abs(this.P(m+1).k)>1/170;for(let m of[1,-1]){let M=m>0?[a+o,a]:[-a,-a-o],x=new ft(this.ribbon(e,n,M,(A,T)=>A.y+.035+(Math.abs(T)>a+.1?.03:0),null,1/4,A=>!h(A)),this.kerbMat);x.receiveShadow=!0,s.add(x);let y=new ft(this.ribbon(e,n,M,A=>A.y+.015,null,0,A=>h(A)),this.shoulderMat);y.receiveShadow=!0,s.add(y)}let u=new Mt(r.ground.near),f=new Mt(r.ground.far),d=new Mt,g=(m,M)=>{let x=m.x+m.lx*M,y=m.z+m.lz*M,A=es(x*.05,y*.05,this.seed+3,2);return d.copy(u).lerp(f,pe(A*1.3-.15+Math.abs(M)/400,0,1)).clone()},_=a+o,p=[_,_+1.5,_+4,_+9,_+18,_+34,_+60,_+100,_+160,_+240];for(let m of[1,-1]){let M=m>0?p.slice().reverse():p.map(y=>-y),x=new ft(this.ribbon(e,n,M,(y,A)=>this.terrainY(y,A),g),this.terrainMat);x.receiveShadow=!0,s.add(x)}this.buildBarriers(s,e,n),this.buildBanners(s,t,e,n),this.buildProps(s,t,e,n);for(let m=e;m<n;m++)m===28&&(this.buildGate(s,m,this.gateMatStart),this.buildStands(s,m+12)),m>=yf&&(m-yf)%bh===0&&m<this.finishIdx-100&&(this.buildGate(s,m,this.gateMatCP),this.buildStands(s,m-14)),m===this.finishIdx&&(this.buildGate(s,m,this.gateMatFinish),this.buildFinishLine(s,m),this.buildStands(s,m-14),this.buildStands(s,m+20));this.root.add(s),this.chunks.set(t,s)}buildBarriers(t,e,n){let s=this.wall,r=this.map;for(let a of[1,-1]){let o=a;if(r.barrier==="tires"){let l=this.ribbon(e,n,[o*s,o*s],(h,u)=>0,null,.3125);this.wallFromRibbon(l,e,n,o*s,0,1.05);let c=new ft(l,this.barrierMat);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}else if(r.barrier==="rail"){let l=this.ribbon(e,n,[o*s,o*s],()=>0,null,.25);this.wallFromRibbon(l,e,n,o*s,.45,.8);let c=new ft(l,this.barrierMat);c.castShadow=!0,t.add(c);let h=Math.floor((n-e)/2),u=new Un(new _e(.12,.85,.12),this.postMat,h);u.userData.sharedGeo=!1;let f=new se;for(let g=0;g<h;g++){let _=this.P(e+g*2);f.makeTranslation(_.x+_.lx*o*(s+.12),_.y+.42,_.z+_.lz*o*(s+.12)),u.setMatrixAt(g,f)}t.add(u);let d=new ft(this.ribbon(e,n,o>0?[s+3,s+1.6,s+.4]:[-s-.4,-s-1.6,-s-3],(g,_)=>g.y+(Math.abs(Math.abs(_)-s-1.6)<.1?.9:.05),null),this.snowbankMat);t.add(d)}else{let l=[[s,0],[s+.12,.3],[s+.18,.85],[s+.32,.85],[s+.4,.3],[s+.45,0]],c=this.sweep(e,n,l.map(([f,d])=>[o*f,d]),1/6),h=new ft(c,this.barrierMat);h.castShadow=!0,h.receiveShadow=!0,t.add(h);let u=new ft(this.ribbon(e,n,o>0?[s+.3,s+.2]:[-s-.2,-s-.3],f=>f.y+.87,null),o>0?this.neonMat:this.neonMat2);t.add(u)}}}sweep(t,e,n,s=0){let r=[],a=[],o=[],l=n.length,c=0;for(let u=t;u<=e;u++,c++){let f=this.P(u);if(n.forEach(([d,g],_)=>{r.push(f.x+f.lx*d,f.y+g,f.z+f.lz*d),a.push(f.s*s,_/(l-1))}),u>t){let d=(c-1)*l,g=c*l;for(let _=0;_<l-1;_++)o.push(d+_,d+_+1,g+_,d+_+1,g+_+1,g+_)}}let h=new de;return h.setAttribute("position",new ne(r,3)),h.setAttribute("uv",new ne(a,2)),h.setIndex(o),h.computeVertexNormals(),h}wallFromRibbon(t,e,n,s,r,a){let o=t.attributes.position,l=0;for(let h=e;h<=n;h++,l++){let u=this.P(h);o.setY(l*2,u.y+a),o.setY(l*2+1,u.y+r)}let c=t.attributes.uv;for(let h=0;h<c.count;h++)c.setX(h,h%2);for(let h=0;h<c.count;h++){let u=c.getX(h),f=c.getY(h);c.setXY(h,f,u)}t.computeVertexNormals()}clearOfRoad(t,e,n,s){let r=(this.wall+s)**2;for(let a=Math.max(this.base,n-90);a<=Math.min(this.lastIdx,n+90);a+=3){let o=this.P(a);if((o.x-t)**2+(o.z-e)**2<r)return!1}return!0}buildProps(t,e,n,s){let r=this.map,a=_n(this.seed*1e3+e*7919),o=new se,l=new gn,c=new P,h=new P,u=new P(0,1,0),f=(d,g,_,p,m,M,x=3,y=!0)=>{let A=this.propGeo[d];if(!A)return;let T=[];for(let I=0;I<g*3&&T.length<g;I++){let z=n+Math.floor(a()*(s-n)),v=this.P(z),H=(a()<.5?-1:1)*(_+a()*(p-_)),B=v.x+v.lx*H,G=v.z+v.lz*H;if(!this.clearOfRoad(B,G,z,x))continue;let j=m+a()*(M-m);l.setFromAxisAngle(u,a()*Math.PI*2),c.set(j,j*(.85+a()*.3),j),h.set(B,this.terrainY(v,H)-.1,G),T.push(o.compose(h,l,c).clone())}if(!T.length)return;let E=new Un(A,this.propMat,T.length);E.userData.sharedGeo=!0,T.forEach((I,z)=>E.setMatrixAt(z,I)),E.castShadow=y&&this.quality>0,E.receiveShadow=!1,t.add(E)};r.id==="desert"?(f("cactus",8,this.wall+3,70,.8,1.5),f("bush",8,this.wall+2,60,.7,1.6,2,!1),f("rock",8,this.wall+4,110,.6,3.2),a()<.8&&f("mesa",1,150,240,.7,1.7,60,!1)):r.id==="snow"?(f("pine",22,this.wall+3,110,.8,1.6),f("rock",6,this.wall+3,80,.6,2.2),a()<.9&&f("peak",1,170,250,.8,1.8,90,!1)):r.id==="city"&&this.buildCity(t,e,n,s,a)}buildCity(t,e,n,s,r){let a=new _e(1,1,1);a.translate(0,.5,0);let o=[[],[],[]],l=new se,c=new gn,h=new P,u=new P,f=new P(0,1,0),d=[];for(let x of[1,-1]){let y=n+Math.floor(r()*3);for(;y<s;){let A=this.P(y),T=10+r()*10,E=12+r()*14,I=14+Math.pow(r(),1.6)*80,z=x*(this.wall+8+E/2+r()*6),v=A.x+A.lx*z,S=A.z+A.lz*z;this.clearOfRoad(v,S,y,E/2+4)&&(c.setFromAxisAngle(f,A.h),h.set(T,I,E),u.set(v,A.y,S),o[Math.floor(r()*3)].push(l.compose(u,c,h).clone()),r()<.45&&d.push({p:A,off:z-x*(E/2+.3),y:A.y+6+r()*Math.min(20,I-10),side:x,w:6+r()*3})),y+=Math.ceil((T+3)/qe)}}o.forEach((x,y)=>{if(!x.length)return;let A=new Un(a,this.buildingMats[y],x.length);x.forEach((T,E)=>A.setMatrixAt(E,T)),A.userData.sharedGeo=!1,t.add(A)});let g=new Se(1,1);for(let x of d){let y=this.neonSigns[Math.floor(r()*this.neonSigns.length)],A=new ft(g,y);A.userData.sharedGeo=!0,A.scale.set(x.w,x.w*.375,1),A.position.set(x.p.x+x.p.lx*x.off,x.y,x.p.z+x.p.lz*x.off),A.rotation.y=x.p.h+(x.side>0?-Math.PI/2:Math.PI/2),t.add(A)}let _=this.propGeo.lamp,p=[],m=[],M=[];for(let x=n+e%2*7;x<s;x+=15){let y=this.P(x),A=(x/15|0)%2?1:-1,T=A*(this.wall+.9);c.setFromAxisAngle(f,y.h+(A>0?-Math.PI/2:Math.PI/2)),u.set(y.x+y.lx*T,y.y,y.z+y.lz*T),h.set(1,1,1),p.push(l.compose(u,c,h).clone());let E=T-A*2;m.push(new se().makeTranslation(y.x+y.lx*E,y.y+6.9,y.z+y.lz*E));let I=T-A*3.5;M.push({x:y.x+y.lx*I,y:y.y+.05,z:y.z+y.lz*I})}if(p.length){let x=new Un(_,this.propMat,p.length);x.userData.sharedGeo=!0,p.forEach((I,z)=>x.setMatrixAt(z,I)),t.add(x);let y=new _e(.5,.15,.9),A=new Un(y,this.lampHeadMat,m.length);m.forEach((I,z)=>A.setMatrixAt(z,I)),t.add(A);let T=new Se(11,11);T.rotateX(-Math.PI/2);let E=new Un(T,this.poolMat,M.length);M.forEach((I,z)=>E.setMatrixAt(z,new se().makeTranslation(I.x,I.y,I.z))),E.renderOrder=1,t.add(E)}}buildBanners(t,e,n,s){let r=_n(this.seed*31+e*101),a={tires:1.1,rail:.85,concrete:.9}[this.map.barrier],o=[],l=[],c=[],h=this.bannerRows;for(let f=n;f+3<=s;f+=4){if(r()<.45)continue;let d=r()<.5?1:-1,g=Math.floor(r()*h),_=1-(g+1)/h,p=1-g/h,m=d*(this.wall+.05),M=o.length/3;for(let x=0;x<=3;x++){let y=this.P(f+x),A=y.x+y.lx*m,T=y.z+y.lz*m;o.push(A,y.y+a,T,A,y.y+a+.75,T);let E=d>0?x/3:1-x/3;l.push(E,_,E,p)}for(let x=0;x<3;x++){let y=M+x*2;c.push(y,y+2,y+1,y+1,y+2,y+3)}}if(!o.length)return;let u=new de;u.setAttribute("position",new ne(o,3)),u.setAttribute("uv",new ne(l,2)),u.setIndex(c),u.computeVertexNormals(),t.add(new ft(u,this.bannerMat))}buildStands(t,e){let n=this.P(e);for(let s of[1,-1]){let r=s*(this.wall+7.5),a=n.x+n.lx*r,o=n.z+n.lz*r;if(!this.clearOfRoad(a,o,e,5.5))continue;let l=[this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey];l[s>0?1:0]=this.standMats[0];let c=new ft(new _e(8,5,34),l);c.position.set(a,n.y+2.5,o),c.rotation.y=n.h,c.castShadow=!0,t.add(c);let h=new ft(new _e(9.5,.3,35),this.roofMat);h.position.set(a-n.lx*s*.6,n.y+7.2,o-n.lz*s*.6),h.rotation.y=n.h,h.rotation.z=s*.08,t.add(h);for(let u of[-16,0,16]){let f=new ft(new _e(.25,2.3,.25),this.pillarMat);f.position.set(a-n.lx*s*4.3+Math.sin(n.h)*u,n.y+6,o-n.lz*s*4.3+Math.cos(n.h)*u),t.add(f)}}}buildFinishLine(t,e){let n=this.P(e),s=new Se(this.hw*2,2);s.rotateX(-Math.PI/2);let r=new ft(s,this.finishLineMat);r.rotation.y=n.h,r.position.set(n.x,n.y+.04,n.z),t.add(r)}buildGate(t,e,n){let s=this.P(e),r=this.wall+.5,a=new _e(.6,6.5,.6);for(let l of[1,-1]){let c=new ft(a,this.pillarMat);c.position.set(s.x+s.lx*l*r,s.y+3.25,s.z+s.lz*l*r),c.rotation.y=s.h,c.castShadow=!0,t.add(c)}let o=new ft(new Se(r*2,r*2*96/512),n);o.position.set(s.x,s.y+6.2,s.z),o.rotation.y=s.h+Math.PI,t.add(o)}};var Bn=96,vn=4,Nr=Bn/vn,Sh=3,_o=class{constructor(t,e,n=1,s=1,r={}){this.isField=!0,this.props=r.props!==!1,this.flat=!!r.flat,this.scene=t,this.map=e,this.seed=n,this.quality=s,this.f=e.field,this.hw=1e9,this.wall=1e9,this.base=0,this.lastIdx=1e9,this.sh=0,this.chunks=new Map,this.root=new Ae,t.add(this.root),this.target={x:0,z:0},this.makeMaterials(),this.propGeo=w_(e.field.surface),this.update(0)}H(t,e){let n=this.f,s=this.seed,r=0;this.flat||(r=(es(t*n.freq,e*n.freq,s+3,4)-.5)*n.amp*2,r+=(es(t*n.freq*3.1,e*n.freq*3.1,s+41,2)-.5)*n.amp*.35);let a=Math.hypot(t,e);return r*=Pi(pe((a-25)/60,0,1)),n.shore!==void 0&&t<n.shore+30&&(r-=(n.shore+30-t)*.09),r}heightAt(t,e){let n=Math.floor(t/vn),s=Math.floor(e/vn),r=t/vn-n,a=e/vn-s,o=n*vn,l=s*vn,c=this.H(o,l),h=this.H(o+vn,l),u=this.H(o,l+vn),f=this.H(o+vn,l+vn);return r+a<=1?c+(h-c)*r+(u-c)*a:f+(u-f)*(1-r)+(h-f)*(1-a)}grad(t,e){return[(this.heightAt(t+1.2,e)-this.heightAt(t-1.2,e))/(2*1.2),(this.heightAt(t,e+1.2)-this.heightAt(t,e-1.2))/(2*1.2)]}ensure(){}P(t){let e=t*2,n=this.heightAt(0,e);return{x:0,z:e,y:n,h:0,lx:1,lz:0,s:e,k:0}}sample(t,e={}){return Object.assign(e,this.P(t),{slope:0})}project(t,e,n){return{idx:n,lat:0,y:this.heightAt(t,e),h:0,lx:1,lz:0,slope:0,k:0}}collidersNear(t,e){let n=[],s=Math.floor(t/Bn),r=Math.floor(e/Bn);for(let a=s-1;a<=s+1;a++)for(let o=r-1;o<=r+1;o++){let l=this.chunks.get(a+","+o);if(l)for(let c of l.userData.col)n.push(c)}return n}makeMaterials(){let t=this.f,e=cn(512,512,(n,s,r)=>{n.fillStyle=t.texBase,n.fillRect(0,0,s,r);let a=_n(5);for(let o=0;o<9e3;o++){let l=a();n.fillStyle=l<.5?`rgba(0,0,0,${.05+a()*.08})`:`rgba(255,255,255,${.04+a()*.07})`;let c=1+a()*2.5;n.fillRect(a()*s,a()*r,c,c)}if(t.surface==="asphalt"){n.strokeStyle="rgba(245,245,240,0.8)",n.lineWidth=5,n.strokeRect(2.5,2.5,s-5,r-5),n.setLineDash([26,22]),n.strokeStyle="rgba(242,194,48,0.75)",n.lineWidth=4,n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,r),n.stroke(),n.setLineDash([]),n.strokeStyle="rgba(10,10,10,0.18)",n.lineWidth=7;for(let o=0;o<5;o++)n.beginPath(),n.arc(a()*s,a()*r,60+a()*120,a()*6,a()*6+2.5),n.stroke()}if(t.surface==="beach"){n.strokeStyle="rgba(160,120,70,0.13)",n.lineWidth=3;for(let o=10;o<r;o+=22){n.beginPath();for(let l=0;l<=s;l+=16)n.lineTo(l,o+Math.sin(l*.05+o)*5);n.stroke()}}},{repeat:!0});if(this.groundMat=new Ue({map:e,vertexColors:!0}),this.propMat=new Ue({vertexColors:!0,flatShading:!0}),t.shore!==void 0){let n=new ft(new Se(900,4e3),new Ue({color:3120836,transparent:!0,opacity:.88}));n.rotation.x=-Math.PI/2,n.position.set(t.shore-440,-1.4,0),this.water=n,this.root.add(n)}}update(){let t=this.target,e=Math.floor(t.x/Bn),n=Math.floor(t.z/Bn),s=0;for(let r=0;r<=Sh;r++)for(let a=e-r;a<=e+r;a++)for(let o=n-r;o<=n+r;o++){if(Math.max(Math.abs(a-e),Math.abs(o-n))!==r)continue;let l=a+","+o;this.chunks.has(l)||s>=2&&r>1||(this.buildChunk(a,o),s++)}for(let[r,a]of this.chunks){let[o,l]=r.split(",").map(Number);(Math.abs(o-e)>Sh+1||Math.abs(l-n)>Sh+1)&&(this.root.remove(a),a.traverse(c=>{c.geometry&&!c.userData.sharedGeo&&c.geometry.dispose(),c.isInstancedMesh&&c.dispose()}),this.chunks.delete(r))}this.water&&(this.water.position.z=t.z)}buildChunk(t,e){var M;let n=this.f,s=new Ae,r=t*Bn,a=e*Bn,o=Nr+1,l=new Float32Array(o*o*3),c=new Float32Array(o*o*2),h=new Float32Array(o*o*3),u=new Mt(n.colA),f=new Mt(n.colB),d=new Mt((M=n.colLow)!=null?M:n.colB),g=new Mt;for(let x=0;x<=Nr;x++)for(let y=0;y<=Nr;y++){let A=x*o+y,T=r+y*vn,E=a+x*vn,I=this.H(T,E);l[A*3]=T,l[A*3+1]=I,l[A*3+2]=E,c[A*2]=T/32,c[A*2+1]=E/32;let z=es(T*.02,E*.02,this.seed+77,2);g.copy(u).lerp(f,z),n.shore!==void 0?g.lerp(d,Pi(pe((n.shore+34-T)/22,0,1))):g.lerp(d,pe(-I/(n.amp*1.2),0,.6)),h[A*3]=g.r,h[A*3+1]=g.g,h[A*3+2]=g.b}let _=[];for(let x=0;x<Nr;x++)for(let y=0;y<Nr;y++){let A=x*o+y,T=A+1,E=A+o,I=E+1;_.push(A,E,T,T,E,I)}let p=new de;p.setAttribute("position",new he(l,3)),p.setAttribute("uv",new he(c,2)),p.setAttribute("color",new he(h,3)),p.setIndex(_),p.computeVertexNormals();let m=new ft(p,this.groundMat);m.receiveShadow=this.quality>0,s.add(m),s.userData.col=[],this.props&&this.buildProps(s,t,e),this.root.add(s),this.chunks.set(t+","+e,s)}buildProps(t,e,n){let s=this.f,r=_n(this.seed*131+e*7919+n*104729),a=new se,o=new gn,l=new P,c=new P,h=new P(0,1,0);for(let[u,f,d,g,_]of s.props){let p=this.propGeo[u];if(!p)continue;let m=[],M=Math.floor(f*(.5+r()));for(let y=0;y<M;y++){let A=e*Bn+r()*Bn,T=n*Bn+r()*Bn;if(Math.hypot(A,T)<45||s.shore!==void 0&&A<s.shore+(u==="palm"||u==="umbrella"?12:40))continue;let E=d+r()*(g-d);o.setFromAxisAngle(h,r()*Math.PI*2),l.set(E,E,E),c.set(A,this.heightAt(A,T)-.05,T),m.push(a.compose(c,o,l).clone()),_>0&&t.userData.col.push({x:A,z:T,r:_*E})}if(!m.length)continue;let x=new Un(p,this.propMat,m.length);x.userData.sharedGeo=!0,m.forEach((y,A)=>x.setMatrixAt(A,y)),x.castShadow=this.quality>0,t.add(x)}}};function w_(i){let t={},e=n=>Xn(n);{let n=[];for(let s=0;s<3;s++){let r=new Wn(.42,.2,6,10);r.rotateX(Math.PI/2),r.translate(0,.2+s*.36,0),n.push(re(r,s===1?15921906:1842204))}t.tires=e(n)}{let n=new xn(.28,.75,8);n.translate(0,.42,0);let s=new _e(.6,.06,.6);s.translate(0,.03,0);let r=new Me(.17,.2,.14,8);r.translate(0,.45,0),t.cone=e([re(n,16738835),re(s,16738835),re(r,16777215)])}{let n=new Me(.12,.18,9,6);n.translate(0,4.5,0);let s=new _e(1.4,.25,.5);s.translate(0,9,0),t.mast=e([re(n,6053992),re(s,15263968)])}{let n=new _e(3,.8,.7);n.translate(0,.4,0),t.block=e([re(n,13223613)])}{let n=[],s=0;for(let r=0;r<6;r++){let a=new Me(.2-r*.015,.24-r*.015,1.1,6);a.translate(s,.55+r*1.05,0),s+=.12,n.push(re(a,r%2?9071171:10254928))}for(let r=0;r<7;r++){let a=new _e(.5,.06,3);a.translate(0,0,1.4),a.rotateX(.35),a.rotateY(r/7*Math.PI*2),a.translate(s,6.5,0),n.push(re(a,r%2?3115578:4169800))}t.palm=e(n)}{let n=new Me(.04,.04,2.3,5);n.translate(0,1.15,0);let s=new xn(1.4,.5,8);s.translate(0,2.3,0),t.umbrella=e([re(n,15658734),re(s,[16730955,3115744,16763187][Math.floor(Math.random()*3)])])}for(let[n,s]of[["rock",9407104],["srock",8226708]]){let r=new Vs(1.2,0),a=r.attributes.position,o=_n(9);for(let l=0;l<a.count;l++)a.setXYZ(l,a.getX(l)*(.8+o()*.5),a.getY(l)*(.55+o()*.3),a.getZ(l)*(.8+o()*.5));r.translate(0,.45,0),t[n]=re(r,s)}{let n=[],s=new Me(.2,.3,1.6,6);s.translate(0,.8,0),n.push(re(s,5913899)),[[2,2.4,1.6],[1.5,2.1,3],[1,1.8,4.3]].forEach(([r,a,o],l)=>{let c=new xn(r,a,7);c.translate(0,o,0),n.push(re(c,l%2?2051382:2382398));let h=new xn(r*.72,a*.45,7);h.translate(0,o+a*.3,0),n.push(re(h,15857146))}),t.pine=e(n)}{let n=new Gn(.6,8,6);n.translate(0,.55,0);let s=new Gn(.42,8,6);s.translate(0,1.35,0);let r=new xn(.07,.35,5);r.rotateX(Math.PI/2),r.translate(0,1.38,.52),t.snowman=e([re(n,16777215),re(s,16777215),re(r,16742938)])}return t}var wh=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Lt={glass:new ae({color:1779251,roughness:.05,metalness:.2,transparent:!0,opacity:.55,envMapIntensity:1.4,depthWrite:!1}),black:new ae({color:1184276,roughness:.65}),gloss:new ae({color:789518,roughness:.25,metalness:.3}),trim:new ae({color:1973794,roughness:.6,metalness:.05}),chrome:new ae({color:15132908,roughness:.12,metalness:1}),tire:new ae({color:1644827,roughness:.92}),disc:new ae({color:7829628,roughness:.35,metalness:.9}),interior:new ae({color:1710621,roughness:.8}),seat:new ae({color:2763312,roughness:.75}),carbon:new ae({color:1710879,roughness:.3,metalness:.5}),lensClear:new ae({color:16777215,roughness:.02,transparent:!0,opacity:.25,depthWrite:!1}),reverse:new ae({color:14540253,emissive:16777215,emissiveIntensity:.1,roughness:.2}),amber:new ae({color:16751130,emissive:16746496,emissiveIntensity:.4,roughness:.3})},Mf={kaze:{spokes:6,rim:14277340,caliper:14034984,rimDepth:.06,plate:"01 KG 086 AE"},bulldog:{spokes:5,rim:13225170,caliper:2763306,rimDepth:.03,plate:"01 KG 069 V8",chromeBumpers:!0},veloce:{spokes:10,rim:2105636,caliper:16761856,rimDepth:.02,plate:"01 KG 777 GT"},tundra:{spokes:8,rim:15856113,caliper:14034984,rimDepth:.04,plate:"01 KG 555 RR",cage:!0},ronin:{spokes:6,rim:7172214,caliper:2060256,rimDepth:.05,plate:"01 KG 034 GR"},vanta:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MW"},kitsune:{spokes:5,rim:2829102,caliper:16761856,rimDepth:.05,plate:"01 KG 013 RX"},tora:{spokes:5,rim:14080220,caliper:14034984,rimDepth:.07,plate:"01 KG 002 JZ"},toro:{spokes:10,rim:1842207,caliper:16747520,rimDepth:.02,plate:"01 KG 012 LP"},stutt:{spokes:5,rim:13225170,caliper:16764928,rimDepth:.03,plate:"01 KG 911 SS"},shiro:{spokes:8,rim:12633032,caliper:4473924,rimDepth:.07,plate:"01 KG 086 AE"},hayate:{spokes:6,rim:15263976,caliper:14034984,rimDepth:.04,plate:"01 KG 009 EV",cage:!0},sakura:{spokes:5,rim:2829634,caliper:16731501,rimDepth:.07,plate:"01 KG 015 SL"},stallion:{spokes:5,rim:1842207,caliper:14034984,rimDepth:.04,plate:"01 KG 050 GT"},pixel:{spokes:5,rim:9279918,caliper:14034984,rimDepth:.03,plate:"01 KG 007 GT"},estate:{spokes:10,rim:3948357,caliper:14034984,rimDepth:.03,plate:"01 KG 006 RS"},aurora:{spokes:10,rim:1118484,caliper:62932,rimDepth:.02,plate:"01 KG 001 HX"},bars:{spokes:6,rim:2829099,caliper:5592405,rimDepth:.06,plate:"01 KG 444 OR"},baron:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MB"},mamba:{spokes:5,rim:1842207,caliper:16759304,rimDepth:.04,plate:"01 KG 010 VR"}};function E_(i,t=2){for(let e=0;e<t;e++){let n=[i[0]];for(let s=0;s<i.length-1;s++){let r=i[s],a=i[s+1];n.push([r[0]*.75+a[0]*.25,r[1]*.75+a[1]*.25]),n.push([r[0]*.25+a[0]*.75,r[1]*.25+a[1]*.75])}n.push(i[i.length-1]),i=n}return i}function T_(i,t,e){var l;let n=new Ai,s=i[i.length-1][1];n.moveTo(i[0][0],i[0][1]);for(let c=1;c<i.length;c++)n.lineTo(i[c][0],i[c][1]);let r=e+.08,a=e+((l=t.ride)!=null?l:0),o=c=>{n.lineTo(c-r,s),n.lineTo(c-r,Math.min(a,s+.02)),n.absarc(c,a,r,Math.PI,0,!0),n.lineTo(c+r,s)};return o(t.wheelR),o(t.wheelF),n.lineTo(i[0][0],s),n.closePath(),n}function vo(i,t,e,n=3){let s=new Qa(i,{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:n,curveSegments:14});s.rotateY(-Math.PI/2),s.computeBoundingBox();let r=s.boundingBox;return s.translate(-(r.min.x+r.max.x)/2,0,0),s}function bf(i,t){let e=i.attributes.position,n=new P;for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);i.computeVertexNormals()}function Xt(i,t,e,n,s,r,a,o){let l=new ft(new _e(i,t,e),n);return l.position.set(s,r,a),l.castShadow=!0,o&&o.add(l),l}function Ge(i,t,e,n,s,r,a,o,l=16){let c=new Me(i,i,t,l);a==="x"?c.rotateZ(Math.PI/2):a==="z"&&c.rotateX(Math.PI/2);let h=new ft(c,e);return h.position.set(n,s,r),o&&o.add(h),h}function li(i,t,e,n,s,r=!1){let a=i.distanceTo(t),o=r?new Me(e,e,a,8).rotateX(Math.PI/2):new _e(e,e,a),l=new ft(o,n);return l.position.copy(i).add(t).multiplyScalar(.5),l.lookAt(t),s.add(l),l}function Fr(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new ln(n);return s.colorSpace=Oe,s.anisotropy=4,s}var Ne={};function A_(){return Ne.grille||(Ne.grille=Fr(128,64,(i,t,e)=>{i.fillStyle="#050505",i.fillRect(0,0,t,e),i.strokeStyle="#3a3a3e",i.lineWidth=2;for(let n=0;n<e+8;n+=8)for(let s=n/8%2?0:5;s<t+10;s+=10){i.beginPath();for(let r=0;r<6;r++){let a=r*Math.PI/3;i.lineTo(s+Math.cos(a)*4,n+Math.sin(a)*4)}i.closePath(),i.stroke()}}))}function R_(i){var t;return Ne[t="p"+i]||(Ne[t]=Fr(256,56,(e,n,s)=>{e.fillStyle="#f4f4f4",e.fillRect(0,0,n,s),e.strokeStyle="#111",e.lineWidth=4,e.strokeRect(2,2,n-4,s-4),e.fillStyle="#d0021b",e.fillRect(6,6,34,s-12),e.fillStyle="#ffd400",e.beginPath(),e.arc(23,22,8,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",23,45),e.fillStyle="#111",e.font="bold 34px Arial",e.textBaseline="middle",e.fillText(i.slice(6),150,30),e.font="bold 26px Arial",e.fillText(i.slice(0,2),62,30)}))}function C_(i,t){var e;return Ne[e="n"+i+t]||(Ne[e]=Fr(128,128,n=>{n.fillStyle=t?"#111":"#fff",n.beginPath(),n.arc(64,64,58,0,Math.PI*2),n.fill(),n.fillStyle=t?"#fff":"#111",n.font="bold 70px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)}))}var Sf=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];function P_(i){var s;let[t,e,n]=Sf[i%Sf.length];return Ne[s="s"+i]||(Ne[s]=Fr(256,64,(r,a,o)=>{r.fillStyle=e,r.beginPath(),r.roundRect?r.roundRect(2,2,a-4,o-4,14):r.rect(2,2,a-4,o-4),r.fill(),r.strokeStyle=n,r.lineWidth=3,r.stroke(),r.fillStyle=n,r.font="italic 900 36px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(t,a/2,o/2+2)}))}function I_(i){var t;return Ne[t="b"+i]||(Ne[t]=Fr(512,48,(e,n,s)=>{e.fillStyle="#0d0d10",e.fillRect(0,0,n,s),e.fillStyle="#fff",e.font="italic 900 34px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(i,n/2,s/2+2)}))}function L_(){if(Ne.ramp)return Ne.ramp;let i=new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),t=new Tr(i,4,1,mn);return t.minFilter=t.magFilter=tn,t.needsUpdate=!0,Ne.ramp=t}function D_(){return Ne.ao||(Ne.ao=(()=>{let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(32,64,8,32,64,64);return e.addColorStop(0,"rgba(0,0,0,0.8)"),e.addColorStop(.6,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),new ln(i)})())}function wf(i){i.updateMatrixWorld(!0);let t=new se().copy(i.matrixWorld).invert(),e=new Map,n=[],s=[];i.traverse(a=>{a.isMesh&&n.push(a)});let r=new se;for(let a of n){let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new ne(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(r.multiplyMatrices(t,a.matrixWorld));let l=a.material.uuid;e.has(l)||e.set(l,{mat:a.material,list:[],order:a.renderOrder}),e.get(l).list.push(o),a.parent.remove(a),a.geometry.dispose()}for(let{mat:a,list:o,order:l}of e.values()){let c=Xn(o);o.forEach(u=>u.dispose());let h=new ft(c,a);h.renderOrder=l,h.castShadow=a!==Lt.lensClear&&!(a.transparent&&a!==Lt.glass),h.receiveShadow=a!==Lt.glass,i.add(h),s.push(h)}return s}var Ef=new be({side:Ie,uniforms:{t:{value:.022}},vertexShader:"uniform float t; void main(){ vec3 p = position + normal * t; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.03, 0.03, 0.045, 1.0); }"});function Tf(i,t){let e=i.geometry.clone();e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=xf(e,.001),e.computeVertexNormals();let n=t?Ef.clone():Ef;t&&(n.uniforms.t.value=t);let s=new ft(e,n);s.position.copy(i.position),s.quaternion.copy(i.quaternion),i.parent.add(s)}function U_(i,t,e,n){let s=new Ae,r=t/2,a=[[i*.7,-r*.96],[i*.86,-r],[i*.95,-r*.92],[i*.995,-r*.6],[i,-r*.2],[i,r*.2],[i*.995,r*.6],[i*.95,r*.92],[i*.86,r],[i*.7,r*.96]],o=new Ka(a.map(([g,_])=>new it(g,_)),28);o.rotateZ(Math.PI/2);let l=new ft(o,Lt.tire);l.castShadow=!0,s.add(l);let c=new ae({color:e.rim,roughness:.3,metalness:.6}),h=new ft(new Me(i*.7,i*.7,t*.92,24,1,!0).rotateZ(Math.PI/2),new ae({color:3816255,metalness:.8,roughness:.4,side:Pe}));s.add(h);let u=n*(r*.82-e.rimDepth),f=new ft(new Wn(i*.69,.018,6,28).rotateY(Math.PI/2),c);f.position.x=n*r*.86,s.add(f),Ge(i*.56,.035,Lt.disc,-n*.02,0,0,"x",s,24),Ge(i*.2,.06,Lt.trim,-n*.01,0,0,"x",s,12);let d=e.spokes;for(let g=0;g<d;g++){let _=g/d*Math.PI*2,p=new ft(new _e(.035,i*.52,d>8?.035:.06),c);p.position.set(u,Math.cos(_)*i*.42,Math.sin(_)*i*.42),p.rotation.x=_,s.add(p)}Ge(i*.17,.06,c,u,0,0,"x",s,16);for(let g=0;g<5;g++){let _=g/5*Math.PI*2;Ge(.014,.05,Lt.chrome,u+n*.03,Math.cos(_)*i*.1,Math.sin(_)*i*.1,"x",s,6)}return Ge(i*.055,.07,Lt.gloss,u+n*.02,0,0,"x",s,12),s}function yo(i,t,e={}){var Q,It,_t,At,Qt;let n=i.body,s=i.wheelRadius,r=Mf[i.id]||Mf.kaze,a=new Ae,o=new eo({color:t,gradientMap:L_()}),l=new Mt(t).getHSL({}).l>.6,c=new ae({color:i.id==="vanta"?1920952:l?1315860:15921906,roughness:.4}),h=n.L,u=n.W,f=E_(n.upper,2),d=h/2,g=n.cabin[0][1],_=(L,X)=>(1-.085*wh(.55,1.02,Math.abs(L)/d))*(1-.07*wh(g-.3,g+.05,X)),p=vo(T_(f,n,s),u,.07,3);bf(p,L=>{L.x*=_(L.z,L.y)});let m=new ft(p,o);m.castShadow=!0,m.receiveShadow=!0,a.add(m);let M=(L,X)=>u/2*_(L,X),x=n.cabin,y=u*.84,A=Math.max(x[1][1],x[2][1]),T=L=>1-.2*wh(g,A,L),E=new Ai;E.moveTo(x[0][0]+.06,x[0][1]-.06);for(let L=0;L<x.length;L++)E.lineTo(x[L][0],x[L][1]);E.lineTo(x[x.length-1][0]+.06,x[x.length-1][1]-.06),E.closePath();let I=vo(E,y,.04,2);bf(I,L=>{L.x*=T(L.y)});let z=new ft(I,Lt.glass);z.renderOrder=3,a.add(z);let v=L=>y/2*T(L),S=Math.abs(x[1][0]-x[2][0])+.12,H=(x[1][0]+x[2][0])/2,B=new Ai;B.moveTo(-S/2,0),B.lineTo(S/2,0),B.lineTo(S/2-.04,.05),B.lineTo(-S/2+.04,.06),B.closePath();let G=vo(B,v(A)*2+.04,.02,2),j=new ft(G,o);j.position.set(0,A-.02,H),j.castShadow=!0,a.add(j);for(let L of[1,-1]){let X=(dt,ut,kt=.012)=>new P(L*(v(ut)+kt),ut,dt);li(X(x[0][0],x[0][1]),X(x[1][0],x[1][1]),.07,o,a),li(X(x[2][0],x[2][1]),X(x[3][0],x[3][1]),.09,o,a);let ht=x[1][0]+(x[2][0]-x[1][0])*.45;li(X(ht,g),X(ht,A-.03),.05,Lt.gloss,a),li(X(x[0][0]-.02,g+.015,.02),X(x[3][0]+.05,g+.015,.02),.03,Lt.gloss,a)}for(let L of[.2,-.25])Xt(.5,.015,.03,Lt.black,L*u,x[0][1]+.03,x[0][0]-.1,a).rotation.set(-.5,0,.12);let k=.45;Xt(y*.9,.2,.35,Lt.interior,0,g-.05,x[0][0]-.25,a);for(let L of[1,-1]){let X=L*y*.24,ht=x[1][0]-.3;Xt(.42,.12,.45,Lt.seat,X,k+.12,ht,a);let dt=Xt(.42,.55,.1,Lt.seat,X,k+.42,ht-.25,a);dt.rotation.x=-.18,Xt(.2,.14,.08,Lt.seat,X,k+.78,ht-.3,a)}let st=new ft(new Wn(.15,.022,8,20),Lt.interior);if(st.position.set(y*.24,g+.05,x[0][0]-.5),st.rotation.x=-.35,a.add(st),r.cage){let L=x[1][0]-.1,X=x[2][0]+.1,ht=A-.08;for(let dt of[1,-1]){let ut=dt*v(A)*.95;li(new P(ut,k,L),new P(ut,ht,L),.02,Lt.chrome,a,!0),li(new P(ut,ht,L),new P(ut,ht,X),.02,Lt.chrome,a,!0),li(new P(ut,k,X),new P(ut,ht,X),.02,Lt.chrome,a,!0)}li(new P(v(A)*.95,ht,X),new P(-v(A)*.95,k+.2,X),.02,Lt.chrome,a,!0)}let V=Math.max(...n.upper.map(L=>L[0]))+.07,ct=Math.min(...n.upper.map(L=>L[0]))-.07,yt=n.upper[0][1],vt=(n.upper[0][1]+n.upper[1][1])/2+.06,Jt=n.upper.length-2,$t=(n.upper[Jt][1]+n.upper[Jt+1][1])/2+.08,K=new ae({color:16774872,emissive:16773824,emissiveIntensity:e.night?2.4:.5,roughness:.15}),ot=new ae({color:6948872,emissive:16718362,emissiveIntensity:e.night?1.2:.35,roughness:.25}),Et=u*.92,at=n.extras||[];if(at.includes("popups"))for(let L of[1,-1])Xt(.44,.05,.32,o,L*u*.3,n.upper[2][1]+.02,V-.4,a),Xt(.4,.02,.28,Lt.gloss,L*u*.3,n.upper[2][1]-.005,V-.4,a);if(at.includes("roundlights"))for(let L of[1,-1]){let X=L*Et*.34,ht=n.upper[2][1]-.02,dt=V-.32;Ge(.12,.2,o,X,ht,dt,"z",a,20),Ge(.1,.03,K,X,ht,dt+.1,"z",a,20)}let Bt=n.upper[1][1]-n.upper[0][1]<.2;if(Bt){let L=V-.35,X=f[0][1];for(let dt=0;dt<f.length-1;dt++)if(f[dt][0]>=L&&f[dt+1][0]<=L){let ut=(f[dt][0]-L)/(f[dt][0]-f[dt+1][0]);X=f[dt][1]+(f[dt+1][1]-f[dt][1])*ut}let ht=Math.atan2(n.upper[2][1]-n.upper[1][1],n.upper[1][0]-n.upper[2][0]);for(let dt of[1,-1]){let ut=Xt(.46,.03,.2,Lt.gloss,dt*Et*.32,X+.09,L,a);ut.rotation.x=ht;let kt=Xt(.4,.035,.05,K,dt*Et*.32,X+.1,L+.07,a);kt.rotation.x=ht}}for(let L of at.includes("roundlights")||Bt?[]:[1,-1]){let X=L*Et*.33;Xt(.44,.15,.08,Lt.gloss,X,vt,V-.02,a),Xt(.36,.07,.03,K,X+L*.03,vt+.01,V+.02,a),Ge(.04,.03,Lt.chrome,X-L*.12,vt,V+.025,"z",a,14),Xt(.44,.15,.01,Lt.lensClear,X,vt,V+.035,a),Xt(.1,.035,.02,Lt.amber,X+L*.16,vt-.055,V+.03,a)}let Pt=new ae({map:A_(),roughness:.6}),Nt=new ft(new Se(u*.34,.1),Pt);Nt.position.set(0,vt-.04,V+.012),a.add(Nt);let Zt=new ft(new Se(u*.62,.12),Pt);Zt.position.set(0,yt+.09,V+.01),a.add(Zt),Xt(u*.94,.06,.14,r.chromeBumpers?Lt.chrome:Lt.trim,0,yt+.01,V-.01,a),Xt(u*.9,.02,.12,Lt.carbon,0,yt-.035,V+.03,a);for(let L of[1,-1])Ge(.04,.03,K,L*u*.37,yt+.09,V+.01,"z",a,12);let tt=new ae({map:R_(r.plate),roughness:.5}),C=new ft(new Se(.44,.1),tt);if(C.position.set(0,yt+.1,V+.02),a.add(C),Ge(.04,.015,Lt.chrome,0,vt+.04,V+.02,"z",a,16),at.includes("roundtails"))for(let L of[1,-1])for(let X of[.22,.38])Ge(.085,.05,Lt.gloss,L*u*X,$t,ct+.01,"z",a,18),Ge(.07,.06,ot,L*u*X,$t,ct-.005,"z",a,18),Ge(.03,.065,ot,L*u*X,$t,ct-.01,"z",a,12);else{Xt(u*.88,.13,.05,Lt.gloss,0,$t,ct+.015,a);for(let L of[1,-1])Xt(.42,.09,.03,ot,L*u*.28,$t,ct-.005,a),Xt(.1,.05,.03,Lt.reverse,L*u*.1,$t,ct-.005,a);Xt(u*.12,.03,.03,ot,0,$t+.02,ct-.005,a)}let rt=n.upper[n.upper.length-1][1];Xt(u*.94,.07,.14,r.chromeBumpers?Lt.chrome:Lt.trim,0,rt+.01,ct+.01,a);let mt=new ft(new Se(.44,.1),tt);if(mt.position.set(0,$t-.16,ct-.01),mt.rotation.y=Math.PI,a.add(mt),at.includes("wing")||at.includes("intakes")){Xt(u*.7,.08,.2,Lt.carbon,0,rt-.02,ct+.05,a);for(let L=-2;L<=2;L++)Xt(.015,.1,.22,Lt.carbon,L*u*.13,rt-.02,ct+.03,a)}let lt=i.id==="veloce"?[[.06,0],[-.06,0]]:i.cylinders>=6?[[u*.3,0],[u*.36,0],[-u*.3,0],[-u*.36,0]]:[[u*.3,0]];for(let[L]of lt)Ge(.045,.2,Lt.chrome,L,rt+0,ct+.02,"z",a,14),Ge(.032,.21,Lt.black,L,rt+0,ct+.02,"z",a,12);for(let L of[1,-1]){let X=x[0][0]-.2,ht=g+.1,dt=L*(M(X,g)+.06);li(new P(L*(M(X,g)-.02),g+.02,X),new P(dt,ht,X),.025,Lt.gloss,a),Xt(.13,.09,.14,o,dt+L*.03,ht,X,a),Xt(.01,.07,.11,Lt.chrome,dt+L*.03,ht,X-.075,a);let ut=x[0][0]-.05,kt=x[1][0]+(x[2][0]-x[1][0])*.45,Vt=(rt+g)/2;for(let U of[ut,kt])Xt(.008,g-rt-.08,.012,Lt.black,L*(M(U,Vt)+.003),Vt+.02,U,a);Xt(.008,.012,Math.abs(ut-kt),Lt.black,L*(M((ut+kt)/2,rt+.06)+.003),rt+.06,(ut+kt)/2,a),Xt(.03,.03,.14,Lt.gloss,L*(M(kt+.2,g-.1)+.012),g-.1,kt+.2,a);let oe=Math.abs(n.wheelF-n.wheelR)-(s+.1)*2;Xt(.07,.1,oe,Lt.carbon,L*(M(0,rt)+.01),rt+.04,(n.wheelF+n.wheelR)/2,a),Ge(.06,.01,Lt.trim,L*(M(n.wheelR+.35,g-.15)+.004),g-.15,n.wheelR+.35,"x",a,14);for(let U of[n.wheelF,n.wheelR]){let gt=new ft(new Wn(s+.09,.035,6,20,Math.PI),Lt.trim);gt.rotation.y=Math.PI/2,gt.position.set(L*(M(U,s)+.005),s+((Q=n.ride)!=null?Q:0),U),a.add(gt)}if(!at.includes("stripes")){let U=new ae({map:C_((It=e.number)!=null?It:i.id.length*17%90+10,l),transparent:!0,roughness:.4}),gt=new ft(new Se(.46,.46),U),$=(ut+kt)/2;gt.position.set(L*(M($,.66)+.006),.66,$),gt.rotation.y=L*Math.PI/2,a.add(gt)}}let pt=Math.max(...n.upper.filter(L=>L[0]<x[x.length-1][0]+.05).map(L=>L[1]));if(at.includes("wing")){let L=new Ai;L.moveTo(0,0),L.lineTo(.36,.02),L.lineTo(.34,.05),L.lineTo(.02,.04),L.closePath();let X=vo(L,u*.95,.01,1),ht=new ft(X,i.id==="ronin"?Lt.carbon:o);ht.rotation.y=Math.PI,ht.position.set(0,pt+.32,ct+.46),ht.castShadow=!0,a.add(ht);for(let dt of[1,-1])Xt(.03,.3,.12,Lt.gloss,dt*u*.3,pt+.16,ct+.3,a),Xt(.015,.16,.42,i.id==="ronin"?Lt.carbon:o,dt*u*.475,pt+.33,ct+.28,a)}else at.includes("ducktail")&&Xt(u*.88,.05,.16,o,0,pt+.04,ct+.13,a);if(at.includes("roofwing")){Xt(v(A)*2+.06,.035,.28,o,0,A+.07,x[2][0]-.1,a);for(let L of[1,-1])Xt(.02,.1,.26,o,L*(v(A)+.03),A+.04,x[2][0]-.1,a)}if(at.includes("scoop")){let L=(n.upper[2][0]+x[0][0])/2;Xt(.55,.1,.75,o,0,n.upper[3][1]+.05,L,a);let X=new ft(new Se(.46,.07),Pt);X.position.set(0,n.upper[3][1]+.06,L+.38),a.add(X)}if(i.id==="ronin"){let L=(n.upper[2][0]+x[0][0])/2;for(let X of[1,-1])for(let ht=0;ht<4;ht++)Xt(.22,.012,.03,Lt.gloss,X*.32,n.upper[3][1]+.02,L-.12+ht*.08,a);Xt(u*.9,.025,.1,Lt.carbon,0,yt-.04,V+.06,a)}if(i.id==="veloce")for(let L=0;L<6;L++)Xt(u*.5,.012,.05,Lt.gloss,0,x[3][1]+.01-L*.012,x[3][0]+.05-L*.1-.12,a);if(at.includes("roofscoop")){Xt(.36,.08,.4,o,0,A+.07,H+.25,a);let L=new ft(new Se(.3,.05),Pt);L.position.set(0,A+.07,H+.451),a.add(L)}if(at.includes("intakes"))for(let L of[1,-1]){let X=new ft(new Se(.62,.2),Pt);X.position.set(L*(M(-.6,.55)+.006),.55,-.6),X.rotation.y=L*Math.PI/2,a.add(X)}if(at.includes("stripes"))for(let L of[.13,-.13]){let X=Xt(.16,.008,Math.abs(V-x[0][0]),c,L,0,(V+x[0][0])/2,a);X.position.y=n.upper[3][1]+.03,Xt(.16,.008,S,c,L,A+.045,H,a),Xt(.16,.008,Math.abs(x[3][0]-ct),c,L,pt+.012,(x[3][0]+ct)/2,a)}if(at.includes("rallylights")){Xt(u*.7,.03,.05,Lt.gloss,0,vt+.12,V+.1,a);for(let L of[.3,.1,-.1,-.3])Ge(.085,.07,Lt.gloss,L*u,vt+.05,V+.12,"z",a,16),Ge(.07,.075,K,L*u,vt+.05,V+.125,"z",a,16)}if(at.includes("mudflaps"))for(let L of[1,-1])for(let X of[n.wheelF-s-.14,n.wheelR-s-.14])Xt(.3,.28,.015,Lt.black,L*(n.track/2),.26,X,a);if(i.id==="kaze"||i.id==="bulldog"){let L=new ft(new Me(.004,.006,.55,5),Lt.black);L.position.set(-u*.35,pt+.28,ct+.45),L.rotation.x=-.25,a.add(L)}i.id==="tundra"&&Xt(.8,.012,.14,c,0,A+.045,H-.2,a);{let L=new P(0,x[1][1]-x[0][1],x[1][0]-x[0][0]).normalize(),X=new P(0,-L.z,L.y).normalize(),ht=new P(0,x[1][1],x[1][0]).addScaledVector(L,-.08).addScaledVector(X,.012),dt=new ft(new Se(v(ht.y)*2*.95,.11),new ae({map:I_(r.banner||i.name+" RACING"),roughness:.5}));dt.position.copy(ht),dt.lookAt(ht.clone().add(X)),a.add(dt);let ut=i.id.charCodeAt(0)+i.id.charCodeAt(1),kt=(gt,$,nt,wt)=>{for(let Rt of[1,-1]){let ie=new ft(new Se(wt,wt/4),new ae({map:P_(ut+gt),transparent:!0,roughness:.45}));ie.position.set(Rt*(M($,nt)+.007),nt,$),ie.rotation.y=Rt*Math.PI/2,a.add(ie)}};kt(0,n.wheelF-.02,s*2+.16+((_t=n.ride)!=null?_t:0),.5),kt(1,n.wheelR+.05,s*2+.17+((At=n.ride)!=null?At:0),.46),kt(2,(n.wheelF+n.wheelR)/2+.15,rt+.17,.62);let Vt=new ae({color:14687774,roughness:.5}),oe=new ft(new Wn(.06,.018,6,12),Vt);oe.position.set(-u*.3,yt+.02,V+.1),a.add(oe);let U=new ft(new Wn(.06,.018,6,12),Vt);U.position.set(u*.34,rt+.02,ct-.08),a.add(U);for(let gt of[1,-1]){let $=Xt(.22,.015,.12,Lt.carbon,gt*u*.42,yt+.12,V-.05,a);$.rotation.z=gt*.25}for(let gt of[1,-1])Ge(.02,.02,Lt.chrome,gt*u*.3,n.upper[3][1]+.015,V-.25,"y",a,8)}Xt(u*.86,.05,h*.82,Lt.black,0,rt+0,0,a);let Dt=[],Tt=s+((Qt=n.ride)!=null?Qt:0),R=new ae({color:r.caliper,roughness:.4,metalness:.3});for(let[L,X,ht]of[[n.wheelF,1,!0],[n.wheelF,-1,!0],[n.wheelR,1,!1],[n.wheelR,-1,!1]]){let dt=new Ae;dt.position.set(X*n.track/2,Tt,L);let ut=U_(s,ht?.25:.27,r,X);dt.add(ut);let kt=Xt(.07,s*.36,s*.26,R,-X*0,s*.3,-s*.3,dt);kt.rotation.x=.8,a.add(dt),Dt.push({pivot:dt,wheel:ut,front:ht,side:X,z:L})}let b=new ft(new Se(u*1.35,h*1.2),new ye({map:D_(),transparent:!0,depthWrite:!1,opacity:.8}));b.rotation.x=-Math.PI/2,b.position.y=.03,b.renderOrder=2;let O=new Ae,J=new Ae;O.add(a);for(let L of Dt)a.remove(L.pivot),J.add(L.pivot);let et=wf(a);if(e.outline!==!1)for(let L of et)(L.material===o||L.material===Lt.glass||L.material===Lt.trim||L.material===Lt.carbon)&&Tf(L,L.material===o?0:.014);for(let L of Dt){let X=wf(L.wheel);if(e.outline!==!1)for(let ht of X)ht.material===Lt.tire&&Tf(ht,.016);L.pivot.children.forEach(ht=>{ht.isMesh&&(ht.castShadow=!1)})}return J.add(O),J.add(b),{root:J,chassis:O,wheels:Dt,bodyMat:o,headMat:K,tailMat:ot,spec:i}}function Af(i,t,e,n){var a;for(let o of i.wheels)o.wheel.rotation.x=t.wheelSpin,o.front&&(o.pivot.rotation.y=t.steer);let s=Math.max(-.05,Math.min(.05,t.ay*.005)),r=Math.max(-.025,Math.min(.025,-t.ax*.0025));i.chassis.rotation.z+=(s-i.chassis.rotation.z)*Math.min(1,e*4),i.chassis.rotation.x+=(r-i.chassis.rotation.x)*Math.min(1,e*3),i.tailMat.emissiveIntensity=n?3:(a=i._tailBase)!=null?a:.35}var Mo=class{constructor(t,e,n,s,r,a){this.spec=t,this.model=e,this.fi=n,this.d=s,this.targetD=s,this.dv=0,this.v=0,this.skill=r,this.grip=a,this.top=Math.min(88,54+t.hp/19)*r,this.mu=(t.muFront+t.muRear)/2*a*1.06,this.laneTimer=1+Math.random()*2.5,this.stopAt=1/0,this.wheelSpin=0,this.steer=0,this.ahead=!0,this.h=0,this.pose={},this.bump=0}update(t,e,n,s){var d;let r=e.hw;if(!s){this.v=0,this.place(e,t);return}let a=this.top,o={};for(let g=3;g<=80;g+=3){e.sample(this.fi+g,o);let _=Math.abs(o.k);if(_<1e-4)continue;let p=Math.sqrt(this.mu*9.81/_),m=g*qe;a=Math.min(a,Math.sqrt(p*p+2*10*m))}let l=n.idx-this.fi;l>0&&((d=n.t)!=null?d:99)>8?a*=1+Math.min(.25,l/250):l<-160&&(a*=.9),this.bump>0&&(this.bump-=t,a*=.8),this.fi>this.stopAt&&(a=0);let c=8*(1-.55*Math.min(1,this.v/this.top));this.v+=pe(a-this.v,-13*t,c*t),this.v=Math.max(0,this.v),this.laneTimer-=t,this.laneTimer<=0&&(this.targetD=(Math.random()*2-1)*(r-1.8),this.laneTimer=1.5+Math.random()*3);let h=n.idx-this.fi;h>0&&h<16&&Math.abs(n.lat-this.d)<2.8&&(this.targetD=n.lat>0?n.lat-3.2:n.lat+3.2,this.targetD=pe(this.targetD,-(r-1.4),r-1.4)),e.sample(this.fi+10,o);let u=pe(o.k*400,-1,1)*(r-2),f=pe(this.targetD*.6+u*.4,-(r-1.3),r-1.3);this.dv+=(pe((f-this.d)*2.6,-5,5)-this.dv)*Math.min(1,t*6),this.d+=this.dv*t,this.d=pe(this.d,-(r-1.1),r-1.1),this.fi+=this.v*t/qe,this.place(e,t)}place(t,e){let n=t.sample(this.fi,this.pose);this.x=n.x+n.lx*this.d,this.z=n.z+n.lz*this.d,this.y=n.y;let s=Math.atan2(this.dv,Math.max(this.v,3));this.h=n.h+s*.9,this.steer=pe(n.k*2.6+s,-.5,.5),this.slope=n.slope,this.wheelSpin+=this.v/this.spec.wheelRadius*e;let r=this.model;r.root.position.set(this.x,this.y,this.z),r.root.rotation.set(-Math.atan(this.slope),this.h,0,"YXZ");for(let a of r.wheels)a.wheel.rotation.x=this.wheelSpin,a.front&&(a.pivot.rotation.y=this.steer);r.chassis.rotation.z=pe(n.k*this.v*this.v*.008,-.07,.07)}get vx(){return Math.sin(this.h)*this.v}get vz(){return Math.cos(this.h)*this.v}};var bo=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this.musicOn=!0,this.musicVol=.3,this.sfxVol=.8}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-20,this.comp.knee.value=12,this.comp.ratio.value=4,this.comp.attack.value=.005,this.comp.release.value=.2,this.comp.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(this.comp),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?this.musicVol:0,this.musicBus.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let v=0;v<n;v++)s[v]=Math.random()*2-1;this.engGain=e.createGain(),this.engGain.gain.value=0,this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=1.4;let r=e.createWaveShaper(),a=new Float32Array(1024);for(let v=0;v<1024;v++){let S=v/512-1;a[v]=Math.tanh(S*1.6)}r.curve=a,this.oscs=[{o:e.createOscillator(),type:"sawtooth",mul:1,g:.38},{o:e.createOscillator(),type:"sine",mul:.5,g:.6},{o:e.createOscillator(),type:"triangle",mul:2,g:.16},{o:e.createOscillator(),type:"sawtooth",mul:1.005,g:.25}];let o=e.createGain();o.gain.value=.5;for(let v of this.oscs){v.o.type=v.type;let S=e.createGain();S.gain.value=v.g,v.o.connect(S),S.connect(o),v.o.start()}this.rumble=e.createOscillator(),this.rumble.frequency.value=18;let l=e.createGain();l.gain.value=.15,this.rumble.connect(l),l.connect(o.gain),this.rumble.start(),o.connect(r),r.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.sfx),this.tireGain=e.createGain(),this.tireGain.gain.value=0;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=3200,c.Q.value=.5;let h=e.createBiquadFilter();h.type="highpass",h.frequency.value=700,h.Q.value=.5,this.tireGain.connect(h),h.connect(c),c.connect(this.sfx);let u=e.createGain();u.gain.value=1,u.connect(this.tireGain),this.sqOscs=[{o:e.createOscillator(),type:"triangle",mul:1,g:.55},{o:e.createOscillator(),type:"sine",mul:1.5,g:.22},{o:e.createOscillator(),type:"triangle",mul:1.012,g:.3}];let f=e.createGain();f.gain.value=38;let d=e.createOscillator();d.frequency.value=6.3,d.start();let g=e.createOscillator();g.frequency.value=11.7,g.start();let _=e.createGain();_.gain.value=.6,d.connect(f),g.connect(_),_.connect(f);let p=this.loopNoise(),m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=18;let M=e.createGain();M.gain.value=3,p.connect(m),m.connect(M),M.connect(f);for(let v of this.sqOscs){v.o.type=v.type,v.o.frequency.value=1150*v.mul,f.connect(v.o.frequency);let S=e.createGain();S.gain.value=v.g*.5,v.o.connect(S),S.connect(u),v.o.start()}let x=this.loopNoise(),y=e.createBiquadFilter();y.type="lowpass",y.frequency.value=25;let A=e.createGain();A.gain.value=1.2,x.connect(y),y.connect(A),A.connect(u.gain),this.tireSrc=this.loopNoise();let T=e.createBiquadFilter();T.type="bandpass",T.frequency.value=2200,T.Q.value=.8;let E=e.createGain();E.gain.value=.35,this.tireSrc.connect(T),T.connect(E),E.connect(this.tireGain),this.gravelSrc=this.loopNoise();let I=e.createBiquadFilter();I.type="lowpass",I.frequency.value=900,this.gravelGain=e.createGain(),this.gravelGain.gain.value=0,this.gravelSrc.connect(I),I.connect(this.gravelGain),this.gravelGain.connect(this.sfx),this.windSrc=this.loopNoise();let z=e.createBiquadFilter();z.type="lowpass",z.frequency.value=420,this.windGain=e.createGain(),this.windGain.gain.value=0,this.windSrc.connect(z),z.connect(this.windGain),this.windGain.connect(this.sfx),this.startMusic()}loopNoise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setSfxVol(t){this.sfxVol=t,this.sfx&&(this.sfx.gain.value=t)}setMusicVol(t){this.musicVol=t,this.musicBus&&this.musicOn&&(this.musicBus.gain.value=t)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?this.musicVol:0,this.ctx.currentTime,.2)}update(t,e,n,s,r,a,o){if(!this.ctx)return;let l=this.ctx.currentTime;if(!o){this.engGain.gain.setTargetAtTime(0,l,.08),this.tireGain.gain.setTargetAtTime(0,l,.05),this.windGain.gain.setTargetAtTime(0,l,.1),this.gravelGain.gain.setTargetAtTime(0,l,.1);return}let c=t.rpm,h=c/60*(e.cylinders/2)*.5;for(let p of this.oscs)p.o.frequency.setTargetAtTime(h*p.mul,l,.02);this.rumble.frequency.setTargetAtTime(8+c/400,l,.05);let u=.35+.65*n;this.engFilter.frequency.setTargetAtTime(220+c*.22*u+n*500,l,.04);let f=Math.min(1,s)*(r?0:1)*Math.min(1,a/6),d=Math.max(0,(f-.15)/.85),g=d*d*(3-2*d);this.engGain.gain.setTargetAtTime((.1+.08*u)*(1-.22*g),l,.05),this.tireGain.gain.setTargetAtTime(g*.07,l,.18);let _=1e3+g*350+Math.min(1,a/50)*120;for(let p of this.sqOscs)p.o.frequency.setTargetAtTime(_*p.mul,l,.25);this.gravelGain.gain.setTargetAtTime(r?Math.min(.18,a/90):0,l,.08),this.windGain.gain.setTargetAtTime(Math.min(.12,(a/70)**2*.12),l,.15)}burst(t,e,n,s="lowpass"){if(!this.ctx)return;let r=this.ctx,a=r.currentTime,o=r.createBufferSource();o.buffer=this.noiseBuf;let l=r.createBiquadFilter();l.type=s,l.frequency.value=e;let c=r.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(l),l.connect(c),c.connect(this.sfx),o.start(a,Math.random()),o.stop(a+t+.05)}tone(t,e,n=.2,s="sine",r=0,a){if(!this.ctx)return;let o=this.ctx,l=o.currentTime+r,c=o.createOscillator();c.type=s,c.frequency.value=t;let h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(n,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(a||this.sfx),c.start(l),c.stop(l+e+.05)}crash(t){this.burst(.3,500+t*25,Math.min(.32,.1+t*.015)),this.tone(70,.22,Math.min(.22,t*.012),"sine")}shift(){this.burst(.06,2200,.05,"bandpass")}backfire(){this.burst(.1,280,.18)}click(){this.tone(880,.05,.05,"triangle")}checkpoint(){[660,880,1320].forEach((t,e)=>this.tone(t,.18,.09,"triangle",e*.09))}countdown(t){this.tone(t?1046:523,t?.5:.22,.1,"triangle")}score(){this.tone(1320,.12,.06,"triangle"),this.tone(1760,.14,.05,"triangle",.06)}gameOver(){[523,440,349,262].forEach((t,e)=>this.tone(t,.3,.08,"triangle",e*.18))}startMusic(){let t=this.ctx,e=112,n=60/e/4,s=[0,0,12,0,0,0,10,0,0,0,12,0,7,0,10,0],r=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],a=[0,1,2,1,0,2,1,2],o=0,l=t.currentTime+.1,c=u=>440*Math.pow(2,(u-69)/12),h=()=>{if(this.ctx){for(;l<t.currentTime+.2;){let u=Math.floor(o/16)%4,f=o%16,d=r[u];this.musicOn&&((s[f]!==0||f%4===0)&&this.tone(c(d[0]-24+(s[f]||0)),n*1.8,.14,"triangle",l-t.currentTime,this.musicBus),f%2===0&&this.tone(c(d[a[f/2%8]]+12),n*1.5,.05,"triangle",l-t.currentTime,this.musicBus),f%4===0&&this.kick(l),f%8===4&&this.snare(l),f%2===1&&this.hat(l)),l+=n,o++}this._musicTimer=setTimeout(h,60)}};h()}kick(t){let e=this.ctx,n=e.createOscillator(),s=e.createGain();n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(40,t+.15),s.gain.setValueAtTime(.35,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),n.connect(s),s.connect(this.musicBus),n.start(t),n.stop(t+.25)}snare(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=1500;let r=e.createGain();r.gain.setValueAtTime(.14,t),r.gain.exponentialRampToValueAtTime(.001,t+.15),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.2)}hat(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;let r=e.createGain();r.gain.setValueAtTime(.035,t),r.gain.exponentialRampToValueAtTime(.001,t+.04),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.06)}};var So=class{constructor(){this.keys=new Set,this.events=[],this.steer=0,this.touch={left:!1,right:!1,gas:!1,brake:!1,hb:!1},this.touchActive=!1,window.addEventListener("keydown",t=>{if(!(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),!t.repeat){let e={KeyC:"camera",KeyR:"reset",Escape:"pause",KeyP:"pause",KeyE:"shiftUp",KeyQ:"shiftDown",KeyM:"mute",Enter:"enter"};e[t.code]&&this.events.push(e[t.code])}this.keys.add(t.code)}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),this.gpPrev={}}bindTouch(t){t.querySelectorAll("[data-touch]").forEach(n=>{let s=n.dataset.touch,r=o=>{o.preventDefault(),this.touch[s]=!0,n.classList.add("on"),this.touchActive=!0},a=o=>{o.preventDefault(),this.touch[s]=!1,n.classList.remove("on")};n.addEventListener("touchstart",r,{passive:!1}),n.addEventListener("touchend",a,{passive:!1}),n.addEventListener("touchcancel",a,{passive:!1}),n.addEventListener("mousedown",r),n.addEventListener("mouseup",a),n.addEventListener("mouseleave",a)}),t.querySelectorAll("[data-tap]").forEach(n=>{n.addEventListener("touchstart",s=>{s.preventDefault(),this.events.push(n.dataset.tap)},{passive:!1}),n.addEventListener("click",()=>this.events.push(n.dataset.tap))})}down(...t){return t.some(e=>this.keys.has(e))}read(t,e){var f,d,g,_,p,m;let n=this.touch,s=this.down("KeyW","ArrowUp")||n.gas?1:0,r=this.down("KeyS","ArrowDown")||n.brake?1:0,a=this.down("Space")||n.hb?1:0,o=this.down("KeyA","ArrowLeft")||n.left,l=this.down("KeyD","ArrowRight")||n.right,c=(o?1:0)-(l?1:0),h=null,u=navigator.getGamepads?navigator.getGamepads():[];for(let M of u){if(!M)continue;let x=M.axes[0]||0;Math.abs(x)>.12&&(h=-x);let y=((f=M.buttons[7])==null?void 0:f.value)||0,A=((d=M.buttons[6])==null?void 0:d.value)||0;s=Math.max(s,y,(g=M.buttons[0])!=null&&g.pressed?1:0),r=Math.max(r,A,(_=M.buttons[2])!=null&&_.pressed?1:0),a=Math.max(a,(p=M.buttons[1])!=null&&p.pressed?1:0,(m=M.buttons[5])!=null&&m.pressed?1:0);let T=(E,I)=>{var v;let z=!!((v=M.buttons[E])!=null&&v.pressed);z&&!this.gpPrev[E]&&this.events.push(I),this.gpPrev[E]=z};T(3,"camera"),T(9,"pause"),T(8,"reset"),T(12,"shiftUp"),T(13,"shiftDown");break}if(h!==null)this.steer=h;else{let M=c===0?7:Math.sign(c)!==Math.sign(this.steer)&&this.steer!==0?9:4.2-Math.min(1.8,e/40),x=c-this.steer;this.steer+=Math.sign(x)*Math.min(Math.abs(x),M*t)}return{throttle:s,brake:r,handbrake:a,steer:this.steer}}takeEvents(){let t=this.events;return this.events=[],t}};function Rf(i){let t=new Ae,e=new Gn(900,32,16),n=new be({side:Ie,depthWrite:!1,fog:!1,uniforms:{top:{value:new Mt(i.sky.top)},horizon:{value:new Mt(i.sky.horizon)},bottom:{value:new Mt(i.sky.bottom)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.6),0.7)) : mix(horizon, bottom, min(1.0,-h*4.0));
      gl_FragColor = vec4(c,1.0); }`});t.add(new ft(e,n));let s=new P(...i.sun.dir).normalize(),r=document.createElement("canvas");r.width=r.height=128;let a=r.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);i.night?(o.addColorStop(0,"rgba(235,240,255,1)"),o.addColorStop(.25,"rgba(220,230,255,0.95)"),o.addColorStop(.3,"rgba(160,170,255,0.25)"),o.addColorStop(1,"rgba(0,0,0,0)")):(o.addColorStop(0,"rgba(255,255,240,1)"),o.addColorStop(.2,"rgba(255,250,220,0.95)"),o.addColorStop(.45,"rgba(255,220,160,0.25)"),o.addColorStop(1,"rgba(255,200,120,0)")),a.fillStyle=o,a.fillRect(0,0,128,128);let l=new ln(r),c=new Ki(new Ti({map:l,fog:!1,depthWrite:!1,transparent:!0}));if(c.position.copy(s).multiplyScalar(800),c.scale.setScalar(i.night?70:150),t.add(c),i.night){let u=new Float32Array(4500);for(let d=0;d<1500;d++){let g=Math.random()*Math.PI*2,_=Math.acos(Math.random()*.9+.1);u[d*3]=850*Math.sin(_)*Math.cos(g),u[d*3+1]=850*Math.cos(_),u[d*3+2]=850*Math.sin(_)*Math.sin(g)}let f=new de;f.setAttribute("position",new he(u,3)),t.add(new Hs(f,new ks({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1})))}return t.renderOrder=-10,t}var Br=class{constructor(t,e=16777215,n=260){this.max=n,this.pos=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n).fill(1),this.base=new Float32Array(n),this.op=new Float32Array(n);let s=new de;s.setAttribute("position",new he(this.pos,3)),s.setAttribute("size",new he(this.size,1)),s.setAttribute("alpha",new he(this.alpha,1));let r=new be({transparent:!0,depthWrite:!1,uniforms:{color:{value:new Mt(e)},scale:{value:innerHeight*.5}},vertexShader:`attribute float size; attribute float alpha; varying float a; uniform float scale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
          // \u0432\u043E\u0437\u043B\u0435 \u043A\u0430\u043C\u0435\u0440\u044B \u0434\u044B\u043C \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0435 \u0437\u0430\u043B\u0435\u043F\u043B\u044F\u0435\u0442 \u044D\u043A\u0440\u0430\u043D
          a = alpha * smoothstep(3.0, 9.0, -mv.z);
          gl_PointSize = min(size * scale / -mv.z, 260.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 color; varying float a;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d)*4.0; if (r > 1.0) discard; gl_FragColor = vec4(color, a * (1.0 - r) * (1.0 - r)); }`});this.points=new Hs(s,r),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.next=0}emit(t,e,n,s,r,a,o=.5){let l=this.next;this.next=(this.next+1)%this.max,this.pos[l*3]=t+(Math.random()-.5)*.3,this.pos[l*3+1]=e+.35,this.pos[l*3+2]=n+(Math.random()-.5)*.3;let c=Math.random()*Math.PI*2,h=.8+Math.random()*1.4;this.vel[l*3]=s*.08+Math.cos(c)*h,this.vel[l*3+1]=.08+Math.random()*.15,this.vel[l*3+2]=r*.08+Math.sin(c)*h,this.life[l]=0,this.maxLife[l]=1.4+Math.random()*.8*a,this.base[l]=1.1+Math.random()*.5,this.op[l]=o}update(t){let e=1-t*1.5;for(let s=0;s<this.max;s++){if(this.op[s]===0)continue;this.life[s]+=t;let r=this.life[s]/this.maxLife[s];if(r>=1){this.op[s]=0,this.alpha[s]=0;continue}this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]+=this.vel[s*3+1]*t,this.pos[s*3+2]+=this.vel[s*3+2]*t,this.vel[s*3]*=e,this.vel[s*3+2]*=e,this.size[s]=this.base[s]*(1+r*2.4),this.alpha[s]=this.op[s]*(1-r)*Math.min(1,this.life[s]*8)}let n=this.points.geometry.attributes;n.position.needsUpdate=!0,n.size.needsUpdate=!0,n.alpha.needsUpdate=!0}clear(){this.op.fill(0),this.alpha.fill(0)}dispose(t){t.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()}},wo=class{constructor(t,e=2400,n=1118481,s=.55){this.max=e;let r=new de;this.pos=new Float32Array(e*4*3),this.alpha=new Float32Array(e*4);let a=new Uint32Array(e*6);for(let l=0;l<e;l++){let c=l*4;a.set([c,c+1,c+2,c+1,c+3,c+2],l*6)}r.setAttribute("position",new he(this.pos,3)),r.setAttribute("alpha",new he(this.alpha,1)),r.setIndex(new he(a,1));let o=new be({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{color:{value:new Mt(n)},op:{value:s}},vertexShader:"attribute float alpha; varying float a; void main(){ a = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 color; uniform float op; varying float a; void main(){ gl_FragColor = vec4(color, a*op); }"});this.mesh=new ft(r,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.n=0,this.last=[null,null,null,null]}add(t,e,n,s,r,a,o){let l=this.last[t],c=.13,h={x:e,y:n+.045,z:s,lx:r,lz:a};if(l&&o>0&&(e-l.x)**2+(s-l.z)**2<4){if((e-l.x)**2+(s-l.z)**2<.09)return;let u=this.n%this.max;this.n++;let f=this.pos,d=u*12;f[d]=l.x+l.lx*c,f[d+1]=l.y,f[d+2]=l.z+l.lz*c,f[d+3]=l.x-l.lx*c,f[d+4]=l.y,f[d+5]=l.z-l.lz*c,f[d+6]=e+r*c,f[d+7]=h.y,f[d+8]=s+a*c,f[d+9]=e-r*c,f[d+10]=h.y,f[d+11]=s-a*c;let g=Math.min(1,o);this.alpha.set([g,g,g,g],u*4),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.alpha.needsUpdate=!0}this.last[t]=o>0?h:null}clear(){this.pos.fill(0),this.alpha.fill(0),this.mesh.geometry.attributes.position.needsUpdate=!0,this.last=[null,null,null,null]}},Eo=class{constructor(t,e=2500){this.n=e;let n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*80,n[r*3+1]=Math.random()*40,n[r*3+2]=(Math.random()-.5)*80;let s=new de;s.setAttribute("position",new he(n,3)),this.pts=new Hs(s,new ks({color:16777215,size:.18,transparent:!0,opacity:.9,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts)}update(t,e){let n=this.pts.geometry.attributes.position,s=n.array;for(let r=0;r<this.n;r++)s[r*3+1]-=t*(2+r%5*.4),s[r*3]+=Math.sin(r+performance.now()*5e-4)*t*.6,s[r*3+1]<-2&&(s[r*3+1]+=40);n.needsUpdate=!0,this.pts.position.set(0,e.position.y-15,0);for(let r=0;r<this.n;r++){let a=s[r*3],o=s[r*3+2];a-e.position.x>40?s[r*3]-=80:a-e.position.x<-40&&(s[r*3]+=80),o-e.position.z>40?s[r*3+2]-=80:o-e.position.z<-40&&(s[r*3+2]+=80)}}};function Cf(i){let t=new Ei,e=new Gn(50,32,16),n=new be({side:Ie,uniforms:{top:{value:new Mt(i.sky.top)},horizon:{value:new Mt(i.sky.horizon).lerp(new Mt(14541802),i.night?0:.45)},ground:{value:new Mt(i.ground.far).lerp(new Mt(5921374),.7).multiplyScalar(i.night?.25:.55)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.5),0.6)) : mix(horizon*0.8, ground, min(1.0,-h*6.0)); gl_FragColor = vec4(c,1.0); }`});t.add(new ft(e,n));let s=new P(...i.sun.dir).normalize(),r=new ft(new Gn(i.night?2:4,16,8),new ye({color:new Mt(i.sun.color).multiplyScalar(i.night?2:12)}));if(r.position.copy(s).multiplyScalar(40),t.add(r),i.night){let a=[16723622,2680831,16767370,8191823,16757611];for(let o=0;o<40;o++){let l=Math.random()*Math.PI*2,c=Math.random()*12-2,h=new ft(new _e(3+Math.random()*4,1+Math.random()*3,.5),new ye({color:new Mt(a[o%a.length]).multiplyScalar(2.5)}));h.position.set(Math.cos(l)*40,c,Math.sin(l)*40),h.lookAt(0,c,0),t.add(h)}}else for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,l=8+Math.random()*20,c=new ft(new Gn(4+Math.random()*5,8,6),new ye({color:new Mt(16777215).multiplyScalar(1.4)}));c.scale.y=.35,c.position.set(Math.cos(o)*42,l,Math.sin(o)*42),t.add(c)}return t}function Pf(i){var _;let n=document.createElement("canvas");n.width=2048,n.height=256;let s=n.getContext("2d"),r=(()=>{let p=12345;return()=>(p=p*16807%2147483647,p/2147483647)})(),a=new Mt(i.fog.color),o=(p,m,M,x,y)=>{s.fillStyle=p,s.beginPath(),s.moveTo(0,256);let A=[r()*10,r()*10,r()*10];for(let T=0;T<=2048;T+=4){let E=T/2048*Math.PI*2,I=Math.sin(E*x+A[0])*.5+Math.sin(E*x*2.3+A[1])*.3+Math.sin(E*x*5.7+A[2])*.2;I+=(r()-.5)*y,s.lineTo(T,256-M-(I*.5+.5)*m)}s.lineTo(2048,256),s.closePath(),s.fill()},l=(p,m)=>"#"+new Mt(p).lerp(a,m).getHexString(),c=(_=i.horizon)!=null?_:i.id;if(c==="hills")o(l(8032138,.55),80,14,3,.04),o(l(6257250,.4),45,4,6,.05);else if(c==="sea")o(l(7049082,.6),34,0,2,.02);else if(c==="desert")o(l(10115658,.55),110,20,3,.05),o(l(11556922,.35),70,8,5,.08);else if(c==="snow"){o(l(9413565,.5),190,20,4,.12),s.globalCompositeOperation="source-atop";let p=s.createLinearGradient(0,0,0,256);p.addColorStop(0,"#ffffff"),p.addColorStop(.45,"rgba(255,255,255,0.8)"),p.addColorStop(.6,"rgba(255,255,255,0)"),s.fillStyle=p,s.fillRect(0,0,2048,256),s.globalCompositeOperation="source-over",o(l(7307930,.35),90,6,7,.15)}else{let p=0;for(;p<2048;){let m=14+r()*40,M=30+Math.pow(r(),1.5)*190;s.fillStyle=l(1314854,.25),s.fillRect(p,256-M,m,M);for(let x=256-M+4;x<252;x+=6)for(let y=p+3;y<p+m-3;y+=5)r()<.18&&(s.fillStyle=["#ffd98a","#9fd8ff","#ff9ad5"][Math.floor(r()*3)],s.fillRect(y,x,2,2));r()<.15&&(s.fillStyle="#ff2020",s.fillRect(p+m/2-1,256-M-6,2,2)),p+=m+r()*6}}let h=new ln(n);h.colorSpace=Oe,h.wrapS=si;let u=820,f=c==="snow"?230:c==="city"?190:140,d=new Me(u,u,f,96,1,!0),g=new ft(d,new ye({map:h,transparent:!0,side:Ie,fog:!1,depthWrite:!1}));return g.userData.h=f,g.renderOrder=-9,g}function If(i){let t=new Ae;if(i.night)return t;let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");for(let a=0;a<16;a++){let o=40+Math.random()*176,l=50+Math.random()*40,c=20+Math.random()*30,h=n.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,256,128)}let s=new ln(e),r=i.id==="desert"?16769736:16777215;for(let a=0;a<14;a++){let o=new Ki(new Ti({map:s,color:r,fog:!1,depthWrite:!1,transparent:!0,opacity:.75})),l=Math.random()*Math.PI*2,c=450+Math.random()*300;o.position.set(Math.cos(l)*c,160+Math.random()*180,Math.sin(l)*c);let h=180+Math.random()*220;o.scale.set(h,h*.45,1),t.add(o)}return t}var To={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},N_=new Os(-1,1,1,-1,0,1),Eh=class extends de{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}},F_=new Eh,Ii=class{constructor(t){this._mesh=new ft(F_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,N_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ao=class extends yn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ci.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ii(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Or=class extends yn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ro=class extends yn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Co=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ao(To),this.copyPass.material.blending=Vn,this.clock=new oo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(a instanceof Or?n=!0:a instanceof Ro&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Po=class extends yn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var $s=class i extends yn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,a,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new sn(r,a,{type:Fn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new sn(r,a,{type:Fn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Lf;this.highPassUniforms=Ci.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=To;this.copyUniforms=Ci.clone(h.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Is,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new ye,this.fsQuad=new Ii(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};$s.BlurDirectionX=new it(1,0);$s.BlurDirectionY=new it(0,1);var Df={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Io=class extends yn{constructor(){super();let t=Df;this.uniforms=Ci.clone(t.uniforms),this.material=new to({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Uf="wss://endless-drift-server.onrender.com";var Yt={ws:null,id:0,code:"",host:0,isPublic:!1,state:"off",config:null,players:new Map,results:[],racers:[],on:{},lastSend:0,get isHost(){return this.id&&this.id===this.host},get connected(){return this.ws&&this.ws.readyState===1},connect(i,t){return this.disconnect(!0),this.state="connecting",new Promise((e,n)=>{let s;try{s=new WebSocket(i)}catch{this.state="off",n(new Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"));return}this.ws=s;let r=setTimeout(()=>{s.readyState!==1&&(s.close(),n(new Error("\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \xAB\u043F\u0440\u043E\u0441\u044B\u043F\u0430\u0442\u044C\u0441\u044F\xBB \u0434\u043E \u043C\u0438\u043D\u0443\u0442\u044B \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.")))},65e3);s.onopen=()=>{clearTimeout(r),this.send({t:"join",...t})},s.onerror=()=>{clearTimeout(r),this.state==="connecting"&&n(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"))},s.onclose=()=>{clearTimeout(r);let a=this.state;this.state="off",this.players.clear(),a!=="off"&&this.ws===s&&this.emit("close")},s.onmessage=a=>{let o;try{o=JSON.parse(a.data)}catch{return}if(o.t==="joined"&&e(o),o.t==="error"&&this.state==="connecting"){n(new Error(o.text));return}this.handle(o)}})},disconnect(i){if(this.ws){let t=this.ws;this.ws=null,this.state="off";try{t.close()}catch{}}this.players.clear(),i||this.emit("close")},send(i){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(i))},emit(i,...t){this.on[i]&&this.on[i](...t)},addPlayer(i){let t=this.players.get(i.id);if(t)return Object.assign(t,i),t;let e={...i,buf:[],vis:null,model:null,fin:null};return this.players.set(i.id,e),e},handle(i){switch(i.t){case"joined":this.id=i.id,this.code=i.code,this.host=i.host,this.config=i.config,this.isPublic=i.isPublic,this.state="lobby",this.players.clear();for(let t of i.players)t.id!==this.id&&this.addPlayer(t);this.emit("joined",i);break;case"player":i.p.id!==this.id?this.addPlayer(i.p):this.me=i.p,this.emit("player",i.p);break;case"left":{let t=this.players.get(i.id);this.players.delete(i.id),this.host=i.host,this.emit("left",t,i.id);break}case"config":this.config=i.config,this.emit("config",i.config);break;case"start":this.state="racing",this.results=[],this.racers=i.racers,this.config=i.config;for(let t of i.players)if(t.id!==this.id){let e=this.addPlayer(t);e.buf=[],e.vis=null,e.fin=null}this.emit("start",i);break;case"s":{let t=this.players.get(i.id);if(!t)break;let[e,n,s,r,a,o,l,c]=i.d;t.buf.push({t:performance.now(),x:e,y:n,z:s,h:r,spd:a,idx:o,steer:l,slope:c}),t.buf.length>30&&t.buf.shift();break}case"fin":{this.results.push(i.r);let t=this.players.get(i.r.id);t&&(t.fin=i.r),this.emit("fin",i.r);break}case"lobby":this.state="lobby",this.results=i.results||this.results;for(let t of this.players.values())t.inRace=!1;this.emit("lobby",i);break;case"error":this.emit("error",i.text);break;default:break}},sendState(i){let t=performance.now();t-this.lastSend<66.66666666666667||(this.lastSend=t,this.send({t:"s",d:[i.x,i.roadY,i.z,i.h,i.speed,i.idx,i.steer||0,i.slope||0]}))},finish(i,t,e){this.send({t:"fin",finished:i,time:t,score:e})},sample(i){let t=i.buf;if(!t.length)return null;let e=performance.now()-120;for(;t.length>2&&t[1].t<=e;)t.shift();let n=t[0],s=t[1];if(!s||e<=n.t)return n;let r=Math.min(1,(e-n.t)/Math.max(1,s.t-n.t)),a=s.h-n.h;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;let o=(l,c)=>l+(c-l)*r;return{x:o(n.x,s.x),y:o(n.y,s.y),z:o(n.z,s.z),h:n.h+a*r,spd:o(n.spd,s.spd),idx:o(n.idx,s.idx),steer:o(n.steer,s.steer),slope:o(n.slope,s.slope)}}};var Ni=[{id:"race",name:"\u0413\u043E\u043D\u043A\u0430",desc:"\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0442\u0430\u0439\u043C\u0435\u0440. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E, \u043E\u0431\u0433\u043E\u043D\u044B \u0438 \u0434\u0440\u0438\u0444\u0442.",timer:50,rivals:5,bonus:i=>Math.max(22,40-i*2)},{id:"drift",name:"\u0414\u0440\u0438\u0444\u0442",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0438 \u0442\u0440\u0430\u0441\u0441\u0430. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0437\u0430\u043D\u043E\u0441, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0441\u0435\u0440\u0438\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0432\u0440\u0435\u043C\u044F.",timer:60,rivals:0,bonus:i=>Math.max(26,42-i*1.5)},{id:"free",name:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430",desc:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430 \u0438 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0439 \u0434\u0440\u0438\u0444\u0442.",timer:0,rivals:3,bonus:()=>0}],Of={id:"field",name:"\u041F\u043E\u043B\u0438\u0433\u043E\u043D",desc:"",timer:0,rivals:0,bonus:()=>0},hi=1/240,B_=400,zf=5,ns={get(i,t){try{let e=localStorage.getItem("ed_"+i);return e?JSON.parse(e):t}catch{return t}},set(i,t){try{localStorage.setItem("ed_"+i,JSON.stringify(t))}catch{}}},Ah="ontouchstart"in window||navigator.maxTouchPoints>0;Ah&&document.body.classList.add("touch");var bt=Object.assign({vol:.8,music:!0,assist:!0,manual:!1,quality:Ah?0:1,camera:0,units:"kmh",fps:0,showFps:!1,sfxVol:.8,musicVol:.3,easy:!0,smoke:!0,outline:!0},ns.get("settings",{}));bt.handling||(bt.handling=bt.easy===!1?"real":"easy");bt.easy=bt.handling==="easy";var Gt=Object.assign({car:0,colors:{},mode:0,map:0,len:10,fieldMode:"obst"},ns.get("sel",{}));Gt.car>=Ve.length&&(Gt.car=0);var O_=5,kf=50,Di=ns.get("records",{}),an=()=>ns.set("settings",bt),Ui=()=>ns.set("sel",Gt),Z=i=>document.getElementById(i),z_=Z("game"),Tn=new Va({canvas:z_,antialias:!0,powerPreference:"high-performance"});Tn.outputColorSpace=Oe;Tn.toneMapping=Dr;Tn.shadowMap.type=jc;var ci=new Ei,Fe=new Je(62,1,.1,1600),Hf=new zs(Tn);ci.environment=Hf.fromScene(new po,.04).texture;function k_(){var t;let i=+bt.quality;if(Tn.setPixelRatio([1,Math.min(devicePixelRatio,1.5),Math.min(devicePixelRatio,2)][i]),Tn.shadowMap.enabled=i>0,Y&&Y.sun){Y.sun.castShadow=i>0;let e=i===2?2048:1024;Y.sun.shadow.mapSize.x!==e&&(Y.sun.shadow.mapSize.set(e,e),(t=Y.sun.shadow.map)==null||t.dispose(),Y.sun.shadow.map=null)}Rh()}var En=null,Zs=null;function H_(){+bt.quality==2?(En||(En=new Co(Tn),En.addPass(new Po(ci,Fe)),Zs=new $s(new it(innerWidth/2,innerHeight/2),.5,.45,.85),En.addPass(Zs),En.addPass(new Io)),En.setPixelRatio(Tn.getPixelRatio()),En.setSize(innerWidth,innerHeight),Y&&(Zs.strength=Y.map.night?.55:.18,Zs.threshold=Y.map.night?.72:.96,Zs.radius=.35)):En&&(En.dispose(),En=null,Zs=null)}function Rh(){let i=innerWidth,t=innerHeight;Tn.setSize(i,t,!1),H_(),Fe.aspect=i/t,Ch(),Fe.updateProjectionMatrix()}var Js={x:0,y:0};function Ch(){let i=innerWidth,t=innerHeight;Js.x||Js.y?Fe.setViewOffset(i,t,-i*Js.x,t*Js.y,i,t):Fe.clearViewOffset()}addEventListener("resize",Rh);var Kt=new bo;Kt.setVolume(bt.vol);Kt.musicOn=bt.music;Kt.sfxVol=bt.sfxVol;Kt.musicVol=bt.musicVol;var No=new So;No.bindTouch(Z("touch"));addEventListener("pointerdown",()=>Kt.init(),{once:!1});addEventListener("keydown",()=>Kt.init(),{once:!0});var Lo=null,Y=null,D=null,jt="loading";function V_(){Y&&(ci.remove(Y.group),Y.group.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(t=>{var e;(e=t.map)==null||e.dispose(),t.dispose()})}),Y=null)}function zr(i,t,e={}){var x,y,A,T,E;V_();let n=hn[i],s=new Ae;ci.add(s),ci.fog=new Ga(n.fog.color,n.fog.near,n.fog.far),ci.background=new Mt(n.fog.color),Lo&&Lo.dispose(),Lo=Hf.fromScene(Cf(n),.02).texture,ci.environment=Lo,ci.environmentIntensity=n.night?.7:1,Tn.toneMappingExposure=n.night?1.15:1;let r=new io(n.hemi.sky,n.hemi.ground,n.hemi.intensity);s.add(r);let a=new ao(n.sun.color,n.sun.intensity),o=new P(...n.sun.dir).normalize();a.shadow.camera.left=-32,a.shadow.camera.right=32,a.shadow.camera.top=32,a.shadow.camera.bottom=-32,a.shadow.camera.near=1,a.shadow.camera.far=220,a.shadow.bias=-4e-4,a.shadow.normalBias=.03,s.add(a),s.add(a.target);let l=Rf(n);s.add(l);let c=Pf(n);c.position.y=c.userData.h/2-45,l.add(c),l.add(If(n));let h=(x=e.fieldMode)!=null?x:Gt.fieldMode,u=n.field?new _o(s,n,t,+bt.quality,{props:h==="obst",flat:h==="flat"}):new xo(s,n,t,+bt.quality,{finishIdx:(y=e.finishIdx)!=null?y:1/0}),f=new ft(new Se(5e3,5e3),new Ue({color:n.ground.far}));f.rotation.x=-Math.PI/2,s.add(f);let d=(A=n.smoke)!=null?A:{desert:15130064,snow:16777215,city:12105928}[n.id],g=new Br(s,d,bt.quality>0?90:50),_=new Br(s,(T=n.dust)!=null?T:{desert:13606764,snow:16054527,city:7829375}[n.id],40),p=(E=n.skid)!=null?E:n.id==="snow"?8226968:789516,m=new wo(s,bt.quality>0?3e3:1200,p,p===789516?.6:.4),M=n.weather==="snow"?new Eo(s,bt.quality>0?2600:900):null;Y={map:n,mapIdx:i,group:s,hemi:r,sun:a,sunDir:o,sky:l,track:u,farPlane:f,smoke:g,dust:_,skids:m,snow:M,rivals:[],player:null},k_(),Bo(6,-2.8)}function G_(i){var t;return i.colors[(t=Gt.colors[i.id])!=null?t:0]}function Bo(i,t){let e=Ve[Gt.car];Y.player&&Y.group.remove(Y.player.model.root);let n=yo(e,G_(e),{night:Y.map.night,outline:bt.outline});n._tailBase=Y.map.night?1.2:.35,Y.group.add(n.root);let s=new mo(e),r=Y.track.P(i);if(s.reset(r.x+r.lx*t,r.z+r.lz*t,r.h),s.idx=i,s.lat=t,s.roadY=r.y,s.slope=0,s.roll=0,Y.track.isField&&(Y.track.target=s,s.odo=0),Y.map.night){let a=new so(16773590,40,100,.5,.6,1.4);a.position.set(0,.8,2),a.target.position.set(0,0,25),n.root.add(a),n.root.add(a.target)}Y.player={veh:s,model:n},Ph(0)}function Vf(){var s,r;let{veh:i}=Y.player,t=D&&i.px!==void 0?pe(D.acc/hi,0,1):1,e=(a,o)=>a===void 0?o:a+(o-a)*t,n=i.h-((s=i.ph)!=null?s:i.h);return{x:e(i.px,i.x),z:e(i.pz,i.z),h:((r=i.ph)!=null?r:i.h)+n*t,y:e(i.pY,i.roadY)}}function Ph(i){let{veh:t,model:e}=Y.player,n=Vf();e.root.position.set(n.x,n.y+.03,n.z),e.root.rotation.set(-Math.atan(t.slope||0),n.h,Math.atan(t.roll||0),"YXZ"),Af(e,t,i||.016,D&&D.braking)}function Gf(i,t){i.ghostMats=[],i.outlines=[];let e=new Map;t.root.traverse(n=>{if(!(!n.isMesh||n.isSprite)){if(n.material.isShaderMaterial){i.outlines.push(n);return}if(!e.has(n.material)){let s=n.material.clone();s.userData.baseOp=n.material.transparent?n.material.opacity:1,s.transparent=!0,e.set(n.material,s),i.ghostMats.push(s)}n.material=e.get(n.material)}})}function Wf(i,t){var n,s;let e=pe((t-4)/14,.3,1);if(!(Math.abs(e-((n=i.op)!=null?n:1))<.02)){i.op=e;for(let r of i.ghostMats)r.opacity=e*((s=r.userData.baseOp)!=null?s:1);for(let r of i.outlines)r.visible=e>.95}}function W_(i){let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");e.fillStyle="rgba(0,0,0,0.55)",e.beginPath(),e.roundRect(8,8,240,48,14),e.fill(),e.fillStyle="#7cff4f",e.font="bold 30px Segoe UI, Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,33);let n=new ln(t);n.colorSpace=Oe;let s=new Ki(new Ti({map:n,depthTest:!1,transparent:!0}));return s.scale.set(2.6,.65,1),s.position.y=2.1,s.renderOrder=10,s}function X_(i){if(i.model||!Y)return;let t=Ve[i.car]||Ve[0],e=yo(t,t.colors[i.color%t.colors.length],{night:Y.map.night,outline:bt.outline});e._tailBase=Y.map.night?1.2:.35,Gf(i,e),i.label=W_(i.name),e.root.add(i.label),e.root.visible=!1,Y.group.add(e.root),i.model=e,i.wheelSpin=0}function q_(i){!i||!i.model||(Y&&Y.group.remove(i.model.root),i.model=null)}function Y_(i){if(!D||!D.online)return;let{veh:t}=Y.player;for(let e of Yt.players.values()){if(!Yt.racers.includes(e.id))continue;e.model||X_(e);let n=Yt.sample(e);if(!n)continue;e.vis=n;let s=e.model;s.root.visible=!0,s.root.position.set(n.x,n.y+.03,n.z),s.root.rotation.set(-Math.atan(n.slope||0),n.h,0,"YXZ"),e.wheelSpin+=n.spd/s.spec.wheelRadius*i;for(let r of s.wheels)r.wheel.rotation.x=e.wheelSpin,r.front&&(r.pivot.rotation.y=n.steer);Wf(e,Math.hypot(n.x-t.x,n.z-t.z))}}function $_(i){let t=[[6,2.8],[14,-2.8],[14,2.8],[22,-2.8],[22,2.8],[30,0]];for(let e=0;e<i;e++){let n=Ve[(Gt.car+1+e)%Ve.length],s=n.colors[(e*2+1)%n.colors.length],r=yo(n,s,{night:Y.map.night,outline:bt.outline});r._tailBase=Y.map.night?1.2:.35,Y.group.add(r.root);let a=new Mo(n,r,t[e][0],t[e][1],.9+Math.random()*.12,Y.map.grip);Gf(a,r),a.ahead=t[e][0]>6||t[e][0]===6&&!1,a.place(Y.track,0),Y.rivals.push(a)}}var Ht={mode:+bt.camera,h:0,pos:new P,look:new P,shake:0,fov:62,cineT:0,cineA:0,orbit:0},Z_=["\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438, \u0434\u0430\u043B\u044C\u043D\u044F\u044F","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441 \u043A\u0430\u043F\u043E\u0442\u0430","\u041A\u0430\u043C\u0435\u0440\u0430: \u043A\u0438\u043D\u043E"],Qs=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e};function Ih(i,t=!1){let{veh:e}=Y.player,n=Vf(),s={x:n.x,z:n.z,h:n.h,roadY:n.y,speed:e.speed,u:e.u,vx:e.vx,vz:e.vz,spec:e.spec,slope:e.slope},r=s.speed,a=Math.sin(s.h),o=Math.cos(s.h),l=s.roadY,c=pe((s.u-3)/8,0,1)*.45,h=s.h+pe(Qs(Math.atan2(s.vx,s.vz),s.h),-.7,.7)*c;t&&(Ht.h=h),Ht.h+=Qs(h,Ht.h)*Math.min(1,i*6);let u=t?1:1-Math.exp(-i*7),f=60+Math.min(9,r*.12),d=new P,g=new P;if(Ht.mode===0||Ht.mode===1){let _=Ht.mode===0?5.4:8.2,p=Ht.mode===0?1.9:3;(t||Ht.y===void 0)&&(Ht.y=l+p),Ht.y+=(l+p-Ht.y)*Math.min(1,i*6),d.set(s.x-Math.sin(Ht.h)*_,Math.max(Ht.y,l+1),s.z-Math.cos(Ht.h)*_),Y.track.isField&&(d.y=Math.max(d.y,Y.track.heightAt(d.x,d.z)+.9)),g.set(s.x+Math.sin(Ht.h)*2.5,l+1.05,s.z+Math.cos(Ht.h)*2.5),Ht.pos.copy(d),Ht.look.copy(g)}else if(Ht.mode===2){let _=s.spec.body;d.set(s.x+a*(_.cabin[0][0]+.25),l+_.cabin[0][1]+.55,s.z+o*(_.cabin[0][0]+.25)),g.set(s.x+a*30,l+1.3+(s.slope||0)*30,s.z+o*30),Ht.pos.copy(d),Ht.look.copy(g),f+=6}else{Ht.cineT-=i,(Ht.cineT<=0||t)&&(Ht.cineT=4+Math.random()*3,Ht.cineA=(Math.random()*2-1)*2.4,Ht.cineD=6+Math.random()*6,Ht.cineH=.8+Math.random()*3);let _=s.h+Math.PI+Ht.cineA;d.set(s.x+Math.sin(_)*Ht.cineD,l+Ht.cineH,s.z+Math.cos(_)*Ht.cineD),Ht.pos.lerp(d,1-Math.exp(-i*2)),g.set(s.x,l+.8,s.z),Ht.look.lerp(g,1-Math.exp(-i*12)),f=55}Ht.fov+=(f-Ht.fov)*Math.min(1,i*1.5),Fe.fov=Ht.fov,Fe.updateProjectionMatrix(),Fe.position.copy(Ht.pos),Ht.shake>.001&&(Fe.position.x+=(Math.random()-.5)*Ht.shake*.5,Fe.position.y+=(Math.random()-.5)*Ht.shake*.5,Ht.shake*=Math.exp(-i*6)),Fe.lookAt(Ht.look)}function K_(i,t){let{veh:e}=Y.player;Ht.orbit+=i*.18;let n=t?6.2:7.5,s=e.h+(t?.75:Math.PI*.75)+Math.sin(Ht.orbit)*(t?.6:.9);Fe.position.set(e.x+Math.sin(s)*n,e.roadY+(t?1.6:2.2),e.z+Math.cos(s)*n),Fe.fov=50,Fe.updateProjectionMatrix(),Fe.lookAt(e.x,e.roadY+.7,e.z)}function J_(){return hn[Gt.map].field?Of:Ni[Gt.mode]}function Q_(i){let t=J_(),e=!Y.track.isField&&i>0;D={mode:t,finite:e,lenKm:e?i:0,finishIdx:e?Y.track.finishIdx:1/0,maxIdx:6,finished:!1,place:0,rivalFin:0,time:e?0:t.timer,score:0,dist:0,startS:Y.track.P(6).s,driftTotal:0,overtakes:0,cpCount:0,nextCp:B_,maxSpeed:0,bestDrift:0,hits:0,cd:3.6,cdShown:4,started:!1,over:!1,braking:!1,drift:{active:!1,pts:0,mult:1,time:0,idle:0,angle:0},driftShowT:0,elapsed:0,acc:0}}var j_=i=>i>0?6+Math.round(i*1e3/qe):1/0;function er(i={}){var e,n;Kt.init();let t=(e=i.len)!=null?e:hn[Gt.map].field?0:Gt.len;zr(Gt.map,(n=i.seed)!=null?n:Math.random()*1e6|0,{finishIdx:j_(t),fieldMode:i.fieldMode}),Q_(t),D.online=!!i.online,tv(),$_(D.online?0:D.mode.rivals),i.onStart&&i.onStart(),Ht.mode=+bt.camera,jt="countdown",rn(null),Z("hud").classList.remove("hidden"),Ah&&Z("touch").classList.remove("hidden"),Z("hud-mode").textContent=`${D.online?"\u041E\u043D\u043B\u0430\u0439\u043D \xB7 ":""}${D.mode.name} \xB7 ${Y.map.name}${D.finite?` \xB7 ${D.lenKm} \u043A\u043C`:""}`,Js={x:0,y:0},Ch(),Ih(.016,!0)}var Do=null;function tv(){if(Y.track.isField||!(D.mode.id==="race"||D.mode.id==="drift"))return;if(!Do){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");for(let s=-128;s<640;s+=64)n.fillStyle=s/64%2?"#f4f4f4":"#d62828",n.beginPath(),n.moveTo(s,0),n.lineTo(s+64,0),n.lineTo(s+128,128),n.lineTo(s+64,128),n.fill();n.fillStyle="rgba(0,0,0,0.75)",n.fillRect(96,36,320,56),n.fillStyle="#fff",n.font="bold 40px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText("\u041D\u0410\u0417\u0410\u0414 \u041D\u0415\u041B\u042C\u0417\u042F",256,66),Do=new ln(e),Do.colorSpace=Oe}let i=Y.track.wall*2,t=new ft(new Se(i,i/4),new ye({map:Do,transparent:!0,opacity:.9}));Y.group.add(t),Y.backWall=t,Xf()}function Xf(){if(!Y.backWall)return;let i=Y.track.sample(Math.max(Y.track.base+4,3,D.maxIdx-zf/qe));Y.backWall.position.set(i.x,i.y+Y.track.wall/4,i.z),Y.backWall.rotation.set(0,i.h,0)}function Fi(i,t=1.6,e="#fff"){let n=Z("hud-msg");n.textContent=i,n.style.color=e,n.classList.add("show"),clearTimeout(Fi._t),Fi._t=setTimeout(()=>n.classList.remove("show"),t*1e3)}var Nf=0;function ev(i){let t=performance.now();return t-Nf<330?!1:(Nf=t,Kt.crash(Math.min(i,25)),Ht.shake=i>8?Math.min(.25,i/60):0,!0)}function Fo(i){if(ev(i)&&(D.hits++,D.drift.active&&D.drift.pts>0&&i>3)){let t=Z("drift-pts");t.textContent=Math.floor(D.drift.pts),t.className="drift-pts lost",Z("drift-info").textContent="\u0423\u0414\u0410\u0420 \u2014 \u0441\u0435\u0440\u0438\u044F \u0441\u0433\u043E\u0440\u0435\u043B\u0430",D.driftShowT=1.3,D.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}}function nv(i){let{veh:t}=Y.player;t.px=t.x,t.pz=t.z,t.ph=t.h,t.pY=t.roadY;let e=Y.track,n=bt.handling==="easy",s=t.step(hi,i,n?{grip:Y.map.grip*1.12,assist:bt.assist?1.15:0,manual:bt.manual,easy:!0}:{grip:Y.map.grip,assist:bt.assist?.45:0,manual:bt.manual,easy:!1,real:!0});if(s.shifted&&(Kt.shift(),s.shifted>0&&i.throttle>.5&&Math.random()<.35&&Kt.backfire()),i.shiftUp=i.shiftDown=!1,e.isField){iv(t,e);return}let r=e.project(t.x,t.z,t.idx);if(t.idx=r.idx,t.lat=r.lat,t.roadY=r.y,t.slope=r.slope,t.offroad=Math.abs(r.lat)>e.hw+.3&&Math.abs(r.k)<1/170,t.trackH=r.h,D){jt==="race"&&(D.maxIdx=Math.max(D.maxIdx,t.idx));let u=D.mode.id==="free"?150:zf/qe,f=Math.max(e.base+4,3,D.maxIdx-u);if(t.idx<f){let d=t.collideWall(Math.sin(r.h),Math.cos(r.h),(f-t.idx)*qe,.05);t.idx=f,d>4&&Fo(d)}}let a=t.spec.body,o=t.h-r.h,l=Math.abs(Math.cos(o))*a.W/2+Math.abs(Math.sin(o))*a.L/2,c=e.wall-.1-l,h=Math.sign(r.lat);if(n&&t.speed>3){let u=c-2.2,f=Math.abs(r.lat)-u;if(f>0){let d=pe(f/2.2,0,1),g=t.vx*r.lx+t.vz*r.lz;if(g*h>0){let m=g*Math.min(1,d*d*9*hi);t.vx-=r.lx*m,t.vz-=r.lz*m}let _=Qs(r.h,t.h),p=Math.cos(_)>0?_:Qs(r.h+Math.PI,t.h);Math.abs(t.beta)<.7&&(t.r+=p*d*5*hi*Math.min(1,t.speed/15))}}if(Math.abs(r.lat)>c){let u=t.collideWall(-h*r.lx,-h*r.lz,Math.abs(r.lat)-c,n?.08:.25);if(n){let f=Qs(r.h,t.h),d=Math.cos(f)>0?f:Qs(r.h+Math.PI,t.h);t.h+=d*.08,t.r*=.6}u>(n?3.5:1.5)&&D&&Fo(u)}}function iv(i,t){i.idx=6,i.lat=0,i.offroad=!1;let e=Math.sin(i.h),n=Math.cos(i.h);i.roadY=t.heightAt(i.x,i.z);let[s,r]=t.grad(i.x,i.z);i.slope=s*e+r*n,i.roll=(s*n-r*e)*.8,i.vx-=9.81*s*.85*hi,i.vz-=9.81*r*.85*hi,D&&(i.odo=(i.odo||0)+i.speed*hi);let a=i.spec.body;for(let o of t.collidersNear(i.x,i.z)){let l=i.x-o.x,c=i.z-o.z,h=Math.hypot(l,c),u=o.r+a.W*.55;if(h<u&&h>1e-4){let f=i.collideWall(l/h,c/h,u-h,.15);f>3&&D&&Fo(f)}}if(t.f.shore!==void 0&&i.x<t.f.shore-18){let o=i.collideWall(1,0,t.f.shore-18-i.x,.1);o>4&&D&&Fo(o)}}function sv(){let{veh:i}=Y.player;for(let t of Y.rivals)Wf(t,Math.hypot(t.x-i.x,t.z-i.z))}function qf(i){let{veh:t,model:e}=Y.player,n=Y.track,s=D._events||[],r=jt==="race",a=r?No.read(i,t.speed):{throttle:0,brake:0,steer:0,handbrake:0};if(jt==="over"&&(a={throttle:0,brake:.35,steer:0,handbrake:0,noReverse:!0}),jt==="countdown"){let o=No.read(i,0);D.cd-=i;let l=Math.ceil(D.cd-.6);l!==D.cdShown&&(D.cdShown=l,Z("countdown").textContent=l>0?l:"\u0421\u0422\u0410\u0420\u0422!",Kt.countdown(l<=0)),t.rpm+=(t.spec.idle+o.throttle*t.spec.redline*.75-t.rpm)*Math.min(1,i*6),D.cd<=.6&&(jt="race",D.started=!0,setTimeout(()=>{Z("countdown").textContent=""},700))}else{for(let l of s)l==="shiftUp"&&(a.shiftUp=!0),l==="shiftDown"&&(a.shiftDown=!0);D.acc+=i;let o=0;for(;D.acc>=hi&&o<24;)D.acc-=hi,nv(a),o++;o===24&&(D.acc=0)}D.braking=a.brake>.1&&t.u>.5;for(let o of Y.rivals)o.out||o.update(i,n,{idx:t.idx,lat:t.lat,t:D.elapsed},D.started);sv(),Y_(i),Xf(),D.online&&jt!=="countdown"&&Yt.sendState(t),n.update(t.idx);for(let o of Y.rivals){if(o.out)continue;D.finite&&(o.stopAt=D.finishIdx+40),D.finite&&o.finOrder===void 0&&o.fi>=D.finishIdx&&(o.finOrder=++D.rivalFin);let l=o.fi>t.idx;if(r&&o.ahead&&!l&&D.mode.id==="race"&&(D.overtakes++,Fi("\u041E\u0411\u0413\u041E\u041D!  +300",1.2,"#7cff4f"),Kt.score()),o.ahead=l,D.finite&&t.idx-o.fi>170){o.out=!0,o.model.root.visible=!1;continue}t.idx-o.fi>170&&(o.fi=t.idx+180+Math.random()*140,o.v=o.top*.6,o.d=(Math.random()*2-1)*(n.hw-2),o.targetD=o.d,o.ahead=!0,n.ensure(Math.ceil(o.fi)+80))}Ph(i),ov(i,a),jt==="race"&&rv(i,t),Kt.update(t,t.spec,jt==="countdown"?Math.max(0,(t.rpm-t.spec.idle)/t.spec.redline):a.throttle,Math.max(pe((Math.abs(t.beta)-.15)*2.2,0,1),t.lockR>.5&&t.speed>8?.6:0),t.offroad,t.speed,jt!=="paused"),Ih(i),fv(i)}function rv(i,t){D.elapsed+=i;let e=t.speed,n=e*3.6;D.maxSpeed=Math.max(D.maxSpeed,n),D.dist=Y.track.isField?t.odo||0:Math.max(D.dist,Y.track.P(t.idx).s-D.startS);let s=Math.abs(t.beta)*57.3,r=D.drift;if(e>8.5&&s>11&&s<110&&t.u>2&&!t.offroad)r.active=!0,r.idle=0,r.time+=i,r.mult=Math.min(5,1+Math.floor(r.time/2.5)),r.pts+=s*e*i*.35*r.mult,r.angle=s;else if(r.active&&(r.idle+=i,r.idle>(t.offroad?.3:1.1))){let o=Math.floor(r.pts);if(o>30){D.driftTotal+=o,D.bestDrift=Math.max(D.bestDrift,o),D.mode.id==="drift"&&!D.finite&&(D.time+=Math.min(8,o/1200));let l=Z("drift-pts");l.textContent="+"+o,l.className="drift-pts banked",Z("drift-info").textContent=o>5e3?"\u041B\u0415\u0413\u0415\u041D\u0414\u0410\u0420\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":o>2e3?"\u041E\u0422\u041B\u0418\u0427\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":"\u0414\u0420\u0418\u0424\u0422 \u0417\u0410\u0421\u0427\u0418\u0422\u0410\u041D",D.driftShowT=1.3,Kt.score()}D.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}if(D.finite&&t.idx>=D.finishIdx){Ff(!0);return}if(t.idx>=D.nextCp&&t.idx<D.finishIdx-100){if(D.cpCount++,D.nextCp+=bh,D.mode.timer&&!D.finite){let o=Math.round(D.mode.bonus(D.cpCount-1));D.time+=o,Fi(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422  +${o} \u0441`,1.8,"#ffcc00")}else Fi(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422 ${D.cpCount}`,1.5,"#ffcc00");Kt.checkpoint()}if(D.mode.id==="race"?D.score=Math.floor(D.dist)+D.overtakes*300+Math.floor(D.driftTotal/4):D.mode.id==="drift"||D.mode.id==="field"?D.score=D.driftTotal:D.score=Math.floor(D.dist),D.mode.timer&&!D.finite&&(D.time-=i,D.time<=0&&(D.time=0,Ff())),D.mode.id==="race"&&Y.rivals.length&&(D.place=1+Y.rivals.filter(o=>!o.out&&(o.finOrder!==void 0||o.fi>t.idx)).length),D.mode.id==="race"&&D.online){let o=0;for(let l of Yt.players.values())Yt.racers.includes(l.id)&&(l.fin&&l.fin.finished||!l.fin&&l.vis&&l.vis.idx>t.idx)&&o++;D.place=1+o}}var Oo=(i,t,e)=>`${i}_${t}${e?"_"+e:""}`,zo=(i,t)=>t>0&&i!=="drift";function Ff(i=!1){if(jt==="over")return;D.drift.active&&D.drift.pts>30&&(D.driftTotal+=Math.floor(D.drift.pts),D.bestDrift=Math.max(D.bestDrift,Math.floor(D.drift.pts))),(D.mode.id==="drift"||D.mode.id==="field")&&(D.score=D.driftTotal),D.finished=i,i&&D.mode.id==="race"&&Y.rivals.length&&(D.place=1+Y.rivals.filter(o=>!o.out&&o.finOrder!==void 0).length),i&&D.mode.id==="race"&&D.online&&(D.place=1+Yt.results.filter(o=>o.finished).length),jt="over",Kt.gameOver();let t=Oo(D.mode.id,Y.map.id,D.lenKm),e=Di[t],n=zo(D.mode.id,D.lenKm),s=!D.online&&(n?i&&(!e||!e.time||D.elapsed<e.time):D.score>0&&(!e||D.score>e.score));s&&(Di[t]={score:D.score,time:i?D.elapsed:0,dist:Math.floor(D.dist),drift:D.bestDrift,car:Ve[Gt.car].name,date:new Date().toLocaleDateString("ru-RU")},ns.set("records",Di));let r=D.mode.timer&&!D.finite?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E!":"\u0417\u0430\u0435\u0437\u0434 \u043E\u043A\u043E\u043D\u0447\u0435\u043D";i&&(r=D.place?`\u0424\u0418\u041D\u0418\u0428! ${D.place} \u043C\u0435\u0441\u0442\u043E`:"\u0424\u0418\u041D\u0418\u0428!"),Z("over-title").textContent=r,Z("over-record").classList.toggle("show",s);let a=[];i&&a.push(["\u0412\u0440\u0435\u043C\u044F",qn(D.elapsed)]),D.place&&!D.online&&a.push(["\u041C\u0435\u0441\u0442\u043E",`${D.place} \u0438\u0437 ${Y.rivals.length+1}`]),a.push(["\u041E\u0447\u043A\u0438",D.score.toLocaleString("ru-RU")],["\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F",`${(D.dist/1e3).toFixed(2)} \u043A\u043C`],["\u041C\u0430\u043A\u0441. \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",av(D.maxSpeed)],["\u041B\u0443\u0447\u0448\u0438\u0439 \u0434\u0440\u0438\u0444\u0442",D.bestDrift.toLocaleString("ru-RU")],["\u0412\u0441\u0435 \u043E\u0447\u043A\u0438 \u0434\u0440\u0438\u0444\u0442\u0430",D.driftTotal.toLocaleString("ru-RU")],["\u0427\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B",D.cpCount]),D.mode.id==="race"&&!D.online&&a.push(["\u041E\u0431\u0433\u043E\u043D\u044B",D.overtakes]),a.push(["\u0423\u0434\u0430\u0440\u044B",D.hits]),i||a.push(["\u0412\u0440\u0435\u043C\u044F \u0432 \u0437\u0430\u0435\u0437\u0434\u0435",qn(D.elapsed)]),e&&!s&&a.push(["\u0420\u0435\u043A\u043E\u0440\u0434",n?e.time?qn(e.time):"\u2014":e.score.toLocaleString("ru-RU")]),Z("over-stats").innerHTML=a.map(([o,l])=>`<span>${o}</span><b>${l}</b>`).join(""),D.online&&Yt.finish(i,D.elapsed,D.score),ko(),Z("touch").classList.add("hidden"),setTimeout(()=>{jt==="over"&&rn("over")},900),Ht.mode=3,Ht.cineT=0}var av=i=>bt.units==="mph"?`${Math.round(i/1.609)} mph`:`${Math.round(i)} \u043A\u043C/\u0447`;function ov(i,t){let{veh:e}=Y.player,n=e.spec.body,s=e.speed,r=Math.sin(e.h),a=Math.cos(e.h),o=a,l=-r,c=Math.max(e.rearSlide*(Math.abs(e.beta)>.1||e.lockR>0?1:.4),e.spinR),h=(d,g)=>[e.x+r*d+o*g,e.z+a*d+l*g],u=+bt.quality;for(let d of[1,-1]){let[g,_]=h(n.wheelR,d*n.track/2);bt.smoke&&c>.55&&s>8&&!e.offroad&&Math.abs(e.beta)>.35&&Math.random()<(u>0?2:1)*i*Math.min(1,(Math.abs(e.beta)-.3)*3)&&Y.smoke.emit(g,e.roadY,_,e.vx,e.vz,c,Y.map.night?.1:.15),bt.smoke&&e.offroad&&s>4&&Math.random()<5*i&&Y.dust.emit(g,e.roadY,_,e.vx,e.vz,1,.55);let p=Y.track.isField;Y.skids.add(d>0?0:1,g,p?Y.track.heightAt(g,_):e.roadY,_,o,l,!e.offroad&&c>.42?Math.min(1,(c-.3)*1.6):0);let[m,M]=h(n.wheelF,d*n.track/2);Y.skids.add(d>0?2:3,m,p?Y.track.heightAt(m,M):e.roadY,M,o,l,!e.offroad&&(e.frontSlide>.85||t.brake>.5&&s>15&&e.u>0&&e.lockR>0)?.6:0)}for(let d of Y.rivals);Y.smoke.update(i),Y.dust.update(i),Y.snow&&Y.snow.update(i,Fe);let f=Y.sunDir;Y.sun.position.set(e.x+f.x*90,e.roadY+f.y*90,e.z+f.z*90),Y.sun.target.position.set(e.x,e.roadY,e.z),Y.sky.position.copy(Fe.position),Y.farPlane.position.set(e.x,e.roadY-14,e.z)}var lv=Z("gauge").getContext("2d"),cv=Z("minimap").getContext("2d"),Bf={};function Ks(i,t){Bf[i]!==t&&(Bf[i]=t,Z(i).textContent=t)}function hv(i){let t=lv,e=220,n=110,s=118,r=92;t.clearRect(0,0,e,e);let a=Math.PI*.75,o=Math.PI*2.25;t.lineCap="round",t.beginPath(),t.arc(n,s,r,a,o),t.strokeStyle="rgba(0,0,0,0.45)",t.lineWidth=16,t.stroke();let l=pe(i.rpm/i.spec.redline,0,1);t.beginPath(),t.arc(n,s,r,a,a+(o-a)*l),t.strokeStyle=l>.95?"#ff3b3b":l>.85?"#ffb300":"#ffcc00",t.lineWidth=10,t.stroke();for(let u=0;u<=10;u++){let f=a+(o-a)*u/10;t.beginPath(),t.moveTo(n+Math.cos(f)*(r-16),s+Math.sin(f)*(r-16)),t.lineTo(n+Math.cos(f)*(r-24),s+Math.sin(f)*(r-24)),t.strokeStyle=u>=9?"#ff5050":"rgba(255,255,255,0.7)",t.lineWidth=2,t.stroke()}let c=i.kmh,h=bt.units==="mph"?c/1.609:c;t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font="italic 900 50px Segoe UI, Arial",t.fillText(Math.round(h),n,s-4),t.font="600 13px Segoe UI, Arial",t.fillStyle="rgba(255,255,255,0.75)",t.fillText(bt.units==="mph"?"MPH":"\u041A\u041C/\u0427",n,s+26),t.font="900 26px Segoe UI, Arial",t.fillStyle="#ffcc00",t.fillText(i.gear===-1?"R":i.speed<.5&&i.gear===1?"N":String(i.gear),n,s+58)}function uv(i){let t=cv,e=170,n=85,s=112;t.clearRect(0,0,e,e),t.save(),t.beginPath(),t.arc(85,85,84,0,Math.PI*2),t.clip();let r=.2,a=Math.sin(i.h),o=Math.cos(i.h),l=(h,u)=>{let f=h-i.x,d=u-i.z,g=f*a+d*o,_=f*o-d*a;return[n-_*r,s-g*r]},c=Y.track;if(c.isField){t.strokeStyle="rgba(255,255,255,0.18)",t.lineWidth=1;let h=Math.floor((i.x-450)/32)*32,u=Math.floor((i.z-450)/32)*32;for(let f=0;f<30;f++){let[d,g]=l(h+f*32,i.z-450),[_,p]=l(h+f*32,i.z+450);t.beginPath(),t.moveTo(d,g),t.lineTo(_,p),t.stroke(),[d,g]=l(i.x-450,u+f*32),[_,p]=l(i.x+450,u+f*32),t.beginPath(),t.moveTo(d,g),t.lineTo(_,p),t.stroke()}t.fillStyle="rgba(255,255,255,0.8)";for(let f of c.collidersNear(i.x,i.z)){let[d,g]=l(f.x,f.z);t.beginPath(),t.arc(d,g,2.5,0,Math.PI*2),t.fill()}if(c.f.shore!==void 0){let[f,d]=l(c.f.shore-18,i.z-600),[g,_]=l(c.f.shore-18,i.z+600);t.strokeStyle="#4bb8ff",t.lineWidth=4,t.beginPath(),t.moveTo(f,d),t.lineTo(g,_),t.stroke()}t.restore(),t.fillStyle="#4bd2ff",t.beginPath(),t.moveTo(n,s-8),t.lineTo(n-6,s+6),t.lineTo(n+6,s+6),t.closePath(),t.fill();return}t.lineCap="round",t.lineJoin="round",t.beginPath();for(let h=Math.max(c.base,Math.floor(i.idx)-60);h<Math.min(c.lastIdx,i.idx+320);h+=3){let u=c.P(h),[f,d]=l(u.x,u.z);h===Math.max(c.base,Math.floor(i.idx)-60)?t.moveTo(f,d):t.lineTo(f,d)}if(t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=6,t.stroke(),D&&D.nextCp<c.lastIdx&&D.nextCp<D.finishIdx-100){let h=c.P(D.nextCp),[u,f]=l(h.x,h.z);t.fillStyle="#ffcc00",t.beginPath(),t.arc(u,f,5,0,Math.PI*2),t.fill()}if(D&&D.finishIdx<=c.lastIdx&&D.finishIdx>=c.base){let h=c.P(D.finishIdx),[u,f]=l(h.x,h.z);t.fillStyle="#fff",t.fillRect(u-6,f-6,12,12),t.fillStyle="#111",t.fillRect(u-6,f-6,6,6),t.fillRect(u,f,6,6)}for(let h of Yt.players.values()){if(!h.vis)continue;let[u,f]=l(h.vis.x,h.vis.z);t.fillStyle="#7cff4f",t.beginPath(),t.arc(u,f,4.5,0,Math.PI*2),t.fill()}for(let h of Y.rivals){if(h.out)continue;let[u,f]=l(h.x,h.z);t.fillStyle="#ff4b4b",t.beginPath(),t.arc(u,f,4,0,Math.PI*2),t.fill()}t.restore(),t.fillStyle="#4bd2ff",t.beginPath(),t.moveTo(n,s-8),t.lineTo(n-6,s+6),t.lineTo(n+6,s+6),t.closePath(),t.fill()}function fv(i){let{veh:t}=Y.player;if(hv(t),uv(t),!D)return;D.mode.timer&&!D.finite?(Ks("hud-timer",qn(D.time)),Z("hud-timer").classList.toggle("warn",D.time<10)):(Ks("hud-timer",qn(D.elapsed)),Z("hud-timer").classList.remove("warn"));let e=Math.max(0,(D.nextCp-t.idx)*qe),n=Math.max(0,(D.finishIdx-t.idx)*qe),s=Y.track.isField?"\u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \xB7 \u0434\u0440\u0438\u0444\u0442":`\u0434\u043E \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430 ${Math.round(e)} \u043C`;D.finite&&(s=`\u0434\u043E \u0444\u0438\u043D\u0438\u0448\u0430 ${n>=1e3?(n/1e3).toFixed(2)+" \u043A\u043C":Math.round(n)+" \u043C"}`),Ks("hud-next",s),Ks("hud-score",D.score.toLocaleString("ru-RU"));let r=(D.online?Yt.players.size:Y.rivals.length)+1,a=D.place&&D.mode.id==="race"?` \xB7 \u043C\u0435\u0441\u0442\u043E ${D.place}/${r}`:"";Ks("hud-dist",`${(D.dist/1e3).toFixed(2)} \u043A\u043C${D.finite?` \u0438\u0437 ${D.lenKm}`:""}${D.mode.id==="race"&&!D.online?` \xB7 \u043E\u0431\u0433\u043E\u043D\u043E\u0432: ${D.overtakes}`:""}${a}`);let o=Di[Oo(D.mode.id,Y.map.id,D.lenKm)],l=zo(D.mode.id,D.lenKm);Ks("hud-sub",o?l?`\u0440\u0435\u043A\u043E\u0440\u0434: ${o.time?qn(o.time):"\u2014"}`:`\u0440\u0435\u043A\u043E\u0440\u0434: ${o.score.toLocaleString("ru-RU")}`:"\u0440\u0435\u043A\u043E\u0440\u0434\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442");let c=Z("hud-drift");if(D.drift.active&&D.drift.pts>5){c.classList.add("show");let h=Z("drift-pts");h.className="drift-pts",h.textContent=Math.floor(D.drift.pts).toLocaleString("ru-RU"),Z("drift-info").textContent=`x${D.drift.mult}  \xB7  \u0443\u0433\u043E\u043B ${Math.round(D.drift.angle)}\xB0`}else D.driftShowT>0?(D.driftShowT-=i,c.classList.add("show")):c.classList.remove("show")}var dv=["main","setup","garage","records","settings","controls","pause","over","online","lobby"],pv=["main","setup","garage","records","settings","controls","online","lobby"];function rn(i){for(let e of dv)Z("menu-"+e).classList.toggle("show",e===i);Z("loading").classList.remove("show"),pv.includes(i)&&(jt!=="menu"&&Yf(),jt="menu",Z("hud").classList.add("hidden"),Z("touch").classList.add("hidden"),Js=i==="setup"?{x:0,y:.18}:i==="lobby"||i==="online"?{x:innerWidth>800?-.16:0,y:innerWidth>800?0:.2}:{x:innerWidth>800?.16:0,y:innerWidth>800?0:.2},Ch(),Fe.updateProjectionMatrix()),i==="setup"&&js(),i==="garage"&&Lh(),i==="records"&&Zf(),i==="settings"&&gv(),i==="online"&&xv(),i==="lobby"&&is();let t=!!(D&&D.online);Z("btn-restart").classList.toggle("hidden",t),Z("btn-again").classList.toggle("hidden",t),Z("btn-tomenu").textContent=t?"\u0412\u044B\u0439\u0442\u0438 \u0432 \u043B\u043E\u0431\u0431\u0438":"\u0412 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E",Z("btn-over-menu").textContent=t?"\u0412 \u043B\u043E\u0431\u0431\u0438":"\u0412 \u043C\u0435\u043D\u044E",Yn=i}var Yn="main";function Yf(){D=null,Z("countdown").textContent="",zr(Gt.map,7)}document.querySelectorAll("[data-go]").forEach(i=>i.addEventListener("click",()=>{Kt.init(),Kt.click(),rn(i.dataset.go)}));function js(){let i=!!hn[Gt.map].field;Z("mode-cards").innerHTML=(i?'<div class="card sel"><b>\u041F\u043E\u043B\u0438\u0433\u043E\u043D</b><small>\u041D\u0430 \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0435 \u043D\u0435\u0442 \u0442\u0440\u0430\u0441\u0441\u044B: \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430 \u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430, \u043E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0440\u0438\u0444\u0442.</small></div>':"")+Ni.map((t,e)=>`<div class="card ${e===Gt.mode&&!i?"sel":""}" ${i?'style="opacity:.4"':""} data-mode="${e}"><b>${t.name}</b><small>${t.desc}</small></div>`).join(""),Z("map-cards").innerHTML=hn.map((t,e)=>{let n=t.field?0:Gt.len,s=t.field?"field":Ni[Gt.mode].id,r=Di[Oo(s,t.id,n)],a=r?zo(s,n)?r.time?qn(r.time):"":r.score.toLocaleString("ru-RU"):"";return`<div class="card ${e===Gt.map?"sel":""}" data-map="${e}"><span class="tag">${t.tag}</span><b>${t.name}</b><small>${t.desc}</small>${a?`<span class="rec">\u0440\u0435\u043A\u043E\u0440\u0434: ${a}</span>`:""}</div>`}).join(""),mv(i),Z("setup-car-name").textContent=Ve[Gt.car].name,document.querySelectorAll("[data-mode]").forEach(t=>t.addEventListener("click",()=>{Gt.mode=+t.dataset.mode,Ui(),Kt.click(),js()})),document.querySelectorAll("[data-map]").forEach(t=>t.addEventListener("click",()=>{let e=+t.dataset.map;Kt.click(),e!==Gt.map&&(Gt.map=e,Ui(),zr(Gt.map,7)),js()}))}function mv(i){let t=Z("setup-opts");if(i){Z("opts-title").textContent="\u041F\u043E\u043B\u0438\u0433\u043E\u043D";let e=[["obst","\u0421 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F\u043C\u0438","\u0428\u0438\u043D\u044B, \u043A\u043E\u043D\u0443\u0441\u044B, \u0431\u043B\u043E\u043A\u0438, \u0434\u0435\u0440\u0435\u0432\u044C\u044F, \u043A\u0430\u043C\u043D\u0438 \u2014 \u043E\u0431\u044A\u0435\u0437\u0436\u0430\u0439 \u0438 \u0434\u0440\u0438\u0444\u0442\u0443\u0439 \u0432\u043E\u043A\u0440\u0443\u0433."],["clean","\u0427\u0438\u0441\u0442\u043E\u0435 \u043F\u043E\u043B\u0435","\u0412\u0441\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0443\u0431\u0440\u0430\u043D\u044B \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u0435 \u0441 \u0445\u043E\u043B\u043C\u0430\u043C\u0438."],["flat","\u0427\u0438\u0441\u0442\u043E\u0435 \u0438 \u0440\u043E\u0432\u043D\u043E\u0435","\u0411\u0435\u0437 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u0431\u0435\u0437 \u0445\u043E\u043B\u043C\u043E\u0432 \u2014 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0440\u043E\u0432\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438."]];t.innerHTML=`<div class="cards">${e.map(([n,s,r])=>`<div class="card ${Gt.fieldMode===n?"sel":""}" data-fm="${n}"><b>${s}</b><small>${r}</small></div>`).join("")}</div>`,t.querySelectorAll("[data-fm]").forEach(n=>n.addEventListener("click",()=>{Gt.fieldMode!==n.dataset.fm&&(Gt.fieldMode=n.dataset.fm,Ui(),Kt.click(),zr(Gt.map,7),js())}))}else{Z("opts-title").textContent="\u0414\u043B\u0438\u043D\u0430 \u0442\u0440\u0430\u0441\u0441\u044B";let e=!Gt.len,n=Gt.len||10;t.innerHTML=`<div class="len-row">
      <input type="range" id="len-range" min="${O_}" max="${kf}" step="1" value="${n}" ${e?'class="off"':""} />
      <div class="len-val" id="len-val">${e?"\u221E":n+" \u043A\u043C"}</div>
      <button class="btn small ${e?"accent":""}" id="len-inf">\u221E \u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F</button>
    </div>
    <small class="len-hint">${e?"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u0440\u0430\u0441\u0441\u0430: \u0435\u0434\u0435\u0448\u044C, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432\u044B\u0439\u0434\u0435\u0442 \u0432\u0440\u0435\u043C\u044F (\u0432 \u0413\u043E\u043D\u043A\u0435 \u0438 \u0414\u0440\u0438\u0444\u0442\u0435) \u0438\u043B\u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0445\u043E\u0447\u0435\u0448\u044C (\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430).":"\u0412 \u043A\u043E\u043D\u0446\u0435 \u0442\u0440\u0430\u0441\u0441\u044B \u2014 \u0444\u0438\u043D\u0438\u0448. \u0422\u0430\u0439\u043C\u0435\u0440 \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0435\u0437\u0434\u0430, \u0432 \u0413\u043E\u043D\u043A\u0435 \u0432\u0430\u0436\u043D\u043E \u043C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u043E\u0432."}</small>`;let s=Z("len-range");s.addEventListener("input",()=>{Gt.len=+s.value,Z("len-val").textContent=Gt.len+" \u043A\u043C",s.classList.remove("off"),Z("len-inf").classList.remove("accent")}),s.addEventListener("change",()=>{Ui(),js()}),Z("len-inf").addEventListener("click",()=>{Kt.click(),Gt.len=Gt.len?0:+s.value,Ui(),js()})}}Z("btn-start").addEventListener("click",()=>{Kt.click(),er()});function Lh(){var n;let i=Ve[Gt.car];Z("car-name").textContent=i.name,Z("car-tag").textContent=i.tag,Z("car-desc").textContent=i.desc;let t=mf(i);Z("car-stats").innerHTML=[["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",t.top],["\u0420\u0430\u0437\u0433\u043E\u043D",t.accel],["\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C",t.handling],["\u0414\u0440\u0438\u0444\u0442",t.drift]].map(([s,r])=>`<div class="stat"><span>${s}</span><div class="bar"><i style="width:${Math.round(r*100)}%"></i></div></div>`).join(""),Z("car-spec").textContent=`${i.hp} \u043B.\u0441. \xB7 ${i.torque} \u041D\xB7\u043C \xB7 ${i.mass} \u043A\u0433 \xB7 \u043F\u0440\u0438\u0432\u043E\u0434 ${i.drive==="RWD"?"\u0437\u0430\u0434\u043D\u0438\u0439":i.drive==="AWD"?"\u043F\u043E\u043B\u043D\u044B\u0439":"\u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439"} \xB7 ${i.gears.length} \u043F\u0435\u0440\u0435\u0434\u0430\u0447`;let e=(n=Gt.colors[i.id])!=null?n:0;Z("car-colors").innerHTML=i.colors.map((s,r)=>`<div class="swatch ${r===e?"sel":""}" style="background:${s}" data-col="${r}"></div>`).join(""),document.querySelectorAll("[data-col]").forEach(s=>s.addEventListener("click",()=>{Gt.colors[i.id]=+s.dataset.col,Ui(),Kt.click(),Y.player.model.bodyMat.color.set(i.colors[+s.dataset.col]),Lh()}))}function $f(i){Gt.car=(Gt.car+i+Ve.length)%Ve.length,Ui(),Kt.click();let{veh:t}=Y.player,e=Y.track.P(6);Bo(6,-2.8),Lh()}Z("car-prev").addEventListener("click",()=>$f(-1));Z("car-next").addEventListener("click",()=>$f(1));function Zf(){let i="<table><tr><th>\u0420\u0435\u0436\u0438\u043C</th><th>\u041A\u0430\u0440\u0442\u0430</th><th>\u0414\u043B\u0438\u043D\u0430</th><th>\u0420\u0435\u043A\u043E\u0440\u0434</th><th>\u041C\u0430\u0448\u0438\u043D\u0430</th></tr>",t=!1;for(let e of[...Ni,Of])for(let n of hn)for(let s=0;s<=kf;s++){let r=Di[Oo(e.id,n.id,s)];if(!r)continue;t=!0;let a=zo(e.id,s)?r.time?qn(r.time):"\u2014":r.score.toLocaleString("ru-RU");i+=`<tr><td>${e.name}</td><td>${n.name}</td><td>${n.field?"\u2014":s?s+" \u043A\u043C":"\u221E"}</td><td><b>${a}</b></td><td>${r.car}</td></tr>`}i+="</table>",Z("records-table").innerHTML=t?i:'<p class="hint">\u0420\u0435\u043A\u043E\u0440\u0434\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0441\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439!</p>'}Z("btn-reset-rec").addEventListener("click",()=>{confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u043A\u043E\u0440\u0434\u044B?")&&(Di={},ns.set("records",Di),Zf())});function gv(){Z("set-vol").value=bt.vol,Z("set-music").checked=bt.music,Z("set-assist").checked=bt.assist,Z("set-manual").checked=bt.manual,Z("set-quality").value=bt.quality,Z("set-camera").value=bt.camera,Z("set-units").value=bt.units,Z("set-sfx").value=bt.sfxVol,Z("set-musicvol").value=bt.musicVol,Z("set-outline").checked=bt.outline,Z("set-handling").value=bt.handling,Z("set-smoke").checked=bt.smoke,Z("set-fps").value=bt.fps,Z("set-showfps").checked=bt.showFps}Z("set-vol").addEventListener("input",i=>{bt.vol=+i.target.value,Kt.setVolume(bt.vol),an()});Z("set-sfx").addEventListener("input",i=>{bt.sfxVol=+i.target.value,Kt.setSfxVol(bt.sfxVol),an()});Z("set-musicvol").addEventListener("input",i=>{bt.musicVol=+i.target.value,Kt.setMusicVol(bt.musicVol),an()});Z("set-outline").addEventListener("change",i=>{bt.outline=i.target.checked,an(),jt==="menu"&&Bo(6,-2.8)});Z("set-handling").addEventListener("change",i=>{bt.handling=i.target.value,bt.easy=bt.handling==="easy",an()});Z("set-smoke").addEventListener("change",i=>{bt.smoke=i.target.checked,an(),Y&&Y.smoke.clear()});Z("set-music").addEventListener("change",i=>{bt.music=i.target.checked,Kt.setMusic(bt.music),an()});Z("set-assist").addEventListener("change",i=>{bt.assist=i.target.checked,an()});Z("set-manual").addEventListener("change",i=>{bt.manual=i.target.checked,an()});Z("set-quality").addEventListener("change",i=>{bt.quality=+i.target.value,an(),zr(Gt.map,7)});Z("set-camera").addEventListener("change",i=>{bt.camera=+i.target.value,an()});Z("set-units").addEventListener("change",i=>{bt.units=i.target.value,an()});Z("set-fps").addEventListener("change",i=>{bt.fps=+i.target.value,an()});Z("set-showfps").addEventListener("change",i=>{bt.showFps=i.target.checked,an()});var Kf=()=>(bt.server||"").trim()||(/^(localhost|127\.)/.test(location.hostname)?"ws://localhost:8080":Uf);function tr(i,t){let e=Z("online-status");e.textContent=i,e.classList.toggle("err",!!t)}function xv(){Z("on-name").value=bt.name||"",Z("on-server").value=bt.server||"",Z("on-server").placeholder=Kf(),tr(Yt.connected?"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"")}function Dh(){var t;let i=Ve[Gt.car];return{name:bt.name||"\u0418\u0433\u0440\u043E\u043A",car:Gt.car,color:(t=Gt.colors[i.id])!=null?t:0}}async function Uh(i){Kt.click(),bt.name=Z("on-name").value.trim().slice(0,16),bt.server=Z("on-server").value.trim(),an(),tr("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026 (\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0438\u043D\u0443\u0442\u044B)"),document.querySelectorAll("#menu-online .btn").forEach(t=>t.disabled=!0);try{await Yt.connect(Kf(),{...i,...Dh()}),rn("lobby")}catch(t){tr(t.message,!0)}document.querySelectorAll("#menu-online .btn").forEach(t=>t.disabled=!1)}Z("on-quick").addEventListener("click",()=>Uh({quick:!0}));Z("on-create").addEventListener("click",()=>Uh({}));Z("on-join").addEventListener("click",()=>{let i=Z("on-code").value.trim().toUpperCase();if(i.length!==4){tr("\u0412\u0432\u0435\u0434\u0438 \u043A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u0438\u0437 4 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",!0);return}Uh({code:i})});Z("on-back").addEventListener("click",()=>{Kt.click(),Yt.disconnect(!0),rn("main")});function _v(i){let t=hn[i.map]||hn[0],e=t.field?"\u041F\u043E\u043B\u0438\u0433\u043E\u043D":(Ni.find(s=>s.id===i.mode)||Ni[0]).name,n=t.field?{obst:"\u0441 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F\u043C\u0438",clean:"\u0447\u0438\u0441\u0442\u043E\u0435 \u043F\u043E\u043B\u0435",flat:"\u0447\u0438\u0441\u0442\u043E\u0435 \u0438 \u0440\u043E\u0432\u043D\u043E\u0435"}[i.fieldMode]:i.len?`${i.len} \u043A\u043C`:"\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F";return`${e} \xB7 ${t.name} \xB7 ${n}`}function is(){if(!Yt.connected){rn("online");return}Z("lobby-code").textContent=Yt.code,Z("lobby-type").textContent=Yt.isPublic?"\u041E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430 (\u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438\u0433\u0440\u0430)":"\u0417\u0430\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430 \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u043A\u043E\u0434 \u0434\u0440\u0443\u0437\u044C\u044F\u043C";let i=Dh(),t=[{id:Yt.id,...i,me:!0},...Yt.players.values()];Z("lobby-players").innerHTML=t.map(r=>{let a=Ve[r.car]||Ve[0];return`<div class="lp"><i style="background:${a.colors[r.color%a.colors.length]}"></i><b>${r.id===Yt.host?"\u{1F451} ":""}${Jf(r.name)}${r.me?" (\u0442\u044B)":""}</b><span>${a.name}${r.inRace?" \xB7 \u0432 \u0437\u0430\u0435\u0437\u0434\u0435":""}</span></div>`}).join(""),Z("lobby-count").textContent=`\u0418\u0433\u0440\u043E\u043A\u0438: ${t.length} / 8`,Z("lobby-car").textContent=Ve[Gt.car].name;let e=Yt.config,n=Yt.isHost;Z("lobby-host").classList.toggle("hidden",!n),Z("lobby-guest").classList.toggle("hidden",n),Z("lobby-start").classList.toggle("hidden",!n),Z("lobby-conf-text").textContent=_v(e);let s=Yt.state==="racing";if(Z("lobby-wait").textContent=s?"\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0434\u0451\u0442 \u0437\u0430\u0435\u0437\u0434 \u2014 \u043F\u043E\u0434\u043E\u0436\u0434\u0438, \u043F\u043E\u043A\u0430 \u043E\u043D \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F.":n?t.length<2?"\u041C\u043E\u0436\u043D\u043E \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u043B\u0438 \u043F\u043E\u0434\u043E\u0436\u0434\u0430\u0442\u044C \u0434\u0440\u0443\u0437\u0435\u0439.":"":"\u0416\u0434\u0451\u043C, \u043A\u043E\u0433\u0434\u0430 \u0445\u043E\u0441\u0442 \u043D\u0430\u0436\u043C\u0451\u0442 \xAB\u0421\u0442\u0430\u0440\u0442\xBB.",n){Z("lc-map").innerHTML=hn.map((o,l)=>`<option value="${l}" ${l===e.map?"selected":""}>${o.name}</option>`).join("");let r=!!(hn[e.map]||{}).field;Z("lc-mode").innerHTML=Ni.map(o=>`<option value="${o.id}" ${o.id===e.mode?"selected":""}>${o.name}</option>`).join(""),Z("lc-mode-row").classList.toggle("hidden",r),Z("lc-len-row").classList.toggle("hidden",r),Z("lc-fm-row").classList.toggle("hidden",!r);let a=[5,10,15,20,25,30,35,40,45,50,0];Z("lc-len").innerHTML=a.map(o=>`<option value="${o}" ${o===e.len?"selected":""}>${o?o+" \u043A\u043C":"\u221E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F"}</option>`).join(""),Z("lc-fm").value=e.fieldMode}ko()}var Jf=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function vv(){Yt.send({t:"config",config:{map:+Z("lc-map").value,mode:Z("lc-mode").value,len:+Z("lc-len").value,fieldMode:Z("lc-fm").value}})}["lc-map","lc-mode","lc-len","lc-fm"].forEach(i=>Z(i).addEventListener("change",()=>{Kt.click(),vv()}));Z("lobby-start").addEventListener("click",()=>{Kt.click(),Yt.state==="lobby"&&Yt.send({t:"start"})});Z("lobby-leave").addEventListener("click",()=>{Kt.click(),Yt.disconnect(!0),rn("online")});function Qf(i){Gt.car=(Gt.car+i+Ve.length)%Ve.length,Ui(),Kt.click(),Y&&jt==="menu"&&Bo(6,-2.8),Yt.send({t:"profile",...Dh()}),is()}Z("lobby-prev").addEventListener("click",()=>Qf(-1));Z("lobby-next").addEventListener("click",()=>Qf(1));function ko(){let i=Z("online-results"),t=Z("lobby-results"),e=Yt.results.slice(),n=Yt.config||{},s=n.mode==="drift"||!n.len||(hn[n.map]||{}).field,r=c=>`${Jf(c.name)}${c.id===Yt.id?" (\u0442\u044B)":""}`,a;if(s)a=e.sort((c,h)=>h.score-c.score).map((c,h)=>`<tr><td>${h+1}</td><td>${r(c)}</td><td>${c.score.toLocaleString("ru-RU")} \u043E\u0447\u043A.</td></tr>`);else{let c=e.filter(u=>u.finished).sort((u,f)=>u.time-f.time),h=e.filter(u=>!u.finished);a=[...c.map((u,f)=>`<tr><td>${f+1}</td><td>${r(u)}</td><td>${qn(u.time)}</td></tr>`),...h.map(u=>`<tr class="dnf"><td>\u2014</td><td>${r(u)}</td><td>\u0441\u043E\u0448\u0451\u043B</td></tr>`)]}let o=e.length?`<table>${a.join("")}</table>`:"",l=D&&D.online;i.innerHTML=l&&o?`<h3>\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u0435\u0437\u0434</h3>${o}${Yt.state==="racing"?"<small>\u0416\u0434\u0451\u043C \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432\u2026</small>":""}`:"",i.classList.toggle("hidden",!(l&&o)),t.innerHTML=o?`<h3>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u0435\u0437\u0434</h3>${o}`:""}Yt.on.joined=()=>{Yn==="lobby"&&is()};Yt.on.player=()=>{Yn==="lobby"&&is()};Yt.on.config=()=>{Yn==="lobby"&&is()};Yt.on.left=i=>{q_(i),Yn==="lobby"&&is()};Yt.on.fin=()=>{ko()};Yt.on.lobby=()=>{ko(),Yn==="lobby"&&is()};Yt.on.error=i=>{Yn==="online"?tr(i,!0):Fi(i,2.5,"#ff6b6b")};Yt.on.close=()=>{D&&D.online&&(jt==="race"||jt==="countdown")&&Fi("\u0421\u0412\u042F\u0417\u042C \u0421 \u0421\u0415\u0420\u0412\u0415\u0420\u041E\u041C \u041F\u041E\u0422\u0415\u0420\u042F\u041D\u0410",3,"#ff6b6b"),Yn==="lobby"&&jt==="menu"&&(rn("online"),tr("\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E",!0))};Yt.on.start=i=>{let t=i.config;Gt.map=Math.min(t.map,hn.length-1);let e=Ni.findIndex(s=>s.id===t.mode);Gt.mode=e<0?0:e;let n=!!hn[Gt.map].field;for(let s of Yt.players.values())s.model=null,s.vis=null,s.buf=[];er({seed:i.seed,len:n?0:t.len,fieldMode:t.fieldMode,online:!0})};function yv(){jt!=="race"&&jt!=="countdown"||(D.prevState=jt,jt="paused",rn("pause"),Kt.update(Y.player.veh,Y.player.veh.spec,0,0,!1,0,!1))}function jf(){jt==="paused"&&(jt=D.prevState,rn(null),Uo=performance.now())}Z("btn-resume").addEventListener("click",()=>{Kt.click(),jf()});Z("btn-restart").addEventListener("click",()=>{Kt.click(),er()});Z("btn-tomenu").addEventListener("click",()=>{Kt.click(),D&&D.online?(jt!=="over"&&Yt.finish(!1,D.elapsed,D.score),D=null,rn(Yt.connected?"lobby":"online")):rn("main")});Z("btn-again").addEventListener("click",()=>{Kt.click(),er()});Z("btn-over-menu").addEventListener("click",()=>{Kt.click();let i=D&&D.online;D=null,rn(i?Yt.connected?"lobby":"online":"main")});function Th(i){for(let t of i){if(t==="mute"&&Kt.setVolume(Kt.volume>0?0:bt.vol),t==="pause"&&(jt==="paused"?jf():yv()),jt==="race"||jt==="countdown"){if(t==="camera"){Ht.mode=(Ht.mode+1)%4,Ih(.016,!0);let e=Z("cam-hint");e.textContent=Z_[Ht.mode],e.classList.add("show"),clearTimeout(Th._t),Th._t=setTimeout(()=>e.classList.remove("show"),1200)}if(t==="reset"&&jt==="race"){let{veh:e}=Y.player,n=Y.track.isField?{x:e.x,z:e.z,h:e.h,y:Y.track.heightAt(e.x,e.z)}:Y.track.sample(Math.max(Y.track.base+2,e.idx));e.reset(n.x,n.z,n.h),e.idx=Math.round(e.idx),e.roadY=n.y,e.px=void 0,e.ph=void 0,e.pY=void 0,e.pz=void 0,Y.skids.last=[null,null,null,null],Fi("\u041D\u0410 \u0422\u0420\u0410\u0421\u0421\u0423",.8)}}t==="enter"&&jt==="menu"&&Yn==="setup"&&er()}}var Uo=performance.now(),Li={frames:0,t:performance.now(),value:0};function td(i){if(requestAnimationFrame(td),bt.fps>0&&i-Uo<1e3/bt.fps-.7)return;let t=Math.min(.05,(i-Uo)/1e3);if(Uo=i,Li.frames++,i-Li.t>=500){Li.value=Math.round(Li.frames*1e3/(i-Li.t)),Li.frames=0,Li.t=i;let n=Z("fps");n.classList.toggle("hidden",!bt.showFps),bt.showFps&&(n.textContent=`${Li.value} FPS`)}let e=No.takeEvents();Th(e),Y&&(jt==="menu"?(Y.track.update(Y.player.veh.idx),Ph(t),Y.sun.position.set(Y.player.veh.x+Y.sunDir.x*90,Y.player.veh.roadY+Y.sunDir.y*90,Y.player.veh.z+Y.sunDir.z*90),Y.sun.target.position.set(Y.player.veh.x,Y.player.veh.roadY,Y.player.veh.z),Y.farPlane.position.set(Y.player.veh.x,Y.player.veh.roadY-14,Y.player.veh.z),Y.snow&&Y.snow.update(t,Fe),K_(t,Yn==="garage"),Y.sky.position.copy(Fe.position)):(jt==="countdown"||jt==="race"||jt==="over")&&(D._events=e,qf(t)),En?En.render():Tn.render(ci,Fe))}Rh();Yf();jt="menu";rn("main");requestAnimationFrame(td);window.__game={renderer:Tn,get W(){return Y},get G(){return D},get state(){return jt},startRace:er,showScreen:rn,sel:Gt,settings:bt,cam:Ht,net:Yt,CARS:Ve,tick(i,t=1){for(let e=0;e<t;e++)(jt==="countdown"||jt==="race"||jt==="over")&&(D._events=[],qf(i))}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

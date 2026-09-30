(()=>{var Ad=0,vh=1,Rd=2;var Au=1,Uc=2,kn=3,ui=0,we=1,Le=2,Dn=0,us=1,ms=2,yh=3,Mh=4,Cd=5,Ii=100,Pd=101,Id=102,Ld=103,Dd=104,Ud=200,Nd=201,Fd=202,Od=203,cl=204,hl=205,Bd=206,zd=207,kd=208,Hd=209,Vd=210,Gd=211,Wd=212,Xd=213,qd=214,ul=0,dl=1,fl=2,gs=3,pl=4,ml=5,gl=6,xl=7,Nc=0,Yd=1,Zd=2,hi=0,Fc=1,Oc=2,Bc=3,gr=4,$d=5,zc=6,kc=7;var Ru=300,xs=301,_s=302,_l=303,vl=304,qa=306,Wn=1e3,Di=1001,yl=1002,Je=1003,Kd=1004;var Tr=1005;var Mn=1006,To=1007;var Ui=1008;var Xn=1009,Cu=1010,Pu=1011,rr=1012,Hc=1013,Ni=1014,Ln=1015,An=1016,Vc=1017,Gc=1018,vs=1020,Iu=35902,Lu=1021,Du=1022,ln=1023,Uu=1024,Nu=1025,ds=1026,ys=1027,Wc=1028,Xc=1029,Fu=1030,qc=1031;var Yc=1033,ia=33776,sa=33777,ra=33778,aa=33779,Ml=35840,Sl=35841,bl=35842,El=35843,wl=36196,Tl=37492,Al=37496,Rl=37808,Cl=37809,Pl=37810,Il=37811,Ll=37812,Dl=37813,Ul=37814,Nl=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,kl=37820,Hl=37821,oa=36492,Vl=36494,Gl=36495,Ou=36283,Wl=36284,Xl=36285,ql=36286;var ca=2300,Yl=2301,Ao=2302,Sh=2400,bh=2401,Eh=2402;var Jd=3200,Qd=3201;var Ya=0,jd=1,li="",ke="srgb",xi="srgb-linear",Zc="display-p3",Za="display-p3-linear",ha="linear",fe="srgb",ua="rec709",da="p3";var Wi=7680;var wh=519,tf=512,ef=513,nf=514,Bu=515,sf=516,rf=517,af=518,of=519,Zl=35044;var Th="300 es",Vn=2e3,fa=2001,di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ro=Math.PI/180,pa=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function lf(i,t){return(i%t+t)%t}function Co(i,t,e){return(1-e)*i+e*t}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],M=s[1],x=s[4],y=s[7],R=s[2],T=s[5],w=s[8];return r[0]=a*_+o*M+l*R,r[3]=a*g+o*x+l*T,r[6]=a*m+o*y+l*w,r[1]=c*_+h*M+u*R,r[4]=c*g+h*x+u*T,r[7]=c*m+h*y+u*w,r[2]=d*_+f*M+p*R,r[5]=d*g+f*x+p*T,r[8]=d*m+f*y+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Po=new Jt;function zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){let i=ma("canvas");return i.style.display="block",i}var Ah={};function la(i){i in Ah||(Ah[i]=!0,console.warn(i))}function hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function uf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function df(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Rh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ch=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[xi]:{transfer:ha,primaries:ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ke]:{transfer:fe,primaries:ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Za]:{transfer:ha,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(Rh)},[Zc]:{transfer:fe,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(Rh).convertLinearToSRGB()}},ff=new Set([xi,Za]),re={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Gs[t].toReference,s=Gs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gs[i].primaries},getTransfer:function(i){return i===li?ha:Gs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Gs[t].luminanceCoefficients)}};function fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,$l=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=ma("canvas")),Xi.width=t.width,Xi.height=t.height;let n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ma("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pf=0,ga=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?$l.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mf=0,en=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=Mn,a=Ui,o=ln,l=Xn,c=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Gn(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wn:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wn:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Ru;en.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,R=(m+1)/2,T=(h+d)/4,w=(u+_)/4,L=(p+g)/4;return x>y&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kl=class extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Kl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xa=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let R=Math.sqrt(x),T=Math.atan2(R,m*M);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let y=o*M;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+_*y,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new P,Ph=new Sn,qn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Rr.subVectors(this.max,Ws),qi.subVectors(t.a,Ws),Yi.subVectors(t.b,Ws),Zi.subVectors(t.c,Ws),ni.subVectors(Yi,qi),ii.subVectors(Zi,Yi),Ei.subVectors(qi,Zi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!Uo(e,qi,Yi,Zi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,qi,Yi,Zi,Rr))?!1:(Cr.crossVectors(ni,ii),e=[Cr.x,Cr.y,Cr.z],Uo(e,qi,Yi,Zi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,Ar=new qn,qi=new P,Yi=new P,Zi=new P,ni=new P,ii=new P,Ei=new P,Ws=new P,Rr=new P,Cr=new P,wi=new P;function Uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gf=new qn,Xs=new P,No=new P,fi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(No)),this.expandByPoint(Xs.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new P,Fo=new P,Pr=new P,si=new P,Oo=new P,Ir=new P,Bo=new P,_a=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fo.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Fo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=si.dot(this.direction),l=-si.dot(Pr),c=si.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fo).addScaledVector(Pr,d),f}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){Oo.subVectors(e,t),Ir.subVectors(n,t),Bo.crossVectors(Oo,Ir);let a=this.direction.dot(Bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);let l=o*this.direction.dot(Ir.crossVectors(si,Ir));if(l<0)return null;let c=o*this.direction.dot(Oo.cross(si));if(c<0||l+c>a)return null;let h=-o*si.dot(Bo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,_f)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ri.crossVectors(n,an),ri.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ri.crossVectors(n,an)),ri.normalize(),Lr.crossVectors(an,ri),s[0]=ri.x,s[4]=Lr.x,s[8]=an.x,s[1]=ri.y,s[5]=Lr.y,s[9]=an.y,s[2]=ri.z,s[6]=Lr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],x=n[7],y=n[11],R=n[15],T=s[0],w=s[4],L=s[8],H=s[12],v=s[1],b=s[5],z=s[9],F=s[13],V=s[2],J=s[6],B=s[10],nt=s[14],k=s[3],lt=s[7],vt=s[11],_t=s[15];return r[0]=a*T+o*v+l*V+c*k,r[4]=a*w+o*b+l*J+c*lt,r[8]=a*L+o*z+l*B+c*vt,r[12]=a*H+o*F+l*nt+c*_t,r[1]=h*T+u*v+d*V+f*k,r[5]=h*w+u*b+d*J+f*lt,r[9]=h*L+u*z+d*B+f*vt,r[13]=h*H+u*F+d*nt+f*_t,r[2]=p*T+_*v+g*V+m*k,r[6]=p*w+_*b+g*J+m*lt,r[10]=p*L+_*z+g*B+m*vt,r[14]=p*H+_*F+g*nt+m*_t,r[3]=M*T+x*v+y*V+R*k,r[7]=M*w+x*b+y*J+R*lt,r[11]=M*L+x*z+y*B+R*vt,r[15]=M*H+x*F+y*nt+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=u*g*c-_*d*c+_*l*f-o*g*f-u*l*m+o*d*m,x=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,y=h*_*c-p*u*c+p*o*f-a*_*f-h*o*m+a*u*m,R=p*u*l-h*_*l-p*o*d+a*_*d+h*o*g-a*u*g,T=e*M+n*x+s*y+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=M*w,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*m-n*d*m)*w,t[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*m+n*l*m)*w,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*w,t[4]=x*w,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*w,t[6]=(p*l*r-a*g*r-p*s*c+e*g*c+a*s*m-e*l*m)*w,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*w,t[8]=y*w,t[9]=(p*u*r-h*_*r-p*n*f+e*_*f+h*n*m-e*u*m)*w,t[10]=(a*_*r-p*o*r+p*n*c-e*_*c-a*n*m+e*o*m)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*w,t[12]=R*w,t[13]=(h*_*s-p*u*s+p*n*d-e*_*d-h*n*g+e*u*g)*w,t[14]=(p*o*s-a*_*s-p*n*l+e*_*l+a*n*g-e*o*g)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,g=a*u,m=o*u,M=l*c,x=l*h,y=l*u,R=n.x,T=n.y,w=n.z;return s[0]=(1-(_+m))*R,s[1]=(f+y)*R,s[2]=(p-x)*R,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(p+x)*w,s[9]=(g-M)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);let c=1/r,h=1/a,u=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,p;if(o===Vn)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===fa)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,p,_;if(o===Vn)p=(a+r)*u,_=-2*u;else if(o===fa)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new P,vn=new te,xf=new P(0,0,0),_f=new P(1,1,1),ri=new P,Lr=new P,an=new P,Ih=new te,Lh=new Sn,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vf=0,Dh=new P,Ki=new Sn,On=new te,Dr=new P,qs=new P,yf=new P,Mf=new Sn,Uh=new P(1,0,0),Nh=new P(0,1,0),Fh=new P(0,0,1),Oh={type:"added"},Sf={type:"removed"},Ji={type:"childadded",child:null},zo={type:"childremoved",child:null},Ne=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new bn,n=new Sn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Jt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(qs,Dr,this.up):On.lookAt(Dr,qs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(On),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new P(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new P,Bn=new P,ko=new P,zn=new P,Qi=new P,ji=new P,Bh=new P,Ho=new P,Vo=new P,Go=new P,Wo=new ue,Xo=new ue,qo=new ue,ci=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Bn.subVectors(n,e),ko.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(Bn),l=yn.dot(ko),c=Bn.dot(Bn),h=Bn.dot(ko),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Bn.subVectors(t,e),yn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),yn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,n),ji.subVectors(r,n),Ho.subVectors(t,n);let l=Qi.dot(Ho),c=ji.dot(Ho);if(l<=0&&c<=0)return e.copy(n);Vo.subVectors(t,s);let h=Qi.dot(Vo),u=ji.dot(Vo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Qi,a);Go.subVectors(t,r);let f=Qi.dot(Go),p=ji.dot(Go);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ji,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Bh.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Bh,o);let m=1/(g+_+d);return a=_*m,o=d*m,e.copy(n).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=lf(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yo(a,r,t+1/3),this.g=Yo(a,r,t),this.b=Yo(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return re.fromWorkingColorSpace(Ke.copy(this),t),Math.round(qe(Ke.r*255,0,255))*65536+Math.round(qe(Ke.g*255,0,255))*256+Math.round(qe(Ke.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=ke){re.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Ur);let n=Co(ai.h,Ur.h,e),s=Co(ai.s,Ur.s,e),r=Co(ai.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new bt;bt.NAMES=ku;var bf=0,En=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=us,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ye=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new P,Nr=new et,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}};var ya=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ma=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ef=0,fn=new te,Zo=new Ne,ts=new P,on=new qn,Ys=new qn,ze=new P,de=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zu(t)?Ma:ya)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(on.min,Ys.min),on.expandByPoint(ze),ze.addVectors(on.max,Ys.max),on.expandByPoint(ze)):(on.expandByPoint(Ys.min),on.expandByPoint(Ys.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(t,c),ze.add(ts)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new P,l[L]=new P;let c=new P,h=new P,u=new P,d=new et,f=new et,p=new et,_=new P,g=new P;function m(L,H,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,H),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,H),p.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let b=1/(f.x*p.y-p.x*f.y);isFinite(b)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(b),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(b),o[L].add(_),o[H].add(_),o[v].add(_),l[L].add(g),l[H].add(g),l[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,H=M.length;L<H;++L){let v=M[L],b=v.start,z=v.count;for(let F=b,V=b+z;F<V;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let x=new P,y=new P,R=new P,T=new P;function w(L){R.fromBufferAttribute(s,L),T.copy(R);let H=o[L];x.copy(H),x.sub(R.multiplyScalar(R.dot(H))).normalize(),y.crossVectors(T,H);let b=y.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,b)}for(let L=0,H=M.length;L<H;++L){let v=M[L],b=v.start,z=v.count;for(let F=b,V=b+z;F<V;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zh=new te,Ti=new _a,Fr=new fi,kh=new P,Or=new P,Br=new P,zr=new P,$o=new P,kr=new P,Hh=new P,Hr=new P,ft=class extends Ne{constructor(t=new de,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&($o.fromBufferAttribute(u,t),a?kr.addScaledVector($o,h):kr.addScaledVector($o.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Fr,kh)===null||Ti.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,R=x;y<R;y+=3){let T=o.getX(y),w=o.getX(y+1),L=o.getX(y+2);s=Vr(this,m,t,n,c,h,u,T,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=Vr(this,a,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,R=x;y<R;y+=3){let T=y,w=y+1,L=y+2;s=Vr(this,m,t,n,c,h,u,T,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=g,x=g+1,y=g+2;s=Vr(this,a,t,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function wf(i,t,e,n,s,r,a,o){let l;if(t.side===we?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ui,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:i}}function Vr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Or),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);let h=wf(i,t,e,n,Or,Br,zr,Hh);if(h){let u=new P;ci.getBarycoord(Hh,Or,Br,zr,u),s&&(h.uv=ci.getInterpolatedAttribute(s,o,l,c,u,new et)),r&&(h.uv1=ci.getInterpolatedAttribute(r,o,l,c,u,new et)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};ci.getNormal(Or,Br,zr,d.normal),h.face=d,h.barycoord=u}return h}var Me=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function p(_,g,m,M,x,y,R,T,w,L,H){let v=y/w,b=R/L,z=y/2,F=R/2,V=T/2,J=w+1,B=L+1,nt=0,k=0,lt=new P;for(let vt=0;vt<B;vt++){let _t=vt*b-F;for(let Zt=0;Zt<J;Zt++){let qt=Zt*v-z;lt[_]=qt*M,lt[g]=_t*x,lt[m]=V,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[g]=0,lt[m]=T>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Zt/w),u.push(1-vt/L),nt+=1}}for(let vt=0;vt<L;vt++)for(let _t=0;_t<w;_t++){let Zt=d+_t+J*vt,qt=d+_t+J*(vt+1),Y=d+(_t+1)+J*(vt+1),at=d+(_t+1)+J*vt;l.push(Zt,qt,at),l.push(qt,Y,at),k+=6}o.addGroup(f,k,H),f+=k,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var _i={clone:Ms,merge:je},Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sa=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new P,Vh=new et,Gh=new et,Ye=class extends Sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Vh,Gh),e.subVectors(Gh,Vh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Ql=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new Ye(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new Ye(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new Ye(es,ns,t,e);o.layers=this.layers,this.add(o);let l=new Ye(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Ye(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ba=class extends en{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jl=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Dn});r.uniforms.tEquirect.value=e;let a=new ft(s,r),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Mn),new Ql(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ko=new P,Cf=new P,Pf=new Jt,Hn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ko.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pf.getNormalMatrix(t),s=this.coplanarPoint(Ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new fi,Gr=new P,ar=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-m).normalize(),n[1].setComponents(l+r,d+c,g+f,y+m).normalize(),n[2].setComponents(l+a,d+h,g+p,y+M).normalize(),n[3].setComponents(l-a,d-h,g-p,y-M).normalize(),n[4].setComponents(l-o,d-u,g-_,y-x).normalize(),e===Vn)n[5].setComponents(l+o,d+u,g+_,y+x).normalize();else if(e===fa)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function If(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Te=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let x=0;x<c;x++){let y=x*u-r;p.push(y,-M,0),_.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let x=M+c*m,y=M+c*(m+1),R=M+1+c*(m+1),T=M+1+c*m;f.push(x,y,T),f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
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
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
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
#endif`,qf=`#ifdef USE_BUMPMAP
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ip=`vec3 transformedNormal = objectNormal;
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
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`
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
}`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
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
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Pp=`struct PhysicalMaterial {
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
}`,Ip=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
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
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gm=`float getShadowMask() {
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
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Bm=`#if DEPTH_PACKING == 3200
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
}`,zm=`#define DISTANCE
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
}`,km=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,$m=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,jm=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,n0=`#define STANDARD
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
}`,i0=`#define TOON
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
}`,s0=`#define TOON
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
}`,r0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,c0=`uniform float rotation;
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
}`,h0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Lf,alphahash_pars_fragment:Df,alphamap_fragment:Uf,alphamap_pars_fragment:Nf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:Bf,aomap_pars_fragment:zf,batching_pars_vertex:kf,batching_vertex:Hf,begin_vertex:Vf,beginnormal_vertex:Gf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Kf,color_fragment:Jf,color_pars_fragment:Qf,color_pars_vertex:jf,color_vertex:tp,common:ep,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:Ep,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:xp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_pars_fragment:yp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:Sp,lights_pars_begin:bp,lights_toon_fragment:wp,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Ip,lights_fragment_maps:Lp,lights_fragment_end:Dp,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:kp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Wp,morphcolor_vertex:Xp,morphnormal_vertex:qp,morphtarget_pars_vertex:Yp,morphtarget_vertex:Zp,normal_fragment_begin:$p,normal_fragment_maps:Kp,normal_pars_fragment:Jp,normal_pars_vertex:Qp,normal_vertex:jp,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:sm,opaque_fragment:rm,packing:am,premultiplied_alpha_fragment:om,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:xm,skinning_pars_vertex:_m,skinning_vertex:vm,skinnormal_vertex:ym,specularmap_fragment:Mm,specularmap_pars_fragment:Sm,tonemapping_fragment:bm,tonemapping_pars_fragment:Em,transmission_fragment:wm,transmission_pars_fragment:Tm,uv_pars_fragment:Am,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Pm,background_vert:Im,background_frag:Lm,backgroundCube_vert:Dm,backgroundCube_frag:Um,cube_vert:Nm,cube_frag:Fm,depth_vert:Om,depth_frag:Bm,distanceRGBA_vert:zm,distanceRGBA_frag:km,equirect_vert:Hm,equirect_frag:Vm,linedashed_vert:Gm,linedashed_frag:Wm,meshbasic_vert:Xm,meshbasic_frag:qm,meshlambert_vert:Ym,meshlambert_frag:Zm,meshmatcap_vert:$m,meshmatcap_frag:Km,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:jm,meshphong_frag:t0,meshphysical_vert:e0,meshphysical_frag:n0,meshtoon_vert:i0,meshtoon_frag:s0,points_vert:r0,points_frag:a0,shadow_vert:o0,shadow_frag:l0,sprite_vert:c0,sprite_frag:h0},Mt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Pn={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Pn.physical={uniforms:je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Wr={r:0,b:0,g:0},Ri=new bn,u0=new te;function d0(i,t,e,n,s,r,a){let o=new bt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,y=p(M);y===null?m(o,l):y&&y.isColor&&(m(y,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){let y=p(x);y&&(y.isCubeTexture||y.mapping===qa)?(h===void 0&&(h=new ft(new Me(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:Ms(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(x.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Ri)),h.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ft(new Te(2,2),new me({name:"BackgroundMaterial",uniforms:Ms(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Wr,Hu(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:_,addToRenderList:g}}function f0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,b,z,F,V){let J=!1,B=u(F,z,b);r!==B&&(r=B,c(r.object)),J=f(v,F,z,V),J&&p(v,F,z,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(v,b,z,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,b,z){let F=z.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let J=V[b.id];J===void 0&&(J={},V[b.id]=J);let B=J[F];return B===void 0&&(B=d(l()),J[F]=B),B}function d(v){let b=[],z=[],F=[];for(let V=0;V<e;V++)b[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,b,z,F){let V=r.attributes,J=b.attributes,B=0,nt=z.getAttributes();for(let k in nt)if(nt[k].location>=0){let vt=V[k],_t=J[k];if(_t===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor)),vt===void 0||vt.attribute!==_t||_t&&vt.data!==_t.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function p(v,b,z,F){let V={},J=b.attributes,B=0,nt=z.getAttributes();for(let k in nt)if(nt[k].location>=0){let vt=J[k];vt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor));let _t={};_t.attribute=vt,vt&&vt.data&&(_t.data=vt.data),V[k]=_t,B++}r.attributes=V,r.attributesNum=B,r.index=F}function _(){let v=r.newAttributes;for(let b=0,z=v.length;b<z;b++)v[b]=0}function g(v){m(v,0)}function m(v,b){let z=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;z[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),V[v]!==b&&(i.vertexAttribDivisor(v,b),V[v]=b)}function M(){let v=r.newAttributes,b=r.enabledAttributes;for(let z=0,F=b.length;z<F;z++)b[z]!==v[z]&&(i.disableVertexAttribArray(z),b[z]=0)}function x(v,b,z,F,V,J,B){B===!0?i.vertexAttribIPointer(v,b,z,V,J):i.vertexAttribPointer(v,b,z,F,V,J)}function y(v,b,z,F){_();let V=F.attributes,J=z.getAttributes(),B=b.defaultAttributeValues;for(let nt in J){let k=J[nt];if(k.location>=0){let lt=V[nt];if(lt===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){let vt=lt.normalized,_t=lt.itemSize,Zt=t.get(lt);if(Zt===void 0)continue;let qt=Zt.buffer,Y=Zt.type,at=Zt.bytesPerElement,Et=Y===i.INT||Y===i.UNSIGNED_INT||lt.gpuType===Hc;if(lt.isInterleavedBufferAttribute){let rt=lt.data,Ot=rt.stride,Ct=lt.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<k.locationSize;Nt++)m(k.location+Nt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<k.locationSize;Nt++)g(k.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Nt=0;Nt<k.locationSize;Nt++)x(k.location+Nt,_t/k.locationSize,Y,vt,Ot*at,(Ct+_t/k.locationSize*Nt)*at,Et)}else{if(lt.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)m(k.location+rt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let rt=0;rt<k.locationSize;rt++)g(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let rt=0;rt<k.locationSize;rt++)x(k.location+rt,_t/k.locationSize,Y,vt,_t*at,_t/k.locationSize*rt*at,Et)}}else if(B!==void 0){let vt=B[nt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(k.location,vt);break;case 3:i.vertexAttrib3fv(k.location,vt);break;case 4:i.vertexAttrib4fv(k.location,vt);break;default:i.vertexAttrib1fv(k.location,vt)}}}}M()}function R(){L();for(let v in n){let b=n[v];for(let z in b){let F=b[z];for(let V in F)h(F[V].object),delete F[V];delete b[z]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let z in b){let F=b[z];for(let V in F)h(F[V].object),delete F[V];delete b[z]}delete n[v.id]}function w(v){for(let b in n){let z=n[b];if(z[v.id]===void 0)continue;let F=z[v.id];for(let V in F)h(F[V].object),delete F[V];delete z[v.id]}}function L(){H(),a=!0,r!==s&&(r=s,c(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function p0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<d.length;_++)e.update(p,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function m0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let L=w===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ln&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function g0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,x=M*4,y=m.clippingState||null;l.value=y,y=h(p,d,x,f);for(let R=0;R!==x;++R)y[R]=e[R];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function x0(i){let t=new WeakMap;function e(a,o){return o===_l?a.mapping=xs:o===vl&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===_l||o===vl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new jl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ss=class extends Sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,Wh=[.125,.215,.35,.446,.526,.582],Li=20,Jo=new Ss,Xh=new bt,Qo=null,jo=0,tl=0,el=!1,Pi=(1+Math.sqrt(5))/2,is=1/Pi,qh=[new P(-Pi,is,0),new P(Pi,is,0),new P(-is,0,Pi),new P(is,0,Pi),new P(0,Pi,-is),new P(0,Pi,is),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qo,jo,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:An,format:ln,colorSpace:xi,depthBuffer:!1},s=Yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(r)),this._blurMaterial=v0(r,t,e)}return s}_compileMaterial(t){let e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,Jo)}_sceneToCubeUV(t,e,n,s){let o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xh),h.toneMapping=hi,h.autoClear=!1;let f=new ye({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),p=new ft(new Me,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Xh),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let x=this._cubeSize;Xr(s,M*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qh[(s-r-1)%qh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Li;g>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);let m=[],M=0;for(let w=0;w<Li;++w){let L=w/_,H=Math.exp(-L*L/2);m.push(H),w===0?M+=H:w<g&&(M+=2*H)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;let y=this._sizeLods[s],R=3*y*(s>x-cs?s-x+cs:0),T=4*(this._cubeSize-y);Xr(e,R,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Jo)}};function _0(i){let t=[],e=[],n=[],s=i,r=i-cs+1+Wh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-cs?l=Wh[a-i+cs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,M=new Float32Array(_*p*f),x=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,L=T>2?0:-1,H=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(H,_*p*T),x.set(d,g*p*T);let v=[T,T,T,T,T,T];y.set(v,m*p*T)}let R=new de;R.setAttribute("position",new pe(M,_)),R.setAttribute("uv",new pe(x,g)),R.setAttribute("faceIndex",new pe(y,m)),t.push(R),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yh(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function v0(i,t,e){let n=new Float32Array(Li),s=new P(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Zh(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function $h(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function y0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===_l||l===vl,h=l===xs||l===_s;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bs(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new bs(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function M0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&la("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let x=0,y=M.length;x<y;x+=3){let R=M[x+0],T=M[x+1],w=M[x+2];d.push(R,T,T,w,w,R)}}else if(p!==void 0){let M=p.array;_=p.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let R=x+0,T=x+1,w=x+2;d.push(R,T,T,w,w,R)}}else return;let g=new(zu(d)?Ma:ya)(d,1);g.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function b0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*a,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,_){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function w0(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let H=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*R*4*u),w=new xa(T,y,R,u);w.type=Ln,w.needsUpdate=!0;let L=x*4;for(let v=0;v<u;v++){let b=g[v],z=m[v],F=M[v],V=y*R*4*v;for(let J=0;J<b.count;J++){let B=J*L;f===!0&&(s.fromBufferAttribute(b,J),T[V+B+0]=s.x,T[V+B+1]=s.y,T[V+B+2]=s.z,T[V+B+3]=0),p===!0&&(s.fromBufferAttribute(z,J),T[V+B+4]=s.x,T[V+B+5]=s.y,T[V+B+6]=s.z,T[V+B+7]=0),_===!0&&(s.fromBufferAttribute(F,J),T[V+B+8]=s.x,T[V+B+9]=s.y,T[V+B+10]=s.z,T[V+B+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new et(y,R)},n.set(o,d),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function T0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ea=class extends en{constructor(t,e,n,s,r,a,o,l,c,h=ds){if(h!==ds&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ds&&(n=Ni),n===void 0&&h===ys&&(n=vs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Gu=new en,Kh=new Ea(1,1),Wu=new xa,Xu=new Jl,qu=new ba,Jh=[],Qh=[],jh=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $a(i,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function A0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function I0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;eu.set(n),i.uniformMatrix2fv(this.addr,!1,eu),Oe(e,n)}}function L0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;tu.set(n),i.uniformMatrix3fv(this.addr,!1,tu),Oe(e,n)}}function D0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),Oe(e,n)}}function U0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function B0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function V0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kh.compareFunction=Bu,r=Kh):r=Gu,e.setTexture2D(t||r,s)}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xu,s)}function W0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qu,s)}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wu,s)}function q0(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return I0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function $0(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function K0(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function J0(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q0(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j0(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tg(i,t){i.uniform1iv(this.addr,t)}function eg(i,t){i.uniform2iv(this.addr,t)}function ng(i,t){i.uniform3iv(this.addr,t)}function ig(i,t){i.uniform4iv(this.addr,t)}function sg(i,t){i.uniform1uiv(this.addr,t)}function rg(i,t){i.uniform2uiv(this.addr,t)}function ag(i,t){i.uniform3uiv(this.addr,t)}function og(i,t){i.uniform4uiv(this.addr,t)}function lg(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Gu,r[a])}function cg(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xu,r[a])}function hg(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qu,r[a])}function ug(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wu,r[a])}function dg(i){switch(i){case 5126:return Y0;case 35664:return Z0;case 35665:return $0;case 35666:return K0;case 35674:return J0;case 35675:return Q0;case 35676:return j0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}var tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}},ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function nu(i,t){i.seq.push(t),i.map[t.id]=t}function fg(i,t,e){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nu(e,c===void 0?new tc(o,i,t):new ec(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new nc(o),nu(e,u)),e=u}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);fg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var pg=37297,mg=0;function gg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function xg(i){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i),n;switch(t===e?n="":t===da&&e===ua?n="LinearDisplayP3ToLinearSRGB":t===ua&&e===da&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case Za:return[n,"LinearTransferOETF"];case ke:case Zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function su(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gg(i.getShaderSource(t),a)}else return s}function _g(i,t){let e=xg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vg(i,t){let e;switch(t){case Fc:e="Linear";break;case Oc:e="Reinhard";break;case Bc:e="Cineon";break;case gr:e="ACESFilmic";break;case zc:e="AgX";break;case kc:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qr=new P;function yg(){re.getLuminanceCoefficients(qr);let i=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Sg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function tr(i){return i!==""}function ru(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(Eg,Tg)}var wg=new Map;function Tg(i,t){let e=Kt[t];if(e===void 0){let n=wg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ic(e)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(i){return i.replace(Ag,Rg)}function Rg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Au?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case _s:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ig(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_s&&(t="ENVMAP_MODE_REFRACTION"),t}function Lg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nc:t="ENVMAP_BLENDING_MULTIPLY";break;case Yd:t="ENVMAP_BLENDING_MIX";break;case Zd:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cg(e),c=Pg(e),h=Ig(e),u=Lg(e),d=Dg(e),f=Mg(e),p=Sg(r),_=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(tr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(tr).join(`
`),m.length>0&&(m+=`
`)):(g=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),m=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==hi?vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,_g("linearToOutputTexel",e.outputColorSpace),yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=ic(a),a=ru(a,e),a=au(a,e),o=ic(o),o=ru(o,e),o=au(o,e),a=ou(a),o=ou(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=M+g+a,y=M+m+o,R=iu(s,s.VERTEX_SHADER,x),T=iu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(b){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(T).trim(),J=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{let nt=su(s,R,"vertex"),k=su(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+nt+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(B=!1);B&&(b.diagnostics={runnable:J,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(R),s.deleteShader(T),L=new ps(s,_),H=bg(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let H;this.getAttributes=function(){return H===void 0&&w(this),H};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,pg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}var Ng=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rc(t),e.set(t,n)),n}},rc=class{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}};function Fg(i,t,e,n,s,r,a){let o=new va,l=new sc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,z,F,V){let J=F.fog,B=V.geometry,nt=v.isMeshStandardMaterial?F.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||nt),lt=k&&k.mapping===qa?k.image.height:null,vt=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let _t=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=_t!==void 0?_t.length:0,qt=0;B.morphAttributes.position!==void 0&&(qt=1),B.morphAttributes.normal!==void 0&&(qt=2),B.morphAttributes.color!==void 0&&(qt=3);let Y,at,Et,rt;if(vt){let We=Pn[vt];Y=We.vertexShader,at=We.fragmentShader}else Y=v.vertexShader,at=v.fragmentShader,l.update(v),Et=l.getVertexShaderID(v),rt=l.getFragmentShaderID(v);let Ot=i.getRenderTarget(),Ct=V.isInstancedMesh===!0,Nt=V.isBatchedMesh===!0,Yt=!!v.map,Q=!!v.matcap,C=!!k,it=!!v.aoMap,pt=!!v.lightMap,ot=!!v.bumpMap,dt=!!v.normalMap,Dt=!!v.displacementMap,wt=!!v.emissiveMap,A=!!v.metalnessMap,S=!!v.roughnessMap,O=v.anisotropy>0,Z=v.clearcoat>0,j=v.dispersion>0,$=v.iridescence>0,Pt=v.sheen>0,xt=v.transmission>0,Tt=O&&!!v.anisotropyMap,$t=Z&&!!v.clearcoatMap,I=Z&&!!v.clearcoatNormalMap,W=Z&&!!v.clearcoatRoughnessMap,ct=$&&!!v.iridescenceMap,ut=$&&!!v.iridescenceThicknessMap,ht=Pt&&!!v.sheenColorMap,kt=Pt&&!!v.sheenRoughnessMap,Vt=!!v.specularMap,ne=!!v.specularColorMap,D=!!v.specularIntensityMap,mt=xt&&!!v.transmissionMap,q=xt&&!!v.thicknessMap,tt=!!v.gradientMap,St=!!v.alphaMap,At=v.alphaTest>0,jt=!!v.alphaHash,be=!!v.extensions,Ge=hi;v.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let se={shaderID:vt,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:at,defines:v.defines,customVertexShaderID:Et,customFragmentShaderID:rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&V._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&V.instanceColor!==null,instancingMorph:Ct&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:xi,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Q,envMap:C,envMapMode:C&&k.mapping,envMapCubeUVHeight:lt,aoMap:it,lightMap:pt,bumpMap:ot,normalMap:dt,displacementMap:f&&Dt,emissiveMap:wt,normalMapObjectSpace:dt&&v.normalMapType===jd,normalMapTangentSpace:dt&&v.normalMapType===Ya,metalnessMap:A,roughnessMap:S,anisotropy:O,anisotropyMap:Tt,clearcoat:Z,clearcoatMap:$t,clearcoatNormalMap:I,clearcoatRoughnessMap:W,dispersion:j,iridescence:$,iridescenceMap:ct,iridescenceThicknessMap:ut,sheen:Pt,sheenColorMap:ht,sheenRoughnessMap:kt,specularMap:Vt,specularColorMap:ne,specularIntensityMap:D,transmission:xt,transmissionMap:mt,thicknessMap:q,gradientMap:tt,opaque:v.transparent===!1&&v.blending===us&&v.alphaToCoverage===!1,alphaMap:St,alphaTest:At,alphaHash:jt,combine:v.combine,mapUv:Yt&&g(v.map.channel),aoMapUv:it&&g(v.aoMap.channel),lightMapUv:pt&&g(v.lightMap.channel),bumpMapUv:ot&&g(v.bumpMap.channel),normalMapUv:dt&&g(v.normalMap.channel),displacementMapUv:Dt&&g(v.displacementMap.channel),emissiveMapUv:wt&&g(v.emissiveMap.channel),metalnessMapUv:A&&g(v.metalnessMap.channel),roughnessMapUv:S&&g(v.roughnessMap.channel),anisotropyMapUv:Tt&&g(v.anisotropyMap.channel),clearcoatMapUv:$t&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:I&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&g(v.sheenRoughnessMap.channel),specularMapUv:Vt&&g(v.specularMap.channel),specularColorMapUv:ne&&g(v.specularColorMap.channel),specularIntensityMapUv:D&&g(v.specularIntensityMap.channel),transmissionMapUv:mt&&g(v.transmissionMap.channel),thicknessMapUv:q&&g(v.thicknessMap.channel),alphaMapUv:St&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(Yt||St),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:qt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Le,flipSided:v.side===we,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function M(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let z in v.defines)b.push(z),b.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(x(b,v),y(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){let b=_[v.type],z;if(b){let F=Pn[b];z=_i.clone(F.uniforms)}else z=v.uniforms;return z}function T(v,b){let z;for(let F=0,V=h.length;F<V;F++){let J=h[F];if(J.cacheKey===b){z=J,++z.usedTimes;break}}return z===void 0&&(z=new Ug(i,b,v,r),h.push(z)),z}function w(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function L(v){l.remove(v)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:R,acquireProgram:T,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:H}}function Og(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,p,_,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function o(u,d,f,p,_,g){let m=a(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,_,g){let m=a(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(d||cu),s.length>1&&s.sort(d||cu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new hu,i.set(n,[a])):s>=r.length?(a=new hu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new bt};break;case"SpotLight":e={position:new P,direction:new P,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Hg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vg=0;function Gg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wg(i){let t=new kg,e=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new te,a=new te;function o(c){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,x=0,y=0,R=0,T=0,w=0;c.sort(Gg);for(let H=0,v=c.length;H<v;H++){let b=c[H],z=b.color,F=b.intensity,V=b.distance,J=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],F);w++}else if(b.isDirectionalLight){let B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let nt=b.shadow,k=e.get(b);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=b.shadow.matrix,M++}n.directional[f]=B,f++}else if(b.isSpotLight){let B=t.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(z).multiplyScalar(F),B.distance=V,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[_]=B;let nt=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,nt.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,b.castShadow){let k=e.get(b);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=J,y++}_++}else if(b.isRectAreaLight){let B=t.get(b);B.color.copy(z).multiplyScalar(F),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=B,g++}else if(b.isPointLight){let B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){let nt=b.shadow,k=e.get(b);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,k.shadowCameraNear=nt.camera.near,k.shadowCameraFar=nt.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=b.shadow.matrix,x++}n.point[p]=B,p++}else if(b.isHemisphereLight){let B=t.get(b);B.skyColor.copy(b.color).multiplyScalar(F),B.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[m]=B,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==M||L.numPointShadows!==x||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,L.directionalLength=f,L.pointLength=p,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=M,L.numPointShadows=x,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=w,n.version=Vg++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let x=c[m];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function uu(i){let t=new Wg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Xg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new uu(i),t.set(s,[o])):r>=a.length?(o=new uu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ac=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oc=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function Zg(i,t,e){let n=new ar,s=new et,r=new et,a=new ue,o=new ac({depthPacking:Qd}),l=new oc,c={},h=e.maxTextureSize,u={[ui]:we,[we]:ui,[Le]:Le},d=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new de;p.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let m=this.type;this.render=function(T,w,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let H=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=m!==kn&&this.type===kn,V=m===kn&&this.type!==kn;for(let J=0,B=T.length;J<B;J++){let nt=T[J],k=nt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let lt=k.getFrameExtents();if(s.multiply(lt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,k.mapSize.y=r.y)),k.map===null||F===!0||V===!0){let _t=this.type!==kn?{minFilter:Je,magFilter:Je}:{};k.map!==null&&k.map.dispose(),k.map=new tn(s.x,s.y,_t),k.map.texture.name=nt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let vt=k.getViewportCount();for(let _t=0;_t<vt;_t++){let Zt=k.getViewport(_t);a.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),z.viewport(a),k.updateMatrices(nt,_t),n=k.getFrustum(),y(w,L,k.camera,nt,this.type)}k.isPointLightShadow!==!0&&this.type===kn&&M(k,L),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(H,v,b)};function M(T,w){let L=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new tn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,L,f,_,null)}function x(T,w,L,H){let v=null,b=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)v=b;else if(v=L.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let z=v.uuid,F=w.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let J=V[F];J===void 0&&(J=v.clone(),V[F]=J,w.addEventListener("dispose",R)),v=J}if(v.visible=w.visible,v.wireframe=w.wireframe,H===kn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=i.properties.get(v);z.light=L}return v}function y(T,w,L,H,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let F=t.update(T),V=T.material;if(Array.isArray(V)){let J=F.groups;for(let B=0,nt=J.length;B<nt;B++){let k=J[B],lt=V[k.materialIndex];if(lt&&lt.visible){let vt=x(T,lt,H,v);T.onBeforeShadow(i,T,w,L,F,vt,k),i.renderBufferDirect(L,null,F,vt,T,k),T.onAfterShadow(i,T,w,L,F,vt,k)}}}else if(V.visible){let J=x(T,V,H,v);T.onBeforeShadow(i,T,w,L,F,J,null),i.renderBufferDirect(L,null,F,J,T,null),T.onAfterShadow(i,T,w,L,F,J,null)}}let z=T.children;for(let F=0,V=z.length;F<V;F++)y(z[F],w,L,H,v)}function R(T){T.target.removeEventListener("dispose",R);for(let L in c){let H=c[L],v=T.target.uuid;v in H&&(H[v].dispose(),delete H[v])}}}var $g={[ul]:dl,[fl]:gl,[pl]:xl,[gs]:ml,[dl]:ul,[gl]:fl,[xl]:pl,[ml]:gs};function Kg(i){function t(){let D=!1,mt=new ue,q=null,tt=new ue(0,0,0,0);return{setMask:function(St){q!==St&&!D&&(i.colorMask(St,St,St,St),q=St)},setLocked:function(St){D=St},setClear:function(St,At,jt,be,Ge){Ge===!0&&(St*=be,At*=be,jt*=be),mt.set(St,At,jt,be),tt.equals(mt)===!1&&(i.clearColor(St,At,jt,be),tt.copy(mt))},reset:function(){D=!1,q=null,tt.set(-1,0,0,0)}}}function e(){let D=!1,mt=!1,q=null,tt=null,St=null;return{setReversed:function(At){mt=At},setTest:function(At){At?Et(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(At){q!==At&&!D&&(i.depthMask(At),q=At)},setFunc:function(At){if(mt&&(At=$g[At]),tt!==At){switch(At){case ul:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case pl:i.depthFunc(i.EQUAL);break;case ml:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=At}},setLocked:function(At){D=At},setClear:function(At){St!==At&&(i.clearDepth(At),St=At)},reset:function(){D=!1,q=null,tt=null,St=null}}}function n(){let D=!1,mt=null,q=null,tt=null,St=null,At=null,jt=null,be=null,Ge=null;return{setTest:function(se){D||(se?Et(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(se){mt!==se&&!D&&(i.stencilMask(se),mt=se)},setFunc:function(se,We,un){(q!==se||tt!==We||St!==un)&&(i.stencilFunc(se,We,un),q=se,tt=We,St=un)},setOp:function(se,We,un){(At!==se||jt!==We||be!==un)&&(i.stencilOp(se,We,un),At=se,jt=We,be=un)},setLocked:function(se){D=se},setClear:function(se){Ge!==se&&(i.clearStencil(se),Ge=se)},reset:function(){D=!1,mt=null,q=null,tt=null,St=null,At=null,jt=null,be=null,Ge=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,M=null,x=null,y=null,R=null,T=new bt(0,0,0),w=0,L=!1,H=null,v=null,b=null,z=null,F=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,B=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(nt)[1]),J=B>=1):nt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),J=B>=2);let k=null,lt={},vt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Zt=new ue().fromArray(vt),qt=new ue().fromArray(_t);function Y(D,mt,q,tt){let St=new Uint8Array(4),At=i.createTexture();i.bindTexture(D,At),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<q;jt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(mt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return At}let at={};at[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Et(i.DEPTH_TEST),r.setFunc(gs),pt(!1),ot(vh),Et(i.CULL_FACE),C(Dn);function Et(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function rt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Ot(D,mt){return h[D]!==mt?(i.bindFramebuffer(D,mt),h[D]=mt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ct(D,mt){let q=d,tt=!1;if(D){q=u.get(mt),q===void 0&&(q=[],u.set(mt,q));let St=D.textures;if(q.length!==St.length||q[0]!==i.COLOR_ATTACHMENT0){for(let At=0,jt=St.length;At<jt;At++)q[At]=i.COLOR_ATTACHMENT0+At;q.length=St.length,tt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,tt=!0);tt&&i.drawBuffers(q)}function Nt(D){return f!==D?(i.useProgram(D),f=D,!0):!1}let Yt={[Ii]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};Yt[Ld]=i.MIN,Yt[Dd]=i.MAX;let Q={[Ud]:i.ZERO,[Nd]:i.ONE,[Fd]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Bd]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,mt,q,tt,St,At,jt,be,Ge,se){if(D===Dn){p===!0&&(rt(i.BLEND),p=!1);return}if(p===!1&&(Et(i.BLEND),p=!0),D!==Cd){if(D!==_||se!==L){if((g!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),g=Ii,x=Ii),se)switch(D){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,M=null,y=null,R=null,T.set(0,0,0),w=0,_=D,L=se}return}St=St||mt,At=At||q,jt=jt||tt,(mt!==g||St!==x)&&(i.blendEquationSeparate(Yt[mt],Yt[St]),g=mt,x=St),(q!==m||tt!==M||At!==y||jt!==R)&&(i.blendFuncSeparate(Q[q],Q[tt],Q[At],Q[jt]),m=q,M=tt,y=At,R=jt),(be.equals(T)===!1||Ge!==w)&&(i.blendColor(be.r,be.g,be.b,Ge),T.copy(be),w=Ge),_=D,L=!1}function it(D,mt){D.side===Le?rt(i.CULL_FACE):Et(i.CULL_FACE);let q=D.side===we;mt&&(q=!q),pt(q),D.blending===us&&D.transparent===!1?C(Dn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let tt=D.stencilWrite;a.setTest(tt),tt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(D){H!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),H=D)}function ot(D){D!==Ad?(Et(i.CULL_FACE),D!==v&&(D===vh?i.cullFace(i.BACK):D===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),v=D}function dt(D){D!==b&&(J&&i.lineWidth(D),b=D)}function Dt(D,mt,q){D?(Et(i.POLYGON_OFFSET_FILL),(z!==mt||F!==q)&&(i.polygonOffset(mt,q),z=mt,F=q)):rt(i.POLYGON_OFFSET_FILL)}function wt(D){D?Et(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+V-1),k!==D&&(i.activeTexture(D),k=D)}function S(D,mt,q){q===void 0&&(k===null?q=i.TEXTURE0+V-1:q=k);let tt=lt[q];tt===void 0&&(tt={type:void 0,texture:void 0},lt[q]=tt),(tt.type!==D||tt.texture!==mt)&&(k!==q&&(i.activeTexture(q),k=q),i.bindTexture(D,mt||at[D]),tt.type=D,tt.texture=mt)}function O(){let D=lt[k];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(D){Zt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Zt.copy(D))}function ht(D){qt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),qt.copy(D))}function kt(D,mt){let q=l.get(mt);q===void 0&&(q=new WeakMap,l.set(mt,q));let tt=q.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(mt,D.name),q.set(D,tt))}function Vt(D,mt){let tt=l.get(mt).get(D);o.get(mt)!==tt&&(i.uniformBlockBinding(mt,tt,D.__bindingPointIndex),o.set(mt,tt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,lt={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,M=null,x=null,y=null,R=null,T=new bt(0,0,0),w=0,L=!1,H=null,v=null,b=null,z=null,F=null,Zt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Et,disable:rt,bindFramebuffer:Ot,drawBuffers:Ct,useProgram:Nt,setBlending:C,setMaterial:it,setFlipSided:pt,setCullFace:ot,setLineWidth:dt,setPolygonOffset:Dt,setScissorTest:wt,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:W,texImage3D:ct,updateUBOMapping:kt,uniformBlockBinding:Vt,texStorage2D:$t,texStorage3D:I,texSubImage2D:$,texSubImage3D:Pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Tt,scissor:ut,viewport:ht,reset:ne}}function du(i,t,e,n){let s=Jg(n);switch(e){case Lu:return i*t;case Uu:return i*t;case Nu:return i*t*2;case Wc:return i*t/s.components*s.byteLength;case Xc:return i*t/s.components*s.byteLength;case Fu:return i*t*2/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case Du:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case Yc:return i*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:case El:return Math.max(i,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ou:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jg(i){switch(i){case Xn:case Cu:return{byteLength:1,components:1};case rr:case Pu:case An:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case Ni:case Hc:case Ln:return{byteLength:4,components:1};case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,S){return f?new OffscreenCanvas(A,S):ma("canvas")}function _(A,S,O){let Z=1,j=wt(A);if((j.width>O||j.height>O)&&(Z=O/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let $=Math.floor(Z*j.width),Pt=Math.floor(Z*j.height);u===void 0&&(u=p($,Pt));let xt=S?p($,Pt):u;return xt.width=$,xt.height=Pt,xt.getContext("2d").drawImage(A,0,0,$,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Pt+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function g(A){return A.generateMipmaps&&A.minFilter!==Je&&A.minFilter!==Mn}function m(A){i.generateMipmap(A)}function M(A,S,O,Z,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=S;if(S===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),S===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){let Pt=j?ha:re.getTransfer(Z);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Pt===fe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(A,S){let O;return A?S===null||S===Ni||S===vs?O=i.DEPTH24_STENCIL8:S===Ln?O=i.DEPTH32F_STENCIL8:S===rr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===vs?O=i.DEPTH_COMPONENT24:S===Ln?O=i.DEPTH_COMPONENT32F:S===rr&&(O=i.DEPTH_COMPONENT16),O}function y(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){let S=A.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),H(S)}function w(A){let S=n.get(A);if(S.__webglInit===void 0)return;let O=A.source,Z=d.get(O);if(Z){let j=Z[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(A),Object.keys(Z).length===0&&d.delete(O)}n.remove(A)}function L(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let O=A.source,Z=d.get(O);delete Z[S.__cacheKey],a.memory.textures--}function H(A){let S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let j=0;j<S.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=A.textures;for(let Z=0,j=O.length;Z<j;Z++){let $=n.get(O[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[Z])}n.remove(A)}let v=0;function b(){v=0}function z(){let A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function F(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function V(A,S){let O=n.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(O,A,S);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function J(A,S){let O=n.get(A);if(A.version>0&&O.__version!==A.version){qt(O,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function B(A,S){let O=n.get(A);if(A.version>0&&O.__version!==A.version){qt(O,A,S);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function nt(A,S){let O=n.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}let k={[Wn]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},lt={[Je]:i.NEAREST,[Kd]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},vt={[tf]:i.NEVER,[of]:i.ALWAYS,[ef]:i.LESS,[Bu]:i.LEQUAL,[nf]:i.EQUAL,[af]:i.GEQUAL,[sf]:i.GREATER,[rf]:i.NOTEQUAL};function _t(A,S){if(S.type===Ln&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mn||S.magFilter===To||S.magFilter===Tr||S.magFilter===Ui||S.minFilter===Mn||S.minFilter===To||S.minFilter===Tr||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,k[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,k[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,k[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Je||S.minFilter!==Tr&&S.minFilter!==Ui||S.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let Z=S.source,j=d.get(Z);j===void 0&&(j={},d.set(Z,j));let $=F(S);if($!==A.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[$].usedTimes++;let Pt=j[A.__cacheKey];Pt!==void 0&&(j[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&L(S)),A.__cacheKey=$,A.__webglTexture=j[$].texture}return O}function qt(A,S,O){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);let j=Zt(A,S),$=S.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+O);let Pt=n.get($);if($.version!==Pt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);let xt=re.getPrimaries(re.workingColorSpace),Tt=S.colorSpace===li?null:re.getPrimaries(S.colorSpace),$t=S.colorSpace===li||xt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let I=_(S.image,!1,s.maxTextureSize);I=Dt(S,I);let W=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),ut=M(S.internalFormat,W,ct,S.colorSpace,S.isVideoTexture);_t(Z,S);let ht,kt=S.mipmaps,Vt=S.isVideoTexture!==!0,ne=Pt.__version===void 0||j===!0,D=$.dataReady,mt=y(S,I);if(S.isDepthTexture)ut=x(S.format===ys,S.type),ne&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,ut,I.width,I.height):e.texImage2D(i.TEXTURE_2D,0,ut,I.width,I.height,0,W,ct,null));else if(S.isDataTexture)if(kt.length>0){Vt&&ne&&e.texStorage2D(i.TEXTURE_2D,mt,ut,kt[0].width,kt[0].height);for(let q=0,tt=kt.length;q<tt;q++)ht=kt[q],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,W,ct,ht.data):e.texImage2D(i.TEXTURE_2D,q,ut,ht.width,ht.height,0,W,ct,ht.data);S.generateMipmaps=!1}else Vt?(ne&&e.texStorage2D(i.TEXTURE_2D,mt,ut,I.width,I.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,W,ct,I.data)):e.texImage2D(i.TEXTURE_2D,0,ut,I.width,I.height,0,W,ct,I.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Vt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ut,kt[0].width,kt[0].height,I.depth);for(let q=0,tt=kt.length;q<tt;q++)if(ht=kt[q],S.format!==ln)if(W!==null)if(Vt){if(D)if(S.layerUpdates.size>0){let St=du(ht.width,ht.height,S.format,S.type);for(let At of S.layerUpdates){let jt=ht.data.subarray(At*St/ht.data.BYTES_PER_ELEMENT,(At+1)*St/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,At,ht.width,ht.height,1,W,jt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,I.depth,W,ht.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,ut,ht.width,ht.height,I.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,I.depth,W,ct,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,ut,ht.width,ht.height,I.depth,0,W,ct,ht.data)}else{Vt&&ne&&e.texStorage2D(i.TEXTURE_2D,mt,ut,kt[0].width,kt[0].height);for(let q=0,tt=kt.length;q<tt;q++)ht=kt[q],S.format!==ln?W!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,W,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,q,ut,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ht.width,ht.height,W,ct,ht.data):e.texImage2D(i.TEXTURE_2D,q,ut,ht.width,ht.height,0,W,ct,ht.data)}else if(S.isDataArrayTexture)if(Vt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ut,I.width,I.height,I.depth),D)if(S.layerUpdates.size>0){let q=du(I.width,I.height,S.format,S.type);for(let tt of S.layerUpdates){let St=I.data.subarray(tt*q/I.data.BYTES_PER_ELEMENT,(tt+1)*q/I.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,I.width,I.height,1,W,ct,St)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,W,ct,I.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,I.width,I.height,I.depth,0,W,ct,I.data);else if(S.isData3DTexture)Vt?(ne&&e.texStorage3D(i.TEXTURE_3D,mt,ut,I.width,I.height,I.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,W,ct,I.data)):e.texImage3D(i.TEXTURE_3D,0,ut,I.width,I.height,I.depth,0,W,ct,I.data);else if(S.isFramebufferTexture){if(ne)if(Vt)e.texStorage2D(i.TEXTURE_2D,mt,ut,I.width,I.height);else{let q=I.width,tt=I.height;for(let St=0;St<mt;St++)e.texImage2D(i.TEXTURE_2D,St,ut,q,tt,0,W,ct,null),q>>=1,tt>>=1}}else if(kt.length>0){if(Vt&&ne){let q=wt(kt[0]);e.texStorage2D(i.TEXTURE_2D,mt,ut,q.width,q.height)}for(let q=0,tt=kt.length;q<tt;q++)ht=kt[q],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,W,ct,ht):e.texImage2D(i.TEXTURE_2D,q,ut,W,ct,ht);S.generateMipmaps=!1}else if(Vt){if(ne){let q=wt(I);e.texStorage2D(i.TEXTURE_2D,mt,ut,q.width,q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W,ct,I)}else e.texImage2D(i.TEXTURE_2D,0,ut,W,ct,I);g(S)&&m(Z),Pt.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,O){if(S.image.length!==6)return;let Z=Zt(A,S),j=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let $=n.get(j);if(j.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);let Pt=re.getPrimaries(re.workingColorSpace),xt=S.colorSpace===li?null:re.getPrimaries(S.colorSpace),Tt=S.colorSpace===li||Pt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let $t=S.isCompressedTexture||S.image[0].isCompressedTexture,I=S.image[0]&&S.image[0].isDataTexture,W=[];for(let tt=0;tt<6;tt++)!$t&&!I?W[tt]=_(S.image[tt],!0,s.maxCubemapSize):W[tt]=I?S.image[tt].image:S.image[tt],W[tt]=Dt(S,W[tt]);let ct=W[0],ut=r.convert(S.format,S.colorSpace),ht=r.convert(S.type),kt=M(S.internalFormat,ut,ht,S.colorSpace),Vt=S.isVideoTexture!==!0,ne=$.__version===void 0||Z===!0,D=j.dataReady,mt=y(S,ct);_t(i.TEXTURE_CUBE_MAP,S);let q;if($t){Vt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,ct.width,ct.height);for(let tt=0;tt<6;tt++){q=W[tt].mipmaps;for(let St=0;St<q.length;St++){let At=q[St];S.format!==ln?ut!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,At.width,At.height,ut,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,kt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,At.width,At.height,ut,ht,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,kt,At.width,At.height,0,ut,ht,At.data)}}}else{if(q=S.mipmaps,Vt&&ne){q.length>0&&mt++;let tt=wt(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(I){Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,W[tt].width,W[tt].height,ut,ht,W[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,W[tt].width,W[tt].height,0,ut,ht,W[tt].data);for(let St=0;St<q.length;St++){let jt=q[St].image[tt].image;Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,jt.width,jt.height,ut,ht,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,kt,jt.width,jt.height,0,ut,ht,jt.data)}}else{Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut,ht,W[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,ut,ht,W[tt]);for(let St=0;St<q.length;St++){let At=q[St];Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,ut,ht,At.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,kt,ut,ht,At.image[tt])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),$.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function at(A,S,O,Z,j,$){let Pt=r.convert(O.format,O.colorSpace),xt=r.convert(O.type),Tt=M(O.internalFormat,Pt,xt,O.colorSpace);if(!n.get(S).__hasExternalTextures){let I=Math.max(1,S.width>>$),W=Math.max(1,S.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,Tt,I,W,S.depth,0,Pt,xt,null):e.texImage2D(j,$,Tt,I,W,0,Pt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,n.get(O).__webglTexture,0,pt(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,n.get(O).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(A,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let Z=S.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=x(S.stencilBuffer,j),Pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=pt(S);ot(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,$,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,A)}else{let Z=S.textures;for(let j=0;j<Z.length;j++){let $=Z[j],Pt=r.convert($.format,$.colorSpace),xt=r.convert($.type),Tt=M($.internalFormat,Pt,xt,$.colorSpace),$t=pt(S);O&&ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Tt,S.width,S.height):ot(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let Z=n.get(S.depthTexture).__webglTexture,j=pt(S);if(S.depthTexture.format===ds)ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===ys)ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ot(A){let S=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");rt(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),Et(S.__webglDepthbuffer[Z],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Et(S.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,S,O){let Z=n.get(A);S!==void 0&&at(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ot(A)}function Nt(A){let S=A.texture,O=n.get(A),Z=n.get(S);A.addEventListener("dispose",T);let j=A.textures,$=A.isWebGLCubeRenderTarget===!0,Pt=j.length>1;if(Pt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[xt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)O.__webglFramebuffer[xt][Tt]=i.createFramebuffer()}else O.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)O.__webglFramebuffer[xt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let xt=0,Tt=j.length;xt<Tt;xt++){let $t=n.get(j[xt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ot(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xt=0;xt<j.length;xt++){let Tt=j[xt];O.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[xt]);let $t=r.convert(Tt.format,Tt.colorSpace),I=r.convert(Tt.type),W=M(Tt.internalFormat,$t,I,Tt.colorSpace,A.isXRRenderTarget===!0),ct=pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,W,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,O.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),_t(i.TEXTURE_CUBE_MAP,S);for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)at(O.__webglFramebuffer[xt][Tt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Tt);else at(O.__webglFramebuffer[xt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,Tt=j.length;xt<Tt;xt++){let $t=j[xt],I=n.get($t);e.bindTexture(i.TEXTURE_2D,I.__webglTexture),_t(i.TEXTURE_2D,$t),at(O.__webglFramebuffer,A,$t,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),g($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Z.__webglTexture),_t(xt,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)at(O.__webglFramebuffer[Tt],A,S,i.COLOR_ATTACHMENT0,xt,Tt);else at(O.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,xt,0);g(S)&&m(xt),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Yt(A){let S=A.textures;for(let O=0,Z=S.length;O<Z;O++){let j=S[O];if(g(j)){let $=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(j).__webglTexture;e.bindTexture($,Pt),m($),e.unbindTexture()}}}let Q=[],C=[];function it(A){if(A.samples>0){if(ot(A)===!1){let S=A.textures,O=A.width,Z=A.height,j=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(A),xt=S.length>1;if(xt)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);let $t=n.get(S[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,j,i.NEAREST),l===!0&&(Q.length=0,C.length=0,Q.push(i.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push($),C.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);let $t=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function pt(A){return Math.min(s.maxSamples,A.samples)}function ot(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function dt(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Dt(A,S){let O=A.colorSpace,Z=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==xi&&O!==li&&(re.getTransfer(O)===fe?(Z!==ln||j!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function wt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=b,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=B,this.setTextureCube=nt,this.rebindTextures=Ct,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ot}function jg(i,t){function e(n,s=li){let r,a=re.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.BYTE;if(n===Pu)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Lu)return i.ALPHA;if(n===Du)return i.RGB;if(n===ln)return i.RGBA;if(n===Uu)return i.LUMINANCE;if(n===Nu)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Wc)return i.RED;if(n===Xc)return i.RED_INTEGER;if(n===Fu)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Yc)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===Sl||n===bl||n===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Tl)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===Vl||n===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ou||n===Wl||n===Xl||n===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lc=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},tx={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
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

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new me({vertexShader:ex,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends di{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=new cc,g=e.getContextAttributes(),m=null,M=null,x=[],y=[],R=new et,T=null,w=new Ye;w.layers.enable(1),w.viewport=new ue;let L=new Ye;L.layers.enable(2),L.viewport=new ue;let H=[w,L],v=new lc;v.layers.enable(1),v.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=x[Y];return at===void 0&&(at=new er,x[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=x[Y];return at===void 0&&(at=new er,x[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=x[Y];return at===void 0&&(at=new er,x[Y]=at),at.getHandSpace()};function F(Y){let at=y.indexOf(Y.inputSource);if(at===-1)return;let Et=x[at];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,c||a),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<x.length;Y++){let at=y[Y];at!==null&&(y[Y]=null,x[Y].disconnect(at))}b=null,z=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new tn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let at=null,Et=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?ys:ds,Et=g.stencil?vs:Ni);let Ot={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new tn(d.textureWidth,d.textureHeight,{format:ln,type:Xn,depthTexture:new Ea(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Y){for(let at=0;at<Y.removed.length;at++){let Et=Y.removed[at],rt=y.indexOf(Et);rt>=0&&(y[rt]=null,x[rt].disconnect(Et))}for(let at=0;at<Y.added.length;at++){let Et=Y.added[at],rt=y.indexOf(Et);if(rt===-1){for(let Ct=0;Ct<x.length;Ct++)if(Ct>=y.length){y.push(Et),rt=Ct;break}else if(y[Ct]===null){y[Ct]=Et,rt=Ct;break}if(rt===-1)break}let Ot=x[rt];Ot&&Ot.connect(Et)}}let B=new P,nt=new P;function k(Y,at,Et){B.setFromMatrixPosition(at.matrixWorld),nt.setFromMatrixPosition(Et.matrixWorld);let rt=B.distanceTo(nt),Ot=at.projectionMatrix.elements,Ct=Et.projectionMatrix.elements,Nt=Ot[14]/(Ot[10]-1),Yt=Ot[14]/(Ot[10]+1),Q=(Ot[9]+1)/Ot[5],C=(Ot[9]-1)/Ot[5],it=(Ot[8]-1)/Ot[0],pt=(Ct[8]+1)/Ct[0],ot=Nt*it,dt=Nt*pt,Dt=rt/(-it+pt),wt=Dt*-it;if(at.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(wt),Y.translateZ(Dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ot[10]===-1)Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let A=Nt+Dt,S=Yt+Dt,O=ot-wt,Z=dt+(rt-wt),j=Q*Yt/S*A,$=C*Yt/S*A;Y.projectionMatrix.makePerspective(O,Z,j,$,A,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function lt(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,Et=Y.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),v.near=L.near=w.near=at,v.far=L.far=w.far=Et,(b!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,z=v.far);let rt=Y.parent,Ot=v.cameras;lt(v,rt);for(let Ct=0;Ct<Ot.length;Ct++)lt(Ot[Ct],rt);Ot.length===2?k(v,w,L):v.projectionMatrix.copy(w.projectionMatrix),vt(Y,v,rt)};function vt(Y,at,Et){Et===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let _t=null;function Zt(Y,at){if(h=at.getViewerPose(c||a),p=at,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let rt=!1;Et.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Ct=0;Ct<Et.length;Ct++){let Nt=Et[Ct],Yt=null;if(f!==null)Yt=f.getViewport(Nt);else{let C=u.getViewSubImage(d,Nt);Yt=C.viewport,Ct===0&&(t.setRenderTargetTextures(M,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(M))}let Q=H[Ct];Q===void 0&&(Q=new Ye,Q.layers.enable(Ct),Q.viewport=new ue,H[Ct]=Q),Q.matrix.fromArray(Nt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Nt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ct===0&&(v.matrix.copy(Q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Q)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Ct=u.getDepthInformation(Et[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,s.renderState)}}for(let Et=0;Et<x.length;Et++){let rt=y[Et],Ot=x[Et];rt!==null&&Ot!==void 0&&Ot.update(rt,at,c||a)}_t&&_t(Y,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),p=null}let qt=new Vu;qt.setAnimationLoop(Zt),this.setAnimationLoop=function(Y){_t=Y},this.dispose=function(){}}},Ci=new bn,ix=new te;function sx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Hu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===we&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===we&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),x=M.envMap,y=M.envMapRotation;x&&(g.envMap.value=x,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Ci)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===we&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=s[M.id];y===void 0&&(p(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",g));let R=x.program;n.updateUBOMapping(M,R);let T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let x=u();M.__bindingPointIndex=x;let y=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=y.length;T<w;T++){let L=Array.isArray(y[T])?y[T]:[y[T]];for(let H=0,v=L.length;H<v;H++){let b=L[H];if(f(b,T,H,R)===!0){let z=b.__offset,F=Array.isArray(b.value)?b.value:[b.value],V=0;for(let J=0;J<F.length;J++){let B=F[J],nt=_(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+V,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,V),V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,y,R){let T=M.value,w=x+"_"+y;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{let L=R[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function p(M){let x=M.uniforms,y=0,R=16;for(let w=0,L=x.length;w<L;w++){let H=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,b=H.length;v<b;v++){let z=H[v],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,J=F.length;V<J;V++){let B=F[V],nt=_(B),k=y%R,lt=k%nt.boundary,vt=k+lt;y+=lt,vt!==0&&R-vt<nt.storage&&(y+=R-vt),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=nt.storage}}}let T=y%R;return T>0&&(y+=R-T),M.__size=y,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){let x=M.target;x.removeEventListener("dispose",g);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var wa=class{constructor(t={}){let{canvas:e=cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),p=new Int32Array(4),_=null,g=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,y=!1,R=0,T=0,w=null,L=-1,H=null,v=new ue,b=new ue,z=null,F=new bt(0),V=0,J=e.width,B=e.height,nt=1,k=null,lt=null,vt=new ue(0,0,J,B),_t=new ue(0,0,J,B),Zt=!1,qt=new ar,Y=!1,at=!1,Et=new te,rt=new te,Ot=new P,Ct=new ue,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function Q(){return w===null?nt:1}let C=n;function it(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",At,!1),C===null){let U="webgl2";if(C=it(U,E),C===null)throw it(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pt,ot,dt,Dt,wt,A,S,O,Z,j,$,Pt,xt,Tt,$t,I,W,ct,ut,ht,kt,Vt,ne,D;function mt(){pt=new M0(C),pt.init(),Vt=new jg(C,pt),ot=new m0(C,pt,t,Vt),dt=new Kg(C),ot.reverseDepthBuffer&&dt.buffers.depth.setReversed(!0),Dt=new E0(C),wt=new Og,A=new Qg(C,pt,dt,wt,ot,Vt,Dt),S=new x0(x),O=new y0(x),Z=new If(C),ne=new f0(C,Z),j=new S0(C,Z,Dt,ne),$=new T0(C,j,Z,Dt),ut=new w0(C,ot,A),I=new g0(wt),Pt=new Fg(x,S,O,pt,ot,ne,I),xt=new sx(x,wt),Tt=new zg,$t=new Xg(pt),ct=new d0(x,S,O,dt,$,d,l),W=new Zg(x,$,ot),D=new rx(C,Dt,ot,dt),ht=new p0(C,pt,Dt),kt=new b0(C,pt,Dt),Dt.programs=Pt.programs,x.capabilities=ot,x.extensions=pt,x.properties=wt,x.renderLists=Tt,x.shadowMap=W,x.state=dt,x.info=Dt}mt();let q=new hc(x,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=pt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=pt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(J,B,!1))},this.getSize=function(E){return E.set(J,B)},this.setSize=function(E,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,B=U,e.width=Math.floor(E*nt),e.height=Math.floor(U*nt),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(J*nt,B*nt).floor()},this.setDrawingBufferSize=function(E,U,G){J=E,B=U,nt=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,U,G,X){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,U,G,X),dt.viewport(v.copy(vt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(_t)},this.setScissor=function(E,U,G,X){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,U,G,X),dt.scissor(b.copy(_t).multiplyScalar(nt).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(E){dt.setScissorTest(Zt=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,U=!0,G=!0){let X=0;if(E){let N=!1;if(w!==null){let gt=w.texture.format;N=gt===Yc||gt===qc||gt===Xc}if(N){let gt=w.texture.type,Rt=gt===Xn||gt===Ni||gt===rr||gt===vs||gt===Vc||gt===Gc,Ut=ct.getClearColor(),Ft=ct.getClearAlpha(),Gt=Ut.r,Xt=Ut.g,Bt=Ut.b;Rt?(f[0]=Gt,f[1]=Xt,f[2]=Bt,f[3]=Ft,C.clearBufferuiv(C.COLOR,0,f)):(p[0]=Gt,p[1]=Xt,p[2]=Bt,p[3]=Ft,C.clearBufferiv(C.COLOR,0,p))}else X|=C.COLOR_BUFFER_BIT}U&&(X|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Tt.dispose(),$t.dispose(),wt.dispose(),S.dispose(),O.dispose(),$.dispose(),ne.dispose(),D.dispose(),Pt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Bs),q.removeEventListener("sessionend",zs),Cn.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let E=Dt.autoReset,U=W.enabled,G=W.autoUpdate,X=W.needsUpdate,N=W.type;mt(),Dt.autoReset=E,W.enabled=U,W.autoUpdate=G,W.needsUpdate=X,W.type=N}function At(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jt(E){let U=E.target;U.removeEventListener("dispose",jt),be(U)}function be(E){Ge(E),wt.remove(E)}function Ge(E){let U=wt.get(E).programs;U!==void 0&&(U.forEach(function(G){Pt.releaseProgram(G)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,X,N,gt){U===null&&(U=Nt);let Rt=N.isMesh&&N.matrixWorld.determinant()<0,Ut=br(E,U,G,X,N);dt.setMaterial(X,Rt);let Ft=G.index,Gt=1;if(X.wireframe===!0){if(Ft=j.getWireframeAttribute(G),Ft===void 0)return;Gt=2}let Xt=G.drawRange,Bt=G.attributes.position,ce=Xt.start*Gt,ge=(Xt.start+Xt.count)*Gt;gt!==null&&(ce=Math.max(ce,gt.start*Gt),ge=Math.min(ge,(gt.start+gt.count)*Gt)),Ft!==null?(ce=Math.max(ce,0),ge=Math.min(ge,Ft.count)):Bt!=null&&(ce=Math.max(ce,0),ge=Math.min(ge,Bt.count));let Ee=ge-ce;if(Ee<0||Ee===1/0)return;ne.setup(N,X,Ut,G,Ft);let sn,ae=ht;if(Ft!==null&&(sn=Z.get(Ft),ae=kt,ae.setIndex(sn)),N.isMesh)X.wireframe===!0?(dt.setLineWidth(X.wireframeLinewidth*Q()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(N.isLine){let zt=X.linewidth;zt===void 0&&(zt=1),dt.setLineWidth(zt*Q()),N.isLineSegments?ae.setMode(C.LINES):N.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else N.isPoints?ae.setMode(C.POINTS):N.isSprite&&ae.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let zt=N._multiDrawStarts,Xe=N._multiDrawCounts,oe=N._multiDrawCount,xn=Ft?Z.get(Ft).bytesPerElement:1,Gi=wt.get(X).currentProgram.getUniforms();for(let rn=0;rn<oe;rn++)Gi.setValue(C,"_gl_DrawID",rn),ae.render(zt[rn]/xn,Xe[rn])}else if(N.isInstancedMesh)ae.renderInstances(ce,Ee,N.count);else if(G.isInstancedBufferGeometry){let zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Xe=Math.min(G.instanceCount,zt);ae.renderInstances(ce,Ee,Xe)}else ae.render(ce,Ee)};function se(E,U,G){E.transparent===!0&&E.side===Le&&E.forceSinglePass===!1?(E.side=we,E.needsUpdate=!0,Ue(E,U,G),E.side=ui,E.needsUpdate=!0,Ue(E,U,G),E.side=Le):Ue(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),g=$t.get(G),g.init(U),M.push(g),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),E!==G&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();let X=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let gt=N.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){let Ut=gt[Rt];se(Ut,G,N),X.add(Ut)}else se(gt,G,N),X.add(gt)}),M.pop(),g=null,X},this.compileAsync=function(E,U,G=null){let X=this.compile(E,U,G);return new Promise(N=>{function gt(){if(X.forEach(function(Rt){wt.get(Rt).currentProgram.isReady()&&X.delete(Rt)}),X.size===0){N(E);return}setTimeout(gt,10)}pt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let We=null;function un(E){We&&We(E)}function Bs(){Cn.stop()}function zs(){Cn.start()}let Cn=new Vu;Cn.setAnimationLoop(un),typeof self!="undefined"&&Cn.setContext(self),this.setAnimationLoop=function(E){We=E,q.setAnimationLoop(E),E===null?Cn.stop():Cn.start()},q.addEventListener("sessionstart",Bs),q.addEventListener("sessionend",zs),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,w),g=$t.get(E,M.length),g.init(U),M.push(g),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),qt.setFromProjectionMatrix(rt),at=this.localClippingEnabled,Y=I.init(this.clippingPlanes,at),_=Tt.get(E,m.length),_.init(),m.push(_),q.enabled===!0&&q.isPresenting===!0){let gt=x.xr.getDepthSensingMesh();gt!==null&&Vi(gt,U,-1/0,x.sortObjects)}Vi(E,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,lt),Yt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Yt&&ct.addToRenderList(_,E),this.info.render.frame++,Y===!0&&I.beginShadows();let G=g.state.shadowsArray;W.render(G,E,U),Y===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=_.opaque,N=_.transmissive;if(g.setupLights(),U.isArrayCamera){let gt=U.cameras;if(N.length>0)for(let Rt=0,Ut=gt.length;Rt<Ut;Rt++){let Ft=gt[Rt];Hs(X,N,E,Ft)}Yt&&ct.render(E);for(let Rt=0,Ut=gt.length;Rt<Ut;Rt++){let Ft=gt[Rt];ks(_,E,Ft,Ft.viewport)}}else N.length>0&&Hs(X,N,E,U),Yt&&ct.render(E),ks(_,E,U);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,U),ne.resetDefaultState(),L=-1,H=null,M.pop(),M.length>0?(g=M[M.length-1],Y===!0&&I.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Vi(E,U,G,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qt.intersectsSprite(E)){X&&Ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);let Rt=$.update(E),Ut=E.material;Ut.visible&&_.push(E,Rt,Ut,G,Ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qt.intersectsObject(E))){let Rt=$.update(E),Ut=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ct.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ct.copy(Rt.boundingSphere.center)),Ct.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(Ut)){let Ft=Rt.groups;for(let Gt=0,Xt=Ft.length;Gt<Xt;Gt++){let Bt=Ft[Gt],ce=Ut[Bt.materialIndex];ce&&ce.visible&&_.push(E,Rt,ce,G,Ct.z,Bt)}}else Ut.visible&&_.push(E,Rt,Ut,G,Ct.z,null)}}let gt=E.children;for(let Rt=0,Ut=gt.length;Rt<Ut;Rt++)Vi(gt[Rt],U,G,X)}function ks(E,U,G,X){let N=E.opaque,gt=E.transmissive,Rt=E.transparent;g.setupLightsView(G),Y===!0&&I.setGlobalState(x.clippingPlanes,G),X&&dt.viewport(v.copy(X)),N.length>0&&bi(N,U,G),gt.length>0&&bi(gt,U,G),Rt.length>0&&bi(Rt,U,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Hs(E,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new tn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?An:Xn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let gt=g.state.transmissionRenderTarget[X.id],Rt=X.viewport||v;gt.setSize(Rt.z,Rt.w);let Ut=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(F),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&ct.render(G);let Ft=x.toneMapping;x.toneMapping=hi;let Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),Y===!0&&I.setGlobalState(x.clippingPlanes,X),bi(E,G,X),A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Bt=0,ce=U.length;Bt<ce;Bt++){let ge=U[Bt],Ee=ge.object,sn=ge.geometry,ae=ge.material,zt=ge.group;if(ae.side===Le&&Ee.layers.test(X.layers)){let Xe=ae.side;ae.side=we,ae.needsUpdate=!0,Vs(Ee,G,X,sn,ae,zt),ae.side=Xe,ae.needsUpdate=!0,Xt=!0}}Xt===!0&&(A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt))}x.setRenderTarget(Ut),x.setClearColor(F,V),Gt!==void 0&&(X.viewport=Gt),x.toneMapping=Ft}function bi(E,U,G){let X=U.isScene===!0?U.overrideMaterial:null;for(let N=0,gt=E.length;N<gt;N++){let Rt=E[N],Ut=Rt.object,Ft=Rt.geometry,Gt=X===null?Rt.material:X,Xt=Rt.group;Ut.layers.test(G.layers)&&Vs(Ut,U,G,Ft,Gt,Xt)}}function Vs(E,U,G,X,N,gt){E.onBeforeRender(x,U,G,X,N,gt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,G,X,E,gt),N.transparent===!0&&N.side===Le&&N.forceSinglePass===!1?(N.side=we,N.needsUpdate=!0,x.renderBufferDirect(G,U,X,N,E,gt),N.side=ui,N.needsUpdate=!0,x.renderBufferDirect(G,U,X,N,E,gt),N.side=Le):x.renderBufferDirect(G,U,X,N,E,gt),E.onAfterRender(x,U,G,X,N,gt)}function Ue(E,U,G){U.isScene!==!0&&(U=Nt);let X=wt.get(E),N=g.state.lights,gt=g.state.shadowsArray,Rt=N.state.version,Ut=Pt.getParameters(E,N.state,gt,U,G),Ft=Pt.getProgramCacheKey(Ut),Gt=X.programs;X.environment=E.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",jt),Gt=new Map,X.programs=Gt);let Xt=Gt.get(Ft);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===Rt)return ti(E,Ut),Xt}else Ut.uniforms=Pt.getUniforms(E),E.onBeforeCompile(Ut,x),Xt=Pt.acquireProgram(Ut,Ft),Gt.set(Ft,Xt),X.uniforms=Ut.uniforms;let Bt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=I.uniform),ti(E,Ut),X.needsLights=wr(E),X.lightsStateVersion=Rt,X.needsLights&&(Bt.ambientLightColor.value=N.state.ambient,Bt.lightProbe.value=N.state.probe,Bt.directionalLights.value=N.state.directional,Bt.directionalLightShadows.value=N.state.directionalShadow,Bt.spotLights.value=N.state.spot,Bt.spotLightShadows.value=N.state.spotShadow,Bt.rectAreaLights.value=N.state.rectArea,Bt.ltc_1.value=N.state.rectAreaLTC1,Bt.ltc_2.value=N.state.rectAreaLTC2,Bt.pointLights.value=N.state.point,Bt.pointLightShadows.value=N.state.pointShadow,Bt.hemisphereLights.value=N.state.hemi,Bt.directionalShadowMap.value=N.state.directionalShadowMap,Bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Bt.spotShadowMap.value=N.state.spotShadowMap,Bt.spotLightMatrix.value=N.state.spotLightMatrix,Bt.spotLightMap.value=N.state.spotLightMap,Bt.pointShadowMap.value=N.state.pointShadowMap,Bt.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function Un(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=ps.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ti(E,U){let G=wt.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function br(E,U,G,X,N){U.isScene!==!0&&(U=Nt),A.resetTextureUnits();let gt=U.fog,Rt=X.isMeshStandardMaterial?U.environment:null,Ut=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xi,Ft=(X.isMeshStandardMaterial?O:S).get(X.envMap||Rt),Gt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Bt=!!G.morphAttributes.position,ce=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color,Ee=hi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ee=x.toneMapping);let sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=sn!==void 0?sn.length:0,zt=wt.get(X),Xe=g.state.lights;if(Y===!0&&(at===!0||E!==H)){let dn=E===H&&X.id===L;I.setState(X,E,dn)}let oe=!1;X.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Xe.state.version||zt.outputColorSpace!==Ut||N.isBatchedMesh&&zt.batching===!1||!N.isBatchedMesh&&zt.batching===!0||N.isBatchedMesh&&zt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&zt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&zt.instancing===!1||!N.isInstancedMesh&&zt.instancing===!0||N.isSkinnedMesh&&zt.skinning===!1||!N.isSkinnedMesh&&zt.skinning===!0||N.isInstancedMesh&&zt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&zt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&zt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&zt.instancingMorph===!1&&N.morphTexture!==null||zt.envMap!==Ft||X.fog===!0&&zt.fog!==gt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==I.numPlanes||zt.numIntersection!==I.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Xt||zt.morphTargets!==Bt||zt.morphNormals!==ce||zt.morphColors!==ge||zt.toneMapping!==Ee||zt.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,zt.__version=X.version);let xn=zt.currentProgram;oe===!0&&(xn=Ue(X,U,N));let Gi=!1,rn=!1,bo=!1,Ae=xn.getUniforms(),ei=zt.uniforms;if(dt.useProgram(xn.program)&&(Gi=!0,rn=!0,bo=!0),X.id!==L&&(L=X.id,rn=!0),Gi||H!==E){ot.reverseDepthBuffer?(Et.copy(E.projectionMatrix),uf(Et),df(Et),Ae.setValue(C,"projectionMatrix",Et)):Ae.setValue(C,"projectionMatrix",E.projectionMatrix),Ae.setValue(C,"viewMatrix",E.matrixWorldInverse);let dn=Ae.map.cameraPosition;dn!==void 0&&dn.setValue(C,Ot.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Ae.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ae.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,rn=!0,bo=!0)}if(N.isSkinnedMesh){Ae.setOptional(C,N,"bindMatrix"),Ae.setOptional(C,N,"bindMatrixInverse");let dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ae.setValue(C,"boneTexture",dn.boneTexture,A))}N.isBatchedMesh&&(Ae.setOptional(C,N,"batchingTexture"),Ae.setValue(C,"batchingTexture",N._matricesTexture,A),Ae.setOptional(C,N,"batchingIdTexture"),Ae.setValue(C,"batchingIdTexture",N._indirectTexture,A),Ae.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Ae.setValue(C,"batchingColorTexture",N._colorsTexture,A));let Eo=G.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0)&&ut.update(N,G,xn),(rn||zt.receiveShadow!==N.receiveShadow)&&(zt.receiveShadow=N.receiveShadow,Ae.setValue(C,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ei.envMap.value=Ft,ei.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(ei.envMapIntensity.value=U.environmentIntensity),rn&&(Ae.setValue(C,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&Er(ei,bo),gt&&X.fog===!0&&xt.refreshFogUniforms(ei,gt),xt.refreshMaterialUniforms(ei,X,nt,B,g.state.transmissionRenderTarget[E.id]),ps.upload(C,Un(zt),ei,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ps.upload(C,Un(zt),ei,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ae.setValue(C,"center",N.center),Ae.setValue(C,"modelViewMatrix",N.modelViewMatrix),Ae.setValue(C,"normalMatrix",N.normalMatrix),Ae.setValue(C,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let dn=X.uniformsGroups;for(let wo=0,Td=dn.length;wo<Td;wo++){let _h=dn[wo];D.update(_h,xn),D.bind(_h,xn)}}return xn}function Er(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function wr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,G){wt.get(E.texture).__webglTexture=U,wt.get(E.depthTexture).__webglTexture=G;let X=wt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let G=wt.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){w=E,R=U,T=G;let X=!0,N=null,gt=!1,Rt=!1;if(E){let Ft=wt.get(E);if(Ft.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(C.FRAMEBUFFER,null),X=!1;else if(Ft.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ft.__hasExternalTextures)A.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Bt=E.depthTexture;if(Ft.__boundDepthTexture!==Bt){if(Bt!==null&&wt.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Rt=!0);let Xt=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][G]:N=Xt[U],gt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?N=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[G]:N=Xt,v.copy(E.viewport),b.copy(E.scissor),z=E.scissorTest}else v.copy(vt).multiplyScalar(nt).floor(),b.copy(_t).multiplyScalar(nt).floor(),z=Zt;if(dt.bindFramebuffer(C.FRAMEBUFFER,N)&&X&&dt.drawBuffers(E,N),dt.viewport(v),dt.scissor(b),dt.setScissorTest(z),gt){let Ft=wt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ft.__webglTexture,G)}else if(Rt){let Ft=wt.get(E.texture),Gt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,G||0,Gt)}L=-1},this.readRenderTargetPixels=function(E,U,G,X,N,gt,Rt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);try{let Ft=E.texture,Gt=Ft.format,Xt=Ft.type;if(!ot.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&G>=0&&G<=E.height-N&&C.readPixels(U,G,X,N,Vt.convert(Gt),Vt.convert(Xt),gt)}finally{let Ft=w!==null?wt.get(w).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,X,N,gt,Rt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){let Ft=E.texture,Gt=Ft.format,Xt=Ft.type;if(!ot.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-X&&G>=0&&G<=E.height-N){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);let Bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.bufferData(C.PIXEL_PACK_BUFFER,gt.byteLength,C.STREAM_READ),C.readPixels(U,G,X,N,Vt.convert(Gt),Vt.convert(Xt),0);let ce=w!==null?wt.get(w).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,ce);let ge=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await hf(C,ge,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,gt),C.deleteBuffer(Bt),C.deleteSync(ge),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,G=0){E.isTexture!==!0&&(la("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let X=Math.pow(2,-G),N=Math.floor(E.image.width*X),gt=Math.floor(E.image.height*X),Rt=U!==null?U.x:0,Ut=U!==null?U.y:0;A.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,Rt,Ut,N,gt),dt.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,X=null,N=0){E.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let gt,Rt,Ut,Ft,Gt,Xt;G!==null?(gt=G.max.x-G.min.x,Rt=G.max.y-G.min.y,Ut=G.min.x,Ft=G.min.y):(gt=E.image.width,Rt=E.image.height,Ut=0,Ft=0),X!==null?(Gt=X.x,Xt=X.y):(Gt=0,Xt=0);let Bt=Vt.convert(U.format),ce=Vt.convert(U.type);A.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let ge=C.getParameter(C.UNPACK_ROW_LENGTH),Ee=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),ae=C.getParameter(C.UNPACK_SKIP_ROWS),zt=C.getParameter(C.UNPACK_SKIP_IMAGES),Xe=E.isCompressedTexture?E.mipmaps[N]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Gt,Xt,gt,Rt,Bt,ce,Xe.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Gt,Xt,Xe.width,Xe.height,Bt,Xe.data):C.texSubImage2D(C.TEXTURE_2D,N,Gt,Xt,gt,Rt,Bt,ce,Xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,ge),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ee),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt),N===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,X=null,N=0){E.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let gt,Rt,Ut,Ft,Gt,Xt,Bt,ce,ge,Ee=E.isCompressedTexture?E.mipmaps[N]:E.image;G!==null?(gt=G.max.x-G.min.x,Rt=G.max.y-G.min.y,Ut=G.max.z-G.min.z,Ft=G.min.x,Gt=G.min.y,Xt=G.min.z):(gt=Ee.width,Rt=Ee.height,Ut=Ee.depth,Ft=0,Gt=0,Xt=0),X!==null?(Bt=X.x,ce=X.y,ge=X.z):(Bt=0,ce=0,ge=0);let sn=Vt.convert(U.format),ae=Vt.convert(U.type),zt;if(U.isData3DTexture)A.setTexture3D(U,0),zt=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),zt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Xe=C.getParameter(C.UNPACK_ROW_LENGTH),oe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),xn=C.getParameter(C.UNPACK_SKIP_PIXELS),Gi=C.getParameter(C.UNPACK_SKIP_ROWS),rn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ee.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ee.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xt),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(zt,N,Bt,ce,ge,gt,Rt,Ut,sn,ae,Ee.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(zt,N,Bt,ce,ge,gt,Rt,Ut,sn,Ee.data):C.texSubImage3D(zt,N,Bt,ce,ge,gt,Rt,Ut,sn,ae,Ee),C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,rn),N===0&&U.generateMipmaps&&C.generateMipmap(zt),dt.unbindTexture()},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),dt.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,dt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Zc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Za?"display-p3":"srgb"}};var Ta=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pi=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Aa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new P,or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Es=class extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,Zs=new P,rs=new P,as=new P,os=new et,$s=new et,Yu=new te,Yr=new P,Ks=new P,Zr=new P,fu=new et,il=new et,pu=new et,lr=class extends Ne{constructor(t=new Es){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Aa(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new or(n,3,0,!1)),ss.setAttribute("uv",new or(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-as.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;$r(Yr.set(-.5,-.5,0),as,a,rs,s,r),$r(Ks.set(.5,-.5,0),as,a,rs,s,r),$r(Zr.set(.5,.5,0),as,a,rs,s,r),fu.set(0,0),il.set(1,0),pu.set(1,1);let o=t.ray.intersectTriangle(Yr,Ks,Zr,!1,Zs);if(o===null&&($r(Ks.set(-.5,.5,0),as,a,rs,s,r),il.set(0,1),o=t.ray.intersectTriangle(Yr,Zr,Ks,!1,Zs),o===null))return;let l=t.ray.origin.distanceTo(Zs);l<t.near||l>t.far||e.push({distance:l,point:Zs.clone(),uv:ci.getInterpolation(Zs,Yr,Ks,Zr,fu,il,pu,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $r(i,t,e,n,s,r){os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($s.x=r*os.x-s*os.y,$s.y=s*os.x+r*os.y):$s.copy(os),i.copy(t),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(Yu)}var cr=class extends en{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Je,h=Je,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new te,mu=new te,Kr=[],gu=new qn,ax=new te,Js=new ft,Qs=new fi,Yn=class extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ax)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),gu.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Qs.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),mu.multiplyMatrices(n,ls),Js.matrixWorld=mu,Js.raycast(t,Kr);for(let a=0,o=Kr.length;a<o;a++){let l=Kr[a];l.instanceId=r,l.object=this,e.push(l)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(s*this.count),s,this.count,Wc,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ws=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xu=new te,uc=new _a,Jr=new fi,Qr=new P,Ts=class extends Ne{constructor(t=new de,e=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;xu.copy(s).invert(),uc.copy(t.ray).applyMatrix4(xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);Qr.fromBufferAttribute(u,g),_u(Qr,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)Qr.fromBufferAttribute(u,p),_u(Qr,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _u(i,t,e,n,s,r,a){let o=uc.distanceSqToPoint(i);if(o<e){let l=new P;uc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var wn=class extends en{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new et:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new te;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends ur{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var jr=new P,sl=new Kc,rl=new Kc,al=new Kc,fc=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),c=jr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),sl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),rl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),al.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),al.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(sl.calc(l),rl.calc(l),al.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ox(i,t){let e=1-i;return e*e*t}function lx(i,t){return 2*(1-i)*i*t}function cx(i,t){return i*i*t}function nr(i,t,e,n){return ox(i,t)+lx(i,e)+cx(i,n)}function hx(i,t){let e=1-i;return e*e*e*t}function ux(i,t){let e=1-i;return 3*e*e*i*t}function dx(i,t){return 3*(1-i)*i*i*t}function fx(i,t){return i*i*i*t}function ir(i,t,e,n,s){return hx(i,t)+ux(i,e)+dx(i,n)+fx(i,s)}var Ra=class extends pn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends pn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y),ir(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ca=class extends pn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends pn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends pn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends pn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y),nr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vu(o,l.x,c.x,h.x,u.x),vu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:fc,CubicBezierCurve:Ra,CubicBezierCurve3:pc,EllipseCurve:ur,LineCurve:Ca,LineCurve3:mc,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:gc,SplineCurve:Ia}),_c=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xc[s.type]().fromJSON(s))}return this}},La=class extends _c{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ca(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Pa(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ra(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ur(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Da=class i extends de{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,d=new et,f=new P,p=new P,_=new P,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){let x=n+M*h*s,y=Math.sin(x),R=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);let w=l[3*T+0]*y,L=l[3*T+1],H=l[3*T+0]*R;c.push(w,L,H)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let y=x+M*t.length,R=y,T=y+t.length,w=y+t.length+1,L=y+1;r.push(R,T,L),r.push(w,L,T)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Re=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],g=n/2,m=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function M(){let y=new P,R=new P,T=0,w=(e-t)/n;for(let L=0;L<=r;L++){let H=[],v=L/r,b=v*(e-t)+t;for(let z=0;z<=s;z++){let F=z/s,V=F*l+o,J=Math.sin(V),B=Math.cos(V);R.x=b*J,R.y=-v*n+g,R.z=b*B,u.push(R.x,R.y,R.z),y.set(J,w,B).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-v),H.push(p++)}_.push(H)}for(let L=0;L<s;L++)for(let H=0;H<r;H++){let v=_[H][L],b=_[H+1][L],z=_[H+1][L+1],F=_[H][L+1];t>0&&(h.push(v,b,F),T+=3),e>0&&(h.push(b,z,F),T+=3)}c.addGroup(m,T,0),m+=T}function x(y){let R=p,T=new et,w=new P,L=0,H=y===!0?t:e,v=y===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),p++;let b=p;for(let z=0;z<=s;z++){let V=z/s*l+o,J=Math.cos(V),B=Math.sin(V);w.x=H*B,w.y=g*v,w.z=H*J,u.push(w.x,w.y,w.z),d.push(0,v,0),T.x=J*.5+.5,T.y=B*.5*v+.5,f.push(T.x,T.y),p++}for(let z=0;z<s;z++){let F=R+z,V=b+z;y===!0?h.push(V,V+1,F):h.push(V+1,V,F),L+=3}c.addGroup(m,L,y===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fi=class i extends Re{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ua=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new P,y=new P,R=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],y),f(e[T+2],R),l(x,y,R,M)}function l(M,x,y,R){let T=R+1,w=[];for(let L=0;L<=T;L++){w[L]=[];let H=M.clone().lerp(y,L/T),v=x.clone().lerp(y,L/T),b=T-L;for(let z=0;z<=b;z++)z===0&&L===T?w[L][z]=H:w[L][z]=H.clone().lerp(v,z/b)}for(let L=0;L<T;L++)for(let H=0;H<2*(T-L)-1;H++){let v=Math.floor(H/2);H%2===0?(d(w[L][v+1]),d(w[L+1][v]),d(w[L][v])):(d(w[L][v+1]),d(w[L+1][v+1]),d(w[L+1][v]))}}function c(M){let x=new P;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let M=new P;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let y=g(M)/2/Math.PI+.5,R=m(M)/Math.PI+.5;a.push(y,1-R)}p(),u()}function u(){for(let M=0;M<a.length;M+=6){let x=a[M+0],y=a[M+2],R=a[M+4],T=Math.max(x,y,R),w=Math.min(x,y,R);T>.9&&w<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){let y=M*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function p(){let M=new P,x=new P,y=new P,R=new P,T=new et,w=new et,L=new et;for(let H=0,v=0;H<r.length;H+=9,v+=6){M.set(r[H+0],r[H+1],r[H+2]),x.set(r[H+3],r[H+4],r[H+5]),y.set(r[H+6],r[H+7],r[H+8]),T.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),L.set(a[v+4],a[v+5]),R.copy(M).add(x).add(y).divideScalar(3);let b=g(R);_(T,v+0,M,b),_(w,v+2,x,b),_(L,v+4,y,b)}}function _(M,x,y,R){R<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=R/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Na=class i extends Ua{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var mi=class extends La{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new La().fromJSON(s))}return this}},px={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Zu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=vx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return dr(r,a,e,o,l,f,0),a}};function Zu(i,t,e,n,s){let r,a;if(s===Px(i,t,e,n)>0)for(r=t;r<e;r+=n)a=yu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=yu(r,i[r],i[r+1],a);return a&&Ka(a,a.next)&&(pr(a),a=a.next),a}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ka(e,e.next)||ve(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ex(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?gx(i,n,s,r):mx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),pr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=xx(Oi(i),t,e),dr(i,t,e,n,s,r,2)):a===2&&_x(i,t,e,n,s,r):dr(Oi(i),t,e,n,s,r,1);break}}}function mx(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&hs(s,o,r,l,a,c,p.x,p.y)&&ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ve(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=vc(f,p,t,e,n),M=vc(_,g,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&hs(o,h,l,u,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&hs(o,h,l,u,c,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&hs(o,h,l,u,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&hs(o,h,l,u,c,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function xx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ka(s,r)&&$u(s,n,n.next,r)&&fr(s,r)&&fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),pr(n),pr(n.next),n=i=r),n=n.next}while(n!==i);return Oi(n)}function _x(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ax(a,o)){let l=Ku(a,o);a=Oi(a,a.next),l=Oi(l,l.next),dr(a,t,e,n,s,r,0),dr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vx(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Zu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Tx(c));for(s.sort(yx),r=0;r<s.length;r++)e=Mx(s[r],e);return e}function yx(i,t){return i.x-t.x}function Mx(i,t){let e=Sx(i,t);if(!e)return t;let n=Ku(e,i);return Oi(n,n.next),Oi(e,e.next)}function Sx(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&hs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),fr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&bx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function bx(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Ex(i,t,e,n){let s=i;do s.z===0&&(s.z=vc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function vc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ax(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rx(i,t)&&(fr(i,t)&&fr(t,i)&&Cx(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Ka(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ka(i,t){return i.x===t.x&&i.y===t.y}function $u(i,t,e,n){let s=ea(ve(i,t,e)),r=ea(ve(i,t,n)),a=ea(ve(e,n,i)),o=ea(ve(e,n,t));return!!(s!==r&&a!==o||s===0&&ta(i,e,t)||r===0&&ta(i,n,t)||a===0&&ta(e,i,n)||o===0&&ta(e,t,n))}function ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ea(i){return i>0?1:i<0?-1:0}function Rx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Cx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ku(i,t){let e=new yc(i.i,i.x,i.y),n=new yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yu(i,t,e,n){let s=new yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var sr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mu(t),Su(n,t);let a=t.length;e.forEach(Mu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Su(n,e[l]);let o=px.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Fa=class i extends de{constructor(t=new mi([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ix,x,y=!1,R,T,w,L;m&&(x=m.getSpacedPoints(h),y=!0,d=!1,R=m.computeFrenetFrames(h,!1),T=new P,w=new P,L=new P),d||(g=0,f=0,p=0,_=0);let H=o.extractPoints(c),v=H.shape,b=H.holes;if(!sr.isClockWise(v)){v=v.reverse();for(let Q=0,C=b.length;Q<C;Q++){let it=b[Q];sr.isClockWise(it)&&(b[Q]=it.reverse())}}let F=sr.triangulateShape(v,b),V=v;for(let Q=0,C=b.length;Q<C;Q++){let it=b[Q];v=v.concat(it)}function J(Q,C,it){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(C,it)}let B=v.length,nt=F.length;function k(Q,C,it){let pt,ot,dt,Dt=Q.x-C.x,wt=Q.y-C.y,A=it.x-Q.x,S=it.y-Q.y,O=Dt*Dt+wt*wt,Z=Dt*S-wt*A;if(Math.abs(Z)>Number.EPSILON){let j=Math.sqrt(O),$=Math.sqrt(A*A+S*S),Pt=C.x-wt/j,xt=C.y+Dt/j,Tt=it.x-S/$,$t=it.y+A/$,I=((Tt-Pt)*S-($t-xt)*A)/(Dt*S-wt*A);pt=Pt+Dt*I-Q.x,ot=xt+wt*I-Q.y;let W=pt*pt+ot*ot;if(W<=2)return new et(pt,ot);dt=Math.sqrt(W/2)}else{let j=!1;Dt>Number.EPSILON?A>Number.EPSILON&&(j=!0):Dt<-Number.EPSILON?A<-Number.EPSILON&&(j=!0):Math.sign(wt)===Math.sign(S)&&(j=!0),j?(pt=-wt,ot=Dt,dt=Math.sqrt(O)):(pt=Dt,ot=wt,dt=Math.sqrt(O/2))}return new et(pt/dt,ot/dt)}let lt=[];for(let Q=0,C=V.length,it=C-1,pt=Q+1;Q<C;Q++,it++,pt++)it===C&&(it=0),pt===C&&(pt=0),lt[Q]=k(V[Q],V[it],V[pt]);let vt=[],_t,Zt=lt.concat();for(let Q=0,C=b.length;Q<C;Q++){let it=b[Q];_t=[];for(let pt=0,ot=it.length,dt=ot-1,Dt=pt+1;pt<ot;pt++,dt++,Dt++)dt===ot&&(dt=0),Dt===ot&&(Dt=0),_t[pt]=k(it[pt],it[dt],it[Dt]);vt.push(_t),Zt=Zt.concat(_t)}for(let Q=0;Q<g;Q++){let C=Q/g,it=f*Math.cos(C*Math.PI/2),pt=p*Math.sin(C*Math.PI/2)+_;for(let ot=0,dt=V.length;ot<dt;ot++){let Dt=J(V[ot],lt[ot],pt);rt(Dt.x,Dt.y,-it)}for(let ot=0,dt=b.length;ot<dt;ot++){let Dt=b[ot];_t=vt[ot];for(let wt=0,A=Dt.length;wt<A;wt++){let S=J(Dt[wt],_t[wt],pt);rt(S.x,S.y,-it)}}}let qt=p+_;for(let Q=0;Q<B;Q++){let C=d?J(v[Q],Zt[Q],qt):v[Q];y?(w.copy(R.normals[0]).multiplyScalar(C.x),T.copy(R.binormals[0]).multiplyScalar(C.y),L.copy(x[0]).add(w).add(T),rt(L.x,L.y,L.z)):rt(C.x,C.y,0)}for(let Q=1;Q<=h;Q++)for(let C=0;C<B;C++){let it=d?J(v[C],Zt[C],qt):v[C];y?(w.copy(R.normals[Q]).multiplyScalar(it.x),T.copy(R.binormals[Q]).multiplyScalar(it.y),L.copy(x[Q]).add(w).add(T),rt(L.x,L.y,L.z)):rt(it.x,it.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let C=Q/g,it=f*Math.cos(C*Math.PI/2),pt=p*Math.sin(C*Math.PI/2)+_;for(let ot=0,dt=V.length;ot<dt;ot++){let Dt=J(V[ot],lt[ot],pt);rt(Dt.x,Dt.y,u+it)}for(let ot=0,dt=b.length;ot<dt;ot++){let Dt=b[ot];_t=vt[ot];for(let wt=0,A=Dt.length;wt<A;wt++){let S=J(Dt[wt],_t[wt],pt);y?rt(S.x,S.y+x[h-1].y,x[h-1].x+it):rt(S.x,S.y,u+it)}}}Y(),at();function Y(){let Q=s.length/3;if(d){let C=0,it=B*C;for(let pt=0;pt<nt;pt++){let ot=F[pt];Ot(ot[2]+it,ot[1]+it,ot[0]+it)}C=h+g*2,it=B*C;for(let pt=0;pt<nt;pt++){let ot=F[pt];Ot(ot[0]+it,ot[1]+it,ot[2]+it)}}else{for(let C=0;C<nt;C++){let it=F[C];Ot(it[2],it[1],it[0])}for(let C=0;C<nt;C++){let it=F[C];Ot(it[0]+B*h,it[1]+B*h,it[2]+B*h)}}n.addGroup(Q,s.length/3-Q,0)}function at(){let Q=s.length/3,C=0;Et(V,C),C+=V.length;for(let it=0,pt=b.length;it<pt;it++){let ot=b[it];Et(ot,C),C+=ot.length}n.addGroup(Q,s.length/3-Q,1)}function Et(Q,C){let it=Q.length;for(;--it>=0;){let pt=it,ot=it-1;ot<0&&(ot=Q.length-1);for(let dt=0,Dt=h+g*2;dt<Dt;dt++){let wt=B*dt,A=B*(dt+1),S=C+pt+wt,O=C+ot+wt,Z=C+ot+A,j=C+pt+A;Ct(S,O,Z,j)}}}function rt(Q,C,it){l.push(Q),l.push(C),l.push(it)}function Ot(Q,C,it){Nt(Q),Nt(C),Nt(it);let pt=s.length/3,ot=M.generateTopUV(n,s,pt-3,pt-2,pt-1);Yt(ot[0]),Yt(ot[1]),Yt(ot[2])}function Ct(Q,C,it,pt){Nt(Q),Nt(C),Nt(pt),Nt(C),Nt(it),Nt(pt);let ot=s.length/3,dt=M.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);Yt(dt[0]),Yt(dt[1]),Yt(dt[3]),Yt(dt[1]),Yt(dt[2]),Yt(dt[3])}function Nt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Yt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xc[s.type]().fromJSON(s)),new i(n,t.options)}},Ix={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(d,1-p),new et(_,1-m)]:[new et(o,1-l),new et(h,1-u),new et(f,1-p),new et(g,1-m)]}};function Lx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Oa=class i extends Ua{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Bi=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],x=m/n,y=0;m===0&&a===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+y,1-x),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let x=h[m][M+1],y=h[m][M],R=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&f.push(x,y,T),(m!==n-1||l<Math.PI)&&f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gi=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let _=p/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let _=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,M=(s+1)*f+p;a.push(_,g,M),a.push(g,m,M)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ba=class extends me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ee=class extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var za=class extends En{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function na(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mc=class extends As{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bh:r=t,o=2*e-n;break;case Eh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:a=t,l=2*n-e;break;case Eh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+M*a[c+R]+x*a[l+R]+y*a[u+R];return r}},Sc=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},bc=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ca:e=this.InterpolantFactoryMethodDiscrete;break;case Yl:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Dx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ao,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Yl;var zi=class extends Tn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=ca;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends Tn{};Ec.prototype.ValueTypeName="color";var wc=class extends Tn{};wc.prototype.ValueTypeName="number";var Tc=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Sn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ka=class extends Tn{InterpolantFactoryMethodLinear(t){return new Tc(this.times,this.values,this.getValueSize(),t)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Tn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ca;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends Tn{};Ac.prototype.ValueTypeName="vector";var Rc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Ux=new Rc,Cc=class{constructor(t){this.manager=t!==void 0?t:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ha=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ol=new te,bu=new P,Eu=new P,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),Eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eu),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Pc=class extends mr{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=pa*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Va=class extends Rs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},wu=new te,js=new P,ll=new P,Ic=class extends mr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(t.matrixWorld),n.position.copy(js),ll.copy(n.position),ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}},Ga=class extends Rs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ic}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Lc=class extends mr{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wa=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Lc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Tu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Tu(){return performance.now()}var Jc="\\[\\]\\.:\\/",Nx=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",Fx="[^"+Jc.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Bx=/(WCOD+)?/.source.replace("WCOD",Fx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Hx=new RegExp("^"+Ox+Bx+zx+kx+"$"),Vx=["material","materials","bones","map"],Dc=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Dc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var N_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Ja=class extends pi{constructor(){super();let t=new Me;t.deleteAttribute("uv");let e=new ee({side:we}),n=new ee,s=new Ga(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ft(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ft(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new ft(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new ft(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ft(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ft(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ft(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new ft(t,Is(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new ft(t,Is(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let p=new ft(t,Is(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let _=new ft(t,Is(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let g=new ft(t,Is(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new ft(t,Is(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Is(i){let t=new ye;return t.color.setScalar(i),t}function He(i,t,e){return i<t?t:i>e?e:i}function Zn(i){return i<0?-1:i>0?1:0}var Qa=class{constructor(t){var n;this.spec=t;let e=t;this.m=e.mass,this.L=e.wheelbase,this.a=e.wheelbase*e.frontWeight,this.b=e.wheelbase-this.a,this.I=e.mass*((n=e.inertiaK)!=null?n:.95)*this.a*this.b*1.35,this.reset(0,0,0)}reset(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=0,this.vz=0,this.r=0,this.u=0,this.v=0,this.steer=0,this.gear=1,this.rpm=this.spec.idle,this.shiftTimer=0,this.ax=0,this.ay=0,this.slipF=0,this.slipR=0,this.spinR=0,this.lockR=0,this.frontSlide=0,this.rearSlide=0,this.wheelSpin=0,this.offroad=!1,this.lastHit=0}get speed(){return Math.hypot(this.vx,this.vz)}get kmh(){return this.speed*3.6}get beta(){return this.speed<1?0:Math.atan2(this.v,Math.abs(this.u))}torqueAt(t){var a;let e=this.spec,n=He(t/e.redline,0,1.05),s=(a=e.peakAt)!=null?a:.7,r;return n<s?r=.55+.45*Math.sin(n/s*Math.PI/2):r=1-.35*Math.pow((n-s)/(1.05-s),2),e.torque*r}step(t,e,n){var Ge,se,We,un,Bs,zs,Cn,Vi,ks,Hs,bi,Vs;let s=this.spec,r=(Ge=n.grip)!=null?Ge:1,a=Math.cos(this.h),o=Math.sin(this.h),l=this.vx*o+this.vz*a,c=this.vx*a-this.vz*o;this.u=l,this.v=c;let h=Math.hypot(l,c),u=1/(1+Math.max(0,Math.abs(l)-5)/(((se=s.steerFade)!=null?se:22)*(n.easy?1.35:1))),d=e.steer*s.steerMax*u,f=h>3?Math.atan2(c,Math.max(Math.abs(l),.5)):0;e.handbrake>.3||this.kickT>0?this.intent=1.6:Math.abs(f)>.2&&e.throttle>.3&&(this.intent||0)>0?this.intent=Math.max(this.intent,.6):l<12&&(this.intent=Math.max(this.intent||0,.3)),this.intent=Math.max(0,(this.intent||0)-t);let p=n.easy&&this.intent<=0;n.assist>0&&l>3&&(d+=He(f,-.9,.9)*.85*n.assist*(1-.5*Math.abs(e.steer))),d=He(d,-s.steerMax*1.25,s.steerMax*1.25);let _=7.5;this.steer+=He(d-this.steer,-_*t,_*t);let g=this.steer,m=s.gears,M=Ue=>Math.abs(l)/s.wheelRadius*m[Math.abs(Ue)-1]*s.finalDrive*60/(2*Math.PI);this.shiftTimer>0&&(this.shiftTimer-=t);let x=e.brake>.1&&e.throttle<.1&&l<1;this.gear===-1?e.throttle>.1&&l>-1&&(this.gear=1):x&&Math.abs(l)<.6&&this.revHold>.25&&(this.gear=-1),this.revHold=x&&Math.abs(l)<.6?(this.revHold||0)+t:0;let y=0;if(this.gear>0){let Ue=M(this.gear);n.manual?(e.shiftUp&&this.gear<m.length&&(this.gear++,this.shiftTimer=.12,y=1),e.shiftDown&&this.gear>1&&(this.gear--,this.shiftTimer=.12,y=-1)):this.shiftTimer<=0&&(Ue>s.redline*.9&&this.gear<m.length?(this.gear++,this.shiftTimer=.09,y=1):this.gear>1&&Math.abs(f)<.22&&this.spinR<.05&&M(this.gear-1)<s.redline*.62&&(this.gear--,this.shiftTimer=.12,y=-1))}let R=Math.abs(this.gear)-1,T=m[R]*s.finalDrive*(this.gear===-1?1.1:1),w=Math.abs(l)/s.wheelRadius*T*60/(2*Math.PI),L=this.shiftTimer>0?0:this.gear===-1?e.brake:e.throttle,H=Math.max(s.idle,w);this.spinR>.05&&(H=Math.max(H,s.idle+(s.redline*.9-s.idle)*(.6+.4*L)*Math.min(1,this.spinR*2))),Math.abs(l)<2&&L>0&&(H=Math.max(H,s.idle+(s.redline*.6-s.idle)*L)),this.rpm+=(H-this.rpm)*Math.min(1,t*12);let v=w>=s.redline;v?this.rpm=s.redline-150*Math.random():this.rpm=Math.min(this.rpm,s.redline*.97);let b=e.throttle;b<.2&&(this.liftT=(this.liftT||0)+t),((We=this.thrPrev)!=null?We:0)<.3&&b>.8&&(this.liftT||0)<.35&&(this.liftT||0)>.02&&l>6&&this.gear>0&&(this.kickT=.28),b>=.2&&(this.liftT=0),this.thrPrev=b,this.kickT>0&&(this.kickT-=t);let z=this.torqueAt(Math.max(this.rpm,s.idle))*L*(v?.1:1);L<.05&&Math.abs(l)>1&&(z=-s.torque*.12*He(this.rpm/s.redline,0,1));let F=z*T*.88/s.wheelRadius*(this.kickT>0?1.9:1);this.gear===-1&&(F=-Math.abs(F),l<-9&&(F=0)),z<0&&(F=Zn(l)*z*T*.88/s.wheelRadius);let V=((un=s.downforce)!=null?un:0)*h*h,J=s.cgHeight/this.L,B=this.m*9.81*this.b/this.L-this.m*this.ax*J+V*.45,nt=this.m*9.81*this.a/this.L+this.m*this.ax*J+V*.55;B=Math.max(B,this.m*9.81*.12),nt=Math.max(nt,this.m*9.81*.12);let k=this.offroad?.62:1,lt=s.muFront*r*k,vt=s.muRear*r*k,_t=(zs=(Bs=s.body)==null?void 0:Bs.track)!=null?zs:1.55,Zt=this.m*Math.abs(this.ay)*s.cgHeight/_t,qt=(Cn=s.rollFront)!=null?Cn:s.drive==="RWD"?.46:.56,Y=1-.14*Math.min(1,Zt*qt/(B/2))**2,at=1-.14*Math.min(1,Zt*(1-qt)/(nt/2))**2,Et=1;p&&(Et=1+.8*He((h-15)/30,0,1));let rt=lt*B*Y*Et,Ot=vt*nt*at*Et,Ct=0,Nt=0,Yt=s.drive==="AWD"?(Vi=s.awdFront)!=null?Vi:.35:s.drive==="FWD"?1:0;Ct+=F*Yt,Nt+=F*(1-Yt);let Q=this.gear===-1?e.throttle:e.brake,C=Q>0&&Math.abs(l)>.3?Q:0;if(C>0){let Ue=s.brakeForce*C;Ct+=-Zn(l)*Ue*.64,Nt+=-Zn(l)*Ue*.36}var it=e.handbrake;it>0&&Math.abs(l)>.5&&(Nt=-Zn(l)*Ot*.95*it+Nt*(1-it));let pt=Math.abs(f)<.1&&Math.abs(e.steer)<.3&&it<.1&&!(this.kickT>0)||p&&l>15;n.tcs!==!1&&pt&&F>0&&(Nt=Math.min(Nt,Ot*.97),Ct=Math.min(Ct,rt*.97)),this.spinR=0,this.lockR=0;let ot=0,dt=Math.abs(Nt)/Ot;dt>1&&(Zn(Nt)===Zn(F)&&F!==0&&!(it>.3)?this.spinR=He(dt-1+.35,0,1):this.lockR=1,Nt=Zn(Nt)*Ot*(this.spinR>0?.92:.98)),it>.3&&Math.abs(l)>.5&&(this.lockR=Math.max(this.lockR,it)),Math.abs(Ct)>rt&&(ot=1,Ct=Zn(Ct)*rt*.95);let Dt=(ks=s.tireB)!=null?ks:9,wt=(Hs=s.tireC)!=null?Hs:1.45,A=c+this.a*this.r,S=Math.cos(g),O=Math.sin(g),Z=l*S+A*O,j=-l*O+A*S,$=Math.atan2(j,Math.max(Math.abs(Z),.8)),Pt=c-this.b*this.r,xt=Math.atan2(Pt,Math.max(Math.abs(l),.8));this.slipF=$,this.slipR=xt;let Tt=rt*Math.sqrt(Math.max(.04,1-.85*Math.pow(Ct/rt,2))),$t=Ot*Math.sqrt(Math.max(.04,1-.85*Math.pow(Nt/Ot,2)));this.lockR>0&&($t*=1-.45*this.lockR);let I=-rt*Math.sin(wt*Math.atan(Dt*$)),W=-Ot*Math.sin(wt*Math.atan(Dt*xt));I=He(I,-Tt,Tt),W=He(W,-$t,$t);let ct=this.m*this.b/this.L,ut=this.m*this.a/this.L,ht=(Ue,Un,ti)=>He(Ue,-Math.abs(Un)*ti/t,Math.abs(Un)*ti/t);I=ht(I,j,ct),W=ht(W,Pt,ut),this.frontSlide=He(Math.abs($)/.25,0,1),this.rearSlide=He(Math.max(Math.abs(xt)/.2,this.spinR,this.lockR*(Math.abs(l)>3?1:0)),0,1);let kt=s.drag*l*Math.abs(l),Vt=((bi=s.rolling)!=null?bi:12)*l*(this.offroad?5:1),ne=Ct*S-I*O+Nt-kt-Vt,D=Ct*O+I*S+W-s.drag*2*c*Math.abs(c),mt=this.a*(I*S+Ct*O)-this.b*W;h<.3&&L<.05&&Math.abs(F)<1&&(this.vx*=.9,this.vz*=.9,this.r*=.8);let q=ne/this.m,tt=D/this.m;this.ax+=(He(q,-12,12)-this.ax)*Math.min(1,t*8),this.ay+=(He(tt,-14,14)-this.ay)*Math.min(1,t*8);let St=ne*o+D*a,At=ne*a-D*o;this.vx+=St/this.m*t,this.vz+=At/this.m*t,this.r+=mt/this.I*t,n.assist>0&&l>5&&Math.abs(e.steer)>.3&&Math.sign(e.steer)!==Math.sign(this.r)&&(Math.abs(f)>.12||this.rearSlide>.4)&&(this.r+=e.steer*3.2*t*n.assist*Math.min(1,l/15));let jt=Math.abs(f)>.15;if(n.assist>0&&Math.abs(f)>.2&&Math.abs(f)<1.2&&L>.5&&h>6){let Ue=3.2*n.assist*L*t/h;this.vx+=this.vx*Ue,this.vz+=this.vz*Ue}if(this.r*=1-Math.min(.5,((Vs=s.yawDamp)!=null?Vs:.6)*(jt?.4:1)*t),p&&l>12){let Ue=l*Math.tan(this.steer)/this.L*.95,Un=1.3+.9*He((l-15)/30,0,1),ti=9.81*Un/Math.max(l,1);this.r+=(He(Ue,-ti,ti)-this.r)*Math.min(1,5*t);let br=Math.abs(Ue)*l/9.81;if(br>Un&&L<.9){let G=Math.min(.5,(br-Un)*.9)*t;this.vx-=this.vx*G,this.vz-=this.vz*G}let Er=Math.min(1,3*t),wr=o,E=a,U=this.vx*wr+this.vz*E;this.vx+=(wr*U-this.vx)*Er*.5*He(Math.abs(f)/.3,0,1),this.vz+=(E*U-this.vz)*Er*.5*He(Math.abs(f)/.3,0,1)}n.assist>0&&Math.abs(f)>1.05&&l>2&&(this.r*=1-2.5*t*n.assist),this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t;let be=this.spinR>0?Math.max(Math.abs(l),25*this.spinR)*Zn(this.gear):this.lockR>.5?0:l;return this.wheelSpin+=be/s.wheelRadius*t,{shifted:y,limiter:v}}collideWall(t,e,n,s=.25){this.x+=t*n,this.z+=e*n;let r=this.vx*t+this.vz*e;if(r<0){let a=-e,o=t,l=this.vx*a+this.vz*o,c=-r*s,h=l*(1-Math.min(.5,Math.abs(r)*.04));this.vx=t*c+a*h,this.vz=e*c+o*h;let u=Math.sin(this.h),d=Math.cos(this.h),f=u*a+d*o;return this.r+=-f*r*.02,this.r*=.7,Math.abs(r)}return 0}};var $n=[{id:"kaze",name:"KAZE RS",tag:"\u042F\u043F\u043E\u043D\u0441\u043A\u043E\u0435 \u0434\u0440\u0438\u0444\u0442-\u043A\u0443\u043F\u0435",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u0437\u0430\u0434\u043D\u0435\u043F\u0440\u0438\u0432\u043E\u0434\u043D\u043E\u0435 \u043A\u0443\u043F\u0435. \u041B\u0435\u0433\u043A\u043E \u0441\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u043D\u043E\u0441 \u0438 \u0434\u0435\u0440\u0436\u0438\u0442 \u0443\u0433\u043E\u043B.",colors:["#e8e8e8","#d7263d","#1b98e0","#f4d35e","#2e2e2e","#7ae582"],hp:280,mass:1180,torque:330,redline:8e3,idle:900,peakAt:.72,cylinders:4,gears:[3.3,2.15,1.55,1.18,.95,.78],finalDrive:4.1,wheelRadius:.31,drive:"RWD",wheelbase:2.52,frontWeight:.52,cgHeight:.48,muFront:1.12,muRear:1,tireB:9,tireC:1.5,steerMax:.62,steerFade:26,brakeForce:13e3,drag:.42,downforce:.2,yawDamp:.5,body:{L:4.45,W:1.72,H:1.3,track:1.48,wheelF:1.3,wheelR:-1.22,upper:[[2.22,.36],[2.26,.56],[2.12,.69],[1.2,.8],[.55,.85],[-1.3,.88],[-1.75,.92],[-2.18,.9],[-2.25,.62],[-2.22,.36]],cabin:[[.52,.84],[-.15,1.3],[-.95,1.29],[-1.58,.9]],extras:["popups","ducktail"]}},{id:"bulldog",name:"BULLDOG V8",tag:"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043C\u0430\u0441\u043B\u043A\u0430\u0440",desc:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0437\u0430\u0434. \u0414\u044B\u043C\u0438\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435.",colors:["#f25c05","#111111","#0b3d91","#c1121f","#ffd166","#ffffff"],hp:480,mass:1560,torque:620,redline:6500,idle:750,peakAt:.55,cylinders:8,gears:[2.9,1.95,1.4,1.05,.82],finalDrive:3.55,wheelRadius:.34,drive:"RWD",wheelbase:2.8,frontWeight:.55,cgHeight:.52,muFront:1.08,muRear:.98,tireB:8.5,tireC:1.5,steerMax:.58,steerFade:24,brakeForce:15e3,drag:.5,downforce:.15,yawDamp:.55,body:{L:4.85,W:1.92,H:1.36,track:1.62,wheelF:1.5,wheelR:-1.3,upper:[[2.4,.38],[2.43,.7],[2.3,.82],[.7,.92],[.5,.93],[-1.6,.96],[-2.3,.99],[-2.42,.9],[-2.43,.45],[-2.4,.38]],cabin:[[.48,.92],[-.3,1.34],[-1,1.33],[-1.72,.95]],extras:["scoop","stripes"]}},{id:"veloce",name:"VELOCE GT",tag:"\u0421\u0440\u0435\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u044B\u0439 \u0441\u0443\u043F\u0435\u0440\u043A\u0430\u0440",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0438\u0436\u0438\u043C\u043D\u0430\u044F \u0441\u0438\u043B\u0430. \u0414\u0435\u0440\u0436\u0438\u0442 \u0434\u043E\u0440\u043E\u0433\u0443 \u043A\u0430\u043A \u043D\u0430 \u0440\u0435\u043B\u044C\u0441\u0430\u0445.",colors:["#e63946","#ffbe0b","#06d6a0","#3a86ff","#ffffff","#8338ec"],hp:640,mass:1420,torque:680,redline:8500,idle:1e3,peakAt:.75,cylinders:10,gears:[3.1,2.2,1.65,1.3,1.05,.86,.72],finalDrive:3.6,wheelRadius:.34,drive:"RWD",wheelbase:2.65,frontWeight:.42,cgHeight:.4,muFront:1.28,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:19e3,drag:.36,downforce:1.1,yawDamp:.8,body:{L:4.55,W:1.98,H:1.14,track:1.68,wheelF:1.38,wheelR:-1.27,upper:[[2.26,.3],[2.3,.46],[1.4,.62],[.9,.7],[-1.9,.95],[-2.26,.96],[-2.28,.4],[-2.25,.3]],cabin:[[.9,.69],[0,1.12],[-.6,1.12],[-1.9,.94]],extras:["wing","intakes"]}},{id:"tundra",name:"TUNDRA R",tag:"\u0420\u0430\u043B\u043B\u0438\u0439\u043D\u044B\u0439 \u0445\u044D\u0442\u0447\u0431\u0435\u043A",desc:"\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0430\u044F \u0431\u0430\u0437\u0430. \u041A\u043E\u0440\u043E\u043B\u044C \u0441\u043D\u0435\u0433\u0430 \u0438 \u0440\u0435\u0437\u043A\u0438\u0445 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432.",colors:["#0077b6","#ffffff","#e76f51","#2a9d8f","#f9c74f","#1d1d1d"],hp:330,mass:1300,torque:420,redline:7500,idle:900,peakAt:.6,cylinders:4,gears:[3,2.05,1.5,1.15,.9,.74],finalDrive:4.3,wheelRadius:.32,drive:"AWD",awdFront:.4,wheelbase:2.5,frontWeight:.56,cgHeight:.52,muFront:1.18,muRear:1.08,tireB:8.5,tireC:1.45,steerMax:.62,steerFade:24,brakeForce:14500,drag:.46,downforce:.35,yawDamp:.6,body:{L:4.05,W:1.8,H:1.46,track:1.55,wheelF:1.28,wheelR:-1.22,ride:.05,upper:[[2,.4],[2.03,.62],[1.86,.78],[1,.88],[.75,.9],[-1.9,.95],[-2.02,.9],[-2.03,.42],[-2,.4]],cabin:[[.73,.9],[.05,1.42],[-1.78,1.42],[-1.96,.95]],extras:["roofscoop","rallylights","mudflaps","roofwing"]}},{id:"ronin",name:"RONIN 34",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C",desc:"\u0422\u0443\u0440\u0431\u043E-\u043C\u043E\u0442\u043E\u0440 \u0438 \u0443\u043C\u043D\u044B\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434. \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u043F\u043E\u0441\u043B\u0443\u0448\u043D\u044B\u0439 \u0432 \u043B\u044E\u0431\u043E\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435.",colors:["#5e60ce","#c0c0c0","#101010","#d62828","#ffffff","#2b9348"],hp:520,mass:1480,torque:560,redline:8e3,idle:900,peakAt:.65,cylinders:6,gears:[3.2,2.1,1.55,1.2,.97,.8],finalDrive:3.9,wheelRadius:.33,drive:"AWD",awdFront:.3,wheelbase:2.66,frontWeight:.54,cgHeight:.47,muFront:1.2,muRear:1.14,tireB:9,tireC:1.45,steerMax:.58,steerFade:27,brakeForce:17e3,drag:.4,downforce:.6,yawDamp:.65,body:{L:4.6,W:1.86,H:1.34,track:1.58,wheelF:1.38,wheelR:-1.28,upper:[[2.3,.36],[2.33,.62],[2.2,.76],[.8,.86],[.6,.88],[-1.5,.9],[-2.2,1],[-2.31,.95],[-2.32,.4],[-2.3,.36]],cabin:[[.58,.88],[-.1,1.34],[-1,1.33],[-1.62,.92]],extras:["wing","roundtails"]}},{id:"vanta",name:"VANTA GTR",tag:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u0443\u043B\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0433\u043E\u043D\u044C",desc:"\u0421\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u043E\u0435 \u0433\u043E\u043D\u043E\u0447\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0441\u0438\u043D\u0438\u043C\u0438 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u2014 \u043E\u0431\u0440\u0430\u0437 \xAB\u0441\u0430\u043C\u043E\u0439 \u0440\u0430\u0437\u044B\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u043E\u0439\xBB \u043C\u0430\u0448\u0438\u043D\u044B. \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0438 \u0446\u0435\u043F\u043A\u043E\u0435.",colors:["#c9ced6","#1d3f8f","#111111","#e8e8e8","#b31b1b","#f2b400"],hp:470,mass:1350,torque:480,redline:8500,idle:900,peakAt:.72,cylinders:6,gears:[3.2,2.2,1.6,1.25,1,.84],finalDrive:3.9,wheelRadius:.33,drive:"RWD",wheelbase:2.73,frontWeight:.5,cgHeight:.46,muFront:1.2,muRear:1.12,tireB:9.5,tireC:1.45,steerMax:.58,steerFade:28,brakeForce:17e3,drag:.4,downforce:.55,yawDamp:.65,body:{L:4.5,W:1.9,H:1.34,track:1.6,wheelF:1.4,wheelR:-1.33,upper:[[2.25,.34],[2.28,.6],[2.1,.74],[.8,.84],[.62,.86],[-1.45,.9],[-2.1,.96],[-2.25,.92],[-2.26,.4],[-2.24,.34]],cabin:[[.6,.86],[-.1,1.34],[-1.05,1.33],[-1.55,.93]],extras:["wing","stripes"]}},{id:"kitsune",name:"KITSUNE RX",tag:"\u0420\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u043A\u0443\u043F\u0435 \u0438\u0437 \u0430\u043D\u0434\u0435\u0433\u0440\u0430\u0443\u043D\u0434\u0430",desc:"\u041B\u0451\u0433\u043A\u043E\u0435 \u043D\u0438\u0437\u043A\u043E\u0435 \u043A\u0443\u043F\u0435 \u0441 \u0444\u0430\u0440\u0430\u043C\u0438-\xAB\u0440\u0435\u0441\u043D\u0438\u0446\u0430\u043C\u0438\xBB \u0438 \u0440\u043E\u0442\u043E\u0440\u043D\u044B\u043C \u043C\u043E\u0442\u043E\u0440\u043E\u043C \u0434\u043E 9000 \u043E\u0431/\u043C\u0438\u043D. \u041E\u0431\u043E\u0436\u0430\u0435\u0442 \u0434\u0440\u0438\u0444\u0442.",colors:["#f2c500","#e8e8e8","#d7263d","#3a0ca3","#101010","#00b4d8"],hp:300,mass:1240,torque:320,redline:9e3,idle:1e3,peakAt:.8,cylinders:4,gears:[3.4,2.2,1.6,1.2,.96,.8],finalDrive:4.3,wheelRadius:.31,drive:"RWD",wheelbase:2.43,frontWeight:.5,cgHeight:.44,muFront:1.15,muRear:1.02,tireB:9,tireC:1.5,steerMax:.64,steerFade:26,brakeForce:13500,drag:.4,downforce:.25,yawDamp:.5,body:{L:4.3,W:1.76,H:1.2,track:1.48,wheelF:1.25,wheelR:-1.18,upper:[[2.15,.33],[2.18,.5],[1.9,.62],[.9,.74],[.55,.78],[-1.5,.86],[-2.05,.88],[-2.15,.62],[-2.14,.34]],cabin:[[.52,.78],[-.2,1.2],[-.8,1.2],[-1.6,.87]],extras:["popups","ducktail"]}},{id:"tora",name:"TORA MK4",tag:"\u0422\u0443\u0440\u0431\u043E-\u043A\u0443\u043F\u0435 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u0440\u044B\u043B\u043E\u043C",desc:"\u041F\u043B\u0430\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u0440\u044F\u0434\u043D\u0430\u044F \xAB\u0448\u0435\u0441\u0442\u0451\u0440\u043A\u0430\xBB \u0441 \u0442\u0443\u0440\u0431\u0438\u043D\u043E\u0439 \u0438 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0430\u043D\u0442\u0438\u043A\u0440\u044B\u043B\u043E. \u0412\u0437\u0440\u044B\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0433\u043E\u043D.",colors:["#ff6b00","#f2f2f2","#111111","#c1121f","#2d6a4f","#4361ee"],hp:560,mass:1460,torque:620,redline:7200,idle:850,peakAt:.62,cylinders:6,gears:[3,2,1.45,1.1,.88,.72],finalDrive:3.7,wheelRadius:.34,drive:"RWD",wheelbase:2.55,frontWeight:.53,cgHeight:.47,muFront:1.16,muRear:1.06,tireB:9,tireC:1.5,steerMax:.58,steerFade:26,brakeForce:16500,drag:.42,downforce:.45,yawDamp:.6,body:{L:4.5,W:1.82,H:1.28,track:1.56,wheelF:1.32,wheelR:-1.23,upper:[[2.25,.34],[2.28,.55],[2.05,.68],[.7,.8],[.5,.82],[-1.4,.88],[-2.1,.92],[-2.25,.7],[-2.24,.36]],cabin:[[.48,.82],[-.25,1.26],[-.95,1.25],[-1.5,.9]],extras:["wing","roundtails"]}},{id:"toro",name:"TORO V12",tag:"\u0421\u0443\u043F\u0435\u0440\u043A\u0430\u0440-\u043A\u043B\u0438\u043D",desc:"\u041E\u0441\u0442\u0440\u044B\u0439 \u043A\u043B\u0438\u043D \u0441 V12 \u0437\u0430 \u0441\u043F\u0438\u043D\u043E\u0439 \u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u043C. \u0421\u0430\u043C\u0430\u044F \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0433\u0430\u0440\u0430\u0436\u0435.",colors:["#9bd600","#ff9f1c","#ffdd00","#111111","#e5e5e5","#7209b7"],hp:740,mass:1550,torque:720,redline:8700,idle:1e3,peakAt:.78,cylinders:12,gears:[3.1,2.25,1.7,1.35,1.1,.9,.76],finalDrive:3.5,wheelRadius:.35,drive:"AWD",awdFront:.3,wheelbase:2.7,frontWeight:.43,cgHeight:.42,muFront:1.3,muRear:1.3,tireB:10,tireC:1.45,steerMax:.55,steerFade:30,brakeForce:2e4,drag:.36,downforce:1.2,yawDamp:.8,body:{L:4.6,W:2,H:1.12,track:1.7,wheelF:1.42,wheelR:-1.28,upper:[[2.3,.3],[2.32,.42],[1.2,.64],[.75,.7],[-1.95,.92],[-2.3,.9],[-2.31,.38],[-2.28,.3]],cabin:[[.75,.69],[-.15,1.1],[-.7,1.1],[-1.95,.9]],extras:["intakes","wing"]}},{id:"stutt",name:"STUTT 9",tag:"\u0417\u0430\u0434\u043D\u0435\u043C\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u0441\u043F\u043E\u0440\u0442\u043A\u0443\u043F\u0435",desc:"\u041A\u0440\u0443\u0433\u043B\u044B\u0435 \u0444\u0430\u0440\u044B, \u043F\u043E\u043A\u0430\u0442\u0430\u044F \u043A\u0440\u044B\u0448\u0430 \u0438 \u043C\u043E\u0442\u043E\u0440 \u0441\u0437\u0430\u0434\u0438. \u041E\u0442\u043B\u0438\u0447\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442 \u0438 \u0440\u0435\u0437\u043A\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0432\u043E\u0440\u043E\u0442.",colors:["#e9e4d8","#1b263b","#d00000","#fca311","#6a994e","#000000"],hp:450,mass:1420,torque:500,redline:8400,idle:900,peakAt:.74,cylinders:6,gears:[3.3,2.15,1.6,1.25,1.02,.86,.72],finalDrive:3.6,wheelRadius:.33,drive:"RWD",wheelbase:2.45,frontWeight:.39,cgHeight:.45,muFront:1.18,muRear:1.2,tireB:9.5,tireC:1.45,steerMax:.6,steerFade:28,brakeForce:18500,drag:.4,downforce:.4,yawDamp:.65,body:{L:4.35,W:1.85,H:1.28,track:1.56,wheelF:1.3,wheelR:-1.15,upper:[[2.17,.33],[2.2,.52],[2,.64],[1.1,.74],[.62,.8],[-1.2,.95],[-1.9,.9],[-2.15,.72],[-2.16,.36]],cabin:[[.6,.8],[-.05,1.26],[-.55,1.28],[-1.7,.92]],extras:["ducktail","roundlights"]}}];function Ju(i){let t=Math.min(1,i.hp/i.mass/.47),e=Math.min(1,i.torque*i.gears[0]*i.finalDrive/i.wheelRadius/i.mass/22),n=Math.min(1,((i.muFront+i.muRear)/2-.9)/.45+i.downforce*.2),s=Math.min(1,Math.max(.15,(i.drive==="RWD"?.55:.25)+(i.muFront-i.muRear)*2.2+(i.torque/i.mass-.25)*.8));return{top:t,accel:e,handling:n,drift:s}}function vi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new de,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Qu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let p=Qu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Qu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new pe(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let _=h.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function ju(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,x=o.length;M<x;M++){let y=o[M],R=i.attributes[y];l[y]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let T=i.morphAttributes[y];T&&(c[y]||(c[y]=[]),T.forEach((w,L)=>{let H=new w.array.constructor(w.count*w.itemSize);c[y][L]=new w.constructor(H,w.itemSize,w.normalized)}))}let f=t*.5,p=Math.log10(1/t),_=Math.pow(10,p),g=f*_;for(let M=0;M<r;M++){let x=n?n.getX(M):M,y="";for(let R=0,T=o.length;R<T;R++){let w=o[R],L=i.getAttribute(w),H=L.itemSize;for(let v=0;v<H;v++)y+=`${~~(L[u[v]](x)*_+g)},`}if(y in e)h.push(e[y]);else{for(let R=0,T=o.length;R<T;R++){let w=o[R],L=i.getAttribute(w),H=i.morphAttributes[w],v=L.itemSize,b=l[w],z=c[w];for(let F=0;F<v;F++){let V=u[F],J=d[F];if(b[J](a,L[V](x)),H)for(let B=0,nt=H.length;B<nt;B++)z[B][J](a,H[B][V](x))}}e[y]=a,h.push(a),a++}}let m=i.clone();for(let M in i.attributes){let x=l[M];if(m.setAttribute(M,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),M in c)for(let y=0;y<c[M].length;y++){let R=c[M][y];m.morphAttributes[M][y]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return m.setIndex(h),m}var xe=(i,t,e)=>i<t?t:i>e?e:i,jc=(i,t,e)=>i+(t-i)*e,xr=i=>i*i*(3-2*i);function Kn(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ja(i,t,e){let n=i*374761393+t*668265263+e*2147483647;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)/4294967296}function td(i,t,e=1){let n=Math.floor(i),s=Math.floor(t),r=xr(i-n),a=xr(t-s),o=ja(n,s,e),l=ja(n+1,s,e),c=ja(n,s+1,e),h=ja(n+1,s+1,e);return jc(jc(o,l,r),jc(c,h,r),a)}function th(i,t,e=1,n=4){let s=0,r=.5,a=1,o=0;for(let l=0;l<n;l++)s+=td(i*a,t*a,e+l*17)*r,o+=r,r*=.5,a*=2.03;return s/o}function eh(i,t=1){return td(i,.5,t)}function Ve(i,t){let e=new bt(t),n=i.index?i.toNonIndexed():i,s=n.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=e.r,r[a*3+1]=e.g,r[a*3+2]=e.b;return n.setAttribute("color",new pe(r,3)),n.attributes.uv&&n.deleteAttribute("uv"),n}function Rn(i,t,e,n={}){var o;let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let a=new wn(s);return a.colorSpace=ke,n.repeat&&(a.wrapS=a.wrapT=Wn),a.anisotropy=(o=n.aniso)!=null?o:4,a}function to(i){i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*10%10);return`${t}:${String(e).padStart(2,"0")}.${n}`}var eo=[{id:"desert",name:"\u041A\u0430\u043D\u044C\u043E\u043D \xAB\u0417\u0430\u043A\u0430\u0442\xBB",tag:"\u041F\u0443\u0441\u0442\u044B\u043D\u044F",desc:"\u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u0430\u0441\u0444\u0430\u043B\u044C\u0442, \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u0441\u043A\u0430\u043B\u044B \u0438 \u043A\u0430\u043A\u0442\u0443\u0441\u044B. \u0414\u043B\u0438\u043D\u043D\u044B\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0443\u0433\u0438.",grip:1,night:!1,weather:null,sky:{top:4029641,horizon:16171659,bottom:15180650},fog:{color:15381898,near:120,far:700},sun:{color:16773334,intensity:2.8,dir:[.5,.75,-.4]},hemi:{sky:16771532,ground:10119749,intensity:1.1},ground:{near:14065766,far:12614213,hills:26},road:{asphalt:"#55504b",line:"#f2c230",edge:"#eeeeee",halfWidth:6.5,shoulder:1.6,shoulderColor:"#b98a5a"},barrier:"tires",track:{minR:40,maxR:170,straight:[50,180],hill:9},props:["cactus","rock","mesa","bush"]},{id:"snow",name:"\u041F\u0435\u0440\u0435\u0432\u0430\u043B \xAB\u0410\u043B\u0430-\u0422\u043E\u043E\xBB",tag:"\u0417\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u044B\u0435 \u0433\u043E\u0440\u044B",desc:"\u0421\u043A\u043E\u043B\u044C\u0437\u043A\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430 \u0441\u0440\u0435\u0434\u0438 \u0435\u043B\u0435\u0439 \u0438 \u0432\u0435\u0440\u0448\u0438\u043D. \u041D\u0443\u0436\u043D\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C: \u0441\u0446\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043D\u0438\u0436\u0435.",grip:.74,night:!1,weather:"snow",sky:{top:7312324,horizon:14674162,bottom:15922938},fog:{color:14542575,near:60,far:460},sun:{color:16777215,intensity:2,dir:[-.4,.6,-.5]},hemi:{sky:15266047,ground:8952234,intensity:1.35},ground:{near:16054267,far:14673904,hills:40},road:{asphalt:"#5d6168",line:"#ffffff",edge:"#f2f2f2",halfWidth:6,shoulder:1.8,shoulderColor:"#e9eef4"},barrier:"rail",track:{minR:30,maxR:130,straight:[35,120],hill:14},props:["pine","pine","rock","peak"]},{id:"city",name:"\u041D\u0435\u043E\u043D-\u0421\u0438\u0442\u0438",tag:"\u041D\u043E\u0447\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",desc:"\u041D\u043E\u0447\u043D\u043E\u0439 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441: \u043D\u0435\u043E\u043D\u043E\u0432\u044B\u0435 \u0432\u044B\u0432\u0435\u0441\u043A\u0438, \u0444\u043E\u043D\u0430\u0440\u0438 \u0438 \u043D\u0435\u0431\u043E\u0441\u043A\u0440\u0451\u0431\u044B \u0432\u0434\u043E\u043B\u044C \u0442\u0440\u0430\u0441\u0441\u044B.",grip:.95,night:!0,weather:null,sky:{top:329231,horizon:2758469,bottom:657940},fog:{color:1708080,near:60,far:520},sun:{color:10466559,intensity:.55,dir:[.3,.8,.4]},hemi:{sky:5917338,ground:2105392,intensity:.9},ground:{near:2763315,far:1842212,hills:0},road:{asphalt:"#2c2c33",line:"#ffcc33",edge:"#dddddd",halfWidth:7.5,shoulder:1.4,shoulderColor:"#50505a"},barrier:"concrete",track:{minR:30,maxR:130,straight:[50,160],hill:3,corners:!0},props:["building","building","lamp","neon"]}];function Gx(){let i=[],t=new Re(.35,.4,4.5,7);t.translate(0,2.25,0),i.push(Ve(t,4160826));let e=new Re(.22,.25,1.6,6);e.translate(.8,2.6,0),i.push(Ve(e,4160826));let n=new Re(.22,.22,.9,6);n.rotateZ(Math.PI/2),n.translate(.45,1.9,0),i.push(Ve(n,4160826));let s=new Re(.2,.22,1.3,6);s.translate(-.75,3.1,0),i.push(Ve(s,4491071));let r=new Re(.2,.2,.8,6);return r.rotateZ(Math.PI/2),r.translate(-.4,2.5,0),i.push(Ve(r,4491071)),vi(i)}function Wx(i=10246971){let t=new Na(1.4,0),e=t.attributes.position,n=Kn(7);for(let s=0;s<e.count;s++)e.setXYZ(s,e.getX(s)*(.8+n()*.5),e.getY(s)*(.6+n()*.3),e.getZ(s)*(.8+n()*.5));return t.translate(0,.6,0),Ve(t,i)}function Xx(){let i=[],t=new Re(14,20,26,9);t.translate(0,13,0),i.push(Ve(t,11819066));let e=new Re(14.3,14.6,3,9);e.translate(0,22,0),i.push(Ve(e,13662799));let n=new Re(13,14,1.5,9);return n.translate(0,26.5,0),i.push(Ve(n,10242608)),vi(i)}function qx(){let i=new Oa(.7,0);return i.scale(1.2,.6,1.2),i.translate(0,.3,0),Ve(i,9076028)}function Yx(){let i=[],t=new Re(.2,.3,1.6,6);return t.translate(0,.8,0),i.push(Ve(t,5913899)),[[2.2,2.6,1.6],[1.7,2.3,3.2],[1.2,2,4.6],[.7,1.6,5.8]].forEach(([n,s,r],a)=>{let o=new Fi(n,s,7);o.translate(0,r,0),i.push(Ve(o,a%2?2051382:2382398));let l=new Fi(n*.72,s*.45,7);l.translate(0,r+s*.3,0),i.push(Ve(l,15857146))}),vi(i)}function Zx(){let i=[],t=new Fi(38,60,7);t.translate(0,30,0),i.push(Ve(t,7043208));let e=new Fi(17,27,7);return e.translate(0,46.6,0),i.push(Ve(e,16054524)),vi(i)}function $x(){let i=[],t=new Re(.1,.14,7,6);t.translate(0,3.5,0),i.push(Ve(t,3816004));let e=new Me(.12,.12,2.2);return e.translate(0,7,-1),i.push(Ve(e,3816004)),vi(i)}function ed(i){let t={};for(let e of new Set(i.props))e==="cactus"&&(t[e]=Gx()),e==="rock"&&(t[e]=Wx(i.id==="snow"?8226708:10246971)),e==="mesa"&&(t[e]=Xx()),e==="bush"&&(t[e]=qx()),e==="pine"&&(t[e]=Yx()),e==="peak"&&(t[e]=Zx()),e==="lamp"&&(t[e]=$x());return t}var cn=2,Ls=50,_r=1.45,nh=11,ih=3,sh=500,nd=400,no=class{constructor(t,e,n=1,s=1){this.scene=t,this.map=e,this.seed=n,this.quality=s,this.rnd=Kn(n*9301+49297),this.hw=e.road.halfWidth,this.sh=e.road.shoulder,this.wall=this.hw+this.sh+.35,this.pts=[],this.base=0,this.g={x:0,z:0,h:0,s:0,k:0,seg:{type:"straight",L:160,u:0,k:0,ramp:1}},this.chunks=new Map,this.root=new De,t.add(this.root),this.makeMaterials(),this.propGeo=ed(e),this.ensure(Ls*(nh+2))}newSegment(){if(this.queue&&this.queue.length)return this.queue.shift();let t=this.rnd,e=this.map.track,n=this.g,s=h=>({type:"straight",L:h,u:0,k:0,ramp:1}),r=(h,u,d,f)=>{Math.abs(f+d*u*.75)>_r&&(d=-d),Math.abs(f+d*u*.75)>_r&&(u=Math.max(.3,(_r-Math.abs(f))/.75));let p=u*h;return{seg:{type:"curve",L:p,u:0,k:d/h,ramp:Math.min(p*.3,22)},dh:d*u*.75,dir:d}},a=t()<.5?1:-1,o=t();if(o<.2)return s(e.straight[0]+t()*(e.straight[1]-e.straight[0]));if(o<.32){let h=e.minR*(1+t()*1.4),u=.5+t()*.7,d=r(h,u,a,n.h),f=r(h*(.8+t()*.5),u*(.8+t()*.4),-d.dir,n.h+d.dh);return this.queue=[s(4+t()*18),f.seg],d.seg}if(o<.4)return r(e.minR*(1+t()*.4),1.1+t()*.7,a,n.h).seg;if(o<.54){let h=r(e.maxR*(.5+t()*.4),.4+t()*.3,a,n.h),u=r(e.minR*(1+t()*.5),.6+t()*.6,h.dir,n.h+h.dh);return this.queue=[u.seg],h.seg}if(o<.64&&e.corners){let h=r(e.minR*(.9+t()*.3),1.45+t()*.25,a,n.h);return this.queue=[s(20+t()*50)],h.seg}let l=e.minR+Math.pow(t(),1.3)*(e.maxR-e.minR),c=r(l,.4+t()*1.3,a,n.h);return t()<.5&&(this.queue=[s(10+t()*50)]),c.seg}genPoint(){let t=this.g;t.seg.u>=t.seg.L&&(t.seg=this.newSegment());let e=t.seg,n=Math.min(e.u,e.L-e.u),s=e.k*xr(xe(n/e.ramp,0,1));t.h+=s*cn,t.h=xe(t.h,-_r-.1,_r+.1);let r=this.pts.length+this.base,a={x:t.x,z:t.z,h:t.h,k:s,s:t.s,i:r,y:this.map.track.hill*(eh(t.s*.0042,this.seed)*2-1)+(eh(t.s*.021,this.seed+5)-.5)*this.map.track.hill*.15,lx:Math.cos(t.h),lz:-Math.sin(t.h)};t.s<120&&(a.y*=t.s/120),this.pts.push(a),t.x+=Math.sin(t.h)*cn,t.z+=Math.cos(t.h)*cn,t.s+=cn,e.u+=cn}ensure(t){for(;this.base+this.pts.length<=t+2;)this.genPoint()}P(t){t=Math.round(t);let e=xe(t-this.base,0,this.pts.length-1);return this.pts[e]}get lastIdx(){return this.base+this.pts.length-1}sample(t,e={}){this.ensure(Math.ceil(t)+1);let n=Math.max(this.base,Math.floor(t)),s=xe(t-n,0,1),r=this.P(n),a=this.P(n+1);return e.x=r.x+(a.x-r.x)*s,e.y=r.y+(a.y-r.y)*s,e.z=r.z+(a.z-r.z)*s,e.h=r.h+(a.h-r.h)*s,e.k=r.k+(a.k-r.k)*s,e.lx=Math.cos(e.h),e.lz=-Math.sin(e.h),e.slope=(a.y-r.y)/cn,e}project(t,e,n){let s=xe(Math.round(n),this.base+1,this.lastIdx-2),r=M=>{let x=this.P(M);return(x.x-t)**2+(x.z-e)**2},a=r(s);for(let M=0;M<400;M++){let x=s+1<=this.lastIdx-1?r(s+1):1/0,y=s-1>=this.base?r(s-1):1/0;if(x<a)s++,a=x;else if(y<a)s--,a=y;else break}let o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((t-o.x)*c+(e-o.z)*h)/(c*c+h*h);u<0&&s>this.base&&(s--,o=this.P(s),l=this.P(s+1),c=l.x-o.x,h=l.z-o.z,u=((t-o.x)*c+(e-o.z)*h)/(c*c+h*h)),u=xe(u,0,1);let d=o.x+c*u,f=o.z+h*u,p=o.h+(l.h-o.h)*u,_=Math.cos(p),g=-Math.sin(p),m=(t-d)*_+(e-f)*g;return{idx:s+u,lat:m,y:o.y+(l.y-o.y)*u,h:p,lx:_,lz:g,slope:(l.y-o.y)/cn,k:o.k}}terrainY(t,e){let n=Math.abs(e),s=t.x+t.lx*e,r=t.z+t.lz*e,a=this.map.ground.hills,o=t.y,l=this.hw+this.sh;if(this.map.id==="city")return n>l+.4&&(o+=.18),o;n>l&&(o-=Math.min(.6,(n-l)*.25));let c=xr(xe((n-l-6)/70,0,1));return o+=c*a*(th(s*.008,r*.008,this.seed+11,4)*1.6-.35),o}makeMaterials(){let t=this.map,e=t.road,n=Rn(256,512,(c,h,u)=>{c.fillStyle=e.asphalt,c.fillRect(0,0,h,u);let d=Kn(3);for(let f=0;f<9e3;f++){let p=d();c.fillStyle=p<.5?"rgba(0,0,0,0.13)":"rgba(255,255,255,0.07)",c.fillRect(d()*h,d()*u,1+d()*2,1+d()*2)}c.fillStyle="rgba(0,0,0,0.12)",c.fillRect(h*.18,0,h*.1,u),c.fillRect(h*.72,0,h*.1,u),c.fillStyle=e.edge,c.fillRect(6,0,6,u),c.fillRect(h-12,0,6,u),c.fillStyle=e.line,c.fillRect(h/2-4,0,8,u*.5)},{repeat:!0,aniso:8});this.roadMat=new ee({map:n,roughness:t.night?.42:.88,metalness:t.night?.15:0,envMapIntensity:t.night?.8:.4});let s=Rn(32,64,(c,h,u)=>{c.fillStyle="#d42b2b",c.fillRect(0,0,h,u/2),c.fillStyle="#f2f2f2",c.fillRect(0,u/2,h,u/2)},{repeat:!0});if(this.kerbMat=new ee({map:s,roughness:.7}),this.shoulderMat=new Ze({color:e.shoulderColor}),this.terrainMat=new Ze({vertexColors:!0}),this.propMat=new Ze({vertexColors:!0,flatShading:!0}),t.barrier==="tires"){let c=Rn(128,64,(h,u,d)=>{for(let f=0;f<4;f++){h.fillStyle=f%2?"#e8e8e8":"#d63a2f",h.fillRect(f*32,0,32,d),h.fillStyle="rgba(0,0,0,0.85)";for(let p=0;p<3;p++)h.beginPath(),h.ellipse(f*32+16,p*21+11,12,8,0,0,Math.PI*2),h.fill()}},{repeat:!0});this.barrierMat=new Ze({map:c,side:Le})}else if(t.barrier==="rail")this.barrierMat=new ee({color:12107976,metalness:.7,roughness:.35,side:Le}),this.postMat=new Ze({color:5922662}),this.snowbankMat=new Ze({color:16185852,side:Le});else{let c=Rn(128,32,(h,u,d)=>{h.fillStyle="#8d8d95",h.fillRect(0,0,u,d),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(0,0,2,d),h.fillRect(64,0,2,d)},{repeat:!0});this.barrierMat=new Ze({map:c,side:Le}),this.neonMat=new ye({color:2680831}),this.neonMat2=new ye({color:16723622})}let r=c=>Rn(512,96,(h,u,d)=>{for(let f=0;f<u;f+=24)for(let p=0;p<d;p+=24)h.fillStyle=(f+p)/24%2?"#111":"#fff",h.fillRect(f,p,24,24);h.fillStyle="rgba(10,10,20,0.85)",h.fillRect(60,12,u-120,d-24),h.fillStyle="#ffd400",h.font="bold 54px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText(c,u/2,d/2+2)});this.gateMatCP=new ye({map:r("\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422"),side:Le}),this.gateMatStart=new ye({map:r("\u0421\u0422\u0410\u0420\u0422"),side:Le}),this.pillarMat=new ee({color:2236968,roughness:.6});let a=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];this.bannerRows=a.length;let o=Rn(512,512,(c,h,u)=>{a.forEach(([d,f,p],_)=>{let g=_*64;c.fillStyle=f,c.fillRect(0,g,h,64),c.fillStyle=p,c.fillRect(0,g,h,4),c.fillRect(0,g+60,h,4),c.font="italic 900 42px Arial",c.textAlign="center",c.textBaseline="middle",c.fillText(d,h/2,g+34)})});o.wrapS=Wn,this.bannerMat=new Ze({map:o,side:Le});let l=Rn(512,128,(c,h,u)=>{c.fillStyle="#3a3d46",c.fillRect(0,0,h,u);let d=Kn(77),f=["#e63946","#f1faee","#457b9d","#ffb703","#2a9d8f","#fb8500","#8338ec","#ffffff","#111111"];for(let p=0;p<5;p++){let _=14+p*23;c.fillStyle="#2b2d34",c.fillRect(0,_+12,h,11);for(let g=4;g<h;g+=9+d()*4)d()<.12||(c.fillStyle=f[Math.floor(d()*f.length)],c.fillRect(g,_+2,7,11),c.fillStyle=["#f1c27d","#c68642","#8d5524","#ffdbac"][Math.floor(d()*4)],c.beginPath(),c.arc(g+3.5,_-1,3.2,0,Math.PI*2),c.fill(),d()<.15&&(c.fillStyle="#ffd400",c.fillRect(g+5,_-9,2,8)))}},{repeat:!0});if(l.repeat.set(3,1),this.standMats=[l,l].map(c=>new Ze({map:c})),this.standGrey=new Ze({color:7040888}),this.roofMat=new Ze({color:14034984}),t.id==="city"){this.buildingMats=[0,1,2].map(d=>{let f=Rn(128,256,(p,_,g)=>{let m=["#20222c","#262033","#1d2a33"][d];p.fillStyle=m,p.fillRect(0,0,_,g);let M=Kn(100+d);for(let x=6;x<g-4;x+=12)for(let y=6;y<_-4;y+=12){let R=M()<.42;p.fillStyle=R?["#ffd98a","#fff2c4","#9fd8ff","#ffb36b"][Math.floor(M()*4)]:"#0c0d12",p.fillRect(y,x,7,8)}},{repeat:!0});return f.repeat.set(2,3),new Ze({map:f,emissiveMap:f,emissive:16777215,emissiveIntensity:.85})}),this.lampHeadMat=new ye({color:16769696});let c=Rn(128,128,(d,f,p)=>{let _=d.createRadialGradient(64,64,0,64,64,64);_.addColorStop(0,"rgba(255,210,140,0.55)"),_.addColorStop(1,"rgba(255,210,140,0)"),d.fillStyle=_,d.fillRect(0,0,f,p)});this.poolMat=new ye({map:c,transparent:!0,depthWrite:!1,blending:ms});let h=["RAMEN","HOTEL","24/7","DRIFT","\u041A\u0410\u0424\u0415","NEON","CLUB","\u0422\u0410\u041A\u0421\u0418","SUSHI","GARAGE","\u041A\u0418\u041D\u041E","TURBO"],u=["#ff2ea6","#28e7ff","#ffe600","#7cff4f","#ff7b1c","#b26bff"];this.neonSigns=h.map((d,f)=>new ye({map:Rn(256,96,(p,_,g)=>{p.fillStyle="#07070c",p.fillRect(0,0,_,g);let m=u[f%u.length];p.strokeStyle=m,p.lineWidth=5,p.strokeRect(6,6,_-12,g-12),p.shadowColor=m,p.shadowBlur=18,p.fillStyle=m,p.font="bold 56px Arial",p.textAlign="center",p.textBaseline="middle",p.fillText(d,_/2,g/2+3),p.fillText(d,_/2,g/2+3)}),side:Le}))}}update(t){let e=Math.floor(t/Ls);this.ensure((e+nh+1)*Ls+2);let n=0;for(let r=Math.max(0,e-ih);r<=e+nh;r++)if(!this.chunks.has(r)){if(n>=2&&r>e+2)break;this.buildChunk(r),n++}for(let[r,a]of this.chunks)r<e-ih&&(this.root.remove(a),a.traverse(o=>{o.geometry&&!o.userData.sharedGeo&&o.geometry.dispose(),o.isInstancedMesh&&o.dispose()}),this.chunks.delete(r));let s=(e-ih-2)*Ls;if(s>this.base+200){let r=s-this.base;this.pts.splice(0,r),this.base+=r}}ribbon(t,e,n,s,r,a=0,o){let l=[],c=[],h=[],u=[],d=n.length,f=0;for(let _=t;_<=e;_++){let g=this.P(_);for(let m=0;m<d;m++){let M=n[m];if(l.push(g.x+g.lx*M,s(g,M),g.z+g.lz*M),c.push(m/(d-1),g.s*a),r){let x=r(g,M);h.push(x.r,x.g,x.b)}}if(_>t&&!(o&&o(_-1))){let m=(f-1)*d,M=f*d;for(let x=0;x<d-1;x++)u.push(m+x,m+x+1,M+x,m+x+1,M+x+1,M+x)}f++}let p=new de;return p.setAttribute("position",new Qt(l,3)),p.setAttribute("uv",new Qt(c,2)),r&&p.setAttribute("color",new Qt(h,3)),p.setIndex(u),p.computeVertexNormals(),p}buildChunk(t){let e=t*Ls,n=e+Ls;this.ensure(n+2);let s=new De,r=this.map,a=this.hw,o=this.sh,l=m=>m.y,c=new ft(this.ribbon(e,n,[a,-a],m=>m.y+.02,null,1/12),this.roadMat);c.receiveShadow=!0,s.add(c);let h=m=>Math.abs(this.P(m).k)>1/170||Math.abs(this.P(m+1).k)>1/170;for(let m of[1,-1]){let M=m>0?[a+o,a]:[-a,-a-o],x=new ft(this.ribbon(e,n,M,(R,T)=>R.y+.035+(Math.abs(T)>a+.1?.03:0),null,1/4,R=>!h(R)),this.kerbMat);x.receiveShadow=!0,s.add(x);let y=new ft(this.ribbon(e,n,M,R=>R.y+.015,null,0,R=>h(R)),this.shoulderMat);y.receiveShadow=!0,s.add(y)}let u=new bt(r.ground.near),d=new bt(r.ground.far),f=new bt,p=(m,M)=>{let x=m.x+m.lx*M,y=m.z+m.lz*M,R=th(x*.05,y*.05,this.seed+3,2);return f.copy(u).lerp(d,xe(R*1.3-.15+Math.abs(M)/400,0,1)).clone()},_=a+o,g=[_,_+1.5,_+4,_+9,_+18,_+34,_+60,_+100,_+160,_+240];for(let m of[1,-1]){let M=m>0?g.slice().reverse():g.map(y=>-y),x=new ft(this.ribbon(e,n,M,(y,R)=>this.terrainY(y,R),p),this.terrainMat);x.receiveShadow=!0,s.add(x)}this.buildBarriers(s,e,n),this.buildBanners(s,t,e,n),this.buildProps(s,t,e,n);for(let m=e;m<n;m++)m===28&&(this.buildGate(s,m,this.gateMatStart),this.buildStands(s,m+12)),m>=nd&&(m-nd)%sh===0&&(this.buildGate(s,m,this.gateMatCP),this.buildStands(s,m-14));this.root.add(s),this.chunks.set(t,s)}buildBarriers(t,e,n){let s=this.wall,r=this.map;for(let a of[1,-1]){let o=a;if(r.barrier==="tires"){let l=this.ribbon(e,n,[o*s,o*s],(h,u)=>0,null,.3125);this.wallFromRibbon(l,e,n,o*s,0,1.05);let c=new ft(l,this.barrierMat);c.castShadow=!0,c.receiveShadow=!0,t.add(c)}else if(r.barrier==="rail"){let l=this.ribbon(e,n,[o*s,o*s],()=>0,null,.25);this.wallFromRibbon(l,e,n,o*s,.45,.8);let c=new ft(l,this.barrierMat);c.castShadow=!0,t.add(c);let h=Math.floor((n-e)/2),u=new Yn(new Me(.12,.85,.12),this.postMat,h);u.userData.sharedGeo=!1;let d=new te;for(let p=0;p<h;p++){let _=this.P(e+p*2);d.makeTranslation(_.x+_.lx*o*(s+.12),_.y+.42,_.z+_.lz*o*(s+.12)),u.setMatrixAt(p,d)}t.add(u);let f=new ft(this.ribbon(e,n,o>0?[s+3,s+1.6,s+.4]:[-s-.4,-s-1.6,-s-3],(p,_)=>p.y+(Math.abs(Math.abs(_)-s-1.6)<.1?.9:.05),null),this.snowbankMat);t.add(f)}else{let l=[[s,0],[s+.12,.3],[s+.18,.85],[s+.32,.85],[s+.4,.3],[s+.45,0]],c=this.sweep(e,n,l.map(([d,f])=>[o*d,f]),1/6),h=new ft(c,this.barrierMat);h.castShadow=!0,h.receiveShadow=!0,t.add(h);let u=new ft(this.ribbon(e,n,o>0?[s+.3,s+.2]:[-s-.2,-s-.3],d=>d.y+.87,null),o>0?this.neonMat:this.neonMat2);t.add(u)}}}sweep(t,e,n,s=0){let r=[],a=[],o=[],l=n.length,c=0;for(let u=t;u<=e;u++,c++){let d=this.P(u);if(n.forEach(([f,p],_)=>{r.push(d.x+d.lx*f,d.y+p,d.z+d.lz*f),a.push(d.s*s,_/(l-1))}),u>t){let f=(c-1)*l,p=c*l;for(let _=0;_<l-1;_++)o.push(f+_,f+_+1,p+_,f+_+1,p+_+1,p+_)}}let h=new de;return h.setAttribute("position",new Qt(r,3)),h.setAttribute("uv",new Qt(a,2)),h.setIndex(o),h.computeVertexNormals(),h}wallFromRibbon(t,e,n,s,r,a){let o=t.attributes.position,l=0;for(let h=e;h<=n;h++,l++){let u=this.P(h);o.setY(l*2,u.y+a),o.setY(l*2+1,u.y+r)}let c=t.attributes.uv;for(let h=0;h<c.count;h++)c.setX(h,h%2);for(let h=0;h<c.count;h++){let u=c.getX(h),d=c.getY(h);c.setXY(h,d,u)}t.computeVertexNormals()}clearOfRoad(t,e,n,s){let r=(this.wall+s)**2;for(let a=Math.max(this.base,n-90);a<=Math.min(this.lastIdx,n+90);a+=3){let o=this.P(a);if((o.x-t)**2+(o.z-e)**2<r)return!1}return!0}buildProps(t,e,n,s){let r=this.map,a=Kn(this.seed*1e3+e*7919),o=new te,l=new Sn,c=new P,h=new P,u=new P(0,1,0),d=(f,p,_,g,m,M,x=3,y=!0)=>{let R=this.propGeo[f];if(!R)return;let T=[];for(let L=0;L<p*3&&T.length<p;L++){let H=n+Math.floor(a()*(s-n)),v=this.P(H),z=(a()<.5?-1:1)*(_+a()*(g-_)),F=v.x+v.lx*z,V=v.z+v.lz*z;if(!this.clearOfRoad(F,V,H,x))continue;let J=m+a()*(M-m);l.setFromAxisAngle(u,a()*Math.PI*2),c.set(J,J*(.85+a()*.3),J),h.set(F,this.terrainY(v,z)-.1,V),T.push(o.compose(h,l,c).clone())}if(!T.length)return;let w=new Yn(R,this.propMat,T.length);w.userData.sharedGeo=!0,T.forEach((L,H)=>w.setMatrixAt(H,L)),w.castShadow=y&&this.quality>0,w.receiveShadow=!1,t.add(w)};r.id==="desert"?(d("cactus",8,this.wall+3,70,.8,1.5),d("bush",8,this.wall+2,60,.7,1.6,2,!1),d("rock",8,this.wall+4,110,.6,3.2),a()<.8&&d("mesa",1,150,240,.7,1.7,60,!1)):r.id==="snow"?(d("pine",22,this.wall+3,110,.8,1.6),d("rock",6,this.wall+3,80,.6,2.2),a()<.9&&d("peak",1,170,250,.8,1.8,90,!1)):r.id==="city"&&this.buildCity(t,e,n,s,a)}buildCity(t,e,n,s,r){let a=new Me(1,1,1);a.translate(0,.5,0);let o=[[],[],[]],l=new te,c=new Sn,h=new P,u=new P,d=new P(0,1,0),f=[];for(let x of[1,-1]){let y=n+Math.floor(r()*3);for(;y<s;){let R=this.P(y),T=10+r()*10,w=12+r()*14,L=14+Math.pow(r(),1.6)*80,H=x*(this.wall+8+w/2+r()*6),v=R.x+R.lx*H,b=R.z+R.lz*H;this.clearOfRoad(v,b,y,w/2+4)&&(c.setFromAxisAngle(d,R.h),h.set(T,L,w),u.set(v,R.y,b),o[Math.floor(r()*3)].push(l.compose(u,c,h).clone()),r()<.45&&f.push({p:R,off:H-x*(w/2+.3),y:R.y+6+r()*Math.min(20,L-10),side:x,w:6+r()*3})),y+=Math.ceil((T+3)/cn)}}o.forEach((x,y)=>{if(!x.length)return;let R=new Yn(a,this.buildingMats[y],x.length);x.forEach((T,w)=>R.setMatrixAt(w,T)),R.userData.sharedGeo=!1,t.add(R)});let p=new Te(1,1);for(let x of f){let y=this.neonSigns[Math.floor(r()*this.neonSigns.length)],R=new ft(p,y);R.userData.sharedGeo=!0,R.scale.set(x.w,x.w*.375,1),R.position.set(x.p.x+x.p.lx*x.off,x.y,x.p.z+x.p.lz*x.off),R.rotation.y=x.p.h+(x.side>0?-Math.PI/2:Math.PI/2),t.add(R)}let _=this.propGeo.lamp,g=[],m=[],M=[];for(let x=n+e%2*7;x<s;x+=15){let y=this.P(x),R=(x/15|0)%2?1:-1,T=R*(this.wall+.9);c.setFromAxisAngle(d,y.h+(R>0?-Math.PI/2:Math.PI/2)),u.set(y.x+y.lx*T,y.y,y.z+y.lz*T),h.set(1,1,1),g.push(l.compose(u,c,h).clone());let w=T-R*2;m.push(new te().makeTranslation(y.x+y.lx*w,y.y+6.9,y.z+y.lz*w));let L=T-R*3.5;M.push({x:y.x+y.lx*L,y:y.y+.05,z:y.z+y.lz*L})}if(g.length){let x=new Yn(_,this.propMat,g.length);x.userData.sharedGeo=!0,g.forEach((L,H)=>x.setMatrixAt(H,L)),t.add(x);let y=new Me(.5,.15,.9),R=new Yn(y,this.lampHeadMat,m.length);m.forEach((L,H)=>R.setMatrixAt(H,L)),t.add(R);let T=new Te(11,11);T.rotateX(-Math.PI/2);let w=new Yn(T,this.poolMat,M.length);M.forEach((L,H)=>w.setMatrixAt(H,new te().makeTranslation(L.x,L.y,L.z))),w.renderOrder=1,t.add(w)}}buildBanners(t,e,n,s){let r=Kn(this.seed*31+e*101),a={tires:1.1,rail:.85,concrete:.9}[this.map.barrier],o=[],l=[],c=[],h=this.bannerRows;for(let d=n;d+3<=s;d+=4){if(r()<.45)continue;let f=r()<.5?1:-1,p=Math.floor(r()*h),_=1-(p+1)/h,g=1-p/h,m=f*(this.wall+.05),M=o.length/3;for(let x=0;x<=3;x++){let y=this.P(d+x),R=y.x+y.lx*m,T=y.z+y.lz*m;o.push(R,y.y+a,T,R,y.y+a+.75,T);let w=f>0?x/3:1-x/3;l.push(w,_,w,g)}for(let x=0;x<3;x++){let y=M+x*2;c.push(y,y+2,y+1,y+1,y+2,y+3)}}if(!o.length)return;let u=new de;u.setAttribute("position",new Qt(o,3)),u.setAttribute("uv",new Qt(l,2)),u.setIndex(c),u.computeVertexNormals(),t.add(new ft(u,this.bannerMat))}buildStands(t,e){let n=this.P(e);for(let s of[1,-1]){let r=s*(this.wall+7.5),a=n.x+n.lx*r,o=n.z+n.lz*r;if(!this.clearOfRoad(a,o,e,5.5))continue;let l=[this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey,this.standGrey];l[s>0?1:0]=this.standMats[0];let c=new ft(new Me(8,5,34),l);c.position.set(a,n.y+2.5,o),c.rotation.y=n.h,c.castShadow=!0,t.add(c);let h=new ft(new Me(9.5,.3,35),this.roofMat);h.position.set(a-n.lx*s*.6,n.y+7.2,o-n.lz*s*.6),h.rotation.y=n.h,h.rotation.z=s*.08,t.add(h);for(let u of[-16,0,16]){let d=new ft(new Me(.25,2.3,.25),this.pillarMat);d.position.set(a-n.lx*s*4.3+Math.sin(n.h)*u,n.y+6,o-n.lz*s*4.3+Math.cos(n.h)*u),t.add(d)}}}buildGate(t,e,n){let s=this.P(e),r=this.wall+.5,a=new Me(.6,6.5,.6);for(let l of[1,-1]){let c=new ft(a,this.pillarMat);c.position.set(s.x+s.lx*l*r,s.y+3.25,s.z+s.lz*l*r),c.rotation.y=s.h,c.castShadow=!0,t.add(c)}let o=new ft(new Te(r*2,r*2*96/512),n);o.position.set(s.x,s.y+6.2,s.z),o.rotation.y=s.h+Math.PI,t.add(o)}};var rh=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},It={glass:new ee({color:1779251,roughness:.05,metalness:.2,transparent:!0,opacity:.55,envMapIntensity:1.4,depthWrite:!1}),black:new ee({color:1184276,roughness:.65}),gloss:new ee({color:789518,roughness:.25,metalness:.3}),trim:new ee({color:1973794,roughness:.6,metalness:.05}),chrome:new ee({color:15132908,roughness:.12,metalness:1}),tire:new ee({color:1644827,roughness:.92}),disc:new ee({color:7829628,roughness:.35,metalness:.9}),interior:new ee({color:1710621,roughness:.8}),seat:new ee({color:2763312,roughness:.75}),carbon:new ee({color:1710879,roughness:.3,metalness:.5}),lensClear:new ee({color:16777215,roughness:.02,transparent:!0,opacity:.25,depthWrite:!1}),reverse:new ee({color:14540253,emissive:16777215,emissiveIntensity:.1,roughness:.2}),amber:new ee({color:16751130,emissive:16746496,emissiveIntensity:.4,roughness:.3})},id={kaze:{spokes:6,rim:14277340,caliper:14034984,rimDepth:.06,plate:"01 KG 086 AE"},bulldog:{spokes:5,rim:13225170,caliper:2763306,rimDepth:.03,plate:"01 KG 069 V8",chromeBumpers:!0},veloce:{spokes:10,rim:2105636,caliper:16761856,rimDepth:.02,plate:"01 KG 777 GT"},tundra:{spokes:8,rim:15856113,caliper:14034984,rimDepth:.04,plate:"01 KG 555 RR",cage:!0},ronin:{spokes:6,rim:7172214,caliper:2060256,rimDepth:.05,plate:"01 KG 034 GR"},vanta:{spokes:7,rim:12106948,caliper:1916815,rimDepth:.04,plate:"01 KG 005 MW"},kitsune:{spokes:5,rim:2829102,caliper:16761856,rimDepth:.05,plate:"01 KG 013 RX"},tora:{spokes:5,rim:14080220,caliper:14034984,rimDepth:.07,plate:"01 KG 002 JZ"},toro:{spokes:10,rim:1842207,caliper:16747520,rimDepth:.02,plate:"01 KG 012 LP"},stutt:{spokes:5,rim:13225170,caliper:16764928,rimDepth:.03,plate:"01 KG 911 SS"}};function Kx(i,t=2){for(let e=0;e<t;e++){let n=[i[0]];for(let s=0;s<i.length-1;s++){let r=i[s],a=i[s+1];n.push([r[0]*.75+a[0]*.25,r[1]*.75+a[1]*.25]),n.push([r[0]*.25+a[0]*.75,r[1]*.25+a[1]*.75])}n.push(i[i.length-1]),i=n}return i}function Jx(i,t,e){var l;let n=new mi,s=i[i.length-1][1];n.moveTo(i[0][0],i[0][1]);for(let c=1;c<i.length;c++)n.lineTo(i[c][0],i[c][1]);let r=e+.08,a=e+((l=t.ride)!=null?l:0),o=c=>{n.lineTo(c-r,s),n.lineTo(c-r,Math.min(a,s+.02)),n.absarc(c,a,r,Math.PI,0,!0),n.lineTo(c+r,s)};return o(t.wheelR),o(t.wheelF),n.lineTo(i[0][0],s),n.closePath(),n}function io(i,t,e,n=3){let s=new Fa(i,{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:n,curveSegments:14});s.rotateY(-Math.PI/2),s.computeBoundingBox();let r=s.boundingBox;return s.translate(-(r.min.x+r.max.x)/2,0,0),s}function sd(i,t){let e=i.attributes.position,n=new P;for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);i.computeVertexNormals()}function Wt(i,t,e,n,s,r,a,o){let l=new ft(new Me(i,t,e),n);return l.position.set(s,r,a),l.castShadow=!0,o&&o.add(l),l}function Be(i,t,e,n,s,r,a,o,l=16){let c=new Re(i,i,t,l);a==="x"?c.rotateZ(Math.PI/2):a==="z"&&c.rotateX(Math.PI/2);let h=new ft(c,e);return h.position.set(n,s,r),o&&o.add(h),h}function Jn(i,t,e,n,s,r=!1){let a=i.distanceTo(t),o=r?new Re(e,e,a,8).rotateX(Math.PI/2):new Me(e,e,a),l=new ft(o,n);return l.position.copy(i).add(t).multiplyScalar(.5),l.lookAt(t),s.add(l),l}function vr(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new wn(n);return s.colorSpace=ke,s.anisotropy=4,s}var Ce={};function Qx(){return Ce.grille||(Ce.grille=vr(128,64,(i,t,e)=>{i.fillStyle="#050505",i.fillRect(0,0,t,e),i.strokeStyle="#3a3a3e",i.lineWidth=2;for(let n=0;n<e+8;n+=8)for(let s=n/8%2?0:5;s<t+10;s+=10){i.beginPath();for(let r=0;r<6;r++){let a=r*Math.PI/3;i.lineTo(s+Math.cos(a)*4,n+Math.sin(a)*4)}i.closePath(),i.stroke()}}))}function jx(i){var t;return Ce[t="p"+i]||(Ce[t]=vr(256,56,(e,n,s)=>{e.fillStyle="#f4f4f4",e.fillRect(0,0,n,s),e.strokeStyle="#111",e.lineWidth=4,e.strokeRect(2,2,n-4,s-4),e.fillStyle="#d0021b",e.fillRect(6,6,34,s-12),e.fillStyle="#ffd400",e.beginPath(),e.arc(23,22,8,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",23,45),e.fillStyle="#111",e.font="bold 34px Arial",e.textBaseline="middle",e.fillText(i.slice(6),150,30),e.font="bold 26px Arial",e.fillText(i.slice(0,2),62,30)}))}function t_(i,t){var e;return Ce[e="n"+i+t]||(Ce[e]=vr(128,128,n=>{n.fillStyle=t?"#111":"#fff",n.beginPath(),n.arc(64,64,58,0,Math.PI*2),n.fill(),n.fillStyle=t?"#fff":"#111",n.font="bold 70px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(String(i),64,68)}))}var rd=[["ASMAN OIL","#ffd400","#111"],["NITRO-X","#111","#39ff14"],["\u0422\u0423\u0420\u0411\u041E KG","#d62828","#fff"],["DRIFT LAB","#fff","#111"],["TOKMOK TIRES","#111","#ffcc00"],["ALA-TOO","#1d3f8f","#fff"],["KAZE WORKS","#f2f2f2","#d62828"],["BISHKEK MS","#00a86b","#fff"]];function e_(i){var s;let[t,e,n]=rd[i%rd.length];return Ce[s="s"+i]||(Ce[s]=vr(256,64,(r,a,o)=>{r.fillStyle=e,r.beginPath(),r.roundRect?r.roundRect(2,2,a-4,o-4,14):r.rect(2,2,a-4,o-4),r.fill(),r.strokeStyle=n,r.lineWidth=3,r.stroke(),r.fillStyle=n,r.font="italic 900 36px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(t,a/2,o/2+2)}))}function n_(i){var t;return Ce[t="b"+i]||(Ce[t]=vr(512,48,(e,n,s)=>{e.fillStyle="#0d0d10",e.fillRect(0,0,n,s),e.fillStyle="#fff",e.font="italic 900 34px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(i,n/2,s/2+2)}))}function i_(){if(Ce.ramp)return Ce.ramp;let i=new Uint8Array([90,90,90,255,170,170,170,255,235,235,235,255,255,255,255,255]),t=new cr(i,4,1,ln);return t.minFilter=t.magFilter=Je,t.needsUpdate=!0,Ce.ramp=t}function s_(){return Ce.ao||(Ce.ao=(()=>{let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(32,64,8,32,64,64);return e.addColorStop(0,"rgba(0,0,0,0.8)"),e.addColorStop(.6,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,128),new wn(i)})())}function ad(i){i.updateMatrixWorld(!0);let t=new te().copy(i.matrixWorld).invert(),e=new Map,n=[],s=[];i.traverse(a=>{a.isMesh&&n.push(a)});let r=new te;for(let a of n){let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let c of Object.keys(o.attributes))["position","normal","uv"].includes(c)||o.deleteAttribute(c);o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new Qt(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(r.multiplyMatrices(t,a.matrixWorld));let l=a.material.uuid;e.has(l)||e.set(l,{mat:a.material,list:[],order:a.renderOrder}),e.get(l).list.push(o),a.parent.remove(a),a.geometry.dispose()}for(let{mat:a,list:o,order:l}of e.values()){let c=vi(o);o.forEach(u=>u.dispose());let h=new ft(c,a);h.renderOrder=l,h.castShadow=a!==It.lensClear&&!(a.transparent&&a!==It.glass),h.receiveShadow=a!==It.glass,i.add(h),s.push(h)}return s}var od=new me({side:we,uniforms:{t:{value:.022}},vertexShader:"uniform float t; void main(){ vec3 p = position + normal * t; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.03, 0.03, 0.045, 1.0); }"});function ld(i,t){let e=i.geometry.clone();e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=ju(e,.001),e.computeVertexNormals();let n=t?od.clone():od;t&&(n.uniforms.t.value=t);let s=new ft(e,n);s.position.copy(i.position),s.quaternion.copy(i.quaternion),i.parent.add(s)}function r_(i,t,e,n){let s=new De,r=t/2,a=[[i*.7,-r*.96],[i*.86,-r],[i*.95,-r*.92],[i*.995,-r*.6],[i,-r*.2],[i,r*.2],[i*.995,r*.6],[i*.95,r*.92],[i*.86,r],[i*.7,r*.96]],o=new Da(a.map(([p,_])=>new et(p,_)),28);o.rotateZ(Math.PI/2);let l=new ft(o,It.tire);l.castShadow=!0,s.add(l);let c=new ee({color:e.rim,roughness:.3,metalness:.6}),h=new ft(new Re(i*.7,i*.7,t*.92,24,1,!0).rotateZ(Math.PI/2),new ee({color:3816255,metalness:.8,roughness:.4,side:Le}));s.add(h);let u=n*(r*.82-e.rimDepth),d=new ft(new gi(i*.69,.018,6,28).rotateY(Math.PI/2),c);d.position.x=n*r*.86,s.add(d),Be(i*.56,.035,It.disc,-n*.02,0,0,"x",s,24),Be(i*.2,.06,It.trim,-n*.01,0,0,"x",s,12);let f=e.spokes;for(let p=0;p<f;p++){let _=p/f*Math.PI*2,g=new ft(new Me(.035,i*.52,f>8?.035:.06),c);g.position.set(u,Math.cos(_)*i*.42,Math.sin(_)*i*.42),g.rotation.x=_,s.add(g)}Be(i*.17,.06,c,u,0,0,"x",s,16);for(let p=0;p<5;p++){let _=p/5*Math.PI*2;Be(.014,.05,It.chrome,u+n*.03,Math.cos(_)*i*.1,Math.sin(_)*i*.1,"x",s,6)}return Be(i*.055,.07,It.gloss,u+n*.02,0,0,"x",s,12),s}function ah(i,t,e={}){var $,Pt,xt,Tt,$t;let n=i.body,s=i.wheelRadius,r=id[i.id]||id.kaze,a=new De,o=new za({color:t,gradientMap:i_()}),l=new bt(t).getHSL({}).l>.6,c=new ee({color:i.id==="vanta"?1920952:l?1315860:15921906,roughness:.4}),h=n.L,u=n.W,d=Kx(n.upper,2),f=h/2,p=n.cabin[0][1],_=(I,W)=>(1-.085*rh(.55,1.02,Math.abs(I)/f))*(1-.07*rh(p-.3,p+.05,W)),g=io(Jx(d,n,s),u,.07,3);sd(g,I=>{I.x*=_(I.z,I.y)});let m=new ft(g,o);m.castShadow=!0,m.receiveShadow=!0,a.add(m);let M=(I,W)=>u/2*_(I,W),x=n.cabin,y=u*.84,R=Math.max(x[1][1],x[2][1]),T=I=>1-.2*rh(p,R,I),w=new mi;w.moveTo(x[0][0]+.06,x[0][1]-.06);for(let I=0;I<x.length;I++)w.lineTo(x[I][0],x[I][1]);w.lineTo(x[x.length-1][0]+.06,x[x.length-1][1]-.06),w.closePath();let L=io(w,y,.04,2);sd(L,I=>{I.x*=T(I.y)});let H=new ft(L,It.glass);H.renderOrder=3,a.add(H);let v=I=>y/2*T(I),b=Math.abs(x[1][0]-x[2][0])+.12,z=(x[1][0]+x[2][0])/2,F=new mi;F.moveTo(-b/2,0),F.lineTo(b/2,0),F.lineTo(b/2-.04,.05),F.lineTo(-b/2+.04,.06),F.closePath();let V=io(F,v(R)*2+.04,.02,2),J=new ft(V,o);J.position.set(0,R-.02,z),J.castShadow=!0,a.add(J);for(let I of[1,-1]){let W=(ut,ht,kt=.012)=>new P(I*(v(ht)+kt),ht,ut);Jn(W(x[0][0],x[0][1]),W(x[1][0],x[1][1]),.07,o,a),Jn(W(x[2][0],x[2][1]),W(x[3][0],x[3][1]),.09,o,a);let ct=x[1][0]+(x[2][0]-x[1][0])*.45;Jn(W(ct,p),W(ct,R-.03),.05,It.gloss,a),Jn(W(x[0][0]-.02,p+.015,.02),W(x[3][0]+.05,p+.015,.02),.03,It.gloss,a)}for(let I of[.2,-.25])Wt(.5,.015,.03,It.black,I*u,x[0][1]+.03,x[0][0]-.1,a).rotation.set(-.5,0,.12);let B=.45;Wt(y*.9,.2,.35,It.interior,0,p-.05,x[0][0]-.25,a);for(let I of[1,-1]){let W=I*y*.24,ct=x[1][0]-.3;Wt(.42,.12,.45,It.seat,W,B+.12,ct,a);let ut=Wt(.42,.55,.1,It.seat,W,B+.42,ct-.25,a);ut.rotation.x=-.18,Wt(.2,.14,.08,It.seat,W,B+.78,ct-.3,a)}let nt=new ft(new gi(.15,.022,8,20),It.interior);if(nt.position.set(y*.24,p+.05,x[0][0]-.5),nt.rotation.x=-.35,a.add(nt),r.cage){let I=x[1][0]-.1,W=x[2][0]+.1,ct=R-.08;for(let ut of[1,-1]){let ht=ut*v(R)*.95;Jn(new P(ht,B,I),new P(ht,ct,I),.02,It.chrome,a,!0),Jn(new P(ht,ct,I),new P(ht,ct,W),.02,It.chrome,a,!0),Jn(new P(ht,B,W),new P(ht,ct,W),.02,It.chrome,a,!0)}Jn(new P(v(R)*.95,ct,W),new P(-v(R)*.95,B+.2,W),.02,It.chrome,a,!0)}let k=Math.max(...n.upper.map(I=>I[0]))+.07,lt=Math.min(...n.upper.map(I=>I[0]))-.07,vt=n.upper[0][1],_t=(n.upper[0][1]+n.upper[1][1])/2+.06,Zt=n.upper.length-2,qt=(n.upper[Zt][1]+n.upper[Zt+1][1])/2+.08,Y=new ee({color:16774872,emissive:16773824,emissiveIntensity:e.night?2.4:.5,roughness:.15}),at=new ee({color:6948872,emissive:16718362,emissiveIntensity:e.night?1.2:.35,roughness:.25}),Et=u*.92,rt=n.extras||[];if(rt.includes("popups"))for(let I of[1,-1])Wt(.44,.05,.32,o,I*u*.3,n.upper[2][1]+.02,k-.4,a),Wt(.4,.02,.28,It.gloss,I*u*.3,n.upper[2][1]-.005,k-.4,a);if(rt.includes("roundlights"))for(let I of[1,-1]){let W=I*Et*.34,ct=n.upper[2][1]-.02,ut=k-.32;Be(.12,.2,o,W,ct,ut,"z",a,20),Be(.1,.03,Y,W,ct,ut+.1,"z",a,20)}let Ot=n.upper[1][1]-n.upper[0][1]<.2;if(Ot){let I=k-.35,W=d[0][1];for(let ut=0;ut<d.length-1;ut++)if(d[ut][0]>=I&&d[ut+1][0]<=I){let ht=(d[ut][0]-I)/(d[ut][0]-d[ut+1][0]);W=d[ut][1]+(d[ut+1][1]-d[ut][1])*ht}let ct=Math.atan2(n.upper[2][1]-n.upper[1][1],n.upper[1][0]-n.upper[2][0]);for(let ut of[1,-1]){let ht=Wt(.46,.03,.2,It.gloss,ut*Et*.32,W+.09,I,a);ht.rotation.x=ct;let kt=Wt(.4,.035,.05,Y,ut*Et*.32,W+.1,I+.07,a);kt.rotation.x=ct}}for(let I of rt.includes("roundlights")||Ot?[]:[1,-1]){let W=I*Et*.33;Wt(.44,.15,.08,It.gloss,W,_t,k-.02,a),Wt(.36,.07,.03,Y,W+I*.03,_t+.01,k+.02,a),Be(.04,.03,It.chrome,W-I*.12,_t,k+.025,"z",a,14),Wt(.44,.15,.01,It.lensClear,W,_t,k+.035,a),Wt(.1,.035,.02,It.amber,W+I*.16,_t-.055,k+.03,a)}let Ct=new ee({map:Qx(),roughness:.6}),Nt=new ft(new Te(u*.34,.1),Ct);Nt.position.set(0,_t-.04,k+.012),a.add(Nt);let Yt=new ft(new Te(u*.62,.12),Ct);Yt.position.set(0,vt+.09,k+.01),a.add(Yt),Wt(u*.94,.06,.14,r.chromeBumpers?It.chrome:It.trim,0,vt+.01,k-.01,a),Wt(u*.9,.02,.12,It.carbon,0,vt-.035,k+.03,a);for(let I of[1,-1])Be(.04,.03,Y,I*u*.37,vt+.09,k+.01,"z",a,12);let Q=new ee({map:jx(r.plate),roughness:.5}),C=new ft(new Te(.44,.1),Q);if(C.position.set(0,vt+.1,k+.02),a.add(C),Be(.04,.015,It.chrome,0,_t+.04,k+.02,"z",a,16),rt.includes("roundtails"))for(let I of[1,-1])for(let W of[.22,.38])Be(.085,.05,It.gloss,I*u*W,qt,lt+.01,"z",a,18),Be(.07,.06,at,I*u*W,qt,lt-.005,"z",a,18),Be(.03,.065,at,I*u*W,qt,lt-.01,"z",a,12);else{Wt(u*.88,.13,.05,It.gloss,0,qt,lt+.015,a);for(let I of[1,-1])Wt(.42,.09,.03,at,I*u*.28,qt,lt-.005,a),Wt(.1,.05,.03,It.reverse,I*u*.1,qt,lt-.005,a);Wt(u*.12,.03,.03,at,0,qt+.02,lt-.005,a)}let it=n.upper[n.upper.length-1][1];Wt(u*.94,.07,.14,r.chromeBumpers?It.chrome:It.trim,0,it+.01,lt+.01,a);let pt=new ft(new Te(.44,.1),Q);if(pt.position.set(0,qt-.16,lt-.01),pt.rotation.y=Math.PI,a.add(pt),rt.includes("wing")||rt.includes("intakes")){Wt(u*.7,.08,.2,It.carbon,0,it-.02,lt+.05,a);for(let I=-2;I<=2;I++)Wt(.015,.1,.22,It.carbon,I*u*.13,it-.02,lt+.03,a)}let ot=i.id==="veloce"?[[.06,0],[-.06,0]]:i.cylinders>=6?[[u*.3,0],[u*.36,0],[-u*.3,0],[-u*.36,0]]:[[u*.3,0]];for(let[I]of ot)Be(.045,.2,It.chrome,I,it+0,lt+.02,"z",a,14),Be(.032,.21,It.black,I,it+0,lt+.02,"z",a,12);for(let I of[1,-1]){let W=x[0][0]-.2,ct=p+.1,ut=I*(M(W,p)+.06);Jn(new P(I*(M(W,p)-.02),p+.02,W),new P(ut,ct,W),.025,It.gloss,a),Wt(.13,.09,.14,o,ut+I*.03,ct,W,a),Wt(.01,.07,.11,It.chrome,ut+I*.03,ct,W-.075,a);let ht=x[0][0]-.05,kt=x[1][0]+(x[2][0]-x[1][0])*.45,Vt=(it+p)/2;for(let D of[ht,kt])Wt(.008,p-it-.08,.012,It.black,I*(M(D,Vt)+.003),Vt+.02,D,a);Wt(.008,.012,Math.abs(ht-kt),It.black,I*(M((ht+kt)/2,it+.06)+.003),it+.06,(ht+kt)/2,a),Wt(.03,.03,.14,It.gloss,I*(M(kt+.2,p-.1)+.012),p-.1,kt+.2,a);let ne=Math.abs(n.wheelF-n.wheelR)-(s+.1)*2;Wt(.07,.1,ne,It.carbon,I*(M(0,it)+.01),it+.04,(n.wheelF+n.wheelR)/2,a),Be(.06,.01,It.trim,I*(M(n.wheelR+.35,p-.15)+.004),p-.15,n.wheelR+.35,"x",a,14);for(let D of[n.wheelF,n.wheelR]){let mt=new ft(new gi(s+.09,.035,6,20,Math.PI),It.trim);mt.rotation.y=Math.PI/2,mt.position.set(I*(M(D,s)+.005),s+(($=n.ride)!=null?$:0),D),a.add(mt)}if(!rt.includes("stripes")){let D=new ee({map:t_((Pt=e.number)!=null?Pt:i.id.length*17%90+10,l),transparent:!0,roughness:.4}),mt=new ft(new Te(.46,.46),D),q=(ht+kt)/2;mt.position.set(I*(M(q,.66)+.006),.66,q),mt.rotation.y=I*Math.PI/2,a.add(mt)}}let dt=Math.max(...n.upper.filter(I=>I[0]<x[x.length-1][0]+.05).map(I=>I[1]));if(rt.includes("wing")){let I=new mi;I.moveTo(0,0),I.lineTo(.36,.02),I.lineTo(.34,.05),I.lineTo(.02,.04),I.closePath();let W=io(I,u*.95,.01,1),ct=new ft(W,i.id==="ronin"?It.carbon:o);ct.rotation.y=Math.PI,ct.position.set(0,dt+.32,lt+.46),ct.castShadow=!0,a.add(ct);for(let ut of[1,-1])Wt(.03,.3,.12,It.gloss,ut*u*.3,dt+.16,lt+.3,a),Wt(.015,.16,.42,i.id==="ronin"?It.carbon:o,ut*u*.475,dt+.33,lt+.28,a)}else rt.includes("ducktail")&&Wt(u*.88,.05,.16,o,0,dt+.04,lt+.13,a);if(rt.includes("roofwing")){Wt(v(R)*2+.06,.035,.28,o,0,R+.07,x[2][0]-.1,a);for(let I of[1,-1])Wt(.02,.1,.26,o,I*(v(R)+.03),R+.04,x[2][0]-.1,a)}if(rt.includes("scoop")){let I=(n.upper[2][0]+x[0][0])/2;Wt(.55,.1,.75,o,0,n.upper[3][1]+.05,I,a);let W=new ft(new Te(.46,.07),Ct);W.position.set(0,n.upper[3][1]+.06,I+.38),a.add(W)}if(i.id==="ronin"){let I=(n.upper[2][0]+x[0][0])/2;for(let W of[1,-1])for(let ct=0;ct<4;ct++)Wt(.22,.012,.03,It.gloss,W*.32,n.upper[3][1]+.02,I-.12+ct*.08,a);Wt(u*.9,.025,.1,It.carbon,0,vt-.04,k+.06,a)}if(i.id==="veloce")for(let I=0;I<6;I++)Wt(u*.5,.012,.05,It.gloss,0,x[3][1]+.01-I*.012,x[3][0]+.05-I*.1-.12,a);if(rt.includes("roofscoop")){Wt(.36,.08,.4,o,0,R+.07,z+.25,a);let I=new ft(new Te(.3,.05),Ct);I.position.set(0,R+.07,z+.451),a.add(I)}if(rt.includes("intakes"))for(let I of[1,-1]){let W=new ft(new Te(.62,.2),Ct);W.position.set(I*(M(-.6,.55)+.006),.55,-.6),W.rotation.y=I*Math.PI/2,a.add(W)}if(rt.includes("stripes"))for(let I of[.13,-.13]){let W=Wt(.16,.008,Math.abs(k-x[0][0]),c,I,0,(k+x[0][0])/2,a);W.position.y=n.upper[3][1]+.03,Wt(.16,.008,b,c,I,R+.045,z,a),Wt(.16,.008,Math.abs(x[3][0]-lt),c,I,dt+.012,(x[3][0]+lt)/2,a)}if(rt.includes("rallylights")){Wt(u*.7,.03,.05,It.gloss,0,_t+.12,k+.1,a);for(let I of[.3,.1,-.1,-.3])Be(.085,.07,It.gloss,I*u,_t+.05,k+.12,"z",a,16),Be(.07,.075,Y,I*u,_t+.05,k+.125,"z",a,16)}if(rt.includes("mudflaps"))for(let I of[1,-1])for(let W of[n.wheelF-s-.14,n.wheelR-s-.14])Wt(.3,.28,.015,It.black,I*(n.track/2),.26,W,a);if(i.id==="kaze"||i.id==="bulldog"){let I=new ft(new Re(.004,.006,.55,5),It.black);I.position.set(-u*.35,dt+.28,lt+.45),I.rotation.x=-.25,a.add(I)}i.id==="tundra"&&Wt(.8,.012,.14,c,0,R+.045,z-.2,a);{let I=new P(0,x[1][1]-x[0][1],x[1][0]-x[0][0]).normalize(),W=new P(0,-I.z,I.y).normalize(),ct=new P(0,x[1][1],x[1][0]).addScaledVector(I,-.08).addScaledVector(W,.012),ut=new ft(new Te(v(ct.y)*2*.95,.11),new ee({map:n_(r.banner||i.name+" RACING"),roughness:.5}));ut.position.copy(ct),ut.lookAt(ct.clone().add(W)),a.add(ut);let ht=i.id.charCodeAt(0)+i.id.charCodeAt(1),kt=(mt,q,tt,St)=>{for(let At of[1,-1]){let jt=new ft(new Te(St,St/4),new ee({map:e_(ht+mt),transparent:!0,roughness:.45}));jt.position.set(At*(M(q,tt)+.007),tt,q),jt.rotation.y=At*Math.PI/2,a.add(jt)}};kt(0,n.wheelF-.02,s*2+.16+((xt=n.ride)!=null?xt:0),.5),kt(1,n.wheelR+.05,s*2+.17+((Tt=n.ride)!=null?Tt:0),.46),kt(2,(n.wheelF+n.wheelR)/2+.15,it+.17,.62);let Vt=new ee({color:14687774,roughness:.5}),ne=new ft(new gi(.06,.018,6,12),Vt);ne.position.set(-u*.3,vt+.02,k+.1),a.add(ne);let D=new ft(new gi(.06,.018,6,12),Vt);D.position.set(u*.34,it+.02,lt-.08),a.add(D);for(let mt of[1,-1]){let q=Wt(.22,.015,.12,It.carbon,mt*u*.42,vt+.12,k-.05,a);q.rotation.z=mt*.25}for(let mt of[1,-1])Be(.02,.02,It.chrome,mt*u*.3,n.upper[3][1]+.015,k-.25,"y",a,8)}Wt(u*.86,.05,h*.82,It.black,0,it+0,0,a);let Dt=[],wt=s+(($t=n.ride)!=null?$t:0),A=new ee({color:r.caliper,roughness:.4,metalness:.3});for(let[I,W,ct]of[[n.wheelF,1,!0],[n.wheelF,-1,!0],[n.wheelR,1,!1],[n.wheelR,-1,!1]]){let ut=new De;ut.position.set(W*n.track/2,wt,I);let ht=r_(s,ct?.25:.27,r,W);ut.add(ht);let kt=Wt(.07,s*.36,s*.26,A,-W*0,s*.3,-s*.3,ut);kt.rotation.x=.8,a.add(ut),Dt.push({pivot:ut,wheel:ht,front:ct,side:W,z:I})}let S=new ft(new Te(u*1.35,h*1.2),new ye({map:s_(),transparent:!0,depthWrite:!1,opacity:.8}));S.rotation.x=-Math.PI/2,S.position.y=.03,S.renderOrder=2;let O=new De,Z=new De;O.add(a);for(let I of Dt)a.remove(I.pivot),Z.add(I.pivot);let j=ad(a);if(e.outline!==!1)for(let I of j)(I.material===o||I.material===It.glass||I.material===It.trim||I.material===It.carbon)&&ld(I,I.material===o?0:.014);for(let I of Dt){let W=ad(I.wheel);if(e.outline!==!1)for(let ct of W)ct.material===It.tire&&ld(ct,.016);I.pivot.children.forEach(ct=>{ct.isMesh&&(ct.castShadow=!1)})}return Z.add(O),Z.add(S),{root:Z,chassis:O,wheels:Dt,bodyMat:o,headMat:Y,tailMat:at,spec:i}}function cd(i,t,e,n){var a;for(let o of i.wheels)o.wheel.rotation.x=t.wheelSpin,o.front&&(o.pivot.rotation.y=t.steer);let s=Math.max(-.05,Math.min(.05,t.ay*.005)),r=Math.max(-.025,Math.min(.025,-t.ax*.0025));i.chassis.rotation.z+=(s-i.chassis.rotation.z)*Math.min(1,e*4),i.chassis.rotation.x+=(r-i.chassis.rotation.x)*Math.min(1,e*3),i.tailMat.emissiveIntensity=n?3:(a=i._tailBase)!=null?a:.35}var so=class{constructor(t,e,n,s,r,a){this.spec=t,this.model=e,this.fi=n,this.d=s,this.targetD=s,this.dv=0,this.v=0,this.skill=r,this.grip=a,this.top=(44+t.hp/24)*r,this.mu=(t.muFront+t.muRear)/2*a*.92,this.laneTimer=2+Math.random()*4,this.wheelSpin=0,this.steer=0,this.ahead=!0,this.h=0,this.pose={},this.bump=0}update(t,e,n,s){var f;let r=e.hw;if(!s){this.v=0,this.place(e,t);return}let a=this.top,o={};for(let p=3;p<=70;p+=3){e.sample(this.fi+p,o);let _=Math.abs(o.k);if(_<1e-4)continue;let g=Math.sqrt(this.mu*9.81/_),m=p*cn;a=Math.min(a,Math.sqrt(g*g+14*m))}let l=n.idx-this.fi;l>0&&((f=n.t)!=null?f:99)>12?a*=1+Math.min(.2,l/300):l<-120&&(a*=.86),this.bump>0&&(this.bump-=t,a*=.7);let c=5*(1-.65*Math.min(1,this.v/this.top));this.v+=xe(a-this.v,-9*t,c*t),this.v=Math.max(0,this.v),this.laneTimer-=t,this.laneTimer<=0&&(this.targetD=(Math.random()*2-1)*(r-1.8),this.laneTimer=3+Math.random()*5);let h=n.idx-this.fi;h>0&&h<10&&Math.abs(n.lat-this.d)<2.6&&(this.targetD=n.lat>0?n.lat-3.2:n.lat+3.2,this.targetD=xe(this.targetD,-(r-1.4),r-1.4)),e.sample(this.fi+10,o);let u=xe(o.k*400,-1,1)*(r-2),d=xe(this.targetD*.6+u*.4,-(r-1.3),r-1.3);this.dv+=(xe((d-this.d)*1.6,-3,3)-this.dv)*Math.min(1,t*3),this.d+=this.dv*t,this.d=xe(this.d,-(r-1.1),r-1.1),this.fi+=this.v*t/cn,this.place(e,t)}place(t,e){let n=t.sample(this.fi,this.pose);this.x=n.x+n.lx*this.d,this.z=n.z+n.lz*this.d,this.y=n.y;let s=Math.atan2(this.dv,Math.max(this.v,3));this.h=n.h+s*.9,this.steer=xe(n.k*2.6+s,-.5,.5),this.slope=n.slope,this.wheelSpin+=this.v/this.spec.wheelRadius*e;let r=this.model;r.root.position.set(this.x,this.y,this.z),r.root.rotation.set(-Math.atan(this.slope),this.h,0,"YXZ");for(let a of r.wheels)a.wheel.rotation.x=this.wheelSpin,a.front&&(a.pivot.rotation.y=this.steer);r.chassis.rotation.z=xe(n.k*this.v*this.v*.008,-.07,.07)}get vx(){return Math.sin(this.h)*this.v}get vz(){return Math.cos(this.h)*this.v}};var ro=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this.musicOn=!0,this.musicVol=.3,this.sfxVol=.8}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-20,this.comp.knee.value=12,this.comp.ratio.value=4,this.comp.attack.value=.005,this.comp.release.value=.2,this.comp.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(this.comp),this.sfx=e.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?this.musicVol:0,this.musicBus.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let f=0;f<n;f++)s[f]=Math.random()*2-1;this.engGain=e.createGain(),this.engGain.gain.value=0,this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=1.4;let r=e.createWaveShaper(),a=new Float32Array(1024);for(let f=0;f<1024;f++){let p=f/512-1;a[f]=Math.tanh(p*1.6)}r.curve=a,this.oscs=[{o:e.createOscillator(),type:"sawtooth",mul:1,g:.38},{o:e.createOscillator(),type:"sine",mul:.5,g:.6},{o:e.createOscillator(),type:"triangle",mul:2,g:.16},{o:e.createOscillator(),type:"sawtooth",mul:1.005,g:.25}];let o=e.createGain();o.gain.value=.5;for(let f of this.oscs){f.o.type=f.type;let p=e.createGain();p.gain.value=f.g,f.o.connect(p),p.connect(o),f.o.start()}this.rumble=e.createOscillator(),this.rumble.frequency.value=18;let l=e.createGain();l.gain.value=.15,this.rumble.connect(l),l.connect(o.gain),this.rumble.start(),o.connect(r),r.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.sfx),this.tireSrc=this.loopNoise();let c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=750,c.Q.value=3;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=500,h.Q.value=.7,this.tireGain=e.createGain(),this.tireGain.gain.value=0,this.tireSrc.connect(c),this.tireSrc.connect(h),c.connect(this.tireGain),h.connect(this.tireGain),this.tireGain.connect(this.sfx),this.tireBp=c,this.gravelSrc=this.loopNoise();let u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=900,this.gravelGain=e.createGain(),this.gravelGain.gain.value=0,this.gravelSrc.connect(u),u.connect(this.gravelGain),this.gravelGain.connect(this.sfx),this.windSrc=this.loopNoise();let d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=420,this.windGain=e.createGain(),this.windGain.gain.value=0,this.windSrc.connect(d),d.connect(this.windGain),this.windGain.connect(this.sfx),this.startMusic()}loopNoise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setSfxVol(t){this.sfxVol=t,this.sfx&&(this.sfx.gain.value=t)}setMusicVol(t){this.musicVol=t,this.musicBus&&this.musicOn&&(this.musicBus.gain.value=t)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?this.musicVol:0,this.ctx.currentTime,.2)}update(t,e,n,s,r,a,o){if(!this.ctx)return;let l=this.ctx.currentTime;if(!o){this.engGain.gain.setTargetAtTime(0,l,.08),this.tireGain.gain.setTargetAtTime(0,l,.05),this.windGain.gain.setTargetAtTime(0,l,.1),this.gravelGain.gain.setTargetAtTime(0,l,.1);return}let c=t.rpm,h=c/60*(e.cylinders/2)*.5;for(let f of this.oscs)f.o.frequency.setTargetAtTime(h*f.mul,l,.02);this.rumble.frequency.setTargetAtTime(8+c/400,l,.05);let u=.35+.65*n;this.engFilter.frequency.setTargetAtTime(220+c*.22*u+n*500,l,.04),this.engGain.gain.setTargetAtTime(.1+.08*u,l,.05);let d=Math.min(1,s)*(r?.3:1)*Math.min(1,a/6);this.tireGain.gain.setTargetAtTime(d*.08,l,.12),this.tireBp.frequency.setTargetAtTime(650+d*250,l,.15),this.gravelGain.gain.setTargetAtTime(r?Math.min(.18,a/90):0,l,.08),this.windGain.gain.setTargetAtTime(Math.min(.12,(a/70)**2*.12),l,.15)}burst(t,e,n,s="lowpass"){if(!this.ctx)return;let r=this.ctx,a=r.currentTime,o=r.createBufferSource();o.buffer=this.noiseBuf;let l=r.createBiquadFilter();l.type=s,l.frequency.value=e;let c=r.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(l),l.connect(c),c.connect(this.sfx),o.start(a,Math.random()),o.stop(a+t+.05)}tone(t,e,n=.2,s="sine",r=0,a){if(!this.ctx)return;let o=this.ctx,l=o.currentTime+r,c=o.createOscillator();c.type=s,c.frequency.value=t;let h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(n,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(a||this.sfx),c.start(l),c.stop(l+e+.05)}crash(t){this.burst(.3,500+t*25,Math.min(.32,.1+t*.015)),this.tone(70,.22,Math.min(.22,t*.012),"sine")}shift(){this.burst(.06,2200,.05,"bandpass")}backfire(){this.burst(.1,280,.18)}click(){this.tone(880,.05,.05,"triangle")}checkpoint(){[660,880,1320].forEach((t,e)=>this.tone(t,.18,.09,"triangle",e*.09))}countdown(t){this.tone(t?1046:523,t?.5:.22,.1,"triangle")}score(){this.tone(1320,.12,.06,"triangle"),this.tone(1760,.14,.05,"triangle",.06)}gameOver(){[523,440,349,262].forEach((t,e)=>this.tone(t,.3,.08,"triangle",e*.18))}startMusic(){let t=this.ctx,e=112,n=60/e/4,s=[0,0,12,0,0,0,10,0,0,0,12,0,7,0,10,0],r=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],a=[0,1,2,1,0,2,1,2],o=0,l=t.currentTime+.1,c=u=>440*Math.pow(2,(u-69)/12),h=()=>{if(this.ctx){for(;l<t.currentTime+.2;){let u=Math.floor(o/16)%4,d=o%16,f=r[u];this.musicOn&&((s[d]!==0||d%4===0)&&this.tone(c(f[0]-24+(s[d]||0)),n*1.8,.14,"triangle",l-t.currentTime,this.musicBus),d%2===0&&this.tone(c(f[a[d/2%8]]+12),n*1.5,.05,"triangle",l-t.currentTime,this.musicBus),d%4===0&&this.kick(l),d%8===4&&this.snare(l),d%2===1&&this.hat(l)),l+=n,o++}this._musicTimer=setTimeout(h,60)}};h()}kick(t){let e=this.ctx,n=e.createOscillator(),s=e.createGain();n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(40,t+.15),s.gain.setValueAtTime(.35,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),n.connect(s),s.connect(this.musicBus),n.start(t),n.stop(t+.25)}snare(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=1500;let r=e.createGain();r.gain.setValueAtTime(.14,t),r.gain.exponentialRampToValueAtTime(.001,t+.15),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.2)}hat(t){let e=this.ctx,n=e.createBufferSource();n.buffer=this.noiseBuf;let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;let r=e.createGain();r.gain.setValueAtTime(.035,t),r.gain.exponentialRampToValueAtTime(.001,t+.04),n.connect(s),s.connect(r),r.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.06)}};var ao=class{constructor(){this.keys=new Set,this.events=[],this.steer=0,this.touch={left:!1,right:!1,gas:!1,brake:!1,hb:!1},this.touchActive=!1,window.addEventListener("keydown",t=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),!t.repeat){let e={KeyC:"camera",KeyR:"reset",Escape:"pause",KeyP:"pause",KeyE:"shiftUp",KeyQ:"shiftDown",KeyM:"mute",Enter:"enter"};e[t.code]&&this.events.push(e[t.code])}this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),this.gpPrev={}}bindTouch(t){t.querySelectorAll("[data-touch]").forEach(n=>{let s=n.dataset.touch,r=o=>{o.preventDefault(),this.touch[s]=!0,n.classList.add("on"),this.touchActive=!0},a=o=>{o.preventDefault(),this.touch[s]=!1,n.classList.remove("on")};n.addEventListener("touchstart",r,{passive:!1}),n.addEventListener("touchend",a,{passive:!1}),n.addEventListener("touchcancel",a,{passive:!1}),n.addEventListener("mousedown",r),n.addEventListener("mouseup",a),n.addEventListener("mouseleave",a)}),t.querySelectorAll("[data-tap]").forEach(n=>{n.addEventListener("touchstart",s=>{s.preventDefault(),this.events.push(n.dataset.tap)},{passive:!1}),n.addEventListener("click",()=>this.events.push(n.dataset.tap))})}down(...t){return t.some(e=>this.keys.has(e))}read(t,e){var d,f,p,_,g,m;let n=this.touch,s=this.down("KeyW","ArrowUp")||n.gas?1:0,r=this.down("KeyS","ArrowDown")||n.brake?1:0,a=this.down("Space")||n.hb?1:0,o=this.down("KeyA","ArrowLeft")||n.left,l=this.down("KeyD","ArrowRight")||n.right,c=(o?1:0)-(l?1:0),h=null,u=navigator.getGamepads?navigator.getGamepads():[];for(let M of u){if(!M)continue;let x=M.axes[0]||0;Math.abs(x)>.12&&(h=-x);let y=((d=M.buttons[7])==null?void 0:d.value)||0,R=((f=M.buttons[6])==null?void 0:f.value)||0;s=Math.max(s,y,(p=M.buttons[0])!=null&&p.pressed?1:0),r=Math.max(r,R,(_=M.buttons[2])!=null&&_.pressed?1:0),a=Math.max(a,(g=M.buttons[1])!=null&&g.pressed?1:0,(m=M.buttons[5])!=null&&m.pressed?1:0);let T=(w,L)=>{var v;let H=!!((v=M.buttons[w])!=null&&v.pressed);H&&!this.gpPrev[w]&&this.events.push(L),this.gpPrev[w]=H};T(3,"camera"),T(9,"pause"),T(8,"reset"),T(12,"shiftUp"),T(13,"shiftDown");break}if(h!==null)this.steer=h;else{let M=c===0?7:Math.sign(c)!==Math.sign(this.steer)&&this.steer!==0?9:4.2-Math.min(1.8,e/40),x=c-this.steer;this.steer+=Math.sign(x)*Math.min(Math.abs(x),M*t)}return{throttle:s,brake:r,handbrake:a,steer:this.steer}}takeEvents(){let t=this.events;return this.events=[],t}};function hd(i){let t=new De,e=new Bi(900,32,16),n=new me({side:we,depthWrite:!1,fog:!1,uniforms:{top:{value:new bt(i.sky.top)},horizon:{value:new bt(i.sky.horizon)},bottom:{value:new bt(i.sky.bottom)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.6),0.7)) : mix(horizon, bottom, min(1.0,-h*4.0));
      gl_FragColor = vec4(c,1.0); }`});t.add(new ft(e,n));let s=new P(...i.sun.dir).normalize(),r=document.createElement("canvas");r.width=r.height=128;let a=r.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);i.night?(o.addColorStop(0,"rgba(235,240,255,1)"),o.addColorStop(.25,"rgba(220,230,255,0.95)"),o.addColorStop(.3,"rgba(160,170,255,0.25)"),o.addColorStop(1,"rgba(0,0,0,0)")):(o.addColorStop(0,"rgba(255,255,240,1)"),o.addColorStop(.2,"rgba(255,250,220,0.95)"),o.addColorStop(.45,"rgba(255,220,160,0.25)"),o.addColorStop(1,"rgba(255,200,120,0)")),a.fillStyle=o,a.fillRect(0,0,128,128);let l=new wn(r),c=new lr(new Es({map:l,fog:!1,depthWrite:!1,transparent:!0}));if(c.position.copy(s).multiplyScalar(800),c.scale.setScalar(i.night?70:150),t.add(c),i.night){let u=new Float32Array(4500);for(let f=0;f<1500;f++){let p=Math.random()*Math.PI*2,_=Math.acos(Math.random()*.9+.1);u[f*3]=850*Math.sin(_)*Math.cos(p),u[f*3+1]=850*Math.cos(_),u[f*3+2]=850*Math.sin(_)*Math.sin(p)}let d=new de;d.setAttribute("position",new pe(u,3)),t.add(new Ts(d,new ws({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1})))}return t.renderOrder=-10,t}var yr=class{constructor(t,e=16777215,n=260){this.max=n,this.pos=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n).fill(1),this.base=new Float32Array(n),this.op=new Float32Array(n);let s=new de;s.setAttribute("position",new pe(this.pos,3)),s.setAttribute("size",new pe(this.size,1)),s.setAttribute("alpha",new pe(this.alpha,1));let r=new me({transparent:!0,depthWrite:!1,uniforms:{color:{value:new bt(e)},scale:{value:innerHeight*.5}},vertexShader:`attribute float size; attribute float alpha; varying float a; uniform float scale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
          // \u0432\u043E\u0437\u043B\u0435 \u043A\u0430\u043C\u0435\u0440\u044B \u0434\u044B\u043C \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u044F\u0435\u0442\u0441\u044F \u2014 \u043D\u0435 \u0437\u0430\u043B\u0435\u043F\u043B\u044F\u0435\u0442 \u044D\u043A\u0440\u0430\u043D
          a = alpha * smoothstep(3.0, 9.0, -mv.z);
          gl_PointSize = min(size * scale / -mv.z, 260.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 color; varying float a;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d)*4.0; if (r > 1.0) discard; gl_FragColor = vec4(color, a * (1.0 - r) * (1.0 - r)); }`});this.points=new Ts(s,r),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.next=0}emit(t,e,n,s,r,a,o=.5){let l=this.next;this.next=(this.next+1)%this.max,this.pos[l*3]=t+(Math.random()-.5)*.3,this.pos[l*3+1]=e+.35,this.pos[l*3+2]=n+(Math.random()-.5)*.3;let c=Math.random()*Math.PI*2,h=.8+Math.random()*1.4;this.vel[l*3]=s*.08+Math.cos(c)*h,this.vel[l*3+1]=.08+Math.random()*.15,this.vel[l*3+2]=r*.08+Math.sin(c)*h,this.life[l]=0,this.maxLife[l]=1.4+Math.random()*.8*a,this.base[l]=1.1+Math.random()*.5,this.op[l]=o}update(t){let e=1-t*1.5;for(let s=0;s<this.max;s++){if(this.op[s]===0)continue;this.life[s]+=t;let r=this.life[s]/this.maxLife[s];if(r>=1){this.op[s]=0,this.alpha[s]=0;continue}this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]+=this.vel[s*3+1]*t,this.pos[s*3+2]+=this.vel[s*3+2]*t,this.vel[s*3]*=e,this.vel[s*3+2]*=e,this.size[s]=this.base[s]*(1+r*2.4),this.alpha[s]=this.op[s]*(1-r)*Math.min(1,this.life[s]*8)}let n=this.points.geometry.attributes;n.position.needsUpdate=!0,n.size.needsUpdate=!0,n.alpha.needsUpdate=!0}clear(){this.op.fill(0),this.alpha.fill(0)}dispose(t){t.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose()}},oo=class{constructor(t,e=2400,n=1118481,s=.55){this.max=e;let r=new de;this.pos=new Float32Array(e*4*3),this.alpha=new Float32Array(e*4);let a=new Uint32Array(e*6);for(let l=0;l<e;l++){let c=l*4;a.set([c,c+1,c+2,c+1,c+3,c+2],l*6)}r.setAttribute("position",new pe(this.pos,3)),r.setAttribute("alpha",new pe(this.alpha,1)),r.setIndex(new pe(a,1));let o=new me({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{color:{value:new bt(n)},op:{value:s}},vertexShader:"attribute float alpha; varying float a; void main(){ a = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 color; uniform float op; varying float a; void main(){ gl_FragColor = vec4(color, a*op); }"});this.mesh=new ft(r,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.n=0,this.last=[null,null,null,null]}add(t,e,n,s,r,a,o){let l=this.last[t],c=.13,h={x:e,y:n+.045,z:s,lx:r,lz:a};if(l&&o>0&&(e-l.x)**2+(s-l.z)**2<4){if((e-l.x)**2+(s-l.z)**2<.09)return;let u=this.n%this.max;this.n++;let d=this.pos,f=u*12;d[f]=l.x+l.lx*c,d[f+1]=l.y,d[f+2]=l.z+l.lz*c,d[f+3]=l.x-l.lx*c,d[f+4]=l.y,d[f+5]=l.z-l.lz*c,d[f+6]=e+r*c,d[f+7]=h.y,d[f+8]=s+a*c,d[f+9]=e-r*c,d[f+10]=h.y,d[f+11]=s-a*c;let p=Math.min(1,o);this.alpha.set([p,p,p,p],u*4),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.alpha.needsUpdate=!0}this.last[t]=o>0?h:null}clear(){this.pos.fill(0),this.alpha.fill(0),this.mesh.geometry.attributes.position.needsUpdate=!0,this.last=[null,null,null,null]}},lo=class{constructor(t,e=2500){this.n=e;let n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*80,n[r*3+1]=Math.random()*40,n[r*3+2]=(Math.random()-.5)*80;let s=new de;s.setAttribute("position",new pe(n,3)),this.pts=new Ts(s,new ws({color:16777215,size:.18,transparent:!0,opacity:.9,depthWrite:!1})),this.pts.frustumCulled=!1,t.add(this.pts)}update(t,e){let n=this.pts.geometry.attributes.position,s=n.array;for(let r=0;r<this.n;r++)s[r*3+1]-=t*(2+r%5*.4),s[r*3]+=Math.sin(r+performance.now()*5e-4)*t*.6,s[r*3+1]<-2&&(s[r*3+1]+=40);n.needsUpdate=!0,this.pts.position.set(0,e.position.y-15,0);for(let r=0;r<this.n;r++){let a=s[r*3],o=s[r*3+2];a-e.position.x>40?s[r*3]-=80:a-e.position.x<-40&&(s[r*3]+=80),o-e.position.z>40?s[r*3+2]-=80:o-e.position.z<-40&&(s[r*3+2]+=80)}}};function ud(i){let t=new pi,e=new Bi(50,32,16),n=new me({side:we,uniforms:{top:{value:new bt(i.sky.top)},horizon:{value:new bt(i.sky.horizon).lerp(new bt(14541802),i.night?0:.45)},ground:{value:new bt(i.ground.far).lerp(new bt(5921374),.7).multiplyScalar(i.night?.25:.55)}},vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.5),0.6)) : mix(horizon*0.8, ground, min(1.0,-h*6.0)); gl_FragColor = vec4(c,1.0); }`});t.add(new ft(e,n));let s=new P(...i.sun.dir).normalize(),r=new ft(new Bi(i.night?2:4,16,8),new ye({color:new bt(i.sun.color).multiplyScalar(i.night?2:12)}));if(r.position.copy(s).multiplyScalar(40),t.add(r),i.night){let a=[16723622,2680831,16767370,8191823,16757611];for(let o=0;o<40;o++){let l=Math.random()*Math.PI*2,c=Math.random()*12-2,h=new ft(new Me(3+Math.random()*4,1+Math.random()*3,.5),new ye({color:new bt(a[o%a.length]).multiplyScalar(2.5)}));h.position.set(Math.cos(l)*40,c,Math.sin(l)*40),h.lookAt(0,c,0),t.add(h)}}else for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,l=8+Math.random()*20,c=new ft(new Bi(4+Math.random()*5,8,6),new ye({color:new bt(16777215).multiplyScalar(1.4)}));c.scale.y=.35,c.position.set(Math.cos(o)*42,l,Math.sin(o)*42),t.add(c)}return t}function dd(i){let n=document.createElement("canvas");n.width=2048,n.height=256;let s=n.getContext("2d"),r=(()=>{let p=12345;return()=>(p=p*16807%2147483647,p/2147483647)})(),a=new bt(i.fog.color),o=(p,_,g,m,M)=>{s.fillStyle=p,s.beginPath(),s.moveTo(0,256);let x=[r()*10,r()*10,r()*10];for(let y=0;y<=2048;y+=4){let R=y/2048*Math.PI*2,T=Math.sin(R*m+x[0])*.5+Math.sin(R*m*2.3+x[1])*.3+Math.sin(R*m*5.7+x[2])*.2;T+=(r()-.5)*M,s.lineTo(y,256-g-(T*.5+.5)*_)}s.lineTo(2048,256),s.closePath(),s.fill()},l=(p,_)=>"#"+new bt(p).lerp(a,_).getHexString();if(i.id==="desert")o(l(10115658,.55),110,20,3,.05),o(l(11556922,.35),70,8,5,.08);else if(i.id==="snow"){o(l(9413565,.5),190,20,4,.12),s.globalCompositeOperation="source-atop";let p=s.createLinearGradient(0,0,0,256);p.addColorStop(0,"#ffffff"),p.addColorStop(.45,"rgba(255,255,255,0.8)"),p.addColorStop(.6,"rgba(255,255,255,0)"),s.fillStyle=p,s.fillRect(0,0,2048,256),s.globalCompositeOperation="source-over",o(l(7307930,.35),90,6,7,.15)}else{let p=0;for(;p<2048;){let _=14+r()*40,g=30+Math.pow(r(),1.5)*190;s.fillStyle=l(1314854,.25),s.fillRect(p,256-g,_,g);for(let m=256-g+4;m<252;m+=6)for(let M=p+3;M<p+_-3;M+=5)r()<.18&&(s.fillStyle=["#ffd98a","#9fd8ff","#ff9ad5"][Math.floor(r()*3)],s.fillRect(M,m,2,2));r()<.15&&(s.fillStyle="#ff2020",s.fillRect(p+_/2-1,256-g-6,2,2)),p+=_+r()*6}}let c=new wn(n);c.colorSpace=ke,c.wrapS=Wn;let h=820,u=i.id==="snow"?230:i.id==="city"?190:140,d=new Re(h,h,u,96,1,!0),f=new ft(d,new ye({map:c,transparent:!0,side:we,fog:!1,depthWrite:!1}));return f.userData.h=u,f.renderOrder=-9,f}function fd(i){let t=new De;if(i.night)return t;let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");for(let a=0;a<16;a++){let o=40+Math.random()*176,l=50+Math.random()*40,c=20+Math.random()*30,h=n.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,256,128)}let s=new wn(e),r=i.id==="desert"?16769736:16777215;for(let a=0;a<14;a++){let o=new lr(new Es({map:s,color:r,fog:!1,depthWrite:!1,transparent:!0,opacity:.75})),l=Math.random()*Math.PI*2,c=450+Math.random()*300;o.position.set(Math.cos(l)*c,160+Math.random()*180,Math.sin(l)*c);let h=180+Math.random()*220;o.scale.set(h,h*.45,1),t.add(o)}return t}var co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},a_=new Ss(-1,1,1,-1,0,1),oh=class extends de{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}},o_=new oh,yi=class{constructor(t){this._mesh=new ft(o_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,a_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ho=class extends hn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_i.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new yi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Mr=class extends hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},uo=class extends hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var fo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ho(co),this.copyPass.material.blending=Dn,this.clock=new Xa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mr!==void 0&&(a instanceof Mr?n=!0:a instanceof uo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var po=class extends hn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var pd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ds=class i extends hn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,a,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new tn(r,a,{type:An});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new tn(r,a,{type:An});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=pd;this.highPassUniforms=_i.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=co;this.copyUniforms=_i.clone(h.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ms,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new ye,this.fsQuad=new yi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ds.BlurDirectionX=new et(1,0);Ds.BlurDirectionY=new et(0,1);var md={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var mo=class extends hn{constructor(){super();let t=md;this.uniforms=_i.clone(t.uniforms),this.material=new Ba({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _o=[{id:"race",name:"\u0413\u043E\u043D\u043A\u0430",desc:"\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0442\u0430\u0439\u043C\u0435\u0440. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E, \u043E\u0431\u0433\u043E\u043D\u044B \u0438 \u0434\u0440\u0438\u0444\u0442.",timer:50,rivals:5,bonus:i=>Math.max(22,40-i*2)},{id:"drift",name:"\u0414\u0440\u0438\u0444\u0442",desc:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0438 \u0442\u0440\u0430\u0441\u0441\u0430. \u041E\u0447\u043A\u0438 \u0437\u0430 \u0437\u0430\u043D\u043E\u0441, \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B \u0438 \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0441\u0435\u0440\u0438\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0432\u0440\u0435\u043C\u044F.",timer:60,rivals:0,bonus:i=>Math.max(26,42-i*1.5)},{id:"free",name:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0435\u0437\u0434\u0430",desc:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430 \u0438 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u041A\u0430\u0442\u0430\u0439\u0441\u044F \u043F\u043E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u0435 \u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0439 \u0434\u0440\u0438\u0444\u0442.",timer:0,rivals:3,bonus:()=>0}],vo=1/240,l_=400,Hi={get(i,t){try{let e=localStorage.getItem("ed_"+i);return e?JSON.parse(e):t}catch{return t}},set(i,t){try{localStorage.setItem("ed_"+i,JSON.stringify(t))}catch{}}},hh="ontouchstart"in window||navigator.maxTouchPoints>0;hh&&document.body.classList.add("touch");var Lt=Object.assign({vol:.8,music:!0,assist:!0,manual:!1,quality:hh?0:1,camera:0,units:"kmh",fps:0,showFps:!1,sfxVol:.8,musicVol:.3,easy:!0,smoke:!0,outline:!0},Hi.get("settings",{})),Se=Object.assign({car:0,colors:{},mode:0,map:0},Hi.get("sel",{})),Si=Hi.get("records",{}),nn=()=>Hi.set("settings",Lt),yo=()=>Hi.set("sel",Se),yt=i=>document.getElementById(i),c_=yt("game"),gn=new wa({canvas:c_,antialias:!0,powerPreference:"high-performance"});gn.outputColorSpace=ke;gn.toneMapping=gr;gn.shadowMap.type=Uc;var Qn=new pi,Pe=new Ye(62,1,.1,1600),vd=new bs(gn);Qn.environment=vd.fromScene(new Ja,.04).texture;function h_(){var t;let i=+Lt.quality;if(gn.setPixelRatio([1,Math.min(devicePixelRatio,1.5),Math.min(devicePixelRatio,2)][i]),gn.shadowMap.enabled=i>0,st&&st.sun){st.sun.castShadow=i>0;let e=i===2?2048:1024;st.sun.shadow.mapSize.x!==e&&(st.sun.shadow.mapSize.set(e,e),(t=st.sun.shadow.map)==null||t.dispose(),st.sun.shadow.map=null)}uh()}var mn=null,Us=null;function u_(){+Lt.quality==2?(mn||(mn=new fo(gn),mn.addPass(new po(Qn,Pe)),Us=new Ds(new et(innerWidth/2,innerHeight/2),.5,.45,.85),mn.addPass(Us),mn.addPass(new mo)),mn.setPixelRatio(gn.getPixelRatio()),mn.setSize(innerWidth,innerHeight),st&&(Us.strength=st.map.night?.55:.18,Us.threshold=st.map.night?.72:.96,Us.radius=.35)):mn&&(mn.dispose(),mn=null,Us=null)}function uh(){let i=innerWidth,t=innerHeight;gn.setSize(i,t,!1),u_(),Pe.aspect=i/t,dh(),Pe.updateProjectionMatrix()}var Fs={x:0,y:0};function dh(){let i=innerWidth,t=innerHeight;Fs.x||Fs.y?Pe.setViewOffset(i,t,-i*Fs.x,t*Fs.y,i,t):Pe.clearViewOffset()}addEventListener("resize",uh);var ie=new ro;ie.setVolume(Lt.vol);ie.musicOn=Lt.music;ie.sfxVol=Lt.sfxVol;ie.musicVol=Lt.musicVol;var Mo=new ao;Mo.bindTouch(yt("touch"));addEventListener("pointerdown",()=>ie.init(),{once:!1});addEventListener("keydown",()=>ie.init(),{once:!0});var go=null,st=null,K=null,le="loading";function d_(){st&&(Qn.remove(st.group),st.group.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(t=>{var e;(e=t.map)==null||e.dispose(),t.dispose()})}),st=null)}function So(i,t){d_();let e=eo[i],n=new De;Qn.add(n),Qn.fog=new Ta(e.fog.color,e.fog.near,e.fog.far),Qn.background=new bt(e.fog.color),go&&go.dispose(),go=vd.fromScene(ud(e),.02).texture,Qn.environment=go,Qn.environmentIntensity=e.night?.7:1,gn.toneMappingExposure=e.night?1.15:1;let s=new Ha(e.hemi.sky,e.hemi.ground,e.hemi.intensity);n.add(s);let r=new Wa(e.sun.color,e.sun.intensity),a=new P(...e.sun.dir).normalize();r.shadow.camera.left=-32,r.shadow.camera.right=32,r.shadow.camera.top=32,r.shadow.camera.bottom=-32,r.shadow.camera.near=1,r.shadow.camera.far=220,r.shadow.bias=-4e-4,r.shadow.normalBias=.03,n.add(r),n.add(r.target);let o=hd(e);n.add(o);let l=dd(e);l.position.y=l.userData.h/2-45,o.add(l),o.add(fd(e));let c=new no(n,e,t,+Lt.quality),h=new ft(new Te(5e3,5e3),new Ze({color:e.ground.far}));h.rotation.x=-Math.PI/2,n.add(h);let u={desert:15130064,snow:16777215,city:12105928}[e.id],d=new yr(n,u,Lt.quality>0?90:50),f=new yr(n,{desert:13606764,snow:16054527,city:7829375}[e.id],40),p=new oo(n,Lt.quality>0?3e3:1200,e.id==="snow"?8226968:789516,e.id==="snow"?.4:.6),_=e.weather==="snow"?new lo(n,Lt.quality>0?2600:900):null;st={map:e,mapIdx:i,group:n,hemi:s,sun:r,sunDir:a,sky:o,track:c,farPlane:h,smoke:d,dust:f,skids:p,snow:_,rivals:[],player:null},h_(),fh(6,-2.8)}function f_(i){var t;return i.colors[(t=Se.colors[i.id])!=null?t:0]}function fh(i,t){let e=$n[Se.car];st.player&&st.group.remove(st.player.model.root);let n=ah(e,f_(e),{night:st.map.night,outline:Lt.outline});n._tailBase=st.map.night?1.2:.35,st.group.add(n.root);let s=new Qa(e),r=st.track.P(i);if(s.reset(r.x+r.lx*t,r.z+r.lz*t,r.h),s.idx=i,s.lat=t,s.roadY=r.y,s.slope=0,st.map.night){let a=new Va(16773590,40,100,.5,.6,1.4);a.position.set(0,.8,2),a.target.position.set(0,0,25),n.root.add(a),n.root.add(a.target)}st.player={veh:s,model:n},ph(0)}function yd(){var s,r;let{veh:i}=st.player,t=K&&i.px!==void 0?xe(K.acc/vo,0,1):1,e=(a,o)=>a===void 0?o:a+(o-a)*t,n=i.h-((s=i.ph)!=null?s:i.h);return{x:e(i.px,i.x),z:e(i.pz,i.z),h:((r=i.ph)!=null?r:i.h)+n*t,y:e(i.pY,i.roadY)}}function ph(i){let{veh:t,model:e}=st.player,n=yd();e.root.position.set(n.x,n.y+.03,n.z),e.root.rotation.set(-Math.atan(t.slope||0),n.h,0,"YXZ"),cd(e,t,i||.016,K&&K.braking)}function p_(i){let t=[[6,2.8],[14,-2.8],[14,2.8],[22,-2.8],[22,2.8],[30,0]];for(let e=0;e<i;e++){let n=$n[(Se.car+1+e)%$n.length],s=n.colors[(e*2+1)%n.colors.length],r=ah(n,s,{night:st.map.night,outline:Lt.outline});r._tailBase=st.map.night?1.2:.35,st.group.add(r.root);let a=new so(n,r,t[e][0],t[e][1],.82+Math.random()*.13,st.map.grip);a.ghostMats=[],a.outlines=[];let o=new Map;r.root.traverse(l=>{if(l.isMesh){if(l.material.isShaderMaterial){a.outlines.push(l);return}if(!o.has(l.material)){let c=l.material.clone();c.userData.baseOp=l.material.transparent?l.material.opacity:1,c.transparent=!0,o.set(l.material,c),a.ghostMats.push(c)}l.material=o.get(l.material)}}),a.ahead=t[e][0]>6||t[e][0]===6&&!1,a.place(st.track,0),st.rivals.push(a)}}var Ht={mode:+Lt.camera,h:0,pos:new P,look:new P,shake:0,fov:62,cineT:0,cineA:0,orbit:0},m_=["\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441\u0437\u0430\u0434\u0438, \u0434\u0430\u043B\u044C\u043D\u044F\u044F","\u041A\u0430\u043C\u0435\u0440\u0430: \u0441 \u043A\u0430\u043F\u043E\u0442\u0430","\u041A\u0430\u043C\u0435\u0440\u0430: \u043A\u0438\u043D\u043E"],gd=(i,t)=>{let e=i-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e};function mh(i,t=!1){let{veh:e}=st.player,n=yd(),s={x:n.x,z:n.z,h:n.h,roadY:n.y,speed:e.speed,u:e.u,vx:e.vx,vz:e.vz,spec:e.spec,slope:e.slope},r=s.speed,a=Math.sin(s.h),o=Math.cos(s.h),l=s.roadY,c=xe((s.u-3)/8,0,1)*.45,h=s.h+xe(gd(Math.atan2(s.vx,s.vz),s.h),-.7,.7)*c;t&&(Ht.h=h),Ht.h+=gd(h,Ht.h)*Math.min(1,i*6);let u=t?1:1-Math.exp(-i*7),d=60+Math.min(9,r*.12),f=new P,p=new P;if(Ht.mode===0||Ht.mode===1){let _=Ht.mode===0?5.4:8.2,g=Ht.mode===0?1.9:3;(t||Ht.y===void 0)&&(Ht.y=l+g),Ht.y+=(l+g-Ht.y)*Math.min(1,i*6),f.set(s.x-Math.sin(Ht.h)*_,Math.max(Ht.y,l+1),s.z-Math.cos(Ht.h)*_),p.set(s.x+Math.sin(Ht.h)*2.5,l+1.05,s.z+Math.cos(Ht.h)*2.5),Ht.pos.copy(f),Ht.look.copy(p)}else if(Ht.mode===2){let _=s.spec.body;f.set(s.x+a*(_.cabin[0][0]+.25),l+_.cabin[0][1]+.55,s.z+o*(_.cabin[0][0]+.25)),p.set(s.x+a*30,l+1.3+(s.slope||0)*30,s.z+o*30),Ht.pos.copy(f),Ht.look.copy(p),d+=6}else{Ht.cineT-=i,(Ht.cineT<=0||t)&&(Ht.cineT=4+Math.random()*3,Ht.cineA=(Math.random()*2-1)*2.4,Ht.cineD=6+Math.random()*6,Ht.cineH=.8+Math.random()*3);let _=s.h+Math.PI+Ht.cineA;f.set(s.x+Math.sin(_)*Ht.cineD,l+Ht.cineH,s.z+Math.cos(_)*Ht.cineD),Ht.pos.lerp(f,1-Math.exp(-i*2)),p.set(s.x,l+.8,s.z),Ht.look.lerp(p,1-Math.exp(-i*12)),d=55}Ht.fov+=(d-Ht.fov)*Math.min(1,i*1.5),Pe.fov=Ht.fov,Pe.updateProjectionMatrix(),Pe.position.copy(Ht.pos),Ht.shake>.001&&(Pe.position.x+=(Math.random()-.5)*Ht.shake*.5,Pe.position.y+=(Math.random()-.5)*Ht.shake*.5,Ht.shake*=Math.exp(-i*6)),Pe.lookAt(Ht.look)}function g_(i,t){let{veh:e}=st.player;Ht.orbit+=i*.18;let n=t?6.2:7.5,s=e.h+(t?.75:Math.PI*.75)+Math.sin(Ht.orbit)*(t?.6:.9);Pe.position.set(e.x+Math.sin(s)*n,e.roadY+(t?1.6:2.2),e.z+Math.cos(s)*n),Pe.fov=50,Pe.updateProjectionMatrix(),Pe.lookAt(e.x,e.roadY+.7,e.z)}function x_(){let i=_o[Se.mode];K={mode:i,time:i.timer,score:0,dist:0,startS:st.track.P(6).s,driftTotal:0,overtakes:0,cpCount:0,nextCp:l_,maxSpeed:0,bestDrift:0,hits:0,cd:3.6,cdShown:4,started:!1,over:!1,braking:!1,drift:{active:!1,pts:0,mult:1,time:0,idle:0,angle:0},driftShowT:0,elapsed:0,acc:0}}function Sr(){ie.init(),So(Se.map,Math.random()*1e6|0),x_(),p_(K.mode.rivals),Ht.mode=+Lt.camera,le="countdown",jn(null),yt("hud").classList.remove("hidden"),hh&&yt("touch").classList.remove("hidden"),yt("hud-mode").textContent=`${K.mode.name} \xB7 ${st.map.name}`,Fs={x:0,y:0},dh(),mh(.016,!0)}function Os(i,t=1.6,e="#fff"){let n=yt("hud-msg");n.textContent=i,n.style.color=e,n.classList.add("show"),clearTimeout(Os._t),Os._t=setTimeout(()=>n.classList.remove("show"),t*1e3)}var xd=0;function __(i){let t=performance.now();return t-xd<330?!1:(xd=t,ie.crash(Math.min(i,25)),Ht.shake=i>8?Math.min(.25,i/60):0,!0)}function v_(i){if(__(i)&&(K.hits++,K.drift.active&&K.drift.pts>0&&i>3)){let t=yt("drift-pts");t.textContent=Math.floor(K.drift.pts),t.className="drift-pts lost",yt("drift-info").textContent="\u0423\u0414\u0410\u0420 \u2014 \u0441\u0435\u0440\u0438\u044F \u0441\u0433\u043E\u0440\u0435\u043B\u0430",K.driftShowT=1.3,K.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}}function y_(i){let{veh:t}=st.player;t.px=t.x,t.pz=t.z,t.ph=t.h,t.pY=t.roadY;let e=st.track,n=t.step(vo,i,{grip:st.map.grip*(Lt.easy?1.12:1),assist:Lt.assist?Lt.easy?1.15:1:0,manual:Lt.manual,easy:Lt.easy});n.shifted&&(ie.shift(),n.shifted>0&&i.throttle>.5&&Math.random()<.35&&ie.backfire()),i.shiftUp=i.shiftDown=!1;let s=e.project(t.x,t.z,t.idx);t.idx=s.idx,t.lat=s.lat,t.roadY=s.y,t.slope=s.slope,t.offroad=Math.abs(s.lat)>e.hw+.3&&Math.abs(s.k)<1/170;let r=t.spec.body,a=t.h-s.h,o=Math.abs(Math.cos(a))*r.W/2+Math.abs(Math.sin(a))*r.L/2,l=e.wall-.1-o;if(Math.abs(s.lat)>l){let c=Math.sign(s.lat),h=t.collideWall(-c*s.lx,-c*s.lz,Math.abs(s.lat)-l,.3);h>1.5&&K&&v_(h)}}function M_(){var t,e;let{veh:i}=st.player;for(let n of st.rivals){let s=Math.hypot(n.x-i.x,n.z-i.z),r=xe((s-4)/14,.3,1);if(!(Math.abs(r-((t=n.op)!=null?t:1))<.02)){n.op=r;for(let a of n.ghostMats)a.opacity=r*((e=a.userData.baseOp)!=null?e:1);for(let a of n.outlines)a.visible=r>.95}}}function S_(i){let{veh:t,model:e}=st.player,n=st.track,s=K._events||[],r=le==="race",a=r?Mo.read(i,t.speed):{throttle:0,brake:0,steer:0,handbrake:0};if(le==="over"&&(a={throttle:0,brake:.35,steer:0,handbrake:0}),le==="countdown"){let o=Mo.read(i,0);K.cd-=i;let l=Math.ceil(K.cd-.6);l!==K.cdShown&&(K.cdShown=l,yt("countdown").textContent=l>0?l:"\u0421\u0422\u0410\u0420\u0422!",ie.countdown(l<=0)),t.rpm+=(t.spec.idle+o.throttle*t.spec.redline*.75-t.rpm)*Math.min(1,i*6),K.cd<=.6&&(le="race",K.started=!0,setTimeout(()=>{yt("countdown").textContent=""},700))}else{for(let l of s)l==="shiftUp"&&(a.shiftUp=!0),l==="shiftDown"&&(a.shiftDown=!0);K.acc+=i;let o=0;for(;K.acc>=vo&&o<24;)K.acc-=vo,y_(a),o++;o===24&&(K.acc=0)}K.braking=a.brake>.1&&t.u>.5;for(let o of st.rivals)o.update(i,n,{idx:t.idx,lat:t.lat,t:K.elapsed},K.started);M_(),n.update(t.idx);for(let o of st.rivals){let l=o.fi>t.idx;r&&o.ahead&&!l&&K.mode.id==="race"&&(K.overtakes++,Os("\u041E\u0411\u0413\u041E\u041D!  +300",1.2,"#7cff4f"),ie.score()),o.ahead=l,t.idx-o.fi>170&&(o.fi=t.idx+180+Math.random()*140,o.v=o.top*.6,o.d=(Math.random()*2-1)*(n.hw-2),o.targetD=o.d,o.ahead=!0,n.ensure(Math.ceil(o.fi)+80))}ph(i),T_(i,a),le==="race"&&b_(i,t),ie.update(t,t.spec,le==="countdown"?Math.max(0,(t.rpm-t.spec.idle)/t.spec.redline):a.throttle,Math.max(xe((Math.abs(t.beta)-.15)*2.2,0,1),t.lockR>.5&&t.speed>8?.6:0),t.offroad,t.speed,le!=="paused"),mh(i),I_(i)}function b_(i,t){K.elapsed+=i;let e=t.speed,n=e*3.6;K.maxSpeed=Math.max(K.maxSpeed,n),K.dist=Math.max(K.dist,st.track.P(t.idx).s-K.startS);let s=Math.abs(t.beta)*57.3,r=K.drift;if(e>8.5&&s>11&&s<110&&t.u>2&&!t.offroad)r.active=!0,r.idle=0,r.time+=i,r.mult=Math.min(5,1+Math.floor(r.time/2.5)),r.pts+=s*e*i*.35*r.mult,r.angle=s;else if(r.active&&(r.idle+=i,r.idle>(t.offroad?.3:1.1))){let o=Math.floor(r.pts);if(o>30){K.driftTotal+=o,K.bestDrift=Math.max(K.bestDrift,o),K.mode.id==="drift"&&(K.time+=Math.min(8,o/1200));let l=yt("drift-pts");l.textContent="+"+o,l.className="drift-pts banked",yt("drift-info").textContent=o>5e3?"\u041B\u0415\u0413\u0415\u041D\u0414\u0410\u0420\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":o>2e3?"\u041E\u0422\u041B\u0418\u0427\u041D\u042B\u0419 \u0414\u0420\u0418\u0424\u0422!":"\u0414\u0420\u0418\u0424\u0422 \u0417\u0410\u0421\u0427\u0418\u0422\u0410\u041D",K.driftShowT=1.3,ie.score()}K.drift={active:!1,pts:0,mult:1,time:0,idle:0,angle:0}}if(t.idx>=K.nextCp){if(K.cpCount++,K.nextCp+=sh,K.mode.timer){let o=Math.round(K.mode.bonus(K.cpCount-1));K.time+=o,Os(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422  +${o} \u0441`,1.8,"#ffcc00")}else Os(`\u0427\u0415\u041A\u041F\u041E\u0418\u041D\u0422 ${K.cpCount}`,1.5,"#ffcc00");ie.checkpoint()}K.mode.id==="race"?K.score=Math.floor(K.dist)+K.overtakes*300+Math.floor(K.driftTotal/4):K.mode.id==="drift"?K.score=K.driftTotal:K.score=Math.floor(K.dist),K.mode.timer&&(K.time-=i,K.time<=0&&(K.time=0,E_()))}function E_(){K.drift.active&&K.drift.pts>30&&(K.driftTotal+=Math.floor(K.drift.pts),K.bestDrift=Math.max(K.bestDrift,Math.floor(K.drift.pts)),K.mode.id==="drift"&&(K.score=K.driftTotal)),le="over",ie.gameOver();let i=`${K.mode.id}_${st.map.id}`,t=Si[i],e=K.score>0&&(!t||K.score>t.score);e&&(Si[i]={score:K.score,dist:Math.floor(K.dist),drift:K.bestDrift,car:$n[Se.car].name,date:new Date().toLocaleDateString("ru-RU")},Hi.set("records",Si)),yt("over-title").textContent=K.mode.timer?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E!":"\u0417\u0430\u0435\u0437\u0434 \u043E\u043A\u043E\u043D\u0447\u0435\u043D",yt("over-record").classList.toggle("show",e&&K.score>0);let n=[["\u041E\u0447\u043A\u0438",K.score.toLocaleString("ru-RU")],["\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F",`${(K.dist/1e3).toFixed(2)} \u043A\u043C`],["\u041C\u0430\u043A\u0441. \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C",w_(K.maxSpeed)],["\u041B\u0443\u0447\u0448\u0438\u0439 \u0434\u0440\u0438\u0444\u0442",K.bestDrift.toLocaleString("ru-RU")],["\u0412\u0441\u0435 \u043E\u0447\u043A\u0438 \u0434\u0440\u0438\u0444\u0442\u0430",K.driftTotal.toLocaleString("ru-RU")],["\u0427\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u044B",K.cpCount]];K.mode.id==="race"&&n.splice(4,0,["\u041E\u0431\u0433\u043E\u043D\u044B",K.overtakes]),n.push(["\u0423\u0434\u0430\u0440\u044B",K.hits],["\u0412\u0440\u0435\u043C\u044F \u0432 \u0437\u0430\u0435\u0437\u0434\u0435",to(K.elapsed)]),t&&!e&&n.push(["\u0420\u0435\u043A\u043E\u0440\u0434",t.score.toLocaleString("ru-RU")]),yt("over-stats").innerHTML=n.map(([s,r])=>`<span>${s}</span><b>${r}</b>`).join(""),yt("touch").classList.add("hidden"),setTimeout(()=>{le==="over"&&jn("over")},900),Ht.mode=3,Ht.cineT=0}var w_=i=>Lt.units==="mph"?`${Math.round(i/1.609)} mph`:`${Math.round(i)} \u043A\u043C/\u0447`;function T_(i,t){let{veh:e}=st.player,n=e.spec.body,s=e.speed,r=Math.sin(e.h),a=Math.cos(e.h),o=a,l=-r,c=Math.max(e.rearSlide*(Math.abs(e.beta)>.1||e.lockR>0?1:.4),e.spinR),h=(f,p)=>[e.x+r*f+o*p,e.z+a*f+l*p],u=+Lt.quality;for(let f of[1,-1]){let[p,_]=h(n.wheelR,f*n.track/2);Lt.smoke&&c>.55&&s>8&&!e.offroad&&Math.abs(e.beta)>.35&&Math.random()<(u>0?2:1)*i*Math.min(1,(Math.abs(e.beta)-.3)*3)&&st.smoke.emit(p,e.roadY,_,e.vx,e.vz,c,st.map.night?.1:.15),Lt.smoke&&e.offroad&&s>4&&Math.random()<5*i&&st.dust.emit(p,e.roadY,_,e.vx,e.vz,1,.55),st.skids.add(f>0?0:1,p,e.roadY,_,o,l,!e.offroad&&c>.42?Math.min(1,(c-.3)*1.6):0);let[g,m]=h(n.wheelF,f*n.track/2);st.skids.add(f>0?2:3,g,e.roadY,m,o,l,!e.offroad&&(e.frontSlide>.85||t.brake>.5&&s>15&&e.u>0&&e.lockR>0)?.6:0)}for(let f of st.rivals);st.smoke.update(i),st.dust.update(i),st.snow&&st.snow.update(i,Pe);let d=st.sunDir;st.sun.position.set(e.x+d.x*90,e.roadY+d.y*90,e.z+d.z*90),st.sun.target.position.set(e.x,e.roadY,e.z),st.sky.position.copy(Pe.position),st.farPlane.position.set(e.x,e.roadY-14,e.z)}var A_=yt("gauge").getContext("2d"),R_=yt("minimap").getContext("2d"),_d={};function Ns(i,t){_d[i]!==t&&(_d[i]=t,yt(i).textContent=t)}function C_(i){let t=A_,e=220,n=110,s=118,r=92;t.clearRect(0,0,e,e);let a=Math.PI*.75,o=Math.PI*2.25;t.lineCap="round",t.beginPath(),t.arc(n,s,r,a,o),t.strokeStyle="rgba(0,0,0,0.45)",t.lineWidth=16,t.stroke();let l=xe(i.rpm/i.spec.redline,0,1);t.beginPath(),t.arc(n,s,r,a,a+(o-a)*l),t.strokeStyle=l>.95?"#ff3b3b":l>.85?"#ffb300":"#ffcc00",t.lineWidth=10,t.stroke();for(let u=0;u<=10;u++){let d=a+(o-a)*u/10;t.beginPath(),t.moveTo(n+Math.cos(d)*(r-16),s+Math.sin(d)*(r-16)),t.lineTo(n+Math.cos(d)*(r-24),s+Math.sin(d)*(r-24)),t.strokeStyle=u>=9?"#ff5050":"rgba(255,255,255,0.7)",t.lineWidth=2,t.stroke()}let c=i.kmh,h=Lt.units==="mph"?c/1.609:c;t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font="italic 900 50px Segoe UI, Arial",t.fillText(Math.round(h),n,s-4),t.font="600 13px Segoe UI, Arial",t.fillStyle="rgba(255,255,255,0.75)",t.fillText(Lt.units==="mph"?"MPH":"\u041A\u041C/\u0427",n,s+26),t.font="900 26px Segoe UI, Arial",t.fillStyle="#ffcc00",t.fillText(i.gear===-1?"R":i.speed<.5&&i.gear===1?"N":String(i.gear),n,s+58)}function P_(i){let t=R_,e=170,n=85,s=112;t.clearRect(0,0,e,e),t.save(),t.beginPath(),t.arc(85,85,84,0,Math.PI*2),t.clip();let r=.2,a=Math.sin(i.h),o=Math.cos(i.h),l=(h,u)=>{let d=h-i.x,f=u-i.z,p=d*a+f*o,_=d*o-f*a;return[n-_*r,s-p*r]},c=st.track;t.lineCap="round",t.lineJoin="round",t.beginPath();for(let h=Math.max(c.base,Math.floor(i.idx)-60);h<Math.min(c.lastIdx,i.idx+320);h+=3){let u=c.P(h),[d,f]=l(u.x,u.z);h===Math.max(c.base,Math.floor(i.idx)-60)?t.moveTo(d,f):t.lineTo(d,f)}if(t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=6,t.stroke(),K&&K.nextCp<c.lastIdx){let h=c.P(K.nextCp),[u,d]=l(h.x,h.z);t.fillStyle="#ffcc00",t.beginPath(),t.arc(u,d,5,0,Math.PI*2),t.fill()}for(let h of st.rivals){let[u,d]=l(h.x,h.z);t.fillStyle="#ff4b4b",t.beginPath(),t.arc(u,d,4,0,Math.PI*2),t.fill()}t.restore(),t.fillStyle="#4bd2ff",t.beginPath(),t.moveTo(n,s-8),t.lineTo(n-6,s+6),t.lineTo(n+6,s+6),t.closePath(),t.fill()}function I_(i){let{veh:t}=st.player;if(C_(t),P_(t),!K)return;K.mode.timer?(Ns("hud-timer",to(K.time)),yt("hud-timer").classList.toggle("warn",K.time<10)):Ns("hud-timer",to(K.elapsed));let e=Math.max(0,(K.nextCp-t.idx)*cn);Ns("hud-next",`\u0434\u043E \u0447\u0435\u043A\u043F\u043E\u0438\u043D\u0442\u0430 ${Math.round(e)} \u043C`),Ns("hud-score",K.score.toLocaleString("ru-RU")),Ns("hud-dist",`${(K.dist/1e3).toFixed(2)} \u043A\u043C${K.mode.id==="race"?` \xB7 \u043E\u0431\u0433\u043E\u043D\u043E\u0432: ${K.overtakes}`:""}`);let n=Si[`${K.mode.id}_${st.map.id}`];Ns("hud-sub",n?`\u0440\u0435\u043A\u043E\u0440\u0434: ${n.score.toLocaleString("ru-RU")}`:"\u0440\u0435\u043A\u043E\u0440\u0434\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442");let s=yt("hud-drift");if(K.drift.active&&K.drift.pts>5){s.classList.add("show");let r=yt("drift-pts");r.className="drift-pts",r.textContent=Math.floor(K.drift.pts).toLocaleString("ru-RU"),yt("drift-info").textContent=`x${K.drift.mult}  \xB7  \u0443\u0433\u043E\u043B ${Math.round(K.drift.angle)}\xB0`}else K.driftShowT>0?(K.driftShowT-=i,s.classList.add("show")):s.classList.remove("show")}var L_=["main","setup","garage","records","settings","controls","pause","over"];function jn(i){for(let t of L_)yt("menu-"+t).classList.toggle("show",t===i);yt("loading").classList.remove("show"),["main","setup","garage","records","settings","controls"].includes(i)&&(le!=="menu"&&Md(),le="menu",yt("hud").classList.add("hidden"),yt("touch").classList.add("hidden"),Fs=i==="setup"?{x:0,y:.18}:{x:innerWidth>800?.16:0,y:innerWidth>800?0:.2},dh(),Pe.updateProjectionMatrix()),i==="setup"&&lh(),i==="garage"&&xh(),i==="records"&&bd(),i==="settings"&&D_(),gh=i}var gh="main";function Md(){K=null,yt("countdown").textContent="",So(Se.map,7)}document.querySelectorAll("[data-go]").forEach(i=>i.addEventListener("click",()=>{ie.init(),ie.click(),jn(i.dataset.go)}));function lh(){yt("mode-cards").innerHTML=_o.map((i,t)=>`<div class="card ${t===Se.mode?"sel":""}" data-mode="${t}"><b>${i.name}</b><small>${i.desc}</small></div>`).join(""),yt("map-cards").innerHTML=eo.map((i,t)=>{let e=Si[`${_o[Se.mode].id}_${i.id}`];return`<div class="card ${t===Se.map?"sel":""}" data-map="${t}"><span class="tag">${i.tag}</span><b>${i.name}</b><small>${i.desc}</small>${e?`<span class="rec">\u0440\u0435\u043A\u043E\u0440\u0434: ${e.score.toLocaleString("ru-RU")}</span>`:""}</div>`}).join(""),yt("setup-car-name").textContent=$n[Se.car].name,document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>{Se.mode=+i.dataset.mode,yo(),ie.click(),lh()})),document.querySelectorAll("[data-map]").forEach(i=>i.addEventListener("click",()=>{let t=+i.dataset.map;ie.click(),t!==Se.map&&(Se.map=t,yo(),So(Se.map,7)),lh()}))}yt("btn-start").addEventListener("click",()=>{ie.click(),Sr()});function xh(){var n;let i=$n[Se.car];yt("car-name").textContent=i.name,yt("car-tag").textContent=i.tag,yt("car-desc").textContent=i.desc;let t=Ju(i);yt("car-stats").innerHTML=[["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",t.top],["\u0420\u0430\u0437\u0433\u043E\u043D",t.accel],["\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C",t.handling],["\u0414\u0440\u0438\u0444\u0442",t.drift]].map(([s,r])=>`<div class="stat"><span>${s}</span><div class="bar"><i style="width:${Math.round(r*100)}%"></i></div></div>`).join(""),yt("car-spec").textContent=`${i.hp} \u043B.\u0441. \xB7 ${i.torque} \u041D\xB7\u043C \xB7 ${i.mass} \u043A\u0433 \xB7 \u043F\u0440\u0438\u0432\u043E\u0434 ${i.drive==="RWD"?"\u0437\u0430\u0434\u043D\u0438\u0439":i.drive==="AWD"?"\u043F\u043E\u043B\u043D\u044B\u0439":"\u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439"} \xB7 ${i.gears.length} \u043F\u0435\u0440\u0435\u0434\u0430\u0447`;let e=(n=Se.colors[i.id])!=null?n:0;yt("car-colors").innerHTML=i.colors.map((s,r)=>`<div class="swatch ${r===e?"sel":""}" style="background:${s}" data-col="${r}"></div>`).join(""),document.querySelectorAll("[data-col]").forEach(s=>s.addEventListener("click",()=>{Se.colors[i.id]=+s.dataset.col,yo(),ie.click(),st.player.model.bodyMat.color.set(i.colors[+s.dataset.col]),xh()}))}function Sd(i){Se.car=(Se.car+i+$n.length)%$n.length,yo(),ie.click();let{veh:t}=st.player,e=st.track.P(6);fh(6,-2.8),xh()}yt("car-prev").addEventListener("click",()=>Sd(-1));yt("car-next").addEventListener("click",()=>Sd(1));function bd(){let i="<table><tr><th>\u0420\u0435\u0436\u0438\u043C</th><th>\u041A\u0430\u0440\u0442\u0430</th><th>\u041E\u0447\u043A\u0438</th><th>\u041A\u043C</th><th>\u041C\u0430\u0448\u0438\u043D\u0430</th></tr>",t=!1;for(let e of _o)for(let n of eo){let s=Si[`${e.id}_${n.id}`];s&&(t=!0,i+=`<tr><td>${e.name}</td><td>${n.name}</td><td><b>${s.score.toLocaleString("ru-RU")}</b></td><td>${(s.dist/1e3).toFixed(2)}</td><td>${s.car}</td></tr>`)}i+="</table>",yt("records-table").innerHTML=t?i:'<p class="hint">\u0420\u0435\u043A\u043E\u0440\u0434\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0441\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439!</p>'}yt("btn-reset-rec").addEventListener("click",()=>{confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u043A\u043E\u0440\u0434\u044B?")&&(Si={},Hi.set("records",Si),bd())});function D_(){yt("set-vol").value=Lt.vol,yt("set-music").checked=Lt.music,yt("set-assist").checked=Lt.assist,yt("set-manual").checked=Lt.manual,yt("set-quality").value=Lt.quality,yt("set-camera").value=Lt.camera,yt("set-units").value=Lt.units,yt("set-sfx").value=Lt.sfxVol,yt("set-musicvol").value=Lt.musicVol,yt("set-outline").checked=Lt.outline,yt("set-easy").checked=Lt.easy,yt("set-smoke").checked=Lt.smoke,yt("set-fps").value=Lt.fps,yt("set-showfps").checked=Lt.showFps}yt("set-vol").addEventListener("input",i=>{Lt.vol=+i.target.value,ie.setVolume(Lt.vol),nn()});yt("set-sfx").addEventListener("input",i=>{Lt.sfxVol=+i.target.value,ie.setSfxVol(Lt.sfxVol),nn()});yt("set-musicvol").addEventListener("input",i=>{Lt.musicVol=+i.target.value,ie.setMusicVol(Lt.musicVol),nn()});yt("set-outline").addEventListener("change",i=>{Lt.outline=i.target.checked,nn(),le==="menu"&&fh(6,-2.8)});yt("set-easy").addEventListener("change",i=>{Lt.easy=i.target.checked,nn()});yt("set-smoke").addEventListener("change",i=>{Lt.smoke=i.target.checked,nn(),st&&st.smoke.clear()});yt("set-music").addEventListener("change",i=>{Lt.music=i.target.checked,ie.setMusic(Lt.music),nn()});yt("set-assist").addEventListener("change",i=>{Lt.assist=i.target.checked,nn()});yt("set-manual").addEventListener("change",i=>{Lt.manual=i.target.checked,nn()});yt("set-quality").addEventListener("change",i=>{Lt.quality=+i.target.value,nn(),So(Se.map,7)});yt("set-camera").addEventListener("change",i=>{Lt.camera=+i.target.value,nn()});yt("set-units").addEventListener("change",i=>{Lt.units=i.target.value,nn()});yt("set-fps").addEventListener("change",i=>{Lt.fps=+i.target.value,nn()});yt("set-showfps").addEventListener("change",i=>{Lt.showFps=i.target.checked,nn()});function U_(){le!=="race"&&le!=="countdown"||(K.prevState=le,le="paused",jn("pause"),ie.update(st.player.veh,st.player.veh.spec,0,0,!1,0,!1))}function Ed(){le==="paused"&&(le=K.prevState,jn(null),xo=performance.now())}yt("btn-resume").addEventListener("click",()=>{ie.click(),Ed()});yt("btn-restart").addEventListener("click",()=>{ie.click(),Sr()});yt("btn-tomenu").addEventListener("click",()=>{ie.click(),jn("main")});yt("btn-again").addEventListener("click",()=>{ie.click(),Sr()});yt("btn-over-menu").addEventListener("click",()=>{ie.click(),jn("main")});function ch(i){for(let t of i){if(t==="mute"&&ie.setVolume(ie.volume>0?0:Lt.vol),t==="pause"&&(le==="paused"?Ed():U_()),le==="race"||le==="countdown"){if(t==="camera"){Ht.mode=(Ht.mode+1)%4,mh(.016,!0);let e=yt("cam-hint");e.textContent=m_[Ht.mode],e.classList.add("show"),clearTimeout(ch._t),ch._t=setTimeout(()=>e.classList.remove("show"),1200)}if(t==="reset"&&le==="race"){let{veh:e}=st.player,n=st.track.sample(Math.max(st.track.base+2,e.idx));e.reset(n.x,n.z,n.h),e.idx=Math.round(e.idx),e.roadY=n.y,e.px=void 0,e.ph=void 0,e.pY=void 0,e.pz=void 0,st.skids.last=[null,null,null,null],Os("\u041D\u0410 \u0422\u0420\u0410\u0421\u0421\u0423",.8)}}t==="enter"&&le==="menu"&&gh==="setup"&&Sr()}}var xo=performance.now(),Mi={frames:0,t:performance.now(),value:0};function wd(i){if(requestAnimationFrame(wd),Lt.fps>0&&i-xo<1e3/Lt.fps-.7)return;let t=Math.min(.05,(i-xo)/1e3);if(xo=i,Mi.frames++,i-Mi.t>=500){Mi.value=Math.round(Mi.frames*1e3/(i-Mi.t)),Mi.frames=0,Mi.t=i;let n=yt("fps");n.classList.toggle("hidden",!Lt.showFps),Lt.showFps&&(n.textContent=`${Mi.value} FPS`)}let e=Mo.takeEvents();ch(e),st&&(le==="menu"?(st.track.update(st.player.veh.idx),ph(t),st.sun.position.set(st.player.veh.x+st.sunDir.x*90,st.player.veh.roadY+st.sunDir.y*90,st.player.veh.z+st.sunDir.z*90),st.sun.target.position.set(st.player.veh.x,st.player.veh.roadY,st.player.veh.z),st.farPlane.position.set(st.player.veh.x,st.player.veh.roadY-14,st.player.veh.z),st.snow&&st.snow.update(t,Pe),g_(t,gh==="garage"),st.sky.position.copy(Pe.position)):(le==="countdown"||le==="race"||le==="over")&&(K._events=e,S_(t)),mn?mn.render():gn.render(Qn,Pe))}uh();Md();le="menu";jn("main");requestAnimationFrame(wd);window.__game={renderer:gn,get W(){return st},get G(){return K},get state(){return le},startRace:Sr,showScreen:jn,sel:Se,settings:Lt,cam:Ht};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

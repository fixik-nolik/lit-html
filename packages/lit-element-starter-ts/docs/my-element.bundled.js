/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol();class i{constructor(t,i){if(i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const e=t=>new i(t+"",s),h=new Map,n=(s,i)=>{t?s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,s.appendChild(i)}))},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return e(s)})(t):t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;window.JSCompiler_renameProperty=(t,s)=>t;const r={toAttribute(t,s){switch(s){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},l=(t,s)=>s!==t&&(s==s||t==t),c={attribute:!0,type:String,converter:r,reflect:!1,hasChanged:l};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πh=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πl=null,this.Πu=new Promise((t=>this.enableUpdating=t)),this.Πp=new Map,this.Πm(),this.requestUpdate()}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((s,i)=>{const e=this.Πv(i,s);void 0!==e&&(this.Πg.set(e,i),t.push(e))})),t}static createProperty(t,s=c){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(e){const h=this[t];this[s]=e,this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πg=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(o(t))}else void 0!==t&&s.push(o(t));return s}static Πv(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}addController(t){(this.Π_??(this.Π_=[])).push(t)}Πm(){this.constructor.elementProperties.forEach(((t,s)=>{this.hasOwnProperty(s)&&(this.Πi.set(s,this[s]),delete this[s])}))}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.hasUpdated||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(),this.Π_?.forEach((t=>t.connectedCallback?.())),this.Πh&&(this.Πh(),this.Πo=this.Πh=void 0)}enableUpdating(){}disconnectedCallback(){this.Π_?.forEach((t=>t.disconnectedCallback?.())),this.Πo=new Promise((t=>this.Πh=t))}attributeChangedCallback(t,s,i){this.O(t,i)}ΠU(t,s,i=c){const e=this.constructor.Πv(t,i);if(void 0!==e&&!0===i.reflect){const h=(i.converter?.toAttribute??r.toAttribute)(s,i.type);this.Πl=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this.Πl=null}}O(t,s){const i=this.constructor,e=i.Πg.get(t);if(void 0!==e&&this.Πl!==e){const t=i.getPropertyOptions(e),h=t.converter,n=h?.fromAttribute??("function"==typeof h?h:null)??r.fromAttribute;this.Πl=e,this[e]=n(s,t.type),this.Πl=null}}requestUpdate(t,s,i){let e=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||l)(this[t],s)?(this.Πp.has(t)||this.Πp.set(t,s),!0===i.reflect&&this.Πl!==t&&(void 0===this.Πj&&(this.Πj=new Map),this.Πj.set(t,i))):e=!1),!this.isUpdatePending&&e&&(this.Πu=this.Πk())}async Πk(){this.isUpdatePending=!0;try{for(await this.Πu;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,s)=>this[s]=t)),this.Πi=void 0);let t=!1;const s=this.Πp;try{t=this.shouldUpdate(s),t?(this.Π_?.forEach((t=>t.willUpdate?.())),this.willUpdate(s),this.Π_?.forEach((t=>t.update?.())),this.update(s)):this.Πq()}catch(s){throw t=!1,this.Πq(),s}t&&this.H(s)}willUpdate(t){}H(t){this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.Π_?.forEach((t=>t.updated?.())),this.updated(t)}Πq(){this.Πp=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πu}shouldUpdate(t){return!0}update(t){void 0!==this.Πj&&(this.Πj.forEach(((t,s)=>this.ΠU(s,this[s],t))),this.Πj=void 0),this.Πq()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var u;a.finalized=!0,a.shadowRootOptions={mode:"open"},globalThis.reactiveElementPlatformSupport?.({ReactiveElement:a}),(window.reactiveElementVersions||(window.reactiveElementVersions=[])).push("1.0.0-pre.1");const d=`lit$${(Math.random()+"").slice(9)}$`,f="?"+d,p=`<${f}>`,v=document,w=(t="")=>v.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,y=Array.isArray,g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^ -- "'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,k=/"/g,M=/^(?:script|style|textarea)$/i,x=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),O=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),U=new Map,j=v.createTreeWalker(v,133,null,!1),T=(t,s)=>{const i=t.length-1,e=[];let h,n=2===s?"<svg>":"",o=g;for(let s=0;s<i;s++){const i=t[s];let r,l,c=-1,a=0;for(;a<i.length&&(o.lastIndex=a,l=o.exec(i),null!==l);)a=o.lastIndex,o===g?"!--"===l[1]?o=m:void 0!==l[1]?o=S:void 0!==l[2]?(M.test(l[2])&&(h=RegExp("</"+l[2],"g")),o=C):void 0!==l[3]&&(o=C):o===C?">"===l[0]?(o=h??g,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?C:'"'===l[3]?k:$):o===k||o===$?o=C:o===m||o===S?o=g:(o=C,h=void 0);n+=o===g?i+p:c>=0?(e.push(r),i.slice(0,c)+"$lit$"+i.slice(c)+d):i+d+(-2===c?":"+s:"")}return[n+(t[i]||"<?>")+(2===s?"</svg>":""),e]};class E{constructor({strings:t,_$litType$:s},i){let e;this.o=[],this.C=i;let h=0,n=0,o=0;const r=t.length-1,[l,c]=T(t,s);if(this.B=this.A(l),j.currentNode=this.B.content,2===s){const t=this.B.content,s=t.firstChild;s.remove(),t.append(...s.childNodes)}for(;null!==(e=j.nextNode())&&n<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const s of e.getAttributeNames())if(s.endsWith("$lit$")){const i=c[o++],r=e.getAttribute(i.toLowerCase()+"$lit$");t.push(s);const l=r.split(d),a=/([.?@])?(.*)/.exec(i);this.o.push({h:1,l:h,u:a[2],v:l,p:"."===a[1]?_:"?"===a[1]?q:"@"===a[1]?B:z}),n+=l.length-1}else s.startsWith(d)&&(t.push(s),this.o.push({h:6,l:h}));for(const s of t)e.removeAttribute(s)}if(M.test(e.tagName)){const t=e.textContent.split(d),s=t.length-1;if(s>0){e.textContent="";for(let i=0;i<s;i++)e.append(t[i]||w()),this.o.push({h:2,l:++h}),n++;e.append(t[s]||w())}}}else if(8===e.nodeType)if(e.data===f)n++,this.o.push({h:2,l:h});else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.o.push({h:7,l:h}),n++,t+=d.length-1}h++}}A(t){const s=v.createElement("template");return s.innerHTML=t,s}}function P(t,s,i=t,e){var h;let n=void 0!==e?i.Σ_?.[e]:i.Σm;const o=b(s)?void 0:s._$litDirective$;return n?.constructor!==o&&(n?.R?.(!1),n=void 0===o?void 0:new o({...t,$:t,P:i,g:e}),void 0!==e?((h=i).Σ_??(h.Σ_=[]))[e]=n:i.Σm=n),void 0!==n&&(s=n.k(s.values)),s}class N{constructor(t,s){this.o=[],this.Q=void 0,this.G=t,this.P=s}V(t){const{B:{content:s},o:i}=this.G,e=v.importNode(s,!0);j.currentNode=e;let h=j.nextNode(),n=0,o=0,r=i[0];for(;void 0!==r&&null!==h;){if(n===r.l){let s;2===r.h?s=new R(h,h.nextSibling,this,t):1===r.h?s=new r.p(h,r.u,r.v,this,t):6===r.h&&(s=new H(h,this,t)),this.o.push(s),r=i[++o]}void 0!==r&&n!==r.l&&(h=j.nextNode(),n++)}return e}j(t){let s=0;for(const i of this.o)void 0!==i&&(void 0!==i.strings?(i.M(t,i,s),s+=i.strings.length-2):i.M(t[s])),s++}}class R{constructor(t,s,i,e){this.type=2,this.Q=void 0,this.D=t,this.E=s,this.P=i,this.options=e}setConnected(t){this.S?.(t)}get parentNode(){return this.D.parentNode}M(t,s=this){t=P(this,t,s),b(t)?t===A?(this.T(),this.L=A):t!==this.L&&t!==O&&this.Z(t):void 0!==t._$litType$?this.U(t):void 0!==t.nodeType?this.Y(t):(t=>y(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.q(t):this.Z(t)}X(t,s=this.E){return this.D.parentNode.insertBefore(t,s)}Y(t){this.L!==t&&(this.T(),this.L=this.X(t))}Z(t){const s=this.D.nextSibling;t??(t=""),null!==s&&3===s.nodeType&&(null===this.E?null===s.nextSibling:s===this.E.previousSibling)?s.data=t:this.Y(v.createTextNode(t)),this.L=t}U(t){const{values:s,strings:i}=t,e=this.F(i,t);if(this.L?.G===e)this.L.j(s);else{const t=new N(e,this),i=t.V(this.options);t.j(s),this.Y(i),this.L=t}}F(t,s){let i=U.get(t);return void 0===i&&U.set(t,i=new E(s)),i}q(t){y(this.L)||(this.L=[],this.T());const s=this.L;let i,e=0;for(const h of t)e===s.length?s.push(i=new R(this.X(w()),this.X(w()),this,this.options)):i=s[e],i.M(h),e++;e<s.length&&(this.T(i?.E.nextSibling,e),s.length=e)}T(t=this.D.nextSibling,s){for(this.S?.(!1,!0,s);t&&t!==this.E;){const s=t.nextSibling;t.remove(),t=s}}}class z{constructor(t,s,i,e,h){this.type=1,this.L=A,this.Q=void 0,this.tt=void 0,this.element=t,this.name=s,this.P=e,this.options=h,i.length>2||""!==i[0]||""!==i[1]?(this.L=Array(i.length-1).fill(A),this.strings=i):this.L=A}get tagName(){return this.element.tagName}M(t,s=this,i,e){const h=this.strings;let n=!1;if(void 0===h)t=P(this,t,s,0),n=!b(t)||t!==this.L&&t!==O,n&&(this.L=t);else{const e=t;let o,r;for(t=h[0],o=0;o<h.length-1;o++)r=P(this,e[i+o],s,o),r===O&&(r=this.L[o]),n||(n=!b(r)||r!==this.L[o]),r===A?t=A:t!==A&&(t+=(r??"")+h[o+1]),this.L[o]=r}n&&!e&&this.it(t)}it(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _ extends z{constructor(){super(...arguments),this.type=3}it(t){this.element[this.name]=t===A?void 0:t}}class q extends z{constructor(){super(...arguments),this.type=4}it(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class B extends z{constructor(){super(...arguments),this.type=5}M(t,s=this){if((t=P(this,t,s,0)??A)===O)return;const i=this.L,e=t===A&&i!==A||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,h=t!==A&&(i===A||e);e&&this.element.removeEventListener(this.name,this,i),h&&this.element.addEventListener(this.name,this,t),this.L=t}handleEvent(t){"function"==typeof this.L?this.L.call(this.options?.host??this.element,t):this.L.handleEvent(t)}}class H{constructor(t,s,i){this.element=t,this.type=6,this.Q=void 0,this.tt=void 0,this.P=s,this.options=i}M(t){P(this,t)}}globalThis.litHtmlPlatformSupport?.(E,R),((u=globalThis).litHtmlVersions??(u.litHtmlVersions=[])).push("2.0.0-pre.4"),(window.litElementVersions||(window.litElementVersions=[])).push("3.0.0-pre.2");class J extends a{constructor(){super(...arguments),this.I={host:this},this.Φt=void 0}createRenderRoot(){var t;const s=super.createRenderRoot();return(t=this.I).renderBefore??(t.renderBefore=s.firstChild),s}update(t){const s=this.render();super.update(t),this.Φt=((t,s,i)=>{const e=i?.renderBefore??s;let h=e.t;if(void 0===h){const t=i?.renderBefore??null;e.t=h=new R(s.insertBefore(w(),t),t,void 0,i)}return h.M(t),h})(s,this.renderRoot,this.I)}connectedCallback(){super.connectedCallback(),this.Φt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.Φt?.setConnected(!1)}render(){return O}}J.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:J}),globalThis.litElementPlatformSupport?.({LitElement:J});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const L=(t,s)=>"method"===s.kind&&s.descriptor&&!("value"in s.descriptor)?{...s,finisher(i){i.createProperty(s.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(i){i.createProperty(s.key,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Z(t){return(s,i)=>void 0!==i?((t,s,i)=>{s.constructor.createProperty(i,t)})(t,s,i):L(t,s)
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}var D=function(t,s,i,e){for(var h,n=arguments.length,o=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,r=t.length-1;r>=0;r--)(h=t[r])&&(o=(n<3?h(o):n>3?h(s,i,o):h(s,i))||o);return n>3&&o&&Object.defineProperty(s,i,o),o};let V=class extends J{constructor(){super(...arguments),this.name="World",this.count=0}render(){return x`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}foo(){return"foo"}};V.styles=((t,...e)=>{const n=e.reduce(((s,e,h)=>s+(t=>{if(t instanceof i)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[h+1]),t[0]);let o=h.get(n);return void 0===o&&h.set(n,o=new i(n,s)),o})`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,D([Z()],V.prototype,"name",void 0),D([Z({type:Number})],V.prototype,"count",void 0),V=D([(t=>s=>"function"==typeof s?((t,s)=>(window.customElements.define(t,s),s))(t,s):((t,s)=>{const{kind:i,elements:e}=s;return{kind:i,elements:e,finisher(s){window.customElements.define(t,s)}}})(t,s))("my-element")],V);export{V as MyElement};

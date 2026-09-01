import{a as P}from"./chunk-5GI6SCRS.js";import{Ca as d,Z as g,da as I}from"./chunk-HTVNYOGK.js";import{a as u,b as f,h as v}from"./chunk-JBJZLY4B.js";var y=class l{isVisible=d(!1);labelData=d(null);printQueue=d([]);currentIndex=d(0);isAutoMode=d(!1);open(){this.isVisible.set(!0)}openWithData(t){this.labelData.set(t),this.printQueue.set([]),this.currentIndex.set(0),this.isAutoMode.set(!1),this.isVisible.set(!0)}openWithQueue(t){let e=t.map((r,i)=>f(u({},r),{id:i,status:"pending"}));this.printQueue.set(e),this.labelData.set(null),this.currentIndex.set(0),this.isAutoMode.set(!1),this.isVisible.set(!0)}updateQueueItemStatus(t,e){let i=this.printQueue().map(a=>a.id===t?f(u({},a),{status:e}):a);this.printQueue.set(i)}nextItem(){let t=this.currentIndex(),e=this.printQueue();t<e.length-1&&this.currentIndex.set(t+1)}getCurrentItem(){let t=this.printQueue(),e=this.currentIndex();return t[e]||null}addToQueue(t){let e=this.printQueue(),r=e.length>0?Math.max(...e.map(a=>a.id))+1:0,i=t.map((a,h)=>f(u({},a),{id:r+h,status:"pending"}));this.printQueue.update(a=>[...a,...i])}close(){this.isVisible.set(!1),this.labelData.set(null),this.printQueue.set([]),this.currentIndex.set(0),this.isAutoMode.set(!1)}static \u0275fac=function(e){return new(e||l)};static \u0275prov=g({token:l,factory:l.\u0275fac,providedIn:"root"})};var Q="pwa_native_print_size",p={widthIn:2.5,heightIn:1,fontPt:12,withQr:!0,arrangement:"stacked"},S=class l{qrCodeService=I(P);isVisible=d(!1);data=d(null);dataList=d([]);size=d(this.loadStoredSize());printAttemptSeq=0;currentAttemptId=0;persistTimer=null;openWithData(t){this.data.set(t),this.dataList.set([]),this.isVisible.set(!0)}openWithList(t){if(!t?.length){this.data.set(null),this.dataList.set([]),this.isVisible.set(!0);return}this.data.set(null),this.dataList.set([...t]),this.isVisible.set(!0)}isBulkMode(){return this.dataList().length>0}close(){this.currentAttemptId++,this.flushPendingPersist(),this.isVisible.set(!1),this.data.set(null),this.dataList.set([])}updateSize(t){let e=u(u({},this.size()),t);this.size.set(e),this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.flushPendingPersist(),200)}flushPendingPersist(){this.persistTimer&&(clearTimeout(this.persistTimer),this.persistTimer=null);try{localStorage.setItem(Q,JSON.stringify(this.size()))}catch{}}doPrint(){return v(this,null,function*(){let t=this.isBulkMode()?this.dataList():this.data()?[this.data()]:[];if(t.length===0)return;let e=this.size(),r=++this.printAttemptSeq;this.currentAttemptId=r;let i=t.filter(n=>{let o=e.withQr&&!!n.qrData;return!!(n.line1||n.line2||o)});if(i.length===0)throw new Error("Nothing to print \u2014 every selected item is blank.");let a=yield Promise.all(i.map(n=>v(this,null,function*(){if(!(e.withQr&&n.qrData))return"";try{return yield this.qrCodeService.toSvgString(n.qrData,{margin:4})}catch(o){return console.warn("[NativePrint] QR SVG generation failed for one item \u2014 printing without QR:",o),""}})));if(this.currentAttemptId!==r)return;let h=this.buildPageHtml(i,a,e),s=document.createElement("iframe");s.setAttribute("aria-hidden","true"),s.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;";let c=!1;try{document.body.appendChild(s);let n=s.contentDocument||s.contentWindow?.document;if(!n)throw new Error("Could not access iframe document for printing.");if(n.open(),n.write(h),n.close(),yield new Promise(o=>{let m=s.contentWindow;if(!m){o();return}if(n.readyState==="complete"){o();return}m.addEventListener("load",()=>o(),{once:!0}),setTimeout(()=>o(),500)}),this.currentAttemptId!==r)return;s.contentWindow?.focus(),s.contentWindow?.print(),c=!0}finally{let n=/iPad|iPhone|iPod|Android/i.test(navigator.userAgent||"");setTimeout(()=>s.remove(),c?n?15e3:2e3:0)}})}buildPageHtml(t,e,r){let i=r.widthIn,a=r.heightIn,h=r.fontPt,s=Math.max(6,r.fontPt-2),c=t.length,n=r.arrangement==="stacked",o=n?i:i*c,m=n?a*c:a,D=i/2,b=.04,$=Math.max(.1,D-2*b),k=Math.max(.1,a-2*b),q=(h+s)*1.2/72,x=Math.min($,Math.max(.1,k-q)),A=t.map((z,T)=>this.buildLabelBlock(z,e[T]||"")).join("");return`<!doctype html>
<html><head><meta charset="utf-8"><title>Labels</title>
<style>
  @page { size: ${o}in ${m}in; margin: 0; }
  html, body { margin: 0; padding: 0; }
  .sheet {
    width: ${o}in;
    height: ${m}in;
    display: flex;
    flex-direction: ${n?"column":"row"};
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    background: #fff;
  }
  .label {
    width: ${i}in;
    height: ${a}in;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    /* Faint boundary between labels on a shared strip \u2014 visible in the
       modal preview and mostly invisible on cheap printers. Skip on the
       last label to avoid a stray edge line. */
    ${c>1?n?"border-bottom: 0.005in dashed #bbb;":"border-right: 0.005in dashed #bbb;":""}
  }
  .label:last-child { ${n?"border-bottom: 0;":"border-right: 0;"} }
  .half {
    flex: 1 1 50%;
    height: 100%;
    padding: ${b}in;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.03in;
    overflow: hidden;
  }
  .half.left { align-items: flex-start; text-align: left; border-right: 0.005in dashed #888; }
  .half.right { align-items: flex-end; text-align: right; }
  .qr { width: ${x}in; height: ${x}in; flex: 0 0 auto; }
  .qr svg { width: 100%; height: 100%; display: block; }
  .serial { font-size: ${h}pt; font-weight: 700; line-height: 1.1; word-break: break-word; }
  .name { font-size: ${s}pt; font-weight: 400; line-height: 1.15; word-break: break-word; }
</style>
</head>
<body><div class="sheet">${A}</div></body></html>`}buildLabelBlock(t,e){let r=L(t.line1||""),i=L(t.line2||""),h=`
      ${!!e?`<div class="qr">${e}</div>`:""}
      ${r?`<div class="serial">${r}</div>`:""}
      ${i?`<div class="name">${i}</div>`:""}
    `;return`<div class="label"><div class="half left">${h}</div><div class="half right">${h}</div></div>`}loadStoredSize(){try{let t=localStorage.getItem(Q);if(!t)return u({},p);let e=JSON.parse(t);return{widthIn:w(e.widthIn,.5,10,p.widthIn),heightIn:w(e.heightIn,.25,6,p.heightIn),fontPt:w(e.fontPt,6,48,p.fontPt),withQr:e.withQr!==!1,arrangement:e.arrangement==="inline"?"inline":"stacked"}}catch{return u({},p)}}static \u0275fac=function(e){return new(e||l)};static \u0275prov=g({token:l,factory:l.\u0275fac,providedIn:"root"})};function w(l,t,e,r){let i=Number(l);return Number.isFinite(i)?Math.min(e,Math.max(t,i)):r}function L(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}export{y as a,S as b};

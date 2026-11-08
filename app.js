const motionClip = index => 'assets/move'+index+'.mp4';
const $=s=>document.querySelector(s), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const picture=(n,cls='')=>`<img class="${cls}" src="assets/shot${String(n).padStart(2,'0')}.jpg" alt="${n===20?'Nathan Road at night':'Hong Kong Fallen 電影畫面'}" loading="eager">`;
let current=Math.max(0,Math.min(DECK.length-1,(parseInt(location.hash.slice(1))||1)-1));
function content(d){switch(d.type){
case 'cover':return `<div class="cover-copy"><p class="eyebrow">AI FILM WORKSHOP / 01</p><h1>${esc(d.title)}<br><em>${esc(d.accent)}</em></h1><h2>${esc(d.subtitle)}</h2><p>${esc(d.body)}</p></div><div class="cover-art">${picture(20,'cover-still')}</div>`;
case 'workflow':case 'story':case 'prompt':return `<div class="checklist">${d.items.map((r,i)=>`<div><b>0${i+1}</b><h2>${esc(r[0])}</h2><p>${esc(r[1])}</p></div>`).join('')}</div><p class="takeaway">${esc(d.body)}</p>`;
case 'caseintro':return `${picture(d.image,'case-image')}<p>${esc(d.body)}</p>`;
case 'framing':return `<div class="gallery cast">${[['遠景','交代環境'],['中景','看清動作'],['近景','突出表情']].map((r,i)=>`<figure>${picture([19,3,11][i],"framing-still framing-"+i)}<figcaption><h2>${r[0]}</h2><p>${r[1]}</p></figcaption></figure>`).join('')}</div>`;
case 'motion':return `<video class="motion-demo film-move" src="${motionClip(0)}" controls playsinline preload="metadata" aria-label="Hong Kong Fallen 鏡頭示範"></video><div class="motion-controls">${['固定','推近','跟拍','揭示'].map((label,i)=>`<button data-motion="${i}">${label}</button>`).join('')}</div><p id="motion-caption">固定鏡頭：新聞主播報道封城。</p>`;
case 'rhythm':return `<div class="lab-poster rhythm-number">3–5s</div><p>影格是一張畫面。鏡頭是一段連續畫面。切鏡是轉到下一個鏡頭。</p><p class="takeaway">先試每鏡 3–5 秒，再按動作、對白和情緒調整。</p>`;case 'tools':return `<div class="tools"><section><p class="label">故事與分鏡 / LLM AI 助手</p><div class="tool-names"><strong>ChatGPT</strong><strong>Claude</strong><strong>Gemini</strong></div><p>構思劇情、角色設定、分鏡及提示詞</p></section><section><p class="label">畫面與影片 / 生成工具</p><h2>Higgsfield <span>＋</span> Gemini 的影片功能</h2><p>實際功能取決於所選模型、帳戶方案及地區。</p></section></div>`;
case 'checks':return `<div class="checklist">${d.items.map((r,i)=>`<div><b>0${i+1}</b><h2>${esc(r[0])}</h2><p>${esc(r[1])}</p></div>`).join('')}</div><p class="takeaway">${esc(d.body)}</p>`;
case 'cast':case 'compare':return `<div class="gallery ${d.type}">${d.items.map(r=>`<figure>${picture(r[0])}<figcaption><h2>${esc(r[1])}</h2><p>${esc(r[2])}</p></figcaption></figure>`).join('')}</div>`;
case 'split':return `<div class="split"><div><blockquote>${esc(d.body)}</blockquote><p class="takeaway">${esc(d.takeaway)}</p></div>${picture(d.image)}</div>`;
case 'storyboard':return `<div class="storyboard">${d.items.map(r=>`<figure>${r[0]?picture(r[0]):`<div class="title-shot">片名</div>`}<figcaption><b>${esc(r[1])}</b><h2>${esc(r[2])}</h2></figcaption></figure>`).join('')}</div><p class="takeaway">${esc(d.body)}</p>`;
case 'annotate':return `<div class="annotate">${picture(d.image)}<div>${d.items.map(r=>`<section><p class="label">${esc(r[0])}</p><h2>${esc(r[1])}</h2></section>`).join('')}</div></div>`;
case 'demo':return `<div class="split"><ol>${d.items.map(r=>`<li>${esc(r)}</li>`).join('')}</ol>${picture(d.image)}</div>`;
case 'end':return `<div class="end-copy"><p>${esc(d.body)}</p><strong>YOUR<br><em>NEXT SCENE.</em></strong><h2>${esc(d.takeaway)}</h2><p class="takeaway">故事清楚 · 畫面連貫 · 聲音易聽</p><small>片尾註明 AI 生成及素材來源</small></div>`;
}}
function render(){const d=DECK[current];$('#stage').innerHTML=`<article class="slide ${d.type}">${d.type==='cover'?'':`<div class="slide-heading"><p class="eyebrow">${esc(d.chapter)}</p><h1>${esc(d.title)}</h1><p>${esc(d.subtitle)}</p></div>`}${content(d)}</article>`;$('#chapter').textContent=d.chapter;$('#counter').textContent=`${String(current+1).padStart(2,'0')} / ${DECK.length}`;$('#prev').disabled=current===0;$('#next').disabled=current===DECK.length-1;$('#progress').style.width=`${(current+1)/DECK.length*100}%`;$('#notes').innerHTML=`<h3>講者筆記</h3><p>${esc(d.notes)}</p>${d.sources?'<p>參考：'+d.sources.map(([label,url])=>`<a target="_blank" rel="noopener" href="${esc(url)}">${esc(label)}</a>`).join(' · ')+'</p>':''}`;document.title=`${current+1}. ${d.title} · Hong Kong Fallen`;}
function go(n){current=Math.max(0,Math.min(DECK.length-1,n));history.replaceState(null,'',`#${current+1}`);render();}
function notes(){const el=$('#notes');el.hidden=!el.hidden;$('#notesToggle').setAttribute('aria-pressed',String(!el.hidden));}
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{$('#fullscreen').textContent='請用瀏覽器 F11';}}
$('#prev').onclick=()=>go(current-1);$('#next').onclick=()=>go(current+1);$('#notesToggle').onclick=notes;$('#fullscreen').onclick=fullscreen;$('#overview').onclick=()=>$('#index').showModal();$('#closeIndex').onclick=()=>$('#index').close();$('#slideLinks').innerHTML=DECK.map((d,i)=>`<button data-page="${i}"><span>${String(i+1).padStart(2,'0')}</span>${esc(d.title)}</button>`).join('');$('#slideLinks').onclick=e=>{const b=e.target.closest('[data-page]');if(b){go(Number(b.dataset.page));$('#index').close();}};
document.addEventListener('keydown',e=>{if($('#index').open||e.ctrlKey||e.metaKey||e.altKey)return;if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(current+1);}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1);}if(e.key==='Home')go(0);if(e.key==='End')go(DECK.length-1);if(e.key.toLowerCase()==='n')notes();if(e.key.toLowerCase()==='f')fullscreen();});
$('#stage').addEventListener('click',e=>{
  const choice=e.target.closest('[data-motion]');
  if(!choice)return;
  const mode=Number(choice.dataset.motion);
  const demo=$('.motion-demo');
  demo.src=motionClip(mode);
  demo.play().catch(()=>{});
  $('#motion-caption').textContent=['固定鏡頭：新聞主播報道封城。','鏡頭輕推近 Leo，集中觀眾視線。','跟拍 Leo 起身離開掩體。','巨型感染者由煙火中現身，逐步揭示威脅。'][mode];
});
let touchX=null;$('#stage').addEventListener('touchstart',e=>touchX=e.changedTouches[0].clientX,{passive:true});$('#stage').addEventListener('touchend',e=>{if(touchX!==null){let delta=e.changedTouches[0].clientX-touchX;if(Math.abs(delta)>70)go(current+(delta<0?1:-1));touchX=null;}},{passive:true});window.addEventListener('hashchange',()=>go((parseInt(location.hash.slice(1))||1)-1));render();







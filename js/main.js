(()=>{
let ready;window.appReady=new Promise(r=>ready=r);window.__ready=ready;
const pages=[['index','Home'],['about','About'],['services','Services'],['blog','Blog'],['contact','Contact'],['login','Login'],['create-account','Create Account']];
const cur=(location.pathname.split('/').pop()||'index.html').replace('.html','')||'index';
const nav=document.getElementById('site-nav');
if(nav){
 if(document.querySelector('.home-page')){
  nav.classList.add('home-nav');
  const updateNav=()=>nav.classList.toggle('is-scrolled',window.scrollY>24);
  updateNav();
  window.addEventListener('scroll',updateNav,{passive:true});
 }
 const mk=a=>a.map(([p,l])=>`<li><a href="${p}.html"${p===cur?' aria-current="page"':''}${p==='create-account'?' class="btn btn-primary"':''}>${l}</a></li>`).join('');
 nav.innerHTML=`<nav class="nav" aria-label="Main"><a class="brand" href="index.html"><img src="assets/logo/logo.webp" alt="Stackly, home"></a><button class="burger" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><span></span><span></span><span></span></button><div class="menu" id="menu"><ul class="links">${mk(pages.slice(0,5))}</ul><ul class="auth">${mk(pages.slice(5))}</ul></div></nav>`;
 const b=nav.querySelector('.burger'),m=nav.querySelector('#menu');
 const set=o=>{m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')};
 b.addEventListener('click',()=>set(!m.classList.contains('open')));
 m.addEventListener('click',e=>e.target.closest('a')&&set(false));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open')){set(false);b.focus()}});
 matchMedia('(min-width:901px)').addEventListener('change',()=>set(false));
}
const foot=document.getElementById('site-foot');
if(foot){
 foot.innerHTML=`<div class="wrap"><div class="foot-grid"><div class="foot-col"><img src="assets/logo/logo.webp" alt="Stackly logo"><p>Verified homes, trusted agents and honest advice.</p><div class="social"><a href="404.html" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z"/></svg></a><a href="404.html" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-dot" cx="17.7" cy="6.6" r="1"/></svg></a><a href="404.html" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 7.1a2.5 2.5 0 0 0-1.8-1.8C17.8 4.9 12 4.9 12 4.9s-5.8 0-7.4.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2.4 12a26 26 0 0 0 .4 4.9 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.9 26 26 0 0 0-.4-4.9Z"/><path class="social-play" d="m10 15.5 5-3.5-5-3.5v7Z"/></svg></a></div></div><div class="foot-col"> <h3>Explore</h3><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="services.html">Services</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact</a></li></ul></div><div class="foot-col"><h3>Legal</h3><ul><li><a href="privacy-policy.html">Privacy Policy</a></li><li><a href="terms.html">Terms and Conditions</a></li></ul></div><div class="foot-col"><h3>Talk to us</h3><address style="font-style:normal">hello@propertylistings.example<br>+1 (555) 010-0142<br>Mon to Sat, 9am to 7pm</address></div></div><div class="big-type" aria-hidden="true">Home</div></div><div class="marquee light" aria-hidden="true"><div class="track"><span>Buy</span><span>Rent</span><span>Sell</span><span>Invest</span><span>Move</span></div></div><div class="wrap copy"><span>© ${new Date().getFullYear()} Property Listings. All rights reserved.</span><span>Photos from Unsplash photographers. Find a place you will love.</span></div>`;
}
document.querySelectorAll('.marquee .track').forEach(t=>t.innerHTML+=t.innerHTML);
document.querySelectorAll('.spot').forEach(el=>el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--x',e.clientX-r.left+'px');el.style.setProperty('--y',e.clientY-r.top+'px')}));
document.getElementById('back')?.addEventListener('click',()=>{history.length>1?history.back():location.href='index.html'});
document.querySelectorAll('[data-more]').forEach(b=>b.addEventListener('click',()=>{const p=document.getElementById(b.dataset.more),o=p.hidden;p.hidden=!o;b.setAttribute('aria-expanded',o);b.textContent=o?'Show less':'Read the guide'}));
document.querySelectorAll('.flip').forEach(f=>{const t=()=>{const o=f.classList.toggle('on');f.setAttribute('aria-pressed',o)};f.addEventListener('click',t);f.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}})});
document.querySelectorAll('[data-tmore]').forEach(b=>b.addEventListener('click',()=>{const c=b.closest('.tcard'),o=c.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'Show less':'Read more'}));
document.querySelectorAll('[data-query]').forEach(m=>{const q=encodeURIComponent(m.dataset.query);m.querySelector('iframe').src=`https://www.google.com/maps?q=${q}&output=embed`;const a=m.parentElement.querySelector('.map-link');if(a)a.href=`https://www.google.com/maps/search/?api=1&query=${q}`});
document.querySelectorAll('.filters').forEach(w=>{const cards=[...document.querySelectorAll('[data-cat]')];w.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;w.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));cards.forEach(c=>{const show=b.dataset.f==='all'||c.dataset.cat===b.dataset.f;c.hidden=!show;if(show){c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop')}});window.ScrollTrigger&&ScrollTrigger.refresh()})});
document.querySelectorAll('[role=tablist]').forEach(l=>{const tabs=[...l.querySelectorAll('[role=tab]')];const sel=t=>{tabs.forEach(x=>{const on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});t.focus()};tabs.forEach((t,i)=>{t.addEventListener('click',()=>sel(t));t.addEventListener('keydown',e=>{if(e.key==='ArrowRight')sel(tabs[(i+1)%tabs.length]);if(e.key==='ArrowLeft')sel(tabs[(i-1+tabs.length)%tabs.length])})})});
document.querySelectorAll('.check').forEach(c=>{const boxes=[...c.querySelectorAll('input')],bar=c.querySelector('.meter i'),pb=c.querySelector('[role=progressbar]'),out=c.querySelector('.cnt');const up=()=>{const n=boxes.filter(b=>b.checked).length,pct=Math.round(n/boxes.length*100);bar.style.width=pct+'%';pb.setAttribute('aria-valuenow',pct);out.textContent=n===boxes.length?'All done. Your home is in great shape!':`${n} of ${boxes.length} checked`};boxes.forEach(b=>b.addEventListener('change',up));up()});
document.querySelectorAll('.search').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const q=f.elements.q.value.trim().toLowerCase(),t=f.elements.type.value,d=f.elements.deal.value;let n=0;document.querySelectorAll('.prop').forEach(c=>{const ok=(!q||c.dataset.city.toLowerCase().includes(q))&&(!t||c.dataset.type===t)&&(!d||c.dataset.cat===d);c.hidden=!ok;if(ok)n++});const o=document.getElementById('search-out');if(o)o.textContent=n?`${n} home${n>1?'s':''} match your search.`:'No homes match yet. Try another city or type.';document.getElementById('listings')?.scrollIntoView({behavior:'smooth'});window.ScrollTrigger&&ScrollTrigger.refresh()}));
document.querySelectorAll('.save').forEach(b=>b.addEventListener('click',()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);b.querySelector('span').textContent=on?'♥':'♡';b.setAttribute('aria-label',on?'Remove from saved homes':'Save this home')}));
const swapImg=i=>{const f=i.dataset.fallback;if(f&&!i.src.endsWith(f))i.src=f};
document.addEventListener('error',e=>{if(e.target.tagName==='IMG')swapImg(e.target)},true);
document.querySelectorAll('img[data-fallback]').forEach(i=>{if(i.complete&&!i.naturalWidth)swapImg(i)});
setTimeout(()=>{document.getElementById('loader')?.remove();window.__ready()},4500);
})();

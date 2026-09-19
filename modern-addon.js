/* Modern UI Add-on v2: command palette, quick dock, live status, shortcuts */
(()=>{const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const sections=()=>$$('section[id]').map(x=>({id:x.id,title:(x.querySelector('.section-title')?.textContent||x.id).replace(/\s+/g,' ').trim()}));
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
const status=el('div','modern-statusbar');status.innerHTML='<span class="status-dot"></span><span>CSS Fleet Systems</span><span class="ui-kbd">LIVE</span>';document.body.append(status);
setTimeout(()=>status.classList.add('show'),900);setTimeout(()=>status.classList.remove('show'),5200);
const palette=el('div','command-palette');palette.innerHTML='<div class="command-box"><input class="command-input" placeholder="Search sections, ships, features… (Esc to close)" aria-label="Command search"><div class="command-results"></div></div>';document.body.append(palette);
const input=$('.command-input',palette), results=$('.command-results',palette);
const commands=[{t:'Home',k:'G',a:()=>go('home')},{t:'Fleet Registry',k:'F',a:()=>go('fleet')},{t:'Cruises',k:'C',a:()=>go('cruises')},{t:'Destinations',k:'D',a:()=>go('destinations')},{t:'Gallery',k:'G',a:()=>go('gallery')},{t:'Booking',k:'B',a:()=>go('booking')},{t:'Compare Fleet',k:'P',a:()=>go('compare')},{t:'FAQ',k:'?',a:()=>go('faq')}];
function go(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'});palette.classList.remove('open');input.value=''}
function render(q=''){results.innerHTML='';const items=commands.filter(x=>x.t.toLowerCase().includes(q.toLowerCase()));items.forEach((x,i)=>{const b=el('button','command-item');b.innerHTML='<span>✦</span><span>'+x.t+'</span><span class="command-key">'+x.k+'</span>';b.onclick=x.a;results.append(b)})}
function openPalette(){palette.classList.add('open');render();input.focus()}render();
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPalette()}if(e.key==='Escape')palette.classList.remove('open')});
input.addEventListener('input',()=>render(input.value));palette.addEventListener('click',e=>{if(e.target===palette)palette.classList.remove('open')});
const dock=el('div','quick-dock');[['⌘','Command',openPalette],['↑','Top',()=>go('home')],['☀','Theme',()=>$('#themeToggle')?.click()],['⚓','Fleet',()=>go('fleet')]].forEach(([icon,title,fn])=>{const b=el('button',null,icon);b.title=title;b.onclick=fn;dock.append(b)});document.body.append(dock);
const live=el('div','modern-live-card');live.innerHTML='<div><div class="live-title">TABLEBOARD STUDIOS • FLEET STATUS</div><div class="live-sub">Modern interface telemetry • local browser status</div></div><div class="live-value">ONLINE</div>';const fleet=document.getElementById('fleet');fleet?.querySelector('.container')?.prepend(live);
let last=location.hash;window.addEventListener('hashchange',()=>{last=location.hash});})();

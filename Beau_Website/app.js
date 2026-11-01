(()=>{
 'use strict';
 const root=document.documentElement;root.classList.add('has-js');
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),systemTheme=matchMedia('(prefers-color-scheme: dark)');
 let keyboard=false;
 document.addEventListener('keydown',()=>{keyboard=true;root.classList.add('keyboard-input')});
 document.addEventListener('pointerdown',()=>{keyboard=false;root.classList.remove('keyboard-input')},{passive:true});
 try{const saved=localStorage.getItem('beau-theme');if(saved==='dark'||saved==='light')root.dataset.theme=saved}catch{}
 const actualTheme=()=>root.dataset.theme||(systemTheme.matches?'dark':'light');
 function themeLabel(){const dark=actualTheme()==='dark';$('#theme .theme-label').textContent=dark?'After hours':'Daylight';$('#theme').setAttribute('aria-label',`Switch to ${dark?'Daylight':'After hours'} theme`);$('#theme').setAttribute('aria-pressed',String(dark));$('#theme').title=dark?'After hours theme. Switch to Daylight.':'Daylight theme. Switch to After hours.'}
 $('#theme').addEventListener('click',e=>{const next=actualTheme()==='dark'?'light':'dark';const apply=()=>{root.dataset.theme=next;themeLabel();try{localStorage.setItem('beau-theme',next)}catch{}};if(document.startViewTransition&&!reduced.matches&&e.detail>0)document.startViewTransition(apply);else apply()});
 systemTheme.addEventListener?.('change',themeLabel);themeLabel();
 const menu=$('#menu'),nav=$('#navigation');let menuAnimation;
 function closeMenu(){menuAnimation?.cancel();nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}
 menu.addEventListener('click',e=>{const open=menu.getAttribute('aria-expanded')!=='true';if(!open){closeMenu();return}nav.classList.add('open');menu.setAttribute('aria-expanded','true');menu.textContent='Close';if(e.detail>0&&!reduced.matches){menuAnimation?.cancel();menuAnimation=nav.animate([{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'cubic-bezier(.23,1,.32,1)'})}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
 let revealObserver;
 if('IntersectionObserver' in window&&!reduced.matches){root.classList.add('motion-ok');revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');revealObserver.unobserve(entry.target)}})},{threshold:.06});$$('.reveal').forEach((el,i)=>{el.style.setProperty('--stagger',`${(i%2)*50}ms`);el.classList.add('pending');revealObserver.observe(el)})}
 const motionAnimations=[];
 function settleMotion(){root.classList.remove('motion-ok');$$('.pending').forEach(el=>el.classList.remove('pending'));motionAnimations.forEach(a=>a.finish());revealObserver?.disconnect()}
 reduced.addEventListener?.('change',()=>{if(reduced.matches)settleMotion()});
 const search=$('#prd-search'),clear=$('#clear-search'),status=$('#search-status'),sections=$$('.prd-section');let filter='all';
 const filterGroups={requirements:['6'],journeys:['7','8'],testing:['12','15','16'],decisions:['2','17','18','20']};
 function filterDocument(){const query=search.value.trim().toLocaleLowerCase();let visible=0,requirements=0;clear.hidden=!query;
  sections.forEach(section=>{const category=filter==='all'||filterGroups[filter]?.includes(section.dataset.section);const matches=!query||section.textContent.toLocaleLowerCase().includes(query);const show=category&&matches;section.hidden=!show;if(show)visible++;
   const body=section.querySelector('.prd-section-body');const blocks=[...body.children];
   blocks.forEach(block=>{block.hidden=false;block.classList.remove('search-hit')});
   if(show&&query){blocks.forEach(block=>{if(!/^H[1-6]$/.test(block.tagName)){const match=block.textContent.toLocaleLowerCase().includes(query);block.hidden=!match;if(match&&block.classList.contains('requirement-card'))block.classList.add('search-hit')}});blocks.forEach((block,i)=>{if(/^H[1-6]$/.test(block.tagName)){let has=false;for(let j=i+1;j<blocks.length&&!/^H[1-6]$/.test(blocks[j].tagName);j++)if(!blocks[j].hidden)has=true;block.hidden=!has&&!block.textContent.toLocaleLowerCase().includes(query)}});if(section.querySelector('.prd-section-heading').textContent.toLocaleLowerCase().includes(query)&&!blocks.some(b=>!b.hidden)){blocks.forEach(b=>b.hidden=false)}}
   if(show)requirements+=[...section.querySelectorAll('.requirement-card')].filter(r=>!r.hidden).length;
  });
  $('#no-results').hidden=visible>0;status.textContent=query?`${visible} matching section${visible===1?'':'s'}${requirements?` / ${requirements} requirements`:''}`:`${visible} section${visible===1?'':'s'}`;
  $$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
 }
 search.addEventListener('input',filterDocument);
 function resetSearch(){search.value='';filter='all';filterDocument()}
 clear.addEventListener('click',()=>{search.value='';filterDocument();search.focus()});
 $('#reset-search').addEventListener('click',()=>{resetSearch();search.focus()});
 $$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;filterDocument()}));
 $('#section-jump').addEventListener('change',e=>{if(e.target.value)location.hash=`prd/${e.target.value}`});
 let activeView='proposal';const positions={proposal:0,prd:0};let viewAnimation;
 function route(initial=false){const raw=decodeURIComponent(location.hash.slice(1));if(raw==='main')return;const [kind,target]=raw.split('/');const view=kind==='prd'?'prd':'proposal';const changed=view!==activeView;
  if(changed)positions[activeView]=scrollY;activeView=view;document.body.dataset.view=view;
  $('#proposal-view').hidden=view!=='proposal';$('#prd-view').hidden=view!=='prd';
  $$('.view-link').forEach(a=>{const current=a.dataset.view===view;a.classList.toggle('active',current);if(current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  closeMenu();
  if(view==='prd'&&target){resetSearch();const id=target.startsWith('req-')?target:`prd-section-${target}`;const element=document.getElementById(id);if(element){element.scrollIntoView({behavior:keyboard||reduced.matches||initial?'instant':'smooth',block:'start'});$$('[data-toc]').forEach(a=>a.classList.toggle('active',a.dataset.toc===target));$('#section-jump').value=target}}
  else if(view==='proposal'&&target){document.getElementById(target)?.scrollIntoView({behavior:keyboard||reduced.matches||initial?'instant':'smooth',block:'start'})}
  else if(initial||changed)scrollTo({top:initial?0:positions[view],behavior:'instant'});
  if(changed&&!initial&&!keyboard&&!reduced.matches){viewAnimation?.cancel();viewAnimation=$(`#${view}-view`).animate([{opacity:.45},{opacity:1}],{duration:180,easing:'cubic-bezier(.23,1,.32,1)'})}
  if(changed&&!initial){const title=$(`#${view}-view h1`);title.setAttribute('tabindex','-1');title.focus({preventScroll:true})}
  document.title=view==='prd'?'Beau | Product requirements':'Beau | A little care. A lot of possibility.';
 }
 window.addEventListener('hashchange',()=>route());route(true);
 if(!reduced.matches&&activeView==='proposal'){const elements=$$('.hero-text>*');elements.forEach((el,i)=>motionAnimations.push(el.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,delay:i*45,easing:'cubic-bezier(.23,1,.32,1)',fill:'backwards'})));motionAnimations.push($('.hero-art').animate([{opacity:0,transform:'translateY(14px) scale(.98)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:650,delay:90,easing:'cubic-bezier(.23,1,.32,1)',fill:'backwards'}))}
 if('IntersectionObserver' in window){const tocObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting&&activeView==='prd'){$$('[data-toc]').forEach(a=>a.classList.toggle('active',a.dataset.toc===entry.target.dataset.section))}})},{rootMargin:'-12% 0px -72% 0px'});sections.forEach(s=>tocObserver.observe(s));const proposalObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting&&activeView==='proposal'){$$('#navigation a').forEach(a=>{if(a.hash===`#proposal/${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -65% 0px'});$$('#navigation a').forEach(a=>{const el=document.getElementById(a.hash.split('/')[1]);if(el)proposalObserver.observe(el)})}
 document.addEventListener('keydown',e=>{const editing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);if(activeView==='prd'&&!editing&&(e.key==='/'||((e.ctrlKey||e.metaKey)&&e.key==='k'))){e.preventDefault();search.focus()}if(e.key==='Escape'&&document.activeElement===search){search.value='';filterDocument()}});
 let printing=false;
 window.addEventListener('beforeprint',()=>{printing=true;$$('.pending').forEach(el=>el.classList.remove('pending'));if(activeView==='prd'){sections.forEach(s=>{s.hidden=false;[...s.querySelector('.prd-section-body').children].forEach(el=>el.hidden=false)});$('#no-results').hidden=true}});
 window.addEventListener('afterprint',()=>{if(printing){printing=false;filterDocument()}});
 $$('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
})();

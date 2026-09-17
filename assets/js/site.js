
(() => {
  const body = document.body;
  const root = body.dataset.root || './';
  const active = body.dataset.active || '';
  const fileMode = location.protocol === 'file:';

  // Source / demo links are attached to build records without changing local routing.
  const PROJECT_LINKS = {
    'swiftslot':{source:'https://github.com/Marvelloust/swiftslot'},
    'css-gallery':{source:'https://github.com/Marvelloust/css_canvas_dm'},
    'orange-stores':{source:'https://github.com/Marvelloust/orange_store'},
    'mygame':{source:'https://github.com/Marvelloust/GameApp_Adam'},
    'p2p-utility':{source:'https://github.com/Marvelloust/p2p_MH'},
    'file-console':{source:'https://github.com/Marvelloust/CaseVault_001'},
    'marvyfash':{source:'https://github.com/Marvelloust/Glamgrid_E'},
    'korago':{source:'https://github.com/Marvelloust/Korago',demo:'https://marvelloust.github.io/Korago/'},
    'relay-copilot':{source:'https://github.com/Marvelloust/Relay-Copilot',demo:null},
    'trace':{source:'https://github.com/Marvelloust/Trace',demo:null},
    'ledgerly':{source:'https://github.com/Marvelloust/ledgerly',demo:null},
    'fieldnote':{source:'https://github.com/Marvelloust/Fieldnote',demo:null},
    'bench':{source:'https://github.com/Marvelloust/BENCH',demo:null},
    'clause':{source:'https://github.com/Marvelloust/Clause-AI',demo:null},
    'slot':{source:'https://github.com/Marvelloust/slot',demo:null},
    'stamp':{source:'https://github.com/Marvelloust/Stamp',demo:null},
    'vault':{source:'https://github.com/Marvelloust/VAULT',demo:null},
    'nexora':{source:'https://github.com/Marvelloust/Nexora',demo:null},
    'veloza':{source:'https://github.com/Marvelloust/Veloza',demo:null},
    'figma-todo':{source:null,demo:null},
  };
  const projectKey=body.dataset.projectKey;
  if(projectKey && PROJECT_LINKS[projectKey]){
    const links=PROJECT_LINKS[projectKey];
    const hero=document.querySelector('.case-hero__meta');
    if(hero && (links.source || links.demo)){
      const row=document.createElement('div'); row.className='project-external-links';
      if(links.source) row.innerHTML+=`<a href="${links.source}" target="_blank" rel="noopener">GITHUB REPOSITORY ↗</a>`;
      if(links.demo) row.innerHTML+=`<a class="is-demo" href="${links.demo}" target="_blank" rel="noopener">LIVE DEMO ↗</a>`;
      hero.after(row);
    }
  }


  function routePath(route){
    const clean = route.replace(/^\/+|\/+$/g,'');
    if(!clean) return root + 'index.html';
    return root + clean + (fileMode ? '/index.html' : '/');
  }
  window.MO_ROUTE = routePath;

  document.querySelectorAll('[data-route]').forEach(a => {
    const route = a.getAttribute('data-route');
    if(route) a.setAttribute('href', routePath(route));
  });

  const header = document.querySelector('[data-site-header]');
  if(header){
    const nav = [
      ['work','/work/','Work'],
      ['about','/about/','About'],
      ['capabilities','/capabilities/','Capabilities'],
      ['resume','/resume/','Resume'],
      ['contact','/contact/','Contact'],
    ];
    header.innerHTML = `
      <header class="site-header">
        <a class="mo-mark route-link" data-route="/" href="${routePath('/')}">
          <span class="mo-mark__bracket">[</span><span>MO</span><span class="mo-mark__bracket">]</span><i></i>
          <span class="sr-only">Marvellous O. home</span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          ${nav.map(([key,route,label])=>`<a ${active===key?'aria-current="page"':''} class="route-link" data-route="${route}" href="${routePath(route)}"><span>${label}</span><i></i></a>`).join('')}
        </nav>
        <div class="header-tools">
          <button class="theme-control" type="button" data-theme-toggle aria-label="Switch theme">
            <span data-theme-word>MODE</span><i class="theme-eye"></i>
          </button>
          <button class="menu-control" type="button" data-menu aria-expanded="false" aria-label="Open menu"><span></span><span></span></button>
        </div>
      </header>
      <div class="mobile-drawer" data-mobile-drawer aria-hidden="true">
        <div class="mobile-drawer__meta mono">MASTER RECORD / NAVIGATION</div>
        ${nav.map(([key,route,label],i)=>`<a class="route-link" data-route="${route}" href="${routePath(route)}"><b>0${i+1}</b><span>${label}</span><i>↗</i></a>`).join('')}
        <a class="mobile-home route-link" data-route="/" href="${routePath('/')}">Return to master record</a>
      </div>`;
  }

  const footer = document.querySelector('[data-site-footer]');
  if(footer){
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-seal"><b>[ MO ]</b><i></i><span>MASTER RECORD / CLOSE + CONTINUE</span></div>
        <div class="footer-main">
          <div class="footer-end"><span class="mono">END OF CURRENT RECORD</span><strong>The next record is empty.</strong></div>
          <div class="footer-contact">
            <span class="mono">DIRECT CONTACT</span>
            <a href="mailto:omoleyemarvellous@gmail.com?subject=Portfolio%20enquiry">omoleyemarvellous@gmail.com ↗</a>
          </div>
          <nav class="footer-nav" aria-label="Footer navigation">
            <a class="route-link" data-route="/work/" href="${routePath('/work/')}">Work</a>
            <a class="route-link" data-route="/about/" href="${routePath('/about/')}">About</a>
            <a class="route-link" data-route="/resume/" href="${routePath('/resume/')}">Resume</a>
            <a href="https://github.com/Marvelloust" target="_blank" rel="noopener">GitHub ↗</a>
          </nav>
        </div>
        <a class="footer-blank route-link" data-route="/contact/" href="${routePath('/contact/')}"><span>[MO] / OPEN RECORD</span><b>Start a build</b><i>↗</i></a>
        <div class="footer-bottom mono"><span>[MO] / BUILD RECORD</span><span>MARVELLOUS O.</span><span>© <span data-year></span></span></div>
      </footer>`;
  }

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

  // Theme
  const html = document.documentElement;
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const themeWord = document.querySelector('[data-theme-word]');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const setWord = () => {
    if(themeWord) themeWord.textContent = html.dataset.theme === 'dark' ? 'LIGHT' : 'DARK';
    if(themeMeta) themeMeta.setAttribute('content', html.dataset.theme === 'dark' ? '#0B0E13' : '#F4F0E8');
  };
  setWord();
  themeBtn?.addEventListener('click', e => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    const x = e.clientX || innerWidth - 60;
    const y = e.clientY || 40;
    const wipe = document.createElement('div');
    wipe.className = 'theme-wipe';
    wipe.style.setProperty('--wipe-x',`${x}px`);
    wipe.style.setProperty('--wipe-y',`${y}px`);
    wipe.style.setProperty('--wipe-color', next === 'dark' ? '#0B0E13' : '#F4F0E8');
    document.body.append(wipe);
    requestAnimationFrame(()=>wipe.classList.add('is-on'));
    setTimeout(()=>{
      html.dataset.theme = next;
      try{ localStorage.setItem('mo-build-theme',next); }catch(_){}
      setWord();
      wipe.classList.add('is-out');
      setTimeout(()=>wipe.remove(),520);
    },250);
  });

  // Mobile drawer
  const menu = document.querySelector('[data-menu]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  function setMenu(open){
    body.classList.toggle('menu-open',open);
    menu?.setAttribute('aria-expanded',String(open));
    drawer?.setAttribute('aria-hidden',String(!open));
  }
  menu?.addEventListener('click',()=>setMenu(!body.classList.contains('menu-open')));
  addEventListener('keydown',e=>{ if(e.key==='Escape') setMenu(false); });

  // Page/record transition: short extraction, not a loading animation.
  const curtain = document.createElement('div');
  curtain.className = 'route-curtain';
  curtain.innerHTML = `<div class="route-curtain__spine"></div><div class="route-curtain__record"><span class="mono">[MO] / RETRIEVING RECORD</span><strong data-curtain-title>BUILD RECORD</strong><i></i></div>`;
  body.append(curtain);
  document.addEventListener('click',e=>{
    const a=e.target.closest('a.route-link,a[data-project-link]');
    if(!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target==='_blank') return;
    // Flagship routes on the Work page use the authored record-retrieval transition.
    if(a.matches('[data-flagship-link]') && document.querySelector('[data-work-page]')) return;
    const href=a.getAttribute('href');
    if(!href || href.startsWith('mailto:') || href.startsWith('#')) return;
    e.preventDefault();
    const label=a.dataset.title || a.textContent.trim().slice(0,40) || 'BUILD RECORD';
    const ctitle=curtain.querySelector('[data-curtain-title]');
    if(ctitle) ctitle.textContent=label;
    curtain.style.setProperty('--record-accent',a.dataset.accent||getComputedStyle(a).getPropertyValue('--project-accent')||'var(--signal)');
    curtain.classList.add('is-active');
    setTimeout(()=>{ location.href=href; },360);
  });

  // Back to top as "rewind record".
  const top = document.createElement('button');
  top.className='record-rewind';
  top.type='button';
  top.innerHTML='<span>TOP</span><i></i>';
  top.setAttribute('aria-label','Back to top');
  body.append(top);
  top.addEventListener('click',()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  const updateTop=()=>top.classList.toggle('is-visible',scrollY>innerHeight*.8);
  addEventListener('scroll',updateTop,{passive:true});updateTop();

  // Local current record clock.
  const clock=document.querySelector('[data-current-clock]');
  if(clock){
    const update=()=>clock.textContent=new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date());
    update(); setInterval(update,1000);
  }



  // The archive literally closes as the footer enters view. This is subtle by design.
  const footerEl=document.querySelector('.site-footer');
  if(footerEl && 'IntersectionObserver' in window){
    const archiveObserver=new IntersectionObserver(entries=>{
      body.classList.toggle('archive-closing',entries.some(entry=>entry.isIntersecting));
    },{threshold:.2});
    archiveObserver.observe(footerEl);
  }

  // Pointer intent marker, intentionally tiny.
  if(matchMedia('(pointer:fine)').matches){
    const cursor=document.createElement('div'); cursor.className='intent-cursor'; cursor.innerHTML='<span></span>'; body.append(cursor);
    let tx=-100,ty=-100,cx=-100,cy=-100;
    addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;});
    const loop=()=>{cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cursor.style.transform=`translate3d(${cx}px,${cy}px,0)`;requestAnimationFrame(loop)};loop();
    document.addEventListener('pointerover',e=>{
      const target=e.target.closest('[data-cursor-intent],a,button');
      const label=target?.dataset.cursorIntent || (target?.matches('a')?'OPEN':target?.matches('button')?'ACT':'');
      cursor.dataset.intent=label; cursor.querySelector('span').textContent=label;
      cursor.classList.toggle('is-active',!!label);
    });
    document.addEventListener('pointerout',e=>{if(!e.relatedTarget?.closest?.('[data-cursor-intent],a,button')) cursor.classList.remove('is-active')});
  }
})();

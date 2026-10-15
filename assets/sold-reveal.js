(function(){
  if(window.__sdmplSoldRevealInstalled)return;window.__sdmplSoldRevealInstalled=true;
  const root=document.getElementById('root');if(!root)return;
  const overlay=document.createElement('div');overlay.id='sdmpl-sold-reveal';overlay.setAttribute('aria-live','polite');
  overlay.innerHTML='<div class="sr-backdrop"></div><img class="sr-mascot" alt=""><div class="sr-scratch"></div><div class="sr-scratch sr-two"></div><div class="sr-scratch sr-three"></div><div class="sr-content"><div class="sr-player"><img class="sr-photo" alt=""><div><div class="sr-eyebrow">PLAYER SOLD</div><div class="sr-name"></div><div class="sr-meta"></div></div></div><div class="sr-team"><img class="sr-logo" alt=""><div class="sr-acquired">ACQUIRED BY</div><div class="sr-team-name"></div><div class="sr-price"></div></div></div><div class="sr-flash"></div><div class="sr-bottom">SDMPL • SEASON 09 • INTRA-COLLEGE COMPETITION</div>';
  document.body.appendChild(overlay);const q=(s,scope=document)=>scope.querySelector(s);let lastSignature=null,hideTimer=null,runId=0;
  function colorFor(name,el){const c=el?getComputedStyle(el).getPropertyValue('--tc').trim():'';if(c&&c!=='var(--text-sub)')return c;const n=(name||'').toLowerCase();if(n.includes('panther'))return'#a5ff4a';if(n.includes('falcon'))return'#ffb91f';if(n.includes('knight'))return'#b56aff';if(n.includes('hunter'))return'#ffc400';if(/royal|challenger|rcd/.test(n))return'#ff4545';if(n.includes('maverick'))return'#3478ff';return'#f5bd36'}
  function logoFor(name){const n=(name||'').toLowerCase();if(n.includes('panther'))return'/assets/teams/team1.jpg';if(n.includes('knight'))return'/assets/teams/team2.png';if(n.includes('falcon'))return'/assets/teams/team3.jpg';if(n.includes('hunter'))return'/assets/teams/team4.png';if(/royal|challenger|rcd/.test(n))return'/assets/teams/team5.jpg';if(n.includes('maverick'))return'/assets/teams/team6.jpg';return''}
  function check(){const stage=q('.player-stage',root),nameEl=q('.player-name',stage||root),photoEl=q('.player-photo',stage||root),priceEl=q('.base-price-val',stage||root);if(!stage||!nameEl||!/SOLD/.test(stage.innerText||'')){lastSignature=null;return}
    const teamBlock=q('.bid-card-team',root),teamName=teamBlock?(teamBlock.innerText||'').trim():'Winning Team',price=priceEl?(priceEl.innerText||'').trim():'',playerName=(nameEl.innerText||'').trim(),photo=photoEl?photoEl.src:'';const signature=[playerName,teamName,price].join('|');if(!playerName||signature===lastSignature)return;lastSignature=signature;
    const id=++runId;if(hideTimer)clearTimeout(hideTimer);overlay.style.setProperty('--reveal-team',colorFor(teamName,teamBlock));q('.sr-name',overlay).textContent=playerName;q('.sr-meta',overlay).textContent=(q('.player-subdetail',stage)||{}).innerText||'SDMPL PLAYER';q('.sr-price',overlay).textContent=price||'SOLD';q('.sr-team-name',overlay).textContent=teamName;q('.sr-photo',overlay).src=photo||'';q('.sr-photo',overlay).alt=playerName;
    const logo=(q('img',teamBlock||document.createElement('div'))||{}).src||logoFor(teamName);q('.sr-logo',overlay).src=logo;q('.sr-logo',overlay).alt=teamName;q('.sr-mascot',overlay).src=logo;q('.sr-mascot',overlay).alt=teamName+' mascot';overlay.classList.remove('is-active');void overlay.offsetWidth;overlay.classList.add('is-active');hideTimer=setTimeout(()=>{if(id===runId)overlay.classList.remove('is-active')},4600)
  }
  function ensureCredits(){
    if(!document.getElementById('sdmpl-site-footer')){
      const footer=document.createElement('footer');
      footer.id='sdmpl-site-footer';
      footer.className='footer';
      footer.innerHTML='<div class="wrap footer-inner"><div class="footer-brand-box"><img class="footer-logo" src="/assets/brand/sdmpl-mark.png" onerror="this.src=\'/assets/logo.jpg\'" alt="SDMPL" /><div class="footer-mid"><strong>SDM PREMIER LEAGUE</strong><span>Celebrating 8 years of campus cricket &middot; Season 09</span></div></div><div class="footer-portal-box"><span class="fp-label">Official Tournament Portal</span><a href="https://sdmpl9.netlify.app/" target="_blank" rel="noopener" class="footer-official-pill"><svg class="portal-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>sdmpl9.netlify.app</span><span class="ext-arrow">↗</span></a></div><nav class="footer-links"><a href="#auction">Live Stage</a><a href="#teams">Teams</a><a href="#bids">Bids</a><a href="#sold">Sold Players</a><a href="https://sdmpl9.netlify.app/" target="_blank" rel="noopener" class="fl-gold">Official Site ↗</a></nav></div><div class="footer-bottom"><div class="footer-copyright">&copy; 2026 SDMPL &mdash; SDM College, Dharwad. All rights reserved.</div><div class="footer-portal-link-line">Official Tournament Website: <a href="https://sdmpl9.netlify.app/" target="_blank" rel="noopener">https://sdmpl9.netlify.app/</a></div><div class="footer-credit">Designed by <strong>Vinayak Bhat</strong>, <strong>Thanush D</strong> and <strong>Govind</strong></div></div>';
      document.body.appendChild(footer);
    }
    const sidebar=document.querySelector('.sidebar');
    if(sidebar&&!sidebar.querySelector('.admin-sidebar-credit')){
      const cred=document.createElement('div');
      cred.className='admin-sidebar-credit';
      cred.innerHTML='<div style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#64748b;margin-bottom:4px">Credits</div><div style="font-size:11.5px;color:#94a3b8;line-height:1.4">Designed by <strong style="color:#f59e0b">Vinayak Bhat</strong>, <strong style="color:#f59e0b">Thanush D</strong> and <strong style="color:#f59e0b">Govind</strong></div><a href="https://sdmpl9.netlify.app/" target="_blank" rel="noopener" style="display:inline-block;margin-top:6px;font-size:11px;color:#efc561;text-decoration:none;font-weight:700">🌐 Official Portal ↗</a><div style="font-size:10.5px;color:#64748b;margin-top:4px">© 2026 SDMPL — SDM College, Dharwad</div>';
      sidebar.appendChild(cred);
    }
    const dialog=document.querySelector('.panel.dialog');
    if(dialog&&!dialog.querySelector('.login-back-container')){
      const backBox=document.createElement('div');
      backBox.className='login-back-container';
      backBox.innerHTML='<a href="/" class="login-back-btn">← Back to Public Auction</a>';
      dialog.appendChild(backBox);
    }
  }
  let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;check();ensureCredits()})}).observe(root,{childList:true,subtree:true,characterData:true,attributes:true});
  requestAnimationFrame(()=>{ensureCredits();const stage=q('.player-stage',root);if(stage&&/SOLD/.test(stage.innerText||'')){lastSignature=[(q('.player-name',stage)||{}).innerText||'',(q('.bid-card-team',root)||{}).innerText||'',(q('.base-price-val',stage)||{}).innerText||''].map(s=>s.trim()).join('|')}})
})();

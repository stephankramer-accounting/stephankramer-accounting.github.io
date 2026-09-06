(() => {
  'use strict';
  const form = document.getElementById('unlock-form');
  const input = document.getElementById('access-key');
  const status = document.getElementById('status');
  const button = document.getElementById('unlock-button');
  const decode = text => Uint8Array.from(atob(text.replace(/-/g,'+').replace(/_/g,'/')), c => c.charCodeAt(0));
  async function unlock(raw) {
    let keyText = raw.trim();
    if (keyText.includes('#')) keyText = keyText.slice(keyText.indexOf('#') + 1).replace(/^key=/,'');
    if (!/^[A-Za-z0-9_-]{43}$/.test(keyText)) { status.textContent = 'Use the complete access key from your private link.'; return; }
    button.disabled = true;
    status.textContent = 'Opening the encrypted review…';
    try {
      const key = await crypto.subtle.importKey('raw', decode(keyText), 'AES-GCM', false, ['decrypt']);
      const response = await fetch('review.enc.json', {cache:'no-store', credentials:'omit', referrerPolicy:'no-referrer'});
      if (!response.ok) throw new Error('unavailable');
      const bundle = await response.json();
      if (bundle.version !== 1 || bundle.algorithm !== 'AES-256-GCM') throw new Error('version');
      const clear = await crypto.subtle.decrypt({name:'AES-GCM',iv:decode(bundle.iv),additionalData:new TextEncoder().encode('gopalan-reconciliation:v1'),tagLength:128},key,decode(bundle.ciphertext));
      const html = new TextDecoder('utf-8',{fatal:true}).decode(clear);
      if (!html.startsWith('<!doctype html>')) throw new Error('format');
      input.value = '';
      window.__reviewAccessLink = location.origin + location.pathname + '#key=' + keyText;
      history.replaceState(null,'',location.pathname);
      document.open(); document.write(html); document.close();
    } catch {
      input.value = '';
      status.textContent = 'The review could not be opened. Check the access key and your connection, then try again.';
      button.disabled = false;
    }
  }
  form.addEventListener('submit', event => { event.preventDefault(); unlock(input.value); });
  const key = location.hash.slice(1).replace(/^key=/,'');
  if (key) { const supplied = location.hash.startsWith('#key=') || /^[A-Za-z0-9_-]{43}$/.test(key); history.replaceState(null,'',location.pathname); if (supplied) unlock(key); }
})();

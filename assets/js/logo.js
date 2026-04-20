document.addEventListener('DOMContentLoaded', function() {
  function animateLogo(ids, scale) {
    const brL = document.getElementById(ids[0]);
    const v   = document.getElementById(ids[1]);
    const n3  = document.getElementById(ids[2]);
    const d   = document.getElementById(ids[3]);
    const brR = document.getElementById(ids[4]);
    const logo = document.getElementById(ids[5]);

    if (!brL || !logo) return;

    const BLUE = '#5a5aff';
    const INK  = '#0a0a0a';
    let raf;

    function breathe() {
      let start = null;
      const dur = 2800;
      const maxShift = 5 * scale;
      function step(ts) {
        if (!start) start = ts;
        const t = ((ts - start) % dur) / dur;
        const ease = Math.sin(t * Math.PI * 2);
        brL.style.transform = `translateX(${-ease * maxShift}px)`;
        brR.style.transform = `translateX(${ease * maxShift}px)`;
        raf = requestAnimationFrame(step);
      }
      raf = requestAnimationFrame(step);
    }

    function glitch() {
      const chars = ['V','3','D','\/','|','_','V3','3D'];
      const els   = [v, n3, d];
      const orig  = ['V','3','D'];
      const cols  = [BLUE, INK, INK];
      let i = 0;
      const iv = setInterval(() => {
        if (i < 6) {
          els.forEach(el => {
            if (Math.random() > 0.4) {
              el.textContent = chars[Math.floor(Math.random() * chars.length)];
              el.style.color = Math.random() > 0.5 ? BLUE : INK;
              el.style.transform = `translateY(${(Math.random()-.5)*4*scale}px) skewX(${(Math.random()-.5)*8}deg)`;
            }
          });
          i++;
        } else {
          clearInterval(iv);
          els.forEach((el, idx) => {
            el.textContent = orig[idx];
            el.style.color = cols[idx];
            el.style.transform = '';
          });
        }
      }, 60);
    }

    breathe();
    setInterval(glitch, 3500 + Math.random() * 2000);

    logo.addEventListener('mouseenter', () => {
      glitch();
      cancelAnimationFrame(raf);
      brL.style.transition = 'transform .15s';
      brR.style.transition = 'transform .15s';
      brL.style.transform = `translateX(${-10 * scale}px)`;
      brR.style.transform = `translateX(${10 * scale}px)`;
    });
    logo.addEventListener('mouseleave', () => {
      brL.style.transition = '';
      brR.style.transition = '';
      breathe();
    });
  }

  animateLogo(['nav-br-left','nav-v','nav-3','nav-d','nav-br-right','site-logo'], 0.7);
});
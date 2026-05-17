/**
 * Particle Background + Toast — no longer handles robot visualization (Three.js does that)
 */
export function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    function createParticles() {
        particles = [];
        const count = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < count; i++) {
            particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height,
                vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
                r: Math.random()*1.5+0.5, alpha: Math.random()*0.4+0.1 });
        }
    }
    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (let i=0;i<particles.length;i++) {
            for (let j=i+1;j<particles.length;j++) {
                const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
                const dist=Math.sqrt(dx*dx+dy*dy);
                if (dist<120) { ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y);
                    ctx.lineTo(particles[j].x,particles[j].y);
                    ctx.strokeStyle=`rgba(213,0,28,${0.08*(1-dist/120)})`; ctx.lineWidth=0.5; ctx.stroke(); }
            }
        }
        particles.forEach(p => {
            p.x+=p.vx; p.y+=p.vy;
            if(p.x<0||p.x>canvas.width)p.vx*=-1;
            if(p.y<0||p.y>canvas.height)p.vy*=-1;
            ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(213,0,28,${p.alpha})`; ctx.fill();
        });
        animId = requestAnimationFrame(draw);
    }
    resize(); createParticles(); draw();
    window.addEventListener('resize', () => { resize(); createParticles(); });
    return () => cancelAnimationFrame(animId);
}

export function showToast(message, type='info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast ${type} toast-auto-hide`;
    toast.innerHTML = `${type==='success'?'✓':type==='error'?'✕':'ℹ'} ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

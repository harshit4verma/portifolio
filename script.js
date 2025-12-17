document.addEventListener('DOMContentLoaded',()=>{
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  btn?.addEventListener('click',()=>{
    nav.classList.toggle('open');
  });

  // contact form: open mail client with filled content
  const form = document.getElementById('contactForm');
  const reset = document.getElementById('resetBtn');
  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name')||'';
    const email = fd.get('email')||'';
    const message = fd.get('message')||'';
    const subject = encodeURIComponent('Portfolio contact from '+name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:harshit@example.com?subject=${subject}&body=${body}`;
  });
  reset?.addEventListener('click',()=>{ form.reset(); });
});

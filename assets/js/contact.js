
(() => {
  const form=document.querySelector('[data-contact-form]');
  if(!form)return;
  const status=form.querySelector('[data-form-status]');
  const emailTo='omoleyemarvellous@gmail.com';
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=(data.get('name')||'').toString().trim();
    const email=(data.get('email')||'').toString().trim();
    const project=(data.get('project')||'').toString().trim();
    const budget=(data.get('budget')||'').toString().trim();
    const context=(data.get('context')||'').toString().trim();
    const errors=[];
    if(name.length<2)errors.push('Add your name.');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))errors.push('Add a valid email.');
    if(!project)errors.push('Choose a project type.');
    if(context.length<12)errors.push('Add a little more project context.');
    if(errors.length){
      status.textContent=errors.join(' ');
      status.dataset.state='error';
      const first=form.querySelector(':invalid,[name="name"]');
      first?.focus();
      return;
    }
    status.textContent='Opening your email app with the project record prepared…';
    status.dataset.state='success';
    const subject=`Project enquiry — ${project} — ${name}`;
    const body=[
      'START A BUILD / PROJECT INTAKE',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${project}`,
      `Budget / range: ${budget||'Not specified'}`,
      '',
      'Project context:',
      context,
      '',
      'Sent from Marvellous O. Build Record'
    ].join('\n');
    location.href=`mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();

function lf(img, mono, sw){
  var p = img.parentElement;
  p.classList.add('tl-fallback', sw);
  p.textContent = mono;
}
window.lf = lf;

function pf(img){
  img.parentElement.classList.remove('hi');
  img.remove();
}
window.pf = pf;

function renderTimeline(){
  const el = document.getElementById('timeline');
  el.innerHTML = EXPERIENCE.map(function(e, i){
    return '<div class="tl-item"><span class="tl-dot sw' + (i % 5) + '"></span><div class="tl-card">'
      + '<div class="tl-role-half">'
      + '<span class="tl-date">' + e.date + '</span>'
      + '<h3>' + e.role + '</h3>'
      + '<p>' + e.desc + '</p>'
      + '</div>'
      + '<div class="tl-co-half">'
      + '<div class="tl-co-top"><span class="tl-co-logo"><img src="https://www.google.com/s2/favicons?sz=128&domain=' + e.domain + '" alt="" onerror="lf(this,\'' + e.mono + '\',\'sw' + (i % 5) + '\')"></span>'
      + '<span class="tl-co-name">' + e.org + ' &middot; ' + e.loc + '</span></div>'
      + '<span class="tl-co-blurb">' + e.blurb + '</span>'
      + '</div>'
      + '</div></div>';
  }).join('');
}

function renderEducation(){
  const el = document.getElementById('edu-grid');
  el.innerHTML = EDUCATION.map(function(e){
    return '<div class="edu-item"><div class="edu-top"><span class="tl-co-logo edu-logo"><img src="https://www.google.com/s2/favicons?sz=128&domain=' + e.domain + '" onerror="lf(this,\'' + e.mono + '\',\'' + e.sw + '\')"></span>'
      + '<div><div class="tl-head"><h3>' + e.name + '</h3><span class="tl-date">' + e.date + '</span></div><p class="tl-org">' + e.deg + '</p></div></div>'
      + '<p class="ml">Relevant Modules</p><div class="pills mod-pills">'
      + e.modules.map(function(m){ return '<span class="hi"><i class="fa-solid fa-' + m[0] + '"></i>' + m[1] + '</span>'; }).join('')
      + '</div></div>';
  }).join('');
}

function renderSkills(){
  const el = document.getElementById('skills-panel');
  el.innerHTML = SKILL_GROUPS.map(function(g){
    return '<div class="skill-group ' + g.cls + '"><h4>' + g.label + '</h4><div class="pills">'
      + g.items.map(function(s){
          if (!s.icon) return '<span>' + s.label + '</span>';
          if (s.icon === 'si') return '<span class="hi"><img src="https://cdn.simpleicons.org/' + s.src + '" onerror="pf(this)">' + s.label + '</span>';
          return '<span class="hi"><i class="' + s.cls + '"></i>' + s.label + '</span>';
        }).join('')
      + '</div></div>';
  }).join('');
}

function renderHobbies(){
  const el = document.getElementById('hobby-grid');
  el.innerHTML = HOBBIES.map(function(h){
    return '<div class="cert-card hobby-card"><i class="fa-solid fa-' + h.icon + ' hobby-icon"></i><p>' + h.title + '</p><span class="cert-year">' + h.desc + '</span></div>';
  }).join('');
}

function renderProjects(){
  const el = document.getElementById('projects-grid');
  el.innerHTML = PROJECTS.map(function(p){
    return '<a class="project-card" href="' + p.link + '">'
      + '<span class="proj-icon">&#9670;</span>'
      + '<h3>' + p.title + '</h3>'
      + '<p>' + p.desc + '</p>'
      + '</a>';
  }).join('');
}

renderTimeline();
renderEducation();
renderSkills();
renderHobbies();
renderProjects();

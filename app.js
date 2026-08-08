function renderTimeline(){
  const el = document.getElementById('timeline');
  el.innerHTML = EXPERIENCE.map(function(e){
    return '<div class="tl-item"><div class="tl-dot"></div><div class="tl-content">'
      + '<div class="tl-head"><h3>' + e.role + '</h3><span class="tl-date">' + e.date + '</span></div>'
      + '<p class="tl-org">' + e.org + '</p>'
      + '<p>' + e.desc + '</p>'
      + '</div></div>';
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
renderProjects();

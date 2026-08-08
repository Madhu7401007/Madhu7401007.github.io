function renderTimeline(){
  const el = document.getElementById('timeline');
  el.innerHTML = EXPERIENCE.map(function(e, i){
    return '<div class="tl-item"><span class="tl-dot sw' + (i % 5) + '"></span><div class="tl-card">'
      + '<div class="tl-body">'
      + '<div class="tl-role">'
        + '<span class="tl-date">' + e.date + '</span>'
        + '<h3>' + e.role + '</h3>'
        + '<p>' + e.desc + '</p>'
      + '</div>'
      + '<div class="tl-co">'
        + '<span class="tl-co-logo sw' + (i % 5) + '">' + e.mono + '</span>'
        + '<div><span class="tl-co-name">' + e.org + ' &middot; ' + e.loc + '</span>'
        + '<span class="tl-co-blurb">' + e.blurb + '</span></div>'
      + '</div>'
      + '</div>'
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

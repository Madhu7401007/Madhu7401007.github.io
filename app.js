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
function renderExperience(){
const el = document.getElementById('timeline');
el.innerHTML = EXPERIENCE.map(function(e, i){
return '<div class="tl-item' + (e.current ? ' current' : '') + '"><span class="tl-dot sw' + (i % 5) + '"></span><div class="tl-card">'
+ '<div class="tl-card-top">'
+ '<span class="tl-co-logo"><img src="https://www.google.com/s2/favicons?sz=128&domain=' + e.domain + '" alt="" onerror="lf(this,\'' + e.mono + '\',\'sw' + (i % 5) + '\')"></span>'
+ '<div class="tl-co-info"><span class="tl-org">' + e.org + ' &middot; ' + e.loc + '</span><span class="tl-date">' + e.date + '</span></div>'
+ (e.current ? '<span class="tl-current-badge">Current</span>' : '')
+ '</div>'
+ '<p class="tl-co-blurb">' + e.blurb + '</p>'
+ '<div class="tl-role-row"><h3>' + e.role + '</h3><span class="tl-sector">' + e.sector + '</span></div>'
+ '<ul class="tl-bullets">' + e.bullets.map(function(b){ return '<li>' + b + '</li>'; }).join('') + '</ul>'
+ '<span class="tl-tags">' + e.tags + '</span>'
+ '</div></div>';
}).join('');
}
function renderCertifications(){
const el = document.getElementById('cert-grid');
el.innerHTML = CERTIFICATIONS.map(function(c){
return '<div class="cert-card"><span class="cert-cat">' + c.cat + '</span><p>' + c.title + '</p><span class="cert-year">' + c.issuer + ', ' + c.year + '</span></div>';
}).join('');
}
function renderQuickFacts(){
const el = document.getElementById('quick-facts');
el.innerHTML = QUICK_FACTS.map(function(f){
return '<div class="qf-fact"><span class="qf-badge"><i class="fa-solid fa-' + f.icon + '"></i></span><span>' + f.text + '</span></div>';
}).join('');
}
function renderSkills(){
const el = document.getElementById('skills-panel');
function pillsHtml(g){
return g.items.map(function(s){
if (!s.icon) return '<span class="' + g.cls + '">' + s.label + '</span>';
if (s.icon === 'si') return '<span class="hi ' + g.cls + '"><img src="https://cdn.simpleicons.org/' + s.src + '" onerror="pf(this)">' + s.label + '</span>';
return '<span class="hi ' + g.cls + '"><i class="' + s.cls + '"></i>' + s.label + '</span>';
}).join('');
}
var biz = SKILL_GROUPS.find(function(g){ return g.cls === 'cat-a'; });
var tech = SKILL_GROUPS.filter(function(g){ return g.cls !== 'cat-a'; });
var bizHtml = '<div class="pills">' + pillsHtml(biz) + '</div>';
var techHtml = tech.map(function(g){
return '<div class="skill-group ' + g.cls + '"><h4>' + g.label + '</h4><div class="pills">' + pillsHtml(g) + '</div></div>';
}).join('');
el.innerHTML = '<div class="skills-col skills-biz"><h3 class="skills-col-h">Business</h3>' + bizHtml + '</div>'
+ '<div class="skills-col skills-tech"><h3 class="skills-col-h">Technical</h3>' + techHtml + '</div>';
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
return '<a class="project-card" href="' + p.link + '" target="_blank" rel="noopener">'
+ '<span class="proj-cat">' + p.cat + '</span>'
+ '<h3>' + p.title + '</h3>'
+ '<p>' + p.desc + '</p>'
+ '<span class="proj-tech">' + p.tech + '</span>'
+ '<span class="proj-cta">' + (p.cta || 'View Project') + '<i class="fa-solid fa-arrow-up-right-from-square"></i></span>'
+ '</a>';
}).join('');
}
function initReveal(){
var targets = document.querySelectorAll('main > section, .tl-item, .cert-card, .project-card, .impact-stat, .skills-col');
targets.forEach(function(el){ el.classList.add('reveal'); });
if (!('IntersectionObserver' in window)){
targets.forEach(function(el){ el.classList.add('in'); });
return;
}
var io = new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if (entry.isIntersecting){
entry.target.classList.add('in');
io.unobserve(entry.target);
}
});
}, {threshold: 0.12, rootMargin: '0px 0px -40px 0px'});
targets.forEach(function(el){ io.observe(el); });
}
renderExperience();
renderSkills();
renderCertifications();
renderQuickFacts();
renderHobbies();
renderProjects();
initReveal();

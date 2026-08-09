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
function tlCardHtml(e, i, isEdu){
var mods = '';
if (isEdu && e.modules) {
mods = '<span class="ml">Relevant modules</span><div class="pills">' + e.modules.map(function(m){ return '<span>' + m + '</span>'; }).join('') + '</div>';
}
return '<div class="tl-item"><span class="tl-dot sw' + (i % 5) + '"></span><div class="tl-card">'
+ '<div class="tl-role-half">'
+ '<span class="tl-date">' + e.date + '</span>'
+ '<h3>' + e.role + '</h3>'
+ '<p>' + e.desc + '</p>'
+ mods
+ '</div>'
+ '<div class="tl-co-half">'
+ '<div class="tl-co-top"><span class="tl-co-logo"><img src="https://www.google.com/s2/favicons?sz=128&domain=' + e.domain + '" alt="" onerror="lf(this,\'' + e.mono + '\',\'sw' + (i % 5) + '\')"></span>'
+ '<span class="tl-co-name">' + e.org + ' &middot; ' + e.loc + '</span></div>'
+ '<span class="tl-co-blurb">' + e.blurb + '</span>'
+ '</div>'
+ '</div></div>';
}
function renderExperience(){
document.getElementById('timeline-exp').innerHTML = EXPERIENCE.map(function(e, i){ return tlCardHtml(e, i, false); }).join('');
}
function renderEducation(){
document.getElementById('timeline-edu').innerHTML = EDUCATION.map(function(e, i){ return tlCardHtml(e, i, true); }).join('');
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
if (!s.icon) return '<span>' + s.label + '</span>';
if (s.icon === 'si') return '<span class="hi"><img src="https://cdn.simpleicons.org/' + s.src + '" onerror="pf(this)">' + s.label + '</span>';
return '<span class="hi"><i class="' + s.cls + '"></i>' + s.label + '</span>';
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
return '<a class="project-card" href="' + p.link + '">'
+ '<span class="proj-icon">&#9670;</span>'
+ '<h3>' + p.title + '</h3>'
+ '<p>' + p.desc + '</p>'
+ '</a>';
}).join('');
}
renderExperience();
renderEducation();
renderSkills();
renderCertifications();
renderQuickFacts();
renderHobbies();
renderProjects();

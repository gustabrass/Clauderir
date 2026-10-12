// Gera o starburst (Claude) e a marca do Elementor nos ícones 3D
document.querySelectorAll('svg.sb').forEach(function(s){
  var rays=12,p='',lens=[1,.86,.96,.8,1,.9,.84,.98,.88,.92,.82,.95];
  for(var k=0;k<rays;k++){
    var a=(k/rays)*Math.PI*2+0.13, L=46*lens[k], w=0.2, r0=9;
    var x1=50+Math.cos(a-w)*r0,y1=50+Math.sin(a-w)*r0,x2=50+Math.cos(a+w)*r0,y2=50+Math.sin(a+w)*r0;
    var tx=50+Math.cos(a)*L,ty=50+Math.sin(a)*L;
    var cx1=50+Math.cos(a-0.07)*L*.9,cy1=50+Math.sin(a-0.07)*L*.9,cx2=50+Math.cos(a+0.07)*L*.9,cy2=50+Math.sin(a+0.07)*L*.9;
    p+='M'+x1+' '+y1+'L'+cx1+' '+cy1+'Q'+tx+' '+ty+' '+cx2+' '+cy2+'L'+x2+' '+y2+'Z';
  }
  s.setAttribute('viewBox','0 0 100 100');
  s.innerHTML='<circle cx="50" cy="50" r="11" fill="#fff"/><path d="'+p+'" fill="#fff"/>';
});
document.querySelectorAll('svg.el').forEach(function(s){
  s.setAttribute('viewBox','0 0 100 100');
  s.innerHTML='<rect x="22" y="20" width="14" height="60" rx="2" fill="#fff"/><rect x="44" y="20" width="34" height="14" rx="2" fill="#fff"/><rect x="44" y="43" width="34" height="14" rx="2" fill="#fff"/><rect x="44" y="66" width="34" height="14" rx="2" fill="#fff"/>';
});

const anchors = document.querySelectorAll('.achor-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

jQuery(window).scroll(function(){
    var $sections = $('section');
$sections.each(function(i,el){
   var top  = $(el).offset().top-100;
   var bottom = top +$(el).height();
   var scroll = $(window).scrollTop();
   var id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('a.active').removeClass('active');
       $('a[href="#'+id+'"]').addClass('active');

   }
})
});
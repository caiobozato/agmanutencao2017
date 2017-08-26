function rolar_para(elemento) {
    $('html, body').animate({ scrollTop: $(elemento).offset().top -50}, 2000);
}//função para deslizar o menu

$(function(){   
    var nav = $('#menuHeader');
    var topo = $('#slide_container_topo').height();
    $(window).scroll(function () { 
        if ($(this).scrollTop() > topo) { 
            nav.addClass("navbar-fixed-top");
        } else { 
            nav.removeClass("navbar-fixed-top");
        } 
    });  
}); //função para fixar o menu no topo da página

$(function() {
    $('ul.nav li').on('click', function() {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });
});//função para mudar a cor do link ativo
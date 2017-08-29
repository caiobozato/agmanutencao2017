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

//******************Enviar email**********************//

$(document).ready(function(){
    $("#form_contato").submit(function(event){
        // Stop form form submitting normally
        event.preventDefault();

        //Get some values from elements on the page:
        var $form = $(this),
            nome = $form.find("input[id='nome']").val(),
            telefone = $form.find("input[id='telefone']").val(),
            email = $form.find("input[id='email']").val(),
            msg = $form.find("input[id='msg']").val(),
            url = $form.attr("action");
        
        //Send the data using post
        var posting = $.post(url, {
            'Nome': nome,
            'Telefone': telefone,
            'Email': email,
            'Mensagem': msg

        });

        // Put the results in a div
        posting.done(function(data){
            swal('Mensagem enviada com sucesso!');
        });
    });
});
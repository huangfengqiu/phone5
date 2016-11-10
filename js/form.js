/* 
$(".demoform").Validform();
*/
$(document).ready(function(){
    /*
    var Text=$(".form_con li input[type='text']");
    Text.blur(function(){
        if($(this).val()==''){
            $(this).next('.tip').addClass('empty');
        }
    });
    $(".pass_w").blur(function(){
        if($(this).val()==''){
            $(this).parent().siblings('.tip').addClass('empty');
        }
    });
    $('.pass_confirm').blur(function(){
        if($(this).val()==''){
            $(this).next('.tip').addClass('empty');
        }
    });
    */
   $('.input_text').each(function(index){
        $(this).blur(function(){
            if($(this).val()==''){
                $('.tip').eq(index).css('display','block');
                $(this).css({'background':'#fdebff','borderColor':'#c0c0c0'});
            }
        });
   });
});











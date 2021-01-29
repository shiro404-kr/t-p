

$(function() {
    $('.btn_open').on('click', function() {
        $('#gnb').show();
    });

    $('.btn_close').on('click', function() {
        $('#gnb').hide();
    });

    let num = 1;
    let slider = setInterval(function(){
        if(num > 1) { num = 1; }
        
        $('.slider > img').removeClass('show');

        $('.slider > img').eq(num).addClass('show'); 

        console.log(num)
        num++;
    }, 5000);





});
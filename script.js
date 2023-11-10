$(function(){
    let $list = $('#list');
    let $clearall = $('#clearall');


    $('#forma').on('submit', function(e){
        e.preventDefault();
        const $toAdd = $('#input').val();
        $lii = $('<li>' + $toAdd + '</li>');
        $list.append($lii);
        $('#input').val('');

        $($lii).on('click', function(){
            $(this).addClass('active')
        });

        // $($clearall).on('click', function(){
        //     // $lii.fadeOut(slow);
        //     // $lii.css({
        //     //     opasity: '0'
        //     // });
        // });
        $($lii).each(function(){
            $($clearall).on('click', function(){
                $($lii).remove();
            })
         })
    })
})


    // function del(element){
    //     element.addEventListener("click", function(){
    //         this.remove()
    //     });
    // }



    // $($clearall).on('click', 'li',  function(){
    //     jiji
    //     $(this).remove();   
    // });






    // $("ul").on("click","li",function(){
    //     $('li').css({
    //         textDecoration: 'line-through'
    //     })
    // })

    // let $clearall = $('#clearall')

    // $clearall.on('click', $lii, function() {
    //     $(this).remove()
    // })

    // let $li = $('li')
    // $clearall.click(function(){
    //     $li.remove(); 
    // })






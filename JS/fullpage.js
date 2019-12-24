(function($){
    $.fn.ckSlide = function(opts){
        opts = $.extend({}, $.fn.ckSlide.opts, opts);
        this.each(function(){
            var slidewrap = $(this).find('.ck-slide-wrapper');
            var slide = slidewrap.find('li');
            var count = slide.length;
            var that = this;
            var index = 0;
            var time = null;
            $(this).data('opts', opts);
            // next
            $(this).find('.ck-next').on('click', function(){
                if(opts['isAnimate'] == true){
                    return;
                }

                var old = index;
                if(index >= count - 1){
                    index = 0;
                }else{
                    index++;
                }
                change.call(that, index, old);
            });
            // prev
            $(this).find('.ck-prev').on('click', function(){
                if(opts['isAnimate'] == true){
                    return;
                }

                var old = index;
                if(index <= 0){
                    index = count - 1;
                }else{
                    index--;
                }
                change.call(that, index, old);
            });
            $(this).find('.ck-slidebox li').each(function(cindex){
                $(this).on('click.slidebox', function(){
                    change.call(that, cindex, index);
                    index = cindex;
                });
            });

            // focus clean auto play
            $(this).on('mouseover', function(){

                $(this).find('.ctrl-slide').css({opacity:0.6});
            });
            //  leave
            $(this).on('mouseleave', function(){
                if(opts.autoPlay){
                    startAtuoPlay();
                }
                $(this).find('.ctrl-slide').css({opacity:0.15});
            });
            startAtuoPlay();
            // auto play
            function startAtuoPlay(){
                if(opts.autoPlay){
                    time  = setInterval(function(){
                        var old = index;
                        if(index >= count - 1){
                            index = 0;
                        }else{
                            index++;
                        }
                        change.call(that, index, old);
                    }, 6000);
                }
            }
            // 修正box
            var box = $(this).find('.ck-slidebox');
            box.css({
                'margin-left':-(box.width() / 2)
            })
            // dir
            switch(opts.dir){
                case "x":
                    opts['width'] = $(this).width();
                    slidewrap.css({
                        'width':count * opts['width']
                    });
                    slide.css({
                        'float':'left',
                        'position':'relative'
                    });
                    slidewrap.wrap('<div class="ck-slide-dir"></div>');
                    slide.show();
                    break;
            }
        });
    };
    function change(show, hide){
        var opts = $(this).data('opts');
        if(opts.dir == 'x'){
            var x = show * opts['width'];
            $(this).find('.ck-slide-wrapper').stop().animate({'margin-left':-x}, function(){opts['isAnimate'] = false;});
            opts['isAnimate'] = true
        }else{
            $(this).find('.ck-slide-wrapper li').eq(hide).stop().animate({opacity:0});
            $(this).find('.ck-slide-wrapper li').eq(show).show().css({opacity:0}).stop().animate({opacity:1});
        }

        $(this).find('.ck-slidebox li').removeClass('current');
        $(this).find('.ck-slidebox li').eq(show).addClass('current');
    }
    $.fn.ckSlide.opts = {
        autoPlay: false,
        dir: null,
        isAnimate: false
    };
})(jQuery);
$(function(){
    $('#dowebok').fullpage({
        /*        showActiveTooltip:true,*/
        menu: '#navbar',    //绑定菜单
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],  //绑定菜单
        CSS3:true,  //是否使用 CSS3 transforms 滚动
        resize:true,    //字体是否随着窗口缩放而缩放
        loopBottom:false,   //滚动到最底部后是否滚回顶部
        navigation:true,    //是否显示项目导航
        scrollingSpeed: 1500,   //滚动速度，单位为毫秒
        afterLoad:function(anchorLink,index){
            if (index == 2){
                $('.Introduction').find('h1').fadeIn(2000);
                $('.Introduction').find('#Advantage-li1').animate({
                    'margin-top':'0px'
                },1500);
                $('.Introduction').find('#Advantage-li2').delay(500).animate({
                    'margin-top':'0px'
                },1500);
                $('.Introduction').find('#Advantage-li3').delay(1000).animate({
                    'margin-top':'0px'
                },1500);
                $('.Introduction').find('#Advantage-li4').delay(1500).animate({
                    'margin-top':'0px'
                },1500);
            }
            if (index == 3){
                $('.business').find('#tit_en').fadeIn(2000);
                $('.business').find('#tit_cn').fadeIn(3000);
            }
            if (index == 4){
                $('.case').find('#case-tit').fadeIn(1000);
                $('.case').find('#Publicity-1').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-2').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-3').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-4').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-5').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-6').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-7').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-8').animate({
                    'margin-top':'0'
                },1500);
                $('.case').find('#Publicity-9').animate({
                    'margin-top':'0'
                },1500);
            }
        },

        onLeave:function(index,direction){
            if (index == '2'){
                $('.Introduction').find('h1').fadeOut();
                $('.Introduction').find('#Advantage-li1').animate({
                    'margin-top':'550px'
                },0);
                $('.Introduction').find('#Advantage-li2').delay().animate({
                    'margin-top':'550px'
                },0);
                $('.Introduction').find('#Advantage-li3').delay().animate({
                    'margin-top':'550px'
                },0);
                $('.Introduction').find('#Advantage-li4').delay().animate({
                    'margin-top':'550px'
                },0);
            }
            if(index == '3'){
                $('.business').find('#tit_en').fadeOut();
                $('.business').find('#tit_cn').fadeOut();
            }
            if (index == '4'){
                $('.case').find('#case-tit').fadeOut();
                $('.case').find('#Publicity-1').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-2').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-3').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-4').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-5').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-6').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-7').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-8').animate({
                    'margin-top':'60%'
                },1500);
                $('.case').find('#Publicity-9').animate({
                    'margin-top':'60%'
                },1500);
            }
        },

        afterSlideLoad: function(anchorLink,index,slideIndex,direction){
            if (index == 2){
                switch (slideIndex) {
                    case 1:
                        $('.Applets').find('.Applets_tlt_h1').fadeIn(2000);
                        $('.Applets').find('.Applets_text').fadeIn(2000);
                        $('.Applets').find('.single1').delay(500).animate({
                            'margin-top': '0px'
                        },1500);
                        $('.Applets').find('.single2').delay(1000).animate({
                            'margin-top': '0px'
                        },1500);
                        break;
                    case 2:
                        $('#Applets2').find('.Applets_tlt_h1').fadeIn(2000);
                        $('#Applets2').find('.Applets_text').fadeIn(2000);
                        $('#Applets2').find('.single1').delay(500).animate({
                            'margin-top': '0px'
                        },1500);
                        $('#Applets2').find('.single2').delay(1000).animate({
                            'margin-top': '0px'
                        },1500);
                        break;
                    case 3:
                        $('#Applets3').find('.Applets_tlt_h1').fadeIn(2000);
                        $('#Applets3').find('.Applets_text').fadeIn(2000);
                        $('#Applets3').find('.box_img1').delay(500).animate({
                            'margin-top': '0px'
                        },1500);
                        $('#Applets3').find('.box_img2').delay(1000).animate({
                            'margin-top': '0px'
                        },1500);
                        $('#Applets3').find('.box_img3').delay(1500).animate({
                            'margin-top': '0px'
                        },1500);
                        break;
                }
            }
            if (index == 3){
                switch (slideIndex) {
                    case 3:
                        /*Xiaodian*/
                        $('.Xiaodian').find('#xd_img').animate({
                            left: '5%'
                        },2000);
                        $('.Xiaodian').find('#xd_js').animate({
                            left: '52%'
                        },2000);
                        break;
                    case 5:
                        /*
                        *plan
                        * */
                        $('.plan').find('#p-1').delay().animate({
                            left: '-5%'
                        },1000,'easeOutExpo');
                        $('.plan').find('#p-2').delay().animate({
                            left: '-5%'
                        },2000,'easeOutExpo');
                        $('.plan').find('#p-3').delay().animate({
                            left: '-5%'
                        },2500,'easeOutExpo');

                        break;
                    case 6:
                        /*
                        * writing
                        * */
                        $('.writing').find('#writing-tit').fadeIn(1000);
                        $('.writing').find('#writing-li1').delay(500).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li2').delay(1000).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li3').delay(1500).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li4').delay(2000).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li5').delay(2500).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li6').delay(3000).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li7').delay(2000).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li8').delay(2500).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        $('.writing').find('#writing-li9').delay(3000).animate({
                            top:'0%'
                        },2000,'easeOutExpo');
                        break;
                    case 7:
                        /*
                        * photography
                        * */
                        $('.photography').find('#photography-tit').delay().animate({
                            left:'7%'
                        },500);
                        $('.photography').find('#box-img1').delay().fadeIn(500);
                        $('.photography').find('#box-img2').delay(1000).fadeIn(2000);
                        $('.photography').find('#box-img3').delay(2000).fadeIn(2000);
                        $('.photography').find('#box-img4').delay(3000).fadeIn(2000);
                        $('.photography').find('#box-img5').delay(4000).fadeIn(2000);
                        $('.photography').find('#box-img6').delay(5000).fadeIn(2000);
                        $('.photography').find('#box-img7').delay(6000).fadeIn(2000);
                        $('.photography').find('#box-img8').delay(7000).fadeIn(2000);
                        $('.photography').find('#box-img9').delay(8000).fadeIn(2000);
                        $('.photography').find('#box-img10').delay(9000).fadeIn(2000);
                        $('.photography').find('#box-img11').delay(10000).fadeIn(2000);
                        $('.photography').find('#box-img12').delay(11000).fadeIn(2000);
                        break;
                }
            }
        },

        onSlideLeave: function(anchorLink,index,slideIndex,direction) {
            if (index == 2){
                switch (slideIndex) {
                    case 1:
                        $('.Applets').find('.Applets_tlt_h1').fadeOut(0);
                        $('.Applets').find('.Applets_text').fadeOut(0);
                        $('.Applets').find('.single1').animate({
                            'margin-top': '600px'
                        },0);
                        $('.Applets').find('.single2').animate({
                            'margin-top': '600px'
                        },0);
                        break;
                    case 2:
                        $('#Applets2').find('.Applets_tlt_h1').fadeIn(2000);
                        $('#Applets2').find('.Applets_text').fadeIn(2000);
                        $('#Applets2').find('.single1').animate({
                            'margin-top': '600px'
                        },0);
                        $('#Applets2').find('.single2').animate({
                            'margin-top': '600px'
                        },0);
                        break;
                    case 3:
                        $('#Applets3').find('.Applets_tlt_h1').fadeIn(2000);
                        $('#Applets3').find('.Applets_text').fadeIn(2000);
                        $('#Applets3').find('.box_img1').delay(0).animate({
                            'margin-top': '600px'
                        },0);
                        $('#Applets3').find('.box_img2').delay(0).animate({
                            'margin-top': '600px'
                        },0);
                        $('#Applets3').find('.box_img3').delay(0).animate({
                            'margin-top': '600px'
                        },0);
                        break;
                }
            }
            if (index == 3){
                switch (slideIndex) {
                    case 5:
                        /*
                        *plan
                        * */
                        $('.plan').find('#p-1').delay().animate({
                            left: '5%'
                        },0,'easeOutExpo');
                        $('.plan').find('#p-2').delay().animate({
                            left: '-21.5%'
                        },0,'easeOutExpo');
                        $('.plan').find('#p-3').delay().animate({
                            left: '-35%'
                        },0,'easeOutExpo');
                        break;
                    case 6:
                        /*
                        * writing
                        * */
                        $('.writing').find('#writing-tit').fadeIn(1000);
                        $('.writing').find('#writing-li1').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li2').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li3').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li4').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li5').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li6').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li7').delay(0).animate({
                            top:'1000%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li8').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        $('.writing').find('#writing-li9').delay(0).animate({
                            top:'100%'
                        },0,'easeOutExpo');
                        break;
                    case 7:
                        /*
                        * photography
                        * */
                        $('.photography').find('#photography-tit').delay().animate({
                            left:'7%'
                        },500);
                        $('.photography').find('#box-img1').delay().fadeIn(500);
                        $('.photography').find('#box-img2').delay(1000).fadeIn(2000);
                        $('.photography').find('#box-img3').delay(2000).fadeIn(2000);
                        $('.photography').find('#box-img4').delay(3000).fadeIn(2000);
                        $('.photography').find('#box-img5').delay(4000).fadeIn(2000);
                        $('.photography').find('#box-img6').delay(5000).fadeIn(2000);
                        $('.photography').find('#box-img7').delay(6000).fadeIn(2000);
                        $('.photography').find('#box-img8').delay(7000).fadeIn(2000);
                        $('.photography').find('#box-img9').delay(8000).fadeIn(2000);
                        $('.photography').find('#box-img10').delay(9000).fadeIn(2000);
                        $('.photography').find('#box-img11').delay(10000).fadeIn(2000);
                        $('.photography').find('#box-img12').delay(11000).fadeIn(2000);
                        break;
                }
            }
        }
    });

    $('#lil2').hover(function () {
        $('#lil2').css('opacity','1');
    },function () {
        $('#lil2').css('opacity','0');
    });
    $('#lil4').hover(function () {
        $('#lil4').css('opacity','1');
    },function () {
        $('#lil4').css('opacity','0');
    });
    $('#lil6').hover(function () {
        $('#lil6').css('opacity','1');
    },function () {
        $('#lil6').css('opacity','0');
    });
    $('#lil8').hover(function () {
        $('#lil8').css('opacity','1');
    },function () {
        $('#lil8').css('opacity','0');
    });
    $('#lil10').hover(function () {
        $('#lil10').css('opacity','1');
    },function () {
        $('#lil10').css('opacity','0');
    });
    $('#lil12').hover(function () {
        $('#lil12').css('opacity','1');
    },function () {
        $('#lil12').css('opacity','0');
    });
    $('.btn').click(function (event) {
        $(".Lanv_canva").show(800);
    });
    $(document).click(function (e) {
        var target=e ? e.target : window.event.srcElement;
        if(target.className!="btn")
            $(".Lanv_canva").hide();
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 158000);
});


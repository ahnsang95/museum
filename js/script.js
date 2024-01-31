$(function(){
    var oneDepth = $('#header .gnb > li'), 
        twoDepth = oneDepth.children('.twoD'),
        thrBtn = twoDepth.find('.thrBt'),
        gnbBg = $('#header .gnbBg'),
        leftArea = $('#header .leftArea');
    
        $(oneDepth).each(function(i){
            $(this).on("mouseenter", function(){
                $(oneDepth).eq(i).addClass("on");
            });
            $(this).on("mouseleave", function(){
                $(oneDepth).eq(i).removeClass("on");
            });
        });
        
        $("#header .gnbArea, #header .gnbBg").mouseenter(function(){
            $(".blackBg").css("z-index",50);
            $(".blackBg").stop().fadeIn(0);
            $(gnbBg).stop().slideDown(300);
            $(twoDepth).stop().fadeIn(500);
            $(leftArea).stop().fadeIn(300);	
        });
        
        $("#header .gnbArea, #header .gnbBg").mouseleave(function(){
            $(".blackBg").css("z-index",100);
            $(".blackBg").stop(true,true).fadeOut(0);
            $(gnbBg).stop(true,true).slideUp(100);
            $(twoDepth).stop(true,true).fadeOut(0);
            $(leftArea).stop(true,true).fadeOut(100);
            $(oneDepth).removeClass("on");
        });
        
        var maxH = 0,
            longH;

        $(thrBtn).each(function(){
            $(this).click(function(){
                if($(this).hasClass("on")){
                    $(this).removeClass("on");
                    $(this).next(".thrD").slideUp(0);
                }else{
                    $(thrBtn).removeClass("on");
                    $("#header .gnb .thrD").slideUp(0);
                    $(this).addClass("on");
                    $(this).next(".thrD").slideDown(0);
                }
                $("#header .gnb > li .twoD").each(function(q){
                    longH = $(this).height() + 70;
                    if(maxH < longH) maxH = longH;
                });
                $(gnbBg).css("height",maxH + 15)
                $(leftArea).css("height",maxH - 120)
                maxH = 0
            })
        })

        $(window).scroll(function(){
            if($(window).scrollTop() > 150){
				$("#util").css("margin-bottom", $("#header").outerHeight(true));
				$("#header").css({"position":"fixed"});
                $("#header").addClass("on");
			}else{
				$("#util").css("margin-bottom", 0);
				$("#header").css({"position":"relative"});
                $("#header").removeClass("on");
			}
        })

        /* mHeader */
        var openBtn = $('.mHeader .menuBtn'),
            mMArea = $('.mMenuArea'),
            closeBtn = mMArea.find('.closeBt'),
            oneD = mMArea.find('.oneD'),
            twoD = oneD.siblings('.twoD'),
            thrBt = twoD.children('.thrBt');

        openBtn.click(function(){
            mMArea.animate({'left' : '0'})
        });

        closeBtn.click(function(){
            mMArea.animate({'left' : '-100%'})
        });

        oneD.click(function(){
            twoD.slideUp();
            oneD.removeClass('on');
            if(!$(this).next('.twoD').is(':visible')){
                $(this).next('.twoD').slideDown();
                $(this).addClass('on');
            }
        })

        thrBt.click(function(){
            $(this).next().slideToggle();
            $(this).toggleClass('on');
        })

        // mainCon1 배경움직임
        let mainCon1LI = $('.mainCon1List > li'),
            mainCon1Bg = $('.mainCon1Bg > div');

        mainCon1LI.each(function(i){
            $(this).hover(function(){
                $(mainCon1Bg).stop().fadeOut(500);
                $(mainCon1Bg).eq(i).stop().fadeIn(500);
            },function(){
                $(mainCon1Bg).stop().fadeOut(500);
            });
        });

        // topBtn
        let topBtn = $('.topBtn');

        topBtn.click(function(){
            $('html').animate({'scrollTop' : 0},300);
        })

        // window scroll 애니메이션
        $(window).scroll(function(){
            let winScrollT = $(window).scrollTop(), // 윈도우 스크롤된 정도
            mCon1T = $('.mainCon1').offset().top, // 수직 위치값
            mCon2T = $('.mainCon2').offset().top,
            mCon3T = $('.mainCon3').offset().top,
            footT = $('#footer').offset().top;

            if(winScrollT >= mCon1T &&  winScrollT <= mCon2T){
                $('.mainCon1 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
                $('.mainCon1 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
                $('.mainCon1 .mainCon1List').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
            }else if(winScrollT >= mCon2T &&  winScrollT <= mCon3T){
                $('.mainCon2 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
                $('.mainCon2 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
                $('.mainCon2 .mainCon2List').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
            }else if(winScrollT >= mCon3T &&  winScrollT <= footT){
                $('.mainCon3 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
                $('.mainCon3 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
                $('.mainCon3 .mainNews').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
            }
        })

        // swiper 설정
        var swiper = new Swiper(".mainSlide", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
})
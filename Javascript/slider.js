var main = function(){
	var nextPhoto = function(){
						var currentSlide=$('.active-slide');
						var nextSlide=currentSlide.next();
						if(nextSlide.length===0){
								nextSlide=$('.my-slide').first();
						}

						currentSlide.fadeOut(600).removeClass('active-slide');
						setTimeout(function(){
							nextSlide.fadeIn(600).addClass('active-slide');
						}, 600);


						var currentDot = $('.active-dot');
						var nextDot = currentDot.next();

						if(nextDot.length===0){
								nextDot=$('.dot').first();
						}
						currentDot.removeClass('active-dot');
						nextDot.addClass('active-dot');
				};

	$('.arrow-next').click(nextPhoto);
	$('.photo').click(nextPhoto);

    $('.arrow-prev').click(function(){
			console.log('clicked');
            var currentSlide=$('.active-slide');
            var prevSlide=currentSlide.prev();
            if(prevSlide.length===0){
                prevSlide=$('.my-slide').last();
            }

            currentSlide.fadeOut(600).removeClass('active-slide');
						setTimeout(function(){
            	prevSlide.fadeIn(600).addClass('active-slide');
						}, 600);

            var currentDot = $('.active-dot');
            var prevDot = currentDot.prev();

            if(prevDot.length===0){
                prevDot=$('.dot').last();
            }
            currentDot.removeClass('active-dot');
            prevDot.addClass('active-dot');
        });

}

$(document).ready(main);

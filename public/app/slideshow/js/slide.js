var slide = function() {
	var bookNumber = 1,
		previousPageNumber = 4,
		nextPageNumber = 1
		;

	var hasMoreNextPages = function() {
		return !$(getCurrentPage('next')).is(':last-child');
	};

	var hasMorePreviousPages = function() {
		return !$(getCurrentPage('prev')).is(':first-child');
	};

	var getCurrentBook = function() {
		return $('.book').get(getCurrentBookNumber());
	};

	var getCurrentPage = function(val) {
		var book = getCurrentBook();
		return $(book).find('.page:eq('+(getCurrentPageNumber(val))+')');
	};

	var getCurrentBookNumber = function() {
		return bookNumber;
	};

	var getCurrentPageNumber = function(val) {
		if(val == 'prev')
			return previousPageNumber;
		return nextPageNumber;
	};

	var incrementPageNumber = function() {
		nextPageNumber+=2;
	};

	var decrementPageNumber = function() {
		previousPageNumber-=2;
	}

	return {
		prevPage: function() {
			if(hasMorePreviousPages()) {
		 		var page = getCurrentPage('prev');
		 		$(page).addClass('leftPageTransition');
		 		$(page).css('z-index', 4);
				$(page).children('.back').addClass('backfaceVisibility');
				$(page).children('.front').css('display', 'none');
				decrementPageNumber();
		 	} else {
		 		console.log('first page');
		 		nextPageNumber = 1;
		 		previousPageNumber = 4;
		 		$('.page .back').removeClass('backfaceVisibility');
				$('.page').css('z-index', 1);
				$('.page:nth-child(5)').css('z-index', 2);
				$('.page:nth-child(2)').css('z-index', 2);
				$('.page').removeClass('rightPageTransition');
				$('.page').removeClass('leftPageTransition');
			}
		},

		nextPage: function() {
		 	if(hasMoreNextPages()) {
		 		var page = getCurrentPage('next');
		 		$(page).addClass('rightPageTransition');
		 		$(page).css('z-index', 3);
				$(page).children('.back').addClass('backfaceVisibility');
				$(page).children('.front').css('display', 'none');
				incrementPageNumber();
			} else {
		 		console.log('last page');
		 		nextPageNumber = 1;
		 		previousPageNumber = 4;
		 		$('.page .back').removeClass('backfaceVisibility');
				$('.page').css('z-index', 1);
				$('.page:nth-child(5)').css('z-index', 2);
				$('.page:nth-child(2)').css('z-index', 2);
				$('.page').removeClass('rightPageTransition');
				$('.page').removeClass('leftPageTransition');
		 	}
		},

		prevBook: function() {
			$('.book').eq(bookNumber).removeClass('animation-next');
			$('.book').eq(bookNumber).removeClass('animation-prev');
			$('.book').eq(bookNumber).addClass('animation-prev');
			//console.log('prev book');
		},

		nextBook: function() {
			$('.book').eq(bookNumber).removeClass('animation-prev');
			$('.book').eq(bookNumber).removeClass('animation-next');
		 	$('.book').eq(bookNumber).addClass('animation-next');
		 	//console.log('next book');
		}
	}
}();
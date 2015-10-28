function $addCurrent(x) {
	x.parent().removeClass('inactive').addClass('current');
	x.parent().siblings().removeClass('current').addClass('inactive');
}

function $screenMove0() { 
	if($('.screen').attr('data-click-state') == 1) {
		$('.screen').attr('data-click-state', 0);
        $('.red-panel').animate({top: '+=100em'}, 'slow');
        $('.image-panel').animate({left: '-=100em'}, 'slow');
        $('.black-panel').animate({right: '-=100em'}, 'slow');
   }
}
                       
function $screenMove1() {
	if($('.screen').attr('data-click-state') != 1) {
		$addCurrent($('.screen'));
		$('.screen').attr('data-click-state', 1);
        $('.red-panel').animate({top: '-=100em'}, 'slow');
        $('.image-panel').animate({left: '+=100em'}, 'slow');
        $('.black-panel').animate({right: '+=100em'}, 'slow');
   }
}

function $featuresMove0() { 
	if($('.features').attr('data-click-state') == 1) {
		$('.features').attr('data-click-state', 0);
        $('.info-panel').animate({left: '-=100em'}, 'slow');
        $('.image2-panel').animate({right: '-=100em'}, 'slow');
    }
}
		                 
function $featuresMove1() { 
	if($('.features').attr('data-click-state') != 1) {
		$addCurrent($('.features'));
     	$('.features').attr('data-click-state', 1);
     	$('.info-panel').animate({left: '+=100em'}, 'slow');
        $('.image2-panel').animate({right: '+=100em'}, 'slow');
     }
}

function $internetMove0() {
	if($('.internet').attr('data-click-state') == 1) {
		$('.internet').attr('data-click-state', 0);
		$('.back-info').animate({top: '-=100em'}, 'slow');
		$('.internet-img').animate({right: '-=100em'}, 'slow');
	}
}

function $internetMove1() {
	if($('.internet').attr('data-click-state') != 1) {
		$addCurrent($('.internet'));	
		$('.internet').attr('data-click-state', 1);
		$('.back-info').animate({top: '+=100em'}, 'slow');
		$('.internet-img').animate({right: '+=100em'}, 'slow');
	}
}
			             
function $durabilityMove0() {
	if($('.durability').attr('data-click-state') == 1) {
		$('.durability').attr('data-click-state', 0);
		$('.durability-back').animate({bottom: '-=100em'}, 'slow');
		$('.durability-img').animate({top: '-=100em'}, 'slow');
		$('.durability-red').animate({right: '-=100em'}, 'slow');			
	}
}
			               
function $durabilityMove1() {
	if($('.durability').attr('data-click-state') != 1) {
		$addCurrent($('.durability'));		
		$('.durability').attr('data-click-state', 1);
		$('.durability-back').animate({bottom: '+=100em'}, 'slow');
		$('.durability-img').animate({top: '+=100em'}, 'slow');
		$('.durability-red').animate({right: '+=100em'}, 'slow');
	}
}
			             
function $priceMove0() {
	if($('.price').attr('data-click-state') == 1) {
		$('.price').attr('data-click-state', 0);
		$('.price-back').animate({right: '-=100em'}, 'slow');
		$('.price-info').animate({top: '-=100em'}, 'slow');
		$('.price-img').animate({bottom: '-=100em'}, 'slow');
	}
}	
			        
function $priceMove1() {
	if($('.price').attr('data-click-state') != 1) {	
		$addCurrent($('.price'));		
		$('.price').attr('data-click-state', 1);
        $('.price-back').animate({right: '+=100em'}, 'slow');
        $('.price-info').animate({top: '+=100em'}, 'slow');
        $('.price-img').animate({bottom: '+=100em'}, 'slow');
    }
}       

$(document).ready(function() {
	$screenMove1();
	
    $('.screen').on('click',function() {
    	$featuresMove0();
    	$internetMove0();
    	$durabilityMove0();
    	$priceMove0();
    	$screenMove1();
    });    

    $('.features').on('click',function() {
    	$screenMove0();
    	$internetMove0();
    	$durabilityMove0();
    	$priceMove0();
    	$featuresMove1();    	
	});
	
	$('.internet').on('click', function() {
		$screenMove0();
		$featuresMove0();
    	$durabilityMove0();
    	$priceMove0();
    	$internetMove1();
	});
	
	$('.durability').on('click', function() {
		$screenMove0();
		$featuresMove0();
		$internetMove0();
		$priceMove0();
		$durabilityMove1();
	});
	
	$('.price').on('click', function() {
		$screenMove0();
		$featuresMove0();
		$internetMove0();
		$durabilityMove0();
		$priceMove1();		
	});
});

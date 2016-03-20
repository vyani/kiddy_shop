/*var colCount = 0;
var colWidth = 314;
var margin = 10;
var spaceLeft = 20;
var windowWidth = 1200;
var blocks = [];

$(function(){
	$(window).resize(setupBlocks);
});

function setupBlocks() {
	windowWidth = $(window).width();
	blocks = [];

	// Calculate the margin so the blocks are evenly spaced within the window
	colCount = Math.floor(windowWidth/(colWidth+margin*2));
	spaceLeft = (windowWidth - ((colWidth*colCount)+(margin*(colCount-1)))) / 2;
	console.log(spaceLeft);
	
	for(var i=0;i<colCount;i++){
		blocks.push(margin);
	}
	positionBlocks();
}

function positionBlocks() {
	$('.block').each(function(i){
		var min = Array.min(blocks);
		var index = $.inArray(min, blocks);
		var leftPos = margin+(index*(colWidth+margin));
		$(this).css({
			'left':(leftPos+spaceLeft)+'px',
			'top':min+'px'
		});
		blocks[index] = min+$(this).outerHeight()+margin;
	});	
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};*/
var colCount = 3;
var colWidth = 40;
var margin = 20;
var windowWidth = 120;
var blocks = [];

function setupBlocks() {
    windowWidth = $(window).width();
    colWidth = $('.block').outerWidth();
    colCount = Math.floor(windowWidth/(colWidth+margin));
    for(var i=0; i < colCount; i++) {
        blocks.push(margin);
    }
    alert(blocks);
}
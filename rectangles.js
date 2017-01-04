var myRectangle = {

  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,

  // width and height
  width: 10,
  height: 4,

};

var intersectRectangles = function(rect1, rect2) {
  rect1.rightX = rect1.leftX + rect1.width;
  rect2.rightX = rect2.leftX + rect2.width;
  rect1.topY = rect1.bottomY + rect1.height;
  rect2.topY = rect2.bottomY + rect2.height;

  //overlap
  if (((rect1.leftX >= rect2.leftX && rect1.leftX <= rect2.rightX) || (rect2.leftX >= rect1.leftX && rect2.leftX <= rect1.rightX))
    && ((rect1.topY <= rect2.topY && rect1.topY >= rect2.bottomY) || (rect2.topY <= rect1.topY && rect2.topY >= rect1.bottomY))) {
    return {
      leftX: Math.max(rect1.leftX, rect2.leftX),
      bottomY: Math.max(rect1.bottomY, rect2.bottomY),
      width: Math.min(rect1.rightX, rect2.rightX) - Math.max(rect1.leftX, rect2.leftX),
      height: Math.min(rect1.topY, rect2.topY) - Math.max(rect1.bottomY, rect2.bottomY)
    }
  }
}
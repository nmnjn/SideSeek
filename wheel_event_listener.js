let threshold = 5 // change threshold to make the seek react faster to the scroll wheel
let inverted = false // alternate the scroll direction

var alternator = false // used to control smooth seeking for short scrolls

function triggerKeyPress(diff) {
  alternator = !alternator 
  if (alternator) { return }
  if (Math.abs(diff) < threshold) { return }
  var event = new Event('keydown')
  event.keyCode = (diff < 0 && inverted) ? 37 : 39 // 37 and 39 are keycodes for left and right arrow keys
  document.dispatchEvent(event)
}

document.addEventListener("wheel", function(e) {
  if (e.deltaY == 0 && e.deltaZ == 0) {
    triggerKeyPress(e.deltaX)
  }
});
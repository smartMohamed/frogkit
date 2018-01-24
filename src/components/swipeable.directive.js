export default {
  inserted: function (el,binding, vnode) {
    const threshold = binding.value || 100
    let startPos = null
    el.addEventListener('mousedown', onTouchStart, false)
    el.addEventListener('touchstart', onTouchStart, false)

    function onTouchStart(e) {
      startPos = getTouchPos(e);
      document.addEventListener('touchend', onTouchEnd, false);
      document.addEventListener('mouseup', onTouchEnd, false)
    }

    function onTouchEnd(e) {
      const delta = getTouchPos(e) - startPos
        if (delta < -threshold ) {
          vnode.context.$emit('swiperight')
        } else if (delta > threshold) {
          vnode.context.$emit('swipeleft')
        }
        document.removeEventListener('touchend', onTouchEnd);
        document.removeEventListener('mouseup', onTouchEnd);
    }

    function getTouchPos(e) {
      return e.changedTouches ? e.changedTouches[0].pageX : e.pageX
    }
  }
}
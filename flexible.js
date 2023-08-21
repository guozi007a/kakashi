(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
    var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

    // the UI draft basewidth that we assume
    var BASEWIDTH = 1080
    // set 1.6rem = 32px in mobile that lt 1080
    var MOBILE_SIZE = 32
  
    // set rem by basewidth
    function setRemUnit() {
        var W = docEl.clientWidth
        docEl.dataset.dpr = dpr
        if (isMobile) {
            if (W <= BASEWIDTH) {
                var rem = docEl.clientWidth / (BASEWIDTH / 10) * (MOBILE_SIZE / 16)
                docEl.style.fontSize = rem + 'px'
            } else {
                var rem = docEl.clientWidth / (BASEWIDTH / 10)
                docEl.style.fontSize = rem + 'px'
            }
        } else {
            // set 1rem = 10px in web
            docEl.style.fontSize = 10 + 'px'
        }
    }
  
    setRemUnit()
  
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })
  
    // detect 0.5px supports
    // so we can scribe a line which 0.5px in height
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
  }(window, document))
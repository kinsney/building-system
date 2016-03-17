const Vue = require('vue')
const store = require('./store')

const video = document.querySelector('video')
const audio = document.querySelector('audio')

Vue.config.debug = true;

video.addEventListener('error', start)
video.addEventListener('abort', start)
video.addEventListener('ended', start)

const root = (function (hash) {
  if (hash[0] !== '#') {
    return ''
  } else {
    const root = hash.slice(1)
    return root.slice(0, hash.lastIndexOf('/'))
  }
})(window.location.hash)

video.src = root + 'crazy-tuning.mp4'
audio.src = root + 'music.mp3'

function start (transition) {
  require('./render')
  require('./interact')
  setTimeout(function () {
    store.music = true
    video.style.opacity = 0
    setTimeout(() => {
      video.style.display = 'none'
    }, (!Vue.config.debug) * 2000)
  }, (!Vue.config.debug) * 5000)

}

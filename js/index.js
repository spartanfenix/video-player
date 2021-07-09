const $video  = document.querySelector('#video')
const $play  = document.querySelector('#play')
const $pause  = document.querySelector('#pause')
const $backward  = document.querySelector('#backward')
const $forward  = document.querySelector('#forward')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

$backward.addEventListener('click',handleBackward)
function handleBackward() {
    $video.currentTime -= 10
    //$video.currentTime = $video.currentTime - 10
    // console.log('para atras',$video.currentTime)
}

$forward.addEventListener('click',handleForward)
function handleForward() {
    $video.currentTime = $video.currentTime + 10
    // console.log('para adelante',$video.currentTime)
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    // console.log('video cargado', video.duration)

}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    // console.log('holi',$video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}
document.getElementById('play-now-btn').addEventListener('click',function(){

    const screencall = document.getElementById('screen-page');
    screencall.classList.add('hidden');


    const palyground = document.getElementById('play-ground-id');
    palyground.classList.remove('hidden');
})
function setbackgroundcolorofkeyboard(elementid){
    const element = document.getElementById(elementid);
    element.classList.alphabets('bg-orange-400');
}

function getrandomalphabet(){

    const alphabets ='abcdefghijklmnopqrst';
    const alphaseparates = alphabets.split('');
    
    const randomnumber = Math.random()*25;
    const index = Math.round(randomnumber);

    const alphabetsindex = alphaseparates[index];
    // console.log(alphabetsindex);

    // const changealpha = document.getElementById('changechar');
    // const p = document.createElement('p');
    // p.innerText = alphabetsindex;
  
    

    // const phidden = getElementById('hiddenkrbo');
    // phidden.classList.add('hidden');

    // changealpha.appendChild(p);

    const currentalphatake = document.getElementById('currentalpha');
    currentalphatake.innerText=alphabetsindex;

    setbackgroundcolorofkeyboard(alphabetsindex);



}


function setbackgroundcolorofkeyboard(elementid){
    console.log(elementid);
    const element = document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}

document.getElementById('play-now-btn').addEventListener('click',function(){

    const screencall = document.getElementById('screen-page');
    screencall.classList.add('hidden');


    const palyground = document.getElementById('play-ground-id');
    palyground.classList.remove('hidden');

    getrandomalphabet();

})
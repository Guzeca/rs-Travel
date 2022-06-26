let test = document.getElementsByClassName('slider-button');
test[0].onclick = function () {

    document.getElementById('one').classList.add('current');
    document.getElementById('two').classList.remove('current');
    document.getElementById('three').classList.remove('current');

    document.getElementById('japan').classList.add('current-slide-left');
    document.getElementById('japan').classList.remove('current-slide');
    document.getElementById('japan').classList.remove('current-slide-right');

}; 
test[1].onclick = function () {

    document.getElementById('one').classList.remove('current');
    document.getElementById('two').classList.add('current');
    document.getElementById('three').classList.remove('current');

    document.getElementById('japan').classList.remove('current-slide-left');
    document.getElementById('japan').classList.add('current-slide');
    document.getElementById('japan').classList.remove('current-slide-right');

}; 
test[2].onclick = function () {

    document.getElementById('one').classList.remove('current');
    document.getElementById('two').classList.remove('current');
    document.getElementById('three').classList.add('current');

    document.getElementById('japan').classList.remove('current-slide-left');
    document.getElementById('japan').classList.remove('current-slide');
    document.getElementById('japan').classList.add('current-slide-right');

};
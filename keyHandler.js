window.onkeydown = function (e) {
    switch(e.key) {
        case 'Enter': document.getElementsByClassName('calculate')[0].click();
            break;
        default: break;
    }
}
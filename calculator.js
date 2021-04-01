function main() {
    var inputs = [document.getElementsByClassName('userlevel')[0].value, document.getElementsByClassName('enemylevel')[0].value];
    var out = document.getElementsByClassName('out')[0];
    var icetype = document.getElementsByClassName('icetype')[0].checked
    var generation = document.getElementsByClassName('generation')[0].value;
    var parsedInputs = [parseInt(inputs[0]), parseInt(inputs[1])];
    var retVal = calc(parsedInputs[0], parsedInputs[1], generation, icetype);
    
    if (parsedInputs[0] > 100 || parsedInputs[0] < 1) {
        alert('Max Pokemon Level is 100, Minimum Pokemon Level is 1');
        return;
    }
    
    if (parsedInputs[1] > 100 || parsedInputs[1] < 1) {
        alert('Max Pokemon Level is 100, Minimum Pokemon Level is 1');
        return;
    }
    
    if (parsedInputs[0] < parsedInputs[1]) {
        out.innerHTML = "If the user's pokemon level is below that of the opponent's then Sheer Cold will always miss.";
        return;
    }
    
    if (generation < 1 || generation > 8) {
        alert('Valid Pokemon Generations: 1, 2, 3, 4, 5, 6, 7, 8');
        return;
    }

    out.innerHTML = "Accuracy of Sheer Cold: "+retVal+"%";
}

function calc(ul, el, gG, uIIT) {
    var accMath = ((ul - el) + 30);
    if (gG >= 7) {
        if (uIIT == false) {
            accMath = (ul - el) + 20;
            return accMath;
        } else {
            return accMath;
        }
    } else {
        return accMath;
    }
}
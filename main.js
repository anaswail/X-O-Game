let turn = 'x';
let title = document.querySelector('.title')


let square = [];
function winner(){
    for(let i = 1; i<10; i++){
        square[i] = document.getElementById('item' + i).innerHTML;
    }
    if(square[1] == square[2] && square[2] == square[3] && square[1] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 1).style.background = '#000';
        document.getElementById('item' + 2).style.background = '#000';
        document.getElementById('item' + 3).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if(square[4] == square[5] && square[5] == square[6] && square[4] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 4).style.background = '#000';
        document.getElementById('item' + 5).style.background = '#000';
        document.getElementById('item' + 6).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if(square[7] == square[8] && square[8] == square[9] && square[7] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 7).style.background = '#000';
        document.getElementById('item' + 8).style.background = '#000';
        document.getElementById('item' + 9).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if(square[1] == square[4] && square[4] == square[7] && square[1] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 1).style.background = '#000';
        document.getElementById('item' + 4).style.background = '#000';
        document.getElementById('item' + 7).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if(square[2] == square[5] && square[5] == square[8] && square[2] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 2).style.background = '#000';
        document.getElementById('item' + 5).style.background = '#000';
        document.getElementById('item' + 8).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    
    else if(square[3] == square[6] && square[6] == square[9] && square[3] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 3).style.background = '#000';
        document.getElementById('item' + 6).style.background = '#000';
        document.getElementById('item' + 9).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if(square[1] == square[5] && square[5] == square[9] && square[1] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 1).style.background = '#000';
        document.getElementById('item' + 5).style.background = '#000';
        document.getElementById('item' + 9).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if(square[3] == square[5] && square[5] == square[7] && square[3] != ''){
        if(turn === 'o'){
            title.innerHTML = 'X winner!';
        }
        else{
            title.innerHTML = 'O winner!';
        }
        document.getElementById('item' + 3).style.background = '#000';
        document.getElementById('item' + 5).style.background = '#000';
        document.getElementById('item' + 7).style.background = '#000';
        setInterval(() => {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    
}

function game(id){
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = "X";
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML ==''){
        element.innerHTML = "O";
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}
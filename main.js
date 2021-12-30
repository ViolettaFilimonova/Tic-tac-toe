let block = document.querySelector('.block')
let table = document.createElement('table')
let gamer = true,
winner = null;


function game(){
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr')
        table.append(tr)
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td')
            td.onclick = clickCell;
            tr.append(td)
        } 
        
    }
    block.append(table)
}
game();
function clickCell(){
        for (let i = 0; i < 3; i++) {
            if (gamer == true) {
                this.textContent = 'X'
                gamer = false    
            }else if (gamer == false) {
                this.textContent = '0'
                gamer = true   
            }
        }
        gameResult() 
    }

function gameResult(){
    let td = document.querySelectorAll('td')
    let result = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
   for (let i = 0; i < result.length; i++) {
       if (td[result[i][0]].textContent == 'X' && td[result[i][1]].textContent == 'X' && td[result[i][2]].textContent == 'X') {
           winner = 'X'
           gameWin()
       }else if(td[result[i][0]].textContent == '0' && td[result[i][1]].textContent == '0' && td[result[i][2]].textContent == '0'){
           winner = '0'
           console.log(winner)
           gameWin()
       }  
   }  
}


function gameWin(){
    let box = document.querySelector('.box')
    let main = document.querySelector('body')
    main.classList.add('dark')
    box.style.display = 'block'
    let text = document.querySelector('h2')
    text.textContent = 'Победили  ' + winner
    let button = document.querySelector('button')
    button.onclick = close
}

function close(){
    location.reload()
}
       




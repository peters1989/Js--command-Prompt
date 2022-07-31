let mas = []
let command;




for(let i = 0; i < Infinity; i++){

    command = prompt('Введите команду');
       
    if(command.split(',')[0] == 'add'){
        
        mas.push(command.split(',')[1])
        // console.log(mas);
    }else if (command.split(',')[0] == 'del'){
        mas.splice(mas.indexOf(command.split(',')[1]), 1)
        // console.log(mas);

    }else if (command == 'stop'){
        break
    }
}
console.log(mas);







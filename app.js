
var input = document.getElementById('input');
var array = [];
var idCount = 1;

function addToDo() {
    var inputValue = input.value;
    if (inputValue.trim() === '') return; // khali input sae bacnye k lye ur is sae data add nhn ho ga jab khali hai tu
   
    array.push({
        id: idCount,
        value: inputValue
    });
    idCount += 1;
    input.value = '';
   
    render();
    // console.log(Object.entries(array))
    
}

function render() {
    var add = document.getElementById('add');
    add.innerHTML = ''; 
    for (let i = 0; i < array.length; i++) {
        var newAdd = document.createElement('div');
        newAdd.setAttribute('id', array[i].id); // .id array ki key ka nam hai jis mai idCount save kia hai matalb ki array sae hum key k zarye us ki value find krstye hai.
        newAdd.setAttribute('class', 'brd'); 

        var newAddPara = document.createElement('p');
        newAddPara.innerHTML = `${array[i].id}- <br> ${array[i].value}`;// .value sae hun naye array sae value ko nikala hai jo hum nye khud input k through is array mai add kia tha. 
        newAdd.appendChild(newAddPara); // is ko jo hun nye naya div banaya tha us mai add kia.

        var deletebtn = document.createElement('button');
        deletebtn.setAttribute('class','decro')
        deletebtn.textContent = 'Delete!';
        deletebtn.onclick = function() {
            deleteToDo(array[i].id); // array ki key ko call kia hai 
        };

        var updatebtn = document.createElement('button');
        updatebtn.setAttribute('class','decro')
        updatebtn.textContent = 'Update!';
        updatebtn.onclick = function() {
            updateToDo(array[i].id);// array ki key ko call kia hai 
        };

        newAdd.appendChild(updatebtn);// button ko jo div hum nye banya tha us mai push kia hai
        newAdd.appendChild(deletebtn);// button ko jo div hum nye banya tha us mai push kia hai
        add.appendChild(newAdd); // ur jo naya div hun nye banya tha us ko html k ander div push kia hai
    }
    
    return;
}


function deleteToDo(id) {
   
    for (let j = 0; j < array.length; j++) {
        if (array[j].id === id) {
           
            array.splice(j, 1); // splice method ka use kartye hye hum nye ek array ko Delete kia hai ye removeChild k throughb hovta hai
    
            var deletedItem = document.getElementById(id);// hum nye Object k id key number ko get kia hai is mai
        
                deletedItem.parentNode.removeChild(deletedItem); 
        
            break; 
        }
    }
    
    render(); 
}


function updateToDo(id) {
   
    var newValue = document.getElementById('input').value;

        for (let k = 0; k < array.length; k++) {
            if (array[k].id === id) {
                array[k].value = newValue; // hum nye just Object k value ko naya value jo input sae lya tha tabdil kia hai.
                break; 
            }
        }
        input.value ='';
        render(); 
    }





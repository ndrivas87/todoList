var button = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');

//Function returns the length of what ever is inputed in the text input
function inputLength(){
   return input.value.length;
}

function createListElement(){

    //Create a list item element
    var li = document.createElement('li');

    //Create a div that will be places within the li element
    var newDiv = document.createElement('div');
    // Add class newItem to the div
    newDiv.classList.add('newItem');
    //Create a button to add next to the div which will remove the item
    var closeBtn = document.createElement('button');
    //Add class name btn
    closeBtn.classList.add('btn');
    //Add checkmark from font awseome to btn
    closeBtn.innerHTML = ('<i class="fas fa-check"></i>');

    //Add an eventlisten to watch for any clicks on the button being created. If clicked 
    //function removeListElement is triggered 
    closeBtn.addEventListener('click', function(){
        removeListElement(li);
    }
        )

    newDiv.appendChild(document.createTextNode(input.value));
    li.appendChild(newDiv);
    li.appendChild(closeBtn);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

function removeListElement(li){
    li.parentNode.removeChild(li);
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);


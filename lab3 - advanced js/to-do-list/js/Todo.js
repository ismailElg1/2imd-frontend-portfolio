let listArray =    JSON.parse(localStorage.getItem("list")) || [];

export default class Todo {



    constructor(title) {
      // HINT🤩
      // use a constructor to set basic property values
      this.title = title;
    
    }
  
    createElement() {
      // HINT🤩
      // this method will create the HTML structure with the correct classes, based on the todo priority
      // let newNote = document.createElement("li");
      // check if the todo item includes a priority like medium: to generate the correct classnames
      // don't forget to hook up an event listener for the click event
      // return newNote;

        
        let li = document.createElement('li');
        li.innerHTML = this.title;
        li.classList.add('prior-medium');
        li.addEventListener('click', this.markDone);
        return li;

       
    }
  
    markDone(e) {
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list
     
   
      if(this.classList.contains('done')){
        document.getElementById('todo-list').removeChild(this);
        // var list = JSON.parse(localStorage.getItem('list'));
        // console.log();
     
        // localStorage.removeItem(this.title);
        // localStorage.removeItem();
        // let list = JSON.parse(localStorage.getItem('list'));
        // let checked = list.indexOf(this.outerHTML.replace(/(<([^>]+)>)/gi, ""));
        // let newList = list.splice(checked, checked);
        // if(!rewrite){
        
          
        // }
        // else{
        //     localStorage.removeItem('list');
        // }
        // localStorage.setItem('list', '[]');
        // list.splice(list.findIndex(e => e.name === this.outerHTML.replace(/(<([^>]+)>)/gi, "")),1);
        // console.log(list);
        // localStorage.setItem('list', JSON.stringify(listArray));
      
        // console.log(list);
        // localStorage.setItem('list', list);
        // list.pop();
        
    
      }
      else{
        this.classList.add('done');
       
      }
      
     
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
    
      document.getElementById('todo-list').appendChild(todo);
      
    }

    
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      
      
            localStorage.setItem('list', '[]');
            listArray.push(this.title);
            localStorage.setItem('list', JSON.stringify(listArray));
           
      
    
      
    }

  }
  
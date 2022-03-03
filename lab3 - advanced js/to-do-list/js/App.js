import Todo from "./Todo";

export default class App {
    constructor() {
      console.log("🍕");
      // HINT🤩
      // set up the enter Key
      // this.setupEventListeners();
      // when the app loads, we can show previously saved items from localstorage
      // this.loadFromStorage();
      this.setupEventListeners();
      this.loadFromStorage();
  
    }
  
    setupEventListeners() {
      console.log("👂🏽");
      // HINT🤩
      // pressing the enter key in the text field triggers the createItem function
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it

      document.querySelector('#add-item-text').addEventListener('keyup', this.createItem.bind(this));
    }
  
    createItem(e) {
      console.log("📕");
      // HINT🤩
      // this function should create a new todo by using the Todo() class
      // new Todo(text)
      // todo.add();
      // todo.saveToStorage();
      // if you used bind() in the previous function, you'll notice that this refers to the current class instance
      // clear the text field with .reset() after adding the item
      // if (e.key === "Enter")
      let text = document.getElementById("add-item-text").value.trim();
      
      if(e.key==="Enter"){
        
        if(text!=""&&text!=" "){
            console.log("🗿");
            let todo = new Todo(text);
            todo.add();
            console.log(todo);
            
            todo.saveToStorage();
            this.reset();  
        }
        else{
            this.reset();  
        }
      }
      
    }
  
    loadFromStorage() {
      // HINT🤩
      // load all items from storage here and add them to the screen
      // use the Todo class to create the elements
      let old_list = JSON.parse(localStorage.getItem('list'));
      

      

    }
  
    reset() {
      // this function should reset the form / clear the text field
      document.getElementById("add-item-text").value = "";
    }
  }


  
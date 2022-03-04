import Todo from "./Todo";

export default class App {
  constructor() {
    console.log("🍕");
    this.setupEventListeners();
    this.loadFromStorage();
  }

  setupEventListeners() {
    console.log("👂🏽");
    document
      .querySelector("#add-item-text")
      .addEventListener("keyup", this.createItem.bind(this));
  }

  createItem(e) {
    let text = document.getElementById("add-item-text").value.trim();

    if (e.key === "Enter") {
      if (text != "" && text != " ") {
        let todo = new Todo(text);
        todo.add();
        todo.saveToStorage();
        this.reset();
      } else {
        this.reset();
      }
    }
  }

  loadFromStorage() {
    if (localStorage.getItem("list") != null) {
      let list = JSON.parse(localStorage.getItem("list"));
      for (let i = 0; i < list.length; i++) {
        let todo = new Todo(list[i]);
        todo.add();
      }
    }
  }

  reset() {
    document.getElementById("add-item-text").value = "";
  }
}

let listArray = JSON.parse(localStorage.getItem("list")) || [];

export default class Todo {
  constructor(title) {
    this.title = title;
  }

  createElement() {
    let li = document.createElement("li");

    const front = this.title.substring(0, this.title.indexOf(":"));
    switch (front) {
      case "low":
        li.classList.add("prior-low");
        this.title = this.title
          .slice(front.length + 1, this.title.length)
          .trim();
        break;
      case "high":
        li.classList.add("prior-high");
        this.title = this.title
          .slice(front.length + 1, this.title.length)
          .trim();
        break;
      default:
        li.classList.add("prior-medium");
        this.title = this.title.slice(front.length, this.title.length).trim();
        break;
    }
    li.innerHTML = this.title;
    li.addEventListener("click", this.markDone);
    return li;
  }

  markDone() {
    if (this.classList.contains("done")) {
      document.getElementById("todo-list").removeChild(this);
      let todos;
      if (localStorage.getItem("list") === null) {
        todos = [];
      } else {
        todos = JSON.parse(localStorage.getItem("list"));
      }
      const index = this.innerText;
      todos.splice(todos.indexOf(index), 1);
      localStorage.setItem("list", JSON.stringify(todos));
    } else {
      this.classList.add("done");
    }
  }

  add() {
    let todo = this.createElement();
    document.getElementById("todo-list").appendChild(todo);
  }

  saveToStorage() {
    localStorage.setItem("list", "[]");
    listArray.push(this.title);
    localStorage.setItem("list", JSON.stringify(listArray));
  }
}

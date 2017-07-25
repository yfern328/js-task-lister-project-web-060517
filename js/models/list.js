// List Model

const all = []

function createList(){
  let listId = 0
  return class List {
    constructor(title) {
      this.title = title
      this.id = listId++
      all.push(this)
      this.tasks = []
    }

    static get all() {
      return all
    }

  }
}

// class List {
//   constructor(title){
//     this.title = title;
//   }
// }
//
// function List(title) {
//   this.title = title
//   this.all = []
// }

// function createList() {
//   return class List {
//     constructor(title){
//       this.title = title
//     }
//   }
// }

let List = createList()

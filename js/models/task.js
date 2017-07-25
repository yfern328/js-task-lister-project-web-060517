// Task Model


function createTask(){
  let taskId = -2
  return class Task {
    constructor(description, priority = "high", list){
      this.description = description
      this.priority = priority
      this.id = taskId++
      this.list = list
    }
  }
}

let Task = createTask()

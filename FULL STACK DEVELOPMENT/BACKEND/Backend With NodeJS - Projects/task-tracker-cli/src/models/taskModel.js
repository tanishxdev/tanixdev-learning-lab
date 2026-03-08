class Task {
  constructor(id, description, status = "todo") {
    this.id = id;
    this.description = description;
    this.status = status; // 'todo', 'in-progress', 'done'
    this.createdAt = new Date().toDateString();
    this.updatedAt = new Date().toDateString();
  }
}

module.exports = Task;

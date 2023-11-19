class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  async run() {
    for (const task of this.tasks) {
      await task.execute();
    }
    console.log("All tasks completed.");
  }
}

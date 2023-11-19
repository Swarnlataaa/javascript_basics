class Task {
  constructor(id, duration) {
    this.id = id;
    this.duration = duration;
  }

  execute() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Task ${this.id} completed after ${this.duration}ms`);
        resolve();
      }, this.duration);
    });
  }
}

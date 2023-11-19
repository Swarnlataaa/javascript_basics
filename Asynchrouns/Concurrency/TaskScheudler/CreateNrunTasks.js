const task1 = new Task(1, 2000);
const task2 = new Task(2, 1000);
const task3 = new Task(3, 1500);

const scheduler = new TaskScheduler();
scheduler.addTask(task1);
scheduler.addTask(task2);
scheduler.addTask(task3);

scheduler.run();

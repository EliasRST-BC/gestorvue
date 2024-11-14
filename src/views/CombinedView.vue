<template>
  <div class="combined-view">
    <h1>Vista Combinada</h1>
    <div class="add-task-container">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Añadir nueva tarea"
        class="form-control mb-3"
      />
      <button @click="addTask" class="btn btn-primary me-2">
        <i class="bi bi-plus-circle"></i> Añadir
      </button>
      <button @click="fetchApiTasks" class="btn btn-info">
        <i class="bi bi-cloud-download"></i> Mostrar Tareas de la API
      </button>
    </div>

    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-card">
        <h5 :class="{ completed: task.completed }">{{ task.todo }}</h5>
        <div class="task-actions">
          <button @click="completeTask(task.id)" class="btn-icon text-success">
            <i class="bi bi-check-circle-fill"></i>
          </button>
          <button @click="deleteTask(task.id)" class="btn-icon text-danger">
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
        <span class="task-status" :class="{ 'status-completed': task.completed, 'status-pending': !task.completed }">
          {{ task.completed ? "Completado" : "Pendiente" }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CombinedView",
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        const newTask = {
          id: Date.now(),
          todo: this.newTask,
          completed: false,
        };
        this.tasks.push(newTask);
        this.newTask = "";
      }
    },
    async fetchApiTasks() {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        if (!response.ok) throw new Error("Error en la solicitud");

        const data = await response.json();
        const formattedTasks = data.todos.map(task => ({
          id: task.id,
          todo: task.todo,
          completed: task.completed,
        }));
        this.tasks = [...this.tasks, ...formattedTasks];
      } catch (error) {
        console.error("Error al cargar las tareas de la API:", error);
      }
    },
    completeTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) task.completed = true;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
};
</script>

<style scoped>
.combined-view {
  padding: 20px;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  position: relative;
  margin-bottom: 10px;
}

.completed {
  text-decoration: line-through;
  font-style: italic;
  font-weight: bold;
  color: gray;
}

.task-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.task-status {
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-weight: bold;
}

.status-completed {
  color: green;
}

.status-pending {
  color: red;
}
</style>

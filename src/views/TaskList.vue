<template>
    <div>
      <h1>Lista de Tareas</h1>
      <button @click="fetchTasks" class="btn btn-info mb-3">
        <i class="bi bi-cloud-download"></i> Cargar Tareas
      </button>
      <div v-if="tasks.length > 0" class="task-container">
        <div v-for="task in tasks" :key="task.id" class="task-card">
          <h5 :class="{ completed: task.completed }">{{ task.todo }}</h5>
          <div class="task-actions">
            <button @click="toggleTaskCompletion(task)" class="btn-icon text-success">
              <i class="bi bi-check-circle-fill"></i>
            </button>
            <button @click="deleteTask(task)" class="btn-icon text-danger">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
          <span class="task-status" :class="{ 'status-completed': task.completed, 'status-pending': !task.completed }">
            {{ task.completed ? "Completado" : "Pendiente" }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TaskList",
    data() {
      return {
        tasks: [],
      };
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await fetch("https://dummyjson.com/todos");
          if (!response.ok) throw new Error("Error en la solicitud a la API");
          
          const data = await response.json();
          this.tasks = data.todos;
        } catch (error) {
          console.error("Error al cargar las tareas:", error);
        }
      },
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .task-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .task-card {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    position: relative;
  }
  
  .completed {
    text-decoration: line-through;
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
  
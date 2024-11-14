<template>
    <div class="add-task-container">
        <h1>Añadir Tarea</h1>
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">
                <i class="bi bi-plus-circle"></i> Añadir
            </button>
        </div>

        <div v-if="tasks.length > 0" class="task-list">
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
    name: "AddTask",
    data() {
        return {
            newTask: "",
            tasks: [],
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;
            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(),
            };
            this.tasks.unshift(newTask);
            this.newTask = "";
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
    },
};
</script>

<style scoped>
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.task-list {
    margin-top: 20px;
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

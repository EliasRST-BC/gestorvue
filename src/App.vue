<template>
  <div id="app">
    <!-- Barra de navegación con Bootstrap e íconos -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link styled-button" aria-current="page" to="/">
                <i class="bi bi-house-door-fill"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link styled-button" to="/addtask">
                <i class="bi bi-plus-circle-fill"></i> Agregar Tarea
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link styled-button" to="/tasklist">
                <i class="bi bi-list-check"></i> Lista de Tareas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link styled-button" to="/combinedview">
                <i class="bi bi-eye-fill"></i> Vista Combinada
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Aquí se carga el componente de la ruta seleccionada -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 30px;
}

.styled-button {
  display: inline-flex;
  align-items: center;
  padding: 8px 15px;
  font-weight: bold;
  border-radius: 25px;
  background: linear-gradient(135deg, #007bff, #42a5f5);
  color: white !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.styled-button i {
  margin-right: 5px;
}

.styled-button:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
}

.router-link-exact-active {
  color: #42b983;
}
</style>



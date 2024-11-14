<template>
  <div class="hello bg-light p-5 rounded shadow">
    <h1 class="text-primary mb-4">Bienvenido a la Aplicación de Tareas</h1>
    <p class="lead text-secondary">
      Organiza y gestiona tus tareas de manera eficiente.
    </p>
    <h3 class="text-success mt-4">Funciones</h3>

    <div class="my-4">
      <h4 class="text-info">Añadir Tareas</h4>
      <p>Permite ingresar nuevas tareas manualmente.</p>
    </div>

    <div class="my-4">
      <h4 class="text-info">Lista de Tareas</h4>
      <p>Muestra todas las tareas extraídas de la API, permitiendo marcarlas como completadas o eliminarlas.</p>
    </div>

    <div class="my-4">
      <h4 class="text-info">Vista Combinada</h4>
      <p>Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  max-width: 800px;
  margin: auto;
  text-align: center;
}
</style>

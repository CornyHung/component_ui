<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>
    <div style="margin-top: 12px">
      <form @submit.prevent="createNewTodo" data-test="form">
        <input type="text" v-model="newTodo" data-test="new-todo" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'Vue testing',
          completed: false
        },
        {
          id: 2,
          text: 'Learn testing!',
          completed: true
        }
      ]
    };
  },

  methods: {
    createNewTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false
      });
    }
  }
};
</script>

<style>
.completed {
  color: gray;
  text-decoration: line-through;
}
</style>

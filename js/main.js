const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: "Fare la doccia", done: true },
        { text: "Fare la spesa", done: false },
        { text: "Comprare un gratta e vinci", done: false },
        { text: "Aggiornare il PC", done: false },
        { text: "Preparare il pranzo", done: true },
        { text: "Andare in palestra", done: false },
        { text: "Giocare al pc", done: true },
      ],

      newTask: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    createTask() {
      const newTaskCopy = { ...this.newTask };
      this.tasks.push(newTaskCopy);

      this.newTask.text = "";
    },
  },
}).mount("#app");

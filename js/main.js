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

      error: {
        status: false,
        text: "Inserisci un testo con almeno 3 caratteri",
      },
    };
  },

  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    createTask() {
      if (this.newTask.text.length < 3) {
        this.error.status = true;
      } else {
        const newTaskCopy = { ...this.newTask };
        this.tasks.push(newTaskCopy);

        this.error.status = false;
        this.newTask.text = "";
      }
    },

    changeStatus(task) {
      task.done = !task.done;
    },
  },
}).mount("#app");

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
    };
  },

  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");

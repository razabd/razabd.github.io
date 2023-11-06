const app = Vue.createApp({
    data() {
        return {
            display: ''
        }
    },
    methods: {
        appendToDisplay(value) {
            this.display += value;
        },
        clearDisplay() {
            this.display = '';
        },
        calculateResult() {
            this.display = eval(this.display);
        }
    }
})

app.mount('#app')

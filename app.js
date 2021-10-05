const app = Vue.createApp({
    //data, functions 
    // template: '<h2>i am the template</h2>'
    data() {
        return {
            url: 'https://www.youtube.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpeg', isFav: true },
                { title: 'way of the kinds', author: 'brandon sanderson', img: 'assets/2.jpeg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpeg', isFav: true }
            ]

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        handleEvents(event, data) {
            console.log(event, event.type)
            if (data) {
                console.log(data)
            }
        }

    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }

})


app.mount('#app')
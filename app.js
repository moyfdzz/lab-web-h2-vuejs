new Vue ({
    el: "#app",
    data: {
        title: "",
        imageURL: "",
        username: "",
        willAdd: false,
        books: [{title: "Los juegos del hambre", 
                imageURL: "https://images-na.ssl-images-amazon.com/images/I/71VrtQU9VBL.jpg",
                username: "vocemsapiens"},
                {title: "El hobbit",
                imageURL: "https://www.planetadelibros.com/usuaris/libros/fotos/281/m_libros/portada_el-hobbit-ilustrado_j-r-r-tolkien_201901161606.jpg",
                username: "ovt"
                },
                {title:"El principito",
                imageURL: "https://www.anayainfantilyjuvenil.com/images/libros/grande/las-aventuras-de-pinocho-libros-regalo.jpg",
                username: "parfisal"
                }
            ]
    },
    methods: {
        addBook: function() {
            if (this.title == "" || this.imageURL == "" || this.username == "") {
                alert("Por favor ingrese toda la información para agregar un libro.");

                return;
            }

            var book = {title: this.title, 
                        imageURL: this.imageURL,
                        username: this.username
            }

            this.title = ""
            this.imageURL = ""
            this.username = ""

            this.books.push(book);
        },
        displayAdd: function() {
            this.willAdd = !this.willAdd
        }
    }
});
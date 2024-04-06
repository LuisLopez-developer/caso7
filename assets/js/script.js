// Función para cambiar el tema según el color-schema
function cambiarTemaSegunColorSchema(mediaQuery) {
    const body = document.body;
    const themeimg = document.getElementById("themeImg");

    if (mediaQuery.matches) {
        body.classList.add("dark-theme");
        themeimg.src = "../assets/img/sun.png";
    } else {
        body.classList.remove("dark-theme");
        themeimg.src = "../assets/img/moon.png";
    }
}

// Añadir el evento 'click' para cambiar manualmente el tema
const themeimg = document.getElementById("themeImg");
themeimg.onclick = () => {
    document.body.classList.toggle("dark-theme");
    themeimg.src = document.body.classList.contains("dark-theme") ? "../assets/img/sun.png" : "../assets/img/moon.png";
};

// Verificar si el color-schema es oscuro cuando se carga la página
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
cambiarTemaSegunColorSchema(mediaQuery);

// Añadir un listener para detectar cambios en el color-schema
mediaQuery.addListener(cambiarTemaSegunColorSchema);

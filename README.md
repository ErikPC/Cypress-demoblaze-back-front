## README DE PRUEBAS DEMOBLAZE

### Visión general

Este repositorio contiene pruebas automatizadas para el sitio web de Demoblaze. Estas pruebas cubren tanto pruebas de backend de la API como pruebas de frontend del proceso de compra, incluyendo el inicio de sesión y la compra de dos artículos.

### Pruebas incluidas

1. **Pruebas de Backend**:

   - Se incluyen pruebas para los Endpoints de la API relacionados con el registro de usuarios y la funcionalidad de inicio de sesión.
   - Las pruebas de backend verifican la corrección de las respuestas, incluyendo el registro exitoso, el inicio de sesión exitoso, el registro con usuarios existentes y el inicio de sesión con contraseñas incorrectas.

2. **Pruebas de Frontend**:
   - Las pruebas de frontend simulan las interacciones del usuario para probar el proceso de compra en el sitio web de Demoblaze.
   - Esto incluye iniciar sesión, agregar elementos al carrito y completar la compra de dos artículos.

### Ejecución de las pruebas

Para ejecutar las pruebas, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js y npm instalados.
3. Instala las dependencias necesarias ejecutando `npm install`.
4. Ejecuta las pruebas con interfaz de usuario ejecutando `npm run cy:open`.
5. Ejecuta las pruebas sin interfaz de usuario ejecutando `npm run cy:run`.

### Nota

- Asegúrate de tener una conexión a Internet estable al ejecutar las pruebas, ya que interactúan con el sitio web y la API en vivo de Demoblaze.
- Estas pruebas están destinadas únicamente con fines de demostración y educativos.

![Laboratorio](https://image.lag.vn/upload/news/18/12/31/one_piece_chapter_839___germa_66_laboratory_by_amanomoon-dahqiuv_EOSE.jpg)

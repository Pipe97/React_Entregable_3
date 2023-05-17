export const getRandomNumber = (min,max) => {
    // obtenemos la distancia entre los dos numeros
    const amplitud = Math.abs(max - min);
    // Generamos un numero aleatorio entre 0 y esa distancia
    const randomAmplitud = Math.round(Math.random () * amplitud)
    // La distancia aleatoria se suma al minimo
    // 
    return min + randomAmplitud
}
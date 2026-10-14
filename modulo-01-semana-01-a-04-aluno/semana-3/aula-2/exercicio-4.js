let temperatura = 30;
while (true) {
    console.log(temperatura);
    temperatura += 5;
    if (temperatura >=50) {
        console.log("Perigo!!! Equipamento superaquecido.");
        break;
    }

}
// Función para obtener el día y hora actual y resaltar la clase correspondiente
function highlightCurrentClass() {
    // Obtener el día de la semana (1 = lunes, ..., 5 = viernes)
    const currentDay = new Date().getDay();
    
    // Obtener la hora y minutos actuales
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    
    // Definir los intervalos de tiempo de cada clase en formato 24 horas
    const schedule = [
        { start: '8:30', end: '9:20' },
        { start: '9:20', end: '10:15' },
        { start: '10:15', end: '11:10' },
        { start: '11:10', end: '11:35' },
        { start: '11:35', end: '12:25' },
        { start: '12:25', end: '13:20' },   
        { start: '13:20', end: '14:15' }
    ];

    // Convertir la hora a minutos
    function timeToMinutes(timeStr) {
        const [hour, minute] = timeStr.split(':');
        return parseInt(hour) * 60 + parseInt(minute);
    }

    const currentMinutesOfDay = currentHour * 60 + currentMinutes;

    // Seleccionar todas las filas de la tabla
    const rows = document.querySelectorAll('table tr');
    
    // Si es un día entre lunes y viernes (1 a 5)
    if (currentDay >= 1 && currentDay <= 5) {
        // Iterar sobre cada franja horaria
        schedule.forEach((period, index) => {
            const startMinutes = timeToMinutes(period.start);
            const endMinutes = timeToMinutes(period.end);

            // Verificar si la hora actual está dentro de la franja horaria
            if (currentMinutesOfDay >= startMinutes && currentMinutesOfDay <= endMinutes) {
                // Obtener la fila correspondiente al horario actual
                const currentRow = rows[index + 1]; // +1 porque la primera fila es el encabezado
                
                // Seleccionar la celda correspondiente al día actual
                const currentCell = currentRow.querySelector(`td:nth-child(${currentDay + 1})`);
                
                // Aplicar la clase 'current-class' para resaltar la celda
                currentCell.classList.add('current-class');
            }
        });
    }
}

// Llamar a la función cuando la página cargue
window.onload = highlightCurrentClass;

const currentDay = new Date().getDay();

const days = document.querySelectorAll('table th');

if (currentDay >= 1 && currentDay <= 5) {
    days[currentDay].classList.add('dia-actual');
}
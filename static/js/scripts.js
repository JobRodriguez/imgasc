$(document).ready(function() {
    $('#btnCargar').click(function() {
        var startTime = Date.now(); // Tiempo inicial en milisegundos
        var intervalId = setInterval(function() {
            var elapsedTime = Date.now() - startTime; // Tiempo transcurrido en milisegundos
            var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
            var milliseconds = elapsedTime % 1000;
            
            // Formatear el tiempo en horas:minutos:segundos:milisegundos
            var formattedTime = hours.toString().padStart(2, '0') + ':' +
                                minutes.toString().padStart(2, '0') + ':' +
                                seconds.toString().padStart(2, '0') + ':' +
                                milliseconds.toString().padStart(3, '0');
            
            $('#timer').val(formattedTime);
        }, 1); 

        $.ajax({
            url: 'static/img/img.jpg', 
            type: 'GET',
            dataType: 'text',
            async:true,
            success: function(data) {
                clearInterval(intervalId);
                $('#imgasc').html('<img src="static/img/img.jpg" alt="Imagen" class="card-img-top">');
            },
            error: function(xhr, status, error) {
                console.error('Error al obtener la imagen:', error);
                clearInterval(intervalId);
            }
        });
    });
});
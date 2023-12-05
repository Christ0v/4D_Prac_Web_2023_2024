<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strona</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="paints/favicon.ico" type="image/x-icon">
</head>
<body>
    <header class ="pacjent_header">
       <ul class = "lista">
        <li><a class ="menu" href="strona_dla_pacjentow.php"><img class ="main_page_icon" src="paints/favicon.ico" alt="obrazek"></a></li>
        <li><a class ="menu" href="strona_dla_pacjentow.php">Kalkulator BMI</a></li>
        <li><a class ="menu" href="strona_dla_pacjentow.php">O nas</a></li>
      </ul>
    </header>
    <main class = "pacjent_left">
        <section class ="zegar">
            <div id ="zegar">aaa</div>
            <div id ="obecnaData"></div>
        </section>
    
        <script>
            function aktualizujZegar() {
                var dzisiaj = new Date();
                var godzina = dzisiaj.getHours();
                var minuta = dzisiaj.getMinutes();
                var sekunda = dzisiaj.getSeconds();

                godzina = dodajZero(godzina);
                minuta = dodajZero(minuta);
                sekunda = dodajZero(sekunda);

                var czas = godzina + ":" + minuta + ":" + sekunda;

                document.getElementById('zegar').innerHTML = czas;

                setTimeout(aktualizujZegar, 1000);
            }

            function dodajZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }

            window.onload = function () {
                aktualizujZegar();
            };

            var obecnaData = new Date();

    
            var dzien = obecnaData.getDate();
            var miesiac = obecnaData.getMonth() + 1; 
            var rok = obecnaData.getFullYear();

            var tekstDaty = dzien + '/' + miesiac + '/' + rok;
            document.getElementById('obecnaData').innerText = tekstDaty;
        </script>
    </main>
    <section class= "pacjent_center">
            <h1>WITAMY!</h1>
    </section>    
</body>
</html>
<!DOCTYPE html>

<html>

<head>

    <title>Logowanie</title>

    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="icon" href="paints/favicon.ico" type="image/x-icon">

</head>

<body>
    <section class = "login_left">
        <img class="logo" src="paints/arach_logo.png" alt="Logo firmy">
        <h1 class = "witamy">Witamy!</h1>
    </section>
    
    <section class = "login_center">
    <!--<h1>ArachNet Private Hospital Center</h1>-->
        <form action="logowanie.php" method="post">
        <img class="ludzik" src="paints/login_person.png" alt="Ludzik">
        <!-- <label>Imię</label> -->
        <input type="text" name="imie" placeholder="Podaj imię"><br>

        <!-- <label>Nazwisko</label> -->
        <input type="text" name="nazwisko" placeholder="Podaj nazwisko"><br>

        <!-- <label>Hasło</label> -->
        <input type="password" name="haslo" placeholder="Podaj hasło"><br> 
    
        <button type="submit">Login</button>
     </form>
     <?php
     if (!empty($_POST)) { 
      $conn = mysqli_connect('localhost', 'root', '', 'pacjenci_db'); 
      $zapytanie = "SELECT imie , nazwisko , haslo FROM `pacjent` ";
      $wynik = mysqli_query($conn, $zapytanie); 
      
   
      $imie = $_POST['imie'];
      $nazwisko = $_POST['nazwisko'];
      $haslo = $_POST['haslo'];

      while($row = mysqli_fetch_row($wynik))
      {
        if($imie == "$row[0]" && $nazwisko == "$row[1]" && $haslo == "$row[2]" )
        {
         header("Location: strona_dla_pacjentow.php"); //przykładowy mechanizm logowania
         exit();
        }
        else
          echo"Wypełnij dane!";
      }
      
    }
     ?>
    </section>
    <section class ="login_right">
    </section>
</body>

</html>
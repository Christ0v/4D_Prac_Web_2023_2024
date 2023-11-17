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
    
    <section class = "login_right">
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
   
      $imie = $_POST['imie'];
      $nazwisko = $_POST['nazwisko'];
      $haslo = $_POST['haslo'];
      
      if($imie == "imie" && $nazwisko == "nazwisko" && $haslo == "haslo" )
      {
       header("Location: https://www.youtube.com"); //przykładowy mechanizm logowania
       exit();
      }
      else
        echo"Wypełnij dane!";
    }
     ?>
    </section>
</body>

</html>
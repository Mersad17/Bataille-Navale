<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
	 <link href="css/styles.css" type="text/css" rel="stylesheet">

		<title>Bataille Navale</title>
  </head>
<body>

<div>

 <img src="img/opiece.png">

</div>
<div class="container">
<div class="row">

<div class="col-md-3"></div>
<div class="col-md-6">
<div class="form-l">
  <form method="post" action="">
    <h5 class="hh1">Pour commencer veuillez remplir les champs suivants:</h5>
  <div class="form-group">
    <label for="formGroupExampleInput">Nickname</label>
    <input type="text" name="nickname" class="form-control" id="formGroupExampleInput" placeholder="Nickname" required>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="Email" class="form-control" id="formGroupExampleInput2" placeholder="Email" required>
  </div>
    <div class="form-group">
    <label for="formGroupExampleInput2">Age</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Age" required>
  </div>
  <button type="submit" name="submit" class="btn btn-primary">  
  Commencer </button>

</form>
<?php
if(isset($_POST["submit"])){
$name = $_POST["nickname"];
header("location: game.php?name=$name");
}
?>

</div>
</div>
<div class="col-md-3"></div>
</div>
</div>
</body>
</html>

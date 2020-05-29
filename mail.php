<?php
    $server="localhost";
    $username="root";
    $password="";
    $dbname="mail";
    $con=mysqli_connect($server,$username,$password,$dbname) or die("unable to connect");
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
        
    $uName=$_POST["user-name"];
    $uCity=$_POST["user-city"];
    $uComment=$_POST["user-comment"];
    $sql="INSERT INTO comments (name, city, message) VALUES ('$uName', '$uCity', '$uComment')";//створюємо запит який додає новий запис
        

    if (mysqli_query($con,$sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
        
    mysqli_close($con);
?>
<?php
    $server="localhost";
    $username="root";
    $password="";
    $dbname="mail";
    $con=mysqli_connect($server,$username,$password,$dbname) or die("unable to connect");//створює підключення
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $lIndex=$_POST["lIndex"];
    //$sql="SELECT name, city, message FROM comments";
    $sql="SELECT id, name, city, message FROM comments WHERE id > $lIndex";

    $result = mysqli_query($con, $sql);
    
    if (mysqli_num_rows($result) > 0) {//перевірка чи є щось в таблиці
        $stack = array();
        while($row = mysqli_fetch_assoc($result)) {//перевірка чи є наступний рядок
            $stack_index = count($stack);//останній індекс масиву
		
		    $stack[$stack_index] = array(	//запис данних
                'id' => $row['id'],
                'name' => $row['name'],
				'city' => $row['city'],
				'message' => $row['message']
            );
        }

        $myJSON = json_encode($stack);
        echo $myJSON;
    }
    // else {
    //     echo "0 results";
    // }
        
    mysqli_close($con);
?>
<?php
    include "../API/BDD/connexionLocal.php";

    if(!(empty($_POST['survey_name']) || empty($_POST['survey_description']) || empty($_POST['choice']))){
        $survey_name = $_POST['survey_name'];
        $survey_description = $_POST['survey_description'];
        foreach($_POST['choice'] as $value){
            echo $value;
        }
        $sql = "INSERT INTO `survey`(`id_survey`,`id_account`,`name`, `description`) VALUES (51,2561,'$survey_name','$survey_description')";
        $req = $dbh->prepare($sql);
        $req->execute();
    }
    else{
        header('Location: admin_survey_creation.php');
    }
?>
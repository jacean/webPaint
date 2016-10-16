<?php 

$img = $_POST["img"];
$id = $_POST["id"];
//$list=$_POST["list"];

$list="qqq";
$dir = "upload/";

$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$img = base64_decode($img);
if (!is_dir($dir)) {
    mkdir($dir, 0777, true);
}

$file_path = $dir."img_".$id.".png";
$f = fopen($file_path, "w");
fwrite($f, $img);
fclose($f);

$file_path=$dir."list_".$id.".txt";
$f=fopen($file_path,'w');
fwrite($f,$list);
fclose($f);

$r = array("status" => "ok", "result" => $file_path);

echo json_encode($r);
?>
<?php
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET');
	header('Access-Control-Allow-Credentials:true'); 
	header("Content-Type: application/json;charset=utf-8"); 
	 

	$user=array(
		array("tel"=>"18219111803","password"=>"1234",'name'=>"梦之蓝"),
		array("tel"=>"18219111801","password"=>"123a",'name'=>"张三"),
		array("tel"=>"18219111802","password"=>"1111","name"=>"李四")
		);

	if ($_SERVER["REQUEST_METHOD"] == "GET") {
		search();
	} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
		create();
	}
	 

	function search(){
		if (!isset($_GET["tel"]) || empty($_GET["tel"])) {
			echo '{"success":false,"msg":"信息不齐全"}';
			return;
		}
		global $user;

		$tel = $_GET["tel"];//获取用户传入的信息


		$result = '{"success":false,"msg":"用户名或密码错误"}';
		foreach ($user as $value) {
			 if ($value["tel"] == $tel) {
			 	$name=$value["name"];
			 	$result = '{"success":true,"msg":"成功","name"'.':"'.$name.'"}';
				break;
			 }
		}
		echo $result;
	}

	function create(){
		if (!isset($_POST["tel"]) || empty($_POST["tel"])
			|| !isset($_POST["password"]) || empty($_POST["password"])) {
			echo '{"success":false,"msg":"参数错误，信息填写不全"}';
			return;
		}
		/*echo $user;
		$arr=array("tel"=>$_POST["tel"],"password"=>$_POST["password"],"name"=>$_POST["tel"]);
		$user[$user.length]=$arr;
		echo $user;
*/
		echo '{"success":true,"msg":"注册成功！","tel"'.':"'.$_POST["tel"].'","password"'.':"'.$_POST["password"].'"}';

	}

?>

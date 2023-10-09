<?php 

include 'Instamojo/src/instamojo.php';
$api = new Instamojo\Instamojo('29b34070bf5867b7d36bf2586c4f4855', '40d161c14f252cc781066e0c685f5f4d','https://www.instamojo.com/api/1.1/');
try {
    $response = $api->createPaymentRequest(array(
        "purpose" => $purpose,
        "amount" => $amount,
        "buyer_name" => $name,
        "phone" => $phone,
		"email" => $email,
        "send_email" => true,
        "send_sms" => true,
        'allow_repeated_payments' => false,
        "redirect_url" => "http://localhost/success.php",
        // "webhook" => "https://studentstutorial.com/instamojo/webhook.php"
        ));
   $pay_ulr = $response['longurl'];
    header("Location: $pay_ulr");
    exit();
}
catch (Exception $e) {
    print('Error: ' . $e->getMessage());
}     
 ?>
<?php

$api = stripslashes($_GET['api']);

if (empty($api)) {
    jsonFail();
} else {
    if (function_exists($api)) {
        $api();
    } else {
        jsonFail();
    }
}
function set_wrich_recruit () {
    $api = $GLOBALS['api'];

    $service_url = "https://ihpark.smartscore.kr/wrich/recruit.html?wpi={$api}";
    $curl = curl_init($service_url);

    $user_name = stripslashes($_POST['user_name']);
    $user_phone = stripslashes($_POST['user_phone']);
    $user_email = stripslashes($_POST['user_email']);
    $msg = stripslashes($_POST['msg']);

    if(empty($user_name) || empty($user_phone) || empty($user_email) || empty($msg)) return jsonFail('잘못된 호출입니다.');

    $curl_post_data = array(
        'user_name' => $user_name,
        'user_phone' => $user_phone,
        'user_email' => $user_email,
        'msg' => $msg,
    );
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $curl_post_data);
    $curl_response = curl_exec($curl);

    if ($curl_response === false) {
        $info = curl_getinfo($curl);
        curl_close($curl);
        return jsonFail();
    }
    curl_close($curl);
    $decoded = json_decode($curl_response);
    if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
        return jsonFail();
    }
    if ($curl_response) {
        echo $curl_response;
    } else {
        jsonFail();
    }
}

function jsonFail($msg = null) {
    $ret = array(
        'data' => [ 'msg' => $msg ? $msg : '통신에 실패하였습니다. 관리자에게 문의해주세요.', 'success' => "fail"],
        'result' => true,
        'info' => []
    );
    echo json_encode($ret);
}
?>

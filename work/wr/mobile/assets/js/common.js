// 입사진원
function recruit_submit () {
    const user_name = $('#user_name');
    const user_phone = $('#user_phone');
    const user_email1 = $('#user_email1');
    const user_email2 = $('#user_email2');
    const user_email = user_email1.val() + '@' + user_email2.val();
    const msg = $('#msg');
    const agree = $('#agree');
    const phoneRule = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;
    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;//이메일 정규식

    if (!user_name.val()) {
        on_error_msg_class(user_name, 1);
        return user_name.parent().next('p.error-message').html('이름을 입력해주세요').show();
    }
    if (!user_phone.val()) {
        on_error_msg_class(user_phone, 1);
        return user_phone.parent().next('p.error-message').html('연락처를 입력해주세요').show();
    }
    if (!phoneRule.test(user_phone.val())) {
        on_error_msg_class(user_phone, 1);
        return user_phone.parent().next('p.error-message').html('전화번호 형식에 맞지 않습니다.').show();
    }
    if (!user_email1.val() || !user_email2.val()) {
        return user_email2.parent().parent().next('p.error-message').html('이메일을 입력해주세요.').show();
    }
    if (!emailRule.test(user_email)) {
        return user_email2.parent().parent().next('p.error-message').html('이메일 형식에 맞지 않습니다.').show();
    }


    if (!msg.val()) {
        return msg.next('p.error-message').html('경력사항을 입력해주세요.').show();
    }

    if (!agree.is(':checked')) {
        return agree.parent().parent().next('p.error-message').html('개인정보수집 이용 및 동의를 선택해주세요.').show();
    }

    const host = "/backend/?api=set_wrich_recruit";
    const params = {
        'user_name': user_name.val(),
        'user_phone': user_phone.val(),
        'user_email': user_email,
        'msg' : msg.val()
    };
    $.ajax({
        type: 'POST',
        url: host,
        dataType: 'json',
        data: params,
        error: function(xhr, status, err) {
            console.log('err', xhr.status, err);
        }
    }).done(function(res) {
        if (res.data.success == 'ok') {
            user_name.val('');
            user_phone.val('');
            user_email1.val('');
            user_email2.val('');
            msg.val('');
            agree.prop("checked", false);
        }
        alert(res.data.msg);
    });
}

function select_list_show () {
    $('#user_email2_select_list').toggle();
    $('.arrow_img').toggleClass('tf-rt-180');
}

function on_error_msg_class (obj, dep = 0) {
    let tmp = obj;
    switch (parseInt(dep)) {
        case 1:
            tmp = obj.parent();
            break;
        case 2:
            tmp = obj.parent().parent();
            break;
    }
    tmp.removeClass('unfilled').addClass('error');
}

function select_list (e) {
    const selectEmail = e.innerHTML;
    if (selectEmail == '직접입력') {
        $('#user_email2').val('');
        $('#user_email2').attr('readonly', false);
        $('#user_email2').focus();
    } else {
        // console.log('eeee:::', e.innerHTML);
        $('#user_email2').attr('readonly', true);
        $('#user_email2').val(e.innerHTML);
    }
    $('#user_email2_select_list').hide();
    $('#user_email2_select_list').parent().parent().next('p.error-message').hide();
    $('.arrow_img').removeClass('tf-rt-180');
}

function textInput(e, m = 0) {
    if (m == 0) {
        $(e).parent().removeClass('error').addClass('unfilled');
    } else {
        $(e).removeClass('error').addClass('unfilled');
    }
    $(e).parent().next('p.error-message').hide();
    $(e).next('p.error-message').hide();
}


// 카카오맵 js로딩 및 init
function loadKakaoMap() {
    const host = location.host.split('.')[0];
    let mode = 'dev';
    console.log('host:::', host);
    const MAPKEY = {
        'real'  : '',
        'dev'   : 'ba8a94bec3c5486550f7d8b1a68ce5d6'
    };
    switch (host) {
        case 'www':
            mode = 'real';
            break;
    }
    const script = document.createElement('script');
    /* global kakao */
    script.onload = () => setKakaoMap();
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${MAPKEY[mode]}&autoload=false`;
    document.head.appendChild(script);
}

// 카카오맵 실행
function setKakaoMap () {
    kakao.maps.load(function() {
        const latlng = [37.507684914589525, 127.06196004000486];
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(latlng[0], latlng[1]), // 지도의 중심좌표
                level: 4 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        var imageSrc = 'http://image.withrich.co.kr/wrich/about/mappin.png', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(170, 61), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(70, 65) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(latlng[0], latlng[1]); // 마커가 표시될 위치입니다
        // 37.507684914589525, 127.06196004000486
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    });
}






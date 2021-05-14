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

    if (!user_name.val()) return user_name.parent().next('p.error-message').html('이름을 입력해주세요').show();
    if (!user_phone.val()) return user_phone.parent().next('p.error-message').html('연락처를 입력해주세요').show();
    if (!phoneRule.test(user_phone.val())) return user_phone.parent().next('p.error-message').html('전화번호 형식에 맞지 않습니다.').show();
    if (!user_email1.val() || !user_email2.val()) return user_email2.parent().parent().next('p.error-message').html('이메일을 입력해주세요.').show();
    if (!emailRule.test(user_email)) return user_email2.parent().parent().next('p.error-message').html('이메일 형식에 맞지 않습니다.').show();


    if (!msg.val()) return msg.parent().next('p.error-message').html('경력사항을 입력해주세요.').show();

    if (!agree.is(':checked')) return agree.parent().parent().next('p.error-message').html('개인정보수집 이용 및 동의를 선택해주세요.').show();

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

function select_list (e) {
    const selectEmail = e.innerHTML;
    if (selectEmail == '직접입력') {
        $('#user_email2').val('');
        $('#user_email2').attr('readonly', false);
        $('#user_email2').focus();
    } else {
        console.log('eeee:::', e.innerHTML);
        $('#user_email2').attr('readonly', true);
        $('#user_email2').val(e.innerHTML);
    }
    $('#user_email2_select_list').hide();
    $('#user_email2_select_list').parent().parent().next('p.error-message').hide();
    $('.arrow_img').removeClass('tf-rt-180');
}

function textInput(e) {
    $(e).parent().next('p.error-message').hide();
}






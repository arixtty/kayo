var ya_number = 16633729;
var ya_chat_message_write_sended = false;

$(document).on('click', '#rh-badge', function(e) {
    ym(ya_number, 'reachGoal', 'RedHelper.Chat_opened');
});

$(document).on('keypress', '#chatTextarea', function (e) {
    if (!ya_chat_message_write_sended) {
        ym(ya_number, 'reachGoal', 'RedHelper.Chat_started');
        ya_chat_message_write_sended = true;
    }
});

$(document).on('click', '#rc-phone-button', function (e) {
        ym(ya_number, 'reachGoal', 'RedConnect.callOrdered');
});

$(document).on('click', '.feedback_form input[type="submit"]', function (e) {
    ym(ya_number, 'reachGoal', 'SEND_ORDER');
});

$(document).on('click', '#chatSend', function (e) {
    ym(ya_number, 'reachGoal', 'RedHelper.Message_sent');
});

$(document).on('DOMNodeInserted', function(e) {
    if ( $(e.target).hasClass('fromOperator') ) {
        ym(ya_number, 'reachGoal', 'RedHelper.Message_received');
    }
});

//$(document).on('click', '#btn_send_request', function (e) {
//    ym(ya_number, 'reachGoal', 'send_1');
//});

$(document).on('click', '#form_iblck_6 input[type="submit"]', function (e) {
    ym(ya_number, 'reachGoal', 'send_2');
});

//$(document).on('click', '#btn_get_price', function (e) {
//    ym(ya_number, 'reachGoal', 'push_prise_open');
//});

$(document).on('click', '#form_iblck_7 input[type="submit"]', function (e) {
    ym(ya_number, 'reachGoal', 'push_prise_send');
});

$(document).on('click', '#rh-choiceYes', function (e) {
    ym(ya_number, 'reachGoal', 'RedHelper.Invitation_accepted');
});
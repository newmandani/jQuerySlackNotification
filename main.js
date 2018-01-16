/*
 * notificationObj argument is a so called cotainer Object
 * for the variety of properties you will need in the real 
 * implemenation needs to define the variety of logic
 *
 * Initial it needs notificationObj.text property to work
 * var notificationObj = {};
 * notificationObj.text = 'Text to publish to the channel'
 *
 */
function slackNotify(notificationObj){
    /*
     * YoursAppWebhookURL is the string looks like this one:
     * https://hooks.slack.com/services/ABCDEFG/HIJKLMOP/QRStUvWXyZ0123456
     */
    var url = 'YoursAppWebhookURL';

    if( notificationObj.hasOwnProperty('text') ){

        $.ajax({
            url         : url,
            data        : 'payload=' + JSON.stringify({ 'text': notificationObj.text }),
            dataType    : 'json',
            processData : false,
            type        : 'POST',
        });
    }
}

slackNotify({text: 'test'});

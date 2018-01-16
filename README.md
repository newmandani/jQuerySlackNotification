# jQuery Slack Notification
non-secure jQuery Slack Notification

> The almost initial github project to share fun functionality I've found to be usefull.
> For particular this one is notification undescribed dictionarie values and 
> fastest way to get remote console.log bugs back

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/newmandani/editor.md.svg) ![](https://img.shields.io/github/tag/newmandani/editor.md.svg) ![](https://img.shields.io/github/release/newmandani/editor.md.svg) ![](https://img.shields.io/github/issues/newmandani/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

[TOCM]

### Slack App builder
You'we got to create you [own Slack App](https://api.slack.com/apps?new_app=1) first.
It's very easy and fast. All you need to create first App is to define
- App Name - any non-used on Slack App name for the current Slack Workspace (your scope) 
- Development Slack Workspace

- Activate Incoming Webhooks to the "On" state (Webhook URLs for Your Workspace will be shown)
- Add New Webhook to Workspace
- Select chanel to post

> There is some additional setting on App you can check and set by you own
> but this is minimal required setting to get your Webhook URL and start testing.

### Code View
```javascript
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
```


### Test it
The [main.js](https://raw.githubusercontent.com/newmandani/jQuerySlackNotification/master/main.js) contains `slackNotify` function definition and `slackNotify({text: 'test'})` implemenation to get first message to the App defined chanel.
```javascript
slackNotify({text: 'test'});
```

### Dependency
— <a href="https://cdnjs.com/libraries/jquery/1.12.4" target="_blank"><img src="https://raw.githubusercontent.com/newmandani/jQuerySlackNotification/master/misc/jquery_ico.gif" width="80px" valign="middle" style="vertical-align: middle;"></a>
— <a href="https://slack.com" target="_blank"><img src="https://raw.githubusercontent.com/newmandani/jQuerySlackNotification/master/misc/slack_ico.png" width="100px" valign="middle" style="vertical-align: middle;"></a>

### Warnings
jQuery is client side library. All code you will write will be exposed to your users.
Slack App Webhook ULR and can be spamed by users who will find it fun.
It's limited and test implemention only for fun or yours special needs only.

## Authors
* **[Daniel Newman](https://github.com/newmandani/)** - *Initial repo*

## Special Thanks
- [@joemccann](https://twitter.com/joemccann) for the [DILINGER](https://dillinger.io/) markup editor.
- Kirill

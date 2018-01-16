# jQuery Slack Notification
non-secure jQuery Slack Notification

> The almost initial github project to share fun functionality I've found to be usefull.
> For particular this one is notification undescribed dictionarie values and 
> fastest way to get remote console.log bugs back

# Slack App builder
You'we got to create you [own Slack App](https://api.slack.com/apps?new_app=1) first.
It's very easy and fast. All you need to create first App is to define
- App Name - any non-used on Slack App name for the current Slack Workspace (your scope) 
- Development Slack Workspace

- Activate Incoming Webhooks to the "On" state (Webhook URLs for Your Workspace will be shown)
- Add New Webhook to Workspace
- Select chanel to post

> There is some additional setting on App you can check and set by you own
> but this is minimal required setting to get your Webhook URL and start testing.

# Test it
The [main.js](https://raw.githubusercontent.com/newmandani/jQuerySlackNotification/master/main.js) contains `slackNotify` function definition and `slackNotify({text: 'test'})` implemenation to get first message to the App defined chanel.

## Dependency
* <img src="https://raw.githubusercontent.com/newmandani/jQuerySlackNotification/master/misc/jquery_ico.gif" width="80px" style="vertical-align: middle;"> [jQuery](https://cdnjs.com/libraries/jquery/1.12.4) Needed
* <img src="https://raw.githubusercontent.com/newmandani/jQuerySlackNotification/master/misc/slack_ico.png" width="100px" style="vertical-align: middle;"> [Slack](https://slack.com) Needed

## Warning
jQuery is client side library. All code you will write will be exposed to your users.
Slack App Webhook ULR and can be spamed by users who will find it fun.
It's limited and test implemention only for fun or yours special needs only.

## Authors
* **[Daniel Newman](https://github.com/newmandani/)** - *Initial repo*

## Special Thanks
- [@joemccann](https://twitter.com/joemccann) for the [DILINGER](https://dillinger.io/) markup editor.
- Kirill

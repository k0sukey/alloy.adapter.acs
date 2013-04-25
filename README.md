ACS processing mock app on Alloy model.
===
Using [ci.alloy.adapter.two](https://github.com/aaronksaunders/ci.alloy.adapter.two) sync adapter.


| api/model | method | controller | view | style |
|-----:|:-----|:-----|:-----|:-----|:-----|
| **ACLs** | add | - | - | - |
| | check | - | - | - |
| | create | - | - | - |
| | delete | - | - | - |
| | remove | - | - | - |
| | show | - | - | - |
| | update | - | - | - |
| **Chats** | get_chat_groups | - | - | - |
| | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | query_chat_groups | - | - | - |
| **Checkins** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | show | - | - | - |
| **Clients** | geolocate | - | - | - |
| **CustomObjects** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | show | - | - | - |
| | update | - | - | - |
| **Emails** | email_from_template | - | - | - |
| **Events** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | query/occurrences | - | - | - |
| | search | - | - | - |
| | search/occurrences | - | - | - |
| | show | - | - | - |
| | show/occurrences | - | - | - |
| | update | - | - | - |
| **Files** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | show | - | - | - |
| | update | - | - | - |
| **Friends** | add | - | - | - |
| | approve | - | - | - |
| | remove | - | - | - |
| | requests | - | - | - |
| | search | - | - | - |
| **KeyValues** | append | - | - | - |
| | delete | - | - | - |
| | get | - | - | - |
| | incrby | - | - | - |
| | set | - | - | - |
| **Likes** | create | - | - | - |
| | delete | - | - | - |
| **Messages** | create | - | - | - |
| | delete | - | - | - |
| | delete/thread | - | - | - |
| | reply | - | - | - |
| | show/inbox | - | - | - |
| | show/sent | - | - | - |
| | show/thread | - | - | - |
| | show/threads | - | - | - |
| **PhotoCollectionss** | create | - | - | - |
| | delete | - | - | - |
| | show/photos | - | - | - |
| | search | - | - | - |
| | show | - | - | - |
| | show/subcollections | - | - | - |
| | update | - | - | - |
| **Photos** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | search | - | - | - |
| | show | - | - | - |
| | update | - | - | - |
| **Places** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | search | - | - | - |
| | show | - | - | - |
| | update | - | - | - |
| **Posts** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | show | - | - | - |
| | update | - | - | - |
| **PushNotifications** | notify | - | - | - |
| | query | - | - | - |
| | subscribe | - | - | - |
| | unsubscribe | - | - | - |
| **Reviews** | create | - | - | - |
| | delete | - | - | - |
| | query | - | - | - |
| | show | - | - | - |
| | update | - | - | - |
| **SocialIntegrations** | facebook/search_friends | - | - | - |
| | external_account_link | - | - | - |
| | external_account_login | - | - | - |
| | external_account_unlink | - | - | - |
| **Statuses** | create | - | - | - |
| | query | - | - | - |
| | show | - | - | - |
| **[Users](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/models/users.js)** | create | [create.js](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/controllers/users/create.js) | [create.xml](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/views/users/create.xml) | [create.tss](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/styles/users/create.tss) |
| | delete | [delete.js](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/controllers/users/delete.js) | [delete.xml](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/views/users/delete.xml) | [delete.tss](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/styles/users/delete.tss) |
| | login | [login.js](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/controllers/users/login.js) | [login.xml](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/views/users/login.xml) | [login.tss](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/styles/users/login.tss) |
| | logout | [logout.js](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/controllers/users/logout.js) | [logout.xml](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/views/users/logout.xml) | [logout.tss](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/styles/users/logout.tss) |
| | query | - | - | - |
| | resend_confirmation | ti.cloud not yet support | - | - |
| | request_reset_password | - | - | - |
| | search | - | - | - |
| | show | - | - | - |
| | show/me | [me.js](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/controllers/users/me.js) | [me.xml](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/views/users/me.xml) | [me.tss](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/styles/users/me.tss) |
| | update | [update.js](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/controllers/users/update.js) | [update.xml](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/views/users/update.xml) | [update.tss](https://github.com/k0sukey/alloy.adapter.acs/blob/master/app/styles/users/update.tss) |

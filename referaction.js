
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v6.0&appId=811987785971081&autoLogAppEvents=1"></script>
<script>
window.fbAsyncInit = function() {
    FB.init({
        xfbml: true,
        version: 'v6.0'});
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            var e = document.getElementById("logintofb");
            e.parentNode.removeChild(e);}});
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/he_IL/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    if (response.status === 'connected') {
        FB.Event.subscribe('send_to_messenger',
            function (e) {console.log(e);});
    }
}
</script>
<div style="alignment: center; font-size: medium ; horiz-align: center;text-align: right">
<div id="refDiv" class="fb-send-to-messenger" messenger_app_id="`+env.APP_ID+`" page_id="`+this.facebookPageId+`"
data-ref="1:` + this.partnerId + ':' + this.contextId + `" color="blue" size="xlarge" cta_text="LET_US_CHAT"></div>
</div>
<div id="logintofb" class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
</div>
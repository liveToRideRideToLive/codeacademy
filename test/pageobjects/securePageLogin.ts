import Page from './signupPage';


class SecurePageLogin extends Page {

    public get alertMsg() {
        return $("div.gamut-jniw0z-FlexBox.e1tc6bzh0 > h2");
    }
}

export default new SecurePageLogin();

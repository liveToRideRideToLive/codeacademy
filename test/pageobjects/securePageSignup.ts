import Page from './signupPage';


class SecurePage extends Page {

    public get alertMsg() {
        return $("span[role='alert'] > span");
    }
}

export default new SecurePage();

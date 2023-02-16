import Page from './signupPage';

class LoginPage extends Page {

    get username() {
        return $('#email');
    }

    get password() {
        return $('#password');

    }

    public get btnSubmit() {
        return $(".e1tc6bzh0.gamut-1502wq6-FlexBox > form[method='post'] button[role='button']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {

        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.btnSubmit.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('login');
    }
}

export default new LoginPage();

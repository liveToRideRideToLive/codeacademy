import Page from './pageLogin';

class LoginPage extends Page {

    get waitFunction() {
        return $("=Set Goals")
    };
    //  method finds and input valid Email adress
    get emailInput() {
        return $('#user_login');

    }
    //  method finds and input valid users spassword
    get passwordInput() {
        return $('#login__user_password');
    }
    // method finds login button and clikc on it
    public get btnSubmit() {
        return $(".e1tc6bzh0.gamut-24el5s-FlexBox > form[method='post'] button[role='button']");
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {

        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.btnSubmit.click();
        await this.waitFunction.waitForExist({ timeout: 20000 })
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('login');
    }
}

export default new LoginPage();

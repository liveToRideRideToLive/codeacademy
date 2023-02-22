import Page from "./pageLogin";

class SecurePageLogout extends Page {
   
    public get alertMsgLogout () {
        return $("[data-testid='error-text']");
    }
}

export default new SecurePageLogout();

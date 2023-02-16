import Page from "./pageLogin";

class SecurePageLogout extends Page {
   
    public get alertMsgLogout () {
        return $(' .e8i0p5k0.errorText__3FGxxtgvq_ER-uskn2lqzd.gamut-1lo0dc4-Text');
    }
}

export default new SecurePageLogout();

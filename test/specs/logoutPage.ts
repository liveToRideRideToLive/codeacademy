import LogoutPage from '../pageobjects/LogoutPage';
import secureLogoutPage from '../pageobjects/secureLogoutPage';

describe('My Logout application', () => {
    it('should logout and get message', async () => {
        //it opens login page

        await LogoutPage.open();

        await LogoutPage.login('mrk.dragicevic@gmail.com', 'Support81.,');

        await expect(secureLogoutPage.alertMsgLogout).toHaveTextContaining('Signed out successfully.');

    });
});
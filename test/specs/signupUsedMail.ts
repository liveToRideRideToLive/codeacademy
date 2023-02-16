import LoginPage from '../pageobjects/pageSignup';
import SecurePage from '../pageobjects/securePageSignup';

describe('My Login application', () => {
    it('should show alert message that email already exist', async () => {

        await LoginPage.open();

        await LoginPage.login('mrk.dragicevic@gmail.com', 'Zagreb');

        await expect(SecurePage.alertMsg).toHaveTextContaining('An account with this email already exists.');
    });
});



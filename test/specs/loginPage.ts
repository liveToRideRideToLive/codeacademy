import LoginPage from '../pageobjects/loginPage';
import securePageLogin from '../pageobjects/securePageLogin';

describe('My Login application', () => {
    it('should login with valid credentials and get allert message', async () => {
        //it opens login page

        await LoginPage.open();

        //it input valid credentials for login

        await LoginPage.login('mrk.dragicevic@gmail.com', 'Support81.,');

        //it finds allert message and shows that login page work well
        await expect(securePageLogin.alertMsg).toHaveTextContaining('My Courses');
    });
});

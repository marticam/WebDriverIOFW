var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {
	
	it('Should be able to submit a successful submission via contact us form', function (done) {
		// ContactUs_Page.setFirstName('joe');
		// ContactUs_Page.setLastName('Blogs');
		// ContactUs_Page.setEmailAddress('contactDetail@m.com');
		// ContactUs_Page.setComments('contactDetail.body');
		// ContactUs_Page.clickSubmitButton();
		// ContactUs_Page.confirmSuccessfulSubmission();

		ContactUs_Page.submitAllInformationViaContactUsForm('joe','Blogs', 'contactDetail@m.com','contactDetail.body');
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setFirstName('Mike');
		ContactUs_Page.setLastName('Woods');
		ContactUs_Page.setEmailAddress('mike_woods@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();

		// ContactUs_Page.submitAllInformationViaContactUsForm('Mike','Woods', 'mike_woods@mail.com',null);
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setFirstName('Sarah');
		ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();

		// ContactUs_Page.submitAllInformationViaContactUsForm('Sarah', null,'sarah_woods@mail.com', null);
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setLastName('Jomes');
		ContactUs_Page.setEmailAddress('sarah_Jomes@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
		// ContactUs_Page.submitAllInformationViaContactUsForm(null, 'Jomes','sarah_Jomes@mail.com', null);
	});
});
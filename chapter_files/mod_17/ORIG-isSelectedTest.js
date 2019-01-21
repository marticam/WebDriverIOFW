beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
})

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item Java is selected therefore should return true', function(done) {
    option[value='java']
  });
  
  it('Dropdown item maven is not selected therefore should return false', function(done) {
    option[value='maven']
  });
  
  it('Option2 is not selected therefore should return false', function(done) {
    input[value='option-2']
  });
  
  it('Option3 is selected therefore should return true', function(done) {
    input[value='option-3']
  });
  
  it('Radio button pumpkin is selected therefore should be true', function(done) {
    input[value='pumpkin']
  });
});
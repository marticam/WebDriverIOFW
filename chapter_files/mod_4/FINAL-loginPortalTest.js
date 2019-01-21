browser
    .setViewPortSize({
    	width: 1200,
    	height: 800
    })
    .url('http://www.webdriveruniversity.com/')
    .click('#login-portal')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
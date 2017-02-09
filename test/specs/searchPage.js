// example of a test group
// note: all tests under the test directory are ran

describe('Search Page', ()=> {

    it('should have the right title - the fancy generator way', ()=> {
        browser
          .url('http://192.168.99.100/#!/search')
          .getTitle().should.be.equal('Ellipsis')
    });
    
    // it('should have the right title - the fancy generator way', ()=> {
    //     browser.url('http://192.168.99.100/#!/search')
    //       .setValue('#orb-search-q', ['surfing'], function(){}) // find the element and enter the query
    //       .submitForm('#orb-search-form') // submit the form
    //       .title(function(err, res) {
    //           console.log('Title was: ' + res.value); // Confirm the page title
    //       })
    // });
});

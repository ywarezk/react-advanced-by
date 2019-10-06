import StamService from './stam.service';


describe('StamService', function() {
    let stamService;

    // create instance of the service
    beforeEach(function() { 
        stamService = new StamService();
    });

    it('check the sayHello', function() {
        expect(stamService.sayHello()).to.equal('hello world');
    });

    it('check the lenght', function() {
        expect(stamService.lengthOfMessage('yariv')).to.equal(5);
    });
});
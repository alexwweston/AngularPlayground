describe('common', function() {
  beforeEach(module('common'));

  describe('px filter', function() {
    var pxFilter;

    beforeEach(inject(function(_pxFilter_) {
      pxFilter = _pxFilter_;
    }));

    it('should add px to a number', function() {
      expect(pxFilter(2)).to.equal('2px');
      expect(pxFilter(3.1)).to.equal('3.1px');
    });

    it('should handle falsey values', function() {
      expect(pxFilter(0)).to.equal('0px');
      expect(pxFilter()).to.equal('0px');
    });
  });
});
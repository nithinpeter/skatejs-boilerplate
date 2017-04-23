let fixtureElement;

function clearContents(el, done) {
    el.innerHTML = '';
    done();
}

beforeEach(function (done) {
    fixtureElement = document.getElementById('test-fixture');
    if (!fixtureElement) {
        fixtureElement = document.createElement('div');
        fixtureElement.id = 'test-fixture';
        document.body.appendChild(fixtureElement);
    }
    clearContents(fixtureElement, done);
});

afterEach(function (done) {
    clearContents(fixtureElement, done);
});

import '../../src/components/button';

describe("Button tests", function() {
  var a;

  it("renders button", function() {
    const label = 'click me';
    const btn: any = document.createElement('s-button');
    btn.label = label;
    document.body.appendChild(btn);

    expect((document.querySelector('s-button') as any).label).toBe(label);
  });
});
import { Button } from '../../src/components/button';
import { render, findOne } from '../utils/helpers';

describe("Button tests", function () {

  it("renders button", function () {
    const label = 'click me';
    const btn: any = render(Button);
    btn.label = label;

    expect((findOne('s-button') as any).label).toBe(label);
  });

});
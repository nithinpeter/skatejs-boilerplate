import 'skatejs-web-components';
import { Component, h, prop, props } from 'skatejs';

interface ButtonProps {
  label: string;
}

export class Button extends Component<ButtonProps> {
  static get is() { return 's-button' }

  static get props() {
    return {
      label: prop.string({ attribute: true }),
    }
  }

  label: string;

  renderCallback() {
    return <button>{this.label}</button>
  }
}

customElements.define(Button.is, Button);
console.log('hi')
import { Banner } from './banner';

export class SessionPage extends Banner {
  slot(num: number) {
    const slot = this.page
      .getByRole('button', { name: `slot ${num.toFixed()}` })
      .nth(num - 1);
    const fn = function () {
      return slot;
    };
    fn.click = () => slot.click();
    return fn;
  }
}

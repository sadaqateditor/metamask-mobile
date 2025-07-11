import { AddNewAccountIds } from '../../../../selectors/MultiSRP/AddHdAccount.selectors';
import Matchers from '../../../../utils/Matchers';
import Gestures from '../../../../utils/Gestures';
import { IndexableNativeElement } from 'detox/detox';

class AddNewHdAccountComponent {
  get container() {
    return Matchers.getElementByID(AddNewAccountIds.CONTAINER);
  }

  get srpSelector() {
    return Matchers.getElementByID(AddNewAccountIds.SRP_SELECTOR);
  }

  get cancelButton() {
    return Matchers.getElementByID(AddNewAccountIds.CANCEL);
  }

  get confirmButton() {
    return Matchers.getElementByID(AddNewAccountIds.CONFIRM);
  }

  get nameInput() {
    return Matchers.getElementByID(AddNewAccountIds.NAME_INPUT);
  }

  async tapSrpSelector() {
    await Gestures.waitAndTap(this.srpSelector);
  }

  async tapCancel() {
    await Gestures.waitAndTap(this.cancelButton);
  }

  async tapConfirm() {
    await Gestures.waitAndTap(this.confirmButton);
  }

  async enterName(accountName: string) {
    await Gestures.clearField(
      this.nameInput as Promise<IndexableNativeElement>,
    );
    await Gestures.typeTextAndHideKeyboard(
      this.nameInput as Promise<IndexableNativeElement>,
      accountName,
    );
  }
}

export default new AddNewHdAccountComponent();

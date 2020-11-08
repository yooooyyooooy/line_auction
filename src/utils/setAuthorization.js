import liff from "@line/liff";
import * as informationUserAction from "../actions/InformationUser.action";
import store from "../reduxStore";

async function FetchLiff() {
  await liff.init({ liffId: "1655212261-6MZkRkz3" });
  liff.ready.then(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((profile) => {
        store.dispatch(
          informationUserAction.setInformationToSuccess({
            userId: profile.userId,
            displayName: profile.displayName,
            pictureUrl: profile.pictureUrl,
          })
        );
      });
    } else {
      liff.login();
    }
  });
}

export default FetchLiff;

import liff from "@line/liff";
import * as informationUserAction from "../actions/InformationUser.action";
import store from "../reduxStore";

async function FetchLiff() {
  await liff.init({ liffId: "1655202326-WwoNeaxV" }).catch((err) => {
    throw err;
  });
  if (liff.isLoggedIn()) {
    let getProfile = await liff.getProfile();
    // console.log(getProfile.userId);
    // console.log(getProfile.displayName);
    // console.log(getProfile.pictureUrl);
    store.dispatch(
      informationUserAction.setInformationToSuccess({
        userId: getProfile.userId,
        displayName: getProfile.displayName,
        pictureUrl: getProfile.pictureUrl,
      })
    );
  } else {
    liff.login();
  }
}

export default FetchLiff;

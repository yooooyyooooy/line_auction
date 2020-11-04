import liff from "@line/liff";
import * as informationUserAction from "../actions/InformationUser.action";
import store from "../reduxStore";

// import axios from "axios";

async function FetchLiff() {
  await liff.init({ liffId: "1655206384-XQoOgdqp" }).catch((err) => {
    throw err;
  });
  if (liff.isLoggedIn()) {
    let getProfile = await liff.getProfile();
    console.log(getProfile.userId);
    console.log(getProfile.displayName);
    console.log(getProfile.pictureUrl);
    store.dispatch(
      informationUserAction.setInformationToSuccess({
        userId: getProfile.userId,
        displayName: getProfile.displayName,
        pictureUrl: getProfile.pictureUrl,
      })
    );
    // try {
    //   const result = await axios.post(
    //     "https://asia-east2-line-auction-backend.cloudfunctions.net/bot",
    //     {
    //       id: getProfile.userId,
    //       name: getProfile.displayName,
    //       pictureUrl: getProfile.pictureUrl,
    //     }
    //   );
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }
  } else {
    liff.login();
  }
}

export default FetchLiff;

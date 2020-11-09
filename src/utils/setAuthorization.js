import liff from "@line/liff";
import * as informationUserAction from "../actions/InformationUser.action";
import store from "../reduxStore";
import { firestore } from "../utils/setFirebase";

async function FetchLiff() {
  let unmounted = false;
  await liff.init({ liffId: "1655206384-XQoOgdqp" });
  liff.ready.then(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile().then((profile) => {
        if (!unmounted) {
          store.dispatch(
            informationUserAction.setInformationToSuccess({
              userId: profile.userId,
              displayName: profile.displayName,
              pictureUrl: profile.pictureUrl,
            })
          );
        }
        firestore
          .collection("users")
          .doc(profile.userId)
          .onSnapshot(function (doc) {
            if (!unmounted) {
              store.dispatch(
                informationUserAction.setCredit({
                  credit: doc.data().credits,
                })
              );
            }
          });
      });
    } else {
      liff.login();
    }
  });
}

export default FetchLiff;

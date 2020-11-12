import liff from "@line/liff";
import * as informationUserAction from "../actions/InformationUser.action";
import store from "../reduxStore";
import { firestore } from "../utils/setFirebase";
import axios from "axios";

function getParameterByName(name, url = window.location.href) {
  //eslint-disable-next-line
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

async function FetchLiff() {
  let unmounted = false;
  await liff.init({ liffId: "1655206384-eMaQ6pn4" });
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
        axios
          .post(
            "https://asia-east2-line-auction-backend.cloudfunctions.net/user",
            {
              id: profile.userId,
              name: profile.displayName,
              profile: profile.pictureUrl,
              // U4926644b51833230d9fe6299bb8ede28
            }
          )
          .then(() => {
            firestore
              .collection("users")
              .doc(profile.userId)
              .onSnapshot(function (doc) {
                if (!unmounted) {
                  if (doc.data()) {
                    store.dispatch(
                      informationUserAction.setCredit({
                        credit: doc.data().credits,
                      })
                    );
                  }
                }
              });
          });
      });
    } else {
      if (getParameterByName("item")) {
        const temp = "/items/" + getParameterByName("item");
        liff.login({ redirectUri: temp });
      } else {
        liff.login();
      }
    }
  });
}

export default FetchLiff;

import react from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default resetData = async () => {
  await AsyncStorage.removeItem("@passed_propositions");

  await AsyncStorage.removeItem("@likeListCandidate_1");
  await AsyncStorage.removeItem("@dislikeListCandidate_1");
  await AsyncStorage.removeItem("@likeListCandidate_2");
  await AsyncStorage.removeItem("@dislikeListCandidate_2");
  await AsyncStorage.removeItem("@likeListCandidate_3");
  await AsyncStorage.removeItem("@dislikeListCandidate_3");
  await AsyncStorage.removeItem("@likeListCandidate_4");
  await AsyncStorage.removeItem("@dislikeListCandidate_4");
  await AsyncStorage.removeItem("@likeListCandidate_5");
  await AsyncStorage.removeItem("@dislikeListCandidate_5");
  await AsyncStorage.removeItem("@likeListCandidate_6");
  await AsyncStorage.removeItem("@dislikeListCandidate_6");
  await AsyncStorage.removeItem("@likeListCandidate_7");
  await AsyncStorage.removeItem("@dislikeListCandidate_7");
  await AsyncStorage.removeItem("@likeListCandidate_8");
  await AsyncStorage.removeItem("@dislikeListCandidate_8");
  await AsyncStorage.removeItem("@likeListCandidate_9");
  await AsyncStorage.removeItem("@dislikeListCandidate_9");
  await AsyncStorage.removeItem("@likeListCandidate_10");
  await AsyncStorage.removeItem("@dislikeListCandidate_10");
  await AsyncStorage.removeItem("@likeListCandidate_11");
  await AsyncStorage.removeItem("@dislikeListCandidate_11");
  await AsyncStorage.removeItem("@likeListCandidate_12");
  await AsyncStorage.removeItem("@dislikeListCandidate_12");
  await AsyncStorage.removeItem("@likeListCandidate_13");
  await AsyncStorage.removeItem("@dislikeListCandidate_13");
  await AsyncStorage.removeItem("@likeListCandidate_14");
  await AsyncStorage.removeItem("@dislikeListCandidate_14");
  await AsyncStorage.removeItem("@likeListCandidate_15");
  await AsyncStorage.removeItem("@dislikeListCandidate_15");

  await AsyncStorage.removeItem("@score_candidat_1");
  await AsyncStorage.removeItem("@score_candidat_2");
  await AsyncStorage.removeItem("@score_candidat_3");
  await AsyncStorage.removeItem("@score_candidat_4");
  await AsyncStorage.removeItem("@score_candidat_5");
  await AsyncStorage.removeItem("@score_candidat_6");
  await AsyncStorage.removeItem("@score_candidat_7");
  await AsyncStorage.removeItem("@score_candidat_8");
  await AsyncStorage.removeItem("@score_candidat_9");
  await AsyncStorage.removeItem("@score_candidat_10");
  await AsyncStorage.removeItem("@score_candidat_11");
  await AsyncStorage.removeItem("@score_candidat_12");
  await AsyncStorage.removeItem("@score_candidat_13");
  await AsyncStorage.removeItem("@score_candidat_14");
  await AsyncStorage.removeItem("@score_candidat_15");
  await AsyncStorage.removeItem("@scoreDislike_candidat_1");
  await AsyncStorage.removeItem("@scoreDislike_candidat_2");
  await AsyncStorage.removeItem("@scoreDislike_candidat_3");
  await AsyncStorage.removeItem("@scoreDislike_candidat_4");
  await AsyncStorage.removeItem("@scoreDislike_candidat_5");
  await AsyncStorage.removeItem("@scoreDislike_candidat_6");
  await AsyncStorage.removeItem("@scoreDislike_candidat_7");
  await AsyncStorage.removeItem("@scoreDislike_candidat_8");
  await AsyncStorage.removeItem("@scoreDislike_candidat_9");
  await AsyncStorage.removeItem("@scoreDislike_candidat_10");
  await AsyncStorage.removeItem("@scoreDislike_candidat_11");
  await AsyncStorage.removeItem("@scoreDislike_candidat_12");
  await AsyncStorage.removeItem("@scoreDislike_candidat_13");
  await AsyncStorage.removeItem("@scoreDislike_candidat_14");
  await AsyncStorage.removeItem("@scoreDislike_candidat_15");
};
import styled from "styled-components/native";
import { Theme } from "../../constants/Theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

interface IProfile {
  profile: string;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const TitleScreen = styled.Text`
  font-size: ${`${dp(7)}px`};
  padding: ${`${hp(3)}px`} ${`${dp(10)}px`};
`;

export const ProfileList = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 ${`${dp(10)}px`};
`;

export const Profile = styled.TouchableOpacity<IProfile>`
  width: ${`${dp(40)}px`};
  height: ${`${hp(24)}px`};

  margin-bottom: ${`${hp(5)}px`};
  border-radius: 24px;

  background: ${({ profile }) => {
    if (profile === "radical") return Theme.light.radical;
    if (profile === "zen") return Theme.light.zen;
    if (profile === "cultural") return Theme.light.cultural;
  }};
`;

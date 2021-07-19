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
  background: ${Theme.light.background};
`;

export const TitleScreen = styled.Text`
  font-size: ${`${dp(8)}px`};
  padding: ${`${hp(5)}px`} ${`${dp(10)}px`};
  padding-bottom: ${`${hp(2)}px`};
  color: ${Theme.light.text};
`;

export const ProfileList = styled.View`
  flex-direction: column;
  padding: 0 ${`${dp(10)}px`};
  z-index: 5;
`;

export const Profile = styled.TouchableOpacity<IProfile>`
  width: ${`${dp(45)}px`};
  height: ${`${hp(24.5)}px`};

  margin-bottom: ${`${hp(3)}px`};
  border-radius: 24px;
  padding: ${`${dp(3)}px`} ${`${dp(5)}px`};

  background: ${({ profile }) => {
    if (profile === "radical") return Theme.light.radical;
    if (profile === "zen") return Theme.light.zen;
    if (profile === "cultural") return Theme.light.cultural;
  }};
`;

export const AboutProfile = styled.View``;
export const ProfileName = styled.Text`
  font-size: ${`${dp(5.7)}px`};
  color: #fff;
`;
export const ProfileDescription = styled.Text`
  width: 75%;
  color: #fff;
  font-size: ${`${dp(3)}px`};
`;

export const ProfileImage = styled.View`
  width: 50%;
  height: 50%;

  overflow: hidden;
  align-self: flex-end;
`;

export const BackgroundEffect = styled.View`
  background: #f3f3f2;
  width: ${`${dp(90)}px`};
  height: 100%;
  position: absolute;
  margin-top: 40%;
  border-top-right-radius: 24px;
  z-index: -1;
`;

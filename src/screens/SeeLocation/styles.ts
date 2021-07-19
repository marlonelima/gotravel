import styled from "styled-components/native";
import { 
  heightPercentageToDP as hp, 
  widthPercentageToDP as dp 
} from "react-native-responsive-screen";
import { Theme } from "../../constants/Theme";

interface DetailItemProps {
  color: string;
}

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  position: relative;
`

export const LocalImage = styled.Image`
  width: 100%;
  height: ${hp(37)}px;
`
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  margin: 2%;
`

export const TitleColumn = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${dp(5)}px;
`

export const Title = styled.Text`
  font-size: ${dp(8)}px;
  font-weight: bold;

  flex: 1;
  color: ${Theme.light.text};
`

export const CityText = styled.Text`
  font-size: ${dp(6)}px;
`

export const Content = styled.View`
  padding: 0 3% 4%;
  width: 98%;

  align-self: flex-end;
  background: white;

  border-radius: ${dp(5)}px;
`

export const Description = styled.Text`
  font-size: ${dp(4)}px;
  line-height: ${hp(4)}px;
  color: rgba(0, 0, 0, 0.6);
`

export const DetailsList = styled.View`
  flex-direction: row;
  margin: ${hp(2)}px 0;
`

export const DetailItem = styled.Text`
  margin-right: ${dp(2)}px;
  font-size: ${dp(4)}px;

  padding: ${dp(2)}px ${dp(4)}px;
  background: ${(ctx: DetailItemProps) => ctx.color};
  
  color: white;
  border-radius: ${dp(5)}px;
`

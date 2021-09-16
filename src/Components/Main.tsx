import * as React from "react";
import { Link } from "react-router-dom";
import * as S from "../styles";
import { AboutUs } from "./AboutUs";

interface Props {}

export const Main: React.FC<Props> = () => {
  return (
    <S.Main>
      <AboutUs />
      <S.CompanySectionGrid>
        <S.LogoContainer>
          <S.AbsoluteImage src="./logo.png"></S.AbsoluteImage>
        </S.LogoContainer>
        <S.Image src="./wood.png" />
        <S.Image src="./family.jpg" />
        <S.Image src="./hands.jpg" />
      </S.CompanySectionGrid>
      <S.CompanySectionFlex>
        <S.Image src="./house.jpg" />
      </S.CompanySectionFlex>
      <S.Info>
        <S.Heading>NASZA OFERTA</S.Heading>
        <S.Paragraph>DOWIEDZ SIĘ CO MOŻEMY TOBIE ZAOFEROWAĆ</S.Paragraph>
        <S.InfoSection>
          <S.DescriptionContainer>
            <S.Description>
              Duis blandit elementum magna, mattis congue libero condimentum et.
              Duis et ex suscipit, viverra augue sit amet, vehicula nibh. Sed
              scelerisque tempus blandit. Suspendisse scelerisque eu purus et
              congue. Quisque ac odio posuere, facilisis est eget, venenatis
              ante. Nunc eget molestie ipsum. Pellentesque feugiat egestas
              ullamcorper. Donec in elementum est, sed porta est. Aenean
              maximus, magna et commodo elementum, erat odio ornare eros, ac
              iaculis justo neque ac odio. Etiam molestie elementum porta. Fusce
              lorem sem, scelerisque eget bibendum eu, imperdiet et mauris.
              Mauris eget dictum orci. Fusce fermentum velit nisi, sed mollis
              libero auctor vitae. Fusce lectus libero, posuere in nisl vel,
              laoreet euismod erat. Suspendisse sit amet vestibulum odio.
              Praesent tempus elementum tellus pretium sagittis. Pellentesque
              mauris sem, elementum et massa ac, convallis fermentum justo.
              Nulla elementum tellus non nibh tempor, et tempor ex scelerisque.
              Praesent lacinia ac metus eget rutrum. Cras in tortor vitae tellus
              facilisis auctor a et augue. Pellentesque nulla dui, bibendum at
              consequat et, suscipit vitae erat. Ut a dignissim nulla.
              Vestibulum aliquet vulputate nisi in rutrum. Phasellus hendrerit,
              diam porta volutpat laoreet, nunc purus sodales libero, fermentum
              facilisis augue mauris non massa. Nulla vestibulum auctor
              consectetur. In porta ornare velit, ac posuere magna auctor ac.
            </S.Description>
          </S.DescriptionContainer>
          <S.Button as={Link} to="/houses">
            zobacz więcej
          </S.Button>
        </S.InfoSection>
      </S.Info>
    </S.Main>
  );
};

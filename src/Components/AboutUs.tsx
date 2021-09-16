import * as React from "react";
import { Link } from "react-router-dom";
import * as S from "../styles";

// we could accept children and pathname as props and replace
// text with children[0] for Heading children[1] for paragraph
// children[2] for description for reusability later

export const AboutUs: React.FC = () => {
  return (
    <S.Info>
      <S.Heading>KILKA SŁÓW O NAS</S.Heading>
      <S.Paragraph>CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY</S.Paragraph>
      <S.InfoSection>
        <S.DescriptionContainer>
          <S.Description>
            Duis blandit elementum magna, mattis congue libero condimentum et.
            Duis et ex suscipit, viverra augue sit amet, vehicula nibh. Sed
            scelerisque tempus blandit. Suspendisse scelerisque eu purus et
            congue. Quisque ac odio posuere, facilisis est eget, venenatis ante.
            Nunc eget molestie ipsum. Pellentesque feugiat egestas ullamcorper.
            Donec in elementum est, sed porta est. Aenean maximus, magna et
            commodo elementum, erat odio ornare eros, ac iaculis justo neque ac
            odio. Etiam molestie elementum porta. Fusce lorem sem, scelerisque
            eget bibendum eu, imperdiet et mauris. Mauris eget dictum orci.
            Fusce fermentum velit nisi, sed mollis libero auctor vitae. Fusce
            lectus libero, posuere in nisl vel, laoreet euismod erat.
            Suspendisse sit amet vestibulum odio. Praesent tempus elementum
            tellus pretium sagittis. Pellentesque mauris sem, elementum et massa
            ac, convallis fermentum justo. Nulla elementum tellus non nibh
            tempor, et tempor ex scelerisque. Praesent lacinia ac metus eget
            rutrum. Cras in tortor vitae tellus facilisis auctor a et augue.
            Pellentesque nulla dui, bibendum at consequat et, suscipit vitae
            erat. Ut a dignissim nulla. Vestibulum aliquet vulputate nisi in
            rutrum. Phasellus hendrerit, diam porta volutpat laoreet, nunc purus
            sodales libero, fermentum facilisis augue mauris non massa. Nulla
            vestibulum auctor consectetur. In porta ornare velit, ac posuere
            magna auctor ac.
          </S.Description>
          {/* turns html <button/> into <a> */}
          <S.Button as={Link} to="/houses" style={{ textDecoration: "none" }}>
            zobacz więcej
          </S.Button>
        </S.DescriptionContainer>
      </S.InfoSection>
    </S.Info>
  );
};

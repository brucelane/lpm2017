// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// codeslide from https://github.com/thejameskyle/spectacle-code-slide
import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
//import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  foxdot: require("../assets/FoxDot.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#857D41",
  secondary: "#540804"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Live Coding state of art
            </Heading>
            <Heading size={1} fit caps>
              LPM 2017
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>By Bruce LANE</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Live coding</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Music
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Visuals
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              FoxDot
            </Heading>
            <Image width="40%" src={images.foxdot}/>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>FoxDot is a live coding language based in Python that utilises SuperCollider for sound synthesis. It focuses on object-oriented programming to create dynamic musical systems where one small change in code can propagate outwards and create large shifts in the music.</Text>
          </Slide>
         </Deck>
      </Spectacle>
    );
  }
}

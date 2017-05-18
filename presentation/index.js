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
  foxdot: require("../assets/FoxDot.jpg"),
  tc: require("../assets/tc.jpg"),
  siren: require("../assets/toplapsiren.png"),
  gibber: require("../assets/gibber.jpg"),
  aggrid: require("../assets/aggrid.gif"),
  agpush: require("../assets/agpush.gif")
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "orange",
  tertiary: "yellow",
  quartenary: "red"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
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
                <Heading size={4} caps textColor="white" bgColor="quartenary" margin={10}>
                  Music
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="white" bgColor="quartenary" margin={10}>
                  Visuals
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Music
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <Heading size={2}  textColor="secondary">
              Tidal
            </Heading>
            <Image width="80%" src={images.tc}/>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>Tidal Cycles is a live coding language based on Haskell that utilises SuperCollider for sound synthesis.</Text>
          </Slide>          
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              Siren
            </Heading>
            <Image width="100%" src={images.siren}/>
           
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              Siren
            </Heading>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>Siren is built on top of the TidalCycles language, 
              and the use of functional programming paradigm
allows uninterrupted audio output. In addition to the pattern
composition, Siren  supports programming variations of and transitions between patterns. It features polyrhythmic
timers, pattern history, local and global parameters, and mathematical expressiveness.
</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              FoxDot
            </Heading>
            <Image width="40%" src={images.foxdot}/>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>FoxDot is a live coding language based on Python that utilises SuperCollider for sound synthesis. It focuses on object-oriented programming to create dynamic musical systems where one small change in code can propagate outwards and create large shifts in the music.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Visuals
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              Gibber
            </Heading>
            <Image width="70%" src={images.gibber}/>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>Gibber runs in the browser, generates music + visuals.</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Lights
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              Afterglow
            </Heading>
            <Image width="70%" src={images.aggrid}/>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>Afterglow runs in the browser, supports Ableton Push 2.</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              Afterglow
            </Heading>
            <Image width="70%" src={images.agpush}/>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>Ableton Push 2.</Text>
          </Slide>

         </Deck>
      </Spectacle>
    );
  }
}

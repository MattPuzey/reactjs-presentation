import React, { Component } from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  kat: require("./kat.png"),logo: require("./formidable-logo.svg"),
  Choir: require("./Choir.jpg"),
  hull: require("./hull.jpg"),
  python: require("./python.png"),
  javascript: require("./javascript.png"),
  htmlandcss: require("./htmcss.png"),
  bootstrap: require("./Bootstrap.jpg"),
  jquery: require("./jquery.jpg"),
  git: require("./git.png"),
  flask: require("./xFlask.png"),
  jinja: require("./jinja2.png"),
  tornado: require("./tornado.png"),
  coffee: require("./coffee.png"),
  selenium: require("./selenium.png"),
  splunk: require("./splunk_logo.jpg"),
  jenkins: require("./jenkins.png"),
  puppet: require("./puppet.png"),
  atlassian: require("./atlassian.png"),
  ubuntu: require("./ubuntu.png"),
  csharp: require("./csharp.png"),
  dotnet: require("./dotnet.png"),
  ef: require("./ef.jpg"),
  nhibernate: require("./NHibernate.png"),
  sql: require("./sql.jpg"),
  api: require("./webapi.png"),
  teamcityoctopus: require("./tc-od.gif"),
  nunit: require("./nunit.png"),
  nuget: require("./nuget.png"),
  tortoise: require("./tortoise.jpg"),
  eventstore: require("./eventstore.png"),
  rabbit: require("./rabbitmq.png"),
  yeoman: require("./yeoman.png"),
  ko: require("./ko.jpg"),
  react: require("./react-js.png"),
  surge: require("./surge.png"),
  vs: require("./visual-studio.png"),
  vscode: require("./vscode.png"),
  eclipse: require("./eclipse.png"),
  atom: require("./atom.png"),
  sublime: require("./sublime.jpg"),
  vagrant: require("./vagrant.png"),
  raspberry: require("./raspberrypi.png"),
  riak: require("./riak.png"),
  hb: require("./hb.jpg"),
  github: require("./GitHub.png"),
  wordpress: require("./wordpress.png"),
  yosemite: require("./yosemite.jpg"),
};

preloader([images.kat, images.Choir, images.hull, images.python, images.javascript, images.htmlandcss, images.bootstrap, images.jquery, images.git, images.flask,
  images.jinja, images.tornado, images.coffee, images.selenium, images.splunk, images.jenkins, images.puppet, images.atlassian, images.ubuntu, images.csharp,
  images.dotnet, images.ef, images.nhibernate, images.sql, images.api, images.teamcityoctopus, images.nunit, images.nuget, images.tortoise, images.eventstore,
  images.rabbit, images.yeoman, images.ko, images.react, images.surge, images.vs, images.vscode, images.eclipse, images.atom, images.sublime, images.vagrant,
  images.raspberry, images.riak, images.github, images.wordpress,]);

export default class extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Year 1 
          </Heading>
          <Heading>
          at HSCIC
          </Heading>
          <Heading textColor="black">
            By Matthew Puzey
          </Heading>
          
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Using ReactJS</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <Heading>
          Contents
        </Heading> 
          <List>
            <ListItem><Appear fid="1">My Background</Appear></ListItem>
            <ListItem><Appear fid="2">What I learnt this year</Appear></ListItem>
            <ListItem><Appear fid="3">Where I see myself at HSCIC</Appear></ListItem>
          </List>
        </Slide>
      
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Wait what?
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.Choir.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={4} caps fit textColor="primary">
              Lichfield
            </Heading>
          </Appear>
           <List textColor='white'>
            <ListItem><Appear fid="1">Sleepy Staffordshire town</Appear></ListItem>
            <ListItem><Appear fid="2">Birthplace of Samuel Johnson and Erasmus Darwin</Appear></ListItem>
            <ListItem><Appear fid="3">...(and me)</Appear></ListItem>
           </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Heading size={4} caps fit textColor="primary">
            Interests 
          </Heading>
          <List textColor='white'>
            <ListItem><Appear fid="1">Playing guitar...badly</Appear></ListItem>
            <ListItem><Appear fid="2">Heavy Music</Appear></ListItem>
            <ListItem><Appear fid="3">Video games</Appear></ListItem>
            <ListItem><Appear fid="4">Beer!</Appear></ListItem>
            <ListItem><Appear fid="5">Technology and tinkering with code</Appear></ListItem>
           </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.hull.replace("/", "")} bgDarken={0.75}>
         
         <Appear fid="1">
          <Heading size={4} caps fit textColor="primary">
            The University Of Hull
          </Heading>
        </Appear>
        <Appear fid="2">
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Physics with Astrophysics
              </Heading>
            </Fill>
          </Layout>
        </Appear>
        <Appear fid="3">
          <List textColor='white'>
            <ListItem><Appear fid="1">Lasers</Appear></ListItem>
            <ListItem><Appear fid="2">Electrodynamics</Appear></ListItem>
            <ListItem><Appear fid="3">Thermodynamics</Appear></ListItem>
            <ListItem><Appear fid="4">Quantum mechanics</Appear></ListItem>
            <ListItem><Appear fid="5">Relativity</Appear></ListItem>
            <ListItem><Appear fid="6">Stars and black holes</Appear></ListItem>
           </List>
        </Appear>
        </Slide>

         <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Happy Birthday HSCIC graduate scheme! 
          </Heading>
          <Interactive/>

        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="tertiary">
         <BlockQuote>
            <Quote>Technologies</Quote>
            <Cite textColor="secondary">Spincore</Cite>
          </BlockQuote>
          <br></br>
          <Appear fid="1">
          <Image src={images.python.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.javascript.replace("/", "")} margin="0px auto 40px" height="140px"/>
          <Image src={images.htmlandcss.replace("/", "")} margin="0px auto 40px" height="140px"/>
          <Image src={images.bootstrap.replace("/", "")} margin="0px auto 40px" height="90px"/>
          <Image src={images.jquery.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.git.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.flask.replace("/", "")} margin="0px auto 40px" height="100px"/>
          </Appear>
          <Appear fid="2">
          <Image src={images.jinja.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.tornado.replace("/", "")} margin="0px auto 40px" height="140px"/>
          <Image src={images.coffee.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.selenium.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.splunk.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image src={images.jenkins.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image src={images.puppet.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.atlassian.replace("/", "")} margin="0px auto 40px" height="100px"/>
          </Appear>
          <Appear fid="3">
          <Image src={images.eclipse.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.vagrant.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.raspberry.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.ubuntu.replace("/", "")} margin="0px auto 40px" height="90px"/>
          <Image src={images.riak.replace("/", "")} margin="0px auto 40px" height="100px"/>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Technologies</Quote>
            <Cite textColor="secondary">IT Development</Cite>
          </BlockQuote>
           <br></br>
           <Appear fid="1">
         
          <Image src={images.csharp.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.dotnet.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.ef.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.sql.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.nhibernate.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.nunit.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.nuget.replace("/", "")} margin="0px auto 40px" height="80px"/>
           <Image src={images.api.replace("/", "")} margin="0px auto 40px" height="80px"/>
          </Appear>
          <Appear fid="2">
          <Image src={images.teamcityoctopus.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.eventstore.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.rabbit.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.tortoise.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.ko.replace("/", "")} margin="0px auto 40px" height="80px"/>
          <Image src={images.vs.replace("/", "")} margin="0px auto 40px" height="100px"/>
          <Image src={images.vscode.replace("/", "")} margin="0px auto 40px" height="70px"/>
          <Image src={images.atom.replace("/", "")} margin="0px auto 40px" height="80px"/>
          </Appear>
           <Appear fid="3">
            <Image src={images.sublime.replace("/", "")} margin="0px auto 40px" height="120px"/>
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="120px"/>
            <Image src={images.yeoman.replace("/", "")} margin="0px auto 40px" height="100px"/>
            <Image src={images.surge.replace("/", "")} margin="0px auto 40px" height="100px"/>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary">
          
          <Appear fid="1">
            <Heading size={4} caps fit textColor="primary">
              What else?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                </Heading>
              </Fill>
            </Layout>
          </Appear>

          <List textColor='secondary'>
              <ListItem><Appear fid="1">Processes</Appear></ListItem>
              <ListItem><Appear fid="2">Agile</Appear></ListItem>
              <ListItem><Appear fid="3">Self confidence</Appear></ListItem>
              <ListItem><Appear fid="4"></Appear></ListItem>
              <ListItem><Appear fid="5"></Appear></ListItem>
              <ListItem><Appear fid="6">Where I fit into HSCIC</Appear></ListItem>
          </List>
        </Slide>
       
        <Slide transition={["spin", "slide"]} bgColor="tertiary" bgImage={images.yosemite.replace("/", "")}>
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Find me at GitHub and wordpress
          </Heading>
          <Heading size={5} textColor="tertiary">
            https://github.com/MattPuzey
          </Heading>
          <Link href="https://github.com/MattPuzey"><Image src={images.github} margin="0px auto 40px" height="100px"/></Link>
          <Heading size={5} textColor="tertiary">
            https://matthewpuzeyblog.wordpress.com/
          </Heading>
          <Link href="matthewpuzeyblog.wordpress.com/"><Image src={images.wordpress} margin="0px auto 40px" height="80px"/></Link>
        </Slide>
      </Deck>
    );
  }
}

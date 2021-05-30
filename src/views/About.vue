<template>
  <div class="about">
    <vHeader />
    <div class="about__block">
      <div class="first-block">
        <div class="info__wrapper">
          Star Wars is an American epic space opera media franchise created by
          George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop-culture phenomenon. The franchise has been
          expanded into various films and other media, including television
          series, video games, novels, comic books, theme park attractions, and
          themed areas, comprising an all-encompassing fictional universe. In
          2020, its total value was estimated at US$70 billion, and it is
          currently the fifth-highest-grossing media franchise of all time.
        </div>
      </div>

      <div class="second-block">
        <div class="info__wrapper">
          The original film (Star Wars), retroactively subtitled Episode IV: A
          New Hope (1977), was followed by the sequels Episode V: The Empire
          Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming
          the original Star Wars trilogy. Lucas later returned to filmmaking to
          direct a prequel trilogy, consisting of Episode I: The Phantom Menace
          (1999), Episode II: Attack of the Clones (2002), and Episode III:
          Revenge of the Sith (2005). In 2012, Lucas sold his production company
          to Disney, relinquishing his ownership of the franchise. The
          subsequently produced sequel trilogy consists of Episode VII: The
          Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode
          IX: The Rise of Skywalker (2019).

          <br /><br />

          All nine films of the 'Skywalker saga' were nominated for Academy
          Awards with wins going to the first two releases. Together with the
          theatrical live action spin-off films Rogue One (2016) and Solo
          (2018), the combined box office revenue of the films equated to over
          US$10 billion and is currently the second-highest-grossing film
          franchise of all time.
        </div>
        <div class="image-wrapper"></div>
      </div>

      <div class="third-block">
        <h3 class="header">Premise</h3>
        <div class="info__wrapper">
          The Star Wars franchise depicts the adventures of characters "A long
          time ago in a galaxy far, far away", in which humans and many species
          of aliens (often humanoid) co-exist with robots, or 'droids', who may
          assist them in their daily routines; space travel between planets is
          common due to lightspeed hyperspace technology. Spacecraft range from
          small starfighters, to huge capital ships such as the Star Destroyers,
          to space stations such as the moon-sized Death Stars.
          Telecommunication includes two-way audio and audiovisual screens, and
          holographic projections. A mystical power known as the Force is
          described in the original film as "an energy field created by all
          living things ... [that] binds the galaxy together". Through training
          and meditation, those whom "the Force is strong with" are able to
          perform various superpowers (such as telekinesis, precognition,
          telepathy, and manipulation of physical energy). The Force is wielded
          by two major knightly orders at conflict with each other: the Jedi,
          peacekeepers of the Galactic Republic who act on the light side of the
          Force through non-attachment and arbitration, and the Sith, who use
          the dark side by manipulating fear and aggression. While Jedi Knights
          can be numerous, the Dark Lords of the Sith (or 'Darths') are intended
          to be limited to two: a master and their apprentice. Force-wielders
          are very limited in numbers in comparison to the population. The Jedi
          and Sith prefer the use of a weapon called a lightsaber, a blade of
          energy that can cut through virtually any surface and deflect energy
          bolts. The rest of the population, as well as renegades and soldiers,
          use laser-powered blaster firearms. In the outer reaches of the
          galaxy, crime syndicates such as the Hutt cartel are dominant. Bounty
          hunters are often employed by both gangsters and governments. Illicit
          activities include smuggling and slavery.
        </div>
      </div>

      <div class="fourth-block">
        <h3 class="header">Film</h3>
        
        <div class="image-wrapper"></div>
        <div class="info__wrapper">
          The Star Wars film series centers around three sets of trilogies,
          which are collectively referred to as the "Skywalker saga". They
          were produced non-chronologically, with Episodes IV–VI (the original
          trilogy) being released between 1977 and 1983, Episodes I–III (the
          prequel trilogy) being released between 1999 and 2005, and Episodes
          VII–IX (the sequel trilogy), being released between 2015 and 2019.
          Each trilogy focuses on a generation of the Force-sensitive Skywalker
          family. The original trilogy depicts the heroic development of Luke
          Skywalker, the prequels tell the backstory of his father Anakin, while
          the sequels star Luke's nephew, Kylo Ren. An anthology series set
          between the main episodes entered development in parallel to the
          production of the sequel trilogy, described by Disney chief
          financial officer Jay Rasulo as origin stories. The first entry,
          Rogue One (2016), tells the story of the rebels who steal the Death
          Star plans just before Episode IV. Solo (2018) focuses on Han
          Solo's backstory, also featuring original trilogy co-protagonists
          Chewbacca and Lando Calrissian and involving prequel trilogy villain
          Darth Maul. Lucasfilm has a number of Star Wars films in development,
          two of which were confirmed during Disney Investor Day 2020. The first
          will be a film titled Rogue Squadron, which is being directed by Patty
          Jenkins, and is scheduled for release on December 25, 2023. The
          second is an unspecified film from Taika Waititi, who in May 2020 was
          announced to be directing a Star Wars film he was co-writing with
          Krysty Wilson-Cairns. Additionally, a trilogy independent from the
          Skywalker saga is being written by The Last Jedi writer/director Rian
          Johnson. In September 2019, it was announced that Kathleen
          Kennedy and Kevin Feige would collaborate to develop a Star Wars
          film. In February 2020, a film was announced to be in development
          from director J. D. Dillard and writer Matt Owens.
        </div>
      </div>
    </div>
    <vFooter />
  </div>
</template>

<script>
import vHeader from "../components/vHeader";
import vFooter from "../components/vFooter";

export default {
  data() {
    return {};
  },
  components: {
    vHeader,
    vFooter,
  },
  mounted(){
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
$orange-color: rgba(255, 99, 74, 1);

.about__block {
}
.first-block {
  width: 100%;
  height: 100vh;
  position: relative;
  //filter: grayscale(100%);
  background-image: url("../assets/about-images/2.jpg");
  background-size: cover;

  .info__wrapper {
    color :  white;
    text-shadow: black 5px 0 10px;
    font-size: 24px;
    position: absolute;
    max-width: 80vw;
    bottom: 12vh;
    left: 3vw;
    font-weight: 100;
  }
}

.second-block {
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 100px;

  //height: 600px;
  overflow: hidden;
  display: flex;

  .info__wrapper {
    font-weight: 100;
    width: 50%;
    font-size: 20px;
    padding-right: 80px;
  }
  .image-wrapper {
    border-radius: 10px;
    width: 50%;
    background: url("../assets/about-images/5.png");
    background-size: cover;
  }
}

.third-block {
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 100px;
  .header {
      text-transform: uppercase;
    font-size: 40px;
    text-align: center;
    margin: 40px auto;
  }
  .info__wrapper {
    text-align: center;
    font-size: 20px;
    font-weight: 100;
  }
}

.fourth-block {
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;

  .header {
    text-transform: uppercase;
    font-size: 40px;
    text-align: center;
    margin: 40px auto;
    width: 100%;
  }
  .info__wrapper {
    width: 50%;
    font-size: 20px;
    font-weight: 100;
    padding-left: 80px;
  }
  .image-wrapper {
    border-radius: 10px;
    width:  calc(50% - 80px);
    background: url("../assets/about-images/1.jpg");
    background-size: cover;
  }
}

#footer {
  //margin-top: 200px;
}
</style>
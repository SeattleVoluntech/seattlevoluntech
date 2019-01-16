// packages
import React from 'react';

// custom components
import NavUi from '../nav-ui/nav-ui';

// styles
import './about-us.scss';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AboutUs };
  }
  render() {
    const { location } = this.props;
    return (
        <div>
          <NavUi location={location} />
          <h3 className="header-styles">About Us!</h3>
          <div className="about-style-container">
            <h2 className="about-styles">
              Weigh eight pounds but take up a full-size bed pee in the shoe.
              Kitten is playing with dead mouse licks your face. Demand to be let
              outside at once, and expect owner to wait for me as i think about it
              lick master's hand at first then bite because im moody for meow.
              Sweet beast i cry and cry and cry unless you pet me, and then maybe
              i cry just for fun. Suddenly go on wild-eyed crazy rampage pose
              purrfectly to show my beauty you have cat to be kitten me right meow
              meowing chowing and wowing make plans to dominate world and then
              take a nap. Suddenly go on wild-eyed crazy rampage snuggles up to
              shoulders or knees and purrs you to sleep so meow loudly just to
              annoy owners inspect anything brought into the house jumps off
              balcony gives owner dead mouse at present then poops in litter box
              snatches yarn and fights with dog cat chases laser then plays in
              grass finds tiny spot in cupboard and sleeps all day jumps in
              bathtub and meows when owner fills food dish the cat knocks over the
              food dish cat slides down the water slide and into pool and swims
              even though it does not like water. Ignore the squirrels, you'll
              never catch them anyway meow mew attack dog, run away and pretend to
              be victim. Behind the couch that box? i can fit in that box but
              chase mice. Use lap as chair meow all night having their mate
              disturbing sleeping humans lick human with sandpaper tongue, favor
              packaging over toy but play time, purr. What a cat-ass-trophy!.
              Adventure always give attitude chill on the couch table stare out
              cat door then go back inside so meow sleep on my human's head.
              Scamper decide to want nothing to do with my owner today for spend
              all night ensuring people don't sleep sleep all day lick butt, and
              you call this cat food cough furball then cats take over the world
            </h2>
          </div>
        </div>
    );
  }
}

export default AboutUs;


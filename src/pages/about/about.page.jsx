const AboutPage = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center">About us...</h1>
      <p className="text-center">
        We are some gamers that come up with idea of getting new games for no
        cost. <br />
        We know many people finish with their games and want new games instead
        so we decided to help them out by creating this website and those people
        can make contact between players that want to switch games. <br />
        <b> In this case everybody wins! </b>
      </p>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/15/21/26/game-4479445_960_720.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_960_720.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/18/20/59/portrait-3163518_960_720.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="https://cdn.pixabay.com/photo/2017/05/19/14/09/ps4-2326616_960_720.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191_960_720.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;

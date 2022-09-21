import { Fragment } from "react";
import "./homepage.css";
const HomePage = () => {
  return (
    <Fragment>
      <div className="bg-image p-5 text-center shadow-1-strong  mb-5 text-white bg-pic">
        <h1 className="text-center mt-5 h1-home">
          Welcome to the place where you can <br /> exchange games with other
          people for free!
          <br />
          <br />
          B.B Games
        </h1>
      </div>
      <div className="container mt-4">
        <h2 className="text-center mt-5">
          We invite you to take a part in our platform <br /> and exchange your
          games with other pepole around the world!
        </h2>
        <img
          className="rounded mx-auto d-block w-50 mt-5"
          src="https://media.comicbook.com/2019/07/consoles-1180861.jpeg?auto=webp"
          alt="consoles"
        />

        <h3 className="text-center mt-5">
          Take a look of some of the games our commuinty shared with each other
        </h3>

        <img
          className="rounded mx-auto d-block w-50 mt-3"
          src="https://cdn.arstechnica.net/wp-content/uploads/2021/07/dealmaster072421.jpg"
          alt="consoles"
        />

        <h2 className="text-center mt-5">How it works?!</h2>
        <p className="text-center">
          <b>
            All you have to do is to SignUp to our website and post your games
            you want to exchange!
            <br />
            If someone want to exchange with you he will make contact with you
            and you will be able to get from him another games instead!!! <br />
            If you share with us your location we will help you to see who near
            you use this platform too.
          </b>
        </p>
        <img
          className="rounded mx-auto d-block w-50 mt-5"
          src="https://www.popsci.com/uploads/2022/08/08/Best-PS4-Games-for-Kids-Header.jpg?auto=webp&width=1440&height=936"
          alt="xbox games"
        />
      </div>
    </Fragment>
  );
};
export default HomePage;

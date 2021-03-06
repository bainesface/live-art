import React, { useState } from 'react';

const ArtistSignUp = ({ setHasAccount }) => {
  const [artistInfo, setArtistInfo] = useState({
    username: '',
    password: '',
    aboutMe: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(artistInfo);
    //api post request
    setArtistInfo({ username: '', password: '', aboutMe: '' });
    setHasAccount(true);
  };

  return (
    <div>
      <form className="artistSignUpForm" onSubmit={handleSubmit}>
        <label className="artistSignUpLabel">Artist Sign Up</label>
        <input
          className="artistSignUpUsername"
          placeholder="username"
          type="text"
          value={artistInfo.username}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, username: e.target.value })
          }
        />
        <input
          className="artistLogInPassword"
          placeholder="password"
          type="password"
          value={artistInfo.password}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, password: e.target.value })
          }
        />
        <textarea
          className="artistSignUpAboutMe"
          placeholder="about me"
          value={artistInfo.aboutMe}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, aboutMe: e.target.value })
          }
        />
        <button>Sign Up</button>
      </form>
      <button
        onClick={() => {
          setHasAccount(true);
        }}
      >
        Already have an account? Log in here
      </button>
    </div>
  );
};

export default ArtistSignUp;

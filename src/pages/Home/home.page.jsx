import React from 'react';

import { ReactComponent as House } from '../../assets/home.svg';
import { ReactComponent as Playlist } from '../../assets/plays.svg';
import { ReactComponent as Artist } from '../../assets/artist.svg';
import { ReactComponent as Album } from '../../assets/album.svg';
import { ReactComponent as Radio } from '../../assets/radio.svg';
import { ReactComponent as Event } from '../../assets/calendar.svg';
import { ReactComponent as Podcast } from '../../assets/microphone.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';

import { ReactComponent as Round } from '../../assets/round.svg';
import { ReactComponent as Ring } from '../../assets/ring.svg';

import { ReactComponent as Next } from '../../assets/Next.svg';
import { ReactComponent as Play } from '../../assets/Play.svg';
import { ReactComponent as Pause } from '../../assets/Pause.svg';
import { ReactComponent as Previous } from '../../assets/Previous.svg';
import { ReactComponent as Repeat } from '../../assets/Repeat One.svg';
import { ReactComponent as Shuffle } from '../../assets/Shuffle.svg';
import { ReactComponent as LeftArrow } from '../../assets/arrowleft.svg';
import { ReactComponent as RightArrow } from '../../assets/arrowright.svg';
import { ReactComponent as AddPlus } from '../../assets/add.svg';
import { ReactComponent as Ellipsis } from '../../assets/ellipsis.svg';
import { ReactComponent as Speaker } from '../../assets/Video player speaker on sound.svg';
import { ReactComponent as Ticket } from '../../assets/ticket.svg';

import { ReactComponent as HeadphonesIcon } from '../../assets/headphones-set.svg';
import { ReactComponent as SpeakersIcon } from '../../assets/speaker-set.svg';
import { ReactComponent as LevelIcon } from '../../assets/levels-set.svg';

import { ReactComponent as EarphonesIcon } from '../../assets/earphones-set.svg';
import { ReactComponent as MicrophoneIcon } from '../../assets/microphone-12.svg';
import { ReactComponent as MusicalnoteIcon } from '../../assets/musical-note-12.svg';

import search from '../../assets/search.png';
import currentSong from '../../assets/currentsong.jpg';
import imageDragon from '../../assets/imagedragon.jpg';
import userProfile from '../../assets/user-picture.jpg';

import Cover1 from '../../assets/cover1.jpg';
import Cover2 from '../../assets/cover2.jpg';
import Cover3 from '../../assets/cover3.jpg';
import Cover4 from '../../assets/cover4.jpg';
import Cover5 from '../../assets/cover5.jpg';
import Cover6 from '../../assets/cover6.jpg';
import Cover7 from '../../assets/cover7.jpg';
import Cover8 from '../../assets/cover8.jpg';
import Cover9 from '../../assets/cover9.jpg';
import Cover10 from '../../assets/cover10.jpg';
import Cover11 from '../../assets/cover11.jpg';
import Cover12 from '../../assets/cover12.jpg';
import Cover13 from '../../assets/cover13.jpg';

import './home.styles.scss';

const Home = () => {
  const handleImages = (url) => {
    const style = {
      backgroundImage: `url(${url})`,
    };
    return style;
  };

  return (
    <div className="container">
      <div className="top">
        <nav className="sidebar">
          <div className="sidebar__entry">
            <div className="sidebar__entry__user">
              <div className="sidebar__entry__user__image"></div>
              <div className="sidebar__entry__user__name">
                Branislav Grozdanovic
              </div>

              <div className="sidebar__entry__user__mail">
                banegrozdanovic@gmail.com
              </div>
            </div>

            <div className="sidebar__entry__container">
              <div className="sidebar__entry__container__title">Browse</div>
              <ul className="sidebar__entry__container__list">
                <li className="sidebar__entry__container__list__item border__left">
                  <House className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name home__color">
                    Home
                  </span>
                </li>
                <li className="sidebar__entry__container__list__item">
                  <Playlist className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name">
                    Playlist
                  </span>
                </li>
                <li className="sidebar__entry__container__list__item">
                  <Artist className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name">
                    Artist
                  </span>
                </li>
                <li className="sidebar__entry__container__list__item">
                  <Album className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name">
                    Albums
                  </span>
                </li>
              </ul>
            </div>

            <div className="sidebar__entry__container">
              <div className="sidebar__entry__container__title">Discover</div>
              <ul className="sidebar__entry__container__list">
                <li className="sidebar__entry__container__list__item border__none">
                  <Radio className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name">
                    Radio
                  </span>
                </li>
                <li className="sidebar__entry__container__list__item">
                  <Event className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name">
                    Event
                  </span>
                </li>
                <li className="sidebar__entry__container__list__item">
                  <Podcast className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name">
                    Podcast
                  </span>
                </li>
                <li className="sidebar__entry__container__list__item">
                  <Heart className="sidebar__entry__container__list__item__icon" />
                  <span className="sidebar__entry__container__list__item__name">
                    For you
                  </span>
                </li>
              </ul>
            </div>
            <div className="sidebar__speaker">
              <Speaker className="sidebar__speaker__icon" />
              <div className="sidebar__speaker__line">
                <div className="sidebar__speaker__line__front"></div>
              </div>
            </div>
          </div>{' '}
        </nav>

        <div className="main">
          <header className="header">
            <form action="#" class="search">
              <button class="search__button">
                <img class="search__icon" src={search} alt="Logo" />;
              </button>
              <input
                type="text"
                class="search__input"
                placeholder="Type here to search"
              />
            </form>
            <div className="settings">
              <button className="settings__membership">
                Upgrade To Premium
              </button>
              <Round className="settings__iconspin" />
              <Ring className="settings__icon" />
            </div>
          </header>
          <main className="content">
            <div className="together">
              <div className="featured">
                <div className="topbox">
                  <div className="listen-activity">
                    <h6 className="listen-activity__title">Activity</h6>

                    <div className="listen-activity__calendar">
                      <span className="listen-activity__calendar__left">
                        Music time
                      </span>
                      <span className="listen-activity__calendar__right">
                        WEEK
                        <span className="listen-activity__calendar__icon"></span>
                      </span>
                    </div>
                    <div className="listen-activity__weeks">
                      <div className="listen-activity__weeks__inside">
                        <div className="listen-activity__weeks__inside__item">
                          <p className="listen-activity__weeks__inside__item__hours">
                            5h
                          </p>
                          <div className="listen-activity__weeks__inside__item__line1"></div>
                          <div className="listen-activity__weeks__inside__item__day">
                            Wed
                          </div>
                        </div>

                        <div className="listen-activity__weeks__inside__item">
                          <p className="listen-activity__weeks__inside__item__hours">
                            4h
                          </p>
                          <div className="listen-activity__weeks__inside__item__line2"></div>
                          <div className="listen-activity__weeks__inside__item__day">
                            Thi
                          </div>
                        </div>

                        <div className="listen-activity__weeks__inside__item">
                          <p className="listen-activity__weeks__inside__item__hours">
                            9h
                          </p>
                          <div className="listen-activity__weeks__inside__item__line3"></div>
                          <div className="listen-activity__weeks__inside__item__day">
                            Fri
                          </div>
                        </div>

                        <div className="listen-activity__weeks__inside__item">
                          <p className="listen-activity__weeks__inside__item__hours">
                            7h
                          </p>
                          <div className="listen-activity__weeks__inside__item__line4"></div>
                          <div className="listen-activity__weeks__inside__item__day">
                            Sat
                          </div>
                        </div>

                        <div className="listen-activity__weeks__inside__item">
                          <p className="listen-activity__weeks__inside__item__hours">
                            3h
                          </p>
                          <div className="listen-activity__weeks__inside__item__line5"></div>
                          <div className="listen-activity__weeks__inside__item__day">
                            Sun
                          </div>
                        </div>

                        <div className="listen-activity__weeks__inside__item">
                          <p className="listen-activity__weeks__inside__item__hours">
                            1h
                          </p>
                          <div className="listen-activity__weeks__inside__item__line6"></div>
                          <div className="listen-activity__weeks__inside__item__day">
                            Mon
                          </div>
                        </div>

                        <div className="listen-activity__weeks__inside__item">
                          <p className="listen-activity__weeks__inside__item__hours">
                            3h
                          </p>
                          <div className="listen-activity__weeks__inside__item__line7"></div>
                          <div className="listen-activity__weeks__inside__item__day">
                            Tue
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shbtn">
                    <div className="shbtn__container">
                      <div className="shbtn__container__left">
                        <div className="shbtn__container__left__item1">
                          <EarphonesIcon className="shbtn__container__left__item1__icon1"></EarphonesIcon>
                        </div>

                        <div className="shbtn__container__left__item2">
                          <HeadphonesIcon className="shbtn__container__left__item2__icon2"></HeadphonesIcon>
                        </div>
                        <div className="shbtn__container__left__item3">
                          <SpeakersIcon className="shbtn__container__left__item3__icon3"></SpeakersIcon>
                        </div>
                      </div>

                      <div className="shbtn__container__right">
                        <div className="shbtn__container__right__item1">
                          <LevelIcon className="shbtn__container__right__item1__icon1"></LevelIcon>
                        </div>

                        <div className="shbtn__container__right__item2">
                          <MicrophoneIcon className="shbtn__container__right__item2__icon2"></MicrophoneIcon>
                        </div>
                        <div className="shbtn__container__right__item3">
                          <MusicalnoteIcon className="shbtn__container__right__item3__icon3"></MusicalnoteIcon>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="shortcut--buttons-box">
                    <div className="shortcut-buttons">
                      <div className="shortcut-buttons__item">
                        <EarphonesIcon className="shortcut-buttons__item__icon" />
                      </div>

                      <div className="shortcut-buttons__item">
                        <HeadphonesIcon className="shortcut-buttons__item__icontrue" />
                      </div>

                      <div className="shortcut-buttons__item">
                        <SpeakersIcon className="shortcut-buttons__item__icon" />
                      </div>
                    </div>

                    <div className="shortcut-buttons">
                      <div className="shortcut-buttons__item">
                        <LevelIcon className="shortcut-buttons__item__iconnormal" />
                      </div>

                      <div className="shortcut-buttons__item">
                        <MicrophoneIcon className="shortcut-buttons__item__icon" />
                      </div>

                      <div className="shortcut-buttons__item">
                        <MusicalnoteIcon className="shortcut-buttons__item__icon" />
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="featured__header__title">
                  <h4 className="recommended__header__title">
                    Featured for you
                  </h4>

                  <div className="recommended__header__rightside">
                    <p className="recommended__header__browse">Browse</p>
                    <LeftArrow className="recommended__header__icon" />
                    <RightArrow className="recommended__header__icon" />
                  </div>
                </div>
                {/* </div>
                <div className="featured__header__title"></div> */}
                <div className="featured__bottom__event">
                  <div alt="rihanna" className="featured__bottom__event__image">
                    <div className="featured__bottom__event__image__container">
                      <h4 className="featured__bottom__event__artist">
                        Rihanna in Novi Sad
                      </h4>
                      <p className="featured__bottom__event__date">
                        13.01.2021 | Freedom Square
                      </p>
                      <div className="featured__bottom__event__tickets">
                        <Ticket className="featured__bottom__event__icon"></Ticket>
                        <span className="featured__bottom__event__text">
                          Buy Tickets
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recently">
                <h4 className="recently__title">Recently Listened</h4>
                <div className="recently__songslist">
                  <div className="recently__songslist__item">
                    <Pause className="recently__songslist__item__inter"></Pause>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover1}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Blinding Lights
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Weeknd
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      03:24
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">02</span>
                    <AddPlus className="recently__songslist__item__plus" />
                    <img
                      src={Cover2}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Dance Monkey
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Tones & I
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      02:38
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">03</span>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover3}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Rake a chance (feat. Little Dragon)
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Flume
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      03:51
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">04</span>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover4}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Before You Go
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Lewis Capaldi
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      03:21
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">04</span>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover5}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Rockstar
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Dababy ft. Roddy Ricch
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      03:18
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">03</span>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover6}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Rain On Me
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Lady gaga & Ariana Grande
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      03:53
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">04</span>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover7}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Toosie Slide
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Drake
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      02:44
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">04</span>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover8}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Bad Guy
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Billie Eilish
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      03:32
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>

                  <div className="recently__songslist__item">
                    <span className="recently__songslist__item__inter">04</span>
                    <AddPlus className="recently__songslist__item__plusnormal" />
                    <img
                      src={Cover9}
                      alt="song"
                      className="recently__songslist__item__info__image"
                    />
                    <div className="recently__songslist__item__info">
                      <p className="recently__songslist__item__info__song">
                        Better Off Without You
                      </p>
                      <p className="recently__songslist__item__info__artist">
                        Becky Hill ft. Shift K3y
                      </p>
                    </div>
                    <span className="recently__songslist__item__lenght">
                      02:31
                    </span>
                    <Ellipsis className="recently__songslist__item__dots"></Ellipsis>
                  </div>
                </div>
              </div>
            </div>

            <div className="recommended">
              <div className="recommended__header">
                <h4 className="recommended__header__title">
                  Recommended Albums
                </h4>

                <div className="recommended__header__rightside">
                  <p className="recommended__header__browse">Browse</p>
                  <LeftArrow className="recommended__header__icon" />
                  <RightArrow className="recommended__header__icon" />
                </div>
              </div>
              <div className="recommended__rcontainer">
                <div className="item">
                  <div
                    style={handleImages(currentSong)}
                    alt="imagedragon"
                    className="item__image"
                  />
                  <h4 className="item__song">Neon Lights</h4>
                  <p className="item__artist">AVICII</p>
                </div>

                <div className="item">
                  <div
                    style={handleImages(imageDragon)}
                    alt="imagedragon"
                    className="item__image"
                  />
                  <h4 className="item__song">Ride It</h4>
                  <p className="item__artist">Regard</p>
                </div>

                <div className="item">
                  <div
                    style={handleImages(Cover10)}
                    alt="imagedragon"
                    className="item__image"
                  />
                  <h4 className="item__song">Savage</h4>
                  <p className="item__artist">Megan Thee Stallion</p>
                </div>

                <div className="item">
                  <div
                    style={handleImages(Cover11)}
                    alt="imagedragon"
                    className="item__image"
                  />
                  <h4 className="item__song">Memories</h4>
                  <p className="item__artist">Maroon 5</p>
                </div>

                <div className="item">
                  <div
                    style={handleImages(Cover12)}
                    alt="imagedragon"
                    className="item__image"
                  />
                  <h4 className="item__song">Godzilla</h4>
                  <p className="item__artist">Eminem ft Juice Wrld</p>
                </div>

                <div className="item">
                  <div
                    style={handleImages(Cover13)}
                    alt="imagedragon"
                    className="item__image"
                  />
                  <h4 className="item__song">Roxanne</h4>
                  <p className="item__artist">Arizona Zervas</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <section className="player">
        <div className="current-box">
          <div class="spinner">
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
          </div>

          <img src={Cover1} alt="current-song" className="current-box__image" />
          <div className="current-box__title">
            <h4 className="current-box__title__song">Blinding Lights</h4>
            <p className="current-box__title__artist">Weeknd</p>
          </div>
        </div>

        <div className="control">
          <div className="control__previous">
            <h5 className="control__title">Previous</h5>
            <p className="control__song-name">Podobny</p>
          </div>

          <div className="control__player">
            <div className="control__player__buttons">
              <Shuffle className="control__player__buttons__icon" />
              <Previous className="control__player__buttons__icon" />

              <div className="control__player__buttons__icon_play">
                <Play className="control__player__buttons__icon_play_c" />
              </div>

              <Next className="control__player__buttons__icon" />
              <Repeat className="control__player__buttons__icon" />
            </div>

            <div className="control__player__duration">
              <span className="control__player__duration__current">01:55</span>

              <div className="control__player__duration__line">
                <div className="control__player__duration__line__back">
                  <div className="control__player__duration__line__front">
                    <div className="control__player__duration__line__circle">
                      <div className="control__player__duration__line__circle__point">
                        <div className="control__player__duration__line__circle__point_x"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span className="control__player__duration__lenght">03:07</span>
            </div>
          </div>

          <div className="control__next">
            <h5 className="control__title">Up Next</h5>
            <p className="control__song-name">More Than You Know</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// <div className="probaslike">
// <div alt="imagedragon" className="probaslike__slika" />
// </div>

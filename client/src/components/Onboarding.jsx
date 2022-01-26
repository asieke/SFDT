import React, { useState, useEffect } from 'react';

const IMAGES = [
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643215301/thumbs/pic1_h4dvza.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643216225/thumbs/pic2_c8phdy.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643216323/thumbs/pic3_ursgid.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643216632/thumbs/pic4_tx64tz.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643218078/thumbs/pic5_ebffkj.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643218158/thumbs/pic6_ritzc3.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643218428/thumbs/pic8_s5wy2y.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643218261/thumbs/pic7_ndqobz.jpg',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643218358/thumbs/pic9_nih2im.png',
  'https://res.cloudinary.com/dkit4ixkx/image/upload/c_fill,h_256,w_256/v1643218604/thumbs/pic10_fypvom.png',
];

const Onboarding = ({ next }) => {
  const [slide, setSlide] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [scrollTop, setScrollTop] = useState(0);

  const animate = (i) => {
    let temp = [...slide];
    temp[i] = 1;
    setSlide(temp);
  };

  function trackScrolling() {
    console.log(window.pageYOffset);

    if (window.pageYOffset > 0 && slide[0] === 0) animate(0);
    if (window.pageYOffset > 250 && slide[1] === 0) animate(1);
    if (window.pageYOffset > 500 && slide[2] === 0) animate(2);
    if (window.pageYOffset > 750 && slide[3] === 0) animate(3);
    if (window.pageYOffset > 1000 && slide[4] === 0) animate(4);
    if (window.pageYOffset > 1250 && slide[5] === 0) animate(5);
    if (window.pageYOffset > 1500 && slide[6] === 0) animate(6);
    if (window.pageYOffset > 1750 && slide[7] === 0) animate(7);
    if (window.pageYOffset > 2000 && slide[8] === 0) animate(8);
    if (window.pageYOffset > 2250 && slide[9] === 0) animate(9);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', trackScrolling);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', trackScrolling);
    };
  });

  return (
    <div className='bg-grad flex flex-col bg-grey-line overflow-hidden rounded-xl bg-slate-700 mx-20 my-10 shadow-2xl shadow-slate-600/50 border-8 border-slate-600'>
      <div
        className='flex flex-col p-8 w-full items-center from-slate-700 bg-gradient-to-b'
        style={{ textShadow: '3px 3px 0 #333' }}
      >
        <h1 className='text-8xl font-bold text-center mt-10'>
          <span className='text-red-600'>Stop</span> F#@%ing
        </h1>
        <h1 className='text-8xl font-bold text-center mt-10'>Day Trading</h1>
        <div className='w-[200px] mt-10'>
          <img src='https://res.cloudinary.com/dkit4ixkx/image/upload/v1643158878/logo_r84qzf.svg' />
        </div>
        <svg
          className='animate-bounce w-16 h-16 text-slate-300 m-10'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='6'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
        </svg>
      </div>

      {/* --------- SECTION 1 --------- */}
      <div className='w-full flex flex-row-reverse mb-20'>
        <div className='rightSection w-[90%] flex flex-row' slide={slide[0]}>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[0]} className='rounded-full' />
            </div>
          </div>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 flex-col -ml-[80px] '>
            <div className='ml-[90px] p-5 '>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>What is Day Trading?</p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                Day trading is a form of speculation in securities in which a trader buys <br />
                and sells a financial instrument within the same trading day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 2 --------- */}
      <div className='w-full flex flex-row mb-20'>
        <div className='leftSection w-[90%] flex flex-row' slide={slide[1]}>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 -mr-[80px]'>
            <div className='mr-[90px] p-5 text-right'>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>When did Day Trading Start?</p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                Day trading became very popular in the late 90s and early 2000s <br />
                People quit their jobs to gamble on stocks like <b>Yahoo! and Pets.com</b>
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[1]} className='rounded-full' />
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 3 --------- */}
      <div className='w-full flex flex-row-reverse mb-20'>
        <div className='rightSection w-[90%] flex flex-row' slide={slide[2]}>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[2]} className='rounded-full' />
            </div>
          </div>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 flex-col -ml-[80px] '>
            <div className='ml-[90px] p-5 '>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>
                Dot Com Bubble Pops & 2008 Recession
              </p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                After two generation recession in less than a decade, people slowly begin
                <br />
                to realize that maybe.. daily stock trading is just <b>legalized gambling</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 4 --------- */}
      <div className='w-full flex flex-row mb-20'>
        <div className='leftSection w-[90%] flex flex-row' slide={slide[3]}>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 -mr-[80px]'>
            <div className='mr-[90px] p-5 text-right'>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>
                Index Funds and Passive Investing
              </p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                It seemed like boring old index funds were becoming the hot new trend <br />
                following 2008. Companies like Vanguard started growing in popularity.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[3]} className='rounded-full' />
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 5 --------- */}
      <div className='w-full flex flex-row-reverse mb-20'>
        <div className='rightSection w-[90%] flex flex-row' slide={slide[4]}>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[4]} className='rounded-full' />
            </div>
          </div>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 flex-col -ml-[80px] '>
            <div className='ml-[90px] p-5 '>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>What is Passive Investing?</p>
              <p className='text-sm text-slate-600 mb-2 font-thin'>
                Markets are very efficient, meaning that it is hard to guess whether a stock will go
                up or down.
                <br />
                Passive investing is investing <b>without trying to time the market</b>. Dollar cost
                averaging is a passive
                <br />
                technique where you buy a small amount of a stock each day/week/month.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 6 --------- */}
      <div className='w-full flex flex-row mb-20'>
        <div className='leftSection w-[90%] flex flex-row' slide={slide[5]}>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 -mr-[80px]'>
            <div className='mr-[90px] p-5 text-right'>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>Why are markets efficient?</p>
              <p className='text-sm text-slate-600 mb-2 font-thin'>
                With so many sophisticated market participants, its impossible to find an edge that
                can
                <br />
                reliably outperform the market. Even professionals are terrible at picking stocks.
                <br />A <b>monkey throwing darts</b> at a list of stocks will outperform 80% of
                professionals.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[5]} className='rounded-full' />
            </div>
          </div>
        </div>
      </div>
      {/* --------- SECTION 7 --------- */}
      <div className='w-full flex flex-row-reverse mb-20'>
        <div className='rightSection w-[90%] flex flex-row' slide={slide[6]}>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[6]} className='rounded-full' />
            </div>
          </div>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 flex-col -ml-[80px] '>
            <div className='ml-[90px] p-5 '>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>Enter Crypto and Robinhood</p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                People soon began to get tired of boring old passive investing. It certainly
                <br />
                didn't help that covid locked millions of people in their homes for a year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 8 --------- */}
      <div className='w-full flex flex-row mb-20'>
        <div className='leftSection w-[90%] flex flex-row' slide={slide[7]}>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 -mr-[80px]'>
            <div className='mr-[90px] p-5 text-right'>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>The (false) Promise of GAINZ</p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                Brokages like <b>Robinhood</b> began aggressively advertising. They promise that
                <br />
                their free stock trading apps will turn you into a multi millionaire!
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[7]} className='rounded-full' />
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 9 --------- */}
      <div className='w-full flex flex-row-reverse mb-20'>
        <div className='rightSection w-[90%] flex flex-row' slide={slide[8]}>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600 '>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[8]} className='rounded-full' />
            </div>
          </div>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 flex-col -ml-[80px] '>
            <div className='ml-[90px] p-5 '>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>WallStreetBets YOLO</p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                Internet forums like <b>/r/wallstreetbets</b> and discord fuel the mania
                <br />
                Millions think they can be the next <b>u/deepfuckingvalue</b> and make $$$
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- SECTION 10 --------- */}
      <div className='w-full flex flex-row mb-20'>
        <div className='leftSection w-[90%] flex flex-row' slide={slide[9]}>
          <div className='bg-slate-300 flex-grow shadow-md shadow-slate-500 -mr-[80px]'>
            <div className='mr-[90px] p-5 text-right'>
              <p className='text-2xl text-slate-700 mb-3 font-bold'>What can you do?</p>
              <p className='text-lg text-slate-600 mb-2 font-thin'>
                Easy! Stop giving money to these terrible legalized casinos. Go buy <br />
                some boring old index funds or open an account at Vanguard.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center z-10 rounded-full h-[160px] w-[160px] bg-red-600 shadow-lg shadow-slate-600'>
            <div className='bg-slate-400 rounded-full h-[120px] w-[120px]'>
              <img src={IMAGES[9]} className='rounded-full' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-row mb-20 justify-center'>
        <div className='w-[80%] flex flex-col bg-slate-300 p-8 rounded-xl text-center items-center shadow-lg shadow-slate-600'>
          <h1 className='text-3xl text-slate-800 font-bold'>
            Still think you can beat the market??
          </h1>
          <p className='text-l text-slate-600 mt-4 font-light'>
            You will have 1:00 to day trade a random stock from our database.
          </p>
          <p className='text-l text-slate-600 mt-4 font-light'>
            You simulated trading will take place over a random 3-month period from the past 5 years
          </p>
          <p className='text-l text-slate-600 mt-4 font-light'>
            After you finish, you can see how you and others have fared
          </p>
          <button
            onClick={next}
            className='p-4 bg-red-700  w-[50%] rounded-l mt-5 hover:bg-red-800'
          >
            I want to try to beat the market!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

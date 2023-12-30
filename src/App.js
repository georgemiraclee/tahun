import "./App.css";
import React from "react";
import Popup from "reactjs-popup";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { FullPage, Slide } from "react-full-page";
import NYpic from "./newyearpic.png";
import SocDis from "./socdis.png";
import Sad from "./sad.png";
import Discipline from "./health.png";
import Holiday from "./holiday.png";
import Me from "./creator.jpeg";

const tahunbaru = "Jan 1 2024";
const remaining = () => {
  const difference = new Date(tahunbaru) - new Date();

  let timeLeft = false;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
function WIB() {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const closeModal = () => setOpen(false);

  const WIB =
    new Date(tahunbaru + "UTC+7").getTime() ===
    new Date(Math.floor(+new Date() / 600000) * 600000).getTime();
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (WIB === true && opened === false) {
        setOpen(true);
        setOpened(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <h1 className="header">MEMASUKI TAHUN BARU 2024 DI WILAYAH WIB</h1>
          <img
            width="100%"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Timezones2008_UTC%2B7_gray.png/1200px-Timezones2008_UTC%2B7_gray.png"
            alt="Wilayah Waktu Indonesia Barat dalam peta"
          />
          <p className="content">
            dan juga untuk Jakarta, Indonesia 🇮🇩, serta seluruh wilayah UTC+7️
          </p>
          <button type="button" className="okmodal" onClick={closeModal}>
            OK
          </button>
        </div>
      </Popup>
    </div>
  );
}


function useToggle(initialValue = true) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function Chat() {
  const [isHidden, toggleIsHidden] = useToggle();
  return (
    <>
      <div id="tlkcont" className={isHidden ? "hidden" : null}>
        <iframe
          title="Chat"
          src="https://minnit.chat/tahunbaruan?embed&&nickname="
          style={{
            border: "none",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <div className="fab">
        <Fab
          color="primary"
          aria-label="chat"
          variant="extended"
          onClick={toggleIsHidden}
        >
          <ChatIcon />
          <p className="fab-text">Public Chat</p>
        </Fab>
      </div>
    </>
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Ucapan() {
  const { width, height } = useWindowSize();
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        inset: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Confetti
        width={width}
        height={height}
        opacity="0.7"
        recycle={false}
        numberOfPieces="500"
        tweenDuration="7000"
      />
      <div className="NYpic">
        <img
          width="100%"
          src={NYpic}
          alt="Girl with baloon and 2024 numbers floating around indicating hope for this year"
        ></img>
      </div>
      <div className="selamat">
        <h2>SELAMAT TAHUN BARU 2024!!</h2>
        <p className="more">scroll for more..</p>
      </div>
    </div>
  );
}

function Katakata1() {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="NYpic">
        <img
          width="100%"
          src={SocDis}
          alt="People walking around with masker, social distancing"
        ></img>
      </div>
      <div className="selamat">
        <h2>Tahun lalu adalah tahun yang berat</h2>
        <p>
        Tahun lalu memberikan sejumlah tantangan, namun bersama-sama kita berhasil mengatasi cobaan tersebut. Di tahun 2024, mari kita hadapi masa depan dengan semangat baru. Setiap langkah kecil yang kita ambil, setiap usaha yang kita berikan, memiliki potensi untuk membangun diri kita menjadi lebih maju. 
        </p>
      </div>
    </div>
  );
}

function Katakata2() {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="NYpic">
        <img width="100%" src={Sad} alt="woman with sad face"></img>
      </div>
      <div className="selamat">
        <h2>Jangan larut dalam masalah</h2>
        <p>
          Setiap orang pasti suatu masalah yang harus diselesaikan. Mengamati
          dan belajar hal baru dari sekeliling kita dapat membantu kita dalam
          menyelesaikan masalah kita saat ini ataupun masalah yang akan datang.
        </p>
      </div>
    </div>
  );
}

function Katakata3() {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="NYpic">
        <img width="100%" src={Discipline} alt="man do pushups"></img>
      </div>
      <div className="selamat">
        <h2>Lakukan kebiasaan baik mulai sekarang</h2>
        <p>
          Coba mulai lakukan hal yang positif minimal untuk diri sendiri.
          Sekecil apapun kebiasaan positif yang kita lakukan, pasti akan
          memiliki efek yang besar untuk masa depan kita.
        </p>
      </div>
    </div>
  );
}

function Katakata4() {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="NYpic">
        <img width="100%" src={Holiday} alt="man do pushups"></img>
      </div>
      <div className="selamat">
        <h2>Beri ruang rehat untuk introspeksi</h2>
        <p>
          Rencana, lakukan, evaluasi. Siklus inilah yang dilakukan setiap orang
          hebat agar berkembang. Jangan sampai kita salah langkah namun tetap
          merasa aman karena kita tidak pernah mengevaluasi diri kita.
        </p>
      </div>
    </div>
  );
}

function Katakata5() {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="NYpic">
          <img
            className="creator"
            width="100%"
            src={Me}
            alt="Creator of this site, Jhagas"
          ></img>
        </div>
        <div className="selamat">
          <h3>
            Selamat Tahun Baru 2024
          </h3>
          <p>George Miracle Theophylus</p>
        </div>
      </div>
      <div className="about sticky">
        <p>
         @2024 | George Miracle
        </p>
      </div>
    </>
  );
}

function Tahunbaru() {
  return (
    <FullPage>
      <Slide>
        <Ucapan />
      </Slide>
      <Slide>
        <Katakata1 />
      </Slide>
      <Slide>
        <Katakata2 />
      </Slide>
      <Slide>
        <Katakata3 />
      </Slide>
      <Slide>
        <Katakata4 />
      </Slide>
      <Slide>
        <Katakata5 />
      </Slide>
    </FullPage>
  );
}

function About() {
  return (
    <div className="about">
      <h5>New Year Countdown Website</h5>
      <p>
        @2024 | George Miracle
      </p>
    </div>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(remaining());
    }, 1000);
    const loading = async function loading() {
      await sleep(2000);
      setLoading(false);
    };
    loading();
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return (
      <div className="All">
        <h1>Sabar ya loading..</h1>
      </div>
    );
  }

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds <= 10
  ) {
    return (
      <div className="All">
        <div
          className="flex-container"
          style={{
            display: "flex",
            margin: "auto",
          }}
        >
          <h1
            style={{
              fontSize: "5em",
            }}
          >
            {timeLeft.seconds}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      {timeLeft ? (
        <>
          <div className="All">
            <h1>TAHUN BARU TINGGAL</h1>
            <div
              className="flex-container"
              style={{
                display: "flex",
                margin: "auto",
              }}
            >
              <div className="box days">
                <h1>{timeLeft.days}</h1>
                <h3>hari</h3>
              </div>
              <span>:</span>
              <div className="box hours">
                <h1>{timeLeft.hours}</h1>
                <h3>jam</h3>
              </div>
              <span>:</span>
              <div className="box minutes">
                <h1>{timeLeft.minutes}</h1>
                <h3>menit</h3>
              </div>
              <span>:</span>
              <div className="box seconds">
                <h1>{timeLeft.seconds}</h1>
                <h3>detik</h3>
              </div>
            </div>
          </div>
          <WIB />
          <Chat />
          <About />
        </>
      ) : (
        <Tahunbaru />
      )}
    </>
  );
}


function App() {
  return (
    <>
      <Countdown />
    </>
  );
}

export default App;

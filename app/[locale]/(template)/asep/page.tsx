"use client";
import "@/styles/snap.scss";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { LazyMotion, domAnimation, useInView, motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  cn,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  DoubleChevronUp,
  InstagramIcon,
  SpeakerMuted,
  SpeakerUnmuted,
} from "@/components/icons";
import Comments from "@/components/Comments";
import { analogue } from "@/app/fonts";
import useCountDown from "@/hooks/useCountDown";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="snap-child p-8 text-4xl font-bold">
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const CountDown = () => {
  const countdown = useCountDown({ dueDate: "2024-03-15T10:00:00" });
  return (
    <div className="mt-8 flex justify-center items-center">
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.days || "0"}</div>
        <p className="text-sm">Days</p>
      </div>
      <Divider orientation="vertical" className="mx-4 bg-white" />
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.hours || "0"}</div>
        <p className="text-sm">Hours</p>
      </div>
      <Divider orientation="vertical" className="mx-4 bg-white" />
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.minutes || "0"}</div>
        <p className="text-sm">Min</p>
      </div>
      <Divider orientation="vertical" className="mx-4 bg-white" />
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.seconds || "0"}</div>
        <p className="text-sm">Sec</p>
      </div>
    </div>
  );
};

const HeroPage = () => {
  const imageList: any[] = [
    "https://groovepublic.com/wp-content/uploads/2023/10/blog-olive6.jpg",
    "https://groovepublic.com/wp-content/uploads/2023/10/blog-olive12.jpg",
    "https://groovepublic.com/wp-content/uploads/2023/10/blog-olive13.jpg",
  ];

  return (
    <section className="relative">
      <Fade duration={2000} arrows={false}>
        {imageList.map((source, i) => (
          <div key={i} className="w-full h-screen">
            <Image
              src={source}
              fill
              className="object-cover object-center"
              alt="oke"
              unoptimized
            />
          </div>
        ))}
      </Fade>
      <div className="absolute w-full h-screen top-0 z-[1] text-white/80 linear-white-bg flex flex-col items-center justify-end">
        <div className="p-8 pb-16 text-center">
          <CountDown />
          <div className="mt-8 mb-12 animate-bounce">
            <div className="mx-auto w-fit mb-3">
              <DoubleChevronUp />
            </div>
            <p className="uppercase text-sm font-light">Sweep up</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoupleSection = () => {
  return (
    <div className="bg-[#fff8f1] w-full">
      <div>Ini Couple section</div>
    </div>
  );
};

const GroomSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="snap-child relative">
      <Image
        src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/1-ae6_GxKE9.jpg"
        alt="groom"
        fill
        className="object-cover object-center"
        unoptimized
      />
      <div className="absolute top-0 w-full h-screen bg-black/40 text-white/80 flex flex-col justify-end">
        <div ref={ref} className="p-8">
          <motion.p
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className="uppercase text-sm font-light"
          >
            The Groom
          </motion.p>

          <motion.p
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.45s",
            }}
            className="text-2xl uppercase font-bold my-2"
          >
            Kevin Atmaja
          </motion.p>

          <motion.p
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
            className="text-sm font-light"
          >
            Kevin, an attorney by profession, exudes a quiet demeanor
            complemented by a profound attentiveness towards his partner and
            those around him. As Fanesha`s groom, he embodies a gentle strength
            and a heartfelt dedication, always there to support and cherish his
            loved ones in every moment. His considerate nature and unwavering
            presence make him a steady anchor in the lives of those he holds
            dear.
          </motion.p>

          <motion.div
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
            className="flex gap-2 items-center mt-3"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <p className="text-sm font-light">@kevinatmj</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BrideSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="snap-child relative">
      <Image
        src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/11-dxbkvv1fq.jpg"
        alt="groom"
        fill
        className="object-cover object-center"
        unoptimized
      />
      <div className="absolute top-0 w-full h-screen bg-black/40 text-white/80 flex flex-col justify-end">
        <div ref={ref} className="p-8">
          <motion.p
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className="uppercase text-sm font-light"
          >
            The Bride
          </motion.p>

          <motion.p
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.45s",
            }}
            className="text-2xl uppercase font-bold my-2"
          >
            Fanesha Halim
          </motion.p>

          <motion.p
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
            className="text-sm font-light"
          >
            Fanesha, a teacher specializing in young children, emanates a gentle
            and talkative nature that lights up any room. As Kevin`s bride, she
            brings forth warmth and an easygoing charm, effortlessly engaging
            with others through her kind-heartedness and her penchant for
            conversation. Her nurturing demeanor and lively spirit create an
            inviting and loving atmosphere, weaving joy and connection into the
            lives of those around her.
          </motion.p>

          <motion.div
            style={{
              y: isInView ? 0 : 10,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
            className="flex gap-2 items-center mt-3"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <p className="text-sm font-light">@vaneshh</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Opener = ({ playAudio }: { playAudio: () => void }) => {
  const { isOpen, onOpenChange } = useDisclosure();
  const imgUrl =
    "https://groovepublic.com/wp-content/uploads/2023/10/blog-olive12.jpg";
  return (
    <Modal
      isOpen={!isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      size="full"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0,
              ease: "easeOut",
            },
          },
          exit: {
            y: "-90%",
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          },
        },
      }}
      classNames={{
        body: "p-0 animate-slide-bottom",
        wrapper: "bg-black",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="w-full h-full relative">
              <Image
                src={imgUrl}
                fill
                alt="hero"
                className="object-center object-cover"
                priority
                unoptimized
              />
              <div className="absolute z-10 w-full h-full flex flex-col justify-between items-center px-4 py-32 bg-black/40 text-white/80 text-center">
                <div>
                  <p className="uppercase text-sm font-light">
                    Wedding Invitation
                  </p>
                  <h1
                    className={cn(analogue.className, {
                      "text-4xl md:text-6xl tracking-wide mt-3": true,
                    })}
                  >
                    Alvin & Shelly
                  </h1>
                </div>
                <div>
                  <p className="text-sm font-light">Kepada Yth</p>
                  <p className="text-xl font-bold py-4">Nama Tamu</p>
                  <p className="text-[10px] font-light">
                    Mohon maaf apabila ada kesalahan dalam penulisan nama &
                    gelar
                  </p>
                  <Button
                    radius="sm"
                    className="text-white font-light bg-black/80 tracking-wider mt-8"
                    onPress={() => {
                      onClose();
                      playAudio();
                    }}
                  >
                    BUKA UNDANGAN
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const LeftHeroFixed = () => {
  const imgUrl =
    "https://groovepublic.com/wp-content/uploads/2023/10/blog-olive7.jpg";
  return (
    <div
      className="fixed top-0 h-screen hidden md:block w-[calc(100vw-510px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="relative w-full h-full flex items-end">
        <video
          src="https://groovepublic.com/wp-content/uploads/2023/01/flars-online-video-cutter.com_.mp4"
          muted
          autoPlay
          playsInline
          loop
          className="absolute top-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="p-8 mt-auto text-white z-10">
          <div>The Wedding Of</div>
          <h1
            className={cn(analogue.className, {
              "text-4xl tracking-wide py-2": true,
            })}
          >
            Alvin & Shelly
          </h1>
          <div>Sabtu, 15 November 2024</div>
        </div>
      </div>
    </div>
  );
};

const AudioSection = forwardRef((props, ref) => {
  const audioUrl =
    "https://groovepublic.com/wp-content/uploads/2023/10/y2mate.com-Sod-Ven-In-My-Imagination-Official-Video.mp3";

  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("myAudio") as HTMLAudioElement;

    const handleCanPlayThrough = () => {
      setAudioLoaded(true);
    };

    audioElement.addEventListener("canplaythrough", handleCanPlayThrough);

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        // Page is not visible (tab switched or window minimized)
        pauseAudio();
      } else {
        // Page is visible (tab gained focus)
        playAudio();
      }
    });

    return () => {
      audioElement.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  const pauseAudio = () => {
    const audioElement = document.getElementById("myAudio") as HTMLAudioElement;
    audioElement.pause();
    setAudioPlaying(false);
  };

  const playAudio = () => {
    const audioElement = document.getElementById("myAudio") as HTMLAudioElement;
    audioElement.play();
    setAudioPlaying(true);
  };

  useImperativeHandle(ref, () => ({
    playAudio,
  }));

  return (
    <>
      <audio
        id="myAudio"
        className="hidden"
        preload="auto"
        onEnded={pauseAudio}
      >
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      {audioLoaded && (
        <div className="fixed z-10 bottom-5 right-5">
          <Button
            isIconOnly
            className="bg-white/40 text-black/60"
            radius="full"
            size="sm"
            onClick={audioPlaying ? pauseAudio : playAudio}
          >
            {audioPlaying ? <SpeakerUnmuted /> : <SpeakerMuted />}
          </Button>
        </div>
      )}
    </>
  );
});

AudioSection.displayName = "AudioSection";

export default function AsepPage() {
  const audioRef = useRef(null);
  const playAudio = () => {
    // @ts-ignore
    audioRef.current?.playAudio();
  };
  return (
    <div>
      <Opener playAudio={playAudio} />
      <AudioSection ref={audioRef} />
      <LeftHeroFixed />
      <div className="w-full md:max-w-[510px] ml-auto md:pl-[0.3px]">
        <HeroPage />
        <CoupleSection />
      </div>
    </div>
  );
}

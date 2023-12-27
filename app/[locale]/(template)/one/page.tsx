"use client";
import {
  DoubleChevronUp,
  SpeakerMuted,
  SpeakerUnmuted,
} from "@/components/icons";
import useCountDown from "@/hooks/useCountDown";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { LazyMotion, domAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const BrideSection = () => {
  return (
    <div className="bg-[#4F4E48] w-full">
      <div>okenih</div>
    </div>
  );
};

const HeroPage = () => {
  const imageList: any[] = [
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/5-_MdxQNLha.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/7-yglleF64s.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/2-pA1V86N_W.jpg",
  ];

  const countdown = useCountDown({ dueDate: "2024-01-15T10:00:00" });
  return (
    <div className="w-full h-screen relative">
      <Fade duration={4000} arrows={false}>
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
      <div className="absolute w-full h-screen top-0 z-[1] text-white/80 bg-black/40 flex flex-col items-center justify-between">
        <div className="pt-12 p-8 text-center">
          <p className="text-sm font-light uppercase">The Wedding Of</p>
          <h2 className="text-2xl font-bold uppercase my-4">Fanesha & Kevin</h2>
          <p className="text-sm font-light">
            No one has ever seen God, but if we love one another, God lives in
            us and his love is made complete in us.
          </p>
        </div>
        <div className="pb-16 text-center w-full px-8">
          <div className="flex justify-between items-center w-full mx-auto max-w-sm">
            <div>
              <p className="text-2xl font-light">{countdown.days}</p>
              <p className="font-light">Day(s)</p>
            </div>
            <div>
              <p className="text-2xl font-light">{countdown.hours}</p>
              <p className="font-light">Hour(s)</p>
            </div>
            <div>
              <p className="text-2xl font-light">{countdown.minutes}</p>
              <p className="font-light">Minute(s)</p>
            </div>
            <div>
              <p className="text-2xl font-light">{countdown.seconds}</p>
              <p className="font-light">Second(s)</p>
            </div>
          </div>
          <div className="mt-4 mb-12 animate-bounce">
            <div className="mx-auto w-fit mb-3">
              <DoubleChevronUp />
            </div>
            <p className="uppercase text-sm font-light">
              Sweep up to see the love
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Opener = ({ playAudio }: { playAudio: () => void }) => {
  const { isOpen, onOpenChange } = useDisclosure();
  const imgUrl =
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/assets/aande-0130-S14AcdFdw.jpg";
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
        body: "p-0",
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
              <div className="w-full h-full absolute z-10 p-8 text-white/80 bg-black/40 text-center flex justify-end items-center flex-col">
                <div className="w-full h-[70vh] my-auto flex flex-col justify-between">
                  <div>
                    <p className="uppercase text-sm mb-5">
                      We invite you to our <br /> wedding ceremony
                    </p>
                    <h4 className="text-3xl font-semibold">Fanesha & Kevin</h4>
                  </div>
                  <div>
                    <p className="text-sm font-light mb-2">
                      Special Invitation:
                    </p>
                    <p className="font-semibold mb-5">Nama Tamu</p>
                    <Button
                      color="default"
                      variant="bordered"
                      radius="none"
                      className="text-white uppercase font-light tracking-wider"
                      onPress={() => {
                        onClose();
                        playAudio();
                      }}
                    >
                      Buka Undangan
                    </Button>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
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

const TemplateOne = () => {
  const { setTheme } = useTheme();
  setTheme("light");
  const audioRef = useRef(null);
  const playAudio = () => {
    // @ts-ignore
    audioRef.current?.playAudio();
  };
  return (
    <div>
      <Opener playAudio={playAudio} />
      <LazyMotion features={domAnimation}>
        <AudioSection ref={audioRef} />
        <HeroPage />
        <BrideSection />
      </LazyMotion>
    </div>
  );
};

export default TemplateOne;

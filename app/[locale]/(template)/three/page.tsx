"use client";
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

const HeroPage = () => {
  const imageList: any[] = [
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/5-_MdxQNLha.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/7-yglleF64s.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/2-pA1V86N_W.jpg",
  ];
  return (
    <section className="snap-child relative">
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
      <div className="absolute w-full h-screen top-0 z-[1] text-white/80 bg-black/40 flex flex-col items-center justify-end">
        <div className="p-8 pb-16 text-center">
          <p className="text-sm font-light uppercase">Fanesha & Kevin</p>
          <h2 className="text-2xl font-bold uppercase my-4">
            Ecclesiates 4:9-12
          </h2>
          <p className="text-sm font-light">
            Two are better than one because they have a good reward for their
            toil. For if they fall, one will lift up his fellow. But woe to him
            who is alone when he falls and has not another to lift him up!
            Again, if two lie together, they keep warm.
          </p>
          <div className="mt-16 animate-bounce">
            <div className="mx-auto w-fit mb-3">
              <DoubleChevronUp />
            </div>
            <p className="uppercase text-sm font-light">
              Sweep up to see the love
            </p>
          </div>
        </div>
      </div>
    </section>
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

const SectionOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const delay = 1.2;
  return (
    <section
      className="snap-child p-8 text-4xl font-bold flex justify-center
    items-center flex-col"
    >
      <div ref={ref}>
        <div className="overflow-hidden">
          <motion.div
            style={{
              y: isInView ? 0 : "100%",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          >
            Hello World!
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            style={{
              y: isInView ? 0 : "100%",
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
            }}
          >
            Hello World!
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Opener = ({ playAudio }: { playAudio: () => void }) => {
  const { isOpen, onOpenChange } = useDisclosure();
  const imgUrl =
    "https://alexandra.bridestory.com/images/dpr_1.0,f_auto,fl_progressive,q_80,c_fill,g_faces,w_1200/blogs/11--0lgyiGwt/pemotretan-pre-wedding-berlatar-alam-bali-yang-menenangkan-1.jpg";
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
              <div className="w-full h-full absolute z-10 p-8 pb-16 text-white/80 bg-black/40 text-center flex justify-end items-center flex-col">
                <div>
                  <p className="uppercase text-sm font-light">
                    Wedding Invitation
                  </p>
                  <h1 className="uppercase text-3xl font-extrabold py-3">
                    Fanesha & Kevin
                  </h1>
                  <p className="uppercase text-sm font-light">
                    SATURDAY, 20 AUGUST 2023
                  </p>
                </div>
                <div className="mt-24 mb-16">
                  <p className="uppercase text-sm font-light">Dear</p>
                  <p className="uppercase text-xl font-bold">Nama Tamu</p>
                </div>
                <Button
                  color="default"
                  variant="bordered"
                  radius="none"
                  className="text-white font-light tracking-wider"
                  onPress={() => {
                    onClose();
                    playAudio();
                  }}
                >
                  OPEN INVITATION
                </Button>
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

export default function TemplateThree() {
  const { setTheme } = useTheme();
  setTheme("light");
  const audioRef = useRef(null);
  const playAudio = () => {
    // @ts-ignore
    audioRef.current?.playAudio();
  };
  return (
    <div className="snap-parent">
      <Opener playAudio={playAudio} />
      <LazyMotion features={domAnimation}>
        <AudioSection ref={audioRef} />
        <HeroPage />
        <GroomSection />
        <BrideSection />
        <SectionOne />
        <Section>
          <Comments />
        </Section>
      </LazyMotion>
    </div>
  );
}

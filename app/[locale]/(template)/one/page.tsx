"use client";
import { laila } from "@/app/fonts";
import { SpeakerMuted, SpeakerUnmuted, Youtube } from "@/components/icons";
import useCountDown from "@/hooks/useCountDown";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ScrollShadow,
  Select,
  SelectItem,
  Textarea,
  cn,
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

const CommentSection = () => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [confirmation, setConfirmation] = useState("YES");
  const [totalGuest, setTotalGuest] = useState("1");

  const fetchComments = async () => {
    const res = await fetch(
      window.location.origin + "/api/comment?id=656fd880b2d14968a9df7bf7"
    );
    const data = await res.json();
    setComments(data);
  };

  const postComments = async () => {
    setLoading(true);
    const res = await fetch(window.location.origin + "/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
        confirmation,
        userId: "656fd880b2d14968a9df7bf7",
        totalGuest: parseInt(totalGuest),
      }),
    });
    const data = await res.json();
    setLoading(false);
    resetFields();
    fetchComments();
  };

  const resetFields = () => {
    setName("");
    setContent("");
    setConfirmation("YES");
    setTotalGuest("1");
  };

  React.useEffect(() => {
    fetchComments();
  }, []);
  return (
    <>
      <div className="p-6 pt-16">
        <h4
          className={cn(laila.className, {
            "font-medium text-2xl mb-2": true,
          })}
        >
          RSVP
        </h4>
        <p className="text-gray-500 text-sm">
          We would be incredibly honored by your presence at our celebration!
          Please confirm your attendance by filling out the reservation form
          below.
        </p>
      </div>
      <div>
        <div className="mb-2 flex flex-col gap-4">
          <Input
            size="sm"
            label="Nama"
            radius="none"
            value={name}
            onValueChange={setName}
          />

          <Select
            size="sm"
            label="Kehadiran"
            radius="none"
            selectedKeys={[confirmation]}
            onChange={(e: any) => setConfirmation(e.target.value)}
          >
            <SelectItem key={"YES"} value="YES">
              Hadir
            </SelectItem>
            <SelectItem key={"NO"} value="NO">
              Tidak Hadir
            </SelectItem>
          </Select>
          <Select
            size="sm"
            label="Jumlah Tamu"
            radius="none"
            selectedKeys={[totalGuest]}
            onChange={(e: any) => {
              setTotalGuest(e.target.value);
            }}
          >
            <SelectItem key={"1"} value={"1"}>
              1
            </SelectItem>
            <SelectItem key={"2"} value={"2"}>
              2
            </SelectItem>
            <SelectItem key={"3"} value={"3"}>
              3
            </SelectItem>
          </Select>
          <Textarea
            size="sm"
            label="Ucapan"
            radius="none"
            minRows={2}
            value={content}
            onValueChange={setContent}
          />
          <div className="text-center">
            <Button
              radius="none"
              color="primary"
              size="lg"
              className="px-10 text-sm uppercase"
              isDisabled={!name || !content}
              isLoading={loading}
              onClick={postComments}
            >
              Confirm
            </Button>
          </div>
        </div>
        <ScrollShadow className="mt-5 flex flex-col gap-2 max-h-[40vh] overflow-y-auto pb-8 px-6">
          {comments.map((comment: any) => {
            return (
              <div key={comment.id} className="bg-black/10">
                <div className="font-medium">{comment.name}</div>
                <div>{comment.content}</div>
                <div>Hadir: {comment.confirmation}</div>
              </div>
            );
          })}
        </ScrollShadow>
      </div>
    </>
  );
};

const BrideGroom = () => {
  return (
    <>
      <div className="bg-[url('/static/bg_pattern2.svg')] bg-cover bg-center-top pt-20">
        <div className="relative w-[216px] h-[242px]">
          <Image
            src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/assets/aande-0380-HyJDiOKOD.jpg"
            className="object-cover object-center"
            fill
            alt="groom"
          />
        </div>
        <div className="p-6">
          <p className="uppercase tracking-widest text-sm">The Groom</p>
          <h5
            className={cn(laila.className, {
              "font-bold text-3xl uppercase my-4": true,
            })}
          >
            Tonny Hartadi
          </h5>
          <p className="text-gray-500 text-sm">
            Tony, an attorney by profession, exudes a quiet demeanor
            complemented by a profound attentiveness towards his partner and
            those around him. As Felisya’s groom, he embodies a gentle strength
            and a heartfelt dedication, always there to support and cherish his
            loved ones in every moment. His considerate nature and unwavering
            presence make him a steady anchor in the lives of those he holds
            dear.
          </p>
        </div>
      </div>
      <div className="bg-[url('/static/bg_pattern3.svg')] bg-cover bg-center-top pt-12">
        <div className="relative w-[223px] h-[335px] mx-auto">
          <Image
            src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_350,c_fill,g_faces/v1/assets/aande-0338-rJVLo_KdP.jpg"
            alt="bride"
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="text-center my-6 font-medium text-sm">23.02.2023</p>
        <div className="relative w-[216px] h-[242px] ml-auto">
          <Image
            src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_800,c_fill,g_faces/v1/assets/aande-0144-rywA9uKOP.jpg"
            alt="bride 2"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-6">
          <p className="uppercase tracking-widest text-sm">The Bride</p>
          <h5
            className={cn(laila.className, {
              "font-bold text-3xl uppercase my-4": true,
            })}
          >
            FELISYA HUTAMI
          </h5>
          <p className="text-gray-500 text-sm">
            Fanesha, a teacher specializing in young children, emanates a gentle
            and talkative nature that lights up any room. As Kevin's bride, she
            brings forth warmth and an easygoing charm, effortlessly engaging
            with others through her kind-heartedness and her penchant for
            conversation. Her nurturing demeanor and lively spirit create an
            inviting and loving atmosphere, weaving joy and connection into the
            lives of those around her.
          </p>
        </div>
      </div>
      <div className="bg-[url('https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/assets/aande-0273-SkCrsuK_D.jpg')] bg-contain bg-no-repeat bg-bottom">
        <div className="w-full h-full bg-gradient-to-b from-white/0 to-[#5B5B5B]/70 p-6 pb-32">
          <div className="bg-[#312C28]/70 text-white/90 px-4 pt-16 pb-8">
            <h5
              className={cn(laila.className, {
                "font-bold text-3xl uppercase mb-6": true,
              })}
            >
              Love Story
            </h5>
            <p className="text-sm font-medium mb-4">JAKARTA, 21 AUGUST 2019</p>
            <p className="text-sm font-light mb-4">
              Pertama kali ketemu Tony, consec teturadi pis cing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="text-sm font-medium mb-4">
              JAKARTA, 29 SEBTEMBER 2021
            </p>
            <p className="text-sm font-light mb-4">
              Pertama kali ketemu Tony, consec teturadi pis cing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="text-sm font-medium mb-4">
              JAKARTA, 29 SEBTEMBER 2021
            </p>
            <p className="text-sm font-light mb-4">
              Pertama kali ketemu Tony, consec teturadi pis cing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 px-8 text-center">
        <div>
          <p className="text-lg mb-2">Holy Matrimony</p>
          <p className="font-medium text-lg">09.00-10.00 AM</p>
          <p className="font-medium text-lg mb-4">Sunday, 20 February 2023</p>
          <h4
            className={cn(laila.className, {
              "font-bold text-3xl uppercase mb-2": true,
            })}
          >
            HKBP Mutiara
          </h4>
          <p className="text-sm">
            Jl. Mutiara II No.26 10, RT.5/RW.10, Kayu Putih,
            <br /> Kec. Pulo Gadung, Kota Jakarta Timur
          </p>
          <div className="border-t border-b border-[#3D342D] grid grid-cols-2 mt-8">
            <div className="py-2">
              <p className="font-medium text-lg">Google Maps</p>
              <p className="text-sm text-gray-500">Directions</p>
            </div>
            <div className="py-2 border-l border-[#3D342D]">
              <p className="font-medium text-lg">Save The Date</p>
              <p className="text-sm text-gray-500">Calendar</p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-lg mb-2">Reception</p>
          <p className="font-medium text-lg">09.00-10.00 AM</p>
          <p className="font-medium text-lg mb-4">Sunday, 20 February 2023</p>
          <h4
            className={cn(laila.className, {
              "font-bold text-3xl uppercase mb-2": true,
            })}
          >
            Grand Hotel
          </h4>
          <p className="text-sm">
            Jl. Mutiara II No.26 10, RT.5/RW.10, Kayu Putih,
            <br /> Kec. Pulo Gadung, Kota Jakarta Timur
          </p>
          <div className="border-t border-b border-[#3D342D] grid grid-cols-2 mt-8">
            <div className="py-2">
              <p className="font-medium text-lg">Google Maps</p>
              <p className="text-sm text-gray-500">Directions</p>
            </div>
            <div className="py-2 border-l border-[#3D342D]">
              <p className="font-medium text-lg">Save The Date</p>
              <p className="text-sm text-gray-500">Calendar</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-6">
          <h4
            className={cn(laila.className, {
              "font-medium text-2xl mb-2": true,
            })}
          >
            Live Streaming
          </h4>
          <p className="text-gray-500 text-sm">
            We also plan to publish our marriage virtually via the Youtube
            platform which you can follow via the following link
          </p>
        </div>
        <div className="relative">
          <Image
            src="https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/assets/aande-0083-HJpd9_FdP.jpg"
            width={390}
            height={585}
            className="w-full"
            alt=""
          />
          <div className="absolute top-0 flex flex-col justify-end w-full h-full pb-16 text-center text-white/80 bg-gradient-to-b from-white/0 to-[#5B5B5B]/70">
            <p className="text-lg mb-2">Holy Matrimony</p>
            <p className="font-medium text-lg">09.00-10.00 AM</p>
            <p className="font-medium text-lg">Sunday, 20 February 2023</p>
            <div>
              <Button
                color="default"
                variant="bordered"
                radius="none"
                size="lg"
                className="text-white bg-black/20 uppercase font-light tracking-wider text-sm mt-6"
                startContent={<Youtube />}
              >
                JOIN NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CommentSection />
    </>
  );
};

const Opener = ({ playAudio }: { playAudio: () => void }) => {
  const { isOpen, onOpenChange } = useDisclosure();
  const imgUrl =
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/assets/aande-0173-rJpgiOK_v.jpg";

  const countdown = useCountDown({ dueDate: "2024-01-15T10:00:00" });
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
              <div className="w-full h-full absolute z-10 text-white/80 text-center flex justify-end items-center flex-col pb-32 bg-gradient-to-b from-black/20 to-black/50">
                <div className="max-w-xs mx-auto">
                  <p className="uppercase text-sm font-light">The Wedding of</p>
                  <h4
                    className={cn(laila.className, {
                      "font-bold text-3xl my-4": true,
                    })}
                  >
                    Tony & Felisya
                  </h4>
                  <p className="text-sm font-light">
                    No One as ever seen God. But we love one another, God lives
                    in us and his love is made complete in us.{" "}
                  </p>
                </div>
                <div className="mt-8 flex justify-center items-center">
                  <div className="py-1 min-w-[40px]">
                    <div className="text-2xl font-bold">
                      {countdown?.days || "0"}
                    </div>
                    <p className="text-sm">Days</p>
                  </div>
                  <Divider orientation="vertical" className="mx-4 bg-white" />
                  <div className="py-1 min-w-[40px]">
                    <div className="text-2xl font-bold">
                      {countdown?.hours || "0"}
                    </div>
                    <p className="text-sm">Hours</p>
                  </div>
                  <Divider orientation="vertical" className="mx-4 bg-white" />
                  <div className="py-1 min-w-[40px]">
                    <div className="text-2xl font-bold">
                      {countdown?.minutes || "0"}
                    </div>
                    <p className="text-sm">Min</p>
                  </div>
                  <Divider orientation="vertical" className="mx-4 bg-white" />
                  <div className="py-1 min-w-[40px]">
                    <div className="text-2xl font-bold">
                      {countdown?.seconds || "0"}
                    </div>
                    <p className="text-sm">Sec</p>
                  </div>
                </div>
                <div className="bg-black/40 w-full py-6 mt-8">
                  <p className="text-sm font-light mb-2">
                    You've been invited!
                  </p>
                  <p className="font-semibold uppercase tracking-widest">
                    Ivan Rozak
                  </p>
                </div>
                <Button
                  color="default"
                  variant="bordered"
                  radius="none"
                  size="lg"
                  className="text-white bg-black/20 uppercase font-light tracking-wider text-sm mt-8"
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
        <div className="bg-[#FAF1EA] text-[#3D342D]">
          <BrideGroom />
        </div>
      </LazyMotion>
    </div>
  );
};

export default TemplateOne;

'use client'
import {
  CSSProperties,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useInView } from 'framer-motion'
import {
  Button,
  cn,
  Input,
  Link,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from '@nextui-org/modal'
import Image from 'next/image'
import 'react-slideshow-image/dist/styles.css'
import { InstagramIcon, SpeakerMuted, SpeakerUnmuted } from '@/components/icons'
import { ivy, signature, usic } from '@/app/fonts'
import useCountDown from '@/hooks/useCountDown'
import { useSearchParams } from 'next/navigation'
import { fetchComments, postComment } from '@/lib/useComments'
import { Comment } from '@/types'
import { formatDateTime } from '@/lib/formatdate'
import { copyToClipboard } from '@/lib/utils'

const Opener = ({ playAudio }: { playAudio: () => void }) => {
  const { isOpen, onOpenChange } = useDisclosure()

  const searchParams = useSearchParams()
  const user = searchParams.get('u')
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
              ease: 'easeOut',
            },
          },
          exit: {
            y: '-90%',
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: 'easeIn',
            },
          },
        },
      }}
      classNames={{
        body: 'p-0 animate-slide-bottom',
        wrapper: 'bg-black',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="w-full h-full relative">
              <Image
                src={'/reza/S7.jpeg'}
                fill
                alt="hero"
                className="object-center object-cover"
                priority
                unoptimized
              />
              <div className="absolute z-10 w-full h-full flex flex-col justify-between items-center px-4 py-32 bg-black/40 text-white/80 text-center">
                <div>
                  <p className="uppercase text-xs font-light">The Wedding of</p>
                  <h1
                    className={cn(
                      usic.className,
                      'text-4xl md:text-6xl tracking-wide mt-3 mb-1 uppercase',
                    )}
                  >
                    Anita & Reza
                  </h1>
                  <p className="uppercase text-xs font-light">
                    Rabu, 09 April 2025
                  </p>
                </div>
                <div>
                  <p className="text-sm font-light">Dear,</p>
                  <p className="text-xl font-medium py-4">
                    {user || 'Nama Tamu'}
                  </p>
                  <p className="text-[10px] font-light">
                    Kami mohon maaf atas ketidaksesuaian dalam penulisan nama
                    dan gelar
                  </p>
                  <Button
                    radius="none"
                    className="text-white font-light bg-black/80 tracking-wider mt-8"
                    size="sm"
                    onPress={() => {
                      onClose()
                      playAudio()
                    }}
                  >
                    OPEN INVITATION
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

const CountDown = () => {
  const countdown = useCountDown({ dueDate: '2025-04-07T08:00:00' })
  return (
    <div
      className={cn(
        ivy.className,
        'mt-8 flex flex-col justify-center items-center tracking-wider w-full h-full bg-black/50 text-white/90',
      )}
    >
      <p
        className={cn(
          usic.className,
          'text-2xl text-center px-8 tracking-wide mb-4',
        )}
      >
        ALMOST TIME FOR OUR CELEBRATION
      </p>
      <div className="flex text-center gap-6">
        <div>
          <div className="text-xl font-bold">{countdown?.days || '0'}</div>
          <p className="text-xs">Day(s)</p>
        </div>

        <div>
          <div className="text-xl font-bold">{countdown?.hours || '0'}</div>
          <p className="text-xs">Hour(s)</p>
        </div>

        <div>
          <div className="text-xl font-bold">{countdown?.minutes || '0'}</div>
          <p className="text-xs">Min(s)</p>
        </div>

        <div>
          <div className="text-xl font-bold">{countdown?.seconds || '0'}</div>
          <p className="text-xs">Sec(s)</p>
        </div>
      </div>
    </div>
  )
}

const HeroPage = () => {
  const searchParams = useSearchParams()
  const user = searchParams.get('u')
  return (
    <section className="relative w-full h-[90vh] bg-[url('/reza/S1.jpeg')] bg-cover bg-center">
      <div className="w-full h-full bg-black/30 pt-8 pb-14 px-6 flex flex-col justify-between text-white/80">
        <div className="flex justify-between text-[10px] leading-3">
          <p>
            SAVE THE DATE <br /> FOR THE WEDDING OF
          </p>
          <p>{user || 'NAMA TAMU'}</p>
        </div>
        <div>
          <p
            className={cn(
              usic.className,
              'text-5xl md:text-6xl tracking-wide mb-6',
            )}
          >
            ANITA & <br /> REZA
          </p>
          <div className="inline-flex w-full items-center text-xs uppercase gap-4">
            <p className="flex-none">09 April</p>
            <hr className="w-full border-t border-white/50" />
            <p>2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const CoupleSection = () => {
  const ref0 = useRef(null)
  const isInView0 = useInView(ref0, { once: true })
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  return (
    <section className="px-6 py-20 text-white/90 flex flex-col gap-20">
      <div className="text-center">
        <p className={cn(signature.className, 'text-2xl')}>Qs. Ar Rum 21</p>
        <p className="font-light text-xs mt-4 leading-6 italic">
          Glory be to Allah who has created humans in pairs. By asking for the
          Grace and Ridho of Allah SWT, we intend to invite you to our wedding
          reception.
        </p>
      </div>
      <div className="text-center">
        <p className={cn(ivy.className, 'text-3xl tracking-wide leading-7')}>
          Redza Assidqi
        </p>
        <div className="relative aspect-square mx-auto w-[200px] my-6">
          <div
            ref={ref0}
            className={cn('w-full h-full absolute delay-500', {
              'animate-in-reverse': isInView0,
            })}
            style={{ '--index': 6 } as CSSProperties}
          >
            <Image
              src="/reza/reza.jpeg"
              fill
              className="object-center object-cover"
              alt="redza"
            />
            <div className="w-full h-full bg-black/20 absolute"></div>
          </div>
          <p
            className={cn(
              signature.className,
              'text-3xl absolute -bottom-2 -left-6 delay-500',
              {
                'animate-in': isInView0,
              },
            )}
            style={{ '--index': 7 } as CSSProperties}
          >
            Reza
          </p>
        </div>
        <p className="font-light italic text-xs">
          The Son Of <br /> Abd. Shomad & Hamidah
        </p>
        <Button
          as={Link}
          className={cn(
            ivy.className,
            'tracking-wide mt-8 text-white/80 border-1',
          )}
          href="https://www.instagram.com/reza_assidqi_/"
          startContent={<InstagramIcon className="w-5 h-5" />}
          radius="none"
          variant="bordered"
          size="sm"
        >
          INSTAGRAM
        </Button>
      </div>
      <div className="text-center">
        <p className={cn(ivy.className, 'text-3xl tracking-wide leading-7')}>
          Anita Lailatul <br /> Mahsunah (S.Psi)
        </p>
        <div className="relative aspect-square mx-auto w-[200px] my-6">
          <div
            ref={ref1}
            className={cn('w-full h-full absolute delay-500', {
              'animate-in-reverse': isInView1,
            })}
            style={{ '--index': 6 } as CSSProperties}
          >
            <Image
              src="/reza/anita.jpeg"
              fill
              className="object-center object-cover"
              alt="dika"
            />
            <div className="w-full h-full bg-black/20 absolute"></div>
          </div>
          <p
            className={cn(
              signature.className,
              'text-3xl absolute -bottom-2 -left-6 delay-500',
              {
                'animate-in': isInView1,
              },
            )}
            style={{ '--index': 7 } as CSSProperties}
          >
            Anita
          </p>
        </div>
        <p className="font-light italic text-xs">
          The Daughter Of <br /> H. Thoha Maksum & Hj. Erna
        </p>
        <Button
          as={Link}
          className={cn(
            ivy.className,
            'tracking-wide mt-8 text-white/80 border-1',
          )}
          href="https://www.instagram.com/anitalailatul/"
          startContent={<InstagramIcon className="w-5 h-5" />}
          radius="none"
          variant="bordered"
          size="sm"
        >
          INSTAGRAM
        </Button>
      </div>
    </section>
  )
}

const EventSection = () => {
  return (
    <section>
      <div className="border-t border-white/50 px-6 py-12 text-white/90">
        <p className={cn(usic.className, 'text-3xl tracking-wide mb-4')}>
          NGUNDUH MANTU
        </p>
        <div className="uppercase mb-4">
          <p>Rabu, 09 April 2025</p>
          <p>Pukul 09.00 WIB</p>
        </div>
        <div>
          <p className="text-sm mb-1 font-medium">Rumah Mempelai Pria</p>
          <p className="font-light text-sm">
            Ds. Kendalkemlagi, RT.03 RW.05, Kec. Karang Geneng, Kab. Lamongan,
            Jawa Timur
          </p>
        </div>
        <Link
          className="underline text-white/80 mt-6 text-sm font-medium"
          href="https://maps.app.goo.gl/GWPMsSzMPNYTkR28A"
        >
          GOOGLE MAPS
        </Link>
      </div>

      <div className="p-4 pt-0 pb-12">
        <div className="aspect-square full bg-[url('https://is3.cloudhost.id/externalgroovepublic/2024/06/8d7ef5c1f443735bdef996be14162f1d-1.jpg')] bg-cover bg-right">
          <CountDown />
        </div>
      </div>
    </section>
  )
}

const RsvpSection = () => {
  const attendOptions = [
    {
      label: 'Ya, saya akan hadir',
      value: 'YES',
    },
    {
      label: 'Tidak, dengan berat hati saya tidak dapat hadir',
      value: 'NO',
    },
  ]

  const guestOptions = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
  ]

  const userId = '67de06fe232e8ac14900e495'
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [confirmation, setConfirmation] = useState('YES')
  const [totalGuest, setTotalGuest] = useState('1')

  const handleFetchComment = async () => {
    const res = await fetchComments(userId)
    setComments(res)
  }

  const [invalidName, setInvalidName] = useState(false)
  const [invalidContent, setInvalidContent] = useState(false)

  const validate = () => {
    if (!name) {
      setInvalidName(true)
    }
    if (!content) {
      setInvalidContent(true)
    }
  }

  useEffect(() => {
    if (name) {
      setInvalidName(false)
    }
    if (content) {
      setInvalidContent(false)
    }
  }, [name, content])

  const handlePostComment: () => Promise<void> = async () => {
    validate()
    if (!name || !content) {
      return
    }
    setLoading(true)
    const payload = {
      userId,
      name,
      content,
      confirmation,
      totalGuest: confirmation === 'YES' ? totalGuest : '0',
    }
    const res = await postComment(payload)
    if (res) {
      resetFields()
      handleFetchComment()
      setLoading(false)
    }
  }

  const resetFields = () => {
    setName('')
    setContent('')
    setConfirmation('YES')
    setTotalGuest('1')
  }

  useEffect(() => {
    handleFetchComment()
  }, [])

  return (
    <section className="border-t border-white/50 px-8 py-12 text-white/90">
      <p className="text-xl mb-4">
        KINDLY CONFIRM YOUR PRESENCE AND SHARE YOUR BLESSINGS
      </p>
      <p className="text-xs font-light leading-5">
        Kami dengan hormat meminta konfirmasi kehadiran Anda untuk acara kami
        yang akan datang. Bersamaan dengan RSVP Anda, luangkanlah waktu sejenak
        untuk menyampaikan salam dan doa terbaik.
      </p>
      <div className="flex flex-col gap-4 mt-10">
        <Input
          label="NAMA"
          labelPlacement="outside"
          variant="underlined"
          color="primary"
          placeholder="&nbsp;"
          classNames={{
            label: cn(ivy.className, { '!text-white/80': true }),
          }}
          value={name}
          onValueChange={setName}
          isInvalid={invalidName}
          errorMessage={invalidName && 'Name is required'}
        />
        <Select
          items={attendOptions}
          label="HADIR"
          labelPlacement="outside"
          placeholder="&nbsp;"
          variant="underlined"
          color="primary"
          classNames={{
            label: cn(ivy.className, { '!text-white/80': true }),
          }}
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        >
          {(attend) => (
            <SelectItem key={attend.value}>{attend.label}</SelectItem>
          )}
        </Select>
        {confirmation === 'YES' && (
          <Select
            items={guestOptions}
            label="TAMU YANG AKAN HADIR"
            labelPlacement="outside"
            placeholder="&nbsp;"
            variant="underlined"
            color="primary"
            classNames={{
              label: cn(ivy.className, { '!text-white/80': true }),
            }}
            value={totalGuest}
            onChange={(e) => setTotalGuest(e.target.value)}
          >
            {(guest) => (
              <SelectItem key={guest.value}>{guest.label}</SelectItem>
            )}
          </Select>
        )}
        <Textarea
          label="DOA DAN HARAPAN"
          labelPlacement="outside"
          variant="underlined"
          color="primary"
          placeholder="&nbsp;"
          classNames={{
            label: cn(ivy.className, { '!text-white/80': true }),
          }}
          value={content}
          onValueChange={setContent}
          isInvalid={invalidContent}
          errorMessage={invalidContent && 'Wishes is required'}
        />
        <Button
          className={cn('w-fit font-light tracking-wider', ivy.className)}
          radius="none"
          isLoading={loading}
          onClick={handlePostComment}
          size="sm"
        >
          KONFIRMASI
        </Button>
      </div>
      <div className="text-sm text-white/80 overflow-y-auto max-h-[50vh] flex flex-col gap-2 mt-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white/5 px-4 py-2">
            <div>{comment.name}</div>
            <div className="text-xs text-white/40 font-light">
              {formatDateTime(comment.createdAt!)}
            </div>
            <div className="break-words whitespace-pre-line font-light">
              {comment.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const GallerySection = () => {
  const imageList: string[] = [
    '/reza/L1.jpeg',
    '/reza/L4.jpeg',
    '/reza/S1.jpeg',
    '/reza/S2.jpeg',
    '/reza/S5.jpeg',
    '/reza/L6.jpeg',
    '/reza/L7.jpeg',
    '/reza/S6.jpeg',
    '/reza/S7.jpeg',
    '/reza/S8.jpeg',
  ]

  // Calculate the middle index
  const middleIndex = Math.ceil(imageList.length / 2)

  // Split the array in half
  const firstHalf = imageList.slice(0, middleIndex)
  const secondHalf = imageList.slice(middleIndex)
  return (
    <section className="px-8 py-12 border-t border-white/50 text-white/80">
      <p className={cn(usic.className, 'text-3xl tracking-wide mb-4')}>
        OUR GALLERY
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-4">
          {firstHalf.map((image, index) => (
            <div key={index}>
              <img className="h-auto max-w-full" src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {secondHalf.map((image, index) => (
            <div key={index}>
              <img className="h-auto max-w-full" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const GiftSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const isInView0 = useInView(ref0, { once: true })
  const isInView1 = useInView(ref1, { once: true })

  const accountNumber = 3301111175
  return (
    <div className="text-white/90 px-8 py-12 border-t border-white/50">
      <div className="grid grid-cols-2 gap-3">
        <div className="pt-12">
          <div
            ref={ref0}
            className={cn('relative aspect-[177/217] delay-500', {
              'animate-fade-in-left': isInView0,
            })}
            style={{ '--index': 2 } as CSSProperties}
          >
            <Image
              src="/reza/L5.jpeg"
              fill
              className="object-center object-cover"
              alt="dika"
            />
          </div>
        </div>
        <div>
          <div
            ref={ref1}
            className={cn('relative aspect-[157/173] delay-500', {
              'animate-fade-in-right': isInView1,
            })}
            style={{ '--index': 2 } as CSSProperties}
          >
            <Image
              src="/reza/L2.jpeg"
              fill
              className="object-center object-cover"
              alt="pat"
            />
          </div>
          <div
            className={cn(ivy.className, {
              'tracking-wide text-2xl mt-4': true,
            })}
          >
            Wedding Gift
          </div>
        </div>
      </div>
      <p className="text-xs font-light text-center mt-4 px-4">
        Bagi Anda yang ingin memberikan tanda kasih kepada kedua mempelai, dapat
        menggunakan Virtual Account atau E-Wallet di bawah ini:
      </p>
      <div className="flex justify-center items-center">
        <Button
          onPress={onOpen}
          radius="none"
          color="default"
          className={cn(ivy.className, {
            'tracking-wide mt-8 text-center bg-white/90': true,
          })}
          size="sm"
        >
          CLICK HERE
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={ivy.className}>Wedding Gift</ModalHeader>
              <ModalBody>
                <p className="text-sm">
                  Your presence at our wedding is the greatest gift we could
                  receive. Your good wishes and joy will make our day truly
                  memorable.
                </p>
                <div className="text-center text-sm flex flex-col gap-2 mt-4">
                  <p>BCA (Bank Central Asia)</p>
                  <p className="font-semibold">{accountNumber}</p>
                  <p>AN/ Redza Assidqi</p>
                </div>
                <hr />
                <div className="text-center text-sm flex flex-col gap-2">
                  <p>Or you can send it to:</p>
                  <p>
                    Jalan Siswa Raya No. 2, Rt.3/Rw.1, Kampung Sirnagalih,
                    Neglasari, Kota Tangerang, Banten (15127)
                  </p>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center pb-8">
                <Button
                  color="primary"
                  radius="none"
                  onClick={() => copyToClipboard(accountNumber.toString())}
                >
                  Copy Account Number
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

const ThankyouSection = () => {
  return (
    <section className="p-8">
      <div className="aspect-square bg-[#a8a8a8] w-full text-center p-6 flex flex-col gap-4 text-[#4c3228]">
        <div className={cn(usic.className, 'tracking-wide text-2xl uppercase')}>
          Thank You
        </div>
        <div className="aspect-square relative w-[200px] mx-auto">
          <Image
            src="/reza/L2.jpeg"
            fill
            className="object-center object-cover"
            alt="dika"
          />
          <div className="w-full h-full bg-black/20 absolute"></div>
          <p
            className={cn(
              signature.className,
              'text-3xl text-white/90 absolute bottom-16 -right-10',
            )}
          >
            Anita & Reza
          </p>
        </div>
        <p className="text-xs italic font-light">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami jika Anda
          berkenan hadir dan memberikan doa restu.
        </p>
      </div>
      <div className="mt-12 mb-12 text-white/80 text-center text-[10px] font-light">
        <p>CREATED BY INVITARY.COM</p>
      </div>
    </section>
  )
}

const LeftHeroFixed = () => {
  return (
    <div className="fixed top-0 z-10 bg-[url(/reza/L3.jpeg)] h-screen hidden md:block w-[calc(100%-510px)] bg-cover bg-center">
      <div className="relative w-full h-full flex items-end overflow-hidden">
        <div className="absolute w-full h-full bg-black/30"></div>
        <div className="p-8 mt-auto text-white z-10">
          <div className={cn('font-light uppercase', ivy.className)}>
            The Wedding
          </div>
          <h1
            className={cn(usic.className, {
              'text-4xl uppercase tracking-wide py-2': true,
            })}
          >
            Anita & Reza
          </h1>
        </div>
      </div>
    </div>
  )
}

const AudioSection = forwardRef((props, ref) => {
  const audioUrl =
    '/patty/Tim%20Halperin%20-%20Forever%20Starts%20Today%20(Official%20Audio)%20-%20Tim%20Halperin%20(youtube).mp3'

  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioPlaying, setAudioPlaying] = useState(false)

  useEffect(() => {
    const audioElement = document.getElementById('myAudio') as HTMLAudioElement

    const handleCanPlayThrough = () => {
      setAudioLoaded(true)
    }

    audioElement.addEventListener('canplaythrough', handleCanPlayThrough)

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        // Page is not visible (tab switched or window minimized)
        pauseAudio()
      } else {
        // Page is visible (tab gained focus)
        playAudio()
      }
    })

    return () => {
      audioElement.removeEventListener('canplaythrough', handleCanPlayThrough)
    }
  }, [])

  const pauseAudio = () => {
    const audioElement = document.getElementById('myAudio') as HTMLAudioElement
    audioElement.pause()
    setAudioPlaying(false)
  }

  const playAudio = () => {
    const audioElement = document.getElementById('myAudio') as HTMLAudioElement
    audioElement.play()
    setAudioPlaying(true)
  }

  useImperativeHandle(ref, () => ({
    playAudio,
  }))

  return (
    <>
      <audio
        id="myAudio"
        className="hidden"
        preload="auto"
        loop
        onEnded={pauseAudio}
      >
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <div className="fixed z-50 bottom-5 right-5">
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
    </>
  )
})

AudioSection.displayName = 'AudioSection'

export default function RezaAnita() {
  const audioRef = useRef(null)
  const playAudio = () => {
    // @ts-ignore
    audioRef.current?.playAudio()
  }
  return (
    <div>
      <Opener playAudio={playAudio} />
      <AudioSection ref={audioRef} />
      <LeftHeroFixed />
      <div className="w-full md:max-w-[510px] ml-auto md:pl-[0.3px] relative">
        <div className="fixed md:max-w-[510px] ml-auto md:pl-[0.3px] top-0 inset-0 w-full h-screen bg-[url('/static/florist_bg.jpeg')] bg-cover bg-center"></div>
        <div className="relative w-full h-full overflow-y-auto bg-black/70 backdrop-blur-xs">
          <HeroPage />
          <CoupleSection />
          <EventSection />
          <RsvpSection />
          <GiftSection />
          <GallerySection />
          <ThankyouSection />
        </div>
      </div>
    </div>
  )
}

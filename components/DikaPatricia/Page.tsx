'use client'
import {
  CSSProperties,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useInView, m } from 'framer-motion'
import {
  Button,
  cn,
  Divider,
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
import {
  DoubleChevronUp,
  InstagramIcon,
  SpeakerMuted,
  SpeakerUnmuted,
} from '@/components/icons'
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
                src={'/patty/_ELP2446.jpg'}
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
                    Dika & Patricia
                  </h1>
                  <p className="uppercase text-xs font-light">
                    Saturday, 02 November 2024
                  </p>
                </div>
                <div>
                  <p className="text-sm font-light">Dear,</p>
                  <p className="text-xl font-medium py-4">
                    {user || 'Nama Tamu'}
                  </p>
                  <p className="text-[10px] font-light">
                    We apologize for any inaccuracies in the spelling of names
                    and titles
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
  const countdown = useCountDown({ dueDate: '2024-11-02T10:00:00' })
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
    <section className="relative w-full h-[90vh] bg-[url('/patty/_ELP2430.jpg')] bg-cover bg-center">
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
            DIKA & <br /> PATRICIA
          </p>
          <div className="inline-flex w-full items-center text-xs uppercase gap-4">
            <p className="flex-none">02 November</p>
            <hr className="w-full border-t border-white/50" />
            <p>2024</p>
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
        <p className={cn(signature.className, 'text-2xl')}>
          Ecclesiastes 4:9-10
        </p>
        <p className="font-light text-xs mt-4 leading-6 italic">
          Two are better than one, because they have a good reward for their
          toil. For if they fall, one will lift up his fellow. But woe to him
          who is alone when he falls and has not another to lift him up.
        </p>
      </div>
      <div className="text-center">
        <p className={cn(ivy.className, 'text-3xl tracking-wide leading-7')}>
          Dika Hutomo <br />
          Wirawan (S.Ak.)
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
              src="/patty/_ELP2832.jpg"
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
                'animate-in': isInView0,
              },
            )}
            style={{ '--index': 7 } as CSSProperties}
          >
            Dika
          </p>
        </div>
        <p className="font-light italic text-xs">
          The Son Of <br /> Andi Lie Wirawan & Tati Harianto
        </p>
        <Button
          as={Link}
          className={cn(
            ivy.className,
            'tracking-wide mt-8 text-white/80 border-1',
          )}
          href="https://www.instagram.com/dikalie/"
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
          Patricia Ayu <br /> Catur Cahyani (S.I. Kom)
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
              src="/patty/_ELP3174.jpg"
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
            Patricia
          </p>
        </div>
        <p className="font-light italic text-xs">
          The Daughter Of <br /> Alm Fx Herry Chandra & Theresia Indrasuri
        </p>
        <Button
          as={Link}
          className={cn(
            ivy.className,
            'tracking-wide mt-8 text-white/80 border-1',
          )}
          href="https://www.instagram.com/patriciapaattyy/"
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
          HOLLY MATRIMONY
        </p>
        <div className="uppercase mb-4">
          <p>Saturday, 02 November 2024</p>
          <p>AT 10.00 - 11. 00 AM</p>
        </div>
        <div>
          <p className="text-sm mb-1 font-medium">Vihara Pusdiklat Maitreya</p>
          <p className="font-light text-sm">
            Jl. Komplek Perumahan Duta Mas Blok A8, RT.11/RW.5, Wijaya Kusuma,
            Kec. Grogol petamburan, Kota Jakarta Barat 11460
          </p>
        </div>
        <Link
          className="underline text-white/80 mt-6 text-sm font-medium"
          href="https://www.google.com/maps/place/Vihara+Pusdiklat+Maitreya/@-6.149775,106.780887,15z/data=!4m6!3m5!1s0x2e69f62f075f1bd5:0xf9d5d8055eeb87fa!8m2!3d-6.149775!4d106.780887!16s%2Fg%2F11bc7p_v4k?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
        >
          GOOGLE MAPS
        </Link>
      </div>

      <div className="border-t border-white/50 px-6 py-12 text-white/90">
        <p className={cn(usic.className, 'text-3xl tracking-wide mb-4')}>
          WEDDING RECEPTION
        </p>
        <div className="uppercase mb-4">
          <p>Saturday, 02 November 2024</p>
          <p>AT 18.00 - 20.00 PM</p>
        </div>
        <div>
          <p className="text-sm mb-1 font-medium">
            Fraser Place Setiabudi - Jardino
          </p>
          <p className="font-light text-sm">
            Kec, Jl. Setiabudi Selatan Raya No.2 Kel.Karet, RT.18/RW.2, Karet
            Kuningan, Setiabudi, Jakarta 12920
          </p>
        </div>
        <Link
          className="underline text-white/80 mt-6 text-sm font-medium"
          href="https://www.google.com/maps/place/Fraser+Place+Setiabudi/@-6.2151847,106.8268561,17z/data=!3m1!4b1!4m9!3m8!1s0x2e69f405e406d801:0x6400a97cb8e3e1ff!5m2!4m1!1i2!8m2!3d-6.21519!4d106.829431!16s%2Fg%2F11bxjlnqlq?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
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
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true })
  const attendOptions = [
    {
      label: 'Yes, I will gladely attend',
      value: 'YES',
    },
    {
      label: 'No, regretfully I won`t be able to attend',
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

  const userId = '6704c39c7415de6ba0aad6f0'
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
      console.log('masuk sini')
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
        We kindly request your prompt response to confirm your attendance at our
        upcoming event. Alongside your RSVP, please take a moment to extend your
        warm regards and best wishes.{' '}
      </p>
      <div className="flex flex-col gap-4 mt-10">
        <Input
          label="NAME"
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
          label="ATTEND"
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
            label="HOW MANY GUEST(S)"
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
          label="WISHES"
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
          CONFIRM
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
    '/patty/_ELP2430.jpg',
    '/patty/_ELP2446.jpg',
    '/patty/_ELP3000.jpg',
    '/patty/_ELP3095.jpg',
    '/patty/_ELP3105.jpg',
    '/patty/_ELP3112.jpg',
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

  const accountNumber = 4300363305
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
              src="/patty/_ELP3112.jpg"
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
              src="/patty/_ELP3105.jpg"
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
        For those of you who want to give a token of love to the bride and
        groom, you can use the virtual account E-wallet below:
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
                  <p>AN/ Dika Hutomo</p>
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
            src="/patty/_ELP3095.jpg"
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
            Dika & Patricia
          </p>
        </div>
        <p className="text-xs italic font-light">
          It is a pleasure and honor for us, if you are willing to attend and
          give us your blessing.
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
    <div className="fixed top-0 z-10 bg-[url(https://storage.cloud.google.com/invitary/_ELP2446.jpg)] h-screen hidden md:block w-[calc(100%-510px)] bg-cover bg-center">
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
            Dika & Patricia
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

export default function DikaPatricia() {
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
        <div className="fixed md:max-w-[510px] ml-auto md:pl-[0.3px] top-0 inset-0 w-full h-screen bg-[url('/static/bg_nude_pallete.jpg')] bg-cover bg-center"></div>
        <div className="relative w-full h-full overflow-y-auto bg-black/50">
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

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
import {
  analogue,
  canela,
  gothic,
  ivy,
  notoSerif,
  signature,
  usic,
} from '@/app/fonts'
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
                src={'https://storage.googleapis.com/invitary/_ELP2446.jpg'}
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
  return (
    <section className="relative w-full h-[90vh] bg-[url('https://storage.googleapis.com/invitary/_ELP2430.jpg')] bg-cover bg-center">
      <div className="w-full h-full bg-black/40 pt-8 pb-14 px-6 flex flex-col justify-between text-white/80">
        <div className="flex justify-between text-[10px] leading-3">
          <p>
            SAVE THE DATE <br /> FOR THE WEDDING OF
          </p>
          <p>NAMA TAMU</p>
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
          <Image
            src="https://storage.googleapis.com/invitary/_ELP2832.jpg"
            fill
            className="object-center object-cover"
            alt="dika"
          />
          <div className="w-full h-full bg-black/20 absolute"></div>
          <p
            className={cn(
              signature.className,
              'text-3xl absolute -bottom-2 -left-6',
            )}
          >
            Dika
          </p>
        </div>
        <p className="font-light italic text-xs">
          The Son Of <br /> Andy Lee & Tati Harianto
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
          <Image
            src="https://storage.googleapis.com/invitary/_ELP3174.jpg"
            fill
            className="object-center object-cover"
            alt="patt"
          />
          <div className="w-full h-full bg-black/20 absolute"></div>
          <p
            className={cn(
              signature.className,
              'text-3xl absolute -bottom-2 -left-6',
            )}
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
          <p>AT 19.00 - 20.00 PM</p>
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
      <div className="p-4 pt-0">
        <div className="aspect-square full bg-[url('https://is3.cloudhost.id/externalgroovepublic/2024/06/8d7ef5c1f443735bdef996be14162f1d-1.jpg')] bg-cover bg-right">
          <CountDown />
        </div>
      </div>
    </section>
  )
}

const LiveStream = () => {
  // const ref = useRef(null)
  // const isInView = useInView(ref, { once: true })
  return (
    <div className="cbg-secondary text-white/80 text-center px-12 min-h-[60vh] py-24 flex flex-col items-center justify-center relative">
      <video
        src="/static/palm_tree_chroma.mp4"
        muted
        autoPlay
        playsInline
        loop
        className="absolute top-0 w-full h-full object-cover object-center opacity-20"
      />
      <div
        // ref={ref}
        // className={cn('z-10', { 'animate-in': isInView })}
        // style={{ '--index': 4 } as CSSProperties}
        className="z-10"
      >
        <div className={cn(ivy.className, 'mb-4 tracking-wide')}>
          QS. Ar Rum ayat 21
        </div>
        <div className="text-lg font-light leading-8">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ
          اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </div>
        <div className="text-sm font-light mt-4">
          Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
          pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
          tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </div>
        <div className="mt-16">
          <div className={cn(gothic.className, 'text-base uppercase')}>
            Turut Mengundang
          </div>
          <div
            className={cn(ivy.className, 'text-sm mb-2 mt-3 tracking-wider')}
          >
            Pihak Perempuan :
          </div>
          <ul className="flex flex-col gap-1 font-light text-xs">
            <li>
              Bapak. Dr. ALI MAULANA HAKIM, S.IP, M.Si (Walikota Kota ADM.{' '}
              <br />
              Jakarta Utara)
            </li>
            <li>
              Bapak Sigit Wijatmoko, AP, M.Si (Asisten Pemerintahan Sekda <br />
              Provinsi DKI Jakarta)
            </li>
            <li>Keluarga Besar Bapak Alm. H. Muhadi</li>
            <li>Keluarga Besar Bapak Alm. Reso Wiyono</li>
          </ul>
          <div
            className={cn(ivy.className, 'text-sm mb-2 mt-3 tracking-wider')}
          >
            Pihak Laki-laki :
          </div>
          <ul className="flex flex-col gap-1 font-light text-xs">
            <li>Keluarga Besar Bapak Alm. Drs. E. L. Bachtiar</li>
            <li>Keluarga Besar Bapak Alm. Tarsa Nitidisastra</li>
          </ul>
        </div>
      </div>
    </div>
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

  const userId = '656fd880b2d14968a9df7bf7'
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

  const handlePostComment = async () => {
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
    <div className="w-full cbg-primary text-white/70 py-16">
      <div className="relative ml-auto aspect-[374/320] w-[90%]">
        <div
          ref={ref1}
          className={cn(
            ivy.className,
            'absolute top-0 left-0 z-10 cbg-primary tracking-wide text-3xl font-bold pr-4 pb-3',
            { 'animate-fade-in-left': isInView1 },
          )}
          style={{ '--index': 1 } as CSSProperties}
        >
          RSVP
        </div>
        <div
          ref={ref2}
          className={cn(
            'absolute z-10 cbg-primary bottom-[-14px] right-0 text-xs font-light w-[60%] px-3 pt-2',
            {
              'animate-in': isInView2,
            },
          )}
          style={{ '--index': 3 } as CSSProperties}
        >
          Your presence shall be a great honour for us and our families. Please
          confirm your attendance through reservation form below
        </div>
        <Image
          src="/asep/IMG_20240130_203035.jpg"
          fill
          className="object-center object-cover"
          alt="asep"
        />
      </div>
      <div className="px-6 py-6 flex flex-col gap-4">
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
          className={cn(
            'w-fit cbg-secondary text-white font-light tracking-wider',
            ivy.className,
          )}
          radius="none"
          isLoading={loading}
          onClick={handlePostComment}
        >
          CONFIRM
        </Button>
      </div>
      <div className="text-sm text-white/80 px-6 overflow-y-auto max-h-[50vh] flex flex-col gap-2">
        {comments.map((comment) => (
          <div key={comment.id} className="cbg-secondary px-4 py-2 rounded-md">
            <div>{comment.name}</div>
            <div className="text-xs text-white/40 font-light">
              {formatDateTime(comment.createdAt!)}
            </div>
            <div className="font-light">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const GiftSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const accountNumber = 4140883595
  return (
    <div className="cbg-secondary text-white/80 px-8 pt-24 pb-16">
      <div className="grid grid-cols-2 gap-3">
        <div className="pt-12">
          <div className="relative aspect-[177/217]">
            <Image
              src="/asep/IMG_20240130_200809.jpg"
              fill
              className="object-center object-cover"
              alt="asep"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-[157/173]">
            <Image
              src="/asep/IMG_20240130_202834.jpg"
              fill
              className="object-center object-cover"
              alt="asep"
            />
          </div>
          <div
            className={cn(ivy.className, {
              'tracking-wide text-2xl mt-4': true,
            })}
          >
            Love Gift
          </div>
        </div>
      </div>
      <p className="text-xs font-light text-center mt-4 px-4">
        Your presence at our wedding is the greatest gift we could receive. Your
        good wishes and joy will make our day truly memorable.
      </p>
      <div className="flex justify-center items-center">
        <Button
          onPress={onOpen}
          radius="none"
          color="primary"
          className={cn(ivy.className, {
            'tracking-wide mt-8 text-center cbg-primary': true,
          })}
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
                  <p>AN/ Defi Mira Wibowo</p>
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

const Photo = ({
  imageSrc,
  aspect,
  idx,
}: {
  imageSrc: string
  aspect: string
  idx: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      ref={ref}
      className={cn('relative w-full overflow-hidden', aspect, {
        'animate-in': isInView,
      })}
      style={{ '--index': idx + 1 } as CSSProperties}
    >
      <Image
        src={imageSrc}
        fill
        className="object-center object-cover"
        alt="photos"
      />
    </div>
  )
}

const GallerySection = () => {
  const photos = [
    '/asep/IMG_20240203_151740.jpg',
    '/asep/IMG_20240203_152928.jpg',
    '/asep/IMG_20240203_151513.jpg',
    '/asep/IMG_20240203_152323.jpg',
    '/asep/IMG_20240130_200935.jpg',
    '/asep/IMG_20240130_203348.jpg',
    '/asep/IMG_20240203_113425.jpg',
    '/asep/IMG_20240203_113616.jpg',
  ]

  const aspect = [
    'aspect-[413/313]',
    'aspect-[413/313]',
    'aspect-[413/313]',
    'aspect-[413/313]',
    'aspect-[413/313]',
    'aspect-[413/313]',
    'aspect-[413/313]',
    'aspect-[413/313]',
  ]
  return (
    <div className="w-full">
      {photos.map((photo, idx) => (
        <Photo key={idx} imageSrc={photo} idx={idx} aspect={aspect[idx]} />
      ))}
    </div>
  )
}

const ThankyouSection = () => {
  return (
    <div className="cbg-secondary text-white/80 text-center px-8 pt-20 pb-16 relative overflow-hidden">
      <Image
        src="/asep/gunungan.png"
        width={945}
        height={1571}
        className="absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[7%]"
        unoptimized
        alt="gunungan"
      />
      <div className="relative z-10">
        <div
          className={cn(ivy.className, {
            'tracking-wide text-3xl mt-4': true,
          })}
        >
          Thank You!
        </div>
        <p className="text-xs font-light mt-8 leading-5">
          Thank you for your kind words, prayers, and willingness to come in our
          wedding celebration. We wish your understanding for all health
          protocols restriction. <br />
          See you on our wedding day !
        </p>
        <div
          className={cn(ivy.className, {
            'tracking-wide text-xl mt-32': true,
          })}
        >
          Powered by
        </div>
        <p className="font-light text-xs mt-4">invitary.com</p>
      </div>
    </div>
  )
}

const LeftHeroFixed = () => {
  return (
    <div
      className="fixed top-0 z-10 h-screen hidden md:block w-[calc(100%-510px)] bg-cover bg-bottom"
      style={{
        backgroundImage: `url(https://storage.cloud.google.com/invitary/_ELP2446.jpg)`,
      }}
    >
      <div className="relative w-full h-full flex items-end overflow-hidden">
        <video
          src="https://groovepublic.com/wp-content/uploads/2023/01/flars-online-video-cutter.com_.mp4"
          muted
          autoPlay
          playsInline
          loop
          className="absolute top-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="p-8 mt-auto text-white z-10">
          <div className={cn('font-light', ivy.className)}>The Wedding Of</div>
          <h1
            className={cn(analogue.className, {
              'text-4xl tracking-wide py-2': true,
            })}
          >
            Dika & Patricia
          </h1>
          <div className={cn('font-light', ivy.className)}>
            Saturday, 02 November 2024
          </div>
        </div>
      </div>
    </div>
  )
}

const AudioSection = forwardRef((props, ref) => {
  const audioUrl =
    'https://storage.googleapis.com/invitary/Tim%20Halperin%20-%20Forever%20Starts%20Today%20(Official%20Audio)%20-%20Tim%20Halperin%20(youtube).mp3'

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
      <div className="w-full md:max-w-[510px] ml-auto md:pl-[0.3px] bg-[url('https://i.pinimg.com/564x/fc/ce/5f/fcce5f394b1c3c0e1f56416400f00825.jpg')] bg-cover bg-center h-screen overflow-hidden">
        <div className="w-full h-full overflow-y-auto bg-black/60">
          <HeroPage />
          <CoupleSection />
          {/* <LoveStory /> */}
          <EventSection />
          {/* <LiveStream /> */}
          <RsvpSection />
          <GiftSection />
          <GallerySection />
          <ThankyouSection />
        </div>
      </div>
    </div>
  )
}

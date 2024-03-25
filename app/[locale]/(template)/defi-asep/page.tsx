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
import { analogue, gothic, ivy } from '@/app/fonts'
import useCountDown from '@/hooks/useCountDown'
import './style.css'
import { useSearchParams } from 'next/navigation'
import { fetchComments, postComment } from '@/lib/useComments'
import { Comment } from '@/types'
import { formatDateTime } from '@/lib/formatdate'
import { copyToClipboard } from '@/lib/utils'

const Opener = ({ playAudio }: { playAudio: () => void }) => {
  const { isOpen, onOpenChange } = useDisclosure()
  const imgUrl = '/asep/IMG_20240130_200324.jpg'

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
                    We invite you to our <br /> wedding ceremony
                  </p>
                  <h1
                    className={cn(analogue.className, {
                      'text-4xl md:text-6xl tracking-wide mt-3': true,
                    })}
                  >
                    Defi & Asep
                  </h1>
                </div>
                <div>
                  <p className="text-sm font-light uppercase">
                    Special invitation:
                  </p>
                  <p className="text-xl font-semibold py-4">
                    {user || 'Nama Tamu'}
                  </p>
                  <p className="text-[10px] font-light">
                    We apologize for any inaccuracies in the spelling of names
                    and titles
                  </p>
                  <Button
                    radius="none"
                    className="text-white font-light bg-black/80 tracking-wider mt-8"
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
  const countdown = useCountDown({ dueDate: '2024-05-05T11:00:00' })
  return (
    <div
      className={cn(ivy.className, {
        'mt-8 flex justify-center items-center tracking-wider': true,
      })}
    >
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.days || '0'}</div>
        <p className="text-sm">Day(s)</p>
      </div>
      <Divider orientation="vertical" className="mx-4 bg-white" />
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.hours || '0'}</div>
        <p className="text-sm">Hour(s)</p>
      </div>
      <Divider orientation="vertical" className="mx-4 bg-white" />
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.minutes || '0'}</div>
        <p className="text-sm">Min(s)</p>
      </div>
      <Divider orientation="vertical" className="mx-4 bg-white" />
      <div className="py-1 min-w-[40px]">
        <div className="text-2xl font-bold">{countdown?.seconds || '0'}</div>
        <p className="text-sm">Sec(s)</p>
      </div>
    </div>
  )
}

const HeroPage = () => {
  const imageList: any[] = ['/asep/IMG_20240130_200324.jpg']

  return (
    <section className="relative w-full h-screen">
      {/* <Fade duration={2000} arrows={false}>
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
      </Fade> */}
      <Image
        src={imageList[0]}
        fill
        className="object-cover object-center"
        alt="oke"
        unoptimized
      />
      <div className="absolute w-full h-screen top-0 z-[1] text-white/80 bg-black/20 flex flex-col items-center justify-between">
        <div className="text-center pt-16">
          <p className="uppercase text-sm font-light">The Wedding of</p>
          <h1
            className={cn(analogue.className, {
              'text-4xl md:text-6xl tracking-wide mt-3': true,
            })}
          >
            Defi & Asep
          </h1>
          <p className="text-sm font-light px-6 mt-4">
            No one has ever seen God; but if we love one another, God lives in
            us and his love is made complete in us.
          </p>
        </div>
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
  )
}

const CoupleSection = () => {
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true })

  const ref3 = useRef(null)
  const isInView3 = useInView(ref3, { once: true })

  return (
    <div className="w-full cbg-primary text-white/70 min-h-screen py-24 relative">
      <div className="absolute right-0 w-[40%] h-[1px] mt-36 border-b border-white/50 my-auto" />
      <div ref={ref1} className="relative w-[60%]">
        <Image
          src="/asep/IMG_20240130_105642.jpg"
          width={260}
          height={290}
          className="object-cover object-center aspect-[260/290] delay-500"
          unoptimized
          alt="asep"
          style={{
            transform: isInView1 ? 'none' : 'translateX(-200px)',
            opacity: isInView1 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        />
        <div className="absolute z-10 -top-8 -right-20 -mt-1 -mr-1">
          <svg
            viewBox="0 0 100 100"
            width="100"
            height="100"
            className="circle-svg"
          >
            <defs>
              <path
                id="circle"
                d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="18">
              <textPath xlinkHref="#circle">ASEP H - THE GROOM</textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="p-6 mt-16 relative z-10">
        <div
          className={cn(ivy.className, {
            'tracking-wide text-3xl mb-4': true,
          })}
        >
          Asep Hermawan S.Psi
        </div>
        <div
          className={cn(gothic.className, {
            'uppercase text-sm font-bold': true,
          })}
        >
          The Son of :
        </div>
        <div className="text-xs mt-4 font-light">
          Bpk. Mulyono & Ibu Tati Kurnia Hayati B
        </div>
        <Button
          as={Link}
          className={cn(ivy.className, {
            'tracking-wide mt-8 text-white/80 border-1': true,
          })}
          href="https://www.instagram.com/hermwn_asep/"
          startContent={<InstagramIcon className="w-5 h-5" />}
          radius="none"
          variant="bordered"
        >
          INSTAGRAM
        </Button>
      </div>
      <div className="flex items-end relative">
        <Image
          src="/asep/gunungan.png"
          width={945}
          height={1571}
          className="absolute w-[60%] -bottom-6 -left-16 opacity-[7%]"
          unoptimized
          alt="gunungan"
        />
        <div
          className={cn(gothic.className, {
            'uppercase text-sm tracking-wide font-bold ml-10 relative z-10':
              true,
          })}
        >
          05.05.2024
        </div>
        <div className="relative aspect-[220/213] w-[50%] ml-auto z-10">
          <Image
            ref={ref2}
            src="/asep/IMG_20240203_114054.jpg"
            fill
            className={cn('object-center object-cover delay-500', {
              'animate-fade-in-right': isInView2,
            })}
            style={{ '--index': 1 } as CSSProperties}
            alt="oke"
          />
        </div>
      </div>
      <div className="mt-32">
        <div
          className={cn(analogue.className, {
            'text-center text-2xl mb-4': true,
          })}
        >
          The bride
        </div>
        <div ref={ref3} className="relative aspect-video w-[90%] mx-auto">
          <Image
            src="/asep/IMG_20240130_203158.jpg"
            fill
            className={cn('object-center object-cover delay-500', {
              'animate-fade-in': isInView3,
            })}
            style={{ '--index': 1 } as CSSProperties}
            alt="asep"
          />
        </div>
        <div className="text-center px-6 mt-4">
          <div
            className={cn(ivy.className, {
              'tracking-wide text-3xl mb-4': true,
            })}
          >
            Defi Mira Wibowo A.Md.Keb
          </div>
          <div
            className={cn(gothic.className, {
              'uppercase text-sm font-bold': true,
            })}
          >
            The Daughter of :
          </div>
          <div className="text-xs mt-4 font-light">
            Bpk. Sri Kukuh Wibowo & Ibu Toyimah
          </div>
          <Button
            as={Link}
            className={cn(ivy.className, {
              'tracking-wide mt-8 text-white/80 border-1': true,
            })}
            href="https://www.instagram.com/devimirawibowo/"
            startContent={<InstagramIcon className="w-5 h-5" />}
            radius="none"
            variant="bordered"
          >
            INSTAGRAM
          </Button>
        </div>
      </div>
    </div>
  )
}

const LoveStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="cbg-secondary text-white/80 text-center px-8 py-24">
      <div
        ref={ref}
        className={cn({ 'animate-in': isInView })}
        style={{ '--index': 4 } as CSSProperties}
      >
        <div
          className={cn(ivy.className, {
            'tracking-wide text-3xl mb-6': true,
          })}
        >
          LOVE STORY
        </div>
        <div className="mb-6">
          <div
            className={cn(gothic.className, {
              'uppercase text-sm font-bold mb-4': true,
            })}
          >
            Jakarta, 15 Januari 2023
          </div>
          <p className="text-xs font-light tracking-wide">
            Berawal dari Instagram kami berkenalan, singkat cerita pertama kali
            kami bertemu secara langsung di Mall Kelapa Gading. Kami sama-sama
            mendapatkan kesan yang positif di pertemuan itu, lalu hubungan kami
            semakin dekat dan akhirnya sepakat untuk menjalin hubungan.
          </p>
        </div>
        <div className="mb-6">
          <div
            className={cn(gothic.className, {
              'uppercase text-sm font-bold mb-4': true,
            })}
          >
            Jakarta, 30 Maret 2023
          </div>
          <p className="text-xs font-light tracking-wide">
            Pada tanggal ini saya (asep) sekeluarga memutuskan untuk
            bersilaturahmi ke rumah defi dan saling mengenal anggota keluarga
            satu sama lain.
          </p>
        </div>
        <div className="mb-6">
          <div
            className={cn(gothic.className, {
              'uppercase text-sm font-bold mb-4': true,
            })}
          >
            Jakarta, 16 Desember 2023
          </div>
          <p className="text-xs font-light tracking-wide">
            Seiring berjalannya waktu, akhirnya kami sepakat untuk bertunangan
            sebagai langkah awal untuk menuju ke jenjang pernikahan.
          </p>
        </div>
      </div>
    </div>
  )
}

const EventSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="w-full cbg-primary text-white/70 py-12 px-10 relative overflow-hidden">
      <div className="absolute w-full h-[1px] mt-32 border-b border-white/50 -mx-10" />
      <div>
        <div className="relative aspect-[335/223]">
          <Image
            src="/asep/IMG_20240203_112951.jpg"
            fill
            className="object-center object-cover"
            alt="asep"
          />
        </div>
        <div
          ref={ref}
          className={cn('text-center mt-8', { 'animate-in': isInView })}
          style={{ '--index': 4 } as CSSProperties}
        >
          <div
            className={cn(ivy.className, {
              'tracking-wide font-bold mb-4': true,
            })}
          >
            AKAD NIKAH
          </div>
          <div
            className={cn(ivy.className, {
              'tracking-wide mb-4': true,
            })}
          >
            SUNDAY, May 05 2024 <br />
            07.30 WIB
          </div>
          <div
            className={cn(gothic.className, {
              'uppercase font-bold': true,
            })}
          >
            Masjid Babussalam
          </div>
          <div className="text-xs mt-2 font-light">
            Jl Laksda Yos Sudarso 27-29, Jakarta Utara, <br /> Daerah Khusus
            Ibukota Jakarta 14320. <br />
            (Kantor Walikota Jakarta Utara)
          </div>
          <div
            className={cn(ivy.className, {
              'tracking-wide font-bold mb-4 mt-14': true,
            })}
          >
            RECEPTION
          </div>
          <div
            className={cn(ivy.className, {
              'tracking-wide mb-4': true,
            })}
          >
            SUNDAY, MAY 05 2024 <br />
            11.00 - 13.00 WIB
          </div>
          <div
            className={cn(gothic.className, {
              'uppercase font-bold': true,
            })}
          >
            Masjid Babussalam
          </div>
          <div className="text-xs mt-2 font-light">
            Jl Laksda Yos Sudarso 27-29, Jakarta Utara, <br /> Daerah Khusus
            Ibukota Jakarta 14320. <br />
            (Kantor Walikota Jakarta Utara)
          </div>
          <div className="grid grid-cols-2 w-[90%] mx-auto text-center border-t border-b border-white/80 text-xs mt-12">
            <div>
              <Link
                className={cn(
                  ivy.className,
                  'py-3 tracking-wide text-white/80 text-xs',
                )}
                href="http://maps.google.com/maps?daddr=-6.119640877291275,106.89136136680439"
              >
                GOOGLE MAPS
              </Link>
            </div>
            <div className="border-l">
              <Link
                className={cn(
                  ivy.className,
                  'py-3 tracking-wide text-white/80 text-xs',
                )}
                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=The+Wedding+of+Defi+and+Asep&details&dates=20240505/20240505&location=Gedung+Serbaguna+Masjid+Babussalam"
              >
                SAVE THE DATE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/asep/gunungan.png"
        width={945}
        height={1571}
        className="absolute w-[55%] bottom-32 -left-[142px] opacity-[7%]"
        unoptimized
        alt="gunungan"
      />
      <Image
        src="/asep/gunungan.png"
        width={945}
        height={1571}
        className="absolute w-[55%] bottom-32 -right-[142px] opacity-[7%]"
        unoptimized
        alt="gunungan"
      />
    </div>
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
      style={{ '--index': idx + 2 } as CSSProperties}
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
    '/asep/IMG_8868.jpg',
    '/asep/IMG_20240203_152323.jpg',
  ]

  const aspect = [
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
  const imgUrl = '/asep/IMG_20240203_113752.jpg'
  return (
    <div
      className="fixed top-0 z-10 h-screen hidden md:block w-[calc(100%-510px)] bg-cover bg-bottom"
      style={{ backgroundImage: `url(${imgUrl})` }}
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
            Defi & Asep
          </h1>
          <div className={cn('font-light', ivy.className)}>
            Sunday, May 05 2024
          </div>
        </div>
      </div>
    </div>
  )
}

const AudioSection = forwardRef((props, ref) => {
  const audioUrl = '/asep/jawa_rustic.mp3'

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

export default function AsepPage() {
  // const [themeData, setData] = useState()
  const audioRef = useRef(null)
  const playAudio = () => {
    // @ts-ignore
    audioRef.current?.playAudio()
  }
  // const fetchData = async () => {
  //   const res = await fetch(
  //     'http://localhost:3002/api/theme?themeId=65b54bb784603ab3cf9e09c5',
  //   )
  //   const data = await res.json()
  //   setData(data)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <div>
      <Opener playAudio={playAudio} />
      <AudioSection ref={audioRef} />
      <LeftHeroFixed />
      <div className="w-full md:max-w-[510px] ml-auto md:pl-[0.3px]">
        <HeroPage />
        <CoupleSection />
        <LoveStory />
        <EventSection />
        <LiveStream />
        <RsvpSection />
        <GiftSection />
        <GallerySection />
        <ThankyouSection />
      </div>
    </div>
  )
}

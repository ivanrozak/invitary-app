'use client'
import {
  BookIcon,
  CoupleIcon,
  DesktopIcon,
  EventIcon,
  GalleryIcon,
  GiftIcon,
  HelloIcon,
  InvitaryIcon,
  MobileIcon,
  RsvpIcon,
  SaveIcon,
  SettingIcon,
  VideoIcon,
} from '@/components/icons'
import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  Switch,
  cn,
} from '@nextui-org/react'
import React, { useState } from 'react'

const ButtonNavbar = ({
  title,
  icon,
  isActive,
  onClick,
}: {
  title: string
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <Button
      radius="none"
      variant="light"
      className={cn(
        'min-w-0 h-16 w-full flex flex-col justify-center items-center text-landingPrimary gap-0',
        {
          'bg-landingPrimary/10 border-r border-landingPrimary': isActive,
        },
      )}
      onClick={onClick}
    >
      {icon}
      <div className="text-[10px] font-semibold">{title}</div>
    </Button>
  )
}

const ThemePage = () => {
  const [section, setSection] = useState('Opener')
  const [isMobile, setMobile] = useState(true)
  const [iframeKey, setIframeKey] = useState(0)
  const sectionList = [
    {
      title: 'Opener',
      icon: <HelloIcon className="w-8 h-8" />,
    },
    {
      title: 'Main',
      icon: <BookIcon className="w-8 h-8" />,
    },
    {
      title: 'Couple',
      icon: <CoupleIcon className="w-8 h-8" />,
    },
    {
      title: 'Event',
      icon: <EventIcon className="w-8 h-8" />,
    },
    {
      title: 'Video',
      icon: <VideoIcon className="w-8 h-8" />,
    },
    {
      title: 'Gallery',
      icon: <GalleryIcon className="w-8 h-8" />,
    },
    {
      title: 'RSVP',
      icon: <RsvpIcon className="w-8 h-8" />,
    },
    {
      title: 'Gift',
      icon: <GiftIcon className="w-8 h-8" />,
    },
  ]
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between items-center w-16 border-r">
        <div className="w-full flex flex-col items-center">
          <div className="h-16 flex items-center">
            <Button
              isIconOnly
              className="bg-landingPrimary text-white"
              aria-label="Home"
              radius="sm"
            >
              <InvitaryIcon />
            </Button>
          </div>

          {sectionList.map((item, index) => (
            <ButtonNavbar
              key={index}
              title={item.title}
              icon={item.icon}
              isActive={item.title === section}
              onClick={() => setSection(item.title)}
            />
          ))}
        </div>
        <ButtonNavbar
          title="Settings"
          icon={<SettingIcon className="w-8 h-8" />}
          isActive={section === 'Settings'}
          onClick={() => setSection('Settings')}
        />
      </div>
      <div className="w-72 px-4 border-r">
        <div className="flex justify-between items-center h-16">
          <div className="text-landingPrimary font-bold">Editor Page</div>
          <Button
            endContent={<SaveIcon />}
            variant="bordered"
            className="border-landingPrimary text-landingPrimary border-1"
            radius="sm"
          >
            Save
          </Button>
        </div>
        <div className="flex justify-between items-center text-xs h-8">
          {section}
        </div>
        <div>content here...</div>
      </div>
      <div className="bg-pattern-dotted flex-1 relative">
        <Navbar
          classNames={{ wrapper: 'max-w-none fixed bg-white top-0 border-b' }}
        >
          <NavbarContent justify="start">
            <div className="text-landingPrimary">
              <div className="text-xs font-semibold">#Emerald Green Theme</div>
              <div className="text-xs">Saved 3 minutes ago</div>
            </div>
          </NavbarContent>
          <NavbarContent justify="center">
            <NavbarItem className="flex items-center">
              <div className="text-sm mr-2">Desktop</div>
              <Switch
                isSelected={isMobile}
                onChange={() => setMobile(!isMobile)}
                size="lg"
                startContent={<MobileIcon />}
                endContent={<DesktopIcon />}
              />
              <div className="text-sm">Mobile</div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Share
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className={cn(
              'transition-all relative mx-auto rounded-md overflow-hidden bg-gray-300',
              {
                'aspect-video w-[80%]': !isMobile,
                'aspect-[260/490] w-[360px]': isMobile,
              },
            )}
          >
            <iframe
              key={iframeKey}
              title="Embedded Content"
              src="http://localhost:3002/asep"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemePage

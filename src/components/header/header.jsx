
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { FaBarsStaggered, FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { CloseButton, Stack } from '@chakra-ui/react'
import logo from "/src/assets/logoma.png";


export default function Header({ light }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='pt-10'>
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 lg:px-52" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto" src={logo} alt="Logo ma"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBarsStaggered className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#projects"
            style={{color: light ? "black" : "white"}}
            className="text-sm font-sans font-semibold"
            >
            Projetos
          </a>

          <a href="#carrer"
            style={{color: light ? "black" : "white"}}
            className="text-sm font-sans font-semibold"
            >
            Carreira
          </a>                

          <a href="#skills"
            style={{color: light ? "black" : "white"}}
            className="text-sm font-sans font-semibold"
            >
            Habilidades
          </a>

          <a href="#talkMe"
            style={{color: light ? "black" : "white"}}
            className="text-sm font-sans font-semibold"
          >
            Fale <span style={{color: "rgb(188, 17, 17)"}}>comigo</span>
          </a>
      
        <FaLightbulb 
          fontSize={"20px"}
          // onClick={setLightState}
          style={{display: light ? "block" : "none", cursor: "pointer"}}

        />

        <FaRegLightbulb 
          fontSize={"20px"} 
          // onClick={setLightState}
          style={{display: light ? "none" : "block", cursor: "pointer", color: "white"}}
        />
          
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className=" fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Stack direction='row' spacing={6}>
                <CloseButton size='md' />
              </Stack>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col gap-5 space-y-2 py-6">
                <a
                  href="#projects"
                  style={{color: light ? "black" : "white"}}
                  
                >
                  Projetos
                </a>
                <a
                  href="#projects"
                  style={{color: light ? "black" : "white"}}
                  
                >
                  Carreira
                </a>
                <a
                  href="#projects"
                  style={{color: light ? "black" : "white"}}
                  
                >
                  Habilidades
                </a>
                <a
                  href="#projects"
                  style={{color: light ? "black" : "white"}}
                  
                >
                  Fale <span style={{color: "rgb(188, 17, 17)"}}>comigo</span>
                </a>

      
                <FaLightbulb 
                  fontSize={"20px"}
                  // onClick={setLightState}
                  style={{display: light ? "block" : "none", cursor: "pointer"}}

                />

                <FaRegLightbulb 
                  fontSize={"20px"} 
                  // onClick={setLightState}
                  style={{display: light ? "none" : "block", cursor: "pointer", color: "white"}}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PiBag } from "react-icons/pi";
import logo from "../assets/logo-transparent-bg-30x50.png";
import NavbarProps from "../interfaces/NavbarProps.interface";
import { useState } from "react";
import CartModal from "../modals/CartModal"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Add Sock", href: "/add-sock", current: false },
  { name: "Login", href: "/login", current: false },
  { name: "Sign Up", href: "/sign-up", current: false },
];

function classNames(
  ...classes: (string | undefined | null | boolean)[]
): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC<NavbarProps> = ({ index }) => {
  const [open, setOpen] = useState(false);
  
  for (let count = 0; count < navigation.length; count++) {
    navigation[count].current = false;
  }

  navigation[index].current = true;

  return (
    <>
    <Disclosure
      as="nav"
      className="bg-yellow-500 font-poppins  md:h-[6vh] lg:h-[10vh]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-black hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-black text-white"
                            : "text-white hover:bg-yellow-600 transition-all",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="flex gap-2">
                  <button className="block px-3 py-2 text-sm text-black border border-black rounded-lg hover:text-white hover:border-white transition-all"
                  onClick={() => setOpen(true)}>
                      <PiBag />
                    </button>
                    <button className="block px-4 py-2 text-sm text-black border border-black rounded-lg hover:text-white hover:border-white transition-all">
                      Logout
                    </button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-black text-white"
                      : "text-white hover:bg-yellow-600 hover:text-white transition-all",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
    
    <CartModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;

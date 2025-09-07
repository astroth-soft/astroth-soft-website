// "use client";

// import * as Dialog from "@radix-ui/react-dialog";
// import { AnimatePresence, motion } from "motion";
// import { X,Menu } from "lucide-react";
// import { useState } from "react";


// interface LinkItem {
//   href: string;
//   text: string;
// }

// interface DropDownHeaderProps {
//   links: LinkItem[];
// }
// export default function Header_DropDown({ links }: DropDownHeaderProps) {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="position-fixed flex justify-between w-full z-9999 py-2 m-0 backdrop-blur-[2px]">
//       <a href="/" className="ml-4">
//         <img src="/assets/astroth_logo.png" className="block md:hidden p-2 w-8 hover:opacity-80" />
//         <img src="/assets/astroth_horizontal.png" className="hidden md:block p-2 w-30 hover:opacity-80" />
//       </a>
//       <Dialog.Root open={open} onOpenChange={setOpen}>
//         <Dialog.Trigger asChild>
//           <button className="absolute right-2 px-4 py-1 bg-transparent text-white rounded-lg z-50 border-0" onClick={() => setOpen(!open)}>
//             <AnimatePresence mode="wait">
//               {open ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                 >
//                   <X size={28}/>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                 >
//                   <Menu size={28} />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </button>
//         </Dialog.Trigger>

//         <Dialog.Portal>
//           <Dialog.Overlay className="fixed inset-0 bg-black/50" />

//           <Dialog.Content asChild>
//             <motion.div
//               initial={{ y: "-100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="fixed top-10 left-0 w-full h-full flex flex-col p-6 z-40 backdrop-blur-[10px]"
//             >
//               <nav className="mt-8 flex flex-col gap-6 text-lg text-white ">
//                 {links.map((link) => (
//                   <a
//                     key={link.href}
//                     href={link.href}
//                     className="hover:underline text-center text-white"
//                   >
//                     {link.text}
//                   </a>
//                 ))}
//               </nav>
//             </motion.div>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>
//     </header>
//   );
// }

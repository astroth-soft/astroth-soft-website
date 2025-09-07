"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Header_DropDown() {
  return (
    <h1>Header_DropDown</h1>
    //  <Dialog.Root>
    //   <Dialog.Trigger asChild>
    //     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
    //       メニューを開く
    //     </button>
    //   </Dialog.Trigger>

    //   <Dialog.Portal>
    //     <Dialog.Overlay className="fixed inset-0 bg-white/50" />
    //     <Dialog.Content className="fixed top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6">
    //       <div className="flex justify-between items-center mb-4">
    //         <h2 className="text-lg font-bold">Radix UI 確認</h2>
    //         <Dialog.Close asChild>
    //           <button className="text-gray-600 hover:text-black">
    //             <X size={24} />
    //           </button>
    //         </Dialog.Close>
    //       </div>

    //       <p className="text-gray-700">これは Radix UI の動作確認です。</p>
    //     </Dialog.Content>
    //   </Dialog.Portal>
    // </Dialog.Root>
  );
}

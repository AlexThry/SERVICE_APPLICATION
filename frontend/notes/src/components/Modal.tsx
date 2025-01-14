import { ReactNode } from 'react';

interface ModalProps {
    setIsModalOpen: (isOpen: boolean) => void;
    content: ReactNode;
}

function Modal({ setIsModalOpen, content }: ModalProps) {
    return (
        <>
            <div
                onClick={() => setIsModalOpen(false)}
                className="h-screen w-screen absolute top-0 left-0 bg-slate-500 opacity-65 z-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-white rounded-lg shadow-sm items-center justify-center z-40">
                <div onClick={() => setIsModalOpen(false)} className="absolute z-50 top-2 right-2 cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className="h-full w-full p-4">{content}</div>
            </div>
        </>
    );
}

export default Modal;

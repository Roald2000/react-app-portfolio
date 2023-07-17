
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const modalController = (id, isOpen = false) => {
    const modal = document.getElementById(id);

    switch (isOpen) {
        case true:
            modal.showModal();
            break;
        case false:
            modal.close();
            break;
    }

    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });

}

export default function AppModal({ id, title = "Modal", className, children }) {
    return <dialog className={className + " relative z-50"} id={id} key={id}>
        <div className='relative p-2'>
            <h1 className='text-xl'>{title}</h1>
            <button type="button" className="absolute top-0 right-0 rounded-full hover:bg-red-600 hover:text-white text-red-600" onClick={() => modalController(id, false)}>
                <AiOutlineCloseCircle className="" size={32} />
            </button>
        </div>
        <div className='p-2'>
            {children}
        </div>
    </dialog>
}
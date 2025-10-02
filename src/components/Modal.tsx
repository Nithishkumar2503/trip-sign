import { AiOutlineClose } from "react-icons/ai";

interface ParamsProps {
  child?: HTMLElement|any;
  isOpen?: boolean;
  onDispatch: ()=>void|null|HTMLElement;
}
export default function Modal({ isOpen=true, child, onDispatch }: ParamsProps) {
  function onClose() {
    if (typeof onDispatch == "function") onDispatch();
  }
  return (
    <div className="relative">
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => onClose()}
        ></div>
      )}

      {/* Modal */}
      <div
        className={`fixed  mx-auto h-full w-[60vw] rounded-lg  bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 ">
          <button
            onClick={() =>
                
              typeof onDispatch == "function" ? onDispatch(false) : null
            }
          >
            <AiOutlineClose className="h-6 w-6 text-gray-700 cursor-pointer" />
          </button>
        </div>

        {/* Main content*/}
        {typeof child !== "undefined" ? child : null}
      </div>
    </div>
  );
}

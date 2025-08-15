import { useEffect } from "react";
import DevContact from "../../components/developerContact";
import { useModal } from "../../store/modelContext";
import { IoClose } from "react-icons/io5";


const DevloperModal = () => {
  const { isModalOpen, closeModal } = useModal();
  useEffect(() => {
    console.log("is model open value ", isModalOpen);
  }, [isModalOpen]);
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-slate-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Your form component goes here */}
              <DevContact />

              <div
                className="absolute top-2 right-3 px-1 py-1 drop-shadow-lg cursor-pointer "
                onClick={closeModal}
              >
                <IoClose/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevloperModal;

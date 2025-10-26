import FormNewProject from "./FormNewProject";
import {useEffect, useRef} from "react";

const ModalSubscribe = ({ isOpen, onClose}) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if(popupRef.current && popupRef.current.contains(target)) return;
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

return(
    <div className="section-modal-subscribe">
      <div className="section-modal-subscribe__content">
          <div ref={popupRef}>
              <FormNewProject/>
          </div>

      </div>
    </div>
)

}
export default ModalSubscribe;

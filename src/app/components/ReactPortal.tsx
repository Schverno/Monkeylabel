import { createPortal } from 'react-dom';
import { useState, useLayoutEffect } from 'react';



const createWrapperAndAppendToBody = (wrapperId : string) => {
    if (!document) return null;
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}


function ReactPortal({ children, wrapperId} : {children:React.ReactElement; wrapperId: string}) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        //crear y añadir al body si no existe wrapperID
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element!);

        return () => {
            if (systemCreated && element?.parentNode) {
              element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId]);

    // wrapperElement va a ser null en el primer render
    if (!wrapperElement) return null;

    return createPortal(children, wrapperElement);
}

export default ReactPortal;
import React, { useRef } from "react";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";


export default function PDFViewer({ pdfUrl }) {
    const pdfContainerRef = useRef(null);

    const isValidPdf = (url) => {
        // Basic check to verify if the URL ends with .pdf
        return url && typeof url === "string" && url.trim().endsWith(".pdf");
    };


    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsFullscreen(false);
        } else {
            pdfContainerRef.current.requestFullscreen();
            setIsFullscreen(true);
        }
    };

    return (
        <div className="w-full h-full">
            {!isValidPdf(pdfUrl) ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <p className="text-lg text-red-500 font-bold">
                        Unable to load PDF. Please fill the enquiry form or contact through WhatsApp | Email.
                    </p>
                </div>) : (
                <div
                    ref={pdfContainerRef}
                    className="pdf-container"
                    style={{
                        height: "600px",
                        width: "100%",
                        border: "1px solid #ddd",
                        position: "relative",
                    }}
                >
                    <embed
                        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    />
                    {/* Button for fullscreen */}
                    <button
                        onClick={toggleFullscreen}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            zIndex: 1000,
                        }}
                    >

                        {isFullscreen ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
                    </button>
                </div>)}
        </div>
    );
};



// import React from "react";

// function PDFViewer({ pdfUrl }) {
//     const isValidPdf = (url) => {
//         // Basic check to verify if the URL ends with .pdf
//         return url && typeof url === "string" && url.trim().endsWith(".pdf");
//     };

//     return (
//         <div className="w-full h-[500px] border rounded shadow">
//             {!isValidPdf(pdfUrl) ? (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                     <p className="text-lg text-red-500 font-bold">
//                         Unable to load PDF. Please ensure the file is a valid PDF.
//                     </p>
//                 </div>
//             ) : (
//                 <iframe
//                     src={pdfUrl}
//                     title="PDF Viewer"
//                     className="w-full h-full"
//                     frameBorder="0"
//                 ></iframe>
//             )}
//         </div>
//     );
// }

// export default PDFViewer;

import { Modal } from "flowbite-react/lib/esm/components";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { movie } from "../../interface";

interface Props {
    movie: movie;
}

const TrailerModal: React.FC<Props> = ({ movie }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium text-sm px-3 py-1.5 ml-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                Trailer
            </button>
            <Modal onClose={() => setOpen(false)} show={isOpen}>
                <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
                    <strong>Trailer</strong>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex justify-center">
                        <ReactPlayer url={movie.trailer_url} controls={true} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TrailerModal;

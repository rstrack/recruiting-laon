"use client";

import Link from "next/link";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "@/models/Movie";

import "./styles.css";
import Image from "next/image";

type SliderProps = {
    title: string
    items: Array<Movie>
    imgWidth: number
}

const Slider = ({ title, items, imgWidth }: SliderProps) => {
    const slideLeft = () => {
        const slider = document.getElementById("slider");
        if (slider) slider.scrollLeft = slider.scrollLeft - (imgWidth + 24);
    };

    const slideRight = () => {
        const slider = document.getElementById("slider");
        if (slider) slider.scrollLeft = slider.scrollLeft + imgWidth + 24;
    };

    return (
        <>
            <div className="col-12 mb-3 d-flex justify-content-between align-items-center">
                <span className="text-tertiary text-spacing-10">{title}</span>
                <div className="d-flex flex-row gap-2">
                    <button
                        type="button"
                        className="rounded-circle bg-primary border-0 control-button"
                        onClick={slideLeft}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        type="button"
                        className="rounded-circle bg-primary border-0 control-button"
                        onClick={slideRight}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div className="slider p-1" id="slider">
                {items.map((item, i) => (
                    <div key={i} className="slider-item">
                        <Link href={`/movies/${item.id}`} className="link">
                            { }
                            <Image
                                src={item.poster_url}
                                width={imgWidth}
                                height={imgWidth*1.5}
                                alt={item.title + " poster"}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Slider;
import React from "react";

type InfoProps = {
    title: string;
    content1: string;
    content2: string;
    imgSource: string;
};

export const BlogPost: React.FC<InfoProps> = ({
    title,
    content1,
    content2,
    imgSource,
}: InfoProps) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{content1}</p>
            <p>{content2}</p>
            <img src={imgSource} alt="" />
        </>
    );
};



export type Props = {
    isOpen:boolean;
    toggle:()=>void;
};

export type PageProp = {
    id?: "about" | "discover" | "services" | "signup",
    lightbg?:"true",
    // lighttext?:"true" | undefined,
    topline?:string,
    headline?:string,
    description?:string,
    buttonlabel?:string,
    imgstart?:"true",
    img?:string,
    alt?:string,
    dark?:"true" | undefined,
    primary?:"true",
    darktext?:"true",
    fontbig?:"true",
    big?:"true",

}
"use client";

interface MenuItemProps{
    onClick:()=>void;
    label:string;
}

const MenuItem:React.FC<MenuItemProps>=({
    onClick,
    label
})=>{
    return(
        <div
            onClick={onClick}
            className="
                px-6
                py-2
                text-xl
                rounded-md
                hover:text-[#00F6BC]
                transition
                duration-300
                cursor-pointer
            "
        >
            {label}
        </div>
    )
}

export default MenuItem;
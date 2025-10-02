import {type ReactNode } from "react";

type PrimaryButtonProps = {
    title: string;
    isSelected: boolean;
    icon?: ReactNode;      // allow string, JSX, or an icon component
    url?: string;
};


const PrimaryButton = ({title, isSelected, icon, url}: PrimaryButtonProps) => {
    // UI
    return (
        <div className="flex gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
            {
                url ? (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={url}
                        className='border border-primary text-white px-4 py-2 font-mono text-sm transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:bg-primary/20'
                    >
                        {title}
                        <span className="text-white">{icon}</span>
                    </a>
                ) : (
                    <button title={title} value={title} className={`border border-primary text-white px-4 py-2 font-mono text-sm transition-all duration-200 cursor-pointer inline-flex items-center gap-2 ${isSelected ? 'bg-primary/20 hover:bg-primary/30' : 'hover:bg-primary/20'}`}>{title}</button>
                )
            }
        </div>
    )

}

export default PrimaryButton;
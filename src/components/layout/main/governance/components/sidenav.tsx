import { useState } from "react";

function SideNav({ onSelect }: { onSelect: (item: string) => void }) {
    const menuItems = ["Director", "Advisor", "Faculty", "Staff"];
    const [activeItem, setActiveItem] = useState("Director"); 

    const handleSelect = (item: string) => {
        setActiveItem(item); 
        onSelect(item);
    };

    return (
        <div className="w-[250px] bg-white text-black p-4">
            <h2 className="text-xl font-semibold text-center pb-4 border-b border-gray-300">
                Our People
            </h2>
            <ul className="space-y-2">
                {menuItems.map((item) => (
                    <li key={item}>
                        <button
                            className={`w-full py-2 px-4 text-left rounded-md transition ${
                                activeItem === item ? "bg-gray-300 text-orange-500" : "hover:bg-gray-300"
                            }`}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideNav;

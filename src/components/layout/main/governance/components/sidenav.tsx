import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function SideNav({ onSelect }: { onSelect: (item: string) => void }) {
    const menuItems = ["Director", "Advisor", "Faculty"];
    const [activeItem, setActiveItem] = useState("Director");
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (item: string) => {
        setActiveItem(item);
        onSelect(item);
        setIsOpen(false);
    };

    return (
        <div className="lg:w-[250px] border border-red-700 w-full">

            <div className="lg:hidden px-4 border border-gray-900 text-black flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold">Our People</span>
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>

            <div className={`bg-white rounded-2xl text-black p-4 ${isOpen ? "block" : "hidden"} lg:block`}>
                <h2 className="text-xl font-semibold text-center pb-4 border-b border-gray-300 lg:block hidden">
                    Our People
                </h2>
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <button
                                className={`w-full py-2 px-4 text-left rounded-md transition ${activeItem === item ? "bg-gray-300 text-orange-500" : "hover:bg-gray-300"
                                    }`}
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideNav;

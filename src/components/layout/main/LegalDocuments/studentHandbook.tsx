import Link from "next/link";

function Policies() {
    const items : string[]=[
        "Privacy Policies",
        "Technological Policies",
        "Academic Integrity policies", 
        "Student Handbook", 
        "Terms and Conditions"
    ];

    return (
            <div> 
                <h1 className="text-6xl font-semibold text-center">Policies and Procedures</h1>

                <aside className = "fixed left-0 z-40 w-auto h-screen">
                    <div className="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <h2 className="text-2xl text-center text-white">Policies</h2>
                        <ul className="space-y-2 font-medium">
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href="#" 
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <span className="ms-3">{item}</span>
                                </Link>
                            </li>
                        ))}
                            </ul>
                    </div>
                    </aside>
                    <div>
                        
                    </div>
            </div>
         )
}

export default Policies;

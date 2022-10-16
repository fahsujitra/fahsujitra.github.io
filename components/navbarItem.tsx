
export default function NavbarItem({ text, children }: { text: string, children: React.ReactNode }) {
    return (
        <div className="text-xl px-8 py-2 mb-4 flex flex-row items-center cursor-pointer hover:bg-gray-100">
            <div className="lg:hidden -ml-2">{children}</div>
            <div className="sm:hidden lg:block">{children}</div>
            <div className="sm:hidden lg:block pl-2">{text}</div>
        </div>
    );
}
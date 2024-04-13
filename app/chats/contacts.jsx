export default function Contacts({ name, imgURL }) {
    return (
        <div className="flex pb-3 w-80 rounded-xl">
            <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                    <img className="w-12 rounded-full" src={imgURL} />
                </div>
            </div>
            <div className="pt-2 pl-2 text-lg font-medium">
                {name}
            </div>
        </div>
    )
}
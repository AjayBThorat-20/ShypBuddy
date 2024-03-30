import Image from 'next/image'

const items = [
    {
        name: "Select Assembly"
    },
    {
        name: "Last week"
    },
    {
        name: "Last 6 Moths"
    },
];



export default function Dropdownbtn() {
    return (

        <div className=" justify-center float-right mr-5">
            <select className="md:w-full">
                {items.map(item => (
                    <option value="#">{item.name}</option>
                ))}




            </select>
        </div>



    )
}












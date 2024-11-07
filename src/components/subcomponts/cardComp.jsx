import { FaArrowRightLong } from "react-icons/fa6";
import dp from '../../assets/Images/dp2.jpg'

function CardComp(props) {
    return (
        <div className="bg-gray-200 max-w-sm rounded-xl overflow-hidden mx-5 mb-5 shadow-lg">

            <div>
                <img src={props.card_Image} alt="Card_Image" />
            </div>

            <div className='p-5'>

                <h1 className="text-2xl font-semibold tracking-tight mb-1">{props.card_Title}</h1>

                <p className="mb-2 text-gray-800">{props.card_Content}</p>

                <a className="" target="__blank" href={props.card_Link}>
                    <button className='border border-black bg-cyan-600 text-white hover:bg-cyan-800 px-5 py-1 rounded-lg flex items-center font-bold'>
                        Read more&nbsp;<FaArrowRightLong />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default CardComp
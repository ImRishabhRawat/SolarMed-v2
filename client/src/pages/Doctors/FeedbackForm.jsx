import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [reviewText, setReviewText] = useState("")
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    const handleSubmitReview = async (e) => { 
        e.preventDefault();
        setLoading(true)
        try {
            if (!rating || !reviewText) {
                setLoading(false)
                return toast.error("Please fill the input fields");
            }

            const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({rating, reviewText})
            })

            const result = await res.json()

            // if (result.status === 'error') {
             if(!res.ok) {
                throw new Error(result.message)
            }
            setLoading(false)
            toast.success(result.message)
        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error(error.message)
        }
    }

    return <form action="">
        <div>
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                How would you rate overall experience?*
            </h3>
            <div className="">
                {[...Array(5).keys()].map((_, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={`${index <= ((rating && hover) || hover)
                                ? "text-yellowColor"
                                : "text-gray-400"}
                                bg-transparent border-none outline-none text-[25px] cursor-pointer
                                `}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            onDoubleClick={() => {
                                setRating(0);
                                setHover(0);
                            }}
                            
                        >
                            <span>
                                <AiFillStar/>
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
        
        <div className="mt-[30px] ">
                        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                Share your feedback and suggestions*
            </h3>

            <textarea name="" id="" rows="5" placeholder='Write your message' className="border border-solid border-[#0065ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
                onChange={e=>setReviewText(e.target.value)}
            ></textarea>
        </div>
        <button className="btn" type='submit' onClick={handleSubmitReview}>
            {loading ? <HashLoader size={25}/>:'Submit Feedback'}
        </button>
  </form>
}

export default FeedbackForm

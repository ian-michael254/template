import { useState } from "react";
import { toast } from "react-toastify";


const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a46ba37e-b5ba-4b7d-8d03-2f5b614e34bd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
     
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Talk <span className='underline underline-offset-4 decoration-1 under font-light'>with us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a move? Let's build your future together</p>

        {/* Contact Form */}
        <form onSubmit={onSubmit} action="" className="max-w-2xl mx-auto text-gray-600 pt-8">
            <div className="flex flex-wrap gap-4">
                <div classsName='w-full md:w-1/2 text-left '>
                    Your Name
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" id="Name" placeholder="your name" required />
                </div>
                 <div classsName='w-full md:w-1/2 text-left md:pl-4 '>
                    Your Email
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" id="Email" placeholder="abc@email.com" required />
                </div>
            </div>
            <div className="my-6 text-left">
                Message
                <textarea className="w-full border border-gray-500 rounded py-3 px-4 mt-2 h-28 resize-none" name="Message"placeholder="Message" required></textarea>
            </div>
            <button className='bg-amber-400 text-slate-800 cursor-pointer py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
        </form>
        
    </div>
  )
}

export default Contact
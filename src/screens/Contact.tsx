import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { SocialLinks } from "../components/SocialLinks"

type FormInputs = {
    subject: string,
    email: string,
    message: string
}

export const Contact = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            'service_vzkv10q',
            'template_meuutwg',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            'ywecBA1skejnpCUVK'
        )
    }

    return (
        <main>
            <h3 className="font-extrabold text-3xl mb-4 text-[blue]">Contact</h3>

            <p className="text-[white]">EMAIL: schoolife.sup@gmail.com</p>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label className='block text-[white]' htmlFor="subject">Sujet du mail :</label>
                    <input {...register("subject")} className='border' name='subject' id='subject' type='text' placeholder="Quel est le sujet ?"/>
                </div>
            
                <div className="mb-2">
                    <label className='block text-[white]' htmlFor="email">Email :</label>
                    <input {...register("email", {required: true})} className='border' name='email' id='email' type='text' placeholder="Saisissez votre Email"/>

                    {errors.email && <p className="text-[red]">Email requis</p>}

                </div>
                <div>
                    <label className='block text-[white]' htmlFor="message">Message :</label>
                    <textarea {...register("message")} rows={10} className='border resize-none' name='message' id='message' placeholder="Votre message"/>  
                </div>

                <input type="submit" className="block bg-[gray] py-3 px-3 text-[white] hover:bg-[purple]"/>
            </form>
            <SocialLinks/>
        </main>
    )
}
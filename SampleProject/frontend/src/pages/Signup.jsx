import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Signup = () => {
    const schema = z.object({
        name: z.string().min(1, "Name is required").max(40, "Name cannot exceed 40 characters"),
        email: z.string().email("Invalid email format"),
        phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number cannot exceed 15 digits"),
        password: z.string().min(6, "Password must be at least 6 characters")
    });

    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col border-2 w-80 h-fit px-8 py-10 bg-blue-600 border-blue-300 rounded-2xl'>
                <h1 className='text-4xl text-center m-0 font-serif'>Register</h1>
                <label htmlFor="name"></label>
                <input type="text" placeholder='Name' {...register('name')} className='h-10 my-4 border-2 rounded-full bg-blue-200 placeholder: px-2 ' />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                <label htmlFor="email"></label>
                <input type="email" placeholder='Email' {...register('email')} className='h-10 my-4 border-2 rounded-full bg-blue-200 placeholder: px-2 ' />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                <label htmlFor="phone"></label>
                <input type="text" placeholder='Phone' {...register('phone')} className='h-10 my-4 border-2 rounded-full bg-blue-200 placeholder: px-2 ' />
                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                <label htmlFor="password"></label>
                <input type="password" placeholder='Password' {...register('password')} className='h-10 my-4 border-2 rounded-full bg-blue-200 placeholder: px-2 ' />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                <button type="submit" className='border bg-blue-400 w-fit h-fit px-8 py-1 rounded-full m-auto '>Signup</button>
            </form>
        </div>
    );
};

export default Signup;

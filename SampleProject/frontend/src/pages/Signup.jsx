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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <label htmlFor="name">Name</label>
                <input type="text" {...register('name')} />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                <label htmlFor="email">Email</label>
                <input type="email" {...register('email')} />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                <label htmlFor="phone">Phone</label>
                <input type="text" {...register('phone')} />
                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                <label htmlFor="password">Password</label>
                <input type="password" {...register('password')} />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;

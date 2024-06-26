
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData) =>{
    "use server"
    const {username , email , password , phone , address , isAdmin , isActive} = Object.fromEntries(formData);
    console.log(Object);
    try {
        connectToDB();
        const newUser = new User(
            {
                username,
                email,
                password,
                phone,
                address,
                isAdmin,
                isActive,
    });
    await newUser.save();
    } catch (error) {
        throw new Error(error);
    }
    revalidatePath("/dashboard/users");
} 
import connectDB from "@/utils/dbConnect"
import usermodel from "@/models/user"
import bcrypt   from "bcryptjs"

export const POST = async (req)=> {
    // take incoming dat
    const { email, password } = await req.json()

    //    call my my datbase connection

    try {

        await connectDB()
        // check if user already exists
        const userExists = await usermodel.findOne({ email: email })
        if (userExists) {
            return Response.json({ msg: "user alredy exists" }, { status: 400 })

        }

        // if no user is found, continue registeration

        // before storing the user's password, we need to hash
        const salt=bcrypt.genSaltSync(16)
        const hashedPassword=bcrypt.hashSync(password,salt)

        const user = new usermodel({ email: email, password: hashedPassword })
        await user.save()
        if (!user) {
            return Response.json({ msg: "problem ocuured registering user" }, { status: 400 })

        }
        return Response.json({ msg: "user registeed successfully" }, { status: 200 })

    }

    catch (err) {
        console.log("error occured", err.message)
        return Response.json({ msg: "Server Error" }, { status: 500 })

    }
}
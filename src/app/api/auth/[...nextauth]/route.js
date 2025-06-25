import usermodel from "@/models/user";
import connectDB from "@/utils/dbConnect";
import bcrypt from "bcryptjs"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            // credentials={
            //     email:"",
            //     password:""
            // }

            async authorize(credentials) {
                try {
                    // call database connections
                    await connectDB()
                    const user = await usermodel.findOne({email:credentials.email})
                    if(!user){
                        throw new Error("Invalid credentials")
                    }
                    // if a user is found with that email, check for the password
                    // now, remember, our password is hashed

                    const passwordTrue=bcrypt.compareSync(credentials.password,user.password)
                    if(!passwordTrue) throw new Error("invalid credentials")

                    return user
                }

                catch (err) {
                    console.log(err.message)
                    throw new Error("Something went wrong")
                }

            }
        })
    ],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.email=user.email,
                token.id=user.id
            }
            console.log("thi is the jwt token:" , token)
            return token
        },

        async session(session,token){
            if(token){
                 
                session.user.id=token.id ,
                session.user.email=token.email
                
            }
            console.log("this is the session", session)
            return session
        }
    }

}

const handler=NextAuth(authOptions)
export {handler as GET, handler as POST}
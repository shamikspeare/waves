import { connectToDatabase } from "@/lib/db";
import { error } from "console";
import { models } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request : NextRequest){
    try{
        const {email, password} = await request.json()

        if(!email||!password){
            return NextResponse.json(
                {error: "email and password required"},
                {status:400}
            )
        }

        await connectToDatabase();

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already registered" },
                { status: 400 }
            );
        }

        User.create({
            email,
            password
        })

        return NextResponse.json(
            {message:"user registered successfully"},
            {status: 400}
        );
        
    } catch(error){
        console.log("failed to register")
        return NextResponse.json(
            {error: "failed to register"},
            {status: 400}
        )
    }
    
}
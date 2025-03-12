import { NextRequest, NextResponse } from "next/server"; 
// import { cookies } from 'next/headers'
// export const dynamic = 'force-dynamic';
// import z from "zod";
import { createUserSchema, updateUserSchema } from "@/server/db/validate-schema";
// const inputSchema = z.object({
//   name: z.string().max(10).min(3),
//   email: z.string().email(),
// })

export function GET(request: NextRequest) {
  // console.log("------>");
  // console.log(cookies().get('a'));

  const query = request.nextUrl.searchParams;
  // const name = query.get('name');
  const email = query.get('email');

  const result = updateUserSchema.safeParse({
    // name, 
    email
  });
  // console.log(createUserSchema.shape);

  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    console.error(result.error);
    return NextResponse.json({error: result.error.message});
  }
}


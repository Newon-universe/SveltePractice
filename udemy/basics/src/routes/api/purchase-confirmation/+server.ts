import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const requestBody = await request.json();
    
    console.log(requestBody);

    // Business logic -> we'll send out an email to the customer
    // sending them the bought ebook.

    return json({message: "All good."});
}
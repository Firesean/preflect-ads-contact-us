import { redirect } from "@sveltejs/kit";

export function load(){
    throw redirect(303, "https://flame-dev.com/");
}
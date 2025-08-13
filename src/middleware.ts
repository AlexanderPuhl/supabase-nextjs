import { getSupabaseReqResClient } from "@/supabase-utils/reqResClient";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const { supabase, response } = getSupabaseReqResClient({ request });
	return response.value;
}

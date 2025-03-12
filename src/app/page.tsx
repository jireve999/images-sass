'use client';
import { useEffect } from "react";
import { trpcClient } from "@/utils/api";
export default function Home() {
    useEffect(() => {
        trpcClient.hello.query();
    }, []);
    return <div>Root Page</div>;
}


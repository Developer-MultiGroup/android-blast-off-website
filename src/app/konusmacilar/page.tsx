"use client"

import FloatingActionButton from "@/components/floating-action-button";
import Speakers from "@/components/speakers";
import events from "@/data/events";

export default function SpeakerPage() {
    return (
        <div className="flex flex-col justify-center items-center align-middle min-h-screen py-[25vh] font-montserrat-mid">
            <Speakers speakers={events[0].speakers} />
            <FloatingActionButton alwaysShow />
        </div>
    )
}
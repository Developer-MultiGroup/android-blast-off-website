"use client"

import FloatingActionButton from "@/components/floating-action-button";
import SessionContainer from "@/components/session-container";
import events from "@/data/events";

export default function SchedulePage() {
    return (
        <div className="flex flex-col justify-center items-center align-middle min-h-screen pt-[25vh] font-montserrat-mid" >
            <SessionContainer event={events[0]}  />
            <FloatingActionButton alwaysShow />
        </div>
    )
}
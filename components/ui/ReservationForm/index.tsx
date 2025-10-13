"use client";

import Form from "next/form";
import React from "react";

import ConsentField from "./ConsentField";
import DateField from "./DateField";
import GuestsField from "./GuestsField";
import NameField from "./NameField";
import PhoneField from "./PhoneField";
import TimeField from "./TimeField";

export default function ReservationForm() {
    const today = new Date().toISOString().split("T")[0];

    return (
        <Form action="/api/reservations" className="space-y-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <GuestsField />
                <DateField minDate={today} />
                <TimeField />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <NameField />
                <PhoneField />
            </div>

            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <ConsentField />
                <button type="submit" className="btn btn-primary">
                    Забронировать
                </button>
            </div>
        </Form>
    );
}

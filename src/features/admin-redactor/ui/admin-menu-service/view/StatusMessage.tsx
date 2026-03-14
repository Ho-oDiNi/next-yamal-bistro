"use client";

interface StatusMessageProps {
    message?: string;
    success?: boolean;
}

const StatusMessage = ({ message, success }: StatusMessageProps) => {
    if (!message) {
        return null;
    }

    return (
        <div
            className={`rounded border p-3 text-sm ${
                success === false
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-green-200 bg-green-50 text-green-700"
            }`}
        >
            {message}
        </div>
    );
};

export default StatusMessage;

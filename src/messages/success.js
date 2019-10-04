import React from 'react';

export const SuccessMessage = (message) => {
    return (
        <div class="alert alert-success" role="alert">
            <strong>Well done!</strong> {message.message}
        </div>
    );
}
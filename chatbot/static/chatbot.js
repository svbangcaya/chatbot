function sendMessage() {
    var input = document.getElementById('user-input');
    var message = input.value.trim();
    if (message) {
        $.ajax({
            url: '/send_message',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({message: message}),
            success: function(data) {
                var chatBox = document.getElementById('chat-box');
                chatBox.innerHTML += '<div class="user-message">' + message + '</div>';
                chatBox.innerHTML += '<div class="bot-response">' + data.response + '</div>';
                chatBox.scrollTop = chatBox.scrollHeight;  // Keeps the newest messages visible
                input.value = ''; // Clear input after sending
            }
        });
    }
}

// Lớp trừu tượng Message
abstract class Message {
    protected sender: string;
    protected recipient: string;
    protected content: string;

    constructor(sender: string, recipient: string, content: string) {
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
    }

    abstract send(): void;
}

// Lớp EmailMessage kế thừa từ Message
class EmailMessage extends Message {
    private subject: string;

    constructor(sender: string, recipient: string, content: string, subject: string) {
        super(sender, recipient, content);
        this.subject = subject;
    }

    send(): void {
        console.log(`Gửi email từ ${this.sender} đến ${this.recipient}`);
        console.log(`Chủ đề: ${this.subject}`);
        console.log(`Nội dung: ${this.content}`);
    }
}

// Lớp SMSMessage kế thừa từ Message
class SMSMessage extends Message {
    private phoneNumber: string;

    constructor(sender: string, recipient: string, content: string, phoneNumber: string) {
        super(sender, recipient, content);
        this.phoneNumber = phoneNumber;
    }

    send(): void {
        console.log(`Gửi SMS từ ${this.sender} đến ${this.recipient}`);
        console.log(`Số điện thoại: ${this.phoneNumber}`);
        console.log(`Nội dung: ${this.content}`);
    }
}

// Lớp User để quản lý việc gửi tin nhắn
class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sendMessage(message: Message): void {
        message.send();
    }
}

// Ví dụ sử dụng
const user = new User("Nguyen Van A");

// Gửi email
const email = new EmailMessage(
    "nguyen.van.a@example.com",
    "nguyen.van.b@example.com",
    "Xin chào, đây là email test",
    "Email Test"
);
user.sendMessage(email);

// Gửi SMS
const sms = new SMSMessage(
    "Nguyen Van A",
    "Nguyen Van B",
    "Xin chào, đây là SMS test",
    "0123456789"
);
user.sendMessage(sms);
abstract class Message{
    protected recipient: string;
    protected content: string;

    protected constructor(recipient: string, content: string) {
        this.recipient= recipient;
        this.content= content;
    }

    abstract send():void;
}

class EmailMessage extends Message{

    constructor(recipient: string, content: string) {
        super(recipient, content);
    }

    send():void{
        console.log(`Gửi email đến ${this.recipient}`);
        console.log(`Nội dung: ${this.content}`);
        console.log("-------------------------------")
    }
}

class SMSMessage extends Message{

    constructor(recipient: string, content: string){
        super(recipient, content);
    }

    send():void {
        console.log(`Gửi SMS đến ${this.recipient}`)
        console.log(`Nội dung: ${this.content}`);
        console.log("-------------------------------")
    }
}

class User{
    private name: string;
    private email: string;
    private phone: string;

    constructor(name: string, email: string, phone: string){
        this.name= name;
        this.email= email;
        this.phone= phone;
    }

    sendMessage(message: Message):void{
        console.log(`Người gửi: ${this.name}`)
        console.log(`Email: ${this.email}`)
        console.log(`Số điện thoại: ${this.phone}`)

        message.send()
    }
}

const user1= new User("Thái Việt Hoàn", "hoanyttv@gmail.com", "0842500199");

const emailMessage1= new EmailMessage("nguoinhan1@gmail.com", "hello test email 1")

const smsMessage1= new SMSMessage("0123456789", "hello test SMS 1")

user1.sendMessage(emailMessage1)

user1.sendMessage(smsMessage1)
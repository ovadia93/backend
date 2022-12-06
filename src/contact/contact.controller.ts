import { Body, Controller, Get, Post } from "@nestjs/common";
import { get } from "http";
import { Contact } from "./contact.entity";
import { ContactService } from "./contact.service";

@Controller()
export class ContactController {

    @Get("contact/list")
    getAllContacts() {
        return this.contactService.getAllContacts();
    }

    @Post("contact")
    addContact(@Body() item: Contact) {
        return this.contactService.addContact(item);

        
    }
    
    constructor(private contactService: ContactService) { }
}